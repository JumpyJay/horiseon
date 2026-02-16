"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sites/riverbank-gardens", label: "01" },
  { href: "/sites/floating-wetlands", label: "02" },
  { href: "/sites/community-promenade", label: "03" },
  { href: "/sites/mangrove-sanctuary", label: "04" },
  { href: "/process", label: "Process" },
];

export function ExhibitNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="font-serif text-lg tracking-wide text-foreground"
        >
          Reimagined Rivers
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-widest transition-colors hover:text-primary",
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={cn(
              "h-px w-5 bg-foreground transition-all duration-300",
              menuOpen && "translate-y-[3.5px] rotate-45",
            )}
          />
          <span
            className={cn(
              "h-px w-5 bg-foreground transition-all duration-300",
              menuOpen && "-translate-y-[3.5px] -rotate-45",
            )}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background transition-all duration-500 md:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={cn(
              "font-serif text-3xl transition-colors hover:text-primary",
              pathname === link.href ? "text-primary" : "text-foreground",
            )}
          >
            {link.label === "Home"
              ? "Home"
              : link.label === "Process"
                ? "Process"
                : `Site ${link.label}`}
          </Link>
        ))}
      </div>
    </nav>
  );
}
