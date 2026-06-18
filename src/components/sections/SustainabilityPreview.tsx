"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionTitle from "@/components/shared/SectionTitle";
import { sustainabilityPillars } from "@/lib/data";

export default function SustainabilityPreview() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B0B0B] via-[#0d1f0d] to-[#0B0B0B] py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-[#4CAF50]/10 blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-[#4CAF50]/5 blur-[80px] sm:blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            title="Engagement Environnemental"
            subtitle="Notre vision pour un avenir industriel durable et responsable"
            light
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {sustainabilityPillars.map((pillar, index) => (
            <AnimatedSection key={pillar.title} delay={index * 0.1}>
              <div className="group relative h-full rounded-sm border border-[#4CAF50]/20 bg-white/5 p-5 sm:p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#4CAF50]/40 hover:bg-[#4CAF50]/5">
                <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl font-bold text-[#4CAF50] transition-transform duration-300 group-hover:scale-105">
                  {pillar.metric}
                </div>
                <p className="mb-2 sm:mb-3 text-xs font-medium uppercase tracking-wider text-[#4CAF50]/70">
                  {pillar.metricLabel}
                </p>
                <h3 className="mb-2 text-base sm:text-lg font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#C0C0C0]/70">
                  {pillar.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-8 sm:mt-12 text-center">
            <Link
              href="/sustainability"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4CAF50] transition-colors hover:text-[#66BB6A]"
            >
              En savoir plus
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
