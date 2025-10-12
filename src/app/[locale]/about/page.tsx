import AboutPage from "./AboutPage";
import { fetchAboutData } from "@/api/aboutService";
import { Metadata } from "next";

// 1. ✅ Generate metadata dynamically
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const aboutApiData = await fetchAboutData(params.locale);
  const { seo } = aboutApiData.data;

  const metaTags = seo.meta.meta_tags;
  const openGraph = seo.meta.open_graph;
  const twitterCard = seo.meta.twitter_card;
  const hreflang = seo.meta.hreflang_tags;

  return {
    title: metaTags.title,
    description: metaTags.description,
    openGraph: {
      title: openGraph["og:title"],
      description: openGraph["og:description"],
      url: openGraph["og:url"],
      images: [
        {
          url: openGraph["og:image"],
          alt: metaTags.title,
        },
      ],
      type: openGraph["og:type"],
    },
    twitter: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      card: twitterCard["twitter:card"] as any,
      title: twitterCard["twitter:title"],
      description: twitterCard["twitter:description"],
      images: [twitterCard["twitter:image"]],
    },
    metadataBase: new URL(metaTags.canonical),
    robots: metaTags.robots,
    alternates: {
      canonical: metaTags.canonical,
      languages: {
        en: hreflang.en,
        ar: hreflang.ar,
        "x-default": hreflang["x-default"],
      },
    },
  };
}

// 2. ✅ Page Component (already correct)
export default async function Page({ params }: { params: { locale: string } }) {
  const aboutApiData = await fetchAboutData(params.locale);

  return <AboutPage aboutData={aboutApiData} />;
}
