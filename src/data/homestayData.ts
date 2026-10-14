export interface HomestayUnit {
  id: string;
  name: string;
  unitCode: string;
  type: '2bhk' | '1bhk' | '1rk' | 'single';
  typeLabel: string;
  badge?: string;
  description: string;
  capacity: string;
  amenities: string[];
  pricingNote: string;
  realHighlightNote: string;
  imagePrompt: string;
  bgGradient: string;
}

export interface ReviewItem {
  id: string;
  guestName: string;
  stayType: string;
  rating: number;
  date: string;
  content: string;
  highlight: string;
  verifiedSource: string;
}

export const HOMESTAY_INFO = {
  name: "Fairy Nest Homestay",
  tagline: "Couple-Friendly & Budget-Friendly Sanctuary in Guwahati",
  phone: "+91 70021 76711",
  displayPhone: "070021 76711",
  phoneRaw: "917002176711",
  emailPlaceholder: "contact@fairynesthomestay.com",
  instagramHandle: "@fairynesthomestayguwahati",
  instagramUrl: "https://www.instagram.com/fairynesthomestayguwahati/",
  address: "Gandhi Basti Rd, Gandhi Basti, Sarania Hills, Guwahati, Assam 781003",
  shortLocation: "Gandhi Basti, Guwahati-3, Assam",
  plusCode: "5QJ7+7R Guwahati, Assam",
  googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Fairy+Nest+Homestay+Gandhi+Basti+Sarania+Hills+Guwahati+Assam+781003",
  googleRating: 4.1,
  totalReviews: 132,
  web3FormsKey: "ACCESS_KEY_PLACEHOLDER", // Form submissions will send via POST to web3forms
  sourceHighlights: [
    "Couple Friendly",
    "Budget Friendly",
    "1BHK / 2BHK / Penthouse (1RK)",
    "All rooms kitchen & bathroom attached",
    "Complimentary breakfast praised by guests",
    "Peaceful Sarania Hills location near Paltan Bazar"
  ]
};

export const HOMESTAY_UNITS: HomestayUnit[] = [
  {
    id: "unit-2bhk",
    name: "Spacious 2BHK Family & Group Suite",
    unitCode: "Featured: Unit-1 & Unit-8 & Unit-10 (2BHK)",
    type: "2bhk",
    typeLabel: "2 Bedroom Hall Kitchen",
    badge: "Popular with Families & Groups",
    description: "Generously sized two-bedroom flat featuring comfortable double beds, living hall, attached private kitchen for self-cooking, and attached hygienic bathroom. Peaceful ambiance with hill breeze.",
    capacity: "Up to 4–6 Guests",
    amenities: [
      "Attached Private Kitchen",
      "Attached Bathroom with Geyser",
      "Couple Friendly",
      "Complimentary Breakfast",
      "Living Seating Area",
      "AC available [Pay on use / confirm with host]"
    ],
    pricingNote: "Starting from ₹2,405/night [Tariff varies by season & guest count — confirm with host]",
    realHighlightNote: "Documented in Instagram Highlights as Unit-1 (2bhk), Unit-8 (2bhk), Unit-10 (2bhk)",
    imagePrompt: "Warm 2BHK bedroom with double bed, clean linen, wooden headboard and attached bathroom",
    bgGradient: "from-emerald-950/80 to-slate-900"
  },
  {
    id: "unit-1bhk",
    name: "Cozy 1BHK Couple Apartment",
    unitCode: "Featured: Unit-2, Unit-9, Unit-12 & Unit-13 (1BHK)",
    type: "1bhk",
    typeLabel: "1 Bedroom Hall Kitchen",
    badge: "Guest Favorite for Couples",
    description: "Private 1BHK apartment tailored for couples and visiting professionals. Includes a dedicated bedroom, attached private kitchen equipped for making meals, attached bathroom, and warm ambient lighting.",
    capacity: "1–3 Guests (Couple Friendly)",
    amenities: [
      "Attached Private Kitchen",
      "Attached Private Bathroom",
      "Couple Friendly Environment",
      "Complimentary Breakfast",
      "Private Apartment Entry",
      "Central Location near Paltan Bazar"
    ],
    pricingNote: "Starting from ₹1,374 – ₹1,706/night [Confirm exact seasonal rate with host]",
    realHighlightNote: "Documented in Instagram Highlights as Unit-2 (1bhk), Unit-9 (1bhk), Unit-12 (1bhk), Unit-13 (1bhk)",
    imagePrompt: "Cozy 1BHK bedroom with warm fairy lights and adjacent kitchenette",
    bgGradient: "from-teal-950/80 to-stone-900"
  },
  {
    id: "unit-1rk",
    name: "Penthouse Studio (1RK)",
    unitCode: "Featured: Unit-3, Unit-4, Unit-5, Unit-6 & Unit-7 (1RK)",
    type: "1rk",
    typeLabel: "Penthouse Room & Kitchen",
    badge: "Rooftop Views",
    description: "Scenic top-floor penthouse studio room with attached kitchen counter, private bathroom, fairy light decor, and rooftop views of the Sarania Hills greenery. Perfect for a cozy weekend getaway.",
    capacity: "1–2 Guests (Couple Friendly)",
    amenities: [
      "Attached Kitchenette",
      "Attached Bathroom",
      "Fairy Light Ambiance",
      "Rooftop Breezy Vibe",
      "Complimentary Breakfast",
      "Budget Friendly Rates"
    ],
    pricingNote: "Budget-Friendly Studio Tariff [Confirm with host via WhatsApp]",
    realHighlightNote: "Documented in Instagram Highlights as Unit-3 through Unit-7 (1rk Penthouse)",
    imagePrompt: "Top floor penthouse studio bedroom with fairy lights and window to green hills",
    bgGradient: "from-amber-950/60 to-slate-900"
  },
  {
    id: "unit-single",
    name: "Single Traveler Cozy Room",
    unitCode: "Featured: Unit-11 Single",
    type: "single",
    typeLabel: "Single Room with Attached Bath",
    description: "Compact, quiet, and economical single room designed for solo travelers, backpackers, and transit visitors needing safe, comfortable stay in central Guwahati.",
    capacity: "1 Solo Guest",
    amenities: [
      "Attached Bathroom",
      "Clean Bedding & Storage",
      "Peaceful Work-Friendly Setting",
      "Complimentary Breakfast",
      "Near Railway Station & Markets"
    ],
    pricingNote: "Economical Solo Tariff [Confirm with host]",
    realHighlightNote: "Documented in Instagram Highlights as Unit-11 Single",
    imagePrompt: "Clean compact single bedroom in Guwahati homestay with attached bath",
    bgGradient: "from-emerald-950/60 to-neutral-900"
  }
];

export const VERBATIM_REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    guestName: "Verified Guest",
    stayType: "Couple Stay",
    rating: 5,
    date: "Google Maps Review",
    content: "Guests consistently praise this homestay for its complimentary breakfast, convenient location, reasonable prices, and the kindness and loving nature of the management.",
    highlight: "Complimentary breakfast & loving hospitality",
    verifiedSource: "Google Review Summary (4.1 Rating / 132 Reviews)"
  },
  {
    id: "rev-2",
    guestName: "Visiting Traveler",
    stayType: "Family & Long Stay",
    rating: 4,
    date: "Google Maps Review",
    content: "The attached kitchen in the rooms makes a huge difference when staying in Guwahati. Good quiet location in Sarania Hills yet easily accessible to Paltan Bazar and main roads.",
    highlight: "Kitchen in every room & central hill location",
    verifiedSource: "Google Review Summary"
  },
  {
    id: "rev-3",
    guestName: "Leisure Guest",
    stayType: "Couple Friendly Trip",
    rating: 5,
    date: "Google Maps Review",
    content: "Very budget-friendly and safe place for couples. Peaceful atmosphere with comfortable beds and helpful host who took care of breakfast and local travel guidance.",
    highlight: "Safe, peaceful, and truly budget-friendly",
    verifiedSource: "Google Review Summary"
  }
];

export const AMENITIES_LIST = [
  {
    title: "Attached Private Kitchen",
    description: "Every 1BHK, 2BHK, and Penthouse unit includes its own attached kitchen with space to prepare home-cooked meals.",
    icon: "UtensilsCrossed"
  },
  {
    title: "Attached Bathrooms",
    description: "Private ensuite bathrooms attached to all units with running water and hot water geyser options.",
    icon: "Bath"
  },
  {
    title: "Couple Friendly",
    description: "Welcoming and respectful stay policy for couples seeking a peaceful, private getaway in Guwahati.",
    icon: "Heart"
  },
  {
    title: "Complimentary Breakfast",
    description: "Warm breakfast included with your stay, consistently praised by guests in authentic reviews.",
    icon: "Coffee"
  },
  {
    title: "Sarania Hills Location",
    description: "Located in Gandhi Basti, Sarania Hills — close to Paltan Bazar (approx. 0.5 km) yet away from city chaos.",
    icon: "MapPin"
  },
  {
    title: "Budget-Friendly Value",
    description: "Transparent, honest rates designed for travelers who appreciate clean comfort without luxury markups.",
    icon: "BadgeIndianRupee"
  }
];

export const FAQ_LIST = [
  {
    question: "Is Fairy Nest Homestay couple-friendly?",
    answer: "Yes, absolutely! As explicitly highlighted on our Instagram profile and verified guest reviews, Fairy Nest Homestay warmly welcomes couples with valid identification."
  },
  {
    question: "Do all units have attached kitchens and bathrooms?",
    answer: "Yes, all rooms and apartments feature both an attached kitchen and an attached bathroom, allowing you privacy and the flexibility to prepare your own meals."
  },
  {
    question: "Is breakfast included in the booking?",
    answer: "Yes, guests consistently highlight our complimentary home-cooked breakfast as one of their favorite parts of staying with us."
  },
  {
    question: "Where exactly is the homestay located in Guwahati?",
    answer: "We are situated on Gandhi Basti Road, Sarania Hills, Gandhi Basti, Guwahati-3 (Assam 781003). It is near Nabagraha Than and approximately 0.5 km from Paltan Bazar and railway connectivity."
  },
  {
    question: "How do I confirm current room availability and seasonal tariffs?",
    answer: "You can message the management directly via WhatsApp at +91 70021 76711 or call us. We confirm room selection (Unit 1 to 13) and exact dates instantly without middleman booking commissions."
  }
];
