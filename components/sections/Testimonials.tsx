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
    <div
      id="testimonials"
      className="px-4 sm:px-6 lg:px-8 min-h-[800px] lg:h-[932px] bg-[url('/images/testBg.png')] bg-cover bg-center"
    >
      <div className="px-4 sm:px-6 lg:px-8 xl:px-[374px] py-12 sm:py-16 lg:py-20 xl:py-[140px] flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-[60px]">
        {/* Header Section */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-[60px] flex-col w-full">
          {/* Title Section */}
          <div className="flex items-center justify-center flex-col gap-3 sm:gap-4 lg:gap-[16px] w-full lg:w-[800px] px-4 lg:px-0">
            <TitleSection
              title="wall of love"
              className="shadow-[0_33px_13px_0_rgba(0,0,0,0.01),0_19px_11px_0_rgba(0,0,0,0.04),0_8px_8px_0_rgba(0,0,0,0.06),0_2px_5px_0_rgba(0,0,0,0.07)]"
            />
            <div className="w-full">
              <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-[58px] leading-tight lg:leading-[60px] text-center text-[#1b0c25] font-medium">
                What they're Saying
              </p>
            </div>
          </div>

          {/* Main Content Container */}
          <div className="w-full max-w-[1140px] mx-auto">
            <div className="flex w-full h-auto flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-[32px]">
              {/* Testimonial Carousel */}
              <div className="w-full px-4 sm:px-0">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                  {/* Left Arrow - Hidden on mobile, visible on tablet/desktop */}
                  <div className="hidden sm:block">
                    <Button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-gray-100">
                      <ChevronLeft className="w-4 h-4 text-black" />
                    </Button>
                  </div>

                  {/* Testimonial Card Container */}
                  <div className="relative flex justify-center w-full sm:w-[650px]">
                    {/* Decorative Layers - Hidden on mobile */}
                    <div className="hidden sm:block absolute top-[38px] z-10 w-[664px] h-[221px] rounded-[14px] border-2 border-white bg-white/50 backdrop-blur" />
                    <div className="hidden sm:block absolute top-[52px] z-0 w-[690px] h-[190px] rounded-[14px] border-2 border-white bg-white/50 backdrop-blur" />

                    {/* Main Testimonial Card */}
                    <div className="relative z-20 w-full sm:w-[634px] border border-white rounded-2xl shadow-[0_4px_8px_0_rgba(0,0,0,0.05)] bg-[#f7f6f7]">
                      <div className="flex flex-col gap-4 sm:gap-[30px] p-4 sm:p-6 lg:p-[40px]">
                        {/* Testimonial Text */}
                        <div>
                          <p className="text-base sm:text-lg lg:text-[23px] leading-relaxed lg:leading-[28px] font-medium">
                            "Fluence AI has revolutionized the way we process
                            data. The seamless integration and advanced
                            analytics tools have saved us countless hours and
                            improved our decision-making"
                          </p>
                        </div>

                        {/* Author Info */}
                        <div className="flex gap-3 sm:gap-[16px] items-center">
                          <div className="flex-shrink-0 w-10 h-10 sm:w-[60px] sm:h-[60px] rounded-full overflow-hidden">
                            <Image
                              src="/images/saraJ.png"
                              width={60}
                              height={60}
                              alt="Sarah J."
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <p className="text-sm sm:text-[15px] leading-relaxed sm:leading-[26px] text-[#1b0c25] font-medium">
                              Sarah J.
                            </p>
                            <p className="text-xs sm:text-[15px] leading-relaxed sm:leading-[20px] text-[#1b0c25] opacity-60">
                              Data Analyst, TechCorp
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Arrow - Hidden on mobile, visible on tablet/desktop */}
                  <div className="hidden sm:block">
                    <Button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-gray-100">
                      <ChevronRight className="w-4 h-4 text-black" />
                    </Button>
                  </div>

                  {/* Mobile Navigation Arrows */}
                  <div className="flex sm:hidden justify-center gap-4 w-full">
                    <Button className="w-8 h-8 rounded-full bg-white hover:bg-gray-100">
                      <ChevronLeft className="w-4 h-4 text-black" />
                    </Button>
                    <Button className="w-8 h-8 rounded-full bg-white hover:bg-gray-100">
                      <ChevronRight className="w-4 h-4 text-black" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Counter Section */}
              <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[32px] w-full">
                {/* Counter Stats */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-[16px] px-4 sm:px-0">
                  {COUNTER_TEST.map((counter) => (
                    <div
                      key={counter.id}
                      className="flex-1 min-w-[120px] sm:min-w-[150px] lg:w-[189.33px] flex flex-col gap-1 items-center"
                    >
                      <h1 className="text-2xl sm:text-3xl lg:text-[41px] font-medium text-[#1b0c25]">
                        {counter.counter}
                      </h1>
                      <p className="text-xs sm:text-sm lg:text-[15px] leading-relaxed lg:leading-[26px] text-center text-[rgba(28,12,38,0.7)]">
                        {counter.title}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Brand Logos */}
                <div className="w-full px-4 sm:px-0">
                  <div className="relative w-full aspect-[1140/41] max-w-[1140px] mx-auto">
                    <Image
                      src="/images/logo_test.png"
                      fill
                      className="object-contain"
                      alt="Brand Logos"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1140px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
