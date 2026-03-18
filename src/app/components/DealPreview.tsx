"use client";

import { FadeIn } from "./Animate";

export function DealPreview() {
  return (
    <section id="preview" className="relative mx-auto max-w-[1200px] overflow-hidden px-6 py-28">
      <div className="glow bg-lavender/[0.1] absolute top-[5%] left-0 h-[350px] w-[350px]" />
      <div className="glow bg-ice/[0.08] absolute bottom-[10%] right-0 h-[300px] w-[300px]" />

      <FadeIn>
        <span className="text-xs tracking-[0.12em] uppercase text-lavender">
          03 &mdash; Deal Preview
        </span>
        <h2 className="mt-4 font-heading text-[clamp(28px,4vw,44px)] font-bold leading-[1.15] text-text-bright">
          See exactly what you&apos;re buying.
        </h2>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="glass mx-auto mt-12 max-w-[560px] p-8">
          {/* Header */}
          <div className="mb-5 flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-text-dim">Listing #AX-0012</span>
            <span className="rounded-full bg-success/15 px-3 py-1 text-[10px] font-semibold text-success">
              &#x2713; Verified On-Chain
            </span>
          </div>

          {/* Token pair */}
          <div className="mb-5 flex items-center gap-4">
            <div className="flex flex-1 items-center gap-3 rounded-xl border border-border bg-base p-3.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#627EEA]/15 text-[13px] font-bold text-[#627EEA]">A</div>
              <div>
                <div className="text-sm font-semibold text-text-bright">100,000 ARB</div>
                <div className="text-xs text-text-dim">Arbitrum Token</div>
              </div>
            </div>
            <div className="text-lg text-text-dim">&rarr;</div>
            <div className="flex flex-1 items-center gap-3 rounded-xl border border-border bg-base p-3.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#26A17B]/15 text-[13px] font-bold text-[#26A17B]">$</div>
              <div>
                <div className="text-sm font-semibold text-text-bright">62,000 USDC</div>
                <div className="text-xs text-text-dim">Ask Price</div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="mb-5 flex flex-col gap-2">
            {[
              { label: "Market Value", value: "$94,000", style: "line-through text-text-dim" },
              { label: "Discount", value: "34% off", style: "text-success" },
              { label: "Vesting Platform", value: "Sablier", style: "" },
              { label: "Time to Full Unlock", value: "8 months", style: "" },
              { label: "Already Claimed", value: "12,000 ARB (12%)", style: "" },
              { label: "Settlement", value: "Atomic NFT Swap", style: "text-lavender" },
            ].map((row) => (
              <div key={row.label} className="flex justify-between py-1.5">
                <span className="text-[13px] text-text-dim">{row.label}</span>
                <span className={`text-[13px] font-medium ${row.style || "text-text-bright"}`}>{row.value}</span>
              </div>
            ))}
          </div>

          {/* Unlock progress */}
          <div className="mb-5 rounded-xl border border-border bg-base p-4">
            <div className="mb-2.5 text-[11px] uppercase tracking-wider text-text-dim">Unlock Progress</div>
            <div className="mb-2 h-2 w-full overflow-hidden rounded bg-elevated">
              <div className="h-full rounded bg-gradient-to-r from-lavender to-ice" style={{ width: "12%" }} />
            </div>
            <div className="flex justify-between text-[11px] text-text-dim">
              <span>12% unlocked</span>
              <span>Full unlock: Nov 2026</span>
            </div>
          </div>

          <button className="btn-primary w-full text-center">
            Buy This Position &mdash; 62,000 USDC
          </button>
        </div>
      </FadeIn>
    </section>
  );
}
