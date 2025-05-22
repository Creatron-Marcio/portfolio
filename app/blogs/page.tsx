"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BlogCard } from "@/components/sub/blog-card";
import { BLOGS } from "@/constants";

function formatMonth(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleString("default", { year: "numeric", month: "long" });
}

export default function BlogsPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const router = useRouter();

  const filteredBlogs = useMemo(() => {
    if (!selectedDate) return BLOGS;
    return BLOGS.filter((blog) => {
      const blogDate = new Date(blog.date);
      return (
        blogDate.getMonth() === selectedDate.getMonth() &&
        blogDate.getFullYear() === selectedDate.getFullYear()
      );
    });
  }, [selectedDate]);

  return (
    <div className="min-h-screen py-20 px-4 md:px-12 bg-[#0f0f0f] text-white">
      {/* Back Button */}
      <div className="mb-6">
        <button
          onClick={() => router.back()}
          className="text-sm px-4 py-2 rounded bg-[#1f1f1f] border border-gray-700 hover:bg-[#2a0e61] hover:text-white transition"
        >
          ← Back
        </button>
      </div>

      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Blogs
      </h1>

      <div className="flex justify-end mb-10">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="MMMM yyyy"
          showMonthYearPicker
          placeholderText="Filter by month"
          className="bg-[#1f1f1f] text-white border border-gray-600 px-4 py-2 rounded w-48"
        />
      </div>

      {filteredBlogs.length === 0 ? (
        <p className="text-center text-gray-400">
          No blogs found for{" "}
          {selectedDate?.toLocaleDateString("default", {
            year: "numeric",
            month: "long",
          })}.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.title + blog.date}
              title={blog.title}
              content={blog.content}
              date={blog.date}
              mark={blog.mark}
              onStarClick={(rating) =>
                console.log(`Rated blog "${blog.title}" with ${rating} stars`)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
