"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/content/achievements";

const keywords = [
  "Machine learning systems",
  "Production APIs",
  "Nonlinear state estimation",
  "Team leadership",
  "Shipping under deadline",
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const nameLetters = Array.from(profile.name);

  return (
    <section
      aria-label="Introduction"
      className="pt-24 pb-12 lg:pt-28 lg:pb-16 border-b border-[var(--border-hairline)] min-h-[calc(100vh-5rem)] flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Two thirds measure on desktop */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* 1. Name: Character-level fade with 8px rise, staggered 30ms */}
            <h1 className="font-display text-[clamp(2.75rem,7vw,4.5rem)] leading-[1.05] tracking-tight text-[var(--text-ink)] mb-3">
              {nameLetters.map((char, i) => (
                <motion.span
                  key={i}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.35, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }
                  }
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>

            {/* 2. Role line: Mono uppercase letter-spaced */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.4, delay: 0.08, ease: [0.16, 1, 0.3, 1] }
              }
              className="font-code text-xs md:text-sm uppercase tracking-widest text-[var(--accent)] font-medium mb-5"
            >
              {profile.roleLine}
            </motion.div>

            {/* 3. Keyword row: 5 phrases separated by accent dot, 40ms stagger */}
            <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1.5 font-code text-xs sm:text-sm text-[var(--text-ink)] mb-5"
              aria-label="Core areas of expertise"
            >
              {keywords.map((kw, i) => (
                <div key={kw} className="inline-flex items-center">
                  <motion.span
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.35, delay: 0.16 + i * 0.04, ease: [0.16, 1, 0.3, 1] }
                    }
                    className="font-medium"
                  >
                    {kw}
                  </motion.span>
                  {i < keywords.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="text-[var(--accent)] font-bold px-1.5 select-none"
                    >
                      ·
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* 4. One short line of body text */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.4, delay: 0.24, ease: [0.16, 1, 0.3, 1] }
              }
              className="text-base sm:text-lg text-[var(--text-muted)] max-w-[58ch] leading-relaxed mb-8"
            >
              Final-year AI &amp; ML engineering student. I build models and then ship them as working products.
            </motion.p>

            {/* 5. Primary CTAs */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }
              }
              className="flex flex-wrap items-center gap-6 mb-8"
            >
              <a
                href="#work"
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] text-sm font-semibold rounded-sm hover:opacity-95 transition-opacity focus-visible:outline-none"
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
            </motion.div>

            {/* 6. Social & Contact links */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.4, delay: 0.48, ease: [0.16, 1, 0.3, 1] }
              }
              className="flex flex-wrap items-center gap-6 pt-5 border-t border-[var(--border-hairline)] text-xs font-code uppercase tracking-wider text-[var(--text-muted)]"
            >
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
            </motion.div>
          </div>

          {/* Right Column: Photo reveal */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end w-full">
            <div className="relative group max-w-[260px] sm:max-w-[300px] w-full">
              {/* Editorial accent frame: draws in 200ms after photo */}
              <div
                aria-hidden="true"
                className="frame-accent-reveal absolute inset-0 translate-x-3 translate-y-3 rounded-lg border border-[var(--accent)] group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300 pointer-events-none"
              />

              {/* Photo Container: Wipes in from bottom behind clipping mask over 700ms */}
              <div className="photo-wipe-reveal relative rounded-lg overflow-hidden border border-[var(--border-hairline)] bg-[var(--bg-card)] shadow-sm">
                <Image
                  src="/anshika.jpg"
                  alt="Portrait of Anshika"
                  width={300}
                  height={375}
                  priority
                  fetchPriority="high"
                  className="w-full h-auto object-cover aspect-[4/5] filter saturate-[0.92] contrast-[1.03] transition-all duration-500 group-hover:saturate-100"
                  sizes="(max-width: 640px) 260px, 300px"
                />
              </div>

              {/* Subtle caption mark */}
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { duration: 0.4, delay: 0.6 }
                }
                className="mt-3 flex items-center justify-between font-code text-[11px] text-[var(--text-muted)] tracking-wider"
              >
                <span>ANSHIKA · SMVITM UDUPI</span>
                <span className="text-[var(--accent)]">2023–2027</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
