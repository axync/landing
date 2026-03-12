"use client";

import { FadeIn } from "./Animate";

export function Team() {
  return (
    <section id="about" className="relative mx-auto max-w-[1200px] overflow-hidden px-6 py-28">
      <div className="glow bg-lavender/[0.10] absolute left-0 top-[5%] h-[350px] w-[350px]" />
      <div className="glow bg-ice/[0.08] absolute bottom-[5%] right-0 h-[300px] w-[300px]" />

      <FadeIn>
        <span className="text-xs tracking-[0.12em] uppercase text-lavender">
          05 — About
        </span>
        <h2 className="mt-4 text-center font-heading text-[clamp(28px,4vw,44px)] font-bold leading-[1.15] text-text-bright">
          Who we are
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="mx-auto mt-8 max-w-[680px] text-center text-base leading-[1.8] text-text-dim">
          Axync is built by engineers with deep expertise in blockchain infrastructure, applied cryptography, and financial systems. We believe cross-chain transfers should be as cheap and safe as on-chain ones — backed by mathematical proof, not the hope that a bridge won&apos;t get exploited.
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-12 border-t border-b border-border py-8 sm:gap-16">
          <div className="text-center">
            <div className="text-gradient text-4xl font-bold">2</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-text-dim">
              Chains Live
            </div>
          </div>
          <div className="text-center">
            <div className="text-gradient text-4xl font-bold">&lt; 1s</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-text-dim">
              Settlement Time
            </div>
          </div>
          <div className="text-center">
            <div className="text-gradient text-4xl font-bold">0%</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-text-dim">
              Bridge Risk
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
        <a
          href="https://github.com/axync"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          GitHub
        </a>
        <a
          href="https://x.com/axync_xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Twitter
        </a>
      </FadeIn>
    </section>
  );
}
