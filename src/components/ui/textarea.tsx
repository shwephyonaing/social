import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className, ...props },
  ref,
) {
  return (
    <textarea
      ref={ref}
      className={cn(
        "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-inner shadow-slate-50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100",
        className,
      )}
      {...props}
    />
  );
});

export default Textarea;
