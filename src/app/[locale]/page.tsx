import About from "@/components/about/About";
import OurBlogs from "@/components/blogs/OurBlogs";
import Hero from "@/components/hero/Hero";
import Portfolio from "@/components/portfolio/Portfolio";

import blogImage1 from '@/app/assets/blog1.jpg'
import blogImage2 from '@/app/assets/blog2.jpg'
import blogImage3 from '@/app/assets/blog3.jpg'
import ContactUs from "@/components/conatct/ContactUs";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";
import Services from "@/components/services/Services";
import ClientsSection from "@/components/our clients/page";
import AchievementSection from "@/components/achievements/AchievementSection";

export default function Home() {
const blogs = [
  {
    id: 1,
    image: blogImage1,
    desc: "How we prototype faster, validate earlier, and ship with confidence.",
    date: "December 2, 2023",
  },
  {
    id: 2,
    image: blogImage2,
    desc: "Caching, edge, and build strategies that keep things blazing fast.",
    date: "January 15, 2024",
  },
  {
    id: 3,
    image: blogImage3,
    desc: "Small UI tweaks that drove big conversion lifts across funnels.",
    date: "March 3, 2024",
  },
];

  return (
    <div className="relative overflow-hidden">
      <Hero />
      <About />
      <ClientsSection />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <AchievementSection />
      <OurBlogs items={blogs}/>
      <ContactUs />
    </div>
  );
}
