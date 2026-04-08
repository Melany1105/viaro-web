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

const btnPrimary =
  "bg-primary text-white hover:bg-brand2 rounded-full uppercase tracking-widest text-xs font-semibold transition-colors";

const TRUST_METRICS = [
  {
    value: "99.8%",
    label: { en: "On-Time Rate", es: "Puntualidad" },
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        width={28}
        height={28}
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    value: "DOT",
    label: { en: "Professional Chauffeurs", es: "Choferes Profesionales" },
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        width={28}
        height={28}
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    value: "24/7",
    label: { en: "Live Support", es: "Soporte en Vivo" },
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        width={28}
        height={28}
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M12 7v2M12 13h.01" />
      </svg>
    ),
  },
];

function ServiceCard({
  s,
  lng,
  learnMore,
  wide = false,
}: {
  s: any;
  lng: string;
  learnMore: string;
  wide?: boolean;
}) {
  return (
    <div className="group flex flex-col border border-white/5 rounded-3xl overflow-hidden hover:border-primary/40 transition-all duration-300 bg-white/[0.02]">
      <div
        className={`relative w-full overflow-hidden ${wide ? "aspect-[21/9]" : "aspect-[16/9]"}`}
      >
        <Image
          src={s.img}
          alt={s.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="flex flex-col flex-grow p-6 sm:p-8">
        <h3 className="font-serif font-bold text-xl sm:text-2xl mb-3 leading-snug">
          {s.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed flex-grow">
          {s.desc}
        </p>
        <a
          href={`/${lng}/service/${s.href}`}
          className={`mt-6 inline-flex items-center gap-2 px-6 py-2.5 w-fit ${btnPrimary}`}
        >
          {learnMore}
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const params = useParams();
  const lng = params.lng as "es" | "en";
  const [dict, setDict] = useState<any>(null);

  useEffect(() => {
    getDictionary(lng).then(setDict);
  }, [lng]);

  const testimonios =
    lng === "en" ? servicesTestimonials : servicesTestimonialsEs;
  const fa = lng === "en" ? ServicesFa : ServicesFaEs;
  if (!dict) return null;
  const t = dict.services;

  return (
    <main className="bg-black text-white">
      {/* ── HERO ── */}
      <section id="inicio" className="relative w-full overflow-hidden" style={{ height: "100dvh" }}>
        <Image
          src="/images/ImagenServices1.png"
          alt="Luxury vehicle parked in front of a modern building"
          fill
          priority
          className="object-cover object-top sm:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

        <div className="absolute inset-0 z-10 flex flex-col justify-between mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-16 pt-20 pb-10 sm:pt-0 sm:pb-20 sm:justify-end">
          <div className="flex flex-col items-center text-center sm:hidden">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
              {t.hero.eyebrow ?? t.hero.subtitle}
            </p>
          </div>

          <div>
            <p className="hidden sm:block mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              {t.hero.eyebrow ?? t.hero.subtitle}
            </p>

            <h1 className="font-serif font-bold leading-[1.1] text-[1.6rem] sm:text-4xl lg:text-5xl xl:text-6xl max-w-[280px] sm:max-w-xl lg:max-w-2xl">
              {t.hero.title}
            </h1>

            {t.hero.tagline && (
              <p className="mt-2 sm:mt-3 text-xs sm:text-base text-white/60 leading-relaxed font-light max-w-[260px] sm:max-w-xl">
                {t.hero.tagline}
              </p>
            )}

            <div className="mt-5 sm:mt-8 flex flex-wrap gap-3">
              <a href="/booking">
                <button className={`px-6 py-3 text-sm ${btnPrimary}`}>
                  {t.hero.cta_book}
                </button>
              </a>
              <a href="tel:2066728281">
                <button className="border border-white/60 text-white font-semibold text-sm px-6 py-3 rounded-full hover:border-white hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                  </svg>
                  {t.hero.cta_call}
                </button>
              </a>
            </div>

            {t.hero.body && (
              <p className="mt-4 text-sm italic text-white/30 text-center sm:text-base">
                "{t.hero.body}"
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── TRUST METRICS ── */}
      <section
        style={{
          background: "rgb(9,9,11)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          padding: "40px 16px",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: 11,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.4)",
            marginBottom: 32,
            fontWeight: 500,
          }}
        >
          {lng === "es"
            ? "Confianza de miles en Norteamérica"
            : "Trusted by thousands across North America"}
        </p>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 24,
            textAlign: "center",
          }}
        >
          {TRUST_METRICS.map((m) => (
            <div
              key={m.value}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}
            >
              <div style={{ color: "var(--color-primary, #2563eb)" }}>{m.icon}</div>
              <span style={{ fontSize: 22, fontWeight: 700, color: "#ffffff", lineHeight: 1 }}>
                {m.value}
              </span>
              <span
                style={{
                  fontSize: 11,
                  color: "#9ca3af",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  display: "block",
                }}
              >
                {m.label[lng]}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16 mt-10">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-3">
              {lng === "en" ? "What We Offer" : "Lo Que Ofrecemos"}
            </p>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-3xl mx-auto">
              {t.serviceCards.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl mx-auto text-justify">
              {t.serviceCards.subtitle}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {t.serviceCards.items.slice(0, 4).map((s: any) => (
              <ServiceCard
                key={s.title}
                s={s}
                lng={lng}
                learnMore={t.serviceCards.learnMore}
              />
            ))}
          </div>

          <div className="mt-6 max-w-2xl mx-auto">
            <ServiceCard
              s={t.serviceCards.items[4]}
              lng={lng}
              learnMore={t.serviceCards.learnMore}
              wide
            />
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
                <span className="absolute -top-3 left-6 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {s.category}
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl mt-2">
                  {s.type}
                </h3>
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
                  <button className={`w-full py-3 ${btnPrimary}`}>
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
              <button className={`px-8 py-3 text-sm ${btnPrimary}`}>
                {t.faq.cta}
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}