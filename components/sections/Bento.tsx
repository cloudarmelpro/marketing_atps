import Image from "next/image";
import TitleSection from "../TitleSection";

export default function Bento() {
  return (
    <div className="w-full h-[1664px] px-[16px] px-[324px] py-[200px] flex items-center justify-center">
      <div className="w-[1240px] h-[1364px]">
        <div className="flex flex-col items-center gap-[60px]">
          <div className="flex items-center flex-col gap-[24px] w-[800px] h-[240px]">
            <div className="flex items-center flex-col h-[160px] gap-[12px]">
              <TitleSection
                title="business & solution"
                className="shadow-[0_33px_13px_0_rgba(0,0,0,0.01),0_19px_11px_0_rgba(0,0,0,0.04),0_8px_8px_0_rgba(0,0,0,0.06),0_2px_5px_0_rgba(0,0,0,0.07)]"
              />
              <div>
                <h1 className="text-[57px] font-medium leading-[60px] text-center text-[#1b0c25]">
                  The AI-powered customer service platform
                </h1>
              </div>
            </div>
            <div className="w-[700px] h-[56px]">
              <p className="text-[17px] font-normal text-center text-[#1b0c25] leading-[28px]">
                Fluence AI helps you connect, manage, and optimize your AI tools
                effortlessly. Unlock powerful insights and automate complex
                processes with ease.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] w-[1240px] h-[1064.42px] items-start">
            <div className="flex flex-row items-start gap-[24px] justify-center h-[519.84px] w-full">
              <div className="flex flex-col items-center gap-[30px] p-[8px] w-[496.81px] h-[519.84px] bg-white shadow-sm rounded-[16px]">
                <div className="w-[480px] h-[354px] rounded-[12px]">
                  <Image
                    src="/images/imageAd.png"
                    alt="imageAd"
                    width={480}
                    height={354}
                  />
                </div>
                <div className="flex flex-col pt-0 pl-[22px] pr-[22px] pb-[22px] gap-[19px]">
                  <h1 className="text-[22px] leading-[28px] font-medium text-[#1b0c25]">
                    Adaptive Learning
                  </h1>
                  <p className="text-[15px] leading-[26px] font-normal text-[#1b0c25]">
                    AI that evolves with your data, continuously improving
                    performance and adapting to new patterns
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-[30px] p-[8px] w-[719px] h-[519.84px] bg-white shadow-sm rounded-[16px]">
                <div className="w-[703px] h-[353px] rounded-[12px]">
                  <Image
                    src="/images/imageSm.png"
                    alt="imageAd"
                    width={703}
                    height={353}
                  />
                </div>
                <div className="flex flex-col pt-0 pl-[22px] pr-[22px] pb-[22px] gap-[19px]">
                  <h1 className="text-[22px] leading-[28px] font-medium text-[#1b0c25]">
                    Smart Automation
                  </h1>
                  <p className="text-[15px] leading-[26px] font-normal text-[#1b0c25]">
                    Empowering you with AI-driven workflows designed to simplify
                    operations, enhance productivity
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start gap-[24px] justify-center h-[519.84px] w-full">
              <div className="flex flex-col items-center gap-[30px] p-[8px] w-[806px] h-[519.84px] bg-white shadow-sm rounded-[16px]">
                <div className="w-[790px] h-[353px] rounded-[12px]">
                  <Image
                    src="/images/imageData.png"
                    alt="imageData"
                    width={790}
                    height={353}
                  />
                </div>
                <div className="flex flex-col pt-0 pl-[22px] pr-[22px] pb-[22px] gap-[19px]">
                  <h1 className="text-[22px] leading-[28px] font-medium text-[#1b0c25]">
                    Data Mapping
                  </h1>
                  <p className="text-[15px] leading-[26px] font-normal text-[#1b0c25]">
                    Visualize and organize complex datasets effortlessly, making
                    data connections clearer for faster, informed decisions
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-[30px] p-[8px] w-[410px] h-[520px] bg-white shadow-sm rounded-[16px]">
                <div className="w-[394px] h-[355px] rounded-[12px]">
                  <Image
                    src="/images/imagePred.png"
                    alt="imagePred"
                    width={394}
                    height={355}
                  />
                </div>
                <div className="flex flex-col pt-0 pl-[22px] pr-[22px] pb-[22px] gap-[19px]">
                  <h1 className="text-[22px] leading-[28px] font-medium text-[#1b0c25]">
                    Predictive Analytics
                  </h1>
                  <p className="text-[15px] leading-[26px] font-normal text-[#1b0c25]">
                    Harness advanced models to forecast trends, uncover insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
