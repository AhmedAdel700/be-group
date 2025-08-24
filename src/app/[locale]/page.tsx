<<<<<<< Updated upstream
import { fetchDiplomas } from "@/app/api/diplomas/diplomaService";
import HeroFrame from "@/app/assets/Section.png";
import AboutSection from "@/components/about-section";
import DiplomasSection from "@/components/diplomas-section";
import Footer from "@/components/Footer";
import HeroSection from "@/components/hero-section";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return await generatePageMetadata({
    ar: {
      title: "الجامعة الإلكترونية السعودية - الكلية التطبيقية",
      description:
        "الموقع منصة إلكترونية مبتكرة تُقدم تجربة تعليمية شاملة للمتعلمين باللغتين العربية والإنجليزية. استكشف مجموعة واسعة من الشهادات والموارد والأدوات التفاعلية المصممة لدعم الطلاب والمعلمين في تحقيق التميز الأكاديمي.",
      image: "/assets/artificialIntelligence.jpg",
    },
    en: {
      title: "Saudi Electronic University - College of Applied Studies",
      description:
        "The website is an innovative online platform offering a comprehensive educational experience for learners in both Arabic and English. Explore a wide range of diplomas, resources, and interactive tools designed to support students and educators in achieving academic excellence.",
      image: "/assets/artificialIntelligence.jpg",
    },
  });
}

export default async function HomePage() {
  const diplomasData = await fetchDiplomas();
=======
import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
>>>>>>> Stashed changes

export default function Home() {
  return (
<<<<<<< Updated upstream
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
=======
    <div className="flex flex-col">
      <Header />
      <Hero />
      <About />
>>>>>>> Stashed changes
      <Footer />
    </div>
  );
}
