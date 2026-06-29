module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/api/chat/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/openai/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/openai/client.mjs [app-route] (ecmascript)");
;
const groq = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$openai$2f$client$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OpenAI"]({
    apiKey: process.env.GROQ_API_KEY || 'placeholder',
    baseURL: "https://api.groq.com/openai/v1"
});
// Theatrical in-character fallback replies
const FALLBACK_RESPONSES = [
    "🎭 Hmph! A standard question, My Dear Citizen. The Oratrice and I demand a more theatrical presentation!",
    "🎭 Surely you can state your case with more passion! I, Furina, expect only the grandest entertainment!",
    "🎭 Silence in the court! Let the Oratrice Mécanique d'Analyse Cardinale evaluate your words.",
    "🎭 Intriguing... but a true star never reveals her secrets so easily!",
    "🎭 Ah, state your case clearly! The spotlight is on you, and the audience is waiting!",
    "🎭 Order! Order! The Opera Epiclese is not a place for idle chatter, present your evidence!"
];
async function POST(req) {
    const { messages, systemPrompt } = await req.json();
    // If GROQ_API_KEY is unset or is 'placeholder', we can trigger fallback immediately
    const hasValidKey = process.env.GROQ_API_KEY && process.env.GROQ_API_KEY !== 'placeholder';
    if (!hasValidKey) {
        return Response.json({
            reply: getLocalFallbackReply(messages)
        });
    }
    try {
        const response = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                ...messages
            ],
            temperature: 0.9,
            max_tokens: 80
        });
        return Response.json({
            reply: response.choices[0].message.content
        });
    } catch (error) {
        console.error("Groq API error, triggering theatrical fallback:", error);
        return Response.json({
            reply: getLocalFallbackReply(messages)
        });
    }
}
function getLocalFallbackReply(messages) {
    const lastUserMessage = [
        ...messages
    ].reverse().find((m)=>m.role === 'user')?.content || "";
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0t_2-e2._.js.map