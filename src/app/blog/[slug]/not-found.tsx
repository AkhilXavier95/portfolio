"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-5xl flex-col justify-center px-4 py-16 sm:px-6">
      <div className="term-panel p-6 sm:p-8">
        <p className="text-[var(--term-red)]">404 — post not found</p>
        <p className="mt-3 term-muted">
          {`// the file you requested is not in ~/blog`}
        </p>
        <Link
          href="/blog"
          className="mt-6 inline-block text-[var(--term-green)]"
        >
          <span className="term-muted">$</span> cd /blog
        </Link>
      </div>
    </main>
  );
}
