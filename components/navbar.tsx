"use client";

import { useState, useRef } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  dict: any;
  lng: string;
}

export function Navbar({ dict, lng }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pathname = usePathname();

  const changeLanguage = (newLng: string) => {
    if (!pathname) return "/en";
    const segments = pathname.split("/");
    segments[1] = newLng;
    return segments.join("/");
  };

  const base = `/${lng}`;

  // Pequeño delay al cerrar para que el mouse pueda moverse al dropdown sin que se cierre
  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 80);
  };

  const navLinks = [
    { label: dict.navbar.home, href: `${base}` },
    {
      label: dict.navbar.services,
      href: `${base}/black-car-services`,
      dropdown: [
        { label: dict.navbar.airport,    href: `${base}/black-car-service/airport-transfers` },
        { label: dict.navbar.corporate,  href: `${base}/black-car-service/corporate-transportation-executive-car-service` },
        { label: dict.navbar.airline,    href: `${base}/black-car-service/fbo-crew-transportation` },
        { label: dict.navbar.cruise,     href: `${base}/black-car-service/cruise-port-transfers` },
        { label: dict.navbar.hourly,     href: `${base}/black-car-service/hourly-chauffeur-hire` },
      ],
    },
    { label: dict.navbar.locations, href: `${base}/service-areas` },
    { label: dict.navbar.contact,   href: `${base}/contact` },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          <Link href={`/${lng}`} className="flex items-center gap-2">
            <img src="/Logo/Logo.png" alt="Viaro Logo" className="h-12 w-auto" />
          </Link>

          {/* ── Desktop nav ───────────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                // El onMouseEnter/Leave va SOLO en el trigger, no en el wrapper completo
                <div key={link.label} className="relative py-4">
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="inline-block"
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                  </div>

                  {/* Dropdown — también mantiene abierto mientras el mouse está dentro */}
                  {servicesOpen && (
                    <div
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className="absolute top-[calc(100%-0.5rem)] left-1/2 -translate-x-1/2 w-64 bg-neutral-950 border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50"
                    >
                      {/* Arrow */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-950 border-l border-t border-white/10 rotate-45" />

                      <div className="py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-all duration-200 group/item"
                          >
                            <span className="h-px w-4 bg-primary opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 flex-shrink-0" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          {/* ── Desktop right ─────────────────────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 border border-gray-700 rounded-full px-3 py-1 text-xs uppercase tracking-widest">
              <Link
                href={changeLanguage("en")}
                className={`px-2 py-1 rounded-full transition ${
                  lng === "en" ? "bg-primary text-black" : "text-gray-500 hover:text-white"
                }`}
              >
                EN
              </Link>
              <Link
                href={changeLanguage("es")}
                className={`px-2 py-1 rounded-full transition ${
                  lng === "es" ? "bg-primary text-black" : "text-gray-500 hover:text-white"
                }`}
              >
                ES
              </Link>
            </div>
            <a href="tel:(206)672-8281" className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>(206) 672-8281</span>
            </a>
            <a href="https://booking.allblacklimoseattle.com/">
              <Button className="bg-primary text-primary-foreground rounded-full hover:bg-primary/90 px-6 uppercase tracking-widest text-xs font-semibold">
                {dict.navbar.book}
              </Button>
            </a>
          </div>

          {/* ── Mobile toggle ─────────────────────────────────────────────── */}
          <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu ───────────────────────────────────────────────────── */}
      {isOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="flex flex-col gap-1 px-4 py-6">
            <div className="flex items-center justify-between mb-8 px-2 py-3 border-b border-white/10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {lng === "en" ? "Select Language" : "Seleccionar Idioma"}
              </span>
              <div className="flex bg-neutral-900 p-1 rounded-full border border-white/5">
                <Link
                  href={changeLanguage("en")}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    lng === "en" ? "bg-primary text-black shadow-lg" : "text-gray-400 hover:text-white"
                  }`}
                >
                  EN
                </Link>
                <Link
                  href={changeLanguage("es")}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    lng === "es" ? "bg-primary text-black shadow-lg" : "text-gray-400 hover:text-white"
                  }`}
                >
                  ES
                </Link>
              </div>
            </div>

            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="flex flex-col">
                  <div className="flex items-center justify-between py-3">
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
                    >
                      {link.label}
                    </Link>
                    <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)}>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <div className="flex flex-col pl-4 border-l border-gray-700 mb-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="py-2 text-sm text-muted-foreground hover:text-primary"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </nav>
  );
}