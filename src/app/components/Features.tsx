"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./Animate";

const features = [
  {
    title: "Zero-Knowledge Proofs",
    description:
      "Every withdrawal is cryptographically verified. STARK proofs wrapped in Groth16 SNARKs ensure correctness on-chain — math, not trust.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.5l7.5 3.5v5.5c0 5-3.2 9.3-7.5 11-4.3-1.7-7.5-6-7.5-11V6L12 2.5z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Cheaper Than Bridges",
    description:
      "No percentage fees. You only pay gas. ZK proof costs are amortized across every transaction in a block, so per-transfer overhead is minimal.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="5" cy="12" r="2.5" />
        <circle cx="19" cy="12" r="2.5" />
        <path d="M7.5 12h9" />
        <path d="M14 9l3 3-3 3" />
      </svg>
    ),
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    title: "No Bridge Risk",
    description:
      "Bridge exploits are crypto\u2019s #1 attack vector — over $2.5B lost. Axync eliminates the risk entirely: assets never leave their native chain.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="5" y="11" width="14" height="10" rx="2.5" />
        <path d="M8 11V7a4 4 0 018 0v4" />
      </svg>
    ),
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    title: "Instant Settlement",
    description:
      "Transfers settle in seconds, not hours. Atomic balance swaps inside the unified state — no waiting for finality across chains.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L4.5 13.5H12L11 22l8.5-11.5H12L13 2z" />
      </svg>
    ),
    accent: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    title: "For Everyone",
    description:
      "From DeFi power users moving $1K+ cross-chain to institutional OTC desks settling large blocks — one protocol, every use case.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15 15 0 010 20M12 2a15 15 0 000 20M2 12h20" />
      </svg>
    ),
    accent: "text-sky-400",
    bg: "bg-sky-500/10",
  },
  {
    title: "Trustless Custody",
    description:
      "Smart contracts hold assets with ZK-verified withdrawals. No custodians, no wrapped tokens, no counterparty risk.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    accent: "text-rose-400",
    bg: "bg-rose-500/10",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-32">
      <FadeIn>
        <p className="font-mono text-[10px] tracking-[4px] uppercase text-silver-lo">
          01 — Features
        </p>
        <h2 className="mt-2 font-heading text-3xl font-semibold text-text-bright md:text-4xl">
          Why not just use a bridge?
        </h2>
      </FadeIn>

      <StaggerContainer className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <StaggerItem
            key={f.title}
            className="glass card-glow flex flex-col gap-4 rounded-2xl p-8"
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl ${f.bg} ${f.accent}`}
            >
              {f.icon}
            </div>
            <h3 className="font-heading text-lg font-semibold text-text-bright">
              {f.title}
            </h3>
            <p className="text-sm leading-relaxed text-text-dim">
              {f.description}
            </p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
