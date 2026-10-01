import { profile } from "@/content/achievements";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="py-12 bg-[var(--bg-paper)] text-[var(--text-muted)]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-baseline justify-between gap-4">
        <div className="text-sm font-display text-[var(--text-ink)]">
          {profile.name} © {currentYear}
        </div>
        <div className="font-code text-xs uppercase tracking-wider text-[var(--text-muted)]">
          Built with Next.js, TypeScript, Tailwind CSS & Framer Motion
        </div>
      </div>
    </footer>
  );
}
