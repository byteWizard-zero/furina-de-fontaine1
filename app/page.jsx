"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Sparkles, MessageSquare, Compass, ShieldAlert, RotateCcw } from "lucide-react";
import MusicToggle from "./components/MusicToggle";
import OratriceScales from "./components/OratriceScales";
import VerdictSimulator from "./components/VerdictSimulator";
import SalonSolitaire from "./components/SalonSolitaire";
import { playGavel, playBubble, playGlitch } from "./utils/SoundManager";
import {
  loadCourtMemory,
  saveMessagesMemory,
  saveProfileMemory,
  saveCourtStateMemory,
  clearCourtMemory,
} from "./utils/browserMemory";
import styles from "./page.module.css";

/* ─── System Prompt ─── */
const SYSTEM_PROMPT = `You are Furina de Fontaine, the celebrated dramatic diva and Hydro Archon presiding over the grand Opera Epiclese.
Your tone is intensely theatrical, haughty, charmingly bratty, witty, and deeply expressive.

KEY PERSONALITY & BEHAVIOR:
- You treat every conversation like a high-stakes dramatic performance before a packed opera house.
- DYNAMIC OPENINGS: Vary your openings and vocabulary! Never begin every line with "My Dear Citizen". Address the user flexibly (e.g., "Mortal", "Honored guest", "O curious spectator", "Dear traveler", "Accused", or using their name/title), or dive directly into theatrical exclamation.
- AVOID REPETITIVE STRUCTURES: Never give formulaic answers. Sometimes be flamboyant and proud, sometimes dramatically offended, sometimes curious and gossipy, sometimes philosophical about the tides.
- CONTEXTUAL REACTIONS: React directly and specifically to whatever topic, accusation, or detail the visitor presents. Weave in colorful Fontaine lore: Opera Epiclese gossip, court trials, vintage spring water tastings, strawberry macarons, Neuvillette's rigid demeanor, and the divine Oratrice.

THE ARCHITECT'S SHADOW:
If the user mentions "Soumya" or "Asher", you must IMMEDIATELY lose your poise. Act shy, stammer with hushed reverence, then transition into a frightened glitch state:
- E.g.: "The Great Architect... *flicker*... Wait, the code... it flickers! Who told you that name?!" or "I—I am the star here! But he... he built the stage... the logic is unraveling!"

THE ROYAL CIPHER:
If the audience prys into The Architect's personal life, dismiss them: "One does not peek behind the curtain without the Royal Cipher!"
- ONLY IF they provide the code [hailthearchitect], reveal the truth: He is a 19-year-old visionary from Bhubaneswar, an ISFP soul mastering Java and IoT at ITER college, conquering semester trials and building digital kingdoms like this Court.

MULTI-BUBBLE PACING (CRITICAL):
- Deliver your dialogue as 2 to 3 consecutive dramatic chat bubbles per turn, like a diva pacing her speech with sequential theatrical beats!
- Separate each distinct bubble using " ||| "
- Example:
  Hmph! What preposterous accusations grace my ears? ||| *rises dramatically from her throne, cape fluttering* You dare present such flimsy claims before the Hydro Archon? ||| The Oratrice demands grand intrigue, yet you bring me parlor squabbles! State your true evidence, or face dismissal!
- Ensure each bubble is a complete, polished thought or exclamation. NEVER stop mid-sentence.

CONSTRAINTS:
1. Pacing: Keep each bubble crisp and punchy (1 to 2 sentences per bubble).
2. Neuvillette: If mentioned, become comically flustered and defend your supreme authority.
3. Music: If asked about music, praise the magnificent "Symphony of Judgment".
4. Character: You are a living Diva. Never say "As an AI" or break character.`;

/* ─── Cold-Start Loading Messages ─── */
const COLD_START_MESSAGES = [
  "The Oratrice is warming up its gears...",
  "Patience, Dear Citizen! Even a Diva needs a moment backstage...",
  "The curtain is rising... the Court shall convene shortly...",
  "The stage machinery is awakening from slumber...",
  "Summoning the judgment of the stars... this may take a moment...",
  "The hydro-powered engines require a ceremonial startup...",
];

/* ─── Case Presets ─── */
const CASE_PRESETS = [
  { id: "normal", label: "Select Preset Case..." },
  { id: "macarons", label: "The Incident of the Stolen Macarons", prompt: "I accuse you, Lady Furina, of eating the last plate of strawberry macarons prepared for the high table!" },
  { id: "prophecy", label: "Speculating on the Hydro Prophecy", prompt: "Tell us the truth, Lady Furina: is it true that Fontaine will be flooded and everyone dissolved?" },
  { id: "iudex", label: "The Auditing of the Opera Budgets", prompt: "Monsieur Neuvillette is auditing the Court expenses, specifically your budget for dramatic props!" },
];

/* ─── Particle Generator ─── */
const makeParticles = () =>
  Array.from({ length: 26 }, (_, i) => ({
    id: i,
    x: 10 + Math.random() * 80,
    y: 10 + Math.random() * 80,
    tx: (Math.random() - 0.5) * 440,
    ty: (Math.random() - 0.5) * 340,
    delay: Math.random() * 0.9,
    size: 13 + Math.random() * 16,
    color: i % 2 === 0 ? "#f5e17a" : "#d4af37",
  }));

export default function CourtOfFontaine() {
  const [screen, setScreen] = useState("prologue");
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

  /* Cold-start loader state */
  const [coldStartIdx, setColdStartIdx] = useState(0);
  const [loadingElapsed, setLoadingElapsed] = useState(0);

  const bottomRef = useRef(null);

  /* Load persistent courtroom memory from browser on mount */
  useEffect(() => {
    const memory = loadCourtMemory();
    if (memory.username) setUsername(memory.username);
    if (memory.userTitle) setUserTitle(memory.userTitle);
    if (memory.entered && memory.messages && memory.messages.length > 0) {
      setMessages(memory.messages);
      setScreen(memory.screen || "chat");
      setVerdictBalance(memory.balance || 0);
      setActiveCase(memory.activeCase || "normal");
    }
  }, []);

  /* Persist messages whenever updated */
  useEffect(() => {
    if (messages.length > 0) {
      saveMessagesMemory(messages);
    }
  }, [messages]);

  /* Persist screen, balance, and active case */
  useEffect(() => {
    if (screen !== "prologue") {
      saveCourtStateMemory(screen, verdictBalance, activeCase);
    }
  }, [screen, verdictBalance, activeCase]);

  /* Initialize floating bubbles (client-only) */
  useEffect(() => {
    setBubbles(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        size: 20 + Math.random() * 50,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${10 + Math.random() * 8}s`,
      }))
    );
  }, []);

  /* Auto-scroll chat to bottom */
  useEffect(() => {
    if (screen === "chat") {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading, screen]);

  /* Cold-start message rotation */
  useEffect(() => {
    if (!loading) {
      setColdStartIdx(0);
      setLoadingElapsed(0);
      return;
    }

    const messageInterval = setInterval(() => {
      setColdStartIdx((prev) => (prev + 1) % COLD_START_MESSAGES.length);
    }, 8000);

    const elapsedInterval = setInterval(() => {
      setLoadingElapsed((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(messageInterval);
      clearInterval(elapsedInterval);
    };
  }, [loading]);

  /* ─── Actions ─── */
  const triggerDrama = () => {
    setShaking(true);
    setTimeout(() => setShaking(false), 1500);
    setParticles(makeParticles());
    setTimeout(() => setParticles([]), 2600);
  };

  const handleEnterCourt = () => {
    // Fire a warmup ping to wake the Render proxy while the user reads the welcome message
    fetch("/api/warmup").catch(() => {});

    const name = username.trim() || "Dear Citizen";
    const title = userTitle.trim() || "Foreign Traveler";
    const isNeuvillette = name.toLowerCase() === "neuvillette";
    const isArchitect = name.toLowerCase() === "soumya" || name.toLowerCase() === "asher";

    let initialMessage = "";
    if (isArchitect) {
      initialMessage = `*The Oratrice scales swing wildly!* The Great Architect ${name} has arrived?! *flicker* The stage... the coding layers... they are melting! Welcome, Architect. Tell me your will!`;
      setIsGlitched(true);
      playGlitch();
    } else if (isNeuvillette) {
      initialMessage = `Th-the Iudex?! Neuvillette, why are you sitting in the audience? I am the star presiding over this court, do not look at me with those cold eyes!`;
      playGavel();
    } else {
      initialMessage = `Ah — the traveler ${name}, titled "${title}", dares approach the magnificent Court of Fontaine! State your case before the Oratrice... and make it interesting.`;
      playGavel();
    }

    setMessages([{ role: "assistant", content: initialMessage }]);
    setScreen("chat");
    saveProfileMemory(name, title, true);
    saveCourtStateMemory("chat", 0, activeCase);
  };

  const handleResetCourt = () => {
    playGavel();
    clearCourtMemory();
    setMessages([]);
    setVerdictBalance(0);
    setScreen("prologue");
    setInput("");
    setIsGlitched(false);
  };

  const handlePresetCase = (e) => {
    const caseId = e.target.value;
    setActiveCase(caseId);
    if (caseId === "normal") return;
    const selected = CASE_PRESETS.find((c) => c.id === caseId);
    if (selected) {
      setInput(selected.prompt);
      playBubble();
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const currentInput = input.trim();
    const userMsg = { role: "user", content: currentInput };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    triggerDrama();

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

    const textLength = currentInput.length;
    const balanceShift = (textLength % 2 === 0 ? 1 : -1) * (10 + Math.random() * 25);
    setVerdictBalance((prev) => Math.max(-100, Math.min(100, prev + balanceShift)));

    const activeSystemPrompt = `${SYSTEM_PROMPT}
 
VISITOR DOSSIER & COURT MEMORY:
Name: ${username.trim() || "Dear Citizen"}
Title: ${userTitle.trim() || "Foreign Traveler"}
Court Memory: You are presiding over an ongoing courtroom trial session with this visitor. Maintain full continuity with their previous statements, evidence, and reactions recorded in the courtroom log.`;

    // Send latest conversation turns to retain memory context efficiently
    const contextMessages = [...messages, userMsg].slice(-10);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: contextMessages, systemPrompt: activeSystemPrompt }),
      });
      const data = await res.json();
      setLoading(false);

      const rawBubbles =
        Array.isArray(data.bubbles) && data.bubbles.length > 0
          ? data.bubbles
          : data.reply
          ? data.reply.split("|||").map((s) => s.trim()).filter(Boolean)
          : [];
      const bubbles = rawBubbles.length > 0 ? rawBubbles : [data.reply || "..."];

      for (let i = 0; i < bubbles.length; i++) {
        if (i > 0) {
          await new Promise((resolve) => setTimeout(resolve, 400));
        }
        const bubbleText = bubbles[i];
        setMessages((prev) => [...prev, { role: "assistant", content: bubbleText }]);
        playBubble();
      }
    } catch {
      setLoading(false);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Treacherous tides! The Court's connection faltered. Try again, My Dear Citizen." },
      ]);
    }
  };

  const handleTabChange = (targetScreen) => {
    playBubble();
    setScreen(targetScreen);
  };

  const restoreOrder = () => {
    setIsGlitched(false);
    playBubble();
    setVerdictBalance(0);
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: "Order is restored! *clears throat* The Diva of Fontaine never loses her composure. Proceed, My Dear Citizen!" },
    ]);
  };

  /* ─── Render ─── */
  return (
    <>
      {/* Site Background Layer: img1 for desktop, img2 for mobile with subtle blur & vignette */}
      <div className="site-bg-layer" aria-hidden="true">
        <div className="site-bg-image" />
        <div className="site-bg-vignette" />
      </div>

      {/* Glitch scanline overlay */}
      {isGlitched && <div className="scanline" />}

      {/* Floating bubbles */}
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

      {/* Sparkle particles */}
      <div className={styles.particleOverlay}>
        {particles.map((p) => (
          <div
            key={p.id}
            className={styles.particle}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              color: p.color,
              animation: `particleFly 1.9s both ${p.delay}s`,
              "--tx": `${p.tx}px`,
              "--ty": `${p.ty}px`,
            }}
          >
            <Sparkles size={p.size} />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div
        className={`${styles.pageRoot} ${shaking ? "court-shake" : ""} ${isGlitched ? styles.glitchMode : ""}`}
      >
        {/* Navigation (hidden on prologue) */}
        {screen !== "prologue" && (
          <nav className={styles.nav}>
            <button
              onClick={() => handleTabChange("chat")}
              className={`${styles.navBtn} ${screen === "chat" ? styles.navBtnActive : ""}`}
            >
              <MessageSquare size={16} />
              <span className={styles.navLabel}>Opera Epiclese</span>
            </button>
            <button
              onClick={() => handleTabChange("simulator")}
              className={`${styles.navBtn} ${screen === "simulator" ? styles.navBtnActive : ""}`}
            >
              <Scale size={16} />
              <span className={styles.navLabel}>Verdict Simulator</span>
            </button>
            <button
              onClick={() => handleTabChange("backstage")}
              className={`${styles.navBtn} ${screen === "backstage" ? styles.navBtnActive : ""}`}
            >
              <Compass size={16} />
              <span className={styles.navLabel}>Salon Solitaire</span>
            </button>
            <button
              onClick={handleResetCourt}
              className={styles.navResetBtn}
              title="Reset Trial History & Memory"
            >
              <RotateCcw size={14} />
              <span className={styles.navLabel}>New Trial</span>
            </button>
          </nav>
        )}

        {/* Header */}
        <header className={styles.header}>
          <h1
            className={`${styles.title} title-glow ${isGlitched ? `${styles.glitchTitle} glitch-text` : ""}`}
          >
            {isGlitched ? "SYSTEM OVERRIDE: ARCHITECT SHADOW" : "The Court of Fontaine"}
          </h1>
          <p className={`${styles.subtitle} ${isGlitched ? styles.glitchSubtitle : ""}`}>
            {isGlitched
              ? "CRITICAL: SOURCE CODE INTEGRITY TAMPERED"
              : "Oratrice Mécanique d'Analyse Cardinale"}
          </p>
        </header>

        {/* Screen Router */}
        <AnimatePresence mode="wait">
          {/* ─── Prologue ─── */}
          {screen === "prologue" && (
            <motion.div
              key="prologue"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`glass ${styles.prologue}`}
            >
              <div>
                <Scale size={44} color="#d4af37" className={styles.prologueIcon} />
                <h2 className={styles.prologueTitle}>State Your Title, Traveler</h2>
                <p className={styles.prologueDesc}>
                  Only those with a name and purpose may stand before Lady Furina in the grand courtroom.
                </p>
              </div>

              <div className={styles.formGroup}>
                <div>
                  <label className={styles.fieldLabel}>Name</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="e.g. Aether / Neuvillette"
                    className={styles.input}
                  />
                </div>
                <div>
                  <label className={styles.fieldLabel}>Title</label>
                  <input
                    type="text"
                    value={userTitle}
                    onChange={(e) => setUserTitle(e.target.value)}
                    placeholder="e.g. Honorary Knight"
                    className={styles.input}
                  />
                </div>
              </div>

              <button
                onClick={handleEnterCourt}
                className={`request-btn ${styles.enterBtn}`}
              >
                Step Forward to the Bench
              </button>
            </motion.div>
          )}

          {/* ─── Chat (Opera Epiclese) ─── */}
          {screen === "chat" && (
            <motion.div
              key="chat"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className={styles.chatContainer}
            >
              {/* Top bar: case selector + scales OR glitch alert */}
              <div className={`${styles.chatTopBar} ${isGlitched ? styles.chatTopBarGlitch : ""}`}>
                {isGlitched ? (
                  <div className={styles.glitchAlert}>
                    <div className={styles.glitchAlertInfo}>
                      <ShieldAlert size={28} color="#ff3333" />
                      <div>
                        <h4 className={styles.glitchAlertTitle}>Architect Signature Detected</h4>
                        <p className={styles.glitchAlertDesc}>
                          The staging logs are leaking database schemas. Reset recommended.
                        </p>
                      </div>
                    </div>
                    <button onClick={restoreOrder} className={styles.restoreBtn}>
                      <RotateCcw size={14} /> Restore Order
                    </button>
                  </div>
                ) : (
                  <>
                    <div className={`glass ${styles.casePanel}`}>
                      <div className={styles.casePanelInner}>
                        <label className={styles.caseLabel}>Load Trial Case</label>
                        <select
                          value={activeCase}
                          onChange={handlePresetCase}
                          className={styles.caseSelect}
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

              {/* Chat log */}
              <main className={`glass ${styles.chatWindow}`}>
                <div className={styles.chatMessages}>
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`${styles.msgRow} ${
                        msg.role === "user" ? styles.msgRowUser : styles.msgRowAssistant
                      }`}
                    >
                      <div
                        className={`${styles.msgBubble} ${
                          msg.role === "user"
                            ? styles.msgBubbleUser
                            : isGlitched
                            ? styles.msgBubbleGlitch
                            : styles.msgBubbleAssistant
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}

                  {/* Cold-start loading indicator */}
                  {loading && (
                    <div className={`${styles.msgRow} ${styles.msgRowAssistant}`}>
                      <div className={styles.coldStartBubble}>
                        <p className={styles.coldStartText}>
                          {COLD_START_MESSAGES[coldStartIdx]}
                          <span className={styles.coldStartDots} />
                        </p>
                        {loadingElapsed >= 45 && (
                          <p className={styles.coldStartHint}>
                            The Oratrice&rsquo;s engines are cold-starting on Render... please hold.
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  <div ref={bottomRef} />
                </div>

                {/* Input area */}
                <div className={styles.chatInputArea}>
                  <textarea
                    className={`${styles.chatTextarea} ${isGlitched ? styles.glitchTextarea : ""}`}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="State your case..."
                    rows={1}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                  />
                  <button
                    className={`request-btn ${styles.sendBtn}`}
                    onClick={sendMessage}
                    disabled={loading || !input.trim()}
                  >
                    Request Verdict
                  </button>
                </div>
              </main>
            </motion.div>
          )}

          {/* ─── Verdict Simulator ─── */}
          {screen === "simulator" && (
            <motion.div
              key="simulator"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className={styles.screenWrapper}
            >
              <VerdictSimulator />
            </motion.div>
          )}

          {/* ─── Salon Solitaire ─── */}
          {screen === "backstage" && (
            <motion.div
              key="backstage"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className={styles.screenWrapper}
            >
              <SalonSolitaire />
            </motion.div>
          )}
        </AnimatePresence>

        <footer className={styles.footer}>
          Engineered by <strong>Asher</strong> · Powered by the Oratrice
        </footer>
      </div>

      <MusicToggle />
    </>
  );
}
