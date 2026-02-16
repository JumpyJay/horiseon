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
  features: string[];
  studentContribution: string;
}

export const sites: SiteData[] = [
  {
    id: "riverbank-gardens",
    number: "01",
    name: "Riverbank Gardens",
    subtitle: "Where the city meets the water",
    description:
      "A reimagined riverbank where lush tropical gardens cascade toward the Saigon River, creating a living corridor that reconnects the urban fabric of District 2 with its waterfront heritage.",
    longDescription:
      "The Riverbank Gardens site transforms a previously neglected stretch of the Saigon River's edge into a thriving ecological corridor. Students from Ho Chi Minh City's architecture and landscape programs worked alongside local communities to design winding pathways through native plantings, creating intimate gathering spaces that frame views of the river. The design draws from traditional Vietnamese garden principles — layered planting, water integration, and shaded walkways — while introducing contemporary ecological restoration techniques. Native species were selected for their ability to filter stormwater runoff before it reaches the river, turning what was once a source of pollution into a natural purification system.",
    location: "Xa Lo Ha Noi Waterfront, District 2",
    coordinates: { lat: "10.7892", lng: "106.7420" },
    image: "/images/site-1.jpg",
    features: [
      "Native tropical plant corridor",
      "Stormwater filtration gardens",
      "Shaded riverside walkways",
      "Community gathering pavilions",
    ],
    studentContribution:
      "Architecture students from HCMC University of Architecture led the spatial design workshops, collaborating with ecology students to select over 40 native plant species for the restoration.",
  },
  {
    id: "floating-wetlands",
    number: "02",
    name: "Floating Wetlands",
    subtitle: "Landscapes that breathe with the tide",
    description:
      "An innovative wetland restoration where floating gardens and reed beds create a dynamic ecosystem that rises and falls with the river's tidal rhythms, reintroducing biodiversity to the urban waterway.",
    longDescription:
      "The Floating Wetlands represent the most ecologically ambitious site in the exhibit. Here, students designed a system of interconnected floating platforms planted with native aquatic species — lotus, water hyacinth, and reed beds — that move gently with the Saigon River's tidal patterns. Elevated boardwalks allow visitors to walk above the wetland, observing the ecosystem at close range without disturbing it. The project addresses one of the river's most pressing challenges: water quality. The floating wetlands act as a natural biofilter, with root systems absorbing pollutants and creating habitat for fish, birds, and invertebrates that have long been absent from this stretch of the river.",
    location: "Thao Dien Creek Mouth, District 2",
    coordinates: { lat: "10.8031", lng: "106.7335" },
    image: "/images/site-2.jpg",
    features: [
      "Floating aquatic gardens",
      "Tidal reed bed systems",
      "Elevated observation boardwalks",
      "Natural biofilter network",
    ],
    studentContribution:
      "Environmental science and biology students designed the floating platform system, conducting water quality testing over six months to measure the wetland's filtration capacity.",
  },
  {
    id: "community-promenade",
    number: "03",
    name: "Community Promenade",
    subtitle: "A gathering place on the water's edge",
    description:
      "A terraced waterfront promenade that transforms a forgotten industrial edge into a vibrant public space, blending shade structures, seating, and native plantings into a communal riverfront experience.",
    longDescription:
      "The Community Promenade reimagines an abandoned industrial wharf as a multi-level public space that cascades down to the water's edge. The design emerged from extensive community engagement workshops where students interviewed local residents, fishermen, and market vendors to understand how people already use — and wish to use — the riverfront. The result is a series of terraced platforms that accommodate everything from morning tai chi practice to evening food markets. Sculptural bamboo canopies, designed and fabricated by students, provide shade while allowing breezes from the river to pass through. The planting strategy focuses on fruit-bearing and fragrant species chosen by community members, creating a landscape that is both beautiful and productive.",
    location: "An Phu Ward Waterfront, District 2",
    coordinates: { lat: "10.7956", lng: "106.7480" },
    image: "/images/site-3.jpg",
    features: [
      "Terraced public gathering spaces",
      "Bamboo canopy shade structures",
      "Productive fruit and herb gardens",
      "Flexible market and event areas",
    ],
    studentContribution:
      "Design students facilitated 12 community workshops, translating local needs into spatial designs. Engineering students developed the bamboo canopy structures using traditional Vietnamese joinery techniques.",
  },
  {
    id: "mangrove-sanctuary",
    number: "04",
    name: "Mangrove Sanctuary",
    subtitle: "Restoring the river's living edge",
    description:
      "A tidal creek restoration that reintroduces mangrove forests to the Saigon River's edge, creating a sanctuary where ecological recovery and contemplative experience intertwine along elevated timber walkways.",
    longDescription:
      "The Mangrove Sanctuary addresses the dramatic loss of mangrove habitat along the Saigon River over the past decades. Students worked with marine biologists and local fishermen — who remember when mangroves lined the riverbank — to design a phased restoration plan. The site features elevated timber walkways that wind through a newly planted mangrove forest, offering visitors an immersive experience of this critical ecosystem. Art installations created from natural materials — driftwood, coconut fiber, and bamboo — are suspended among the trees, drawing attention to the beauty and fragility of the mangrove environment. The project also serves as a living laboratory, with monitoring stations that track biodiversity recovery over time.",
    location: "Cat Lai Creek, District 2",
    coordinates: { lat: "10.7750", lng: "106.7580" },
    image: "/images/site-4.jpg",
    features: [
      "Mangrove forest restoration",
      "Elevated timber walkways",
      "Natural material art installations",
      "Biodiversity monitoring stations",
    ],
    studentContribution:
      "Marine biology students developed the mangrove planting strategy, while fine arts students created the natural material installations. The walkway system was co-designed with local craftspeople.",
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
