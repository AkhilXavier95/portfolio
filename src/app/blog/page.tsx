import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import NavBar from "@/components/NavBar";
import { NAV_ITEMS } from "@/constants";

const BlogPage = async () => {
  const posts = await getAllPosts();

  return (
    <main className="max-w-5xl mx-auto p-4 w-screen h-screen">
      <NavBar scrollOffset={80} items={[...NAV_ITEMS]} />

      <h1 className="text-3xl font-bold mb-6 mt-4">My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-4">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:underline">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm">{post.date}</p>
              <p className="text-gray-700">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default BlogPage;
