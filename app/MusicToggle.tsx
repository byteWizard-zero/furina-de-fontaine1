"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Playback blocked until user interaction."));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <audio ref={audioRef} src="/fontaine-theme.mp3" loop />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggle}
        className="bg-blue-900/80 border border-blue-400 p-3 rounded-full text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
      >
        {isPlaying ? "🔊 Playing" : "🔈 Play Theme"}
      </motion.button>
    </div>
  );
}
