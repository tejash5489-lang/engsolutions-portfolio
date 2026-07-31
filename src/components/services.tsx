import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";

type ServiceTrack = {
  index: string;
  title: string;
  items: string[];
};

const TRACKS: ServiceTrack[] = [
  {
    index: "01",
    title: "Full-Stack Application Delivery",
    items: [
      "Product engineering from spec to production",
      "API, database, and integration design",
      "Performance, accessibility, and QA passes",
    ],
  },
  {
    index: "02",
    title: "Automated Architecture Design",
    items: [
      "Infrastructure as code across environments",
      "CI/CD pipeline design and hardening",
      "Cloud cost, scaling, and reliability review",
    ],
  },
  {
    index: "03",
    title: "Dedicated Technical Strategy",
    items: [
      "Technical due diligence and system audits",
      "Roadmap and architecture planning",
      "Embedded senior engineering support",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="mt-0.5 h-4 w-4 shrink-0"
      fill="none"
      aria-hidden
    >
      <path
        d="M3.5 8.5L6.5 11.5L12.5 4.5"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="border-t border-border bg-background px-6 py-24 md:px-16 md:py-32"
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          ( 04 ) — Services
        </p>
        <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl">
          Expert Solutions
        </h2>
      </Reveal>

      <div className="mt-16 rounded-[4px] border border-border bg-background-panel">
        <StaggerGroup className="grid grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {TRACKS.map((track) => (
            <StaggerItem
              key={track.index}
              className="p-8 transition-colors duration-300 hover:bg-background-panel-raised/60"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-foreground-faint">
                  {track.index}
                </span>
                <h3 className="text-xl font-medium text-foreground">
                  {track.title}
                </h3>
              </div>

              <ul className="mt-6 divide-y divide-border">
                {track.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 py-3 first:pt-0 last:pb-0"
                  >
                    <CheckIcon />
                    <span className="text-sm leading-relaxed text-foreground-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
