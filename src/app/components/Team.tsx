"use client";

import { FadeIn } from "./Animate";

export function Team() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32">
      <FadeIn>
        <p className="font-mono text-[10px] tracking-[4px] uppercase text-silver-lo">
          05 — About
        </p>
        <h2 className="mt-2 font-heading text-3xl font-semibold text-text-bright md:text-4xl">
          Who we are
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-12 max-w-2xl">
        <div className="glass card-glow rounded-2xl p-8">
          <p className="text-base leading-relaxed text-text">
            Axync is built by engineers with deep expertise in blockchain
            infrastructure, applied cryptography, and financial systems. We
            believe cross-chain transfers should be as cheap and safe as
            on-chain ones — backed by mathematical proof, not the hope that a
            bridge won&apos;t get exploited.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://github.com/axync"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-text-dim transition-colors hover:border-border-light hover:text-text-bright"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
