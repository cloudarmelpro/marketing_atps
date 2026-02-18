"use client";
import React, { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed z-100 flex items-center justify-center w-full h-[112px] p-[24px]">
      <div className="flex items-center justify-between w-[1240px] h-[64px] p-[12px] rounded-[16px] backdrop-blur-[6px] bg-[var(--color-white--100)] border border-white">
        {/* Logo */}
        <div className="flex items-center gap-[14px]">
          <div className="h-[40px] w-[40px] rounded-[6px] bg-[#1B0C25] flex items-center justify-center">
            {/* Logo icon placeholder */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M4 4L16 16M16 4L4 16"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-[26px] leading-[48px] font-medium text-[#1b0c25]">
            Fluence AI
          </p>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-[40px]">
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
          <Button className="text-[16px] font-medium w-[120px] h-[40px] rounded-[8px] p-[8px] backdrop-blur-[6px] bg-[#1B0C25] shadow-[0_1px_2px_0_rgba(0,0,0,0.1),inset_0_1px_2px_0_rgba(255,255,255,0.4)]">
            Contact
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-[40px] h-[40px] gap-[5px]"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <span className="w-[22px] h-[2px] bg-[#1B0C25] rounded-full block" />
          <span className="w-[22px] h-[2px] bg-[#1B0C25] rounded-full block" />
          <span className="w-[22px] h-[2px] bg-[#1B0C25] rounded-full block" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[200]"
          style={{
            background: "rgba(200,180,220,0.25)",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setIsMenuOpen(false)}
        >
          {/* Menu Panel */}
          <div
            className="absolute top-[16px] left-[16px] right-[16px] rounded-[20px] bg-white p-[24px] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-[28px]">
              <div className="flex items-center gap-[12px]">
                <div className="h-[40px] w-[40px] rounded-[6px] bg-[#1B0C25] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 4L16 16M16 4L4 16"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="text-[22px] font-medium text-[#1b0c25]">
                  Fluence AI
                </p>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-[#1B0C25] opacity-40 hover:opacity-70 text-[20px] leading-none"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col gap-[4px] mb-[28px]">
              {NAV_LIST.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className="text-[17px] font-medium text-[#1B0C25] opacity-50 hover:opacity-80 py-[10px]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Contact Button */}
            <Button className="text-[16px] font-medium w-[140px] h-[44px] rounded-[10px] bg-[#1B0C25] shadow-[0_1px_2px_0_rgba(0,0,0,0.1),inset_0_1px_2px_0_rgba(255,255,255,0.4)]">
              Contact
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
