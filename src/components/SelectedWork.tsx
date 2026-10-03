"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { projects, Project } from "@/content/projects";
import { SectionHeadingRule } from "@/components/SectionHeadingRule";

function ProjectItem({ project, index }: { project: Project; index: number }) {
  const shouldReduceMotion = useReducedMotion();
  const baseDelay = shouldReduceMotion ? 0 : 0.05;

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 8 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.4,
        delay: shouldReduceMotion ? 0 : baseDelay + custom * 0.05,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <div className="border-b border-[var(--border-hairline)] last:border-none">
      <motion.article
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="group py-12 md:py-16 transition-transform duration-300 hover:-translate-y-[2px]"
      >
        <div className="flex flex-col gap-6">
          {/* Block 1: Index, Title, Period, and Metric Badges */}
          <motion.div
            custom={0}
            variants={itemVariants}
            className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-code text-xs uppercase tracking-widest text-[var(--accent)] font-semibold">
                0{index + 1}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-[var(--text-ink)] tracking-tight">
                {project.title}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="font-code text-xs uppercase tracking-wider text-[var(--text-muted)]">
                {project.period}
              </span>
              {project.statusBadge && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-code uppercase tracking-wider rounded-sm bg-[var(--accent-tint)] text-[var(--accent)] border border-[var(--accent-border)] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  {project.statusBadge}
                </span>
              )}
              {project.metricBadge && (
                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-code uppercase tracking-wider rounded-sm bg-[var(--accent-tint)] text-[var(--accent)] border border-[var(--accent-border)] font-medium">
                  {project.metricBadge}
                </span>
              )}
            </div>
          </motion.div>

          {/* Block 2: Context / Role */}
          <motion.div
            custom={1}
            variants={itemVariants}
            className="font-code text-xs uppercase tracking-wider text-[var(--text-muted)]"
          >
            {project.context ? `${project.context} · ` : ""}
            <span className="text-[var(--text-ink)]">{project.role}</span>
          </motion.div>

          {/* Blocks 3, 4, 5: Three Labelled Parts */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
            {/* Block 3: The Problem */}
            <motion.div
              custom={2}
              variants={itemVariants}
              className="lg:col-span-4 flex flex-col"
            >
              <h4 className="font-code text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                The Problem
              </h4>
              <p className="text-sm md:text-[0.9375rem] text-[var(--text-ink)] leading-relaxed">
                {project.problem}
              </p>
            </motion.div>

            {/* Block 4: What I Built / What We're Building */}
            <motion.div
              custom={3}
              variants={itemVariants}
              className="lg:col-span-4 flex flex-col"
            >
              <h4 className="font-code text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                {project.builtLabel || "What I Built"}
              </h4>
              <p className="text-sm md:text-[0.9375rem] text-[var(--text-ink)] leading-relaxed">
                {project.built}
              </p>
            </motion.div>

            {/* Block 5: What It Took to Ship / What It Takes to Ship */}
            <motion.div
              custom={4}
              variants={itemVariants}
              className="lg:col-span-4 flex flex-col"
            >
              <h4 className="font-code text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                {project.shippedLabel || "What It Took To Ship"}
              </h4>
              <p className="text-sm md:text-[0.9375rem] text-[var(--text-ink)] leading-relaxed">
                {project.shipped}
              </p>
            </motion.div>
          </div>

          {/* Block 6: Bottom row (tags & links) */}
          <motion.div
            custom={5}
            variants={itemVariants}
            className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--border-hairline)]"
          >
            <div className="flex flex-wrap items-center gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-code text-xs uppercase tracking-wider text-[var(--text-muted)] bg-[var(--bg-paper-subtle)] px-2 py-1 rounded-xs border border-[var(--border-hairline)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-editorial group/repo font-code text-xs uppercase tracking-wider text-[var(--accent)] font-medium inline-flex items-center"
                >
                  View Repository
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
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

              {project.statusBadge && (
                <span className="font-code text-xs uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  {project.statusBadge}
                </span>
              )}

              {project.isPaperUnderReview && (
                <span className="font-code text-xs uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  Journal Paper Under Peer Review
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </motion.article>
    </div>
  );
}

export function SelectedWork() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section
      id="work"
      aria-label="Selected Work"
      className="py-20 md:py-28 border-b border-[var(--border-hairline)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 pb-6 border-b border-[var(--border-hairline)]">
          <div>
            <div className="font-code text-xs uppercase tracking-widest text-[var(--accent)] font-medium mb-3">
              Selected Work &amp; Case Studies
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[var(--text-ink)] tracking-tight">
              Engineering Depth &amp; Product Delivery
            </h2>
            <SectionHeadingRule className="w-16 sm:w-24 mt-4" />
          </div>
          <p className="font-code text-xs uppercase tracking-wider text-[var(--text-muted)] mt-4 md:mt-0 max-w-[40ch]">
            Rigorous technical formulation paired with production shipping constraints.
          </p>
        </div>

        {/* Vertical Case Studies List */}
        <div>
          {featuredProjects.map((project, idx) => (
            <ProjectItem key={project.slug} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
