"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle } from "lucide-react";
import Image from "next/image";
import imagePlaceholder from "@/app/assets/image-placeholder.svg";
import { useLocale, useTranslations } from "next-intl";
import RejectedIcon from "@/app/assets/Rejected.svg";
import { EnrollmentResponse } from "@/types/enrollmentApiTypes";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/navigations";

export default function Rejected({
  enrollmentData,
}: {
  enrollmentData: EnrollmentResponse;
}) {
  const locale = useLocale();
  const t = useTranslations("enroll");
  const router = useRouter();

  const previousApplications = [
    {
      id: 1,
      status: t("Rejected"),
      date: "2024-01-15",
    },
  ];

  return (
    <div className="grid grid-col-1 lg:grid-cols-3 container mx-auto p-6 lg:p-8 gap-6">
      <div className="col-span-2 w-full h-fit flex flex-col gap-6">
        <div className="w-full h-fit border border-[#FFE8E8] bg-[#FFF4F4] rounded-[8px] shadow-none p-4 flex items-center gap-3 relative">
          <Image
            src={RejectedIcon}
            alt="Rejected Icon"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <h2 className="text-[#C50030] font-bold text-xl">
              {t("Rejected")}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-black-tint-90 font-normal">
              {t(
                "We’re sorry, your application was not accepted You are welcome to apply again"
              )}
            </p>
          </div>
          <div
            className={`absolute bg-[#C50030] w-2 h-full ${
              locale === "en" ? "left-0 " : "right-0"
            } rounded-s-[8px]`}
          ></div>
        </div>

        <div className="border border-black-tint-10 rounded-[8px] shadow-none py-4 px-5 h-fit bg-p-tints-tint-3 flex flex-col gap-4">
          <p className="text-black-tint-60 font-normal text-base">
            {t("We’re sorry, your application was not accepted")}{" "}
            <span className="font-bold text-base text-black-tint-90">
              {t(
                "Your academic record does not meet the minimum entry requirements"
              )}{" "}
              <span className="text-black-tint-60 font-normal text-base">
                {t(
                  "If you believe this was an error or would like to appeal, please contact our admissions team"
                )}
              </span>
            </span>
          </p>

          <Button
            type="button"
            className="min-w-[80px] h-9 font-bold rounded-[8px] text-sm bg-main-primary hover:bg-p-tints-tint-90 text-primary-foreground ms-auto"
            onClick={() => router.push("/")}
          >
            {t("Visit Home Page")}
          </Button>
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
                <div className="bg-[#FEF2F2] w-12 h-12 flex justify-center items-center rounded-full">
                  <XCircle className="text-[#C50030]" />
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
