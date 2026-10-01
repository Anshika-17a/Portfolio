"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects, Project } from "@/content/projects";

function ProjectItem({ project, index }: { project: Project; index: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group py-12 md:py-16 border-b border-[var(--border-hairline)] last:border-none transition-all duration-300 hover:-translate-y-0.5"
    >
      <div className="flex flex-col gap-6">
        {/* Header: Project Index, Title, Context, and Badges */}
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
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
            <span
              className="inline-flex items-center px-2.5 py-0.5 text-xs font-code uppercase tracking-wider rounded-sm bg-[var(--accent-tint)] text-[var(--accent)] border border-[var(--accent-border)] font-medium"
            >
              {project.metricBadge}
            </span>
          </div>
        </div>

        {/* Project Context / Subhead */}
        <div className="font-code text-xs uppercase tracking-wider text-[var(--text-muted)]">
          {project.context} · <span className="text-[var(--text-ink)]">{project.role}</span>
        </div>

        {/* Three Labelled Parts: The problem / What I built / What it took to ship */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          {/* Part 1: The Problem */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="font-code text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              The Problem
            </h4>
            <p className="text-sm md:text-[0.9375rem] text-[var(--text-ink)] leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Part 2: What I Built (Technical) */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="font-code text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              What I Built
            </h4>
            <p className="text-sm md:text-[0.9375rem] text-[var(--text-ink)] leading-relaxed">
              {project.whatIBuilt}
            </p>
          </div>

          {/* Part 3: What It Took to Ship (Delivery & Leadership) */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="font-code text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              What It Took To Ship
            </h4>
            <p className="text-sm md:text-[0.9375rem] text-[var(--text-ink)] leading-relaxed">
              {project.whatItTookToShip}
            </p>
          </div>
        </div>

        {/* Bottom row: Tech tags in mono and Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--border-hairline)]">
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
                className="link-editorial font-code text-xs uppercase tracking-wider text-[var(--accent)] font-medium"
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
                  className="ml-1"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            )}

            {project.isPaperUnderReview && (
              <span className="font-code text-xs uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                Journal Paper Under Peer Review
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-label="Selected Work"
      className="py-20 md:py-32 border-b border-[var(--border-hairline)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 pb-6 border-b border-[var(--border-hairline)]">
          <div>
            <div className="font-code text-xs uppercase tracking-widest text-[var(--accent)] font-medium mb-3">
              Selected Work & Case Studies
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[var(--text-ink)] tracking-tight">
              Engineering Depth & Product Delivery
            </h2>
          </div>
          <p className="font-code text-xs uppercase tracking-wider text-[var(--text-muted)] mt-4 md:mt-0 max-w-[40ch]">
            Rigorous technical formulation paired with production shipping constraints.
          </p>
        </div>

        {/* Vertical Case Studies List */}
        <div className="divide-y divide-[var(--border-hairline)]">
          {projects.map((project, idx) => (
            <ProjectItem key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
