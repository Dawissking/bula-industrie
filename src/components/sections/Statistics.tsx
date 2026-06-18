"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";

function parseStatValue(value: string): { numeric: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (match) {
    return { numeric: parseInt(match[1], 10), suffix: match[2] };
  }
  return { numeric: 0, suffix: value };
}

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const { numeric, suffix } = parseStatValue(value);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || numeric === 0) return;

    let start = 0;
    const duration = 2000;
    const increment = numeric / (duration / 16);
    let animationFrame: number;

    const animate = () => {
      start += increment;
      if (start >= numeric) {
        setCount(numeric);
        return;
      }
      setCount(Math.floor(start));
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, numeric]);

  return (
    <div ref={ref} className="text-center p-3 sm:p-4 md:p-6">
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold mb-1.5 sm:mb-2 tabular-nums">
        {count}
        {suffix}
      </p>
      <p className="text-gray-400 text-xs sm:text-sm md:text-base">{label}</p>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] sm:w-[800px] sm:h-[400px] bg-gold/5 rounded-full blur-[100px] sm:blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Des chiffres qui{" "}
            <span className="gradient-text-gold">parlent</span>
          </h2>
          <div className="mt-3 sm:mt-4 h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r from-gold to-gold-light mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <AnimatedCounter value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
