import LogoCarousel from "@/components/LogoCarousel";
import { useLocale } from "next-intl";
import { ClientTypes } from "@/types/apiDataTypes";


export default function ClientsSection({ clients }: { clients: ClientTypes[] }) {
  const locale = useLocale();
  return (
    <LogoCarousel
      clients={clients}
      locale={locale}
      delayMs={2200}
      className="bg-main-black2 border-b border-white/10 pb-10"
    />
  );
}
