"use client";

import { FadeIn } from "./Animate";

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-[1200px] overflow-hidden px-6 py-28">
      <div className="glow bg-lavender/[0.12] absolute -top-[10%] left-[20%] h-[400px] w-[400px]" />
      <div className="glow bg-ice/[0.10] absolute -bottom-[10%] right-[20%] h-[350px] w-[350px]" />

      <FadeIn>
        <div className="glass mx-auto max-w-[700px] border-lavender/15 bg-gradient-to-br from-lavender/[0.06] to-ice/[0.06] p-12 text-center sm:p-16">
          <h2 className="font-heading text-[32px] font-bold text-text-bright">
            Trade tokens. <span className="text-gradient">Skip bridges.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-text-dim">
            List tokens or vesting positions on any chain. Get paid on any chain. ZK-powered, trustless, and permissionless.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a href="https://app.axync.xyz" className="btn-primary">
              Launch App
            </a>
            <a
              href="https://axync.gitbook.io/axync-docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Read Docs
            </a>
          </div>

          <div className="mt-5 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href="https://x.com/axync_xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              X Twitter
            </a>
            <a
              href="https://github.com/axync"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              GitHub
            </a>
            <a href="mailto:info@axync.xyz" className="btn-ghost">
              info@axync.xyz
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
