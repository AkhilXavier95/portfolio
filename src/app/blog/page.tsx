import BlogListing from "@/components/BlogListing";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "My Blog",
  description:
    "Thoughts on development, design, and the journey of building for the web"
};

const BlogPage = async () => {
  const posts = await getAllPosts();

  return <BlogListing posts={posts} />;
};

export default BlogPage;
