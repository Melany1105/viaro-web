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
  id: string;                      // slug: "seattle-seatac-airport"
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

export const locationEn: LocationItem[] = [
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
        "Skip the taxi line. Forget rideshare surge pricing. Get picked up at the third-floor purple elevator — the fastest way out of SEA-TAC. We track your flight in real time. Land early? We are there. Delayed? We wait at no extra charge. Flat rates from $129. Save up to 12% when you book 30 days ahead.",
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
        "Seattle-Tacoma International Airport (SEA) is the eighth busiest airport in the United States. Over 51 million passengers pass through each year, making it the main gateway to the Pacific Northwest.",
        "SEA has one main terminal with four large concourses. Concourse A is home to Alaska Airlines. Concourses B, C, and D serve Delta, United, American, Southwest, and international flights.",
        "After you collect your bags at the Central Terminal baggage claim, smart travelers head to the third-floor parking garage and exit by the purple elevator markers. Your Viaro chauffeur waits right there — no crowds, no confusion, no waiting in Seattle rain.",
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
          "Our drivers know alternate routes. They take I-405 through Renton when gridlock slows I-5. They use SR-99 for West Seattle and surface streets through Georgetown when accidents block the freeway.",
          "This local knowledge saves 20–30 minutes on busy days.",
        ],
        items: [
          { label: "I-405 via Renton", desc: "Best alternate when I-5 is gridlocked southbound. Adds 3 miles but saves up to 25 minutes during peak hours." },
          { label: "SR-99 Tunnel",     desc: "Fastest route to South Lake Union, Belltown, and waterfront hotels. Avoids the I-5 express lanes entirely." },
          { label: "Georgetown Surface Streets", desc: "When accidents block the I-5 on-ramp near Lumen Field, our drivers cut through Georgetown neighborhoods and avoid the merge." },
        ],
      },
      {
        h3: "Cruise Transfers: SEA-TAC to Pier 66 & Pier 91",
        content: [
          "Seattle is the departure point for Alaska cruises on Norwegian, Princess, Holland America, and Celebrity lines.",
          "We provide direct transfers from SEA-TAC to the Smith Cove Cruise Terminal (Pier 91) and Bell Street Cruise Terminal (Pier 66). Your driver handles all luggage and drops you right at the terminal entrance.",
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
      note: "Rates shown are for trips up to 18 miles. Book 30 days ahead and save up to 12%. Your rate locks at booking.",
      cta: "Get Exact Quote for Your Trip →",
    },
  },
];

export const locationEs: LocationItem[] = [
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
        "Olvídate de las filas de taxis y los precios dinámicos del rideshare. Recógete en el ascensor morado del tercer piso — la salida más rápida de SEA-TAC. Rastreamos tu vuelo en tiempo real. ¿Aterrizas antes? Ya estamos. ¿Retraso? Esperamos sin cargo extra. Tarifas fijas desde $129. Ahorra hasta 12% reservando 30 días antes.",
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
        "El Aeropuerto Internacional Seattle-Tacoma (SEA) es el octavo aeropuerto más concurrido de Estados Unidos. Más de 51 millones de pasajeros lo transitan cada año, convirtiéndolo en la principal puerta de entrada al Noroeste del Pacífico.",
        "SEA tiene una terminal principal con cuatro concursos. El Concurso A es el hogar de Alaska Airlines. Los concursos B, C y D atienden a Delta, United, American, Southwest y vuelos internacionales.",
        "Después de recoger tu equipaje, los viajeros inteligentes se dirigen al garaje del tercer piso y salen por los marcadores del ascensor morado. Tu chofer de Viaro te espera ahí mismo — sin aglomeraciones, sin confusión, sin esperar bajo la lluvia de Seattle.",
      ],
      destinations: [
        {
          name: "Centro de Seattle",
          time: "20 min",
          description: "Pike Place Market, sede de Amazon, centro de convenciones, hoteles frente al agua.",
          image: "/images/Seattle.png",
        },
        {
          name: "Bellevue",
          time: "25 min",
          description: "Campus de Microsoft, sede de T-Mobile, Bellevue Square, corredor tecnológico.",
          image: "/images/Bellevue.png",
        },
        {
          name: "Redmond",
          time: "35 min",
          description: "Campus principal de Microsoft, Nintendo of America, oficinas tecnológicas.",
          image: "/images/Redmond.png",
        },
        {
          name: "Tacoma",
          time: "30 min",
          description: "Puerto de Tacoma, centro de Tacoma, Base Conjunta Lewis-McChord.",
          image: "/images/Tacoma.png",
        },
        {
          name: "Terminales de Cruceros",
          time: "25 min",
          description: "Muelle 66 y Muelle 91 (Smith Cove) para salidas de cruceros a Alaska.",
          image: "/images/CruisePier.png",
        },
      ],
    },
    extraContent: [
      {
        h3: "Navegando el Tráfico de Seattle desde SEA",
        content: [
          "El tráfico de Seattle está entre los peores de América. En las horas pico de la tarde (3–7 PM), lo que debería ser un viaje de 20 minutos al centro puede tomar más de una hora por la I-5.",
          "Nuestros conductores conocen rutas alternativas: la I-405 por Renton, la SR-99 para West Seattle y calles secundarias por Georgetown cuando hay accidentes en la autopista.",
          "Este conocimiento local ahorra entre 20 y 30 minutos en días de mucho tráfico.",
        ],
        items: [
          { label: "I-405 vía Renton",         desc: "Mejor alternativa cuando la I-5 está congestionada. Agrega 5 km pero ahorra hasta 25 minutos en horas pico." },
          { label: "Túnel SR-99",               desc: "Ruta más rápida a South Lake Union, Belltown y hoteles frente al agua. Evita los carriles expresos de la I-5." },
          { label: "Calles de Georgetown",      desc: "Cuando hay accidentes cerca de Lumen Field, nuestros conductores pasan por Georgetown y evitan la fusión." },
        ],
      },
      {
        h3: "Traslados a Cruceros: SEA-TAC al Muelle 66 y Muelle 91",
        content: [
          "Seattle es el punto de partida para los cruceros a Alaska de Norwegian, Princess, Holland America y Celebrity.",
          "Ofrecemos traslados directos desde SEA-TAC a la Terminal de Cruceros Smith Cove (Muelle 91) y la Terminal Bell Street (Muelle 66). Tu conductor maneja todo el equipaje y te deja justo en la entrada de la terminal.",
        ],
        cta: "Reservar Traslado SEA-TAC al Puerto →",
      },
    ],
    pricing: {
      h2: "Tarifas del Servicio de Auto en SEA-TAC",
      vehicles: [
        {
          type: "Sedán",
          price: 129,
          passengers: 3,
          bags: 2,
          extras: ["Chofer profesional", "Rastreo de vuelo incluido", "Recogida en ascensor morado"],
        },
        {
          type: "SUV",
          price: 159,
          passengers: 6,
          bags: 5,
          extras: ["Espacio extra para equipaje", "Chofer preasignado", "Rastreo de vuelo incluido"],
          badge: "Más Popular",
        },
        {
          type: "Bienvenida en Terminal",
          price: 25,
          passengers: 0,
          bags: 0,
          extras: ["Conductor dentro de la terminal", "Cartel con tu nombre en recogida de equipaje", "Complemento para cualquier vehículo"],
        },
      ],
      note: "Tarifas para viajes de hasta 18 millas. Reserva 30 días antes y ahorra hasta 12%. Tu tarifa queda fija al reservar.",
      cta: "Obtener Cotización Exacta para tu Viaje →",
    },
  },
];