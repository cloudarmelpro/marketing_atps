import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ALL_NEWS } from "@/lib/constants";
import { FadeInUp, ScaleIn, StaggerContainer } from "@/lib/motion";
import TitleSection from "@/components/TitleSection";
import RelatedNews from "@/components/sections/RelatedNews";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function NewsDetail({ params }: PageProps) {
  const { id } = await params;
  const news = ALL_NEWS.find((item) => item.id === id);

  if (!news) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-white">
      {/* Hero / Header */}
      <StaggerContainer className="w-full max-w-[900px] flex flex-col items-center px-6 pt-[140px] pb-[60px] gap-8 text-center">
        <FadeInUp>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold uppercase tracking-wider text-[#1B0C25] mb-4">
            <span>{news.category}</span>
            <span className="w-1 h-1 rounded-full bg-gray-400"></span>
            <span>{news.date}</span>
          </div>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#1B0C25] leading-tight">
            {news.title}
          </h1>
        </FadeInUp>

        {news.author && (
          <FadeInUp delay={0.2} className="flex items-center gap-3 mt-2">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
              {news.author.avatar ? (
                <Image
                  src={news.author.avatar}
                  alt={news.author.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-gray-500 font-bold">
                  {news.author.name.charAt(0)}
                </div>
              )}
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-[#1B0C25]">
                {news.author.name}
              </p>
              <p className="text-xs text-gray-500">Author</p>
            </div>
          </FadeInUp>
        )}
      </StaggerContainer>

      {/* Main Image */}
      <ScaleIn className="w-full max-w-[1000px] px-6 mb-12">
        <div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-video">
          <Image
            src={news.image || "/assets/placeholder.png"}
            alt={news.title}
            fill
            className="object-cover"
          />
        </div>
      </ScaleIn>

      {/* Content */}
      <StaggerContainer className="w-full max-w-[800px] px-6 pb-20">
        <FadeInUp className="prose prose-lg max-w-none text-[#1B0C25]/80">
          <p className="text-xl font-medium leading-relaxed text-[#1B0C25] mb-8">
            {news.excerpt}
          </p>

          {/* Minimal content rendering - in a real app this would be a rich text renderer */}
          <div className="whitespace-pre-wrap leading-8">{news.content}</div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/news">
              <button className="text-[#1B0C25] font-semibold hover:text-[#1B0C25]/80 transition-colors flex items-center gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to News
              </button>
            </Link>
          </div>
        </FadeInUp>
      </StaggerContainer>

      {/* Related News */}
      <div className="w-full bg-[#FAFAFA] py-20 flex justify-center">
        <div className="w-full max-w-[1200px] px-6">
          <RelatedNews
            currentNewsId={news.id}
            category={news.category as string}
          />
        </div>
      </div>
    </div>
  );
}
