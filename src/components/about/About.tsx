import Image from "next/image";
import aboutImage from "@/app/assets/about.svg";

export default function About() {
  return (
    <section
      className="
        flex flex-col items-center justify-center
        gap-10 xl:gap-6 px-4 xl:px-0 container mx-auto py-10
        xl:flex-row xl:justify-between xl:items-center
      "
    >
      <div className="flex flex-col gap-8 max-w-[642px] text-start">
        <h2 className="text-[28px] text-main-text font-bold">
          About our company
        </h2>

        <p className="font-medium text-base text-main-text">
          Robotics.sa is more than just a platform; it’s a community-driven hub
          that fosters collaboration, knowledge exchange, and inspiration.
          Whether you’re a researcher pushing the boundaries of technology or a
          curious mind eager to learn, Robotics.sa is your go-to destination for
          all things related to Robotics Research and Development.
        </p>

        <p className="font-medium text-base text-main-text">
          Embark on a journey with us as we explore the limitless possibilities
          of robotics, where innovation meets imagination, and the future is
          crafted by the minds of today. Welcome to Robotics.sa – Shaping
          Tomorrow’s Robotics Landscape, Today
        </p>
      </div>

      <div>
        <Image
          src={aboutImage}
          alt="about image"
          width={596}
          height={392}
          className="hidden lg:block"
        />
      </div>
    </section>
  );
}
