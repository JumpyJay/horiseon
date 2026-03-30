export interface SiteFeature {
  title: string;
  description: string;
}

export interface MonologueData {
  characterName: string;
  image: string;
  text: string;
}

export interface SiteData {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  location: string;
  coordinates: { lat: string; lng: string };
  image: string;
  features: SiteFeature[];
  monologue?: MonologueData;
}

export const sites: SiteData[] = [
  {
    id: "canvas-quay",
    number: "01",
    name: "Canvas Quay",
    subtitle: "Leisure, Arts, & Intergenerational Wellness",
    description:
      "A vibrant community 'living room' for intergenerational wellness and art.",
    longDescription:
      "Canvas Quay transforms vacant riverside land into a high-value social infrastructure. It serves as a social anchor for the Nam Rach Chiec residential area, blending physical health, creative expression, and cultural heritage into a single ecological corridor.",
    location: "Song Hanh & Muong Ken, An Phu",
    coordinates: { lat: "10.7925", lng: "106.7615" },
    image: "/images/site-1.jpg",
    features: [
      {
        title: "The Wellness Orbit",
        description:
          "A 400m riverside loop with sustainable timber fitness stations. Scannable QR codes launch AR workout tutorials directly on user phones.",
      },
      {
        title: "The Communal Canvas",
        description:
          "Designated porous pavement zones for temporary chalk murals. Residents can upload their 'Daily Mural' to the site's live digital feed.",
      },
      {
        title: "The 'Ky Uc' Amphitheater",
        description:
          "Tiered, grass-covered seating for storytelling and traditional Dragon Dances, illuminated by low-impact lighting to protect local bird populations.",
      },
      {
        title: "Eco-Aerobics Pavilion",
        description:
          "A covered wooden deck for group dance workshops. 100% of workshop fees are funneled into 'Saigon Blue' river-cleaning technology.",
      },
    ],
    monologue: {
      characterName: "Granny",
      image: "/images/granny.JPG",
      text: "I remember when this riverbank was just mud and forgotten dreams. Now I see my grandchildren painting on the walls, dancing where the cranes used to rust. This place finally feels like it belongs to us again.",
    },
  },
  {
    id: "solar-wharf",
    number: "02",
    name: "The Solar Wharf",
    subtitle: "Smart Transit, Gateway Connectivity, & Logistics",
    description:
      "The primary smart transit gateway connecting District 1 and District 2.",
    longDescription:
      "Located adjacent to the An Khanh Communal House, The Solar Wharf integrates smart technology and micro-mobility to create a seamless transit experience between the Waterbus, Ba Son Bridge, and the Thu Thiem New Urban Area.",
    location: "An Khanh Communal House, Thu Thiem",
    coordinates: { lat: "10.7785", lng: "106.7118" },
    image: "/images/site-2.jpg",
    features: [
      {
        title: "Smart Sunflower Hub",
        description:
          "Solar-powered pylons providing high-speed Wi-Fi and real-time transit telemetry. Petal-shaped canopies provide shade and harvest rainwater.",
      },
      {
        title: "The 'Blue Path'",
        description:
          "A dedicated, color-coded lane for 'Blue Bicycles' with contactless rental kiosks, connecting the Waterbus pier directly to the Metro.",
      },
      {
        title: "Floating Marketplace",
        description:
          "A modernized wharf for local food vendors. Includes a 'Bread Drop' station where bakeries deposit surplus bread for fish-feeding programs.",
      },
      {
        title: "Pet-Transit Zone",
        description:
          "A transit-integrated pet park for commuters. Hosts seasonal events like 'Pet Commuter Marches' and community holiday parades.",
      },
    ],
    monologue: {
      characterName: "Mommy",
      image: "/images/mommy.JPG",
      text: "Every morning I rush between the Metro and the Waterbus, juggling bags and schedules. But here, the commute slows down just enough to breathe. My daughter feeds the fish from the Bread Drop while I sip coffee under the sunflower canopy. Five stolen minutes of peace.",
    },
  },
  {
    id: "boats-on-saigon-river",
    number: "03",
    name: "Boats on Saigon River",
    subtitle: "Navigating the city's living waterway",
    description:
      "A fleet of vessels connecting communities, cultures, and landscapes across the Saigon River and its winding canal network.",
    longDescription:
      "The Boats on Saigon River offer a range of waterborne experiences that reflect the river's many roles in city life — from quiet canal exploration to daily cross-river commutes and leisurely evening cruises past the city's most iconic landmarks.",
    location: "Saigon River, Ho Chi Minh City",
    coordinates: { lat: "11.1423", lng: "106.5079" },
    image: "/images/site-3.jpg",
    features: [
      {
        title: "Rồng Xanh — Canal Explorer Boat",
        description:
          "A nimble, open-air fishing vessel designed to navigate both the narrow inner canals and the open Saigon River, comfortably accommodating 10 to 15 passengers. Electrically powered and lightweight, its eco-conscious design makes it the ideal craft for slow-paced cultural and ecological discovery tours along the waterways.",
      },
      {
        title: "Phà Sài Gòn — Cross-River Ferry",
        description:
          "A high-capacity ferry built for the rhythms of daily city life, carrying up to 150 to 200 passengers alongside their motorcycles. Operating at high frequency between Districts 1 and 2, it offers air-conditioned seating, generous standing space on the open deck, and a commuting experience optimised for comfort at scale.",
      },
      {
        title: "Ánh Trăng — River Dining Cruise",
        description:
          "A leisurely cruise vessel designed for relaxation and cultural immersion, following fixed routes past the river's most celebrated landmarks. Passengers can dine on board or settle into the on-deck café for a selection of local cuisines, curating their own pace and experience as the city's skyline drifts slowly past.",
      },
    ],
    monologue: {
      characterName: "Unc",
      image: "/images/unc.JPG",
      text: "I’ve been on this river all my life, but these boats make it feel new again. The Canal Explorer takes me to hidden corners of the city I never knew existed. The ferry is my daily lifeline across the river, and the dining cruise? It’s like a moving restaurant with the best view in town. The river isn’t just water — it’s the heartbeat of our city, and these boats let me feel that pulse every day.",
    },
  },
];

export interface ProcessStep {
  title: string;
  description: string;
  image?: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: "Research & Discovery",
    description:
      "Students from universities across Ho Chi Minh City spent weeks surveying three sites along the Saigon River, documenting existing conditions, interviewing local communities, and studying the river's ecological and cultural history.",
    image: "/images/process-2.jpg",
  },
  {
    title: "Design Workshops",
    description:
      "Through a series of intensive collaborative workshops, students worked in interdisciplinary teams — combining architecture, ecology, engineering, and art — to develop design proposals for each site. Local residents participated as co-designers, sharing their knowledge and aspirations for the riverfront.",
    image: "/images/process-1.jpg",
  },
  {
    title: "Exhibition & Presentation",
    description:
      "The culmination of months of work, the Reimagined Rivers exhibit brings together models, drawings, photographs, and interactive displays that communicate each site's vision. Students present their work to the public, inviting dialogue about the future of the Saigon River.",
    image: "/images/process-3.jpg",
  },
];
