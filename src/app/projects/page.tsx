"use client";

import { useState } from "react";
import Image from "next/image";
import { Building2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionTitle from "@/components/shared/SectionTitle";
import { projects } from "@/lib/data";

const sectors = ["Tous", "Hydrocarbures", "Logistique", "Agro-Business", "Lubrifiants"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredProjects =
    activeFilter === "Tous"
      ? projects
      : projects.filter((p) => p.sector === activeFilter);

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
              Projets
            </p>
            <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Nos <span className="gradient-text-gold">Projets</span>
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-[#C0C0C0] px-2">
              Découvrez nos réalisations qui façonnent l&apos;avenir industriel
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-gray-50 py-3 sm:py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
              {sectors.map((sector) => (
                <button
                  key={sector}
                  onClick={() => setActiveFilter(sector)}
                  className={`rounded-sm px-3 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    activeFilter === sector
                      ? "bg-[#D4A017] text-[#0B0B0B] shadow-md shadow-[#D4A017]/20"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {sector}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1}>
                <div className="group card-premium h-full overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm">
                  <div className="relative h-44 sm:h-56 bg-gradient-to-br from-gray-800 to-gray-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
                      <span className="inline-block rounded-sm bg-[#D4A017] px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-bold text-[#0B0B0B]">
                        {project.sector}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 md:p-8">
                    <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-[#0B0B0B] transition-colors group-hover:text-[#D4A017]">
                      {project.title}
                    </h3>
                    <p className="mb-4 sm:mb-6 leading-relaxed text-gray-600 text-sm sm:text-base">
                      {project.description}
                    </p>

                    <div className="mb-3 sm:mb-4 flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-medium text-gray-500">Progression</span>
                      <span className="font-bold text-[#0B0B0B]">{project.progress}%</span>
                    </div>
                    <div className="mb-4 sm:mb-6 h-2 sm:h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#D4A017] to-[#E8C547] transition-all duration-500"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-block rounded-sm px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold ${
                          project.status === "En cours"
                            ? "bg-[#4CAF50]/10 text-[#4CAF50]"
                            : "bg-[#D4A017]/10 text-[#D4A017]"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-16 sm:py-20 text-center">
              <p className="text-base sm:text-lg text-gray-500">
                Aucun projet trouvé dans cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
