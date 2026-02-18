import React from "react";
import TitleSection from "../TitleSection";

export default function About() {
  return (
    <div className="py-10 px-[16px]">
      <div className="relative bg-[#1b0c25] rounded-[16px] py-[380px] px-[544px] overflow-hidden">
        <div className="absolute z-[-1px] left-[-246px] top-[-186px] rounded-[603px] w-[658px] h-[548px] bg-[linear-gradient(148deg,#80a9fc_0%,#d37bff_31.09%,#fcab83_70.46%,#ff49d4_100%)] blur-[80px] opacity-[0.4]" />
        <div className="absolute z-[-1px] right-[-86px] top-[590px] rounded-[603px] w-[658px] h-[548px] bg-[linear-gradient(145deg,#efe8f6_0%,#d588fb_60.83%,#ff49d4_100%)] blur-[80px] opacity-[0.4]" />
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <TitleSection title="About" />
          <p className="text-[57px] leading-[66px] font-medium text-white">
            Fluence AI is crafted to elevate how businesses showcase their AI
            solutions. With a focus on clean design, it helps brands engage and
            convert.
          </p>
        </div>
      </div>
    </div>
  );
}
