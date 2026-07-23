export function Portrait({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-sm bg-paper ${className}`}>
      <div
        className="aspect-[4/5] w-full"
        style={{
          backgroundImage:
            "radial-gradient(120% 80% at 30% 20%, oklch(0.98 0.005 90) 0%, oklch(0.94 0.01 90) 45%, oklch(0.88 0.012 90) 100%)",
        }}
      >
        <svg
          viewBox="0 0 400 500"
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Portrait placeholder"
        >
          <defs>
            <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.97 0.006 90)" />
              <stop offset="100%" stopColor="oklch(0.9 0.012 90)" />
            </linearGradient>
          </defs>
          <rect width="400" height="500" fill="url(#wall)" />
          {/* subtle architectural lines */}
          <line x1="0" y1="140" x2="400" y2="140" stroke="oklch(0.85 0.01 90)" strokeWidth="1" />
          <line x1="60" y1="0" x2="60" y2="500" stroke="oklch(0.86 0.01 90)" strokeWidth="1" />
          {/* silhouette */}
          <g fill="oklch(0.78 0.012 90)">
            <ellipse cx="200" cy="210" rx="58" ry="70" />
            <path d="M100 500 C100 380 140 320 200 320 C260 320 300 380 300 500 Z" />
          </g>
          <text
            x="200"
            y="470"
            textAnchor="middle"
            fontFamily="Instrument Serif, serif"
            fontSize="18"
            fill="oklch(0.35 0.01 260)"
            letterSpacing="4"
          >
            SM
          </text>
        </svg>
      </div>
    </div>
  );
}
