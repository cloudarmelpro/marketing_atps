import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function TextareaField({
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
      <div className="flex flex-col gap-[8px] w-[308px] h-[174px]">
        <Label className="text-[15px] font-medium leading-[26px] text-[#1B0C25]">
          {label}
        </Label>
        <Textarea
          placeholder={placeholder}
          className={`bg-white flex items-start justify-center w-[633px] h-[140px] rounded-[8px] ${className || ""}`}
        />
      </div>
    </>
  );
}
