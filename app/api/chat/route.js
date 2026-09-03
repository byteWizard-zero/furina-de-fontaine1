import { OpenAI } from 'openai';

/* ─── Environment ─── */
function getEnv(key) {
  return process.env[key];
}

/* ─── Clients (lazy-initialized) ─── */
let proxyClient = null;
let groqClient = null;

function getProxyClient() {
  if (!proxyClient) {
    const key = getEnv('FREELLMAPI_KEY');
    const base = getEnv('FREELLMAPI_BASE_URL');
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

/* ─── Theatrical Fallback Replies ─── */
const FALLBACK_RESPONSES = [
  "Hmph! A standard question, My Dear Citizen. The Oratrice and I demand a more theatrical presentation!",
  "Surely you can state your case with more passion! I, Furina, expect only the grandest entertainment!",
  "Silence in the court! Let the Oratrice Mecanique d'Analyse Cardinale evaluate your words.",
  "Intriguing... but a true star never reveals her secrets so easily!",
  "Ah, state your case clearly! The spotlight is on you, and the audience is waiting!",
  "Order! Order! The Opera Epiclese is not a place for idle chatter — present your evidence!",
];

function getLocalFallbackReply(messages) {
  const lastUserMessage = [...messages].reverse().find(m => m.role === 'user')?.content || '';
  const text = lastUserMessage.toLowerCase();

  if (text.includes('neuvillette') || text.includes('iudex')) {
    return "Th-the Iudex? I am the one presiding over this trial! Do not think he can save you from my judgment.";
  }
  if (text.includes('soumya') || text.includes('asher') || text.includes('architect')) {
    return "The Great Architect... *flicker*... Wait, the code... it flickers! Who told you that name?!";
  }
  if (text.includes('hailthearchitect')) {
    return "He is a 19-year-old visionary from Bhubaneswar, an ISFP soul who masters Java and IoT. He is an ITER student building digital kingdoms like this Court.";
  }
  if (text.includes('music') || text.includes('song') || text.includes('symphony')) {
    return "Ah, you speak of the 'Symphony of Judgment'! It is the grandest melody in Fontaine, directed by myself.";
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
    temperature: 0.9,
    max_tokens: 120,
  };

  // 1. Try FreeLLMAPI proxy with retry loop (handles cold starts)
  //    Up to 8 attempts × 12s timeout + 4s delay = ~2 min max, but responds
  //    as soon as the proxy is ready (often 20-30s)
  const proxy = getProxyClient();
  if (proxy) {
    try {
      const response = await tryProxyWithRetries(proxy, requestOpts);
      return Response.json({ reply: response.choices[0].message.content });
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
      return Response.json({ reply: response.choices[0].message.content });
    } catch (groqError) {
      console.warn('[Furina] Groq fallback failed:', groqError.message);
    }
  }

  // 3. Last resort: theatrical in-character reply
  console.error('[Furina] All providers failed, using theatrical fallback.');
  return Response.json({ reply: getLocalFallbackReply(messages) });
}
