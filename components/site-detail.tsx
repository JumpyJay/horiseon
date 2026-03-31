"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { SiteData } from "@/lib/sites-data";
import { sites } from "@/lib/sites-data";
import { FadeIn } from "./fade-in";
import { InnerMonologue } from "./inner-monologue";

interface SiteDetailProps {
  site: SiteData;
}

export function SiteDetail({ site }: SiteDetailProps) {
  const [loaded, setLoaded] = useState(false);
  const currentIndex = sites.findIndex((s) => s.id === site.id);
  const nextSite = sites[(currentIndex + 1) % sites.length];
  const prevSite = sites[(currentIndex - 1 + sites.length) % sites.length];

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <article>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={site.image || "/placeholder.svg"}
            alt={`${site.name} landscape`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
        </div>

        <div className="relative z-10 px-6 pb-16 md:px-10 lg:pb-24">
          <div className="mx-auto max-w-6xl">
            <p
              className={`mb-3 text-xs uppercase tracking-[0.4em] text-background/60 transition-all duration-700 ${loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              Site {site.number} of {String(sites.length).padStart(2, "0")}
            </p>
            <div
              className={`flex items-end gap-6 transition-all duration-700 delay-200 ${loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            >
              <span className="font-sans font-medium text-7xl text-background/20 md:text-9xl">
                {site.number}
              </span>
              <div className="pb-2">
                <h1 className="font-sans font-medium text-4xl text-background md:text-6xl">
                  {site.name}
                </h1>
                <p className="mt-2 font-sans font-medium text-lg italic text-background/70 md:text-xl">
                  {site.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Bar */}
      <section className="border-b border-border bg-card px-6 py-6 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Location
              </p>
              <p className="mt-1 text-sm text-foreground">{site.location}</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Coordinates
              </p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                {site.coordinates.lat}N, {site.coordinates.lng}E
              </p>
            </div>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Ho Chi Minh City, District 2
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="px-6 py-24 md:px-10 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-muted-foreground">
              About this Site
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="font-sans font-medium text-2xl leading-relaxed text-foreground md:text-3xl">
              {site.description}
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="mt-10 h-px bg-border" />
            <p className="mt-10 text-base leading-relaxed text-muted-foreground">
              {site.longDescription}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section className="bg-card px-6 pt-12 pb-24 md:px-10 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="mb-12 text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Key Features
            </p>
          </FadeIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 100} className="h-full">
                <div className="group flex h-full flex-col border-t border-border pt-8 transition-colors hover:border-primary">
                  <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-sans text-xl font-medium text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Inner Monologue */}
      {site.monologue && (
        <section className="px-6 py-24 md:px-10 lg:py-32">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <p className="mb-8 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Inner Monologue
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <InnerMonologue monologue={site.monologue} />
            </FadeIn>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="border-t border-border">
        <div className="flex flex-col md:flex-row">
          <Link
            href={`/sites/${prevSite.id}`}
            className="group flex flex-1 flex-col gap-2 border-b border-border px-6 py-10 transition-colors hover:bg-card md:border-b-0 md:border-r md:px-10 md:py-16"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Previous Site
            </p>
            <p className="font-sans font-medium text-2xl text-foreground transition-colors group-hover:text-primary md:text-3xl">
              {prevSite.name}
            </p>
          </Link>
          <Link
            href={`/sites/${nextSite.id}`}
            className="group flex flex-1 flex-col items-end gap-2 px-6 py-10 text-right transition-colors hover:bg-card md:px-10 md:py-16"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Next Site
            </p>
            <p className="font-sans font-medium text-2xl text-foreground transition-colors group-hover:text-primary md:text-3xl">
              {nextSite.name}
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
}
