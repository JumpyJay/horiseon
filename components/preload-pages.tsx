"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const pagesToPreload = [
  "/sites/riverbank-gardens",
  "/sites/floating-wetlands",
  "/sites/community-promenade",
  "/sites/mangrove-sanctuary",
  "/process",
];

export function PreloadPages() {
  const router = useRouter();

  useEffect(() => {
    // Prefetch all pages for instant navigation
    for (const page of pagesToPreload) {
      router.prefetch(page);
    }
  }, [router]);

  // Also preload all images
  useEffect(() => {
    const images = [
      "/images/site-1.jpg",
      "/images/site-2.jpg",
      "/images/site-3.jpg",
      "/images/site-4.jpg",
      "/images/hero.jpg",
      "/images/process-1.jpg",
      "/images/process-2.jpg",
      "/images/process-3.jpg",
    ];

    for (const src of images) {
      const img = new Image();
      img.src = src;
    }
  }, []);

  return null;
}
