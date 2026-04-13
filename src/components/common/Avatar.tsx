import Image from "next/image";
import { cn } from "@/lib/utils";

type AvatarProps = {
  src?: string;
  alt: string;
  size?: number;
  className?: string;
};

export default function Avatar({
  src,
  alt,
  size = 44,
  className,
}: AvatarProps) {
  const initials = alt
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${size}px`}
          className="rounded-full object-cover"
        />
      ) : (
        initials
      )}
    </div>
  );
}
