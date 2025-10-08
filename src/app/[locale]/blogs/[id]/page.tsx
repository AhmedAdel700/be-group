import { fetchBlogsDetailsData } from "@/api/blogsService";
import BlogDetails from "./BlogDetails";

export default async function page({
  params,
}: {
  params: { locale: string; id: string };
}) {
  const blogDetalisData = await fetchBlogsDetailsData(params.locale, params.id);
  return <BlogDetails blogDetalisData={blogDetalisData} />;
}
