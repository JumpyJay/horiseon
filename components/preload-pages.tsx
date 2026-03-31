"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const pagesToPreload = [
  "/sites/canvas-quay",
  "/sites/solar-wharf",
  "/sites/boats-on-saigon-river",
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
