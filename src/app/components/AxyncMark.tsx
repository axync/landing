export function AxyncMark({
  size = 40,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const h = size * 1.25;
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 120 150"
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient
          id="silver-mark"
          x1="0"
          y1="10"
          x2="120"
          y2="140"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="45%" stopColor="#CBD5E1" />
          <stop offset="100%" stopColor="#94A3B8" />
        </linearGradient>
      </defs>
      <line
        x1="60"
        y1="10"
        x2="10"
        y2="140"
        stroke="url(#silver-mark)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="60"
        y1="10"
        x2="110"
        y2="140"
        stroke="url(#silver-mark)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="36.9"
        y1="70"
        x2="96.5"
        y2="105"
        stroke="url(#silver-mark)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="83.1"
        y1="70"
        x2="23.5"
        y2="105"
        stroke="url(#silver-mark)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
