import TitleSection from "@/components/TitleSection";
import Image from "next/image";
import { ALL_BLOG_POSTS } from "@/lib/constants";
import { notFound } from "next/navigation";
import { FadeInUp, ScaleIn, StaggerContainer } from "@/lib/motion";
import RelatedPosts from "@/components/sections/RelatedPosts";
import BlogSidebar from "@/components/sections/BlogSidebar";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetail({ params }: PageProps) {
  const { id } = await params;
  const blog = ALL_BLOG_POSTS.find((b) => b.id.toString() === id);

  if (!blog) {
    notFound();
  }

  // Fallback for detailImage
  const displayImage =
    (blog as any).detailImage || blog.imageBlog || "/assets/placeholder.png";

  // Filter related posts: same category
  const relatedPosts = ALL_BLOG_POSTS.filter(
    (b) => b.title === blog.title && b.id !== blog.id,
  ).slice(0, 3);

  // If not enough related posts by category, just take recent ones excluding current
  if (relatedPosts.length < 3) {
    const morePosts = ALL_BLOG_POSTS.filter(
      (b) => b.id !== blog.id && !relatedPosts.find((r) => r.id === b.id),
    ).slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...morePosts);
  }

  return (
    <div className="flex flex-col items-center pb-20 bg-white">
      <StaggerContainer className="w-full max-w-[1240px] px-6 md:px-0 pt-[140px] pb-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
          {/* Main Content Column */}
          <div className="min-w-0">
            {/* Header */}
            <div className="text-center flex flex-col items-center gap-6 mb-10">
              <FadeInUp>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold uppercase tracking-wider text-[#1B0C25]">
                  <span>{blog.title}</span> {/* Category */}
                  <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                  <span>{blog.date}</span>
                </div>
              </FadeInUp>

              <FadeInUp delay={0.1}>
                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#1B0C25] leading-tight">
                  {blog.description} {/* Title */}
                </h1>
              </FadeInUp>

              {blog.author && (
                <FadeInUp delay={0.2} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                    {blog.author.avatar ? (
                      <Image
                        src={blog.author.avatar}
                        alt={blog.author.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-gray-500 font-bold">
                        {blog.author.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-[#1B0C25]">
                      {blog.author.name}
                    </p>
                    <p className="text-xs text-gray-500">Author</p>
                  </div>
                </FadeInUp>
              )}
            </div>

            {/* Main Image */}
            <ScaleIn
              delay={0.3}
              className="w-full rounded-2xl overflow-hidden shadow-2xl relative aspect-video mb-12"
            >
              <Image
                src={displayImage}
                alt="blog"
                fill
                className="object-cover"
              />
            </ScaleIn>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-[#1B0C25]/80">
              {/* Render HTML content safely */}
              {(blog as any).content ? (
                <div
                  dangerouslySetInnerHTML={{ __html: (blog as any).content }}
                />
              ) : (
                <p>{blog.description}</p>
              )}
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:block">
            <BlogSidebar
              currentPostId={blog.id}
              author={blog.author}
              tags={(blog as any).tags}
              title={blog.description}
            />
          </div>
        </div>
      </StaggerContainer>

      {/* Related Posts */}
      <div className="w-full bg-[#FAFAFA] py-20 flex justify-center">
        <div className="w-full max-w-[1240px] px-6 md:px-0">
          <RelatedPosts posts={relatedPosts} />
        </div>
      </div>
    </div>
  );
}
