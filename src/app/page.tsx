"use client";
import MinistryStandards from "@/components/MinistryStandards";
import Header from "@/components/Header";
import FeaturesGrid from "@/components/FeaturesGrid";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhyUs from "@/components/WhyUs";
import ContactUs from "@/components/ContactUs";
import Packages from "@/components/Packages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import ContactButtons from "@/components/ContactButtons";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturesGrid />
      <About />
      <section id="standards" className="py-16 bg-gray-50">
        <MinistryStandards />
      </section>
      <WhyChooseUs />
      <Packages />
      <WhyUs />
      <Partners />
      <ContactUs />
      <Footer />

      {/* <ContactButtons /> */}
    </div>
  );
}
