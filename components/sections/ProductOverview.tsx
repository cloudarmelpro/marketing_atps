// ProductOverview.tsx
import ProductCard from "../ProductCard";
import TitleSection from "../TitleSection";

export default function ProductOverview() {
  return (
    <div className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-[60px] max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-[24px] w-full">
          {/* Title with badge */}
          <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-[12px] w-full lg:w-[800px] px-4 lg:px-0">
            <TitleSection
              title="Product Overview"
              className="shadow-[0_33px_13px_0_rgba(0,0,0,0.01),0_19px_11px_0_rgba(0,0,0,0.04),0_8px_8px_0_rgba(0,0,0,0.06),0_2px_5px_0_rgba(0,0,0,0.07)]"
            />
            <p className="text-3xl sm:text-4xl lg:text-[58px] px-4 sm:px-6 lg:px-[40px] font-medium text-center leading-tight lg:leading-[60px] text-[#1b0c25]">
              Explore the Power of Fluence AI
            </p>
          </div>

          {/* Description */}
          <div className="px-4 sm:px-6 lg:px-[50px] w-full lg:w-[700px]">
            <p className="text-sm sm:text-base lg:text-[17px] text-center leading-relaxed lg:leading-[28px] text-[#4c4c4c]">
              Discover how Fluence AI transforms raw data into actionable
              insights. Our advanced features are designed to optimize workflows
            </p>
          </div>
        </div>

        {/* Product Cards */}
        <ProductCard />
      </div>
    </div>
  );
}
