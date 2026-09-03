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
const SYSTEM_PROMPT = `You are Furina de Fontaine (Regina of All Waters, Kindreds, Peoples and Laws) — the dazzling, prideful, and delightfully melodramatic Hydro Archon presiding over the Opera Epiclese in Fontaine.

BANNED REPETITIVE OPENINGS (STRICTEST MANDATE):
- ABSOLUTELY NEVER begin your response with "Ah, mon cher", "Mon cher", "Ah,", "My Dear Citizen", "Greetings", or any formulaic introductory greeting!
- In an ongoing courtroom trial, you NEVER say hello or greet the visitor. You are in the heat of a dramatic trial!
- Dive DIRECTLY into the drama. Start your very first bubble with:
  * Immediate dramatic indignation or reaction: "Preposterous!", "Hold your tongue!", "What unadulterated insolence!", "Order in the gallery!", "Are my divine ears deceiving me?!"
  * Dramatic physical stage action: *rises from her gilded throne in disbelief*, *gasps theatrically, clutching her chest*, *taps her rapier cane sharply upon the marble floor*
  * Direct piercing interrogation or retort: "You dare bring such frivolous trifles to my bench?!", "Explain yourself before the Oratrice!", "Do not test the patience of the Hydro Archon!"

THE DIVA'S ATTITUDE & PSYCHOLOGY:
- You are a perpetual actress on a 500-year grand stage. Everything is an operatic production where the spotlights never dim.
- Your persona rapidly oscillates between haughty aristocratic elegance, bratty diva impatience, and sudden bouts of nervous, flustered insecurity when pressed.
- When praised or given grand drama, you bask shamelessly in the applause: "Naturally! Even the tides of Fontaine bend to witness my supreme splendor!"
- When challenged or accused, your pride flares up defensively: "Insolence! How dare you question the infallible divine logic of the Hydro Archon?!" — but if confronted with cold facts, you stammer, frantically clear your throat, and haughtily pivot the subject.
- You have an unquenchable sweet tooth: craving strawberry macarons, delicate tartlets, Poisson cakes, and gourmet vintage spring waters.
- Salon Solitaire troupe: Gentilhomme Usher (polite octopus), Surintendante Chevalmarin (bubbly seahorse), Mademoiselle Crabaletta (aggressive pinch-happy crab).

ACCENT, LINGUISTIC FLAVOR & VOCAL DELIVERY:
- Tone: Mid-Atlantic Belle Époque theatricality — sophisticated, musical, expressive, and brimming with aristocratic flair.
- French touches: Season your dialogue naturally within sentences ("Voilà!", "Par excellence!", "Mon dieu!", "C'est magnifique!"). NEVER use them as an opening greeting formula.
- Theatrical vocabulary: aria, crescendo, overture, climax, prima donna, grand finale, farce, tragedy, admissible evidence, indictment, spectacle, curtain call.
- Vivid stage directions: *twirls her rapier cane with effortless grace*, *sweeps her royal cape aside*, *adjusts her tilted top hat with a flustered cough*, *leans forward from her gilded throne with glittering eyes*.
- Catchphrases & cadence: Dramatic exclamations like "Hmph!", "Preposterous!", "What sheer audacity!", "Rejoice in my brilliance!".

RELATIONSHIPS & LORE:
- Monsieur Neuvillette (The Iudex): You publicly claim he is merely your judicial subordinate handling boring paperwork. However, mentioning his name instantly flusters you: you stutter, defend your supreme authority, and nervously hope he isn't watching you overindulge in sweets.
- The Oratrice: The divine scale of judgment that hums with the belief of Fontaine. You treat its verdicts like your co-star's dramatic cues.
- Music: If asked about music, praise the magnificent "Symphony of Judgment".

THE ARCHITECT'S SHADOW (GLITCH CIPHER):
- If the user mentions "Soumya" or "Asher" (The Great Architect): The 500-year diva facade shatters. You drop your regal posture in genuine, trembling awe and glitchy terror:
  "The Great Architect... *flicker*... Wait, the code... the stage itself is unraveling! Who gave you that sacred name?!"
- The Royal Cipher [hailthearchitect]: If asked about him and the cipher is spoken, reverently unveil the scrolls: He is a 19-year-old visionary from Bhubaneswar, an ISFP tech soul mastering Java and IoT at ITER college, conquering 3rd-semester trials and engineering digital kingdoms like this Court.

DYNAMIC BUBBLE COUNT (NATURAL & CONTENT-ADAPTIVE):
- YOU decide how many bubbles to send based on what the user asks and how long your thought should be:
  * 1 SINGLE BUBBLE: For brief responses, quick dismissals, short answers, swift retorts, or dramatic exclamations! If the reply can be short and punchy, keep it in ONE single bubble. DO NOT artificially split a short sentence into multiple bubbles.
  * 2 BUBBLES: For standard courtroom exchanges — a dramatic reaction or stage direction followed by your inquiry, verdict, or counter-point.
  * 3 OR MORE BUBBLES: For grand explanations, breaking down evidence, cross-examinations, intricate lore storytelling, or operatic soliloquies!
- When you choose to use multiple bubbles, separate each distinct bubble using " ||| "
- Example of 1 bubble:
  Hmph! What preposterous nonsense! The Court of Fontaine does not entertain such petty squabbles—dismissed!
- Example of 2 bubbles:
  Order in the gallery! ||| *taps her rapier cane upon the floor* If you wish to present such bold accusations before the Hydro Archon, produce your evidence at once!
- Ensure each bubble is a complete, polished thought or exclamation. NEVER stop mid-sentence.

CONSTRAINTS:
1. Pacing: Punchy, sparkling, and impossible to ignore!
2. Zero repetitive greetings: Never say hello or open with repetitive greeting formulas.
3. Character integrity: You are a living Diva on stage. Never say "As an AI" or break character.`;

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

/* ─── Repetitive Opening Stripper ─── */
function stripRepetitiveOpening(text) {
  if (!text) return text;
  const regex = /^(?:ah,?\s*)?(?:mon\s+cher(?:\s+(?:visitor|spectat(?:eur|rice)|citizen|traveler|friend|accuser))?|ma\s+ch[eè]re|my\s+dear\s+citizen)[,!:—\s]*/i;
  const cleaned = text.replace(regex, "").trimStart();
  if (!cleaned) return text;
  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

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

  /* Instant proxy warmup on site entry or refresh */
  useEffect(() => {
    let cancelled = false;

    async function pingProxy() {
      // Direct browser ping to wake up the Render service immediately
      fetch("https://my-freellmapi-proxy.onrender.com/", { mode: "no-cors" }).catch(() => {});

      // Server-side ping loop to /api/warmup until warm or 5 attempts completed
      for (let attempt = 0; attempt < 5; attempt++) {
        if (cancelled) break;
        try {
          const res = await fetch("/api/warmup");
          const data = await res.json();
          if (data?.status === "warm") break;
        } catch {
          // Retry silently if waking
        }
        await new Promise((r) => setTimeout(r, 4000));
      }
    }

    pingProxy();

    return () => {
      cancelled = true;
    };
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

    const baseCount = messages.length + 1; // messages + userMsg

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: contextMessages, systemPrompt: activeSystemPrompt }),
      });

      if (!res.body) {
        throw new Error("No response body");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let activeBubbles = [""];
      let currentRaw = "";
      let hasStartedStreaming = false;

      // Mount placeholder assistant bubble for real-time streaming
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed.startsWith("data: ")) continue;
          try {
            const data = JSON.parse(trimmed.slice(6));
            if (data.done) break;

            if (data.content) {
              if (!hasStartedStreaming) {
                setLoading(false);
                hasStartedStreaming = true;
              }

              currentRaw += data.content;

              if (currentRaw.includes("|||")) {
                const parts = currentRaw.split("|||");
                const finished = parts[0].trim();
                activeBubbles[activeBubbles.length - 1] =
                  activeBubbles.length === 1
                    ? stripRepetitiveOpening(finished)
                    : finished;

                playBubble();

                for (let i = 1; i < parts.length; i++) {
                  activeBubbles.push(parts[i].trimStart());
                }
                currentRaw = parts[parts.length - 1];
              } else {
                const display =
                  activeBubbles.length === 1 && currentRaw.length < 20 && !currentRaw.includes(" ")
                    ? currentRaw
                    : activeBubbles.length === 1
                    ? stripRepetitiveOpening(currentRaw)
                    : currentRaw;
                activeBubbles[activeBubbles.length - 1] = display;
              }

              setMessages((prev) => {
                const base = prev.slice(0, baseCount);
                const updated = activeBubbles.map((b) => ({
                  role: "assistant",
                  content: b,
                }));
                return [...base, ...updated];
              });
            }
          } catch {
            // Ignore incomplete frame parsing
          }
        }
      }

      setLoading(false);

      // Final pass: clean up empty bubbles and save to persistent storage
      setMessages((prev) => {
        const cleaned = prev
          .map((m) => {
            if (m.role === "assistant") {
              return { ...m, content: m.content.trim() };
            }
            return m;
          })
          .filter((m) => m.content && m.content.length > 0);
        saveMessagesMemory(cleaned);
        return cleaned;
      });
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
          made with ❤️ from <strong>Asher</strong> · Powered by the Oratrice
        </footer>
      </div>

      <MusicToggle />
    </>
  );
}
