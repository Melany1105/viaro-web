"use client";

import Image from "next/image";
import { AboutTestimonials, AboutTestimonialsEs } from "@/data/Tetimonials";
import { Testimonials } from "../testimonials";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getDictionary } from "@/lib/get-dictionary";
import { AboutFa, AboutFaEs } from "@/data/Fa";
import { FA } from "../FA";

const METRICS = [
  {
    value: "60,000+",
    label: { en: "Trips Completed", es: "Viajes Completados" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M9 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
        <circle cx="17" cy="17" r="4" />
        <path d="m21 21-1.5-1.5M17 15v2l1 1" />
        <path d="m9 11 2 2 4-4" />
      </svg>
    ),
  },
  {
    value: "11 Years",
    label: { en: "Of Excellence", es: "De Excelencia" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    value: "50+ States",
    label: { en: "Plus CAN & CRC", es: "Más CAN & CRC" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    value: "25 Years",
    label: { en: "In Logistics", es: "En Logística" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
        <rect x="9" y="11" width="14" height="10" rx="2" />
        <circle cx="12" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
      </svg>
    ),
  },
  {
    value: "5-Star",
    label: { en: "Rating", es: "Calificación" },
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
      </svg>
    ),
  },
];

export default function AboutContent() {
  const params = useParams();
  const lng = params.lng as "es" | "en";
  const [dict, setDict] = useState<any>(null);
  const fa = lng === "en" ? AboutFa : AboutFaEs;

  useEffect(() => {
    getDictionary(lng).then(setDict);
  }, [lng]);

  const testimonios = lng === "en" ? AboutTestimonials : AboutTestimonialsEs;
  if (!dict) return null;
  const t = dict.about;

  return (
    <main className="bg-black text-white">

<section className="relative w-full overflow-hidden" style={{ height: "100dvh" }}>
  <Image
    src="/images/ImagenAboutUs.png"
    alt="Viaro luxury black car"
    fill
    priority
    className="object-cover object-top sm:object-center"
    sizes="100vw"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

  {/* Contenido — distribuido verticalmente en móvil */}
  <div className="absolute inset-0 z-10 flex flex-col justify-between mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-16 pt-20 pb-10 sm:pt-0 sm:pb-20 sm:justify-end">

    {/* Bloque superior solo en móvil — eyebrow centrado */}
    <div className="flex flex-col items-center text-center sm:hidden">
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
        {t.hero.eyebrow}
      </p>
    </div>

    {/* Bloque principal */}
    <div>
      {/* Eyebrow — solo visible en sm+ */}
      <p className="hidden sm:block mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand whitespace-pre-line">
        {t.hero.eyebrow}
      </p>

      <h1 className="font-serif font-bold leading-[1.1] text-[1.6rem] xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl max-w-[280px] xs:max-w-sm sm:max-w-xl lg:max-w-2xl">
        {t.hero.title}
      </h1>

      {t.hero.subtitle && (
        <p className="mt-2 sm:mt-3 text-xs sm:text-base text-white/60 leading-relaxed font-light max-w-[260px] xs:max-w-xs sm:max-w-xl">
          {t.hero.subtitle}
        </p>
      )}

      {/* Botones — apilados en móvil, fila en sm+ */}
      <div className="mt-5 sm:mt-8 flex flex-wrap gap-3">
        <a href="/booking">
          <button className="border border-primary bg-primary text-black font-semibold text-sm px-6 py-3 rounded-full hover:bg-transparent hover:text-white transition-all duration-300">
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

      {t.hero.quote && (
        <p className="mt-4 text-sm italic text-white/30 text-center sm:text-base">
          "{t.hero.quote}"
        </p>
      )}
    </div>
  </div>
</section>

      {/* ── TRUST BAR ── */}
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
          {METRICS.map((m) => (
  <div key={m.value} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
    <div style={{ color: "var(--color-primary, #2563eb)" }}>{m.icon}</div>
    <span style={{ fontSize: 22, fontWeight: 700, color: "#ffffff", lineHeight: 1 }}>
      {m.value}
    </span>
    <span style={{
      fontSize: 11,
      color: "#9ca3af !important" as any,
      textTransform: "uppercase" as const,
      letterSpacing: "0.08em",
      display: "block",
    }}>
      {m.label[lng as "en" | "es"]}
    </span>
  </div>
))}
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
            {t.story.label}
          </p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
            {t.story.title}
          </h2>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
            {/* Texto */}
            <div className="flex flex-col justify-between gap-6">
              <div className="space-y-4">
                {(t.story.paragraphs as string[]).map((p: string, i: number) => (
                  <p key={i} className="text-sm sm:text-base text-neutral-300 leading-relaxed">{p}</p>
                ))}
                <a href="/service-areas" className="inline-block mt-2 text-sm text-primary underline underline-offset-4 hover:opacity-80 transition-opacity">
                  {t.story.cta}
                </a>
              </div>
              <button className="self-start sm:self-center border border-primary bg-primary text-black font-semibold text-sm px-6 py-3 rounded-full hover:bg-transparent hover:text-white transition-all duration-300">
                {t.story.city}
              </button>
            </div>

            {/* Imagen — 16/9 en móvil, 4/3 en tablet, full height en desktop */}
            <div className="relative w-full aspect-video sm:aspect-[4/3] lg:aspect-auto lg:min-h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/Imagen2About.png"
                alt="Viaro fleet across North America"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ImagenTAbout.png"
            alt={t.team.title}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-neutral-950/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">{t.team.label}</p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight max-w-2xl mb-12">{t.team.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.team.members.map((item: any, i: number) => (
              <div key={i} className="flex flex-col gap-4 border border-white/10 rounded-2xl bg-black/40 backdrop-blur-sm p-6 sm:p-8 hover:border-primary/50 hover:bg-black/60 transition-all duration-300">
                <div className="h-px w-10 bg-primary" />
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white">{item.title}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed whitespace-pre-wrap">{item.description}</p>
              </div>
            ))}
          </div>
          {t.team.cta && (
            <div className="mt-10 flex justify-center">
              <a href="/chauffeurs" className="inline-block bg-primary border border-primary text-white font-semibold text-sm px-8 py-3 rounded-full hover:bg-primary/80 transition-all duration-300">
                {t.team.cta}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">{t.values.label}</p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-12">{t.values.title}</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {t.values.items.map((value: any, i: number) => (
              <div key={i} className="flex flex-col border border-white/10 rounded-2xl bg-neutral-900/40 p-6 sm:p-8 hover:border-primary transition-all duration-300">
                <div className="mb-4 h-px w-10 bg-primary" />
                <h3 className="font-serif font-bold text-xl sm:text-2xl mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="py-16 sm:py-24 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">{t.mission.label ?? "Mission"}</p>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">{t.mission.title}</h2>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed whitespace-pre-line">{t.mission.description}</p>
            </div>
            {/* Imagen — 16/9 en móvil, 4/3 en tablet+  */}
            <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/Imagen2About.png"
                alt="Luxury executive transportation"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION ── */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Imagen — en móvil va arriba, en desktop a la izquierda */}
            <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-2xl overflow-hidden order-1 lg:order-1">
              <Image
                src="/images/Imagen3About.png"
                alt="Future of luxury transportation"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-2 lg:order-2">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">{t.vision.label ?? "Vision"}</p>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">{t.vision.title}</h2>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed whitespace-pre-line">{t.vision.description}</p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials data={testimonios} />

      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mt-10">{t.faqTitle}</h2>
      <FA data={fa} />
      <div className="mb-9 flex justify-center">
        <a href="/faq">
          <button className="text-sm md:text-base font-semibold text-white bg-primary px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105">
            {t.buttons.moreQuestions}
          </button>
        </a>
      </div>

    </main>
  );
}