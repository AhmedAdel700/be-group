import { locales } from "@/navigations";
import { unstable_setRequestLocale } from "next-intl/server";
import CareersPage from "./CareersPage";

export function generateStaticParams() {
  return locales.map((locale: string) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const title = locale === "ar" ? "الوظائف | بي جروب" : "Careers | Be Group";
  const description = locale === "ar" 
    ? "انضم إلى فريقنا المبدع والمبتكر. استكشف الفرص الوظيفية المتاحة في بي جروب." 
    : "Join our creative and innovative team. Explore career opportunities at Be Group.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default function Page({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return <CareersPage />;
}
