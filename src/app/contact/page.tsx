"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, Building2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionTitle from "@/components/shared/SectionTitle";
import { companyInfo, sectors } from "@/lib/data";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    societe: "",
    sujet: "",
    message: "",
  });
  const [quoteData, setQuoteData] = useState({
    societe: "",
    secteur: "",
    volume: "",
    dateLivraison: "",
    exigences: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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
              Contact
            </p>
            <h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Parlons de votre{" "}
              <span className="gradient-text-gold">Projet</span>
            </h1>
            <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-[#C0C0C0] px-2">
              Notre équipe est à votre disposition pour répondre à toutes vos
              questions
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="bg-white py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                <SectionTitle
                  title="Envoyez-nous un message"
                  centered={false}
                />

                {submitted ? (
                  <div className="rounded-sm border border-[#4CAF50]/30 bg-[#4CAF50]/5 p-6 sm:p-8 text-center">
                    <div className="mx-auto mb-3 sm:mb-4 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#4CAF50]/10">
                      <Send size={24} className="text-[#4CAF50] sm:hidden" />
                      <Send size={28} className="text-[#4CAF50] hidden sm:block" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B0B0B]">
                      Message envoyé !
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-600">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold text-[#0B0B0B]">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.nom}
                          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                          className="w-full rounded-sm border border-gray-300 bg-gray-50 px-3 py-2.5 sm:px-4 sm:py-3 text-sm text-[#0B0B0B] outline-none transition-colors focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017]/20"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold text-[#0B0B0B]">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-sm border border-gray-300 bg-gray-50 px-3 py-2.5 sm:px-4 sm:py-3 text-sm text-[#0B0B0B] outline-none transition-colors focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017]/20"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold text-[#0B0B0B]">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          value={formData.telephone}
                          onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                          className="w-full rounded-sm border border-gray-300 bg-gray-50 px-3 py-2.5 sm:px-4 sm:py-3 text-sm text-[#0B0B0B] outline-none transition-colors focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017]/20"
                          placeholder="+223 XX XX XX XX"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold text-[#0B0B0B]">
                          Société
                        </label>
                        <input
                          type="text"
                          value={formData.societe}
                          onChange={(e) => setFormData({ ...formData, societe: e.target.value })}
                          className="w-full rounded-sm border border-gray-300 bg-gray-50 px-3 py-2.5 sm:px-4 sm:py-3 text-sm text-[#0B0B0B] outline-none transition-colors focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017]/20"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold text-[#0B0B0B]">
                        Sujet *
                      </label>
                      <select
                        required
                        value={formData.sujet}
                        onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                        className="w-full rounded-sm border border-gray-300 bg-gray-50 px-3 py-2.5 sm:px-4 sm:py-3 text-sm text-[#0B0B0B] outline-none transition-colors focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017]/20"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="general">Demande générale</option>
                        <option value="devis">Demande de devis</option>
                        <option value="partenariat">Partenariat</option>
                        <option value="recrutement">Recrutement</option>
                        <option value="presse">Presse & Médias</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold text-[#0B0B0B]">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full resize-none rounded-sm border border-gray-300 bg-gray-50 px-3 py-2.5 sm:px-4 sm:py-3 text-sm text-[#0B0B0B] outline-none transition-colors focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017]/20"
                        placeholder="Décrivez votre projet ou votre demande..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-[#D4A017] to-[#F5D569] px-6 py-3 sm:px-8 sm:py-3.5 text-sm font-bold text-[#0B0B0B] shadow-lg shadow-[#D4A017]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4A017]/30"
                    >
                      Envoyer le message
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="right">
                <SectionTitle
                  title="Coordonnées"
                  centered={false}
                />

                <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                  <div className="rounded-sm border border-gray-200 p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-sm bg-[#D4A017]/10">
                        <Phone size={18} className="text-[#D4A017] sm:hidden" />
                        <Phone size={22} className="text-[#D4A017] hidden sm:block" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0B0B0B] text-sm sm:text-base">Téléphone</h3>
                        <div className="mt-1.5 sm:mt-2 space-y-0.5 sm:space-y-1">
                          {[companyInfo.phone1, companyInfo.phone2, companyInfo.phone3].map(
                            (phone) => (
                              <a
                                key={phone}
                                href={`tel:${phone.replace(/\s/g, "")}`}
                                className="block text-xs sm:text-sm text-gray-600 transition-colors hover:text-[#D4A017]"
                              >
                                {phone}
                              </a>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-sm border border-gray-200 p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-sm bg-[#D4A017]/10">
                        <Mail size={18} className="text-[#D4A017] sm:hidden" />
                        <Mail size={22} className="text-[#D4A017] hidden sm:block" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0B0B0B] text-sm sm:text-base">Email</h3>
                        <a
                          href={`mailto:${companyInfo.email}`}
                          className="mt-1.5 sm:mt-2 block text-xs sm:text-sm text-gray-600 transition-colors hover:text-[#D4A017] break-all"
                        >
                          {companyInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-sm border border-gray-200 p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-sm bg-[#D4A017]/10">
                        <MapPin size={18} className="text-[#D4A017] sm:hidden" />
                        <MapPin size={22} className="text-[#D4A017] hidden sm:block" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0B0B0B] text-sm sm:text-base">Adresse</h3>
                        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-600">
                          {companyInfo.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-6 sm:mt-8 overflow-hidden rounded-sm border border-gray-200">
                  <div className="flex h-40 sm:h-48 items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="text-center">
                      <MapPin size={28} className="mx-auto text-[#D4A017] sm:hidden" />
                      <MapPin size={32} className="mx-auto text-[#D4A017] hidden sm:block" />
                      <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-medium text-gray-500">
                        Carte interactive
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <section id="devis" className="bg-gray-50 py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="Demander un Devis"
              subtitle="Décrivez votre projet et recevez une offre personnalisée"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="mx-auto max-w-3xl rounded-sm border border-[#D4A017]/20 bg-white p-5 sm:p-6 md:p-8 shadow-sm lg:p-12">
              <form className="space-y-5 sm:space-y-6">
                <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold text-[#0B0B0B]">
                      Nom de la société *
                    </label>
                    <input
                      type="text"
                      required
                      value={quoteData.societe}
                      onChange={(e) => setQuoteData({ ...quoteData, societe: e.target.value })}
                      className="w-full rounded-sm border border-gray-300 bg-gray-50 px-3 py-2.5 sm:px-4 sm:py-3 text-sm text-[#0B0B0B] outline-none transition-colors focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017]/20"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold text-[#0B0B0B]">
                      Secteur d&apos;activité *
                    </label>
                    <select
                      required
                      value={quoteData.secteur}
                      onChange={(e) => setQuoteData({ ...quoteData, secteur: e.target.value })}
                      className="w-full rounded-sm border border-gray-300 bg-gray-50 px-3 py-2.5 sm:px-4 sm:py-3 text-sm text-[#0B0B0B] outline-none transition-colors focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017]/20"
                    >
                      <option value="">Sélectionnez un secteur</option>
                      {sectors.map((sector) => (
                        <option key={sector.title} value={sector.title}>
                          {sector.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold text-[#0B0B0B]">
                      Volume / Quantité *
                    </label>
                    <input
                      type="text"
                      required
                      value={quoteData.volume}
                      onChange={(e) => setQuoteData({ ...quoteData, volume: e.target.value })}
                      className="w-full rounded-sm border border-gray-300 bg-gray-50 px-3 py-2.5 sm:px-4 sm:py-3 text-sm text-[#0B0B0B] outline-none transition-colors focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017]/20"
                      placeholder="Ex: 10 000 litres"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold text-[#0B0B0B]">
                      Date de livraison souhaitée
                    </label>
                    <input
                      type="date"
                      value={quoteData.dateLivraison}
                      onChange={(e) => setQuoteData({ ...quoteData, dateLivraison: e.target.value })}
                      className="w-full rounded-sm border border-gray-300 bg-gray-50 px-3 py-2.5 sm:px-4 sm:py-3 text-sm text-[#0B0B0B] outline-none transition-colors focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold text-[#0B0B0B]">
                    Exigences spécifiques
                  </label>
                  <textarea
                    rows={4}
                    value={quoteData.exigences}
                    onChange={(e) => setQuoteData({ ...quoteData, exigences: e.target.value })}
                    className="w-full resize-none rounded-sm border border-gray-300 bg-gray-50 px-3 py-2.5 sm:px-4 sm:py-3 text-sm text-[#0B0B0B] outline-none transition-colors focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017]/20"
                    placeholder="Décrivez vos exigences techniques, qualitatives..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-[#D4A017] to-[#F5D569] px-6 py-3 sm:px-8 sm:py-3.5 text-sm font-bold text-[#0B0B0B] shadow-lg shadow-[#D4A017]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4A017]/30"
                >
                  <Building2 size={16} />
                  Demander un devis
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
