import TitleSection from "@/components/TitleSection";
import Image from "next/image";
import { CARD_BLOG } from "@/lib/constants";
import { notFound } from "next/navigation";
import { FadeInUp, ScaleIn, StaggerContainer } from "@/lib/motion";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetail({ params }: PageProps) {
  const { id } = await params;
  const blog = CARD_BLOG.find((b) => b.id.toString() === id);

  if (!blog) {
    notFound();
  }

  return (
    <StaggerContainer className="flex flex-col items-center gap-[80px] px-[390px] py-[140px] h-auto max-xl:px-[200px] max-lg:px-[100px] max-md:px-[40px] max-sm:px-[20px] max-md:py-[80px] max-sm:py-[60px] max-md:gap-[60px] max-sm:gap-[40px]">
      <div className="flex flex-col items-center justify-center w-[1108px] max-xl:w-full max-md:h-auto max-sm:h-auto">
        <StaggerContainer
          staggerDelay={0.15}
          className="flex flex-col gap-[24px] items-center justify-center w-[1108px] max-xl:w-full max-md:h-auto max-sm:h-auto"
        >
          <FadeInUp className="flex flex-col gap-[12px] items-center justify-center w-[1108px] max-xl:w-full max-md:h-auto max-sm:h-auto max-md:gap-[8px]">
            <TitleSection
              title={blog.title}
              className="shadow-[0_33px_13px_0_rgba(0,0,0,0.01),0_19px_11px_0_rgba(0,0,0,0.04),0_8px_8px_0_rgba(0,0,0,0.06),0_2px_5px_0_rgba(0,0,0,0.07)]"
            />
            <div className="flex flex-col items-start w-[700px] max-xl:w-full max-md:w-full max-sm:w-full max-md:h-auto max-sm:h-auto">
              <h1 className="font-medium text-[56px] leading-[60px] text-center text-[#1B0C25] max-xl:text-[48px] max-xl:leading-[52px] max-lg:text-[40px] max-lg:leading-[44px] max-md:text-[32px] max-md:leading-[36px] max-sm:text-[28px] max-sm:leading-[32px]">
                {blog.description}
              </h1>
            </div>
          </FadeInUp>
          <FadeInUp
            delay={0.2}
            className="w-[700px] h-[26px] flex items-start justify-center max-xl:w-full max-md:w-full max-sm:w-full"
          >
            <p className="font-normal text-[14px] leading-[26px] text-center text-[#1B0C25]">
              {blog.date}
            </p>
          </FadeInUp>
          <ScaleIn
            delay={0.3}
            className="w-[700px] h-[466px] rounded-[16px] overflow-hidden
					 flex items-center justify-center max-xl:w-full max-xl:h-auto max-md:w-full max-sm:w-full max-md:h-auto max-sm:h-auto"
          >
            <Image
              src={blog.detailImage}
              alt="blog"
              width={700}
              height={466}
              className="max-xl:w-full max-xl:h-auto max-md:w-full max-md:h-auto max-sm:w-full max-sm:h-auto"
            />
          </ScaleIn>
        </StaggerContainer>
      </div>
      <div className="flex flex-col items-center justify-center w-[1108px] max-xl:w-full max-md:h-auto max-sm:h-auto">
        <StaggerContainer className="w-[700px] max-xl:w-full max-md:w-full max-sm:w-full max-md:h-auto max-sm:h-auto">
          <FadeInUp className="flex items-start gap-[26px] flex-col max-md:h-auto max-sm:h-auto max-md:gap-[20px] max-sm:gap-[16px]">
            <p className="font-normal text-[15px] leading-[26px] text-[#1B0C25] max-md:text-[14px] max-md:leading-[24px] max-sm:text-[13px] max-sm:leading-[22px]">
              Using SaaS for financial management brings a range of benefits.
              From real-time data insights to enhanced security and easy
              scalability, SaaS tools are designed to support financial accuracy
              and business agility. Here are a few specific benefits.
            </p>
            <p className="font-normal text-[15px] leading-[26px] text-[#1B0C25] max-md:text-[14px] max-md:leading-[24px] max-sm:text-[13px] max-sm:leading-[22px]">
              Cost Efficiency: "No large upfront costs and lower maintenance
              expenses." Accessibility: "Access your data anytime, anywhere with
              cloud-based systems." Flexibility: "Choose from scalable pricing
              plans that grow with your needs.
            </p>
          </FadeInUp>
          <FadeInUp className="flex flex-col pt-[39px] max-md:h-auto max-sm:h-auto max-md:pt-[30px] max-sm:pt-[20px]">
            <h1 className="font-medium text-[43px] leading-[53px] text-[#1B0C25] max-xl:text-[38px] max-xl:leading-[48px] max-lg:text-[32px] max-lg:leading-[42px] max-md:text-[28px] max-md:leading-[36px] max-sm:text-[24px] max-sm:leading-[32px]">
              Key Benefits of SaaS for <br className="max-sm:hidden" />{" "}
              Businesses
            </h1>
          </FadeInUp>
          <FadeInUp className="flex flex-col items-start pt-[20px] max-md:h-auto max-sm:h-auto max-md:pt-[15px] max-sm:pt-[10px]">
            <p className="font-normal text-[15px] leading-[26px] text-[#1B0C25] max-md:text-[14px] max-md:leading-[24px] max-sm:text-[13px] max-sm:leading-[22px]">
              <span className="font-bold">Cost Efficiency:</span>
              <br /> "SaaS typically operates on a subscription model, allowing
              businesses to avoid large upfront costs. This flexibility makes
              high-quality software accessible to startups, mid-size companies,
              and large enterprises alike."
            </p>
          </FadeInUp>
          <div className="flex flex-col items-start pt-[20px] max-md:h-auto max-sm:h-auto">
            <ul className="flex flex-col items-start max-md:h-auto max-sm:h-auto max-md:gap-[20px] max-sm:gap-[16px]">
              <FadeInUp className="text-[15px] leading-[26px] text-[#1B0C25] max-md:text-[14px] max-md:leading-[24px] max-sm:text-[13px] max-sm:leading-[22px]">
                <span className="font-bold">Scalability on Demand:</span>
                <br /> "As your business grows, so can your SaaS services. SaaS
                platforms make it easy to add or reduce services as needed, so
                you’re only paying for what you use. Scaling is fast, often just
                a few clicks, allowing you to stay agile."
              </FadeInUp>
              <FadeInUp className="text-[15px] leading-[26px] text-[#1B0C25] max-md:text-[14px] max-md:leading-[24px] max-sm:text-[13px] max-sm:leading-[22px]">
                <span className="font-bold">Access from Anywhere:</span> <br />
                "SaaS solutions are cloud-based, meaning employees can access
                software from any location with internet connectivity. This
                mobility supports remote work, real-time collaboration, and fast
                data access across global teams."
              </FadeInUp>
              <FadeInUp className="text-[15px] leading-[26px] text-[#1B0C25] max-md:text-[14px] max-md:leading-[24px] max-sm:text-[13px] max-sm:leading-[22px]">
                <span className="font-bold">
                  Automatic Updates and Security:
                </span>{" "}
                <br />
                "With SaaS, updates are handled automatically by the provider,
                ensuring you always have access to the latest features and
                security improvements without any hassle.
              </FadeInUp>
            </ul>
          </div>
          <FadeInUp className="flex flex-col items-start pt-[39px] max-md:h-auto max-sm:h-auto max-md:pt-[30px] max-sm:pt-[20px]">
            <h1 className="font-medium text-[43px] leading-[53px] text-[#1B0C25] max-xl:text-[38px] max-xl:leading-[48px] max-lg:text-[32px] max-lg:leading-[42px] max-md:text-[28px] max-md:leading-[36px] max-sm:text-[24px] max-sm:leading-[32px]">
              Choosing the Right SaaS Solution for Your Business
            </h1>
          </FadeInUp>
          <FadeInUp className="flex flex-col items-start pt-[20px] max-md:h-auto max-sm:h-auto max-md:pt-[15px] max-sm:pt-[10px]">
            <p className="font-normal text-[15px] leading-[26px] text-[#1B0C25] max-md:text-[14px] max-md:leading-[24px] max-sm:text-[13px] max-sm:leading-[22px]">
              <span className="font-bold">Compatibility: </span> <br />
              <br /> "Ensure that the SaaS software integrates with your
              existing systems, such as your CRM, payment processing, and
              accounting software, for smooth operations."
            </p>
          </FadeInUp>
          <div className="flex flex-col items-start pt-[20px] max-md:h-auto max-sm:h-auto">
            <ul className="flex flex-col w-[681px] items-start max-xl:w-full max-md:w-full max-sm:w-full max-md:h-auto max-sm:h-auto max-md:gap-[20px] max-sm:gap-[16px]">
              <FadeInUp className="text-[15px] leading-[26px] text-[#1B0C25] max-md:text-[14px] max-md:leading-[24px] max-sm:text-[13px] max-sm:leading-[22px]">
                <span className="font-bold">Scalability:</span>
                <br /> "Look for a solution that can grow with your business. A
                good SaaS platform should accommodate your business as it
                scales, supporting additional users, locations, and services as
                needed."
              </FadeInUp>
              <FadeInUp className="text-[15px] leading-[26px] text-[#1B0C25] max-md:text-[14px] max-md:leading-[24px] max-sm:text-[13px] max-sm:leading-[22px]">
                <span className="font-bold">User Experience: </span>
                <br />
                "The ideal SaaS product should have a user-friendly interface,
                minimizing the need for intensive training and promoting quick
                adoption among your team."
              </FadeInUp>
              <FadeInUp className="text-[15px] leading-[26px] text-[#1B0C25] max-md:text-[14px] max-md:leading-[24px] max-sm:text-[13px] max-sm:leading-[22px]">
                <span className="font-bold">
                  Customer Support and Security:
                </span>
                <br />
                "Evaluate the SaaS provider’s customer support and data security
                measures. Quality support and secure data practices are
                essential for long-term success and reliability.
              </FadeInUp>
            </ul>
          </div>
        </StaggerContainer>
      </div>
    </StaggerContainer>
  );
}
