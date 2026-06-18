"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionTitle from "@/components/shared/SectionTitle";
import { partners } from "@/lib/data";

export default function Partners() {
  const firstRow = partners.slice(0, 6);
  const secondRow = partners.slice(6);

  return (
    <section className="bg-gray-50 py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            title="Nos Partenaires"
            subtitle="Ils nous font confiance pour leurs opérations industrielles"
          />
        </AnimatedSection>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 z-10 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-gray-50 to-transparent" />

        <AnimatedSection>
          <div className="mb-4 sm:mb-6">
            <div className="flex w-max animate-scroll gap-4 sm:gap-6">
              {[...firstRow, ...firstRow].map((partner, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex h-16 sm:h-20 min-w-[160px] sm:min-w-[200px] items-center justify-center rounded-sm border border-gray-200/80 bg-white/80 px-5 sm:px-8 backdrop-blur-sm transition-all duration-300 hover:border-[#D4A017]/30 hover:shadow-md hover:shadow-[#D4A017]/5"
                >
                  <span className="font-['Playfair_Display'] text-xs sm:text-sm font-semibold tracking-wide text-gray-700 transition-colors group-hover:text-[#D4A017] text-center">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex w-max animate-scroll-reverse gap-4 sm:gap-6">
              {[...secondRow, ...secondRow].map((partner, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex h-16 sm:h-20 min-w-[160px] sm:min-w-[200px] items-center justify-center rounded-sm border border-gray-200/80 bg-white/80 px-5 sm:px-8 backdrop-blur-sm transition-all duration-300 hover:border-[#D4A017]/30 hover:shadow-md hover:shadow-[#D4A017]/5"
                >
                  <span className="font-['Playfair_Display'] text-xs sm:text-sm font-semibold tracking-wide text-gray-700 transition-colors group-hover:text-[#D4A017] text-center">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
