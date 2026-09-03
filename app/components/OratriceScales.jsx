"use client";

import { motion } from "framer-motion";
import styles from "./OratriceScales.module.css";

export default function OratriceScales({ balance = 0 }) {
  // Clamp angle to ±18° for visual range
  const angle = (Math.max(-100, Math.min(100, balance)) / 100) * 18;

  // Pan Y offsets relative to arm endpoint (positive = lower)
  const leftPanDrop = angle < 0 ? Math.abs(angle) * 2.2 : 0;
  const rightPanDrop = angle > 0 ? angle * 2.2 : 0;

  // Hydro glow opacity per pan
  const leftOpacity = balance < 0 ? Math.abs(balance) / 100 * 0.75 + 0.15 : 0.12;
  const rightOpacity = balance > 0 ? balance / 100 * 0.75 + 0.15 : 0.12;

  return (
    <div className={`glass ${styles.container}`}>
      <div className={styles.coreGlow} />

      <div className={styles.label}>Oratrice Balance Index</div>

      <div className={styles.svgWrap}>
        {/* viewBox: 300 wide × 180 tall, generous overflow for swing */}
        <svg
          width="300"
          height="180"
          viewBox="0 0 300 180"
          style={{ overflow: "visible" }}
          aria-label="Oratrice Mécanique scales"
        >
          <defs>
            {/* Gold metallic gradient */}
            <linearGradient id="ogGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3a2500" />
              <stop offset="30%" stopColor="#a07820" />
              <stop offset="60%" stopColor="#d4af37" />
              <stop offset="85%" stopColor="#f5e17a" />
              <stop offset="100%" stopColor="#c89a20" />
            </linearGradient>

            {/* Gold edge highlight */}
            <linearGradient id="ogGoldEdge" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f5e17a" stopOpacity="1" />
              <stop offset="100%" stopColor="#7a5800" stopOpacity="1" />
            </linearGradient>

            {/* Hydro teardrop gradient */}
            <radialGradient id="ogHydro" cx="50%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#b0f4ff" />
              <stop offset="45%" stopColor="#00d4ff" />
              <stop offset="100%" stopColor="#0050aa" />
            </radialGradient>

            {/* Pan bowl gradient */}
            <linearGradient id="ogPan" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d4af37" />
              <stop offset="50%" stopColor="#7a5800" />
              <stop offset="100%" stopColor="#3a2800" />
            </linearGradient>

            {/* Dark centre gradient for pillar body */}
            <linearGradient id="ogPillar" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5a3e00" />
              <stop offset="20%" stopColor="#c89a20" />
              <stop offset="50%" stopColor="#f5e17a" />
              <stop offset="80%" stopColor="#c89a20" />
              <stop offset="100%" stopColor="#5a3e00" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="ogGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Soft glow for gem */}
            <filter id="ogGemGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Pan glow */}
            <filter id="ogPanGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ── CENTRAL PILLAR ── */}
          {/* Base platform */}
          <rect x="118" y="158" width="64" height="8" rx="2" fill="url(#ogGold)" />
          <rect x="124" y="154" width="52" height="6" rx="1.5" fill="url(#ogGoldEdge)" />

          {/* Pillar stem — tapered trapezoid with highlights */}
          <path d="M 138 50 L 162 50 L 158 154 L 142 154 Z" fill="url(#ogPillar)" />
          {/* Pillar left edge */}
          <path d="M 138 50 L 142 154 L 143 154 L 139 50 Z" fill="rgba(255,240,180,0.25)" />
          {/* Pillar right edge */}
          <path d="M 162 50 L 158 154 L 159 154 L 163 50 Z" fill="rgba(60,30,0,0.4)" />

          {/* Decorative pillar mid-band */}
          <rect x="139" y="95" width="22" height="4" rx="1" fill="url(#ogGoldEdge)" opacity="0.85" />
          <rect x="141" y="115" width="18" height="3" rx="1" fill="url(#ogGoldEdge)" opacity="0.65" />
          <rect x="141" y="128" width="18" height="3" rx="1" fill="url(#ogGoldEdge)" opacity="0.65" />

          {/* Art Deco neck flare just below gem mount */}
          <path d="M 134 44 L 166 44 L 162 52 L 138 52 Z" fill="url(#ogGold)" />

          {/* Gem mount ring */}
          <circle cx="150" cy="38" r="10" fill="url(#ogGold)" />
          <circle cx="150" cy="38" r="7" fill="#1a0a00" />
          {/* Top hydro gem */}
          <circle cx="150" cy="38" r="5.5" fill="url(#ogHydro)" filter="url(#ogGemGlow)" />
          <ellipse cx="148.5" cy="36.5" rx="2" ry="1.2" fill="rgba(255,255,255,0.6)" />

          {/* ── ROTATING CROSSBEAM ARM GROUP ── */}
          <motion.g
            animate={{ rotate: angle }}
            transition={{ type: "spring", stiffness: 55, damping: 18 }}
            style={{ transformOrigin: "150px 38px" }}
          >
            {/* Main crossbeam — bevelled bar */}
            <rect x="34" y="38" width="232" height="8" rx="4" fill="url(#ogGold)" />
            {/* Highlight line on top */}
            <rect x="40" y="38.5" width="220" height="2" rx="1" fill="rgba(255,240,160,0.35)" />
            {/* Shadow line on bottom */}
            <rect x="40" y="43.5" width="220" height="1.5" rx="0.75" fill="rgba(30,10,0,0.4)" />

            {/* Crossbeam centre Art Deco diamond accent */}
            <polygon points="150,34 155,42 150,46 145,42" fill="url(#ogGoldEdge)" opacity="0.9" />

            {/* Left pivot jewel */}
            <circle cx="38" cy="42" r="5" fill="url(#ogGold)" />
            <circle cx="38" cy="42" r="3" fill="url(#ogHydro)" filter="url(#ogGlow)" opacity="0.9" />

            {/* Right pivot jewel */}
            <circle cx="262" cy="42" r="5" fill="url(#ogGold)" />
            <circle cx="262" cy="42" r="3" fill="url(#ogHydro)" filter="url(#ogGlow)" opacity="0.9" />

            {/* ── LEFT PAN ASSEMBLY (stays vertical via counter-rotate) ── */}
            <motion.g
              animate={{ y: leftPanDrop, rotate: -angle }}
              transition={{ type: "spring", stiffness: 55, damping: 18 }}
              style={{ transformOrigin: "38px 47px" }}
            >
              {/* Chain — 5 oval links */}
              {[0, 1, 2, 3, 4].map((i) => (
                <ellipse
                  key={`lc${i}`}
                  cx="38"
                  cy={52 + i * 9}
                  rx="3"
                  ry="5"
                  fill="none"
                  stroke="url(#ogGoldEdge)"
                  strokeWidth="1.8"
                />
              ))}

              {/* Pan suspension ring */}
              <circle cx="38" cy="99" r="3.5" fill="url(#ogGold)" />

              {/* Pan arm spread */}
              <line x1="38" y1="102" x2="16" y2="112" stroke="#d4af37" strokeWidth="1.5" />
              <line x1="38" y1="102" x2="60" y2="112" stroke="#d4af37" strokeWidth="1.5" />

              {/* Pan bowl — proper crescent */}
              <path
                d="M 12 112 Q 38 130 64 112"
                fill="none"
                stroke="url(#ogGoldEdge)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Pan bottom fill */}
              <path
                d="M 12 112 Q 38 132 64 112 L 60 112 Q 38 128 16 112 Z"
                fill="url(#ogPan)"
                opacity="0.85"
              />

              {/* Left pan hydro glow */}
              <ellipse
                cx="38"
                cy="115"
                rx="18"
                ry="4.5"
                fill="url(#ogHydro)"
                opacity={leftOpacity}
                filter="url(#ogPanGlow)"
              />
            </motion.g>

            {/* ── RIGHT PAN ASSEMBLY ── */}
            <motion.g
              animate={{ y: rightPanDrop, rotate: -angle }}
              transition={{ type: "spring", stiffness: 55, damping: 18 }}
              style={{ transformOrigin: "262px 47px" }}
            >
              {/* Chain — 5 oval links */}
              {[0, 1, 2, 3, 4].map((i) => (
                <ellipse
                  key={`rc${i}`}
                  cx="262"
                  cy={52 + i * 9}
                  rx="3"
                  ry="5"
                  fill="none"
                  stroke="url(#ogGoldEdge)"
                  strokeWidth="1.8"
                />
              ))}

              {/* Pan suspension ring */}
              <circle cx="262" cy="99" r="3.5" fill="url(#ogGold)" />

              {/* Pan arm spread */}
              <line x1="262" y1="102" x2="240" y2="112" stroke="#d4af37" strokeWidth="1.5" />
              <line x1="262" y1="102" x2="284" y2="112" stroke="#d4af37" strokeWidth="1.5" />

              {/* Pan bowl */}
              <path
                d="M 236 112 Q 262 130 288 112"
                fill="none"
                stroke="url(#ogGoldEdge)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 236 112 Q 262 132 288 112 L 284 112 Q 262 128 240 112 Z"
                fill="url(#ogPan)"
                opacity="0.85"
              />

              {/* Right pan hydro glow */}
              <ellipse
                cx="262"
                cy="115"
                rx="18"
                ry="4.5"
                fill="url(#ogHydro)"
                opacity={rightOpacity}
                filter="url(#ogPanGlow)"
              />
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
