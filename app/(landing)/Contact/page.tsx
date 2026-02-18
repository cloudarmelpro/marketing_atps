import InputField from "@/components/InputField";
import TextareaField from "@/components/TextareaField";
import TitleSection from "@/components/TitleSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Mail, LifeBuoy } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-row justify-center flex-start px-[324px] py-[200px] max-lg:px-4 max-lg:py-12">
      <div className=" pt-20 md:pt-0 flex flex-col justify-center items-center gap-[60px] w-[1240px] h-[783px] max-lg:w-full max-lg:h-auto max-lg:gap-8">
        {/* Header */}
        <div className="flex flex-col w-[800px] h-[99px] max-lg:w-full max-lg:px-4 max-lg:h-auto">
          <div className="flex items-center flex-col gap-[11px] w-[800px] h-[99px] max-lg:w-full max-lg:h-auto">
            <TitleSection
              title="Contact"
              className="shadow-[0_33px_13px_0_rgba(0,0,0,0.01),0_19px_11px_0_rgba(0,0,0,0.04),0_8px_8px_0_rgba(0,0,0,0.06),0_2px_5px_0_rgba(0,0,0,0.07)]"
            />
            <h1 className="font-medium text-[60px] leadin-[60px] text-center flex items-center text-[#1B0C25] max-lg:text-3xl max-lg:leading-tight">
              Get in touch with our team
            </h1>
          </div>
        </div>

        {/* Main Card */}
        <div className="flex items-center justify-center gap-[40px] w-[1240px] h-[624px] bg-white rounded-[16px] max-lg:flex-col max-lg:w-full max-lg:h-auto max-lg:p-6 max-lg:gap-6">
          {/* Left Column */}
          <div className="flex justify-between flex-col items-start gap-[100px] w-[422px] h-[440px] max-lg:w-full max-lg:h-auto max-lg:gap-8">
            {/* Contact Info */}
            <div className="w-[422px] h-[28px] gap-[24px] flex flex-col items-start max-lg:w-full">
              <p className="font-medium text-[17px] leading-[28px] text-[#1B0C25] max-lg:text-base">
                Feel free to reach out - we'd love to connect.
              </p>

              {/* Email & Support Icons */}
              <div className="flex flex-row items-start gap-[24px] w-[422px] h-[60px] max-lg:flex-col max-lg:w-full max-lg:h-auto max-lg:gap-4">
                {/* Email */}
                <div className="flex flex-row items-start gap-[12px] w-[199px] h-[60px] max-lg:w-full">
                  <Mail className="text-[#D37BFF]" size={24} />
                  <div className="flex items-start flex-col gap-[8px] w-[163px] h-[60px] max-lg:w-full">
                    <p className="font-medium text-[15px] leading-[26px] text-[#1B0C25] max-lg:text-sm">
                      Email us
                    </p>
                    <p className="font-normal text-[15px] leading-[26px] text-[#1b0c25] max-lg:text-sm">
                      hello@fluence.com
                    </p>
                  </div>
                </div>

                {/* Support */}
                <div className="flex flex-row items-start gap-[12px] w-[199px] h-[60px] max-lg:w-full">
                  <LifeBuoy className="text-[#D37BFF]" size={20} />
                  <div className="flex items-start flex-col gap-[8px] w-[163px] h-[60px] max-lg:w-full">
                    <p className="font-medium text-[15px] leading-[26px] text-[#1B0C25] max-lg:text-sm">
                      Get support
                    </p>
                    <p className="font-normal text-[15px] leading-[26px] text-[#1b0c25] max-lg:text-sm">
                      Chat with us
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="flex flex-col mt-50 md:mt-0 lg:mt-0 items-start gap-[24px] w-[422px] h-[228px] max-lg:w-full max-lg:h-auto">
              <div className="w-[422px] h-[144px] max-lg:w-full max-lg:h-auto">
                <h1 className="text-[23px] font-medium leading-[29px] max-lg:text-lg">
                  "Fluence AI has revolutionized the way we process data. The
                  seamless integration and advanced analytics tools have saved
                  us countless hours and improved our decision-making"
                </h1>
              </div>
              <div className="flex flex-row items-center gap-[16px] w-[422px] h-[60px] max-lg:w-full">
                <div className="w-[60px] h-[60px] flex-shrink-0">
                  <Image
                    src="/images/imageCont.png"
                    alt="image contact"
                    height={60}
                    width={60}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-[2px] items-start justify-center w-[346px] h-[54px] max-lg:w-full">
                  <p className="text-normal text-[15px] font-medium text-[#1B0C25] leading-[26px] max-lg:text-sm">
                    Amber Stone
                  </p>
                  <p className="text-normal text-[15px] font-normal text-[#1B0C25] leading-[26px] max-lg:text-sm">
                    Manager, GrowthTech
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex flex-col items-start gap-[20px] p-[32px] w-[697px] h-[544px] bg-[#F7F6F7] rounded-[16px] max-lg:w-full max-lg:h-auto max-lg:p-4">
            {/* Name Fields */}
            <div className="flex flex-row items-center justify-center gap-[15px] w-[633px] h-[82px] max-lg:flex-col max-lg:w-full max-lg:h-auto max-lg:gap-4">
              <InputField label="First Name" placeholder="First Name" />
              <InputField label="Last Name" placeholder="Last Name" />
            </div>

            {/* Contact Fields */}
            <div className="flex flex-row items-center justify-center gap-[15px] w-[633px] h-[82px] max-lg:flex-col max-lg:w-full max-lg:h-auto max-lg:gap-4">
              <InputField label="Email" placeholder="Email" />
              <InputField label="Phone Number" placeholder="Phone Number" />
            </div>

            {/* Message Field */}
            <div className="flex flex-col items-start gap-[8px] w-[633px] h-[174px] max-lg:w-full max-lg:h-auto">
              <TextareaField
                label="Message"
                placeholder="Message"
                className="w-[633px] h-[120px]"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center justify-center w-[633px] h-[82px] max-lg:w-full max-lg:h-auto max-lg:gap-2">
              <Button className="flex text-[16px] font-medium text-white shadow-[inset_0_-2px_4px_rgba(255,255,255,0.25)] flex-row items-center justify-center w-[633px] h-[48px] bg-[#1B0C25] rounded-[8px] max-lg:w-full">
                Submit
              </Button>
              <p className="text-[13px] font-normal text-[#1B0C25] leading-[26px] text-center max-lg:text-xs max-lg:px-2">
                By submitting this form you agree to our friendly Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
