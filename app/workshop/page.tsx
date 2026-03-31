import React from "react";
import { ExhibitNav } from "@/components/exhibit-nav";

export default function WorkshopsPage() {
  return (
    <>
      <ExhibitNav />
      <main className="pt-24 px-6 md:px-10 max-w-4xl mx-auto">
        <header className="mb-10">
          <img
            src="/images/workshop-intro.jpg"
            alt="Workshop Introduction"
            className="w-full md:h-auto md:w-56 object-cover"
          />
          <div className="border-l-4 border-primary-600 pl-4">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 padding=0 mb-4">
              Reimagine Rivers: Workshops @ RMIT
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              In RMIT Vietnam, we conducted a series of 3-episode workshops to
              get local participants’ hands on designing their desired
              riverscapes and waterbus. These participants are the masterminds
              behind the creation of our showcased designs.
            </p>
          </div>
        </header>

        <section className="space-y-6">
          <article className="bg-white shadow-sm overflow-hidden">
            <div className="md:flex">
              <img
                src="/images/workshop1-photo.jpg"
                alt="Workshop 1"
                className="w-full md:h-auto md:w-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Theme 1: Transport
                </h2>
                <p className="text-lg text-muted-foreground mb-12">
                  With the Saigon River separating the two densely populated
                  districts (D1 and D2), transport across the river is an
                  essential part of daily life in many working people. We
                  provided maps of bus and road transport in District 2 and
                  riverside District 1 to the participants. Participants are
                  then prompted to discuss potential routes and desirable
                  vessels of river commute across Saigon River. One suggestion
                  that frequently came up was the ability for the boat to hold
                  motorcycles. This is derived from a practical standpoint, as
                  the waterbus is unlikely to replace the current mode of
                  transport, but complement it instead.
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white shadow-sm overflow-hidden">
            <div className="md:flex md:flex-row-reverse">
              <img
                src="/images/workshop2-photo.jpg"
                alt="Workshop 2"
                className="w-full md:h-auto md:w-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Theme 2: Entertainment & Well-being
                </h2>
                <p className="text-lg text-muted-foreground mb-12">
                  In this workshop, participants are prompted to design a
                  desirable riverscape for two locations in District 2. One of
                  which is near a built-up residential housing at An Phu, while
                  the other is Saigon Riverside Park near an existing waterbus
                  station. Suggestions include pop-up food vendors, open
                  gymnasium, boat tours, and sheltered community activity space.
                  Climatic adaptation through canopy or traditional
                  architectural design was often noted as an important point.
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white shadow-sm overflow-hidden">
            <div className="md:flex">
              <img
                src="/images/workshop3-photo.jpg"
                alt="Workshop 3"
                className="w-full md:h-auto md:w-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Theme 3: Community & Bonding
                </h2>
                <p className="text-lg text-muted-foreground mb-12">
                  The final workshop explores how the riverside space can serve
                  the community not just on a utility level, but also as a place
                  for bonding and community spirit. Participants suggested
                  activities from artistic competitions to flea markets,
                  centered on sustainability, environment and arts. The session
                  wrapped up with group debates to test feasibility and improve
                  ideas.
                </p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
