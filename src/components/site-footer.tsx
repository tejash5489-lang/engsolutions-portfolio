import { NAV_LINKS } from "@/components/site-nav";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background px-6 py-8 md:px-16">
      <div className="flex flex-col items-center justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-faint md:flex-row">
        <p>© {year} Your Name. All rights reserved.</p>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>

        <a href="#top" className="transition-colors hover:text-foreground">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
