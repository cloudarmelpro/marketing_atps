import Image from "next/image";
import TitleSection from "../TitleSection";
import { Plus } from "lucide-react";

const QUESTION_FAQS = [
  {
    question: "What is Fluence AI?",
    answer:
      "Fluence AI is a platform that helps businesses leverage artificial intelligence to enhance their operations and decision-making processes.",
  },
  {
    question: "How does Fluence AI work?",
    answer:
      "Fluence AI integrates seamlessly with existing business systems, providing intelligent insights and automation capabilities through advanced machine learning algorithms.",
  },
  {
    question: "Is Fluence AI suitable for small businesses?",
    answer:
      "Yes, Fluence AI offers scalable solutions tailored for businesses of all sizes, including small and medium enterprises.",
  },
  {
    question: "Is Fluence AI suitable for small businesses?",
    answer:
      "Yes, Fluence AI offers scalable solutions tailored for businesses of all sizes, including small and medium enterprises.",
  },
  {
    question: "Is Fluence AI suitable for small businesses?",
    answer:
      "Yes, Fluence AI offers scalable solutions tailored for businesses of all sizes, including small and medium enterprises.",
  },
];

export default function Faqs() {
  return (
    <div className="flex flex-row justify-center items-center px-[340px] py-[100px]">
      <div className="flex flex-row items-start p-[40px] gap-[60px] w-[1240px] h-[540.99px] bg-white rounded-[16px]">
        <div className="flex flex-col items-start gap-[40px] w-[366px] h-[332px]">
          <div className="flex flex-col items-start gap-[10px] w-[366px] h-[145px]">
            <TitleSection
              title="FAQS"
              className="shadow-[0_33px_13px_0_rgba(0,0,0,0.01),0_19px_11px_0_rgba(0,0,0,0.04),0_8px_8px_0_rgba(0,0,0,0.06),0_2px_5px_0_rgba(0,0,0,0.07)]"
            />
            <p className="text-[43px] text-[#1b0c25] leading-[52px] font-medium">
              Frequently Asked Questions
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-[16px] w-[366px] h-[147px]">
            <p className="text-[22px] font-medium text-[#1b0c25] leading-[28px]">
              Still have a question?
            </p>
            <p className="text-[16px] font-medium text-[#1b0c25] leading-[26px]">
              Contact us :
              <span className="font-normal">We'll be happy to help you.</span>
            </p>
            <div className="w-[142px] h-[60px]">
              <Image
                src="/images/faqs.png"
                width={142}
                height={60}
                alt="Contact Us"
              />
            </div>
          </div>
        </div>
        <div className="flex items-start flex-col w-[733px] h-[460px]">
          <div className="flex flex-col items-start gap-[12px] w-[733px] h-[460px]">
            {QUESTION_FAQS.map((faq, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-[20px] w-[733px] h-[69px] bg-[#F7F6F7] rounded-[8px]"
              >
                <div className="flex flex-row items-center gap-[24px] w-[693px] h-[29px]">
                  <p className="text-[22px] w-[653px] text-[#1b0c25] leading-[28px] font-medium">
                    {faq.question}
                  </p>
                  <div>
                    <Plus />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
