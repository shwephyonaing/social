import Avatar from "@/components/common/Avatar";
import Input from "@/components/ui/input";
import { currentUser } from "@/data/users";

type Props = {
  placeholder?: string;
};

export default function CommentInput({
  placeholder = "Share your thoughts here...",
}: Props) {
  return (
    <div className="flex items-center gap-3">
      <Avatar
        src={currentUser.avatar}
        alt={currentUser.name}
        size={36}
        className="border border-slate-200"
      />
      <Input placeholder={placeholder} />
    </div>
  );
}
