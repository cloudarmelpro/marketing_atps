import { ButtonDemoVarient } from "../ButtonDemo";
import TitleSection from "../TitleSection";
import Image from "next/image";

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
    <div className="flex flex-row justify-center items-start px-[324px] py-[200px] h-[1299px] px-[16px]">
      <div className="flex flex-col gap-[24px] items-start w-[1240px] h-[999px]">
        <div className="flex flex-row items-start gap-[24px] w-[1240px] h-[532px]">
          <div className="w-[752px] h-[532px]">
            <div className="flex flex-col p-[40px] gap-[24px] w-[752px] h-[532px] rounded-[16px] bg-white shadow-sm">
              <div className="flex flex-col items-start gap-[12px] w-[672px] h-[160px]">
                <TitleSection
                  title="hot it works"
                  className="shadow-[0_33px_13px_0_rgba(0,0,0,0.01),0_19px_11px_0_rgba(0,0,0,0.04),0_8px_8px_0_rgba(0,0,0,0.06),0_2px_5px_0_rgba(0,0,0,0.07)]"
                />
                <div>
                  <h1 className="font-medium text-[59px] leading-[60px] text-[#1b0c25]">
                    A Simple 3-Step Process
                  </h1>
                </div>
              </div>
              <div>
                <p className="font-normal text-[17px] text-[#1b0c25] leading-[28px]">
                  Get started quickly and effortlessly with Fluence AI’s
                  streamlined 3-step process designed to optimize your data
                  workflow.
                </p>
              </div>
              <ButtonDemoVarient />
            </div>
          </div>
          <div className="flex flex-col items-center p-[8px] w-[463px] h-[532px] bg-white shadow-sm rounded-[16px]">
            <Image
              src="/images/imageAI.png"
              alt="Work illustration"
              width={448}
              height={516}
            />
          </div>
        </div>
        <div className="flex flex-row items-start gap-[24px] w-[1239px] h-[443px]">
          {LIST_WORK.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-[30px] p-[8px] w-[397px] h-[443px] rounded-[16px] bg-white shadow-sm"
            >
              <div className="w-[381px] h-[278px] rounded-[12px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={381}
                  height={278}
                />
              </div>
              <div className="flex flex-col gap-[15px] pl-[22px] pr-[22px] pb-[22px] w-[381px] h-[118px]">
                <h1 className="text-[23px] font-medium leading-[28px] text-[#1b0c25]">
                  {item.title}
                </h1>
                <p className="text-[15px] leading-[26px] font-normal text-[#1b0c25]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
