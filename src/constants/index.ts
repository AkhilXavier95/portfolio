export type Social = {
  name: "LinkedIn" | "GitHub" | "Instagram";
  href: string;
};

export const EMAIL = "akhilxavierdev@gmail.com";

export const CONTACT_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent("Project inquiry")}`;

export const NAV_ITEMS_FOR_HOME = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Work" },
  { id: "work", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
  { id: "blog", label: "Blog", href: "/blog" },
] as const;

export const NAV_ITEMS = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "services", label: "Services", href: "/#services" },
  { id: "projects", label: "Work", href: "/#projects" },
  { id: "work", label: "Experience", href: "/#work" },
  { id: "about", label: "About", href: "/#about" },
  { id: "contact", label: "Contact", href: "/#contact" },
  { id: "blog", label: "Blog", href: "/blog" },
] as const;

export const SOCIALS: Social[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/akhil-xavier-1b1a82155/",
  },
  { name: "GitHub", href: "https://github.com/AkhilXavier95/" },
];

export type Service = {
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    title: "Next.js & React product builds",
    description:
      "Ship or overhaul App Router products with RSC, Server Actions, and Core Web Vitals in mind—faster first paint without losing interactivity.",
  },
  {
    title: "Design systems & component libraries",
    description:
      "Shared React/TypeScript UI kits with Storybook so teams stop reinventing patterns and ship consistent interfaces across products.",
  },
  {
    title: "Map & geospatial product UIs",
    description:
      "Mapbox-driven experiences, boundary tools, and data pipelines for GeoJSON, Shapefile, and KML—built for real catalog and fulfillment flows.",
  },
  {
    title: "CMS-driven business sites",
    description:
      "Wix/Velo and CMS collections with payments and inquiry flows, so sales and ops can run inventory and bookings without a developer for every change.",
  },
];

export const SKILLS = [
  {
    id: 1,
    icon: "/images/javascript.svg",
    name: "JavaScript",
    description:
      "Experienced in building dynamic web applications using JavaScript, with a strong focus on ES6+ features and best practices.",
  },
  {
    id: 2,
    icon: "/images/types.svg",
    name: "TypeScript",
    description:
      "Proficient in TypeScript, leveraging its static typing and advanced features to enhance code quality and maintainability in large-scale projects.",
  },
  {
    id: 3,
    icon: "/images/react.svg",
    name: "React",
    description:
      "Skilled in React, creating responsive and user-friendly interfaces with a deep understanding of component-based architecture, hooks, and state management.",
  },
  {
    id: 4,
    icon: "/images/nextjs.svg",
    name: "Next.js",
    description:
      "Experienced in Next.js, building high-performance web applications with a focus on SEO, user experience, and seamless integration with APIs and modern front-end tools.",
  },
  {
    id: 6,
    icon: "/images/tailwind.svg",
    name: "Tailwind CSS",
    description:
      "Proficient in Tailwind CSS, utilizing its utility-first approach to rapidly design and implement responsive, modern web interfaces with a strong emphasis on consistency and scalability.",
  },
  {
    id: 5,
    icon: "/images/react-query.svg",
    name: "React Query",
    description:
      "Experienced in React Query for efficient data fetching, caching, and synchronization in React applications, enhancing performance and user experience.",
  },
  {
    id: 7,
    icon: "/images/redux.svg",
    name: "Redux",
    description:
      "Skilled in Redux for managing complex application state in React applications, ensuring predictable state transitions and maintainable code architecture.",
  },
  {
    id: 8,
    icon: "/images/git.svg",
    name: "Git",
    description:
      "Proficient in Git for version control, enabling efficient collaboration and code management in team environments.",
  },
  {
    id: 9,
    icon: "/images/git-hub.svg",
    name: "GitHub",
    description:
      "Experienced in using GitHub for code hosting, collaboration, and continuous integration/continuous deployment (CI/CD) workflows.",
  },
  {
    id: 11,
    icon: "/images/docker.svg",
    name: "Docker",
    description:
      "Knowledgeable in Docker for containerizing applications, facilitating consistent development, testing, and deployment across various environments.",
  },
  {
    id: 16,
    icon: "/images/html.svg",
    name: "HTML5",
    description:
      "Proficient in HTML5 for structuring web content, ensuring semantic markup and accessibility best practices.",
  },
  {
    id: 17,
    icon: "/images/css3.svg",
    name: "CSS3",
    description:
      "Skilled in CSS3 for styling web applications, creating visually appealing and responsive designs using modern techniques and frameworks.",
  },
  {
    id: 19,
    icon: "/images/webpack.svg",
    name: "Webpack",
    description:
      "Proficient in Webpack for module bundling and build optimization, enhancing application performance and development workflows.",
  },
  {
    id: 20,
    icon: "/images/jest.svg",
    name: "Jest",
    description:
      "Skilled in Jest for unit and integration testing of JavaScript applications, ensuring code reliability and maintainability through comprehensive test coverage.",
  },
  {
    id: 24,
    icon: "/images/pwa.svg",
    name: "Progressive Web Apps (PWA)",
    description:
      "Experienced in building Progressive Web Apps (PWAs) that deliver native app-like experiences on the web, enhancing performance, offline capabilities, and user engagement.",
  },
  {
    id: 25,
    icon: "/images/socket-io.svg",
    name: "Socket.io",
    description:
      "Proficient in Socket.io for real-time communication in web applications, enabling features like live chat and instant updates with low latency.",
  },
];

export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Boundri — geospatial e-commerce",
    description:
      "Built a map-first commerce product for a US client: draw boundaries, generate regional goods, and sync Printify fulfillment. Next.js, Mapbox GL JS, Rails, and large GeoJSON/Shapefile pipelines.",
    tags: ["Next.js", "Mapbox", "Rails", "Stripe", "Printify"],
  },
  {
    id: 2,
    title: "Carland 360 — vehicle inspection platform",
    description:
      "Wix-built platform for Kerala car buyers to book professional inspections, run quick self-checks, and source vehicles with confidence. CMS Collections for the ops team; Razorpay for booking and service payments.",
    tags: ["Wix", "Razorpay", "CMS", "JavaScript"],
    liveUrl: "https://www.carland360.com/",
  },
  {
    id: 3,
    title: "The Baking Project — bakery site & academy",
    description:
      "Kochi artisan bakery site for custom cakes, desserts, and baking workshops. Rebuilt on Next.js App Router for faster pages, better SEO, and content the business can update without a developer for every change.",
    tags: ["Next.js", "TypeScript", "RSC", "SEO"],
    liveUrl: "https://www.thebakingproject.in/",
  },
  {
    id: 4,
    title: "NeetoUI — design system",
    description:
      "React and TypeScript component library at BigBinary, adopted across 5+ Neeto products. Design-system-first architecture with Storybook so teams ship consistent UI faster.",
    tags: ["React", "TypeScript", "Tailwind", "Storybook"],
    liveUrl: "https://neeto.com/",
  },
  {
    id: 5,
    title: "Biblingo",
    description:
      "Language-learning product UI for Greek and Hebrew—helping learners go from zero to reading original biblical texts in one place.",
    tags: ["React", "Redux", "JavaScript"],
    liveUrl: "https://biblingo.com/",
  },
  {
    id: 6,
    title: "Odin Education",
    description:
      "Ed-tech PWA for rural students—accessible React interfaces built for low-connectivity contexts.",
    tags: ["React", "Redux", "PWA"],
    liveUrl: "https://odineducation.org/",
  },
  {
    id: 7,
    title: "Total Parts Plus",
    description:
      "Dense data-table product UI: drag-and-drop columns, inline editing, and virtualized rows for large compliance datasets.",
    tags: ["React", "Redux", "PWA"],
    liveUrl: "https://www.totalpartsplus.com/px/login.asp/",
  },
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
      "Built Carland 360 on Wix for Kerala car buyers: book professional inspections, run quick self-checks, and get help sourcing a vehicle. Wired Razorpay for booking and service payments with webhook-driven status, and CMS Collections so the ops team manages services and bookings without developer handoffs.",
    skills: ["Wix", "Razorpay", "JavaScript", "CMS Collections"],
  },
  {
    company: "The Baking Project (Independent Consultant, Kochi)",
    role: "Software Engineer",
    period: "Nov 2025 — Present",
    summary:
      "Rebuilt the bakery’s customer site on Next.js App Router—custom cakes, desserts, and baking academy pages—with RSC and Server Actions for a smaller client bundle and stronger SEO. Hybrid rendering keeps marketing pages fast while interactive flows stay where they matter.",
    skills: ["Next.js", "React", "TypeScript", "RSC"],
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
      "Printify",
    ],
  },
  {
    company: "BigBinary (Kochi, India)",
    role: "Software Engineer",
    period: "May 2021 — Mar 2024",
    summary:
      "Contributed to NeetoUI, a shared React component library adopted across Neeto products, standardizing UI patterns and delivery. Led a small team on neetoDesk and neetoInterview across features, reviews, and releases. Built product features with React and Tailwind on neetoForms and other internal SaaS tools, and helped deliver an HR system with React, GraphQL, and PostgreSQL—including employee records, leave management, and RBAC.",
    skills: ["React", "TypeScript", "Tailwind", "GraphQL", "PostgreSQL"],
  },
  {
    company: "Fingent Global Solutions (Kochi, India)",
    role: "Software Engineer",
    period: "Nov 2020 — Apr 2021",
    summary:
      "Built scalable EdTech SPAs with reusable components and strong accessibility (ARIA, semantic HTML). Improved performance through lazy loading and solid state management, and partnered with backend engineers on REST API design and integration.",
    skills: ["React", "Rails", "REST", "Accessibility"],
  },
  {
    company: "Cubet Techno Labs (Kochi, India)",
    role: "Software Engineer",
    period: "Sep 2018 — Oct 2020",
    summary:
      "Architected modular Redux and Redux-Saga stores for multi-feature SPAs across concurrent projects. Delivered PWA capabilities—offline support, service worker caching, and durable client state—for low-connectivity use. Built real-time chat with Socket.io and QuickBlox and cut unnecessary re-renders with memoized selectors and component memoization on busy views.",
    skills: ["React", "Redux", "Redux-Saga", "Socket.io", "PWA"],
  },
  {
    company: "Tranzmeo (Kochi, India)",
    role: "Software Engineer",
    period: "Mar 2018 — Aug 2018",
    summary:
      "Designed and built responsive UI for an online consultation platform with React and Ant Design, wired forms to backend APIs, and implemented validation with clear, dynamic user feedback.",
    skills: ["React", "Ant Design", "REST"],
  },
];
