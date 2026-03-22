"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./Animate";

const problems = [
  {
    icon: "\u2715",
    color: "error" as const,
    title: "Trust-based OTC in Telegram",
    desc: "Locked tokens traded daily through Telegram DMs. No escrow, no verification. Someone always gets scammed.",
  },
  {
    icon: "\u2715",
    color: "error" as const,
    title: "No cross-chain liquidity",
    desc: "Your tokens are on Ethereum but the buyer is on Base. Bridges are slow, expensive, and add trust assumptions.",
  },
  {
    icon: "\u2715",
    color: "error" as const,
    title: "Institutional gatekeeping",
    desc: "Existing platforms require issuer approval and $100K+ minimums. Regular holders are locked out.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-28">
        <div className="glow bg-lavender/[0.1] absolute top-0 -left-[5%] h-[350px] w-[350px]" />
        <div className="glow bg-ice/[0.08] absolute bottom-0 -right-[3%] h-[300px] w-[300px]" />

        <FadeIn>
          <span className="mb-4 block text-xs font-medium tracking-[0.12em] uppercase text-lavender">
            01 &mdash; The Problem
          </span>
          <h2 className="font-heading text-[clamp(28px,4vw,44px)] font-bold leading-[1.15]">
            Locked tokens. Trapped value.
            <br />
            No cross-chain market.
          </h2>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
          <StaggerContainer className="flex flex-col gap-5">
            {problems.map((p) => (
              <StaggerItem key={p.title}>
                <div className="flex items-start gap-4">
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] text-lg ${
                    p.color === "error" ? "bg-error/10 text-error" : "bg-success/10 text-success"
                  }`}>
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-text-bright">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-dim">{p.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[10px] bg-success/10 text-lg text-success">
                  &#x2713;
                </div>
                <div>
                  <h3 className="text-base font-semibold text-text-bright">Axync: cross-chain by design</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-dim">
                    List tokens or vesting positions on any chain. Buyers pay on any chain. ZK sequencer settles atomically. No bridges, no wrapping, no trust.
                  </p>
                </div>
              </div>

              {/* Mini deal card */}
              <div className="glass p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-text-dim">Live Listing Example</span>
                  <span className="rounded-full bg-lavender/15 px-2.5 py-0.5 text-[9px] font-semibold text-lavender">DEMO</span>
                </div>
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#627EEA]/15 text-xs font-bold text-[#627EEA]">A</div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-text-bright">50,000 ARB</div>
                    <div className="text-[11px] text-text-dim">Locked via Sablier &mdash; 8 months remaining</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-success">-34%</div>
                    <div className="text-[11px] text-text-dim">discount</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 rounded-lg bg-base p-2 text-center">
                    <div className="text-base font-bold text-text-bright">$33,000</div>
                    <div className="text-[10px] text-text-dim">Ask Price</div>
                  </div>
                  <div className="flex-1 rounded-lg bg-base p-2 text-center">
                    <div className="text-base font-bold text-text-dim line-through">$50,000</div>
                    <div className="text-[10px] text-text-dim">Market Value</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
