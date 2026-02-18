import InputField from "@/components/InputField";
import TextareaField from "@/components/TextareaField";
import TitleSection from "@/components/TitleSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-row justify-center flex-start px-[324px] py-[200px]">
      <div className="flex flex-col justify-center items-center gap-[60px] w-[1240px] h-[783px]">
        <div className="flex flex-col w-[800px] h-[99px]">
          <div className="flex items-center flex-col gap-[11px] w-[800px] h-[99px]">
            <TitleSection
              title="Contact"
              className="shadow-[0_33px_13px_0_rgba(0,0,0,0.01),0_19px_11px_0_rgba(0,0,0,0.04),0_8px_8px_0_rgba(0,0,0,0.06),0_2px_5px_0_rgba(0,0,0,0.07)]"
            />
            <h1 className="font-medium text-[60px] leadin-[60px] text-center flex items-center text-[#1B0C25]">
              Get in touch with our team
            </h1>
          </div>
        </div>
        <div className="flex items-center justify-center gap-[40px] w-[1240px] h-[624px] bg-white rounded-[16px]">
          <div className="flex justify-between flex-col items-start gap-[100px] w-[422px] h-[440px]">
            <div className="w-[422px] h-[28px] gap-[24px] flex flex-col items-start">
              <p className="font-medium text-[17px] leading-[28px] text-[#1B0C25]">
                Feel free to reach out - we’d love to connect.
              </p>

              <div className="flex flex-row items-start gap-[24px] w-[422px] h-[60px]">
                <div className="flex flex-row items-start gap-[12px] w-[199px] h-[60px]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.2"
                      d="M21 5.25L12 13.5L3 5.25H21Z"
                      fill="#D37BFF"
                    />
                    <path
                      d="M21 4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5ZM12 12.4828L4.92844 6H19.0716L12 12.4828ZM9.25406 12L3.75 17.0447V6.95531L9.25406 12ZM10.3641 13.0172L11.4891 14.0531C11.6274 14.1801 11.8084 14.2506 11.9963 14.2506C12.1841 14.2506 12.3651 14.1801 12.5034 14.0531L13.6284 13.0172L19.0659 18H4.92844L10.3641 13.0172ZM14.7459 12L20.25 6.95438V17.0456L14.7459 12Z"
                      fill="#D37BFF"
                    />
                  </svg>
                  <div className="flex items-start flex-col gap-[8px] w-[163px] h-[60px]">
                    <p className="font-medium text-[15px] leading-[26px] text-[#1B0C25]">
                      Email us
                    </p>
                    <p className="font-normal text-[15px] leading-[26px] text-[#1b0c25]">
                      hello@fluence.com
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-start gap-[12px] w-[199px] h-[60px]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.25 14.25C11.25 14.4489 11.171 14.6397 11.0303 14.7803C10.8897 14.921 10.6989 15 10.5 15C10.1022 15 9.7206 14.842 9.4393 14.5607C9.158 14.2794 9 13.8978 9 13.5V9.75C8.8011 9.75 8.6103 9.671 8.4697 9.5303C8.329 9.3897 8.25 9.1989 8.25 9C8.25 8.8011 8.329 8.6103 8.4697 8.4697C8.6103 8.329 8.8011 8.25 9 8.25C9.3978 8.25 9.7794 8.408 10.0607 8.6893C10.342 8.9706 10.5 9.3522 10.5 9.75V13.5C10.6989 13.5 10.8897 13.579 11.0303 13.7197C11.171 13.8603 11.25 14.0511 11.25 14.25ZM19.5 9.75C19.5 11.6784 18.9282 13.5634 17.8568 15.1668C16.7855 16.7702 15.2627 18.0199 13.4812 18.7578C11.6996 19.4958 9.7392 19.6889 7.8479 19.3127C5.95656 18.9365 4.21928 18.0079 2.85571 16.6443C1.49215 15.2807 0.563551 13.5434 0.187351 11.6521C-0.188859 9.7608 0.00422132 7.8004 0.742181 6.01884C1.48013 4.23726 2.72982 2.71451 4.33319 1.64317C5.93657 0.57183 7.8216 0 9.75 0C12.335 0.00273 14.8134 1.03084 16.6413 2.85872C18.4692 4.68661 19.4973 7.16498 19.5 9.75ZM18 9.75C18 8.1183 17.5161 6.52325 16.6096 5.16655C15.7031 3.80984 14.4146 2.75242 12.9071 2.12799C11.3997 1.50357 9.7409 1.34019 8.1405 1.65852C6.54017 1.97685 5.07016 2.76259 3.91637 3.91637C2.76259 5.07015 1.97685 6.54016 1.65853 8.1405C1.3402 9.7408 1.50358 11.3996 2.128 12.9071C2.75242 14.4146 3.80984 15.7031 5.16655 16.6096C6.52326 17.5161 8.1183 18 9.75 18C11.9373 17.9975 14.0343 17.1275 15.5809 15.5809C17.1275 14.0343 17.9975 11.9373 18 9.75ZM9.375 6.75C9.5975 6.75 9.815 6.68402 10 6.5604C10.185 6.43679 10.3292 6.26109 10.4144 6.05552C10.4995 5.84995 10.5218 5.62375 10.4784 5.40552C10.435 5.18729 10.3278 4.98684 10.1705 4.8295C10.0132 4.67217 9.8127 4.56502 9.5945 4.52162C9.3763 4.47821 9.1501 4.50049 8.9445 4.58564C8.7389 4.67078 8.5632 4.81498 8.4396 4.99998C8.316 5.18499 8.25 5.4025 8.25 5.625C8.25 5.92337 8.3685 6.20952 8.5795 6.4205C8.7905 6.63147 9.0766 6.75 9.375 6.75Z"
                      fill="#D37BFF"
                    />
                  </svg>
                  <div className="flex items-start flex-col gap-[8px] w-[163px] h-[60px]">
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
            <div className="flex flex-col items-start gap-[24px] w-[422px] h-[228px]">
              <div className="w-[422px] h-[144px]">
                <h1 className="text-[23px] font-medium leading-[29px]">
                  “Fluence AI has revolutionized the way we process data. The
                  seamless integration and advanced analytics tools have saved
                  us countless hours and improved our decision-making”
                </h1>
              </div>
              <div className="flex flex-row items-center gap-[16px] w-[422px] h-[60px]">
                <div className="w-[60px] h-[60px]">
                  <Image
                    src="/images/imageCont.png"
                    alt="image contact"
                    height={60}
                    width={60}
                  />
                </div>
                <div className="flex flex-col gap-[2px] items-start justify-center w-[346px] h-[54px]">
                  <p className="text-normal text-[15px] font-medium text-[#1B0C25] leading-[26px]">
                    Amber Stone
                  </p>
                  <p className="text-normal text-[15px] font-normal text-[#1B0C25] leading-[26px]">
                    Manager, GrowthTech
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[20px] p-[32px] w-[697px] h-[544px] bg-[#F7F6F7] rounded-[16px]">
            <div className="flex flex-row items-center justify-center gap-[15px] w-[633px] h-[82px]">
              <InputField label="First Name" placeholder="First Name" />
              <InputField label="Last Name" placeholder="Last Name" />
            </div>
            <div className="flex flex-row items-center justify-center gap-[15px] w-[633px] h-[82px]">
              <InputField label="Email" placeholder="Email" />
              <InputField label="Phone Number" placeholder="Phone Number" />
            </div>
            <div className="flex flex-col items-start gap-[8px] w-[633px] h-[174px]">
              <TextareaField
                label="Message"
                placeholder="Message"
                className="w-[633px] h-[120px]"
              />
            </div>
            <div className="flex flex-col items-center justify-center w-[633px] h-[82px]">
              <Button className="flex text-[16px] font-medium text-white shadow-[inset_0_-2px_4px_rgba(255,255,255,0.25)] flex-row items-center justify-center w-[633px] h-[48px] bg-[#1B0C25] rounded-[8px]">
                Submit
              </Button>
              <p className="text-[13px] font-normal text-[#1B0C25] leading-[26px]">
                By submitting this form you agree to our friendly . Privacy
                Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
