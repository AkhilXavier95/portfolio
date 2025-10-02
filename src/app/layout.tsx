import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Akhil Xavier - Frontend Developer",
  description:
    "Frontend Developer specializing in React. I build fast, responsive, and user-friendly web applications.",
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
