"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./Animate";

const phases = [
  {
    phase: "Phase 1",
    title: "Cross-Chain MVP",
    status: "active" as const,
    items: [
      "ERC-20 & ERC-721 escrow contracts",
      "ZK sequencer with cross-chain settlement",
      "Ethereum + Base Sepolia testnet",
      "Relayer for on-chain proof submission",
    ],
  },
  {
    phase: "Phase 2",
    title: "Mainnet & Growth",
    status: "upcoming" as const,
    items: [
      "Ethereum + Base mainnet deployment",
      "Marketplace UI: list, browse, buy, claim",
      "Sablier & Hedgey vesting auto-detection",
      "Bid system and discount dashboard",
    ],
  },
  {
    phase: "Phase 3",
    title: "Scale",
    status: "upcoming" as const,
    items: [
      "Arbitrum, Optimism, Solana",
      "Non-transferable vesting via ZK",
      "API for OTC desks",
      "Custom vesting contract adapters",
    ],
  },
];

function StatusBadge({ status }: { status: "done" | "active" | "upcoming" }) {
  if (status === "done")
    return (
      <span className="rounded-full bg-success/15 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase text-success">
        Complete
      </span>
    );
  if (status === "active")
    return (
      <span
        className="rounded-full bg-lavender/15 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase text-lavender"
        style={{ animation: "pulse-badge 2s infinite" }}
      >
        In Progress
      </span>
    );
  return (
    <span className="rounded-full bg-muted/10 px-3 py-1 text-[10px] font-semibold tracking-wider uppercase text-muted">
      Upcoming
    </span>
  );
}

export function Roadmap() {
  return (
    <section id="roadmap" className="relative mx-auto max-w-[1200px] overflow-hidden px-6 py-28">
      <div className="glow bg-lavender/[0.10] absolute right-[5%] top-0 h-[350px] w-[350px]" />
      <div className="glow bg-ice/[0.08] absolute bottom-0 left-[5%] h-[300px] w-[300px]" />

      <FadeIn>
        <span className="text-xs tracking-[0.12em] uppercase text-lavender">
          07 &mdash; Roadmap
        </span>
        <h2 className="mt-4 font-heading text-[clamp(28px,4vw,44px)] font-bold leading-[1.15] text-text-bright">
          What we&apos;re building
        </h2>
      </FadeIn>

      <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-3">
        {phases.map((p) => (
          <StaggerItem key={p.phase} className="glass p-7">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-text-dim">
                {p.phase}
              </span>
              <StatusBadge status={p.status} />
            </div>
            <h3 className="mt-2 font-heading text-lg font-semibold text-text-bright">
              {p.title}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-text-dim">
              {p.items.map((item) => (
                <li key={item} className="relative pl-5">
                  <span className="absolute left-0 text-lavender">{"\u25B8"}</span>
                  {item}
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
