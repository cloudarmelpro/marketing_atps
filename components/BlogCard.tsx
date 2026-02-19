import Link from "next/link";
import Image from "next/image";
import TitleSection from "./TitleSection";
import { motion } from "framer-motion";
import { scaleInVariants, viewportSettings } from "@/lib/motion";
import { CARD_BLOG } from "@/lib/constants";

export default function BlogCard() {
  return (
    <div className="flex justify-between max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:gap-4">
      {CARD_BLOG.map((blog, index) => (
        <Link href={`/Blog/${blog.id}`} key={blog.id} className="block">
          <motion.div
            variants={scaleInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="w-[400px] h-[437px] rounded-[16px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)] max-lg:w-full max-lg:h-auto"
          >
            <div className="flex flex-col items-center py-[8px] gap-[24px] max-lg:gap-4">
              {/* Image */}
              <div className="w-[384px] h-[280px] rounded-[12px] overflow-hidden max-lg:w-full max-lg:h-auto">
                <Image
                  src={blog.imageBlog}
                  alt="Blog Card"
                  width={384}
                  height={280}
                  className="max-lg:w-full max-lg:h-auto"
                />
              </div>

              {/* Contenu */}
              <div className="w-full flex flex-col gap-[15px] px-[8px] max-lg:gap-3">
                {/* Meta */}
                <div className="flex items-center justify-between px-[16px] max-lg:px-3">
                  <TitleSection title={blog.title} />
                  <div>
                    <p className="max-lg:text-sm">{blog.date}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="px-[16px] max-lg:px-3">
                  <p className="font-medium text-[23px] leading-[28px] text-[#1b0c25] max-lg:text-lg max-lg:leading-snug">
                    {blog.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
