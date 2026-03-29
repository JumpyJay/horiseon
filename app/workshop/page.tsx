import React from "react";

export default function WorkshopsPage() {
  return (
    <main className="container mx-auto max-w-4xl p-8 text-gray-900">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">
          Reimagine Rivers: Workshops @ RMIT
        </h1>
        <p className="text-gray-600">
          In RMIT Vietnam, we conducted a series of 3-episode workshops to get
          local participants’ hands on designing their desired riverscapes and
          waterbus. These participants are the masterminds behind the creation
          of our showcased designs. <br />
          Each workshop has a specific theme for discussion. To facilitate a
          structured discussion, we adapted and adopted the World Café method,
          where participants will first discuss among their groups, and then
          rotate to “visit” all other groups to comment and build on their
          ideas. An open discussion involving every group will conclude the
          session. <br />
          Participants are encouraged to suggest the ideas through playdough
          creation, sketched drawings or simply verbally (transcribed by
          facilitators). <br />
        </p>
      </header>

      <section className="space-y-8">
        <article className="flex items-start gap-4">
          <img
            src="/images/workshop1-photo.jpg"
            alt="Workshop 1"
            className="w-28 h-20 object-cover rounded"
          />
          <div>
            <h2 className="text-xl font-medium">Theme 1: Transport</h2>
            <p className="text-gray-600">
              With the Saigon River separating the two densely populated
              districts (D1 and D2), transport across the river is an essential
              part of daily life in many working people. <br />
              We provided maps of bus and road transport in District 2 and
              riverside District 1 to the participants. Participants are then
              prompted to discuss potential routes and desirable vessels of
              river commute across Saigon River. <br />
              One suggestion that frequently came up was the ability for the
              boat to hold motorcycles. This is derived from a practical
              standpoint, as the waterbus is unlikely to replace the current
              mode of transport, but complement it instead. Therefore, seamless
              integration into the current transport system is an important
              factor.
            </p>
          </div>
        </article>

        <article className="flex items-start gap-4">
          <img
            src="/images/workshop2-photo.jpg"
            alt="Workshop 2"
            className="w-28 h-20 object-cover rounded"
          />
          <div>
            <h2 className="text-xl font-medium">
              Theme 2: Entertainment & Well-being
            </h2>
            <p className="text-gray-600">
              In this workshop, participants are prompted to design a desirable
              riverscape for two locations in District 2. One of which is near a
              built-up residential housing at An Phu, while the other is Saigon
              Riverside Park near an existing waterbus station. Participants are
              given the aerial-view map of the region showing some existing
              infrastructure, as well as ground-level photos of the area at
              specific points. <br />
              Suggestions of infrastructure to add to the riverscape include
              pop-up food vendors, open gymnasium, boat tours, and sheltered
              community activity space. Notably, climatic adaptation through
              canopy or traditional architectural design was brought up as an
              important point in the discussion, as the hot weather and rain
              might impede the infrastructure from utilization.
            </p>
          </div>
        </article>

        <article className="flex items-start gap-4">
          <img
            src="/images/workshop3-photo.jpg"
            alt="Workshop 3"
            className="w-28 h-20 object-cover rounded"
          />
          <div>
            <h2 className="text-xl font-medium">
              Theme 3: Community & Bonding
            </h2>
            <p className="text-gray-600">
              The final workshop aims to explore how the riverside space can
              serve the community not just on a utility level, but also as a
              space for bonding and community spirits. Same sites as the
              previous workshop were given to the participants together with the
              infrastructure suggested by the previous workshop. <br />
              From artistic competition like kite design contest to flea
              markets, the participants suggested a myriad of activities
              centered around sustainability, environment and arts. <br />
              The workshop concluded with a friendly debate between groups to
              expose the ideas to realistic constraints and prompt participants
              to improve the feasibility of suggestions.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}
