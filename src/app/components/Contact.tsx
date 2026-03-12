"use client";

import { FadeIn } from "./Animate";

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-[1200px] overflow-hidden px-6 py-28">
      <div className="glow bg-lavender/[0.12] absolute -top-[10%] left-[20%] h-[400px] w-[400px]" />
      <div className="glow bg-ice/[0.10] absolute -bottom-[10%] right-[20%] h-[350px] w-[350px]" />

      <FadeIn>
        <div className="glass mx-auto max-w-[640px] p-10 text-center sm:p-12">
          <h2 className="font-heading text-[32px] font-bold text-text-bright">
            Get in touch
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-text-dim">
            Whether you&apos;re a DeFi power user, an OTC desk, or a protocol looking to integrate — we&apos;d love to hear from you.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href="https://x.com/axync_xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter / X
            </a>
            <a href="mailto:info@axync.xyz" className="btn-ghost">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13 2 4" />
              </svg>
              info@axync.xyz
            </a>
          </div>

          <div className="mt-8">
            <a href="https://app.axync.xyz" className="btn-primary">
              Start Transferring
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
