import { fetchProjectsData } from "@/api/projectsService";
import ProjectsPage from "./ProjectsPage";

export default async function page({ params }: { params: { locale: string } }) {
  const projectsApiData = await fetchProjectsData(params.locale);
  return <ProjectsPage projectsApiData={projectsApiData} />;
}
