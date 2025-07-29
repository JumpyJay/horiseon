import { Waves, Users, Calendar, MapPin, Mail, Phone } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-6 pb-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 grid gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="badge badge-secondary w-fit">
                Community Engagement
              </div>
              <h1 className="text-4xl font-bold text-gray-900">
                Connecting Communities Through River Conservation
              </h1>
              <p className="text-gray-600 max-w-xl">
                Our workshops aims to reimagine, explore and celebrate our hcm
                waterways. Together, we're building sustainable relationships
                between communities and rivers.
              </p>
              <div className="flex items-center justify-center">
                <button className="btn btn-outline">Learn More</button>
              </div>
            </div>
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="River workshop participants"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-gray-600">
                We believe that healthy rivers are the foundation of thriving
                communities. Through hands-on workshops, collaborative research,
                and community engagement, we're working to envision and utilise
                Ho Chi Minh City's local waterways while building lasting
                connections between people and nature.
              </p>
            </div>

            <div className="grid gap-12 mt-16 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="River monitoring"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
              <div className="space-y-6">
                {[
                  {
                    icon: <Users className="h-6 w-6 text-blue-600" />,
                    title: "Community-Driven",
                    desc: "Inclusive workshops that unite diverse perspectives to conserve rivers.",
                  },
                  {
                    icon: <Waves className="h-6 w-6 text-blue-600" />,
                    title: "Science-Based",
                    desc: "Blending traditional and modern methods to protect waterways.",
                  },
                  {
                    icon: <Calendar className="h-6 w-6 text-blue-600" />,
                    title: "Ongoing Impact",
                    desc: "Frequent events ensure lasting environmental change.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Workshops Section */}
        <section id="workshops" className="bg-gray-50 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Upcoming Workshops
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
              Hands-on learning that blends science, community, and
              conservation.
            </p>
            <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
              {[
                {
                  date: "March 15, 2024",
                  title: "Water Quality Monitoring",
                  desc: "Test and analyze water health to aid local conservation efforts.",
                  location: "Riverside Park, Main Street",
                },
                {
                  date: "March 22, 2024",
                  title: "Native Plant Restoration",
                  desc: "Help restore riparian vegetation for better ecosystem support.",
                  location: "Willow Creek Trail",
                },
                {
                  date: "March 29, 2024",
                  title: "Community Mapping",
                  desc: "Create collaborative watershed maps to plan conservation.",
                  location: "Community Center",
                },
              ].map((ws, i) => (
                <div
                  key={i}
                  className="card bg-white shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="card-body items-start">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <div className="badge badge-outline">{ws.date}</div>
                    </div>
                    <h3 className="card-title text-gray-900">{ws.title}</h3>
                    <p className="text-gray-600">{ws.desc}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{ws.location}</span>
                    </div>
                    <button className="btn btn-primary mt-4 w-full">
                      More Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12">
              Meet the passionate individuals driving our mission forward.
            </p>
            <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 max-w-6xl mx-auto">
              {[
                {
                  name: "Xinyi",
                  role: "Environmental Scientist",
                  image: "environmental scientist by a river",
                },
                {
                  name: "Jessica",
                  role: "Community Coordinator",
                  image: "community organizer with clipboard",
                },
                {
                  name: "Jay",
                  role: "Education Specialist",
                  image: "teacher with students outdoors",
                },
                {
                  name: "Joshua",
                  role: "Local Historian",
                  image: "older man with historical documents",
                },
              ].map((person, i) => (
                <div
                  key={i}
                  className="card bg-gray-50 border-0 shadow-sm text-center"
                >
                  <figure className="pt-6">
                    <img
                      src={`/placeholder.svg?height=120&width=120&query=${person.image}`}
                      alt={person.name}
                      width={120}
                      height={120}
                      className="rounded-full object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="font-semibold text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm text-gray-600">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-blue-600 py-12 md:py-24 lg:py-32 text-white"
        >
          <div className="container mx-auto px-4 md:px-6 grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Get Involved</h2>
              <p className="text-blue-100">
                Ready to make a difference in your local watershed? Join our
                community of river stewards.
              </p>
              <div className="space-y-2 text-blue-100">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" /> info@riverworks.org
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" /> (555) 123-4567
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" /> 123 River Street, Watershed
                  City
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold">Stay Updated</h3>
                <p className="text-blue-100">
                  Subscribe to our newsletter for workshop announcements and
                  updates.
                </p>
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
                <button className="btn btn-secondary text-blue-600 bg-white hover:bg-blue-50">
                  Subscribe
                </button>
              </div>
              <button className="btn btn-secondary text-blue-600 bg-white hover:bg-blue-50">
                Join Our Next Workshop
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer items-center p-4 bg-white border-t text-gray-600">
        <div className="items-center grid-flow-col">
          <Waves className="h-5 w-5 text-blue-600" />
          <p>© 2024 RiverWorks Project. All rights reserved.</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="#" className="link link-hover text-sm">
            Privacy Policy
          </a>
          <a href="#" className="link link-hover text-sm">
            Terms of Service
          </a>
          <a href="#" className="link link-hover text-sm">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
