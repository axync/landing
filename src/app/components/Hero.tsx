import { AxyncMark } from "./AxyncMark";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(148,163,184,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10">
        <AxyncMark size={60} className="mx-auto mb-8" />

        <h1 className="mx-auto max-w-3xl font-heading text-5xl leading-tight font-bold tracking-tight text-text-bright md:text-7xl md:leading-tight">
          Cross-chain settlement.{" "}
          <span className="bg-gradient-to-r from-silver-hi via-silver-mid to-silver-lo bg-clip-text text-transparent">
            Proven, not promised.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-dim">
          Trustless P2P trading across any chain, verified by zero-knowledge
          proofs. No bridges. No intermediaries.
        </p>

        <p className="mt-4 font-mono text-xs tracking-[4px] uppercase text-muted">
          Proof, not promises.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="https://app.axync.xyz"
            className="rounded-xl bg-gradient-to-br from-silver-hi to-silver-lo px-8 py-3 font-heading text-sm font-semibold text-base transition-opacity hover:opacity-90"
          >
            Launch App
          </a>
          <a
            href="https://github.com/axync"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-border px-8 py-3 font-heading text-sm font-medium text-text transition-colors hover:border-border-light hover:text-text-bright"
          >
            View Source
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="h-8 w-5 rounded-full border border-border-light p-1">
          <div className="mx-auto h-2 w-0.5 animate-bounce rounded-full bg-silver-lo" />
        </div>
      </div>
    </section>
  );
}
