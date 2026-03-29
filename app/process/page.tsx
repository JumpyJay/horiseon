"use client";

import { ExhibitNav } from "@/components/exhibit-nav";

export default function ProcessPage() {
  return (
    <>
      <ExhibitNav />
      <main className="pt-24 px-6 md:px-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-sans font-medium mb-6">Design Process</h1>
        <p className="text-lg text-muted-foreground mb-12">
          A behind-the-scenes look at the workshops, research, and community
          engagement that shaped the exhibit.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-sans font-medium mb-4">Workshops</h2>
          <p className="text-base text-muted-foreground">
            Over the course of six months, we hosted a series of workshops with
            local university students across architecture, ecology, engineering,
            and art. These sessions were designed to foster interdisciplinary
            collaboration and generate ideas for reimagining the Saigon River.
          </p>
          <a href="/workshop" className="group inline-block mt-4">
            <div className="mt-2 flex items-center gap-2 text-sm text-primary transition-all group-hover:gap-3">
              <span className="uppercase tracking-widest">View More</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path
                  d="M4 10H16M16 10L11 5M16 10L11 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        </section>

        <section>
          <h2 className="text-2xl font-sans font-medium mb-4">Research</h2>
          <p className="text-base text-muted-foreground">
            Our research process involved site visits, interviews with riverside
            communities, and analysis of historical and ecological data. This
            groundwork was essential for grounding the students' visions in the
            realities of the river and its communities.
          </p>
        </section>
      </main>
    </>
  );
}
