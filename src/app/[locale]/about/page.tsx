import { fetchHomeData } from "@/api/homeService";
import AboutPage from "./AboutPage";

export default async function page({ params }: { params: { locale: string } }) {
  const homeData = await fetchHomeData(params.locale);
  const { about } = homeData;
  return <AboutPage aboutData={about} />;
}
