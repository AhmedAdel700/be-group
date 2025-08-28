import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <About />
    </div>
  );
}
