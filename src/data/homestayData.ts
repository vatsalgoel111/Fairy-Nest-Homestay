export interface HomestayUnit {
  id: string;
  name: string;
  unitCode: string;
  unitNumber: number;
  type: '2bhk' | '1bhk' | '1rk' | 'single';
  typeLabel: string;
  tagline: string;
  badge?: string;
  imageUrl: string;
  description: string;
  capacity: string;
  bedType: string;
  amenities: string[];
  kitchenFeatures: string[];
  pricingEstimate: string;
  realHighlightNote: string;
  accentColor: string;
}

export interface LandmarkItem {
  name: string;
  distance: string;
  time: string;
  category: 'transit' | 'sightseeing' | 'shopping';
  note: string;
  imageUrl: string;
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
  tagline: "Peaceful Hillside Homestay in Central Guwahati",
  phone: "+91 70021 76711",
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
  web3FormsKey: "ACCESS_KEY_PLACEHOLDER",
  heroImage: "/images/hero_homestay.jpg",
  breakfastImage: "/images/breakfast_spread.jpg",
  kitchenImage: "/images/kitchenette.jpg",
  hillsImage: "/images/sarania_hills.jpg",
  teaImage: "/images/assam_tea.jpg",
  bathroomImage: "/images/bathroom_luxury.jpg",
  balconyImage: "/images/balcony_view.jpg",
  sourceHighlights: [
    "Couple Friendly",
    "Budget Friendly",
    "1BHK / 2BHK / Penthouse (1RK) / Single Room",
    "Attached kitchen and bathroom in all rooms",
    "Free tasty breakfast included",
    "Peaceful Sarania Hills location near Paltan Bazar"
  ]
};

export const ALL_13_UNITS: HomestayUnit[] = [
  {
    id: "unit-1",
    name: "Master 2BHK Family Flat",
    unitCode: "Unit-1",
    unitNumber: 1,
    type: "2bhk",
    typeLabel: "2BHK Apartment",
    tagline: "Spacious 2-bedroom flat for families and travel groups",
    badge: "Flagship 2BHK",
    imageUrl: "/images/twobhk_living.jpg",
    description: "Big 2BHK flat with two furnished bedrooms, a comfortable sofa hall, and your own attached kitchen. Clean bedsheets, quiet surroundings, and cool hill air.",
    capacity: "Up to 5–6 Guests",
    bedType: "2 Queen Size Beds",
    amenities: ["Attached Kitchen", "Private Bath with Geyser", "Living Room Sofa", "Free Daily Breakfast", "Hill Views"],
    kitchenFeatures: ["Gas Stove / Induction", "Electric Tea Kettle", "Cooking Pots & Kadai", "Plates & Glasses"],
    pricingEstimate: "Starting from ₹2,400 / night",
    realHighlightNote: "Documented in official Instagram Stories as Unit-1 (2bhk)",
    accentColor: "#D4AF37"
  },
  {
    id: "unit-2",
    name: "Scenic 1BHK Couple Flat",
    unitCode: "Unit-2",
    unitNumber: 2,
    type: "1bhk",
    typeLabel: "1BHK Apartment",
    tagline: "Romantic cozy flat with pretty fairy lights for couples",
    badge: "Couple Favorite",
    imageUrl: "/images/onebhk_couple.jpg",
    description: "Private apartment with a comfortable bedroom, separate sitting area, attached kitchen, and warm fairy lights. Safe, quiet, and relaxing.",
    capacity: "1–3 Guests (Couple Friendly)",
    bedType: "1 Queen Bed + Sofa",
    amenities: ["Attached Kitchen", "Private Bathroom with Geyser", "Fairy Lights", "Free Daily Breakfast", "Quiet Balcony"],
    kitchenFeatures: ["Gas Stove", "Electric Kettle", "Pans & Ladles", "Dinner Plates"],
    pricingEstimate: "Starting from ₹1,400 – ₹1,700 / night",
    realHighlightNote: "Documented in official Instagram Stories as Unit-2 (1bhk)",
    accentColor: "#F0D78C"
  },
  {
    id: "unit-3",
    name: "Rooftop Penthouse Studio",
    unitCode: "Unit-3",
    unitNumber: 3,
    type: "1rk",
    typeLabel: "Penthouse (1RK)",
    tagline: "Top-floor studio with fresh hill air and open views",
    badge: "Penthouse",
    imageUrl: "/images/penthouse_studio.jpg",
    description: "Top-floor 1RK studio with high ceiling, private kitchen counter, attached bathroom, and scenic views of Sarania Hills.",
    capacity: "1–2 Guests (Couple Friendly)",
    bedType: "1 Queen Bed",
    amenities: ["Attached Kitchenette", "Private Bath with Geyser", "Rooftop Access", "Free Daily Breakfast"],
    kitchenFeatures: ["Tea Setup", "Electric Kettle & Pots", "Plates & Mugs"],
    pricingEstimate: "Starting from ₹1,200 / night",
    realHighlightNote: "Documented in official Instagram Stories as Unit-3 (1rk)",
    accentColor: "#C5A059"
  },
  {
    id: "unit-4",
    name: "Cozy Penthouse Studio",
    unitCode: "Unit-4",
    unitNumber: 4,
    type: "1rk",
    typeLabel: "Penthouse (1RK)",
    tagline: "Clean and peaceful studio room for short and long stays",
    imageUrl: "/images/room_aesthetic_3.jpg",
    description: "Neat, compact 1RK penthouse setup with attached cooking corner and hot water geyser. Perfect for weekend trips or work visits.",
    capacity: "1–2 Guests",
    bedType: "1 Queen Bed",
    amenities: ["Attached Kitchen", "Private Bathroom", "Quiet Floor", "Free Daily Breakfast"],
    kitchenFeatures: ["Cooking Basics", "Electric Kettle", "Plates & Mugs"],
    pricingEstimate: "Starting from ₹1,200 / night",
    realHighlightNote: "Documented in official Instagram Stories as Unit-4 (1rk)",
    accentColor: "#D4AF37"
  },
  {
    id: "unit-5",
    name: "Fairy Light Penthouse Studio",
    unitCode: "Unit-5",
    unitNumber: 5,
    type: "1rk",
    typeLabel: "Penthouse (1RK)",
    tagline: "Pretty fairy lights along the bed for a relaxing evening",
    badge: "Fairy Lights",
    imageUrl: "/images/room_aesthetic_4.jpg",
    description: "Cozy studio loved by visiting couples for its warm lighting, quiet nights, and private kitchen to make tea and snacks.",
    capacity: "1–2 Guests (Couple Friendly)",
    bedType: "1 Queen Bed",
    amenities: ["Attached Kitchen", "Private Bathroom", "Fairy String Lights", "Free Daily Breakfast"],
    kitchenFeatures: ["Gas Stove", "Kettle", "Basic Pans & Spoons"],
    pricingEstimate: "Starting from ₹1,200 / night",
    realHighlightNote: "Documented in official Instagram Stories as Unit-5 (1rk)",
    accentColor: "#F0D78C"
  },
  {
    id: "unit-6",
    name: "Bright & Airy Studio (1RK)",
    unitCode: "Unit-6",
    unitNumber: 6,
    type: "1rk",
    typeLabel: "Penthouse (1RK)",
    tagline: "Sunny top-floor room with fresh morning air",
    imageUrl: "/images/cozy_reading_nook.jpg",
    description: "Sunlit top-floor room with big windows facing greenery, private cooking corner, and clean attached bathroom.",
    capacity: "1–2 Guests",
    bedType: "1 Queen Bed",
    amenities: ["Attached Kitchen", "Private Bathroom", "Good Natural Light", "Free Daily Breakfast"],
    kitchenFeatures: ["Stove Counter", "Electric Kettle", "Basic Utensils"],
    pricingEstimate: "Starting from ₹1,200 / night",
    realHighlightNote: "Documented in official Instagram Stories as Unit-6 (1rk)",
    accentColor: "#C5A059"
  },
  {
    id: "unit-7",
    name: "Quiet Penthouse Studio (1RK)",
    unitCode: "Unit-7",
    unitNumber: 7,
    type: "1rk",
    typeLabel: "Penthouse (1RK)",
    tagline: "Quiet corner room on the top floor for peaceful sleep",
    imageUrl: "/images/balcony_view.jpg",
    description: "Peaceful 1RK corner room away from the hallway. Includes clean private bathroom, kitchen counter, and cool hill breeze.",
    capacity: "1–2 Guests",
    bedType: "1 Double Bed",
    amenities: ["Attached Kitchenette", "Private Bathroom", "Free Daily Breakfast", "Quiet Corner"],
    kitchenFeatures: ["Kettle", "Cooking Burner", "Plates & Glasses"],
    pricingEstimate: "Starting from ₹1,200 / night",
    realHighlightNote: "Documented in official Instagram Stories as Unit-7 (1rk)",
    accentColor: "#D4AF37"
  },
  {
    id: "unit-8",
    name: "Green Wood 2BHK Suite",
    unitCode: "Unit-8",
    unitNumber: 8,
    type: "2bhk",
    typeLabel: "2BHK Apartment",
    tagline: "Stylish green wall decor with big sofa hall and 2 bedrooms",
    badge: "Guest Favorite",
    imageUrl: "/images/room_aesthetic_2.jpg",
    description: "One of our most popular 2BHK flats. Comes with an attractive green accent wall, sofa living room, two quiet bedrooms, and attached kitchen.",
    capacity: "Up to 5–6 Guests",
    bedType: "2 Queen Beds + Living Sofa",
    amenities: ["Attached Kitchen", "Living Room Hall", "Private Bathroom", "Free Daily Breakfast"],
    kitchenFeatures: ["Gas Stove", "Cookware Set", "Tea & Coffee Setup", "Dining Plates"],
    pricingEstimate: "Starting from ₹2,400 / night",
    realHighlightNote: "Documented in official Instagram Stories as Unit-8 (2bhk)",
    accentColor: "#F0D78C"
  },
  {
    id: "unit-9",
    name: "Classic 1BHK City Suite",
    unitCode: "Unit-9",
    unitNumber: 9,
    type: "1bhk",
    typeLabel: "1BHK Apartment",
    tagline: "Comfortable flat with separate living room and private kitchen",
    imageUrl: "/images/room_aesthetic_1.jpg",
    description: "Complete 1BHK flat with a private living room, separate bedroom, attached kitchen, and clean bathroom with hot water.",
    capacity: "1–3 Guests",
    bedType: "1 Queen Bed + Daybed",
    amenities: ["Attached Kitchen", "Separate Living Hall", "Attached Bath", "Free Daily Breakfast"],
    kitchenFeatures: ["Cooking Counter", "Utensils", "Tea Kettle"],
    pricingEstimate: "Starting from ₹1,400 – ₹1,700 / night",
    realHighlightNote: "Documented in official Instagram Stories as Unit-9 (1bhk)",
    accentColor: "#C5A059"
  },
  {
    id: "unit-10",
    name: "Big 2BHK Family Flat",
    unitCode: "Unit-10",
    unitNumber: 10,
    type: "2bhk",
    typeLabel: "2BHK Apartment",
    tagline: "Spacious flat for families, vacation groups, and wedding guests",
    imageUrl: "/images/room_aesthetic_5.jpg",
    description: "Large 2BHK flat with two separate bedrooms, comfortable living room, attached full kitchen, and clean bathroom. Close to local shops and markets.",
    capacity: "Up to 6 Guests",
    bedType: "2 Queen Beds",
    amenities: ["Full Attached Kitchen", "Private Bath with Geyser", "Living Hall", "Free Daily Breakfast", "Cool Hill Air"],
    kitchenFeatures: ["Gas Stove", "Cooking Pots", "Plates & Glasses", "Electric Kettle"],
    pricingEstimate: "Starting from ₹2,400 / night",
    realHighlightNote: "Documented in official Instagram Stories as Unit-10 (2bhk)",
    accentColor: "#D4AF37"
  },
  {
    id: "unit-11",
    name: "Solo Traveler Room",
    unitCode: "Unit-11",
    unitNumber: 11,
    type: "single",
    typeLabel: "Single Room",
    tagline: "Affordable private room with attached bath for solo guests",
    badge: "Solo Value",
    imageUrl: "/images/single_room.jpg",
    description: "Clean, comfortable room made for solo travelers, backpackers, and office visitors. Comes with a single bed, study table, and private bathroom.",
    capacity: "1 Solo Guest",
    bedType: "1 Single Bed",
    amenities: ["Attached Bathroom with Geyser", "Free Daily Breakfast", "Study Table", "Luggage Space"],
    kitchenFeatures: ["Electric Kettle Access", "Drinking Water Supply"],
    pricingEstimate: "Starting from ₹950 / night",
    realHighlightNote: "Documented in official Instagram Stories as Unit-11 Single",
    accentColor: "#F0D78C"
  },
  {
    id: "unit-12",
    name: "Sunset 1BHK Couple Flat",
    unitCode: "Unit-12",
    unitNumber: 12,
    type: "1bhk",
    typeLabel: "1BHK Apartment",
    tagline: "Cozy 1BHK flat with warm wood finish for a relaxed stay",
    imageUrl: "/images/twobhk_bedroom.jpg",
    description: "Charming flat with warm wood accents, separate bedroom, cozy sitting area, attached kitchen, and clean bathroom.",
    capacity: "1–3 Guests (Couple Friendly)",
    bedType: "1 Queen Bed",
    amenities: ["Attached Kitchen", "Private Bathroom", "Living Corner", "Free Daily Breakfast"],
    kitchenFeatures: ["Gas Stove", "Pans & Spoons", "Kettle", "Plates"],
    pricingEstimate: "Starting from ₹1,400 – ₹1,700 / night",
    realHighlightNote: "Documented in official Instagram Stories as Unit-12 (1bhk)",
    accentColor: "#C5A059"
  },
  {
    id: "unit-13",
    name: "Pretty Fairy Light 1BHK Flat",
    unitCode: "Unit-13",
    unitNumber: 13,
    type: "1bhk",
    typeLabel: "1BHK Apartment",
    tagline: "Gentle fairy lighting and soft double bed for sweet stays",
    badge: "Cozy Vibe",
    imageUrl: "/images/hero_homestay.jpg",
    description: "Private 1BHK flat with bedroom, warm fairy lights, attached kitchen, and clean bathroom. Very popular with visiting couples.",
    capacity: "1–3 Guests (Couple Friendly)",
    bedType: "1 Queen Bed",
    amenities: ["Attached Kitchen", "Private Bathroom with Geyser", "Fairy Lighting", "Free Daily Breakfast"],
    kitchenFeatures: ["Cooking Counter", "Electric Kettle", "Dining Plates & Bowls"],
    pricingEstimate: "Starting from ₹1,400 – ₹1,700 / night",
    realHighlightNote: "Documented in official Instagram Stories as Unit-13 (1bhk)",
    accentColor: "#D4AF37"
  }
];

export const NEARBY_LANDMARKS: LandmarkItem[] = [
  {
    name: "Paltan Bazar Hub",
    distance: "0.5 km",
    time: "4 min drive / 7 min walk",
    category: "shopping",
    note: "Main shopping market, Assamese silk shops, restaurants, and street food.",
    imageUrl: "/images/paltan_bazaar.jpg"
  },
  {
    name: "Guwahati Railway Station",
    distance: "1.2 km",
    time: "6 min drive",
    category: "transit",
    note: "Main railway junction connecting to all destinations across the Northeast.",
    imageUrl: "/images/railway_station.jpg"
  },
  {
    name: "Brahmaputra Riverfront & Ropeway",
    distance: "2.8 km",
    time: "10 min drive",
    category: "sightseeing",
    note: "Beautiful sunset views by the river, ferry rides, and India's longest river ropeway.",
    imageUrl: "/images/brahmaputra.jpg"
  },
  {
    name: "Nabagraha Temple & Sarania Viewpoint",
    distance: "0.8 km",
    time: "3 min drive / hill walk",
    category: "sightseeing",
    note: "Ancient hilltop temple with panoramic views of Guwahati city.",
    imageUrl: "/images/sarania_hills.jpg"
  },
  {
    name: "Kamakhya Devi Temple (Nilachal Hill)",
    distance: "8.5 km",
    time: "25 min drive",
    category: "sightseeing",
    note: "Famous historic Shakti Peeth temple on Nilachal Hill.",
    imageUrl: "/images/kamakhya.jpg?v=temple_authentic"
  },
  {
    name: "Guwahati Airport (GAU)",
    distance: "22 km",
    time: "45 min drive",
    category: "transit",
    note: "Direct highway connectivity via Paltan Bazar main road.",
    imageUrl: "/images/airport.jpg"
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
    highlight: "Free delicious breakfast & loving hospitality",
    verifiedSource: "Google Review Summary (4.1 Rating / 132 Reviews)"
  },
  {
    id: "rev-2",
    guestName: "Visiting Traveler",
    stayType: "Family & Long Stay",
    rating: 4,
    date: "Google Maps Review",
    content: "The attached kitchen in the rooms makes a huge difference when staying in Guwahati. Good quiet location in Sarania Hills yet easily accessible to Paltan Bazar and main roads.",
    highlight: "Attached kitchen in room & peaceful location",
    verifiedSource: "Google Review Summary"
  },
  {
    id: "rev-3",
    guestName: "Leisure Guest",
    stayType: "Couple Friendly Trip",
    rating: 5,
    date: "Google Maps Review",
    content: "Very budget-friendly and safe place for couples. Peaceful atmosphere with comfortable beds and helpful host who took care of breakfast and local travel guidance.",
    highlight: "Safe, peaceful, and pocket-friendly",
    verifiedSource: "Google Review Summary"
  }
];

export const AMENITIES_LIST = [
  {
    title: "Attached Private Kitchen",
    description: "Every 1BHK, 2BHK, and Penthouse unit includes its own attached kitchen with stove and utensils to cook food easily.",
    icon: "UtensilsCrossed",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Attached Bathrooms",
    description: "Private attached bathrooms with clean running water and instant hot water geysers in all rooms.",
    icon: "Bath",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Couple Friendly",
    description: "A safe, respectful, and peaceful place for couples. Valid government ID required at check-in.",
    icon: "Heart",
    imageUrl: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Free Morning Breakfast",
    description: "Hot homemade breakfast and fresh Assam tea served every morning, included free with your stay.",
    icon: "Coffee",
    imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Sarania Hills Location",
    description: "Situated in Gandhi Basti, Sarania Hills — just 5 minutes from Paltan Bazar, yet away from noise and traffic.",
    icon: "MapPin",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Budget-Friendly Rates",
    description: "Honest and affordable prices for travelers who want clean, comfortable rooms with zero hidden fees.",
    icon: "BadgeIndianRupee",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
  }
];

export const FAQ_LIST = [
  {
    question: "Is Fairy Nest Homestay couple-friendly?",
    answer: "Yes, 100%! We warmly welcome couples. Just bring valid government photo IDs (like Aadhaar, Voter ID, or Passport) at check-in."
  },
  {
    question: "Do all rooms have attached kitchens and bathrooms?",
    answer: "Yes, every room and flat has its own private attached kitchen and attached bathroom. You do not have to share your kitchen or bathroom with anyone."
  },
  {
    question: "Is breakfast included in the booking?",
    answer: "Yes, fresh homemade breakfast and hot Assam tea are included free with every booking."
  },
  {
    question: "Where exactly is the homestay located in Guwahati?",
    answer: "We are located at Gandhi Basti Road, Sarania Hills, Guwahati-3. We are very close to Nabagraha Temple and just 5 minutes (about 500 meters) from Paltan Bazar and Guwahati Railway Station."
  },
  {
    question: "How do I check room availability and book?",
    answer: "You can message the host directly on WhatsApp at +91 70021 76711 or call us anytime. We confirm your room and dates instantly with zero middleman commission."
  }
];
