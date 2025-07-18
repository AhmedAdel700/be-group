import { fetchDiplomas } from "@/app/api/diplomas/diplomaService";
import HeroFrame from "@/app/assets/Section.png";
import AboutSection from "@/components/about-section";
import DiplomasSection from "@/components/diplomas-section";
import Footer from "@/components/Footer";
import HeroSection from "@/components/hero-section";
import Seo from "@/components/Seo";
import { cookies } from "next/headers";

export default async function HomePage() {
  const diplomasData = await fetchDiplomas();
  const cookieStore = cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value || "en";

  const seoContent =
    lang === "ar"
      ? {
          title: "الجامعة الإلكترونية السعودية - الكلية التطبيقية",
          description:
            "الموقع منصة إلكترونية مبتكرة تُقدم تجربة تعليمية شاملة للمتعلمين باللغتين العربية والإنجليزية. استكشف مجموعة واسعة من الشهادات والموارد والأدوات التفاعلية المصممة لدعم الطلاب والمعلمين في تحقيق التميز الأكاديمي.",
          image: "../assets/artificialIntelligence.jpg",
        }
      : {
          title: "Saudi Electronic University - College of Applied Studies",
          description:
            "The website is an innovative online platform offering a comprehensive educational experience for learners in both Arabic and English. Explore a wide range of diplomas, resources, and interactive tools designed to support students and educators in achieving academic excellence.",
          image: "../assets/artificialIntelligence.jpg",
        };

  return (
    <div className="min-h-screen bg-white">
      <Seo {...seoContent} />
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
