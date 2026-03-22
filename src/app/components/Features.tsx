"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./Animate";

const features = [
  {
    icon: "\uD83C\uDF10",
    title: "Cross-Chain",
    desc: "List assets on Ethereum, get paid on Base. Or vice versa. ZK sequencer handles settlement across chains without bridges.",
  },
  {
    icon: "\uD83D\uDD10",
    title: "ZK-Proven",
    desc: "Every trade is batched into a block and verified with a zero-knowledge proof. On-chain merkle roots guarantee correctness.",
  },
  {
    icon: "\uD83D\uDCE6",
    title: "Tokens & NFTs",
    desc: "Trade any token or vesting position (Sablier, Hedgey). Same protocol, same escrow, same settlement flow.",
  },
  {
    icon: "\u26A1",
    title: "Atomic Settlement",
    desc: "Sequencer processes trades in 5-second blocks. Buyer claims with a merkle proof. No escrow periods, no counterparty risk.",
  },
  {
    icon: "\uD83D\uDD13",
    title: "Permissionless",
    desc: "No issuer approval, no KYC, no minimums. List any token from day one. New airdrop? Tradeable immediately.",
  },
  {
    icon: "\uD83D\uDEE1\uFE0F",
    title: "Trustless Escrow",
    desc: "Open-source smart contracts hold both sides. No custody, no intermediaries. Verifiable by anyone on-chain.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-[1200px] overflow-hidden px-6 py-28">
      <div className="glow bg-ice/[0.10] absolute top-0 right-[5%] h-[350px] w-[350px]" />
      <div className="glow bg-lavender/[0.08] absolute bottom-0 left-[5%] h-[300px] w-[300px]" />

      <FadeIn>
        <span className="text-xs tracking-[0.12em] uppercase text-lavender">
          04 &mdash; Features
        </span>
        <h2 className="mt-4 font-heading text-[clamp(28px,4vw,44px)] font-bold leading-[1.15] text-text-bright">
          Built on <span className="text-gradient">ZK proofs.</span>
        </h2>
      </FadeIn>

      <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-3">
        {features.map((f) => (
          <StaggerItem key={f.title}>
            <div className="glass p-7 h-full">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lavender/10 text-xl text-lavender">
                {f.icon}
              </div>
              <h3 className="text-lg font-semibold text-text-bright">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-dim">{f.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
