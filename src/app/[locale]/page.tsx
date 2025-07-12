import AboutSection from "@/components/about-section";
import DiplomasSection from "@/components/diplomas-section";
import Footer from "@/components/Footer";
import HeroSection from "@/components/hero-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <AboutSection />
        <DiplomasSection />
      </main>
      <Footer />
    </div>
  );
}
