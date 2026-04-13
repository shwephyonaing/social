import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 shadow-inner shadow-slate-50 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100",
        className,
      )}
      {...props}
    />
  );
});

export default Input;
