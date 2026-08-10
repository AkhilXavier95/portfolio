import React from "react";
import { Search } from "lucide-react";

interface SearchBlogProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBlog: React.FC<SearchBlogProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div className="relative w-full md:w-64">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--ink-muted)]" />
      <input
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full border border-[var(--border)] bg-[var(--surface)] py-2 pl-10 pr-4 text-sm text-[var(--ink)] placeholder:text-[var(--ink-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
      />
    </div>
  );
};

export default SearchBlog;
