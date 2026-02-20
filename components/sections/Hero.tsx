"use client";

import React from "react";
import { ButtonDemoBlur } from "../ButtonDemo";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import Image from "next/image";
import { ChevronDown, Globe } from "lucide-react";
import { Input } from "../ui/input";
import { motion } from "framer-motion";
import {
  heroBadgeVariants,
  heroTitleWordVariants,
  heroDescriptionVariants,
  heroButtonVariants,
  heroCardVariants,
} from "@/lib/motion";

export default function Hero() {
  // Split title into words for animation
  const titleWords = ["The", "AI-powered", "Customer", "Service", "Platform"];

  return (
    <div className="w-ful p-4 sm:p-6 lg:p-4">
      <div className="min-h-[800px] lg:h-[1236px] bg-[url('/images/bgHero.png')] rounded-2xl overflow-hidden bg-cover bg-center">
        <div className="flex flex-col gap-8 lg:gap-[60px] px-4 sm:px-6 lg:px-0 pt-16 lg:pt-[160px]">
          <Container className="flex flex-col gap-6 lg:gap-[40px]">
            <div className="flex flex-col gap-4 lg:gap-[24px]">
              <div className="flex flex-col items-start gap-4 lg:gap-[24px]">
                <div className="flex flex-col items-start w-full lg:w-[940px] gap-3 lg:gap-[12px]">
                  {/* Badge */}
                  <motion.div
                    variants={heroBadgeVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-[180px] sm:w-[202px] h-6 sm:h-7 lg:h-[28px] flex items-center justify-center rounded-full backdrop-blur-[6px] bg-white/20 shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_4px_4px_rgba(255,255,255,0.3)]"
                  >
                    <p className="uppercase text-[11px] sm:text-[13px] leading-[14px] sm:leading-[16px] text-[#1b0c25] font-medium truncate">
                      business & solution
                    </p>
                  </motion.div>

                  {/* Title */}
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl lg:text-[76px] leading-tight lg:leading-[76px] text-[#1b0c25] font-medium"
                  >
                    {titleWords.map((word, index) => (
                      <motion.span
                        key={index}
                        variants={heroTitleWordVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                          duration: 0.8,
                          delay: 0.3 + index * 0.1,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="inline-block mr-[0.3em]"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.h1>
                </div>

                {/* Description */}
                <motion.div
                  variants={heroDescriptionVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-full lg:w-[700px]"
                >
                  <p className="text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[28px] font-normal text-[#1b0c25]">
                    Fluence AI helps you connect, manage, and optimize your AI
                    tools effortlessly. Unlock powerful insights and automate
                    complex processes with ease.
                  </p>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.div
                variants={heroButtonVariants}
                initial="hidden"
                animate="visible"
              >
                <ButtonDemoBlur />
              </motion.div>
            </div>
          </Container>

          <Container>
            <motion.div
              variants={heroCardVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center w-full min-h-[500px] lg:h-[654px] border border-white relative rounded-tl-[20px] sm:rounded-tl-[30px] lg:rounded-tl-[40px] rounded-tr-[20px] sm:rounded-tr-[30px] lg:rounded-tr-[40px] backdrop-blur-[10px] bg-[linear-gradient(180deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.6)_100%)]"
            >
              {/* Decorative Elements - Hidden on mobile/tablet */}
              <motion.div
                className="hidden lg:block absolute w-[209px] h-[210px] bg-[url('/images/scare1.png')] top-[37.98px] right-[79px]"
                animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="hidden lg:block absolute w-[159px] h-[138px] bg-[url('/images/scare2.png')] top-[311.98px] left-[135px]"
                animate={{ y: [0, 6, 0], x: [0, -4, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              {/* Content Container */}
              <div className="relative z-10 w-full lg:w-[1140px] h-full lg:h-[652px] px-4 sm:px-6 lg:px-[50px] flex items-center justify-center">
                {/* Background Pattern - Adjusted for mobile */}
                <motion.div
                  className="absolute inset-0 w-full h-full bg-[url('/images/bgCha.png')] bottom-0 bg-cover bg-center opacity-50 lg:opacity-100"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

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
                          <Button className="group text-[#1b0c26] text-[11px] sm:text-[12px] leading-[14px] font-medium px-3 sm:px-4 py-1.5 sm:py-2 h-auto sm:h-[30px] rounded-[83px] bg-white hover:bg-white shadow-sm border border-[#f3e9fa] whitespace-nowrap">
                            <span className="flex flex-col items-center h-[14px] overflow-hidden">
                              <span className="block h-[14px] leading-[14px] transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                                Create Workflow
                              </span>
                              <span className="block h-[14px] leading-[14px] transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                                Create Workflow
                              </span>
                            </span>
                          </Button>
                          <Button className="group text-[#1b0c26] text-[11px] sm:text-[12px] leading-[14px] font-medium px-3 sm:px-4 py-1.5 sm:py-2 h-auto sm:h-[30px] rounded-[83px] bg-white hover:bg-white shadow-sm border border-[#f3e9fa] whitespace-nowrap">
                            <span className="flex flex-col items-center h-[14px] overflow-hidden">
                              <span className="block h-[14px] leading-[14px] transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                                Setup Bot
                              </span>
                              <span className="block h-[14px] leading-[14px] transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                                Setup Bot
                              </span>
                            </span>
                          </Button>
                          <Button className="group text-[#1b0c26] text-[11px] sm:text-[12px] leading-[14px] font-medium px-3 sm:px-4 py-1.5 sm:py-2 h-auto sm:h-[30px] rounded-[83px] bg-white hover:bg-white shadow-sm border border-[#f3e9fa] whitespace-nowrap">
                            <span className="flex flex-col items-center h-[14px] overflow-hidden">
                              <span className="block h-[14px] leading-[14px] transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                                Schedule Message
                              </span>
                              <span className="block h-[14px] leading-[14px] transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                                Schedule Message
                              </span>
                            </span>
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
            </motion.div>
          </Container>
        </div>
      </div>
    </div>
  );
}
