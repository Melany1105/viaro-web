import type { FAMapKey } from "./Fa";
import type { TestiMapKey } from "./Tetimonials";

type ExtraSection = {
  h3: string;
  quote?: string;
  image?: { src: string; alt: string };
  items?: { label: string; desc: string }[];
  list?: string[];
  portList?: { port: string; terminals: string; note: string }[];
  cta?: string;
  content?: string[];
};

type ServiceItem = {
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
airports: { region: string; airports: string[]; description: string; image?: string }[];  };
  extraContent?: ExtraSection[];
  pricing: {
    h2: string;
    vehicles: { type: string; price: number; passengers: number; models: string[]; extras: string[] }[];
    note: string;
    cta: string;
  };
};

export const serviceEn: ServiceItem[] = [
  // 1. AIRPORT TRANSFERS
  {
    id: "airport-transfers",
    FA: "ServiceAirportFa",
    Testi: "servicesAirportTestimonials",
    hero: {
      image: { src: "/images/ImagenAirport.png", alt: "Professional Viaro chauffeur waiting at airport baggage claim to assist a client." },
      h1: "Reliable Luxury Airport Car Service",
      h2: "Private Black Car Transfers Across the US, Canada, and Costa Rica",
      description: "Skip the taxi lines and avoid the chaos of ride-share apps. At Viaro, we track your flight in real time. If you land early, we are already there. If your flight gets delayed, we wait for you. Your driver meets you at baggage claim, helps with your luggage, and gets you to your destination safely.",
      cta: { book: "Book Your Airport Transfer Now", phone: "(206) 672-8281" },
    },
    trustBar: ["Live Flight Tracking", "Flat Rates", "Pro Chauffeurs", "Luxury Fleet", "24/7 Booking"],
    bodyContent: {
      h2: "Serving the World's Busiest Travel Hubs",
      h3: "Premium Transportation Where You Need It Most",
      content: [
        "We provide consistent, world-class luxury transportation at major airports across North America. Our luxury sedans, SUVs, and Sprinter vans are available for every trip.",
        "Our chauffeurs offer professional meet-and-greet services inside the terminal. We wait at baggage claim with a personalized sign, ready to assist with your bags.",
        "Unlike ride-share apps that surge during peak hours, Viaro guarantees your ride with transparent, flat-rate pricing.",
        "We track every flight in real time. Your chauffeur adjusts automatically — no need to call us.",
      ],
      airports: [
        { region: "New York",           airports: ["JFK", "LGA"],        description: "Navigate busy city traffic with ease to Manhattan or Wall Street.",image: "/images/ImagenNewYork2.png" },
        { region: "Los Angeles",        airports: ["LAX", "VNY"],        description: "Arrive in Hollywood or Beverly Hills in total comfort.", image: "/images/ImagenLosAngeles2.png" },
        { region: "Chicago",            airports: ["ORD", "MDW"],        description: "Dependable rides from O'Hare to the downtown Loop, regardless of weather.", image: "/images/ImagenChicago2.png" },
        { region: "Atlanta",            airports: ["ATL"],               description: "Skip the massive crowds at the world's busiest travel hub." , image: "/images/ImagenAtlanta2.png" },
        { region: "Miami & Seattle",    airports: ["MIA - SEA", "SEA"],        description: "Perfect for direct airport-to-cruise terminal transfers." , image: "/images/ImagenMiami2.png"},
        { region: "International Hubs", airports: ["YVR", "SJO", "LIR"],description: "Seamless service at major international travel gateways in Canada and Costa Rica.", image: "/images/ImagenSeatle2.png" },
      ],
    },
    pricing: {
      h2: "Airport Car Service Rates",
      vehicles: [
        { type: "Sedan",    price: 129, passengers: 3,  models: ["Cadillac", "Lincoln", "BMW"],             extras: ["Professional chauffeur", "Flight tracking included", "Gratuity to driver, not the company"] },
        { type: "SUV",      price: 169, passengers: 6,  models: ["Cadillac Escalade", "Mercedes", "Volvo"], extras: ["Extra luggage space", "Pre-assigned chauffeur", "Flight tracking included"] },
        { type: "Sprinter", price: 299, passengers: 14, models: ["Mercedes Sprinter"],                      extras: ["Up to 14 passengers", "Event and meeting transportation", "Ideal for corporate groups"] },
      ],
      note: "Rates shown are for trips up to 18 miles. All-inclusive. Minimum fare.",
      cta: "Check Airport Availability & Rates →",
    },
  },

  // 2. CORPORATE TRANSPORTATION
  {
    id: "corporate-transportation-executive-car-service",
    FA: "ServiceCorporateFa",
    Testi: "servicesCorporateTestimonials",
    hero: {
      image: { src: "/images/ImagenCorporate.png", alt: "Business executive arriving at a corporate meeting in a premium Viaro luxury SUV." },
      h1: "Corporate Transportation & Executive Car Service",
      h2: "Reliable Black Car Travel for Business Leaders Across North America",
      description: "Business moves fast. Your transportation must keep up. Leading companies—from tech giants in Seattle to financial firms on Wall Street—trust Viaro for executive ground transportation. Centralized billing. Flight tracking. FBO tarmac pickup. Available 24/7 across the United States, Canada, and Costa Rica.",
      cta: { book: "Open a Corporate Account Today", phone: "(206) 672-8281" },
    },
    trustBar: ["Total Discretion", "Centralized Billing", "Flight Tracking", "24/7 Support", "Fortune 500 Trusted"],
    bodyContent: {
      h2: "Why Leading Companies Choose Viaro",
      h3: "Industries That Rely on Viaro",
      content: [
        "If you manage travel for a large company, you know ground transportation is usually the weakest link. That is why companies across every industry trust Viaro as their corporate transportation partner.",
        "At massive airports like LAX, JFK, and ORD, rideshare apps force executives to walk half a mile to pickup lots. Viaro chauffeurs use restricted commercial vehicle lanes and meet your team at baggage claim.",
        "If your executives fly private into FBO hubs like Boeing Field (BFI) or Teterboro (TEB), our cars pull right up to the jet on the tarmac where security allows.",
        "Viaro aligns with GBTA travel policies: detailed digital receipts, centralized monthly invoicing, expense code tagging, and a dedicated account manager for enterprise clients.",
      ],
      airports: [
        { region: "Technology",    airports: ["SEA", "BFI"],        description: "Seattle-area tech companies rely on Viaro for executive transport between Redmond, South Lake Union, and Sea-Tac.",image: "/images/Technology.png" },
        { region: "Finance",       airports: ["TEB", "JFK", "LGA"], description: "Investment banks in New York use Viaro for client meetings and multi-city investor roadshows.",image: "/images/Finance.png" },
        { region: "Healthcare",    airports: ["ORD", "DTW"],        description: "Medical device companies trust Viaro for conference transport with HIPAA-conscious discretion." ,image: "/images/Healthcare.png"},
        { region: "Manufacturing", airports: ["DTW", "ORD", "IAH"], description: "Reliable SUVs and Sprinter vans for plant tours and supplier meetings." ,image: "/images/Manufacturing.png"},
        { region: "West Coast",    airports: ["LAX", "VNY", "SFO"], description: "Studio lots, Beverly Hills, and Silicon Valley with experienced local chauffeurs." ,image: "/images/WestCoast.png"},
        { region: "International", airports: ["YVR", "SJO", "LIR"], description: "Cross-border corporate travel in Canada and Costa Rica handled seamlessly." ,image: "/images/International.png"},
      ],
    },
    extraContent: [
      {
        h3: "Corporate Travel Hacks That Save Time",
        items: [
          { label: "The Commercial Lane Advantage", desc: "At massive airports like LAX, JFK, and ORD, rideshare apps force executives to walk half a mile to public pickup lots. Viaro chauffeurs use restricted commercial vehicle lanes. We meet your team at baggage claim and walk them straight to a waiting car — no crowds, no confusion." },
          { label: "The FBO Tarmac Pickup", desc: "If your executives fly private into FBO hubs like Boeing Field (BFI), Teterboro (TEB), or Van Nuys (VNY), they should never wait in a lobby. Where security allows, our cars pull right up to the jet on the tarmac. Your CEO steps off the plane and into the car." },
          { label: "The Multi-City Roadshow", desc: "Planning an investor roadshow across three cities in two days? One Viaro account handles complex logistics across 25+ cities — New York to Boston to Chicago, seamlessly." },
        ],
      },
      {
        h3: "Built for Travel Policy Compliance",
        list: [
          "Detailed digital receipts for every trip",
          "Centralized monthly invoicing for finance departments",
          "Expense code tagging for cost center allocation",
          "24/7 booking for executive assistants and travel managers",
          "Dedicated account manager for enterprise clients",
        ],
        cta: "Get a Custom Corporate Quote →",
      },
    ],
    pricing: {
      h2: "Corporate Car Service Rates",
      vehicles: [
        { type: "Executive Sedan",    price: 129, passengers: 3,  models: ["Mercedes S-Class", "BMW 7 Series", "Audi A8"],           extras: ["Quiet cabin & Wi-Fi", "Professional chauffeur", "Centralized billing"] },
        { type: "Executive SUV",      price: 169, passengers: 6,  models: ["Cadillac Escalade", "Lincoln Navigator", "Mercedes GLS"], extras: ["Up to 6 passengers + luggage", "Pre-assigned chauffeur", "Flight tracking included"] },
        { type: "Executive Sprinter", price: 299, passengers: 14, models: ["Mercedes Sprinter"],                                      extras: ["Up to 14 passengers", "Conference setup available", "Ideal for roadshows & teams"] },
      ],
      note: "Rates shown are for trips up to 18 miles. All-inclusive. Minimum fare.",
      cta: "Get a Custom Corporate Quote →",
    },
  },

  // 3. FBO & AIRLINE CREW TRANSFERS
  {
    id: "fbo-crew-transportation",
    FA: "ServiceAirlineFa",
    Testi: "servicesAirlineTestimonials",
    hero: {
      image: { src: "/images/ImagenAirline.png", alt: "Black luxury car parked on the tarmac beside a private jet at an FBO terminal." },
      h1: "FBO Ground Transportation & Airline Crew Transfers",
      h2: "Tarmac-Side Pickup for Private Aviation | Crew Shuttles at 25+ Airports",
      description: "You fly private to save travel time. Your ground transportation should respect that. Viaro tracks your tail number and has your car in position when your wheels touch down. Transparent pricing. Available 24/7 across the US, Canada, and Costa Rica.",
      cta: { book: "Request Your Instant Quote Now", phone: "(206) 672-8281" },
    },
    trustBar: ["Tail Number Tracking", "Tarmac-Side Pickup", "Flat Rates", "24/7 Dispatch", "Full Discretion"],
    bodyContent: {
      h2: "VIP FBO Transfers: Where Every Second Counts",
      h3: "Major FBO Hubs We Serve",
      content: [
        "It makes no sense to spend $20,000+ on a charter flight and then wait 20 minutes for a driver who cannot find the FBO entrance.",
        "We obtain the security clearances required to meet you tarmac-side — right beside your aircraft. We track your specific tail number through FlightAware, not a general schedule.",
        "You step off the jet and directly into your car. Door to door. Zero wasted time.",
        "Every Viaro chauffeur signs a confidentiality agreement. We coordinate directly with security teams when required. Discretion is standard, not an add-on.",
      ],
      airports: [
        { region: "Teterboro (TEB)",    airports: ["TEB"], description: "Manhattan's gateway. We coordinate with Signature, Atlantic, and Meridian for seamless ramp access." ,image: "/images/Teterboro.png"},
        { region: "Van Nuys (VNY)",     airports: ["VNY"], description: "LA's busiest GA airport. Direct service to Beverly Hills, Malibu, and studio lots.",image: "/images/VanNuys.png" },
        { region: "Boeing Field (BFI)", airports: ["BFI"], description: "Pacific Northwest private aviation hub. 10 minutes to downtown Seattle." ,image: "/images/BoeingField.png"},
        { region: "DuPage (DPA)",       airports: ["DPA"], description: "Avoid O'Hare commercial chaos. Seamless transfers to downtown Chicago.",image: "/images/DuePage.png" },
        { region: "Opa-locka (OPF)",    airports: ["OPF"], description: "South Florida's premier executive airport. Direct service to Miami Beach and cruise terminals.",image: "/images/OpaLocka.png" },
        { region: "Centennial (APA)",   airports: ["APA"], description: "Colorado's busiest GA airport. SUVs equipped for mountain resort transfers." ,image: "/images/Centannial.png"},
      ],
    },
    extraContent: [
      {
        h3: "The Pilot's Perspective: Crew Transportation That Works",
        quote: "\"After twenty years and thousands of flight hours in private air travel, I can tell you this. The hardest part of any trip is not the approach into busy Class B airspace — it is getting an exhausted crew to the hotel without a disaster. Most ground transport services treat crew pickups like an afterthought. Others make us stand in the cold at 2 AM waiting for a van that may or may not arrive. Viaro does it differently. They understand crew rest regulations and why getting us to bed fast actually matters for flight safety.\"",
        image: { src: "/images/ImagenAirline.png", alt: "Airline crew boarding a private Viaro Sprinter van for a quick and comfortable hotel transfer." },
      },
      {
        h3: "Insider Hacks at Major Airports",
        items: [
          { label: "JFK (New York)",    desc: "Skip the Terminal 4 rideshare zoo. Viaro picks up at the commercial vehicle area — faster exit, drivers who know Belt Parkway shortcuts to Jamaica hotels." },
          { label: "LAX (Los Angeles)", desc: "The LAX-it lot is a nightmare during shift changes. Viaro coordinates direct pickup at the terminal — saves at least 30 minutes." },
          { label: "ORD (Chicago)",     desc: "Winter layovers here test everyone. Viaro positions vehicles in the heated garage. When you clear customs at Terminal 5, they are already waiting." },
          { label: "ATL (Atlanta)",     desc: "The world's busiest airport means the world's worst ground chaos. Viaro uses the domestic north/south split strategically — they know your concourse before you do." },
          { label: "SEA (Seattle)",     desc: "Third floor, purple elevator. That is the crew's secret. Viaro knows it. Your driver waits there while others circle the arrivals curb." },
          { label: "YVR (Vancouver)",   desc: "For transborder crews, Viaro handles timing around customs delays. They track your flight and adjust — you never call to say 'we just landed.'" },
        ],
      },
      {
        h3: "Discretion Is Standard",
        list: [
          "We do not discuss who we drive. We do not post photos. We do not confirm or deny bookings.",
          "Every Viaro chauffeur signs a confidentiality agreement.",
          "Staff sweep and detail vehicles before each trip.",
          "We coordinate directly with security teams when required.",
          "This is not a premium add-on — it is how we operate for every FBO client.",
        ],
      },
    ],
    pricing: {
      h2: "FBO & Crew Transfer Rates",
      vehicles: [
        { type: "Sedan",    price: 129, passengers: 3,  models: ["Mercedes S-Class", "BMW 7 Series", "Audi A8"],           extras: ["Tarmac-side pickup", "Tail number tracking", "Full confidentiality"] },
        { type: "SUV",      price: 159, passengers: 6,  models: ["Cadillac Escalade", "Lincoln Navigator", "Mercedes GLS"], extras: ["Extra luggage space", "Pre-assigned chauffeur", "Security clearance coordination"] },
        { type: "Sprinter", price: 299, passengers: 14, models: ["Mercedes Sprinter"],                                      extras: ["Full crew transport", "Conference setup available", "Ideal for flight departments"] },
      ],
      note: "Rates shown are for trips up to 18 miles. All-inclusive. Minimum fare.",
      cta: "Reserve Your Private FBO Transfer →",
    },
  },

  // 4. CRUISE PORT TRANSFERS
  {
    id: "cruise-port-transfers",
    FA: "ServiceCruiseFa",
    Testi: "servicesCruiseTestimonials",
    hero: {
      image: { src: "/images/ImagenCruise.png", alt: "Family arriving at cruise port terminal in private Viaro SUV with professional chauffeur loading vacation luggage." },
      h1: "Seamless Cruise Port Transfers Car Service",
      h2: "Private Black Car Service at 15+ Cruise Ports in the US & Canada",
      description: "Skip the long taxi lines and crowded shuttle buses. With Viaro, your private chauffeur meets you right at the pier exit. We handle your bags and get you straight to the airport or hotel — in a clean, quiet, climate-controlled vehicle.",
      cta: { book: "Book Your Private Cruise Transfer Now", phone: "(206) 672-8281" },
    },
    trustBar: ["Ship Tracking", "Live Flight Tracking", "Flat Rates", "24/7 Dispatch", "Curbside Pickup"],
    bodyContent: {
      h2: "The Frequent Cruiser's Guide to Port Transfers",
      h3: "Port-by-Port Hacks That Save Time",
      content: [
        "The worst part of any cruise vacation is not the ship — it is the chaos at the port when you get off.",
        "At massive ports like Seattle Pier 91 or PortMiami, Uber and Lyft cannot reach the main terminal curb. You must drag your heavy bags up to half a mile to the rideshare pickup lot.",
        "Cruise line buses wait until every seat is full before leaving. On a busy turnaround day, you could sit there for 30–45 minutes.",
        "Viaro eliminates both problems. Our drivers pull up as close as port security allows — usually right at the terminal curb.",
      ],
      airports: [
        { region: "Seattle, WA",         airports: ["Pier 66", "Pier 91"],   description: "Alaska cruise hub. Viaro knows Elliott Avenue shortcuts to Sea-Tac in 25–35 minutes.", image: "/images/SeattleCruise.png" },
        { region: "Miami, FL",           airports: ["PortMiami"],             description: "World's busiest cruise port. We time your pickup to avoid peak MacArthur Causeway traffic.", image: "/images/PortMiami.png" },
        { region: "Fort Lauderdale, FL", airports: ["Port Everglades"],       description: "Multiple piers — Viaro coordinates the exact terminal with your cruise line.", image: "/images/PortEverglades.png" },
        { region: "Vancouver, BC",       airports: ["Canada Place"],          description: "Viaro handles the complex timing around US-Canada customs for a stress-free departure.", image: "/images/CanadaPlace.png" },
        { region: "New Orleans, LA",     airports: ["Erato Street Terminal"], description: "Transfers to MSY airport or French Quarter hotels, navigating narrow downtown streets.", image: "/images/EratoStreet.png" },
        { region: "Galveston, TX",       airports: ["Port of Galveston"],     description: "50-mile drive to IAH or HOU airports, timed to avoid I-45 traffic.", image: "/images/Galveston.png" },
      ],
    },
    extraContent: [
      {
        h3: "Insider Tips to Avoid the Cruise \"Terminal Scramble\"",
        items: [
          { label: "The Rideshare Hike", desc: "At massive ports like Seattle Pier 91 or PortMiami, Uber and Lyft cannot reach the main terminal curb. You must drag your heavy bags up to half a mile. With four suitcases and tired kids, that walk feels like a marathon." },
          { label: "The Shuttle Shuffle", desc: "Cruise line buses look convenient, but they wait until every seat is full before leaving. On a busy turnaround day, you could sit there for 30–45 minutes while the bus fills up." },
          { label: "The Viaro Difference", desc: "Our drivers pull up as close as port security allows — usually right at the terminal curb. You walk off the ship and into a luxury private car in minutes." },
        ],
      },
      {
        h3: "The Port Valet Layover Trick",
        list: [
          "If you have a late flight after your cruise, use the free Port Valet service at some ports to send your bags directly to your airline.",
          "Then have Viaro take you on a quick city tour before your flight.",
          "In Seattle: stop at Pike Place Market or the Space Needle before heading to Sea-Tac.",
          "In Miami: grab lunch in Wynwood or South Beach.",
          "Viaro's hourly charter service makes these post-cruise adventures easy.",
        ],
        cta: "Check Cruise Port Availability & Rates →",
      },
      {
        h3: "Cruise Ports We Serve",
        portList: [
          { port: "Seattle, WA",        terminals: "Pier 66 (Bell Street), Pier 91 (Smith Cove)", note: "Alaska cruise hub" },
          { port: "Vancouver, BC",       terminals: "Canada Place",                                note: "Alaska & Pacific cruises" },
          { port: "Miami, FL",           terminals: "PortMiami",                                   note: "World's busiest cruise port" },
          { port: "Fort Lauderdale, FL", terminals: "Port Everglades",                             note: "Caribbean cruise hub" },
          { port: "Tampa, FL",           terminals: "Port Tampa Bay",                              note: "Gulf of Mexico cruises" },
          { port: "Port Canaveral, FL",  terminals: "Disney Cruise Line, Carnival",                note: "Orlando area" },
          { port: "Galveston, TX",       terminals: "Port of Galveston",                           note: "Houston area cruises" },
          { port: "Los Angeles, CA",     terminals: "Port of Los Angeles (San Pedro)",             note: "Mexico & Hawaii" },
          { port: "San Diego, CA",       terminals: "B Street Pier",                               note: "Baja & Pacific cruises" },
          { port: "San Francisco, CA",   terminals: "Pier 27",                                     note: "Alaska & coastal cruises" },
        ],
      },
    ],
    pricing: {
      h2: "Cruise Transfer Rates",
      vehicles: [
        { type: "Sedan",    price: 129, passengers: 3,  models: ["Cadillac", "Lincoln", "BMW"],             extras: ["Professional chauffeur", "Ship & flight tracking", "Curbside pier pickup"] },
        { type: "SUV",      price: 159, passengers: 6,  models: ["Cadillac Escalade", "Mercedes", "Volvo"], extras: ["Extra luggage space", "Perfect for families", "Ship & flight tracking"] },
        { type: "Sprinter", price: 299, passengers: 14, models: ["Mercedes Sprinter"],                      extras: ["Up to 14 passengers", "Group cruise transfers", "Ample luggage capacity"] },
      ],
      note: "Rates shown are for trips up to 18 miles. All-inclusive. Minimum fare.",
      cta: "Check Cruise Port Availability & Rates →",
    },
  },

  // 5. HOURLY CHAUFFEUR SERVICE
  {
    id: "hourly-chauffeur-hire",
    FA: "ServiceHourlyFa",
    Testi: "servicesHourlyTestimonials",
    hero: {
      image: { src: "/images/ImagenHourly.png", alt: "Professional Viaro chauffeur opening door for VIP client during private hourly car service at luxury shopping destination." },
      h1: "Hourly Chauffeur Service & Private VIP Car Hire",
      h2: "Your Personal Driver for the Day — Safe, Discreet & Always Waiting",
      description: "Sometimes you need more than just a quick ride. You need a driver who stays with you. With Viaro's hourly chauffeur service, the car is yours. You control the pace of the day. Your driver waits while you shop, dine, or meet. No rushing. No searching for parking. No waiting alone on a dark street for a rideshare app. ",
      cta: { book: "Book Your Hourly Chauffeur Now", phone: "(206) 672-8281" },
    },
    trustBar: ["VIP Discretion", "Safe Family Travel", "Wait & Return", "Flexible Routing", "24/7 Support"],
    bodyContent: {
      h2: "Who Uses Hourly Chauffeur Service?",
      h3: "The Smart Choice for Safe Travel and Total Convenience",
      content: [
        "Whether you need a designated driver for a night out, safe transport for elderly parents, discreet VIP travel, or a full-day shopping companion —we are here for you. Serving 40+ cities across the United States, Canada, and Costa Rica.",
        "When you book our hourly VIP service, the car is yours. Your chauffeur follows your exact schedule, waits while you handle business, and keeps the car ready at a moment's notice.",
        "Our chauffeurs respect your privacy and provide a quiet, secure environment.",
        "This flexible service is perfect for a wide range of needs across our service areas.",
      ],
      airports: [
        { region: "VIP & Celebrity Discretion",    airports: ["LAX", "JFK", "All cities"],  description: "For high-profile clients—executives, entertainers, public figures—privacy is everything. Viaro chauffeurs are trained in discretion. We sign confidentiality agreements when requested. No questions. No photos. Just quiet, professional service. Our drivers know how to avoid paparazzi hotspots in cities like Los Angeles and New York, and can coordinate with security teams for seamless arrivals." , image: "/images/VIP.png" },
        { region: "Safe Travel for Women",          airports: ["All cities"],                description: "You should never have to wait alone on a dark street for a rideshare app. With Viaro's hourly service, your chauffeur is always waiting right outside the door—whether you're leaving a restaurant, a friend's home, or a late-night event. Our professionally screened drivers provide a secure environment, especially for solo women travelers who want peace of mind.", image: "/images/SafeWomen.png"  },
        { region: "Elderly Errands & Medical",      airports: ["All cities"],                description: "Parents and grandparents deserve patient, caring transportation. Viaro chauffeurs assist with door-to-door service, help with mobility, and wait during medical appointments. Whether it's a weekly doctor visit, pharmacy run, or a day of errands, we treat your loved ones with the respect they deserve.", image: "/images/Galveston.png"   },
        { region: "Family & Youth Safety",          airports: ["All cities"],                description: "Parents trust Viaro for safe transportation of children and teenagers. Need your teen picked up from soccer practice? Driving your family between activities all day? We provide child safety seats (infant, convertible, booster) upon request and treat younger passengers with extra care. Our drivers are background-checked and professionally trained.", image: "/images/Family.png"  },
        { region: "Shopping Trips & Errands",       airports: ["BH", "CHI", "SEA", "MIA"],  description: "Need a car for a full day of shopping? Your chauffeur drops you at the entrance, keeps the car nearby, and stores your bags safely in the trunk while you visit the next store. Popular shopping destinations we serve include Rodeo Drive [https://www.rodeodrive-bh.com/] in Beverly Hills, The Magnificent Mile [https://www.themagnificentmile.com/] in Chicago, and high-end boutiques in downtown Seattle, Miami, and Vancouver." , image: "/images/Galveston.png" },
        { region: "Designated Driver & Night Out",  airports: ["All cities"],                description: "Enjoy your evening without worrying about getting home safely. Viaro serves as your designated driver for dinners, parties, concerts, and nights out. We pick you up, wait while you enjoy the event, and drive you home—no surge pricing, no hunting for a ride at 2 AM.", image: "/images/Galveston.png"  },
        { region: "Wine Tours & Special Occasions", airports: ["SFO", "SEA", "PDX"],        description: "Napa Valley, Woodinville Wine Country near Seattle, and Willamette Valley in Oregon. Drive between wineries without worrying about the road.", image: "/images/Galveston.png"  },
        { region: "Hotel & Airport Connections",    airports: ["All cities"],                description: "Arriving for business with a packed schedule? Book hourly service from airport arrival [link to /airport-car-service/] to your hotel], then keep the car for meetings, site visits, or dinners. Your luggage stays secure in the vehicle while you work. Popular hotel connections include The Edgewater Hotel [https://www.edgewaterhotel.com/] and Fairmont Olympic Seattle [https://www.fairmont.com/seattle/].", image: "/images/Galveston.png"  },
        { region: "Weddings & Special Events",      airports: ["All cities"],                description: "Viaro provides hourly service for weddings, anniversaries, birthdays, bar-mitzvahs or quinceañeras, and milestone celebrations. We transport the wedding party between venues, provide getaway cars for the couple, and ensure guests arrive on time. Our drivers understand the importance of your special day and deliver flawless service.Whatever your day requires, Viaro helps you succeed with comfort, safety, and style." , image: "/images/Galveston.png" },
      ],
    },
   
    pricing: {
      h2: "Hourly Chauffeur Rates",
      vehicles: [
        { type: "Executive Sedan",    price: 119, passengers: 3,  models: ["Mercedes S-Class", "BMW 7 Series", "Audi A8"],           extras: ["3-hour minimum", "Driver waits at every stop", "VIP privacy standard"] },
        { type: "Executive SUV",      price: 149, passengers: 6,  models: ["Cadillac Escalade", "Lincoln Navigator", "Mercedes GLS"], extras: ["3-hour minimum", "Extra space for shopping bags", "Perfect for families"] },
        { type: "Executive Sprinter", price: 199, passengers: 13, models: ["Mercedes Sprinter"],                                      extras: ["3-hour minimum", "Up to 13 passengers", "Ideal for group outings & events"] },
      ],
      note: "Rates vary by city. Final quote provided at booking. Extra time billed in 15-minute increments.",
      cta: "Get Your Hourly Quote →",
    },
  },
];

export const serviceEs: ServiceItem[] = [
  // 1. TRASLADOS AL AEROPUERTO
  {
    id: "airport-transfers",
   FA: "ServiceAirportFa",
    Testi: "servicesAirportTestimonials",
    hero: {
      image: { src: "/images/ImagenAirport.png", alt: "Chofer profesional de Viaro esperando en la recogida de equipaje del aeropuerto." },
      h1: "Servicio de Auto de Lujo Confiable al Aeropuerto",
      h2: "Traslados Privados en Auto Negro por EE.UU., Canadá y Costa Rica",
      description: "Evite las filas de taxi y el caos de las apps de rideshare. En Viaro rastreamos su vuelo en tiempo real. Si aterriza antes, ya estamos ahí. Si se retrasa, lo esperamos. Su conductor lo recibe en la recogida de equipaje, ayuda con sus maletas y lo lleva a su destino con seguridad.",
      cta: { book: "Reserve su Traslado al Aeropuerto", phone: "(206) 672-8281" },
    },
    trustBar: ["Rastreo de Vuelo en Vivo", "Tarifas Fijas", "Choferes Pro", "Flota de Lujo", "Reservas 24/7"],
    bodyContent: {
      h2: "Servicio en los Hubs de Viaje más Ocupados del Mundo",
      h3: "Transporte Premium Donde Más lo Necesita",
      content: [
        "Ofrecemos soluciones de transporte de lujo consistentes en los principales aeropuertos de Norteamérica. Nuestros sedanes, SUVs y vans Sprinter están disponibles para cada viaje.",
        "Nuestros choferes ofrecen servicio profesional de recepción dentro de la terminal, esperándole en la recogida de equipaje con un cartel personalizado.",
        "A diferencia de las apps de rideshare con tarifas dinámicas, Viaro garantiza su traslado con precios fijos y transparentes.",
        "Rastreamos cada vuelo en tiempo real. Su chofer se ajusta automáticamente — sin necesidad de llamarnos.",
      ],
      airports: [
        { region: "Nueva York",        airports: ["JFK", "LGA"],        description: "Llegue a Manhattan o Wall Street con facilidad, evitando el tráfico de la ciudad.",image: "/images/ImagenNewYork2.png" },
        { region: "Los Ángeles",       airports: ["LAX", "VNY"],        description: "Llegue a Hollywood o Beverly Hills con total comodidad." , image: "/images/ImagenLosAngeles2.png"},
        { region: "Chicago",           airports: ["ORD", "MDW"],        description: "Traslados confiables desde O'Hare hasta el centro, sin importar el clima." , image: "/images/ImagenChicago2.png" },
        { region: "Atlanta",           airports: ["ATL"],               description: "Evite las multitudes en el hub de viaje más ocupado del mundo.", image: "/images/ImagenAtlanta2.png"  },
        { region: "Miami & Seattle",   airports: ["MIA - SEA", "SEA"],        description: "Perfecto para traslados directos del aeropuerto al puerto de cruceros.", image: "/images/ImagenMiami2.png" },
        { region: "Internacional",     airports: ["YVR", "SJO", "LIR"], description: "Servicio fluido en los principales aeropuertos internacionales de Canadá y Costa Rica." , image: "/images/ImagenSeatle2.png"},
      ],
    },
    pricing: {
      h2: "Tarifas del Servicio de Auto al Aeropuerto",
      vehicles: [
        { type: "Sedán",    price: 129, passengers: 3,  models: ["Cadillac", "Lincoln", "BMW"],             extras: ["Chofer profesional", "Rastreo de vuelo incluido", "Propina al chofer, no a la empresa"] },
        { type: "SUV",      price: 159, passengers: 6,  models: ["Cadillac Escalade", "Mercedes", "Volvo"], extras: ["Espacio extra para equipaje", "Chofer preasignado", "Rastreo de vuelo incluido"] },
        { type: "Sprinter", price: 299, passengers: 14, models: ["Mercedes Sprinter"],                      extras: ["Hasta 14 pasajeros", "Transporte para eventos y reuniones", "Ideal para grupos corporativos"] },
      ],
      note: "Tarifas para viajes de hasta 18 millas. Todo incluido. Tarifa mínima.",
      cta: "Verificar Disponibilidad y Tarifas →",
    },
  },

  // 2. TRANSPORTE CORPORATIVO
  {
    id: "corporate-transportation-executive-car-service",
    FA: "ServiceCorporateFa",
    Testi: "servicesCorporateTestimonials",
    hero: {
      image: { src: "/images/ImagenCorporate.png", alt: "Ejecutivo de negocios llegando a una reunión corporativa en un lujoso SUV de Viaro." },
      h1: "Transporte Corporativo y Servicio de Auto Ejecutivo",
      h2: "Transporte Confiable en Auto Negro para Líderes Empresariales en Norteamérica",
      description: "Los negocios se mueven rápido. Su transporte debe seguir el mismo ritmo. Las empresas líderes confían en Viaro para su transporte ejecutivo — silencioso, confiable, con facturación centralizada, rastreo de vuelo y recogida en la pista del FBO. Disponible 24/7 en EE.UU., Canadá y Costa Rica.",
      cta: { book: "Abrir una Cuenta Corporativa Hoy", phone: "(206) 672-8281" },
    },
    trustBar: ["Discreción Total", "Facturación Centralizada", "Rastreo de Vuelo", "Soporte 24/7", "Fortune 500"],
    bodyContent: {
      h2: "Por Qué las Empresas Líderes Eligen Viaro",
      h3: "Industrias que Confían en Viaro",
      content: [
        "Si administra viajes para una empresa grande, sabe que el transporte terrestre suele ser el eslabón más débil. Por eso empresas de todos los sectores confían en Viaro.",
        "En aeropuertos masivos como LAX, JFK y ORD, las apps de rideshare obligan a los ejecutivos a caminar media milla. Viaro usa carriles comerciales exclusivos.",
        "Si sus ejecutivos vuelan privado a hubs FBO como Boeing Field (BFI) o Teterboro (TEB), nuestros autos llegan hasta la pista donde la seguridad lo permite.",
        "Viaro se alinea con las políticas del GBTA: recibos digitales, facturación centralizada, códigos de gasto y gerente de cuenta dedicado.",
      ],
      airports: [
        { region: "Tecnología",    airports: ["SEA", "BFI"],        description: "Empresas tecnológicas del área de Seattle confían en Viaro para transporte entre Redmond, South Lake Union y Sea-Tac.",image: "/images/Technology.png"},
        { region: "Finanzas",      airports: ["TEB", "JFK", "LGA"], description: "Bancos de inversión en Nueva York usan Viaro para reuniones con clientes y roadshows multi-ciudad.",image: "/images/Finance.png" },
        { region: "Salud",         airports: ["ORD", "DTW"],        description: "Empresas médicas confían en Viaro para transporte de conferencias con discreción.",image: "/images/Healthcare.png" },
        { region: "Manufactura",   airports: ["DTW", "ORD", "IAH"], description: "SUVs y vans Sprinter confiables para tours de plantas y reuniones con proveedores.",image: "/images/Manufacturing.png" },
        { region: "Costa Oeste",   airports: ["LAX", "VNY", "SFO"], description: "Estudios, Beverly Hills y Silicon Valley con choferes locales experimentados." ,image: "/images/WestCoast.png" },
        { region: "Internacional", airports: ["YVR", "SJO", "LIR"], description: "Viajes corporativos transfronterizos en Canadá y Costa Rica sin complicaciones." ,image: "/images/International.png"},
      ],
    },
    extraContent: [
      {
        h3: "Trucos de Viaje Corporativo que Ahorran Tiempo",
        items: [
          { label: "La Ventaja del Carril Comercial", desc: "En aeropuertos masivos como LAX, JFK y ORD, las apps de rideshare obligan a los ejecutivos a caminar media milla. Los choferes de Viaro usan carriles comerciales exclusivos y reciben a su equipo en la recogida de equipaje." },
          { label: "Recogida en la Pista del FBO", desc: "Si sus ejecutivos vuelan privado a hubs FBO como Boeing Field (BFI), Teterboro (TEB) o Van Nuys (VNY), nunca deben esperar en un lobby. Donde la seguridad lo permite, nuestros autos llegan hasta el avión en la pista." },
          { label: "El Roadshow Multi-Ciudad", desc: "¿Planeando un roadshow en tres ciudades en dos días? Con una sola cuenta Viaro manejamos la logística compleja en 25+ ciudades — Nueva York, Boston, Chicago, sin contratiempos." },
        ],
      },
      {
        h3: "Diseñado para el Cumplimiento de Políticas de Viaje",
        list: [
          "Recibos digitales detallados por cada viaje",
          "Facturación mensual centralizada para departamentos de finanzas",
          "Etiquetado de códigos de gasto para asignación por centro de costos",
          "Reservas 24/7 para asistentes ejecutivos y gerentes de viaje",
          "Gerente de cuenta dedicado para clientes empresariales",
        ],
        cta: "Obtener Cotización Corporativa →",
      },
    ],
    pricing: {
      h2: "Tarifas de Transporte Corporativo",
      vehicles: [
        { type: "Sedán Ejecutivo",    price: 129, passengers: 3,  models: ["Mercedes S-Class", "BMW 7 Series", "Audi A8"],           extras: ["Cabina silenciosa con Wi-Fi", "Chofer profesional", "Facturación centralizada"] },
        { type: "SUV Ejecutivo",      price: 159, passengers: 6,  models: ["Cadillac Escalade", "Lincoln Navigator", "Mercedes GLS"], extras: ["Hasta 6 pasajeros + equipaje", "Chofer preasignado", "Rastreo de vuelo incluido"] },
        { type: "Sprinter Ejecutivo", price: 299, passengers: 14, models: ["Mercedes Sprinter"],                                      extras: ["Hasta 14 pasajeros", "Configuración de sala de conferencias", "Ideal para roadshows y equipos"] },
      ],
      note: "Tarifas para viajes de hasta 18 millas. Todo incluido. Tarifa mínima.",
      cta: "Obtener Cotización Corporativa Personalizada →",
    },
  },

  // 3. FBO Y TRIPULACIONES
  {
    id: "fbo-crew-transportation",
    FA: "ServiceAirlineFa",
    Testi: "servicesAirlineTestimonials",
    hero: {
      image: { src: "/images/ImagenAirline.png", alt: "Auto de lujo negro estacionado en la pista junto a un jet privado en una terminal FBO." },
      h1: "Transporte Terrestre FBO y Traslados para Tripulaciones",
      h2: "Recogida en la Pista para Aviación Privada | Traslados para Tripulaciones en 25+ Aeropuertos",
      description: "Vuela privado para ahorrar tiempo. Su transporte terrestre debe respetar eso. Viaro rastrea su número de cola y tiene su auto en posición cuando sus ruedas tocan la pista. Precios transparentes. Disponible 24/7 en EE.UU., Canadá y Costa Rica.",
      cta: { book: "Solicite su Cotización Inmediata", phone: "(206) 672-8281" },
    },
    trustBar: ["Rastreo de Número de Cola", "Recogida en Pista", "Tarifas Fijas", "Despacho 24/7", "Discreción Total"],
    bodyContent: {
      h2: "Traslados VIP FBO: Donde Cada Segundo Cuenta",
      h3: "Principales Hubs FBO que Atendemos",
      content: [
        "No tiene sentido gastar $20,000+ en un vuelo chárter y luego esperar 20 minutos a un conductor que no encuentra la entrada del FBO.",
        "Obtenemos los permisos de seguridad necesarios para recibirle en la pista — junto a su aeronave. Rastreamos su número de cola específico, no un horario general.",
        "Baja del jet y entra directamente a su auto. De puerta a puerta. Cero tiempo perdido.",
        "Cada chofer de Viaro firma un acuerdo de confidencialidad. La discreción es estándar, no un complemento.",
      ],
      airports: [
        { region: "Teterboro (TEB)",    airports: ["TEB"], description: "La puerta de Manhattan. Coordinamos con Signature, Atlantic y Meridian para acceso a la pista.", image: "/images/Teterboro.png"},
        { region: "Van Nuys (VNY)",     airports: ["VNY"], description: "El aeropuerto GA más activo de LA. Servicio directo a Beverly Hills, Malibú y estudios.", image: "/images/VanNuys.png"},
        { region: "Boeing Field (BFI)", airports: ["BFI"], description: "Hub de aviación privada del Noroeste. 10 minutos al centro de Seattle.", image: "/images/BoeingField.png"},
        { region: "DuPage (DPA)",       airports: ["DPA"], description: "Evite el caos comercial de O'Hare. Traslados fluidos al centro de Chicago.", image: "/images/DuePage.png"  },
        { region: "Opa-locka (OPF)",    airports: ["OPF"], description: "Aeropuerto ejecutivo premier del sur de Florida. Servicio directo a Miami Beach.", image: "/images/OpaLocka.png"},
        { region: "Centennial (APA)",   airports: ["APA"], description: "El aeropuerto GA más activo de Colorado. SUVs para traslados a resorts de montaña.", image: "/images/Centannial.png"},
      ],
    },
    extraContent: [
      {
        h3: "La Perspectiva del Piloto: Transporte para Tripulaciones que Funciona",
        quote: "\"Después de veinte años y miles de horas de vuelo en aviación privada, puedo decirles esto. La parte más difícil de cualquier viaje no es la aproximación al espacio aéreo Clase B — es llevar a una tripulación agotada al hotel sin que todo se derrumbe. La mayoría de los servicios de transporte tratan las recogidas de tripulación como una ocurrencia tardía. Viaro lo hace diferente. Entienden las regulaciones de descanso de tripulación y por qué llegarnos a la cama rápido importa de verdad para la seguridad de vuelo.\"",
        image: { src: "/images/ImagenAirline.png", alt: "Tripulación aérea abordando una van Sprinter privada de Viaro para un traslado cómodo al hotel." },
      },
      {
        h3: "Trucos Internos en los Principales Aeropuertos",
        items: [
          { label: "JFK (Nueva York)",    desc: "Evite el caos del Terminal 4. Viaro recoge en el área de vehículos comerciales — salida más rápida y conductores que conocen los atajos hacia los hoteles de Jamaica." },
          { label: "LAX (Los Ángeles)",   desc: "El lote LAX-it es una pesadilla durante los cambios de turno. Viaro coordina la recogida directa en la terminal — ahorra al menos 30 minutos." },
          { label: "ORD (Chicago)",       desc: "Las escalas invernales aquí ponen a prueba a todos. Viaro posiciona los vehículos en el garaje climatizado. Cuando pasa la aduana en el Terminal 5, ya lo están esperando." },
          { label: "ATL (Atlanta)",       desc: "El aeropuerto más ocupado del mundo significa el peor caos terrestre. Viaro usa estratégicamente la división norte/sur doméstica — conocen su concurso antes que usted." },
          { label: "SEA (Seattle)",       desc: "Tercer piso, ascensor morado. Ese es el secreto de las tripulaciones. Viaro lo sabe. Su conductor espera ahí mientras otros dan vueltas en la acera de llegadas." },
          { label: "YVR (Vancouver)",     desc: "Para tripulaciones transfronterizas, Viaro maneja el tiempo alrededor de los retrasos en aduana. Rastrean su vuelo y se ajustan — nunca tendrá que llamar para decir 'acabo de aterrizar'." },
        ],
      },
      {
        h3: "La Discreción es Estándar",
        list: [
          "No hablamos de a quién trasladamos. No publicamos fotos. No confirmamos ni negamos reservas.",
          "Cada chofer de Viaro firma un acuerdo de confidencialidad.",
          "El personal limpia y detalla los vehículos antes de cada viaje.",
          "Coordinamos directamente con los equipos de seguridad cuando se requiere.",
          "Esto no es un complemento premium — así operamos con cada cliente FBO.",
        ],
      },
    ],
    pricing: {
      h2: "Tarifas de Traslados FBO y Tripulaciones",
      vehicles: [
        { type: "Sedán",    price: 129, passengers: 3,  models: ["Mercedes S-Class", "BMW 7 Series", "Audi A8"],           extras: ["Recogida en pista", "Rastreo de número de cola", "Confidencialidad total"] },
        { type: "SUV",      price: 159, passengers: 6,  models: ["Cadillac Escalade", "Lincoln Navigator", "Mercedes GLS"], extras: ["Espacio extra para equipaje", "Chofer preasignado", "Coordinación de permisos"] },
        { type: "Sprinter", price: 299, passengers: 14, models: ["Mercedes Sprinter"],                                      extras: ["Transporte completo de tripulación", "Configuración de conferencias", "Ideal para departamentos de vuelo"] },
      ],
      note: "Tarifas para viajes de hasta 18 millas. Todo incluido. Tarifa mínima.",
      cta: "Reserve su Traslado FBO Privado →",
    },
  },

  // 4. TRASLADOS A CRUCEROS
  {
    id: "cruise-port-transfers",
   FA: "ServiceCruiseFa",
    Testi: "servicesCruiseTestimonials",
    hero: {
      image: { src: "/images/ImagenCruise.png", alt: "Familia llegando al puerto de cruceros en SUV privado de Viaro con chofer cargando el equipaje de vacaciones." },
      h1: "Servicio de Traslado al Puerto de Cruceros sin Estrés",
      h2: "Servicio de Auto Negro Privado en 15+ Puertos de Crucero en EE.UU. y Canadá",
      description: "Evite las largas filas de taxi y los autobuses repletos. Con Viaro, su chofer privado lo espera justo a la salida del muelle, maneja su equipaje y lo lleva directamente al aeropuerto u hotel — en un vehículo limpio, silencioso y climatizado.",
      cta: { book: "Reserve su Traslado Privado al Crucero", phone: "(206) 672-8281" },
    },
    trustBar: ["Rastreo del Barco", "Rastreo de Vuelo en Vivo", "Tarifas Fijas", "Despacho 24/7", "Recogida en Muelle"],
    bodyContent: {
      h2: "La Guía del Crucerista Frecuente para Traslados en Puerto",
      h3: "Trucos Puerto a Puerto que Ahorran Tiempo",
      content: [
        "La peor parte de cualquier crucero no es el barco — es el caos en el puerto cuando desembarca.",
        "En puertos masivos como el Muelle 91 de Seattle o PortMiami, Uber y Lyft no pueden llegar al andén principal. Debe arrastrar su equipaje hasta medio kilómetro.",
        "Los autobuses de la naviera esperan hasta llenarse antes de salir. En un día de alta rotación, puede estar sentado 30–45 minutos.",
        "Viaro elimina ambos problemas. Nuestros conductores llegan tan cerca como lo permite la seguridad del puerto — generalmente justo en el andén de la terminal.",
      ],
      airports: [
        { region: "Seattle, WA",         airports: ["Muelle 66", "Muelle 91"], description: "Hub de cruceros a Alaska. Viaro conoce los atajos por Elliott Avenue para llegar a Sea-Tac en 25–35 minutos.", image: "/images/SeattleCruise.png" },
        { region: "Miami, FL",           airports: ["PortMiami"],              description: "Puerto de cruceros más concurrido del mundo. Cronometramos su recogida para evitar el tráfico del MacArthur Causeway.", image: "/images/PortMiami.png" },
        { region: "Fort Lauderdale, FL", airports: ["Port Everglades"],        description: "Múltiples muelles — Viaro coordina la terminal exacta con su naviera." , image: "/images/PortEverglades.png"},
        { region: "Vancouver, BC",       airports: ["Canada Place"],           description: "Viaro maneja el timing complejo alrededor de la aduana EE.UU.-Canadá." , image: "/images/CanadaPlace.png"},
        { region: "Nueva Orleans, LA",   airports: ["Terminal Erato Street"],  description: "Traslados al aeropuerto MSY o hoteles del Barrio Francés." , image: "/images/EratoStreet.png"},
        { region: "Galveston, TX",       airports: ["Puerto de Galveston"],    description: "Viaje de 80 km a los aeropuertos IAH o HOU, cronometrado para evitar el tráfico de la I-45." , image: "/images/Galveston.png" },
      ],
    },
    extraContent: [
      {
        h3: "Consejos para Evitar el \"Caos de la Terminal\" en el Crucero",
        image: { src: "/images/ImagenCruise.png", alt: "Auto negro de lujo de Viaro recogiendo directamente en la acera de la terminal de cruceros." },
        items: [
          { label: "La Caminata del Rideshare", desc: "En puertos masivos como el Muelle 91 de Seattle o PortMiami, Uber y Lyft no pueden llegar al andén principal. Debe arrastrar su equipaje hasta medio kilómetro. Con cuatro maletas y niños cansados, esa caminata se siente como una maratón." },
          { label: "El Shuffle del Autobús", desc: "Los autobuses de la naviera parecen convenientes, pero esperan hasta llenarse antes de salir. En un día de alta rotación, puede estar sentado 30–45 minutos mientras el autobús se llena." },
          { label: "La Diferencia Viaro", desc: "Nuestros conductores llegan tan cerca como lo permite la seguridad del puerto — generalmente justo en el andén. Baja del barco y entra directamente a un auto privado de lujo en minutos." },
        ],
      },
      {
        h3: "El Truco del Port Valet para Escalas",
        list: [
          "Si tiene un vuelo tarde después del crucero, use el servicio gratuito Port Valet en algunos puertos para enviar su equipaje directamente a la aerolínea.",
          "Luego pida a Viaro que lo lleve a un tour rápido por la ciudad antes de su vuelo.",
          "En Seattle: una parada en Pike Place Market o el Space Needle antes de ir a Sea-Tac.",
          "En Miami: almuerzo en Wynwood o South Beach.",
          "El servicio de chofer por horas de Viaro hace estas aventuras post-crucero muy fáciles.",
        ],
        cta: "Verificar Disponibilidad en Puerto de Cruceros →",
      },
      {
        h3: "Puertos de Crucero que Atendemos",
        portList: [
          { port: "Seattle, WA",        terminals: "Muelle 66 (Bell Street), Muelle 91 (Smith Cove)", note: "Hub de cruceros a Alaska" },
          { port: "Vancouver, BC",       terminals: "Canada Place",                                    note: "Cruceros Alaska y Pacífico" },
          { port: "Miami, FL",           terminals: "PortMiami",                                       note: "Puerto más concurrido del mundo" },
          { port: "Fort Lauderdale, FL", terminals: "Port Everglades",                                 note: "Hub de cruceros al Caribe" },
          { port: "Tampa, FL",           terminals: "Port Tampa Bay",                                  note: "Cruceros al Golfo de México" },
          { port: "Port Canaveral, FL",  terminals: "Disney Cruise Line, Carnival",                    note: "Área de Orlando" },
          { port: "Galveston, TX",       terminals: "Puerto de Galveston",                             note: "Cruceros del área de Houston" },
          { port: "Los Ángeles, CA",     terminals: "Puerto de Los Ángeles (San Pedro)",               note: "México y Hawái" },
          { port: "San Diego, CA",       terminals: "B Street Pier",                                   note: "Cruceros Baja y Pacífico" },
          { port: "San Francisco, CA",   terminals: "Muelle 27",                                       note: "Cruceros Alaska y costas" },
        ],
      },
    ],
    pricing: {
      h2: "Tarifas de Traslados a Cruceros",
      vehicles: [
        { type: "Sedán",    price: 129, passengers: 3,  models: ["Cadillac", "Lincoln", "BMW"],             extras: ["Chofer profesional", "Rastreo de barco y vuelo", "Recogida en muelle"] },
        { type: "SUV",      price: 159, passengers: 6,  models: ["Cadillac Escalade", "Mercedes", "Volvo"], extras: ["Espacio extra para equipaje", "Perfecto para familias", "Rastreo de barco y vuelo"] },
        { type: "Sprinter", price: 299, passengers: 14, models: ["Mercedes Sprinter"],                      extras: ["Hasta 14 pasajeros", "Traslados grupales a cruceros", "Gran capacidad de equipaje"] },
      ],
      note: "Tarifas para viajes de hasta 18 millas. Todo incluido. Tarifa mínima.",
      cta: "Verificar Disponibilidad en Puerto de Cruceros →",
    },
  },

  // 5. CHOFER POR HORAS
  // 5. CHOFER POR HORAS
  {
    id: "hourly-chauffeur-hire",
    FA: "ServiceHourlyFa",
    Testi: "servicesHourlyTestimonials",
    hero: {
      image: { src: "/images/ImagenHourly.png", alt: "Chofer profesional de Viaro abriendo la puerta para un cliente VIP durante el servicio privado de chofer por horas en un destino de compras de lujo." },
      h1: "Servicio de Chofer por Horas y Alquiler Privado VIP",
      h2: "Tu Conductor Personal para el Día — Seguro, Discreto y Siempre Esperando",
      description: "A veces necesitas más que un simple traslado. Necesitas un conductor que se quede contigo. Con el servicio de chofer por horas de Viaro, el auto es tuyo. Tú controlas el ritmo del día. Tu conductor espera mientras compras, comes o te reúnes. Sin prisas. Sin buscar estacionamiento. Sin esperar solo en una calle oscura por una app de rideshare. ",
      cta: { book: "Reserva tu Chofer por Horas Ahora", phone: "(206) 672-8281" },
    },
    trustBar: ["Discreción VIP", "Transporte Familiar Seguro", "Espera y Regreso", "Ruta Flexible", "Soporte 24/7"],
    bodyContent: {
      h2: "¿Quién Usa el Servicio de Chofer por Horas?",
      h3: "La Opción Inteligente para Viajes Seguros y Total Comodidad",
      content: [
        "Ya sea que necesites un conductor designado para una salida nocturna, transporte seguro para tus padres mayores, viaje VIP discreto o un compañero de compras para todo el día —estamos aquí para ti. Servicio en 40+ ciudades en EE.UU., Canadá y Costa Rica.",
        "Cuando reservas nuestro servicio VIP por horas, el auto es tuyo. Tu chofer sigue tu agenda exacta, espera mientras manejas tus asuntos y mantiene el auto listo en todo momento.",
        "Nuestros choferes respetan tu privacidad y proporcionan un ambiente tranquilo y seguro.",
        "Este servicio flexible es perfecto para una amplia variedad de necesidades en todas nuestras ciudades de servicio.",
      ],
      airports: [
        { region: "Discreción VIP y Celebridades",   airports: ["LAX", "JFK", "Todas las ciudades"], description: "Para clientes de alto perfil — ejecutivos, artistas, figuras públicas — la privacidad lo es todo. Los choferes de Viaro están capacitados en discreción. Firmamos acuerdos de confidencialidad cuando se solicitan. Sin preguntas. Sin fotos. Solo servicio profesional y tranquilo. Nuestros conductores saben cómo evitar los puntos de paparazzi en ciudades como Los Ángeles y Nueva York, y pueden coordinarse con equipos de seguridad para llegadas sin contratiempos." },
        { region: "Viaje Seguro para Mujeres",        airports: ["Todas las ciudades"],               description: "Nunca deberías tener que esperar sola en una calle oscura por una app de rideshare. Con el servicio por horas de Viaro, tu chofer siempre está esperando justo afuera de la puerta — ya sea que salgas de un restaurante, la casa de un amigo o un evento nocturno. Nuestros conductores profesionalmente verificados ofrecen un ambiente seguro, especialmente para mujeres que viajan solas y quieren tranquilidad." },
        { region: "Mandados para Mayores y Médico",   airports: ["Todas las ciudades"],               description: "Los padres y abuelos merecen un transporte paciente y atento. Los choferes de Viaro ayudan con servicio puerta a puerta, asistencia de movilidad y espera durante citas médicas. Ya sea una visita semanal al médico, una ida a la farmacia o un día de mandados, tratamos a tus seres queridos con el respeto que merecen." },
        { region: "Seguridad Familiar y Juvenil",     airports: ["Todas las ciudades"],               description: "Los padres confían en Viaro para el transporte seguro de niños y adolescentes. ¿Necesitas que recojan a tu hijo del entrenamiento de fútbol? ¿Llevar a tu familia entre actividades todo el día? Proporcionamos sillas de seguridad infantil (para bebé, convertible, de refuerzo) bajo solicitud y tratamos a los pasajeros más jóvenes con cuidado especial. Nuestros conductores tienen verificación de antecedentes y capacitación profesional." },
        { region: "Compras y Mandados Personales",    airports: ["BH", "CHI", "SEA", "MIA"],          description: "¿Necesitas un auto para un día completo de compras? Tu chofer te deja en la entrada, mantiene el auto cerca y guarda tus bolsas de forma segura en el maletero mientras visitas la siguiente tienda. Destinos de compras populares que atendemos incluyen Rodeo Drive en Beverly Hills, The Magnificent Mile en Chicago y boutiques de lujo en el centro de Seattle, Miami y Vancouver." },
        { region: "Conductor Designado y Salida Nocturna", airports: ["Todas las ciudades"],         description: "Disfruta tu noche sin preocuparte por llegar a casa con seguridad. Viaro actúa como tu conductor designado para cenas, fiestas, conciertos y salidas nocturnas. Te recogemos, esperamos mientras disfrutas el evento y te llevamos a casa — sin precios de demanda, sin buscar un traslado a las 2 AM." },
        { region: "Tours de Vinos y Ocasiones Especiales", airports: ["SFO", "SEA", "PDX"],         description: "Napa Valley, Woodinville Wine Country cerca de Seattle y Willamette Valley en Oregon. Conduce entre viñedos sin preocuparte por el camino." },
        { region: "Conexiones de Hotel y Aeropuerto", airports: ["Todas las ciudades"],              description: "¿Llegando por negocios con una agenda apretada? Reserva el servicio por horas desde la llegada al aeropuerto hasta tu hotel, luego mantén el auto para reuniones, visitas a sitios o cenas. Tu equipaje permanece seguro en el vehículo mientras trabajas. Conexiones de hotel populares incluyen The Edgewater Hotel y Fairmont Olympic Seattle." },
        { region: "Bodas y Eventos Especiales",       airports: ["Todas las ciudades"],              description: "Viaro ofrece servicio por horas para bodas, aniversarios, cumpleaños, bar-mitzvahs o quinceañeras y celebraciones importantes. Transportamos al grupo de bodas entre los lugares, proporcionamos el auto para los novios y aseguramos que los invitados lleguen a tiempo. Nuestros conductores entienden la importancia de tu día especial y entregan un servicio impecable. Cualquiera que sea tu día, Viaro te ayuda a tener éxito con comodidad, seguridad y estilo." },
      ],
    },
    pricing: {
      h2: "Tarifas del Servicio de Chofer por Horas",
      vehicles: [
        { type: "Sedán Ejecutivo",    price: 119, passengers: 3,  models: ["Mercedes S-Class", "BMW 7 Series", "Audi A8"],           extras: ["Mínimo 3 horas", "Conductor espera en cada parada", "Estándar de privacidad VIP"] },
        { type: "SUV Ejecutivo",      price: 149, passengers: 6,  models: ["Cadillac Escalade", "Lincoln Navigator", "Mercedes GLS"], extras: ["Mínimo 3 horas", "Espacio extra para bolsas de compras", "Perfecto para familias"] },
        { type: "Sprinter Ejecutivo", price: 199, passengers: 13, models: ["Mercedes Sprinter"],                                      extras: ["Mínimo 3 horas", "Hasta 13 pasajeros", "Ideal para salidas grupales y eventos"] },
      ],
      note: "Las tarifas varían según la ciudad. Cotización final al momento de la reserva. El tiempo extra se cobra en incrementos de 15 minutos.",
      cta: "Obtener tu Cotización por Horas →",
    },
  },
];