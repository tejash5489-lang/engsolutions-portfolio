import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";

// TODO: swap in your real email and social profile URLs below.
const EMAIL = "hello@yourname.dev";
const SOCIAL_LINKS: { label: string; href: string }[] = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border bg-background px-6 py-24 md:px-16 md:py-32"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            ( 06 ) — Contact
          </p>
          <h2 className="mt-6 text-balance font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Start the conversation.
          </h2>
          <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-foreground-muted">
            Tell me about the project — timeline, scope, and what success
            looks like. I read every message personally and reply within one
            business day.
          </p>

          <div className="mt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground-faint">
              Elsewhere
            </p>
            <div className="mt-3 flex gap-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="font-mono text-xs uppercase tracking-[0.12em] text-foreground-muted transition-colors hover:text-foreground"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <a
            href={`mailto:${EMAIL}`}
            className="mt-8 inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
          >
            Prefer email? {EMAIL}
          </a>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
