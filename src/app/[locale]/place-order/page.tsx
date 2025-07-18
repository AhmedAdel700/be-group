import Seo from "@/components/Seo";
import { cookies } from "next/headers";
import RegistrationForm from "./RegistrationForm";

export default async function page() {
  const cookieStore = cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value || "en";

  const seoContent =
    lang === "ar"
      ? {
          title:
            "تسجيل حساب - الجامعة الإلكترونية السعودية - الكلية التطبيقية",
          description:
            "قم بتسجيل حساب جديد في الجامعة الإلكترونية السعودية - الكلية التطبيقية.",
        }
      : {
          title:
            "Registration - Saudi Electronic University - College of Applied Studies",
          description:
            "Register a new account at Saudi Electronic University - College of Applied Studies.",
        };

  return (
    <div className="min-h-screen">
      <Seo {...seoContent} />
      <RegistrationForm />
    </div>
  );
}
