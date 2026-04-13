import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export default function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white shadow-card",
        className,
      )}
      {...props}
    />
  );
}
