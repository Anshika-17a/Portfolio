"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SectionHeadingRule({ className = "" }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ originX: 0 }}
      className={`h-[1.5px] bg-[var(--accent)] origin-left ${className}`}
      aria-hidden="true"
    />
  );
}
