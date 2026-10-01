
import Image from "next/image";
import { profile } from "@/content/achievements";

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="pt-28 pb-16 md:pt-40 md:pb-24 border-b border-[var(--border-hairline)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Two thirds measure on desktop */}
          <div className="lg:col-span-8 flex flex-col">
            {/* 1. Name */}
            <h1 className="font-display text-[clamp(2.75rem,7vw,4.5rem)] leading-[1.05] tracking-tight text-[var(--text-ink)] mb-4">
              {profile.name}
            </h1>

            {/* 2. Role line */}
            <div className="font-code text-xs md:text-sm uppercase tracking-widest text-[var(--accent)] font-medium mb-8">
              {profile.roleLine}
            </div>

            {/* 3. Summary */}
            <p className="text-lg md:text-xl text-[var(--text-ink)] max-w-[65ch] leading-[1.65] mb-10 text-balance">
              {profile.bio}
            </p>

            {/* 4. Primary CTAs */}
            <div className="hero-step-4 flex flex-wrap items-center gap-6 mb-12">
              <a
                href="#work"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] text-sm font-semibold rounded-sm hover:opacity-95 transition-opacity focus-visible:outline-none"
              >
                View work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </a>

              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="link-editorial text-sm font-code uppercase tracking-wider text-[var(--text-ink)] py-2"
              >
                Download résumé
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </div>

            {/* 5. Contact links */}
            <div className="hero-step-5 flex flex-wrap items-center gap-6 pt-6 border-t border-[var(--border-hairline)] text-xs font-code uppercase tracking-wider text-[var(--text-muted)]">
              <a
                href={`mailto:${profile.email}`}
                className="link-editorial hover:text-[var(--text-ink)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline mr-1"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                {profile.email}
              </a>

              <span aria-hidden="true" className="text-[var(--border-hairline)]">·</span>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-editorial hover:text-[var(--text-ink)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline mr-1"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </a>

              <span aria-hidden="true" className="text-[var(--border-hairline)]">·</span>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-editorial hover:text-[var(--text-ink)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="inline mr-1"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Portrait Photo with editorial offset rule */}
          <div className="hero-step-photo lg:col-span-4 flex justify-center lg:justify-end w-full">
            <div className="relative group max-w-[280px] sm:max-w-[320px] w-full">
              {/* Editorial accent-tinted offset frame */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-lg border border-[var(--accent)] opacity-40 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300 pointer-events-none"
              />

              {/* Photo Container */}
              <div className="relative rounded-lg overflow-hidden border border-[var(--border-hairline)] bg-[var(--bg-card)] shadow-sm">
                <Image
                  src="/anshika.jpg"
                  alt="Portrait of Anshika"
                  width={320}
                  height={400}
                  priority
                  fetchPriority="high"
                  className="w-full h-auto object-cover aspect-[4/5] filter saturate-[0.92] contrast-[1.03] transition-all duration-500 group-hover:saturate-100"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 320px"
                />
              </div>

              {/* Subtle caption mark */}
              <div className="mt-4 flex items-center justify-between font-code text-[11px] text-[var(--text-muted)] tracking-wider">
                <span>ANSHIKA · SMVITM UDUPI</span>
                <span className="text-[var(--accent)]">2023–2027</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
