"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Testimonials } from "@/components/testimonials";
import { CtaSection } from "@/components/cta-section";
import { homeTestimonials, homeTestimonialsEs } from "@/data/Tetimonials";

const inputCls = "w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors";
const selectCls = "w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors";
const labelCls = "block text-[10px] uppercase tracking-widest text-white/40 mb-1.5";

type TripType = "oneway" | "roundtrip" | "package" | "multicity";

// ── TRUST METRICS ─────────────────────────────────────────────────────────────
const TRUST_METRICS = [
  {
    value: "50,000+",
    label: { en: "Rides Completed", es: "Viajes Completados" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M9 17H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/>
        <circle cx="17" cy="17" r="4"/>
        <path d="m21 21-1.5-1.5M17 15v2l1 1"/>
        <path d="m9 11 2 2 4-4"/>
      </svg>
    ),
  },
  {
    value: "5.0★",
    label: { en: "Average Rating", es: "Calificación Promedio" },
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={0.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
      </svg>
    ),
  },
  {
    value: "Licensed",
    label: { en: "& Insured", es: "y Asegurado" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
  },
  {
    value: "24/7",
    label: { en: "Support", es: "Soporte" },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M12 7v2M12 13h.01"/>
      </svg>
    ),
  },
];

// ── BOOKING FORM ──────────────────────────────────────────────────────────────
function BookingForm({ t }: { t: any }) {
  const [trip, setTrip] = React.useState<TripType>("oneway");
  const [stops, setStops] = React.useState<string[]>(["", ""]);

  const tabs: { key: TripType; label: string }[] = [
    { key: "oneway",    label: t.trip_oneway    ?? "One Way"    },
    { key: "roundtrip", label: t.trip_roundtrip ?? "Round Trip" },
    { key: "package",   label: t.trip_package   ?? "Package"    },
    { key: "multicity", label: t.trip_multicity ?? "Multi-City" },
  ];

  const addStop = () => setStops((s) => [...s, ""]);
  const removeStop = (i: number) => setStops((s) => s.filter((_, idx) => idx !== i));

  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/15 rounded-2xl p-6 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
      <h3 className="font-serif font-bold text-xl sm:text-2xl mb-1">
        {t.form_title ?? "Book Your Ride"}
      </h3>
      <p className="text-xs text-white/50 uppercase tracking-widest mb-4">
        {t.form_subtitle ?? "Instant quote · No commitment"}
      </p>

      {/* Trip type tabs */}
      <div className="grid grid-cols-4 gap-1 bg-white/5 rounded-xl p-1 mb-5">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTrip(key)}
            className={`py-2 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
              trip === key ? "bg-primary text-black" : "text-white/50 hover:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {/* Service type — always visible */}
        <div>
          <label className={labelCls}>{t.form_service ?? "Service Type"}</label>
          <select defaultValue="" className={selectCls}>
            <option value="">{t.form_service_placeholder ?? "Select a service..."}</option>
            <option value="airport">{t.form_service_airport ?? "Airport Transfer"}</option>
            <option value="corporate">{t.form_service_corporate ?? "Corporate / Executive"}</option>
            <option value="cruise">{t.form_service_cruise ?? "Cruise Port"}</option>
            <option value="fbo">{t.form_service_fbo ?? "Private Jet / FBO"}</option>
            <option value="hourly">{t.form_service_hourly ?? "Hourly Charter"}</option>
          </select>
        </div>

        {/* ONE WAY */}
        {trip === "oneway" && (
          <>
            <div>
              <label className={labelCls}>{t.form_pickup ?? "Pickup Location"}</label>
              <input type="text" placeholder={t.form_pickup_placeholder ?? "Address, airport, hotel..."} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>{t.form_dropoff ?? "Drop-off Location"}</label>
              <input type="text" placeholder={t.form_dropoff_placeholder ?? "Destination..."} className={inputCls} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>{t.form_date ?? "Date"}</label>
                <input type="date" defaultValue="" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>{t.form_time ?? "Time"}</label>
                <input type="time" defaultValue="" className={inputCls} />
              </div>
            </div>
          </>
        )}

        {/* ROUND TRIP */}
        {trip === "roundtrip" && (
          <>
            <div>
              <label className={labelCls}>{t.form_pickup ?? "Pickup Location"}</label>
              <input type="text" placeholder={t.form_pickup_placeholder ?? "Address, airport, hotel..."} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>{t.form_dropoff ?? "Drop-off Location"}</label>
              <input type="text" placeholder={t.form_dropoff_placeholder ?? "Destination..."} className={inputCls} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>{t.form_date_depart ?? "Departure"}</label>
                <input type="date" defaultValue="" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>{t.form_time ?? "Time"}</label>
                <input type="time" defaultValue="" className={inputCls} />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>{t.form_date_return ?? "Return"}</label>
                <input type="date" defaultValue="" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>{t.form_time_return ?? "Return Time"}</label>
                <input type="time" defaultValue="" className={inputCls} />
              </div>
            </div>
          </>
        )}

        {/* PACKAGE */}
        {trip === "package" && (
          <>
            <div>
              <label className={labelCls}>{t.form_pickup ?? "Pickup Location"}</label>
              <input type="text" placeholder={t.form_pickup_placeholder ?? "Address, airport, hotel..."} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>{t.form_dropoff ?? "Drop-off Location"}</label>
              <input type="text" placeholder={t.form_dropoff_placeholder ?? "Destination..."} className={inputCls} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>{t.form_date ?? "Start Date"}</label>
                <input type="date" defaultValue="" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>{t.form_date_end ?? "End Date"}</label>
                <input type="date" defaultValue="" className={inputCls} />
              </div>
            </div>
            <div>
              <label className={labelCls}>{t.form_package_notes ?? "Package Details"}</label>
              <input type="text" placeholder={t.form_package_placeholder ?? "E.g. 3-day corporate retreat..."} className={inputCls} />
            </div>
          </>
        )}

        {/* MULTI-CITY */}
        {trip === "multicity" && (
          <>
            {stops.map((_, i) => (
              <div key={i} className="relative">
                <label className={labelCls}>
                  {i === 0
                    ? (t.form_pickup ?? "Pickup Location")
                    : i === stops.length - 1
                    ? (t.form_dropoff ?? "Final Destination")
                    : `${t.form_stop ?? "Stop"} ${i}`}
                </label>
                <div className="flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder={i === 0 ? (t.form_pickup_placeholder ?? "Starting point...") : (t.form_stop_placeholder ?? "Next destination...")}
                    className={inputCls}
                  />
                  {i > 1 && i === stops.length - 1 && (
                    <button
                      onClick={() => removeStop(i)}
                      className="flex-shrink-0 w-9 h-9 rounded-lg border border-white/20 text-white/40 hover:text-white hover:border-white/50 transition-colors flex items-center justify-center text-lg leading-none"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            ))}
            <button
              onClick={addStop}
              className="text-xs font-semibold uppercase tracking-widest text-primary hover:text-white transition-colors text-left"
            >
              + {t.form_add_stop ?? "Add Stop"}
            </button>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>{t.form_date ?? "Date"}</label>
                <input type="date" defaultValue="" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>{t.form_time ?? "Time"}</label>
                <input type="time" defaultValue="" className={inputCls} />
              </div>
            </div>
          </>
        )}

        {/* Passengers — always visible */}
        <div>
          <label className={labelCls}>{t.form_passengers ?? "Passengers"}</label>
          <select defaultValue="1" className={selectCls}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? (t.form_passenger ?? "passenger") : (t.form_passengers_label ?? "passengers")}
              </option>
            ))}
          </select>
        </div>

        <a href="https://booking.allblacklimoseattle.com/" className="mt-2">
          <Button className="w-full bg-primary text-black hover:bg-white hover:text-black rounded-full text-xs font-bold uppercase tracking-widest h-12 transition-all duration-300">
            {t.form_cta ?? "Get Instant Quote"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  );
}

// ── MAIN CONTENT ──────────────────────────────────────────────────────────────
export default function MainContent({ dict, lng }: { dict: any; lng: string }) {
  const t = dict;
  const testimonios = lng === "en" ? homeTestimonials : homeTestimonialsEs;

  const services: any[]        = t.services         || [];
  const fleet: any[]           = t.fleet            || [];
  const locationsRegions: any[] = t.locations_regions || [];
  const aboutWhy: any[]        = t.about_why        || [];

  return (
    <section id="MainContent" className="bg-black text-white">
      <main>

        {/* ── HERO ── */}
        <section
          className="relative w-full mt-16 flex items-start"
          style={{ minHeight: "calc(100svh - 4rem)" }}
        >
          <div className="absolute inset-0">
            <Image
              src="/images/ImagenPrincipal.png"
              alt="Viaro black car services: airport pickup with chauffeur, corporate executive travel, cruise port transfer, and private jet FBO transportation."
              fill
              priority
              className="object-cover object-[center_30%] sm:object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-24 sm:py-28 lg:py-32 pb-36 sm:pb-40">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* LEFT — text */}
              <div className="max-w-2xl">
                <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand [text-shadow:0_1px_3px_rgba(0,0,0,0.9),_0_4px_12px_rgba(0,0,0,0.6)] whitespace-pre-line">
                  {t.hero_top_text}
                </p>
                <h1 className="font-serif font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                  {t.hero_title}
                </h1>
                <p className="mb-6 mt-2 text-sm font-semibold uppercase tracking-[0.3em]">
                  {t.subtitle}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="https://booking.allblacklimoseattle.com/">
                    <Button className="bg-primary rounded-full px-6 sm:px-8 uppercase tracking-widest text-xs font-semibold h-11 sm:h-12">
                      {t.book_now}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <a href="tel:+12066728281">
                    <Button
                      variant="outline"
                      className="rounded-full px-6 sm:px-8 uppercase tracking-widest text-xs font-semibold h-11 sm:h-12 border-white text-white hover:bg-white hover:text-black"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      {t.call_cta}
                    </Button>
                  </a>
                </div>
              </div>

              {/* RIGHT — booking form */}
              <BookingForm t={t} />
            </div>
          </div>

        </section>

        {/* ── TRUST METRICS ── */}
        <section style={{
          background: "rgb(30,30,30)",
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
          <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 24, textAlign: "center" }}>
            {TRUST_METRICS.map((m) => (
              <div key={m.value} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                <div style={{ color: "rgba(255,255,255,0.55)" }}>{m.icon}</div>
                <span style={{ fontSize: 22, fontWeight: 700, color: "#fff", lineHeight: 1 }}>{m.value}</span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {m.label[lng as "en" | "es"]}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── WELCOME ── */}
        <section className="py-16 sm:py-20 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                  {t.welcome_title}
                </h2>
                <p className="mt-6 text-sm sm:text-base text-gray-300 leading-relaxed whitespace-pre-line">
                  {t.welcome_description}
                </p>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/Imagen2Home.png"
                  alt="Luxury vehicle"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        {services.length > 0 && (
          <section className="py-16 sm:py-20 bg-black">
            <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
              <h2 className="text-center font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                {t.services_title}
              </h2>
              <div className="mt-12">
                <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-3">
                  {services.slice(0, 3).map((s: any) => (
                    <div
                      key={s.id}
                      className="flex flex-col border border-primary/30 rounded-2xl bg-neutral-900/50 p-6 sm:p-8 hover:border-primary transition-all duration-300"
                    >
                      <h3 className="font-serif font-bold text-xl sm:text-2xl text-primary mb-3">{s.title}</h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">{s.description}</p>
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">{s.detail}</p>
                      {s.served && (
                        <p className="text-xs text-gray-500 italic mb-6">
                          <span className="not-italic font-semibold text-gray-400">{s.served_label}: </span>
                          {s.served}
                        </p>
                      )}
                      <div className="mt-auto">
                        <a href="https://booking.allblacklimoseattle.com/" target="_blank" rel="noopener noreferrer">
                          <Button className="w-full bg-primary text-black hover:bg-white hover:text-black rounded-full text-xs font-bold uppercase tracking-widest h-11">
                            {s.cta}
                          </Button>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {services.length > 3 && (
                  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2 xl:w-2/3 xl:mx-auto mt-6">
                    {services.slice(3).map((s: any) => (
                      <div
                        key={s.id}
                        className="flex flex-col border border-primary/30 rounded-2xl bg-neutral-900/50 p-6 sm:p-8 hover:border-primary transition-all duration-300"
                      >
                        <h3 className="font-serif font-bold text-xl sm:text-2xl text-primary mb-3">{s.title}</h3>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-3">{s.description}</p>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">{s.detail}</p>
                        {s.served && (
                          <p className="text-xs text-gray-500 italic mb-6">
                            <span className="not-italic font-semibold text-gray-400">{s.served_label}: </span>
                            {s.served}
                          </p>
                        )}
                        <div className="mt-auto">
                          <a href="https://booking.allblacklimoseattle.com/" target="_blank" rel="noopener noreferrer">
                            <Button className="w-full bg-primary text-black hover:bg-white hover:text-black rounded-full text-xs font-bold uppercase tracking-widest h-11">
                              {s.cta}
                            </Button>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ── LOCATIONS ── */}
        <section className="py-16 sm:py-20 bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-center lg:text-left mb-8">
              {t.locations_title}
            </h2>
            <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden mb-12">
              <Image
                src="/images/Mapa.png"
                alt="Map showing Viaro luxury black car service locations across the United States."
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 90vw"
              />
            </div>
            <div className="lg:flex lg:items-start lg:gap-16">
              <div className="lg:w-1/3 mb-10 lg:mb-0 lg:sticky lg:top-24">
                {t.locations_subtitle && (
                  <p className="text-sm sm:text-base text-gray-400 text-center lg:text-left">
                    {t.locations_subtitle}
                  </p>
                )}
                {t.locations_cta && (
                  <div className="mt-8 flex justify-center lg:justify-start">
                    <a href="https://booking.allblacklimoseattle.com/">
                      <Button className="bg-primary rounded-full px-8 uppercase tracking-widest text-xs font-semibold h-11 sm:h-12">
                        {t.locations_cta}
                      </Button>
                    </a>
                  </div>
                )}
              </div>
              <div className="lg:w-2/3">
                {locationsRegions.length > 0 ? (
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                    {locationsRegions.map((r: any) => (
                      <div key={r.region}>
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">{r.region}</h3>
                        <ul className="space-y-2">
                          {r.cities.map((c: any) => (
                            <li key={c.slug}>
                              <Link
                                href={`/${lng}/service-area/${c.slug}`}
                                className="text-sm text-gray-300 hover:text-primary transition-colors"
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "New York","Los Angeles","Chicago","Dallas","Atlanta",
                      "Washington DC","Miami","Boston","San Francisco","Seattle",
                      "Las Vegas","Houston","Phoenix","Denver","San Diego",
                      "Charlotte","Nashville","Austin","Philadelphia","Orlando",
                    ].map((city) => (
                      <Link key={city} href={`/${lng}/location/${city.toLowerCase().replace(" ", "-")}`}>
                        <button className="w-full bg-black text-white py-3 rounded-lg border border-primary hover:bg-primary transition text-sm">
                          {city}
                        </button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── FLEET ── */}
        {fleet.length > 0 && (
          <section id="fleet" className="py-16 sm:py-20 bg-black">
            <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
              <h2 className="text-center font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                {t.fleet_title}
              </h2>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {fleet.map((v: any) => (
                  <div
                    key={v.type}
                    className="flex flex-col border border-primary/40 p-6 sm:p-8 rounded-2xl bg-neutral-900/40 hover:border-primary transition-all duration-300"
                  >
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-primary mb-2">{v.type}</h3>
                    <p className="text-sm text-gray-300 mb-6">
                      {Array.isArray(v.models) ? v.models.join(", ") : v.models}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6 border-y border-white/10 py-4">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Passengers</span>
                        <span className="text-sm font-semibold text-white">{v.passengers}</span>
                      </div>
                      <div className="flex flex-col border-l border-white/10 pl-4">
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Luggage</span>
                        <span className="text-sm font-semibold text-white">{v.luggage}</span>
                      </div>
                    </div>
                    <div className="flex-grow space-y-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-primary font-bold block mb-1">Best For</span>
                        <p className="text-sm text-gray-300 italic">{v.bestFor}</p>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">Features</span>
                        <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">{v.features}</p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <a href="https://booking.allblacklimoseattle.com/" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-primary text-black hover:bg-white hover:text-black rounded-full text-xs font-bold uppercase tracking-widest h-11 sm:h-12">
                          {v.cta || t.book_now}
                        </Button>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── ABOUT ── */}
        {t.about_title && (
          <section className="py-16 sm:py-20 bg-neutral-950">
            <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-16">
              <h2 className="text-center font-serif font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-12">
                {t.about_title}
              </h2>
              <div className="mb-8">
                {t.about_founder_label && (
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                    {t.about_founder_label}: {t.about_founder_name}
                  </p>
                )}
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl">
                  {t.about_founder_description}
                </p>
              </div>
              <div className="grid gap-8 lg:grid-cols-2 mb-10">
                <div className="flex flex-col gap-6">
                  {t.about_vision && (
                    <div className="border border-primary/30 rounded-xl p-5 flex-1">
                      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{t.about_vision_label}</p>
                      <p className="text-sm text-gray-300 leading-relaxed">{t.about_vision}</p>
                    </div>
                  )}
                  {t.about_mission && (
                    <div className="border border-primary/30 rounded-xl p-5 flex-1">
                      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{t.about_mission_label}</p>
                      <p className="text-sm text-gray-300 leading-relaxed">{t.about_mission}</p>
                    </div>
                  )}
                </div>
                <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "100%" }}>
                  <Image
                    src="/images/Imagen2Home.png"
                    alt="Viaro CEO Bijo Cherian and a professional chauffeur providing service."
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              {aboutWhy.length > 0 && (
                <>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl mb-5">{t.about_why_title}</h3>
                  <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                    {aboutWhy.map((w: any) => (
                      <li key={w.label} className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-300">
                          <strong className="text-white">{w.label}:</strong> {w.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              <div className="flex flex-wrap gap-3">
                <a href="https://booking.allblacklimoseattle.com/">
                  <Button className="bg-primary rounded-full px-6 sm:px-8 uppercase tracking-widest text-xs font-semibold h-11 sm:h-12">
                    {t.about_cta}
                  </Button>
                </a>
                <a href="tel:+12066728281">
                  <Button
                    variant="outline"
                    className="rounded-full px-6 sm:px-8 uppercase tracking-widest text-xs font-semibold h-11 sm:h-12 border-white text-white hover:bg-white hover:text-black"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    {t.call_cta}
                  </Button>
                </a>
              </div>
            </div>
          </section>
        )}

        <Testimonials data={testimonios} />
        <CtaSection />
      </main>
    </section>
  );
}