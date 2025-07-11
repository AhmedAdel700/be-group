import AboutSection from "@/components/about-section";
import DiplomasSection from "@/components/diplomas-section";
import Footer from "@/components/Footer";
import MainHeader from "@/components/Header";
import HeroSection from "@/components/hero-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <MainHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <DiplomasSection />
      </main>
      <Footer />
    </div>
  );
}
