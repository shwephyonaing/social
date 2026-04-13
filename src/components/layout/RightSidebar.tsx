"use client";

import SuggestedFriends from "@/components/home/SuggestedFriends";
import Card from "@/components/ui/card";

export default function RightSidebar() {
  return (
    <aside className="w-full max-w-[320px] space-y-4">
      <SuggestedFriends />

      <Card className="p-4 text-xs text-slate-500">
        <div className="flex flex-wrap gap-3">
          <a className="hover:text-slate-700">About</a>
          <a className="hover:text-slate-700">Help</a>
          <a className="hover:text-slate-700">Privacy &amp; Terms</a>
        </div>
        <div className="mt-3 text-[11px] text-slate-400">
          © 2026 DevCut. All rights reserved.
        </div>
      </Card>
    </aside>
  );
}
