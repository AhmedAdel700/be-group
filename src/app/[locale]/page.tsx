import AboutSection from "../../components/about-section";
import CoursesSection from "../../components/courses-section";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HeroSection from "../../components/hero-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
      </main>
      <Footer />
    </div>
  );
}
