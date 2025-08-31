import About from "@/components/about/About";
import OurBlogs from "@/components/blogs/OurBlogs";
import Hero from "@/components/hero/Hero";
import Portfolio from "@/components/portfolio/Portfolio";

import blogImage from '@/app/assets/2.png'

export default function Home() {
const blogs = [
  {
    id: 1,
    image: blogImage,
    desc: "How we prototype faster, validate earlier, and ship with confidence.",
    date: "December 2, 2023",
  },
  {
    id: 2,
    image: blogImage,
    desc: "Caching, edge, and build strategies that keep things blazing fast.",
    date: "January 15, 2024",
  },
  {
    id: 3,
    image: blogImage,
    desc: "Small UI tweaks that drove big conversion lifts across funnels.",
    date: "March 3, 2024",
  },
];

  return (
    <div className="relative overflow-hidden">
      <Hero />
      <About />
      <Portfolio />
      <OurBlogs items={blogs}/>
    </div>
  );
}
