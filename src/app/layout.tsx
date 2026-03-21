import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Akhil Xavier - Senior Full Stack Engineer",
  description:
    "Senior full stack engineer (React, TypeScript, Next.js). NeetoUI contributor, geospatial e-commerce, and 6+ years shipping production web apps.",
  verification: {
    google: "7DM6-BkJzlL6fMrQStvoPqveUQ31mncVqeJEwhqujZI"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
