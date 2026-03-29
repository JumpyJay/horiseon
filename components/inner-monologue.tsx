"use client";

import type { MonologueData } from "@/lib/sites-data";

interface InnerMonologueProps {
  monologue: MonologueData;
}

export function InnerMonologue({ monologue }: InnerMonologueProps) {
  return (
    <div className="flex flex-col items-center gap-6 rounded-3xl bg-[#FF9333] p-6 md:flex-row md:items-center md:gap-10 md:p-10">
      {/* Thought bubble - left side */}
      <div className="relative w-full md:flex-1">
        <div className="animate-bubble-float rounded-3xl bg-white/90 px-6 py-5 shadow-lg">
          <p className="text-base leading-relaxed text-gray-800 md:text-lg italic">
            &ldquo;{monologue.text}&rdquo;
          </p>
        </div>
        {/* Trailing thought circles */}
        <div className="hidden md:block">
          <div className="absolute -right-4 bottom-4 h-4 w-4 rounded-full bg-white/80 shadow-md" />
          <div className="absolute -right-7 bottom-0 h-2.5 w-2.5 rounded-full bg-white/60 shadow-sm" />
        </div>
        <div className="flex justify-center gap-2 pt-2 md:hidden">
          <div className="h-3 w-3 rounded-full bg-white/80 shadow-md" />
          <div className="h-2 w-2 rounded-full bg-white/60 shadow-sm" />
        </div>
      </div>

      {/* Avatar - right side */}
      <div className="flex shrink-0 flex-col items-center">
        <img
          src={monologue.image}
          alt={`${monologue.characterName}'s portrait`}
          className="h-28 w-28 rounded-full object-cover ring-4 ring-white/40 md:h-36 md:w-36"
        />
        <p className="mt-3 text-sm font-medium text-white/90">
          {monologue.characterName}
        </p>
      </div>
    </div>
  );
}
