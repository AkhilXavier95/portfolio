export type Social = {
  name: "LinkedIn" | "GitHub" | "Instagram";
  href: string;
};

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "My Work" }
] as const;

export const SOCIALS: Social[] = [
  { name: "LinkedIn", href: "https://linkedin.com/" },
  { name: "GitHub", href: "https://github.com/" },
  { name: "Instagram", href: "https://instagram.com/" }
];

export const EMAIL = "you@example.com";

export const SKILLS = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS"
];

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Interactive Globe",
    description:
      "3D WebGL globe with country hover, search, and animated arcs.",
    image: "/globe.svg",
    tags: ["Next.js", "Three.js", "TypeScript"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Realtime Dashboard",
    description: "Metrics dashboard with live websockets, auth, and theming.",
    image: "/window.svg",
    tags: ["React", "Tailwind", "Socket.io"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Portfolio Starter",
    description: "A11y-focused, performant portfolio with MDX blog support.",
    image: "/vercel.svg",
    tags: ["Next.js", "MDX", "Vercel"],
    liveUrl: "#",
    codeUrl: "#"
  }
];

export type WorkItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  skills: string[];
};

export const WORK: WorkItem[] = [
  {
    company: "Acme Corp",
    role: "Frontend Engineer",
    period: "2023 — Present",
    summary:
      "Building design systems and data-heavy UIs. Drove Core Web Vitals from ‘Needs Improvement’ to ‘Good’.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind"]
  },
  {
    company: "Startup XYZ",
    role: "Full‑stack Developer",
    period: "2021 — 2023",
    summary:
      "Shipped features end‑to‑end across API and frontend, with observability and CI automation.",
    skills: ["Node.js", "Prisma", "PostgreSQL", "AWS"]
  }
];
