export type BlogItem = {
  id: string | number;
  image: string | StaticImageData;
  desc: string;
  date: string;
};

import blog1 from "@/app/assets/blog1.jpg";
import blog2 from "@/app/assets/blog2.jpg";
import blog3 from "@/app/assets/blog3.jpg";
import { StaticImageData } from "next/image";

// Sample blog data for demonstration
export const sampleBlogData: BlogItem[] = [
  {
    id: 1,
    image: blog1,
    desc: "The Future of Web Design: Trends to Watch in 2024",
    date: "March 15, 2024",
  },
  {
    id: 2,
    image: blog2,
    desc: "Building Scalable React Applications with TypeScript",
    date: "March 12, 2024",
  },
  {
    id: 3,
    image: blog3,
    desc: "UX Design Principles for Better User Engagement",
    date: "March 10, 2024",
  },
  {
    id: 4,
    image: blog1,
    desc: "Next.js 14: What's New and How to Migrate",
    date: "March 8, 2024",
  },
  {
    id: 5,
    image: blog2,
    desc: "CSS Grid vs Flexbox: When to Use Each Layout Method",
    date: "March 5, 2024",
  },
  {
    id: 6,
    image: blog3,
    desc: "Mobile-First Design: Creating Responsive Experiences",
    date: "March 3, 2024",
  },
  {
    id: 7,
    image: blog1,
    desc: "Performance Optimization for Modern Web Applications",
    date: "March 1, 2024",
  },
  {
    id: 8,
    image: blog2,
    desc: "Design Systems: Building Consistency Across Products",
    date: "February 28, 2024",
  },
  {
    id: 9,
    image: blog3,
    desc: "Accessibility Best Practices for Inclusive Design",
    date: "February 25, 2024",
  },
];

// Generate additional pages of blog data
export const generateBlogData = (page: number): BlogItem[] => {
  const baseId = (page - 1) * 9;
  const imageFiles = [
    blog1,
    blog2,
    blog3,
    blog1,
    blog2,
    blog3,
    blog1,
    blog2,
    blog3,
  ];

  return Array.from({ length: 9 }, (_, index) => ({
    id: baseId + index + 1,
    image: imageFiles[index % imageFiles.length],
    desc: `Blog Post Title ${baseId + index + 1} - Page ${page}`,
    date: `February ${25 - (baseId + index)}, 2024`,
  }));
};
