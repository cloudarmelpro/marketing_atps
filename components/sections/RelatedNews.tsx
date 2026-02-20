"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { scaleInVariants, viewportSettings } from "@/lib/motion";
import TitleSection from "../TitleSection";
import { newsService } from "@/lib/api";
import { transformNewsItems, type TransformedNewsItem } from "@/lib/api/transformers";

interface RelatedNewsProps {
  currentNewsId: string;
  category: string;
}

export default function RelatedNews({
  currentNewsId,
  category,
}: RelatedNewsProps) {
  const [relatedNews, setRelatedNews] = useState<TransformedNewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedNews = async () => {
      setLoading(true);

      const response = await newsService.getRelatedNews(currentNewsId, 4);

      if (response.data) {
        const data = response.data as any;
        const newsArray = Array.isArray(data) ? data : (data.news || []);
        const filtered = newsArray.filter((n: any) => n.id !== currentNewsId);
        setRelatedNews(transformNewsItems(filtered).slice(0, 3));
      } else {
        const fallbackResponse = await newsService.getRecentNews(4);
        if (fallbackResponse.data) {
          const data = fallbackResponse.data as any;
          const newsArray = Array.isArray(data) ? data : (data.news || []);
          const filtered = newsArray.filter((n: any) => n.id !== currentNewsId);
          setRelatedNews(transformNewsItems(filtered).slice(0, 3));
        }
      }

      setLoading(false);
    };

    fetchRelatedNews();
  }, [currentNewsId, category]);

  if (loading) {
    return (
      <div className="w-full flex flex-col gap-[40px] mt-[80px]">
        <div className="flex items-center gap-4">
          <TitleSection title="Related News" />
          <div className="h-px grow bg-black/10"></div>
        </div>
        <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-[350px] rounded-[16px] bg-gray-100 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  if (relatedNews.length === 0) return null;

  return (
    <div className="w-full flex flex-col gap-[40px] mt-[80px]">
      <div className="flex items-center gap-4">
        <TitleSection title="Related News" />
        <div className="h-px grow bg-black/10"></div>
      </div>

      <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
        {relatedNews.map((news, index) => (
          <Link href={`/news/${news.slug}`} key={news.id} className="block group">
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
              <div className="flex flex-col h-full">
                {/* Image */}
                <div className="relative w-full h-[200px] rounded-t-[16px] overflow-hidden">
                  <Image
                    src={news.image || "/assets/placeholder.png"}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 text-white text-[10px] px-2 py-1 rounded-md uppercase font-bold tracking-wider backdrop-blur-sm">
                    {news.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col p-5 gap-3 grow">
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                    {news.date}
                  </div>

                  <h4 className="font-bold text-[16px] leading-[24px] text-[#1b0c25] line-clamp-2 group-hover:text-[#1B0C25]/80 transition-colors">
                    {news.title}
                  </h4>

                  <p className="text-sm text-gray-500 line-clamp-2">
                    {news.excerpt}
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
