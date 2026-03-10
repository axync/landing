"use client";

import { FadeIn } from "./Animate";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-32">
      <FadeIn>
        <div className="glass relative overflow-hidden rounded-2xl p-12 text-center md:p-16">
          {/* Background orb */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="orb h-[400px] w-[400px] bg-blue-600/[0.04] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>

          <div className="relative z-10">
            <p className="font-mono text-[10px] tracking-[4px] uppercase text-silver-lo">
              06 — Contact
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold text-text-bright md:text-4xl">
              Get in touch
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-text-dim">
              Whether you&apos;re a DeFi power user, an OTC desk, or a protocol
              looking to integrate — we&apos;d love to hear from you.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://x.com/axync_xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-heading text-sm font-medium text-text transition-colors hover:border-border-light hover:text-text-bright"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Twitter / X
              </a>
              <a
                href="mailto:info@axync.xyz"
                className="flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-heading text-sm font-medium text-text transition-colors hover:border-border-light hover:text-text-bright"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
                info@axync.xyz
              </a>
            </div>

            <div className="mt-12">
              <a
                href="https://app.axync.xyz"
                className="inline-block rounded-xl bg-gradient-to-br from-silver-hi to-silver-lo px-10 py-4 font-heading text-base font-semibold text-base transition-opacity hover:opacity-90"
              >
                Start Transferring
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
