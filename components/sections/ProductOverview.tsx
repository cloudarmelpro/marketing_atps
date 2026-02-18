import ProductCard from "../ProductCard";
import TitleSection from "../TitleSection";

export default function ProductOverview() {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-[60px]">
        <div className="flex flex-col items-center gap-[24px]">
          <div className="flex flex-col items-center gap-[12px] w-[800px]">
            <TitleSection
              title="Product Overview"
              className="shadow-[0_33px_13px_0_rgba(0,0,0,0.01),0_19px_11px_0_rgba(0,0,0,0.04),0_8px_8px_0_rgba(0,0,0,0.06),0_2px_5px_0_rgba(0,0,0,0.07)]"
            />
            <p className="text-[58px] px-[40px] font-medium text-center leading-[60px] text-[#1b0c25]">
              Explore the Power of Fluence AI
            </p>
          </div>
          <div className="px-[50px] w-[700px]">
            <p className="text-[17px] text-center leading-[28px] text-[#4c4c4c]">
              Discover how Fluence AI transforms raw data into actionable
              insights. Our advanced features are designed to optimize workflows
            </p>
          </div>
        </div>
        <ProductCard />
      </div>
    </div>
  );
}
