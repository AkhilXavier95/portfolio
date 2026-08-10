import type { Metadata } from "next";
import { Syne, Source_Sans_3 } from "next/font/google";
import "@/styles/globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Akhil Xavier — Full Stack Developer for Product Teams",
  description:
    "Independent full stack developer. React, TypeScript, and Next.js for product builds, performance overhauls, design systems, and CMS-backed business sites. Available for project work.",
  verification: {
    google: "7DM6-BkJzlL6fMrQStvoPqveUQ31mncVqeJEwhqujZI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${sourceSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
