type Props = {
  name: string;
  className?: string;
};

const palette: Record<string, { bg: string; fg: string; label: string }> = {
  JavaScript: { bg: "#F7DF1E", fg: "#111827", label: "JS" },
  TypeScript: { bg: "#3178C6", fg: "#ffffff", label: "TS" },
  React: { bg: "#10B981", fg: "#0B1020", label: "R" },
  "Next.js": { bg: "#111827", fg: "#ffffff", label: "N" },
  "Node.js": { bg: "#3C873A", fg: "#ffffff", label: "Nd" },
  "Tailwind CSS": { bg: "#38BDF8", fg: "#0B1020", label: "Tw" }
};

export default function SkillIcon({ name, className }: Props) {
  const theme = palette[name] ?? {
    bg: "#64748B",
    fg: "#ffffff",
    label: name.slice(0, 2)
  };
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <linearGradient id={`g-${theme.label}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={theme.bg} stopOpacity="0.9" />
          <stop offset="100%" stopColor={theme.bg} stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect
        x="0"
        y="0"
        width="40"
        height="40"
        rx="10"
        fill={`url(#g-${theme.label})`}
      />
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="10"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill={theme.fg}
      >
        {theme.label}
      </text>
    </svg>
  );
}
