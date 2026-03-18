"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./Animate";

const features = [
  {
    icon: "\uD83D\uDD13",
    title: "Permissionless",
    desc: "No issuer approval needed. Works with any Sablier or Hedgey vesting NFT from day one. New airdrop? Tradeable immediately.",
  },
  {
    icon: "\u26A1",
    title: "Atomic Settlement",
    desc: "NFT-for-stablecoins swap in one transaction. No escrow periods, no counterparty risk. Smart contract handles everything.",
  },
  {
    icon: "\uD83D\uDCCA",
    title: "Full Transparency",
    desc: "Every listing shows complete vesting schedule, claimed amount, time to unlock, and discount rate. All verified from on-chain data.",
  },
  {
    icon: "\uD83D\uDCB0",
    title: "Any Size",
    desc: "No minimums. Whether you're selling a $5K airdrop or a $500K VC allocation \u2014 same protocol, same low fees.",
  },
  {
    icon: "\uD83D\uDD0E",
    title: "Auto-Detection",
    desc: "Connect your wallet and Axync automatically finds your vesting positions. Select, price, and list in under 30 seconds.",
  },
  {
    icon: "\uD83D\uDEE1\uFE0F",
    title: "Trustless Escrow",
    desc: "Open-source smart contract holds both sides. No custody, no intermediaries. Audited and verifiable by anyone.",
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
          Built for locked token markets.
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
