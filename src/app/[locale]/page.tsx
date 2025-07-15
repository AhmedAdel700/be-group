import AboutSection from "@/components/about-section";
import DiplomasSection from "@/components/diplomas-section";
import Footer from "@/components/Footer";
import HeroSection from "@/components/hero-section";
import { fetchDiplomas } from "@/lib/diplomaService";
import HeroFrame from "@/app/assets/Section.png";

export default async function HomePage() {
  const diplomasData = await fetchDiplomas();

  return (
    <div className="min-h-screen bg-white">
      <main
        style={{
          backgroundImage: `url(${HeroFrame.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <HeroSection />
        <AboutSection />
        <DiplomasSection diplomasData={diplomasData} />
      </main>
      <Footer />
    </div>
  );
}
