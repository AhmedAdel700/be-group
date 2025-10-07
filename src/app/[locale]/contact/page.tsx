import ContactUsPage from "./ContactUsPage";
import { fetchHomeData } from "@/api/homeService";

export default async function page({ params }: { params: { locale: string } }) {
  const homeData = await fetchHomeData(params.locale);
  const { contact_section, contact_data } = homeData;
  return (
    <ContactUsPage
      contactData={contact_data}
      contactSection={contact_section}
    />
  );
}
