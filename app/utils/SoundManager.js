// SoundManager.js - Web Audio API Sound Synthesizer
// Created for the Opera Epiclese, Court of Fontaine

let audioCtx = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    // Create audio context lazily on user gesture
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Synthesizes a wood-on-wood "Gavel Strike" sound with a courtroom echo.
 */
export function playGavel() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // 1. Strike transient (high-frequency crack)
  const transientOsc = ctx.createOscillator();
  const transientGain = ctx.createGain();
  transientOsc.type = 'triangle';
  transientOsc.frequency.setValueAtTime(900, now);
  transientOsc.frequency.exponentialRampToValueAtTime(120, now + 0.05);

  transientGain.gain.setValueAtTime(0.8, now);
  transientGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

  transientOsc.connect(transientGain);

  // 2. Resonant body (wood block resonance)
  const bodyOsc = ctx.createOscillator();
  const bodyGain = ctx.createGain();
  bodyOsc.type = 'sine';
  bodyOsc.frequency.setValueAtTime(160, now);
  bodyOsc.frequency.linearRampToValueAtTime(130, now + 0.15);

  bodyGain.gain.setValueAtTime(0.7, now);
  bodyGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

  bodyOsc.connect(bodyGain);

  // 3. Courtroom Reverb effect (using a simple Delay + Feedback loop)
  const delay = ctx.createDelay();
  const feedback = ctx.createGain();
  delay.delayTime.value = 0.08; // 80ms delay reflection
  feedback.gain.value = 0.35;    // Echo attenuation

  // Connect oscillators to delay loop and main output
  const mainGain = ctx.createGain();
  mainGain.gain.setValueAtTime(0.5, now);

  transientGain.connect(mainGain);
  bodyGain.connect(mainGain);

  // Set up feedback echo loop
  mainGain.connect(delay);
  delay.connect(feedback);
  feedback.connect(delay);
  
  // Connect both direct and echo paths to output
  mainGain.connect(ctx.destination);
  delay.connect(ctx.destination);

  // Start & Stop
  transientOsc.start(now);
  transientOsc.stop(now + 0.06);
  bodyOsc.start(now);
  bodyOsc.stop(now + 0.3);
}

/**
 * Synthesizes a bubbly water droplet sound.
 */
export function playBubble() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  // Rapid upward frequency sweep simulates bubble shape change
  osc.type = 'sine';
  osc.frequency.setValueAtTime(250, now);
  osc.frequency.exponentialRampToValueAtTime(850, now + 0.18);

  // Quick swell and fade
  gain.gain.setValueAtTime(0.001, now);
  gain.gain.linearRampToValueAtTime(0.25, now + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.22);
}

/**
 * Synthesizes a mechanical glitching hover/error sound.
 */
export function playGlitch() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sawtooth';
  // Play a rapid pitch oscillation
  osc.frequency.setValueAtTime(90, now);
  osc.frequency.setValueAtTime(140, now + 0.04);
  osc.frequency.setValueAtTime(60, now + 0.08);
  osc.frequency.setValueAtTime(180, now + 0.12);
  osc.frequency.setValueAtTime(50, now + 0.16);

  gain.gain.setValueAtTime(0.15, now);
  gain.gain.setValueAtTime(0.05, now + 0.06);
  gain.gain.setValueAtTime(0.15, now + 0.12);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.24);
}
