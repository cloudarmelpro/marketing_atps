import InputField from "@/components/InputField";
import TextareaField from "@/components/TextareaField";
import TitleSection from "@/components/TitleSection";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import { Mail, LifeBuoy } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-[120px] pb-20 max-lg:py-12">
      <Container className="flex flex-col justify-center items-center gap-[60px] max-lg:gap-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center w-full max-w-[800px]">
          <TitleSection title="Contact" />
          <h1 className="font-medium text-4xl sm:text-5xl lg:text-[60px] lg:leading-[60px] text-[#1B0C25]">
            Get in touch with our team
          </h1>
        </div>

        {/* Main Card */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10 w-full bg-white rounded-[16px] p-4 sm:p-6 lg:p-10">
          {/* Left Column */}
          <div className="flex flex-col justify-between gap-8 lg:gap-12 lg:min-w-0 lg:flex-1 lg:max-w-[420px]">
            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <p className="font-medium text-base lg:text-[17px] leading-[28px] text-[#1B0C25]">
                Feel free to reach out - we'd love to connect.
              </p>

              <div className="flex flex-wrap gap-6 lg:gap-8">
                <div className="flex items-start gap-3">
                  <Mail className="text-[#D37BFF] shrink-0" size={24} />
                  <div className="flex flex-col gap-1 min-w-0">
                    <p className="font-medium text-[15px] leading-[26px] text-[#1B0C25]">
                      Email us
                    </p>
                    <p className="font-normal text-[15px] leading-[26px] text-[#1b0c25]">
                      hello@fluence.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <LifeBuoy className="text-[#D37BFF] shrink-0" size={20} />
                  <div className="flex flex-col gap-1 min-w-0">
                    <p className="font-medium text-[15px] leading-[26px] text-[#1B0C25]">
                      Get support
                    </p>
                    <p className="font-normal text-[15px] leading-[26px] text-[#1b0c25]">
                      Chat with us
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="flex flex-col gap-6">
              <blockquote className="text-lg lg:text-[23px] font-medium leading-[29px] text-[#1B0C25]">
                "Fluence AI has revolutionized the way we process data. The
                seamless integration and advanced analytics tools have saved
                us countless hours and improved our decision-making"
              </blockquote>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/imageCont.png"
                  alt="Amber Stone"
                  height={60}
                  width={60}
                  className="rounded-full shrink-0"
                />
                <div className="flex flex-col gap-0.5 min-w-0">
                  <p className="text-[15px] font-medium text-[#1B0C25] leading-[26px]">
                    Amber Stone
                  </p>
                  <p className="text-[15px] font-normal text-[#1B0C25] leading-[26px]">
                    Manager, GrowthTech
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 p-4 sm:p-6 lg:p-8 w-full lg:flex-1 lg:min-w-0 bg-[#F7F6F7] rounded-[16px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="First Name" placeholder="First Name" />
              <InputField label="Last Name" placeholder="Last Name" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Email" placeholder="Email" />
              <InputField label="Phone Number" placeholder="Phone Number" />
            </div>

            <div className="flex flex-col gap-2">
              <TextareaField
                label="Message"
                placeholder="Message"
                className="w-full min-h-[120px]"
              />
            </div>

            <div className="flex flex-col items-center gap-2">
              <Button className="w-full h-12 text-[16px] font-medium text-white bg-[#1B0C25] rounded-[8px]">
                Submit
              </Button>
              <p className="text-[13px] font-normal text-[#1B0C25] leading-[26px] text-center">
                By submitting this form you agree to our friendly Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
