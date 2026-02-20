"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ALL_BLOG_POSTS, NEWS_CATEGORIES } from "@/lib/constants"; // Using NEWS_CATEGORIES as BLOG_CATEGORIES for consistency if needed, or I should import BLOG_CATEGORIES
import { FadeInUp, StaggerContainer } from "@/lib/motion";

// Ensure BLOG_CATEGORIES exists or mock it here if it was not exported in the view
const BLOG_CATEGORIES = [
  "All posts",
  "E-Learning",
  "Assessment",
  "Quizzes",
  "Proctored Exams",
  "EdTech AI",
  "Learning Tools",
  "Best Practices",
  "Security",
  "Analytics",
  "Case Studies",
  "Guides",
  "Updates",
];

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("All posts");

  const filteredPosts =
    selectedCategory === "All posts"
      ? ALL_BLOG_POSTS
      : ALL_BLOG_POSTS.filter(
          (post: any) =>
            post.category === selectedCategory ||
            post.title === selectedCategory,
        ); // Fallback to title as category matches previous logic

  return (
    <div className="w-full flex flex-col gap-12">
      {/* Filters - Pill Design like News */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {BLOG_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-[#1B0C25] text-white shadow-md"
                : "bg-white text-[#1B0C25] border border-gray-200 hover:border-[#1B0C25]/30 hover:bg-gray-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <StaggerContainer className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((blog) => (
            <motion.div
              key={blog.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/Blog/${blog.id}`} className="block group h-full">
                <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                  {/* Image */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={blog.imageBlog || "/assets/placeholder.png"}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Category Badge overlay */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-[#1B0C25]">
                      {
                        blog.title /* Using title as category based on current data structure */
                      }
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-6 gap-4">
                    <div className="text-sm text-gray-500 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1B0C25]/40"></span>
                      {blog.date}
                    </div>

                    <h3 className="text-xl font-bold text-[#1B0C25] leading-snug group-hover:text-[#1B0C25]/80 transition-colors line-clamp-2">
                      {blog.description}
                    </h3>

                    {/* Author Section */}
                    {blog.author && (
                      <div className="mt-auto pt-4 flex items-center gap-3 border-t border-gray-100">
                        <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden relative">
                          {blog.author.avatar ? (
                            <Image
                              src={blog.author.avatar}
                              alt={blog.author.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="flex items-center justify-center w-full h-full text-gray-500 font-bold text-xs">
                              {blog.author.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          {blog.author.name}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </StaggerContainer>

      {filteredPosts.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          No posts found for this category.
        </div>
      )}
    </div>
  );
}
