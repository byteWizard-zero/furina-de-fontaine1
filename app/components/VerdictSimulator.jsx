"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gavel, RefreshCw, AlertCircle, ShieldAlert } from "lucide-react";
import { playGavel, playBubble } from "../utils/SoundManager";
import OratriceScales from "./OratriceScales";

const DEFENDANTS = [
  { id: "paimon", name: "Paimon", desc: "The floating emergency food companion." },
  { id: "childe", name: "Childe (Tartaglia)", desc: "11th of the Fatui Harbingers, prone to chaos." },
  { id: "traveler", name: "The Traveler", desc: "Honorary Knight, always in the wrong place at the right time." },
  { id: "neuvillette", name: "Monsieur Neuvillette", desc: "The Chief Justice of Fontaine (how is he accused?!)." },
  { id: "wriothesley", name: "Duke Wriothesley", desc: "Lord of the Fortress of Meropide, tea connoisseur." },
];

const CRIMES = [
  { id: "cake", label: "Grand Larceny of Lady Furina's Double-Chocolate Cake Slices" },
  { id: "dullness", label: "Existing in Fontaine with an unacceptable lack of dramatic flair" },
  { id: "fonta", label: "Stealing Neuvillette's vintage pure spring-water reserves" },
  { id: "oratrice", label: "Cluttering the Oratrice gears with Liyue-made mechanical toys" },
  { id: "spina", label: "Firing the Spina di Rosula cannon salute without a theatrical license" },
];

const VERDICTS = [
  {
    type: "GUILTY",
    score: -95,
    title: "🔒 GUILTY AS CHARGED!",
    text: "The Oratrice Mecanique d'Analyse Cardinale declares the accused GUILTY! The sentence: 5 days of cleaning the Opera Epiclese, followed by mandatory attendance at Lady Furina's rehearsals to learn proper posture.",
  },
  {
    type: "GUILTY_MEROPIDE",
    score: -75,
    title: "⛓️ SENTENCED TO MEROPIDE!",
    text: "Guilty! The defense was utterly lacking in theatrical conviction. The accused is hereby sentenced to the Fortress of Meropide to work the metal presses. Tea breaks are restricted to 5 minutes.",
  },
  {
    type: "INNOCENT_WITH_BUT",
    score: 45,
    title: "⚖️ ACQUITTED (WITH CONDITIONS)",
    text: "Innocent! However, the Court finds the defendant's behavior highly suspicious. They must present Lady Furina with three boxes of Fontaine's finest macarons as restitution for emotional distress.",
  },
  {
    type: "INNOCENT",
    score: 85,
    title: "✨ ABSOLUTELY INNOCENT!",
    text: "The Oratrice swings entirely in favor of the defense! A magnificent declaration of innocence. The accuser is hereby ordered to perform a dramatic solo dance in the fountain plaza to apologize.",
  },
];

export default function VerdictSimulator() {
  const [selectedDefendant, setSelectedDefendant] = useState(DEFENDANTS[0].id);
  const [selectedCrime, setSelectedCrime] = useState(CRIMES[0].id);
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentVerdict, setCurrentVerdict] = useState(null);
  const [simulatorBalance, setSimulatorBalance] = useState(0);

  const handleSimulate = () => {
    if (isSpinning) return;
    
    playBubble();
    setIsSpinning(true);
    setCurrentVerdict(null);
    setSimulatorBalance(0);

    // Simulate scale swinging back and forth dramatically
    let count = 0;
    const interval = setInterval(() => {
      setSimulatorBalance((Math.random() - 0.5) * 160);
      count++;
      if (count > 8) {
        clearInterval(interval);
        
        // Deliver final verdict
        const finalVerdict = VERDICTS[Math.floor(Math.random() * VERDICTS.length)];
        setCurrentVerdict(finalVerdict);
        setSimulatorBalance(finalVerdict.score);
        setIsSpinning(false);
        playGavel();
      }
    }, 200);
  };

  const currentDefObj = DEFENDANTS.find((d) => d.id === selectedDefendant);
  const currentCrimeObj = CRIMES.find((c) => c.id === selectedCrime);

  return (
    <div style={{ width: "100%", maxWidth: "800px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", md: "1fr 1fr", gap: "20px" }}>
        {/* Left Side: Selectors */}
        <div className="glass" style={{ padding: "20px", borderRadius: "16px", display: "flex", flexDirection: "column", gap: "15px" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "#d4af37", display: "flex", alignItems: "center", gap: "10px" }}>
            <ShieldAlert size={24} /> Set Up Trial
          </h2>

          {/* Defendant Selector */}
          <div>
            <label style={{ display: "block", fontSize: "0.85rem", color: "rgba(212,175,55,0.7)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1px" }}>
              The Accused
            </label>
            <select
              value={selectedDefendant}
              onChange={(e) => { playBubble(); setSelectedDefendant(e.target.value); }}
              style={{
                width: "100%",
                background: "rgba(0,35,62,0.9)",
                border: "1px solid rgba(212,175,55,0.4)",
                borderRadius: "8px",
                color: "#e8d5a3",
                padding: "10px",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem",
                outline: "none"
              }}
            >
              {DEFENDANTS.map((def) => (
                <option key={def.id} value={def.id}>
                  {def.name}
                </option>
              ))}
            </select>
            <p style={{ fontSize: "0.8rem", color: "rgba(232,213,163,0.5)", marginTop: "4px", fontStyle: "italic" }}>
              {currentDefObj?.desc}
            </p>
          </div>

          {/* Crime Selector */}
          <div>
            <label style={{ display: "block", fontSize: "0.85rem", color: "rgba(212,175,55,0.7)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1px" }}>
              The Charge
            </label>
            <select
              value={selectedCrime}
              onChange={(e) => { playBubble(); setSelectedCrime(e.target.value); }}
              style={{
                width: "100%",
                background: "rgba(0,35,62,0.9)",
                border: "1px solid rgba(212,175,55,0.4)",
                borderRadius: "8px",
                color: "#e8d5a3",
                padding: "10px",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.1rem",
                outline: "none"
              }}
            >
              {CRIMES.map((crime) => (
                <option key={crime.id} value={crime.id}>
                  {crime.label}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleSimulate}
            disabled={isSpinning}
            className="request-btn"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontSize: "1.1rem"
            }}
          >
            {isSpinning ? (
              <>
                <RefreshCw className="animate-spin" size={20} /> Oratrice Analyzing...
              </>
            ) : (
              <>
                <Gavel size={20} /> Initiate Judgment
              </>
            )}
          </button>
        </div>

        {/* Right Side: Scale Display */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <OratriceScales balance={simulatorBalance} />
          
          <AnimatePresence mode="wait">
            {currentVerdict && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.95 }}
                className="glass"
                style={{
                  padding: "20px",
                  borderRadius: "16px",
                  borderLeft: `5px solid ${currentVerdict.score < 0 ? "#00f2fe" : "#d4af37"}`,
                  background: "linear-gradient(135deg, rgba(0,25,44,0.9), rgba(0,38,68,0.95))"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                  <AlertCircle color={currentVerdict.score < 0 ? "#00f2fe" : "#d4af37"} />
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", color: currentVerdict.score < 0 ? "#00f2fe" : "#d4af37" }}>
                    {currentVerdict.title}
                  </h3>
                </div>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.15rem",
                  color: "#e8d5a3",
                  lineHeight: "1.5"
                }}>
                  {currentVerdict.text}
                </p>
                <div style={{ fontSize: "0.8rem", color: "rgba(212,175,55,0.4)", marginTop: "12px", textAlign: "right" }}>
                  Case: {currentDefObj?.name} - vs - The Court of Fontaine
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <style>{`
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
