"use client";

import { useState } from "react";
import {
  Waves,
  Calendar,
  MapPin,
  Clock,
  Users,
  CheckCircle,
  Star,
} from "lucide-react";

export default function WorkshopsPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "series" | "past">(
    "upcoming"
  );

  const upcomingWorkshops = [
    {
      title: "Water Quality Monitoring",
      date: "March 15, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "Riverside Park, Main Street",
      capacity: "20 participants",
      level: "Beginner",
      description:
        "Learn to test and analyze water quality parameters while contributing to our ongoing river health assessment. We'll cover pH, dissolved oxygen, turbidity, and nutrient testing.",
      image: "people testing water quality by river",
      instructor: "Dr. Sarah Chen",
      price: "Free",
      materials: "All materials provided",
    },
    {
      title: "Native Plant Restoration",
      date: "March 22, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "Willow Creek Trail",
      capacity: "15 participants",
      level: "All levels",
      description:
        "Help restore riparian vegetation and learn about native plants that support healthy river ecosystems. Includes hands-on planting and habitat preparation.",
      image: "group planting native plants by riverbank",
      instructor: "Elena Kowalski",
      price: "Free",
      materials: "Tools and plants provided",
    },
    {
      title: "Community Mapping Workshop",
      date: "March 29, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Community Center",
      capacity: "25 participants",
      level: "Beginner",
      description:
        "Create collaborative maps of our watershed and identify priority areas for conservation efforts. Learn basic GIS skills and contribute to our community knowledge base.",
      image: "people working on maps and computers",
      instructor: "Dr. Priya Patel",
      price: "Free",
      materials: "Laptops provided",
    },
    {
      title: "Stream Ecology Field Study",
      date: "April 5, 2024",
      time: "8:00 AM - 2:00 PM",
      location: "Cedar Creek Nature Reserve",
      capacity: "12 participants",
      level: "Intermediate",
      description:
        "Comprehensive field study of stream ecosystems including macroinvertebrate sampling, habitat assessment, and data collection techniques.",
      image: "researchers studying stream ecosystem",
      instructor: "Dr. Sarah Chen & James Thompson",
      price: "Free",
      materials: "Waders and equipment provided",
    },
  ];

  const pastWorkshops = [
    {
      title: "Introduction to Watershed Science",
      date: "February 18, 2024",
      participants: 22,
      rating: 4.8,
      highlights: [
        "Basic hydrology concepts",
        "Local watershed tour",
        "Water cycle demonstration",
      ],
    },
    {
      title: "River Photography Workshop",
      date: "February 10, 2024",
      participants: 15,
      rating: 4.9,
      highlights: [
        "Nature photography techniques",
        "Documenting environmental change",
        "Photo storytelling",
      ],
    },
    {
      title: "Winter Bird Watching",
      date: "January 27, 2024",
      participants: 18,
      rating: 4.7,
      highlights: [
        "Waterfowl identification",
        "Habitat relationships",
        "Citizen science data collection",
      ],
    },
  ];

  const workshopSeries = [
    {
      title: "Citizen Science Certification",
      duration: "4 sessions",
      description:
        "Comprehensive training in water quality monitoring, data collection, and analysis techniques.",
      nextStart: "April 2024",
    },
    {
      title: "Youth River Stewards",
      duration: "6 sessions",
      description:
        "Leadership program for young people interested in environmental conservation and community organizing.",
      nextStart: "May 2024",
    },
    {
      title: "Advanced Restoration Techniques",
      duration: "3 sessions",
      description:
        "In-depth training on habitat restoration, erosion control, and native plant propagation.",
      nextStart: "June 2024",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="badge">Learning Together</div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl text-gray-900">
                Workshops &amp; Programs
              </h1>
              <p className="max-w-[900px] text-gray-600 md:text-xl lg:text-base xl:text-xl">
                Join our hands-on workshops to learn practical skills,
                contribute to river conservation, and connect with fellow
                environmental stewards in your community.
              </p>
            </div>
          </div>
        </section>

        {/* Workshop Tabs */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            {/* Tabs header */}
            <div className="w-full max-w-md mx-auto">
              <div className="tabs tabs-boxed w-full">
                <button
                  className={`tab ${
                    activeTab === "upcoming" ? "tab-active" : ""
                  }`}
                  onClick={() => setActiveTab("upcoming")}
                >
                  Upcoming
                </button>
                <button
                  className={`tab ${
                    activeTab === "series" ? "tab-active" : ""
                  }`}
                  onClick={() => setActiveTab("series")}
                >
                  Series
                </button>
                <button
                  className={`tab ${activeTab === "past" ? "tab-active" : ""}`}
                  onClick={() => setActiveTab("past")}
                >
                  Past Events
                </button>
              </div>
            </div>

            {/* Upcoming Workshops */}
            {activeTab === "upcoming" && (
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                {upcomingWorkshops.map((workshop, index) => (
                  <div
                    key={index}
                    className="card bg-white shadow-xl hover:shadow-2xl transition-shadow"
                  >
                    <figure className="relative aspect-video overflow-hidden rounded-t-lg">
                      <img
                        src={`/placeholder.svg?height=200&width=400&query=${workshop.image}`}
                        alt={workshop.title}
                        width={400}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-4 left-4">
                        <div className="badge badge-primary">
                          {workshop.level}
                        </div>
                      </div>
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-gray-900">
                        {workshop.title}
                      </h2>
                      <p className="text-gray-600">{workshop.description}</p>

                      <div className="grid grid-cols-2 gap-4 text-sm mt-2">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>{workshop.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{workshop.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span>{workshop.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="h-4 w-4" />
                          <span>{workshop.capacity}</span>
                        </div>
                      </div>

                      <div className="divider my-4"></div>

                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">
                          Instructor:
                        </span>
                        <span className="text-sm font-medium">
                          {workshop.instructor}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Price:</span>
                        <span className="text-sm font-medium text-green-600">
                          {workshop.price}
                        </span>
                      </div>

                      <div className="card-actions mt-2">
                        <button className="btn btn-primary w-full">
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Workshop Series */}
            {activeTab === "series" && (
              <div className="mt-12 grid gap-8 md:grid-cols-3">
                {workshopSeries.map((series, index) => (
                  <div key={index} className="card bg-white shadow-xl">
                    <div className="card-body">
                      <div className="flex items-center justify-between">
                        <div className="badge badge-outline">
                          {series.duration}
                        </div>
                        <div className="badge badge-success badge-outline text-green-800">
                          {series.nextStart}
                        </div>
                      </div>
                      <h3 className="card-title text-gray-900 mt-2">
                        {series.title}
                      </h3>
                      <p className="text-gray-600">{series.description}</p>
                      <div className="card-actions mt-2">
                        <button className="btn btn-outline w-full">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Past Workshops */}
            {activeTab === "past" && (
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {pastWorkshops.map((workshop, index) => (
                  <div key={index} className="card bg-white shadow-xl">
                    <div className="card-body">
                      <div className="flex items-center justify-between">
                        <div className="badge badge-outline">
                          {workshop.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-sm font-medium">
                            {workshop.rating}
                          </span>
                        </div>
                      </div>
                      <h3 className="card-title text-gray-900 mt-1">
                        {workshop.title}
                      </h3>
                      <p className="text-gray-600">
                        {workshop.participants} participants
                      </p>

                      <div className="mt-2">
                        <h4 className="font-medium text-gray-900">
                          Highlights:
                        </h4>
                        <ul className="space-y-1 mt-2">
                          {workshop.highlights.map(
                            (highlight, highlightIndex) => (
                              <li
                                key={highlightIndex}
                                className="flex items-center gap-2 text-sm text-gray-600"
                              >
                                <CheckCircle className="h-3 w-3 text-green-600" />
                                {highlight}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Workshop Guidelines */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  What to Expect
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Hands-On Learning
                      </h3>
                      <p className="text-gray-600">
                        All workshops include practical, hands-on activities and
                        real-world applications.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Expert Instruction
                      </h3>
                      <p className="text-gray-600">
                        Learn from experienced scientists, educators, and
                        community leaders.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        All Materials Provided
                      </h3>
                      <p className="text-gray-600">
                        We provide all necessary tools, equipment, and materials
                        for each workshop.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Community Impact
                      </h3>
                      <p className="text-gray-600">
                        Your participation directly contributes to ongoing
                        conservation efforts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Workshop participants"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-white">
                Stay Updated
              </h2>
              <p className="max-w-[600px] text-blue-100 md:text-xl">
                Subscribe to our newsletter to receive workshop announcements,
                registration reminders, and project updates.
              </p>

              <div className="flex gap-2 w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full bg-white/10 text-white placeholder:text-blue-200 border-white/20 focus:outline-none"
                />
                <button className="btn btn-secondary bg-white text-blue-600 hover:bg-blue-50 border-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <div className="flex items-center gap-2">
          <Waves className="h-5 w-5 text-blue-600" />
          <p className="text-xs text-gray-600">
            © 2024 RiverWorks Project. All rights reserved.
          </p>
        </div>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
          <div className="flex items-center gap-2">
            <Waves className="h-5 w-5 text-blue-600" />
            <p className="text-xs text-gray-600">
              © 2024 RiverWorks Project. All rights reserved.
            </p>
          </div>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <a
              href="#"
              className="text-xs hover:underline underline-offset-4 text-gray-600"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs hover:underline underline-offset-4 text-gray-600"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-xs hover:underline underline-offset-4 text-gray-600"
            >
              Contact
            </a>
          </nav>
        </footer>
      </footer>
    </div>
  );
}
