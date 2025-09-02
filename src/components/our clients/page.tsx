import LogoCarousel from "@/components/LogoCarousel";
import { useLocale } from "next-intl";
import client1 from "@/app/assets/client1.webp";
import client2 from "@/app/assets/client2.webp";
import client3 from "@/app/assets/client3.webp";
import client4 from "@/app/assets/client4.webp";
import client5 from "@/app/assets/client5.webp";
import client6 from "@/app/assets/client6.webp";
import client7 from "@/app/assets/client7.webp";
import client8 from "@/app/assets/client8.webp";
import client9 from "@/app/assets/client9.webp";
import client10 from "@/app/assets/client10.webp";
import client11 from "@/app/assets/client11.webp";
import client12 from "@/app/assets/client12.webp";
import client13 from "@/app/assets/client13.webp";
import client14 from "@/app/assets/client14.webp";
import client15 from "@/app/assets/client15.webp";
import client16 from "@/app/assets/client16.webp";
import client17 from "@/app/assets/client17.webp";
import client18 from "@/app/assets/client18.webp";
import client19 from "@/app/assets/client19.webp";
import client20 from "@/app/assets/client20.webp";

const logos = [
  { src: client1, alt: "Client Logo" },
  { src: client2, alt: "Client Logo" },
  { src: client3, alt: "Client Logo" },
  { src: client4, alt: "Client Logo" },
  { src: client5, alt: "Client Logo" },
  { src: client6, alt: "Client Logo" },
  { src: client7, alt: "Client Logo" },
  { src: client8, alt: "Client Logo" },
  { src: client9, alt: "Client Logo" },
  { src: client10, alt: "Client Logo" },
  { src: client11, alt: "Client Logo" },
  { src: client12, alt: "Client Logo" },
  { src: client13, alt: "Client Logo" },
  { src: client14, alt: "Client Logo" },
  { src: client15, alt: "Client Logo" },
  { src: client16, alt: "Client Logo" },
  { src: client17, alt: "Client Logo" },
  { src: client18, alt: "Client Logo" },
  { src: client19, alt: "Client Logo" },
  { src: client20, alt: "Client Logo" },
];

export default function ClientsSection() {
  const locale = useLocale();
  return (
    <LogoCarousel
      logos={logos}
      locale={locale}
      delayMs={2200}
      className="bg-main-black2 border-b border-white/10 pb-10"
    />
  );
}
