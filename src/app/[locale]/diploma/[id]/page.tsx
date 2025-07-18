import { fetchDiplomaDetails } from "@/app/api/diplomas/diplomaService";
import HeroFrame from "@/app/assets/Section.png";
import { generatePageMetadata } from "@/lib/metadata";
import DiplomaDetails from "./DiplomaDetails";

export async function generateMetadata({ params }: { params: { id: string } }) {
  return await generatePageMetadata(async (params) => {
    const DetailsData = await fetchDiplomaDetails(params.id);

    return {
      ar: {
        title: `${DetailsData?.data?.titleAr || "الدبلومة"} - دبلومة`,
        description: `تعرف على تفاصيل الدبلومة: ${
          DetailsData?.data?.descriptionAr || "تفاصيل الدبلومة"
        }`,
        image: DetailsData?.data?.image || "/assets/artificialIntelligence.jpg",
      },
      en: {
        title: `${DetailsData?.data?.title || "Diploma"} - Diploma`,
        description: `Learn more about the diploma: ${
          DetailsData?.data?.description || "Diploma details"
        }`,
        image: DetailsData?.data?.image || "/assets/artificialIntelligence.jpg",
      },
    };
  }, params);
}

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const DetailsData = await fetchDiplomaDetails(id);

  return (
    <section
      style={{
        backgroundImage: `url(${HeroFrame.src})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <DiplomaDetails DetailsData={DetailsData} />
    </section>
  );
}
