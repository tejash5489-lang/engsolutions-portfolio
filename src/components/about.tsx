import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";

const FOCUS_AREAS = [
  {
    index: "01",
    title: "Enterprise Architecture",
    description:
      "Designing systems that scale cleanly as complexity and team size grow.",
  },
  {
    index: "02",
    title: "Full-Stack Optimization",
    description:
      "Tuning every layer of the stack for speed, from database queries to render paths.",
  },
  {
    index: "03",
    title: "Cloud Automation",
    description:
      "Automating infrastructure so deployments are repeatable, safe, and fast.",
  },
];

export function About() {
  return (
    <section
      id="philosophy"
      className="border-t border-border bg-background px-6 py-24 md:px-16 md:py-32"
    >
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-16">
        {/* Left — narrative */}
        <Reveal className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            ( 02 ) — Approach
          </p>
          <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            The Philosophy
          </h2>
          <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-foreground-muted">
            I build with zero unnecessary overhead. Every system I ship is
            engineered to do exactly what it needs to — nothing more — so it
            stays fast under load and cheap to maintain long after launch.
            That discipline compounds: lean systems ship faster, cost less to
            run, and free teams to focus on the product instead of fighting
            their own infrastructure. It&rsquo;s the difference between
            software that merely works and software that accelerates the
            business around it.
          </p>
        </Reveal>

        {/* Right — focus areas */}
        <StaggerGroup
          as="ul"
          className="flex flex-col gap-4 lg:col-span-6 lg:col-start-7"
        >
          {FOCUS_AREAS.map((area) => (
            <StaggerItem
              key={area.index}
              as="li"
              className="rounded-[4px] border border-border bg-background-panel p-6 transition-colors duration-300 hover:border-border-strong"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-foreground-faint">
                  {area.index}
                </span>
                <h3 className="text-lg font-medium text-foreground">
                  {area.title}
                </h3>
              </div>
              <p className="mt-2 pl-9 text-sm leading-relaxed text-foreground-muted">
                {area.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
