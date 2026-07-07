"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Music2 } from "lucide-react";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/fontaine-theme.ogg"
        loop
        onEnded={() => setIsPlaying(false)}
      />
      <button
        onClick={toggleMusic}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 100,
          background: "linear-gradient(135deg, #7a5800, #c9960c, #f5e17a, #d4af37)",
          border: "none",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 15px rgba(212,175,55,0.4)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(212,175,55,0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(212,175,55,0.4)";
        }}
      >
        {isPlaying ? (
          <Music size={24} color="#0d0900" />
        ) : (
          <Music2 size={24} color="#0d0900" />
        )}
      </button>
    </>
  );
}
