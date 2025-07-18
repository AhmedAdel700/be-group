import { fetchStatus } from "@/app/api/enrollmentStatus/enrollmentService";
import Seo from "@/components/Seo";
import { cookies } from "next/headers";
import Pending from "./Pending";
// import Approved from "./Approved";
// import Rejected from "./Rejected";

export default async function page() {
  const enrollmentData = await fetchStatus();
  const cookieStore = cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value || "en";

  const seoContent =
    lang === "ar"
      ? {
          title:
            "حالة التسجيل - الجامعة الإلكترونية السعودية - الكلية التطبيقية",
          description:
            "تفقد حالة تسجيلك في الجامعة الإلكترونية السعودية - الكلية التطبيقية.",
        }
      : {
          title:
            "Enrollment Status - Saudi Electronic University - College of Applied Studies",
          description:
            "Check your enrollment status at Saudi Electronic University - College of Applied Studies.",
        };

  return (
    <>
      <Seo {...seoContent} />
      <Pending enrollmentData={enrollmentData} />
      {/* <Approved enrollmentData={enrollmentData} /> */}
      {/* <Rejected enrollmentData={enrollmentData} /> */}
    </>
  );
}
