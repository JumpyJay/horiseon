import { HomeHero } from "@/components/home-hero";
import { SiteCard } from "@/components/site-card";
import { ExhibitNav } from "@/components/exhibit-nav";
import { PreloadPages } from "@/components/preload-pages";
import { FadeIn } from "@/components/fade-in";
import { sites } from "@/lib/sites-data";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <PreloadPages />
      <ExhibitNav />
      <HomeHero />

      {/* Introduction */}
      <section className="px-6 py-24 md:px-10 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
              About the Exhibit
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="font-serif text-3xl leading-snug text-foreground md:text-5xl">
              <span className="text-balance">
                Four sites along the Saigon River, reimagined through the
                collective vision of Ho Chi Minh City&apos;s students.
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Reimagined Rivers is the culmination of months of workshops,
              research, and community engagement. Local university students
              across architecture, ecology, engineering, and art collaborated
              with riverside communities in District 2 to envision a new
              relationship between city and water. Each site addresses a
              different dimension of the river&apos;s future — from ecological
              restoration to public space, from cultural memory to living
              infrastructure.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sites Grid */}
      <section className="px-6 pb-24 md:px-10 lg:pb-32">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-16 flex items-end justify-between border-b border-border pb-4">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                The Sites
              </p>
              <p className="text-xs text-muted-foreground">
                District 2, Saigon River
              </p>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-20 md:gap-28">
            {sites.map((site, index) => (
              <SiteCard key={site.id} site={site} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="bg-primary px-6 py-24 md:px-10 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary-foreground/60">
              Behind the Scenes
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="font-serif text-3xl text-primary-foreground md:text-5xl">
              <span className="text-balance">
                See the workshops, the fieldwork, and the people who made this
                exhibit possible.
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={200}>
            <Link
              href="/process"
              className="mt-10 inline-flex items-center gap-3 border border-primary-foreground/30 px-8 py-3 text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              View the Process
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
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
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-serif text-2xl text-foreground">
                Reimagined Rivers
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                An exhibit by the students of Ho Chi Minh City
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                District 2, Saigon River
              </p>
            </div>
            <div className="flex flex-col gap-2 text-right">
              <Link
                href="/process"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                The Process
              </Link>
              {sites.map((site) => (
                <Link
                  key={site.id}
                  href={`/sites/${site.id}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {site.number} — {site.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-6">
            <p className="text-xs text-muted-foreground/60">
              Reimagined Rivers Exhibit Companion
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
