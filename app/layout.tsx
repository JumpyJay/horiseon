import React from "react";
import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";

import "./globals.css";

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const _dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "Reimagined Rivers | Saigon River Exhibit Companion",
  description:
    "A digital companion for the Reimagined Rivers exhibit — exploring four reimagined landscapes along the Saigon River in District 2, Ho Chi Minh City, brought to life by local student workshops.",
};

export const viewport: Viewport = {
  themeColor: "#a0583c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${_inter.variable} ${_dmSerif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
