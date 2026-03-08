const features = [
  {
    title: "Zero-Knowledge Proofs",
    description:
      "Every withdrawal is cryptographically verified. STARK proofs wrapped in Groth16 SNARKs for on-chain verification.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
    ),
  },
  {
    title: "Cross-Chain",
    description:
      "Trade across any EVM chain. Ethereum, Base, Arbitrum, Optimism, Polygon, Mantle — from a unified state.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="5" cy="12" r="3"/><circle cx="19" cy="12" r="3"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="12" y1="5" x2="12" y2="19"/></svg>
    ),
  },
  {
    title: "No Bridge Risk",
    description:
      "Assets never leave their native chain. Ownership rights transfer atomically inside the protocol — no bridge exploits.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
    ),
  },
  {
    title: "Instant Settlement",
    description:
      "Deals settle in seconds, not hours. Atomic balance swaps inside the unified state — no waiting for finality.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    ),
  },
  {
    title: "Private by Default",
    description:
      "Trades don't hit public orderbooks. No front-running, no slippage, no market impact for large positions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
    ),
  },
  {
    title: "Trustless Custody",
    description:
      "Smart contracts hold assets with ZK-verified withdrawals. No custodians, no counterparty risk, no trust assumptions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-32">
      <p className="font-mono text-[10px] tracking-[4px] uppercase text-silver-lo">
        01 — Features
      </p>
      <h2 className="mt-2 font-heading text-3xl font-semibold text-text-bright md:text-4xl">
        Built for serious trading
      </h2>

      <div className="mt-16 grid gap-px rounded-2xl bg-border md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="flex flex-col gap-4 bg-base p-8 first:rounded-tl-2xl last:rounded-br-2xl"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-silver-lo">
              {f.icon}
            </div>
            <h3 className="font-heading text-lg font-semibold text-text-bright">
              {f.title}
            </h3>
            <p className="text-sm leading-relaxed text-text-dim">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
