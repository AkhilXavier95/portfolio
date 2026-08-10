import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";

import "@/styles/blog.css";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
      <article className="mx-auto min-h-screen max-w-6xl px-6 py-10">
        <Link
          href="/blog"
          className="mb-8 flex items-center font-semibold text-[var(--accent)] transition hover:text-[var(--accent-hover)]"
        >
          <ArrowRight className="mr-2 h-5 w-5 rotate-180 transform" />
          Back to All Posts
        </Link>

        <h1 className="font-display mb-4 text-4xl font-bold tracking-tight text-[var(--ink)] md:text-5xl">
          {post.title}
        </h1>
        <p className="mb-8 text-[var(--ink-muted)]">{post.date}</p>
        <div
          className="markdown-content prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    );
  } catch {
    notFound();
  }
};

export default BlogPost;
