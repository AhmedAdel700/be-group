"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle, Clock, XCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

export default function EnrollmentStatusPage() {
  const searchParams = useSearchParams();
  const diploma = searchParams.get("diploma");
  const t = useTranslations("enroll");

  // Mock enrollment status - in real app this would come from API or searchParams
  const enrollmentStatus: "pending" | "approved" | "rejected" =
    (searchParams.get("status") as "pending" | "approved" | "rejected") ||
    "pending"; // pending, approved, rejected

  const diplomaInfo = {
    intermediate: {
      name: "Intermediate Diploma in Full Stack Web Development",
      description:
        "A comprehensive 2-semester program covering frontend and backend fundamentals",
      semesters: [
        "Semester 1: Frontend Foundations (HTML, CSS, JavaScript, React)",
        "Semester 2: Backend Basics (Node.js, Express, MongoDB)",
      ],
      duration: "6 months",
      price: "$598",
    },
    associate: {
      name: "Associate Diploma in Full Stack Web Development",
      description:
        "An extensive 4-semester program for complete mastery of full stack development",
      semesters: [
        "Semester 1: Frontend Foundations (HTML, CSS, JavaScript, React)",
        "Semester 2: Advanced Frontend (React Patterns, State Management, Testing)",
        "Semester 3: Backend Development (Node.js, Express, Database Design)",
        "Semester 4: Full Stack Integration (Authentication, Deployment, DevOps)",
      ],
      duration: "12 months",
      price: "$1,196",
    },
  };

  const currentDiploma = diplomaInfo[diploma as keyof typeof diplomaInfo];

  const getStatusInfo = () => {
    switch (enrollmentStatus) {
      case "pending":
        return {
          icon: <Clock className="w-8 h-8 text-yellow-500" />,
          color: "bg-yellow-100 text-yellow-800 border-yellow-200",
          text: t("Pending Review"),
        };
      case "approved":
        return {
          icon: <CheckCircle className="w-8 h-8 text-green-500" />,
          color: "bg-green-100 text-green-800 border-green-200",
          text: t("Approved"),
        };
      case "rejected":
        return {
          icon: <XCircle className="w-8 h-8 text-red-500" />,
          color: "bg-red-100 text-red-800 border-red-200",
          text: t("Rejected"),
        };
      default:
        return {
          icon: <Clock className="w-8 h-8 text-black-tint-80" />,
          color: "bg-gray-100 text-black-tint-80 border-gray-200",
          text: t("Unknown"),
        };
    }
  };

  const statusInfo = getStatusInfo();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto flex flex-col gap-6"
        >
          {/* Status Card */}
          <Card className="shadow-lg">
            <CardHeader className="text-center flex flex-col gap-4">
              <div className="flex items-center justify-center">
                {statusInfo.icon}
              </div>
              <CardTitle className="text-2xl font-bold text-[#001C71]">
                {t("Enrollment Status")}
              </CardTitle>
              <Badge
                className={`${statusInfo.color} hover:bg-transparent px-4 py-2 text-lg font-semibold border`}
              >
                {statusInfo.text}
              </Badge>
            </CardHeader>
          </Card>

          {/* Diploma Details */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#001C71]">
                {t("Diploma Details")}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-[#001C71]">
                  {t("Program Name")}
                </h3>
                <p className="text-black-tint-80">{currentDiploma.name}</p>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-[#001C71]">
                  {t("Description")}
                </h3>
                <p className="text-black-tint-80">{currentDiploma.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-[#001C71]">
                    {t("Duration")}
                  </h3>
                  <p className="text-black-tint-80">{currentDiploma.duration}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-[#001C71]">
                    {t("Total Price")}
                  </h3>
                  <p className="text-black-tint-80 font-bold">
                    {currentDiploma.price}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-[#001C71]">
                  {t("Included Semesters")}
                </h3>
                <div className="flex flex-col gap-2">
                  {currentDiploma.semesters.map((semester, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="w-6 h-6 bg-[#001C71] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-black-tint-80">{semester}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status-specific messages */}
              {enrollmentStatus === "pending" && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex flex-col gap-2">
                  <h4 className="font-semibold text-yellow-800">
                    {t("What is Next")}
                  </h4>
                  <p className="text-yellow-700">
                    {t(
                      "Your enrollment is currently under review We will notify you via email once a decision has been made This process typically takes 2-3 business days"
                    )}
                  </p>
                </div>
              )}

              {enrollmentStatus === "approved" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 flex flex-col gap-2">
                    {t("Congratulations")}
                  </h4>
                  <p className="text-green-700">
                    Your enrollment has been approved! You will receive access
                    credentials and course materials via email within 24 hours.
                  </p>
                </div>
              )}

              {enrollmentStatus === "rejected" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 flex flex-col gap-2">
                    {t("Application Status")}
                  </h4>
                  <p className="text-red-700">
                    Unfortunately, your enrollment application was not approved
                    at this time. Please contact our admissions team for more
                    information.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
