"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Music2 } from "lucide-react";
import styles from "./MusicToggle.module.css";

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
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        // Handle playback error or autoplay policy restrictions
      });
      setIsPlaying(true);
    }
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
        type="button"
        className={styles.btn}
        onClick={toggleMusic}
        aria-label="Toggle background music"
      >
        {isPlaying ? (
          <Music size={20} color="#0d0900" />
        ) : (
          <Music2 size={20} color="#0d0900" />
        )}
      </button>
    </>
  );
}
