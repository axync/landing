"use client";

import { FadeIn } from "./Animate";

const steps = [
  {
    num: "01",
    icon: "\uD83D\uDCCB",
    title: "List on Any Chain",
    description:
      "Connect wallet. List your tokens or vesting positions into the Axync escrow. Set your price and choose which chain you want to get paid on.",
    detail: "Tokens & NFTs supported",
  },
  {
    num: "02",
    icon: "\uD83D\uDD0D",
    title: "Buy from Any Chain",
    description:
      "Buyers browse listings cross-chain. See the token, discount, and vesting schedule. Deposit payment on their preferred chain.",
    detail: "Cross-chain deposits",
  },
  {
    num: "03",
    icon: "\u21C4",
    title: "ZK Settlement",
    description:
      "Sequencer batches the trade into a block, generates a ZK proof, and submits it on-chain. Buyer claims tokens with a merkle proof. Trustless and atomic.",
    detail: "ZK-proven, no bridges",
  },
];

function FlowLine() {
  return (
    <div className="relative hidden h-0.5 w-20 shrink-0 items-center justify-center self-center md:flex">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-lavender/30 to-ice/30" />
      <div
        className="absolute h-1.5 w-1.5 rounded-full bg-ice"
        style={{ animation: "flow-dot 2.5s infinite linear" }}
      />
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative mx-auto max-w-[1200px] overflow-hidden px-6 py-28">
      <div className="glow bg-ice/[0.10] absolute -right-0 -top-[5%] h-[350px] w-[350px]" />
      <div className="glow bg-lavender/[0.08] absolute bottom-0 left-[5%] h-[300px] w-[300px]" />

      <FadeIn>
        <span className="text-xs tracking-[0.12em] uppercase text-lavender">
          02 &mdash; How It Works
        </span>
        <h2 className="mt-4 font-heading text-[clamp(28px,4vw,44px)] font-bold leading-[1.15] text-text-bright">
          Three steps. <span className="text-gradient">Zero trust required.</span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.15}>
        {/* Desktop: horizontal */}
        <div className="mt-16 hidden items-start md:flex">
          {steps.map((step, i) => (
            <div key={step.num} className="contents">
              <div className="flex flex-1 flex-col items-center text-center px-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-lavender to-ice font-heading text-sm font-bold text-base">
                  {step.num}
                </div>
                <div className="mt-4 text-[28px]">{step.icon}</div>
                <h3 className="mt-3 font-heading text-base font-semibold text-text-bright">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-text-dim">
                  {step.description}
                </p>
                <span className="mt-3 text-[10px] font-semibold tracking-[0.1em] uppercase text-lavender">
                  {step.detail}
                </span>
              </div>
              {i < 2 && <FlowLine />}
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="mt-12 flex flex-col gap-8 md:hidden">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-lavender to-ice font-heading text-sm font-bold text-base">
                  {step.num}
                </div>
                <div className="mt-2 h-full w-px bg-border" />
              </div>
              <div className="pb-2">
                <h3 className="font-heading text-base font-semibold text-text-bright">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-text-dim">
                  {step.description}
                </p>
                <span className="mt-2 inline-block text-[10px] font-semibold tracking-[0.1em] uppercase text-lavender">
                  {step.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
