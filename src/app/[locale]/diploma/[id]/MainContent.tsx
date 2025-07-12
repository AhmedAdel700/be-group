/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Calendar, Check, ChevronDown, ChevronUp, Star } from "lucide-react";
import Image from "next/image";

export default function MainContent({
  course,
  t,
  openSemesters,
  toggleSemesterOpen,
  locale,
}: any) {
  return (
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
              {locale === "en" ? course.title : course.titleAr}
            </h1>
            <p className="text-gray-600 mb-6">
              {locale === "en" ? course.description : course.descriptionAr}
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <Badge className="bg-[#001C71] text-white px-3 py-1 flex gap-2">
                <Calendar className="w-4 h-4" />
                {t("Start")}: {course.startDate}
              </Badge>
              <Badge className="bg-[#0EC5C7] text-white px-3 py-1 flex gap-2">
                <Calendar className="w-4 h-4 mr-1" />
                {t("End")}: {}
              </Badge>
              {/* <Badge
                className={`px-3 py-1 ${
                  course.available ? "bg-green-500" : "bg-red-500"
                } text-white`}
              >
                {course.available ? t("Available") : t("Not Available")}
              </Badge> */}
            </div>
          </div>
        </div>

        {/* Tabbed Content */}
        <div className="bg-white rounded-xl">
          <Tabs defaultValue="description" className="w-full ">
            <TabsList
              className={`flex justify-start items-center gap-16 w-full  p-4 rounded-t-xl !bg-transparent border-b border-b-[#001C71] !h-16 !rounded-none ${
                locale === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              <TabsTrigger
                value="description"
                className="data-[state=active]:text-[#001C71] !bg-transparent !shadow-none !font-old relative data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-[-20px] data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-[4px] data-[state=active]:after:bg-[#001C71] data-[state=active]:after:z-10"
              >
                {t("Description")}
              </TabsTrigger>
              <TabsTrigger
                value="schedule"
                className="data-[state=active]:text-[#001C71] !bg-transparent !shadow-none !font-old relative data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-[-20px] data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-[4px] data-[state=active]:after:bg-[#001C71] data-[state=active]:after:z-10"
              >
                {t("Schedule")}
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="data-[state=active]:text-[#001C71] !bg-transparent !shadow-none !font-old relative data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-[-20px] data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-[4px] data-[state=active]:after:bg-[#001C71] data-[state=active]:after:z-10"
              >
                {t("Reviews")}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="reviews" className="p-6">
              <div className="flex flex-col gap-6">
                <div
                  className={`flex items-center gap-4 ${
                    locale === "ar" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-400" />
                    <span className="text-2xl font-bold">{course.rating}</span>
                  </div>
                  <span className="text-gray-600">
                    ({course.totalReviews} reviews)
                  </span>
                </div>

                {locale === "en"
                  ? course.reviews.map((review: any, index: any) => (
                      <div
                        key={index}
                        className="border-dashed border-b-2 flex flex-col  gap-4 p-4 border-gray-200"
                      >
                        <div className="flex items-center gap-2">
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
                    ))
                  : course?.reviewsAr?.map((review: any, index: any) => (
                      <div
                        key={index}
                        className="border-dashed border-b-2 flex flex-col gap-4 p-4 border-gray-200"
                      >
                        <div
                          className={`flex items-center gap-2 ${
                            locale === "ar" ? "flex-row-reverse" : ""
                          }`}
                        >
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
                        <p className="text-gray-600 text-right rtl:text-right ltr:text-left">
                          {review.text}
                        </p>
                      </div>
                    ))}
              </div>
            </TabsContent>

            <TabsContent value="schedule" className="p-6">
              <div className="flex flex-col gap-4">
                {locale === "en"
                  ? course.semesters.map((semester: any) => (
                      <Collapsible
                        key={semester.id}
                        open={openSemesters.includes(semester.id)}
                        onOpenChange={() => toggleSemesterOpen(semester.id)}
                        className="flex flex-col gap-4"
                      >
                        <CollapsibleTrigger
                          className={`flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors ${
                            locale === "ar" ? "flex-row-reverse" : ""
                          }`}
                        >
                          <span className="font-semibold text-[#001C71]">
                            {semester.name}
                          </span>
                          {openSemesters.includes(semester.id) ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="flex flex-col gap-4">
                            {semester.modules.map(
                              (module: any, moduleIndex: any) => (
                                <div
                                  key={moduleIndex}
                                  className={`flex items-center justify-between p-3  border-dashed border-b-2 border-gray-200 ${
                                    locale === "ar" ? "flex-row-reverse" : ""
                                  }`}
                                >
                                  <div className="flex flex-col gap-4">
                                    <h4 className="font-bold text-xl text-gray-900">
                                      {module.name}
                                    </h4>
                                    <p className="text-medium text-lg text-gray-600">
                                      {t("Date and Time")}: {module.startDate}
                                    </p>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))
                  : course?.semestersAr?.map((semester: any) => (
                      <Collapsible
                        key={semester.id}
                        open={openSemesters.includes(semester.id)}
                        onOpenChange={() => toggleSemesterOpen(semester.id)}
                        className="flex flex-col gap-4"
                      >
                        <CollapsibleTrigger
                          className={`flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors ${
                            locale === "ar" ? "flex-row-reverse" : ""
                          }`}
                        >
                          <span className="font-semibold text-[#001C71]">
                            {semester.name}
                          </span>
                          {openSemesters.includes(semester.id) ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="flex flex-col gap-4">
                            {semester.modules.map(
                              (module: any, moduleIndex: any) => (
                                <div
                                  key={moduleIndex}
                                  className={`flex items-center justify-between p-3  border-dashed border-b-2 border-gray-200 ${
                                    locale === "ar" ? "flex-row-reverse" : ""
                                  }`}
                                >
                                  <div className="flex flex-col gap-4">
                                    <h4 className="font-bold text-2xl text-gray-900">
                                      {module.name}
                                    </h4>
                                    <p className="text-medium text-2xl text-gray-600 self-end">
                                      {t("Date and Time")}: {module.startDate}
                                    </p>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
              </div>
            </TabsContent>

            <TabsContent value="description" className="p-6 flex-row-reverse">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-[#001C71] text-right rtl:text-right ltr:text-left">
                    {t("What You will Learn")}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {locale === "en"
                      ? course.whatYouLearn.map((item: any, index: any) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-500  flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))
                      : course.whatYouLearnAr.map((item: any, index: any) => (
                          <li
                            key={index}
                            className="flex items-start rtl:flex-row-reverse gap-2"
                          >
                            <Check className="w-5 h-5 text-green-500  flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-[#001C71] text-right rtl:text-right ltr:text-left">
                    {t(
                      "What Potential Benefits Can You Unlock After This Bootcamp"
                    )}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {locale === "en"
                      ? course.benefits.map((benefit: any, index: any) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-[#0EC5C7]  flex-shrink-0" />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))
                      : course.benefitsAr.map((benefit: any, index: any) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 rtl:flex-row-reverse"
                          >
                            <Check className="w-5 h-5 text-[#0EC5C7]  flex-shrink-0" />
                            <span className="text-gray-600">{benefit}</span>
                          </li>
                        ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-[#001C71] text-right rtl:text-right ltr:text-left">
                    {t("Who Should Take This Bootcamp")}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {locale === "en"
                      ? course.whoShouldTake.map((person: any, index: any) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-[#5F289E] flex-shrink-0" />
                            <span className="text-gray-600">{person}</span>
                          </li>
                        ))
                      : course.whoShouldTakeAr.map(
                          (person: any, index: any) => (
                            <li
                              key={index}
                              className="flex items-start rtl:flex-row-reverse gap-2"
                            >
                              <Check className="w-5 h-5 text-[#5F289E] flex-shrink-0 " />
                              <span className="text-gray-600">{person}</span>
                            </li>
                          )
                        )}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
}
