type Node = {
  id: string;
  x: number;
  y: number;
  label?: string;
  primary?: boolean;
};

const NODES: Node[] = [
  { id: "hub", x: 200, y: 214, label: "us-east-1", primary: true },
  { id: "a", x: 84, y: 118, label: "eu-west-1" },
  { id: "b", x: 322, y: 142, label: "ap-south-1" },
  { id: "c", x: 104, y: 342 },
  { id: "d", x: 302, y: 362 },
];

const EDGES: [string, string][] = [
  ["hub", "a"],
  ["hub", "b"],
  ["hub", "c"],
  ["hub", "d"],
  ["a", "c"],
  ["b", "d"],
];

function nodeById(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export function SignatureGraphic() {
  return (
    <div className="relative w-full max-w-md rounded-[4px] border border-border bg-background-panel p-6">
      <div className="mb-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-foreground-faint">
        <span>Fig. 01 — Distributed nodes</span>
        <span className="flex items-center gap-2 text-foreground-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Live
        </span>
      </div>

      <svg
        viewBox="0 0 400 460"
        className="w-full"
        role="img"
        aria-label="Diagram of a distributed cloud network with a primary node connected to three regional nodes across the globe"
      >
        <defs>
          <pattern
            id="dot-grid"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="var(--border)" />
          </pattern>
          <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="400" height="460" fill="url(#dot-grid)" />

        {EDGES.map(([fromId, toId], i) => {
          const from = nodeById(fromId);
          const to = nodeById(toId);
          return (
            <g key={`${fromId}-${toId}`}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="var(--border-strong)"
                strokeWidth="1"
              />
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.5"
                className="animate-edge-flow"
                style={{ animationDelay: `${i * 0.25}s` }}
              />
            </g>
          );
        })}

        <text
          x={(nodeById("hub").x + nodeById("a").x) / 2 - 10}
          y={(nodeById("hub").y + nodeById("a").y) / 2 - 8}
          className="fill-foreground-faint font-mono text-[9px] uppercase tracking-wider"
        >
          14ms
        </text>

        {NODES.map((node) =>
          node.primary ? (
            <g key={node.id}>
              <circle
                cx={node.x}
                cy={node.y}
                r="34"
                fill="url(#hub-glow)"
              />
              <circle
                cx={node.x}
                cy={node.y}
                r="6"
                fill="var(--accent)"
                className="animate-pulse"
              />
              <circle
                cx={node.x}
                cy={node.y}
                r="6"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1"
              />
            </g>
          ) : (
            <circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r="4"
              fill="var(--background-panel-raised)"
              stroke="var(--border-strong)"
              strokeWidth="1"
            />
          ),
        )}

        {NODES.map((node) =>
          "label" in node ? (
            <text
              key={`label-${node.id}`}
              x={node.x}
              y={node.primary ? node.y + 26 : node.y - 12}
              textAnchor="middle"
              className="fill-foreground-muted font-mono text-[10px] uppercase tracking-wider"
            >
              {node.label}
            </text>
          ) : null,
        )}
      </svg>
    </div>
  );
}
