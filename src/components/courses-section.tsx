"use client";

import { motion } from "framer-motion";
import { Clock, Users, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { useLocale } from "next-intl";

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Master modern web development with React, Node.js, and MongoDB. Build real-world applications from scratch.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "12 weeks",
    students: 1250,
    rating: 4.8,
    price: "$299",
    level: "Intermediate",
  },
  {
    id: 2,
    title: "Data Science & Analytics",
    description:
      "Learn Python, machine learning, and data visualization to become a data science professional.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "16 weeks",
    students: 890,
    rating: 4.9,
    price: "$399",
    level: "Advanced",
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    description:
      "Comprehensive digital marketing course covering SEO, social media, PPC, and content marketing.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "8 weeks",
    students: 2100,
    rating: 4.7,
    price: "$199",
    level: "Beginner",
  },
  {
    id: 4,
    title: "Mobile App Development",
    description:
      "Build native mobile apps for iOS and Android using React Native and Flutter frameworks.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "14 weeks",
    students: 750,
    rating: 4.8,
    price: "$349",
    level: "Intermediate",
  },
  {
    id: 5,
    title: "Cybersecurity Fundamentals",
    description:
      "Learn essential cybersecurity concepts, ethical hacking, and network security principles.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "10 weeks",
    students: 650,
    rating: 4.6,
    price: "$279",
    level: "Intermediate",
  },
  {
    id: 6,
    title: "UI/UX Design Bootcamp",
    description:
      "Master user interface and user experience design with industry-standard tools and methodologies.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "12 weeks",
    students: 980,
    rating: 4.9,
    price: "$259",
    level: "Beginner",
  },
  {
    id: 7,
    title: "Cloud Computing with AWS",
    description:
      "Become proficient in Amazon Web Services and cloud architecture for scalable applications.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "10 weeks",
    students: 540,
    rating: 4.7,
    price: "$329",
    level: "Advanced",
  },
  {
    id: 8,
    title: "Artificial Intelligence & ML",
    description:
      "Dive deep into AI and machine learning algorithms, neural networks, and practical applications.",
    image: "/placeholder.svg?height=200&width=300",
    duration: "18 weeks",
    students: 420,
    rating: 4.9,
    price: "$449",
    level: "Advanced",
  },
];

export default function CoursesSection() {
    const locale = useLocale();
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#001C71] mb-6">
            Our Popular Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our wide range of expertly designed courses to advance
            your career and achieve your learning goals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                  fill
                />
                <Badge className="absolute top-3 right-3 bg-[#0EC5C7] text-white">
                  {course.level}
                </Badge>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-[#001C71] mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                  <span className="text-lg font-bold text-[#001C71]">
                    {course.price}
                  </span>
                </div>

                <Link href={`/${locale}/course/${course.id}`}>
                  <Button className="w-full bg-[#001C71] hover:bg-[#001C71]/90 transition-colors duration-200">
                    View Details
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
