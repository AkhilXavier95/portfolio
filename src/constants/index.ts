import { i } from "motion/react-client";

export type Social = {
  name: "LinkedIn" | "GitHub" | "Instagram";
  href: string;
};

export const NAV_ITEMS_FOR_HOME = [
  { id: "home", label: "Home" },
  { id: "about", label: "About me" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "My Work" },
  { id: "blog", label: "My Blog", href: "/blog" }
] as const;

export const NAV_ITEMS = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "about", label: "About me", href: "/#about" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "projects", label: "My Work", href: "/#projects" },
  { id: "blog", label: "My Blog", href: "/blog" }
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
    icon: "/images/javascript.svg",
    name: "JavaScript",
    description:
      "Experienced in building dynamic web applications using JavaScript, with a strong focus on ES6+ features and best practices."
  },
  {
    id: 2,
    icon: "/images/types.svg",
    name: "TypeScript",
    description:
      "Proficient in TypeScript, leveraging its static typing and advanced features to enhance code quality and maintainability in large-scale projects."
  },
  {
    id: 3,
    icon: "/images/react.svg",
    name: "React",
    description:
      "Skilled in React, creating responsive and user-friendly interfaces with a deep understanding of component-based architecture, hooks, and state management."
  },
  {
    id: 4,
    icon: "/images/nextjs.svg",
    name: "Next.js",
    description:
      "Experienced in Next.js, building high-performance web applications with a focus on SEO, user experience, and seamless integration with APIs and modern front-end tools."
  },
  {
    id: 6,
    icon: "/images/tailwind.svg",
    name: "Tailwind CSS",
    description:
      "Proficient in Tailwind CSS, utilizing its utility-first approach to rapidly design and implement responsive, modern web interfaces with a strong emphasis on consistency and scalability."
  },
  {
    id: 5,
    icon: "/images/react-query.svg",
    name: "React Query",
    description:
      "Experienced in React Query for efficient data fetching, caching, and synchronization in React applications, enhancing performance and user experience."
  },
  {
    id: 7,
    icon: "/images/redux.svg",
    name: "Redux",
    description:
      "Skilled in Redux for managing complex application state in React applications, ensuring predictable state transitions and maintainable code architecture."
  },
  {
    id: 8,
    icon: "/images/git.svg",
    name: "Git",
    description:
      "Proficient in Git for version control, enabling efficient collaboration and code management in team environments."
  },
  {
    id: 9,
    icon: "/images/git-hub.svg",
    name: "GitHub",
    description:
      "Experienced in using GitHub for code hosting, collaboration, and continuous integration/continuous deployment (CI/CD) workflows."
  },
  {
    id: 11,
    icon: "/images/docker.svg",
    name: "Docker",
    description:
      "Knowledgeable in Docker for containerizing applications, facilitating consistent development, testing, and deployment across various environments."
  },
  {
    id: 16,
    icon: "/images/html.svg",
    name: "HTML5",
    description:
      "Proficient in HTML5 for structuring web content, ensuring semantic markup and accessibility best practices."
  },
  {
    id: 17,
    icon: "/images/css3.svg",
    name: "CSS3",
    description:
      "Skilled in CSS3 for styling web applications, creating visually appealing and responsive designs using modern techniques and frameworks."
  },
  {
    id: 19,
    icon: "/images/webpack.svg",
    name: "Webpack",
    description:
      "Proficient in Webpack for module bundling and build optimization, enhancing application performance and development workflows."
  },
  {
    id: 20,
    icon: "/images/jest.svg",
    name: "Jest",
    description:
      "Skilled in Jest for unit and integration testing of JavaScript applications, ensuring code reliability and maintainability through comprehensive test coverage."
  },
  {
    id: 24,
    icon: "/images/pwa.svg",
    name: "Progressive Web Apps (PWA)",
    description:
      "Experienced in building Progressive Web Apps (PWAs) that deliver native app-like experiences on the web, enhancing performance, offline capabilities, and user engagement."
  },
  {
    id: 25,
    icon: "/images/socket-io.svg",
    name: "Socket.io",
    description:
      "Proficient in Socket.io for real-time communication in web applications, enabling features like live chat and instant updates with low latency."
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
    image: "/images/neetoui.svg",
    tags: ["React.js", "JavaScript", "TypeScript", "React Query", "Tailwind"],
    liveUrl: "https://neeto.com/"
  },
  {
    id: 2,
    title: "Boundri",
    description:
      "A web app showcasing 30+ years of mapping and satellite imagery expertise. Built with a focus on agricultural solutions, it provides users with interactive maps and unique technical tools for the Ag industry.",
    image: "/images/boundri.svg",
    tags: ["React", "Tailwind", "fabric js", "Mapbox", "JavaScript"],
    liveUrl: "https://boundri.com/"
  },
  {
    id: 3,
    title: "Biblingo",
    description:
      "Biblingo is the only language learning app that provides everything you need to go from zero knowledge of Greek and Hebrew to reading the Bible in its original languages – all in one place.",
    image: "/images/biblingo.png",
    tags: ["React", "Redux", "JavaScript"],
    liveUrl: "https://biblingo.com/"
  },
  {
    id: 4,
    title: "Odin",
    description: "An ed-tech solution for rural students.",
    image: "/images/odin.svg",
    tags: ["React", "Redux", "JavaScript", "PWA"],
    liveUrl: "https://odineducation.org/"
  },
  {
    id: 5,
    title: "Total Parts Plus",
    description:
      "Total Parts Plus specializes in environmental compliance and obsolescence management solutions in the form of data content, web-based solutions and hosted services",
    image: "/images/totalpartsplus.jpg",
    tags: ["React", "Redux", "JavaScript", "PWA"],
    liveUrl: "https://www.totalpartsplus.com/px/login.asp/"
  },
  {
    id: 6,
    title: "Wordle Game",
    description: "A clone of the popular word guessing game Wordle.",
    image: "",
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
    company: "Cubet Techno Labs (Kochi, India)",
    role: "Software Engineer",
    period: "Sep 2018 — Oct 2020",
    summary:
      "Built single-page applications (SPAs) using Redux and Redux-Saga for state management. Implemented PWA features, real-time chat modules with Socket.io and Quickblox, and persistent state handling for smoother user experience.",
    skills: ["React", "Redux", "JavaScript", "PWA"]
  }
];
