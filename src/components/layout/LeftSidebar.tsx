"use client";

import UserInfoCard, { type NavItem } from "@/components/common/UserInfoCard";
import { currentUser } from "@/data/users";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems: NavItem[] = [
  { label: "Home", icon: "home", href: "/home" },
  { label: "Profile", icon: "user", href: "/profile" },
  { label: "Messages", icon: "chat", href: "/messages" },
  { label: "Notifications", icon: "bell", href: "/notifications" },
];

export default function LeftSidebar() {
  const pathname = usePathname();
  const items = navItems.map((item) => ({
    ...item,
    active: pathname.startsWith(item.href),
  }));

  return (
    <aside className="w-full max-w-[320px]">
      <UserInfoCard
        name={currentUser.name}
        title={currentUser.title}
        avatar={currentUser.avatar}
        cover={currentUser.cover}
        navItems={items}
        renderNavItem={(item) => (
          <Link href={item.href} className="block w-full text-left">
            {item.label}
          </Link>
        )}
      />
    </aside>
  );
}
