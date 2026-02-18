import React from "react";
import TitleSection from "../TitleSection";
import BenefistCard from "../BenefistCard";

export default function KeyBenfist() {
  return (
    <div className="px-[16px]">
      <div className="px-[324px] py-[200px]">
        <div className="flex items-center flex-col gap-[60px]">
          <div className="flex flex-col items-center gap-[24px] px-[220px]">
            <div className="flex flex-col items-center gap-[12px]">
              <TitleSection
                title="Key Benefits"
                className="shadow-[0_33px_13px_0_rgba(0,0,0,0.01),0_19px_11px_0_rgba(0,0,0,0.04),0_8px_8px_0_rgba(0,0,0,0.06),0_2px_5px_0_rgba(0,0,0,0.07)]"
              />
              <p className="text-[56px] leading-[60px] text-center font-medium text-[#1b0c25]">
                Why Choose Fluence AI
              </p>
            </div>
            <div>
              <p className="text-[17px] leading-[28px] text-center text-[#1b0c25]">
                Fluence AI offers powerful benefits that help you save time,
                improve decision-making, and scale your data operations
                effortlessly.
              </p>
            </div>
          </div>
          <div>
            <BenefistCard />
          </div>
        </div>
      </div>
    </div>
  );
}
