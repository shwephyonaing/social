import Input from "@/components/ui/input";

type Props = {
  placeholder?: string;
};

export default function SearchBar({ placeholder = "Search" }: Props) {
  return (
    <div className="relative w-full max-w-xl">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
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
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </span>
      <Input
        aria-label="Search"
        placeholder={placeholder}
        className="pl-10 pr-4"
      />
    </div>
  );
}
