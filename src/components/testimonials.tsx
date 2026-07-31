import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They shipped in weeks what we'd budgeted a full quarter for — and the codebase held up under production load from day one. Rare to get speed and rigor from the same engineer.",
    name: "Sarah Chen",
    title: "VP of Engineering",
    company: "Northwind Logistics",
  },
  {
    quote:
      "Every deadline was hit early, and every system was still standing six months later. That combination — fast delivery, zero technical debt — is what we look for and almost never find.",
    name: "Marcus Reyes",
    title: "CTO",
    company: "Fielder Health",
  },
];

export function Testimonials() {
  return (
    <section
      id="endorsements"
      className="border-t border-border bg-background px-6 py-24 md:px-16 md:py-32"
    >
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          ( 05 ) — Endorsements
        </p>
        <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl">
          Client Endorsements
        </h2>
      </Reveal>

      <StaggerGroup className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((testimonial) => (
          <StaggerItem
            key={testimonial.name}
            className="flex flex-col rounded-[4px] border border-border bg-background-panel-raised p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 md:p-10"
          >
            <figure className="flex h-full flex-col">
              <span
                aria-hidden
                className="font-display text-6xl leading-none text-accent/30"
              >
                &ldquo;
              </span>

              <blockquote className="mt-4 flex-1 font-display text-xl italic leading-[1.5] text-foreground">
                {testimonial.quote}
              </blockquote>

              <figcaption className="mt-8 border-t border-border pt-6">
                <p className="text-sm font-medium text-foreground">
                  {testimonial.name}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-foreground-muted">
                  {testimonial.title} — {testimonial.company}
                </p>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
