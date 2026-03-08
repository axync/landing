const chains = [
  { name: "Ethereum", status: "live" },
  { name: "Base", status: "live" },
  { name: "Arbitrum", status: "soon" },
  { name: "Optimism", status: "soon" },
  { name: "Polygon", status: "soon" },
  { name: "Mantle", status: "soon" },
];

export function Chains() {
  return (
    <section id="chains" className="mx-auto max-w-6xl px-6 py-32">
      <p className="font-mono text-[10px] tracking-[4px] uppercase text-silver-lo">
        03 — Supported Chains
      </p>
      <h2 className="mt-2 font-heading text-3xl font-semibold text-text-bright md:text-4xl">
        One state. Many chains.
      </h2>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-text-dim">
        Axync maintains a unified state across all supported EVM chains.
        Assets never move between chains — only ownership rights change.
      </p>

      <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {chains.map((chain) => (
          <div
            key={chain.name}
            className="flex flex-col items-center gap-3 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-border-light"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-base font-heading text-lg font-bold text-silver-lo">
              {chain.name[0]}
            </div>
            <span className="font-heading text-sm font-medium text-text-bright">
              {chain.name}
            </span>
            {chain.status === "live" ? (
              <span className="rounded-md bg-success/10 px-2 py-0.5 font-mono text-[9px] uppercase text-success">
                Testnet
              </span>
            ) : (
              <span className="rounded-md bg-muted/20 px-2 py-0.5 font-mono text-[9px] uppercase text-text-dim">
                Soon
              </span>
            )}
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-text-dim">
        Non-EVM chains (Solana, Cosmos) on the roadmap.
      </p>
    </section>
  );
}
