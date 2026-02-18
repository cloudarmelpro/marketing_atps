import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const NAV_LIST = [
  { id: 1, name: "Features", link: "#" },
  { id: 2, name: "About", link: "#" },
  { id: 3, name: "Testimonial", link: "#" },
  { id: 4, name: "Pricing", link: "#" },
  { id: 5, name: "Faq", link: "#" },
];

const Navigation = () => {
  return (
    <div className="fixed z-100 flex items-center justify-center w-full h-[112px] p-[24px]">
      <div className="flex items-center justify-between w-[1240px] h-[64px] p-[12px] rounded-[16px] backdrop-blur-[6px] bg-[var(--color-white--100)] border border-white">
        <div className="flex items-center gap-[14px]">
          <div className="h-[40px] w-[40px] rounded-[6px] bg-[#1B0C25]"></div>
          <div>
            <p className="text-[26px] leading-[48px] font-medium text-[#1b0c25]">
              Fluence AI
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[40px]">
          <div className="flex gap-[20px]">
            {NAV_LIST.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="text-[15px] font-medium text-[#1B0C25] opacity-[0.5] hover:text-[#1B0C25]/80"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            <Button className="text-[16px] font-medium w-[120px] h-[40px] rounded-[8px] p-[8px] backdrop-blur-[6px] bg-[#1B0C25] shadow-[0_1px_2px_0_rgba(0,0,0,0.1),inset_0_1px_2px_0_rgba(255,255,255,0.4)]">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
