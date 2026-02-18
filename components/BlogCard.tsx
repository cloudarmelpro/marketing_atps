import Image from "next/image";
import TitleSection from "./TitleSection";

const CARD_BLOG = [
  {
    id: 1,
    title: "Startup",
    description: "Why Data Security is Vital for Every SaaS Platform",
    date: "OCT 10, 2024",
    imageBlog: "/images/blog1.png",
  },
  {
    id: 2,
    title: "SaaS",
    description: "Efficient Strategies for Scaling Your SaaS Business",
    date: "MAR 13, 2025",
    imageBlog: "/images/blog2.png",
  },
  {
    id: 3,
    title: "AI",
    description: "The Ultimate SaaS Template for Startups",
    date: "FEB 16, 2025",
    imageBlog: "/images/blog3.png",
  },
];

export default function BlogCard() {
  return (
    <div className="flex justify-between">
      {CARD_BLOG.map((blog) => (
        <div
          key={blog.id}
          className="w-[400px] h-[437px] rounded-[16px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
        >
          <div className="flex flex-col items-center py-[8px] gap-[24px]">
            <div className="w-[384px] h-[280px] rounded-[12px] overflow-hidden">
              <Image
                src={blog.imageBlog}
                alt="Blog Card"
                width={384}
                height={280}
              />
            </div>
            <div className="w-full flex flex-col gap-[15px] px-[8px]">
              <div className="flex items-center justify-between px-[16px]">
                <TitleSection title={blog.title} />
                <div>
                  <p>{blog.date}</p>
                </div>
              </div>
              <div className="px-[16px]">
                <p className="font-medium text-[23px] leading-[28px] text-[#1b0c25]">
                  {blog.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
