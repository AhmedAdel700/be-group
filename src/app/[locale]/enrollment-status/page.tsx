import { fetchStatus } from "@/app/api/enrollmentStatus/enrollmentService";
import Pending from "./Pending";
// import Approved from "./Approved";
// import Rejected from "./Rejected";

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
