"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex h-screen max-w-2xl flex-col items-center justify-center p-6 text-center">
      <h2 className="font-display mb-4 text-2xl font-bold text-[var(--ink)]">
        Post Not Found
      </h2>
      <p className="mb-6 text-[var(--ink-muted)]">
        The blog post you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/blog"
        className="font-semibold text-[var(--accent)] underline decoration-[var(--accent)]/30 underline-offset-4 hover:text-[var(--accent-hover)] hover:decoration-[var(--accent)]"
      >
        ← Back to Blog
      </Link>
    </div>
  );
}
