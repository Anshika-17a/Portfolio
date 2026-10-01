"use client";

import { motion, useReducedMotion } from "framer-motion";
import { educationList, certificationsList } from "@/content/achievements";

export function Education() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="education"
      aria-label="Education and Certifications"
      className="py-20 md:py-32 border-b border-[var(--border-hairline)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 pb-6 border-b border-[var(--border-hairline)]">
          <div className="font-code text-xs uppercase tracking-widest text-[var(--accent)] font-medium mb-3">
            Academic Foundation
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[var(--text-ink)] tracking-tight">
            Education & Certifications
          </h2>
        </div>

        {/* Two Columns: Degree & School on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Degrees */}
          <div className="lg:col-span-8 space-y-8">
            <h3 className="font-code text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              Degrees & Coursework
            </h3>

            <div className="space-y-8">
              {educationList.map((item, idx) => (
                <motion.div
                  key={item.degree}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: shouldReduceMotion ? 0 : idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="pb-6 border-b border-[var(--border-hairline)] last:border-none"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <h4 className="font-display text-xl sm:text-2xl text-[var(--text-ink)] font-medium">
                      {item.degree}
                    </h4>
                    <span className="font-code text-xs uppercase tracking-wider text-[var(--text-muted)]">
                      {item.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)] mb-3">
                    <span>{item.institution}</span>
                    {item.grade && (
                      <span className="font-code text-xs text-[var(--accent)] font-semibold px-2 py-0.5 rounded-xs bg-[var(--accent-tint)] border border-[var(--accent-border)]">
                        {item.grade}
                      </span>
                    )}
                  </div>

                  {item.details && (
                    <p className="text-xs sm:text-sm text-[var(--text-ink)] leading-relaxed">
                      {item.details}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Certifications */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-code text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certificationsList.map((cert) => (
                <div
                  key={cert.name}
                  className="p-4 rounded-xs border border-[var(--border-hairline)] bg-[var(--bg-paper-subtle)]/40"
                >
                  <div className="font-display text-base text-[var(--text-ink)] mb-1">
                    {cert.name}
                  </div>
                  <div className="font-code text-xs uppercase tracking-wider text-[var(--accent)]">
                    {cert.issuer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
