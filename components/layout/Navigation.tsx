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
  { id: 1, name: "Features", link: "/" },
  { id: 2, name: "About", link: "/#about" },
  { id: 3, name: "Testimonial", link: "/#testimonial" },
  { id: 4, name: "Pricing", link: "/#pricing" },
  { id: 5, name: "Faq", link: "/#faq" },
  { id: 6, name: "Blog", link: "/blog" },
  { id: 7, name: "News", link: "/news" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 200);
    };

    // Initial check
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculer les valeurs en fonction du scroll et de la taille d'écran
  const getContainerHeight = () => {
    if (isMobile) return isScrolled ? "56px" : "80px";
    if (isTablet) return isScrolled ? "60px" : "96px";
    return isScrolled ? "68px" : "112px";
  };

  const getContainerPadding = () => {
    if (isMobile) return isScrolled ? "4px" : "16px";
    if (isTablet) return isScrolled ? "6px" : "20px";
    return isScrolled ? "8px" : "24px";
  };

  const getNavWidth = () => {
    if (isMobile) return "calc(100% - 32px)";
    if (isTablet) return isScrolled ? "90%" : "95%";
    return isScrolled ? "700px" : "1240px";
  };

  const getNavHeight = () => {
    if (isMobile) return isScrolled ? "48px" : "56px";
    if (isTablet) return isScrolled ? "48px" : "60px";
    return isScrolled ? "52px" : "64px";
  };

  const getNavPadding = () => {
    if (isMobile) return isScrolled ? "6px" : "10px";
    if (isTablet) return isScrolled ? "6px" : "10px";
    return isScrolled ? "8px" : "12px";
  };

  const getLogoSize = () => {
    if (isMobile)
      return {
        box: isScrolled ? "28px" : "32px",
        text: isScrolled ? "18px" : "20px",
        gap: isScrolled ? "6px" : "8px",
      };
    if (isTablet)
      return {
        box: isScrolled ? "28px" : "36px",
        text: isScrolled ? "18px" : "22px",
        gap: isScrolled ? "6px" : "10px",
      };
    return {
      box: isScrolled ? "32px" : "40px",
      text: isScrolled ? "20px" : "26px",
      gap: isScrolled ? "8px" : "14px",
    };
  };

  const logoSize = getLogoSize();

  return (
    <motion.div
      variants={navigationVariants}
      initial="hidden"
      animate="visible"
      className="fixed z-100 flex items-center justify-center w-full transition-all duration-300 px-[16px]"
      style={{
        height: getContainerHeight(),
        padding: getContainerPadding(),
      }}
    >
      <motion.div
        variants={navigationVariants}
        className="flex items-center justify-center transition-all duration-300 rounded-[14px] backdrop-blur-[3px] mx-auto"
        style={{
          width: getNavWidth(),
          height: getNavHeight(),
          padding: getNavPadding(),
          background: isScrolled
            ? "rgba(255, 255, 255, 0.9)"
            : "var(--color-white--100)",
          boxShadow: isScrolled ? "0px 2px 6px rgba(0, 0, 0, 0.04)" : "none",
          border: isScrolled ? "none" : "1px solid rgba(255, 255, 255, 0.4)",
        }}
      >
        <div
          className="flex items-center transition-all duration-300 w-full"
          style={{
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <motion.div
            variants={navigationLogoVariants}
            className="flex items-center transition-all duration-300 shrink-0"
            style={{
              gap: logoSize.gap,
            }}
          >
            <div
              className="rounded-[6px] bg-[#1B0C25] flex items-center justify-center transition-all duration-300 shrink-0"
              style={{
                height: logoSize.box,
                width: logoSize.box,
              }}
            >
              {isMobile && (
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 4L16 16M16 4L4 16"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </div>
            <p
              className="font-medium text-[#1b0c25] transition-all duration-300 whitespace-nowrap"
              style={{
                fontSize: logoSize.text,
                lineHeight: logoSize.text,
              }}
            >
              Fluence AI
            </p>
          </motion.div>

          {/* Desktop Nav - Caché sur mobile/tablet */}
          {!isMobile && (
            <motion.div
              variants={navigationContainerVariants}
              initial="hidden"
              animate="visible"
              className={`${
                isTablet ? "hidden lg:flex" : "flex"
              } items-center transition-all duration-300 shrink-0`}
              style={{
                gap: isScrolled
                  ? isTablet
                    ? "16px"
                    : "24px"
                  : isTablet
                    ? "24px"
                    : "40px",
              }}
            >
              <motion.div
                variants={navigationContainerVariants}
                className="flex transition-all duration-300"
                style={{
                  gap: isScrolled
                    ? isTablet
                      ? "8px"
                      : "12px"
                    : isTablet
                      ? "12px"
                      : "20px",
                }}
              >
                {NAV_LIST.map((item) => (
                  <motion.div key={item.id} variants={navigationLinkVariants}>
                    <Link
                      href={item.link}
                      className="font-medium text-[#1B0C25] opacity-[0.5] hover:text-[#1B0C25]/80 transition-all duration-300 whitespace-nowrap"
                      style={{
                        fontSize: isScrolled
                          ? isTablet
                            ? "12px"
                            : "13px"
                          : isTablet
                            ? "13px"
                            : "15px",
                      }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={navigationButtonVariants}>
                <Link href="/Contact">
                  <Button
                    className="group font-medium rounded-[8px] p-[8px] backdrop-blur-[6px] bg-[#1B0C25] hover:bg-[#1B0C25] shadow-[0_1px_2px_0_rgba(0,0,0,0.1),inset_0_1px_2px_0_rgba(255,255,255,0.4)] transition-all duration-300"
                    style={{
                      fontSize: isScrolled
                        ? isTablet
                          ? "12px"
                          : "14px"
                        : isTablet
                          ? "13px"
                          : "16px",
                      width: isScrolled
                        ? isTablet
                          ? "80px"
                          : "100px"
                        : isTablet
                          ? "90px"
                          : "120px",
                      height: isScrolled
                        ? isTablet
                          ? "32px"
                          : "36px"
                        : isTablet
                          ? "34px"
                          : "40px",
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
                </Link>
              </motion.div>
            </motion.div>
          )}

          {/* Mobile/Tablet Hamburger - Visible uniquement sur mobile et tablette */}
          {(isMobile || isTablet) && (
            <button
              className="flex items-center justify-center w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] gap-[5px] focus:outline-none"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <span className="w-[20px] sm:w-[22px] h-[2px] bg-[#1B0C25] rounded-full block transition-all duration-300" />
                <span className="w-[20px] sm:w-[22px] h-[2px] bg-[#1B0C25] rounded-full block transition-all duration-300" />
                <span className="w-[20px] sm:w-[22px] h-[2px] bg-[#1B0C25] rounded-full block transition-all duration-300" />
              </div>
            </button>
          )}
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-200"
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
              className={`absolute ${
                isMobile
                  ? "top-[16px] left-[16px] right-[16px]"
                  : "top-[24px] left-[24px] right-[24px] max-w-[400px] ml-auto"
              } rounded-[20px] bg-white p-[24px] shadow-lg`}
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
                  <p className="text-[20px] sm:text-[22px] font-medium text-[#1b0c25]">
                    Fluence AI
                  </p>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#1B0C25] opacity-40 hover:opacity-70 text-[20px] leading-none w-[32px] h-[32px] flex items-center justify-center"
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
                      className="text-[16px] sm:text-[17px] font-medium text-[#1B0C25] opacity-50 hover:opacity-80 py-[10px] transition-opacity block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Contact Button */}
              <motion.div variants={mobileMenuItemVariants}>
                <Link href="/contact">
                  <Button className="group text-[15px] sm:text-[16px] font-medium w-[130px] sm:w-[140px] h-[42px] sm:h-[44px] rounded-[10px] bg-[#1B0C25] hover:bg-[#1B0C25] shadow-[0_1px_2px_0_rgba(0,0,0,0.1),inset_0_1px_2px_0_rgba(255,255,255,0.4)]">
                    <span className="flex flex-col items-center h-[26px] overflow-hidden">
                      <span className="block h-[26px] leading-[26px] transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                        Contact
                      </span>
                      <span className="block h-[26px] leading-[26px] transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                        Contact
                      </span>
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navigation;
