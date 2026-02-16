"use client";

import { useEffect, useState } from "react";

export function HomeHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Panoramic view of the Saigon River at sunset"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p
          className={`mb-4 text-xs uppercase tracking-[0.4em] text-background/70 transition-all duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          Exhibit Companion
        </p>
        <h1
          className={`font-serif text-5xl leading-tight text-background md:text-7xl lg:text-8xl transition-all duration-1000 delay-200 ${loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <span className="text-balance">Reimagined</span>
          <br />
          <span className="italic text-balance">Rivers</span>
        </h1>
        <p
          className={`mt-6 max-w-md text-sm leading-relaxed text-background/80 md:text-base transition-all duration-1000 delay-500 ${loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          Four landscapes along the Saigon River, reimagined through the vision
          of Ho Chi Minh City&apos;s students.
        </p>
        <div
          className={`mt-10 transition-all duration-1000 delay-700 ${loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-background/60">
            District 2, Ho Chi Minh City
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-background/50">
            Scroll
          </span>
          <div className="h-8 w-px bg-background/30" />
        </div>
      </div>
    </section>
  );
}
