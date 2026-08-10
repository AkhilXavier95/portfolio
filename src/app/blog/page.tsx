import BlogListing from "@/components/BlogListing";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "blog/ | Akhil Xavier",
  description:
    "Notes on development, React, and shipping for the web — terminal edition",
};

const BlogPage = async () => {
  const posts = await getAllPosts();

  return <BlogListing posts={posts} />;
};

export default BlogPage;
