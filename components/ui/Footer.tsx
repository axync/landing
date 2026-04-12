import React from "react";

export function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 w-full p-6 z-50 flex justify-between items-end pointer-events-none mix-blend-difference">
      <div className="flex flex-col gap-2 pointer-events-auto relative">
        <div className="absolute -left-2 -top-2 w-1 h-1 bg-white/20"></div>
        <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">
          Active Nodes
        </span>
        <div className="flex gap-6 mt-1">
          <a
            href="https://x.com/axync_xyz"
            target="_blank"
            className="text-white hover:text-[#ff3300] transition-colors text-[10px] uppercase font-mono tracking-widest"
          >
            X / Twitter
          </a>
          <a
            href="https://github.com/axync"
            target="_blank"
            className="text-white hover:text-[#00eeff] transition-colors text-[10px] uppercase font-mono tracking-widest"
          >
            GitHub
          </a>
          <a
            href="mailto:info@axync.xyz"
            className="text-white hover:text-[#e100ff] transition-colors text-[10px] uppercase font-mono tracking-widest"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="text-right flex flex-col items-end gap-2 pointer-events-auto">
        <span className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-white/60">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00eeff] shadow-[0_0_8px_#00eeff] animate-pulse"></span>
          PROTOCOL_ONLINE
        </span>
        <span className="text-[9px] font-mono tracking-widest text-white/20">
          © 2026 AXYNC PROTOCOL
        </span>
      </div>
    </footer>
  );
}
