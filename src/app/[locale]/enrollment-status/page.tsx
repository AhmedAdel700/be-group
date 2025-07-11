"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle, Clock, XCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function EnrollmentStatusPage() {
  const searchParams = useSearchParams();
  const diploma = searchParams.get("diploma");
  const [language] = useState("en");

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
          text: language === "en" ? "Pending Review" : "قيد المراجعة",
        };
      case "approved":
        return {
          icon: <CheckCircle className="w-8 h-8 text-green-500" />,
          color: "bg-green-100 text-green-800 border-green-200",
          text: language === "en" ? "Approved" : "مقبول",
        };
      case "rejected":
        return {
          icon: <XCircle className="w-8 h-8 text-red-500" />,
          color: "bg-red-100 text-red-800 border-red-200",
          text: language === "en" ? "Rejected" : "مرفوض",
        };
      default:
        return {
          icon: <Clock className="w-8 h-8 text-gray-500" />,
          color: "bg-gray-100 text-gray-800 border-gray-200",
          text: "Unknown",
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
          className="max-w-4xl mx-auto"
        >
          {/* Status Card */}
          <Card className="shadow-lg mb-8">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                {statusInfo.icon}
              </div>
              <CardTitle className="text-2xl font-bold text-[#001C71] mb-2">
                {language === "en" ? "Enrollment Status" : "حالة التسجيل"}
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
                {language === "en" ? "Diploma Details" : "تفاصيل الدبلوم"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#001C71] mb-2">
                  {language === "en" ? "Program Name" : "اسم البرنامج"}
                </h3>
                <p className="text-gray-700">{currentDiploma.name}</p>
              </div>

              <div>
                <h3 className="font-semibold text-[#001C71] mb-2">
                  {language === "en" ? "Description" : "الوصف"}
                </h3>
                <p className="text-gray-700">{currentDiploma.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[#001C71] mb-2">
                    {language === "en" ? "Duration" : "المدة"}
                  </h3>
                  <p className="text-gray-700">{currentDiploma.duration}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-[#001C71] mb-2">
                    {language === "en" ? "Total Price" : "السعر الإجمالي"}
                  </h3>
                  <p className="text-gray-700 font-bold">
                    {currentDiploma.price}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-[#001C71] mb-3">
                  {language === "en"
                    ? "Included Semesters"
                    : "الفصول الدراسية المشمولة"}
                </h3>
                <div className="space-y-2">
                  {currentDiploma.semesters.map((semester, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="w-6 h-6 bg-[#001C71] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{semester}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status-specific messages */}
              {enrollmentStatus === "pending" && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">
                    {language === "en" ? "What's Next?" : "ما التالي؟"}
                  </h4>
                  <p className="text-yellow-700">
                    {language === "en"
                      ? "Your enrollment is currently under review. We'll notify you via email once a decision has been made. This process typically takes 2-3 business days."
                      : "طلب التسجيل الخاص بك قيد المراجعة حالياً. سنقوم بإشعارك عبر البريد الإلكتروني بمجرد اتخاذ القرار. تستغرق هذه العملية عادة 2-3 أيام عمل."}
                  </p>
                </div>
              )}

              {enrollmentStatus === "approved" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">
                    {language === "en" ? "Congratulations!" : "تهانينا!"}
                  </h4>
                  <p className="text-green-700">
                    {language === "en"
                      ? "Your enrollment has been approved! You will receive access credentials and course materials via email within 24 hours."
                      : "تم قبول طلب التسجيل الخاص بك! ستتلقى بيانات الوصول والمواد الدراسية عبر البريد الإلكتروني خلال 24 ساعة."}
                  </p>
                </div>
              )}

              {enrollmentStatus === "rejected" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">
                    {language === "en" ? "Application Status" : "حالة الطلب"}
                  </h4>
                  <p className="text-red-700">
                    {language === "en"
                      ? "Unfortunately, your enrollment application was not approved at this time. Please contact our admissions team for more information."
                      : "للأسف، لم يتم قبول طلب التسجيل الخاص بك في هذا الوقت. يرجى الاتصال بفريق القبول للحصول على مزيد من المعلومات."}
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
