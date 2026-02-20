"use client";

import { useState } from "react";
import TitleSection from "../TitleSection";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInUpVariants,
  pricingContainerVariants,
  pricingCardVariants,
  viewportSettings,
} from "@/lib/motion";

const PLAN_PRICING = [
  {
    id: 1,
    name: "Starter",
    monthlyPrice: "Free",
    annualPrice: "Free",
    description: "Get started with Fluence AI at no cost",
    popular: false,
    starColor: "#80A9FC",
    features: [
      "400 AI credits at signup",
      "20,000 AI token inputs",
      "Calendar integration & syncing",
      "Guest sharing and links",
    ],
  },
  {
    id: 2,
    name: "Plus",
    monthlyPrice: "$22",
    annualPrice: "$29",
    description: "Unlock more powerful features",
    popular: true,
    starColor: "#F5A623",
    features: [
      "Unlimited AI credits",
      "50,000 AI token inputs",
      "Calendar integration & syncing",
      "Guest sharing and links",
    ],
  },
  {
    id: 3,
    name: "Pro",
    monthlyPrice: "$69",
    annualPrice: "$49",
    description: "Take your business to the next level",
    popular: false,
    starColor: "#C34F96",
    features: [
      "Unlimited AI creation",
      "100,000 AI token inputs",
      "Calendar integration & syncing",
      "Guest sharing and links",
    ],
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div id="pricing" className="py-12 lg:py-[100px]">
      <Container className="flex flex-col gap-[24px]">
          {/* Header Section */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="flex flex-col items-center gap-[40px] w-full max-lg:gap-6"
          >
            {/* Title & Description */}
            <div className="flex flex-col items-center gap-[24px] w-[800px] h-[151px] max-lg:w-full max-lg:px-4 max-lg:h-auto">
              <div className="flex flex-col items-center gap-[12px] w-[800px] h-[100px] max-lg:w-full max-lg:h-auto">
                <TitleSection
                  title="Pricing"
                  className="shadow-[0_33px_13px_0_rgba(0,0,0,0.01),0_19px_11px_0_rgba(0,0,0,0.04),0_8px_8px_0_rgba(0,0,0,0.06),0_2px_5px_0_rgba(0,0,0,0.07)]"
                />
                <h1 className="text-[59px] leading-[60px] font-medium text-[#1b0c25] max-lg:text-4xl max-lg:leading-tight max-lg:text-center max-lg:px-4">
                  Simple, Flexible Pricing
                </h1>
              </div>
              <p className="text-[16px] leading-[28px] text-center font-normal max-lg:text-sm max-lg:px-4">
                Pricing plans for businesses at every stage of growth.
              </p>
            </div>

            {/* Toggle Buttons */}
            <div className="flex flex-col items-start p-[4px] w-[216px] h-[42px] bg-[#EDEBEE] rounded-[8px] max-lg:w-auto">
              <div className="flex flex-row items-center gap-[8px] w-[208px] h-[34px] max-lg:w-auto">
                <Button
                  variant={!isAnnual ? "outline" : "ghost"}
                  onClick={() => setIsAnnual(false)}
                  className={`flex flex-row items-center justify-center w-[100px] h-[34px] max-lg:w-[90px] ${!isAnnual ? "" : "bg-[#EDEBEE]"}`}
                >
                  Monthly
                </Button>
                <Button
                  variant={isAnnual ? "outline" : "ghost"}
                  onClick={() => setIsAnnual(true)}
                  className={`flex flex-row items-center justify-center w-[100px] h-[34px] max-lg:w-[90px] ${isAnnual ? "" : "bg-[#EDEBEE]"}`}
                >
                  Annual
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={pricingContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-3 gap-6 w-full max-lg:grid-cols-2 max-md:grid-cols-1"
          >
            {PLAN_PRICING.map((item) => (
              <motion.div
                key={item.id}
                variants={pricingCardVariants}
                className="flex flex-col p-6 bg-white shadow-sm rounded-[16px]"
              >
                <div className="flex flex-col items-center justify-center gap-8 w-full">
                  <div className="flex flex-col items-center justify-center gap-10 w-full max-lg:gap-6">
                    <div className="flex flex-col items-start gap-2 w-full">
                      <div className="flex flex-row items-center gap-3 w-full">
                        <Star
                          className="shrink-0"
                          style={{ color: item.starColor }}
                          size={20}
                          fill={item.starColor}
                        />
                        <span className="text-[24px] leading-[28px] font-medium text-[#1b0c25] max-lg:text-xl">
                          {item.name}
                        </span>
                        {item.popular && (
                          <span className="px-[10px] py-[2px] bg-[#1b0c25] text-white text-[12px] leading-[18px] font-medium rounded-[4px]">
                            Popular
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="text-[15px] leading-[26px] text-[#1b0c25] font-normal max-lg:text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-5 w-full max-lg:gap-4">
                      <div className="flex items-baseline gap-[4px]">
                        {item.monthlyPrice === "Free" ? (
                          <h1 className="text-[42px] font-medium text-[#1b0c25] leading-[52px] max-lg:text-3xl max-lg:leading-[36px]">
                            Free
                          </h1>
                        ) : (
                          <>
                            <div className="h-[52px] overflow-hidden max-lg:h-[36px]">
                              <div
                                className="flex flex-col transition-transform duration-300 ease-in-out"
                                style={{
                                  transform: isAnnual
                                    ? "translateY(-52px)"
                                    : "translateY(0px)",
                                }}
                              >
                                <h1 className="text-[42px] font-medium text-[#1b0c25] leading-[52px] h-[52px] max-lg:text-3xl max-lg:h-[36px] max-lg:leading-[36px]">
                                  {item.monthlyPrice}
                                </h1>
                                <h1 className="text-[42px] font-medium text-[#1b0c25] leading-[52px] h-[52px] max-lg:text-3xl max-lg:h-[36px] max-lg:leading-[36px]">
                                  {item.annualPrice}
                                </h1>
                              </div>
                            </div>
                            <span className="text-[15px] leading-[26px] text-[#1b0c25] opacity-60">
                              /month, per user
                            </span>
                          </>
                        )}
                      </div>
                      <div className="w-full">
                        {item.popular ? (
                          <Button className="group w-full h-[50px] bg-[#1b0c25] hover:bg-[#1b0c25] text-[15px] leading-[26px] text-white">
                            <span className="flex flex-col items-center h-[26px] overflow-hidden">
                              <span className="block h-[26px] leading-[26px] transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                                Get Started
                              </span>
                              <span className="block h-[26px] leading-[26px] transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                                Get Started
                              </span>
                            </span>
                          </Button>
                        ) : (
                          <Button className="group w-full h-[50px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)] text-[15px] leading-[26px] text-[#1b0c25] hover:bg-white border border-gray-200">
                            <span className="flex flex-col items-center h-[26px] overflow-hidden">
                              <span className="block h-[26px] leading-[26px] transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                                Get Started
                              </span>
                              <span className="block h-[26px] leading-[26px] transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                                Get Started
                              </span>
                            </span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-4 w-full">
                    <h1 className="text-[15px] text-[#1b0c25] leading-[26px] opacity-70 max-lg:text-sm">
                      What's Included
                    </h1>
                    {item.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center flex-row gap-3 w-full"
                      >
                        <span className="text-[#1b0c25] shrink-0 text-sm">
                          ✦
                        </span>
                        <p className="text-[15px] text-[#1b0c25] leading-[26px] max-lg:text-sm">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
      </Container>
    </div>
  );
}
