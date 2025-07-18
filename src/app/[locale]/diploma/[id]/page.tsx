import { fetchDiplomaDetails } from "@/app/api/diplomas/diplomaService";
import HeroFrame from "@/app/assets/Section.png";
import Seo from "@/components/Seo";
import { cookies } from "next/headers";
import DiplomaDetails from "./DiplomaDetails";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const DetailsData = await fetchDiplomaDetails(id);
  const cookieStore = cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value || "en";
  const seoContent =
    lang === "ar"
      ? {
          title: `${DetailsData?.data?.titleAr} - دبلومة`,
          description: `تعرف على تفاصيل الدبلومة: ${DetailsData?.data?.descriptionAr}`,
          image:
            DetailsData?.data?.image || "../assets/artificialIntelligence.jpg",
        }
      : {
          title: `${DetailsData?.data?.title} - Diploma`,
          description: `Learn more about the diploma: ${DetailsData?.data?.description}`,
          image:
            DetailsData?.data?.image || "../assets/artificialIntelligence.jpg",
        };
  return (
    <>
      <Seo {...seoContent} />
      <section
        style={{
          backgroundImage: `url(${HeroFrame.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <DiplomaDetails DetailsData={DetailsData} />
      </section>
    </>
  );
}
