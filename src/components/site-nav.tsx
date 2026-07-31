import { MagneticLink } from "@/components/motion/magnetic-link";

/**
 * TODO: as new page sections are added, append their anchors here — this
 * list drives both the nav bar and the footer's navigation links.
 */
export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Work", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Endorsements", href: "#endorsements" },
];

export function SiteNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex h-20 items-center justify-between px-6 md:px-16">
        <a
          href="#top"
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Your Name
        </a>

        {NAV_LINKS.length > 0 && (
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link font-mono text-xs uppercase tracking-[0.15em] text-foreground-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        <MagneticLink
          href="#contact"
          className="inline-flex items-center rounded-[4px] border border-border-strong px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          Let&rsquo;s talk
        </MagneticLink>
      </div>
    </header>
  );
}
