"use client";
import { useState } from "react";
import BlogsPage from "@/components/blogs/BlogsPage";
import { sampleBlogData, generateBlogData, type BlogItem } from "@/data/blogData";

export default function BlogsPageRoute() {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogData, setBlogData] = useState<BlogItem[]>(sampleBlogData);
  const totalPages = 5;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    
    // Simulate loading new blog data
    if (newPage === 1) {
      setBlogData(sampleBlogData);
    } else {
      setBlogData(generateBlogData(newPage));
    }
    
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <BlogsPage 
      items={blogData}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
}
