"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { companyInfo } from "@/lib/data";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4A017]/5 blur-[100px] sm:blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
              Prêt à démarrer{" "}
              <span className="gradient-text-gold">votre projet</span> ?
            </h2>
            <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-[#C0C0C0] px-2">
              Contactez notre équipe d&apos;experts pour discuter de vos besoins
              et obtenir une solution sur mesure adaptée à vos objectifs.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 px-4">
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-sm bg-gradient-to-r from-[#D4A017] to-[#F5D569] px-6 py-3 sm:px-8 sm:py-3.5 text-sm font-bold text-[#0B0B0B] shadow-lg shadow-[#D4A017]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4A017]/30"
              >
                Contactez-nous
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact#devis"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-sm border border-[#D4A017]/40 px-6 py-3 sm:px-8 sm:py-3.5 text-sm font-semibold text-[#D4A017] transition-all duration-300 hover:border-[#D4A017] hover:bg-[#D4A017]/5"
              >
                Demander un devis
              </Link>
            </div>

            <div className="mt-8 sm:mt-12 flex flex-col items-center justify-center gap-2 sm:gap-4 sm:flex-row sm:gap-8">
              {[companyInfo.phone1, companyInfo.phone2, companyInfo.phone3].map(
                (phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-xs sm:text-sm text-[#C0C0C0]/80 transition-colors hover:text-[#D4A017]"
                  >
                    <Phone size={12} className="sm:hidden" />
                    <Phone size={14} className="hidden sm:block" />
                    {phone}
                  </a>
                )
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
