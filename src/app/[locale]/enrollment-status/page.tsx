"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle,
  Clock,
  XCircle,
  User,
  Mail,
  Phone,
  BadgeIcon as IdCard,
  GraduationCap,
  Calendar,
  DollarSign,
  FileText,
} from "lucide-react";
import Image from "next/image";
import imagePlaceholder from "@/app/assets/image-placeholder.svg";
import { useLocale, useTranslations } from "next-intl";
import PaymentStep from "@/components/PaymentStep";

type EnrollmentStatus = "pending" | "approved" | "rejected";

interface StudentInfo {
  name: string;
  email: string;
  phone: string;
  nationalId: string;
  profileImage: string;
  diplomaImage: string;
  idCardImage: string;
}

interface DiplomaApplication {
  id: string;
  name: string;
  status: EnrollmentStatus;
  rejectionReason?: string;
  appliedDate: string;
}

interface DiplomaDetails {
  name: string;
  description: string;
  duration: string;
  price: string;
  semesters: string[];
}

export default function EnrollmentStatusPage() {
  const locale = useLocale();
  const t = useTranslations("enroll");
  const [activeTab, setActiveTab] = useState("diploma");
  const [enrollmentData, setEnrollmentData] = useState({
    paymentMethod: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });
  const [isEnrollmentLoading, setIsEnrollmentLoading] = useState(false);
  const handleEnrollmentSubmit = () => {
    setIsEnrollmentLoading(true);
    setTimeout(() => {
      setIsEnrollmentLoading(false);
      // Optionally show a success message or update status
    }, 2000);
  };

  // Mock data - in real app this would come from API
  const [currentStatus] = useState<EnrollmentStatus>("pending");

  const studentInfo: StudentInfo = {
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    nationalId: "123456789",
    profileImage: "/placeholder.svg?height=100&width=100",
    diplomaImage: imagePlaceholder,
    idCardImage: imagePlaceholder,
  };

const currentDiploma: DiplomaDetails = {
    name: "Full Stack Web Development Diploma",
    description:
      "A comprehensive program covering frontend and backend development with modern technologies and frameworks.",
    duration: "12 months",
    price: "$1,299",
    semesters: [
      "Semester 1: Frontend Foundations (HTML, CSS, JavaScript, React)",
      "Semester 2: Advanced Frontend (React Patterns, State Management, Testing)",
      "Semester 3: Backend Development (Node.js, Express, Database Design)",
      "Semester 4: Full Stack Integration (Authentication, Deployment, DevOps)",
    ],
  };

  const otherApplications: DiplomaApplication[] = [
    {
      id: "1",
      name: t("Data Science Diploma", { default: "Data Science Diploma" }),
      status: "rejected",
      rejectionReason: t("Insufficient mathematics background", { default: "Insufficient mathematics background" }),
      appliedDate: "2024-01-15",
    },
    {
      id: "2",
      name: t("Mobile App Development", { default: "Mobile App Development" }),
      status: "pending",
      appliedDate: "2024-02-01",
    },
  ];

  const getStatusInfo = (status: EnrollmentStatus) => {
    switch (status) {
      case "pending":
        return {
          icon: <Clock className="w-6 h-6" />,
          color: "text-yellow-700 border-yellow-200",
          badgeColor: "bg-yellow-100 text-yellow-800",
          text: t("Pending Review"),
        };
      case "approved":
        return {
          icon: <CheckCircle className="w-6 h-6" />,
          color: "text-green-700 border-green-200",
          badgeColor: "bg-green-100 text-green-800",
          text: t("Approved"),
        };
      case "rejected":
        return {
          icon: <XCircle className="w-6 h-6" />,
          color: "text-red-700 border-red-200",
          badgeColor: "bg-red-100 text-red-800",
          text: t("Rejected"),
        };
    }
  };

  const currentStatusInfo = getStatusInfo(currentStatus);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div
          className={`grid grid-cols-1 ${
            otherApplications.length > 0 ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }  gap-6`}
        >
          {/* Left Sidebar - Previous Applications */}
          {otherApplications.length > 0 && (
            <div className="lg:col-span-1 self-start">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    {t("Previous Applications", {
                      default: "Previous Applications",
                    })}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {otherApplications?.map((application) => {
                    const statusInfo = getStatusInfo(application.status);
                    return (
                      <div
                        key={application.id}
                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate">
                            {application.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {new Date(
                              application.appliedDate
                            ).toLocaleDateString()}
                          </p>
                        </div>
                        <div
                          className={`p-2 rounded-full ${
                            statusInfo.color
                          } bg-transparent flex-shrink-0 ${
                            locale === "ar" ? "mr-2" : "ml-2"
                          }`}
                        >
                          {statusInfo.icon}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Status Section */}
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <div
                  className={`mx-auto p-4 rounded-full w-fit ${
                    currentStatusInfo.color
                  } ${
                    currentStatus === "pending"
                      ? "bg-yellow-50"
                      : currentStatus === "rejected"
                      ? "bg-red-50"
                      : "bg-green-50"
                  }`}
                >
                  {currentStatusInfo.icon}
                </div>
                <CardTitle className="text-2xl font-bold">
                  {t("Enrollment Status")}
                </CardTitle>
                <Badge
                  className={`${currentStatusInfo.badgeColor} text-lg px-4 py-2`}
                  variant="secondary"
                >
                  {currentStatusInfo.text}
                </Badge>
              </CardHeader>
            </Card>

            {/* Tabs Section */}
            <Card>
              <CardHeader>
                <Tabs
                  value={activeTab}
                  onValueChange={setActiveTab}
                  className={`w-full ${locale === "ar" ? "items-end" : "items-start"}`}
                >
                  <TabsList
                    className={`flex w-full ${locale === "ar" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <TabsTrigger value="diploma" className="flex-1">
                      {t("Diploma Details")}
                    </TabsTrigger>
                    <TabsTrigger value="personal" className="flex-1">
                      {t("Personal Information")}
                    </TabsTrigger>
                  </TabsList>

                  {locale === "ar" ? (
                    <>
                      <TabsContent
                        value="diploma"
                        className={`mt-6 ${locale === "ar" ? "text-right" : "text-left"}`}
                      >
                        <div className="space-y-6">
                          <div>
                            <h3
                              className={`text-xl font-semibold mb-2 ${
                                locale === "ar" && "text-end"
                              }`}
                            >
                              {currentDiploma.name}
                            </h3>
                            <p
                              className={`text-muted-foreground mb-2 ${
                                locale === "ar" && "text-end"
                              }`}
                            >
                              {currentDiploma.description}
                            </p>
                          </div>

                          <div
                            className={`grid md:grid-cols-2 gap-6 ${
                              locale === "ar" ? "text-right" : "text-left"
                            }`}
                          >
                            <div
                              className={`flex items-center gap-3 ${
                                locale === "ar" && "flex-row-reverse"
                              } `}
                            >
                              <Calendar className="w-5 h-5 text-blue-600" />
                              <div>
                                <p className="font-medium">{t("Duration")}</p>
                                <p className="text-muted-foreground">
                                  {currentDiploma.duration}
                                </p>
                              </div>
                            </div>
                            <div
                              className={`flex items-center gap-3 ${
                                locale === "ar" && "flex-row-reverse"
                              }`}
                            >
                              <DollarSign className="w-5 h-5 text-green-600" />
                              <div>
                                <p className="font-medium">{t("Total Price")}</p>
                                <p className="text-muted-foreground font-semibold">
                                  {currentDiploma.price}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className={`font-semibold mb-4 ${locale === "ar" ? "text-right" : "text-left"}`}>
                              {t("Included Semesters")}
                            </h4>
                            <div className="space-y-3">
                              {currentDiploma.semesters.map((semester, index) => (
                                <div
                                  key={index}
                                  className={`flex gap-4 p-4 bg-gray-50 rounded-lg ${locale === "ar" ? "flex-row-reverse" : "flex-row"}`}
                                >
                                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                    {index + 1}
                                  </div>
                                  <p className={`text-sm ${locale === "ar" ? "text-right" : "text-left"}`}>{semester}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Status-specific messages */}
                          {currentStatus === "pending" && (
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                              <h4 className="font-semibold text-yellow-800 mb-2">
                                {t("What is Next")}
                              </h4>
                              <p className="text-yellow-700 text-sm">
                                {t(
                                  "Your enrollment is currently under review We will notify you via email once a decision has been made This process typically takes 2-3 business days"
                                )}
                              </p>
                            </div>
                          )}

                          {currentStatus === "approved" && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                              <h4 className="font-semibold text-green-800 mb-2">
                                {t("Congratulations")}
                              </h4>
                              <p className="text-green-700 text-sm">
                                {t(
                                  "Your enrollment has been approved! You will receive access credentials and course materials via email within 24 hours",
                                  {
                                    default:
                                      "Your enrollment has been approved! You will receive access credentials and course materials via email within 24 hours",
                                  }
                                )}
                              </p>
                            </div>
                          )}

                          {currentStatus === "rejected" && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                              <h4 className="font-semibold text-red-800 mb-2">
                                {t("Application Status")}
                              </h4>
                              <p className="text-red-700 text-sm">
                                {t(
                                  "Unfortunately, your enrollment application was not approved at this time. Please contact our admissions team for more information",
                                  {
                                    default:
                                      "Unfortunately, your enrollment application was not approved at this time. Please contact our admissions team for more information",
                                  }
                                )}
                              </p>
                            </div>
                          )}
                        </div>
                      </TabsContent>
                      <TabsContent
                        value="personal"
                        className={`mt-6 ${locale === "ar" ? "text-right" : "text-left"}`}
                      >
                        <div className="space-y-6">
                          <div
                            className={`flex ${
                              locale === "ar"
                                ? "flex-col-reverse sm:flex-row-reverse"
                                : "flex-col sm:flex-row"
                            } gap-6`}
                          >
                            <div className="flex-shrink-0">
                              <Avatar className="w-24 h-24">
                                <AvatarImage
                                  src={
                                    studentInfo.profileImage || "/placeholder.svg"
                                  }
                                  alt="Profile"
                                />
                                <AvatarFallback>
                                  <User className="w-12 h-12" />
                                </AvatarFallback>
                              </Avatar>
                            </div>
                            <div className="flex-1 space-y-4">
                              <div className="grid sm:grid-cols-2 gap-4">
                                <div className={`flex items-center gap-3 ${locale === "ar" ? "flex-row-reverse" : "flex-row"}`}>
                                  <User className="w-5 h-5 text-blue-600" />
                                  <div>
                                    <p className="font-medium">{t("Full name")}</p>
                                    <p className="text-muted-foreground">
                                      {studentInfo.name}
                                    </p>
                                  </div>
                                </div>
                                <div className={`flex items-center gap-3 ${locale === "ar" ? "flex-row-reverse" : "flex-row"}`}>
                                  <Mail className="w-5 h-5 text-blue-600" />
                                  <div>
                                    <p className="font-medium">{t("Email")}</p>
                                    <p className="text-muted-foreground">
                                      {studentInfo.email}
                                    </p>
                                  </div>
                                </div>
                                <div className={`flex items-center gap-3 ${locale === "ar" ? "flex-row-reverse" : "flex-row"}`}>
                                  <Phone className="w-5 h-5 text-blue-600" />
                                  <div>
                                    <p className="font-medium">
                                      {t("Phone Number")}
                                    </p>
                                    <p className="text-muted-foreground">
                                      {studentInfo.phone}
                                    </p>
                                  </div>
                                </div>
                                <div className={`flex items-center gap-3 ${locale === "ar" ? "flex-row-reverse" : "flex-row"}`}>
                                  <IdCard className="w-5 h-5 text-blue-600" />
                                  <div>
                                    <p className="font-medium">
                                      {t("National ID")}
                                    </p>
                                    <p className="text-muted-foreground">
                                      {studentInfo.nationalId}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <Separator />

                          <div>
                            <h4 className={`font-semibold mb-4 ${locale === "ar" ? "text-right" : "text-left"}`}>
                              {t("Documents")}
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <p className={`text-sm font-medium text-muted-foreground flex items-center gap-2 ${locale === "ar" ? "justify-end" : "justify-start"}`}>
                                  <FileText className="w-4 h-4 text-main-primary" />
                                  {t("Upload high school diploma")}
                                </p>
                                <div className="border rounded-lg p-3 bg-gray-50">
                                  <Image
                                    src={
                                      studentInfo.diplomaImage || imagePlaceholder
                                    }
                                    alt="High School Diploma"
                                    className="w-full h-32 object-fill rounded border"
                                    width={200}
                                    height={200}
                                  />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <p className={`text-sm font-medium text-muted-foreground flex items-center gap-2 ${locale === "ar" ? "justify-end" : "justify-start"}`}>
                                  <FileText className="w-4 h-4 text-main-primary" />
                                  {t("Upload ID photo")}
                                </p>
                                <div className="border rounded-lg p-3 bg-gray-50">
                                  <Image
                                    src={
                                      studentInfo.idCardImage || imagePlaceholder
                                    }
                                    alt="ID Card"
                                    className="w-full h-32 object-fill rounded border"
                                    width={200}
                                    height={200}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </>
                  ) : (
                    <>
                      <TabsContent
                        value="personal"
                        className={`mt-6 ${locale === "ar" ? "text-right" : "text-left"}`}
                      >
                        <div className="space-y-6">
                          <div
                            className={`flex ${
                              locale === "ar"
                                ? "flex-col-reverse sm:flex-row-reverse"
                                : "flex-col sm:flex-row"
                            } gap-6`}
                          >
                            <div className="flex-shrink-0">
                              <Avatar className="w-24 h-24">
                                <AvatarImage
                                  src={
                                    studentInfo.profileImage || "/placeholder.svg"
                                  }
                                  alt="Profile"
                                />
                                <AvatarFallback>
                                  <User className="w-12 h-12" />
                                </AvatarFallback>
                              </Avatar>
                            </div>
                            <div className="flex-1 space-y-4">
                              <div className="grid sm:grid-cols-2 gap-4">
                                <div className={`flex items-center gap-3 ${locale === "ar" ? "flex-row-reverse" : "flex-row"}`}>
                                  <User className="w-5 h-5 text-blue-600" />
                                  <div>
                                    <p className="font-medium">{t("Full name")}</p>
                                    <p className="text-muted-foreground">
                                      {studentInfo.name}
                                    </p>
                                  </div>
                                </div>
                                <div className={`flex items-center gap-3 ${locale === "ar" ? "flex-row-reverse" : "flex-row"}`}>
                                  <Mail className="w-5 h-5 text-blue-600" />
                                  <div>
                                    <p className="font-medium">{t("Email")}</p>
                                    <p className="text-muted-foreground">
                                      {studentInfo.email}
                                    </p>
                                  </div>
                                </div>
                                <div className={`flex items-center gap-3 ${locale === "ar" ? "flex-row-reverse" : "flex-row"}`}>
                                  <Phone className="w-5 h-5 text-blue-600" />
                                  <div>
                                    <p className="font-medium">
                                      {t("Phone Number")}
                                    </p>
                                    <p className="text-muted-foreground">
                                      {studentInfo.phone}
                                    </p>
                                  </div>
                                </div>
                                <div className={`flex items-center gap-3 ${locale === "ar" ? "flex-row-reverse" : "flex-row"}`}>
                                  <IdCard className="w-5 h-5 text-blue-600" />
                                  <div>
                                    <p className="font-medium">
                                      {t("National ID")}
                                    </p>
                                    <p className="text-muted-foreground">
                                      {studentInfo.nationalId}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <Separator />

                          <div>
                            <h4 className={`font-semibold mb-4 ${locale === "ar" ? "text-right" : "text-left"}`}>
                              {t("Documents")}
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <p className={`text-sm font-medium text-muted-foreground flex items-center gap-2 ${locale === "ar" ? "justify-end" : "justify-start"}`}>
                                  <FileText className="w-4 h-4 text-main-primary" />
                                  {t("Upload high school diploma")}
                                </p>
                                <div className="border rounded-lg p-3 bg-gray-50">
                                  <Image
                                    src={
                                      studentInfo.diplomaImage || imagePlaceholder
                                    }
                                    alt="High School Diploma"
                                    className="w-full h-32 object-fill rounded border"
                                    width={200}
                                    height={200}
                                  />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <p className={`text-sm font-medium text-muted-foreground flex items-center gap-2 ${locale === "ar" ? "justify-end" : "justify-start"}`}>
                                  <FileText className="w-4 h-4 text-main-primary" />
                                  {t("Upload ID photo")}
                                </p>
                                <div className="border rounded-lg p-3 bg-gray-50">
                                  <Image
                                    src={
                                      studentInfo.idCardImage || imagePlaceholder
                                    }
                                    alt="ID Card"
                                    className="w-full h-32 object-fill rounded border"
                                    width={200}
                                    height={200}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent
                        value="diploma"
                        className={`mt-6 ${locale === "ar" ? "text-right" : "text-left"}`}
                      >
                        <div className="space-y-6">
                          <div>
                            <h3
                              className={`text-xl font-semibold mb-2 ${
                                locale === "ar" && "text-end"
                              }`}
                            >
                              {currentDiploma.name}
                            </h3>
                            <p
                              className={`text-muted-foreground mb-2 ${
                                locale === "ar" && "text-end"
                              }`}
                            >
                              {currentDiploma.description}
                            </p>
                          </div>

                          <div
                            className={`grid md:grid-cols-2 gap-6 ${
                              locale === "ar" ? "text-right" : "text-left"
                            }`}
                          >
                            <div
                              className={`flex items-center gap-3 ${
                                locale === "ar" && "flex-row-reverse"
                              } `}
                            >
                              <Calendar className="w-5 h-5 text-blue-600" />
                              <div>
                                <p className="font-medium">{t("Duration")}</p>
                                <p className="text-muted-foreground">
                                  {currentDiploma.duration}
                                </p>
                              </div>
                            </div>
                            <div
                              className={`flex items-center gap-3 ${
                                locale === "ar" && "flex-row-reverse"
                              }`}
                            >
                              <DollarSign className="w-5 h-5 text-green-600" />
                              <div>
                                <p className="font-medium">{t("Total Price")}</p>
                                <p className="text-muted-foreground font-semibold">
                                  {currentDiploma.price}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-4">
                              {t("Included Semesters")}
                            </h4>
                            <div className="space-y-3">
                              {currentDiploma.semesters.map((semester, index) => (
                                <div
                                  key={index}
                                  className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                                >
                                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                    {index + 1}
                                  </div>
                                  <p className="text-sm">{semester}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Status-specific messages */}
                          {currentStatus === "pending" && (
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                              <h4 className="font-semibold text-yellow-800 mb-2">
                                {t("What is Next")}
                              </h4>
                              <p className="text-yellow-700 text-sm">
                                {t(
                                  "Your enrollment is currently under review We will notify you via email once a decision has been made This process typically takes 2-3 business days"
                                )}
                              </p>
                            </div>
                          )}

                          {currentStatus === "approved" && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                              <h4 className="font-semibold text-green-800 mb-2">
                                {t("Congratulations")}
                              </h4>
                              <p className="text-green-700 text-sm">
                                {t(
                                  "Your enrollment has been approved! You will receive access credentials and course materials via email within 24 hours.",
                                  {
                                    default:
                                      "Your enrollment has been approved! You will receive access credentials and course materials via email within 24 hours.",
                                  }
                                )}
                              </p>
                            </div>
                          )}

                          {currentStatus === "rejected" && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                              <h4 className="font-semibold text-red-800 mb-2">
                                {t("Application Status")}
                              </h4>
                              <p className="text-red-700 text-sm">
                                {t(
                                  "Unfortunately, your enrollment application was not approved at this time Please contact our admissions team for more information",
                                  {
                                    default:
                                      "Unfortunately, your enrollment application was not approved at this time Please contact our admissions team for more information",
                                  }
                                )}
                              </p>
                            </div>
                          )}
                        </div>
                      </TabsContent>
                    </>
                  )}
                </Tabs>
              </CardHeader>
            </Card>

            {/* PaymentStep Card (conditionally rendered, now at bottom) */}
            {currentStatus === "approved" && (
              <Card className="shadow-lg mt-6">
                <CardHeader>
                  <CardTitle>{t("Complete Your Payment")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <PaymentStep
                    enrollmentData={enrollmentData}
                    setEnrollmentData={setEnrollmentData}
                    isEnrollmentLoading={isEnrollmentLoading}
                    setEnrollmentStep={() => {}}
                    handleEnrollmentSubmit={handleEnrollmentSubmit}
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
