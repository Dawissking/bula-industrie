"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À Propos" },
  { href: "/activities", label: "Activités" },
  { href: "/sustainability", label: "Durabilité" },
  { href: "/projects", label: "Projets" },
  { href: "/news", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden sm:block fixed top-0 left-0 z-[60] w-full border-b border-white/5 bg-[#0B0B0B]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-end gap-6 px-4 py-2 md:px-6 lg:px-8">
          <a
            href="tel:+22370916150"
            className="flex items-center gap-2 text-xs text-[#C0C0C0] transition-colors hover:text-[#D4A017]"
          >
            <Phone size={13} />
            <span>+223 70 91 61 50</span>
          </a>
          <a
            href="mailto:bulaindustrie@gmail.com"
            className="hidden items-center gap-2 text-xs text-[#C0C0C0] transition-colors hover:text-[#D4A017] md:flex"
          >
            <Mail size={13} />
            <span>bulaindustrie@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <motion.header
        initial={false}
        className={`fixed left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "top-0 sm:top-0 bg-[#0B0B0B]/95 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "top-0 sm:top-[32px] bg-[#0B0B0B]/80 backdrop-blur-sm"
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-sm bg-white/10 p-1 transition-colors group-hover:bg-[#D4A017]/10 sm:h-12 sm:w-12">
              <Image
                src="/logo-transparent.png"
                alt="Bula Industrie"
                fill
                className="object-contain"
                sizes="48px"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-['Playfair_Display'] text-xl font-bold tracking-wide text-white sm:text-2xl">
                Bula{" "}
                <span className="text-[#D4A017]">Industrie</span>
              </span>
              <span className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#C0C0C0] sm:text-[10px] sm:tracking-[0.25em]">
                Excellence Industrielle
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 xl:flex 2xl:gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 lg:px-4 lg:text-[15px] ${
                    isActive ? "text-[#D4A017]" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-[#D4A017] lg:left-4 lg:right-4"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-sm bg-gradient-to-r from-[#D4A017] to-[#F5D569] px-6 py-2.5 text-sm font-bold text-[#0B0B0B] shadow-md shadow-[#D4A017]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4A017]/30 sm:inline-block"
            >
              Devis Gratuit
            </Link>

            <button
              onClick={() => setIsOpen((p) => !p)}
              className="relative z-[70] flex h-11 w-11 items-center justify-center rounded-sm text-white transition-colors hover:bg-white/10 xl:hidden"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={26} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={26} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[65] bg-[#0B0B0B]/98 backdrop-blur-2xl xl:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center px-6">
              <nav className="flex flex-col items-center gap-2">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.05 * i,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        className={`block py-3 text-center text-3xl font-semibold tracking-wide transition-colors duration-300 ${
                          isActive
                            ? "text-[#D4A017]"
                            : "text-white/70 hover:text-[#D4A017]"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 flex flex-col items-center gap-4"
              >
                <Link
                  href="/contact"
                  className="rounded-sm bg-gradient-to-r from-[#D4A017] to-[#F5D569] px-8 py-3.5 text-lg font-bold text-[#0B0B0B] shadow-lg shadow-[#D4A017]/20"
                >
                  Demander un Devis
                </Link>
                <div className="flex flex-col items-center gap-3 text-base text-[#C0C0C0] sm:flex-row sm:gap-6">
                  <a href="tel:+22370916150" className="flex items-center gap-2 hover:text-[#D4A017]">
                    <Phone size={16} /> +223 70 91 61 50
                  </a>
                  <a href="mailto:bulaindustrie@gmail.com" className="flex items-center gap-2 hover:text-[#D4A017]">
                    <Mail size={16} /> bulaindustrie@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
