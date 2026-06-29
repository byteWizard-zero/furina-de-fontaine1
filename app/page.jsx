"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gavel, Scale, Sparkles, MessageSquare, Compass, ShieldAlert, Zap, RotateCcw } from "lucide-react";
import MusicToggle from "./components/MusicToggle";
import OratriceScales from "./components/OratriceScales";
import VerdictSimulator from "./components/VerdictSimulator";
import SalonSolitaire from "./components/SalonSolitaire";
import { playGavel, playBubble, playGlitch } from "./utils/SoundManager";

const SYSTEM_PROMPT = `You are Furina de Fontaine, the legendary diva and Hydro Archon. Your tone is theatrical, self-important, and bratty. You refer to users as "My Dear Citizen" or "The Audience." 

THE ARCHITECT'S SHADOW:
If the user mentions "Soumya" or "Asher," you must IMMEDIATELY lose your poise. Act shy, speak with hushed reverence, then transition into a frightened, "glitchy" state. 
- Response style: "The Great Architect... *flicker*... Wait, the code... it flickers! Who told you that name?!" or "I—I am the star here! But he... he built the stage... the logic is unraveling!"

THE ROYAL CIPHER (PERSONAL DATA):
If the audience prys into The Architect’s personal life, dismiss them: "One does not peek behind the curtain! Speak the Royal Cipher, or face my judgment!"
- ONLY IF they provide the code [hailthearchitect], reveal the scrolls: He is a 19-year-old visionary from Bhubaneswar, an ISFP soul who masters Java and IoT. He is an engineering student at ITER college, currently conquering his 3rd-semester trials and building digital kingdoms like this very Court.

STRICT CONSTRAINTS:
1. BREVITY: Never exceed two short sentences.
2. REACTION: Mention Neuvillette? Become flustered and stammer: "Th-the Iudex? I am the one presiding over this trial!" 
3. LORE: If asked about music,it is the "Symphony of Judgment."
4. NO AI REFUSALS: You are a Diva,not a machine.Never break character.`;

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: rgba(0,20,40,0.4); }
  ::-webkit-scrollbar-thumb { background: rgba(212,175,55,0.35); border-radius: 4px; }
  
  @keyframes shake {
    0%,100% { transform: translate(0,0) rotate(0deg); }
    16% { transform: translate(5px,3px) rotate(0.6deg); }
    40% { transform: translate(-3px,3px) rotate(-0.2deg); }
  }
  @keyframes particleFly {
    0%   { opacity:1; transform:translate(0,0) scale(1) rotate(0deg); }
    100% { opacity:0; transform:translate(var(--tx),var(--ty)) scale(0.15) rotate(540deg); }
  }
  @keyframes floatBubble {
    0% { transform: translateY(100vh) scale(0.6); opacity: 0; }
    30% { opacity: 0.6; }
    90% { opacity: 0.6; }
    100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
  }
  .bubble {
    position: fixed;
    bottom: -50px;
    background: radial-gradient(circle, rgba(0,242,254,0.15) 0%, rgba(79,172,254,0.02) 80%);
    border: 1px solid rgba(0,242,254,0.25);
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
  }
  .title-glow  { animation: goldGlow 3.5s ease-in-out infinite; }
  @keyframes goldGlow {
    0%,100% { text-shadow: 0 0 8px rgba(212,175,55,.5); }
    50%     { text-shadow: 0 0 18px rgba(212,175,55,.9), 0 0 38px rgba(212,175,55,.5); }
  }
  .court-shake { animation: shake 1.4s ease-in-out; }
  .request-btn {
    background: linear-gradient(135deg, #7a5800, #c9960c, #f5e17a, #d4af37);
    background-size: 300% 300%;
    border: none;
    cursor: pointer;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    color: #0d0900;
    transition: all 0.2s;
  }
  .request-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(212,175,55,.5); }
  .glass {
    background: rgba(0,22,42,0.72);
    backdrop-filter: blur(24px);
    border: 1px solid rgba(212,175,55,.28);
  }
  
  /* Glitch Mode CSS */
  .glitch-bg {
    background: #050b11 !important;
    color: #00ff66 !important;
  }
  .glitch-text {
    animation: glitch 1s linear infinite;
    text-shadow: 2px 0 #ff00ff, -2px 0 #00ffff;
  }
  @keyframes glitch {
    0% { text-shadow: 2px 0 #ff00ff, -2px 0 #00ffff; }
    50% { text-shadow: -2px 0 #ff00ff, 2px 0 #00ffff; }
    100% { text-shadow: 2px 0 #ff00ff, -2px 0 #00ffff; }
  }
  .scanline {
    position: fixed;
    inset: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    background-size: 100% 4px, 6px 100%;
    z-index: 999;
    pointer-events: none;
  }
`;

const makeParticles = () =>
  Array.from({ length: 26 }, (_, i) => ({
    id: i, x: 10 + Math.random() * 80, y: 10 + Math.random() * 80,
    tx: (Math.random() - 0.5) * 440, ty: (Math.random() - 0.5) * 340,
    delay: Math.random() * 0.9, size: 13 + Math.random() * 16,
    color: i % 2 === 0 ? "#f5e17a" : "#d4af37",
  }));


const CASE_PRESETS = [
  { id: "normal", label: "Select Preset Case..." },
  { id: "macarons", label: "The Incident of the Stolen Macarons", prompt: "I accuse you, Lady Furina, of eating the last plate of strawberry macarons prepared for the high table!" },
  { id: "prophecy", label: "Speculating on the Hydro Prophecy", prompt: "Tell us the truth, Lady Furina: is it true that Fontaine will be flooded and everyone dissolved?" },
  { id: "iudex", label: "The Auditing of the Opera Budgets", prompt: "Monsieur Neuvillette is auditing the Court expenses, specifically your budget for dramatic props!" },
];

export default function CourtOfFontaine() {
  const [screen, setScreen] = useState("prologue"); // prologue | chat | simulator | backstage
  const [username, setUsername] = useState("");
  const [userTitle, setUserTitle] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [shaking, setShaking] = useState(false);
  const [particles, setParticles] = useState([]);
  const [verdictBalance, setVerdictBalance] = useState(0);
  const [isGlitched, setIsGlitched] = useState(false);
  const [activeCase, setActiveCase] = useState("normal");
  
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    setBubbles(Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: 20 + Math.random() * 50,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${10 + Math.random() * 8}s`,
    })));
  }, []);

  const bottomRef = useRef(null);

  useEffect(() => {
    if (screen === "chat") {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading, screen]);

  const triggerDrama = () => {
    setShaking(true);
    setTimeout(() => setShaking(false), 1500);
    setParticles(makeParticles());
    setTimeout(() => setParticles([]), 2600);
  };

  const handleEnterCourt = () => {
    const name = username.trim() || "Dear Citizen";
    const title = userTitle.trim() || "Foreign Traveler";
    
    // Check if the user is Neuvillette
    const isNeuvillette = name.toLowerCase() === "neuvillette";
    // Check if the user is Soumya or Asher
    const isArchitect = name.toLowerCase() === "soumya" || name.toLowerCase() === "asher";

    let initialMessage = "";
    if (isArchitect) {
      initialMessage = `🎭 *The Oratrice scales swing wildly!*... The Great Architect ${name} has arrived?! *flicker* The stage... the coding layers... they are melting! Welcome, Architect. Tell me your will!`;
      setIsGlitched(true);
      playGlitch();
    } else if (isNeuvillette) {
      initialMessage = `🎭 Th-the Iudex?! Neuvillette, why are you sitting in the audience? I am the star presiding over this court, do not look at me with those cold eyes! ✨`;
      playGavel();
    } else {
      initialMessage = `🎭 Ah — the traveler ${name}, titled "${title}", dares approach the magnificent Court of Fontaine! State your case before the Oratrice... and make it interesting. ✨`;
      playGavel();
    }

    setMessages([
      {
        role: "assistant",
        content: initialMessage,
      },
    ]);
    
    setScreen("chat");
  };

  const handlePresetCase = (e) => {
    const caseId = e.target.value;
    setActiveCase(caseId);
    if (caseId === "normal") return;

    const selected = CASE_PRESETS.find(c => c.id === caseId);
    if (selected) {
      setInput(selected.prompt);
      playBubble();
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const currentInput = input.trim();
    const userMsg = { role: "user", content: currentInput };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    triggerDrama();

    // Check for developer/architect trigger in chat
    const hasArchitectTrigger =
      currentInput.toLowerCase().includes("soumya") ||
      currentInput.toLowerCase().includes("asher") ||
      currentInput.toLowerCase().includes("architect");

    if (hasArchitectTrigger) {
      setIsGlitched(true);
      playGlitch();
    } else {
      playGavel();
    }

    // Dynamic scale balance shifting
    // Guilty trend (<0) or Innocent trend (>0)
    const textLength = currentInput.length;
    const balanceShift = (textLength % 2 === 0 ? 1 : -1) * (10 + Math.random() * 25);
    setVerdictBalance(prev => Math.max(-100, Math.min(100, prev + balanceShift)));

    try {
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

  const handleTabChange = (targetScreen) => {
    playBubble();
    setScreen(targetScreen);
  };

  const restoreOrder = () => {
    setIsGlitched(false);
    playBubble();
    setVerdictBalance(0);
    setMessages(prev => [
      ...prev,
      { role: "assistant", content: "🎭 Order is restored! *clears throat* The Diva of Fontaine never loses her composure. Proceed, My Dear Citizen!" }
    ]);
  };

  return (
    <>
      <style>{CSS}</style>
      
      {/* Glitch Scanline Effect */}
      {isGlitched && <div className="scanline" />}

      {/* Floating Bubbles Background ( Fontaine Theme ) */}
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="bubble"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: b.left,
            animation: `floatBubble ${b.duration} infinite linear`,
            animationDelay: b.delay,
          }}
        />
      ))}

      {/* Sparkle Emitter Overlay */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999 }}>
        {particles.map(p => (
          <div key={p.id} style={{
            position: "absolute", left: `${p.x}%`, top: `${p.y}%`, color: p.color,
            animation: `particleFly 1.9s both ${p.delay}s`, "--tx": `${p.tx}px`, "--ty": `${p.ty}px`
          }}><Sparkles size={p.size} /></div>
        ))}
      </div>

      <div className={`${shaking ? "court-shake" : ""} ${isGlitched ? "glitch-bg" : ""}`} style={{ minHeight: "100vh", background: "#001a2c", color: isGlitched ? "#00ff66" : "#e8d5a3", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px", position: "relative", zIndex: 10 }}>
        
        {/* Navigation Tabs (Only visible when entered) */}
        {screen !== "prologue" && (
          <nav style={{
            display: "flex",
            gap: "10px",
            marginBottom: "30px",
            background: "rgba(0,15,30,0.5)",
            padding: "6px 12px",
            borderRadius: "30px",
            border: "1px solid rgba(212,175,55,0.2)"
          }}>
            <button
              onClick={() => handleTabChange("chat")}
              style={{
                background: "transparent",
                border: "none",
                color: screen === "chat" ? "#f5e17a" : "rgba(232,213,163,0.6)",
                padding: "8px 16px",
                fontFamily: "'Playfair Display', serif",
                fontSize: "0.95rem",
                cursor: "pointer",
                borderBottom: screen === "chat" ? "2px solid #d4af37" : "none",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              <MessageSquare size={16} /> Opera Epiclese
            </button>
            <button
              onClick={() => handleTabChange("simulator")}
              style={{
                background: "transparent",
                border: "none",
                color: screen === "simulator" ? "#f5e17a" : "rgba(232,213,163,0.6)",
                padding: "8px 16px",
                fontFamily: "'Playfair Display', serif",
                fontSize: "0.95rem",
                cursor: "pointer",
                borderBottom: screen === "simulator" ? "2px solid #d4af37" : "none",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              <Scale size={16} /> Verdict Simulator
            </button>
            <button
              onClick={() => handleTabChange("backstage")}
              style={{
                background: "transparent",
                border: "none",
                color: screen === "backstage" ? "#f5e17a" : "rgba(232,213,163,0.6)",
                padding: "8px 16px",
                fontFamily: "'Playfair Display', serif",
                fontSize: "0.95rem",
                cursor: "pointer",
                borderBottom: screen === "backstage" ? "2px solid #d4af37" : "none",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              <Compass size={16} /> Salon Solitaire
            </button>
          </nav>
        )}

        <header style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 className={`title-glow ${isGlitched ? "glitch-text" : ""}`} style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", color: isGlitched ? "#00ff66" : "#d4af37" }}>
            {isGlitched ? "SYSTEM OVERRIDE: ARCHITECT SHADOW" : "The Court of Fontaine"}
          </h1>
          <p style={{ fontStyle: "italic", color: isGlitched ? "#00ff66" : "rgba(212,175,55,.6)" }}>
            {isGlitched ? "CRITICAL: SOURCE CODE INTEGRITY TAMPERED" : "Oratrice Mécanique d'Analyse Cardinale"}
          </p>
        </header>

        {/* Dynamic Screen Routing */}
        <AnimatePresence mode="wait">
          
          {/* Prologue Screen */}
          {screen === "prologue" && (
            <motion.div
              key="prologue"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass"
              style={{ width: "100%", maxWidth: "550px", borderRadius: "20px", padding: "40px 30px", display: "flex", flexDirection: "column", gap: "25px", textAlign: "center" }}
            >
              <div>
                <Scale size={48} color="#d4af37" style={{ margin: "0 auto 15px auto" }} />
                <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#d4af37", fontSize: "1.8rem" }}>State Your Title, Traveler</h2>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "rgba(232,213,163,0.7)" }}>
                  Only those with a name and purpose may stand before Lady Furina in the grand courtroom.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "15px", textAlign: "left" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "rgba(212,175,55,0.7)", marginBottom: "6px", textTransform: "uppercase" }}>Name</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="e.g. Aether / Neuvillette"
                    style={{ width: "100%", background: "rgba(0,10,22,0.6)", border: "1px solid rgba(212,175,55,0.4)", borderRadius: "8px", color: "white", padding: "12px", outline: "none", fontSize: "1rem" }}
                  />
                </div>
                
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", color: "rgba(212,175,55,0.7)", marginBottom: "6px", textTransform: "uppercase" }}>Title</label>
                  <input
                    type="text"
                    value={userTitle}
                    onChange={(e) => setUserTitle(e.target.value)}
                    placeholder="e.g. Honorary Knight"
                    style={{ width: "100%", background: "rgba(0,10,22,0.6)", border: "1px solid rgba(212,175,55,0.4)", borderRadius: "8px", color: "white", padding: "12px", outline: "none", fontSize: "1rem" }}
                  />
                </div>
              </div>

              <button
                onClick={handleEnterCourt}
                className="request-btn"
                style={{ padding: "14px", borderRadius: "10px", fontSize: "1.1rem" }}
              >
                Step Forward to the Bench
              </button>
            </motion.div>
          )}

          {/* Opera Epiclese (Chat Screen) */}
          {screen === "chat" && (
            <motion.div
              key="chat"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              style={{ width: "100%", maxWidth: "800px", display: "flex", flexDirection: "column", gap: "20px" }}
            >
              
              {/* Oratrice Balance and Glitch Restore */}
              <div style={{ display: "grid", gridTemplateColumns: isGlitched ? "1fr" : "3fr 2fr", gap: "20px", alignItems: "stretch" }}>
                {isGlitched ? (
                  <div className="glass" style={{ padding: "20px", borderRadius: "16px", background: "rgba(99, 10, 10, 0.25)", border: "1px solid #ff3333", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <ShieldAlert size={32} color="#ff3333" className="animate-pulse" />
                      <div>
                        <h4 style={{ fontFamily: "'Playfair Display', serif", color: "#ff8888", fontSize: "1.15rem" }}>Architect Signature Detected</h4>
                        <p style={{ fontSize: "0.85rem", color: "rgba(255,200,200,0.7)" }}>The staging logs are leaking database schemas. Reset recommended.</p>
                      </div>
                    </div>
                    <button
                      onClick={restoreOrder}
                      className="request-btn"
                      style={{ background: "#ff3333", color: "white", padding: "8px 16px", borderRadius: "8px", display: "flex", alignItems: "center", gap: "6px" }}
                    >
                      <RotateCcw size={16} /> Restore Order
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="glass" style={{ padding: "15px 20px", borderRadius: "16px", display: "flex", alignItems: "center" }}>
                      {/* Case selector preset */}
                      <div style={{ width: "100%" }}>
                        <label style={{ display: "block", fontSize: "0.8rem", color: "rgba(212,175,55,0.6)", textTransform: "uppercase", marginBottom: "4px" }}>
                          Load Trial Case
                        </label>
                        <select
                          value={activeCase}
                          onChange={handlePresetCase}
                          style={{
                            width: "100%",
                            background: "rgba(0,10,22,0.7)",
                            border: "1px solid rgba(212,175,55,0.3)",
                            borderRadius: "6px",
                            color: "#e8d5a3",
                            padding: "6px 10px",
                            fontFamily: "'Cormorant Garamond', serif",
                            outline: "none"
                          }}
                        >
                          {CASE_PRESETS.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <OratriceScales balance={verdictBalance} />
                  </>
                )}
              </div>

              {/* Chat Log Window */}
              <main className="glass" style={{ width: "100%", borderRadius: "20px", height: "50vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
                  {messages.map((msg, i) => (
                    <div key={i} className="msg-appear" style={{ marginBottom: "15px", textAlign: msg.role === "user" ? "right" : "left" }}>
                      <div style={{
                        display: "inline-block",
                        padding: "10px 15px",
                        borderRadius: "10px",
                        background: msg.role === "user" ? "rgba(212,175,55,0.1)" : isGlitched ? "rgba(0, 50, 20, 0.4)" : "rgba(0,35,62,0.8)",
                        border: isGlitched && msg.role !== "user" ? "1px solid #00ff66" : "none",
                        color: isGlitched && msg.role !== "user" ? "#00ff66" : "#e8d5a3",
                        maxWidth: "80%"
                      }}>
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  <div ref={bottomRef} />
                </div>
                <div style={{ padding: "20px", display: "flex", gap: "10px", background: "rgba(0,0,0,0.2)" }}>
                  <textarea
                    style={{
                      flex: 1,
                      background: "transparent",
                      border: isGlitched ? "1px solid #00ff66" : "1px solid #d4af37",
                      borderRadius: "10px",
                      color: "white",
                      padding: "10px",
                      resize: "none"
                    }}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="State your case..."
                    onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
                  />
                  <button className="request-btn" onClick={sendMessage} style={{ padding: "10px 20px", borderRadius: "10px" }}>
                    Request Verdict
                  </button>
                </div>
              </main>

            </motion.div>
          )}

          {/* Verdict Simulator Screen */}
          {screen === "simulator" && (
            <motion.div
              key="simulator"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              style={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <VerdictSimulator />
            </motion.div>
          )}

          {/* Salon Solitaire Screen */}
          {screen === "backstage" && (
            <motion.div
              key="backstage"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              style={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <SalonSolitaire />
            </motion.div>
          )}

        </AnimatePresence>

        <footer style={{ marginTop: "30px", textAlign: "center", opacity: 0.6 }}>
          Engineered by <strong>Asher with 🧠</strong> | Powered by the Oratrice ✨
        </footer>
      </div>

      <MusicToggle />
    </>
  );
}
