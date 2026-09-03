"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playBubble } from "../utils/SoundManager";
import { Sparkles, Coffee, HelpCircle, BookOpen, Compass, CloudRain } from "lucide-react";
import styles from "./SalonSolitaire.module.css";

const ITEMS = [
  {
    id: "hat",
    name: "Her Top Hat",
    icon: Sparkles,
    color: "#a5f3fc",
    thought: "A grand prop, isn't it? But when it sits on my head, I am the Hydro Archon. I must hold my head high, lest the crown and the act slip away...",
  },
  {
    id: "tea",
    name: "The Teacup",
    icon: Coffee,
    color: "#fef08a",
    thought: "Chamomile. Neuvillette recommended it for 'restlessness.' I pretend to only drink the rarest, most complex teas on stage, but back here... I just want something warm and sweet.",
  },
  {
    id: "mirror",
    name: "The Dressing Mirror",
    icon: HelpCircle,
    color: "#fda4af",
    thought: "Hundreds of years... and each time I look into this glass, I must ask myself: Who is the girl looking back? Is she the Archon? Or just a lonely actress who forgot how to stop playing a part?",
  },
  {
    id: "script",
    name: "Stage Script",
    icon: BookOpen,
    color: "#d9f99d",
    thought: "The grandest opera of all has no script. Every day is an improvisation. Every word, every smile... I just hope the director knows how it all ends.",
  },
  {
    id: "vision",
    name: "A Hydro Droplet",
    icon: Compass,
    color: "#60a5fa",
    thought: "Water flows, changes shape, and conforms to any vessel. How I wish I could simply flow away sometimes, instead of standing rigid under the burning spotlights.",
  },
];

export default function SalonSolitaire() {
  const [activeItem, setActiveItem] = useState(null);
  const [displayedThought, setDisplayedThought] = useState("");
  const canvasRef = useRef(null);
  const typingRef = useRef(null);

  // Rain Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let drops = [];

    const resize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 50; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        len: Math.random() * 15 + 10,
        speed: Math.random() * 4 + 2,
        opacity: Math.random() * 0.2 + 0.05
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 1;
      
      drops.forEach(drop => {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.len);
        ctx.strokeStyle = `rgba(165, 243, 252, ${drop.opacity})`;
        ctx.stroke();

        drop.y += drop.speed;
        if (drop.y > canvas.height) {
          drop.y = -drop.len;
          drop.x = Math.random() * canvas.width;
        }
      });
      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Typing effect
  useEffect(() => {
    if (!activeItem) return;

    if (typingRef.current) clearInterval(typingRef.current);
    
    setDisplayedThought("");
    const targetText = activeItem.thought;
    let i = 0;

    typingRef.current = setInterval(() => {
      setDisplayedThought(targetText.substring(0, i + 1));
      i++;
      if (i >= targetText.length) {
        clearInterval(typingRef.current);
      }
    }, 30);

    return () => clearInterval(typingRef.current);
  }, [activeItem]);

  const handleItemClick = (item) => {
    if (activeItem?.id !== item.id) {
      playBubble();
      setActiveItem(item);
    }
  };

  return (
    <div className={`glass ${styles.container}`}>
      <canvas ref={canvasRef} className={styles.rainCanvas} />
      
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <CloudRain size={24} />
          <h2>Salon Solitaire</h2>
        </div>
        <p className={styles.headerSubtitle}>The lonely hours after the curtain falls</p>
      </div>

      <div className={styles.content}>
        <div className={styles.itemsList}>
          <h3 className={styles.itemsLabel}>Personal Items</h3>
          {ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem?.id === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`${styles.itemBtn} ${isActive ? styles.itemBtnActive : ""}`}
                aria-pressed={isActive}
              >
                <Icon size={20} color={item.color} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        <div className={styles.thoughtPanel}>
          <AnimatePresence mode="wait">
            {activeItem ? (
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={styles.thoughtCard}
              >
                <div className={styles.thoughtLabel}>
                  <div 
                    className={styles.thoughtDot} 
                    style={{ 
                      backgroundColor: activeItem.color,
                      boxShadow: `0 0 8px ${activeItem.color}`
                    }}
                  />
                  <span>Inner Monologue</span>
                </div>
                <p className={styles.thoughtText}>
                  "{displayedThought}<span className="cursor-pulse">_</span>"
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.emptyState}
              >
                Select an item to hear her thoughts...
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
