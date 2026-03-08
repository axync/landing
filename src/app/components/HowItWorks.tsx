const steps = [
  {
    num: "01",
    title: "Deposit",
    description:
      "Lock assets in a smart contract on any supported chain. The sequencer detects your deposit and credits your unified account.",
    detail: "Assets stay on their native chain",
  },
  {
    num: "02",
    title: "Trade",
    description:
      "Create or accept P2P deals. Cross-chain swaps execute atomically — ownership transfers instantly inside the unified state.",
    detail: "Atomic settlement in seconds",
  },
  {
    num: "03",
    title: "Withdraw",
    description:
      "Claim your assets on any chain where you hold a balance. A ZK proof verifies your withdrawal on-chain before releasing funds.",
    detail: "ZK-verified on-chain",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-32">
      <p className="font-mono text-[10px] tracking-[4px] uppercase text-silver-lo">
        02 — How it works
      </p>
      <h2 className="mt-2 font-heading text-3xl font-semibold text-text-bright md:text-4xl">
        Three steps. Any chain.
      </h2>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.num}
            className="group relative rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-border-light"
          >
            <span className="font-mono text-xs text-muted">{step.num}</span>
            <h3 className="mt-4 font-heading text-2xl font-bold text-text-bright">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-dim">
              {step.description}
            </p>
            <div className="mt-6 inline-block rounded-md bg-base px-3 py-1 font-mono text-[10px] tracking-wide uppercase text-silver-lo">
              {step.detail}
            </div>
          </div>
        ))}
      </div>

      {/* Flow diagram */}
      <div className="mt-12 flex items-center justify-center gap-4 text-muted">
        <span className="rounded-lg border border-border px-4 py-2 font-mono text-xs text-silver-lo">
          Deposit
        </span>
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
          <path d="M0 6h20M16 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="rounded-lg border border-border px-4 py-2 font-mono text-xs text-silver-lo">
          Trade
        </span>
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
          <path d="M0 6h20M16 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="rounded-lg border border-border px-4 py-2 font-mono text-xs text-silver-lo">
          Withdraw
        </span>
      </div>
    </section>
  );
}
