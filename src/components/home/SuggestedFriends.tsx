import Avatar from "@/components/common/Avatar";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { suggestedFriends } from "@/data/users";

export default function SuggestedFriends() {
  return (
    <Card className="p-4">
      <div className="mb-3 text-base font-semibold text-slate-900">
        Suggested Friends
      </div>
      <div className="space-y-3">
        {suggestedFriends.map((friend) => (
          <div key={friend.id} className="flex items-center gap-3">
            <Avatar
              src={friend.avatar}
              alt={friend.name}
              size={44}
              className="border border-slate-100"
            />
            <div className="flex-1">
              <div className="text-sm font-semibold text-slate-900">
                {friend.name}
              </div>
              <div className="text-xs text-slate-500">{friend.title}</div>
            </div>
            <Button variant="ghost" className="px-3 py-1 text-sm">
              +
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}
