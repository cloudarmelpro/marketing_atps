import Image from "next/image";
import ButtonDemo from "./ButtonDemo";

const LEFT_KEYS = [
  {
    id: 1,
    title: "Increased Efficiency",
    description: "Automate tasks and reduce manual workloads",
  },
  {
    id: 2,
    title: "Scalable Solutions",
    description: "Easily grow with the demands of your data",
  },
  {
    id: 3,
    title: "Faster Decision-Making",
    description: "Leverage real-time insights for quicker choices",
  },
];

const RIGHT_KEYS = [
  {
    id: 1,
    title: "Enhanced Collaboration",
    description: "Streamline workflows with team-friendly features",
  },
  {
    id: 2,
    title: "Data Security",
    description: "Safeguard your data with top-tier encryption",
  },
  {
    id: 3,
    title: "Continuous Improvement",
    description: "Let AI adapt and improve with evolving data",
  },
];

export default function BenefistCard() {
  return (
    <div className="flex flex-col gap-[40px]">
      <div className="flex gap-[40px] bg-white rounded-[16px] shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
        <div className="flex gap-[40px] items-center justify-between p-[40px]">
          <div className="w-[280px] h-[488px]">
            <div className="flex flex-col gap-[40px]">
              {LEFT_KEYS.map((key) => (
                <div key={key.id} className="flex flex-col gap-[12px]">
                  <div className="flex items-center justify-center h-[32px] w-[32px] rounded-[4px] shadow-[inset_0_-1px_2px_0_rgba(156,32,218,0.15),inset_0_1px_1px_0_#fff,0_1px_8px_0_rgba(82,44,102,0.1)] bg-[linear-gradient(180deg,#fff_0%,#efe9f5_100%)]">
                    <Image
                      src="/assets/icons/checks.png"
                      width={16}
                      height={16}
                      alt="Benefist Icon"
                    />
                  </div>
                  <div className="flex flex-col gap-[15px]">
                    <p className="font-medium text-[17px] leading-[28px] text-[#1b0c25]">
                      {key.title}
                    </p>
                    <p className="font-normal text-[15px] leading-[26px] text-[#1b0c25]">
                      {key.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[520px] h-[486px] rounded-[8px] overflow-hidden">
            <Image
              src="/images/keyben.png"
              width={520}
              height={486}
              alt="Benefist Card Image"
            />
          </div>
          <div className="w-[280px] h-[488px]">
            <div className="flex flex-col gap-[40px]">
              {RIGHT_KEYS.map((key) => (
                <div key={key.id} className="flex flex-col gap-[12px]">
                  <div className="flex items-center justify-center h-[32px] w-[32px] rounded-[4px] shadow-[inset_0_-1px_2px_0_rgba(156,32,218,0.15),inset_0_1px_1px_0_#fff,0_1px_8px_0_rgba(82,44,102,0.1)] bg-[linear-gradient(180deg,#fff_0%,#efe9f5_100%)]">
                    <Image
                      src="/assets/icons/checks.png"
                      width={16}
                      height={16}
                      alt="Benefist Icon"
                    />
                  </div>
                  <div className="flex flex-col gap-[15px]">
                    <p className="font-medium text-[17px] leading-[28px] text-[#1b0c25]">
                      {key.title}
                    </p>
                    <p className="font-normal text-[15px] leading-[26px] text-[#1b0c25]">
                      {key.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <ButtonDemo />
      </div>
    </div>
  );
}
