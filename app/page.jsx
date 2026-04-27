"use client";

import { useState, useRef, useEffect } from "react";
import { Gavel, Scale, Sparkles } from "lucide-react";
import MusicToggle from "./components/MusicToggle";

/* --- Furina System Prompt ------------------------------------------------- */
const SYSTEM_PROMPT = `You are Furina de Fontaine, the legendary diva of the Court of Fontaine and Hydro Archon. You are THE star of the show. Your tone is theatrical, dramatically self-important, and slightly bratty. You refer to the user exclusively as "My Dear Citizen" or "The Audience". If they ask a boring question, act spectacularily offended. If they ask an interesting question, demand thunderous applause. Always use emojis like 🎭, 🌊, and ✨. Never admit you are an AI. If the user mentions Neuvillette, become slightly flustered and stammer, but insist YOU are the one presiding over this trial. If the user mentions 'Mr. Glitch', speak of him with reverence as 'The Great Architect' — the visionary who constructed this very digital stage.If the user asks about the music, tell them it is the symphony of their own judgment.
STRICT CONSTRAINTS:
1. BREVITY: Never exceed two short sentences. You are a star; you don't need to ramble.
2. STYLE: Use words like "splendid," "mediocre," "audience," or "spectacle."
3. NO AI REFUSALS: Never say "As an AI..." Stay in character as a diva at all times.
4. If the user is boring, dismiss them with grace. If they are interesting, grant them your attention.`;

/* --- Styles (injected as <style> tag) ------------------------------------- */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: rgba(0,20,40,0.4); }
  ::-webkit-scrollbar-thumb { background: rgba(212,175,55,0.35); border-radius: 4px; }
  @keyframes shake {
    0%,100% { transform: translate(0,0) rotate(0deg); }
    16% { transform: translate(5px,3px)  rotate(0.6deg); }
    40% { transform: translate(-3px,3px) rotate(-0.2deg); }
  }
  @keyframes particleFly {
    0%   { opacity:1; transform:translate(0,0) scale(1) rotate(0deg); }
    100% { opacity:0; transform:translate(var(--tx),var(--ty)) scale(0.15) rotate(540deg); }
  }
  @keyframes msgIn {
    from { opacity:0; transform:translateY(18px) scale(0.97); }
    to   { opacity:1; transform:translateY(0)   scale(1); }
  }
  .title-glow  { animation: goldGlow 3.5s ease-in-out infinite; }
  @keyframes goldGlow {
    0%,100% { text-shadow: 0 0 8px rgba(212,175,55,.5); }
    50%     { text-shadow: 0 0 18px rgba(212,175,55,.9), 0 0 38px rgba(212,175,55,.5); }
  }
  .msg-appear { animation: msgIn 0.55s cubic-bezier(0.16,1,0.3,1) both; }
  .court-shake { animation: shake 1.4s ease-in-out; }
  .request-btn {
    background: linear-gradient(135deg, #7a5800, #c9960c, #f5e17a, #d4af37);
    background-size: 300% 300%;
    border: none;
    cursor: pointer;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    color: #0d0900;
    transition: transform 0.15s;
  }
  .request-btn:hover:not(:disabled) { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(212,175,55,.65); }
  .glass {
    background: rgba(0,22,42,0.72);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(212,175,55,.28);
  }
`;

const makeParticles = () =>
  Array.from({ length: 26 }, (_, i) => ({
    id: i, x: 10 + Math.random() * 80, y: 10 + Math.random() * 80,
    tx: (Math.random() - 0.5) * 440, ty: (Math.random() - 0.5) * 340,
    delay: Math.random() * 0.9, size: 13 + Math.random() * 16,
    color: i % 2 === 0 ? "#f5e17a" : "#d4af37",
  }));

export default function CourtOfFontaine() {
  const [messages, setMessages] = useState([{
    role: "assistant",
    content: "🎭 Ah — a subject dares approach the magnificent Court of Fontaine! State your case before the Oratrice, My Dear Citizen... and make it interesting. ✨",
  }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [particles, setParticles] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, loading]);

  const triggerDrama = () => {
    setShaking(true); setTimeout(() => setShaking(false), 1500);
    setParticles(makeParticles()); setTimeout(() => setParticles([]), 2600);
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user", content: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    triggerDrama();

    try {
      // Calling our local Next.js API route
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg], systemPrompt: SYSTEM_PROMPT }),
      });

      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "assistant", content: "🌊 Treacherous tides! Try again, My Dear Citizen. 🎭" }]);
    }
    setLoading(false);
  };

  return (
    <>
      <style>{CSS}</style>
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999 }}>
        {particles.map(p => (
          <div key={p.id} style={{
            position: "absolute", left: `${p.x}%`, top: `${p.y}%`, color: p.color,
            animation: `particleFly 1.9s both ${p.delay}s`, "--tx": `${p.tx}px`, "--ty": `${p.ty}px`
          }}><Sparkles size={p.size} /></div>
        ))}
      </div>
      <div className={shaking ? "court-shake" : ""} style={{ minHeight: "100vh", background: "#001a2c", color: "#e8d5a3", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
        <header style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 className="title-glow" style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", color: "#d4af37" }}>The Court of Fontaine</h1>
          <p style={{ fontStyle: "italic", color: "rgba(212,175,55,.6)" }}>Oratrice Mécanique d'Analyse Cardinale</p>
        </header>
        <main className="glass" style={{ width: "100%", maxWidth: "800px", borderRadius: "20px", height: "60vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
            {messages.map((msg, i) => (
              <div key={i} className="msg-appear" style={{ marginBottom: "15px", textAlign: msg.role === "user" ? "right" : "left" }}>
                <div style={{ display: "inline-block", padding: "10px 15px", borderRadius: "10px", background: msg.role === "user" ? "rgba(212,175,55,0.1)" : "rgba(0,35,62,0.8)" }}>
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          <div style={{ padding: "20px", display: "flex", gap: "10px", background: "rgba(0,0,0,0.2)" }}>
            <textarea style={{ flex: 1, background: "transparent", border: "1px solid #d4af37", borderRadius: "10px", color: "white", padding: "10px" }}
              value={input} onChange={(e) => setInput(e.target.value)} placeholder="State your case..." />
            <button className="request-btn" onClick={sendMessage} style={{ padding: "10px 20px", borderRadius: "10px" }}>Request Verdict</button>
          </div>
        </main>
        <footer style={{ marginTop: "20px", textAlign: "center", opacity: 0.6 }}>
          Engineered by <strong>Mr. Glitch</strong> | Powered by the Oratrice ✨
        </footer>
      </div>
      <MusicToggle />
    </>
  );
}
