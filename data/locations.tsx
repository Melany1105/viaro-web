import type { FAMapKey } from "./Fa";
import type { TestiMapKey } from "./Tetimonials";

type LocationSection = {
  h3: string;
  content?: string[];
  quote?: string;
  image?: { src: string; alt: string };
  items?: { label: string; desc: string }[];
  list?: string[];
  portList?: { port: string; terminals: string; note: string }[];
  cta?: string;
};

type LocationItem = {
  id: string;
  FA: FAMapKey;
  Testi: TestiMapKey;
  hero: {
    image: { src: string; alt: string };
    h1: string;
    h2: string;
    description: string;
    cta: { book: string; phone: string };
  };
  trustBar: string[];
  bodyContent: {
    h2: string;
    h3: string;
    content: string[];
    destinations: {
      name: string;
      time: string;
      description: string;
      image?: string;
    }[];
  };
  extraContent?: LocationSection[];
  pricing: {
    h2: string;
    vehicles: {
      type: string;
      price: number;
      passengers: number;
      bags: number;
      extras: string[];
      badge?: string;
    }[];
    note: string;
    cta: string;
  };
};

// ─────────────────────────────────────────────────────────────────────────────
// ENGLISH
// ─────────────────────────────────────────────────────────────────────────────
export const locationEn: LocationItem[] = [
  // ── SEATTLE SEA-TAC ───────────────────────────────────────────────────────
  {
    id: "seattle-seatac-airport",
    FA: "LocationsSeaTacFa",
    Testi: "servicesAirportTestimonials",
    hero: {
      image: {
        src: "/images/SeaTac.png",
        alt: "Viaro black car service SUV at Seattle-Tacoma International Airport with Mount Rainier visible in the distance.",
      },
      h1: "Seattle-Tacoma Airport Car Service (SEA)",
      h2: "Black Car & Chauffeur Service to Seattle, Bellevue, Tacoma & All Puget Sound",
      description:
        "Skip the taxi line. Forget rideshare surge pricing or shuttle services. Get picked up at the third-floor purple elevator—the fastest way out of SEA-TAC. We track your flight in real time. Land early? We are there. Delayed? We wait at no extra charge. Your chauffeur meets you, helps with bags, and gets you home or to your hotel fast. Flat rates from $129. No surge. No surprises. Save up to 12% when you book 30 days ahead.",
      cta: { book: "Book SEA-TAC Car Service", phone: "(206) 672-8281" },
    },
    trustBar: [
      "Flight Tracking",
      "Save 12% Early",
      "Pro Chauffeurs",
      "Luxury Fleet",
      "24/7 Booking",
    ],
    bodyContent: {
      h2: "About Seattle-Tacoma International Airport",
      h3: "Inside SEA-TAC: What to Know Before You Land",
      content: [
        "Seattle-Tacoma International Airport (SEA) is the eighth busiest airport in the United States. Over 51 million passengers pass through each year, making it the main gateway to the Pacific Northwest. The airport sits 14 miles south of downtown Seattle, just off Interstate 5 near the cities of SeaTac and Tukwila.",
        "SEA has one main terminal with four large open spaces, known as concourses. Concourse A is home to Alaska Airlines, the airport's largest carrier. Concourses B, C, and D serve Delta, United, American, Southwest, and international flights.",
        "SEA has one terminal, so it is easier to navigate than large hubs like LAX or JFK. Still, heavy traffic can congest ground transportation during busy peak times.",
        "Before your flight, you might grab coffee at one of the many Starbucks spots in the terminal. It fits Seattle, the coffee chain's hometown. For a sit-down meal, Floret by Café Flora offers Pacific Northwest cuisine near the C gates. Bambuza Vietnam Kitchen serves pho and banh mi in the Central Terminal.",
        "The airport recently completed a major expansion at the North Satellite, adding 12 new gates.",
        "After you collect your bags at the Central Terminal baggage claim, you have two choices. You can fight the crowds at curbside pickup or take the local shortcut. Smart travelers head to the third-floor parking garage and exit by the purple elevator markers. Your Viaro chauffeur waits right there—no crowds, no confusion, no waiting in Seattle rain.",
      ],
      destinations: [
        {
          name: "Downtown Seattle",
          time: "20 min",
          description: "Pike Place Market, Amazon HQ, convention center, waterfront hotels.",
          image: "/images/Seattle.png",
        },
        {
          name: "Bellevue",
          time: "25 min",
          description: "Microsoft campus, T-Mobile HQ, Bellevue Square, tech corridor.",
          image: "/images/Bellevue.png",
        },
        {
          name: "Redmond",
          time: "35 min",
          description: "Microsoft main campus, Nintendo of America, tech offices.",
          image: "/images/Redmond.png",
        },
        {
          name: "Tacoma",
          time: "30 min",
          description: "Port of Tacoma, downtown Tacoma, Joint Base Lewis-McChord.",
          image: "/images/Tacoma.png",
        },
        {
          name: "Cruise Terminals",
          time: "25 min",
          description: "Pier 66 and Pier 91 (Smith Cove) for Alaska cruise departures.",
          image: "/images/CruisePier.png",
        },
      ],
    },
    extraContent: [
      {
        h3: "Navigating Seattle Traffic from SEA",
        content: [
          "Seattle traffic ranks among the worst in America. During afternoon rush (3–7 PM), what should be a 20-minute drive to downtown can take over an hour on I-5.",
          "Our drivers know other routes. They take I-405 through Renton when gridlock slows I-5. They use SR-99 for West Seattle. They use surface streets through Georgetown when accidents block the freeway.",
          "We monitor real-time traffic from WSDOT and adjust routes during your trip. If the 520 bridge backs up, we take I-90. If there is an accident near Lumen Field, we know before you hit the merge. This local knowledge saves 20–30 minutes on busy days.",
        ],
        items: [
          { label: "I-405 via Renton", desc: "Best alternate when I-5 is gridlocked southbound. Adds 3 miles but saves up to 25 minutes during peak hours." },
          { label: "SR-99 Tunnel", desc: "Fastest route to South Lake Union, Belltown, and waterfront hotels. Avoids the I-5 express lanes entirely." },
          { label: "Georgetown Surface Streets", desc: "When accidents block the I-5 on-ramp near Lumen Field, our drivers cut through Georgetown neighborhoods and avoid the merge." },
        ],
      },
      {
        h3: "Cruise Transfers: SEA-TAC to Pier 66 & Pier 91",
        content: [
          "Seattle is the departure point for Alaska cruises on Norwegian, Princess, Holland America, and Celebrity lines. We provide direct transfers from SEA-TAC to the Smith Cove Cruise Terminal (Pier 91) and Bell Street Cruise Terminal (Pier 66). Your driver handles all luggage and drops you right at the terminal entrance—no shuttles, no parking hassles.",
          "Check your cruise line's terminal at the Port of Seattle cruise page. We track your incoming flight, so even if you land late, we will get you to the ship on time.",
        ],
        cta: "Book SEA-TAC to Cruise Terminal →",
      },
    ],
    pricing: {
      h2: "SEA-TAC Airport Car Service Rates",
      vehicles: [
        {
          type: "Sedan",
          price: 129,
          passengers: 3,
          bags: 2,
          extras: ["Professional chauffeur", "Flight tracking included", "Purple elevator pickup"],
        },
        {
          type: "SUV",
          price: 159,
          passengers: 6,
          bags: 5,
          extras: ["Extra luggage space", "Pre-assigned chauffeur", "Flight tracking included"],
          badge: "Most Popular",
        },
        {
          type: "Meet & Greet",
          price: 25,
          passengers: 0,
          bags: 0,
          extras: ["Driver inside terminal", "Name sign at baggage claim", "Add-on to any vehicle"],
        },
      ],
      note: "Rates shown are for trips up to 18 miles. Hourly service: $85/hour (sedan) or $115/hour (SUV). Book 30 days ahead and save up to 12%. Your rate locks at booking and never increases.",
      cta: "Get Exact Quote for Your Trip →",
    },
  },

  // ── NEW YORK CITY ─────────────────────────────────────────────────────────
  {
    id: "new-york-black-car-service",
    FA: "locationNewYorkFA",
    Testi: "locationNewYork",
    hero: {
      image: {
        src: "/images/NewYork.png",
        alt: "Viaro black car service in New York City with Manhattan skyline and luxury sedan approaching Midtown.",
      },
      h1: "New York City Black Car Service",
      h2: "JFK • LaGuardia • Newark • Teterboro • Westchester — Transparent Rates, No Surge, 24/7",
      description:
        "New York does not wait. Neither should you. In a city where every minute counts, Viaro delivers executive black car service that keeps pace with the fastest city on earth. Whether you are landing at JFK after a red-eye, stepping off a private jet at Teterboro, catching a flight out of Newark, or rushing through LaGuardia—we are already there. Flat rates. No surge pricing. Real-time flight tracking. Professional chauffeurs who know every bridge, tunnel, and shortcut across all five boroughs and into New Jersey.",
      cta: { book: "Book Your NYC Black Car", phone: "(206) 672-8281" },
    },
    trustBar: [
      "60,000+ Trips",
      "99.8% On-Time",
      "5 Airports",
      "Vetted Chauffeurs",
      "Locked Rates",
      "24/7 Support",
    ],
    bodyContent: {
      h2: "Airport-by-Airport: Insider Tips from Local Experts",
      h3: "JFK International Airport (JFK)",
      content: [
        "Flying into New York means navigating one of the most complex airport systems in the world. Five major airports. Dozens of terminals. Legendary traffic. Here is how Viaro helps you beat the chaos at each one.",
        "JFK handles 60 million passengers a year across six terminals. The trick? Know which terminal your airline uses. Viaro tracks your flight in real-time, so we are waiting at the correct terminal before you even clear customs.",
        "Insider tip: International arrivals at Terminal 1 and Terminal 4 can take 45–90 minutes to clear customs. We monitor your landing time and adjust pickup accordingly—no standing at arrivals wondering where your driver is.",
      ],
      destinations: [
        {
          name: "Wall Street",
          time: "35 min",
          description: "Financial District, NYSE, major banks and law firms.",
          image: "/images/WallStreet.png",
        },
        {
          name: "Midtown Manhattan",
          time: "40 min",
          description: "Park Avenue corridor, Times Square, Rockefeller Center, luxury hotels.",
          image: "/images/Midtown.png",
        },
        {
          name: "The Hamptons",
          time: "90 min",
          description: "Southampton, East Hampton, Montauk — flat rates available.",
          image: "/images/Hamptons.png",
        },
        {
          name: "Teterboro (TEB)",
          time: "45 min",
          description: "FBO tarmac pickup at Signature Flight Support and Atlantic Aviation.",
          image: "/images/Teterboro.png",
        },
        {
          name: "Westchester (HPN)",
          time: "50 min",
          description: "IBM HQ, PepsiCo, Greenwich CT, hedge fund corridor in Stamford.",
          image: "/images/Westchester.png",
        },
      ],
    },
    extraContent: [
      {
        h3: "LaGuardia Airport (LGA)",
        content: [
          "LaGuardia is the closest airport to Manhattan—just 8 miles from Midtown. But do not let the distance fool you. The Grand Central Parkway and BQE can turn a 20-minute ride into an hour during rush hour.",
          "Insider tip: The new Terminal B is connected by a pedestrian bridge to the parking garage—but rideshare pickup is a maze. Viaro chauffeurs meet you at the commercial vehicle lane on the arrivals level. No walking to a distant lot.",
          "Popular destinations from LGA: Times Square, Madison Square Garden, Javits Convention Center.",
        ],
      },
      {
        h3: "Newark Liberty International Airport (EWR)",
        content: [
          "Newark is the United Airlines hub and often the best option for travelers heading to New Jersey, Lower Manhattan, or anywhere along the PATH train corridor. It is also frequently less crowded than JFK—and sometimes cheaper to fly into.",
          "Insider tip: Terminal C is United's domain—massive but well-organized. Terminals A and B serve everyone else. Viaro tracks your terminal and meets you at the correct arrivals curb.",
          "Popular destinations from EWR: Jersey City, Hoboken, Lower Manhattan via Holland Tunnel, Prudential Center, Princeton, and Philadelphia connections.",
        ],
      },
      {
        h3: "Teterboro Airport (TEB) — Private Aviation",
        content: [
          "Teterboro is where Wall Street flies. This FBO-only airport in New Jersey handles more private jet traffic than almost anywhere in the country. If you are landing here, you expect a car waiting on the tarmac—not in a parking lot.",
          "Insider tip: Viaro coordinates directly with FBO operations at Signature Flight Support and Atlantic Aviation. Where security allows, we meet you at the jet stairs. Total time on the ground: under 2 minutes.",
          "Popular destinations from TEB: Financial District, Midtown, Greenwich CT, and helicopter connections to the Hamptons.",
        ],
        cta: "Book Your Airport Transfer →",
      },
      {
        h3: "Westchester County Airport (HPN)",
        content: [
          "HPN serves Westchester's corporate executives and Connecticut's Gold Coast. It handles both commercial flights and private aviation. Smaller crowds. Faster security. And a straight shot down I-95 or the Hutchinson River Parkway to Manhattan.",
          "Insider tip: If you live in Westchester, Greenwich, or Stamford—skip the chaos of JFK and LaGuardia. HPN is your home airport. Viaro provides transfers to IBM headquarters, PepsiCo, and the hedge fund corridor in Stamford.",
        ],
      },
      {
        h3: "Where New Yorkers Go with Viaro",
        content: [
          "Manhattan Hotels: The Plaza, The St. Regis, Four Seasons, The Peninsula.",
          "Business Districts: Wall Street/Financial District, Midtown (Park Avenue corridor), Hudson Yards, World Trade Center, Jersey City waterfront.",
          "Events & Entertainment: Madison Square Garden, Lincoln Center, Broadway theaters, Yankee Stadium, MetLife Stadium.",
          "Beyond Manhattan: The Hamptons, Greenwich CT, Princeton NJ, Atlantic City, and cross-Hudson connections to Hoboken and Jersey City.",
        ],
        cta: "Explore NYC Services →",
      },
    ],
    pricing: {
      h2: "NYC Black Car Service Rates",
      vehicles: [
        {
          type: "Sedan",
          price: 95,
          passengers: 3,
          bags: 2,
          extras: ["Professional chauffeur", "Flight tracking included", "Flat rate — no surge"],
        },
        {
          type: "SUV",
          price: 135,
          passengers: 6,
          bags: 5,
          extras: ["Extra luggage space", "Pre-assigned chauffeur", "Flight tracking included"],
          badge: "Most Popular",
        },
        {
          type: "Sprinter Van",
          price: 299,
          passengers: 13,
          bags: 10,
          extras: ["Group & corporate travel", "Forward-facing captain's chairs", "USB charging"],
        },
      ],
      note: "Flat rates locked at booking. No surge pricing — ever. Contact us for Hamptons, Connecticut, and long-distance quotes.",
      cta: "Get Exact Quote for Your Trip →",
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SPANISH
// ─────────────────────────────────────────────────────────────────────────────
export const locationEs: LocationItem[] = [
  // ── SEATTLE SEA-TAC ───────────────────────────────────────────────────────
  {
    id: "seattle-seatac-airport",
    FA: "LocationsSeaTacFa",
    Testi: "servicesAirportTestimonials",
    hero: {
      image: {
        src: "/images/SeaTac.png",
        alt: "SUV de servicio de auto Viaro en el Aeropuerto Internacional Seattle-Tacoma con el Monte Rainier al fondo.",
      },
      h1: "Servicio de Auto al Aeropuerto Seattle-Tacoma (SEA)",
      h2: "Auto Negro y Servicio de Chofer a Seattle, Bellevue, Tacoma y todo Puget Sound",
      description:
        "Olvídate de las filas de taxis y los precios dinámicos del rideshare o shuttles. Recógete en el ascensor morado del tercer piso—la salida más rápida de SEA-TAC. Rastreamos tu vuelo en tiempo real. ¿Aterrizas antes? Ya estamos. ¿Retraso? Esperamos sin cargo extra. Tu chofer te recibe, te ayuda con el equipaje y te lleva a casa o a tu hotel rápido. Tarifas fijas desde $129. Sin precios dinámicos. Sin sorpresas. Ahorra hasta 12% reservando 30 días antes.",
      cta: { book: "Reservar Servicio en SEA-TAC", phone: "(206) 672-8281" },
    },
    trustBar: [
      "Rastreo de Vuelo",
      "Ahorra 12% Anticipado",
      "Choferes Pro",
      "Flota de Lujo",
      "Reservas 24/7",
    ],
    bodyContent: {
      h2: "Sobre el Aeropuerto Internacional Seattle-Tacoma",
      h3: "Dentro de SEA-TAC: Lo que Debes Saber Antes de Aterrizar",
      content: [
        "El Aeropuerto Internacional Seattle-Tacoma (SEA) es el octavo aeropuerto más concurrido de Estados Unidos. Más de 51 millones de pasajeros lo transitan cada año, convirtiéndolo en la principal puerta de entrada al Noroeste del Pacífico. El aeropuerto está a 14 millas al sur del centro de Seattle, justo en la Interestatal 5, cerca de las ciudades de SeaTac y Tukwila.",
        "SEA tiene una terminal principal con cuatro grandes espacios abiertos, conocidos como concursos. El Concurso A es el hogar de Alaska Airlines, la aerolínea más grande del aeropuerto. Los concursos B, C y D atienden a Delta, United, American, Southwest y vuelos internacionales.",
        "SEA tiene una sola terminal, por lo que es más fácil de navegar que grandes aeropuertos como LAX o JFK. Sin embargo, el tráfico intenso puede congestionar el transporte terrestre en horas pico.",
        "Antes de tu vuelo, puedes tomar café en uno de los muchos Starbucks del terminal. Tiene sentido en Seattle, ciudad natal de la cadena. Para una comida completa, Floret by Café Flora ofrece cocina del Noroeste del Pacífico cerca de las puertas C. Bambuza Vietnam Kitchen sirve pho y banh mi en el Terminal Central.",
        "El aeropuerto completó recientemente una gran expansión en el Satélite Norte, añadiendo 12 nuevas puertas.",
        "Después de recoger tu equipaje en la sala de recogida del Terminal Central, tienes dos opciones. Puedes luchar con las multitudes en la acera o tomar el atajo local. Los viajeros inteligentes se dirigen al garaje del tercer piso y salen por los marcadores del ascensor morado. Tu chofer de Viaro te espera ahí mismo—sin aglomeraciones, sin confusión, sin esperar bajo la lluvia de Seattle.",
      ],
      destinations: [
        { name: "Centro de Seattle", time: "20 min", description: "Pike Place Market, sede de Amazon, centro de convenciones, hoteles frente al agua.", image: "/images/Seattle.png" },
        { name: "Bellevue", time: "25 min", description: "Campus de Microsoft, sede de T-Mobile, Bellevue Square, corredor tecnológico.", image: "/images/Bellevue.png" },
        { name: "Redmond", time: "35 min", description: "Campus principal de Microsoft, Nintendo of America, oficinas tecnológicas.", image: "/images/Redmond.png" },
        { name: "Tacoma", time: "30 min", description: "Puerto de Tacoma, centro de Tacoma, Base Conjunta Lewis-McChord.", image: "/images/Tacoma.png" },
        { name: "Terminales de Cruceros", time: "25 min", description: "Muelle 66 y Muelle 91 (Smith Cove) para salidas de cruceros a Alaska.", image: "/images/CruisePier.png" },
      ],
    },
    extraContent: [
      {
        h3: "Navegando el Tráfico de Seattle desde SEA",
        content: [
          "El tráfico de Seattle está entre los peores de América. En las horas pico de la tarde (3–7 PM), lo que debería ser un viaje de 20 minutos al centro puede tomar más de una hora por la I-5.",
          "Nuestros conductores conocen otras rutas. Toman la I-405 por Renton cuando la I-5 está congestionada. Usan la SR-99 para West Seattle. Toman calles secundarias por Georgetown cuando hay accidentes en la autopista.",
          "Monitoreamos el tráfico en tiempo real del WSDOT y ajustamos las rutas durante tu viaje. Si el puente 520 se tapa, tomamos la I-90. Si hay un accidente cerca de Lumen Field, lo sabemos antes de llegar. Este conocimiento local ahorra entre 20 y 30 minutos en días de mucho tráfico.",
        ],
        items: [
          { label: "I-405 vía Renton", desc: "Mejor alternativa cuando la I-5 está congestionada al sur. Agrega 5 km pero ahorra hasta 25 minutos en horas pico." },
          { label: "Túnel SR-99", desc: "Ruta más rápida a South Lake Union, Belltown y hoteles frente al agua. Evita los carriles expresos de la I-5." },
          { label: "Calles de Georgetown", desc: "Cuando hay accidentes cerca de Lumen Field, nuestros conductores pasan por Georgetown y evitan la fusión." },
        ],
      },
      {
        h3: "Traslados a Cruceros: SEA-TAC al Muelle 66 y Muelle 91",
        content: [
          "Seattle es el punto de partida para los cruceros a Alaska de Norwegian, Princess, Holland America y Celebrity. Ofrecemos traslados directos desde SEA-TAC a la Terminal de Cruceros Smith Cove (Muelle 91) y la Terminal Bell Street (Muelle 66). Tu conductor maneja todo el equipaje y te deja justo en la entrada de la terminal—sin shuttles, sin problemas de estacionamiento.",
          "Consulta la terminal de tu línea de cruceros en la página de cruceros del Puerto de Seattle. Rastreamos tu vuelo entrante, así que aunque llegues tarde, te llevaremos al barco a tiempo.",
        ],
        cta: "Reservar Traslado SEA-TAC al Puerto →",
      },
    ],
    pricing: {
      h2: "Tarifas del Servicio de Auto en SEA-TAC",
      vehicles: [
        { type: "Sedán", price: 129, passengers: 3, bags: 2, extras: ["Chofer profesional", "Rastreo de vuelo incluido", "Recogida en ascensor morado"] },
        { type: "SUV", price: 159, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Chofer preasignado", "Rastreo de vuelo incluido"], badge: "Más Popular" },
        { type: "Bienvenida en Terminal", price: 25, passengers: 0, bags: 0, extras: ["Conductor dentro de la terminal", "Cartel con tu nombre en recogida de equipaje", "Complemento para cualquier vehículo"] },
      ],
      note: "Tarifas para viajes de hasta 18 millas. Servicio por horas: $85/hora (sedán) o $115/hora (SUV). Reserva 30 días antes y ahorra hasta 12%. Tu tarifa queda fija al reservar y nunca aumenta.",
      cta: "Obtener Cotización Exacta para tu Viaje →",
    },
  },

  // ── NEW YORK CITY ─────────────────────────────────────────────────────────
  {
    id: "new-york-black-car-service",
    FA: "locationNewYorkFA",
    Testi: "locationNewYork",
    hero: {
      image: {
        src: "/images/NewYork.png",
        alt: "Servicio de auto negro Viaro en Nueva York con el skyline de Manhattan y un sedán de lujo acercándose a Midtown.",
      },
      h1: "Servicio de Auto Negro en Nueva York",
      h2: "JFK • LaGuardia • Newark • Teterboro • Westchester — Tarifas Transparentes, Sin Precios Dinámicos, 24/7",
      description:
        "Nueva York no espera. Tú tampoco deberías. En una ciudad donde cada minuto cuenta, Viaro ofrece servicio de auto ejecutivo que sigue el ritmo de la ciudad más rápida del mundo. Ya sea que aterrices en JFK tras un vuelo nocturno, bajes de un jet privado en Teterboro, tomes un vuelo desde Newark o corras por LaGuardia—ya estamos ahí. Tarifas fijas. Sin precios dinámicos. Rastreo de vuelo en tiempo real. Choferes profesionales que conocen cada puente, túnel y atajo en los cinco condados y Nueva Jersey.",
      cta: { book: "Reservar Auto en NYC", phone: "(206) 672-8281" },
    },
    trustBar: [
      "60,000+ Viajes",
      "99.8% Puntualidad",
      "5 Aeropuertos",
      "Choferes Verificados",
      "Tarifas Fijas",
      "Soporte 24/7",
    ],
    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Tips de Expertos Locales",
      h3: "Aeropuerto Internacional JFK (JFK)",
      content: [
        "Volar a Nueva York significa navegar uno de los sistemas aeroportuarios más complejos del mundo. Cinco aeropuertos principales. Decenas de terminales. Tráfico legendario. Así es como Viaro te ayuda a superar el caos en cada uno.",
        "JFK maneja 60 millones de pasajeros al año en seis terminales. ¿El truco? Saber qué terminal usa tu aerolínea. Viaro rastrea tu vuelo en tiempo real, así que estamos esperando en la terminal correcta antes de que siquiera pases por aduana.",
        "Tip interno: Las llegadas internacionales en Terminal 1 y Terminal 4 pueden tardar entre 45 y 90 minutos en pasar aduana. Monitoreamos tu hora de aterrizaje y ajustamos la recogida—sin quedarte parado preguntándote dónde está tu conductor.",
      ],
      destinations: [
        { name: "Wall Street", time: "35 min", description: "Distrito Financiero, NYSE, grandes bancos y firmas de abogados.", image: "/images/WallStreet.png" },
        { name: "Midtown Manhattan", time: "40 min", description: "Corredor Park Avenue, Times Square, Rockefeller Center, hoteles de lujo.", image: "/images/Midtown.png" },
        { name: "Los Hamptons", time: "90 min", description: "Southampton, East Hampton, Montauk — tarifas fijas disponibles.", image: "/images/Hamptons.png" },
        { name: "Teterboro (TEB)", time: "45 min", description: "Recogida en pista en Signature Flight Support y Atlantic Aviation.", image: "/images/Teterboro.png" },
        { name: "Westchester (HPN)", time: "50 min", description: "Sede IBM, PepsiCo, Greenwich CT, corredor de fondos en Stamford.", image: "/images/Westchester.png" },
      ],
    },
    extraContent: [
      {
        h3: "Aeropuerto LaGuardia (LGA)",
        content: [
          "LaGuardia es el aeropuerto más cercano a Manhattan—solo 8 millas del Midtown. Pero no te dejes engañar por la distancia. La Grand Central Parkway y la BQE pueden convertir un viaje de 20 minutos en una hora durante las horas pico.",
          "Tip interno: La nueva Terminal B está conectada por un puente peatonal al garaje—pero la recogida de rideshare es un laberinto. Los choferes de Viaro te esperan en el carril de vehículos comerciales en el nivel de llegadas. Sin caminar hasta un estacionamiento lejano.",
          "Destinos populares desde LGA: Times Square, Madison Square Garden, Centro de Convenciones Javits.",
        ],
      },
      {
        h3: "Aeropuerto Internacional Newark Liberty (EWR)",
        content: [
          "Newark es el hub de United Airlines y frecuentemente la mejor opción para viajeros que van a Nueva Jersey, el Bajo Manhattan o cualquier punto del corredor del tren PATH. También suele estar menos congestionado que JFK.",
          "Tip interno: La Terminal C es el dominio de United—grande pero bien organizada. Las Terminales A y B sirven a todos los demás. Viaro rastrea tu terminal y te espera en la acera de llegadas correcta.",
          "Destinos populares desde EWR: Jersey City, Hoboken, Bajo Manhattan vía Túnel Holland, Prudential Center, Princeton y conexiones a Filadelfia.",
        ],
      },
      {
        h3: "Aeropuerto Teterboro (TEB) — Aviación Privada",
        content: [
          "Teterboro es donde vuela Wall Street. Este aeropuerto solo para FBO en Nueva Jersey maneja más tráfico de jets privados que casi cualquier otro lugar del país. Si aterrizas aquí, esperas un auto en la pista—no en el estacionamiento.",
          "Tip interno: Viaro coordina directamente con las operaciones FBO en Signature Flight Support y Atlantic Aviation. Donde la seguridad lo permite, te esperamos al pie de la escalerilla. Tiempo en tierra: menos de 2 minutos.",
          "Destinos populares desde TEB: Distrito Financiero, Midtown, Greenwich CT y conexiones en helicóptero a los Hamptons.",
        ],
        cta: "Reservar Tu Traslado al Aeropuerto →",
      },
      {
        h3: "Aeropuerto del Condado de Westchester (HPN)",
        content: [
          "HPN sirve a los ejecutivos corporativos de Westchester y la Costa Dorada de Connecticut. Maneja vuelos comerciales y aviación privada. Menos multitudes. Seguridad más rápida. Y una ruta directa por la I-95 o la Hutchinson River Parkway a Manhattan.",
          "Tip interno: Si vives en Westchester, Greenwich o Stamford—omite el caos de JFK y LaGuardia. HPN es tu aeropuerto local. Viaro ofrece traslados a la sede de IBM, PepsiCo y el corredor de fondos de inversión en Stamford.",
        ],
      },
      {
        h3: "A Dónde Van los Neoyorquinos con Viaro",
        content: [
          "Hoteles en Manhattan: The Plaza, The St. Regis, Four Seasons, The Peninsula.",
          "Distritos de Negocios: Wall Street/Distrito Financiero, Midtown (corredor Park Avenue), Hudson Yards, World Trade Center, frente al agua en Jersey City.",
          "Eventos y Entretenimiento: Madison Square Garden, Lincoln Center, teatros de Broadway, Yankee Stadium, MetLife Stadium.",
          "Más allá de Manhattan: Los Hamptons, Greenwich CT, Princeton NJ, Atlantic City y conexiones trans-Hudson a Hoboken y Jersey City.",
        ],
        cta: "Explorar Servicios en NYC →",
      },
    ],
    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en NYC",
      vehicles: [
        { type: "Sedán", price: 95, passengers: 3, bags: 2, extras: ["Chofer profesional", "Rastreo de vuelo incluido", "Tarifa fija — sin precios dinámicos"] },
        { type: "SUV", price: 135, passengers: 6, bags: 5, extras: ["Espacio extra para equipaje", "Chofer preasignado", "Rastreo de vuelo incluido"], badge: "Más Popular" },
        { type: "Van Sprinter", price: 299, passengers: 13, bags: 10, extras: ["Viajes grupales y corporativos", "Sillas tipo capitán hacia adelante", "Carga USB"] },
      ],
      note: "Tarifas fijas bloqueadas al reservar. Sin precios dinámicos — nunca. Contáctanos para cotizaciones a los Hamptons, Connecticut y larga distancia.",
      cta: "Obtener Cotización Exacta para tu Viaje →",
    },
  },
];