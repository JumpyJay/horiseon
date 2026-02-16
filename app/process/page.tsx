"use client";

import { ExhibitNav } from "@/components/exhibit-nav";

export default function ProcessPage() {
  return (
    <>
      <ExhibitNav />
      <main className="pt-24 px-6 md:px-10 max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif mb-6">Design Process</h1>
        <p className="text-lg text-muted-foreground mb-12">
          A behind-the-scenes look at the workshops, research, and community
          engagement that shaped the exhibit.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-serif mb-4">Workshops</h2>
          <p className="text-base text-muted-foreground">
            Over the course of six months, we hosted a series of workshops with
            local university students across architecture, ecology, engineering,
            and art. These sessions were designed to foster interdisciplinary
            collaboration and generate ideas for reimagining the Saigon River.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif mb-4">Research</h2>
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
