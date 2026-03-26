"use client";

import Image from "next/image";
import { FA } from "../FA";
import { FAMap, FAMapEs } from "@/data/Fa";
import { TestimonialsMap, TestimonialsMapEs } from "@/data/Tetimonials";
import { Testimonials } from "../testimonials";
import { serviceEn, serviceEs } from "@/data/service";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getDictionary } from "@/lib/get-dictionary";

// ── ICON MAP ──────────────────────────────────────────────────────────────────
// Maps keywords in trustBar strings to SVG icons
function getTrustIcon(label: string) {
  const l = label.toLowerCase();

  if (l.includes("flight") || l.includes("vuelo") || l.includes("track") || l.includes("rastreo"))
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 2c-2-2-4-2-5.5-.5L10 5 1.8 6.2c-.5.1-.9.6-.6 1.1l1.7 2.7c.3.5.9.6 1.3.3l2.8-1.8 2.3 2.3-2.7 4.9c-.3.5.1 1.1.6 1.1l2.8-.1c.5 0 .9-.3 1-.8l.5-2.6 2.5 2.5-.1 2.8c0 .5.6.9 1.1.6l4.9-2.7c.5-.3.6-.9.3-1.3l-1.8-2.8z"/>
      </svg>
    );

  if (l.includes("rate") || l.includes("flat") || l.includes("tarifa") || l.includes("fija") || l.includes("billing") || l.includes("factura"))
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <path d="M2 10h20"/>
        <path d="M6 15h4M14 15h4"/>
      </svg>
    );

  if (l.includes("chauffeur") || l.includes("pro") || l.includes("chofer") || l.includes("driver") || l.includes("conductor"))
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    );

  if (l.includes("fleet") || l.includes("flota") || l.includes("luxury") || l.includes("lujo") || l.includes("vehicle"))
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/>
        <rect x="9" y="11" width="14" height="10" rx="2"/>
        <circle cx="12" cy="21" r="1"/>
        <circle cx="20" cy="21" r="1"/>
      </svg>
    );

  if (l.includes("24/7") || l.includes("support") || l.includes("booking") || l.includes("reserva") || l.includes("soporte") || l.includes("dispatch") || l.includes("despacho"))
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M12 7v2M12 13h.01"/>
      </svg>
    );

  if (l.includes("discret") || l.includes("confidential") || l.includes("privacy") || l.includes("privaci") || l.includes("fortune") || l.includes("vip"))
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    );

  if (l.includes("tarmac") || l.includes("pista") || l.includes("tail") || l.includes("cola") || l.includes("fbo"))
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M3 17h1l6-10 4 6 2-2 3 6h1"/>
        <path d="M3 21h18"/>
      </svg>
    );

  if (l.includes("ship") || l.includes("barco") || l.includes("cruise") || l.includes("crucero") || l.includes("port") || l.includes("muelle") || l.includes("curbside"))
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
        <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/>
        <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/>
        <path d="M12 10v4"/>
        <path d="M12 3v4"/>
      </svg>
    );

  if (l.includes("safe") || l.includes("segur") || l.includes("family") || l.includes("familia") || l.includes("flexible") || l.includes("wait") || l.includes("espera"))
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    );

  // default
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
    </svg>
  );
}

export default function ServicePage() {
  const params = useParams<{ lng: "es" | "en"; id: string }>();
  const lng = params.lng;
  const id = params.id;

  const [dict, setDict] = useState<any>(null);

  useEffect(() => {
    getDictionary(lng).then(setDict);
  }, [lng]);

  const dataset = lng === "es" ? serviceEs : serviceEn;
  const cityData = dataset.find((c) => c.id === id);

  if (!cityData) return <p className="text-white p-10">Service not found: {id}</p>;
  if (!dict) return null;

  const faSource = lng === "es" ? FAMapEs : FAMap;
  const faData = faSource[cityData.FA as keyof typeof faSource] || [];

  const testimonialsSource = lng === "es" ? TestimonialsMapEs : TestimonialsMap;
  const testimonialData = testimonialsSource[cityData.Testi as keyof typeof testimonialsSource] || [];

  return (
    <div className="bg-black text-white">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-0" style={{ height: "100dvh" }}>
        <Image
          src={cityData.hero.image.src}
          alt={cityData.hero.image.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/50" />
        <div className="absolute top-0 left-0 right-0 z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 sm:pt-28 lg:pt-32">
          <h1 className="font-serif font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl xl:text-6xl max-w-3xl">
            {cityData.hero.h1}
          </h1>
          <h2 className="mt-3 text-sm sm:text-base text-white/70 font-light tracking-wide max-w-xl">
            {cityData.hero.h2}
          </h2>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-24 sm:pb-20">
          <p className="text-xs sm:text-sm text-white/50 leading-relaxed max-w-lg">
            {cityData.hero.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="https://booking.allblacklimoseattle.com/">
              <button className="bg-primary text-black font-bold px-7 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-white transition">
                {cityData.hero.cta.book}
              </button>
            </a>
            <a href={`tel:${cityData.hero.cta.phone.replace(/\D/g, "")}`}>
              <button className="border border-white text-white font-bold px-7 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition">
                {cityData.hero.cta.phone}
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      {cityData.trustBar && cityData.trustBar.length > 0 && (
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
            gridTemplateColumns: `repeat(${cityData.trustBar.length}, 1fr)`,
            gap: 24,
            textAlign: "center",
          }}>
            {cityData.trustBar.map((item, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                <div style={{ color: "var(--color-primary, #2563eb)" }}>
                  {getTrustIcon(item)}
                </div>
                <span style={{ fontSize: 17, fontWeight: 700, color: "#fff", lineHeight: 1.3, textAlign: "center" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── BODY CONTENT ── */}
      {cityData.bodyContent && (
        <section className="bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16 mt-6 mb-4">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              {cityData.bodyContent.h2}
            </h2>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-8">
              {cityData.bodyContent.h3}
            </h3>
            <div className="max-w-3xl space-y-5 mb-16">
              {cityData.bodyContent.content.map((p, i) => (
                <p key={i} className="text-sm sm:text-base text-neutral-400 leading-relaxed">{p}</p>
              ))}
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {cityData.bodyContent.airports.map((airport, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl cursor-pointer h-80">
                  <img
                    src={airport.image}
                    alt={airport.region}
                    className="w-full h-full object-cover transition duration-500 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none z-10">
                    <span className="text-white text-4xl font-bold tracking-widest drop-shadow-lg">
                      {airport.airports?.[0]}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-5 z-10 h-28 flex flex-col justify-center">
                    <h4 className="text-primary text-lg font-serif font-bold mb-1 leading-tight">{airport.region}</h4>
                    <p className="text-xs text-neutral-300 leading-relaxed line-clamp-2">{airport.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── EXTRA CONTENT ── */}
      {cityData.extraContent && cityData.extraContent.length > 0 && (
        <section className="py-10 sm:py-24 bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16 space-y-24">
            {cityData.extraContent.map((section, i) => (
              <div key={i}>
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-px w-8 bg-primary flex-shrink-0" />
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl">{section.h3}</h3>
                </div>
                <div className="max-w-3xl space-y-5 mb-16">
                  {section.content?.map((p, i) => (
                    <p key={i} className="text-sm sm:text-base text-neutral-400 leading-relaxed">{p}</p>
                  ))}
                </div>
                {(section.quote || section.image) && (
                  <div className={`grid gap-8 mb-10 ${section.image ? "lg:grid-cols-2 lg:items-center" : ""}`}>
                    {section.quote && (
                      <blockquote className="relative pl-8 border-l-2 border-primary">
                        <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                          <span className="text-primary text-xs font-bold">"</span>
                        </div>
                        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed italic">{section.quote}</p>
                      </blockquote>
                    )}
                    {section.image && (
                      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
                        <Image src={section.image.src} alt={section.image.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    )}
                  </div>
                )}
                {section.items && (
                  <div className="grid gap-6 sm:grid-cols-3 mb-10">
                    {section.items.map((item, idx) => (
                      <div key={item.label} className="group flex gap-4 border border-white/5 rounded-2xl p-5 bg-neutral-900/30 hover:border-primary/30 hover:bg-neutral-900/60 transition-all duration-300">
                        <div className="flex-shrink-0 mt-1 h-7 w-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <span className="text-primary text-xs font-bold">{idx + 1}</span>
                        </div>
                        <div>
                          <p className="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-primary transition-colors">{item.label}</p>
                          <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {section.list && (
                  <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-10">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-3 items-start group">
                        <div className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <span className="text-primary text-[10px] font-bold">✓</span>
                        </div>
                        <span className="text-sm text-neutral-300 leading-relaxed group-hover:text-white transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.portList && (
                  <div className="mb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.portList.map((p) => (
                        <div key={p.port} className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-primary/50 transition-all group">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">{p.port}</h3>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={20} height={20} className="shrink-0 text-brand group-hover:text-primary transition-colors duration-200">
                              <circle cx="12" cy="5" r="3"/>
                              <path d="M12 8v13M5 11a7 7 0 0 0 14 0"/>
                            </svg>
                          </div>
                          <p className="text-neutral-400 text-sm leading-relaxed">{p.terminals}</p>
                          <span className="inline-block mt-4 text-[10px] font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full px-2 py-0.5">
                            {p.note}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {section.cta && (
                  <div className="text-center">
                    <a href="https://booking.allblacklimoseattle.com/" className="inline-block">
                      <button className="bg-primary text-black font-bold px-8 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-white transition-all duration-300">
                        {section.cta}
                      </button>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── PRICING ── */}
      <section className="py-16 sm:py-24 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-center mb-12">
            {cityData.pricing.h2}
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {cityData.pricing.vehicles.map((p) => (
              <div key={p.type} className="relative flex flex-col border border-primary/40 rounded-2xl bg-neutral-900/40 p-6 sm:p-8 hover:border-primary transition-all duration-300">
                <h3 className="font-serif font-bold text-xl sm:text-2xl mb-2">{p.type}</h3>
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-0.5">
                  {lng === "es" ? "Desde" : "Starting at"}
                </p>
                <p className="text-4xl font-bold text-primary mb-1">${p.price}</p>
                <p className="text-xs text-neutral-500 mb-6">
                  {p.passengers} {lng === "es" ? "pasajeros" : "passengers"}
                </p>
                <div className="mb-5">
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2">
                    {lng === "es" ? "Modelos" : "Models"}
                  </p>
                  <ul className="space-y-1">
                    {p.models.map((m, i) => (
                      <li key={i} className="text-sm text-neutral-300">· {m}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex-grow">
                  <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-2">
                    {lng === "es" ? "Incluido" : "Included"}
                  </p>
                  <ul className="space-y-1">
                    {p.extras.map((e, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                        <span className="text-primary flex-shrink-0">✓</span> {e}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="https://booking.allblacklimoseattle.com/" className="mt-8 block">
                  <button className="w-full bg-primary text-black font-bold py-3 rounded-full text-xs uppercase tracking-widest hover:bg-white transition">
                    {lng === "es" ? `Reservar ${p.type}` : `Book ${p.type}`}
                  </button>
                </a>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a href="https://booking.allblacklimoseattle.com/">
              <button className="bg-primary text-black font-bold px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-white transition">
                {cityData.pricing.cta}
              </button>
            </a>
            <p className="mt-4 text-xs text-neutral-500">{cityData.pricing.note}</p>
          </div>
        </div>
      </section>

      <Testimonials data={testimonialData} />

      {/* ── FAQ ── */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-center mb-12">
            {lng === "es" ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
          </h2>
          <FA data={faData} />
          <div className="mt-10 flex justify-center">
            <a href={`/${lng}/faq`}>
              <button className="bg-primary text-white font-bold px-8 py-3 rounded-full text-sm uppercase tracking-widest hover:bg-primary/90 transition">
                {lng === "es" ? "¿Más preguntas? Contáctanos →" : "Have More Questions? Contact Us →"}
              </button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}