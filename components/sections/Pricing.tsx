"use client";
import { useState } from "react";
import TitleSection from "../TitleSection";
import { Button } from "../ui/button";

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
    <div className="flex flex-row justify-center items-center px-[324px] py-[100px]">
      <div className="flex flex-col gap-[24px] w-[1240px] h-[761.5px]">
        <div className="flex flex-col items-center gap-[40px] w-[1240px] h-[234px]">
          <div className="flex flex-col items-center gap-[24px] w-[800px] h-[151px]">
            <div className="flex flex-col items-center gap-[12px] w-[800px] h-[100px]">
              <TitleSection
                title="Pricing"
                className="shadow-[0_33px_13px_0_rgba(0,0,0,0.01),0_19px_11px_0_rgba(0,0,0,0.04),0_8px_8px_0_rgba(0,0,0,0.06),0_2px_5px_0_rgba(0,0,0,0.07)]"
              />
              <h1 className="text-[59px] leading-[60px] font-medium text-[#1b0c25]">
                Simple, Flexible Pricing
              </h1>
            </div>
            <p className="text-[16px] leading-[28px] text-center font-normal">
              Pricing plans for businesses at every stage of growth.
            </p>
          </div>
          <div className="flex flex-col items-start p-[4px] w-[216px] h-[42px] bg-[#EDEBEE] rounded-[8px]">
            <div className="flex flex-row items-center gap-[8px] w-[208px] h-[34px]">
              <Button
                variant="outline"
                className="flex flex-row items-center justify-center w-[100px] h-[34px]"
              >
                Monthly
              </Button>
              <Button
                variant="ghost"
                className="flex flex-row bg-[#EDEBEE] items-center justify-center w-[100px] h-[34px]"
              >
                Annual
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-[24px] w-[1240px] h-[504px]">
          {PLAN_PRICING.map((item) => (
            <div
              key={item.id}
              className="flex flex-col p-[24px] w-[397px] h-[504px] bg-white shadow-sm rounded-[16px]"
            >
              <div className="flex flex-col items-center justify-center w-[349px] h-[456px] gap-[32px] ">
                <div className="flex flex-col items-center justify-center gap-[40px] w-[349px] h-[230px]">
                  <div className="flex flex-col items-start gap-[8px] w-[349px] h-[63px]">
                    <div className="flex flex-row items-center gap-[12px] w-[349px] h-[29px]">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.72511 0.377253C9.85211 -0.125751 10.5681 -0.125751 10.6951 0.377253L12.0521 5.74925C12.07 5.82016 12.1033 5.88628 12.1495 5.94294C12.1958 5.99961 12.2539 6.04543 12.3198 6.07719C12.3857 6.10894 12.4577 6.12585 12.5309 6.12672C12.604 6.1276 12.6765 6.11242 12.7431 6.08225L17.7901 3.79425C18.2631 3.58025 18.7091 4.13925 18.3941 4.55225L15.0411 8.96328C14.9968 9.02148 14.9658 9.08868 14.9503 9.16018C14.9348 9.23158 14.9351 9.30568 14.9513 9.37698C14.9675 9.44828 14.9992 9.51518 15.0441 9.57298C15.089 9.63068 15.146 9.67788 15.2111 9.71128L20.1471 12.2303C20.6091 12.4663 20.4501 13.1633 19.9311 13.1753L14.3911 13.3033C14.318 13.305 14.2461 13.3228 14.1806 13.3553C14.1151 13.3878 14.0575 13.4344 14.0119 13.4916C13.9663 13.5488 13.9338 13.6153 13.9168 13.6864C13.8997 13.7576 13.8984 13.8316 13.9131 13.9033L15.0211 19.3323C15.1251 19.8403 14.4811 20.1513 14.1481 19.7523L10.5941 15.5023C10.5472 15.446 10.4884 15.4007 10.4221 15.3697C10.3557 15.3386 10.2834 15.3225 10.2101 15.3225C10.1368 15.3225 10.0644 15.3386 9.99811 15.3697C9.93171 15.4007 9.873 15.446 9.82611 15.5023L6.2731 19.7523C5.94009 20.1513 5.29509 19.8403 5.3991 19.3323L6.50709 13.9023C6.5216 13.8306 6.52018 13.7566 6.50299 13.6855C6.48577 13.6144 6.4532 13.548 6.40752 13.4909C6.36185 13.4338 6.30419 13.3874 6.23864 13.3549C6.17308 13.3225 6.10121 13.3049 6.0281 13.3033L0.489095 13.1753C-0.0299059 13.1633 -0.188906 12.4653 0.273095 12.2303L5.21009 9.70928C5.27505 9.67588 5.33193 9.62868 5.3767 9.57108C5.42147 9.51338 5.45307 9.44658 5.46927 9.37538C5.48549 9.30418 5.4859 9.23028 5.47049 9.15888C5.45508 9.08758 5.42422 9.02038 5.3801 8.96228L2.0271 4.55225C1.7121 4.13825 2.1581 3.57925 2.6311 3.79325L7.67809 6.08125C7.74467 6.11124 7.81703 6.12628 7.89005 6.12531C7.96307 6.12435 8.03498 6.1074 8.10075 6.07566C8.16651 6.04392 8.22453 5.99816 8.27073 5.94159C8.31692 5.88503 8.35015 5.81903 8.3681 5.74825L9.72511 0.377253Z"
                          fill="#80A9FC"
                        />
                      </svg>
                      <span className="text-[24px] leading-[28px] font-medium text-[#1b0c25]">
                        {item.name}
                      </span>
                    </div>
                    <div>
                      <p className="text-[15px] leading-[26px] text-[#1b0c25] font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[20px] w-[349px] h-[127px]">
                    <div>
                      <h1 className="text-[42px] font-medium text-[#1b0c25] leading-[52px]">
                        {item.price}
                      </h1>
                    </div>
                    <div>
                      {isPro ?? (
                        <Button className="w-[349px] h-[50px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)] text-[15px] leading-[26px] text-[#1b0c25]">
                          Get Started
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[16px] w-[349px] h-[194px]">
                  <h1 className="text-[15px] text-[#1b0c25] leading-[26px] opacity-[0.7]">
                    What's Included
                  </h1>
                  {item.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center flex-row gap-[12px] w-[349px] h-[26px]"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.4947 8.74474C17.4967 9.00104 17.4187 9.25164 17.2717 9.46164C17.1247 9.67174 16.9159 9.83074 16.6744 9.91654L11.7181 11.7189L9.91663 16.6744C9.82783 16.9136 9.66793 17.1199 9.45843 17.2656C9.24893 17.4113 8.99983 17.4894 8.74473 17.4894C8.48954 17.4894 8.24048 17.4113 8.03099 17.2656C7.82151 17.1199 7.66163 16.9136 7.57283 16.6744L5.77127 11.7181L0.81502 9.91654C0.5758 9.82774 0.36948 9.66794 0.22379 9.45844C0.0780899 9.24894 0 8.99984 0 8.74474C0 8.48954 0.0780899 8.24048 0.22379 8.03099C0.36948 7.82151 0.5758 7.66163 0.81502 7.57283L5.77127 5.77127L7.57283 0.81502C7.66163 0.5758 7.82151 0.36948 8.03099 0.22379C8.24048 0.0780901 8.48954 0 8.74473 0C8.99983 0 9.24893 0.0780901 9.45843 0.22379C9.66793 0.36948 9.82783 0.5758 9.91663 0.81502L11.7189 5.77127L16.6744 7.57283C16.9159 7.65871 17.1247 7.81771 17.2717 8.02773C17.4187 8.23775 17.4967 8.48835 17.4947 8.74474Z"
                          fill="#1B0C25"
                        />
                      </svg>
                      <p className="text-[15px] text-[#1b0c25] leading-[26px]">
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
