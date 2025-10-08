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

export default async function Home({ params }: { params: { locale: string } }) {
  const homeData = await fetchHomeData(params.locale);
  const {
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
      <Hero />
      <About aboutData={about} />
      <ClientsSection clients={clients} />
      <Services servicesData={services} benefitsData={benefits} />
      <Portfolio projectsData={projectsApiData} />
      <WhyChooseUs benefitsData={benefits} />
      <AchievementSection achievementsData={achievements} />
      <OurBlogs blogsData={blogs} />
      <ContactUs contactData={contact_data} contactSection={contact_section} />
    </div>
  );
}
