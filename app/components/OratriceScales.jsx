"use client";

import { motion } from "framer-motion";

/**
 * OratriceScales Component
 * Represents the Oratrice Mecanique d'Analyse Cardinale's scales.
 * @param {number} balance - The current verdict balance from -100 (Guilty/Accused) to +100 (Innocent/Defense).
 */
export default function OratriceScales({ balance = 0 }) {
  // Convert -100 to 100 range to degrees of tilt (-20 to 20 deg)
  const angle = (balance / 100) * 18;

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      background: "rgba(0, 15, 30, 0.4)",
      border: "1px solid rgba(212, 175, 55, 0.2)",
      borderRadius: "16px",
      backdropFilter: "blur(12px)",
      boxShadow: "inset 0 0 20px rgba(212, 175, 55, 0.1)",
      width: "100%",
      maxWidth: "340px",
      margin: "0 auto 20px auto",
      position: "relative"
    }}>
      {/* Oratrice Core Glow */}
      <div style={{
        position: "absolute",
        top: "-15px",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        background: "radial-gradient(circle, #38bdf8 0%, rgba(56,189,248,0) 70%)",
        boxShadow: "0 0 15px #38bdf8",
        animation: "pulse 2s infinite ease-in-out"
      }} />

      {/* Label */}
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "0.85rem",
        color: "#d4af37",
        letterSpacing: "2px",
        textTransform: "uppercase",
        marginBottom: "15px",
        textAlign: "center",
        textShadow: "0 0 8px rgba(212, 175, 55, 0.4)"
      }}>
        Oratrice Balance Index
      </div>

      {/* SVG Scale Structure */}
      <svg width="280" height="150" viewBox="0 0 280 150" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7a5800" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#f5e17a" />
          </linearGradient>
          <linearGradient id="hydroGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00f2fe" />
            <stop offset="100%" stopColor="#4facfe" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Center Pillar */}
        <path d="M 135 15 L 145 15 L 145 120 L 160 120 L 160 130 L 120 130 L 120 120 L 135 120 Z" fill="url(#goldGrad)" />
        <circle cx="140" cy="18" r="8" fill="url(#goldGrad)" />
        {/* Core Jewel */}
        <circle cx="140" cy="18" r="4" fill="#00f2fe" filter="url(#glow)" />

        {/* Rotating Crossbar & Hanging Pans */}
        <motion.g
          animate={{ rotate: angle }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          style={{ transformOrigin: "140px 30px" }}
        >
          {/* Main Crossbeam */}
          <path d="M 40 28 L 240 28 L 240 32 L 40 32 Z" fill="url(#goldGrad)" />
          {/* Left hanging hooks */}
          <circle cx="45" cy="30" r="3" fill="#d4af37" />
          {/* Right hanging hooks */}
          <circle cx="235" cy="30" r="3" fill="#d4af37" />

          {/* Left Pan Assembly (counter-rotated to stay upright) */}
          <motion.g
            animate={{ rotate: -angle }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            style={{ transformOrigin: "45px 30px" }}
          >
            {/* Hanging strings */}
            <line x1="45" y1="30" x2="25" y2="90" stroke="#d4af37" strokeWidth="1" opacity="0.7" />
            <line x1="45" y1="30" x2="65" y2="90" stroke="#d4af37" strokeWidth="1" opacity="0.7" />
            {/* Plate */}
            <path d="M 20 90 L 70 90 C 70 102, 20 102, 20 90 Z" fill="url(#goldGrad)" />
            {/* Hydro energy on left plate */}
            <ellipse cx="45" cy="90" rx="20" ry="4" fill="url(#hydroGrad)" opacity={balance < 0 ? Math.abs(balance)/100 * 0.8 + 0.1 : 0.1} filter="url(#glow)" />
          </motion.g>

          {/* Right Pan Assembly (counter-rotated to stay upright) */}
          <motion.g
            animate={{ rotate: -angle }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            style={{ transformOrigin: "235px 30px" }}
          >
            {/* Hanging strings */}
            <line x1="235" y1="30" x2="215" y2="90" stroke="#d4af37" strokeWidth="1" opacity="0.7" />
            <line x1="235" y1="30" x2="255" y2="90" stroke="#d4af37" strokeWidth="1" opacity="0.7" />
            {/* Plate */}
            <path d="M 210 90 L 260 90 C 260 102, 210 102, 210 90 Z" fill="url(#goldGrad)" />
            {/* Hydro energy on right plate */}
            <ellipse cx="235" cy="90" rx="20" ry="4" fill="url(#hydroGrad)" opacity={balance > 0 ? balance/100 * 0.8 + 0.1 : 0.1} filter="url(#glow)" />
          </motion.g>
        </motion.g>
      </svg>

      {/* Numerical and State Readout */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginTop: "10px",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "0.95rem"
      }}>
        <span style={{ color: balance < 0 ? "#00f2fe" : "rgba(212,175,55,0.5)", fontWeight: balance < 0 ? "bold" : "normal" }}>
          Accused {balance < 0 ? `(${Math.abs(Math.round(balance))}%)` : ""}
        </span>
        <span style={{ color: "#d4af37", fontWeight: "bold" }}>
          {balance === 0 ? "EQUILIBRIUM" : balance < 0 ? "⚖️ GUILTY TREND" : "⚖️ INNOCENT TREND"}
        </span>
        <span style={{ color: balance > 0 ? "#00f2fe" : "rgba(212,175,55,0.5)", fontWeight: balance > 0 ? "bold" : "normal" }}>
          Defense {balance > 0 ? `(${Math.round(balance)}%)` : ""}
        </span>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
