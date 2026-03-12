"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

const ease: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

function hexToRgba(hex: string, a: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

const NODE_COLORS = ["#CCCCFF", "#7DD3FC", "#CCCCFF", "#7DD3FC", "#E8E8E8"];
const NUM_NODES = 15;
const MAX_LINE_DIST = 350;

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  baseAlpha: number;
  alpha: number;
  drawR: number;
}

function createNode(w: number, h: number): Node {
  const r = 3 + Math.random() * 4;
  const baseAlpha = 0.3 + Math.random() * 0.5;
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    r,
    color: NODE_COLORS[Math.floor(Math.random() * NODE_COLORS.length)],
    baseAlpha,
    alpha: baseAlpha,
    drawR: r,
  };
}

function NodeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const w = parent.offsetWidth;
    const h = parent.offsetHeight;
    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, w, h);

    const nodes = nodesRef.current;
    const { x: mx, y: my } = mouseRef.current;

    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < -20) n.x = w + 20;
      if (n.x > w + 20) n.x = -20;
      if (n.y < -20) n.y = h + 20;
      if (n.y > h + 20) n.y = -20;

      const dx = mx - n.x;
      const dy = my - n.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const t = 1 - dist / 120;
        n.alpha = Math.min(1, n.baseAlpha + t * 0.25);
        n.drawR = n.r + t * 1.5;
      } else {
        n.alpha = n.baseAlpha;
        n.drawR = n.r;
      }
    }

    // Lines
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > MAX_LINE_DIST) continue;
        const alpha = 0.08 * (1 - dist / MAX_LINE_DIST);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = hexToRgba("#CCCCFF", alpha);
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }

    // Nodes
    for (const n of nodes) {
      // Glow
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.drawR * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = hexToRgba(n.color, n.alpha * 0.15);
      ctx.fill();
      // Core
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.drawR, 0, Math.PI * 2);
      ctx.fillStyle = hexToRgba(n.color, n.alpha);
      ctx.fill();
    }

    // Cursor glow on canvas
    if (mx > 0 && mx < w && my > 0 && my < h) {
      const mg = ctx.createRadialGradient(mx, my, 0, mx, my, 80);
      mg.addColorStop(0, "rgba(204,204,255,0.03)");
      mg.addColorStop(0.5, "rgba(125,211,252,0.015)");
      mg.addColorStop(1, "transparent");
      ctx.fillStyle = mg;
      ctx.fillRect(0, 0, w, h);
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const w = parent.offsetWidth;
    const h = parent.offsetHeight;
    nodesRef.current = Array.from({ length: NUM_NODES }, () => createNode(w, h));

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    window.addEventListener("mousemove", handleMouseMove);

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [animate]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
    />
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
      {/* Glow blobs */}
      <div className="glow bg-lavender/[0.16] absolute -top-[12%] left-1/4 h-[550px] w-[650px]" />
      <div className="glow bg-ice/[0.14] absolute -bottom-[8%] right-[15%] h-[450px] w-[550px]" />
      <div className="glow bg-ice/[0.08] absolute top-[35%] left-[8%] h-[250px] w-[250px]" />
      <div className="glow bg-lavender/[0.07] absolute top-[15%] right-[12%] h-[200px] w-[200px]" />

      {/* Canvas nodes */}
      <NodeCanvas />

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease }}
          className="mb-7"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-lavender/25 bg-lavender/[0.05] px-5 py-1.5 text-xs text-text-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            Live on Sepolia Testnet
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="font-heading text-[clamp(42px,6vw,74px)] font-bold leading-[1.05] tracking-tight"
        >
          Move value
          <br />
          <span className="text-gradient">across chains.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease }}
          className="mx-auto mt-5 max-w-[500px] text-[17px] leading-relaxed text-text-dim"
        >
          Cross-chain transfers verified by zero-knowledge proofs.
          No bridges. No wrapped tokens. Just math.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1, ease }}
          className="mt-9 flex items-center justify-center gap-3.5"
        >
          <a href="https://app.axync.xyz" className="btn-primary">
            Launch App
          </a>
          <a
            href="https://github.com/axync"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View Source
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9, ease }}
          className="mt-7 text-gradient text-[11px] tracking-[0.18em] uppercase opacity-45"
        >
          Cheaper than bridges. Safer by design.
        </motion.p>
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
          className="flex h-8 w-5 items-start justify-center rounded-full border border-border pt-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-text-dim/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
