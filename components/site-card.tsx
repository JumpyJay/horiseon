"use client";

import Link from "next/link";
import type { SiteData } from "@/lib/sites-data";
import { FadeIn } from "./fade-in";

interface SiteCardProps {
  site: SiteData;
  index: number;
}

export function SiteCard({ site, index }: SiteCardProps) {
  const isEven = index % 2 === 0;

  return (
    <FadeIn delay={index * 100}>
      <Link href={`/sites/${site.id}`} className="group block">
        <div
          className={`flex flex-col gap-6 md:flex-row md:items-center md:gap-12 ${isEven ? "" : "md:flex-row-reverse"}`}
        >
          {/* Image */}
          <div className="relative overflow-hidden md:w-3/5">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={site.image || "/placeholder.svg"}
                alt={`${site.name} — ${site.subtitle}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute left-4 top-4">
              <span className="font-serif text-5xl text-background/80 md:text-6xl">
                {site.number}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 md:w-2/5">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {site.location}
            </p>
            <h3 className="font-serif text-3xl text-foreground md:text-4xl">
              {site.name}
            </h3>
            <p className="font-serif text-lg italic text-primary">
              {site.subtitle}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>
            <div className="mt-2 flex items-center gap-2 text-sm text-primary transition-all group-hover:gap-3">
              <span className="uppercase tracking-widest">Explore</span>
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
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}
