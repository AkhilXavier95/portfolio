import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "@/styles/blog-terminal.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`blog-terminal ${jetbrainsMono.variable} ${jetbrainsMono.className}`}
    >
      <header className="term-header">
        <div className="flex min-w-0 items-center text-sm">
          <div className="term-dots" aria-hidden>
            <span className="dot-red" />
            <span className="dot-yellow" />
            <span className="dot-green" />
          </div>
          <span className="term-prompt truncate">
            akhil@portfolio
            <span className="term-muted">:</span>
            <span className="text-[var(--term-blue)]">~/blog</span>
          </span>
          <span className="term-muted ml-3 hidden sm:inline">· ready</span>
        </div>
        <nav className="flex shrink-0 items-center gap-4 text-sm">
          <Link href="/" className="term-muted hover:text-[var(--term-green)]">
            ~/home
          </Link>
          <Link href="/blog" className="text-[var(--term-green)]">
            ./blog
          </Link>
        </nav>
      </header>
      {children}
    </div>
  );
}
