"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { sectors } from "@/lib/data";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionTitle from "@/components/shared/SectionTitle";

export default function BusinessSectors() {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Nos secteurs d'activité"
          subtitle="Une expertise diversifiée au service de vos projets industriels."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sectors.map((sector, index) => (
            <AnimatedSection key={sector.title} delay={index * 0.1}>
              <div className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden h-full transition-all duration-400 hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-gold hover:shadow-[0_20px_60px_rgba(0,0,0,0.08),0_0_30px_rgba(212,160,23,0.1)]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-green rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 sm:bottom-4 sm:left-5">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-sm"
                    >
                      <sector.icon
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">
                    {sector.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {sector.description}
                  </p>

                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                    {sector.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/activities"
                    className="inline-flex items-center gap-1.5 text-gold font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
