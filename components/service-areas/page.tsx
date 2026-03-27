"use client";
import { ArrowRight, MapPin } from "lucide-react";
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

// ── TRUST METRICS ─────────────────────────────────────────────────────────────
const TRUST_METRICS = [
  {
    value: "5.0",
    labelKey: "ratingLabel",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>
      </svg>
    ),
  },
  {
    value: "Live",
    labelKey: "flightLabel",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 2c-2-2-4-2-5.5-.5L10 5 1.8 6.2c-.5.1-.9.6-.6 1.1l1.7 2.7c.3.5.9.6 1.3.3l2.8-1.8 2.3 2.3-2.7 4.9c-.3.5.1 1.1.6 1.1l2.8-.1c.5 0 .9-.3 1-.8l.5-2.6 2.5 2.5-.1 2.8c0 .5.6.9 1.1.6l4.9-2.7c.5-.3.6-.9.3-1.3l-1.8-2.8z"/>
      </svg>
    ),
  },
  {
    value: "24/7",
    labelKey: "supportLabel",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M12 7v2M12 13h.01"/>
      </svg>
    ),
  },
  {
    value: "100%",
    labelKey: "licensedLabel",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
        <path d="m9 12 2 2 4-4"/>
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

     
<section className="relative w-full overflow-hidden" style={{ height: "100dvh" }}>
  <Image
    src="/images/ImagenLocations1.png"
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
        {t.hero.subtitle}
      </p>
    </div>

    <div>
      <p className="hidden sm:block mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
        {t.hero.subtitle}
      </p>

      <h1 className="font-serif font-bold leading-[1.1] text-[1.6rem] sm:text-4xl lg:text-5xl xl:text-6xl max-w-[280px] sm:max-w-xl lg:max-w-2xl">
        {t.hero.title}
      </h1>

      {t.hero.description && (
        <p className="mt-2 sm:mt-3 text-xs sm:text-base text-white/60 leading-relaxed font-light max-w-[260px] sm:max-w-xl">
          {t.hero.description}
        </p>
      )}

      <div className="mt-5 sm:mt-8 flex flex-wrap gap-3">
        <a href="https://booking.allblacklimoseattle.com/">
          <button className="border border-primary bg-primary text-black font-semibold text-sm px-6 py-3 rounded-full hover:bg-transparent hover:text-white transition-all duration-300">
            {t.buttons.bookNow}
          </button>
        </a>
        <a href="tel:2066728281">
          <button className="border border-white/60 text-white font-semibold text-sm px-6 py-3 rounded-full hover:border-white hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
            </svg>
            {t.buttons.callUs ?? "Call Us"}
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
          <p className="text-neutral-400 leading-relaxed whitespace-pre-line">{t.intro.description}</p>
          <div className="mt-8">
            <a href="https://booking.allblacklimoseattle.com/">
              <Button size="lg" className="bg-primary rounded-full text-primary-foreground hover:bg-primary/90 px-8 uppercase tracking-widest text-xs font-semibold h-10">
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
                    href={city.slug ? `/${lng}/service-area/${city.slug}` : "#"}
                    className={city.slug ? "block" : "block pointer-events-none"}
                  >
                    <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-primary/50 transition-all group cursor-pointer">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">{city.name}</h3>
                        <MapPin className="w-5 h-5 text-brand group-hover:text-primary transition-colors duration-200" />
                      </div>
                      <p className="text-neutral-400 text-sm leading-relaxed">{city.desc}</p>
                      {city.slug && (
                        <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          {isES ? "Ver detalles" : "View details"} <ArrowRight className="w-3 h-3" />
                        </p>
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
          <button className="text-sm md:text-base font-semibold text-white bg-primary px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105">
            {t.buttons.moreQuestions}
          </button>
        </a>
      </div>

    </main>
  );
}