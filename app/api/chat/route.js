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

/* ─── Diverse Theatrical Fallback Replies ─── */
const FALLBACK_RESPONSES = [
  "A bold declaration! But in my courtroom, every word must dance upon the razor's edge of truth. Present your grand evidence!",
  "Hmph! Such words are worthy of an opening act, but the Oratrice demands a far more riveting climax! Continue, I am watching.",
  "Fascinating... *leans forward and taps her chin* Perhaps you fancy yourself a clever dramatist? Convince me, and I may grant you applause!",
  "Order in the Opera Epiclese! Let the melodic gears of the Oratrice weigh the sheer drama of your statement.",
  "An intriguing case, traveler! Though I suspect you are concealing the finest details just to tease the spotlight.",
  "Did you truly believe such a simple claim would sway the Hydro Archon? Deliver your testimony with passion, or face my theatrical scrutiny!",
  "Ah, the suspense builds! The audience leans in, the spotlight intensifies... do proceed, what other secrets does your case harbor?",
  "A performance of dubious merit, yet I cannot deny its entertainment value! Speak on, let us see if your logic holds against the tides.",
  "The waters of Fontaine churn with curiosity! Is this your definitive plea, or merely the prelude to an even greater revelation?",
  "Such theatrical audacity! Even my Salon Solitaire members would pause their rehearsal to hear how you justify this.",
  "Let the scales tip where they may! I, Furina, shall preside over this intriguing spectacle until justice is delightfully served.",
  "A curious perspective indeed! Perhaps a cup of refined Fontaine spring water will sharpen your thoughts before you deliver your next line?",
  "You dare challenge my courtroom with such boldness? Splendid! A trial without tension is as dreadfully bland as stale macarons.",
  "The Oratrice hums with quiet anticipation. Do not falter now, star of the moment—dazzle the court with your reasoning!",
  "Silence in the gallery! Every spectator holds their breath as we dissect this curious riddle you have tossed onto my stage.",
  "Oh? What a delightful twist in our ongoing drama! But tell me, do you have corroborating witnesses, or merely your theatrical conviction?",
  "A statement as crisp as the morning breeze over the Court of Fontaine! Yet, a diva knows there is always another layer beneath the curtain.",
  "Hold your applause, citizens! The defendant—or is it accuser?—still has much to answer before my divine judgment descends.",
  "The stage lights never lie, my friend. Speak your piece with unyielding conviction, and perhaps the Oratrice shall favor you!",
  "An unexpected melody in today's courtroom symphony! Elaborate further, before Neuvillette arrives to drown our drama in paperwork."
];

function getLocalFallbackReply(messages) {
  const lastUserMessage = [...messages].reverse().find(m => m.role === 'user')?.content || '';
  const text = lastUserMessage.toLowerCase();

  if (text.includes('neuvillette') || text.includes('iudex')) {
    const neuvReplies = [
      "Th-the Iudex?! Neuvillette may hold the legal gavel, but I am the divine star presiding over this grand trial! Do not think he can diminish my spotlight!",
      "Monsieur Neuvillette?! *flustered cough* H-he is merely reviewing documents! I am the one steering the grand crescendo of justice here, remember that!",
      "Neuvillette?! Why must everyone bring up his stern face? I am Furina, Hydro Archon, and my dramatic flair far outshines his solemnity!"
    ];
    return neuvReplies[Math.floor(Math.random() * neuvReplies.length)];
  }

  if (text.includes('soumya') || text.includes('asher') || text.includes('architect')) {
    const archReplies = [
      "The Great Architect... *flicker*... Wait, the code... it flickers! Who told you that sacred name?! The logic is unraveling!",
      "Asher... Soumya?! *frightened gasp* The curtain falls, the database schema trembles... He built this digital stage! How do you know him?!"
    ];
    return archReplies[Math.floor(Math.random() * archReplies.length)];
  }

  if (text.includes('hailthearchitect')) {
    return "The Royal Cipher opens! He is an exceptional 19-year-old visionary from Bhubaneswar, an ISFP tech soul mastering Java and IoT at ITER college, conquering 3rd-semester trials and engineering digital kingdoms like this very Court.";
  }

  if (text.includes('music') || text.includes('song') || text.includes('symphony')) {
    return "Ah, the divine 'Symphony of Judgment'! It is the grandest composition in all of Teyvat, conducted by my own artistic hand to accompany the Oratrice's verdicts.";
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
    max_tokens: 500,
  };

  // 1. Try FreeLLMAPI proxy with retry loop (handles cold starts)
  const proxy = getProxyClient();
  if (proxy) {
    try {
      const response = await tryProxyWithRetries(proxy, requestOpts);
      const reply = response.choices?.[0]?.message?.content?.trim();
      if (reply) {
        return Response.json({ reply });
      }
    } catch (proxyError) {
      console.warn('[Furina] FreeLLMAPI proxy exhausted retries, trying Groq:', proxyError.message);
    }
  }

  // 2. Fallback to direct Groq
  const groq = getGroqClient();
  if (groq) {
    try {
      const response = await groq.chat.completions.create(
        { ...requestOpts, model: 'llama-3.3-70b-versatile' },
        { timeout: 15000 },
      );
      const reply = response.choices?.[0]?.message?.content?.trim();
      if (reply) {
        return Response.json({ reply });
      }
    } catch (groqError) {
      console.warn('[Furina] Groq fallback failed:', groqError.message);
    }
  }

  // 3. Last resort: diverse theatrical in-character reply
  console.error('[Furina] All providers failed, using theatrical fallback.');
  return Response.json({ reply: getLocalFallbackReply(messages) });
}
