import NewsList from "@/components/sections/NewsList";
import TitleSection from "@/components/TitleSection";
import { FadeInUp, StaggerContainer } from "@/lib/motion";
import { Container } from "@/components/ui/container";

export default function NewsPage() {
  return (
    <div className="bg-[#FAFAFA] pt-[120px] pb-[80px]">
      <Container>
        <StaggerContainer className="flex flex-col items-start text-start gap-6 mb-16">
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

        <NewsList />
      </Container>
    </div>
  );
}
