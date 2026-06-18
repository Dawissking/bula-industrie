"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe, ExternalLink } from "lucide-react";

const quickLinks = {
  Entreprise: [
    { label: "Qui Sommes-Nous", href: "/about" },
    { label: "Notre Équipe", href: "/about#equipe" },
    { label: "Carrières", href: "/about#carrieres" },
    { label: "Actualités", href: "/news" },
  ],
  Secteurs: [
    { label: "Import-Export", href: "/activities#import-export" },
    { label: "Hydrocarbures", href: "/activities#hydrocarbures" },
    { label: "Lubrifiants", href: "/activities#lubrifiants" },
    { label: "Agro-Business", href: "/activities#agro-business" },
  ],
  Services: [
    { label: "Logistique", href: "/activities#logistique" },
    { label: "Industrie", href: "/activities#industrie" },
    { label: "Développement Durable", href: "/sustainability" },
    { label: "Nos Projets", href: "/projects" },
  ],
  Contact: [
    { label: "Formulaire", href: "/contact" },
    { label: "Nos Implantations", href: "/contact#implantations" },
    { label: "Partenariats", href: "/contact#partenariats" },
    { label: "Devis Gratuit", href: "/contact#devis" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "#", label: "Facebook" },
  { icon: ExternalLink, href: "#", label: "LinkedIn" },
  { icon: Globe, href: "#", label: "Twitter" },
  { icon: Globe, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] pt-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="relative h-11 w-11 sm:h-12 sm:w-12 overflow-hidden rounded-sm bg-white/10 p-1 transition-colors group-hover:bg-[#D4A017]/10">
                <Image
                  src="/logo-transparent.png"
                  alt="Bula Industrie"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-['Playfair_Display'] text-xl sm:text-2xl font-bold tracking-wide">
                  Bula <span className="text-[#D4A017]">Industrie</span>
                </span>
                <span className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#C0C0C0]">
                  Excellence Industrielle
                </span>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-base leading-relaxed text-[#C0C0C0]/80">
              Partenaire de confiance dans le développement industriel en Afrique de
              l&apos;Ouest. Plus de 10 ans d&apos;expertise au service de l&apos;excellence
              et de l&apos;innovation.
            </p>

            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-sm border border-white/10 text-[#C0C0C0] transition-all duration-300 hover:border-[#D4A017]/50 hover:bg-[#D4A017]/10 hover:text-[#D4A017]"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:col-span-7">
            {Object.entries(quickLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-[#D4A017]">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group flex items-center text-base text-[#C0C0C0]/70 transition-colors duration-300 hover:text-white"
                      >
                        <span className="mr-0 h-px w-0 bg-[#D4A017] transition-all duration-300 group-hover:mr-2 group-hover:w-3" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-12">
            <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent" />

            <div className="grid gap-10 sm:grid-cols-12">
              <div className="sm:col-span-5">
                <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-[#D4A017]">
                  Contact
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="tel:+22370916150"
                      className="flex items-center gap-3 text-base text-[#C0C0C0]/70 transition-colors hover:text-white"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-white/5">
                        <Phone size={16} className="text-[#D4A017]" />
                      </span>
                      +223 70 91 61 50
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+22366299596"
                      className="flex items-center gap-3 text-base text-[#C0C0C0]/70 transition-colors hover:text-white"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-white/5">
                        <Phone size={16} className="text-[#D4A017]" />
                      </span>
                      +223 66 29 95 96
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:bulaindustrie@gmail.com"
                      className="flex items-center gap-3 text-base text-[#C0C0C0]/70 transition-colors hover:text-white"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-white/5">
                        <Mail size={16} className="text-[#D4A017]" />
                      </span>
                      <span className="break-all sm:break-normal">bulaindustrie@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <span className="flex items-center gap-3 text-base text-[#C0C0C0]/70">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-white/5">
                        <MapPin size={16} className="text-[#D4A017]" />
                      </span>
                      Bamako, Mali
                    </span>
                  </li>
                </ul>
              </div>

              <div className="sm:col-span-7">
                <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.15em] text-[#D4A017]">
                  Newsletter
                </h4>
                <p className="mb-4 text-base text-[#C0C0C0]/60">
                  Recevez nos actualités et offres exclusives directement dans votre boîte mail.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    className="flex-1 rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder-[#C0C0C0]/40 outline-none transition-colors focus:border-[#D4A017]/50 focus:ring-1 focus:ring-[#D4A017]/20"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-sm bg-gradient-to-r from-[#D4A017] to-[#F5D569] px-6 py-3 text-base font-bold text-[#0B0B0B] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4A017]/20"
                  >
                    S&apos;abonner
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-[#C0C0C0]/50 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Bula Industrie. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-[#C0C0C0]/50">
            <Link href="/about" className="transition-colors hover:text-[#D4A017]">
              Mentions Légales
            </Link>
            <Link href="/about" className="transition-colors hover:text-[#D4A017]">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
