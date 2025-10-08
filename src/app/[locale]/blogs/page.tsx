import { fetchBlogsData } from "@/api/blogsService";
import BlogsPageRoute from "./BlogsPageRoute";

export default async function page({ params }: { params: { locale: string } }) {
  const blogApiData = await fetchBlogsData(params.locale);
  return <BlogsPageRoute blogApiData={blogApiData} />;
}
