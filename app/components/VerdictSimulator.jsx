"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gavel, RefreshCw, AlertCircle, ShieldAlert } from "lucide-react";
import { playGavel, playBubble } from "../utils/SoundManager";
import OratriceScales from "./OratriceScales";
import styles from "./VerdictSimulator.module.css";

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
    title: "GUILTY AS CHARGED!",
    text: "The Oratrice Mecanique d'Analyse Cardinale declares the accused GUILTY! The sentence: 5 days of cleaning the Opera Epiclese, followed by mandatory attendance at Lady Furina's rehearsals to learn proper posture.",
  },
  {
    type: "GUILTY_MEROPIDE",
    score: -75,
    title: "SENTENCED TO MEROPIDE!",
    text: "Guilty! The defense was utterly lacking in theatrical conviction. The accused is hereby sentenced to the Fortress of Meropide to work the metal presses. Tea breaks are restricted to 5 minutes.",
  },
  {
    type: "INNOCENT_WITH_BUT",
    score: 45,
    title: "ACQUITTED (WITH CONDITIONS)",
    text: "Innocent! However, the Court finds the defendant's behavior highly suspicious. They must present Lady Furina with three boxes of Fontaine's finest macarons as restitution for emotional distress.",
  },
  {
    type: "INNOCENT",
    score: 85,
    title: "ABSOLUTELY INNOCENT!",
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

    let count = 0;
    const interval = setInterval(() => {
      setSimulatorBalance((Math.random() - 0.5) * 160);
      count++;
      if (count > 8) {
        clearInterval(interval);
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
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {/* Setup Column */}
        <div className={`glass ${styles.setupPanel}`}>
          <h3 className={styles.panelTitle}>
            <ShieldAlert size={20} />
            Case Configuration
          </h3>
          
          <div>
            <label className={styles.fieldLabel}>Accused Individual</label>
            <select
              className={styles.select}
              value={selectedDefendant}
              onChange={(e) => setSelectedDefendant(e.target.value)}
              disabled={isSpinning}
            >
              {DEFENDANTS.map((def) => (
                <option key={def.id} value={def.id}>
                  {def.name}
                </option>
              ))}
            </select>
            <span className={styles.fieldHint}>{currentDefObj?.desc}</span>
          </div>

          <div>
            <label className={styles.fieldLabel}>Formal Charge</label>
            <select
              className={styles.select}
              value={selectedCrime}
              onChange={(e) => setSelectedCrime(e.target.value)}
              disabled={isSpinning}
            >
              {CRIMES.map((crime) => (
                <option key={crime.id} value={crime.id}>
                  {crime.label}
                </option>
              ))}
            </select>
          </div>

          <button
            className={`request-btn ${styles.simulateBtn}`}
            onClick={handleSimulate}
            disabled={isSpinning}
          >
            <Gavel size={18} className={isSpinning ? "animate-spin" : ""} />
            {isSpinning ? "Deliberating..." : "Request Verdict"}
          </button>
        </div>

        {/* Results Column */}
        <div className={styles.resultsCol}>
          <div className={`glass ${styles.setupPanel}`}>
            <OratriceScales balance={simulatorBalance} />
          </div>

          <AnimatePresence>
            {currentVerdict && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`glass ${styles.verdictCard}`}
                style={{
                  borderLeftColor:
                    currentVerdict.score < 0
                      ? "var(--danger)"
                      : "var(--hydro-glow)",
                }}
              >
                <div className={styles.verdictHeader}>
                  {currentVerdict.score < 0 ? (
                    <AlertCircle size={24} color="var(--danger)" />
                  ) : (
                    <RefreshCw size={24} color="var(--hydro-glow)" />
                  )}
                  <h4
                    className={styles.verdictTitle}
                    style={{
                      color:
                        currentVerdict.score < 0
                          ? "var(--danger)"
                          : "var(--hydro-glow)",
                    }}
                  >
                    {currentVerdict.title}
                  </h4>
                </div>
                <p className={styles.verdictText}>{currentVerdict.text}</p>
                <p className={styles.verdictCase}>
                  Case: {currentDefObj?.name} vs. The State of Fontaine
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
