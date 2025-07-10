"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  ArrowLeft,
  Calendar,
  Star,
  ChevronDown,
  ChevronUp,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../../../../components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
import { useLocale } from "next-intl";

// Mock course data
const courseData = {
  1: {
    title: "Full Stack Web Development",
    description:
      "Master modern web development with React, Node.js, and MongoDB. Build real-world applications from scratch and become a professional full-stack developer.",
    image: "/placeholder.svg?height=400&width=600",
    startDate: "2024-02-15",
    endDate: "2024-05-15",
    available: true,
    rating: 4.8,
    totalReviews: 245,
    instructor: "Dr. Sarah Johnson",
    whatYouLearn: [
      "Modern JavaScript ES6+ features and best practices",
      "React.js fundamentals and advanced concepts",
      "Node.js and Express.js backend development",
      "MongoDB database design and operations",
      "RESTful API development and integration",
      "Authentication and authorization systems",
      "Deployment strategies and DevOps basics",
    ],
    benefits: [
      "Build a complete portfolio of real-world projects",
      "Gain skills demanded by top tech companies",
      "Increase your earning potential by 40-60%",
      "Join a community of 10,000+ successful graduates",
      "Get personalized career guidance and mentorship",
      "Access to exclusive job placement assistance",
    ],
    whoShouldTake: [
      "Beginners with basic HTML/CSS knowledge",
      "Frontend developers wanting to learn backend",
      "Career changers looking to enter tech",
      "Students seeking practical programming skills",
      "Entrepreneurs building their own products",
    ],
    semesters: [
      {
        id: 1,
        name: "Semester 1: Frontend Foundations",
        modules: [
          {
            name: "HTML5 & CSS3 Mastery",
            startDate: "2024-02-15",
            endDate: "2024-02-28",
            instructor: "John Smith",
          },
          {
            name: "JavaScript Fundamentals",
            startDate: "2024-03-01",
            endDate: "2024-03-15",
            instructor: "Jane Doe",
          },
          {
            name: "React.js Basics",
            startDate: "2024-03-16",
            endDate: "2024-03-31",
            instructor: "Dr. Sarah Johnson",
          },
        ],
      },
      {
        id: 2,
        name: "Semester 2: Advanced Frontend",
        modules: [
          {
            name: "Advanced React Patterns",
            startDate: "2024-04-01",
            endDate: "2024-04-15",
            instructor: "Dr. Sarah Johnson",
          },
          {
            name: "State Management with Redux",
            startDate: "2024-04-16",
            endDate: "2024-04-30",
            instructor: "Mike Wilson",
          },
          {
            name: "Testing React Applications",
            startDate: "2024-05-01",
            endDate: "2024-05-15",
            instructor: "Lisa Chen",
          },
        ],
      },
      {
        id: 3,
        name: "Semester 3: Backend Development",
        modules: [
          {
            name: "Node.js & Express.js",
            startDate: "2024-05-16",
            endDate: "2024-05-31",
            instructor: "Robert Brown",
          },
          {
            name: "Database Design with MongoDB",
            startDate: "2024-06-01",
            endDate: "2024-06-15",
            instructor: "Emily Davis",
          },
          {
            name: "RESTful API Development",
            startDate: "2024-06-16",
            endDate: "2024-06-30",
            instructor: "David Lee",
          },
        ],
      },
      {
        id: 4,
        name: "Semester 4: Full Stack Integration",
        modules: [
          {
            name: "Authentication & Security",
            startDate: "2024-07-01",
            endDate: "2024-07-15",
            instructor: "Dr. Sarah Johnson",
          },
          {
            name: "Deployment & DevOps",
            startDate: "2024-07-16",
            endDate: "2024-07-31",
            instructor: "Alex Turner",
          },
          {
            name: "Capstone Project",
            startDate: "2024-08-01",
            endDate: "2024-08-15",
            instructor: "Dr. Sarah Johnson",
          },
        ],
      },
    ],
    reviews: [
      {
        name: "Ahmed Hassan",
        rating: 5,
        text: "Excellent course! The instructor explains complex concepts in a very clear way. I landed my first developer job after completing this course.",
      },
      {
        name: "Maria Rodriguez",
        rating: 5,
        text: "Best investment I ever made. The hands-on projects really helped me understand how everything works together in real applications.",
      },
      {
        name: "James Wilson",
        rating: 4,
        text: "Great content and structure. The only thing I would improve is having more live coding sessions, but overall very satisfied.",
      },
    ],
    faqs: [
      {
        question: "Do I need prior programming experience?",
        answer:
          "Basic knowledge of HTML and CSS is recommended, but we start from the fundamentals and build up gradually.",
      },
      {
        question: "How much time should I dedicate per week?",
        answer:
          "We recommend 10-15 hours per week for optimal learning, but the course is self-paced so you can adjust as needed.",
      },
      {
        question: "Will I get a certificate upon completion?",
        answer:
          "Yes, you will receive a verified certificate that you can add to your LinkedIn profile and resume.",
      },
      {
        question: "Is there job placement assistance?",
        answer:
          "Yes, we provide career guidance, resume review, interview preparation, and access to our job placement network.",
      },
    ],
  },
};

export default function CourseDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const locale = useLocale();
  const courseId = Number.parseInt(params.id as string);
  const course = courseData[courseId as keyof typeof courseData];

  const [selectedSemesters, setSelectedSemesters] = useState<number[]>([
    1, 2, 3, 4,
  ]);
  const [openSemesters, setOpenSemesters] = useState<number[]>([]);
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#001C71] mb-4">
            Course Not Found
          </h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const toggleSemester = (semesterId: number) => {
    setSelectedSemesters((prev) =>
      prev.includes(semesterId)
        ? prev.filter((id) => id !== semesterId)
        : [...prev, semesterId]
    );
  };

  const toggleSemesterOpen = (semesterId: number) => {
    setOpenSemesters((prev) =>
      prev.includes(semesterId)
        ? prev.filter((id) => id !== semesterId)
        : [...prev, semesterId]
    );
  };

  const toggleFaq = (faqIndex: number) => {
    setOpenFaqs((prev) =>
      prev.includes(faqIndex)
        ? prev.filter((id) => id !== faqIndex)
        : [...prev, faqIndex]
    );
  };

  const handleBuySemesters = () => {
    if (selectedSemesters.length > 0) {
      router.push(
        `/${locale}/purchase?course=${courseId}&semesters=${selectedSemesters.join(",")}`
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-[#001C71] hover:text-[#0EC5C7] transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-10 gap-8">
          {/* Main Content - 70% */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Course Header */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-64 object-cover"
                  fill
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
                      {course.available ? "Available" : "Not Available"}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Tabbed Content */}
              <div className="bg-white rounded-xl shadow-lg">
                <Tabs defaultValue="reviews" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 bg-gray-100 p-1 rounded-t-xl">
                    <TabsTrigger
                      value="reviews"
                      className="data-[state=active]:bg-[#001C71] data-[state=active]:text-white"
                    >
                      Reviews
                    </TabsTrigger>
                    <TabsTrigger
                      value="schedule"
                      className="data-[state=active]:bg-[#001C71] data-[state=active]:text-white"
                    >
                      Schedule
                    </TabsTrigger>
                    <TabsTrigger
                      value="faq"
                      className="data-[state=active]:bg-[#001C71] data-[state=active]:text-white"
                    >
                      FAQ
                    </TabsTrigger>
                    <TabsTrigger
                      value="description"
                      className="data-[state=active]:bg-[#001C71] data-[state=active]:text-white"
                    >
                      Description
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
                                      Instructor: {module.instructor}
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

                  <TabsContent value="faq" className="p-6">
                    <div className="space-y-4">
                      {course.faqs.map((faq, index) => (
                        <Collapsible
                          key={index}
                          open={openFaqs.includes(index)}
                          onOpenChange={() => toggleFaq(index)}
                        >
                          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left">
                            <span className="font-semibold text-[#001C71]">
                              {faq.question}
                            </span>
                            {openFaqs.includes(index) ? (
                              <ChevronUp className="w-5 h-5 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 flex-shrink-0" />
                            )}
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-2">
                            <div className="p-4 bg-white rounded border">
                              <p className="text-gray-600">{faq.answer}</p>
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
                          {"What You'll Learn"}
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
                          What Potential Benefits Can You Unlock After This
                          Bootcamp?
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
                          Who Should Take This Bootcamp?
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
                    Select Semesters
                  </h3>

                  <div className="space-y-3 mb-6">
                    {course.semesters.map((semester) => (
                      <div
                        key={semester.id}
                        className={`p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                          selectedSemesters.includes(semester.id)
                            ? "border-[#001C71] bg-[#001C71]/5"
                            : "border-gray-200 hover:border-[#0EC5C7]"
                        }`}
                        onClick={() => toggleSemester(semester.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-sm">
                              {semester.name}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {semester.modules.length} modules
                            </p>
                          </div>
                          {selectedSemesters.includes(semester.id) && (
                            <Check className="w-5 h-5 text-[#001C71]" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={handleBuySemesters}
                    disabled={selectedSemesters.length === 0}
                    className="w-full bg-[#001C71] hover:bg-[#001C71]/90 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Buy Selected Semesters ({selectedSemesters.length})
                  </Button>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                      Total: ${selectedSemesters.length * 299}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
