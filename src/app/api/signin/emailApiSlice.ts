import {
  createApi,
  fetchBaseQuery,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { getSession } from "next-auth/react";
import { toast } from "sonner";
import { getErrorMessage } from "@/utils/errorMessage";

import {
  RegistrationData,
  SginUpResponse,
  VerifyEmailResponse,
} from "@/types/authApiTypes";

const BACKEND_API_URL = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/${process.env.NEXT_PUBLIC_BACKEND_VERSION}/`;

const baseQueryWithErrorHandling: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: BACKEND_API_URL,
    prepareHeaders: async (headers) => {
      const session = await getSession();
      const token = session;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  });

  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error && typeof window !== "undefined") {
    const pathname = window.location.pathname;
    const firstSegment = pathname.split("/")[1];
    const supportedLocales = ["ar", "en"];
    const lang = supportedLocales.includes(firstSegment) ? firstSegment : "en";
    console.log(lang);
    

    const errorMessage = getErrorMessage(
      result.error?.data || result.error,
      lang
    );

      toast.error(errorMessage, {
        duration: 5000,
      });
  }

  return result;
};

export const emailApi = createApi({
  reducerPath: "emailApi",
  baseQuery: baseQueryWithErrorHandling,
  endpoints: (builder) => ({
    verifyEmail: builder.mutation<
      VerifyEmailResponse,
      { verificationCode: string; token: string | undefined }
    >({
      query: ({ verificationCode, token }) => ({
        url: "/auth/verify-email",
        method: "POST",
        body: { verificationCode },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    generateCode: builder.mutation<VerifyEmailResponse, { token: string | undefined }>({
      query: ({ token }) => ({
        url: "/auth/generate-verification-code",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    register: builder.mutation<SginUpResponse, RegistrationData>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useVerifyEmailMutation,
  useGenerateCodeMutation,
  useRegisterMutation,
} = emailApi;
