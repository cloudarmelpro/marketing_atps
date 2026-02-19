"use client";

import { ButtonDemoVarient } from "../ButtonDemo";
import TitleSection from "../TitleSection";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUpVariants,
  workContainerVariants,
  workStepVariants,
  viewportSettings,
} from "@/lib/motion";

const LIST_WORK = [
  {
    id: 1,
    image: "/images/imageCon.png",
    title: "Connect Your Data",
    description:
      "Effortlessly integrate data from various sources into a unified system.",
  },
  {
    id: 2,
    image: "/images/imageAn.png",
    title: "Analyze and Optimize",
    description: "Use AI to uncover valuable insights and improve performance.",
  },
  {
    id: 3,
    image: "/images/imageLet.png",
    title: "Let AI Work",
    description: "Streamline tasks and enhance productivity with AI.",
  },
];

export default function Work() {
  return (
    <>
      {/* J'ai uniquement AJOUTÉ des classes responsive, rien supprimé */}
      <div className="flex flex-row justify-center items-start px-[324px] py-[200px] h-[1299px] px-[16px] max-lg:px-4 max-lg:py-12 max-lg:h-auto">
        <motion.div
          variants={workContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="flex flex-col gap-[24px] items-start w-[1240px] h-[999px] max-lg:w-full max-lg:h-auto"
        >
          {/* Première ligne - AJOUT: stack sur tablette/mobile */}
          <div className="flex flex-row items-start gap-[24px] w-[1240px] h-[532px] max-lg:flex-col max-lg:w-full max-lg:h-auto">
            {/* Carte gauche - AJOUT: largeur responsive */}
            <motion.div
              variants={fadeInUpVariants}
              className="w-[752px] h-[532px] max-lg:w-full max-lg:h-auto"
            >
              <div className="flex flex-col p-[40px] gap-[24px] w-[752px] h-[532px] rounded-[16px] bg-white shadow-sm max-lg:w-full max-lg:h-auto max-lg:p-6">
                {/* Zone texte - AJOUT: largeur responsive */}
                <div className="flex flex-col items-start gap-[12px] w-[672px] h-[160px] max-lg:w-full max-lg:h-auto">
                  <TitleSection
                    title="hot it works"
                    className="shadow-[0_33px_13px_0_rgba(0,0,0,0.01),0_19px_11px_0_rgba(0,0,0,0.04),0_8px_8px_0_rgba(0,0,0,0.06),0_2px_5px_0_rgba(0,0,0,0.07)]"
                  />
                  <div>
                    {/* AJOUT: texte responsive */}
                    <h1 className="font-medium text-[59px] leading-[60px] text-[#1b0c25] max-lg:text-4xl max-lg:leading-tight">
                      A Simple 3-Step Process
                    </h1>
                  </div>
                </div>

                {/* AJOUT: texte responsive */}
                <div>
                  <p className="font-normal text-[17px] text-[#1b0c25] leading-[28px] max-lg:text-base">
                    Get started quickly and effortlessly with Fluence AI's
                    streamlined 3-step process designed to optimize your data
                    workflow.
                  </p>
                </div>
                <ButtonDemoVarient />
              </div>
            </motion.div>

            {/* Carte droite image - AJOUT: largeur responsive */}
            <motion.div
              variants={fadeInUpVariants}
              className="flex flex-col items-center p-[8px] w-[463px] h-[532px] bg-white shadow-sm rounded-[16px] max-lg:w-full max-lg:h-auto"
            >
              <Image
                src="/images/imageAI.png"
                alt="Work illustration"
                width={448}
                height={516}
                className="max-lg:w-full max-lg:h-auto"
              />
            </motion.div>
          </div>

          {/* Deuxième ligne - 3 cartes - AJOUT: grid responsive au lieu de flex row */}
          <div className="flex flex-row items-start gap-[24px] w-[1239px] h-[443px] max-lg:grid max-lg:grid-cols-2 max-lg:w-full max-lg:h-auto max-md:grid-cols-1">
            {LIST_WORK.map((item) => (
              <motion.div
                key={item.id}
                variants={workStepVariants}
                className="flex flex-col items-center gap-[30px] p-[8px] w-[397px] h-[443px] rounded-[16px] bg-white shadow-sm max-lg:w-full max-lg:h-auto"
              >
                <div className="w-[381px] h-[278px] rounded-[12px] max-lg:w-full max-lg:h-auto">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={381}
                    height={278}
                    className="max-lg:w-full max-lg:h-auto"
                  />
                </div>
                <div className="flex flex-col gap-[15px] pl-[22px] pr-[22px] pb-[22px] w-[381px] h-[118px] max-lg:w-full max-lg:h-auto">
                  {/* AJOUT: texte responsive */}
                  <h1 className="text-[23px] font-medium leading-[28px] text-[#1b0c25] max-lg:text-xl">
                    {item.title}
                  </h1>
                  <p className="text-[15px] leading-[26px] font-normal text-[#1b0c25] max-lg:text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
