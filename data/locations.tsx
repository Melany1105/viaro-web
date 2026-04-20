import React, { ReactNode } from "react";
import type { FAMapKey } from "./Fa";
import type { TestiMapKey } from "./Tetimonials";

const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white border-b border-white/60 hover:border-primary hover:text-primary transition"
  >
    {children}
  </a>
);

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

type LocationSection = {
  h3: string;
  content?: (string | ReactNode)[];
  quote?: string;
  image?: { src: string; alt: string; caption?: string };
  items?: { label: string; time?: string; desc: string }[];
  list?: string[];
  portList?: { port: string; terminals: string; note: string }[];
  cta?: string;
};

type LocationItem = {
  id: string;
  FA: FAMapKey;
  Testi: TestiMapKey;
  hero: {
    image: { src: string; alt: string; caption: string };
    h1: string;
    h2: string;
    description: string;
    cta: { book: string; phone: string };
  };
  trustBar: string[];
  trustBarTitle: string;
  bodyContent: {
    h2: string;
    h3: string;
    content: (string | ReactNode)[];
    image?: { src: string; alt: string; caption: string };
    /* destinations: {
      name: string;
      time: string;
      description: string;
      image?: string;
    }[]; */
  };
  extraContent?: LocationSection[];
  whereSection?: {
  h3?:string;
  h2: string;
  image: { src: string; alt: string; caption: string };
  items?: { label: string; time: string; desc: string }[];
  content: (string | ReactNode)[];
  cta: string;
};
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
  Testi: "locationTestimonials",

  hero: {
    image: {
      src: "/images/SeaTacLocation.png",
      alt: "Viaro black car service SUV at Seattle-Tacoma International Airport with Mount Rainier visible in the distance.",
      caption:
        "Seattle-Tacoma International Airport: The Pacific Northwest's gateway. Viaro provides professional car service to all Puget Sound destinations.",
    },
    h1: "Seattle-Tacoma Airport Car Service (SEA)",
    h2: "SeaTac • Cruise Ports • Boeing Field • Vancouver BC, Gig Harbor, Bellevue, Tacoma & All Puget Sound",
    description:
      "Seattle is home. This is where Viaro started—and where we set the standard. For over 11 years, Viaro has served the Pacific Northwest from our headquarters in Tukwila, just minutes from SeaTac Airport. We know every terminal, every cruise pier, every back road through Bellevue traffic. When Amazon executives need airport transfers, when Alaska cruise passengers need seamless port pickups, when Microsoft teams need ground transportation to Vancouver—they call us. Transparent pricing with rates locked at booking. No rideshare surges when cruise ships dock or tech conferences flood the city. Professional chauffeurs who have driven these routes thousands of times. This is our home turf—and it shows.",
    cta: { book: "Book SEA-TAC Car Service", phone: "(206) 672-8281" },
  },

  trustBarTitle: "Trusted by Puget Sound Travelers",
  trustBar: [
    "60,000+ Trips",
    "99.8% On-Time",
    "Flight Tracking",
    "Seattle HQ 11 Years",
  ],

  bodyContent: {
    h2: "About Seattle Airports & Ports: Insider Tips from Local Experts",
    h3: "The Professional's Guide to Seamless Pickups",
    image: {
      src: "/images/SeaTacTerminal.png",
      alt: "Inside Seattle-Tacoma International Airport Central Terminal with passengers heading to baggage claim.",
      caption:
        "SEA-TAC's Central Terminal handles over 51 million passengers yearly, making fast ground transportation essential.",
    },
    content: [
      <>
        <A href="https://www.portseattle.org/sea-tac">
          Seattle-Tacoma International Airport (SEA)
        </A>{" "}
        is the eighth busiest airport in the United States. Over 51 million
        passengers pass through each year, making it the main gateway to the
        Pacific Northwest. The airport sits 14 miles south of downtown Seattle,
        just off Interstate 5 near the cities of SeaTac and Tukwila.
      </>,
      "SEA has one main terminal with four large open spaces, known as concourses —or courtyards—, so it is easier to navigate than large hubs like LAX or JFK. Concourse A is home to Alaska Airlines, the airport's largest carrier. Concourses B, C, and D serve Delta, United, American, Southwest, and international flights.",
      <>
        Before your flight, you might grab coffee at one of the many Starbucks
        spots in the terminal. It fits Seattle, the coffee chain's hometown. For
        a sit-down meal,{" "}
        <A href="https://florarestaurantgroup.com/restaurant/floret-seatac/">
          Floret by Café Flora
        </A>{" "}
        offers Pacific Northwest cuisine near the C gates.{" "}
        <A href="https://bambuza.com/seatac">Bambuza Vietnam Kitchen</A> serves
        pho and banh mi in the Central Terminal.
      </>,
      "Seattle traffic ranks among the worst in America. During afternoon rush (3–7 PM), what should be a 20-minute drive to downtown can take over an hour on I-5. But don't worry, our drivers know other routes. They take I-405 through Renton when gridlock slows I-5. They use SR-99 for West Seattle. They use surface streets through Georgetown when accidents block the freeway.",
      <>
        We monitor real-time traffic from{" "}
        <A href="https://wsdot.wa.gov/travel/real-time/traffic">WSDOT</A> and
        adjust routes during your trip. If the 520 bridge backs up, we take
        I-90. If there is an accident near{" "}
        <A href="https://www.seahawks.com">
          Lumen Field (home of the Seattle Seahawks)
        </A>
        , we know before you hit the merge. This local knowledge saves 20–30
        minutes on busy days.
      </>,
      "After you collect your bags at the Central Terminal baggage claim, you have two choices: You can fight the crowds at curbside pickup or take the local shortcut. Smart travelers head to the third-floor parking garage and exit by the purple elevator markers. Your Viaro chauffeur waits right there —no crowds, no confusion, no waiting in Seattle rain; only seamless transfers.",
    ],
  },

  extraContent: [
    {
      h3: "Seattle-Tacoma International Airport (SEA)",
      image: {
        src: "/images/SeaTacArrival.png",
        alt: "Viaro chauffeur at SeaTac Airport loading luggage into luxury black car at terminal arrivals.",
        caption:
          "Our headquarters are 8 minutes from SeaTac. We know this airport better than anyone.",
      },
      content: [
        "SeaTac is the 8th busiest airport in the United States—a major hub for Alaska Airlines and Delta, with 50+ million passengers annually. One central terminal, four concourses, and the infamous I-5/I-405 merge that can turn a 20-minute drive into an hour.",
        "Insider tip: International arrivals clear customs on the south end of the terminal—allow 45-90 minutes after landing. Viaro tracks your flight in real-time and adjusts pickup automatically. We meet you at the 3rd floor arrivals drive (commercial vehicles)—not the rideshare lot in the garage.",
        <>
          Popular destinations from SEA:{" "}
          <A href="https://visitseattle.org/">Downtown Seattle</A>, Bellevue,
          Redmond (Microsoft), Amazon HQ, Tacoma, cruise terminals, and the
          Eastside tech corridor.
        </>,
      ],
      cta: "Book SeaTac Transfer →",
    },
    {
      h3: "Cruise Terminal: Pier 66 (Bell Street)",
      image: {
        src: "/images/Pier66Terminal.png",
        alt: "Viaro black Sprinter Van at Seattle cruise terminal Pier 66 with cruise ship visible and Elliott Bay in background.",
        caption:
          "Seamless transfers between SeaTac and Seattle's cruise terminals—the gateway to Alaska.",
      },
      content: [
        "Pier 66 sits on the Downtown Seattle waterfront, steps from Pike Place Market. Norwegian Cruise Line and Oceania Cruises operate from here. The location is convenient for pre-cruise sightseeing, but street parking is limited and drop-off lanes can be chaotic on embarkation days.",
        "Insider tip: Viaro drops you at the terminal entrance, handles luggage with porters, and avoids the parking garage maze. If you are arriving from SeaTac, we time pickups to avoid the morning rush through Downtown.",
        <>
          See our dedicated{" "}
          <a
            href="/en/black-car-service/cruise-port-transfers"
            className="underline text-white/70 hover:text-white transition-colors"
          >
            cruise port transfer service
          </a>{" "}
          for full details on Alaska cruise transportation.
        </>,
      ],
      cta: "Book your Cruise Terminal Transfer →",
    },
    {
      h3: "Cruise Terminal: Pier 91 (Smith Cove)",
      image: {
        src: "/images/Pier91Terminal.png",
        alt: "Luxury black car sedan with Seattle skyline with Space Needle, Bellevue downtown skyline, cruise ships at Pier 91.",
        caption:
          "From SeaTac to cruise ships, Viaro connects you to Puget Sound, helping you reach every destination.",
      },
      content: [
        <>
          Pier 91 is Seattle's primary cruise facility—located in the Interbay
          neighborhood, about 10 minutes north of Downtown.{" "}
          <A href="https://www.princess.com/">Princess Cruises</A>,{" "}
          <A href="https://www.hollandamerica.com/">Holland America</A>,{" "}
          <A href="https://www.royalcaribbean.com/">Royal Caribbean</A>, and{" "}
          <A href="https://www.celebritycruises.com/">Celebrity Cruises</A> all
          use this terminal.
        </>,
        "Insider tip: Pier 91 has dedicated drop-off lanes and better traffic flow than Pier 66. We coordinate arrival times with ship embarkation schedules—no waiting in line for hours. For disembarkation, we track ship arrival and meet you as you clear the terminal.",
        <>
          See our dedicated{" "}
        <a
            href="/en/black-car-service/cruise-port-transfers"
            className="underline text-white/70 hover:text-white transition-colors"
          >
            cruise port transfer service
          </a>{" "}
          for full details on Alaska cruise transportation.
        </>,
      ],
      cta: "Book SEA-TAC to Cruise Terminal →",
    },
    {
      h3: "Boeing Field (BFI) — Private Aviation",
      image: {
        src: "/images/BoeingField.png",
        alt: "Viaro luxury black car at Boeing Field King County International Airport for private aviation transfers.",
        caption:
          "Tarmac pickup for private aviation at Seattle's premier executive airport.",
      },
      content: [
        "Boeing Field (King County International Airport) is Seattle's private aviation hub—just 5 miles from Downtown, with no commercial airline traffic to contend with. Tech executives, sports team owners, and high-net-worth travelers use BFI to skip SeaTac entirely.",
        <>
          Insider tip: Viaro coordinates directly with FBO operations including{" "}
          <A href="https://www.signatureflight.com/">Signature Flight Support</A>
          ,{" "}
          <A href="https://www.claylacy.com/">Clay Lacy Aviation</A>, and{" "}
          <A href="https://www.galvinflying.com/">Galvin Flying</A>. Where
          security allows, we meet you at the jet stairs. Step off the plane and
          into the back seat.
        </>,
        "Popular destinations from BFI: Downtown Seattle (10 min), Bellevue/Eastside (20 min), Medina, Mercer Island, and quick access to I-5 and I-90.",
      ],
      cta: "Book Boeing Field Transfer →",
    },
    {
      h3: "Seattle to Vancouver BC — Cross-Border Service",
      image: {
        src: "/images/SeattleVancouver.png",
        alt: "Viaro luxury black car providing Seattle to Vancouver BC cross-border transportation service.",
        caption:
          "Seamless ground transportation between Seattle and Vancouver—no flight connections, no border hassles.",
      },
      content: [
        "Vancouver BC is just 140 miles north of Seattle—close enough for a day trip, but crossing the border adds complexity. Viaro provides seamless cross-border ground transportation for executives, film crews, and travelers who prefer avoiding the SeaTac-YVR flight shuffle.",
        "Insider tip: The Peace Arch and Pacific Highway crossings have different wait times—we monitor both in real-time and route accordingly. NEXUS lane access available for expedited crossings when passengers are enrolled. We handle the logistics; you handle your meetings.",
        "Popular routes: Seattle to Downtown Vancouver, SeaTac to Vancouver International Airport (YVR), Seattle to Whistler, and corporate shuttles between tech offices in both cities.",
      ],
      cta: "Book Vancouver Transfer →",
    },
  ],

  whereSection: {
    h2: "Where Seattle Moves with Viaro",
    h3:"Our drivers know every route from SEA to destinations across the Puget Sound region:",
    image: {
      src: "/images/SeattleDestinations.png",
      alt: "Viaro luxury black car outside Amazon Spheres in Downtown Seattle.",
      caption:
        "From Amazon HQ to Microsoft campus, Pike Place to Bellevue—Viaro moves Seattle's tech leaders.",
    },
     items: [
    {
      label: "Downtown Seattle",
      time: "20 min",
      desc: "Pike Place Market, Amazon HQ, convention center, waterfront hotels",
    },
    {
      label: "Bellevue",
      time: "25 min",
      desc: "Microsoft campus, T-Mobile HQ, Bellevue Square, tech corridor",
    },
    {
      label: "Gig Harbor",
      time: "45 min",
      desc: "Peninsula transportation, waterfront restaurants, and residential communities",
    },
    {
      label: "Redmond",
      time: "35 min",
      desc: "Microsoft main campus, Nintendo of America, tech offices",
    },
    {
      label: "Tacoma",
      time: "30 min",
      desc: "Port of Tacoma, downtown Tacoma, Joint Base Lewis-McChord",
    },
    {
      label: "Cruise Terminals",
      time: "25 min",
      desc: "Pier 66, Pier 91 (Smith Cove) for Alaska cruise departures",
    },
  ],
    content: [
      <>
        Tech Campuses:{" "}
        <A href="https://www.aboutamazon.com/">Amazon HQ</A> (South Lake Union),{" "}
        <A href="https://www.microsoft.com/">Microsoft</A> (Redmond), Meta
        (Fremont), Google (Kirkland/Fremont), T-Mobile HQ (Bellevue), Expedia,
        Zillow, and the Eastside startup corridor.
      </>,
      <>
        Luxury Hotels:{" "}
        <A href="https://www.fourseasons.com/seattle/">Four Seasons Seattle</A>,{" "}
        <A href="https://www.fairmont.com/seattle/">Fairmont Olympic</A>,{" "}
        <A href="https://www.edgewaterhotel.com/">The Edgewater</A>, Thompson
        Seattle, W Seattle.
      </>,
      <>
        Conventions &amp; Events:{" "}
        <A href="https://www.wscc.com/">Washington State Convention Center</A>,{" "}
        <A href="https://climatepledgearena.com/">Climate Pledge Arena</A>{" "}
        (Kraken, concerts),{" "}
        <A href="https://www.mlb.com/mariners/ballpark">T-Mobile Park</A>{" "}
        (Mariners), Lumen Field (Seahawks, Sounders).
      </>,
      <>
        Culture &amp; Dining:{" "}
        <A href="https://www.pikeplacemarket.org/">Pike Place Market</A>, Space
        Needle, Museum of Pop Culture, Canlis, and the Capitol Hill dining scene.
      </>,
      "Eastside: Bellevue, Kirkland, Redmond, Mercer Island, Medina—home to some of the highest concentrations of tech wealth in the country.",
      <>
        See our full{" "}
        <a
          href="/en/black-car-service/corporate-transportation"
          className="underline text-white/70 hover:text-white transition-colors"
        >
          corporate transportation services
        </a>{" "}
        for executive roadshows and team shuttles.
      </>,
    ],
    cta: "Explore Seattle Services →",
  },

  pricing: {
    h2: "SEA-TAC Airport Car Service Rates",
    vehicles: [
      {
        type: "Sedan",
        price: 129,
        passengers: 3,
        bags: 2,
        extras: [
          "Professional chauffeur",
          "Flight tracking included",
          "Purple elevator pickup",
        ],
      },
      {
        type: "SUV",
        price: 159,
        passengers: 6,
        bags: 5,
        extras: [
          "Extra luggage space",
          "Pre-assigned chauffeur",
          "Flight tracking included",
        ],
        badge: "Most Popular",
      },
      {
        type: "Meet & Greet",
        price: 25,
        passengers: 0,
        bags: 0,
        extras: [
          "Driver inside terminal",
          "Name sign at baggage claim",
          "Add-on to any vehicle",
        ],
      },
    ],
    note: "Rates shown are for trips up to 18 miles. Hourly service: $85/hour (sedan) or $115/hour (SUV). Book 30 days ahead and save up to 12%. Your rate locks at booking and never increases.",
    cta: "Get Exact Quote for Your Trip →",
  },
},
  // ══════════════════════════════════════════════════════════════════
  // NEW YORK CITY
  // ══════════════════════════════════════════════════════════════════
  {
    id: "new-york",
    FA: "locationNewYorkFA",
    Testi: "locationTestimonials",

    hero: {
      image: {
        src: "/images/NewYorkLocation.png",
        alt: "Viaro black car service in New York City with Manhattan skyline and luxury sedan approaching Midtown.",
        caption:
          "From Wall Street to Teterboro, JFK to Newark—Viaro delivers seamless executive transportation across the New York metro area.",
      },
      h1: "New York City Black Car Service",
      h2: "JFK • LaGuardia • Newark • Teterboro • Westchester — Transparent Rates, No Surge, 24/7",
      description:
        "New York does not wait. Neither should you. In a city where every minute counts, Viaro delivers executive black car service that keeps pace with the fastest city on earth. Whether you are landing at JFK after a red-eye, stepping off a private jet at Teterboro, catching a flight out of Newark, or rushing through LaGuardia—we are already there, waiting curbside or on the tarmac. Transparent pricing. Real-time flight tracking. Professional chauffeurs who know every bridge, tunnel, and shortcut across all five boroughs and into New Jersey.",
      cta: { book: "Book Your NYC Black Car", phone: "(206) 672-8281" },
    },

    trustBarTitle: "Trusted by New York's Business Leaders",
    trustBar: [
      "60,000+ Trips",
      "99.8% On-Time",
      "5 Airports",
      "24/7 Live Support",
    ],

    bodyContent: {
      h2: "Airport-by-Airport: Insider Tips from Local Experts",
      h3: "The Professional's Guide to Seamless Pickups",
      image: {
        src: "/images/JFKArrival.png",
        alt: "Viaro chauffeur loading luggage into luxury black car at JFK Airport Terminal 4 arrivals.",
        caption:
          "We know every terminal, every traffic pattern, and every shortcut across New York and New Jersey.",
      },
      content: [
        "Flying into New York means navigating one of the most complex airport systems in the world. Five major airports. Dozens of terminals. Legendary traffic. Here is how Viaro helps you beat the chaos at each one.",
      ],
    },
    extraContent: [
      {
        h3: "JFK International Airport (JFK)",
        image: {
          src: "/images/JFKTerminal.png",
          alt: "Viaro chauffeur meeting passengers at LaGuardia Airport Terminal B commercial vehicle lane.",
          caption:
            "JFK's terminals spread across 5 miles of roads — your Viaro chauffeur meets you curbside, no confusion.",
        },
        content: [
          "JFK handles 60 million passengers a year across six terminals. The trick? Know which terminal your airline uses. Viaro tracks your flight in real-time, so we are waiting at the correct terminal before you even clear customs.",
          "Insider tip: International arrivals at Terminal 1 and Terminal 4 can take 45-90 minutes to clear customs. We monitor your landing time and adjust pickup accordingly—no standing at arrivals wondering where your driver is.",
          <>
            Popular destinations from JFK:{" "}
            <A href="https://www.nyse.com/">Wall Street</A>,{" "}
            <A href="https://www.theplazany.com/">Midtown Manhattan hotels</A>,{" "}
            <A href="https://www.discoverlongisland.com/the-hamptons/">
              The Hamptons
            </A>
            .
          </>,
        ],
      },
      {
        h3: "LaGuardia Airport (LGA)",
        image: {
          src: "/images/LGATerminal.png",
          alt: "Viaro chauffeur meeting passengers at LaGuardia Airport Terminal B commercial vehicle lane.",
          caption:
            "LaGuardia's new Terminal B — beautiful airport, confusing rideshare pickup. Viaro meets you at the commercial vehicle lane.",
        },
        content: [
          "LaGuardia is the closest airport to Manhattan—just 8 miles from Midtown. But do not let the distance fool you. The Grand Central Parkway and BQE can turn a 20-minute ride into an hour during rush hour.",
          "Insider tip: The new Terminal B is connected by a pedestrian bridge to the parking garage—but rideshare pickup is a maze. Viaro chauffeurs meet you at the commercial vehicle lane on the arrivals level. No walking to a distant lot.",
          <>
            Popular destinations from LGA:{" "}
            <A href="https://www.timessquarenyc.org/">Times Square</A>,{" "}
            <A href="https://www.msg.com/">Madison Square Garden</A>,{" "}
            <A href="https://javitscenter.com/">Javits Convention Center</A>.
          </>,
        ],
      },
      {
        h3: "Newark Liberty International Airport (EWR)",
        image: {
          src: "/images/EWRTerminal.png",
          alt: "Viaro black car at Newark Liberty International Airport Terminal C arrivals.",
          caption:
            "Newark Terminal C — United's hub. Viaro tracks your terminal and waits at the right curb.",
        },
        content: [
          "Newark is the United Airlines hub and often the best option for travelers heading to New Jersey, Lower Manhattan, or anywhere along the PATH train corridor. It is also frequently less crowded than JFK—and sometimes cheaper to fly into.",
          "Insider tip: Terminal C is United's domain—massive but well-organized. Terminals A and B serve everyone else. The AirTrain connects all terminals, but if you land in Terminal A and your car is waiting at Terminal C, that is a 15-minute detour. Viaro tracks your terminal and meets you at the correct arrivals curb.",
          <>
            Popular destinations from EWR: Jersey City, Hoboken, Lower Manhattan
            (via Holland Tunnel),{" "}
            <A href="https://www.prucenter.com/">Prudential Center</A>,
            Princeton, and Philadelphia connections.
          </>,
        ],
      },
      {
        h3: "Teterboro Airport (TEB) — Private Aviation",
        image: {
          src: "/images/TEBTarmac.png",
          alt: "Viaro luxury black SUV waiting on the tarmac at Teterboro Airport FBO for private jet arrival.",
          caption:
            "Teterboro — where Wall Street flies. We meet you at the jet stairs. Total time on the ground: under 2 minutes.",
        },
        content: [
          "Teterboro is where Wall Street flies. This FBO-only airport in New Jersey handles more private jet traffic than almost anywhere in the country. If you are landing here, you expect a car waiting on the tarmac—not in a parking lot.",
          <>
            Insider tip: Viaro coordinates directly with FBO operations at{" "}
            <A href="https://www.signatureflight.com/">
              Signature Flight Support
            </A>{" "}
            and{" "}
            <A href="https://www.atlanticaviation.com/">Atlantic Aviation</A>.{" "}
            Where security allows, we meet you at the jet stairs. Total time on
            the ground: under 2 minutes.
          </>,
          "Popular destinations from TEB: Financial District, Midtown, Greenwich CT, and helicopter connections to the Hamptons.",
        ],
      },
      {
        h3: "Westchester County Airport (HPN)",
        image: {
          src: "/images/HPNAirport.png",
          alt: "Viaro black car at Westchester County Airport serving corporate executives and Connecticut Gold Coast travelers.",
          caption:
            "Westchester County Airport — skip JFK chaos. Straight shot to Manhattan via I-95 or Hutchinson River Parkway.",
        },
        content: [
          "HPN serves Westchester's corporate executives and Connecticut's Gold Coast. It handles both commercial flights (JetBlue, American, United) and private aviation. Smaller crowds. Faster security. And a straight shot down I-95 or the Hutchinson River Parkway to Manhattan.",
          <>
            Insider tip: If you live in Westchester, Greenwich, or Stamford—skip
            the chaos of JFK and LaGuardia. HPN is your home airport. Viaro
            provides transfers to{" "}
            <A href="https://www.ibm.com/">IBM headquarters</A>,{" "}
            <A href="https://www.pepsico.com/">PepsiCo</A>, and the hedge fund
            corridor in Stamford.
          </>,
        ],
        cta: "Book Your Airport Transfer →",
      },
    ],

    whereSection: {
      h2: "Where New Yorkers Go with Viaro",
      image: {
        src: "/images/NewYorkHotels.png",
        alt: "Viaro luxury black car outside iconic Manhattan hotel providing executive transportation service.",
        caption:
          "From five-star hotels to Fortune 500 headquarters, Viaro moves New York's most demanding travelers.",
      },
      content: [
        <>
          Manhattan Hotels: <A href="https://www.theplazany.com/">The Plaza</A>,{" "}
          <A href="https://www.marriott.com/hotels/travel/nycxr-the-st-regis-new-york/">
            The St. Regis
          </A>
          , <A href="https://www.fourseasons.com/newyork/">Four Seasons</A>,{" "}
          <A href="https://www.peninsula.com/en/new-york">The Peninsula</A>.
        </>,
        "Business Districts: Wall Street/Financial District, Midtown (Park Avenue corridor), Hudson Yards, World Trade Center, Jersey City waterfront.",
        <>
          Events &amp; Entertainment:{" "}
          <A href="https://www.msg.com/">Madison Square Garden</A>,{" "}
          <A href="https://www.lincolncenter.org/">Lincoln Center</A>,{" "}
          <A href="https://www.broadway.com/">Broadway theaters</A>, Yankee
          Stadium, MetLife Stadium.
        </>,
        "Beyond Manhattan: The Hamptons, Greenwich CT, Princeton NJ, Atlantic City, and cross-Hudson connections to Hoboken and Jersey City.",
        <>
          See our full{" "}
          <a
            href={`/en/black-car-service/corporate-transportation`}
            className="underline text-white hover:text-primary transition-colors"
          >
            corporate transportation services
          </a>{" "}
          and{" "}
          <a
            href={`/en/black-car-service/hourly-chauffeur-hire`}
            className="underline text-white hover:text-primary transition-colors"
          >
            hourly chauffeur options
          </a>
        </>,
      ],
      cta: "Explore NYC Services →",
    },

    pricing: {
      h2: "NYC Black Car Service Rates",
      vehicles: [
        {
          type: "Sedan",
          price: 95,
          passengers: 3,
          bags: 2,
          extras: [
            "Professional chauffeur",
            "Flight tracking included",
            "Flat rate — no surge",
          ],
        },
        {
          type: "SUV",
          price: 135,
          passengers: 6,
          bags: 5,
          extras: [
            "Extra luggage space",
            "Pre-assigned chauffeur",
            "Flight tracking included",
          ],
          badge: "Most Popular",
        },
        {
          type: "Sprinter Van",
          price: 299,
          passengers: 13,
          bags: 10,
          extras: [
            "Group & corporate travel",
            "Forward-facing captain's chairs",
            "USB charging",
          ],
        },
      ],
      note: "Flat rates locked at booking. No surge pricing — ever. Contact us for Hamptons, Connecticut, and long-distance quotes.",
      cta: "Get Exact Quote for Your Trip →",
    },
  },

  // ══════════════════════════════════════════════════════════════════
  // LOS ANGELES
  // ══════════════════════════════════════════════════════════════════
  {
    id: "los-angeles-lax",
    FA: "LocationsLAFa",
    Testi: "locationTestimonials",

    hero: {
      image: {
        src: "/images/LosAngeles.png",
        alt: "Viaro black car service in Los Angeles with Downtown LA skyline and luxury sedan on palm-lined boulevard.",
        caption:
          "From Hollywood to the beaches, LAX to Van Nuys—Viaro delivers seamless executive transportation across Greater Los Angeles.",
      },
      h1: "Los Angeles Black Car Service",
      h2: "LAX • Van Nuys • Burbank • Long Beach • Orange County — Flat Rates, No Surge, 24/7",
      description:
        "In LA, you are either stuck in traffic—or you have a driver who knows how to beat it. Los Angeles is 500 square miles of freeways, canyons, and coastline. Getting from LAX to Beverly Hills can take 25 minutes or 2 hours depending on the time of day. That is why executives, entertainment professionals, and discerning travelers trust Viaro to navigate the sprawl. Whether you are landing at LAX after an international flight, stepping off a private jet at Van Nuys, or catching a Southwest flight out of Burbank—we are already there. Transparent rates. Professional chauffeurs who know every shortcut from the Valley to the beach.",
      cta: { book: "Book Your LA Black Car", phone: "(206) 672-8281" },
    },

    trustBarTitle: "Trusted by LA's Entertainment & Business Elite",
    trustBar: [
      "60,000+ Trips",
      "99.8% On-Time",
      "6 Airports",
      "24/7 Live Support",
    ],

    bodyContent: {
      h2: "Airport-by-Airport: Insider Tips from Local Experts",
      h3: "Insider Hacks to Skip the Terminal Traffic",
      image: {
        src: "/images/LAXArrival.png",
        alt: "Viaro chauffeur at LAX Airport loading luggage into luxury black car with iconic LAX pylons in background.",
        caption:
          "We know every terminal, every back road, and every traffic pattern across Greater Los Angeles.",
      },
      content: [
        "Greater Los Angeles has more airports than any metro area in the country. Knowing which one to use—and how to get in and out efficiently—is the difference between a smooth trip and a nightmare. Here is how Viaro helps you navigate each one.",
      ],
    },

    extraContent: [
      {
        h3: "Los Angeles International Airport (LAX)",
        image: {
          src: "/images/LAXTerminal.png",
          alt: "Viaro black car at Los Angeles International Airport arrivals level serving Beverly Hills, Santa Monica and Downtown LA.",
          caption:
            "LAX arrivals — skip the rideshare chaos. Viaro meets you curbside at the correct terminal, every time.",
        },
        content: [
          "LAX is the fifth-busiest airport in the world—88 million passengers a year across 9 terminals. The horseshoe-shaped layout is legendary for gridlock, especially during rush hour. But there are tricks.",
          "Insider tip: Skip the LAX-it lot chaos. Viaro chauffeurs meet you at the designated pickup zones on the arrivals level—not the rideshare lot across the airport. We track your flight, so we arrive exactly when you clear baggage claim.",
          <>
            Popular destinations from LAX:{" "}
            <A href="https://www.beverlyhills.org/">Beverly Hills</A>,{" "}
            <A href="https://www.santamonica.com/">Santa Monica</A>, Downtown
            LA, <A href="https://www.hollywoodchamber.net/">Hollywood</A>,
            Malibu, and Westside tech offices.
          </>,
        ],
      },
      {
        h3: "Van Nuys Airport (VNY) — Private Aviation",
        image: {
          src: "/images/VNYTarmac.png",
          alt: "Viaro black SUV meeting private jet at Van Nuys Airport FBO tarmac with Hollywood Hills in background.",
          caption:
            "Van Nuys — the world's busiest general aviation airport. We meet you at the jet stairs.",
        },
        content: [
          "Van Nuys is the busiest general aviation airport in the world. This is where Hollywood flies—studio executives, A-list talent, and tech billionaires land here daily. If you are arriving by private jet, VNY is your gateway to LA.",
          <>
            Insider tip: Viaro coordinates directly with FBOs, including{" "}
            <A href="https://www.signatureflight.com/">
              Signature Flight Support
            </A>
            ,{" "}
            <A href="https://www.castlecookeaviation.com/">
              Castle & Cooke Aviation
            </A>
            , and <A href="https://www.jetaviation.com/">Jet Aviation</A>. Where
            security allows, we meet you at the jet stairs. Step off the plane
            and into the back seat.
          </>,
          "Popular destinations from VNY: Beverly Hills, Bel Air, Malibu, Warner Bros. Studios, Universal Studios, Netflix/Amazon/Apple studios in Hollywood.",
        ],
      },
      {
        h3: "Hollywood Burbank Airport (BUR)",
        image: {
          src: "/images/BURTerminal.png",
          alt: "Viaro black car waiting curbside at Hollywood Burbank Airport terminal entrance.",
          caption:
            "Burbank — walk straight out the gate to your Viaro car. No shuttles, no remote lots.",
        },
        content: [
          "Burbank is LA's best-kept secret. Smaller crowds, faster security, and you can walk from the gate to your car in under 5 minutes. If you are heading to the Valley, Pasadena, or Downtown LA, skip LAX and fly into Burbank.",
          "Insider tip: The terminal is tiny—just walk outside and your Viaro car is waiting at the curb. No shuttles, no remote lots. Southwest, JetBlue, American, United, and Delta all fly here.",
          <>
            Popular destinations from BUR:{" "}
            <A href="https://www.wbstudiotour.com/">Warner Bros. Studios</A>,{" "}
            <A href="https://www.universalstudioshollywood.com/">
              Universal Studios
            </A>
            , Disney Studios, Pasadena/Rose Bowl, Glendale.
          </>,
        ],
      },
      {
        h3: "Long Beach Airport (LGB)",
        image: {
          src: "/images/LGBTerminal.png",
          alt: "Viaro black car at Long Beach Airport boutique terminal with palm trees and clear California skies.",
          caption:
            "Long Beach — boutique airport, zero LAX traffic. Closest to the Port of Long Beach cruise terminal.",
        },
        content: [
          "Long Beach is a boutique airport with a loyal following. JetBlue dominates here, with affordable flights and a relaxed, almost resort-like atmosphere. It is also the closest airport to the Port of Long Beach cruise terminal.",
          "Insider tip: If you are cruising from Long Beach, fly into LGB and skip the LAX traffic entirely. We provide seamless cruise port transfers right to the ship.",
          <>
            Popular destinations from LGB:{" "}
            <A href="https://www.queenmary.com/">Queen Mary</A>, Aquarium of the
            Pacific, Downtown Long Beach, Orange County beaches, Disneyland.
          </>,
        ],
      },
      {
        h3: "John Wayne Airport / Orange County (SNA)",
        image: {
          src: "/images/SNATerminal.png",
          alt: "Viaro black car at John Wayne Airport Orange County lower arrivals curb serving Newport Beach and Disneyland travelers.",
          caption:
            "John Wayne Airport — 15 minutes to Disneyland, 10 minutes to Newport Beach. Calmer than LAX.",
        },
        content: [
          <>
            John Wayne Airport (also known as SNA or JWA) serves Orange County's
            affluent beach communities—{" "}
            <A href="https://www.visitnewportbeach.com/">Newport Beach</A>,{" "}
            <A href="https://www.visitlagunabeach.com/">Laguna Beach</A>,
            Irvine, and the{" "}
            <A href="https://disneyland.disney.go.com/">Disneyland Resort</A>.{" "}
            For travelers heading south of LA, this airport saves 30–60 minutes
            compared to LAX.
          </>,
          "Insider tip: SNA has strict noise rules—smaller and calmer for passengers. Viaro meets you right at the curb on the lower arrivals level.",
          <>
            Popular destinations from SNA:{" "}
            <A href="https://disneyland.disney.go.com/">Disneyland</A>,{" "}
            <A href="https://www.visitnewportbeach.com/">Newport Beach</A>,{" "}
            <A href="https://www.visitlagunabeach.com/">Laguna Beach</A>, Irvine
            tech campuses, Anaheim Convention Center.
          </>,
        ],
        cta: "Book Your Airport Transfer →",
      },
    ],

    whereSection: {
      h2: "Where LA Moves with Viaro",
      image: {
        src: "/images/LAHotels.png",
        alt: "Viaro luxury black car outside iconic Beverly Hills hotel providing executive transportation.",
        caption:
          "From studio lots to beachfront hotels, Viaro moves LA's most demanding travelers.",
      },
      content: [
        <>
          Luxury Hotels:{" "}
          <A href="https://www.fourseasons.com/beverlywilshire/">
            Beverly Wilshire
          </A>
          ,{" "}
          <A href="https://www.peninsula.com/en/beverly-hills">
            The Peninsula Beverly Hills
          </A>
          , <A href="https://www.chateaumarmont.com/">Chateau Marmont</A>, Hotel
          Bel-Air, Shutters on the Beach.
        </>,
        "Entertainment & Studios: Warner Bros., Universal, Paramount, Sony Pictures, Netflix HQ, Amazon Studios, Apple TV+.",
        <>
          Sports &amp; Events:{" "}
          <A href="https://www.sofistadium.com/">SoFi Stadium</A>,{" "}
          <A href="https://www.cryptoarena.com/">Crypto.com Arena</A>, Dodger
          Stadium, Rose Bowl,{" "}
          <A href="https://www.lacclink.com/">LA Convention Center</A>.
        </>,
        <>
          Shopping &amp; Lifestyle:{" "}
          <A href="https://www.rodeodrive-bh.com/">Rodeo Drive</A>, The Grove,
          Century City, South Coast Plaza, Fashion Island.
        </>,
        "Beach Communities: Malibu, Santa Monica, Venice, Manhattan Beach, Newport Beach, Laguna Beach.",
        <>
          See our full{" "}
          <a
            href={`/en/black-car-service/corporate-transportation`}
            className="underline text-white hover:text-primary transition-colors"
          >
            corporate transportation services
          </a>{" "}
          and{" "}
          <a
            href={`/en/black-car-service/hourly-chauffeur-hire`}
            className="underline text-white hover:text-primary transition-colors"
          >
            hourly chauffeur options
          </a>
        </>,
      ],
      cta: "Explore LA Services →",
    },

    pricing: {
      h2: "Los Angeles Black Car Service Rates",
      vehicles: [
        {
          type: "Sedan",
          price: 95,
          passengers: 3,
          bags: 2,
          extras: [
            "Professional chauffeur",
            "Flight tracking included",
            "Flat rate — no surge",
          ],
        },
        {
          type: "SUV",
          price: 135,
          passengers: 6,
          bags: 5,
          extras: [
            "Extra luggage space",
            "Pre-assigned chauffeur",
            "Flight tracking included",
          ],
          badge: "Most Popular",
        },
        {
          type: "Sprinter Van",
          price: 299,
          passengers: 13,
          bags: 10,
          extras: [
            "Group & corporate travel",
            "Forward-facing captain's chairs",
            "USB charging",
          ],
        },
      ],
      note: "Flat rates locked at booking. No surge pricing — ever. Contact us for Malibu, Orange County, and long-distance quotes.",
      cta: "Get Exact Quote for Your Trip →",
    },
  },

  // ══════════════════════════════════════════════════════════════════
  // CHICAGO
  // ══════════════════════════════════════════════════════════════════

  {
    id: "chicago-ord",
    FA: "LocationsChicagocoFa",
    Testi: "locationTestimonials",

    hero: {
      image: {
        src: "/images/Chicago.png",
        alt: "Viaro black car service in Chicago with Downtown skyline and luxury sedan on Michigan Avenue.",
        caption:
          "From the Magnificent Mile to O'Hare, the Loop to the suburbs—Viaro delivers seamless executive transportation across Chicagoland.",
      },
      h1: "Chicago Black Car Service",
      h2: "O'Hare • Midway • DuPage FBO — Transparent Pricing, Locked Rates, 24/7",
      description:
        "Chicago does not slow down for weather, traffic, or excuses. Neither do we. The Windy City is a place where handshake deals are still made over deep-dish pizza and business moves at the speed of the L train. Whether you are landing at O'Hare after a cross-country red-eye, flying into Midway for a quick turnaround, or stepping off a Gulfstream at DuPage—Viaro is already waiting. Transparent pricing with rates locked at booking. No rideshare surges when it snows. Real-time flight tracking. Professional chauffeurs who know the Kennedy, the Dan Ryan, and every shortcut through the Loop.",
      cta: { book: "Book Your Chicago Black Car", phone: "(206) 672-8281" },
    },

    trustBarTitle: "Trusted by Chicago's Executives & Deal-Makers",
    trustBar: [
      "60,000+ Trips",
      "99.8% On-Time",
      "3 Airports",
      "Locked Rates — No Surges",
    ],

    bodyContent: {
      h2: "Airport-by-Airport: Insider Tips from Local Experts",
      h3: "Your Fast-Track Guide to Bypassing Airport Gridlock",
      image: {
        src: "/images/OHareArrival.png",
        alt: "Viaro chauffeur at O'Hare Airport loading luggage into luxury black car at terminal arrivals.",
        caption:
          "We know every terminal, every traffic pattern, and every weather workaround across Chicagoland.",
      },
      content: [
        "Chicago's airport system serves over 100 million passengers a year. O'Hare alone has four terminals and the infamous I-90/I-94 merge. Knowing which terminal, which route, and which backup plan to use separates professionals from amateurs. Here is how Viaro helps you beat the chaos.",
      ],
    },

    extraContent: [
      {
        h3: "O'Hare International Airport (ORD)",
        image: {
          src: "/images/ORDTerminal.png",
          alt: "Viaro black car at O'Hare International Airport Terminal arrivals serving Downtown Chicago and suburbs.",
          caption:
            "O'Hare Terminal 5 — international arrivals can take 90 minutes through customs. Viaro is already tracking your landing.",
        },
        content: [
          "O'Hare is the sixth-busiest airport in the world—a United and American Airlines fortress with four terminals and a reputation for delays. But delays do not mean you wait. Viaro tracks every flight in real-time, so we know when you land before you do.",
          "Insider tip: International arrivals land at Terminal 5, which is separate from the main terminal complex. Customs can take 30–90 minutes. Viaro monitors your landing time and adjusts pickup—no standing outside in a Chicago January wondering where your ride is.",
          <>
            Popular destinations from ORD:{" "}
            <A href="https://www.choosechicago.com/">The Loop</A>,{" "}
            <A href="https://www.themagnificentmile.com/">Magnificent Mile</A>,{" "}
            <A href="https://www.mccormickplace.com/">McCormick Place</A>, River
            North, Evanston, and the western suburbs.
          </>,
        ],
      },
      {
        h3: "Chicago Midway International Airport (MDW)",
        image: {
          src: "/images/MDWTerminal.png",
          alt: "Viaro black car at Chicago Midway Airport commercial vehicle lane on the arrivals level.",
          caption:
            "Midway — closer to downtown than O'Hare, faster security. Viaro meets you at the commercial vehicle lane.",
        },
        content: [
          "Midway is Chicago's Southwest Airlines hub—smaller, faster, and often overlooked by visitors. But locals know: Midway is closer to Downtown (11 miles vs. O'Hare's 17), and the Orange Line gets you to the Loop in 25 minutes.",
          "Insider tip: Midway's single terminal means less walking—but the rideshare pickup area is across a pedestrian bridge in the parking garage. Viaro meets you at the commercial vehicle lane on the arrivals level. Step outside, step into your car.",
          "Popular destinations from MDW: Downtown Loop, South Side (White Sox, University of Chicago), Hyde Park, Pilsen, and quick access to I-55 south.",
        ],
      },
      {
        h3: "DuPage Airport (DPA) — Private Aviation",
        image: {
          src: "/images/DPATarmac.png",
          alt: "Viaro luxury SUV on the tarmac at DuPage Airport FBO waiting for private jet arrival west of Chicago.",
          caption:
            "DuPage FBO — Chicagoland's premier private aviation gateway. Total time on ground: seconds, not minutes.",
        },
        content: [
          "DuPage is Chicagoland's premier private aviation gateway. Located 25 miles west of the Loop in West Chicago, DPA serves corporate executives, Fortune 500 flight departments, and private jet travelers who want to skip O'Hare entirely.",
          <>
            Insider tip: Viaro coordinates directly with FBO operations
            including{" "}
            <A href="https://www.signatureflight.com/">
              Signature Flight Support
            </A>{" "}
            and{" "}
            <A href="https://www.atlanticaviation.com/">Atlantic Aviation</A>.{" "}
            Where security allows, we meet you at the jet stairs. You step off
            the plane and into the back seat—total time on the ground measured
            in seconds, not minutes.
          </>,
          "Popular destinations from DPA: Downtown Chicago, Naperville corporate campuses, Oak Brook (McDonald's HQ corridor), Schaumburg, and connections to the I-88 tech corridor.",
        ],
        cta: "Book Your Airport Transfer →",
      },
    ],
    whereSection: {
      h2: "Where Chicago Moves with Viaro",
      image: {
        src: "/images/ChicagoHotels.png",
        alt: "Viaro luxury black car outside iconic Chicago hotel on Michigan Avenue providing executive transportation.",
        caption:
          "From the Magnificent Mile to corporate campuses, Viaro moves Chicago's most demanding travelers.",
      },
      content: [
        <>
          Luxury Hotels:{" "}
          <A href="https://www.peninsula.com/en/chicago">
            The Peninsula Chicago
          </A>
          ,{" "}
          <A href="https://www.langhamhotels.com/en/the-langham/chicago/">
            The Langham
          </A>
          , <A href="https://www.fourseasons.com/chicago/">Four Seasons</A>,{" "}
          <A href="https://www.ritzcarlton.com/en/hotels/chicago">
            The Ritz-Carlton
          </A>
          , Waldorf Astoria, Park Hyatt.
        </>,
        <>
          Business Districts: The Loop, River North, West Loop, Fulton Market,
          Merchandise Mart, Willis Tower,{" "}
          <A href="https://www.boeing.com/">Boeing Global HQ</A>, and suburban
          campuses in Schaumburg, Oak Brook, and Naperville.
        </>,
        <>
          Conventions &amp; Events:{" "}
          <A href="https://www.mccormickplace.com/">McCormick Place</A> (largest
          convention center in North America), Navy Pier,{" "}
          <A href="https://www.unitedcenter.com/">United Center</A>, Soldier
          Field, Wrigley Field.
        </>,
        <>
          Shopping &amp; Culture:{" "}
          <A href="https://www.themagnificentmile.com/">Magnificent Mile</A>,
          Oak Street,{" "}
          <A href="https://www.artic.edu/">Art Institute of Chicago</A>,
          Millennium Park, Chicago Theatre district.
        </>,
        <>
          Universities &amp; Medical:{" "}
          <A href="https://www.northwestern.edu/">Northwestern University</A>,
          University of Chicago, Rush Medical Center, Northwestern Memorial
          Hospital.
        </>,
        <>
          See our full{" "}
          <a
            href={`/en/black-car-service/corporate-transportation`}
            className="underline text-white hover:text-primary transition-colors"
          >
            corporate transportation services
          </a>{" "}
          and{" "}
          <a
            href={`/en/black-car-service/hourly-chauffeur-hire`}
            className="underline text-white hover:text-primary transition-colors"
          >
            hourly chauffeur options
          </a>
        </>,
      ],
      cta: "Explore Chicago Services →",
    },

    pricing: {
      h2: "Chicago Black Car Service Rates",
      vehicles: [
        {
          type: "Sedan",
          price: 95,
          passengers: 3,
          bags: 2,
          extras: [
            "Professional chauffeur",
            "Flight tracking included",
            "Flat rate — no surge",
          ],
        },
        {
          type: "SUV",
          price: 135,
          passengers: 6,
          bags: 5,
          extras: [
            "Extra luggage space",
            "Pre-assigned chauffeur",
            "Flight tracking included",
          ],
          badge: "Most Popular",
        },
        {
          type: "Sprinter Van",
          price: 299,
          passengers: 13,
          bags: 10,
          extras: [
            "Group & corporate travel",
            "Forward-facing captain's chairs",
            "USB charging",
          ],
        },
      ],
      note: "Flat rates locked at booking. No surge pricing — ever. Not even in a Chicago blizzard. Contact us for suburban and long-distance quotes.",
      cta: "Get Exact Quote for Your Trip →",
    },
  },

  // ══════════════════════════════════════════════════════════════════
  // SAN FRANCISCO BAY AREA
  // ══════════════════════════════════════════════════════════════════
  {
    id: "san-francisco-sfo",
    FA: "LocationsSanFranciscoFa",
    Testi: "locationTestimonials",

    hero: {
      image: {
        src: "/images/SanFrancisco.png",
        alt: "Viaro black car service in San Francisco with Golden Gate Bridge and Downtown skyline featuring Salesforce Tower.",
        caption:
          "From SFO to Napa Valley, Silicon Valley to the city—Viaro delivers seamless executive transportation across the Bay Area.",
      },
      h1: "San Francisco Bay Area Black Car Service",
      h2: "SFO • San Jose • Oakland — Transparent Pricing, Locked Rates, 24/7",
      description:
        "The Bay Area runs on innovation. Your transportation should too. San Francisco is 50 square miles of hills, fog, and billion-dollar ideas. The peninsula stretches from SFO to Silicon Valley. The East Bay sprawls from Oakland to Fremont. And somewhere in between, you have a flight to catch, a meeting to make, or a vineyard to visit. Viaro navigates it all. Whether you are landing at SFO after a cross-Pacific red-eye, flying into San Jose for a VC pitch, or catching a Southwest flight out of Oakland—we are already waiting. Transparent pricing with rates locked at booking. No rideshare surges when Dreamforce clogs the city. Professional chauffeurs who know the 101, the 280, and every shortcut through SOMA.",
      cta: { book: "Book Your Bay Area Black Car", phone: "(206) 672-8281" },
    },

    trustBarTitle: "Trusted by Silicon Valley's Leaders",
    trustBar: [
      "60,000+ Trips",
      "99.8% On-Time",
      "3 Airports",
      "24/7 Live Support",
    ],

    bodyContent: {
      h2: "Airport-by-Airport: Insider Tips from Local Experts",
      h3: "Navigating North America's Busiest Airports",
      image: {
        src: "/images/SFOArrival.png",
        alt: "Viaro chauffeur at SFO Airport loading luggage into luxury black car at International Terminal.",
        caption:
          "We know every terminal, every freeway merge, and every rush-hour workaround across the Bay Area.",
      },
      content: [
        "The Bay Area has three major airports, each serving different parts of the region. Knowing which one to use—and how to navigate the legendary traffic between them—separates locals from visitors. Here is how Viaro helps you move seamlessly.",
      ],
    },
    extraContent: [
      {
        h3: "San Francisco International Airport (SFO)",
        image: {
          src: "/images/SFOTerminal.png",
          alt: "Viaro black car at San Francisco International Airport arrivals serving Downtown SF and Silicon Valley.",
          caption:
            "SFO International Terminal — Viaro tracks your flight through fog delays and meets you at the upper level pickup zone.",
        },
        content: [
          "SFO is the Bay Area's primary airport—a United Airlines hub with international flights to Asia, Europe, and everywhere in between. Four terminals, including the architecturally stunning International Terminal G. But SFO also has a reputation: fog delays are real, and the 101 North can be brutal.",
          "Insider tip: International arrivals can take 45–90 minutes to clear customs. Viaro tracks your flight in real-time and adjusts pickup accordingly. We meet you at the designated pickup zones on the departures level (upper level)—not the rideshare lot across the airport.",
          <>
            Popular destinations from SFO:{" "}
            <A href="https://www.sftravel.com/">Downtown San Francisco</A>,
            Silicon Valley (Palo Alto, Mountain View, Menlo Park),{" "}
            <A href="https://www.visitnapavalley.com/">Napa Valley</A>, and
            Peninsula corporate campuses.
          </>,
        ],
      },
      {
        h3: "San Jose International Airport (SJC)",
        image: {
          src: "/images/SJCTerminal.png",
          alt: "Viaro black car at San Jose International Airport arrivals serving Silicon Valley tech campuses.",
          caption:
            "San Jose Airport — 10 minutes to Google, 15 minutes to Apple Park. The smart choice for Silicon Valley.",
        },
        content: [
          "San Jose is Silicon Valley's home airport—smaller than SFO, easier to navigate, and right in the heart of the tech corridor. If you are heading to Apple, Google, or any company south of Palo Alto, SJC saves you an hour compared to SFO.",
          "Insider tip: SJC has two terminals connected by a short walk. Southwest dominates Terminal B; everyone else is in Terminal A. The airport is compact—you can be curbside in 10 minutes after landing. Viaro meets you at the commercial vehicle lane on the arrivals level. No rideshare maze.",
          <>
            Popular destinations from SJC:{" "}
            <A href="https://www.apple.com/">Apple Park</A>,{" "}
            <A href="https://about.google/">Google</A>,{" "}
            <A href="https://about.meta.com/">Meta</A>, Stanford University,
            Santa Cruz, and Monterey.
          </>,
        ],
      },
      {
        h3: "Oakland International Airport (OAK)",
        image: {
          src: "/images/OAKTerminal.png",
          alt: "Viaro black car at Oakland International Airport arrivals serving Berkeley, Walnut Creek and East Bay destinations.",
          caption:
            "Oakland Airport — no fog, faster security, and Viaro knows when to take the San Mateo Bridge instead of the Bay Bridge.",
        },
        content: [
          "Oakland is the East Bay's airport—a Southwest Airlines stronghold with quick access to Berkeley, Walnut Creek, and the entire East Bay corridor. It is often less crowded than SFO, with faster security lines and no fog delays.",
          "Insider tip: If you are heading to San Francisco from Oakland, the Bay Bridge can be unpredictable. Morning rush westbound, evening rush eastbound. Viaro chauffeurs know when to take 880 to the San Mateo Bridge instead—or when BART is actually faster. We give you options.",
          <>
            Popular destinations from OAK:{" "}
            <A href="https://www.berkeley.edu/">UC Berkeley</A>, Downtown
            Oakland, Walnut Creek, Pleasanton/Dublin tech parks, and connections
            to San Francisco via Bay Bridge.
          </>,
        ],
        cta: "Book Your Airport Transfer →",
      },
    ],
    whereSection: {
      h2: "Where the Bay Area Moves with Viaro",
      image: {
        src: "/images/SFHotels.png",
        alt: "Viaro luxury black car at Napa Valley vineyard or outside San Francisco luxury hotel.",
        caption:
          "From Salesforce Tower to Sonoma vineyards, Viaro moves the Bay Area's most discerning travelers.",
      },
      content: [
        <>
          Wine Country:{" "}
          <A href="https://www.visitnapavalley.com/">Napa Valley</A>,{" "}
          <A href="https://www.sonomacounty.com/">Sonoma</A>, Healdsburg,
          Yountville, St. Helena. Our hourly chauffeur service is perfect for
          full-day wine tours.
        </>,
        <>
          Luxury Hotels:{" "}
          <A href="https://www.fairmont.com/san-francisco/">
            Fairmont San Francisco
          </A>
          ,{" "}
          <A href="https://www.marriott.com/hotels/travel/sfoxr-the-st-regis-san-francisco/">
            The St. Regis
          </A>
          , <A href="https://www.fourseasons.com/sanfrancisco/">Four Seasons</A>
          , Ritz-Carlton, Palace Hotel.
        </>,
        <>
          Tech Campuses: Apple Park (Cupertino), Googleplex (Mountain View),
          Meta HQ (Menlo Park),{" "}
          <A href="https://www.salesforce.com/">Salesforce Tower</A> (SF),
          Netflix (Los Gatos), Adobe, NVIDIA, LinkedIn, and Sand Hill Road VC
          offices.
        </>,
        <>
          Conventions &amp; Events:{" "}
          <A href="https://www.moscone.com/">Moscone Center</A> (Dreamforce,
          Apple WWDC, Google I/O),{" "}
          <A href="https://www.chasecenter.com/">Chase Center</A>, Oracle Park,
          Levi's Stadium.
        </>,
        <>
          Universities:{" "}
          <A href="https://www.stanford.edu/">Stanford University</A>, UC
          Berkeley, UCSF, Santa Clara University.
        </>,
        <>
          See our full{" "}
          <a
            href={`/en/black-car-service/corporate-transportation`}
            className="underline text-white hover:text-primary transition-colors"
          >
            corporate transportation services
          </a>{" "}
          and for executive roadshows and investor meetings.
        </>,
      ],
      cta: "Explore Bay Area Services →",
    },

    pricing: {
      h2: "San Francisco Bay Area Black Car Service Rates",
      vehicles: [
        {
          type: "Sedan",
          price: 95,
          passengers: 3,
          bags: 2,
          extras: [
            "Professional chauffeur",
            "Flight tracking included",
            "Flat rate — no surge",
          ],
        },
        {
          type: "SUV",
          price: 135,
          passengers: 6,
          bags: 5,
          extras: [
            "Extra luggage space",
            "Pre-assigned chauffeur",
            "Flight tracking included",
          ],
          badge: "Most Popular",
        },
        {
          type: "Sprinter Van",
          price: 299,
          passengers: 13,
          bags: 10,
          extras: [
            "Group & corporate travel",
            "Forward-facing captain's chairs",
            "USB charging",
          ],
        },
      ],
      note: "Flat rates locked at booking. No surge pricing — ever. Not even during Dreamforce. Contact us for Napa, Sonoma, and long-distance quotes.",
      cta: "Get Exact Quote for Your Trip →",
    },
  },
  // ══════════════════════════════════════════════════════════════════
  // Las Vegas
  // ══════════════════════════════════════════════════════════════════

  {
    id: "las-vegas",
    FA: "locationLasVegasFA",
    Testi: "locationTestimonials",

    hero: {
      image: {
        src: "/images/LasVegasLocation.png",
        alt: "Viaro black car service in Las Vegas with the Strip skyline featuring Bellagio fountains and luxury sedan.",
        caption:
          "From the Strip to private jets, conventions to VIP nightlife—Viaro delivers seamless 24/7 executive transportation in Las Vegas.",
      },
      h1: "Las Vegas Black Car Service",
      h2: "Harry Reid • Henderson FBO • North Las Vegas — Transparent Pricing, Locked Rates, 24/7",
      description:
        "Vegas never sleeps. Neither do we. Las Vegas is a city that runs on precision timing—shows start on the dot, reservations do not wait, and high-rollers expect perfection. Whether you are landing at Harry Reid after a cross-country flight, stepping off a G650 at Henderson Executive, or heading from CES to a dinner meeting at Wynn—Viaro is already waiting. Transparent pricing with rates locked at booking. No rideshare surges when 180,000 people flood the city for CES. Professional chauffeurs who know the back entrances to every major resort.",
      cta: { book: "Book Your Vegas Black Car", phone: "(206) 672-8281" },
    },

    trustBarTitle: "Trusted by Vegas VIPs & Convention Leaders",
    trustBar: [
      "60,000+ Trips",
      "99.8% On-Time",
      "3 Airports",
      "24/7 Live Support",
    ],

    bodyContent: {
      h2: "Airport-by-Airport: Insider Tips from Local Experts",
      h3: "Mastering the Logistics of Top FBOs and Commercial Hubs",
      image: {
        src: "/images/HarryReidArrival.png",
        alt: "Viaro chauffeur at Harry Reid International Airport loading luggage into luxury black car.",
        caption:
          "We know every terminal, every resort back entrance, and every shortcut on the Strip.",
      },
      content: [
        "Las Vegas has three airports serving different needs. Harry Reid handles the masses. Henderson and North Las Vegas serve private aviation. Knowing which one—and how to navigate the Strip traffic—separates VIP service from amateur hour. Here is how Viaro helps you move seamlessly.",
      ],
    },

    extraContent: [
      {
        h3: "Harry Reid International Airport (LAS)",
        image: {
          src: "/images/LASTerminal.png",
          alt: "Viaro chauffeur at Harry Reid International Airport loading luggage into luxury black car.",
          caption:
            "Harry Reid's terminals serve 50M+ passengers a year — your Viaro chauffeur meets you at the commercial vehicle lane, no confusion.",
        },
        content: [
          "Harry Reid (formerly McCarran) is the 7th busiest airport in North America—50+ million passengers a year, with massive spikes during CES, SEMA, and major fight weekends. Two terminals, dozens of gates, and the famous slot machines greeting you at arrivals.",
          "Insider tip: Terminal 1 serves most domestic flights; Terminal 3 handles international and some domestic carriers. The rideshare pickup is in a parking garage—hot in summer, crowded always. Viaro meets you at the commercial vehicle lane on Level 1 of each terminal. Step outside, step into air conditioning.",
          <>
            Popular destinations from LAS:{" "}
            <A href="https://bellagio.mgmresorts.com/">Bellagio</A>,{" "}
            <A href="https://www.wynnlasvegas.com/">Wynn Las Vegas</A>,{" "}
            <A href="https://www.vegasmeansbusiness.com/">
              Las Vegas Convention Center
            </A>
            , Downtown/Fremont Street, and Red Rock Canyon.
          </>,
        ],
      },
      {
        h3: "Henderson Executive Airport (HND) — Private Aviation",
        image: {
          src: "/images/HNDAirport.png",
          alt: "Viaro luxury black SUV waiting on the tarmac at Henderson Executive Airport FBO for private jet arrival.",
          caption:
            "Henderson Executive — where high-rollers land. We meet you at the jet stairs. Total time on the ground: seconds.",
        },
        content: [
          "Henderson Executive is Vegas's premier private aviation gateway—just 12 miles from the Strip, with quick access to the upscale Henderson and Summerlin communities. This is where high-rollers, entertainers, and corporate executives land when they want discretion and speed.",
          <>
            Insider tip: Viaro coordinates directly with FBO operations
            including{" "}
            <A href="https://www.signatureflight.com/">
              Signature Flight Support
            </A>{" "}
            and Henderson Executive FBO. Where security allows, we meet you at
            the jet stairs. Step off the plane and into the back seat—total time
            on the ground measured in seconds.
          </>,
          "Popular destinations from HND: Strip resorts (15 min), Henderson luxury communities, Lake Las Vegas, and connections to Summerlin.",
        ],
      },
      {
        h3: "North Las Vegas Airport (VGT) — Private Aviation",
        image: {
          src: "/images/VGTAirport.png",
          alt: "Viaro black car at North Las Vegas Airport serving general aviation and private jet passengers.",
          caption:
            "North Las Vegas Airport — closest to the Speedway. Direct tarmac pickup for NASCAR weekends and racing events.",
        },
        content: [
          "North Las Vegas Airport serves general aviation and private jets on the north side of the valley. Less congested than Henderson, VGT offers quick access to Downtown Las Vegas, the Speedway, and the growing communities in the northwest.",
          <>
            Insider tip: VGT is the closest airport to{" "}
            <A href="https://www.lvms.com/">Las Vegas Motor Speedway</A>—just 10
            minutes away. Perfect for NASCAR weekends and major racing events.
            We provide tarmac pickup and direct transfers to the track.
          </>,
          "Popular destinations from VGT: Las Vegas Motor Speedway, Downtown Las Vegas, Fremont Street, and north valley corporate parks.",
        ],
        cta: "Book Your Airport Transfer →",
      },
    ],

    whereSection: {
      h2: "Where Vegas Moves with Viaro",
      image: {
        src: "/images/LasVegasHotels.png",
        alt: "Viaro luxury black car at iconic Las Vegas Strip resort providing VIP transportation.",
        caption:
          "From convention halls to VIP nightclub entrances, Viaro moves Vegas's most demanding travelers.",
      },
      content: [
        <>
          Luxury Resorts:{" "}
          <A href="https://bellagio.mgmresorts.com/">Bellagio</A>,{" "}
          <A href="https://www.wynnlasvegas.com/">Wynn Las Vegas</A>,{" "}
          <A href="https://www.venetianlasvegas.com/">The Venetian</A>,{" "}
          <A href="https://www.caesars.com/caesars-palace">Caesars Palace</A>,
          ARIA, Cosmopolitan, Four Seasons, Encore.
        </>,
        <>
          Conventions &amp; Business:{" "}
          <A href="https://www.vegasmeansbusiness.com/">
            Las Vegas Convention Center
          </A>{" "}
          (CES, SEMA, NAB), Mandalay Bay Convention Center, Sands Expo, World
          Market Center.
        </>,
        <>
          Entertainment &amp; Sports:{" "}
          <A href="https://www.t-mobilearena.com/">T-Mobile Arena</A> (Golden
          Knights, UFC),{" "}
          <A href="https://www.allegiantstadium.com/">Allegiant Stadium</A>{" "}
          (Raiders, Super Bowl), MGM Grand Garden Arena, Sphere.
        </>,
        "Nightlife & Dining: XS Nightclub, Omnia, Hakkasan, Tao, celebrity chef restaurants throughout the Strip. Our chauffeurs know the VIP entrances.",
        <>
          Day Trips:{" "}
          <A href="https://www.redrockcanyonlv.org/"> Red Rock Canyon</A>,{" "}
          Hoover Dam, Grand Canyon West, Valley of Fire. Our{" "}
          <a
            href="en/black-car-services/hourly-chauffeur-service/"
            className="underline text-white hover:text-primary transition-colors"
          >
            hourly chauffeur service
          </a>{" "}
          is perfect for desert excursions.
        </>,
        <>
          See our full{" "}
          <a
            href={`/en/black-car-service/corporate-transportation`}
            className="underline text-white hover:text-primary transition-colors"
          >
            corporate transportation services
          </a>{" "}
          for convention groups and executive roadshows.{" "}
        </>,
      ],
      cta: "Explore Vegas Services →",
    },

    pricing: {
      h2: "Las Vegas Black Car Service Rates",
      vehicles: [
        {
          type: "Sedan",
          price: 85,
          passengers: 3,
          bags: 2,
          extras: [
            "Professional chauffeur",
            "Flight tracking included",
            "Flat rate — no surge",
          ],
        },
        {
          type: "SUV",
          price: 125,
          passengers: 6,
          bags: 5,
          extras: [
            "Extra luggage space",
            "Pre-assigned chauffeur",
            "Flight tracking included",
          ],
          badge: "Most Popular",
        },
        {
          type: "Sprinter Van",
          price: 275,
          passengers: 13,
          bags: 10,
          extras: [
            "Group & convention travel",
            "Forward-facing captain's chairs",
            "USB charging",
          ],
        },
      ],
      note: "Flat rates locked at booking. No surge pricing — ever. Contact us for Henderson, Summerlin, and long-distance quotes.",
      cta: "Get Exact Quote for Your Trip →",
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SPANISH
// ─────────────────────────────────────────────────────────────────────────────
export const locationEs: LocationItem[] = [
  // ══════════════════════════════════════════════════════════════════
  // SEATTLE SEA-TAC
  // ══════════════════════════════════════════════════════════════════
  {
    id: "seattle-seatac-airport",
    FA: "LocationsSeaTacFa",
    Testi: "locationTestimonials",
    hero: {
      image: {
        src: "/images/SeaTacLocation.png",
        alt: "SUV de servicio de auto negro Viaro en el Aeropuerto Internacional Seattle-Tacoma con el Monte Rainier visible al fondo.",
        caption:
          "Aeropuerto Internacional Seattle-Tacoma: La puerta de entrada al Pacífico Noroeste. Viaro ofrece servicio profesional de auto a todos los destinos de Puget Sound.",
      },
      h1: "Servicio de Auto en el Aeropuerto Seattle-Tacoma (SEA)",
      h2: "Auto Negro y Servicio de Chofer a Seattle, Bellevue, Tacoma y Todo Puget Sound",
      description:
        "Olvídate de la fila de taxis. Olvídate de los precios variables de las apps o los shuttles. Te recogemos en el tercer piso junto al elevador morado—la salida más rápida del SEA-TAC. Rastreamos tu vuelo en tiempo real. ¿Aterrizas antes? Ya estamos allí. ¿Hay retraso? Esperamos sin cargo adicional. Tu chofer te recibe, te ayuda con el equipaje y te lleva a casa o al hotel rápidamente. Tarifas fijas desde $129. Sin incrementos. Sin sorpresas. Ahorra hasta un 12% reservando con 30 días de anticipación.",
      cta: {
        book: "Reserva el Servicio de Auto en SEA-TAC",
        phone: "(206) 672-8281",
      },
    },

    trustBarTitle: "La confianza de los viajeros de Puget Sound",
    trustBar: [
      "Rastreo de Vuelos",
      "Ahorra 12% Reservando Antes",
      "Choferes Profesionales",
      "Reservas 24/7",
    ],
    bodyContent: {
      h2: "Sobre el Aeropuerto Internacional Seattle-Tacoma",
      h3: "La Guía del Profesional para Recogidas Sin Contratiempos",
      image: {
        src: "/images/SeaTacTerminal.png",
        alt: "Interior de la Terminal Central del Aeropuerto Internacional Seattle-Tacoma con pasajeros dirigiéndose al reclamo de equipaje.",
        caption:
          "La Terminal Central del SEA-TAC atiende a más de 51 millones de pasajeros al año, haciendo esencial un transporte terrestre rápido.",
      },
      content: [
        "El Aeropuerto Internacional Seattle-Tacoma (SEA) es el octavo aeropuerto más concurrido de los Estados Unidos. Más de 51 millones de pasajeros pasan por aquí cada año, convirtiéndolo en la principal puerta de entrada al Pacífico Noroeste. El aeropuerto está ubicado a 14 millas al sur del centro de Seattle, cerca de la Interestatal 5, junto a las ciudades de SeaTac y Tukwila.",
        "El SEA tiene una terminal principal con cuatro grandes espacios abiertos, conocidos como concourses. El Concourse A alberga a Alaska Airlines, la aerolínea más grande del aeropuerto. Los Concourses B, C y D atienden a Delta, United, American, Southwest y vuelos internacionales.",
        "El SEA tiene una sola terminal, por lo que es más fácil de navegar que grandes hubs como LAX o JFK. Aun así, el tráfico intenso puede congestionar el transporte terrestre en horas pico.",
      ],
    },
    extraContent: [
      {
        h3: "Dentro del SEA-TAC: Lo que Debes Saber Antes de Aterrizar",
        image: {
          src: "/images/SeattleInside.png",
          alt: "Vista aérea del tráfico en la I-5 de Seattle cerca del centro con rutas alternativas destacadas.",
          caption:
            "La expansión del Satélite Norte del SEA-TAC añadió 12 nuevas puertas — tu conductor Viaro ya está rastreando tu vuelo.",
        },
        content: [
          "Antes de tu vuelo, puedes tomar un café en uno de los muchos locales de Starbucks en la terminal. Es lo más apropiado en Seattle, la ciudad natal de la cadena. Para una comida en mesa, Floret by Café Flora ofrece cocina del Pacífico Noroeste cerca de las puertas C. Bambuza Vietnam Kitchen sirve pho y banh mi en la Terminal Central.",
          <>
            El aeropuerto completó recientemente una gran expansión en el
            Satélite Norte, añadiendo 12 nuevas puertas. El{" "}
            <A href="https://www.portseattle.org/es/sea-tac/airlines-destinations">
              sitio web oficial del Aeropuerto SEA
            </A>{" "}
            tiene estado de vuelos en tiempo real y mapas de terminales.{" "}
          </>,
          "Después de recoger tu equipaje en el reclamo de la Terminal Central, tienes dos opciones. Puedes luchar contra las multitudes en la recogida en la acera, o tomar el atajo local. Los viajeros inteligentes se dirigen al tercer piso del estacionamiento y salen por las señales del elevador morado. Tu chofer Viaro te espera justo allí—sin multitudes, sin confusión, sin esperar bajo la lluvia de Seattle.",
        ],
        items: [
          {
            label: "Centro de Seattle",
            time: "20 min",
            desc: "Pike Place Market, sede de Amazon, centro de convenciones, hoteles frente al mar",
          },
          {
            label: "Bellevue",
            time: "25 min",
            desc: "Campus de Microsoft, sede de T-Mobile, Bellevue Square, corredor tecnológico",
          },
          {
            label: "Redmond",
            time: "35 min",
            desc: "Campus principal de Microsoft, Nintendo of America, oficinas tech",
          },
          {
            label: "Tacoma",
            time: "30 min",
            desc: "Puerto de Tacoma, centro de Tacoma, Base Conjunta Lewis-McChord",
          },
          {
            label: "Terminales de Crucero",
            time: "25 min",
            desc: "Pier 66, Pier 91 (Smith Cove) para salidas de cruceros a Alaska",
          },
        ],
      },
      {
        h3: "Destinos Locales desde el SEA-TAC",
        image: {
          src: "/images/SeaTacLocal.png",
          alt: "Destinos populares de Viaro desde SeaTac: horizonte del centro de Seattle, distrito de negocios de Bellevue y terminal de cruceros de Seattle.",
          caption:
            "Desde los campus tecnológicos de Bellevue hasta los cruceros en el Pier 91, Viaro te conecta con todo Puget Sound.",
        },
        content: [
          <>
            ¿Te diriges al{" "}
            <A href="https://www.edgewaterhotel.com">Hotel Edgewater</A> frente
            al mar? ¿O al{" "}
            <A href="https://www.fairmont.com/seattle">
              Fairmont Olympic Hotel
            </A>{" "}
            en el centro? Conocemos las rutas más rápidas y los puntos de
            llegada en cada hotel importante de Seattle.
          </>,
          <>
            Para viajeros de negocios que visitan el{" "}
            <A href="https://www.amazon.jobs/es/locations/seattle">
              Campus South Lake Union de Amazon
            </A>
            , el{" "}
            <A href="https://www.wscc.com">Centro de Convenciones de Seattle</A>
            , o las oficinas tech en el corredor del Eastside, nuestros choferes
            ofrecen una oficina móvil tranquila con carga para que puedas
            prepararte para tus reuniones en el camino.
          </>,
        ],
      },
      {
        h3: "Cómo Navegar el Tráfico de Seattle desde el SEA",
        image: {
          src: "/images/SeattleTraffic.png",
          alt: "Vista aérea del tráfico en la I-5 de Seattle cerca del centro con rutas alternativas destacadas.",
          caption:
            "Nuestros conductores conocen cada ruta alternativa — ahorrándote entre 20 y 30 minutos en días de mucho tráfico.",
        },
        content: [
          "El tráfico de Seattle es uno de los peores de Estados Unidos. Durante la hora pico de la tarde (3–7 PM), lo que debería ser un recorrido de 20 minutos al centro puede tardar más de una hora en la I-5.",
          "Nuestros conductores conocen otras rutas. Toman la I-405 por Renton cuando la I-5 se paraliza. Usan la SR-99 para West Seattle. Usan calles locales por Georgetown cuando un accidente bloquea la autopista.",
          <>
            Monitoreamos el tráfico en tiempo real desde{" "}
            <A href="https://wsdot.wa.gov/travel/real-time/traffic">WSDOT</A> y
            ajustamos las rutas durante tu viaje. Si el puente 520 se
            congestiona, tomamos la I-90. Si hay un accidente cerca del{" "}
            <A href="https://www.seahawks.com">
              Lumen Field (estadio de los Seattle Seahawks)
            </A>
            , lo sabemos antes de que llegues al empalme. Este conocimiento
            local te ahorra entre 20 y 30 minutos en días concurridos.
          </>,
        ],
      },
      {
        h3: "Traslados a Cruceros: SEA-TAC al Pier 66 y Pier 91",
        image: {
          src: "/images/CruisePier.png",
          alt: "SUV negro Viaro dejando pasajeros en la terminal de cruceros Pier 91 Smith Cove en Seattle.",
          caption:
            "Traslados directos desde el SEA-TAC al Pier 66 y Pier 91 — tu conductor maneja todo el equipaje.",
        },
        content: [
          "Seattle es el punto de salida para cruceros a Alaska con Norwegian, Princess, Holland America y Celebrity. Ofrecemos traslados directos desde el SEA-TAC a la Terminal de Cruceros Smith Cove (Pier 91) y la Terminal Bell Street (Pier 66). Tu conductor maneja todo el equipaje y te deja justo en la entrada de la terminal—sin shuttles, sin problemas de estacionamiento.",
          <>
            Consulta la terminal de tu línea de cruceros en la{" "}
            <A href="https://www.portseattle.org/es/cruise">
              página de cruceros del Puerto de Seattle
            </A>
            . Rastreamos tu vuelo entrante, así que aunque aterrices tarde, te
            llevaremos al barco a tiempo.
          </>,
        ],
        cta: "Reserva Traslado SEA-TAC a Terminal de Cruceros →",
      },
    ],

    pricing: {
      h2: "Tarifas del Servicio de Auto en el SEA-TAC",
      vehicles: [
        {
          type: "Sedán",
          price: 129,
          passengers: 3,
          bags: 2,
          extras: [
            "Chofer profesional",
            "Rastreo de vuelo incluido",
            "Recogida en elevador morado",
          ],
        },
        {
          type: "SUV",
          price: 159,
          passengers: 6,
          bags: 5,
          extras: [
            "Espacio extra para equipaje",
            "Chofer asignado previamente",
            "Rastreo de vuelo incluido",
          ],
          badge: "Más Popular",
        },
        {
          type: "Meet & Greet",
          price: 25,
          passengers: 0,
          bags: 0,
          extras: [
            "Conductor dentro de la terminal",
            "Letrero con tu nombre en el reclamo de equipaje",
            "Complemento para cualquier vehículo",
          ],
        },
      ],
      note: "Las tarifas mostradas son para viajes de hasta 18 millas. Servicio por hora: $85/hora (sedán) o $115/hora (SUV). Reserva con 30 días de anticipación y ahorra hasta un 12%. Tu tarifa queda fija al momento de la reserva y nunca aumenta.",
      cta: "Obtén una Cotización Exacta para Tu Viaje →",
    },
  },

  // ══════════════════════════════════════════════════════════════════
  // NUEVA YORK
  // ══════════════════════════════════════════════════════════════════
  {
    id: "new-york",
    FA: "locationNewYorkFA",
    Testi: "locationTestimonials",

    hero: {
      image: {
        src: "/images/NewYorkLocation.png",
        alt: "Servicio de auto negro Viaro en la ciudad de Nueva York con el horizonte de Manhattan y un sedán de lujo acercándose al Midtown.",
        caption:
          "Desde Wall Street hasta Teterboro, de JFK a Newark—Viaro ofrece transporte ejecutivo impecable en toda el área metropolitana de Nueva York.",
      },
      h1: "Servicio de Auto Negro en Nueva York",
      h2: "JFK • LaGuardia • Newark • Teterboro • Westchester — Tarifas Transparentes, Sin Incrementos, 24/7",
      description:
        "Nueva York no espera. Tú tampoco deberías. En una ciudad donde cada minuto cuenta, Viaro ofrece servicio de auto negro ejecutivo que mantiene el ritmo de la ciudad más rápida del mundo. Ya sea que aterrices en JFK después de un vuelo nocturno, bajes de un jet privado en Teterboro, tomes un vuelo desde Newark o pases por LaGuardia—ya estamos allí, esperando en la acera o en la pista. Precios transparentes. Rastreo de vuelos en tiempo real. Choferes profesionales que conocen cada puente, túnel y atajo por los cinco distritos y hasta Nueva Jersey.",
      cta: { book: "Reserva Tu Auto Negro en NYC", phone: "(206) 672-8281" },
    },

    trustBarTitle: "La confianza de los líderes empresariales de Nueva York",
    trustBar: [
      "60,000+ Viajes",
      "99.8% a Tiempo",
      "5 Aeropuertos",
      "Soporte en Vivo 24/7",
    ],

    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "La Guía del Profesional para Recogidas Sin Contratiempos",
      image: {
        src: "/images/JFKArrival.png",
        alt: "Chofer Viaro cargando equipaje en un auto negro de lujo en la llegada de la Terminal 4 del Aeropuerto JFK.",
        caption:
          "Conocemos cada terminal, cada patrón de tráfico y cada atajo en Nueva York y Nueva Jersey.",
      },
      content: [
        "Volar a Nueva York significa navegar uno de los sistemas aeroportuarios más complejos del mundo. Cinco aeropuertos importantes. Decenas de terminales. Tráfico legendario. Así es como Viaro te ayuda a superar el caos en cada uno.",
      ],
    },
    extraContent: [
      {
        h3: "Aeropuerto Internacional JFK (JFK)",
        image: {
          src: "/images/JFKTerminal.png",
          alt: "Chofer Viaro recibiendo pasajeros en el carril de vehículos comerciales de la Terminal B del Aeropuerto LaGuardia.",
          caption:
            "Las terminales del JFK se extienden por 5 millas de carreteras — tu chofer Viaro te recibe en la acera, sin confusión.",
        },
        content: [
          "El JFK atiende a 60 millones de pasajeros al año en seis terminales. ¿El truco? Saber qué terminal usa tu aerolínea. Viaro rastrea tu vuelo en tiempo real, así que ya estamos esperando en la terminal correcta antes de que pases por aduana.",
          "Consejo interno: Las llegadas internacionales en la Terminal 1 y la Terminal 4 pueden tardar entre 45 y 90 minutos en pasar por aduana. Monitoreamos tu hora de aterrizaje y ajustamos la recogida—sin quedarte parado en llegadas preguntándote dónde está tu conductor.",
          <>
            Destinos populares desde JFK:{" "}
            <A href="https://www.nyse.com/">Wall Street</A>,{" "}
            <A href="https://www.theplazany.com/">
              Hoteles de Midtown Manhattan
            </A>
            ,{" "}
            <A href="https://www.discoverlongisland.com/the-hamptons/">
              Los Hamptons
            </A>
            .
          </>,
        ],
      },
      {
        h3: "Aeropuerto LaGuardia (LGA)",
        image: {
          src: "/images/LGATerminal.png",
          alt: "Chofer Viaro recibiendo pasajeros en el carril de vehículos comerciales de la Terminal B del Aeropuerto LaGuardia.",
          caption:
            "La nueva Terminal B de LaGuardia — aeropuerto hermoso, recogida de rideshare confusa. Viaro te recibe en el carril de vehículos comerciales.",
        },
        content: [
          "LaGuardia es el aeropuerto más cercano a Manhattan—apenas 8 millas del Midtown. Pero no te dejes engañar por la distancia. La Grand Central Parkway y la BQE pueden convertir un recorrido de 20 minutos en una hora durante la hora pico.",
          "Consejo interno: La nueva Terminal B está conectada por un puente peatonal al estacionamiento—pero la recogida de rideshare es un laberinto. Los choferes Viaro te reciben en el carril de vehículos comerciales en el nivel de llegadas. Sin caminatas hasta un estacionamiento lejano.",
          <>
            Destinos populares desde LGA:{" "}
            <A href="https://www.timessquarenyc.org/">Times Square</A>,{" "}
            <A href="https://www.msg.com/">Madison Square Garden</A>,{" "}
            <A href="https://javitscenter.com/">
              Centro de Convenciones Javits
            </A>
            .
          </>,
        ],
      },
      {
        h3: "Aeropuerto Internacional Newark Liberty (EWR)",
        image: {
          src: "/images/EWRTerminal.png",
          alt: "Auto negro Viaro en la Terminal C del Aeropuerto Internacional Newark Liberty.",
          caption:
            "Terminal C de Newark — el hub de United. Viaro rastrea tu terminal y espera en la acera correcta.",
        },
        content: [
          "Newark es el hub de United Airlines y a menudo la mejor opción para viajeros que se dirigen a Nueva Jersey, el Bajo Manhattan o cualquier punto a lo largo del corredor del tren PATH. También suele estar menos concurrido que JFK—y a veces es más económico para llegar en vuelo.",
          "Consejo interno: La Terminal C es territorio de United—enorme pero bien organizada. Las Terminales A y B atienden a todos los demás. El AirTrain conecta todas las terminales, pero si aterrizas en la Terminal A y tu auto espera en la Terminal C, eso es un desvío de 15 minutos. Viaro rastrea tu terminal y te recibe en la acera de llegadas correcta.",
          <>
            Destinos populares desde EWR: Jersey City, Hoboken, Bajo Manhattan
            (vía Túnel Holland),{" "}
            <A href="https://www.prucenter.com/">Prudential Center</A>,
            Princeton y conexiones a Filadelfia.
          </>,
        ],
      },
      {
        h3: "Aeropuerto Teterboro (TEB) — Aviación Privada",
        image: {
          src: "/images/TEBTarmac.png",
          alt: "SUV negro de lujo Viaro esperando en la pista del FBO del Aeropuerto Teterboro para la llegada de un jet privado.",
          caption:
            "Teterboro — donde vuela Wall Street. Te recibimos al pie de la escalerilla. Tiempo total en tierra: menos de 2 minutos.",
        },
        content: [
          "Teterboro es donde vuela Wall Street. Este aeropuerto exclusivo para FBO en Nueva Jersey maneja más tráfico de jets privados que casi cualquier otro lugar del país. Si aterrizas aquí, esperas un auto esperando en la pista—no en un estacionamiento.",
          <>
            Consejo interno: Viaro coordina directamente con las operaciones FBO
            en{" "}
            <A href="https://www.signatureflight.com/">
              Signature Flight Support
            </A>{" "}
            y <A href="https://www.atlanticaviation.com/">Atlantic Aviation</A>.{" "}
            Donde la seguridad lo permite, te recibimos al pie de la
            escalerilla. Tiempo total en tierra: menos de 2 minutos.
          </>,
          "Destinos populares desde TEB: Distrito Financiero, Midtown, Greenwich CT y conexiones en helicóptero a los Hamptons.",
        ],
      },
      {
        h3: "Aeropuerto del Condado de Westchester (HPN)",
        image: {
          src: "/images/HPNAirport.png",
          alt: "Auto negro Viaro en el Aeropuerto del Condado de Westchester atendiendo a ejecutivos corporativos y viajeros de la Costa Dorada de Connecticut.",
          caption:
            "Aeropuerto del Condado de Westchester — evita el caos del JFK. Directo a Manhattan por la I-95 o la Hutchinson River Parkway.",
        },
        content: [
          "HPN atiende a los ejecutivos corporativos de Westchester y la Costa Dorada de Connecticut. Maneja tanto vuelos comerciales (JetBlue, American, United) como aviación privada. Menos multitudes. Seguridad más rápida. Y directo por la I-95 o la Hutchinson River Parkway a Manhattan.",
          <>
            Consejo interno: Si vives en Westchester, Greenwich o Stamford—evita
            el caos del JFK y LaGuardia. HPN es tu aeropuerto local. Viaro
            ofrece traslados a la <A href="https://www.ibm.com/">sede de IBM</A>
            , <A href="https://www.pepsico.com/">PepsiCo</A> y el corredor de
            fondos de cobertura en Stamford.
          </>,
        ],
        cta: "Reserva Tu Traslado al Aeropuerto →",
      },
    ],

    whereSection: {
      h2: "A Dónde Van los Neoyorquinos con Viaro",
      image: {
        src: "/images/NewYorkHotels.png",
        alt: "Auto negro de lujo Viaro frente a un icónico hotel de Manhattan ofreciendo servicio de transporte ejecutivo.",
        caption:
          "Desde hoteles cinco estrellas hasta sedes de Fortune 500, Viaro mueve a los viajeros más exigentes de Nueva York.",
      },
      content: [
        <>
          Hoteles en Manhattan:{" "}
          <A href="https://www.theplazany.com/">The Plaza</A>,{" "}
          <A href="https://www.marriott.com/hotels/travel/nycxr-the-st-regis-new-york/">
            The St. Regis
          </A>
          , <A href="https://www.fourseasons.com/newyork/">Four Seasons</A>,{" "}
          <A href="https://www.peninsula.com/en/new-york">The Peninsula</A>.
        </>,
        "Distritos de negocios: Wall Street/Distrito Financiero, Midtown (corredor de Park Avenue), Hudson Yards, World Trade Center, frente al mar de Jersey City.",
        <>
          Eventos y entretenimiento:{" "}
          <A href="https://www.msg.com/">Madison Square Garden</A>,{" "}
          <A href="https://www.lincolncenter.org/">Lincoln Center</A>,{" "}
          <A href="https://www.broadway.com/">Teatros de Broadway</A>, Yankee
          Stadium, MetLife Stadium.
        </>,
        "Más allá de Manhattan: Los Hamptons, Greenwich CT, Princeton NJ, Atlantic City y conexiones al otro lado del Hudson con Hoboken y Jersey City.",
        <>
          Consulta nuestros{" "}
          <a
            href={`/es/black-car-service/corporate-transportation`}
            className="underline text-white hover:text-primary transition-colors"
          >
            servicios completos de transporte corporativo
          </a>{" "}
          y{" "}
          <a
            href={`/es/black-car-service/hourly-chauffeur-hire`}
            className="underline text-white hover:text-primary transition-colors"
          >
            opciones de chofer por hora
          </a>
        </>,
      ],
      cta: "Explora los Servicios en NYC →",
    },

    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en NYC",
      vehicles: [
        {
          type: "Sedán",
          price: 95,
          passengers: 3,
          bags: 2,
          extras: [
            "Chofer profesional",
            "Rastreo de vuelo incluido",
            "Tarifa fija — sin incrementos",
          ],
        },
        {
          type: "SUV",
          price: 135,
          passengers: 6,
          bags: 5,
          extras: [
            "Espacio extra para equipaje",
            "Chofer asignado previamente",
            "Rastreo de vuelo incluido",
          ],
          badge: "Más Popular",
        },
        {
          type: "Van Sprinter",
          price: 299,
          passengers: 13,
          bags: 10,
          extras: [
            "Viajes grupales y corporativos",
            "Asientos capitán orientados al frente",
            "Carga USB",
          ],
        },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin incrementos de precio — nunca. Contáctanos para cotizaciones a los Hamptons, Connecticut y larga distancia.",
      cta: "Obtén una Cotización Exacta para Tu Viaje →",
    },
  },

  // ══════════════════════════════════════════════════════════════════
  // LOS ÁNGELES
  // ══════════════════════════════════════════════════════════════════
  {
    id: "los-angeles-lax",
    FA: "LocationsLAFa",
    Testi: "locationTestimonials",

    hero: {
      image: {
        src: "/images/LosAngeles.png",
        alt: "Servicio de auto negro Viaro en Los Ángeles con el horizonte del centro de LA y un sedán de lujo en un bulevar bordeado de palmeras.",
        caption:
          "Desde Hollywood hasta las playas, de LAX a Van Nuys—Viaro ofrece transporte ejecutivo impecable en todo el Gran Los Ángeles.",
      },
      h1: "Servicio de Auto Negro en Los Ángeles",
      h2: "LAX • Van Nuys • Burbank • Long Beach • Orange County — Tarifas Fijas, Sin Incrementos, 24/7",
      description:
        "En LA, o estás atrapado en el tráfico—o tienes un conductor que sabe cómo evitarlo. Los Ángeles son 500 millas cuadradas de autopistas, cañones y costa. Ir de LAX a Beverly Hills puede tardar 25 minutos o 2 horas dependiendo de la hora del día. Por eso los ejecutivos, profesionales del entretenimiento y viajeros exigentes confían en Viaro para navegar la ciudad. Ya sea que aterrices en LAX después de un vuelo internacional, bajes de un jet privado en Van Nuys o tomes un vuelo de Southwest en Burbank—ya estamos allí. Tarifas transparentes. Choferes profesionales que conocen cada atajo del Valle a la playa.",
      cta: { book: "Reserva Tu Auto Negro en LA", phone: "(206) 672-8281" },
    },

    trustBarTitle:
      "La confianza de la élite del entretenimiento y los negocios de LA",
    trustBar: [
      "60,000+ Viajes",
      "99.8% a Tiempo",
      "6 Aeropuertos",
      "Soporte en Vivo 24/7",
    ],

    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "Trucos de Insider para Evitar el Tráfico en las Terminales",
      image: {
        src: "/images/LAXArrival.png",
        alt: "Chofer Viaro en el Aeropuerto LAX cargando equipaje en un auto negro de lujo con los icónicos pilares del LAX al fondo.",
        caption:
          "Conocemos cada terminal, cada camino secundario y cada patrón de tráfico en todo el Gran Los Ángeles.",
      },
      content: [
        "El Gran Los Ángeles tiene más aeropuertos que cualquier otra área metropolitana del país. Saber cuál usar—y cómo entrar y salir eficientemente—es la diferencia entre un viaje tranquilo y una pesadilla. Así es como Viaro te ayuda a navegar cada uno.",
      ],
    },

    extraContent: [
      {
        h3: "Aeropuerto Internacional de Los Ángeles (LAX)",
        image: {
          src: "/images/LAXTerminal.png",
          alt: "Auto negro Viaro en el nivel de llegadas del Aeropuerto Internacional de Los Ángeles atendiendo Beverly Hills, Santa Monica y el centro de LA.",
          caption:
            "Llegadas en LAX — evita el caos del rideshare. Viaro te recibe en la acera de la terminal correcta, siempre.",
        },
        content: [
          "LAX es el quinto aeropuerto más concurrido del mundo—88 millones de pasajeros al año en 9 terminales. El diseño en herradura es legendario por los embotellamientos, especialmente en hora pico. Pero hay trucos.",
          "Consejo interno: Evita el caos del estacionamiento LAX-it. Los choferes Viaro te reciben en las zonas de recogida designadas en el nivel de llegadas—no en el estacionamiento de rideshare al otro lado del aeropuerto. Rastreamos tu vuelo, así que llegamos justo cuando reclamas tu equipaje.",
          <>
            Destinos populares desde LAX:{" "}
            <A href="https://www.beverlyhills.org/">Beverly Hills</A>,{" "}
            <A href="https://www.santamonica.com/">Santa Mónica</A>, centro de
            LA, <A href="https://www.hollywoodchamber.net/">Hollywood</A>,
            Malibú y oficinas tech del Westside.
          </>,
        ],
      },
      {
        h3: "Aeropuerto Van Nuys (VNY) — Aviación Privada",
        image: {
          src: "/images/VNYTarmac.png",
          alt: "SUV negro Viaro recibiendo jet privado en la pista del FBO del Aeropuerto Van Nuys con las colinas de Hollywood al fondo.",
          caption:
            "Van Nuys — el aeropuerto de aviación general más concurrido del mundo. Te recibimos al pie de la escalerilla.",
        },
        content: [
          "Van Nuys es el aeropuerto de aviación general más concurrido del mundo. Aquí vuela Hollywood—ejecutivos de estudios, talentos de primera línea y multimillonarios tech aterrizan aquí a diario. Si llegas en jet privado, VNY es tu puerta de entrada a LA.",
          <>
            Consejo interno: Viaro coordina directamente con los FBO, incluyendo{" "}
            <A href="https://www.signatureflight.com/">
              Signature Flight Support
            </A>
            ,{" "}
            <A href="https://www.castlecookeaviation.com/">
              Castle & Cooke Aviation
            </A>{" "}
            y <A href="https://www.jetaviation.com/">Jet Aviation</A>. Donde la
            seguridad lo permite, te recibimos al pie de la escalerilla. Bajas
            del avión y entras al asiento trasero.
          </>,
          "Destinos populares desde VNY: Beverly Hills, Bel Air, Malibú, Warner Bros. Studios, Universal Studios, estudios de Netflix/Amazon/Apple en Hollywood.",
        ],
      },
      {
        h3: "Aeropuerto Hollywood Burbank (BUR)",
        image: {
          src: "/images/BURTerminal.png",
          alt: "Auto negro Viaro esperando en la acera de la entrada de la terminal del Aeropuerto Hollywood Burbank.",
          caption:
            "Burbank — sal directo de la puerta a tu auto Viaro. Sin shuttles, sin estacionamientos lejanos.",
        },
        content: [
          "Burbank es el secreto mejor guardado de LA. Menos multitudes, seguridad más rápida y puedes ir de la puerta a tu auto en menos de 5 minutos. Si te diriges al Valle, Pasadena o el centro de LA, evita el LAX y vuela a Burbank.",
          "Consejo interno: La terminal es pequeña—simplemente sal y tu auto Viaro te espera en la acera. Southwest, JetBlue, American, United y Delta vuelan aquí.",
          <>
            Destinos populares desde BUR:{" "}
            <A href="https://www.wbstudiotour.com/">Warner Bros. Studios</A>,{" "}
            <A href="https://www.universalstudioshollywood.com/">
              Universal Studios
            </A>
            , Disney Studios, Pasadena/Rose Bowl, Glendale.
          </>,
        ],
      },
      {
        h3: "Aeropuerto de Long Beach (LGB)",
        image: {
          src: "/images/LGBTerminal.png",
          alt: "Auto negro Viaro en la terminal boutique del Aeropuerto de Long Beach con palmeras y cielos despejados de California.",
          caption:
            "Long Beach — aeropuerto boutique, sin tráfico del LAX. El más cercano a la terminal de cruceros del Puerto de Long Beach.",
        },
        content: [
          "Long Beach es un aeropuerto boutique con una clientela fiel. JetBlue domina aquí, con vuelos asequibles y un ambiente relajado, casi de resort. También es el aeropuerto más cercano a la terminal de cruceros del Puerto de Long Beach.",
          "Consejo interno: Si vas a hacer un crucero desde Long Beach, vuela a LGB y evita completamente el tráfico del LAX. Ofrecemos traslados sin contratiempos directamente al barco.",
          <>
            Destinos populares desde LGB:{" "}
            <A href="https://www.queenmary.com/">Queen Mary</A>, Acuario del
            Pacífico, centro de Long Beach, playas de Orange County, Disneyland.
          </>,
        ],
      },
      {
        h3: "Aeropuerto John Wayne / Orange County (SNA)",
        image: {
          src: "/images/SNATerminal.png",
          alt: "Auto negro Viaro en la acera de llegadas del nivel inferior del Aeropuerto John Wayne de Orange County atendiendo a viajeros de Newport Beach y Disneyland.",
          caption:
            "Aeropuerto John Wayne — 15 minutos a Disneyland, 10 minutos a Newport Beach. Más tranquilo que el LAX.",
        },
        content: [
          <>
            El Aeropuerto John Wayne (también conocido como SNA o JWA) atiende a
            las prósperas comunidades de playa de Orange County—{" "}
            <A href="https://www.visitnewportbeach.com/">Newport Beach</A>,{" "}
            <A href="https://www.visitlagunabeach.com/">Laguna Beach</A>, Irvine
            y el{" "}
            <A href="https://disneyland.disney.go.com/">Resort de Disneyland</A>
            . Para viajeros que se dirigen al sur de LA, este aeropuerto ahorra
            entre 30 y 60 minutos comparado con el LAX.
          </>,
          "Consejo interno: El SNA tiene estrictas normas de ruido—más pequeño y tranquilo para los pasajeros. Viaro te recibe directamente en la acera del nivel de llegadas inferior.",
          <>
            Destinos populares desde SNA:{" "}
            <A href="https://disneyland.disney.go.com/">Disneyland</A>,{" "}
            <A href="https://www.visitnewportbeach.com/">Newport Beach</A>,{" "}
            <A href="https://www.visitlagunabeach.com/">Laguna Beach</A>, campus
            tech de Irvine, Centro de Convenciones de Anaheim.
          </>,
        ],
        cta: "Reserva Tu Traslado al Aeropuerto →",
      },
    ],

    whereSection: {
      h2: "A Dónde se Mueve LA con Viaro",
      image: {
        src: "/images/LAHotels.png",
        alt: "Auto negro de lujo Viaro frente a un icónico hotel de Beverly Hills ofreciendo transporte ejecutivo.",
        caption:
          "Desde los sets de filmación hasta los hoteles frente al mar, Viaro mueve a los viajeros más exigentes de LA.",
      },
      content: [
        <>
          Hoteles de lujo:{" "}
          <A href="https://www.fourseasons.com/beverlywilshire/">
            Beverly Wilshire
          </A>
          ,{" "}
          <A href="https://www.peninsula.com/en/beverly-hills">
            The Peninsula Beverly Hills
          </A>
          , <A href="https://www.chateaumarmont.com/">Chateau Marmont</A>, Hotel
          Bel-Air, Shutters on the Beach.
        </>,
        "Entretenimiento y estudios: Warner Bros., Universal, Paramount, Sony Pictures, sede de Netflix, Amazon Studios, Apple TV+.",
        <>
          Deportes y eventos:{" "}
          <A href="https://www.sofistadium.com/">SoFi Stadium</A>,{" "}
          <A href="https://www.cryptoarena.com/">Crypto.com Arena</A>, Dodger
          Stadium, Rose Bowl,{" "}
          <A href="https://www.lacclink.com/">Centro de Convenciones de LA</A>.
        </>,
        <>
          Compras y estilo de vida:{" "}
          <A href="https://www.rodeodrive-bh.com/">Rodeo Drive</A>, The Grove,
          Century City, South Coast Plaza, Fashion Island.
        </>,
        "Comunidades de playa: Malibú, Santa Mónica, Venice, Manhattan Beach, Newport Beach, Laguna Beach.",
        <>
          Consulta nuestros{" "}
          <a
            href={`/es/black-car-service/corporate-transportation`}
            className="underline text-white hover:text-primary transition-colors"
          >
            servicios completos de transporte corporativo
          </a>{" "}
          y{" "}
          <a
            href={`/es/black-car-service/hourly-chauffeur-hire`}
            className="underline text-white hover:text-primary transition-colors"
          >
            opciones de chofer por hora
          </a>
        </>,
      ],
      cta: "Explora los Servicios en LA →",
    },

    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Los Ángeles",
      vehicles: [
        {
          type: "Sedán",
          price: 95,
          passengers: 3,
          bags: 2,
          extras: [
            "Chofer profesional",
            "Rastreo de vuelo incluido",
            "Tarifa fija — sin incrementos",
          ],
        },
        {
          type: "SUV",
          price: 135,
          passengers: 6,
          bags: 5,
          extras: [
            "Espacio extra para equipaje",
            "Chofer asignado previamente",
            "Rastreo de vuelo incluido",
          ],
          badge: "Más Popular",
        },
        {
          type: "Van Sprinter",
          price: 299,
          passengers: 13,
          bags: 10,
          extras: [
            "Viajes grupales y corporativos",
            "Asientos capitán orientados al frente",
            "Carga USB",
          ],
        },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin incrementos de precio — nunca. Contáctanos para cotizaciones a Malibú, Orange County y larga distancia.",
      cta: "Obtén una Cotización Exacta para Tu Viaje →",
    },
  },

  // ══════════════════════════════════════════════════════════════════
  // CHICAGO
  // ══════════════════════════════════════════════════════════════════
  {
    id: "chicago-ord",
    FA: "LocationsChicagocoFa",
    Testi: "locationTestimonials",

    hero: {
      image: {
        src: "/images/Chicago.png",
        alt: "Servicio de auto negro Viaro en Chicago con el horizonte del centro y un sedán de lujo en la Avenida Michigan.",
        caption:
          "Desde la Magnificent Mile hasta O'Hare, desde el Loop hasta los suburbios—Viaro ofrece transporte ejecutivo impecable en todo Chicagoland.",
      },
      h1: "Servicio de Auto Negro en Chicago",
      h2: "O'Hare • Midway • DuPage FBO — Precios Transparentes, Tarifas Fijas, 24/7",
      description:
        "Chicago no se detiene por el clima, el tráfico ni las excusas. Nosotros tampoco. La Ciudad de los Vientos es un lugar donde los acuerdos de palabra todavía se cierran sobre una pizza deep-dish y los negocios se mueven a la velocidad del tren L. Ya sea que aterrices en O'Hare después de un vuelo nocturno transcontinental, vueles a Midway para una escala rápida o bajes de un Gulfstream en DuPage—Viaro ya está esperando. Precios transparentes con tarifas fijas al momento de la reserva. Sin incrementos cuando nieva. Rastreo de vuelos en tiempo real. Choferes profesionales que conocen la Kennedy, la Dan Ryan y cada atajo por el Loop.",
      cta: {
        book: "Reserva Tu Auto Negro en Chicago",
        phone: "(206) 672-8281",
      },
    },

    trustBarTitle: "La confianza de los ejecutivos y negociadores de Chicago",
    trustBar: [
      "60,000+ Viajes",
      "99.8% a Tiempo",
      "3 Aeropuertos",
      "Tarifas Fijas — Sin Incrementos",
    ],

    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "Tu Guía Rápida para Evitar el Caos en los Aeropuertos",
      image: {
        src: "/images/OHareArrival.png",
        alt: "Chofer Viaro en el Aeropuerto O'Hare cargando equipaje en un auto negro de lujo en las llegadas de la terminal.",
        caption:
          "Conocemos cada terminal, cada patrón de tráfico y cada solución ante el mal clima en todo Chicagoland.",
      },
      content: [
        "El sistema aeroportuario de Chicago atiende a más de 100 millones de pasajeros al año. Solo O'Hare tiene cuatro terminales y el infame empalme de la I-90/I-94. Saber qué terminal, qué ruta y qué plan de respaldo usar separa a los profesionales de los novatos. Así es como Viaro te ayuda a superar el caos.",
      ],
    },

    extraContent: [
      {
        h3: "Aeropuerto Internacional O'Hare (ORD)",
        image: {
          src: "/images/ORDTerminal.png",
          alt: "Auto negro Viaro en las llegadas del Aeropuerto Internacional O'Hare atendiendo el centro de Chicago y los suburbios.",
          caption:
            "Terminal 5 de O'Hare — las llegadas internacionales pueden tardar 90 minutos en aduana. Viaro ya está rastreando tu aterrizaje.",
        },
        content: [
          "O'Hare es el sexto aeropuerto más concurrido del mundo—una fortaleza de United y American Airlines con cuatro terminales y reputación de retrasos. Pero los retrasos no significan que tú esperes. Viaro rastrea cada vuelo en tiempo real, así que sabemos cuándo aterrizas antes que tú.",
          "Consejo interno: Las llegadas internacionales aterrizan en la Terminal 5, que está separada del complejo principal de terminales. La aduana puede tardar entre 30 y 90 minutos. Viaro monitorea tu hora de aterrizaje y ajusta la recogida—sin quedarte parado afuera en un enero de Chicago preguntándote dónde está tu conductor.",
          <>
            Destinos populares desde ORD:{" "}
            <A href="https://www.choosechicago.com/">The Loop</A>,{" "}
            <A href="https://www.themagnificentmile.com/">Magnificent Mile</A>,{" "}
            <A href="https://www.mccormickplace.com/">McCormick Place</A>, River
            North, Evanston y los suburbios del oeste.
          </>,
        ],
      },
      {
        h3: "Aeropuerto Internacional Chicago Midway (MDW)",
        image: {
          src: "/images/MDWTerminal.png",
          alt: "Auto negro Viaro en el carril de vehículos comerciales del nivel de llegadas del Aeropuerto Chicago Midway.",
          caption:
            "Midway — más cerca del centro que O'Hare, seguridad más rápida. Viaro te recibe en el carril de vehículos comerciales.",
        },
        content: [
          "Midway es el hub de Southwest Airlines en Chicago—más pequeño, más rápido y a menudo ignorado por los visitantes. Pero los locales lo saben: Midway está más cerca del centro (11 millas vs. las 17 de O'Hare) y la Línea Naranja te lleva al Loop en 25 minutos.",
          "Consejo interno: La terminal única de Midway significa menos caminata—pero el área de recogida de rideshare está al otro lado de un puente peatonal en el estacionamiento. Viaro te recibe en el carril de vehículos comerciales en el nivel de llegadas. Sal afuera, entra a tu auto.",
          "Destinos populares desde MDW: Downtown Loop, South Side (White Sox, Universidad de Chicago), Hyde Park, Pilsen y acceso rápido a la I-55 sur.",
        ],
      },
      {
        h3: "Aeropuerto DuPage (DPA) — Aviación Privada",
        image: {
          src: "/images/DPATarmac.png",
          alt: "SUV de lujo Viaro en la pista del FBO del Aeropuerto DuPage esperando la llegada de un jet privado al oeste de Chicago.",
          caption:
            "FBO de DuPage — la principal puerta de aviación privada de Chicagoland. Tiempo total en tierra: segundos, no minutos.",
        },
        content: [
          "DuPage es la principal puerta de aviación privada de Chicagoland. Ubicado a 25 millas al oeste del Loop en West Chicago, el DPA atiende a ejecutivos corporativos, departamentos de vuelo de Fortune 500 y viajeros en jet privado que quieren evitar O'Hare por completo.",
          <>
            Consejo interno: Viaro coordina directamente con las operaciones
            FBO, incluyendo{" "}
            <A href="https://www.signatureflight.com/">
              Signature Flight Support
            </A>{" "}
            y <A href="https://www.atlanticaviation.com/">Atlantic Aviation</A>.{" "}
            Donde la seguridad lo permite, te recibimos al pie de la
            escalerilla. Bajas del avión y entras al asiento trasero—tiempo
            total en tierra medido en segundos, no minutos.
          </>,
          "Destinos populares desde DPA: Centro de Chicago, campus corporativos de Naperville, Oak Brook (corredor de la sede de McDonald's), Schaumburg y conexiones al corredor tech de la I-88.",
        ],
        cta: "Reserva Tu Traslado al Aeropuerto →",
      },
    ],

    whereSection: {
      h2: "A Dónde se Mueve Chicago con Viaro",
      image: {
        src: "/images/ChicagoHotels.png",
        alt: "Auto negro de lujo Viaro frente a un icónico hotel de Chicago en la Avenida Michigan ofreciendo transporte ejecutivo.",
        caption:
          "Desde la Magnificent Mile hasta los campus corporativos, Viaro mueve a los viajeros más exigentes de Chicago.",
      },
      content: [
        <>
          Hoteles de lujo:{" "}
          <A href="https://www.peninsula.com/en/chicago">
            The Peninsula Chicago
          </A>
          ,{" "}
          <A href="https://www.langhamhotels.com/en/the-langham/chicago/">
            The Langham
          </A>
          , <A href="https://www.fourseasons.com/chicago/">Four Seasons</A>,{" "}
          <A href="https://www.ritzcarlton.com/en/hotels/chicago">
            The Ritz-Carlton
          </A>
          , Waldorf Astoria, Park Hyatt.
        </>,
        <>
          Distritos de negocios: The Loop, River North, West Loop, Fulton
          Market, Merchandise Mart, Willis Tower,{" "}
          <A href="https://www.boeing.com/">Sede Global de Boeing</A>, y campus
          suburbanos en Schaumburg, Oak Brook y Naperville.
        </>,
        <>
          Convenciones y eventos:{" "}
          <A href="https://www.mccormickplace.com/">McCormick Place</A> (el
          centro de convenciones más grande de América del Norte), Navy Pier,{" "}
          <A href="https://www.unitedcenter.com/">United Center</A>, Soldier
          Field, Wrigley Field.
        </>,
        <>
          Compras y cultura:{" "}
          <A href="https://www.themagnificentmile.com/">Magnificent Mile</A>,
          Oak Street,{" "}
          <A href="https://www.artic.edu/">Instituto de Arte de Chicago</A>,
          Millennium Park, distrito de teatros de Chicago.
        </>,
        <>
          Universidades y salud:{" "}
          <A href="https://www.northwestern.edu/">Northwestern University</A>,
          Universidad de Chicago, Rush Medical Center, Northwestern Memorial
          Hospital.
        </>,
        <>
          Consulta nuestros{" "}
          <a
            href={`/es/black-car-service/corporate-transportation`}
            className="underline text-white hover:text-primary transition-colors"
          >
            servicios completos de transporte corporativo
          </a>{" "}
          y{" "}
          <a
            href={`/es/black-car-service/hourly-chauffeur-hire`}
            className="underline text-white  hover:text-primary transition-colors"
          >
            opciones de chofer por hora
          </a>
        </>,
      ],
      cta: "Explora los Servicios en Chicago →",
    },

    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en Chicago",
      vehicles: [
        {
          type: "Sedán",
          price: 95,
          passengers: 3,
          bags: 2,
          extras: [
            "Chofer profesional",
            "Rastreo de vuelo incluido",
            "Tarifa fija — sin incrementos",
          ],
        },
        {
          type: "SUV",
          price: 135,
          passengers: 6,
          bags: 5,
          extras: [
            "Espacio extra para equipaje",
            "Chofer asignado previamente",
            "Rastreo de vuelo incluido",
          ],
          badge: "Más Popular",
        },
        {
          type: "Van Sprinter",
          price: 299,
          passengers: 13,
          bags: 10,
          extras: [
            "Viajes grupales y corporativos",
            "Asientos capitán orientados al frente",
            "Carga USB",
          ],
        },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin incrementos de precio — nunca. Ni siquiera en una nevada de Chicago. Contáctanos para cotizaciones a los suburbios y larga distancia.",
      cta: "Obtén una Cotización Exacta para Tu Viaje →",
    },
  },

  // ══════════════════════════════════════════════════════════════════
  // SAN FRANCISCO BAY AREA
  // ══════════════════════════════════════════════════════════════════
  {
    id: "san-francisco-sfo",
    FA: "LocationsSanFranciscoFa",
    Testi: "locationTestimonials",

    hero: {
      image: {
        src: "/images/SanFrancisco.png",
        alt: "Servicio de auto negro Viaro en San Francisco con el Puente Golden Gate y el horizonte del centro con la Torre Salesforce.",
        caption:
          "Desde el SFO hasta el Valle de Napa, de Silicon Valley a la ciudad—Viaro ofrece transporte ejecutivo impecable en toda el Área de la Bahía.",
      },
      h1: "Servicio de Auto Negro en el Área de la Bahía de San Francisco",
      h2: "SFO • San José • Oakland — Precios Transparentes, Tarifas Fijas, 24/7",
      description:
        "El Área de la Bahía funciona con innovación. Tu transporte también debería. San Francisco son 50 millas cuadradas de colinas, niebla e ideas millonarias. La península se extiende desde el SFO hasta Silicon Valley. El East Bay se expande desde Oakland hasta Fremont. Y en algún punto intermedio, tienes un vuelo que tomar, una reunión que no puedes perder o un viñedo que visitar. Viaro lo navega todo. Ya sea que aterrices en el SFO después de un vuelo nocturno transpacífico, vueles a San José para una presentación de capital de riesgo o tomes un Southwest en Oakland—ya estamos esperando. Precios transparentes con tarifas fijas al momento de la reserva. Sin incrementos cuando Dreamforce colapsa la ciudad. Choferes profesionales que conocen la 101, la 280 y cada atajo por SOMA.",
      cta: {
        book: "Reserva Tu Auto Negro en el Área de la Bahía",
        phone: "(206) 672-8281",
      },
    },

    trustBarTitle: "La confianza de los líderes de Silicon Valley",
    trustBar: [
      "60,000+ Viajes",
      "99.8% a Tiempo",
      "3 Aeropuertos",
      "Soporte en Vivo 24/7",
    ],

    bodyContent: {
      h2: "Aeropuerto por Aeropuerto: Consejos de Expertos Locales",
      h3: "Cómo Navegar los Aeropuertos Más Concurridos de América del Norte",
      image: {
        src: "/images/SFOArrival.png",
        alt: "Chofer Viaro en el Aeropuerto SFO cargando equipaje en un auto negro de lujo en la Terminal Internacional.",
        caption:
          "Conocemos cada terminal, cada empalme de autopista y cada alternativa al tráfico de hora pico en todo el Área de la Bahía.",
      },
      content: [
        "El Área de la Bahía tiene tres aeropuertos principales, cada uno sirviendo distintas partes de la región. Saber cuál usar—y cómo navegar el legendario tráfico entre ellos—separa a los locales de los visitantes. Así es como Viaro te ayuda a moverte sin contratiempos.",
      ],
    },

    extraContent: [
      {
        h3: "Aeropuerto Internacional de San Francisco (SFO)",
        image: {
          src: "/images/SFOTerminal.png",
          alt: "Auto negro Viaro en el Aeropuerto Internacional de San Francisco atendiendo el centro de SF y Silicon Valley.",
          caption:
            "Terminal Internacional del SFO — Viaro rastrea tu vuelo a través de los retrasos por niebla y te recibe en la zona de recogida del nivel superior.",
        },
        content: [
          "El SFO es el aeropuerto principal del Área de la Bahía—un hub de United Airlines con vuelos internacionales a Asia, Europa y todo el mundo. Cuatro terminales, incluyendo la arquitectónicamente impresionante Terminal Internacional G. Pero el SFO también tiene reputación: los retrasos por niebla son reales y la 101 Norte puede ser brutal.",
          "Consejo interno: Las llegadas internacionales pueden tardar entre 45 y 90 minutos en pasar por aduana. Viaro rastrea tu vuelo en tiempo real y ajusta la recogida. Te recibimos en las zonas de recogida designadas en el nivel de salidas (nivel superior)—no en el estacionamiento de rideshare al otro lado del aeropuerto.",
          <>
            Destinos populares desde SFO:{" "}
            <A href="https://www.sftravel.com/">Centro de San Francisco</A>,
            Silicon Valley (Palo Alto, Mountain View, Menlo Park),{" "}
            <A href="https://www.visitnapavalley.com/">Valle de Napa</A> y
            campus corporativos en la Península.
          </>,
        ],
      },
      {
        h3: "Aeropuerto Internacional de San José (SJC)",
        image: {
          src: "/images/SJCTerminal.png",
          alt: "Auto negro Viaro en las llegadas del Aeropuerto Internacional de San José atendiendo los campus tech de Silicon Valley.",
          caption:
            "Aeropuerto de San José — 10 minutos a Google, 15 minutos a Apple Park. La opción inteligente para Silicon Valley.",
        },
        content: [
          "San José es el aeropuerto local de Silicon Valley—más pequeño que el SFO, más fácil de navegar y justo en el corazón del corredor tecnológico. Si te diriges a Apple, Google o cualquier empresa al sur de Palo Alto, el SJC te ahorra una hora comparado con el SFO.",
          "Consejo interno: El SJC tiene dos terminales conectadas por un corto recorrido a pie. Southwest domina la Terminal B; todos los demás están en la Terminal A. El aeropuerto es compacto—puedes estar en la acera en 10 minutos después de aterrizar. Viaro te recibe en el carril de vehículos comerciales en el nivel de llegadas. Sin laberinto de rideshare.",
          <>
            Destinos populares desde SJC:{" "}
            <A href="https://www.apple.com/">Apple Park</A>,{" "}
            <A href="https://about.google/">Google</A>,{" "}
            <A href="https://about.meta.com/">Meta</A>, Universidad de Stanford,
            Santa Cruz y Monterey.
          </>,
        ],
      },
      {
        h3: "Aeropuerto Internacional de Oakland (OAK)",
        image: {
          src: "/images/OAKTerminal.png",
          alt: "Auto negro Viaro en las llegadas del Aeropuerto Internacional de Oakland atendiendo Berkeley, Walnut Creek y destinos del East Bay.",
          caption:
            "Aeropuerto de Oakland — sin niebla, seguridad más rápida, y Viaro sabe cuándo tomar el Puente San Mateo en lugar del Puente de la Bahía.",
        },
        content: [
          "Oakland es el aeropuerto del East Bay—un bastión de Southwest Airlines con acceso rápido a Berkeley, Walnut Creek y todo el corredor del East Bay. Suele estar menos concurrido que el SFO, con filas de seguridad más rápidas y sin retrasos por niebla.",
          "Consejo interno: Si te diriges a San Francisco desde Oakland, el Puente de la Bahía puede ser impredecible. Hora pico matutina hacia el oeste, hora pico vespertina hacia el este. Los choferes Viaro saben cuándo tomar la 880 al Puente San Mateo en su lugar—o cuándo el BART es realmente más rápido. Te damos opciones.",
          <>
            Destinos populares desde OAK:{" "}
            <A href="https://www.berkeley.edu/">UC Berkeley</A>, centro de
            Oakland, Walnut Creek, parques tech de Pleasanton/Dublin y
            conexiones a San Francisco vía Puente de la Bahía.
          </>,
        ],
        cta: "Reserva Tu Traslado al Aeropuerto →",
      },
    ],

    whereSection: {
      h2: "A Dónde se Mueve el Área de la Bahía con Viaro",
      image: {
        src: "/images/SFHotels.png",
        alt: "Auto negro de lujo Viaro en un viñedo del Valle de Napa o frente a un hotel de lujo en San Francisco.",
        caption:
          "Desde la Torre Salesforce hasta los viñedos de Sonoma, Viaro mueve a los viajeros más exigentes del Área de la Bahía.",
      },
      content: [
        <>
          País del vino:{" "}
          <A href="https://www.visitnapavalley.com/">Valle de Napa</A>,{" "}
          <A href="https://www.sonomacounty.com/">Sonoma</A>, Healdsburg,
          Yountville, St. Helena. Nuestro servicio de chofer por hora es
          perfecto para tours de vino de día completo.
        </>,
        <>
          Hoteles de lujo:{" "}
          <A href="https://www.fairmont.com/san-francisco/">
            Fairmont San Francisco
          </A>
          ,{" "}
          <A href="https://www.marriott.com/hotels/travel/sfoxr-the-st-regis-san-francisco/">
            The St. Regis
          </A>
          , <A href="https://www.fourseasons.com/sanfrancisco/">Four Seasons</A>
          , Ritz-Carlton, Palace Hotel.
        </>,
        <>
          Campus tech: Apple Park (Cupertino), Googleplex (Mountain View), Sede
          de Meta (Menlo Park),{" "}
          <A href="https://www.salesforce.com/">Torre Salesforce</A> (SF),
          Netflix (Los Gatos), Adobe, NVIDIA, LinkedIn y oficinas de capital de
          riesgo en Sand Hill Road.
        </>,
        <>
          Convenciones y eventos:{" "}
          <A href="https://www.moscone.com/">Centro Moscone</A> (Dreamforce,
          Apple WWDC, Google I/O),{" "}
          <A href="https://www.chasecenter.com/">Chase Center</A>, Oracle Park,
          Levi's Stadium.
        </>,
        <>
          Universidades:{" "}
          <A href="https://www.stanford.edu/">Universidad de Stanford</A>, UC
          Berkeley, UCSF, Universidad de Santa Clara.
        </>,
        <>
          Excursiones de un Día:{" "}
          <A href="https://www.redrockcanyonlv.org/">Red Rock Canyon</A>, Presa
          Hoover, Gran Cañón Oeste, Valley of Fire. Nuestro{" "}
          <a
            href="es/servicio-auto-lujo/chofer-por-hora"
            className="underline text-white hover:text-primary transition-colors"
          >
            servicio de chofer por hora
          </a>{" "}
          es perfecto para excursiones por el desierto.
        </>,
        <>
          Consulta nuestros{" "}
          <a
            href={`/es/black-car-service/corporate-transportation`}
            className="underline text-white hover:text-primary transition-colors"
          >
            servicios completos de transporte corporativo
          </a>{" "}
          para roadshows ejecutivos y reuniones con inversores.
        </>,
      ],
      cta: "Explora los Servicios en el Área de la Bahía →",
    },

    pricing: {
      h2: "Tarifas del Servicio de Auto Negro en el Área de la Bahía de San Francisco",
      vehicles: [
        {
          type: "Sedán",
          price: 95,
          passengers: 3,
          bags: 2,
          extras: [
            "Chofer profesional",
            "Rastreo de vuelo incluido",
            "Tarifa fija — sin incrementos",
          ],
        },
        {
          type: "SUV",
          price: 135,
          passengers: 6,
          bags: 5,
          extras: [
            "Espacio extra para equipaje",
            "Chofer asignado previamente",
            "Rastreo de vuelo incluido",
          ],
          badge: "Más Popular",
        },
        {
          type: "Van Sprinter",
          price: 299,
          passengers: 13,
          bags: 10,
          extras: [
            "Viajes grupales y corporativos",
            "Asientos capitán orientados al frente",
            "Carga USB",
          ],
        },
      ],
      note: "Tarifas fijas al momento de la reserva. Sin incrementos de precio — nunca. Ni siquiera durante Dreamforce. Contáctanos para cotizaciones a Napa, Sonoma y larga distancia.",
      cta: "Obtén una Cotización Exacta para Tu Viaje →",
    },
  },
];
