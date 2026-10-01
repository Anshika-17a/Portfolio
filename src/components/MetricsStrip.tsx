"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { metrics, MetricItem } from "@/content/achievements";

function MetricBlock({ item }: { item: MetricItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState<string>(() => {
    // If reduced motion, show final value directly
    return shouldReduceMotion ? item.value : (item.prefix || "") + "0" + (item.suffix || "");
  });

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      setDisplayValue(item.value);
      return;
    }

    if (item.id === "accuracy") {
      // Float countup from 0.0000 to 0.9976
      const duration = 1200;
      const start = performance.now();
      const target = item.numericTarget || 0.9976;

      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = (target * easeOut).toFixed(4);
        setDisplayValue(`R² ${current}`);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setDisplayValue(item.value);
        }
      };
      requestAnimationFrame(step);
    } else if (item.numericTarget !== undefined) {
      // Integer countup
      const duration = 900;
      const start = performance.now();
      const target = item.numericTarget;
      const prefix = item.prefix || "";
      const suffix = item.suffix || "";

      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * easeOut);
        setDisplayValue(`${prefix}${current}${suffix}`);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setDisplayValue(item.value);
        }
      };
      requestAnimationFrame(step);
    } else {
      setDisplayValue(item.value);
    }
  }, [isInView, shouldReduceMotion, item]);

  return (
    <div
      ref={ref}
      className="flex flex-col py-6 md:py-8 px-4 sm:px-6 md:px-8 border-b md:border-b-0 md:border-r border-[var(--border-hairline)] last:border-none"
    >
      <div className="font-display text-4xl sm:text-5xl lg:text-6xl text-[var(--text-ink)] tracking-tight leading-none mb-3">
        {displayValue}
      </div>
      <div className="font-code text-xs uppercase tracking-widest text-[var(--accent)] font-medium mb-1">
        {item.label}
      </div>
      <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-[28ch]">
        {item.description}
      </p>
    </div>
  );
}

export function MetricsStrip() {
  return (
    <section
      aria-label="Key Metrics"
      className="border-b border-[var(--border-hairline)] bg-[var(--bg-paper-subtle)]/40"
    >
      <div className="max-w-6xl mx-auto px-2 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {metrics.map((item) => (
            <MetricBlock key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
