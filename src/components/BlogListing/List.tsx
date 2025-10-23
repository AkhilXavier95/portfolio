import { Post } from "@/types/post";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
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
      key={post.slug}
      className="group bg-slate-900/30 border border-slate-800 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5"
      style={{
        animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
      }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {calculateReadTime(post.contentHtml)}
            </span>
          </div>

          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-2xl font-semibold mb-3 text-white group-hover:text-indigo-400 transition-colors cursor-pointer">
              {post.title}
            </h2>
          </Link>

          <p className="text-slate-400 mb-4 leading-relaxed">
            {post.description}
          </p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-xs text-slate-400"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <Link href={`/blog/${post.slug}`}>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-indigo-500/10 border border-slate-700 hover:border-indigo-500/50 rounded-lg text-sm text-slate-400 hover:text-indigo-400 transition-all group-hover:translate-x-1 whitespace-nowrap self-start md:self-center">
            Read More
            <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </article>
  );
};

export default List;
