import Image from "next/image";
import coin from "@/app/assets/Crypto.svg";
import futuristic from "@/app/assets/Futuristic.svg";
import book from "@/app/assets/Book.svg";
import labtop from "@/app/assets/Labtop.svg";

export default function Explore() {
  const cardData = [
    {
      title: "Educational Resources",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl ultricies tortor tempor sagittis.",
      image: coin,
    },
    {
      title: "Networking Opportunities",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl ultricies tortor tempor sagittis.",
      image: futuristic,
    },
    {
      title: "Educational Resources",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl ultricies tortor tempor sagittis.",
      image: book,
    },
    {
      title: "Reliable certificate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nisl ultricies tortor tempor sagittis.",
      image: labtop,
    },
  ];

  return (
    <section
      className="
      w-full
      bg-main-white
      dark:bg-[#1A1A1A]
      py-10
    "
    >
      <div className="container mx-auto px-4">
        <div className="xl:max-w-[567px]">
          <h2 className="text-main-text font-normal text-[28px]">
            Explore the World of Robotics{" "}
            <span className="font-bold">Research & Development</span>
          </h2>
        </div>

        <div className="mt-10 w-full flex flex-wrap justify-center gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="
                relative w-[350px] h-[420px]
                rounded-[8px]
                border border-black-tint-90 dark:border-black-tint-2
                bg-black-tint-2 dark:bg-black-tint-90
                overflow-hidden transition hover:shadow-lg
                flex flex-col justify-start cursor-pointer
              "
            >
              <div className="p-8 z-10 flex flex-col gap-6">
                <h3 className="text-main-text text-lg font-bold">
                  {card.title}
                </h3>
                <p className="text-main-text text-base font-medium">
                  {card.description}
                </p>
              </div>

              <div className="absolute bottom-0 right-0">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={300}
                  height={300}
                  className="object-contain w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
