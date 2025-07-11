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
                    <span className="text-2xl font-bold">{course.rating}</span>
                  </div>
                  <span className="text-gray-600">
                    ({course.totalReviews} reviews)
                  </span>
                </div>

                {course.reviews.map((review: any, index: any) => (
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
                {course.semesters.map((semester: any) => (
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
                        {semester.modules.map(
                          (module: any, moduleIndex: any) => (
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
                          )
                        )}
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
                    {course.whatYouLearn.map((item: any, index: any) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#001C71] mb-4">
                    {t(
                      "What Potential Benefits Can You Unlock After This Bootcamp"
                    )}
                  </h3>
                  <ul className="space-y-2">
                    {course.benefits.map((benefit: any, index: any) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-[#0EC5C7] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#001C71] mb-4">
                    {t("Who Should Take This Bootcamp")}
                  </h3>
                  <ul className="space-y-2">
                    {course.whoShouldTake.map((person: any, index: any) => (
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
  );
}
