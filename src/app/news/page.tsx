"use client";

import { useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionTitle from "@/components/shared/SectionTitle";
import { news } from "@/lib/data";

const categories = ["Tous", ...Array.from(new Set(news.map((n) => n.category)))];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredNews =
    activeCategory === "Tous"
      ? news
      : news.filter((n) => n.category === activeCategory);

  const featuredArticle = filteredNews[0];
  const remainingArticles = filteredNews.slice(1);

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
              Actualités
            </p>
            <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Nos <span className="gradient-text-gold">Actualités</span>
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-[#C0C0C0] px-2">
              Restez informé de nos dernières innovations et réalisations
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-gray-50 py-3 sm:py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-sm px-3 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-[#D4A017] text-[#0B0B0B] shadow-md shadow-[#D4A017]/20"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="bg-white py-10 sm:py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="group card-premium overflow-hidden rounded-sm border border-gray-200 shadow-sm">
                <div className="grid gap-0 lg:grid-cols-2">
                  <div className="relative h-52 sm:h-64 bg-gradient-to-br from-gray-800 to-gray-900 lg:h-auto">
                    <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
                      <span className="inline-block rounded-sm bg-[#D4A017] px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-bold text-[#0B0B0B]">
                        {featuredArticle.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 md:p-8 lg:p-12">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500">
                      <Calendar size={12} className="sm:hidden" />
                      <Calendar size={14} className="hidden sm:block" />
                      <time>{new Date(featuredArticle.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}</time>
                    </div>
                    <h2 className="mt-3 sm:mt-4 font-['Playfair_Display'] text-xl sm:text-2xl md:text-3xl font-bold text-[#0B0B0B] transition-colors group-hover:text-[#D4A017]">
                      {featuredArticle.title}
                    </h2>
                    <p className="mt-3 sm:mt-4 leading-relaxed text-gray-600 text-sm sm:text-base">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="mt-5 sm:mt-6">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4A017] transition-colors hover:text-[#B8860B]">
                        Lire l&apos;article
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* News Grid */}
      {remainingArticles.length > 0 && (
        <section className="bg-gray-50 py-10 sm:py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {remainingArticles.map((article, index) => (
                <AnimatedSection key={article.id} delay={index * 0.1}>
                  <div className="group card-premium h-full overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm">
                    <div className="relative h-40 sm:h-48 bg-gradient-to-br from-gray-800 to-gray-900">
                      <div className="absolute right-3 top-3 sm:right-4 sm:top-4">
                        <span className="inline-block rounded-sm bg-[#D4A017] px-2.5 py-1 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold text-[#0B0B0B]">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-500">
                        <Calendar size={10} className="sm:hidden" />
                        <Calendar size={12} className="hidden sm:block" />
                        <time>{new Date(article.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}</time>
                      </div>
                      <h3 className="mt-2 sm:mt-3 text-base sm:text-lg font-bold text-[#0B0B0B] transition-colors group-hover:text-[#D4A017]">
                        {article.title}
                      </h3>
                      <p className="mt-1.5 sm:mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="mt-3 sm:mt-4">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4A017]">
                          Lire la suite
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
