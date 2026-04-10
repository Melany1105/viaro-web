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
      { name: "Aspen / Vail, CO (ASE, EGE)", slug: "aspen-vail-ase", desc: isES ? "Traslados a resorts de esquí y retiros de montaña." : "Private jet pickup, ski resort transfers, luxury mountain retreat transportation." },
      { name: "Denver, CO (DEN, APA, BJC)", slug: "denver-den", desc: isES ? "Traslados al aeropuerto y conexiones a resorts de esquí." : "Airport transfers, FBO service at Centennial, ski resort connections." },
      { name: "Honolulu, HI (HNL)", slug: "honolulu-hnl", desc: isES ? "Servicio aeropuerto, traslados a resorts y tours por isla." : "Airport service, resort transfers, island tours and hourly chauffeur." },
      { name: "Jackson Hole, WY (JAC)", slug: "jackson-hole-jac", desc: isES ? "Aviación privada, traslados a resorts de esquí y ranchos." : "Private aviation pickup, ski resort transfers, ranch and estate transportation." },
      { name: "Las Vegas, NV (LAS, VGT, HND)", slug: "las-vegas-las", desc: isES ? "Traslados al aeropuerto, servicio FBO, eventos y entretenimiento 24/7." : "Airport and FBO transfers, convention service, 24/7 entertainment and event travel." },
      { name: "Long Beach, CA (LGB)", slug: "long-beach-lgb", desc: isES ? "Traslados al aeropuerto, servicio al puerto de cruceros y área de Los Ángeles." : "Airport transfers, cruise port service, Los Angeles area transportation." },
      { name: "Los Angeles, CA (LAX, VNY, BUR)", slug: "los-angeles-lax", desc: isES ? "Servicio ejecutivo para Hollywood y Beverly Hills." : "Airport service, FBO at Van Nuys, studio and entertainment industry travel." },
      { name: "Oakland, CA (OAK)", slug: "oakland-oak", desc: isES ? "Traslados al aeropuerto y servicio corporativo en el East Bay." : "Airport transfers, East Bay corporate service, Bay Area coverage." },
      { name: "Orange County, CA (SNA, JWA)", slug: "orange-county-sna", desc: isES ? "Traslados John Wayne, resorts de playa, Newport y Laguna." : "John Wayne Airport transfers, beach resort service, Newport and Laguna travel." },
      { name: "Palm Springs, CA (PSP, TRM)", slug: "palm-springs-psp", desc: isES ? "Servicio aeropuerto, traslados a golf y retiros en el desierto." : "Airport service, golf resort transfers, desert retreat transportation." },
      { name: "Phoenix / Scottsdale, AZ (PHX, SDL)", slug: "phoenix-phx", desc: isES ? "Traslados al aeropuerto, FBO en Scottsdale, golf y spas." : "Airport transfers, FBO at Scottsdale, golf resort and spa transportation." },
      { name: "Portland, OR (PDX, HIO)", slug: "portland-pdx", desc: isES ? "Servicio aeropuerto, tours por wine country y viajes corporativos." : "Airport service, wine country tours, corporate and leisure travel." },
      { name: "Sacramento, CA (SMF)", slug: "sacramento-smf", desc: isES ? "Traslados al aeropuerto, tours Napa Valley y servicio corporativo." : "Airport transfers, Napa Valley wine tours, state capital corporate service." },
      { name: "Salt Lake City, UT (SLC)", slug: "salt-lake-city-slc", desc: isES ? "Servicio aeropuerto, traslados a resorts de esquí y eventos." : "Airport service, ski resort transfers, corporate and event transportation." },
      { name: "San Diego, CA (SAN, CRQ, MYF)", slug: "san-diego-san", desc: isES ? "Traslados al aeropuerto, resorts de playa y viajes corporativos." : "Airport transfers, beach resort service, corporate and leisure travel." },
      { name: "San Francisco Bay Area (SFO, SJC, OAK)", slug: "san-francisco-sfo", desc: isES ? "Servicio aeropuerto, tours Napa Valley y viajes corporativos en Silicon Valley." : "Airport service, Napa Valley wine tours, Silicon Valley corporate travel." },
      { name: "Seattle, WA (SEA, BFI)", slug: "seattle-seatac-airport", desc: isES ? "Traslados al aeropuerto Sea-Tac y puertos de crucero Pier 66/91." : "Sea-Tac and Boeing Field transfers, Alaska Pier 66/91 cruise port transfer service, tech campus transportation." },
    ],
  },
  {
    region: isES ? "Estados Unidos - Centro" : "Central United States",
    cities: [
      { name: "Atlanta, GA (ATL, PDK)", slug: "atlanta-atl", desc: isES ? "Traslados Hartsfield-Jackson, FBO en DeKalb-Peachtree y viajes corporativos." : "Hartsfield-Jackson transfers, FBO pickup at DeKalb-Peachtree, corporate travel." },
      { name: "Austin, TX (AUS)", slug: "austin-aus", desc: isES ? "Traslados al aeropuerto, campus tecnológicos y eventos SXSW." : "Airport transfers, tech campus pickups, SXSW and event transportation." },
      { name: "Chicago, IL (ORD, MDW, DPA)", slug: "chicago-ord", desc: isES ? "Servicio O'Hare y Midway, FBO en DuPage y servicio corporativo." : "O'Hare and Midway transfers, FBO service at DuPage, corporate and hourly service." },
      { name: "Cincinnati, OH (CVG)", slug: "cincinnati-cvg", desc: isES ? "Traslados al aeropuerto y viajes de negocios en el Midwest." : "Airport transfers, corporate headquarters visits, Midwest business travel." },
      { name: "Cleveland, OH (CLE)", slug: "cleveland-cle", desc: isES ? "Servicio aeropuerto y transporte médico en Cleveland Clinic." : "Airport service, Cleveland Clinic medical transportation, corporate travel." },
      { name: "Columbus, OH (CMH)", slug: "columbus-cmh", desc: isES ? "Traslados al aeropuerto, eventos Ohio State y convenciones." : "Airport transfers, Ohio State events, corporate and convention service." },
      { name: "Dallas / Fort Worth, TX (DFW, DAL, ADS)", slug: "dallas-dfw", desc: isES ? "Traslados al aeropuerto, FBO en Addison y roadshows corporativos." : "Airport transfers, FBO pickup at Addison, corporate roadshows and meetings." },
      { name: "Detroit, MI (DTW, PTK)", slug: "detroit-dtw", desc: isES ? "Servicio aeropuerto, FBO en Oakland County e industria automotriz." : "Airport service, FBO at Oakland County, automotive industry travel." },
      { name: "Houston, TX (IAH, HOU, SGR)", slug: "houston-iah", desc: isES ? "Traslados al aeropuerto, transporte médico y FBO en Sugar Land." : "Airport transfers, medical center transportation, FBO at Sugar Land." },
      { name: "Indianapolis, IN (IND)", slug: "indianapolis-ind", desc: isES ? "Servicio aeropuerto, convenciones e Indianapolis 500." : "Airport service, convention transportation, Indianapolis 500 and event travel." },
      { name: "Milwaukee, WI (MKE)", slug: "milwaukee-mke", desc: isES ? "Traslados al aeropuerto, reuniones corporativas y eventos." : "Airport transfers, corporate meetings, event transportation." },
      { name: "Minneapolis, MN (MSP, FCM)", slug: "minneapolis-msp", desc: isES ? "Servicio aeropuerto, FBO en Flying Cloud y sedes corporativas." : "Airport service, FBO at Flying Cloud, corporate headquarters travel." },
      { name: "Nashville, TN (BNA, JWN)", slug: "nashville-bna", desc: isES ? "Traslados al aeropuerto, eventos musicales y bodas." : "Airport transfers, music industry events, wedding and celebration transportation." },
      { name: "New Orleans, LA (MSY, NEW)", slug: "new-orleans-msy", desc: isES ? "Servicio aeropuerto, traslados a puerto de cruceros y French Quarter." : "Airport service, cruise port transfers, French Quarter hotel pickups." },
      { name: "San Antonio, TX (SAT)", slug: "san-antonio-sat", desc: isES ? "Traslados al aeropuerto, centro de convenciones y viajes corporativos." : "Airport transfers, convention center service, leisure and corporate travel." },
      { name: "St. Louis, MO (STL, SUS)", slug: "st-louis-stl", desc: isES ? "Servicio aeropuerto, FBO en Spirit of St. Louis y transporte corporativo." : "Airport service, FBO at Spirit of St. Louis, corporate transportation." },
    ],
  },
  {
    region: isES ? "Estados Unidos - Este" : "Eastern United States",
    cities: [
      { name: "Boston, MA (BOS, BED)", slug: "boston-bos", desc: isES ? "Traslados Logan, jet privado en Hanscom Field, universidades y hospitales." : "Logan Airport transfers, private jet pickup at Hanscom Field, university and hospital visits." },
      { name: "Charleston, SC (CHS)", slug: "charleston-chs", desc: isES ? "Traslados a hoteles históricos, puerto de cruceros y viajes corporativos." : "Historic district hotel transfers, cruise port service, corporate and leisure travel." },
      { name: "Charlotte, NC (CLT)", slug: "charlotte-clt", desc: isES ? "Traslados al aeropuerto, reuniones corporativas y eventos deportivos." : "Airport transfers, corporate meetings, sporting event transportation." },
      { name: "Jacksonville, FL (JAX)", slug: "jacksonville-jax", desc: isES ? "Traslados al aeropuerto y puerto de cruceros, resorts de golf." : "Airport and cruise port transfers, golf resort transportation, military family travel." },
      { name: "Miami / South Florida (MIA, FLL, PBI, OPF)", slug: "miami-mia", desc: isES ? "Traslados al puerto de cruceros, aeropuertos, FBO Opa-locka y Palm Beach." : "Cruise port transfers, airport service, FBO pickup at Opa-locka, Palm Beach estates." },
      { name: "Naples / Ft. Myers, FL (RSW, APF)", slug: "naples-rsw", desc: isES ? "Traslados a resorts y golf, aviación privada y viajes de temporada." : "Resort and golf club transfers, private aviation pickup, seasonal luxury travel." },
      { name: "New York Metro (JFK, LGA, EWR, TEB, HPN)", slug: "new-york-black-car-service", desc: isES ? "Servicio en pista en Teterboro, viajes corporativos en Westchester y traslados Manhattan." : "FBO tarmac service at Teterboro, Westchester corporate travel, Manhattan transfers." },
      { name: "Orlando, FL (MCO, SFB, ORL)", slug: "orlando-mco", desc: isES ? "Traslados familiares, centro de convenciones y parques temáticos." : "Family vacation transfers, convention center service, theme park and resort transportation." },
      { name: "Philadelphia, PA (PHL, PNE)", slug: "philadelphia-phl", desc: isES ? "Traslados al aeropuerto, viajes corporativos y aviación privada." : "Airport transfers, corporate travel, private aviation at Northeast Philadelphia." },
      { name: "Pittsburgh, PA (PIT)", slug: "pittsburgh-pit", desc: isES ? "Servicio aeropuerto, reuniones corporativas y transporte médico." : "Airport service, corporate meetings, healthcare facility transportation." },
      { name: "Raleigh-Durham, NC (RDU)", slug: "raleigh-rdu", desc: isES ? "Viajes corporativos en Research Triangle y centros médicos." : "Research Triangle corporate travel, airport transfers, medical center visits." },
      { name: "Savannah, GA (SAV)", slug: "savannah-sav", desc: isES ? "Tours históricos, traslados al aeropuerto y eventos especiales." : "Historic district tours, airport transfers, wedding and event transportation." },
      { name: "Tampa, FL (TPA, PIE)", slug: "tampa-tpa", desc: isES ? "Traslados al puerto de cruceros, aeropuerto y viajes corporativos." : "Cruise port transfers, airport service, corporate and leisure travel." },
      { name: "Washington, DC (IAD, DCA, JYO)", slug: "washington-dc-iad", desc: isES ? "Viajes diplomáticos y gubernamentales, aeropuertos Dulles y Reagan." : "Government and diplomatic travel, airport transfers, FBO service at Leesburg." },
    ],
  },
  {
    region: "Canada",
    note: isES
      ? "Todos los viajes a Canadá requieren mínimo 8 horas por posibles demoras fronterizas."
      : "All Canada trips require 8-hour minimum due to potential border/customs delays.",
    cities: [
      { name: "Toronto, ON (YYZ, YTZ)", slug: "toronto-yyz", desc: isES ? "Traslados Pearson, servicio Billy Bishop y viajes corporativos transfronterizos." : "Pearson Airport transfers, Billy Bishop downtown service, cross-border corporate travel." },
      { name: "Vancouver, BC (YVR)", slug: "vancouver-yvr", desc: isES ? "Puerto Canada Place, traslados a cruceros de Alaska y experiencia fronteriza US-Canadá." : "Airport service, Alaska cruise port transfers, US-Canada border expertise." },
    ],
  },
  {
    region: "Costa Rica",
    cities: [
      { name: "Liberia, CR (LIR)", slug: "liberia-lir", desc: isES ? "Traslados a resorts de playa en la costa del Pacífico y eco-lodges." : "Pacific coast resort service & eco-lodge transportation." },
      { name: "San José, CR (SJO)", slug: "san-jose-sjo", desc: isES ? "Aeropuerto capitalino, traslados de golf, negocios y eventos especiales." : "Capital city airport, golf transfers, business travel & special events." },
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
                    href={city.slug ? `/${lng}/service-area/${city.slug}` : "#"}
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