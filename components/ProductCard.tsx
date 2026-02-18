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
    <div className="flex flex-col gap-10">
      {FEATURE_LIST_CONTAINER.map((item, feature) => (
        <div
          key={feature}
          className="flex items-center justify-between px-[16px] bg-white rounded-[16px] shadow-[0px_1px_2px_rgba(0,0,0,0.06)]"
        >
          <div className="flex flex-col gap-[32px] py-[92px]">
            <div className="flex flex-col gap-[27px] w-[576px]">
              <p className="text-[44px] font-medium leading-[52px] text-[#1b0c25]">
                {item.title}
              </p>
              <p className="text-[15px] leading-[26px]">{item.description}</p>
            </div>
            <div className="flex flex-col gap-[16px]">
              {item.feature_list.map((feature) => (
                <div key={feature.id} className="flex gap-[16px]">
                  <div
                    className="flex items-center justify-center w-[32px] h-[32px] rounded-[4px] shadow-[inset_0_-1px_2px_0_rgba(156,32,218,0.15),
                        inset_0_1px_1px_0_#fff, 0_1px_8px_0_rgba(82,44,102,0.1)] bg-[linear-gradient(180deg,#fff_0%,#efe9f5_100%)]"
                  >
                    <div>
                      <Image
                        src={feature.icon_feature}
                        alt={feature.title}
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-[17px] leading-[28px] font-medium">
                      {feature.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[528px] h-[494px]">
            <Image
              src={item.image}
              alt="product card image"
              width={528}
              height={494}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
