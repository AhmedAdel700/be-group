import { EnrollmentResponse } from "@/types/enrollmentApiTypes";
import { getServerSession } from "next-auth/next";
import authOptions from "../auth/[...nextauth]/options";

const backendURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
const backendVersion = process.env.NEXT_PUBLIC_BACKEND_VERSION;

export const fetchStatus = async (): Promise<EnrollmentResponse> => {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    throw new Error("User Not Authenticated");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const token = (session.user as any).token;

  const url = `${backendURL}/${backendVersion}/profile/me`;

  const response = await fetch(url, {
    method: "GET",
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.error(
      "Failed To Fetch Enrollment Status Data:",
      response.statusText
    );
    throw new Error("Failed To Fetch Enrollment Status Data");
  }

  const data = await response.json();

  return data;
};
