import About from "@/components/about/About";
import Explore from "@/components/explore/Explore";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Research from "@/components/research/Research";
import Statistics from "@/components/statistics/Statistics";
import Image from "next/image";
import leftShape from "@/app/assets/left Ellipse for hero.svg";
import rightShape from "@/app/assets/Right Ellipse for hero.svg";

import rightShapeFooter from "@/app/assets/Right Ellipse for footer.svg";
import leftShapeFooter from "@/app/assets/left Ellipse for footer.svg";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <div className="mx-4 xl:mx-0">
        <Hero />
        <Image
          src={leftShape}
          alt="Shape 1"
          className="absolute z-10 left-0 top-0 hidden dark:block"
        />
        <Image
          src={rightShape}
          alt="Shape 2"
          className="absolute z-10 right-0 top-0 hidden dark:block"
        />
      </div>
      <Explore />
      <About />
      <Statistics />
      <Research />
      <Footer />

      <Image
        src={leftShapeFooter}
        alt="center shape"
        className="absolute left-0 bottom-0 hidden dark:block -z-50 translate-y-[350px]"
      />

      <Image
        src={rightShapeFooter}
        alt="center shape"
        className="absolute right-0 bottom-0 hidden dark:block -z-50 sm:translate-y-[200px]"
      />
    </div>
  );
}
