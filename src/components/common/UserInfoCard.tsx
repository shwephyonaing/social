import Card from "@/components/ui/card";
import Avatar from "./Avatar";
import type { JSX } from "react";

export type NavItem = {
  label: string;
  icon: "home" | "user" | "chat" | "bell";
  active?: boolean;
  href: string;
};

type Props = {
  name: string;
  title: string;
  avatar: string;
  cover?: string;
  navItems?: NavItem[];
  renderNavItem?: (item: NavItem) => JSX.Element;
};

function Icon({ name }: { name: NavItem["icon"] }) {
  const paths: Record<NavItem["icon"], JSX.Element> = {
    home: (
      <path
        d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" strokeWidth="1.5" />
        <path
          d="M6 20c0-3 2.5-5 6-5s6 2 6 5"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </>
    ),
    chat: (
      <path
        d="M5 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3V7z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    bell: (
      <>
        <path
          d="M18 15V11a6 6 0 1 0-12 0v4l-1.5 2h15z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 19a2 2 0 0 0 4 0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="text-slate-500"
    >
      {paths[name]}
    </svg>
  );
}

export default function UserInfoCard({
  name,
  title,
  avatar,
  cover,
  navItems,
  renderNavItem,
}: Props) {
  return (
    <Card className="overflow-hidden p-0 ">
      {/* Cover Photo */}
      <div
        className="h-28 w-full bg-cover bg-center sidebar-cover"
        style={cover ? { backgroundImage: `url(${cover})` } : undefined}
      />

      {/* Profile Section */}
      <div className="px-4 pb-5">
        <div className="-mt-12 flex flex-col items-center text-center">
          <Avatar
            src={avatar}
            alt={name}
            size={84}
            className="border-2 border-white shadow"
          />
          <div className="mt-3">
            <div className="text-base font-semibold text-slate-900">{name}</div>
            <div className="text-sm text-slate-500">{title}</div>
          </div>
        </div>
      </div>
      {/* Nav Items */}
      {navItems?.length ? (
        <nav className="border-t border-slate-100">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 border-b border-slate-100 px-6 py-3 text-sm font-medium transition last:border-b-0 ${
                item.active
                  ? "text-slate-900"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Icon name={item.icon} />
              {renderNavItem ? renderNavItem(item) : <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      ) : null}
    </Card>
  );
}
