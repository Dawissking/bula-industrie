"use client";

import Link from "next/link";
import { ArrowRight, Leaf, Recycle, Users, Lightbulb } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionTitle from "@/components/shared/SectionTitle";
import { sustainabilityPillars } from "@/lib/data";

const pillarIcons = [Leaf, Recycle, Users, Lightbulb];

const impactMetrics = [
  { value: "-30%", label: "Réduction des émissions CO2" },
  { value: "85%", label: "Taux de recyclage" },
  { value: "200+", label: "Jeunes formés par an" },
  { value: "15M FCFA", label: "Investis en R&D verte" },
];

const commitments = [
  "Respect des normes environnementales internationales",
  "Réduction progressive de notre empreinte carbone",
  "Investissement dans les énergies renouvelables",
  "Programmes de formation pour les communautés locales",
  "Partenariats avec des organisations environnementales",
  "Transparence dans nos rapports RSE",
];

const futureGoals = [
  { year: "2025", goal: "Atteindre 50% d'énergies renouvelables dans nos opérations" },
  { year: "2027", goal: "Zéro déchet dans nos sites industriels" },
  { year: "2028", goal: "Compensation carbone totale de nos activités" },
  { year: "2030", goal: "Devenir un acteur neutre en carbone" },
];

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[40vh] sm:min-h-[50vh] items-center justify-center bg-gradient-to-br from-[#0B0B0B] via-[#0d1f0d] to-[#0B0B0B]">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4CAF50]/10 blur-[100px] sm:blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#4CAF50]">
              Durabilité
            </p>
            <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Engagement{" "}
              <span className="text-[#4CAF50]">Environnemental</span>
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-[#C0C0C0] px-2">
              Notre vision pour un avenir industriel durable et responsable
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="Notre Mission"
              subtitle="Intégrer la durabilité au cœur de chaque décision industrielle"
            />
            <div className="mx-auto max-w-3xl text-center px-2">
              <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                Chez Bula Industrie, nous croyons que l&apos;excellence industrielle
                et la responsabilité environnementale ne s&apos;opposent pas, mais
                se renforcent mutuellement. Notre engagement envers le
                développement durable guide chacune de nos décisions, de la
                conception de nos produits à la gestion de nos opérations
                quotidiennes.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-gray-50 py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="Nos Piliers"
              subtitle="Les fondations de notre stratégie durable"
            />
          </AnimatedSection>

          <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2">
            {sustainabilityPillars.map((pillar, index) => {
              const Icon = pillarIcons[index];
              return (
                <AnimatedSection key={pillar.title} delay={index * 0.1}>
                  <div className="group card-premium h-full rounded-sm border border-[#4CAF50]/20 bg-white p-6 sm:p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-sm bg-[#4CAF50]/10 transition-transform duration-300 group-hover:scale-110">
                        <Icon size={24} className="text-[#4CAF50] sm:hidden" />
                        <Icon size={28} className="text-[#4CAF50] hidden sm:block" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl sm:text-3xl font-bold text-[#4CAF50]">
                          {pillar.metric}
                        </div>
                        <div className="text-[10px] sm:text-xs text-[#4CAF50]/70">
                          {pillar.metricLabel}
                        </div>
                      </div>
                    </div>
                    <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-bold text-[#0B0B0B]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 sm:mt-3 leading-relaxed text-gray-600 text-sm sm:text-base">
                      {pillar.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="bg-[#0B0B0B] py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="Impact Environnemental"
              subtitle="Des résultats concrets pour un avenir meilleur"
              light
            />
          </AnimatedSection>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((metric, index) => (
              <AnimatedSection key={metric.label} delay={index * 0.1}>
                <div className="rounded-sm border border-[#4CAF50]/20 bg-white/5 p-5 sm:p-6 text-center backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-[#4CAF50]">{metric.value}</div>
                  <p className="mt-2 text-xs sm:text-sm text-[#C0C0C0]">{metric.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Commitments */}
      <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection direction="left">
              <SectionTitle
                title="Nos Engagements RSE"
                subtitle="Des actions concrètes pour un impact positif"
                centered={false}
              />
              <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                {commitments.map((commitment) => (
                  <li key={commitment} className="flex items-start gap-2.5 sm:gap-3">
                    <div className="mt-1 h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0 rounded-full bg-[#4CAF50]" />
                    <span className="text-gray-600 text-sm sm:text-base">{commitment}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="rounded-sm bg-gradient-to-br from-[#4CAF50]/10 to-[#4CAF50]/5 p-6 sm:p-8">
                <h3 className="mb-5 sm:mb-6 font-['Playfair_Display'] text-xl sm:text-2xl font-bold text-[#0B0B0B]">
                  Nos Objectifs 2030
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {futureGoals.map((goal) => (
                    <div key={goal.year} className="flex items-start gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-sm bg-[#4CAF50] font-bold text-white text-sm sm:text-base">
                        {goal.year}
                      </div>
                      <p className="pt-1.5 sm:pt-2 text-gray-600 text-sm sm:text-base">{goal.goal}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#0B0B0B] via-[#0d1f0d] to-[#0B0B0B] py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Rejoignez notre{" "}
              <span className="text-[#4CAF50]">engagement</span>
            </h2>
            <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-[#C0C0C0] px-2">
              Ensemble, construisons un avenir industriel plus durable.
            </p>
            <Link
              href="/contact"
              className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-sm bg-[#4CAF50] px-6 py-3 sm:px-8 sm:py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#66BB6A] hover:shadow-lg hover:shadow-[#4CAF50]/20"
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
