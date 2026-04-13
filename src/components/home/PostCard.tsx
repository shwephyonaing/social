import Avatar from "@/components/common/Avatar";
import CommentInput from "@/components/home/CommentInput";
import CommentList from "@/components/home/CommentList";
import Card from "@/components/ui/card";
import { Post } from "@/types/post";

type Props = {
  post: Post;
};

function Dots() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="12" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
    </svg>
  );
}

function Heart() {
  return (
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
      <path d="M19 14c1.5-1.4 2-4 0-5.8C17 6 14 7 12 9.5 10 7 7 6 5 8.2 3 10 3.5 12.6 5 14l7 6z" />
    </svg>
  );
}

function Message() {
  return (
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export default function PostCard({ post }: Props) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar src={post.author.avatar} alt={post.author.name} size={48} />
          <div>
            <div className="text-base font-semibold text-slate-900">
              {post.author.name}
            </div>
            <div className="text-sm text-slate-500">{post.author.title}</div>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span>{post.postedAt}</span>
          <button className="text-slate-400 transition hover:text-slate-600">
            <Dots />
          </button>
        </div>
      </div>

      <p className="mt-3 text-[15px] leading-6 text-slate-800">{post.message}</p>

      <div className="mt-3 flex items-center gap-4 text-sm text-slate-500">
        <button className="flex items-center gap-2 rounded-full px-3 py-1.5 hover:bg-slate-100">
          <Message />
          <span>Comment</span>
        </button>
        <button className="ml-auto flex items-center gap-2 rounded-full px-3 py-1.5 text-slate-600 transition hover:bg-blue-50 hover:text-[#1d4ed8]">
          <Heart />
          <span>{post.likes}</span>
        </button>
      </div>

      <div className="mt-4 border-t border-slate-200 pt-4">
        <CommentInput />
        <CommentList comments={post.comments} />
      </div>
    </Card>
  );
}
