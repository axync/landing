"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./Animate";

const chains = [
  { name: "Ethereum", letter: "⬡", color: "#627EEA", status: "live" as const },
  { name: "Base", letter: "B", color: "#0052FF", status: "live" as const },
  { name: "Arbitrum", letter: "A", color: "#28A0F0", status: "soon" as const },
  { name: "Optimism", letter: "O", color: "#FF0420", status: "soon" as const },
];

export function Chains() {
  return (
    <section id="chains" className="relative mx-auto max-w-[1200px] overflow-hidden px-6 py-28">
      <div className="glow bg-lavender/[0.10] absolute left-0 top-[5%] h-[350px] w-[350px]" />
      <div className="glow bg-ice/[0.08] absolute bottom-[10%] right-0 h-[300px] w-[300px]" />

      <FadeIn>
        <span className="text-xs tracking-[0.12em] uppercase text-lavender">
          03 — Supported Chains
        </span>
        <h2 className="mt-4 font-heading text-[clamp(28px,4vw,44px)] font-bold leading-[1.15] text-text-bright">
          One state. Many chains.
        </h2>
        <p className="mt-4 max-w-[600px] text-[15px] leading-relaxed text-text-dim">
          Axync maintains a unified state across all supported EVM chains. Assets stay on their native chain — no wrapping, no bridging. Only ownership rights change.
        </p>
      </FadeIn>

      <StaggerContainer className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
        {chains.map((chain) => (
          <StaggerItem
            key={chain.name}
            className={`glass flex flex-col items-center gap-3 p-7 text-center ${
              chain.status === "soon" ? "opacity-40" : ""
            }`}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white"
              style={{ background: chain.color }}
            >
              {chain.letter}
            </div>
            <span className="font-heading text-[15px] font-semibold text-text-bright">
              {chain.name}
            </span>
            {chain.status === "live" ? (
              <span className="rounded-full bg-success/15 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-success">
                Testnet
              </span>
            ) : (
              <span className="rounded-full bg-muted/15 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-text-dim">
                Soon
              </span>
            )}
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.2} className="mt-6 text-center text-sm text-text-dim">
        Non-EVM chains (Solana, Cosmos) on the roadmap.
      </FadeIn>
    </section>
  );
}
