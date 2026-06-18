"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionTitle from "@/components/shared/SectionTitle";
import { sectors } from "@/lib/data";

export default function ActivitiesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[40vh] sm:min-h-[50vh] items-center justify-center bg-[#0B0B0B]">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4A017]/5 blur-[100px] sm:blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#D4A017]">
              Activités
            </p>
            <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Nos <span className="gradient-text-gold">Secteurs</span>
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-[#C0C0C0] px-2">
              Six domaines d&apos;expertise au service de votre succès
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-20 md:space-y-24">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              const isEven = index % 2 === 0;
              return (
                <AnimatedSection key={sector.title}>
                  <div
                    className={`grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12`}
                  >
                    <div className={isEven ? "" : "lg:order-2"}>
                      <div
                        className="inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-sm"
                        style={{ backgroundColor: `${sector.color}15` }}
                      >
                        <Icon size={24} className="sm:hidden" style={{ color: sector.color }} />
                        <Icon size={32} className="hidden sm:block" style={{ color: sector.color }} />
                      </div>
                      <h2 className="mt-4 sm:mt-6 font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B0B0B]">
                        {sector.title}
                      </h2>
                      <p className="mt-3 sm:mt-4 max-w-lg leading-relaxed text-gray-600 text-sm sm:text-base">
                        {sector.description}
                      </p>

                      <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                        {sector.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 sm:gap-3 rounded-sm border border-gray-100 bg-gray-50 p-2.5 sm:p-3"
                          >
                            <div
                              className="h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0 rounded-full"
                              style={{ backgroundColor: sector.color }}
                            />
                            <span className="text-xs sm:text-sm font-medium text-gray-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                        style={{ color: sector.color }}
                      >
                        En savoir plus
                        <ArrowRight size={16} />
                      </Link>
                    </div>

                    <div className={`${isEven ? "" : "lg:order-1"}`}>
                      <div className="relative aspect-square overflow-hidden rounded-sm">
                        <Image
                          src={sector.image}
                          alt={sector.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B0B0B] py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="Un projet dans l'un de nos secteurs ?"
              subtitle="Notre équipe est prête à vous accompagner"
              light
            />
            <Link
              href="/contact"
              className="mt-2 sm:mt-4 inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-[#D4A017] to-[#F5D569] px-6 py-3 sm:px-8 sm:py-3.5 text-sm font-bold text-[#0B0B0B] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4A017]/20"
            >
              Contactez-nous
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
