import About from "@/components/about/About";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}
