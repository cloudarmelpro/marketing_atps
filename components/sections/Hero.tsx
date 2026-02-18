import React from "react";
import { ButtonDemoBlur } from "../ButtonDemo";
import { Button } from "../ui/button";
import Image from "next/image";
import { ChevronDown, Globe } from "lucide-react";
import { Input } from "../ui/input";

export default function Hero() {
  return (
    <div className="w-full p-4 sm:p-6 lg:p-4">
      <div className="min-h-[800px] lg:h-[1236px] bg-[url('/images/bgHero.png')] rounded-2xl overflow-hidden bg-cover bg-center">
        <div className="flex flex-col gap-8 lg:gap-[60px] py-12 lg:py-[160px] px-4 sm:px-8 lg:px-[324px]">
          {/* Hero Content */}
          <div className="flex flex-col gap-6 lg:gap-[40px] w-full lg:w-[1240px] mx-auto">
            <div className="flex flex-col gap-4 lg:gap-[24px]">
              <div className="flex flex-col items-start gap-4 lg:gap-[24px]">
                <div className="flex flex-col items-start w-full lg:w-[940px] gap-3 lg:gap-[12px]">
                  {/* Badge */}
                  <div className="w-[180px] sm:w-[202px] h-6 sm:h-7 lg:h-[28px] flex items-center justify-center rounded-full backdrop-blur-[6px] bg-white/20 shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_4px_4px_rgba(255,255,255,0.3)]">
                    <p className="uppercase text-[11px] sm:text-[13px] leading-[14px] sm:leading-[16px] text-[#1b0c25] ml-6 sm:ml-9 lg:ml-[36px] font-medium truncate px-2">
                      business & solution
                    </p>
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl sm:text-5xl lg:text-[76px] leading-tight lg:leading-[76px] text-[#1b0c25] font-medium">
                    The AI-powered Customer Service Platform
                  </h1>
                </div>

                {/* Description */}
                <div className="w-full lg:w-[700px]">
                  <p className="text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[28px] font-normal text-[#1b0c25]">
                    Fluence AI helps you connect, manage, and optimize your AI
                    tools effortlessly. Unlock powerful insights and automate
                    complex processes with ease.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <ButtonDemoBlur />
              </div>
            </div>
          </div>

          {/* Hero Card */}
          <div className="flex items-center justify-center w-full lg:w-[1240px] mx-auto min-h-[500px] lg:h-[654px] border border-white relative rounded-tl-[20px] sm:rounded-tl-[30px] lg:rounded-tl-[40px] rounded-tr-[20px] sm:rounded-tr-[30px] lg:rounded-tr-[40px] backdrop-blur-[10px] bg-[linear-gradient(180deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.6)_100%)]">
            {/* Decorative Elements - Hidden on mobile/tablet */}
            <div className="hidden lg:block absolute w-[209px] h-[210px] bg-[url('/images/scare1.png')] top-[37.98px] right-[79px]" />
            <div className="hidden lg:block absolute w-[159px] h-[138px] bg-[url('/images/scare2.png')] top-[311.98px] left-[135px]" />

            {/* Content Container */}
            <div className="relative w-full lg:w-[1140px] h-full lg:h-[652px] px-4 sm:px-6 lg:px-[50px] flex items-center justify-center">
              {/* Background Pattern - Adjusted for mobile */}
              <div className="absolute inset-0 w-full h-full bg-[url('/images/bgCha.png')] bottom-0 bg-cover bg-center opacity-50 lg:opacity-100" />

              {/* Main Content */}
              <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 lg:gap-[30px] px-4 sm:px-8 lg:px-[300px] w-full">
                {/* Top Empty Card */}
                <div className="w-full sm:w-[540px] lg:w-[640px] h-[200px] sm:h-[250px] lg:h-[310px] rounded-2xl p-3 sm:p-4 lg:p-[14px] backdrop-blur-[10px] bg-white/30 border border-white" />

                {/* Bottom Form Card */}
                <div className="w-full sm:w-[540px] lg:w-[640px] px-3 sm:px-4 lg:px-[14px] py-3 sm:py-4 lg:py-[14px] flex flex-col gap-3 sm:gap-4 lg:gap-[14px] border border-white rounded-xl lg:rounded-[13px] backdrop-blur-[25px] bg-white/80 shadow-[0_0_30px_rgba(195,79,150,0.3)]">
                  {/* Button Group */}
                  <div className="flex flex-wrap gap-2 sm:gap-[8px]">
                    <Button className="text-[11px] sm:text-[12px] font-medium leading-[14px] rounded-[19px] px-3 sm:px-4 py-2 h-auto sm:h-[34px] bg-white backdrop-blur-[6px] border border-[#f2e8fa] text-[#1b0c26] hover:bg-transparent">
                      <Image
                        src="/assets/icons/gptIcon.png"
                        alt="Hero Button"
                        height={16}
                        width={16}
                        className="mr-1"
                      />
                      GPT 4.5
                      <ChevronDown className="ml-1 text-[#1b0c27] h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>

                    <Button className="text-[11px] sm:text-[12px] font-medium leading-[14px] rounded-[19px] px-3 sm:px-4 py-2 h-auto sm:h-[34px] bg-white backdrop-blur-[6px] border border-[#f2e8fa] text-[#1b0c26] hover:bg-transparent">
                      <Globe className="mr-1 h-3 w-3 sm:h-4 sm:w-4" /> Search
                    </Button>
                  </div>

                  {/* Form */}
                  <form className="w-full max-w-[612px] flex flex-col gap-3 sm:gap-4">
                    <Input
                      placeholder="Ask anything ..."
                      className="w-full border-none bg-transparent shadow-none text-sm sm:text-base lg:text-[16px] placeholder:text-sm sm:placeholder:text-base lg:placeholder:text-[16px] placeholder:text-[#1b0c25]/70"
                    />

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-3 sm:gap-4">
                      <div className="flex flex-wrap gap-2 sm:gap-[8px] items-center">
                        <Button className="text-[#1b0c26] text-[11px] sm:text-[12px] leading-[14px] font-medium px-3 sm:px-4 py-1.5 sm:py-2 h-auto sm:h-[30px] rounded-[83px] bg-white shadow-sm border border-[#f3e9fa] whitespace-nowrap">
                          Create Workflow
                        </Button>
                        <Button className="text-[#1b0c26] text-[11px] sm:text-[12px] leading-[14px] font-medium px-3 sm:px-4 py-1.5 sm:py-2 h-auto sm:h-[30px] rounded-[83px] bg-white shadow-sm border border-[#f3e9fa] whitespace-nowrap">
                          Setup Bot
                        </Button>
                        <Button className="text-[#1b0c26] text-[11px] sm:text-[12px] leading-[14px] font-medium px-3 sm:px-4 py-1.5 sm:py-2 h-auto sm:h-[30px] rounded-[83px] bg-white shadow-sm border border-[#f3e9fa] whitespace-nowrap">
                          Schedule Message
                        </Button>
                      </div>

                      {/* Submit Button */}
                      <div className="self-end sm:self-auto">
                        <Button className="bg-transparent hover:bg-transparent p-0">
                          <Image
                            src="/images/buttonS.png"
                            alt="Button S"
                            width={28}
                            height={28}
                            className="sm:w-8 sm:h-8"
                          />
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
