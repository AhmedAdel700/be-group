"use client";

import { courseData } from "@/app/(dummyData)/courseData";
import OtpVerification from "@/components/OtpVerification";
import PaymentStep from "@/components/PaymentStep";
import PersonalInfoForm from "@/components/PersonalInfoForm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  ChevronDown,
  ChevronUp,
  Star,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function CourseDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("diplomas");
  const courseId = Number.parseInt(params.id as string);
  const course = courseData[courseId as keyof typeof courseData];
  const [openSemesters, setOpenSemesters] = useState<number[]>([]);
  const [selectedDiploma, setSelectedDiploma] = useState<string>("");
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
  const [enrollmentStep, setEnrollmentStep] = useState(1);
  const [enrollmentData, setEnrollmentData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    nationalId: "",
    phoneNumber: "",
    email: "",
    password: "",
    paymentMethod: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });
  const [enrollmentFiles, setEnrollmentFiles] = useState<File[]>([]);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [enrollmentErrors, setEnrollmentErrors] = useState<
    Record<string, string>
  >({});
  const [isEnrollmentLoading, setIsEnrollmentLoading] = useState(false);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#001C71] mb-4">
            {t("Diploma Not Found")}
          </h1>
          <Link href="/">
            <Button>{t("Back to Home")}</Button>
          </Link>
        </div>
      </div>
    );
  }

  const toggleSemesterOpen = (semesterId: number) => {
    setOpenSemesters((prev) =>
      prev.includes(semesterId)
        ? prev.filter((id) => id !== semesterId)
        : [...prev, semesterId]
    );
  };

  const handleStep1Next = () => {
    const errors: Record<string, string> = {};

    if (!enrollmentData.firstName.trim())
      errors.firstName = t("First name is required");
    if (!enrollmentData.lastName.trim())
      errors.lastName = t("Last name is required");
    if (!enrollmentData.nationalId.trim())
      errors.nationalId = t("National ID is required");
    if (!enrollmentData.phoneNumber.trim())
      errors.phoneNumber = t("Phone number is required");
    if (!enrollmentData.email.trim()) errors.email = t("Email is required");
    if (!enrollmentData.password.trim())
      errors.password = t("Password is required");

    setEnrollmentErrors(errors);

    if (Object.keys(errors).length === 0) {
      setEnrollmentStep(2);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        const nextInput = document.querySelector(
          `input[type="text"]:nth-of-type(${index + 2})`
        ) as HTMLInputElement;
        nextInput?.focus();
      }
    }
  };

  const handleOtpVerification = () => {
    const otpValue = otp.join("");
    if (otpValue === "1234") {
      setEnrollmentStep(3);
    } else {
      alert("Invalid OTP. Please use 1234 for demo.");
    }
  };

  const handleEnrollmentSubmit = () => {
    setIsEnrollmentLoading(true);

    setTimeout(() => {
      setIsEnrollmentLoading(false);
      setShowEnrollmentModal(false);
      router.push(`/${locale}/enrollment-status?diploma=${selectedDiploma}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mt-12 mb-4">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center text-[#001C71] hover:text-[#0EC5C7] transition-colors duration-200 font-medium"
          >
            {locale === "en" ? (
              <ArrowLeft className="w-5 h-5 mr-2" />
            ) : (
              <ArrowRight className="w-5 h-5 me-2" />
            )}
            {t("Back to Home")}
          </Link>
        </div>

        <div className="grid lg:grid-cols-10 gap-8">
          {/* Main Content - 70% */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Diploma Header */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-64 object-cover"
                  width={400}
                  height={400}
                />
                <div className="p-6">
                  <h1 className="text-3xl font-bold text-[#001C71] mb-4">
                    {course.title}
                  </h1>
                  <p className="text-gray-600 mb-6">{course.description}</p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <Badge className="bg-[#001C71] text-white px-3 py-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      Start: {new Date(course.startDate).toLocaleDateString()}
                    </Badge>
                    <Badge className="bg-[#0EC5C7] text-white px-3 py-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      End: {new Date(course.endDate).toLocaleDateString()}
                    </Badge>
                    <Badge
                      className={`px-3 py-1 ${
                        course.available ? "bg-green-500" : "bg-red-500"
                      } text-white`}
                    >
                      {course.available ? t("Available") : t("Not Available")}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Tabbed Content */}
              <div className="bg-white rounded-xl shadow-lg">
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1 rounded-t-xl">
                    <TabsTrigger
                      value="description"
                      className="data-[state=active]:bg-[#001C71] data-[state=active]:text-white"
                    >
                      {t("Description")}
                    </TabsTrigger>
                    <TabsTrigger
                      value="schedule"
                      className="data-[state=active]:bg-[#001C71] data-[state=active]:text-white"
                    >
                      {t("Schedule")}
                    </TabsTrigger>
                    <TabsTrigger
                      value="reviews"
                      className="data-[state=active]:bg-[#001C71] data-[state=active]:text-white"
                    >
                      {t("Reviews")}
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="reviews" className="p-6">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="flex items-center">
                          <Star className="w-6 h-6 text-yellow-400 mr-1" />
                          <span className="text-2xl font-bold">
                            {course.rating}
                          </span>
                        </div>
                        <span className="text-gray-600">
                          ({course.totalReviews} reviews)
                        </span>
                      </div>

                      {course.reviews.map((review, index) => (
                        <div
                          key={index}
                          className="border-b border-gray-200 pb-4 last:border-b-0"
                        >
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-semibold text-[#001C71]">
                              {review.name}
                            </span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating
                                      ? "text-yellow-400 fill-current"
                                      : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600">{review.text}</p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="schedule" className="p-6">
                    <div className="space-y-4">
                      {course.semesters.map((semester) => (
                        <Collapsible
                          key={semester.id}
                          open={openSemesters.includes(semester.id)}
                          onOpenChange={() => toggleSemesterOpen(semester.id)}
                        >
                          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <span className="font-semibold text-[#001C71]">
                              {semester.name}
                            </span>
                            {openSemesters.includes(semester.id) ? (
                              <ChevronUp className="w-5 h-5" />
                            ) : (
                              <ChevronDown className="w-5 h-5" />
                            )}
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-2">
                            <div className="space-y-3 pl-4">
                              {semester.modules.map((module, moduleIndex) => (
                                <div
                                  key={moduleIndex}
                                  className="flex items-center justify-between p-3 bg-white rounded border"
                                >
                                  <div>
                                    <h4 className="font-medium text-gray-900">
                                      {module.name}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                      {new Date(
                                        module.startDate
                                      ).toLocaleDateString()}{" "}
                                      -{" "}
                                      {new Date(
                                        module.endDate
                                      ).toLocaleDateString()}
                                    </p>
                                    <p className="text-sm text-[#001C71]">
                                      {t("Instructor")}: {module.instructor}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="description" className="p-6">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-bold text-[#001C71] mb-4">
                          {t("What You will Learn")}
                        </h3>
                        <ul className="space-y-2">
                          {course.whatYouLearn.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-[#001C71] mb-4">
                          {t("What Potential Benefits Can You Unlock After This Bootcamp")}
                        </h3>
                        <ul className="space-y-2">
                          {course.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-[#0EC5C7] mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-[#001C71] mb-4">
                          {t("Who Should Take This Bootcamp?")}
                        </h3>
                        <ul className="space-y-2">
                          {course.whoShouldTake.map((person, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="w-5 h-5 text-[#5F289E] mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{person}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - 30% */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sticky top-8"
            >
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#001C71] mb-4">
                    {t("Choose Your Diploma")}
                  </h3>

                  <div className="space-y-4 mb-6">
                    {[
                      {
                        id: "intermediate",
                        name: "Intermediate Diploma",
                        semesters: 2,
                        price: 598,
                        description:
                          "Perfect for beginners looking to get started",
                      },
                      {
                        id: "associate",
                        name: "Associate Diploma",
                        semesters: 4,
                        price: 1196,
                        description:
                          "Comprehensive program for career advancement",
                      },
                    ].map((diploma) => (
                      <div
                        key={diploma.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                          selectedDiploma === diploma.id
                            ? "border-[#001C71] bg-[#001C71]/5"
                            : "border-gray-200 hover:border-[#0EC5C7]"
                        }`}
                        onClick={() => setSelectedDiploma(diploma.id)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-[#001C71]">
                            {diploma.name}
                          </h4>
                          {selectedDiploma === diploma.id && (
                            <Check className="w-5 h-5 text-[#001C71]" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {diploma.description}
                        </p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">
                            {diploma.semesters} semesters
                          </span>
                          <span className="font-bold text-[#001C71]">
                            ${diploma.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => setShowEnrollmentModal(true)}
                    disabled={!selectedDiploma}
                    className="w-full bg-[#001C71] hover:bg-[#001C71]/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {t("Enroll Now")}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      <Dialog open={showEnrollmentModal} onOpenChange={setShowEnrollmentModal}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-hidden">
          <div className="max-h-[80vh] overflow-y-auto p-2 hide-scrollbar">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-[#001C71]">
                {t("Enroll in")}{" "}
                {selectedDiploma === "intermediate"
                  ? t("Intermediate")
                  : t("Associate")}{" "}
                {t("Diploma")}
              </DialogTitle>
              <div className="flex items-center space-x-2 mt-2">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        step <= enrollmentStep
                          ? "bg-[#001C71] text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {step}
                    </div>
                    {step < 3 && (
                      <div
                        className={`w-8 h-0.5 ${
                          step < enrollmentStep ? "bg-[#001C71]" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </DialogHeader>

            {/* Step 1: Personal Information */}
            {enrollmentStep === 1 && (
              <PersonalInfoForm
                enrollmentData={enrollmentData}
                setEnrollmentData={setEnrollmentData}
                enrollmentErrors={enrollmentErrors}
                enrollmentFiles={enrollmentFiles}
                setEnrollmentFiles={setEnrollmentFiles}
                handleStep1Next={handleStep1Next}
              />
            )}

            {/* Step 2: OTP Verification */}
            {enrollmentStep === 2 && (
              <OtpVerification
                otp={otp}
                handleOtpChange={handleOtpChange}
                handleOtpVerification={handleOtpVerification}
                setEnrollmentStep={setEnrollmentStep}
              />
            )}

            {/* Step 3: Payment Method */}
            {enrollmentStep === 3 && (
              <PaymentStep
                enrollmentData={enrollmentData}
                setEnrollmentData={setEnrollmentData}
                isEnrollmentLoading={isEnrollmentLoading}
                setEnrollmentStep={setEnrollmentStep}
                handleEnrollmentSubmit={handleEnrollmentSubmit}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
