import { VerifyEmailResponse } from "@/types/authApiTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BACKEND_API_URL = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/${process.env.NEXT_PUBLIC_BACKEND_VERSION}/`;

export const emailApi = createApi({
  reducerPath: "emailApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_API_URL }),
  endpoints: (builder) => ({
    verifyEmail: builder.mutation<
      VerifyEmailResponse,
      { verificationCode: string }
    >({
      query: (body) => ({ url: "/auth/verify-email", method: "POST", body }),
    }),
    generateCode: builder.mutation<VerifyEmailResponse, void>({
      query: () => ({
        url: "/auth/generate-verification-code",
        method: "POST",
      }),
    }),
  }),
});

export const { useVerifyEmailMutation, useGenerateCodeMutation } = emailApi;
