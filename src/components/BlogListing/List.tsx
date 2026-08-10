import { Post } from "@/types/post";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ListProps {
  post: Post;
  index: number;
  calculateReadTime: (content: string) => string;
}

const List: React.FC<ListProps> = ({ post, index, calculateReadTime }) => {
  return (
    <article
      className="group border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0"
      style={{
        animation: `fadeIn 0.5s ease-out ${index * 0.08}s both`,
      }}
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <div className="mb-3 flex items-center gap-3 text-xs text-[var(--ink-muted)]">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {calculateReadTime(post.contentHtml)}
            </span>
          </div>

          <Link href={`/blog/${post.slug}`}>
            <h2 className="font-display mb-3 cursor-pointer text-2xl font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
              {post.title}
            </h2>
          </Link>

          <p className="mb-4 leading-relaxed text-[var(--ink-muted)]">
            {post.description}
          </p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-[var(--ink-muted)]">
              {post.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 self-start border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] md:self-center"
        >
          Read more
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
};

export default List;
