import { fetchStatus } from "@/app/api/enrollmentStatus/enrollmentService";
import Pending from "./Pending";
// import Approved from "./Approved";
// import Rejected from "./Rejected";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return await generatePageMetadata({
    ar: {
      title: "حالة التسجيل - الجامعة الإلكترونية السعودية - الكلية التطبيقية",
      description:
        "تفقد حالة تسجيلك في الجامعة الإلكترونية السعودية - الكلية التطبيقية.",
    },
    en: {
      title:
        "Enrollment Status - Saudi Electronic University - College of Applied Studies",
      description:
        "Check your enrollment status at Saudi Electronic University - College of Applied Studies.",
    },
  });
}

export default async function page() {
  const enrollmentData = await fetchStatus();

  return (
    <>
      <Pending enrollmentData={enrollmentData} />
      {/* <Approved enrollmentData={enrollmentData} /> */}
      {/* <Rejected enrollmentData={enrollmentData} /> */}
    </>
  );
}
