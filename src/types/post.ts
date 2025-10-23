export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  contentHtml: string;
  tags?: string[];
  category?: string;
}
