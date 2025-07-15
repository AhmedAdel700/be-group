import { fetchDiplomaDetails } from "@/lib/diplomaService";
import DiplomaDetails from "./DiplomaDetails";
import HeroFrame from "@/app/assets/Section.png";

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
