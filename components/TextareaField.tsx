// TextareaField.tsx
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

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
      <div className="flex flex-col gap-[8px] w-[308px] h-[174px] max-lg:w-full max-lg:h-auto">
        <Label className="text-[15px] font-medium leading-[26px] text-[#1B0C25] max-lg:text-sm">
          {label}
        </Label>
        <Textarea
          placeholder={placeholder}
          className={`bg-white flex items-start justify-center w-[633px] h-[140px] rounded-[8px] max-lg:w-full ${className || ""}`}
        />
      </div>
    </>
  );
}
