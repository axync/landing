"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./Animate";

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "done" as const,
    items: [
      "Core ZK proof system (STARK + Groth16 SNARK)",
      "Ethereum & Base Sepolia testnets",
      "P2P deal settlement engine",
      "Rust sequencer with state snapshots",
    ],
  },
  {
    phase: "Phase 2",
    title: "Launch",
    status: "active" as const,
    items: [
      "Mainnet deployment (Ethereum + Base)",
      "Additional EVM chains (Arbitrum, Optimism)",
      "Enhanced UI for retail and institutional users",
      "On-chain ZK verification contracts",
    ],
  },
  {
    phase: "Phase 3",
    title: "Expansion",
    status: "upcoming" as const,
    items: [
      "Non-EVM chain support (Solana, Cosmos)",
      "Compliance & regulatory tools",
      "Advanced transfer types & OTC matching",
      "WebSocket real-time updates",
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
      <div className="glow bg-ice/[0.10] absolute right-[5%] top-0 h-[350px] w-[350px]" />
      <div className="glow bg-lavender/[0.08] absolute bottom-0 left-[5%] h-[300px] w-[300px]" />

      <FadeIn>
        <span className="text-xs tracking-[0.12em] uppercase text-lavender">
          04 — Roadmap
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
                  <span className="absolute left-0 text-lavender">▸</span>
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
