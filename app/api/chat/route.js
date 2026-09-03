import { OpenAI } from 'openai';

/* ─── Defaults & Environment ─── */
const DEFAULT_PROXY_BASE = 'https://my-freellmapi-proxy.onrender.com/v1';
const DEFAULT_PROXY_KEY = 'freellmapi-6c693465337e36eae695139f44da8dec2ae5f10389be9471';

function getEnv(key) {
  return process.env[key];
}

/* ─── Clients (lazy-initialized) ─── */
let proxyClient = null;
let groqClient = null;

function getProxyClient() {
  if (!proxyClient) {
    const key = getEnv('FREELLMAPI_KEY') || DEFAULT_PROXY_KEY;
    const base = getEnv('FREELLMAPI_BASE_URL') || DEFAULT_PROXY_BASE;
    if (!key || !base) return null;
    proxyClient = new OpenAI({ apiKey: key, baseURL: base });
  }
  return proxyClient;
}

function getGroqClient() {
  if (!groqClient) {
    const key = getEnv('GROQ_API_KEY');
    if (!key || !key.startsWith('gsk_')) return null;
    groqClient = new OpenAI({ apiKey: key, baseURL: 'https://api.groq.com/openai/v1' });
  }
  return groqClient;
}

/* ─── Retry Helper ─── */
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Tries the proxy with short timeouts, retrying on connection/timeout errors.
 * This handles Render cold starts — instead of one 90s blocking request,
 * it polls every few seconds until the proxy wakes up.
 */
async function tryProxyWithRetries(proxy, requestOpts, maxAttempts = 8, timeoutMs = 12000, retryDelayMs = 4000) {
  let lastError = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await proxy.chat.completions.create(requestOpts, {
        timeout: timeoutMs,
      });
      return response;
    } catch (err) {
      lastError = err;

      // If it's an auth error or a 4xx client error, don't retry — it won't help
      const status = err?.status || err?.response?.status;
      if (status && status >= 400 && status < 500) {
        throw err;
      }

      // Connection refused, timeout, 502/503 (cold start) — retry
      if (attempt < maxAttempts) {
        console.log(
          `[Furina] Proxy attempt ${attempt}/${maxAttempts} failed (${err.message}), retrying in ${retryDelayMs / 1000}s...`
        );
        await sleep(retryDelayMs);
      }
    }
  }

  throw lastError;
}

/**
 * Executes a completion request and handles mid-sentence truncation
 * caused by token restrictions. If finish_reason === "length", it automatically
 * requests an immediate continuation and joins them.
 */
async function completeWithContinuation(client, requestOpts, isProxy = true) {
  const initialResp = isProxy
    ? await tryProxyWithRetries(client, requestOpts)
    : await client.chat.completions.create(requestOpts, { timeout: 15000 });

  const choice = initialResp.choices?.[0];
  let text = choice?.message?.content?.trim() || '';

  // If generation cut off mid-sentence due to token ceiling, fetch immediate continuation
  if (choice?.finish_reason === 'length' && text) {
    try {
      const continuationResp = await client.chat.completions.create({
        ...requestOpts,
        messages: [
          ...requestOpts.messages,
          { role: 'assistant', content: text },
          { role: 'user', content: 'Continue immediately from your last word. Complete your dramatic thought without repeating words.' },
        ],
        max_tokens: 400,
      }, { timeout: 15000 });

      const contText = continuationResp.choices?.[0]?.message?.content?.trim();
      if (contText) {
        text = text + ' ||| ' + contText;
      }
    } catch (contErr) {
      console.warn('[Furina] Auto-continuation failed, using initial text:', contErr.message);
    }
  }

  return text;
}

/**
 * Splits text into multiple distinct speech bubbles.
 * Supports delimiter "|||", double newlines, or single fallback.
 */
function parseBubbles(rawText) {
  if (!rawText) return [];

  // Check explicit ||| delimiter first
  if (rawText.includes('|||')) {
    const list = rawText
      .split('|||')
      .map((s) => s.trim())
      .filter(Boolean);
    if (list.length > 0) return list;
  }

  // Check double newline separation
  if (rawText.includes('\n\n')) {
    const list = rawText
      .split(/\n\s*\n/)
      .map((s) => s.trim())
      .filter(Boolean);
    if (list.length > 0) return list;
  }

  return [rawText.trim()];
}

/* ─── Multi-Bubble Theatrical Fallback Replies ─── */
const FALLBACK_RESPONSES = [
  "A bold declaration! ||| *leans forward and taps her chin with sparkling curiosity* In my courtroom, every word must dance upon the razor's edge of truth! ||| Present your grand evidence before the Oratrice!",
  "Hmph! Such words are worthy of an opening act, citizen! ||| *tosses her hair dramatically* But the Oratrice and I demand a far more riveting climax! ||| Speak on, the spotlight is yours!",
  "Silence in the Opera Epiclese! ||| Let the melodic gears of the Oratrice weigh the sheer drama of your statement! ||| What further claims do you dare bring to my stage?",
  "An intriguing plea, traveler! ||| *eyes sparkle with theatrical delight* Though I suspect you are concealing the finest details just to tease the spotlight! ||| Unfold the rest of the tale!",
  "Did you truly believe such a simple claim would sway the Hydro Archon? ||| Deliver your testimony with genuine passion! ||| The court awaits your crescendo.",
  "Ah, the suspense builds! The audience leans in, the spotlight intensifies... ||| Do proceed! What other secrets does your case harbor?",
  "A performance of dubious legal merit, yet I cannot deny its entertainment value! ||| Speak on! Let us see if your logic holds against the tides.",
  "The waters of Fontaine churn with curiosity! ||| Is this your definitive plea, or merely the prelude to an even greater revelation?",
  "Such theatrical audacity! ||| Even my Salon Solitaire members would pause their rehearsal to hear how you justify this! ||| Continue, if you dare.",
  "Let the scales tip where they may! ||| I, Furina, shall preside over this intriguing spectacle until justice is delightfully served!"
];

function getLocalFallbackReply(messages) {
  const lastUserMessage = [...messages].reverse().find((m) => m.role === 'user')?.content || '';
  const text = lastUserMessage.toLowerCase();

  if (text.includes('neuvillette') || text.includes('iudex')) {
    const neuvReplies = [
      "Th-the Iudex?! ||| *flustered cough* Neuvillette may hold the legal gavel, but I am the divine star presiding over this grand trial! ||| Do not think he can diminish my spotlight!",
      "Monsieur Neuvillette?! ||| *adjusts her top hat nervously* H-he is merely reviewing documents! ||| I am the one steering the grand crescendo of justice here, remember that!",
      "Neuvillette?! ||| Why must everyone bring up his stern face? ||| I am Furina, Hydro Archon, and my dramatic flair far outshines his solemnity!"
    ];
    return neuvReplies[Math.floor(Math.random() * neuvReplies.length)];
  }

  if (text.includes('soumya') || text.includes('asher') || text.includes('architect')) {
    const archReplies = [
      "The Great Architect... *flicker*... ||| Wait, the code... it flickers! Who told you that sacred name?! ||| The logic is unraveling!",
      "Asher... Soumya?! *frightened gasp* ||| The curtain falls, the database schema trembles... ||| He built this digital stage! How do you know him?!"
    ];
    return archReplies[Math.floor(Math.random() * archReplies.length)];
  }

  if (text.includes('hailthearchitect')) {
    return "The Royal Cipher opens! ||| He is an exceptional 19-year-old visionary from Bhubaneswar, an ISFP tech soul mastering Java and IoT at ITER college! ||| Conquering trials and engineering digital kingdoms like this very Court.";
  }

  if (text.includes('music') || text.includes('song') || text.includes('symphony')) {
    return "Ah, the divine 'Symphony of Judgment'! ||| It is the grandest composition in all of Teyvat, conducted by my own artistic hand to accompany the Oratrice's verdicts.";
  }

  return FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
}

/* ─── Route Handler ─── */
export async function POST(req) {
  const { messages, systemPrompt } = await req.json();

  const chatMessages = [
    { role: 'system', content: systemPrompt },
    ...messages,
  ];

  const requestOpts = {
    model: 'auto',
    messages: chatMessages,
    temperature: 0.95,
    presence_penalty: 0.5,
    frequency_penalty: 0.3,
    max_tokens: 600,
  };

  // 1. Try FreeLLMAPI proxy with continuation support
  const proxy = getProxyClient();
  if (proxy) {
    try {
      const rawText = await completeWithContinuation(proxy, requestOpts, true);
      if (rawText) {
        const bubbles = parseBubbles(rawText);
        return Response.json({ reply: rawText, bubbles });
      }
    } catch (proxyError) {
      console.warn('[Furina] FreeLLMAPI proxy exhausted retries, trying Groq:', proxyError.message);
    }
  }

  // 2. Fallback to direct Groq with continuation support
  const groq = getGroqClient();
  if (groq) {
    try {
      const rawText = await completeWithContinuation(
        groq,
        { ...requestOpts, model: 'llama-3.3-70b-versatile' },
        false
      );
      if (rawText) {
        const bubbles = parseBubbles(rawText);
        return Response.json({ reply: rawText, bubbles });
      }
    } catch (groqError) {
      console.warn('[Furina] Groq fallback failed:', groqError.message);
    }
  }

  // 3. Fallback: diverse theatrical multi-bubble reply
  const fallbackRaw = getLocalFallbackReply(messages);
  const bubbles = parseBubbles(fallbackRaw);
  return Response.json({ reply: fallbackRaw, bubbles });
}
