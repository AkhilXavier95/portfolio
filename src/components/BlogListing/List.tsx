import { Post } from "@/types/post";
import Link from "next/link";
import React from "react";

interface ListProps {
  post: Post;
  index: number;
  calculateReadTime: (content: string) => string;
}

const List: React.FC<ListProps> = ({ post, index, calculateReadTime }) => {
  const date = new Date(post.date);
  const iso = Number.isNaN(date.getTime())
    ? post.date
    : date.toISOString().slice(0, 10);

  return (
    <article
      className="term-row group"
      style={{
        animation: `fadeIn 0.4s ease-out ${index * 0.05}s both`,
      }}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs term-muted">
            <span className="text-[var(--term-amber)]">{iso}</span>
            <span>{calculateReadTime(post.contentHtml)}</span>
            <span className="truncate text-[var(--term-blue)]">
              {post.slug}.md
            </span>
          </div>
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-lg font-semibold text-[var(--term-text)] transition-colors group-hover:text-[var(--term-green)] sm:text-xl">
              {post.title}
            </h2>
          </Link>
          <p className="mt-2 text-sm leading-relaxed term-muted">
            {post.description}
          </p>
          {post.tags && post.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[var(--term-green)]">
              {post.tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
          )}
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="shrink-0 self-start text-sm text-[var(--term-green)] sm:self-center"
        >
          → open
        </Link>
      </div>
    </article>
  );
};

export default List;
