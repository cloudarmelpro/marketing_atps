import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function InputField({
  label,
  placeholder,
  className,
}: {
  label: string;
  placeholder: string;
  className?: string;
}) {
  return (
    <>
      <div className="flex flex-col gap-[8px] w-[308px] h-[82px]">
        <Label className="text-[15px] font-medium leading-[26px] text-[#1B0C25]">
          {label}
        </Label>
        <Input
          placeholder={placeholder}
          className={`bg-white flex items-start justify-center w-[308px] h-[48px] rounded-[8px] ${className || ""}`}
        />
      </div>
    </>
  );
}
