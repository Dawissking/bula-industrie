"use client";

import Link from "next/link";
import { ArrowRight, Target, Eye } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionTitle from "@/components/shared/SectionTitle";
import { companyInfo, values } from "@/lib/data";

const timeline = [
  { year: "2015", title: "Fondation", description: "Création de Bula Industrie à Bamako, Mali, avec une vision claire : devenir un leader industriel en Afrique de l'Ouest." },
  { year: "2017", title: "Expansion", description: "Ouverture de nos premiers bureaux régionaux et lancement de nos activités d'import-export." },
  { year: "2019", title: "Diversification", description: "Entrée dans les secteurs de l'agro-business et des lubrifiants industriels." },
  { year: "2021", title: "Certification", description: "Obtention de la certification ISO 9001:2015 pour l'ensemble de nos processus." },
  { year: "2023", title: "Innovation Verte", description: "Lancement du programme de développement durable et investissement dans les énergies renouvelables." },
  { year: "2025", title: "Leadership", description: "Plus de 500 employés et 1000 clients satisfaits dans 6 secteurs d'activité." },
];

const team = [
  { name: "Direction Générale", role: "Leadership stratégique" },
  { name: "Direction Technique", role: "Innovation et production" },
  { name: "Direction Commerciale", role: "Développement commercial" },
  { name: "Direction RH", role: "Capital humain" },
];

export default function AboutPage() {
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
              À Propos
            </p>
            <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Notre <span className="gradient-text-gold">Histoire</span>
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-[#C0C0C0] px-2">
              Depuis 2015, Bula Industrie construit l&apos;avenir industriel de
              l&apos;Afrique avec excellence et engagement.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection direction="left">
              <div>
                <SectionTitle
                  title="Notre Histoire"
                  subtitle="Une décennie d'excellence industrielle"
                  centered={false}
                />
                <p className="mt-5 sm:mt-6 leading-relaxed text-gray-600 text-sm sm:text-base">
                  {companyInfo.description}
                </p>
                <p className="mt-3 sm:mt-4 leading-relaxed text-gray-600 text-sm sm:text-base">
                  Fondée en {companyInfo.founded} à {companyInfo.headquarters},
                  Bula Industrie est née de la volonté de créer un acteur
                  industriel de classe mondiale en Afrique. Notre engagement
                  envers l&apos;excellence et l&apos;innovation nous a permis de
                  nous imposer comme un leader reconnu dans six secteurs
                  stratégiques.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="aspect-[4/3] rounded-sm bg-gradient-to-br from-gray-800 to-gray-900" />
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 rounded-sm bg-[#D4A017] px-4 py-3 sm:px-6 sm:py-4 shadow-lg">
                  <p className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#0B0B0B]">
                    {companyInfo.founded}
                  </p>
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#0B0B0B]/70">
                    Fondation
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="Parcours"
              subtitle="Les étapes clés de notre développement"
            />
          </AnimatedSection>

          <div className="relative mt-10 sm:mt-16">
            {/* Vertical line - centered on desktop, left on mobile */}
            <div className="absolute left-4 sm:left-1/2 top-0 h-full w-px -translate-x-1/2 sm:-translate-x-1/2 bg-gradient-to-b from-[#D4A017] to-[#D4A017]/20" />
            <div className="space-y-8 sm:space-y-12">
              {timeline.map((item, index) => (
                <AnimatedSection
                  key={item.year}
                  delay={index * 0.1}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  {/* Mobile layout - always left-aligned */}
                  <div className="relative flex items-start sm:items-center sm:flex-row">
                    <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:order-2"} pl-8 sm:pl-0`}>
                      <span className="text-xs sm:text-sm font-bold text-[#D4A017]">
                        {item.year}
                      </span>
                      <h3 className="mt-1 text-base sm:text-lg font-bold text-[#0B0B0B]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </div>
                    <div className="absolute left-4 z-10 flex h-3 w-3 sm:h-4 sm:w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#D4A017] bg-white" />
                    <div className="hidden sm:block sm:w-1/2 sm:order-1" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            <AnimatedSection>
              <div className="h-full rounded-sm border border-[#D4A017]/20 bg-[#D4A017]/5 p-6 sm:p-8">
                <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-sm bg-[#D4A017]/10">
                  <Target size={24} className="text-[#D4A017] sm:hidden" />
                  <Target size={28} className="text-[#D4A017] hidden sm:block" />
                </div>
                <h3 className="mb-3 sm:mb-4 font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-[#0B0B0B]">
                  Notre Mission
                </h3>
                <p className="leading-relaxed text-gray-600 text-sm sm:text-base">
                  Fournir des solutions industrielles innovantes et durables qui
                  contribuent au développement économique de l&apos;Afrique, tout
                  en maintenant les plus hauts standards de qualité et de
                  responsabilité environnementale.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="h-full rounded-sm border border-[#4CAF50]/20 bg-[#4CAF50]/5 p-6 sm:p-8">
                <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-sm bg-[#4CAF50]/10">
                  <Eye size={24} className="text-[#4CAF50] sm:hidden" />
                  <Eye size={28} className="text-[#4CAF50] hidden sm:block" />
                </div>
                <h3 className="mb-3 sm:mb-4 font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-[#0B0B0B]">
                  Notre Vision
                </h3>
                <p className="leading-relaxed text-gray-600 text-sm sm:text-base">
                  Devenir le leader de référence en Afrique de l&apos;Ouest dans
                  les secteurs industriels, reconnu pour notre excellence
                  opérationnelle, notre innovation et notre engagement envers un
                  avenir durable.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="Nos Valeurs"
              subtitle="Les principes qui guident chacune de nos actions"
            />
          </AnimatedSection>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="group card-premium h-full rounded-sm border border-gray-200 bg-white p-5 sm:p-6">
                  <span className="text-2xl sm:text-3xl">{value.icon}</span>
                  <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-bold text-[#0B0B0B] transition-colors group-hover:text-[#D4A017]">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-sm leading-relaxed text-gray-600">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="Notre Équipe"
              subtitle="Des professionnels passionnés au service de l'excellence"
            />
          </AnimatedSection>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <div className="group text-center">
                  <div className="mx-auto mb-3 sm:mb-4 aspect-square w-24 sm:w-32 overflow-hidden rounded-full bg-gradient-to-br from-gray-800 to-gray-900 transition-transform duration-300 group-hover:scale-105" />
                  <h3 className="text-base sm:text-lg font-bold text-[#0B0B0B]">{member.name}</h3>
                  <p className="text-sm text-[#D4A017]">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B0B0B] py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Rejoignez <span className="gradient-text-gold">l&apos;aventure</span>
            </h2>
            <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-[#C0C0C0] px-2">
              Envie de contribuer à l&apos;avenir industriel de l&apos;Afrique ?
              Découvrez nos opportunités.
            </p>
            <Link
              href="/contact"
              className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-[#D4A017] to-[#F5D569] px-6 py-3 sm:px-8 sm:py-3.5 text-sm font-bold text-[#0B0B0B] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4A017]/20"
            >
              Nous contacter
              <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
