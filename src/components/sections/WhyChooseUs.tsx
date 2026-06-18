"use client";

import { whyChooseUs } from "@/lib/data";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionTitle from "@/components/shared/SectionTitle";

export default function WhyChooseUs() {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Pourquoi nous choisir"
          subtitle="Les raisons qui font de Bula Industrie votre partenaire idéal."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {whyChooseUs.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.1}>
              <div className="group relative bg-gray-50 border border-gray-200 rounded-2xl p-5 sm:p-6 h-full transition-all duration-400 hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-gold hover:shadow-[0_20px_60px_rgba(0,0,0,0.08),0_0_30px_rgba(212,160,23,0.1)]">
                <span className="absolute top-3 right-3 sm:top-4 sm:right-4 text-4xl sm:text-5xl font-bold text-gold/10 group-hover:text-gold/20 transition-colors font-['Playfair_Display']">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-black mb-2 sm:mb-3 pr-10 sm:pr-12">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
