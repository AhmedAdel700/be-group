import AboutSection from "@/components/about-section";
import DiplomasSection from "@/components/diplomas-section";
import Footer from "@/components/Footer";
import HeroSection from "@/components/hero-section";
import { fetchDiplomas } from "@/lib/diplomaService";

export default async function HomePage() {

  const diplomasData = await fetchDiplomas();

  return (
    <div className="min-h-screen bg-white">
      <main>
        <HeroSection />
        <AboutSection />
        <DiplomasSection diplomasData={diplomasData} />
      </main>
      <Footer />
    </div>
  );
}
