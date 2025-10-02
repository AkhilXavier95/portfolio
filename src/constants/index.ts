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
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/akhil-xavier-1b1a82155/"
  },
  { name: "GitHub", href: "https://github.com/AkhilXavier95/" }
];

export const EMAIL = "akhilxavier95@gmail.com";

export const SKILLS = [
  {
    id: 1,
    icon: "/javascript.svg",
    name: "JavaScript",
    description:
      "Experienced in building dynamic web applications using JavaScript, with a strong focus on ES6+ features and best practices."
  },
  {
    id: 2,
    icon: "/typescript.svg",
    name: "TypeScript",
    description:
      "Proficient in TypeScript, leveraging its static typing and advanced features to enhance code quality and maintainability in large-scale projects."
  },
  {
    id: 3,
    icon: "/react.svg",
    name: "React",
    description:
      "Skilled in React, creating responsive and user-friendly interfaces with a deep understanding of component-based architecture, hooks, and state management."
  },
  {
    id: 4,
    icon: "/nextjs.svg",
    name: "Next.js",
    description:
      "Experienced in React Native, building cross-platform mobile applications with a focus on performance, user experience, and seamless integration with native modules."
  },
  {
    id: 6,
    icon: "/tailwind.svg",
    name: "Tailwind CSS",
    description:
      "Proficient in Tailwind CSS, utilizing its utility-first approach to rapidly design and implement responsive, modern web interfaces with a strong emphasis on consistency and scalability."
  }
];

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Neeto",
    description: "Affordable Alternatives to Popular SaaS Products.",
    image: "/neetoui.svg",
    tags: ["React.js", "JavaScript", "TypeScript", "React Query", "Tailwind"],
    liveUrl: "https://neeto.com/"
  },
  {
    id: 2,
    title: "Boundri",
    description:
      "A web app showcasing 30+ years of mapping and satellite imagery expertise. Built with a focus on agricultural solutions, it provides users with interactive maps and unique technical tools for the Ag industry.",
    image: "/boundri.svg",
    tags: ["React", "Tailwind", "fabric js", "Mapbox", "JavaScript"],
    liveUrl: "https://boundri.com/"
  },
  {
    id: 3,
    title: "Biblingo",
    description:
      "Biblingo is the only language learning app that provides everything you need to go from zero knowledge of Greek and Hebrew to reading the Bible in its original languages – all in one place.",
    image: "/biblingo.png",
    tags: ["React", "Redux", "JavaScript"],
    liveUrl: "https://biblingo.com/"
  },
  {
    id: 4,
    title: "Odin",
    description: "An ed-tech solution for rural students.",
    image: "/odin.svg",
    tags: ["React", "Redux", "JavaScript", "PWA"],
    liveUrl: "https://odineducation.org/"
  },
  {
    id: 5,
    title: "Total Parts Plus",
    description:
      "Total Parts Plus specializes in environmental compliance and obsolescence management solutions in the form of data content, web-based solutions and hosted services",
    image: "/totalpartsplus.jpg",
    tags: ["React", "Redux", "JavaScript", "PWA"],
    liveUrl: "https://www.totalpartsplus.com/px/login.asp/"
  },
  {
    id: 6,
    title: "Wordle Game",
    description: "A clone of the popular word guessing game Wordle.",
    image: "/wordle.png",
    tags: ["React", "TypeScript", "Tailwind"],
    liveUrl: "/wordle"
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
    company: "Black Hammer (Remote, US)",
    role: "Software Engineer",
    period: "Jul 2024 — Present",
    summary:
      "Developing a map-based custom e-commerce platform using React, Next.js, and Mapbox. Enhanced user experience and engagement by implementing interactive product mapping and seamless AWS integrations.",
    skills: ["React", "TypeScript", "JavaScript", "AWS"]
  },
  {
    company: "BigBinary (Kochi, India)",
    role: "Software Engineer",
    period: "May 2021 — May 2024",
    summary:
      "Built and maintained multiple internal products using React, Tailwind CSS, and NeetoUI. Contributed to NeetoUI, a reusable design system adopted across teams, improving development speed and consistency.",
    skills: ["React", "TypeScript", "Tailwind", "React Query"]
  },
  {
    company: "Fingent Global Solutions (Kochi, India)",
    role: "Software Engineer",
    period: "Nov 2020 — Apr 2021",
    summary:
      "Built single-page applications (SPAs) using Redux and Redux-Saga for state management. Implemented PWA features, real-time chat modules with Socket.io and Quickblox, and persistent state handling for smoother user experience.",
    skills: ["React", "TypeScript", "Tailwind", "Redux"]
  },
  {
    company: " Cubet Techno Labs (Kochi, India)",
    role: "Software Engineer",
    period: "Sep 2018 — Oct 2020",
    summary:
      "Built single-page applications (SPAs) using Redux and Redux-Saga for state management. Implemented PWA features, real-time chat modules with Socket.io and Quickblox, and persistent state handling for smoother user experience.",
    skills: ["React", "Redux", "JavaScript", "PWA"]
  }
];
