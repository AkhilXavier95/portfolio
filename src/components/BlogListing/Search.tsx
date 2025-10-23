import React from "react";
import { Search } from "lucide-react";

interface SearchBlogProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBlog: React.FC<SearchBlogProps> = ({
  searchQuery,
  setSearchQuery
}) => {
  return (
    <div className="relative w-full md:w-64">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
      <input
        type="text"
        placeholder="Search posts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50"
      />
    </div>
  );
};

export default SearchBlog;
