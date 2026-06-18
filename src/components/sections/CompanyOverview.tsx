"use client";

import { Calendar, Users, Globe, Award } from "lucide-react";
import { companyInfo } from "@/lib/data";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionTitle from "@/components/shared/SectionTitle";

const highlights = [
  {
    icon: Calendar,
    label: "Fondée en",
    value: companyInfo.founded,
  },
  {
    icon: Users,
    label: "Employés",
    value: companyInfo.employees,
  },
  {
    icon: Globe,
    label: "Siège",
    value: companyInfo.headquarters,
  },
  {
    icon: Award,
    label: "Certifications",
    value: "ISO 9001:2015",
  },
];

export default function CompanyOverview() {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Un leader multi-sectoriel"
          subtitle="Découvrez Bula Industrie, acteur majeur de l'industrie en Afrique de l'Ouest."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black font-['Playfair_Display']">
                {companyInfo.name}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                {companyInfo.description}
              </p>
              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                Depuis notre création, nous avons bâti une réputation solide
                grâce à notre engagement envers l&apos;excellence, l&apos;innovation
                et le développement durable. Notre approche intégrée nous permet
                d&apos;offrir des solutions complètes à nos clients à travers
                l&apos;Afrique de l&apos;Ouest.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="group relative bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:border-gold hover:bg-gold/5"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gold rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-gold mb-2 sm:mb-3" />
                  <p className="text-xs sm:text-sm text-gray-500 mb-1">{item.label}</p>
                  <p className="text-base sm:text-xl font-bold text-black">{item.value}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
