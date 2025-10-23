"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { Post } from "@/types/post";
import NavBar from "@/components/NavBar";
import { NAV_ITEMS } from "@/constants";
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

  const categories = ["all", ...allTags.slice(0, 5)]; // Limit to 5 main categories

  return (
    <main className="min-h-screen bg-gradient-to-br">
      <NavBar scrollOffset={80} items={[...NAV_ITEMS]} />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12 mt-4">
          <h1 className="text-6xl py-1 font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            My Blog
          </h1>
          <p className="text-slate-400 text-lg">
            Thoughts on development, design, and the journey of building for the
            web
          </p>
        </div>

        <div className="mb-10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <CategoryList
            categories={categories}
            filter={filter}
            setFilter={setFilter}
          />
          <SearchBlog
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        <div className="space-y-6">
          {filteredPosts.map((post, index) => (
            <List
              post={post}
              index={index}
              calculateReadTime={calculateReadTime}
            />
          ))}
        </div>

        {filteredPosts.length === 0 && <NoPost />}
      </div>
    </main>
  );
};

export default BlogListing;
