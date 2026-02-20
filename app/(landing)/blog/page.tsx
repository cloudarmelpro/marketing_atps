import BlogList from "@/components/sections/BlogList";
import TitleSection from "@/components/TitleSection";
import { Container } from "@/components/ui/container";

export default function BlogPage() {
  return (
    <div className="pt-32 pb-20">
      <Container>
        <div className="flex flex-col items-start text-start mb-16 gap-6">
          <TitleSection
            title="Our Blog"
            className="shadow-[0_33px_13px_0_rgba(0,0,0,0.01),0_19px_11px_0_rgba(0,0,0,0.04),0_8px_8px_0_rgba(0,0,0,0.06),0_2px_5px_0_rgba(0,0,0,0.07)]"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#1b0c25]">
            Latest News & Insights
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Discover the latest trends in EdTech, SaaS, and Security.
          </p>
        </div>

        <BlogList />
      </Container>
    </div>
  );
}
