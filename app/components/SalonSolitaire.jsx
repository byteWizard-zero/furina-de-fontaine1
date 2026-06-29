"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, HelpCircle, Coffee, Compass, BookOpen } from "lucide-react";
import { playBubble } from "../utils/SoundManager";

const ITEMS = [
  {
    id: "hat",
    name: "🎩 Her Top Hat",
    icon: Sparkles,
    color: "#a5f3fc",
    thought: "A grand prop, isn't it? But when it sits on my head, I am the Hydro Archon. I must hold my head high, lest the crown and the act slip away...",
  },
  {
    id: "tea",
    name: "☕ The Teacup",
    icon: Coffee,
    color: "#fef08a",
    thought: "Chamomile. Neuvillette recommended it for 'restlessness.' I pretend to only drink the rarest, most complex teas on stage, but back here... I just want something warm and sweet.",
  },
  {
    id: "mirror",
    name: "🪞 The Dressing Mirror",
    icon: HelpCircle,
    color: "#fda4af",
    thought: "Hundreds of years... and each time I look into this glass, I must ask myself: Who is the girl looking back? Is she the Archon? Or just a lonely actress who forgot how to stop playing a part?",
  },
  {
    id: "script",
    name: "📜 Stage Script",
    icon: BookOpen,
    color: "#d9f99d",
    thought: "The grandest opera of all has no script. Every day is an improvisation. Every word, every smile... I just hope the director knows how it all ends.",
  },
  {
    id: "vision",
    name: "💧 A Hydro droplet",
    icon: Compass,
    color: "#60a5fa",
    thought: "Water flows, changes shape, and conforms to any vessel. How I wish I could simply flow away sometimes, instead of standing rigid under the burning spotlights.",
  },
];

export default function SalonSolitaire() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [typedText, setTypedText] = useState("");
  const canvasRef = useRef(null);

  // Rain Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = 350);

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = 350;
      }
    };
    window.addEventListener("resize", handleResize);

    // Simple Rain Particles
    const rainCount = 45;
    const drops = Array.from({ length: rainCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      vy: 2 + Math.random() * 3,
      length: 10 + Math.random() * 12,
      opacity: 0.15 + Math.random() * 0.25,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
      ctx.lineWidth = 1;

      drops.forEach((d) => {
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x + 0.5, d.y + d.length);
        ctx.stroke();

        d.y += d.vy;
        if (d.y > height) {
          d.y = -d.length;
          d.x = Math.random() * width;
          d.vy = 2 + Math.random() * 3;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Typing Effect
  useEffect(() => {
    if (!selectedItem) {
      setTypedText("");
      return;
    }

    setTypedText("");
    const targetText = selectedItem.thought;
    let index = 0;
    
    const interval = setInterval(() => {
      setTypedText((prev) => prev + targetText.charAt(index));
      index++;
      if (index >= targetText.length) {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [selectedItem]);

  const selectItem = (item) => {
    playBubble();
    setSelectedItem(item);
  };

  return (
    <div className="glass" style={{ width: "100%", maxWidth: "800px", borderRadius: "20px", overflow: "hidden", position: "relative", minHeight: "420px", display: "flex", flexDirection: "column" }}>
      {/* Background Rain Canvas */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }} />

      {/* Salon Header */}
      <div style={{ padding: "20px", borderBottom: "1px solid rgba(212,175,55,0.2)", zIndex: 2, background: "rgba(0,10,22,0.4)" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#d4af37", fontSize: "1.6rem", display: "flex", alignItems: "center", gap: "10px" }}>
          🪞 Salon Solitaire
        </h2>
        <p style={{ fontStyle: "italic", color: "rgba(212,175,55,0.6)", fontSize: "0.9rem" }}>
          Behind the heavy red curtains, where the drama fades into silence.
        </p>
      </div>

      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr", md: "2fr 3fr", gap: "20px", padding: "20px", zIndex: 2 }}>
        {/* Left: Interactive Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <span style={{ fontSize: "0.85rem", color: "rgba(212,175,55,0.5)", textTransform: "uppercase", letterSpacing: "1px" }}>
            Examine her personal items:
          </span>
          {ITEMS.map((item) => {
            const Icon = item.icon;
            const isCurrent = selectedItem?.id === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => selectItem(item)}
                whileHover={{ x: 6, backgroundColor: "rgba(212,175,55,0.08)" }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  background: isCurrent ? "rgba(212,175,55,0.15)" : "rgba(0,20,40,0.5)",
                  border: isCurrent ? "1px solid #d4af37" : "1px solid rgba(212,175,55,0.15)",
                  color: isCurrent ? "#f5e17a" : "#e8d5a3",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.15rem",
                  width: "100%"
                }}
              >
                <Icon size={20} color={item.color} />
                {item.name}
              </motion.button>
            );
          })}
        </div>

        {/* Right: Solitary Thoughts Display */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: "200px" }}>
          <AnimatePresence mode="wait">
            {selectedItem ? (
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                  background: "rgba(0, 15, 30, 0.6)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <span style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: selectedItem.color,
                    boxShadow: `0 0 8px ${selectedItem.color}`
                  }} />
                  <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "1px" }}>
                    Private Thought
                  </span>
                </div>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.25rem",
                  color: "#e2e8f0",
                  lineHeight: "1.6",
                  fontStyle: "italic",
                  minHeight: "80px"
                }}>
                  {typedText}
                  <span className="cursor-pulse">|</span>
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                style={{
                  textAlign: "center",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.2rem",
                  color: "rgba(212,175,55,0.6)",
                  padding: "40px 20px"
                }}
              >
                Select an item in the room to hear her unspoken words.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <style>{`
        .cursor-pulse {
          animation: blink 0.8s infinite;
          color: #38bdf8;
          font-weight: bold;
        }
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
