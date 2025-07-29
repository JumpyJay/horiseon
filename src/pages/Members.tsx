import { Waves, Mail, Linkedin, Calendar, Award } from "lucide-react";

export default function MembersPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Environmental Scientist & Project Lead",
      bio: "Sarah brings over 15 years of experience in freshwater ecology and community-based conservation. She holds a PhD in Environmental Science from State University and has published extensively on river ecosystem health.",
      expertise: [
        "Water Quality Analysis",
        "Ecosystem Restoration",
        "Community Engagement",
      ],
      image: "environmental scientist by a river",
      email: "sarah@riverworks.org",
      joined: "2022",
    },
    {
      name: "Marcus Rodriguez",
      role: "Community Coordinator",
      bio: "Marcus is passionate about building bridges between diverse community groups and environmental initiatives. With a background in social work and environmental justice, he ensures our programs are inclusive and accessible.",
      expertise: [
        "Community Outreach",
        "Workshop Facilitation",
        "Volunteer Management",
      ],
      image: "community organizer with clipboard",
      email: "marcus@riverworks.org",
      joined: "2022",
    },
    {
      name: "Elena Kowalski",
      role: "Education Specialist",
      bio: "Elena develops our educational curricula and leads many of our hands-on workshops. As a former high school biology teacher, she excels at making complex environmental concepts accessible to all ages.",
      expertise: [
        "Environmental Education",
        "Curriculum Development",
        "Youth Programs",
      ],
      image: "teacher with students outdoors",
      email: "elena@riverworks.org",
      joined: "2023",
    },
    {
      name: "James Thompson",
      role: "Local Historian & Cultural Liaison",
      bio: "James provides invaluable historical context about our watershed and helps connect traditional knowledge with modern conservation practices. He has lived in the area for over 40 years.",
      expertise: [
        "Local History",
        "Traditional Knowledge",
        "Cultural Preservation",
      ],
      image: "older man with historical documents",
      email: "james@riverworks.org",
      joined: "2023",
    },
    {
      name: "Dr. Priya Patel",
      role: "Data Analyst",
      bio: "Priya manages our water quality database and creates visualizations that help community members understand environmental trends. She specializes in making data accessible and actionable.",
      expertise: ["Data Analysis", "GIS Mapping", "Statistical Modeling"],
      image: "data scientist with laptop by water",
      email: "priya@riverworks.org",
      joined: "2023",
    },
    {
      name: "Alex Kim",
      role: "Youth Program Coordinator",
      bio: "Alex leads our youth engagement initiatives and coordinates with local schools. As a recent environmental studies graduate, they bring fresh perspectives and energy to our programs.",
      expertise: ["Youth Engagement", "Social Media", "Program Development"],
      image: "young person leading group activity",
      email: "alex@riverworks.org",
      joined: "2024",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="badge w-fit">Our Team</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                Meet Our Members
              </h1>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our diverse team brings together expertise in environmental
                science, education, community organizing, and local knowledge to
                create meaningful change in our watershed.
              </p>
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="card bg-white shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="card-body space-y-4">
                    <div className="flex justify-center">
                      <img
                        src={`/placeholder.svg?height=150&width=150&query=${member.image}`}
                        alt={member.name}
                        width={150}
                        height={150}
                        className="rounded-full object-cover mb-4"
                      />
                    </div>
                    <h2 className="text-center text-gray-900">{member.name}</h2>
                    <p className="text-center text-blue-600 font-medium">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {member.bio}
                    </p>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {member.expertise.map((skill, skillIndex) => (
                          <span key={skillIndex} className="badge badge-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>Joined {member.joined}</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-8 w-8 p-0 bg-transparent btn">
                          <Mail className="h-4 w-4" />
                        </div>
                        <div className="h-8 w-8 p-0 bg-transparent btn">
                          <Linkedin className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Join Our Team
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We're always looking for passionate individuals who want to
                  make a difference in river conservation. Whether you're a
                  scientist, educator, community organizer, or simply someone
                  who cares about our waterways, there's a place for you in our
                  team.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Volunteer Opportunities
                      </h3>
                      <p className="text-gray-600">
                        Join our regular workshops and monitoring activities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Leadership Roles
                      </h3>
                      <p className="text-gray-600">
                        Take on coordination and specialized project
                        responsibilities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Advisory Positions
                      </h3>
                      <p className="text-gray-600">
                        Share your expertise to guide our programs and
                        initiatives
                      </p>
                    </div>
                  </div>
                </div>
                <div className="btn bg-blue-600 hover:bg-blue-700">
                  Get Involved
                </div>
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Team collaboration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Advisory Board */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                Advisory Board
              </h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Our advisory board provides strategic guidance and expertise to
                support our mission.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Dr. Maria Santos",
                  role: "Hydrologist",
                  org: "State University",
                },
                {
                  name: "Robert Chen",
                  role: "Environmental Lawyer",
                  org: "Green Legal Aid",
                },
                {
                  name: "Lisa Johnson",
                  role: "City Council Member",
                  org: "Local Government",
                },
                {
                  name: "Tom Wilson",
                  role: "Retired Park Ranger",
                  org: "National Park Service",
                },
              ].map((advisor, index) => (
                <div
                  key={index}
                  className="card bg-gray-50 border-0 text-center"
                >
                  <figure className="px-10 pt-10">
                    <img
                      src={`/placeholder.svg?height=100&width=100&query=professional headshot ${advisor.role}`}
                      alt={advisor.name}
                      className="mx-auto rounded-full object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title font-semibold text-gray-900">
                      {advisor.name}
                    </h3>
                    <p className="text-sm text-blue-600">{advisor.role}</p>
                    <p className="text-xs text-gray-600">{advisor.org}</p>
                  </div>
                </div>
              ))}
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
