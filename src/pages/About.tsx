import { Waves, Users, Target, Award, Heart, Lightbulb } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="badge w-fit">Our Story</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                About RiverWorks
              </h1>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are a passionate group of environmental advocates,
                scientists, and community members working together to protect
                and restore our local waterways through education,
                collaboration, and hands-on conservation.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Target className="h-8 w-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our Mission
                  </h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To foster sustainable relationships between communities and
                  their local rivers through collaborative workshops, scientific
                  monitoring, and educational programs that empower individuals
                  to become active stewards of their watershed.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-600">
                      Engage communities in hands-on river conservation
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-600">
                      Combine traditional knowledge with modern science
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <p className="text-gray-600">
                      Build lasting environmental stewardship practices
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Lightbulb className="h-8 w-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our Vision
                  </h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We envision thriving river ecosystems supported by informed,
                  engaged communities who understand their vital role in
                  watershed health and are equipped with the knowledge and tools
                  to make a positive impact.
                </p>
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Healthy river ecosystem"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                Our Approach
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                We believe in the power of community-driven conservation and
                collaborative learning.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="card bg-white shadow-lg">
                <div className="card-content">
                  <h3 className="text-gray-900">
                    <Users className="h-12 w-12 text-blue-600 inline-block mr-4" />
                    Community-Centered
                  </h3>
                  <p className="text-gray-600">
                    We prioritize local voices and traditional knowledge,
                    ensuring that our conservation efforts reflect the needs and
                    values of the communities we serve.
                  </p>
                </div>
              </div>

              <div className="card bg-white shadow-lg">
                <div className="card-content">
                  <h3 className="text-gray-900">
                    <Award className="h-12 w-12 text-blue-600 inline-block mr-4" />
                    Science-Based
                  </h3>
                  <p className="text-gray-600">
                    Our programs integrate rigorous scientific methods with
                    citizen science approaches, creating reliable data while
                    building scientific literacy.
                  </p>
                </div>
              </div>

              <div className="card bg-white shadow-lg">
                <div className="card-content">
                  <h3 className="text-gray-900">
                    <Heart className="h-12 w-12 text-blue-600 inline-block mr-4" />
                    Hands-On Learning
                  </h3>
                  <p className="text-gray-600">
                    We learn by doing - from water quality testing to habitat
                    restoration, our workshops provide practical skills and
                    direct environmental impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project History */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Early project activities"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Journey
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2022 - The Beginning
                    </h3>
                    <p className="text-gray-600">
                      Started as a small group of concerned citizens noticing
                      changes in our local river health. Our first workshop
                      attracted 12 participants.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2023 - Growing Impact
                    </h3>
                    <p className="text-gray-600">
                      Expanded to monthly workshops, established partnerships
                      with local schools, and began systematic water quality
                      monitoring across 5 sites.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      2024 - Community Network
                    </h3>
                    <p className="text-gray-600">
                      Now engaging over 200 community members annually, with
                      ongoing restoration projects and a growing network of
                      trained citizen scientists.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Our Impact
              </h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed">
                Together, we're making a measurable difference in our watershed.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">45+</div>
                <div className="text-blue-100">Workshops Conducted</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">200+</div>
                <div className="text-blue-100">Community Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">12</div>
                <div className="text-blue-100">Monitoring Sites</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">3</div>
                <div className="text-blue-100">Restoration Projects</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                Join Our Mission
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                Ready to become part of our river conservation community? There
                are many ways to get involved.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <div className="btn bg-blue-600 hover:bg-blue-700">
                  <a href="/workshops">View Workshops</a>
                </div>
                <div className="btn btn-outline">
                  <a href="/members">Meet Our Team</a>
                </div>
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
    </div>
  );
}
