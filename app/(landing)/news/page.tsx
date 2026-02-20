import NewsList from "@/components/sections/NewsList";
import TitleSection from "@/components/TitleSection";
import { FadeInUp, StaggerContainer } from "@/lib/motion";

export default function NewsPage() {
  return (
    <div className="flex flex-col items-center bg-[#FAFAFA] pt-[120px] pb-[80px]">
      <StaggerContainer className="flex flex-col items-center text-center gap-6 mb-16 px-4">
        <FadeInUp>
          <TitleSection title="LATEST UPDATES" />
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B0C25] tracking-tight">
            News & Insights
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.2} className="max-w-2xl">
          <p className="text-lg text-gray-600 leading-relaxed">
            Stay informed with the latest trends in EdTech, security, and online
            learning. Discover how we are shaping the future of education.
          </p>
        </FadeInUp>
      </StaggerContainer>

      <div className="w-full max-w-[1240px] px-4 md:px-0">
        <NewsList />
      </div>
    </div>
  );
}
