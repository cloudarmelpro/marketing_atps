"use client";

import Image from "next/image";
import TitleSection from "../TitleSection";
import { Container } from "../ui/container";
import { motion } from "framer-motion";
import {
  fadeInUpVariants,
  bentoContainerVariants,
  bentoCardVariants,
  viewportSettings,
} from "@/lib/motion";

export default function Bento() {
  return (
    <div id="bento">
      <div className="w-full min-h-[1664px] py-12 lg:py-[200px] flex items-center justify-center">
        <Container>
          <motion.div
            variants={bentoContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="flex flex-col items-center gap-8 lg:gap-[60px]"
          >
            {/* Header Section */}
            <motion.div
              variants={fadeInUpVariants}
              className="flex items-center flex-col gap-4 lg:gap-[24px] w-full lg:w-[800px]"
            >
              <div className="flex items-center flex-col gap-3 lg:gap-[12px] w-full">
                <TitleSection
                  title="business & solution"
                  className="shadow-[0_33px_13px_0_rgba(0,0,0,0.01),0_19px_11px_0_rgba(0,0,0,0.04),0_8px_8px_0_rgba(0,0,0,0.06),0_2px_5px_0_rgba(0,0,0,0.07)]"
                />
                <div className="w-full px-4 lg:px-0">
                  <h1 className="text-3xl sm:text-4xl lg:text-[57px] font-medium leading-tight lg:leading-[60px] text-center text-[#1b0c25]">
                    The AI-powered customer service platform
                  </h1>
                </div>
              </div>
              <div className="w-full lg:w-[700px] px-4 lg:px-0">
                <p className="text-sm sm:text-base lg:text-[17px] font-normal text-center text-[#1b0c25] leading-relaxed lg:leading-[28px]">
                  Fluence AI helps you connect, manage, and optimize your AI
                  tools effortlessly. Unlock powerful insights and automate
                  complex processes with ease.
                </p>
              </div>
            </motion.div>

            {/* Bento Grid */}
            <motion.div
              variants={bentoContainerVariants}
              className="flex flex-col gap-4 lg:gap-[24px] w-full"
            >
              {/* First Row */}
              <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-[24px] justify-center w-full">
                {/* Card 1 - Adaptive Learning */}
                <motion.div
                  variants={bentoCardVariants}
                  className="flex flex-col items-center gap-4 lg:gap-[30px] p-2 sm:p-4 lg:p-[8px] w-full lg:w-[496.81px] bg-white shadow-sm rounded-2xl"
                >
                  <div className="w-full aspect-480/354 rounded-xl overflow-hidden">
                    <Image
                      src="/images/imageAd.png"
                      alt="Adaptive Learning"
                      width={480}
                      height={354}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-3 lg:gap-[19px] px-4 sm:px-6 lg:px-[22px] pb-4 sm:pb-6 lg:pb-[22px]">
                    <h1 className="text-lg sm:text-xl lg:text-[22px] leading-snug lg:leading-[28px] font-medium text-[#1b0c25]">
                      Adaptive Learning
                    </h1>
                    <p className="text-sm sm:text-base lg:text-[15px] leading-relaxed lg:leading-[26px] font-normal text-[#1b0c25]">
                      AI that evolves with your data, continuously improving
                      performance and adapting to new patterns
                    </p>
                  </div>
                </motion.div>

                {/* Card 2 - Smart Automation */}
                <motion.div
                  variants={bentoCardVariants}
                  className="flex flex-col items-center gap-4 lg:gap-[30px] p-2 sm:p-4 lg:p-[8px] w-full lg:w-[719px] bg-white shadow-sm rounded-2xl"
                >
                  <div className="w-full aspect-703/353 rounded-xl overflow-hidden">
                    <Image
                      src="/images/imageSm.png"
                      alt="Smart Automation"
                      width={703}
                      height={353}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-3 lg:gap-[19px] px-4 sm:px-6 lg:px-[22px] pb-4 sm:pb-6 lg:pb-[22px]">
                    <h1 className="text-lg sm:text-xl lg:text-[22px] leading-snug lg:leading-[28px] font-medium text-[#1b0c25]">
                      Smart Automation
                    </h1>
                    <p className="text-sm sm:text-base lg:text-[15px] leading-relaxed lg:leading-[26px] font-normal text-[#1b0c25]">
                      Empowering you with AI-driven workflows designed to
                      simplify operations, enhance productivity
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Second Row */}
              <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-[24px] justify-center w-full">
                {/* Card 3 - Data Mapping */}
                <motion.div
                  variants={bentoCardVariants}
                  className="flex flex-col items-center gap-4 lg:gap-[30px] p-2 sm:p-4 lg:p-[8px] w-full lg:w-[806px] bg-white shadow-sm rounded-2xl"
                >
                  <div className="w-full aspect-790/353 rounded-xl overflow-hidden">
                    <Image
                      src="/images/imageData.png"
                      alt="Data Mapping"
                      width={790}
                      height={353}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-3 lg:gap-[19px] px-4 sm:px-6 lg:px-[22px] pb-4 sm:pb-6 lg:pb-[22px]">
                    <h1 className="text-lg sm:text-xl lg:text-[22px] leading-snug lg:leading-[28px] font-medium text-[#1b0c25]">
                      Data Mapping
                    </h1>
                    <p className="text-sm sm:text-base lg:text-[15px] leading-relaxed lg:leading-[26px] font-normal text-[#1b0c25]">
                      Visualize and organize complex datasets effortlessly,
                      making data connections clearer for faster, informed
                      decisions
                    </p>
                  </div>
                </motion.div>

                {/* Card 4 - Predictive Analytics */}
                <motion.div
                  variants={bentoCardVariants}
                  className="flex flex-col items-center gap-4 lg:gap-[30px] p-2 sm:p-4 lg:p-[8px] w-full lg:w-[410px] bg-white shadow-sm rounded-2xl"
                >
                  <div className="w-full aspect-394/355 rounded-xl overflow-hidden">
                    <Image
                      src="/images/imagePred.png"
                      alt="Predictive Analytics"
                      width={394}
                      height={355}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-3 lg:gap-[19px] px-4 sm:px-6 lg:px-[22px] pb-4 sm:pb-6 lg:pb-[22px]">
                    <h1 className="text-lg sm:text-xl lg:text-[22px] leading-snug lg:leading-[28px] font-medium text-[#1b0c25]">
                      Predictive Analytics
                    </h1>
                    <p className="text-sm sm:text-base lg:text-[15px] leading-relaxed lg:leading-[26px] font-normal text-[#1b0c25]">
                      Harness advanced models to forecast trends, uncover
                      insights
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </div>
  );
}
