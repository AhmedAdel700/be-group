import { generatePageMetadata } from "@/lib/metadata";
import Signin from "./Signin";

export async function generateMetadata() {
  return await generatePageMetadata({
    ar: {
      title: "تسجيل الدخول - الجامعة الإلكترونية السعودية - الكلية التطبيقية",
      description:
        "تسجيل الدخول إلى حسابك في الجامعة الإلكترونية السعودية - الكلية التطبيقية.",
    },
    en: {
      title:
        "Sign In - Saudi Electronic University - College of Applied Studies",
      description:
        "Sign in to your account at Saudi Electronic University - College of Applied Studies.",
    },
  });
}

export default function page() {
  return <Signin />;
}
