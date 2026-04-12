import React from "react";
import { ScrambleText } from "./ScrambleText";

export function MainScrollOverlay() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center md:items-start px-6 md:px-[10%] pointer-events-none text-center md:text-left">
        <div className="w-full max-w-2xl px-6 md:px-8 py-10 border-l border-[#ffaa00]/40 bg-black/60 backdrop-blur-[16px] shadow-2xl">
          <ScrambleText
            as="p"
            text="[ NETWORK: ACTIVE ]"
            className="text-[9px] md:text-[10px] font-mono tracking-[0.4em] text-[#ffaa00]/70 mb-4 md:mb-6 uppercase"
          />
          <h2 className="text-white text-5xl md:text-8xl font-light mb-2 tracking-tighter leading-none">
            TRADE TOKENS.
          </h2>
          <h2 className="text-[#ffaa00] text-4xl md:text-7xl font-bold mb-8 md:mb-12 tracking-widest leading-none drop-shadow-[0_0_15px_rgba(255,170,0,0.3)]">
            ANY CHAIN.
          </h2>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <span className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#ffaa00] shadow-[0_0_10px_#ffaa00] animate-pulse"></span>
            <span className="text-[9px] md:text-[10px] font-mono tracking-[0.3em] uppercase text-white font-bold">
              Instant P2P Marketplace
            </span>
          </div>
        </div>
      </div>

      <div className="h-screen flex flex-col justify-center items-center md:items-end px-6 md:px-[10%] pointer-events-none text-center md:text-right">
        <div className="w-full max-w-2xl px-6 md:px-8 py-10 border-r border-[#ff3300]/40 bg-black/60 backdrop-blur-[16px] flex flex-col items-center md:items-end shadow-2xl">
          <ScrambleText
            as="h3"
            text="[ SYSTEM: BROKEN ]"
            className="text-[#ff3300]/70 text-[9px] md:text-[10px] font-mono tracking-[0.4em] mb-4 md:mb-6 uppercase"
          />
          <h2 className="text-white text-3xl md:text-6xl uppercase tracking-[0.1em] mb-6 md:mb-8 font-light leading-tight text-center md:text-right">
            TRADING IS{" "}
            <span className="text-[#ff3300] font-bold">FRAGMENTED</span>
          </h2>
          <p className="text-white/80 text-[11px] md:text-sm font-mono leading-relaxed mb-8 md:mb-12 max-w-xl text-center md:text-right">
            OTC deals require trust. Bridges are{" "}
            <span className="text-white font-bold">slow and risky</span>
            . Liquidity is trapped in silos. We built the zero-trust solution out of necessity.
          </p>
          <a
            href="https://axync.gitbook.io/axync-docs/"
            target="_blank"
            className="pointer-events-auto px-8 md:px-10 py-3 md:py-4 border border-[#ff3300]/50 text-[9px] md:text-[10px] uppercase font-mono tracking-[0.3em] text-[#ff3300] hover:bg-[#ff3300] hover:text-black transition-all bg-transparent self-center md:self-end text-center"
          >
            READ_DOCUMENTATION
          </a>
        </div>
      </div>

      <div className="h-screen flex flex-col justify-center items-center md:items-start px-6 md:px-[10%] pointer-events-none text-center md:text-left">
        <div className="w-full max-w-2xl px-6 md:px-8 py-10 border-l border-[#ff3300]/40 bg-black/60 backdrop-blur-[16px] shadow-2xl">
          <ScrambleText
            as="h3"
            text="[ AXYNC: BYPASS ]"
            className="text-[#ff3300] text-[9px] md:text-[10px] font-mono tracking-[0.4em] mb-4 md:mb-6 uppercase"
          />
          <h2 className="text-white text-3xl md:text-5xl uppercase tracking-[0.1em] mb-6 md:mb-8 font-light text-center md:text-left">
            NO BRIDGES.{" "}
            <span className="text-[#ff3300] font-bold">NO WRAPPING.</span>
          </h2>
          <p className="text-white/80 text-[11px] md:text-sm font-mono leading-relaxed mb-8 md:mb-12 max-w-xl text-center md:text-left">
            Axync{" "}
            <span className="text-white font-bold">decouples assets</span>{" "}
            from their native chains. Just lock and swap. Atomic ownership change occurs instantly on-chain.
          </p>
          <a
            href="https://app.axync.xyz"
            target="_blank"
            className="pointer-events-auto px-8 md:px-10 py-3 md:py-4 border border-[#ff3300]/50 text-[9px] md:text-[10px] uppercase font-mono tracking-[0.3em] text-[#ff3300] hover:bg-[#ff3300] hover:text-black transition-all bg-transparent self-center md:self-start text-center"
          >
            LAUNCH_PROTOCOL
          </a>
        </div>
      </div>

      <div className="h-screen flex flex-col justify-center items-center md:items-end px-6 md:px-[10%] pointer-events-none text-center md:text-right">
        <div className="w-full max-w-2xl px-6 md:px-8 py-10 border-r border-[#00eeff]/40 bg-black/60 backdrop-blur-[16px] flex flex-col items-center md:items-end shadow-2xl">
          <ScrambleText
            as="h3"
            text="[ PROCESS: ATOMIC ]"
            className="text-[#00eeff] text-[9px] md:text-[10px] font-mono tracking-[0.4em] mb-4 md:mb-6 uppercase"
          />
          <h2 className="text-white text-3xl md:text-5xl uppercase tracking-[0.1em] mb-8 md:mb-12 font-light text-center md:text-right">
            LOCK. MATCH. <span className="text-[#00eeff] font-bold">SETTLE.</span>
          </h2>

          <div className="flex flex-col gap-4 md:gap-6 items-center md:items-end w-full">
            {[
              { id: "01", title: "LOCK", desc: "List tokens into ZK-escrow" },
              { id: "02", title: "MATCH", desc: "Buyer deposits on any chain" },
              { id: "03", title: "SETTLE", desc: "Ownership swaps instantly" },
            ].map((step) => (
              <div key={step.id} className="flex items-center justify-center md:justify-end gap-4 md:gap-6 group">
                <div className="text-center md:text-right">
                  <div className="text-[9px] md:text-[10px] font-mono text-[#00eeff] font-bold tracking-widest">
                    {step.title}
                  </div>
                  <div className="text-[10px] md:text-[11px] text-white/60 font-mono">{step.desc}</div>
                </div>
                <div className="text-3xl md:text-5xl font-bold text-white/10 group-hover:text-[#00eeff] transition-colors font-mono">
                  {step.id}
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://app.axync.xyz"
            target="_blank"
            className="pointer-events-auto mt-8 md:mt-12 px-8 md:px-10 py-3 md:py-4 border border-[#00eeff]/50 text-[9px] md:text-[10px] uppercase font-mono tracking-[0.3em] text-[#00eeff] hover:bg-[#00eeff] hover:text-black transition-all bg-transparent self-center md:self-end text-center"
          >
            EXPLORE_MARKET
          </a>
        </div>
      </div>

      <div className="h-screen flex flex-col justify-center items-center md:items-start px-6 md:px-[10%] pointer-events-none text-center md:text-left">
        <div className="w-full max-w-2xl px-6 md:px-8 py-10 border-l border-[#e100ff]/40 bg-black/60 backdrop-blur-[16px] shadow-2xl">
          <ScrambleText
            as="h3"
            text="[ ENGINE: VERIFIED ]"
            className="text-[#e100ff]/70 text-[9px] md:text-[10px] font-mono tracking-[0.4em] mb-4 md:mb-6 uppercase"
          />
          <h2 className="text-white text-3xl md:text-5xl uppercase tracking-[0.1em] mb-6 md:mb-8 font-light text-center md:text-left">
            <span className="text-white font-bold">ZERO TRUST.</span> <span className="text-[#e100ff]">ZERO RISK.</span>
          </h2>
          <p className="text-white/80 text-[11px] md:text-sm font-mono leading-relaxed mb-8 md:mb-12 max-w-xl text-center md:text-left">
            <span className="text-[#00eeff] font-bold">0 Bridges</span> required.{" "}
            <span className="text-[#e100ff] font-bold">5s Block</span> finality. ZK-Proven batches via on-chain merkle roots.
          </p>
          <a
            href="https://axync.gitbook.io/axync-docs/"
            target="_blank"
            className="pointer-events-auto px-8 md:px-10 py-3 md:py-4 border border-[#e100ff]/50 text-[9px] md:text-[10px] uppercase font-mono tracking-[0.3em] text-[#e100ff] hover:bg-[#e100ff] hover:text-black transition-all bg-transparent self-center md:self-start text-center"
          >
            TECHNICAL_SPECS
          </a>
        </div>
      </div>

      <div className="h-screen flex flex-col justify-center items-center px-6 text-center pointer-events-none">
        <div className="w-full max-w-3xl px-6 md:px-8 py-10 md:py-16 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl flex flex-col items-center">
          <ScrambleText
            as="h3"
            text="[ ACCESS: GRANTED ]"
            className="text-white/50 text-[9px] md:text-[10px] font-mono tracking-[0.4em] mb-6 md:mb-8 uppercase"
          />
          <h2 className="text-white text-2xl md:text-5xl font-light tracking-[0.2em] uppercase mb-10 md:mb-16 max-w-lg mx-auto leading-tight text-center">
            UNIFY LIQUIDITY
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 pointer-events-auto w-full sm:w-auto">
            <a
              href="https://app.axync.xyz"
              target="_blank"
              className="px-8 md:px-12 py-4 md:py-5 bg-white text-black text-[9px] md:text-[10px] font-mono font-bold tracking-[0.4em] uppercase hover:scale-95 transition-transform text-center"
            >
              Enter Market
            </a>
            <a
              href="https://github.com/axync"
              target="_blank"
              className="px-8 md:px-12 py-4 md:py-5 border border-white/30 text-white text-[9px] md:text-[10px] font-mono tracking-[0.4em] uppercase hover:bg-white/10 transition-colors text-center"
            >
              View Source
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
