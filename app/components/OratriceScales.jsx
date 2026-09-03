"use client";

import { motion } from "framer-motion";
import styles from "./OratriceScales.module.css";

export default function OratriceScales({ balance = 0 }) {
  const angle = (balance / 100) * 18;

  return (
    <div className={`glass ${styles.container}`}>
      <div className={styles.coreGlow} />

      <div className={styles.label}>
        Oratrice Balance Index
      </div>

      <div className={styles.svgWrap}>
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

          <path d="M 135 15 L 145 15 L 145 120 L 160 120 L 160 130 L 120 130 L 120 120 L 135 120 Z" fill="url(#goldGrad)" />
          <circle cx="140" cy="18" r="8" fill="url(#goldGrad)" />
          <circle cx="140" cy="18" r="4" fill="#00f2fe" filter="url(#glow)" />

          <motion.g
            animate={{ rotate: angle }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            style={{ transformOrigin: "140px 30px" }}
          >
            <path d="M 40 28 L 240 28 L 240 32 L 40 32 Z" fill="url(#goldGrad)" />
            <circle cx="45" cy="30" r="3" fill="#d4af37" />
            <circle cx="235" cy="30" r="3" fill="#d4af37" />

            <motion.g
              animate={{ rotate: -angle }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
              style={{ transformOrigin: "45px 30px" }}
            >
              <line x1="45" y1="30" x2="25" y2="90" stroke="#d4af37" strokeWidth="1" opacity="0.7" />
              <line x1="45" y1="30" x2="65" y2="90" stroke="#d4af37" strokeWidth="1" opacity="0.7" />
              <path d="M 20 90 L 70 90 C 70 102, 20 102, 20 90 Z" fill="url(#goldGrad)" />
              <ellipse cx="45" cy="90" rx="20" ry="4" fill="url(#hydroGrad)" opacity={balance < 0 ? Math.abs(balance)/100 * 0.8 + 0.1 : 0.1} filter="url(#glow)" />
            </motion.g>

            <motion.g
              animate={{ rotate: -angle }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
              style={{ transformOrigin: "235px 30px" }}
            >
              <line x1="235" y1="30" x2="215" y2="90" stroke="#d4af37" strokeWidth="1" opacity="0.7" />
              <line x1="235" y1="30" x2="255" y2="90" stroke="#d4af37" strokeWidth="1" opacity="0.7" />
              <path d="M 210 90 L 260 90 C 260 102, 210 102, 210 90 Z" fill="url(#goldGrad)" />
              <ellipse cx="235" cy="90" rx="20" ry="4" fill="url(#hydroGrad)" opacity={balance > 0 ? balance/100 * 0.8 + 0.1 : 0.1} filter="url(#glow)" />
            </motion.g>
          </motion.g>
        </svg>
      </div>

      <div className={styles.readout}>
        <span className={`${styles.readoutSide} ${balance < 0 ? styles.active : ""}`}>
          Accused {balance < 0 ? `(${Math.abs(Math.round(balance))}%)` : ""}
        </span>
        <span className={styles.readoutCenter}>
          {balance === 0 ? "EQUILIBRIUM" : balance < 0 ? "GUILTY TREND" : "INNOCENT TREND"}
        </span>
        <span className={`${styles.readoutSide} ${balance > 0 ? styles.active : ""}`}>
          Defense {balance > 0 ? `(${Math.round(balance)}%)` : ""}
        </span>
      </div>
    </div>
  );
}
