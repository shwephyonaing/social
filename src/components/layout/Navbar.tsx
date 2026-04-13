import Avatar from "@/components/common/Avatar";
import SearchBar from "@/components/common/SearchBar";
import { currentUser } from "@/data/users";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-3 md:px-8">
        <div className="flex items-center gap-2">
          <Avatar src="/logo.png" alt="logo" size={40} />
          <span className="text-lg font-extrabold text-slate-900">Social</span>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-md">
            <SearchBar />
          </div>
        </div>
        <div className=" flex items-center gap-5">
          <button className="text-sm text-slate-600 hover:text-slate-900">
            Logout
          </button>
          <Avatar src={currentUser.avatar} alt={currentUser.name} size={40} />
        </div>
      </div>
    </header>
  );
}
