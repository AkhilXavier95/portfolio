import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import BlogMermaid from "@/components/BlogMermaid";

import "@/styles/blog.css";

export const generateStaticParams = async () => {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(/\.md$/, "") }));
};

const BlogPost = async ({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);

    return (
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="term-panel overflow-hidden">
          <div className="flex items-center gap-3 border-b border-[var(--term-border)] px-4 py-3 text-xs sm:text-sm">
            <div className="term-dots" aria-hidden>
              <span className="dot-red" />
              <span className="dot-yellow" />
              <span className="dot-green" />
            </div>
            <span className="truncate term-muted">
              ~/blog/<span className="text-[var(--term-blue)]">{slug}.md</span>
            </span>
          </div>

          <div className="p-5 sm:p-8">
            <Link
              href="/blog"
              className="mb-6 inline-block text-sm text-[var(--term-green)]"
            >
              <span className="term-muted">$</span> cd ../blog
            </Link>

            <div className="mb-8 space-y-1 border-b border-[var(--term-border)] pb-6 text-sm">
              <p>
                <span className="text-[var(--term-amber)]">title</span>
                <span className="term-muted">:</span>{" "}
                <span className="text-[var(--term-text)]">{post.title}</span>
              </p>
              <p>
                <span className="text-[var(--term-amber)]">date</span>
                <span className="term-muted">:</span>{" "}
                <span className="term-muted">{post.date}</span>
              </p>
              {post.tags && post.tags.length > 0 && (
                <p>
                  <span className="text-[var(--term-amber)]">tags</span>
                  <span className="term-muted">:</span>{" "}
                  <span className="text-[var(--term-green)]">
                    [{post.tags.map((t) => `"${t}"`).join(", ")}]
                  </span>
                </p>
              )}
            </div>

            <BlogMermaid html={post.contentHtml} />
          </div>
        </div>
      </main>
    );
  } catch {
    notFound();
  }
};

export default BlogPost;
