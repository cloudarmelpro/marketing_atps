"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { scaleInVariants, viewportSettings } from "@/lib/motion";
import TitleSection from "../TitleSection";
import type { TransformedBlogPost } from "@/lib/api/transformers";

interface RelatedPostsProps {
  posts: TransformedBlogPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="w-full flex flex-col gap-[40px] mt-[80px]">
      <div className="flex items-center gap-4">
        <TitleSection title="Related Articles" />
        <div className="h-px grow bg-black/10"></div>
      </div>

      <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
        {posts.map((blog, index) => (
          <Link href={`/blog/${blog.slug}`} key={blog.id} className="block group">
            <motion.div
              variants={scaleInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="w-full h-full rounded-[16px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center py-[8px] gap-[24px] max-lg:gap-4 h-full">
                {/* Image */}
                <div className="w-[calc(100%-16px)] h-[240px] rounded-[12px] overflow-hidden relative">
                  <Image
                    src={blog.imageBlog || "/assets/placeholder.png"}
                    alt={blog.description || blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="w-full flex flex-col gap-[15px] px-[24px] pb-[24px] max-lg:gap-3">
                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider">
                    <span className="text-[#1B0C25]">
                      {blog.title}
                    </span>
                    <span className="text-gray-400">{blog.date}</span>
                  </div>

                  {/* Description/Title */}
                  <div>
                    <p className="font-medium text-[18px] leading-[26px] text-[#1b0c25] line-clamp-2 group-hover:text-[#1B0C25]/80 transition-colors">
                      {blog.description}
                    </p>
                  </div>

                  {/* Author */}
                  {blog.author && (
                    <div className="flex items-center gap-3 mt-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden relative">
                        {blog.author.avatar ? (
                          <Image
                            src={blog.author.avatar}
                            alt={blog.author.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
                            {blog.author.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <span className="text-sm text-gray-600 font-medium">
                        {blog.author.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
