import React from "react";
import { ButtonDemoBlur } from "../ButtonDemo";
import { Button } from "../ui/button";
import Image from "next/image";
import { ChevronDown, Globe } from "lucide-react";
import { Input } from "../ui/input";

export default function Hero() {
  return (
    <div className="w-full p-[16px]">
      <div className="h-[1236px] bg-[url('/images/bgHero.png')] rounded-[16px] overflow-hidden">
        <div className="flex flex-col gap-[60px] py-[160px] px-[324px]">
          <div className="flex flex-col gap-[40px] w-[1240px]">
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col items-start gap-[24px]">
                <div className="flex flex-col items-start w-[940px] gap-[12px]">
                  <div className="w-[202px] h-[28px] flex items-center justify-center rounded-full backdrop-blur-[6px] bg-white/20 shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_4px_4px_rgba(255,255,255,0.3)]">
                    <p className="uppercase text-[13px] leading-[16px] text-[#1b0c25] ml-[36px] font-medium">
                      business & solution
                    </p>
                  </div>
                  <h1 className="text-[76px] leading-[76px] text-[#1b0c25] font-medium">
                    The AI-powered Customer Service Platform
                  </h1>
                </div>
                <div>
                  <p className="text-[18px] leading-[28px] font-normal w-[700px] text-[#1b0c25]">
                    Fluence AI helps you connect, manage, and optimize your AI
                    tools effortlessly. Unlock powerful insights and automate
                    complex processes with ease.
                  </p>
                </div>
              </div>
              <div>
                <ButtonDemoBlur />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[1240px] h-[654px] border-white border relative rounded-tl-[40px] rounded-tr-[40px] backdrop-blur-[10px] bg-[linear-gradient(180deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.6)_100%)]">
            <div className="absolute w-[209px] h-[210px] bg-[url('/images/scare1.png')] top-[37.98px] right-[79px]" />
            <div className="absolute w-[159px] h-[138px] bg-[url('/images/scare2.png')] top-[311.98px] left-[135px]" />
            <div className="relative w-[1140px] h-[652px] px-[50px] flex items-center justify-center">
              <div className="z-0 absolute w-[1140px] h-[652px] bg-[url('/images/bgCha.png')]" />
              <div className="z-100 flex flex-col items-center gap-[30px] px-[300px]">
                <div className="w-[640px] h-[310px] rounded-[16px] p-[14px] backdrop-blur-[10px] bg-white/30 border border-white"></div>
                <div className="flex px-[14px] py-[14px] flex-col gap-[14px] border border-white rounded-[13px] w-[640px] h-[194px] backdrop-blur-[25px] bg-white/80 shadow-[0_0_30px_rgba(195,79,150,0.3)]">
                  <div className="flex gap-[8px]">
                    <Button className="text-[12px] font-medium leading-[14px] rounded-[19px] w-[125px] h-[34px] bg-white backdrop-blur-[6px] border border-[#f2e8fa] text-[#1b0c26] hover:bg-transparent">
                      <Image
                        src="/assets/icons/gptIcon.png"
                        alt="Hero Button"
                        height={18}
                        width={18}
                      />
                      GPT 4.5
                      <ChevronDown className="text-[#1b0c27] " />
                    </Button>
                    <Button className="text-[12px] font-medium leading-[14px] rounded-[19px] w-[79px] h-[34px] bg-white backdrop-blur-[6px] border border-[#f2e8fa] text-[#1b0c26] hover:bg-transparent">
                      <Globe /> Search
                    </Button>
                  </div>
                  <form className="w-[612px] h-[118px] flex flex-col justify-between">
                    <Input
                      placeholder="Ask anything ..."
                      className="w-[612px] h-[20px] border-none bg-transparent shadow-none text-[16px] placeholder:text-[16px] placeholder:text-[#1b0c25]/70]"
                    />
                    <div className="flex items-center justify-between w-[612px] h-[32px]">
                      <div className="flex gap-[8px] items-center">
                        <Button className="text-[#1b0c26] text-[12px] leading-[14px] font-medium w-[134px] h-[30px] rounded-[83px] bg-white shadow-sm border border-[#f3e9fa]">
                          Create Workflow
                        </Button>
                        <Button className="text-[#1b0c26] text-[12px] leading-[14px] font-medium w-[94px] h-[30px] rounded-[83px] bg-white shadow-sm border border-[#f3e9fa]">
                          Setup Bot
                        </Button>
                        <Button className="text-[#1b0c26] text-[12px] leading-[14px] font-medium w-[147px] h-[30px] rounded-[83px] bg-white shadow-sm border border-[#f3e9fa]">
                          Schedule Message
                        </Button>
                      </div>
                      <div>
                        <Button className="bg-transparent hover:bg-transparent">
                          <Image
                            src="/images/buttonS.png"
                            alt="Button S"
                            width={32}
                            height={32}
                          />
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
