"use client";

import Image from "next/image";

const partners = [
  { src: "/gastech-logo.svg", alt: "GasTech Partner 1" },
  { src: "/gastech-logo.svg", alt: "GasTech Partner 2" },
  { src: "/gastech-logo.svg", alt: "GasTech Partner 3" },
  { src: "/gastech-logo.svg", alt: "GasTech Partner 4" },
  { src: "/gastech-logo.svg", alt: "GasTech Partner 5" },
  { src: "/gastech-logo.svg", alt: "GasTech Partner 6" },
];

const items = [...partners, ...partners]; // Duplicate for smoother loop

export default function ScrollingItems() {
  const getDelay = (i: number) =>
    `calc(30s / ${items.length} * (${items.length} - ${i}) * -1)`;

  return (
    <section className="flex flex-col gap-8 text-center pt-8" id="partners">
      <h2 className="text-2xl md:text-4xl font-semibold">شركاء النجاح</h2>
      <div className="bg-slate-100 py-10">
        <div className="wrapper reduced-mask">
          {items.map((item, i) => (
            <div
              key={`left-${i}`}
              className="itemLeft"
              style={{ animationDelay: getDelay(i) }}
            >
              <div className="card-inner">
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

        <div className="wrapper reduced-mask mt-4">
          {items.map((item, i) => (
            <div
              key={`right-${i}`}
              className="itemRight"
              style={{ animationDelay: getDelay(i) }}
            >
              <div className="card-inner">
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
