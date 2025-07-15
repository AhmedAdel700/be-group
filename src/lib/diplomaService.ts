import { DiplomaDetailsData, DiplomaResponseData } from "@/types/diplomasApiTypes";

const backendURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
const backendVersion = process.env.NEXT_PUBLIC_BACKEND_VERSION;

export const fetchDiplomas = async (): Promise<DiplomaResponseData> => {
  const url = `${backendURL}/${backendVersion}/diplomas/`;

  const response = await fetch(url, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.error("Failed To Fetch Diplomas Data:", response.statusText);
    throw new Error("Failed To Fetch Diplomas Data");
  }

  const data = await response.json();

  return data;
};

export const fetchDiplomaDetails = async (id: string): Promise<DiplomaDetailsData> => {
  const url = `${backendURL}/${backendVersion}/diplomas/${id}`;

  const response = await fetch(url, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    console.error("Failed To Fetch Diplomas Data:", response.statusText);
    throw new Error("Failed To Fetch Diplomas Data");
  }

  const data = await response.json();

  return data;
};