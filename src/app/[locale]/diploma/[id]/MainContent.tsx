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

// Function to format date as day-month-year
const formatDate = (dateString: string) => {
  if (!dateString) return "";
  
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      // If it's already in DD-MM-YYYY format, return as is
      if (dateString.includes('-') && dateString.split('-').length === 3) {
        return dateString;
      }
      return dateString;
    }
    
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}-${month}-${year}`;
  } catch {
    return dateString;
  }
};

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
        <div className="bg-white rounded-md border-black overflow-hidden mb-8 shadow-sm">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            className="w-full h-64 object-cover"
            width={400}
            height={400}
          />
          <div className="px-6 py-9 flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-main-primary">
              {locale === "en" ? course.title : course.titleAr}
            </h1>

            <p className="text-black-tint-80">
              {locale === "en" ? course.description : course.descriptionAr}
            </p>

            <div className="flex flex-wrap gap-3">
              <Badge className="bg-main-primary hover:bg-main-primary/80 transition-colors duration-200 text-white px-3 py-1 flex gap-2 cursor-pointer text-sm">
                <Calendar className="w-4 h-4" />
                {t("Start")}: {formatDate(course.startDate)}
              </Badge>
              <Badge className="bg-[#0EC5C7] hover:bg-[#0EC5C7]/80 transition-colors duration-200 text-white px-3 py-1 flex gap-2 cursor-pointer text-sm">
                <Calendar className="w-4 h-4" />
                {t("End")}: {formatDate(course.endDate)}
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
        <div className="bg-white rounded-md border border-gray-200 shadow-sm">
          <Tabs defaultValue="description" className="w-full">
            <TabsList
              className={`flex ${locale === "ar" ? "flex-row-reverse" : ""} justify-between sm:justify-start items-center gap-1 sm:gap-4 w-full py-4 rounded-t-xl bg-transparent border-b border-gray-200 rounded-none h-12`}
            >
              <TabsTrigger
                value="description"
                className="data-[state=active]:bg-main-primary data-[state=active]:text-white !shadow-none !font-old relative !h-10 !rounded-sm"
              >
                {t("Description")}
              </TabsTrigger>
              <TabsTrigger
                value="schedule"
                className="data-[state=active]:bg-main-primary data-[state=active]:text-white !shadow-none !font-old relative !h-10 !rounded-sm"
              >
                {t("Schedule")}
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="data-[state=active]:bg-main-primary data-[state=active]:text-white !shadow-none !font-old relative !h-10 !rounded-sm"
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
                  <span className="text-black-tint-80">
                    ({course.totalReviews} reviews)
                  </span>
                </div>

                {locale === "en"
                  ? course.reviews.map((review: any, index: any) => (
                      <div
                        key={index}
                        className="border-dashed border-b-2 flex flex-col gap-4 p-4 border-gray-200"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-main-primary">
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
                        <p className="text-black-tint-80">{review.text}</p>
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
                          <span className="font-semibold text-main-primary">
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
                        <p className="text-black-tint-80 text-right rtl:text-right ltr:text-left">
                          {review.text}
                        </p>
                      </div>
                    ))}
              </div>
            </TabsContent>

            <TabsContent value="schedule" className="p-3 sm:p-6">
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
                          <span className="font-semibold text-main-primary text-base">
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
                                    <h4 className="font-bold text-base text-black-tint-80">
                                      {module.name}
                                    </h4>
                                    <p className="text-base text-black-tint-80">
                                      {t("Date and Time")}:{" "}
                                      {formatDate(module.startDate)}
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
                          <span className="font-semibold text-main-primary text-base">
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
                                    <h4 className="font-bold text-base text-black-tint-80">
                                      {module.name}
                                    </h4>
                                    <p className="text-base text-black-tint-80 self-end">
                                      {t("Date and Time")}:{" "}
                                      {formatDate(module.startDate)}
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
                  <h3 className="text-xl font-bold text-main-primary text-right rtl:text-right ltr:text-left">
                    {t("What You will Learn")}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {locale === "en"
                      ? course.whatYouLearn.map((item: any, index: any) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-500  flex-shrink-0" />
                            <span className="text-black-tint-80">{item}</span>
                          </li>
                        ))
                      : course.whatYouLearnAr.map((item: any, index: any) => (
                          <li
                            key={index}
                            className="flex items-start rtl:flex-row-reverse gap-2"
                          >
                            <Check className="w-5 h-5 text-green-500  flex-shrink-0" />
                            <span className="text-black-tint-80">{item}</span>
                          </li>
                        ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-main-primary text-right rtl:text-right ltr:text-left">
                    {t(
                      "What Potential Benefits Can You Unlock After This Bootcamp"
                    )}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {locale === "en"
                      ? course.benefits.map((benefit: any, index: any) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-[#0EC5C7]  flex-shrink-0" />
                            <span className="text-black-tint-80">
                              {benefit}
                            </span>
                          </li>
                        ))
                      : course.benefitsAr.map((benefit: any, index: any) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 rtl:flex-row-reverse"
                          >
                            <Check className="w-5 h-5 text-[#0EC5C7]  flex-shrink-0" />
                            <span className="text-black-tint-80">
                              {benefit}
                            </span>
                          </li>
                        ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-main-primary text-right rtl:text-right ltr:text-left">
                    {t("Who Should Take This Bootcamp")}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {locale === "en"
                      ? course.whoShouldTake.map((person: any, index: any) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-[#5F289E] flex-shrink-0" />
                            <span className="text-black-tint-80">{person}</span>
                          </li>
                        ))
                      : course.whoShouldTakeAr.map(
                          (person: any, index: any) => (
                            <li
                              key={index}
                              className="flex items-start rtl:flex-row-reverse gap-2"
                            >
                              <Check className="w-5 h-5 text-[#5F289E] flex-shrink-0 " />
                              <span className="text-black-tint-80">
                                {person}
                              </span>
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
