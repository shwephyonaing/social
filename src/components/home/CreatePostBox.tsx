import Avatar from "@/components/common/Avatar";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { currentUser } from "@/data/users";

export default function CreatePostBox() {
  return (
    <Card className="p-5">
      <div className="flex items-center gap-3">
        <Avatar src={currentUser.avatar} alt={currentUser.name} size={46} />
        <input
          type="text"
          placeholder="What's on your mind?"
          className="w-full border-none bg-transparent text-[15px] font-medium text-slate-500 placeholder:text-slate-500 focus:outline-none"
        />
      </div>
      <div className="mt-4 h-px bg-slate-200" />
      <div className="mt-4 flex items-center justify-between">
        <button className="inline-flex items-center gap-2 text-[15px] font-medium text-slate-600 hover:text-slate-800">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500">
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 7h16" />
              <path d="M4 17h16" />
              <path d="M7 4v16" />
              <path d="M17 4v16" />
              <path d="m8 14 3-3 2 2 3-3 3 3" />
            </svg>
          </span>
          Add Media
        </button>
        <Button className="px-5">Post</Button>
      </div>
    </Card>
  );
}
