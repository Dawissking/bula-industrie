"use client";

import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionTitle from "@/components/shared/SectionTitle";
import { projects } from "@/lib/data";

export default function ProjectsPreview() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            title="Projets Phares"
            subtitle="Découvrez nos réalisations majeures qui façonnent l'industrie africaine"
          />
        </AnimatedSection>

        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.15}>
              <div className="group card-premium h-full overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm">
                <div className="relative h-40 sm:h-48 bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 size={40} className="text-white/20 sm:hidden" />
                    <Building2 size={48} className="text-white/20 hidden sm:block" />
                  </div>
                  <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
                    <span className="inline-block rounded-sm bg-[#D4A017] px-2.5 py-1 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold text-[#0B0B0B]">
                      {project.sector}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="mb-2 text-base sm:text-lg font-bold text-[#0B0B0B] transition-colors group-hover:text-[#D4A017]">
                    {project.title}
                  </h3>
                  <p className="mb-3 sm:mb-4 text-sm leading-relaxed text-gray-600 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mb-2 sm:mb-3 flex items-center justify-between text-xs">
                    <span className="font-medium text-gray-500">Progression</span>
                    <span className="font-bold text-[#0B0B0B]">{project.progress}%</span>
                  </div>
                  <div className="mb-3 sm:mb-4 h-1.5 sm:h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#D4A017] to-[#E8C547] transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-block rounded-sm px-2.5 py-1 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold ${
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

        <AnimatedSection delay={0.4}>
          <div className="mt-8 sm:mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-sm bg-[#0B0B0B] px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1a1a1a] hover:shadow-lg"
            >
              Voir tous les projets
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
