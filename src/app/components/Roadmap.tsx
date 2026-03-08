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
      "Enhanced institutional UI",
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
      "Advanced deal types & matching",
      "WebSocket real-time updates",
    ],
  },
  {
    phase: "Phase 4",
    title: "Enterprise",
    status: "upcoming" as const,
    items: [
      "White-label OTC solutions",
      "API marketplace",
      "Decentralized sequencer network",
      "Mobile applications",
    ],
  },
];

function StatusBadge({ status }: { status: "done" | "active" | "upcoming" }) {
  if (status === "done")
    return (
      <span className="rounded-md bg-success/10 px-2 py-0.5 font-mono text-[9px] uppercase text-success">
        Complete
      </span>
    );
  if (status === "active")
    return (
      <span className="rounded-md bg-silver-lo/10 px-2 py-0.5 font-mono text-[9px] uppercase text-silver-lo">
        In Progress
      </span>
    );
  return (
    <span className="rounded-md bg-muted/20 px-2 py-0.5 font-mono text-[9px] uppercase text-text-dim">
      Upcoming
    </span>
  );
}

export function Roadmap() {
  return (
    <section id="roadmap" className="mx-auto max-w-6xl px-6 py-32">
      <p className="font-mono text-[10px] tracking-[4px] uppercase text-silver-lo">
        04 — Roadmap
      </p>
      <h2 className="mt-2 font-heading text-3xl font-semibold text-text-bright md:text-4xl">
        What we&apos;re building
      </h2>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {phases.map((p) => (
          <div
            key={p.phase}
            className={`rounded-2xl border p-6 ${
              p.status === "active"
                ? "border-silver-lo/30 bg-surface"
                : "border-border bg-surface"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-muted">{p.phase}</span>
              <StatusBadge status={p.status} />
            </div>
            <h3 className="mt-3 font-heading text-xl font-bold text-text-bright">
              {p.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {p.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-text-dim"
                >
                  <span
                    className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                      p.status === "done" ? "bg-success" : "bg-muted"
                    }`}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
