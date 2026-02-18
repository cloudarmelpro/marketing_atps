// BlogSection.tsx
import Link from "next/link";
import TitleSection from "../TitleSection";
import { Button } from "../ui/button";
import BlogCard from "../BlogCard";

export default function BlogSection() {
  return (
    <section className="py-16 max-lg:py-12 max-md:py-8">
      <div className="flex flex-col mb-[40px] px-[324px] max-lg:px-4 max-md:px-4">
        <div className="flex flex-col gap-[40px] max-lg:gap-6 max-md:gap-4">
          {/* Header avec flex column sur mobile */}
          <div className="flex items-end justify-between max-lg:flex-col max-lg:items-start max-lg:gap-4">
            {/* Titre */}
            <div className="flex flex-col items-start gap-[12px] max-lg:w-full">
              <TitleSection
                title="Blog"
                className="shadow-[0_33px_13px_0_rgba(0,0,0,0.01),0_19px_11px_0_rgba(0,0,0,0.04),0_8px_8px_0_rgba(0,0,0,0.06),0_2px_5px_0_rgba(0,0,0,0.07)]"
              />
              <div className="w-[620px] max-lg:w-full">
                <p className="text-[58px] leading-[60px] font-medium max-lg:text-4xl max-lg:leading-tight">
                  Explore Our Blog And Stay Updated
                </p>
              </div>
            </div>

            {/* Bouton */}
            <div>
              <Link href="/blog">
                <Button
                  variant="outline"
                  className="w-[140px] h-[50px] text-[15px] leading-[26px] font-medium rounded-[8px] max-lg:w-[120px] max-lg:h-10"
                >
                  Explore All
                </Button>
              </Link>
            </div>
          </div>

          {/* Cartes blog */}
          <div>
            <BlogCard />
          </div>
        </div>
      </div>
    </section>
  );
}
