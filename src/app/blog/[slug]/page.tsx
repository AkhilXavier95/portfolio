import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";

import "@/styles/blog.css";

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
      <article className="max-w-6xl mx-auto py-10 min-h-screen">
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
