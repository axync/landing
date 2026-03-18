import { AxyncMark } from "./AxyncMark";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-12 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <AxyncMark size={16} />
          <span className="font-heading text-sm font-bold text-text-bright">
            Axync
          </span>
        </div>

        <nav className="flex items-center gap-6">
          <a href="#problem" className="text-xs text-text-dim transition-colors hover:text-text-bright">
            Problem
          </a>
          <a href="#how-it-works" className="text-xs text-text-dim transition-colors hover:text-text-bright">
            How It Works
          </a>
          <a href="#features" className="text-xs text-text-dim transition-colors hover:text-text-bright">
            Features
          </a>
          <a href="#compare" className="text-xs text-text-dim transition-colors hover:text-text-bright">
            Compare
          </a>
          <a
            href="https://axync.gitbook.io/axync-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-dim transition-colors hover:text-text-bright"
          >
            Docs
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://x.com/axync_xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim transition-colors hover:text-text-bright"
            aria-label="Twitter"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://github.com/axync"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-dim transition-colors hover:text-text-bright"
            aria-label="GitHub"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center font-mono text-[10px] text-muted">
        &copy; 2026 Axync. All rights reserved.
      </div>
    </footer>
  );
}
