"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative w-full">
      {FEATURE_LIST_CONTAINER.map((item, index) => {
        // Target scale decreases for cards that stay behind longer
        const targetScale = 1 - (FEATURE_LIST_CONTAINER.length - index) * 0.05;
        // Range for when EACH card should start shrinking (when the next cards cover it)
        const start = index / FEATURE_LIST_CONTAINER.length;
        return (
          <Card
            key={item.id}
            item={item}
            index={index}
            range={[start, 1]}
            targetScale={targetScale}
            progress={scrollYProgress}
          />
        );
      })}
    </div>
  );
}

function Card({
  item,
  index,
  range,
  targetScale,
  progress,
}: {
  item: any;
  index: number;
  range: [number, number];
  targetScale: number;
  progress: any;
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[80vh] flex items-center justify-center sticky top-0 w-full"
      style={{ zIndex: index }}
    >
      <motion.div
        style={{
          scale,
          top: `calc(10% + ${index * 10}px)`,
        }}
        className="relative flex flex-col lg:flex-row items-center justify-between p-[16px] bg-white rounded-3xl shadow-[0px_4px_30px_rgba(0,0,0,0.06)] gap-6 lg:gap-12 w-full max-w-[1240px] h-[526px] border border-gray-100"
      >
        {/* Content Section */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[32px] py-4 sm:py-6 lg:py-8 w-full lg:w-[1024px] order-2 lg:order-1 pl-[44px]">
          {/* Title & Description */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[27px] w-full">
            <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-medium leading-tight lg:leading-[52px] text-[#1b0c25]">
              {item.title}
            </h2>
            <p className="text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[26px] text-gray-600 max-w-lg">
              {item.description}
            </p>
          </div>

          {/* Feature List */}
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[16px]">
            {item.feature_list.map((feature: any) => (
              <div
                key={feature.id}
                className="flex gap-3 sm:gap-4 lg:gap-[16px] items-center"
              >
                {/* Icon Container */}
                <div className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-[8px] border border-gray-100 shadow-sm bg-white">
                  <Image
                    src={feature.icon_feature}
                    alt={feature.title}
                    width={20}
                    height={20}
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
        <div className="w-full lg:w-[600px] h-auto order-1 lg:order-2 flex justify-center">
          <div className="relative w-full h-[494px] aspect-[528/494] max-w-[528px]">
            <Image
              src={item.image}
              alt={item.title}
              width={528}
              height={494}
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
