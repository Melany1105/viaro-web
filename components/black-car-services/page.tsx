"use client";

import Image from "next/image";
import {
  servicesTestimonials,
  servicesTestimonialsEs,
} from "@/data/Tetimonials";
import { Testimonials } from "../testimonials";
import { ServicesFa, ServicesFaEs } from "@/data/Fa";
import { FA } from "../FA";
import { getDictionary } from "@/lib/get-dictionary";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// ── TRUST METRICS ─────────────────────────────────────────────────────────────
const TRUST_METRICS = [
  {
    value: "99.8%",
    label: { en: "On-Time Rate", es: "Puntualidad" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    value: "DOT",
    label: { en: "Professional Chauffeurs", es: "Choferes Profesionales" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
  {
    value: "24/7",
    label: { en: "Live Support", es: "Soporte en Vivo" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M12 7v2M12 13h.01"/>
      </svg>
    ),
  },
];

export default function ServicesPage() {
  const params = useParams();
  const lng = params.lng as "es" | "en";
  const [dict, setDict] = useState<any>(null);

  useEffect(() => {
    getDictionary(lng).then(setDict);
  }, [lng]);

  const testimonios = lng === "en" ? servicesTestimonials : servicesTestimonialsEs;
  const fa = lng === "en" ? ServicesFa : ServicesFaEs;
  if (!dict) return null;
  const t = dict.services;

  return (
    <main className="bg-black text-white">

      {/* ── HERO ── */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-0">
        <div className="absolute w-full h-[60vh] md:h-[75vh] lg:h-screen">
          <Image
            src="/images/ImagenServices1.png"
            alt="Luxury vehicle parked in front of a modern building"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/75" />
        </div>
        <div className="relative z-20 max-w-7xl pl-6 lg:pl-16 pt-20">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm sm:text-base font-semibold uppercase tracking-[0.25em] text-brand [text-shadow:0_1px_3px_rgba(0,0,0,0.9),_0_4px_12px_rgba(0,0,0,0.6)]">
              {t.hero.subtitle}
            </p>
            <h1 className="font-serif text-6xl font-bold leading-tight tracking-tight text-foreground sm:text-7xl lg:text-8xl text-balance">
              {t.hero.title}
            </h1>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <p className="mb-6 text-base font-semibold uppercase tracking-[0.3em]">
                {t.hero.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST METRICS ── */}
      <section style={{
        background: "rgb(9,9,11)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        padding: "40px 16px",
      }}>
        <p style={{
          textAlign: "center",
          fontSize: 11,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: "rgba(255,255,255,0.4)",
          marginBottom: 32,
          fontWeight: 500,
        }}>
          {lng === "es" ? "Confianza de miles en Norteamérica" : "Trusted by thousands across North America"}
        </p>
        <div style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 24,
          textAlign: "center",
        }}>
          {TRUST_METRICS.map((m) => (
            <div key={m.value} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <div style={{ color: "var(--color-primary, #2563eb)" }}>{m.icon}</div>
              <span style={{ fontSize: 22, fontWeight: 700, color: "#fff", lineHeight: 1 }}>{m.value}</span>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {m.label[lng]}
              </span>
            </div>
          ))}
        </div>
          {/* <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 40, opacity: 0.6, marginTop: 40 }}>
            {[
              { src: "/images/logoNLA.png", alt: "NLA" },
              { src: "/images/logoBBB.png", alt: "BBB" },
              { src: "/images/logoGBTA.png", alt: "GBTA" },
            ].map((logo) => (
              <div key={logo.alt} className="relative h-12 sm:h-16 w-24 sm:w-32">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" sizes="128px" />
              </div>
            ))}
          </div> */}
      </section>

      {/* ── PROFESSIONAL ── */}
      <section className="py-16 sm:py-24 border-t border-neutral-800 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16 text-center">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto">
            {t.professional.title}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            {t.professional.cards.map((item: any) => (
              <div
                key={item.title}
                className="border border-primary/40 rounded-2xl p-6 sm:p-8 hover:border-primary transition-all duration-300"
              >
                <h3 className="font-serif font-bold text-xl sm:text-2xl mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a href="https://booking.allblacklimoseattle.com/">
              <button className="bg-primary text-white font-bold px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-primary/90 transition">
                {t.professional.cta}
              </button>
            </a>
          </div>
        </div>
      </section>
 
      <section className=" bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              {t.serviceCards.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
              {t.serviceCards.subtitle}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {t.serviceCards.items.map((s: any) => (
              <div key={s.title} className="group flex flex-col">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="mt-5 flex flex-col flex-grow">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl mb-2">{s.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed flex-grow">{s.desc}</p>
                  <a
                    href={`/${lng}/service/${s.href}`}
                    className="mt-4 inline-flex items-center gap-2 border border-primary px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-all duration-300 w-fit"
                  >
                    {t.serviceCards.learnMore}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-16 sm:py-24 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              {t.pricing.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
              {t.pricing.subtitle}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {t.pricing.plans.map((s: any) => (
              <div
                key={s.category}
                className="relative flex flex-col border border-primary/40 rounded-2xl p-6 sm:p-8 hover:border-primary transition-all duration-300"
              >
                <span className="absolute -top-3 left-6 bg-primary text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {s.category}
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl mt-2">{s.type}</h3>
                <p className="mt-3 text-4xl font-bold text-primary">${s.price}</p>
                <p className="mt-1 text-xs text-gray-500">{s.description}</p>
                <ul className="mt-6 space-y-3 flex-grow">
                  {s.features.map((f: string) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="https://booking.allblacklimoseattle.com/" className="mt-8 block">
                  <button className="w-full bg-primary text-black font-bold py-3 rounded-full text-xs uppercase tracking-widest hover:bg-white transition-all duration-300">
                    {t.pricing.bookCta} {s.type}
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials data={testimonios} />

      {/* ── FAQ ── */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-center mb-12">
            {t.faq.title}
          </h2>
          <FA data={fa} />
          <div className="mt-10 flex justify-center">
            <a href="/faq">
              <button className="bg-primary text-white font-bold px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-primary/90 transition">
                {t.faq.cta}
              </button>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}