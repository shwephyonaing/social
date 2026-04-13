import Avatar from "@/components/common/Avatar";
import { Comment } from "@/types/post";

type Props = {
  comments: Comment[];
};

export default function CommentList({ comments }: Props) {
  return (
    <div className="mt-3 space-y-3">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
        >
          <div className="flex items-start gap-3">
            <Avatar
              src={comment.author.avatar}
              alt={comment.author.name}
              size={38}
              className="border border-white shadow-sm"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-900">
                  {comment.author.name}
                </span>
                {comment.author.badge && (
                  <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-[#1d4ed8]">
                    {comment.author.badge}
                  </span>
                )}
              </div>
              <div className="text-[12px] text-slate-500">
                {comment.author.title}
              </div>
              <p className="mt-1.5 text-sm text-slate-700">{comment.message}</p>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                <span>{comment.postedAt}</span>
                <button className="font-medium text-slate-600 hover:text-slate-800">
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
