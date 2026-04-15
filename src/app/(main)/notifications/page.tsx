import Avatar from "@/components/common/Avatar";
import Card from "@/components/ui/card";
import { userMap } from "@/data/users";

const notifications = [
  {
    id: "notif-1",
    actor: userMap["bessie-cooper"],
    message: "start following you.",
    time: "10 minutes ago",
  },
  {
    id: "notif-2",
    actor: {
      name: "Samuel Lee",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    },
    message: "liked your post.",
    time: "1 hours ago",
  },
  {
    id: "notif-3",
    actor: {
      name: "Joseph Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1541534401786-2077eed87a72?auto=format&fit=crop&w=200&q=80",
    },
    message: "comment on your post.",
    time: "yesterday",
  },
] as const;

export default function NotificationsPage() {
  return (
    <section className="mx-auto w-full max-w-3xl">
      <Card className="overflow-hidden p-0">
        <header className="border-b border-slate-200 px-6 py-5">
          <h1 className="text-xl font-semibold text-slate-900">Notifications</h1>
        </header>

        <ul className="divide-y divide-slate-200">
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className="flex items-center gap-3 px-6 py-4 md:gap-4"
            >
              <Avatar
                src={notification.actor.avatar}
                alt={notification.actor.name}
                size={44}
                className="border border-slate-100"
              />
              <p className="flex-1 text-sm text-slate-500">
                <span className="font-semibold text-slate-900">
                  {notification.actor.name}
                </span>{" "}
                {notification.message}
              </p>
              <span className="text-xs text-slate-400">{notification.time}</span>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
