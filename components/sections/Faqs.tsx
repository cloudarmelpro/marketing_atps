"use client";

import Image from "next/image";
import TitleSection from "../TitleSection";
import { Container } from "../ui/container";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUpVariants, faqContainerVariants, faqItemVariants, viewportSettings } from "@/lib/motion";

const QUESTION_FAQS = [
  {
    question: "What is Fluence AI?",
    answer:
      "Fluence AI is a platform that helps businesses leverage artificial intelligence to enhance their operations and decision-making processes. It provides intelligent insights and automation capabilities through advanced machine learning algorithms.",
  },
  {
    question: "How does Fluence AI work?",
    answer:
      "Fluence AI integrates seamlessly with existing business systems, analyzing your data to provide actionable insights. The platform uses machine learning to identify patterns, predict outcomes, and automate routine tasks, helping you make better decisions faster.",
  },
  {
    question: "Is Fluence AI suitable for small businesses?",
    answer:
      "Yes, Fluence AI offers scalable solutions tailored for businesses of all sizes, including small and medium enterprises. Our pricing plans are designed to accommodate different budgets and needs, ensuring that even small businesses can benefit from AI technology.",
  },
  {
    question: "What kind of support does Fluence AI provide?",
    answer:
      "We offer comprehensive support including documentation, email support, and priority support for paid plans. Our team is dedicated to helping you succeed with Fluence AI and is always available to answer your questions.",
  },
  {
    question: "Can I integrate Fluence AI with my existing tools?",
    answer:
      "Yes, Fluence AI is built to integrate with a wide range of popular business tools and platforms. We offer APIs and pre-built connectors for common applications, making it easy to incorporate AI into your existing workflow.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 xl:py-[100px]">
      <Container className="flex flex-col lg:flex-row items-start gap-6 lg:gap-[60px] p-4 sm:p-6 lg:p-8 xl:p-[40px] bg-white rounded-2xl">
        {/* Left Column - Static Content */}
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="w-full lg:w-[366px]"
        >
          <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-[40px]">
            {/* Title Section */}
            <div className="flex flex-col items-start gap-2 sm:gap-3 lg:gap-[10px] w-full">
              <TitleSection
                title="FAQS"
                className="shadow-[0_33px_13px_0_rgba(0,0,0,0.01),0_19px_11px_0_rgba(0,0,0,0.04),0_8px_8px_0_rgba(0,0,0,0.06),0_2px_5px_0_rgba(0,0,0,0.07)]"
              />
              <p className="text-2xl sm:text-3xl lg:text-[43px] text-[#1b0c25] leading-tight lg:leading-[52px] font-medium">
                Frequently Asked Questions
              </p>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col items-start justify-center gap-3 sm:gap-4 lg:gap-[16px] w-full">
              <p className="text-lg sm:text-xl lg:text-[22px] font-medium text-[#1b0c25] leading-snug lg:leading-[28px]">
                Still have a question?
              </p>
              <p className="text-sm sm:text-base lg:text-[16px] font-medium text-[#1b0c25] leading-relaxed lg:leading-[26px]">
                Contact us :{" "}
                <span className="font-normal">We'll be happy to help you.</span>
              </p>
              <div className="w-[120px] sm:w-[142px] h-auto">
                <Image
                  src="/images/faqs.png"
                  width={142}
                  height={60}
                  alt="Contact Us"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - FAQ Accordion */}
        <motion.div
          variants={faqContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="w-full lg:w-[733px]"
        >
          <div className="flex flex-col items-start gap-3 sm:gap-4 lg:gap-[12px] w-full">
            {QUESTION_FAQS.map((faq, index) => (
              <motion.div
                key={index}
                variants={faqItemVariants}
                className="w-full bg-[#F7F6F7] rounded-lg overflow-hidden transition-all duration-300"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between w-full p-3 sm:p-4 lg:p-[20px] text-left hover:bg-[#f0eef0] transition-colors"
                >
                  <p className="text-base sm:text-lg lg:text-[22px] pr-2 text-[#1b0c25] leading-snug lg:leading-[28px] font-medium">
                    {faq.question}
                  </p>
                  <div className="shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-[#1b0c25]" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-[#1b0c25]" />
                    )}
                  </div>
                </button>

                {/* Answer Panel */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-3 sm:p-4 lg:p-[20px] pt-0 text-sm sm:text-base lg:text-[16px] text-[#1b0c25]/80 leading-relaxed lg:leading-[26px] border-t border-gray-200">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
