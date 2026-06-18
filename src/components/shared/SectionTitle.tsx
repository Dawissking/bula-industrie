"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
  className = "",
}: SectionTitleProps) {
  return (
    <div
      className={`mb-8 md:mb-10 ${centered ? "text-center" : "text-left"} ${className}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight ${
          light ? "text-white" : "text-[#0B0B0B]"
        }`}
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F5D569] ${
          centered ? "mx-auto" : ""
        }`}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-3 max-w-2xl text-base md:text-lg leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-[#C0C0C0]" : "text-gray-600"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
