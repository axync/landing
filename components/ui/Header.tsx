import React from "react";
import { useSpaceSound } from "../../hooks/useSpaceSound";

export function Header() {
  const { isPlaying, toggleSound } = useSpaceSound();

  return (
    <header className="absolute top-0 left-0 w-full p-6 z-50 flex justify-between items-center pointer-events-none mix-blend-difference border-b border-white/5">
      <div className="flex items-center gap-3 md:gap-6">
        <div className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase pointer-events-auto cursor-pointer">
          AXYNC<span className="font-light text-white/40">_PROTOCOL</span>
        </div>
        <div className="flex gap-1 md:gap-2">
          <span className="block w-0.5 md:w-1 h-3 bg-white/30"></span>
          <span className="block w-0.5 md:w-1 h-3 bg-white/60"></span>
          <span className="block w-0.5 md:w-1 h-3 bg-white"></span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button
          onClick={toggleSound}
          className="pointer-events-auto flex items-center gap-2 group"
        >
          <div className="flex gap-0.5 items-end h-3">
            <span
              className={`w-[2px] bg-white transition-all duration-300 ${isPlaying ? "h-full animate-pulse" : "h-[2px]"}`}
            ></span>
            <span
              className={`w-[2px] bg-white transition-all duration-300 delay-75 ${isPlaying ? "h-2/3 animate-pulse" : "h-[2px]"}`}
            ></span>
            <span
              className={`w-[2px] bg-white transition-all duration-300 delay-150 ${isPlaying ? "h-full animate-pulse" : "h-[2px]"}`}
            ></span>
          </div>
          <span className="text-[9px] font-mono tracking-widest text-white/40 group-hover:text-white transition-colors">
            {isPlaying ? "AUDIO_ON" : "AUDIO_OFF"}
          </span>
        </button>

        <a
          href="https://axync.gitbook.io/axync-docs/"
          target="_blank"
          className="hidden md:block pointer-events-auto text-[10px] font-mono tracking-widest text-white/50 hover:text-[#00eeff] transition-colors uppercase"
        >
          Specs
        </a>

        <a
          href="https://github.com/axync"
          target="_blank"
          className="hidden md:block pointer-events-auto text-[10px] font-mono tracking-widest text-white/50 hover:text-[#e100ff] transition-colors uppercase"
        >
          GitHub
        </a>

        <a
          href="https://app.axync.xyz"
          target="_blank"
          className="pointer-events-auto px-4 md:px-6 py-2 border border-white/20 text-[9px] md:text-[10px] tracking-widest uppercase hover:bg-white hover:text-black transition-all bg-black/50 backdrop-blur-sm"
        >
          ENTER_MARKET
        </a>
      </div>
    </header>
  );
}
