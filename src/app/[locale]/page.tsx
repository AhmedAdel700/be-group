import About from "@/components/about/About";
import Explore from "@/components/explore/Explore";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Research from "@/components/research/Research";
import Statistics from "@/components/statistics/Statistics";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-4 xl:mx-0">
        <Hero />
      </div>
      <Explore />
      <About />
      <Statistics />
      <Research />
      <Footer />
    </>
  );
}
