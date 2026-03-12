"use client";

import { FadeIn } from "./Animate";

export function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-[1200px] overflow-hidden px-6 py-28">
      <div className="glow bg-lavender/[0.10] absolute -left-[5%] top-0 h-[350px] w-[350px]" />
      <div className="glow bg-ice/[0.08] absolute -right-[3%] bottom-0 h-[300px] w-[300px]" />

      <FadeIn>
        <span className="text-xs tracking-[0.12em] uppercase text-lavender">
          01 — Features
        </span>
        <h2 className="mt-4 font-heading text-[clamp(28px,4vw,44px)] font-bold leading-[1.15] text-text-bright">
          Why not just use a bridge?
        </h2>
      </FadeIn>

      {/* Row 1: 2fr 1fr */}
      <FadeIn delay={0.1} className="mt-12 grid gap-5 md:grid-cols-3">
        <div className="glass p-7 md:col-span-2">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lavender/10 text-xl text-lavender">
            &#x2713;
          </div>
          <h3 className="text-lg font-semibold text-text-bright">Zero-Knowledge Proofs</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-dim">
            Every withdrawal is cryptographically verified. STARK proofs wrapped in Groth16 SNARKs ensure correctness on-chain — math, not trust.
          </p>
          <div className="fc-diagram">{`Transactions → STARK batch proof
        ↓
STARK → Groth16 wrapper
        ↓
On-chain verification ✓`}</div>
        </div>
        <div className="glass p-7">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lavender/10 text-xl text-lavender">
            &#x26A0;
          </div>
          <h3 className="text-lg font-semibold text-text-bright">No Bridge Risk</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-dim">
            Bridge exploits are crypto&apos;s #1 attack vector — over $2.5B lost. Axync eliminates the risk entirely: assets never leave their native chain.
          </p>
        </div>
      </FadeIn>

      {/* Row 2: 1fr 2fr */}
      <FadeIn delay={0.2} className="mt-5 grid gap-5 md:grid-cols-3">
        <div className="glass p-7">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lavender/10 text-xl text-lavender">
            &#x21C4;
          </div>
          <h3 className="text-lg font-semibold text-text-bright">Cheaper Than Bridges</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-dim">
            No percentage fees. You only pay gas. ZK proof costs are amortized across every transaction in a block, so per-transfer overhead is minimal.
          </p>
        </div>
        <div className="glass p-7 md:col-span-2">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lavender/10 text-xl text-lavender">
            &#x26A1;
          </div>
          <h3 className="text-lg font-semibold text-text-bright">Instant Settlement</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-dim">
            Transfers settle in seconds, not hours. Atomic balance swaps inside the unified state — no waiting for finality across chains.
          </p>
          <div className="fc-diagram">{`Chain A balance: 1.0 ETH → 0.0 ETH
Chain B balance: 0.0 ETH → 1.0 ETH
        ↓
Settled atomically in ~1s`}</div>
        </div>
      </FadeIn>

      {/* Row 3: 1fr 1fr */}
      <FadeIn delay={0.3} className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="glass p-7">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lavender/10 text-xl text-lavender">
            &#x1F310;
          </div>
          <h3 className="text-lg font-semibold text-text-bright">For Everyone</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-dim">
            From DeFi power users moving $1K+ cross-chain to institutional OTC desks settling large blocks — one protocol, every use case.
          </p>
        </div>
        <div className="glass p-7">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-lavender/10 text-xl text-lavender">
            &#x1F512;
          </div>
          <h3 className="text-lg font-semibold text-text-bright">Trustless Custody</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-dim">
            Smart contracts hold assets with ZK-verified withdrawals. No custodians, no wrapped tokens, no counterparty risk.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
