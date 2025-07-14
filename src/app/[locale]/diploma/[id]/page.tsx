import { fetchDiplomaDetails } from "@/lib/diplomaService";
import DiplomaDetails from "./DiplomaDetails";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const DetailsData = await fetchDiplomaDetails(id);
  return <DiplomaDetails DetailsData={DetailsData} />;
}
