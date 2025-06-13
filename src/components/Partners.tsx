"use client";

import Image from "next/image";

const partners = [
  { src: "/gastech-logo.svg", alt: "GasTech Partner 1" },
  { src: "/gastech-logo.svg", alt: "GasTech Partner 2" },
  { src: "/gastech-logo.svg", alt: "GasTech Partner 3" },
  { src: "/gastech-logo.svg", alt: "GasTech Partner 4" },
  { src: "/gastech-logo.svg", alt: "GasTech Partner 5" },
];

const items = [...partners, ...partners, ...partners];

export default function ScrollingItems() {
  const getDelay = (i: number) =>
    `calc(50s / ${items.length} * (${items.length} - ${i}) * -1)`;

  return (
    <section className="flex flex-col gap-8 text-center mt-4" id="partners">
      <h2 className="text-2xl md:text-4xl font-semibold">شركاء النجاح</h2>
      <div className="bg-slate-100">
        <div className="wrapper reduced-mask pt-1">
          {items.map((item, i) => (
            <div
              key={`left-${i}`}
              className="itemLeft flex items-center justify-center"
              style={{
                animationDelay: getDelay(i),
                width: "210px",
                height: "110px",
              }}
            >
              <div className="bg-white rounded-xl shadow-md w-full h-full flex items-center justify-center card-hover m-3">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={100}
                  height={40}
                  className="object-contain max-w-[85%] max-h-[65%]"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="wrapper reduced-mask">
          {items.map((item, i) => (
            <div
              key={`right-${i}`}
              className="itemRight flex items-center justify-center !w-[185px] !sm:w-[210px]"
              style={{
                animationDelay: getDelay(i),
                height: "110px",
              }}
            >
              <div className="bg-white rounded-xl shadow-md w-full h-full flex items-center justify-center card-hover">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={100}
                  height={40}
                  className="object-contain max-w-[85%] max-h-[65%]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
