import { Button } from "./ui/button";

export function ButtonDemo() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-[16px] w-full sm:w-auto">
      <Button
        className="w-full sm:w-[200px] h-12 sm:h-[50px] bg-[#1b0c25] hover:bg-[#2a1a3a]
        rounded-[8px] text-sm sm:text-[15px] leading-normal sm:leading-[26px]
        shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.4)]
        backdrop-blur-[6px]"
      >
        Get Started
      </Button>

      <Button
        className="w-full sm:w-[200px] h-12 sm:h-[50px] bg-white hover:bg-gray-100
        text-black text-sm sm:text-[15px] leading-normal sm:leading-[26px] rounded-[8px]"
      >
        Demo
      </Button>
    </div>
  );
}

export function ButtonDemoBlur() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-[16px] w-full sm:w-auto">
      <Button
        className="w-full sm:w-[200px] h-12 sm:h-[50px] bg-[#1b0c25] hover:bg-[#2a1a3a]
        rounded-[8px] text-sm sm:text-[15px] leading-normal sm:leading-[26px]
        shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.4)]
        backdrop-blur-[6px]"
      >
        Get Started
      </Button>

      <Button
        className="w-full sm:w-[200px] h-12 sm:h-[50px] hover:bg-white/80 border border-white
        text-black text-sm sm:text-[15px] leading-normal sm:leading-[26px]
        rounded-[8px] bg-white/25 backdrop-blur-[6px] shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
      >
        Demo
      </Button>
    </div>
  );
}

export function ButtonDemoVarient() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-[16px] w-full sm:w-auto">
      <Button
        className="w-full sm:w-[200px] h-12 sm:h-[50px] bg-[#1b0c25] hover:bg-[#2a1a3a]
        rounded-[8px] text-sm sm:text-[15px] leading-normal sm:leading-[26px]
        shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.4)]
        backdrop-blur-[6px]"
      >
        Get Started
      </Button>

      <Button
        variant="outline"
        className="w-full sm:w-[200px] h-12 sm:h-[50px]
        text-black text-sm sm:text-[15px] leading-normal sm:leading-[26px]
        rounded-[8px]"
      >
        Book a Demo
      </Button>
    </div>
  );
}

export default ButtonDemo;
