import React from "react";
import {ButtonDemo} from "../ButtonDemo";
import { Separator } from "../ui/separator";
import Image from "next/image";
import TitleSection from "../TitleSection";

const ICON_LINKS = [
  {
    id: 1,
    icon_src: "/assets/logos/facebook.png",
    label: "Facebook",
  },
  {
    id: 2,
    icon_src: "/assets/logos/X.png",
    label: "X",
  },
  {
    id: 3,
    icon_src: "/assets/logos/Insta.png",
    label: "Instagram",
  },
  {
    id: 4,
    icon_src: "/assets/logos/LinkdIn.png",
    label: "LinkedIn",
  },
];

const LIST_ITEMS = [
  {
    id: 1,
    title: "User link",
    links: [
      { name: "Feature", href: "#" },
      { name: "About", href: "#" },
      { name: "Testimonial", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Blog", href: "#" },
      { name: "404", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="px-[16px]">
      <div className="relative bg-[#1B0C25] rounded-[16px] overflow-hidden">
        <div className="absolute z-[-1px] left-[-246px] top-[-186px] rounded-[603px] w-[658px] h-[548px] bg-[linear-gradient(148deg,#80a9fc_0%,#d37bff_31.09%,#fcab83_70.46%,#ff49d4_100%)] blur-[80px] opacity-[0.4]" />
        <div className="absolute z-[-1px] right-[-86px] top-[590px] rounded-[603px] w-[658px] h-[548px] bg-[linear-gradient(145deg,#efe8f6_0%,#d588fb_60.83%,#ff49d4_100%)] blur-[80px] opacity-[0.4]" />
        <div className="z-10 px-[324px] py-[100px] flex flex-col items-center justify-start">
          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col items-start gap-[12px] justify-start">
              <TitleSection title="Join the AI Revolution" />
              <h1 className="text-[72px] font-medium leading-[76px] text-white">
                Ready to start your AI journey with us?
              </h1>
            </div>
            <ButtonDemo />
          </div>
          <Separator className="mt-[100px] mb-[100px]" />
          <div className="flex items-start w-full justify-between text-white">
            <div className="flex flex-col gap-[32px] max-w-[220px]">
              {/* Left Head */}
              <div className="flex flex-col gap-[16px]">
                <div className="flex gap-[12px]">
                  <div className="bg-white h-[40px] w-[40px] rounded-md" />
                  <p className="font-medium text-[30px] leading-[40px]">
                    Fluence Ai
                  </p>
                </div>
                <div>
                  <p className="text-[15px] leading-[25px] font-normal">
                    Manage Ai effortlessly
                  </p>
                </div>
              </div>
              {/* social */}
              <div className="flex gap-[16px]">
                {ICON_LINKS.map((icon) => (
                  <Image
                    key={icon.id}
                    src={icon.icon_src}
                    alt={icon.label}
                    width={40}
                    height={40}
                  />
                ))}
              </div>
            </div>
            {/* Right List */}
            <div className="flex gap-[60px] h-[266px] max-w-[397px]">
              <div className="flex flex-col gap-[16px]">
                <div>
                  <p className="text-[15px] leading-[26px] font-medium">
                    User Link
                  </p>
                </div>
                <div>
                  {LIST_ITEMS.map((item) => (
                    <div key={item.id} className="flex flex-col gap-[8px]">
                      {item.links.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          className="text-[15px] font-medium leading-[26px] opacity-[0.6]"
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-[16px]">
                <div>
                  <p className="text-[15px] leading-[26px] font-medium">
                    Company
                  </p>
                </div>
                <div>
                  <div className="flex flex-col gap-[8px]">
                    <p className="text-[15px] font-medium w-[184px] leading-[26px] opacity-[0.6]">
                      105 North 1st Street, #28, San Jose, CA 94748
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* En bas */}
          <div className="border-t border-white w-full mt-[100px]">
            <div className="flex items-center justify-between w-full mt-[24px] text-white">
              <p className="text-[15px] leading-[26px]">
                © 2025 Design & Developed by Amani
              </p>
              <p className="text-[15px] leading-[26px] opacity-[0.6]">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
