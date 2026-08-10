import React, { RefObject } from "react";

interface SearchBlogProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  inputRef?: RefObject<HTMLInputElement | null>;
}

const SearchBlog: React.FC<SearchBlogProps> = ({
  searchQuery,
  setSearchQuery,
  inputRef,
}) => {
  return (
    <label className="term-panel flex w-full items-center gap-2 px-3 py-2 text-sm sm:w-72">
      <span className="term-prompt shrink-0">&gt;</span>
      <input
        ref={inputRef}
        type="text"
        placeholder="search posts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="term-input"
        aria-label="Search posts"
      />
    </label>
  );
};

export default SearchBlog;
