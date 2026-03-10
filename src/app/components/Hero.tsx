"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { AxyncMark } from "./AxyncMark";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

const ease: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
      {/* Background: gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="orb h-[700px] w-[700px] bg-blue-600/[0.07] top-[10%] -left-[15%]"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="orb h-[500px] w-[500px] bg-violet-600/[0.06] bottom-[15%] -right-[10%]"
          style={{ animationDelay: "-8s" }}
        />
        <div
          className="orb h-[400px] w-[400px] bg-cyan-500/[0.04] top-[50%] left-[40%]"
          style={{ animationDelay: "-16s" }}
        />
      </div>

      {/* Background: 3D scene */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <Scene3D />
      </div>

      {/* Background: grid */}
      <div className="pointer-events-none absolute inset-0 grid-pattern" />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-base/40 via-transparent to-base" />

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          <AxyncMark size={56} className="mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-border/60 bg-surface/40 px-4 py-1.5 font-mono text-[11px] text-text-dim backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-info" />
            Built on Base &middot; Sepolia Testnet
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="mx-auto max-w-4xl font-heading text-[3.2rem] leading-[1.05] font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient-hero">Move value</span>
          <br />
          <span className="text-gradient-hero">across chains.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-text-dim sm:text-lg md:text-xl"
        >
          Cross-chain transfers verified by zero-knowledge proofs.
          <br className="hidden sm:block" />
          No bridges. No wrapped tokens. Just math.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9, ease }}
          className="mt-4 font-mono text-xs tracking-[4px] uppercase text-muted"
        >
          Cheaper than bridges. Safer by design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1, ease }}
          className="mt-10 flex items-center justify-center gap-4"
        >
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
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-border-light pt-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-text-dim/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
