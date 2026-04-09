"use client";

import Image from "next/image";
import { FA } from "../FA";
import { FAMap, FAMapEs } from "@/data/Fa";
import { TestimonialsMap, TestimonialsMapEs } from "@/data/Tetimonials";
import { Testimonials } from "../testimonials";
import { locationEn, locationEs } from "@/data/locations";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getDictionary } from "@/lib/get-dictionary";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "../ui/button";

// ── TRUST BAR ICONS ───────────────────────────────────────────────────────────
const btnPrimary =
  "bg-primary text-white hover:bg-brand2 rounded-full uppercase tracking-widest text-xs font-semibold transition-colors";

function getTrustIcon(label: string) {
  const l = label.toLowerCase();
  if (
    l.includes("flight") ||
    l.includes("vuelo") ||
    l.includes("tail") ||
    l.includes("cola") ||
    l.includes("track") ||
    l.includes("rastreo")
  )
    return (
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
        <path d="M4 16L8.5 8 11 13l3-2.5L18 8l-2 8-6-3z" />
        <circle cx="19" cy="5" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="19" cy="5" r="3.5" strokeWidth={1} opacity={0.5} />
        <circle cx="19" cy="5" r="5.5" strokeWidth={0.7} opacity={0.25} />
      </svg>
    );
  if (
    l.includes("save") ||
    l.includes("ahorra") ||
    l.includes("%") ||
    l.includes("early") ||
    l.includes("anticip")
  )
    return (
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
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    );
  if (
    l.includes("chauffeur") ||
    l.includes("chofer") ||
    l.includes("pro") ||
    l.includes("driver")
  )
    return (
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
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    );
  if (
    l.includes("luxury") ||
    l.includes("lujo") ||
    l.includes("fleet") ||
    l.includes("flota")
  )
    return (
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
        <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h11l5 5v5h-2m-9 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0m9 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
      </svg>
    );
  if (l.includes("24") || l.includes("booking") || l.includes("reserva"))
    return (
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
    );
  return (
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

// ── COMPONENT ─────────────────────────────────────────────────────────────────
export default function LocationPage() {
  const params = useParams<{ lng: "es" | "en"; id: string }>();
  const lng = params.lng;
  const id = params.id;

  const [dict, setDict] = useState<any>(null);

  useEffect(() => {
    getDictionary(lng).then(setDict);
  }, [lng]);

  const dataset = lng === "es" ? locationEs : locationEn;
  const data = dataset.find((loc) => loc.id === id);

  if (!data) return <p className="text-white p-10">Location not found: {id}</p>;
  if (!dict) return null;

  const faSource = lng === "es" ? FAMapEs : FAMap;
  const testiSource = lng === "es" ? TestimonialsMapEs : TestimonialsMap;

  const faData = faSource[data.FA as keyof typeof faSource] || [];
  const testiData = testiSource[data.Testi as keyof typeof testiSource] || [];

  return (
    <main className="bg-neutral-950 text-white">
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center pt-0"
        style={{ height: "100dvh" }}
      >
        <Image
          src={data.hero.image.src}
          alt={data.hero.image.alt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/50" />

        <div className="absolute bottom-0 left-0 right-0 z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-24 sm:pb-20">
          <h1 className="font-serif font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl xl:text-6xl max-w-3xl">
            {data.hero.h1}
          </h1>
          <h2 className="mt-3 text-sm sm:text-base text-white/70 font-light tracking-wide max-w-xl">
            {data.hero.h2}
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="https://booking.allblacklimoseattle.com/">
              <Button className={`px-6 sm:px-8 h-11 sm:h-12 ${btnPrimary}`}>
                {data.hero.cta.book}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href={`tel:${data.hero.cta.phone.replace(/\D/g, "")}`}>
              <Button
                variant="outline"
                className="rounded-full px-6 sm:px-8 uppercase tracking-widest text-xs font-semibold h-11 sm:h-12 border-white text-white hover:bg-white hover:text-black"
              >
                <Phone className="mr-2 h-4 w-4" />
                {data.hero.cta.phone}
              </Button>
            </a>
          </div>
          {data.hero.description && (
            <p className="mt-4 text-sm italic text-white/30 sm:text-base">
              "{data.hero.description}"
            </p>
          )}
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-neutral-900 border-y border-white/10 py-6">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {data.trustBar.map((item) => (
            <div
              key={item}
              className="flex flex-col items-center gap-2 text-center"
            >
              <span className="text-primary">{getTrustIcon(item)}</span>
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.3,
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── BODY CONTENT ── */}
      <section className="py-16 sm:py-20 max-w-6xl mx-auto px-6 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3">
          {data.bodyContent.h2}
        </h2>
        <h3 className="text-lg sm:text-xl text-primary font-semibold mb-6">
          {data.bodyContent.h3}
        </h3>
        <div className="space-y-4 text-white/70 text-sm sm:text-base max-w-3xl mb-14">
          {data.bodyContent.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Destinations grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.bodyContent.destinations.map((dest) => (
            <div
              key={dest.name}
              className="relative rounded-2xl overflow-hidden group aspect-[4/3] bg-neutral-800"
            >
              {dest.image && (
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-primary font-bold text-lg">
                    {dest.name}
                  </span>
                  <span className="text-white/60 text-xs border border-white/20 px-2 py-0.5 rounded-full">
                    {dest.time}
                  </span>
                </div>
                <p className="text-white/70 text-xs leading-snug">
                  {dest.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXTRA CONTENT ── */}
      {data.extraContent && data.extraContent.length > 0 && (
        <section className="py-12 sm:py-16 bg-neutral-900">
          <div className="max-w-6xl mx-auto px-6 sm:px-12 space-y-16">
            {data.extraContent.map((section, i) => (
              <div key={i}>
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">
                  {section.h3}
                </h3>

                {section.content && (
                  <div className="space-y-3 text-white/70 text-sm sm:text-base max-w-3xl mb-8">
                    {section.content.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                )}

                {section.items && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    {section.items.map((item) => (
                      <div
                        key={item.label}
                        className="bg-neutral-800 rounded-xl p-5 border border-white/10"
                      >
                        <p className="text-primary font-semibold mb-2">
                          {item.label}
                        </p>
                        <p className="text-white/60 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.list && (
                  <ul className="list-disc list-inside text-white/70 text-sm space-y-1 mb-8">
                    {section.list.map((li, j) => (
                      <li key={j}>{li}</li>
                    ))}
                  </ul>
                )}

                {section.portList && (
                  <div className="space-y-4 mb-8">
                    {section.portList.map((port) => (
                      <div
                        key={port.port}
                        className="bg-neutral-800 rounded-xl p-5 border border-white/10"
                      >
                        <p className="font-semibold text-white">{port.port}</p>
                        <p className="text-white/60 text-sm">
                          {port.terminals}
                        </p>
                        {port.note && (
                          <p className="text-primary text-xs mt-1">
                            {port.note}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.image && (
                  <div className="relative w-full aspect-[16/6] rounded-2xl overflow-hidden mb-8">
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {section.quote && (
                  <blockquote className="border-l-4 border-primary pl-6 text-white/70 italic text-base my-8">
                    {section.quote}
                  </blockquote>
                )}

                {section.cta && (
                  <a
                    href="https://booking.allblacklimoseattle.com/"
                    className="inline-flex items-center justify-center bg-primary text-black font-semibold text-xs uppercase tracking-widest px-8 h-11 rounded-full hover:opacity-90 transition"
                  >
                    {section.cta}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── PRICING ── */}
      <section className="py-16 sm:py-20 max-w-6xl mx-auto px-6 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
          {data.pricing.h2}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {data.pricing.vehicles.map((v) => (
            <div
              key={v.type}
              className={`relative rounded-2xl p-6 border ${v.badge ? "border-primary" : "border-white/10"} bg-neutral-900`}
            >
              {v.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  {v.badge}
                </span>
              )}
              <h3 className="text-xl font-bold mb-1">{v.type}</h3>
              {v.price > 0 && (
                <p className="text-3xl font-bold text-primary mb-1">
                  ${v.price}
                </p>
              )}
              {v.passengers > 0 && (
                <p className="text-white/50 text-xs mb-4">
                  {lng === "es" ? "Hasta" : "Up to"} {v.passengers}{" "}
                  {lng === "es" ? "pasajeros" : "passengers"} · {v.bags}{" "}
                  {lng === "es" ? "maletas" : "bags"}
                </p>
              )}
              <ul className="space-y-2">
                {v.extras.map((e) => (
                  <li
                    key={e}
                    className="flex items-start gap-2 text-sm text-white/70"
                  >
                    <span className="text-primary mt-0.5">✓</span> {e}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-white/50 text-sm text-center mb-8">
          {data.pricing.note}
        </p>
        <div className="flex justify-center">
          <a
            href="https://booking.allblacklimoseattle.com/"
            className="inline-flex items-center justify-center bg-primary text-black font-semibold text-xs uppercase tracking-widest px-10 h-12 rounded-full hover:opacity-90 transition"
          >
            {data.pricing.cta}
          </a>
        </div>
      </section>

      <Testimonials data={testiData} />

      <section className="py-16 sm:py-24 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-center mb-12">
            {lng === "es"
              ? "Preguntas Frecuentes"
              : "Frequently Asked Questions"}
          </h2>
          <FA data={faData} />
          <div className="mt-10 flex justify-center">
            <a href={`/${lng}/faq`}>
              <Button
                variant="outline"
                className="rounded-full px-6 sm:px-8 uppercase tracking-widest text-xs font-semibold h-11 sm:h-12 border-white text-white hover:bg-white hover:text-black"
              >
                <Phone className="mr-2 h-4 w-4" />
                {lng === "es"
                  ? "¿Más preguntas? Contáctanos"
                  : "Have More Questions? Contact Us"}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
