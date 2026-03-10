"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./Animate";

const steps = [
  {
    num: "01",
    title: "Deposit",
    description:
      "Lock assets in a smart contract on any supported chain. The sequencer detects your deposit and credits your unified account. Your tokens never leave the chain they started on.",
    detail: "Assets stay on their native chain",
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 4v12M8 12l4 4 4-4" /><path d="M5 20h14" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Transfer",
    description:
      "Move value cross-chain or settle a P2P deal. Ownership transfers atomically inside the unified state — no bridging, no wrapped tokens, nothing in transit.",
    detail: "Atomic settlement in seconds",
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M5 12h14" /><path d="M15 8l4 4-4 4" /><path d="M9 8l-4 4 4 4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Withdraw",
    description:
      "Claim your assets on any chain where you hold a balance. A ZK proof verifies your withdrawal on-chain before releasing funds. You only pay gas — no percentage fees.",
    detail: "ZK-verified on-chain",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 20V8M8 12l4-4 4 4" /><path d="M5 4h14" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-32">
      <FadeIn>
        <p className="font-mono text-[10px] tracking-[4px] uppercase text-silver-lo">
          02 — How it works
        </p>
        <h2 className="mt-2 font-heading text-3xl font-semibold text-text-bright md:text-4xl">
          Three steps. Any chain.
        </h2>
      </FadeIn>

      <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <StaggerItem
            key={step.num}
            className="glass card-glow group relative rounded-2xl p-8"
          >
            <span className="absolute top-6 right-6 font-mono text-[11px] text-text-dim/40">
              {step.num}
            </span>
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${step.bg} ${step.accent} mb-5`}>
              {step.icon}
            </div>
            <h3 className="font-heading text-2xl font-bold text-text-bright">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-dim">
              {step.description}
            </p>
            <div className="mt-6 inline-block rounded-md bg-base/80 px-3 py-1 font-mono text-[10px] tracking-wide uppercase text-silver-lo">
              {step.detail}
            </div>

            {i < 2 && (
              <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                <svg width="6" height="10" viewBox="0 0 6 10" className="text-text-dim/30">
                  <path d="M1 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            )}
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.3} className="mt-12 flex items-center justify-center gap-4 text-muted">
        <span className="rounded-lg border border-border px-4 py-2 font-mono text-xs text-silver-lo">
          Deposit
        </span>
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
          <path d="M0 6h20M16 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="rounded-lg border border-border px-4 py-2 font-mono text-xs text-silver-lo">
          Transfer
        </span>
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
          <path d="M0 6h20M16 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="rounded-lg border border-border px-4 py-2 font-mono text-xs text-silver-lo">
          Withdraw
        </span>
      </FadeIn>
    </section>
  );
}
