"use client";

import { BlogCard } from "@/components/sub/blog-card";
import { BLOGS } from "@/constants";
import Link from "next/link";

export const Blogs = () => {
  return (
    <section id="blogs" className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Blogs
      </h1>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 flex-wrap justify-center">
        {BLOGS.slice(0, 4).map((blog) => (
          <BlogCard
          key={blog.title}
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

      <Link href="/blogs" className="mt-10 px-6 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition-all">
        More Blogs
      </Link>
    </section>
  );
};
