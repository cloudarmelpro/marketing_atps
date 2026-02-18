import Image from "next/image";
import TitleSection from "../TitleSection";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const COUNTER_TEST = [
  {
    id: 1,
    counter: "90+",
    title: "Businesses are Happy",
  },
  {
    id: 2,
    counter: "4990+",
    title: "Data-driven decisions",
  },
  {
    id: 3,
    counter: "100%",
    title: "Customer Satisfied",
  },
];

export default function Testimonials() {
  return (
    <div className="px-[16px] h-[932px] rounded-[16px] bg-[url('/images/testBg.png')]">
      <div className="px-[374px] py-[140px] flex flex-col items-center justify-center gap-[60px]">
        <div className="flex items-center justify-center gap-[60px] flex-col">
          <div className="flex items-center justify-center flex-col gap-[16px] w-[800px]">
            <TitleSection
              title="wall of love"
              className="shadow-[0_33px_13px_0_rgba(0,0,0,0.01),0_19px_11px_0_rgba(0,0,0,0.04),0_8px_8px_0_rgba(0,0,0,0.06),0_2px_5px_0_rgba(0,0,0,0.07)]"
            />
            <div>
              <p className="text-[58px] leading-[60px] text-center text-[#1b0c25] font-medium">
                What they're Saying
              </p>
            </div>
          </div>
          <div className="w-[1140px]">
            <div className="flex w-full h-auto flex-col items-center justify-center">
              <div className="w-[790px] h-auto flex items-center justify-between">
                <div>
                  <Button className="w-[40px] h-[40px] rounded-full bg-white">
                    <ChevronLeft className="w-4 h-4 text-black" />
                  </Button>
                </div>
                <div className="relative flex justify-center w-[650px] h-[330px]">
                  <div className="absolute top-[38px] z-10 w-[664px] h-[221px] rounded-[14px] border-2 border-white bg-white/50 backdrop-blur"></div>
                  <div className="absolute top-[52px] z-0 w-[690px] h-[190px] rounded-[14px] border-2 border-white bg-white/50 backdrop-blur"></div>
                  <div className="z-100 w-[634px] border border-white h-[285px] rounded-[16px] backdrop-blur-0 shadow-[0_4px_8px_0_rgba(0,0,0,0.05)] bg-[#f7f6f7]">
                    <div className="flex flex-col gap-[30px] p-[40px]">
                      <div>
                        <p className="text-[23px] leading-[28px] font-medium">
                          "Fluence AI has revolutionized the way we process
                          data. The seamless integration and advanced analytics
                          tools have saved us countless hours and improved our
                          decision-making"
                        </p>
                      </div>
                      <div className="flex gap-[16px]">
                        <div className="w-[60px] h-[60px] rounded-full">
                          <Image
                            src="/images/saraJ.png"
                            width={60}
                            height={60}
                            alt="Avatar"
                          />
                        </div>
                        <div className="flex flex-col justify-between gap-[5px]">
                          <p className="text-[15px] leading-[26px] text-[#1b0c25]">
                            Sarah J.
                          </p>
                          <p className="text-[15px] leading-[20px] text-[#1b0c25] opacity-[0.6]">
                            Data Analyst, TechCorp
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Button className="w-[40px] h-[40px] rounded-full bg-white">
                    <ChevronRight className="w-4 h-4 text-black" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-[32px]">
                <div className="flex items-center justify-center gap-[16px]">
                  {COUNTER_TEST.map((counter) => (
                    <div
                      key={counter.id}
                      className="w-[189.33px] flex flex-col gap-[2px] items-center"
                    >
                      <h1 className="text-[41px] font-medium text-[#1b0c25]">
                        {counter.counter}
                      </h1>
                      <p className=" font-normal text-[15px] leading-[26px] text-center text-[rgba(28,12,38,0.7)]">
                        {counter.title}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="w-[1140px] h-[41px  ]">
                  <Image
                    src="/images/logo_test.png"
                    width={1140}
                    height={41}
                    alt="Brand Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
