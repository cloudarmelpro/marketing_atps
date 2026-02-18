"use client";
import { useState } from "react";
import TitleSection from "../TitleSection";
import { Button } from "../ui/button";
import { Star, Check } from "lucide-react";

const PLAN_PRICING = [
  {
    id: 1,
    name: "Starter",
    price: "Free",
    description: "Get started with Fluence AI at no cost",
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
    price: "$22",
    description: "Unlock more powerful features",
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
    price: "$69",
    description: "Take your business to the next level",
    features: [
      "Unlimited AI creation",
      "100,000 AI token inputs",
      "Calendar integration & syncing",
      "Guest sharing and links",
    ],
  },
];

export default function Pricing() {
  const [isPro, setIsPro] = useState();
  return (
    <div className="flex flex-row justify-center items-center px-[324px] py-[100px] max-lg:px-4 max-lg:py-12">
      <div className="flex flex-col gap-[24px] w-[1240px] h-[761.5px] max-lg:w-full max-lg:h-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-[40px] w-[1240px] h-[234px] max-lg:w-full max-lg:h-auto max-lg:gap-6">
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
                variant="outline"
                className="flex flex-row items-center justify-center w-[100px] h-[34px] max-lg:w-[90px]"
              >
                Monthly
              </Button>
              <Button
                variant="ghost"
                className="flex flex-row bg-[#EDEBEE] items-center justify-center w-[100px] h-[34px] max-lg:w-[90px]"
              >
                Annual
              </Button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="flex flex-row gap-[24px] w-[1240px] h-[504px] max-lg:grid max-lg:grid-cols-2 max-lg:w-full max-lg:h-auto max-md:grid-cols-1 max-lg:gap-4">
          {PLAN_PRICING.map((item) => (
            <div
              key={item.id}
              className="flex flex-col p-[24px] w-[397px] h-[504px] bg-white shadow-sm rounded-[16px] max-lg:w-full max-lg:h-auto"
            >
              <div className="flex flex-col items-center justify-center w-[349px] h-[456px] gap-[32px] max-lg:w-full max-lg:h-auto">
                {/* Card Header */}
                <div className="flex flex-col items-center justify-center gap-[40px] w-[349px] h-[230px] max-lg:w-full max-lg:h-auto max-lg:gap-6">
                  {/* Name & Description */}
                  <div className="flex flex-col items-start gap-[8px] w-[349px] h-[63px] max-lg:w-full max-lg:h-auto">
                    <div className="flex flex-row items-center gap-[12px] w-[349px] h-[29px] max-lg:w-full">
                      <Star
                        className="text-[#80A9FC]"
                        size={20}
                        fill="#80A9FC"
                      />
                      <span className="text-[24px] leading-[28px] font-medium text-[#1b0c25] max-lg:text-xl">
                        {item.name}
                      </span>
                    </div>
                    <div>
                      <p className="text-[15px] leading-[26px] text-[#1b0c25] font-normal max-lg:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex flex-col items-start gap-[20px] w-[349px] h-[127px] max-lg:w-full max-lg:h-auto max-lg:gap-4">
                    <div>
                      <h1 className="text-[42px] font-medium text-[#1b0c25] leading-[52px] max-lg:text-3xl">
                        {item.price}
                      </h1>
                    </div>
                    <div className="w-full">
                      {isPro ?? (
                        <Button className="w-[349px] h-[50px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)] text-[15px] leading-[26px] text-[#1b0c25] hover:bg-gray-50 max-lg:w-full">
                          Get Started
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="flex flex-col items-start gap-[16px] w-[349px] h-[194px] max-lg:w-full max-lg:h-auto">
                  <h1 className="text-[15px] text-[#1b0c25] leading-[26px] opacity-[0.7] max-lg:text-sm">
                    What's Included
                  </h1>
                  {item.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center flex-row gap-[12px] w-[349px] h-[26px] max-lg:w-full"
                    >
                      <Check
                        className="text-[#1b0c25] flex-shrink-0"
                        size={18}
                      />
                      <p className="text-[15px] text-[#1b0c25] leading-[26px] max-lg:text-sm">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
