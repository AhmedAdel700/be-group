import { generatePageMetadata } from "@/lib/metadata";
import RegistrationForm from "./RegistrationForm";

export async function generateMetadata() {
  return await generatePageMetadata({
    ar: {
      title: "تسجيل حساب - الجامعة الإلكترونية السعودية - الكلية التطبيقية",
      description:
        "قم بتسجيل حساب جديد في الجامعة الإلكترونية السعودية - الكلية التطبيقية.",
    },
    en: {
      title:
        "Registration - Saudi Electronic University - College of Applied Studies",
      description:
        "Register a new account at Saudi Electronic University - College of Applied Studies.",
    },
  });
}

export default async function page() {
  return (
    <div className="min-h-screen">
      <RegistrationForm />
    </div>
  );
}
