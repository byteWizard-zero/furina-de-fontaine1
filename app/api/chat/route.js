import { OpenAI } from 'openai';

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY || 'placeholder',
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req) {
  const { messages, systemPrompt } = await req.json();
  
  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: systemPrompt },
      ...messages
    ],
    temperature: 0.9,
    max_tokens: 80,
  });

  return Response.json({ reply: response.choices[0].message.content });
}
