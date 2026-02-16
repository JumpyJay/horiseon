import { notFound } from "next/navigation";
import { sites } from "@/lib/sites-data";
import { ExhibitNav } from "@/components/exhibit-nav";
import { SiteDetail } from "@/components/site-detail";
import type { Metadata } from "next";

export function generateStaticParams() {
  return sites.map((site) => ({
    slug: site.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const site = sites.find((s) => s.id === slug);
  if (!site) return { title: "Site Not Found" };

  return {
    title: `${site.name} | Reimagined Rivers`,
    description: site.description,
  };
}

export default async function SitePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const site = sites.find((s) => s.id === slug);

  if (!site) {
    notFound();
  }

  return (
    <main>
      <ExhibitNav />
      <SiteDetail site={site} />
    </main>
  );
}
