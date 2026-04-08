"use client";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  locationsTestimonials,
  locationsTestimonialsEs,
} from "@/data/Tetimonials";
import { Testimonials } from "../testimonials";
import { LocationsFa, LocationsFaEs } from "@/data/Fa";
import { FA } from "../FA";
import UsMapScroll from "../UsMapScroll";
import { Button } from "../ui/button";
import { getDictionary } from "@/lib/get-dictionary";
import Link from "next/link";

const btnPrimary =
  "bg-primary text-white hover:bg-brand2 rounded-full uppercase tracking-widest text-xs font-semibold transition-colors";

// ── TRUST METRICS ─────────────────────────────────────────────────────────────
const TRUST_METRICS = [
  {
    value: "5.0",
    labelKey: "ratingLabel",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
      </svg>
    ),
  },
  {
    value: "Live",
    labelKey: "flightLabel",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M22 16.5H2M2 16.5l4-8 4 4 4-2 4-4 2 2-4 8z" />
        <path d="M6 19.5h12" />
      </svg>
    ),
  },
  {
    value: "24/7",
    labelKey: "supportLabel",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M12 7v2M12 13h.01" />
      </svg>
    ),
  },
  {
    value: "100%",
    labelKey: "licensedLabel",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function LocationsContent() {
  const params = useParams();
  const lng = params.lng as "es" | "en";
  const [dict, setDict] = useState<any>(null);

  useEffect(() => {
    const loadDict = async () => {
      const data = await getDictionary(lng);
      setDict(data);
    };
    loadDict();
  }, [lng]);

  const testimonios = lng === "en" ? locationsTestimonials : locationsTestimonialsEs;
  const fa = lng === "en" ? LocationsFa : LocationsFaEs;
  if (!dict) return <div>Loading...</div>;
  const t = dict.locations;
  const isES = lng === "es";

  const locations2 = [
    {
      city: "New York City",
      airport: "JFK",
      description: isES
        ? "La capital cultural del mundo. Rascacielos icónicos, luces de Broadway y energía imparable."
        : "The cultural capital of the world. Iconic skyscrapers, Broadway lights, and unstoppable energy.",
      image: "/images/ImagenNewYork.png",
    },
    {
      city: "Los Angeles",
      airport: "LAX",
      description: isES
        ? "Donde Hollywood se encuentra con el Pacífico. Cine, playas y el auténtico estilo de vida californiano."
        : "Where Hollywood meets the Pacific. Film, beaches, and the ultimate California lifestyle.",
      image: "/images/ImagenLA.png",
    },
    {
      city: "Seattle",
      airport: "SEA",
      description: isES
        ? "La Ciudad Esmeralda con la icónica Space Needle, vibrante zona costera y un próspero sector tecnológico."
        : "Emerald City with iconic Space Needle, vibrant waterfront, and a thriving tech scene.",
      image: "/images/ImagenSeattle.png",
    },
    {
      city: "Las Vegas",
      airport: "LAS",
      description: isES
        ? "La capital mundial del entretenimiento. Resorts de lujo, vida nocturna y emoción sin parar."
        : "The world's entertainment capital. Luxury resorts, nightlife, and nonstop excitement.",
      image: "/images/ImagenLasVegas.png",
    },
    {
      city: "Chicago",
      airport: "ORD",
      description: isES
        ? "Arquitectura impactante, jazz legendario y una de las mejores escenas culinarias del país."
        : "Striking architecture, legendary jazz, and one of the country's finest culinary scenes.",
      image: "/images/ImagenChicago.png",
    },
    {
      city: "San Francisco",
      airport: "SFO",
      description: isES
        ? "Puentes icónicos, colinas escénicas y el corazón tecnológico de Silicon Valley."
        : "Iconic bridges, scenic hills, and the heart of Silicon Valley innovation.",
      image: "/images/ImagenSanFrancisco.png",
    },
  ];

  const locations = [
    {
      region: isES ? "Estados Unidos - Oeste" : "Western United States",
      cities: [
        { name: "Anaheim, CA (SNA)", slug: "anaheim-sna", desc: isES ? "Servicio de lujo en Orange County." : "Orange County luxury car service." },
        { name: "Los Angeles, CA (LAX, VNY)", slug: "los-angeles-lax", desc: isES ? "Servicio ejecutivo para Hollywood y Beverly Hills." : "Executive car service for Hollywood & Beverly Hills." },
        { name: "Seattle, WA (SEA, BFI)", slug: "seattle-seatac-airport", desc: isES ? "Traslados al aeropuerto Sea-Tac y puertos de crucero." : "Sea-Tac airport & Pier 66/91 cruise transfers." },
      ],
    },
    {
      region: isES ? "Estados Unidos - Centro" : "Central United States",
      cities: [
        { name: "Chicago, IL (ORD, MDW)", slug: "chicago-ord", desc: isES ? "Servicio aeropuerto O'Hare y Midway." : "O'Hare & Midway airport service." },
        { name: "Dallas, TX (DFW, DAL)", slug: "dallas-dfw", desc: isES ? "Transporte corporativo y servicio Love Field." : "Corporate roadshows & Love Field service." },
      ],
    },
    {
      region: isES ? "Estados Unidos - Este" : "Eastern United States",
      cities: [
        { name: "Miami, FL (MIA)", slug: "miami-mia", desc: isES ? "South Beach, PortMiami y viajes corporativos." : "South Beach, PortMiami & Brickell corporate travel." },
        { name: "Washington, DC (IAD, DCA)", slug: "washington-dc-iad", desc: isES ? "Aeropuertos Dulles y Reagan." : "Dulles & Reagan airport. Government & diplomatic travel." },
      ],
    },
    {
      region: "Canada",
      note: isES
        ? "Todos los viajes a Canadá requieren mínimo 8 horas por posibles demoras fronterizas."
        : "All Canada trips require 8-hour minimum due to potential border/customs delays.",
      cities: [
        { name: "Vancouver, BC (YVR)", slug: "vancouver-yvr", desc: isES ? "Puerto Canada Place y viajes corporativos." : "Canada Place cruise port & downtown business travel." },
      ],
    },
    {
      region: "Costa Rica",
      cities: [
        { name: "Liberia, CR (LIR)", slug: "liberia-lir", desc: isES ? "Traslados a resorts de playa en Guanacaste." : "Guanacaste beach resort & golf transfers." },
        { name: "San José, CR (SJO)", slug: "san-jose-sjo", desc: isES ? "Aeropuerto capitalino y eventos especiales." : "Capital city airport & special events." },
      ],
    },
  ];

  const scrollToRegion = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 100;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <main>

      {/* ── HERO ── */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-0">
        <div className="absolute w-full h-[60vh] md:h-[75vh] lg:h-screen">
          <Image
            src="/images/ImagenLocations1.png"
            alt="Luxury vehicle parked in front of a modern building"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/75" />
        </div>
        <div className="relative z-20 max-w-7xl pl-6 lg:pl-16 pt-20">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand [text-shadow:0_1px_3px_rgba(0,0,0,0.9),_0_4px_12px_rgba(0,0,0,0.6)]">
              {t.hero.subtitle}
            </p>
            <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-brand [text-shadow:0_1px_3px_rgba(0,0,0,0.9),_0_4px_12px_rgba(0,0,0,0.6)]">
              {t.subtitle}
            </p>
            <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
              {t.hero.title}
            </h1>
            <p className="mt-4 mb-6 text-sm font-semibold uppercase tracking-[0.3em]">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://booking.allblacklimoseattle.com/">
                <Button className={`px-6 sm:px-8 h-11 sm:h-12 ${btnPrimary}`}>
                  {t.buttons.bookNow}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="tel:2066728281">
                <Button
                  variant="outline"
                  className="rounded-full px-6 sm:px-8 uppercase tracking-widest text-xs font-semibold h-11 sm:h-12 border-white text-white hover:bg-white hover:text-black"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  {t.buttons.callUs ?? "Call Us"}
                </Button>
              </a>
            </div>
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
                {t.stats[m.labelKey]}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="py-10 container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6">{t.intro.title}</h2>
          <h3 className="mb-4">{t.intro.subtitle}</h3>
          <p className="text-neutral-400 leading-relaxed">{t.intro.description}</p>
          <div className="mt-8">
            <a href="https://booking.allblacklimoseattle.com/">
              <Button className={`px-6 sm:px-8 h-11 sm:h-12 ${btnPrimary}`}>
                {t.buttons.bookNow}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
        <img
          src="/images/ImagenLocations2.png"
          alt="Luxury executive transportation"
          className="rounded-2xl shadow-2xl"
        />
      </section>

      <UsMapScroll onSelectRegion={scrollToRegion} />

      {/* ── TOP CITIES ── */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-2xl font-bold uppercase tracking-tighter text-white mb-10">
          {t.topCities}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {locations2.map((section, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl cursor-pointer">
              <img
                src={section.image}
                alt={section.city}
                className="w-full h-80 object-cover transition duration-500 group-hover:brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                <span className="text-white text-5xl font-bold tracking-widest">{section.airport}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                <h3 className="text-white text-xl font-semibold">{section.city}</h3>
                <p className="text-gray-300 text-sm">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── REGIONS ── */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        {locations.map((section) => {
          const regionId = section.region.toLowerCase().replace(/\s+/g, "-");
          return (
            <div key={section.region} id={regionId} className="mb-24 scroll-mt-24">
              <div className="flex items-center gap-4 mb-10">
                <h2 className="text-2xl font-bold uppercase tracking-tighter text-white">{section.region}</h2>
                <div className="h-px bg-blue-500/30 flex-grow" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.cities.map((city) => (
                  <Link
                    key={city.name}
                    href={city.slug ? `/${lng}/black-car-service/${city.slug}` : "#"}
                    className={city.slug ? "block" : "block pointer-events-none"}
                  >
                    <div className="p-4 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-primary/50 transition-all group cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">{city.name}</h3>
                        <MapPin className="w-5 h-5 text-brand group-hover:text-primary transition-colors duration-200" />
                      </div>
                      <p className="text-neutral-400 text-sm leading-relaxed">{city.desc}</p>
                      {city.slug && (
                        <span className="inline-flex items-center gap-1 mt-2 text-[10px] font-semibold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                          {isES ? "Ver detalles" : "View details"} <ArrowRight className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
              {section.note && (
                <p className="text-sm text-brand mb-6 mt-3">{section.note}</p>
              )}
            </div>
          );
        })}
      </div>

      <Testimonials data={testimonios} />

      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-center mt-10">
        {t.faqTitle}
      </h2>
      <FA data={fa} />
      <div className="mb-9 flex justify-center">
        <a href="/faq">
          <Button className={`px-8 h-11 sm:h-12 ${btnPrimary}`}>
            {t.buttons.moreQuestions}
          </Button>
        </a>
      </div>

    </main>
  );
}