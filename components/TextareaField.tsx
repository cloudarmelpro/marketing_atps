// TextareaField.tsx
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";

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
    <div className="flex flex-col gap-2 w-full min-w-0">
      <Label className="text-sm sm:text-[15px] font-medium leading-[26px] text-[#1B0C25]">
        {label}
      </Label>
      <Textarea
        placeholder={placeholder}
        className={cn(
          "bg-white w-full min-h-[120px] rounded-[8px] text-sm sm:text-base resize-y",
          className
        )}
      />
    </div>
  );
}
