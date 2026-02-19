"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  navigationVariants,
  navigationLogoVariants,
  navigationLinkVariants,
  navigationButtonVariants,
  navigationContainerVariants,
  mobileMenuVariants,
  mobileMenuItemVariants,
} from "@/lib/motion";

const NAV_LIST = [
  { id: 1, name: "Features", link: "#" },
  { id: 2, name: "About", link: "/#about" },
  { id: 3, name: "Testimonial", link: "/#testimonial" },
  { id: 4, name: "Pricing", link: "/#pricing" },
  { id: 5, name: "Faq", link: "/#faq" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      variants={navigationVariants}
      initial="hidden"
      animate="visible"
      className="fixed z-100 flex items-center justify-center w-full transition-all duration-300"
      style={{
        height: isScrolled ? "68px" : "112px",
        padding: isScrolled ? "8px" : "24px",
      }}
    >
      <motion.div
        variants={navigationVariants}
        className="flex items-center justify-center transition-all duration-300 rounded-[14px] backdrop-blur-[3px]"
        style={{
          width: isScrolled ? "700px" : "1240px",
          height: isScrolled ? "52px" : "64px",
          padding: isScrolled ? "8px" : "12px",
          background: isScrolled
            ? "rgba(255, 255, 255, 0.9)"
            : "var(--color-white--100)",
          boxShadow: isScrolled ? "0px 2px 6px rgba(0, 0, 0, 0.04)" : "none",
          border: isScrolled ? "none" : "1px solid white",
        }}
      >
        <div
          className="flex items-center transition-all duration-300 w-full"
          style={{
            width: isScrolled ? "684px" : "100%",
            height: isScrolled ? "36px" : "auto",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <motion.div
            variants={navigationLogoVariants}
            className="flex items-center transition-all duration-300 flex-shrink-0"
            style={{
              gap: isScrolled ? "8px" : "14px",
            }}
          >
            <div
              className="rounded-[6px] bg-[#1B0C25] flex items-center justify-center transition-all duration-300 flex-shrink-0"
              style={{
                height: isScrolled ? "32px" : "40px",
                width: isScrolled ? "32px" : "40px",
              }}
            ></div>
            <p
              className="font-medium text-[#1b0c25] transition-all duration-300 whitespace-nowrap"
              style={{
                fontSize: isScrolled ? "20px" : "26px",
                lineHeight: isScrolled ? "24px" : "48px",
              }}
            >
              Fluence AI
            </p>
          </motion.div>

          {/* Desktop Nav */}
          <motion.div
            variants={navigationContainerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center transition-all duration-300 flex-shrink-0"
            style={{
              gap: isScrolled ? "24px" : "40px",
            }}
          >
            <motion.div
              variants={navigationContainerVariants}
              className="flex transition-all duration-300"
              style={{
                gap: isScrolled ? "12px" : "20px",
              }}
            >
              {NAV_LIST.map((item) => (
                <motion.div key={item.id} variants={navigationLinkVariants}>
                  <Link
                    href={item.link}
                    className="font-medium text-[#1B0C25] opacity-[0.5] hover:text-[#1B0C25]/80 transition-all duration-300"
                    style={{
                      fontSize: isScrolled ? "13px" : "15px",
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={navigationButtonVariants}>
              <Button
                className="group font-medium rounded-[8px] p-[8px] backdrop-blur-[6px] bg-[#1B0C25] hover:bg-[#1B0C25] shadow-[0_1px_2px_0_rgba(0,0,0,0.1),inset_0_1px_2px_0_rgba(255,255,255,0.4)] transition-all duration-300"
                style={{
                  fontSize: isScrolled ? "14px" : "16px",
                  width: isScrolled ? "100px" : "120px",
                  height: isScrolled ? "36px" : "40px",
                }}
              >
                <span className="flex flex-col items-center h-[26px] overflow-hidden">
                  <span className="block h-[26px] leading-[26px] transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                    Contact
                  </span>
                  <span className="block h-[26px] leading-[26px] transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                    Contact
                  </span>
                </span>
              </Button>
            </motion.div>
          </motion.div>
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
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200]"
            style={{
              background: "rgba(200,180,220,0.25)",
              backdropFilter: "blur(4px)",
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Menu Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
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
              <motion.div
                variants={navigationContainerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-[4px] mb-[28px]"
              >
                {NAV_LIST.map((item) => (
                  <motion.div key={item.id} variants={mobileMenuItemVariants}>
                    <Link
                      href={item.link}
                      className="text-[17px] font-medium text-[#1B0C25] opacity-50 hover:opacity-80 py-[10px] transition-opacity"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Contact Button */}
              <motion.div variants={mobileMenuItemVariants}>
                <Button className="group text-[16px] font-medium w-[140px] h-[44px] rounded-[10px] bg-[#1B0C25] hover:bg-[#1B0C25] shadow-[0_1px_2px_0_rgba(0,0,0,0.1),inset_0_1px_2px_0_rgba(255,255,255,0.4)]">
                  <span className="flex flex-col items-center h-[26px] overflow-hidden">
                    <span className="block h-[26px] leading-[26px] transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                      Contact
                    </span>
                    <span className="block h-[26px] leading-[26px] transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                      Contact
                    </span>
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navigation;
