import React from "react";
import TitleSection from "../TitleSection";

export default function About() {
  return (
    <div className="py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
      <div className="relative bg-[#1b0c25] rounded-2xl overflow-hidden">
        {/* Background Elements - Visible seulement sur desktop */}
        <div className="absolute inset-0 z-0">
          {/* Desktop gradients */}
          <div className="hidden lg:block absolute left-[-246px] top-[-186px] rounded-[603px] w-[658px] h-[548px] bg-[linear-gradient(148deg,#80a9fc_0%,#d37bff_31.09%,#fcab83_70.46%,#ff49d4_100%)] blur-[80px] opacity-[0.4]" />
          <div className="hidden lg:block absolute right-[-86px] top-[590px] rounded-[603px] w-[658px] h-[548px] bg-[linear-gradient(145deg,#efe8f6_0%,#d588fb_60.83%,#ff49d4_100%)] blur-[80px] opacity-[0.4]" />

          {/* Mobile/Tablet gradient - plus subtil */}
          <div className="lg:hidden absolute inset-0 bg-[linear-gradient(148deg,#80a9fc_-20%,#d37bff_30%,#fcab83_80%,#ff49d4_120%)] opacity-20" />
        </div>

        {/* Content Container - Padding responsive */}
        <div className="relative z-10 flex flex-col items-center lg:items-start justify-center px-6 sm:px-8 lg:px-16 xl:px-[544px] py-16 sm:py-20 lg:py-32 xl:py-[380px]">
          {/* Text Container */}
          <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-5 lg:gap-[16px] max-w-4xl lg:max-w-none">
            {/* About Badge */}
            <TitleSection title="About" />

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[57px] text-center lg:text-left leading-snug sm:leading-snug md:leading-tight lg:leading-tight xl:leading-[66px] font-medium text-white">
              Fluence AI is crafted to elevate how businesses showcase their AI
              solutions. With a focus on clean design, it helps brands engage
              and convert.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
