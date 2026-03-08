"use client";

import { useState } from "react";
import { AxyncMark } from "./AxyncMark";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Chains", href: "#chains" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-base/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <AxyncMark size={20} />
          <span className="font-heading text-lg font-bold text-text-bright">
            Axync
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-text-dim transition-colors hover:text-text-bright"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://app.axync.xyz"
          className="hidden rounded-lg bg-gradient-to-br from-silver-hi to-silver-lo px-5 py-2 font-heading text-sm font-semibold text-base transition-opacity hover:opacity-90 md:inline-block"
        >
          Launch App
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-text-dim md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-base px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-text-dim transition-colors hover:text-text-bright"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://app.axync.xyz"
              className="mt-2 rounded-lg bg-gradient-to-br from-silver-hi to-silver-lo px-5 py-2 text-center font-heading text-sm font-semibold text-base"
            >
              Launch App
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
