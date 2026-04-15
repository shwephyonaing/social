"use client";

import LeftSidebar from "@/components/layout/LeftSidebar";
import Navbar from "@/components/layout/Navbar";
import RightSidebar from "@/components/layout/RightSidebar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function MainLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isProfileRoute = pathname.startsWith("/profile");

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">
      <Navbar />
      <div className="mx-auto flex h-[calc(100vh-68px)] max-w-7xl gap-8 px-6 pb-12 pt-8 md:px-8">
        <div className="hidden w-[320px] shrink-0 lg:block">
          <LeftSidebar />
        </div>
        <main
          className={cn(
            "min-w-0 flex-1",
            isProfileRoute
              ? "overflow-hidden"
              : "overflow-y-auto pr-1 scrollbar-hide",
          )}
        >
          {children}
        </main>
        {!isProfileRoute ? (
          <div className="hidden w-[320px] shrink-0 xl:block">
            <RightSidebar />
          </div>
        ) : null}
      </div>
    </div>
  );
}
