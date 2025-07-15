const BACKEND_API_URL = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/${process.env.NEXT_PUBLIC_BACKEND_VERSION}`;
const SUPPORTED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
  "text/plain",
];

export function isValidContentType(type: string): boolean {
  return SUPPORTED_TYPES.includes(type);
}

export async function uploadToBucket(
  file: File
): Promise<{ fileUrl: string }> {
  if (!isValidContentType(file.type)) {
    throw new Error("Unsupported file type");
  }

  const generateUrlRes = await fetch(
    `${BACKEND_API_URL}/files/get-upload-signed-url`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "c2VjcmV0X2RlZmF1bHRfYXBpX2tleQo=",
      },
      body: JSON.stringify({
        fileName: file.name,
        contentType: file.type,
      }),
    }
  );

  if (!generateUrlRes.ok) {
    throw new Error("Failed to generate signed URL");
  }

  const signedUrlData = await generateUrlRes.json();

  const uploadRes = await fetch(signedUrlData.uploadSignedUrl, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
    },
    body: file,
  });

  if (!uploadRes.ok) {
    throw new Error("Failed to upload file");
  }

  return { fileUrl: signedUrlData.accessSignedUrl };
}
