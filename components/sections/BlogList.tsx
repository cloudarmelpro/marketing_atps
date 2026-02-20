"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { StaggerContainer } from "@/lib/motion";
import { blogService } from "@/lib/api";
import { transformBlogArticles, type TransformedBlogPost } from "@/lib/api/transformers";
import { BlogListSkeleton } from "@/components/ui/skeleton-card";
import type { BlogQueryParams, PaginationInfo } from "@/lib/types";

export default function BlogList() {
  const [posts, setPosts] = useState<TransformedBlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>(["All posts"]);
  const [selectedCategory, setSelectedCategory] = useState("All posts");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo>({
    page: 1,
    limit: 12,
    total: 0,
    totalPages: 1,
    hasNext: false,
    hasPrev: false,
  });

  const fetchPosts = useCallback(async (params: BlogQueryParams = {}) => {
    setLoading(true);
    setError(null);

    const queryParams: BlogQueryParams = {
      page: params.page || 1,
      limit: 12,
      sortBy: "publishedAt",
      sortOrder: "desc",
      status: "published",
    };

    if (selectedCategory !== "All posts") {
      queryParams.category = selectedCategory;
    }

    const response = await blogService.getArticles(queryParams);

    if (response.error) {
      setError(response.error.message);
      setPosts([]);
    } else if (response.data) {
      const articlesData = response.data.articles || [];
      const transformed = transformBlogArticles(articlesData);
      setPosts(transformed);
      if (response.data.pagination) {
        setPagination(response.data.pagination);
      }
    }

    setLoading(false);
  }, [selectedCategory]);

  const fetchCategories = useCallback(async () => {
    const response = await blogService.getCategories();

    if (response.data) {
      const cats = response.data.categories || [];
      const categoryNames = [
        "All posts",
        ...cats.map((c: { name: string }) => c.name),
      ];
      setCategories(categoryNames);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    fetchPosts({ page: 1 });
  }, [selectedCategory, fetchPosts]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  if (loading && posts.length === 0) {
    return <BlogListSkeleton />;
  }

  if (error) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-20 gap-4">
        <p className="text-red-500 text-lg">{error}</p>
        <button
          onClick={() => fetchPosts()}
          className="px-6 py-2 bg-[#1B0C25] text-white rounded-full hover:bg-[#1B0C25]/90 transition-colors"
        >
          Réessayer
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-12">
      {/* Filters - Pill Design */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
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
          {posts.map((blog) => (
            <motion.div
              key={blog.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/blog/${blog.slug}`} className="block group h-full">
                <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                  {/* Image */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={blog.imageBlog || "/assets/placeholder.png"}
                      alt={blog.description}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Category Badge overlay */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-[#1B0C25]">
                      {blog.title}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col grow p-6 gap-4">
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

      {posts.length === 0 && !loading && (
        <div className="text-center py-20 text-gray-500">
          No posts found for this category.
        </div>
      )}

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => fetchPosts({ page: pagination.page - 1 })}
            disabled={!pagination.hasPrev || loading}
            className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {pagination.page} of {pagination.totalPages}
          </span>
          <button
            onClick={() => fetchPosts({ page: pagination.page + 1 })}
            disabled={!pagination.hasNext || loading}
            className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
