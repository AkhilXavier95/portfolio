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
  params
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);

    return (
      <article className="max-w-6xl mx-auto px-4 py-10 min-h-screen">
        <Link
          href="/blog"
          className="flex items-center text-indigo-500 hover:text-indigo-300 transition duration-200 mb-8 font-semibold"
        >
          <ArrowRight className="w-5 h-5 mr-2 transform rotate-180" />
          Back to All Posts
        </Link>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-6">{post.date}</p>
        <div
          className="prose prose-lg max-w-none markdown-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    );
  } catch {
    notFound();
  }
};

export default BlogPost;
