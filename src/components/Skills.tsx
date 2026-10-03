"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillCategories } from "@/content/skills";
import { SectionHeadingRule } from "@/components/SectionHeadingRule";

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      aria-label="Technical and Delivery Skills"
      className="py-20 md:py-32 border-b border-[var(--border-hairline)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 pb-6 border-b border-[var(--border-hairline)]">
          <div className="font-code text-xs uppercase tracking-widest text-[var(--accent)] font-medium mb-3">
            Core Competencies
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[var(--text-ink)] tracking-tight">
            Technical Stack &amp; Delivery Capabilities
          </h2>
          <SectionHeadingRule className="w-16 sm:w-24 mt-4" />
        </div>

        {/* Grouped Skills List: Mono labels, items fade in with 25ms stagger */}
        <div className="divide-y divide-[var(--border-hairline)]">
          {skillCategories.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: shouldReduceMotion ? 0 : idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline"
            >
              {/* Category Label (Mono, Uppercase) */}
              <div className="md:col-span-4 lg:col-span-3">
                <span className="font-code text-xs uppercase tracking-widest text-[var(--accent)] font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                  {group.category}
                </span>
              </div>

              {/* Items staggered by 25ms */}
              <div className="md:col-span-8 lg:col-span-9">
                <p className="text-base md:text-lg text-[var(--text-ink)] font-normal tracking-normal leading-relaxed">
                  {group.skills.map((skill, sIdx) => (
                    <motion.span
                      key={skill}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 4 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.3,
                        delay: shouldReduceMotion ? 0 : sIdx * 0.025,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="inline-block"
                    >
                      {skill}
                      {sIdx < group.skills.length - 1 && (
                        <span className="text-[var(--text-muted)] select-none mr-2">,</span>
                      )}
                    </motion.span>
                  ))}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
