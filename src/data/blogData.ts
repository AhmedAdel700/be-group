export type BlogItem = {
  id: string | number;
  image: string | StaticImageData;
  desc: string;
  date: string;
};

import PlaceholderImage from "@/app/assets/4.png";
import { StaticImageData } from "next/image";

// Sample blog data for demonstration
export const sampleBlogData: BlogItem[] = [
  {
    id: 1,
    image: PlaceholderImage,
    desc: "The Future of Web Design: Trends to Watch in 2024",
    date: "March 15, 2024",
  },
  {
    id: 2,
    image: PlaceholderImage,
    desc: "Building Scalable React Applications with TypeScript",
    date: "March 12, 2024",
  },
  {
    id: 3,
    image: PlaceholderImage,
    desc: "UX Design Principles for Better User Engagement",
    date: "March 10, 2024",
  },
  {
    id: 4,
    image: PlaceholderImage,
    desc: "Next.js 14: What's New and How to Migrate",
    date: "March 8, 2024",
  },
  {
    id: 5,
    image: PlaceholderImage,
    desc: "CSS Grid vs Flexbox: When to Use Each Layout Method",
    date: "March 5, 2024",
  },
  {
    id: 6,
    image: PlaceholderImage,
    desc: "Mobile-First Design: Creating Responsive Experiences",
    date: "March 3, 2024",
  },
  {
    id: 7,
    image: PlaceholderImage,
    desc: "Performance Optimization for Modern Web Applications",
    date: "March 1, 2024",
  },
  {
    id: 8,
    image: PlaceholderImage,
    desc: "Design Systems: Building Consistency Across Products",
    date: "February 28, 2024",
  },
  {
    id: 9,
    image: PlaceholderImage,
    desc: "Accessibility Best Practices for Inclusive Design",
    date: "February 25, 2024",
  },
];

// Generate additional pages of blog data
export const generateBlogData = (page: number): BlogItem[] => {
  const baseId = (page - 1) * 9;
  const imageFiles = [
    PlaceholderImage,
    PlaceholderImage,
    PlaceholderImage,
    PlaceholderImage,
    PlaceholderImage,
    PlaceholderImage,
    PlaceholderImage,
    PlaceholderImage,
    PlaceholderImage,
  ];

  return Array.from({ length: 9 }, (_, index) => ({
    id: baseId + index + 1,
    image: imageFiles[index % imageFiles.length],
    desc: `Blog Post Title ${baseId + index + 1} - Page ${page}`,
    date: `February ${25 - (baseId + index)}, 2024`,
  }));
};
