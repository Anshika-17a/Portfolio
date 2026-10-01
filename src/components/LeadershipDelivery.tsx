"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  leadershipRoles,
  hackathonAchievements,
  dualTrackQuote,
} from "@/content/experience";

export function LeadershipDelivery() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="leadership"
      aria-label="Leadership and Delivery"
      className="py-20 md:py-32 border-b border-[var(--border-hairline)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 pb-6 border-b border-[var(--border-hairline)]">
          <div className="font-code text-xs uppercase tracking-widest text-[var(--accent)] font-medium mb-3">
            Execution & Scope Ownership
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[var(--text-ink)] tracking-tight mb-6">
            Leadership & Delivery
          </h2>

          {/* Dual-track honest quote */}
          <blockquote className="border-l-2 border-[var(--accent)] pl-4 py-1 text-base md:text-lg italic text-[var(--text-ink)] font-display max-w-[65ch]">
            &ldquo;{dualTrackQuote}&rdquo;
          </blockquote>
        </div>

        {/* Two-column layout: Leadership Roles on Left, Hackathons/Delivery Under Deadline on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Leadership & Scope Ownership */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <h3 className="font-code text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              Organizational Ownership & Funded Delivery
            </h3>

            <div className="divide-y divide-[var(--border-hairline)]">
              {leadershipRoles.map((role, idx) => (
                <motion.div
                  key={role.id}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: shouldReduceMotion ? 0 : idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="py-6 first:pt-0 last:pb-0"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <h4 className="text-lg md:text-xl font-display font-medium text-[var(--text-ink)]">
                      {role.title} · <span className="text-[var(--accent)]">{role.organization}</span>
                    </h4>
                    <span className="font-code text-xs uppercase tracking-wider text-[var(--text-muted)]">
                      {role.period}
                    </span>
                  </div>

                  <div className="font-code text-xs uppercase tracking-wider text-[var(--text-muted)] mb-3">
                    {role.scope}
                  </div>

                  <p className="text-sm md:text-[0.9375rem] text-[var(--text-ink)] leading-relaxed mb-3">
                    {role.outcome}
                  </p>

                  {role.tags && (
                    <div className="flex flex-wrap gap-2">
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-code text-[11px] uppercase tracking-wider text-[var(--text-muted)] bg-[var(--bg-paper-subtle)] px-2 py-0.5 rounded-xs border border-[var(--border-hairline)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Hackathon Record (Delivery under tight deadlines) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-code text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              Delivery Under Deadline · Hackathons
            </h3>

            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Competitive sprints evaluating rapid scoping, architecture selection, model validation, and live demo delivery.
            </p>

            <div className="space-y-4">
              {hackathonAchievements.map((item, idx) => (
                <motion.div
                  key={item.event}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: shouldReduceMotion ? 0 : idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-5 rounded-xs border border-[var(--border-hairline)] bg-[var(--bg-paper-subtle)]/30 transition-colors hover:border-[var(--border-strong)]"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 text-xs font-code uppercase tracking-wider rounded-xs font-medium ${
                        item.result === "Winner"
                          ? "bg-[var(--accent-tint)] text-[var(--accent)] border border-[var(--accent-border)]"
                          : "bg-[var(--bg-card)] text-[var(--text-ink)] border border-[var(--border-hairline)]"
                      }`}
                    >
                      {item.result}
                    </span>
                    <span className="font-code text-xs uppercase tracking-wider text-[var(--text-muted)]">
                      {item.year}
                    </span>
                  </div>

                  <h4 className="text-base font-display font-medium text-[var(--text-ink)] mb-1">
                    {item.event}
                  </h4>
                  <div className="font-code text-[11px] uppercase tracking-wider text-[var(--text-muted)] mb-2">
                    {item.organizer}
                  </div>
                  <p className="text-xs text-[var(--text-ink)] leading-relaxed">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
