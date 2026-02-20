"use client";

import Link from "next/link";
import Image from "next/image";
import TitleSection from "../TitleSection";
import { motion } from "framer-motion";
import { scaleInVariants, viewportSettings } from "@/lib/motion";
import { ALL_BLOG_POSTS } from "@/lib/constants";

export default function BlogList() {
  return (
    <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
      {ALL_BLOG_POSTS.map((blog, index) => (
        <Link href={`/Blog/${blog.id}`} key={blog.id} className="block">
          <motion.div
            variants={scaleInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            transition={{
              duration: 0.6,
              delay: index * 0.05, // Faster stagger for many items
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="w-full h-full rounded-[16px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)] hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col items-center py-[8px] gap-[24px] max-lg:gap-4 h-full">
              {/* Image */}
              <div className="w-[calc(100%-16px)] h-[240px] rounded-[12px] overflow-hidden relative">
                {/* Using a placeholder if image is missing or valid URL */}
                <Image
                  src={blog.imageBlog || "/assets/placeholder.png"}
                  alt={blog.description}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Contenu */}
              <div className="w-full flex flex-col gap-[15px] px-[24px] pb-[24px] max-lg:gap-3">
                {/* Meta */}
                <div className="flex items-center justify-between">
                  <TitleSection title={blog.title} />
                  <div>
                    <p className="text-sm text-gray-500">{blog.date}</p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="font-medium text-[20px] leading-[28px] text-[#1b0c25] line-clamp-2">
                    {blog.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
