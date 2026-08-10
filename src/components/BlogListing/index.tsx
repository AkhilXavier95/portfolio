"use client";
import React, { useEffect, useRef, useState } from "react";
import { Post } from "@/types/post";
import CategoryList from "./CategoryList";
import "@/styles/blogList.css";
import SearchBlog from "./Search";
import NoPost from "./NoPost";
import List from "./List";

interface BlogListingProps {
  posts: Post[];
}

const BlogListing: React.FC<BlogListingProps> = ({ posts }) => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags || [])));

  const calculateReadTime = (content: string): string => {
    const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      filter === "all" || (post.tags && post.tags.includes(filter));
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ["all", ...allTags.slice(0, 5)];

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "/" || e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      e.preventDefault();
      searchRef.current?.focus();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <div className="mb-8 term-panel p-5 sm:p-6">
        <p className="text-sm">
          <span className="term-prompt">$</span>{" "}
          <span className="term-muted">ls ~/blog</span>
          <span className="term-cursor" aria-hidden />
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--term-text)] sm:text-3xl">
          blog/
        </h1>
        <p className="mt-2 text-sm term-muted">
          {posts.length} files · press{" "}
          <kbd className="text-[var(--term-green)]">/</kbd> to search
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <CategoryList
          categories={categories}
          filter={filter}
          setFilter={setFilter}
        />
        <SearchBlog
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          inputRef={searchRef}
        />
      </div>

      <div className="term-panel p-5 sm:p-6">
        <p className="mb-4 text-xs term-muted">
          {`// ${filteredPosts.length} matching`}
        </p>
        {filteredPosts.map((post, index) => (
          <List
            key={post.slug}
            post={post}
            index={index}
            calculateReadTime={calculateReadTime}
          />
        ))}
        {filteredPosts.length === 0 && <NoPost />}
      </div>
    </main>
  );
};

export default BlogListing;
