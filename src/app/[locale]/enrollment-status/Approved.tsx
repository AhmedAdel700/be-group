"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import imagePlaceholder from "@/app/assets/image-placeholder.svg";
import { useLocale, useTranslations } from "next-intl";
import ApprovedIcon from "@/app/assets/Approved.svg";
import { EnrollmentResponse } from "@/types/enrollmentApiTypes";

export default function Approved({ enrollmentData }: { enrollmentData: EnrollmentResponse }) {
  const locale = useLocale();
  const t = useTranslations("enroll");

  const previousApplications = [
    {
      id: 1,
      status: t("Accepted"),
      date: "2024-01-15",
    },
  ];

  return (
    <div className="grid grid-col-1 lg:grid-cols-3 container mx-auto p-6 lg:p-8 gap-6">
      <div className="col-span-2 w-full h-fit flex flex-col gap-6">
        <div className="w-full h-fit border border-[#FEDF89] bg-[#F3FDF7] rounded-[8px] shadow-none p-4 flex items-center gap-3 relative">
          <Image
            src={ApprovedIcon}
            alt="Accepted Icon"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <h2 className="text-[#00A468] font-bold text-xl">
              {t("Accepted")}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-black-tint-90 font-normal">
              {t("Congratulations! You have been accepted in")}{" "}
              <span className="text-xs sm:text-sm md:text-base text-black-tint-90 font-bold">
                {t("Innovation and Entrepreneurship Diploma")}
              </span>
            </p>
          </div>
          <div
            className={`absolute bg-[#00A468] w-2 h-full ${
              locale === "en" ? "left-0 " : "right-0"
            } rounded-s-[8px]`}
          ></div>
        </div>

        <div className="border border-black-tint-10 rounded-[8px] shadow-none h-fit flex flex-col">
          <div className="border-b border-black-tint-10 py-4 px-6">
            <h4 className="font-bold text-lg">{t("Personal Info")}</h4>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2 py-4 px-6">
            <div>
              <h4 className="font-medium text-base text-black-tint-70">
                {t("Full Name")}
              </h4>
              <h5 className="text-black-tint-90 font-bold text-base">
                {locale === "en"
                  ? enrollmentData.data.fullName
                  : enrollmentData.data.fullNameAr}
              </h5>
            </div>
            <div>
              <h4 className="font-medium text-base text-black-tint-70">
                {t("National ID")}
              </h4>
              <h5 className="text-black-tint-90 font-bold text-base">
                {enrollmentData.data.nationalNumber}
              </h5>
            </div>
            <div>
              <h4 className="font-medium text-base text-black-tint-70">
                {t("Phone Number")}
              </h4>
              <h5 className="text-black-tint-90 font-bold text-base">
                {enrollmentData.data.internationalNumber}
              </h5>
            </div>
            <div>
              <h4 className="font-medium text-base text-black-tint-70">
                {t("Email")}
              </h4>
              <h5
                className="text-black-tint-90 font-bold text-base break-words whitespace-pre-line"
                style={{ wordBreak: "break-all" }}
              >
                {enrollmentData.data.email}
              </h5>
            </div>
          </div>
        </div>

        <div className="border border-black-tint-10 rounded-[8px] shadow-none h-fit flex flex-col">
          <div className="border-b border-black-tint-10 py-4 px-6">
            <h4 className="font-bold text-lg">{t("Documents")}</h4>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-end gap-6 py-4 px-6">
            <div>
              <h4 className="font-medium text-base text-black-tint-70 mb-2">
                {t("High School Certificate")}
              </h4>
              <Image
                src={
                  enrollmentData?.data?.student?.highSchoolCertificate ||
                  imagePlaceholder
                }
                alt="High School Certificate"
                className="w-full h-32 border border-[#DCDCDC] rounded-[8px] object-cover"
                width={225}
                height={127}
              />
            </div>
            <div>
              <h4 className="font-medium text-base text-black-tint-70 mb-2">
                {t("Student Identity")}
              </h4>
              <Image
                src={
                  enrollmentData.data.student.studentIdentity ||
                  imagePlaceholder
                }
                alt="Student Identity"
                className="w-full h-32 border border-[#DCDCDC] rounded-[8px] object-cover"
                width={225}
                height={127}
              />
            </div>
            <div>
              <h4 className="font-medium text-base text-black-tint-70 mb-2">
                {t("Student Picture")}
              </h4>
              <Image
                src={
                  enrollmentData.data.student.studentPicture || imagePlaceholder
                }
                alt="Student Picture"
                className="w-full h-32 border border-[#DCDCDC] rounded-[8px] object-cover"
                width={225}
                height={127}
              />
            </div>
            <div>
              <h4 className="font-medium text-base text-black-tint-70 mb-2">
                {t("Employer Approval")}
              </h4>
              <Image
                src={
                  enrollmentData.data.student.employerApproval ||
                  imagePlaceholder
                }
                alt="Employer Approval"
                className="w-full h-32 border border-[#DCDCDC] rounded-[8px] object-cover"
                width={225}
                height={127}
              />
            </div>
          </div>
        </div>

        <div className="border border-black-tint-10 rounded-[8px] shadow-none h-fit flex flex-col">
          <div className="border-b border-black-tint-10 py-4 px-6">
            <h4 className="font-bold text-lg">{t("Course preferences")}</h4>
          </div>

          <div className="max-w-[80vw] sm:max-w-full overflow-hidden">
            <div className="overflow-x-auto w-full thin-scroll">
              <div className="min-w-[600px] flex flex-col gap-2">
                <div className="grid grid-cols-7 bg-black-tint-3 py-4 px-6">
                  <div className="col-span-1 text-black-tint-70 text-base font-medium">
                    #
                  </div>
                  <div className="col-span-3 text-black-tint-70 text-base font-medium">
                    {t("Diploma Name")}
                  </div>
                  <div className="col-span-3 text-black-tint-70 text-base font-medium">
                    {t("Status")}
                  </div>
                </div>
                {enrollmentData.data.student.studentDiploma.initialRegistrationDiplomaId.map(
                  (diploma, index) => (
                    <div key={diploma._id} className="grid grid-cols-7 px-6">
                      <div className="text-black-tint-90 font-medium text-lg col-span-1 h-11">
                        {index + 1}
                      </div>
                      <div className="text-black-tint-90 font-medium text-lg col-span-3 h-11">
                        {locale === "ar" ? diploma.titleAr : diploma.title}
                      </div>
                      <div className="text-black-tint-90 font-medium text-lg col-span-3 h-11">
                        {
                          enrollmentData.data.student.studentDiploma
                            .paymentStatus
                        }
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card className="col-span-2 lg:col-span-1 shadow-none h-fit border border-black-tint-10 rounded-[8px] w-full">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            {t("Previous Applications", {
              default: "Previous Applications",
            })}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-3">
          {previousApplications.map((application) => (
            <div
              key={application.id}
              className="flex items-center justify-between py-4 px-5 border border-main-primary rounded-lg hover:bg-gray-50 transition-colors h-20"
            >
              <div className="flex-1 min-w-0 flex gap-2 items-center">
                <div className="bg-[#F0FDF4] w-12 h-12 flex justify-center items-center rounded-full">
                  <CheckCircle className="text-[#00A468]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    {t("Enrollment Request")}
                  </h4>
                  <div className="flex items-center text-sm font-medium gap-2">
                    <p className="text-xs text-muted-foreground">
                      {application.status}
                    </p>
                    <span className="-mt-1">.</span>
                    <p className="text-xs text-muted-foreground">
                      {new Date(application.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
