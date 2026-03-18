"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./Animate";

const stats = [
  {
    value: "0",
    desc: "Approvals needed. List any vesting NFT instantly \u2014 no project permission, no KYC, no waitlist.",
  },
  {
    value: "1",
    desc: "Transaction to settle. Atomic NFT-for-stablecoin swap via smart contract escrow. No intermediaries.",
  },
  {
    value: "30s",
    desc: "To list a position. Connect wallet, auto-detect vesting NFTs, set price, done.",
  },
  {
    value: "$0",
    desc: "Minimum deal size. From $500 airdrop to $500K VC allocation \u2014 same protocol, same access.",
  },
];

export function WhyAxync() {
  return (
    <section id="compare" className="relative mx-auto max-w-[1200px] overflow-hidden px-6 py-28">
      <div className="glow bg-lavender/[0.1] absolute top-[5%] left-0 h-[350px] w-[350px]" />
      <div className="glow bg-ice/[0.08] absolute bottom-[10%] right-0 h-[300px] w-[300px]" />

      <FadeIn>
        <span className="text-xs tracking-[0.12em] uppercase text-lavender">
          05 &mdash; Why Axync
        </span>
        <h2 className="mt-4 font-heading text-[clamp(28px,4vw,44px)] font-bold leading-[1.15] text-text-bright">
          Built different.
        </h2>
      </FadeIn>

      <StaggerContainer className="mx-auto mt-12 grid max-w-[800px] gap-6 md:grid-cols-2">
        {stats.map((s) => (
          <StaggerItem key={s.value}>
            <div className="glass p-8 text-center">
              <div className="text-gradient font-heading text-5xl font-bold">{s.value}</div>
              <p className="mt-3 text-sm leading-relaxed text-text-dim">{s.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
