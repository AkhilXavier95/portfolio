"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto p-4 text-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
      <p className="mb-4">
        The blog post you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/blog" className="text-blue-500 hover:underline">
        ← Back to Blog
      </Link>
    </div>
  );
}
