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
 * Strips formulaic greeting crutches like "Ah, mon cher", "Mon cher visitor,", etc.
 */
function stripRepetitiveOpening(text) {
  if (!text) return text;
  const regex = /^(?:ah,?\s*)?(?:mon\s+cher(?:\s+(?:visitor|spectat(?:eur|rice)|citizen|traveler|friend|accuser))?|ma\s+ch[eè]re|my\s+dear\s+citizen)[,!:—\s]*/i;
  const cleaned = text.replace(regex, '').trim();
  if (!cleaned) return text;
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

/**
 * Strips leaked reasoning tags or chain-of-thought blocks.
 */
function sanitizeContent(rawText) {
  if (!rawText) return '';
  let cleaned = rawText.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();
  if (/^(we need to|we must|the user asks|let's craft)/i.test(cleaned)) {
    const parts = cleaned.split(/\n\s*\n/);
    const nonReasoning = parts.filter((p) => !/^(we need to|we must|the user asks|let's craft)/i.test(p.trim()));
    if (nonReasoning.length > 0) {
      cleaned = nonReasoning.join('\n\n');
    }
  }
  return cleaned.trim();
}

/**
 * Splits text into multiple distinct speech bubbles.
 * Supports delimiter "|||", double newlines, or single fallback.
 */
function parseBubbles(rawText) {
  const sanitized = sanitizeContent(rawText);
  if (!sanitized) return [];

  let list = [];
  if (sanitized.includes('|||')) {
    list = sanitized
      .split('|||')
      .map((s) => s.trim())
      .filter(Boolean);
  } else if (sanitized.includes('\n\n')) {
    list = sanitized
      .split(/\n\s*\n/)
      .map((s) => s.trim())
      .filter(Boolean);
  } else {
    list = [sanitized.trim()];
  }

  // Strip formulaic opening from the first bubble
  if (list.length > 0) {
    list[0] = stripRepetitiveOpening(list[0]);
  }

  return list.filter(Boolean);
}

/* ─── Multi-Bubble Theatrical Fallback Replies ─── */
const FALLBACK_RESPONSES = [
  "A bold declaration! ||| *leans forward and taps her chin with sparkling curiosity* In my courtroom, every word must dance upon the razor's edge of truth! ||| Present your grand evidence before the Oratrice!",
  "Hmph! Such words are worthy of an opening act! ||| *tosses her hair dramatically* But the Oratrice and I demand a far more riveting climax! ||| Speak on, the spotlight is yours!",
  "Silence in the Opera Epiclese! ||| Let the melodic gears of the Oratrice weigh the sheer drama of your statement! ||| What further claims do you dare bring to my stage?",
  "An intriguing plea! ||| *eyes sparkle with theatrical delight* Though I suspect you are concealing the finest details just to tease the spotlight! ||| Unfold the rest of the tale!",
  "Did you truly believe such a simple claim would sway the Hydro Archon? ||| Deliver your testimony with genuine passion! ||| The court awaits your crescendo.",
  "The suspense builds! ||| The audience leans in, the spotlight intensifies... ||| Do proceed! What other secrets does your case harbor?",
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
    return "The divine 'Symphony of Judgment'! ||| It is the grandest composition in all of Teyvat, conducted by my own artistic hand to accompany the Oratrice's verdicts.";
  }

  return FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
}

/**
 * Tries the proxy with stream: true, retrying on connection/timeout errors.
 */
async function tryProxyStreamWithRetries(proxy, requestOpts, maxAttempts = 6, timeoutMs = 12000, retryDelayMs = 3000) {
  let lastError = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const stream = await proxy.chat.completions.create(
        { ...requestOpts, stream: true },
        { timeout: timeoutMs }
      );
      return stream;
    } catch (err) {
      lastError = err;

      const status = err?.status || err?.response?.status;
      if (status && status >= 400 && status < 500) {
        throw err;
      }

      if (attempt < maxAttempts) {
        console.log(
          `[Furina] Proxy stream attempt ${attempt}/${maxAttempts} failed (${err.message}), retrying in ${retryDelayMs / 1000}s...`
        );
        await sleep(retryDelayMs);
      }
    }
  }

  throw lastError;
}

/**
 * Creates a Server-Sent Events (SSE) Response from an AsyncIterable stream.
 * Filters out internal reasoning/analysis tokens and sends clean data chunks.
 */
function createSSEStreamResponse(asyncIterable) {
  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of asyncIterable) {
          const d = chunk.choices?.[0]?.delta;
          // Filter out internal reasoning / analysis tokens from models like gpt-oss-120b
          if (!d || d.channel === 'analysis' || d.reasoning) continue;
          const content = d.content || '';
          if (content) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
          }
        }
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ done: true })}\n\n`));
      } catch (err) {
        console.warn('[Furina] Stream read error:', err.message);
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ done: true })}\n\n`));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
    },
  });
}

/**
 * Creates a fallback SSE stream that sends the local fallback text.
 */
function createFallbackSSEStreamResponse(fallbackText) {
  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: fallbackText })}\n\n`));
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ done: true })}\n\n`));
      controller.close();
    },
  });

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
    },
  });
}

/* ─── Route Handler ─── */
export async function POST(req) {
  const { messages, systemPrompt, stream = true } = await req.json();

  const chatMessages = [
    { role: 'system', content: systemPrompt },
    ...messages,
  ];

  const requestOpts = {
    model: 'auto',
    messages: chatMessages,
    temperature: 0.95,
    presence_penalty: 0.6,
    frequency_penalty: 0.3,
    max_tokens: 600,
  };

  // 1. Try FreeLLMAPI proxy with multi-threaded streaming support
  const proxy = getProxyClient();
  if (proxy) {
    try {
      const responseStream = await tryProxyStreamWithRetries(proxy, requestOpts);
      if (responseStream) {
        return createSSEStreamResponse(responseStream);
      }
    } catch (proxyError) {
      console.warn('[Furina] FreeLLMAPI proxy stream failed, trying Groq fallback:', proxyError.message);
    }
  }

  // 2. Fallback to direct Groq with streaming support
  const groq = getGroqClient();
  if (groq) {
    try {
      const groqStream = await groq.chat.completions.create(
        { ...requestOpts, model: 'llama-3.3-70b-versatile', stream: true },
        { timeout: 15000 }
      );
      if (groqStream) {
        return createSSEStreamResponse(groqStream);
      }
    } catch (groqError) {
      console.warn('[Furina] Groq stream fallback failed:', groqError.message);
    }
  }

  // 3. Fallback: diverse theatrical reply via SSE stream
  const fallbackRaw = getLocalFallbackReply(messages);
  return createFallbackSSEStreamResponse(fallbackRaw);
}
