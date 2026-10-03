"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/content/projects";
import { SectionHeadingRule } from "@/components/SectionHeadingRule";

export function AlsoBuilt() {
  const nonFeaturedProjects = projects.filter((p) => !p.featured);
  const shouldReduceMotion = useReducedMotion();

  if (nonFeaturedProjects.length === 0) return null;

  return (
    <section
      id="also-built"
      aria-label="Also Built"
      className="py-16 md:py-24 border-b border-[var(--border-hairline)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-10 pb-6 border-b border-[var(--border-hairline)]">
          <div className="font-code text-xs uppercase tracking-widest text-[var(--accent)] font-medium mb-3">
            Also Built
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-[var(--text-ink)] tracking-tight">
            Other Systems &amp; Prototypes
          </h2>
          <SectionHeadingRule className="w-16 sm:w-24 mt-4" />
        </div>

        {/* Compact simple one-line-each list */}
        <div className="divide-y divide-[var(--border-hairline)]">
          {nonFeaturedProjects.map((project, idx) => {
            const oneSentence =
              project.summary ||
              (project.problem.includes(".")
                ? project.problem.split(".")[0].trim() + "."
                : project.problem);

            return (
              <motion.div
                key={project.slug}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.4,
                  delay: shouldReduceMotion ? 0 : idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group py-5 transition-transform duration-200 hover:-translate-y-[2px]"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Title & One Sentence */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 max-w-3xl">
                    <h3 className="font-display text-lg sm:text-xl text-[var(--text-ink)] font-medium shrink-0">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                      {oneSentence}
                    </p>
                  </div>

                  {/* Tags and Optional Repo Link */}
                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="font-code text-[11px] uppercase tracking-wider text-[var(--text-muted)] bg-[var(--bg-paper-subtle)] px-2 py-0.5 rounded-xs border border-[var(--border-hairline)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-editorial group/repo font-code text-xs uppercase tracking-wider text-[var(--accent)] font-medium inline-flex items-center ml-2"
                      >
                        Repo
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="ml-1 transition-transform duration-200 group-hover/repo:translate-x-[3px]"
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
