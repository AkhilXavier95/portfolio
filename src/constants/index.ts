export type Social = {
  name: "LinkedIn" | "GitHub" | "Instagram";
  href: string;
};

export const NAV_ITEMS_FOR_HOME = [
  { id: "home", label: "Home" },
  { id: "about", label: "About me" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Experience" },
  { id: "projects", label: "My Work" },
  { id: "blog", label: "My Blog", href: "/blog" }
] as const;

export const NAV_ITEMS = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "about", label: "About me", href: "/#about" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "work", label: "Experience", href: "/#work" },
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

export const EMAIL = "akhilxavierdev@gmail.com";

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
    title: "NeetoUI",
    description:
      "React and TypeScript component library built at BigBinary, adopted across 5+ internal products. Design-system-first architecture with full Storybook documentation.",
    image: "/images/neetoui.svg",
    tags: ["React", "TypeScript", "Tailwind", "Storybook"],
    liveUrl: "https://neeto.com/"
  },
  {
    id: 2,
    title: "Boundri",
    description:
      "Geospatial e-commerce platform: map-based product customization, SSR, Mapbox GL JS, Shapefile and GeoJSON processing, and Printify sync.",
    image: "/images/boundri.svg",
    tags: ["Next.js", "React", "Mapbox", "Rails", "Printify"],
    codeUrl: "https://github.com/akhilxavier/boundri"
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
      "Feature-rich data table UI with drag-and-drop column reordering, inline cell editing, and virtualized rendering for large datasets.",
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
  },
  {
    id: 7,
    title: "Typed-React-Boilerplate",
    description:
      "Production-ready React, Redux, and TypeScript starter with Plop.js scaffolding and Immer for immutable state.",
    image: "/images/types.svg",
    tags: ["React", "Redux", "TypeScript", "Plop.js", "Immer"],
    codeUrl: "https://github.com/akhilxavier/typed-react-boilerplate"
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
    company: "Carland 360 (Independent Consultant, Kochi)",
    role: "Full Stack Developer",
    period: "Nov 2025 — Present",
    summary:
      "Designed and built a full car dealership site on Wix with vehicle listings, inquiry flows, and a customer-facing 360° showcase. Integrated Razorpay for booking deposits and service payments with webhook-driven order status. Used Wix CMS Collections so the sales team can manage inventory and bookings without developer handoffs.",
    skills: ["Wix", "Razorpay", "JavaScript", "CMS Collections"]
  },
  {
    company: "The Baking Project (Independent Consultant, Kochi)",
    role: "Software Engineer",
    period: "Nov 2025 — Present",
    summary:
      "Migrated the app to Next.js 13+ App Router with React Server Components and Server Actions to shrink the client bundle and speed up first paint. Applied a hybrid rendering model—SSG for marketing and static pages, SSR for dynamic content—to improve Core Web Vitals and SEO while keeping interactivity where it matters.",
    skills: ["Next.js", "React", "TypeScript", "RSC"]
  },
  {
    company: "Black Hammer (Independent Consultant, Remote — US)",
    role: "Senior Software Engineer",
    period: "Jul 2024 — Present",
    summary:
      "Built a full-stack geospatial e-commerce product from scratch: users draw map boundaries to generate regional products with live Mapbox GL JS tiles and Printify sync. Processed large GeoJSON, Shapefile, and KML datasets with GDAL and PROJ for accurate CRS work. Shipped secure multi-file uploads with Rails ActiveStorage and Sidekiq parsing, tightened frontend performance with memoization and lazy loading, and integrated Stripe and Printify for checkout and fulfillment.",
    skills: [
      "React",
      "Next.js",
      "Rails",
      "Mapbox",
      "PostgreSQL",
      "Stripe",
      "Printify"
    ]
  },
  {
    company: "BigBinary (Kochi, India)",
    role: "Software Engineer",
    period: "May 2021 — Mar 2024",
    summary:
      "Contributed to NeetoUI, a shared React component library adopted across Neeto products, standardizing UI patterns and delivery. Led a small team on neetoDesk and neetoInterview across features, reviews, and releases. Built product features with React and Tailwind on neetoForms and other internal SaaS tools, and helped deliver an HR system with React, GraphQL, and PostgreSQL—including employee records, leave management, and RBAC.",
    skills: ["React", "TypeScript", "Tailwind", "GraphQL", "PostgreSQL"]
  },
  {
    company: "Fingent Global Solutions (Kochi, India)",
    role: "Software Engineer",
    period: "Nov 2020 — Apr 2021",
    summary:
      "Built scalable EdTech SPAs with reusable components and strong accessibility (ARIA, semantic HTML). Improved performance through lazy loading and solid state management, and partnered with backend engineers on REST API design and integration.",
    skills: ["React", "Rails", "REST", "Accessibility"]
  },
  {
    company: "Cubet Techno Labs (Kochi, India)",
    role: "Software Engineer",
    period: "Sep 2018 — Oct 2020",
    summary:
      "Architected modular Redux and Redux-Saga stores for multi-feature SPAs across concurrent projects. Delivered PWA capabilities—offline support, service worker caching, and durable client state—for low-connectivity use. Built real-time chat with Socket.io and QuickBlox and cut unnecessary re-renders with memoized selectors and component memoization on busy views.",
    skills: ["React", "Redux", "Redux-Saga", "Socket.io", "PWA"]
  },
  {
    company: "Tranzmeo (Kochi, India)",
    role: "Software Engineer",
    period: "Mar 2018 — Aug 2018",
    summary:
      "Designed and built responsive UI for an online consultation platform with React and Ant Design, wired forms to backend APIs, and implemented validation with clear, dynamic user feedback.",
    skills: ["React", "Ant Design", "REST"]
  }
];
