import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost" | "muted";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const variantClass: Record<Variant, string> = {
    primary:
      "bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-sm shadow-blue-200",
    ghost:
      "bg-white text-slate-700 border border-slate-200 hover:border-slate-300",
    muted:
      "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
        variantClass[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
