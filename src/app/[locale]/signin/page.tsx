import Seo from "@/components/Seo";
import { cookies } from "next/headers";
import Signin from "./Signin";

export default function page() {
  const cookieStore = cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value || "en";
  const seoContent =
    lang === "ar"
      ? {
          title:
            "تسجيل الدخول - الجامعة الإلكترونية السعودية - الكلية التطبيقية",
          description:
            "تسجيل الدخول إلى حسابك في الجامعة الإلكترونية السعودية - الكلية التطبيقية.",
        }
      : {
          title:
            "Sign In - Saudi Electronic University - College of Applied Studies",
          description:
            "Sign in to your account at Saudi Electronic University - College of Applied Studies.",
        };
  return (
    <>
      <Seo {...seoContent} />
      <Signin />
    </>
  );
}
