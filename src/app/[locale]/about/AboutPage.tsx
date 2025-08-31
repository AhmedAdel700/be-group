import About from "@/components/about/About";
import SplitText from "@/components/SplitText";

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-main-black">
      <div className="h-[170px] sm:h-[200px] lg:h-[235px] justify-end py-6 xl:py-0 xl:h-[63vh] flex flex-col items-center xl:justify-center bg-main-black2 text-main-primary">
        <SplitText
          text="About Be Group"
          tag="h1"
          className="font-extrabold leading-[1.2] text-[clamp(44px,10vw,128px)] relative"
          delay={80}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 50 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          initialHidden={true}
        />
      </div>
      <About />;
    </div>
  );
}
