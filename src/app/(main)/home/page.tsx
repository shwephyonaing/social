import CreatePostBox from "@/components/home/CreatePostBox";
import FeedList from "@/components/home/FeedList";

export default function HomePage() {
  return (
    <div className="space-y-4">
      <CreatePostBox />
      <FeedList />
    </div>
  );
}
