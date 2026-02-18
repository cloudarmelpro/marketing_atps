// ProductCard.tsx
import Image from "next/image";

const FEATURE_LIST_CONTAINER = [
  {
    id: 1,
    title: "Seamless Data Integration Process",
    description:
      "Effortlessly connect with diverse data sources, ensuring smooth data flow for real-time insights and accurate analysis.",
    image: "/images/data.png",
    feature_list: [
      {
        id: 1,
        title: "Unified Data Connections",
        icon_feature: "/assets/icons/db.png",
      },
      {
        id: 2,
        title: "Real-Time Data Syncing",
        icon_feature: "/assets/icons/topo.png",
      },
      {
        id: 3,
        title: "Flexible API Integrations",
        icon_feature: "/assets/icons/swith.png",
      },
    ],
  },
  {
    id: 2,
    title: "Advanced AI-Powered Analytics Tools",
    description:
      "Leverage intelligent analytics to uncover hidden patterns, predict future trends, and make data-driven decisions with confidence.",
    image: "/images/dash.png",
    feature_list: [
      {
        id: 1,
        title: "Accurate Trend Forecasting",
        icon_feature: "/assets/icons/trad.png",
      },
      {
        id: 2,
        title: "Dynamic Insightful Dashboards",
        icon_feature: "/assets/icons/chart.png",
      },
      {
        id: 3,
        title: "AI-Driven Data Metrics",
        icon_feature: "/assets/icons/tvpro.png",
      },
    ],
  },
  {
    id: 3,
    title: "Intelligent Automation Workflow Engine",
    description:
      "Automate repetitive tasks, optimize workflows, and boost productivity with smart, AI-powered automation capabilities.",
    image: "/images/feature3.png",
    feature_list: [
      {
        id: 1,
        title: "Streamlined Workflow Automation",
        icon_feature: "/assets/icons/union.png",
      },
      {
        id: 2,
        title: "Efficient Task Optimization",
        icon_feature: "/assets/icons/check.png",
      },
      {
        id: 3,
        title: "Smart Trigger Functions",
        icon_feature: "/assets/icons/hands.png",
      },
    ],
  },
];

export default function ProductCard() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 w-full">
      {FEATURE_LIST_CONTAINER.map((item, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6 lg:p-[16px] bg-white rounded-2xl shadow-[0px_1px_2px_rgba(0,0,0,0.06)] gap-6 lg:gap-8"
        >
          {/* Content Section */}
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[32px] py-4 sm:py-6 lg:py-[92px] w-full lg:w-[576px] order-2 lg:order-1">
            
            {/* Title & Description */}
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[27px] w-full">
              <p className="text-2xl sm:text-3xl lg:text-[44px] font-medium leading-tight lg:leading-[52px] text-[#1b0c25]">
                {item.title}
              </p>
              <p className="text-sm sm:text-base lg:text-[15px] leading-relaxed lg:leading-[26px] text-gray-600">
                {item.description}
              </p>
            </div>
            
            {/* Feature List */}
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[16px]">
              {item.feature_list.map((feature) => (
                <div key={feature.id} className="flex gap-3 sm:gap-4 lg:gap-[16px] items-start">
                  
                  {/* Icon Container */}
                  <div
                    className="flex-shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 lg:w-[32px] lg:h-[32px] rounded-[4px] shadow-[inset_0_-1px_2px_0_rgba(156,32,218,0.15),
                        inset_0_1px_1px_0_#fff, 0_1px_8px_0_rgba(82,44,102,0.1)] bg-[linear-gradient(180deg,#fff_0%,#efe9f5_100%)]"
                  >
                    <Image
                      src={feature.icon_feature}
                      alt={feature.title}
                      width={16}
                      height={16}
                      className="sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5"
                    />
                  </div>
                  
                  {/* Feature Title */}
                  <div>
                    <p className="text-sm sm:text-base lg:text-[17px] leading-relaxed lg:leading-[28px] font-medium text-[#1b0c25]">
                      {feature.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Section */}
          <div className="w-full lg:w-[528px] h-auto order-1 lg:order-2">
            <Image
              src={item.image}
              alt={item.title}
              width={528}
              height={494}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}