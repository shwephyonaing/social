import PostCard from "@/components/home/PostCard";
import { posts } from "@/data/posts";

export default function FeedList() {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
