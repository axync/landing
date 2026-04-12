import { useRef, useState } from "react";

export const useSpaceSound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const initAudio = () => {
    if (audioCtxRef.current) return;
    const ctx = new (
      window.AudioContext || (window as any).webkitAudioContext
    )();
    const gain = ctx.createGain();
    gain.gain.value = 0.0;

    const osc1 = ctx.createOscillator();
    osc1.frequency.value = 45;
    osc1.type = "sine";
    const osc2 = ctx.createOscillator();
    osc2.frequency.value = 45.4;
    osc2.type = "triangle";

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 150;

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc1.start();
    osc2.start();

    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.05;
    }
    const noiseource = ctx.createBufferSource();
    noiseource.buffer = buffer;
    noiseource.loop = true;

    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "bandpass";
    noiseFilter.frequency.value = 600;
    noiseFilter.Q.value = 0.8;

    noiseource.connect(noiseFilter);
    noiseFilter.connect(gain);
    noiseource.start();

    audioCtxRef.current = ctx;
    gainNodeRef.current = gain;
  };

  const toggleSound = () => {
    if (!audioCtxRef.current) initAudio();
    if (!audioCtxRef.current || !gainNodeRef.current) return;

    if (isPlaying) {
      gainNodeRef.current.gain.setTargetAtTime(
        0,
        audioCtxRef.current.currentTime,
        2.0,
      );
      setIsPlaying(false);
    } else {
      audioCtxRef.current.resume();
      gainNodeRef.current.gain.setTargetAtTime(
        1.0,
        audioCtxRef.current.currentTime,
        4.0,
      );
      setIsPlaying(true);
    }
  };

  return { isPlaying, toggleSound };
};
