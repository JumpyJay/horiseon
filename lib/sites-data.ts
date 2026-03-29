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
    id: "community-promenade",
    number: "03",
    name: "Community Promenade",
    subtitle: "A gathering place on the water's edge",
    description:
      "A terraced waterfront promenade transforming an industrial edge into a vibrant public space.",
    longDescription:
      "The Community Promenade reimagines an abandoned industrial wharf as a multi-level public space. The design emerged from community workshops to accommodate everything from morning tai chi to evening food markets.",
    location: "An Phu Ward Waterfront, District 2",
    coordinates: { lat: "10.7956", lng: "106.7480" },
    image: "/images/site-3.jpg",
    features: [
      {
        title: "Terraced Gathering Spaces",
        description:
          "Multi-level platforms designed for diverse community activities, cascading naturally down to the Saigon River's edge.",
      },
      {
        title: "Bamboo Canopy Structures",
        description:
          "Student-fabricated shade structures using traditional Vietnamese joinery, providing passive cooling through river breezes.",
      },
      {
        title: "Productive Urban Gardens",
        description:
          "Community-selected fruit and herb gardens that create a beautiful, edible landscape for local residents and visitors.",
      },
      {
        title: "Flexible Event Areas",
        description:
          "Open, modular spaces designed to adapt to seasonal needs, from local craft markets to community performances.",
      },
    ],
    monologue: {
      characterName: "Unc",
      image: "/images/unc.JPG",
      text: "They told me the old wharf was finished, but look at it now. I do my tai chi on the top terrace at dawn, and by evening the whole neighbourhood is here, arguing over whose banh mi is best at the market stalls. This is what a riverfront should be.",
    },
  },
  {
    id: "mangrove-sanctuary",
    number: "04",
    name: "Mangrove Sanctuary",
    subtitle: "Restoring the river's living edge",
    description:
      "A tidal creek restoration reintroducing native mangrove forests to the Saigon River.",
    longDescription:
      "The Mangrove Sanctuary addresses the loss of habitat along the river. It features elevated timber walkways that wind through a newly planted forest, offering an immersive ecological experience.",
    location: "Cat Lai Creek, District 2",
    coordinates: { lat: "10.7750", lng: "106.7580" },
    image: "/images/site-4.jpg",
    features: [
      {
        title: "Mangrove Forest Restoration",
        description:
          "A scientific, phased restoration of native mangrove species to recover lost biodiversity and protect the riverbank from erosion.",
      },
      {
        title: "Elevated Timber Walkways",
        description:
          "Winding, low-impact boardwalks that allow visitors to traverse the tidal wetlands without disturbing the recovering ecosystem.",
      },
      {
        title: "Natural Art Installations",
        description:
          "Suspended sculptures crafted from coconut fiber and bamboo that draw attention to the beauty and fragility of the mangroves.",
      },
      {
        title: "Biodiversity Monitoring",
        description:
          "Living laboratory stations that track the return of native fish and bird species, serving as an educational resource for students.",
      },
    ],
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
      "Students from universities across Ho Chi Minh City spent weeks surveying the four sites along the Saigon River, documenting existing conditions, interviewing local communities, and studying the river's ecological and cultural history.",
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
