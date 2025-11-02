import About from "@/components/about/About";
import OurBlogs from "@/components/blogs/OurBlogs";
import Hero from "@/components/hero/Hero";
import Portfolio from "@/components/portfolio/Portfolio";

import ContactUs from "@/components/conatct/ContactUs";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";
import Services from "@/components/services/Services";
import ClientsSection from "@/components/our clients/page";
import AchievementSection from "@/components/achievements/AchievementSection";
import { fetchHomeData } from "@/api/homeService";
import { fetchProjectsData } from "@/api/projectsService";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const homeApiData = await fetchHomeData(params.locale);
  const { seo } = homeApiData;

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

export default async function Home({ params }: { params: { locale: string } }) {
  const homeData = await fetchHomeData(params.locale);
  const {
    banner,
    about,
    clients,
    services,
    benefits,
    achievements,
    blogs,
    contact_section,
    contact_data,
  } = homeData;

  const projectsApiData = await fetchProjectsData(params.locale);

  return (
    <div className="relative overflow-hidden">
      <Hero banner={banner} />
      <About aboutData={about} />
      <ClientsSection clients={clients} />
      <Services servicesData={services} />
      <Portfolio projectsData={projectsApiData} />
      <WhyChooseUs benefitsData={benefits} />
      <AchievementSection achievementsData={achievements} />
      <OurBlogs blogsData={blogs} />
      <ContactUs contactData={contact_data} contactSection={contact_section} />
    </div>
  );
}
