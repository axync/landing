"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./Animate";

const platforms = [
  {
    icon: "\uD83D\uDD37",
    name: "Ethereum",
    desc: "Mainnet and Sepolia testnet. Tokens, Sablier and Hedgey vesting positions.",
    status: "LIVE",
    live: true,
  },
  {
    icon: "\uD83D\uDD35",
    name: "Base",
    desc: "Low-cost L2 by Coinbase. Cross-chain deposits and settlements via ZK proofs.",
    status: "LIVE",
    live: true,
  },
  {
    icon: "\uD83D\uDCA7",
    name: "Sablier & Hedgey",
    desc: "Vesting NFT protocols with $2B+ combined TVL. Auto-detected, instantly listable.",
    status: "SUPPORTED",
    live: true,
  },
  {
    icon: "\u2699\uFE0F",
    name: "Arbitrum & More",
    desc: "Expanding to Arbitrum, Optimism, and Solana. Same protocol, more chains.",
    status: "COMING",
    live: false,
  },
];

export function Supported() {
  return (
    <section id="supported" className="relative mx-auto max-w-[1200px] overflow-hidden px-6 py-28">
      <div className="glow bg-ice/[0.10] absolute top-0 right-[5%] h-[350px] w-[350px]" />
      <div className="glow bg-lavender/[0.08] absolute bottom-0 left-[5%] h-[300px] w-[300px]" />

      <FadeIn>
        <span className="text-xs tracking-[0.12em] uppercase text-lavender">
          06 &mdash; Platforms &amp; Chains
        </span>
        <h2 className="mt-4 font-heading text-[clamp(28px,4vw,44px)] font-bold leading-[1.15] text-text-bright">
          Multi-chain from <span className="text-gradient">day one.</span>
        </h2>
      </FadeIn>

      <StaggerContainer className="mx-auto mt-12 grid max-w-[700px] gap-5 md:grid-cols-2">
        {platforms.map((p) => (
          <StaggerItem key={p.name}>
            <div className={`glass p-7 text-center ${!p.live ? "opacity-50" : ""}`}>
              <div className="mb-3 text-4xl">{p.icon}</div>
              <div className="text-lg font-bold text-text-bright">{p.name}</div>
              <p className="mt-1 text-[13px] leading-relaxed text-text-dim">{p.desc}</p>
              <span className={`mt-3 inline-block rounded-full px-3 py-1 text-[10px] font-semibold ${
                p.live
                  ? "bg-success/15 text-success"
                  : "bg-muted/10 text-muted"
              }`}>
                {p.status}
              </span>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
