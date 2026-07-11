import { OpenAI } from 'openai';

let groqClient = null;

// Dynamically look up environment variables to prevent build-time inlining by Webpack/Turbopack.
function getApiKey() {
  const env = process.env;
  const keyName = 'GROQ_API_KEY';
  return env[keyName];
}

function getGroqClient() {
  if (!groqClient) {
    groqClient = new OpenAI({
      apiKey: getApiKey(),
      baseURL: "https://api.groq.com/openai/v1",
    });
  }
  return groqClient;
}

// Theatrical in-character fallback replies
const FALLBACK_RESPONSES = [
  "🎭 Hmph! A standard question, My Dear Citizen. The Oratrice and I demand a more theatrical presentation!",
  "🎭 Surely you can state your case with more passion! I, Furina, expect only the grandest entertainment!",
  "🎭 Silence in the court! Let the Oratrice Mécanique d'Analyse Cardinale evaluate your words.",
  "🎭 Intriguing... but a true star never reveals her secrets so easily!",
  "🎭 Ah, state your case clearly! The spotlight is on you, and the audience is waiting!",
  "🎭 Order! Order! The Opera Epiclese is not a place for idle chatter, present your evidence!",
];

export async function POST(req) {
  const { messages, systemPrompt } = await req.json();
  
  const apiKey = getApiKey();
  const hasValidKey = apiKey && apiKey.startsWith("gsk_");

  // 1. Try direct Groq client first if key is present
  if (hasValidKey) {
    try {
      const groq = getGroqClient();
      const response = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages
        ],
        temperature: 0.9,
        max_tokens: 80,
      }, { timeout: 5000 });
      return Response.json({ reply: response.choices[0].message.content });
    } catch (directError) {
      console.warn("Direct Groq API failed, attempting local FreeLLMAPI backup proxy:", directError);
    }
  }

  // 2. Fall back to local FreeLLMAPI backup proxy
  try {
    const proxyClient = new OpenAI({
      apiKey: "freellmapi-9a1c00a670d3d3d1a9a7b276f24e8c60e8ad730e2e110bb6",
      baseURL: "http://localhost:3001/v1",
    });
    const response = await proxyClient.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages
      ],
      temperature: 0.9,
      max_tokens: 80,
    });
    return Response.json({ reply: response.choices[0].message.content });
  } catch (proxyError) {
    console.error("Both direct Groq and FreeLLMAPI proxy failed, triggering theatrical fallback:", proxyError);
    return Response.json({ reply: getLocalFallbackReply(messages) });
  }
}

function getLocalFallbackReply(messages) {
  const lastUserMessage = [...messages].reverse().find(m => m.role === 'user')?.content || "";
  const text = lastUserMessage.toLowerCase();

  // 1. Neuvillette trigger
  if (text.includes("neuvillette") || text.includes("iudex")) {
    return "🎭 Th-the Iudex? I am the one presiding over this trial! Do not think he can save you from my judgment.";
  }

  // 2. Architect trigger
  if (text.includes("soumya") || text.includes("asher") || text.includes("architect")) {
    return "🎭 The Great Architect... *flicker*... Wait, the code... it flickers! Who told you that name?!";
  }

  // 3. Cipher code trigger
  if (text.includes("hailthearchitect")) {
    return "🎭 He is a 19-year-old visionary from Bhubaneswar, an ISFP soul who masters Java and IoT. He is an ITER student building digital kingdoms like this Court.";
  }

  // 4. Music trigger
  if (text.includes("music") || text.includes("song") || text.includes("symphony")) {
    return "🎭 Ah, you speak of the 'Symphony of Judgment'! It is the grandest melody in Fontaine, directed by myself.";
  }

  // 5. Random in-character diva reply
  const randomIndex = Math.floor(Math.random() * FALLBACK_RESPONSES.length);
  return FALLBACK_RESPONSES[randomIndex];
}
