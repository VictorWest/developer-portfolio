export const profile = {
  name: "Victor Wariboko-West",
  title: "Software Engineer",
  tagline: "Frontend, backend & mobile engineer building robust, real-world products.",
  location: "Nigeria",
  email: "victorwaribokowest@gmail.com",
  phone: "+234 706 896 6798",
  github: "https://github.com/VictorWest",
  linkedin: "https://www.linkedin.com/in/victor-wariboko-west",
  resumeUrl: "https://drive.google.com/file/d/1ZnYrJ5JzitpVTc8a7TuPWVOqpjVDxIyP/view?usp=sharing",
  about:
    "Result-driven software engineer with years of experience building robust, real-world projects across web and mobile. First Class graduate in Computer Engineering (University of Benin, 2025). I care about solving complex problems, polishing user experience, and shipping reliably.",
};

export const skills = {
  Languages: ["TypeScript", "JavaScript", "Java", "Python", "C#", "C", "PHP"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node.js / Express", "NestJS", "Spring", "Django", "ASP.NET", "Laravel", "Flask"],
  Mobile: ["React Native", "Kotlin (Android)"],
  Database: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Firebase"],
  "Cloud & DevOps": ["AWS", "Azure", "Vercel", "Docker", "CI/CD", "Netlify", "Render"],
};

export const experience = [
  {
    role: "Full Stack Developer Tutor",
    company: "Silicon Delta Innovation Hub",
    period: "Jun 2026",
    points: [
      "Mentor aspiring developers in full-stack web development, covering frontend, backend, databases, version control, and deployment.",
      "Design and deliver comprehensive learning programs in HTML, CSS, JavaScript, React, Node.js, Express, SQL, and NoSQL technologies.",
      "Create hands-on projects and practical coding challenges that reinforce software engineering principles and industry best practices.",
      "Assess student progress through code reviews, technical guidance, and personalized feedback, fostering strong development and debugging skills.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "DentistFind",
    period: "Feb 2026",
    points: [
      "Build responsive React.js interfaces and reusable component architectures.",
      "Translate Figma designs into pixel-perfect, accessible UI.",
      "Integrate REST & GraphQL APIs; optimize render and bundle performance.",
      "Maintain code quality with Jest, React Testing Library, and Cypress.",
    ],
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Upwork",
    period: "Nov 2024 — Dec 2025",
    points: [
      "Shipped dynamic UIs in React + Tailwind for international clients.",
      "Owned the full delivery loop: scope, build, communicate, iterate.",
    ],
  },
  {
    role: "Backend Developer",
    company: "KNOW for Creators LTD",
    period: "Feb 2025 — Aug 2025",
    points: [
      "Built scalable NestJS services backed by PostgreSQL + Prisma.",
      "Designed REST APIs with a focus on performance and security.",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Useful Media Limited",
    period: "May 2024 — Nov 2024",
    points: [
      "Delivered end-to-end web apps with React on the front and PHP/Laravel on the back.",
      "Modeled and managed data with MongoDB; integrated REST APIs.",
    ],
  },
  {
    role: "Software Intern",
    company: "WEAM & Company Limited",
    period: "Jan 2024 — Apr 2024",
    points: [
      "IT support, software installs, troubleshooting and server maintenance.",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  category: "Mobile" | "Backend" | "Full-Stack" | "Frontend";
  github?: string;
  demo?: string;
  image?: string;
};

// PLACEHOLDERS — replace details, screenshots, and repo links.
export const projects: Project[] = [
  {
    title: "MedTeksi: HIPAA-Conscious Medical Logistics Platform",
    description: "A medical logistics platform that helps labs, hospitals, and pharmacies manage sensitive deliveries with real-time tracking, priority scheduling, compliance enforcement, and end-to-end accountability.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Redux"],
    category: "Full-Stack",
    github: "https://github.com/VictorWest",
    // demo: "#",
    image: "https://res.cloudinary.com/dflqvjg3w/image/upload/v1780510139/medteksi_qrpghx.png"
  },
  {
    title: "DentistFind: Dental Practice Discovery Platform",
    description: "A responsive frontend experience that helps patients discover dental practices, explore services, and book appointments through an intuitive and accessible user interface.",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "REST API", "Figma"],
    category: 'Frontend',
    github: "https://github.com/VictorWest",
    // demo: "#",
    image: "https://res.cloudinary.com/dflqvjg3w/image/upload/v1780510788/Screenshot_232_vpw4jn.png"
  },
  {
    title: "InvoiceGen",
    description: "A modern invoice generation platform with an intuitive editor, customizable templates, and seamless PDF export functionality. Features quick invoice creation, full customization options, and secure data handling.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Redux"],
    category: "Full-Stack",
    github: "https://github.com/VictorWest",
    // demo: "#",
    image: "https://res.cloudinary.com/dflqvjg3w/image/upload/v1780510138/invoicegen_bpd9lm.png"
  },
  {
    title: "ACH Dashboard",
    description: "Comprehensive payment processing dashboard for managing ACH transactions, payments, and invoices. Features real-time transaction tracking, customer management, and detailed analytics with beautiful visualizations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Redux"],
    category: "Full-Stack",
    github: "https://github.com/VictorWest",
    // demo: "#",
    image: "https://res.cloudinary.com/dflqvjg3w/image/upload/v1780510136/achdashboard_k8qs8z.png"
  },
  {
    title: "Merchly",
    description: "Simplified payment solution platform providing customized payment experiences for small businesses. Features enhanced fraud resistance, customized infrastructure, and comprehensive payment processing services.",
    tech: ["React", "TypeScript", "Tailwind CSS", "ExpressJS", "MongoDB"],
    category: "Full-Stack",
    github: "https://github.com/VictorWest",
    // demo: "#",
    image: "https://res.cloudinary.com/dflqvjg3w/image/upload/v1780510138/merchly_cfwbve.png"
  },
  {
    title: "MediaWave",
    description: "Elegant media streaming platform for movies and TV series with advanced search functionality, beautiful UI, and seamless content browsing experience.",
    tech: ["Laravel", "PHP", "MySQL", "ExpressJS", "Node.js"],
    category: "Full-Stack",
    github: "https://github.com/VictorWest",
    // demo: "#",
    image: "https://res.cloudinary.com/dflqvjg3w/image/upload/v1780511421/Screenshot_2024-11-11_213544_pmwk6p.png"
  },
  {
    title: "Backend Projects",
    description: "Scalable backend systems have also been built, implementing RESTful APIs, authentication, and database operations to support full-stack applications. View full source code and implementation on GitHub.",
    tech: [
      "Node.js", "Express.js", "NestJS",
      "Java Spring Boot", "Spring Data JPA / Hibernate",
      "Django", "Flask", "ASP.NET",
      "Next.js", "Laravel",
      "MongoDB", "MySQL", "PostgreSQL", "Firebase",
      "Prisma ORM", "TypeORM",
      "Database Design", "Data Modeling",
      "Query Optimization", "Database Migration Management"
    ],
    category: "Backend",
    github: "https://github.com/VictorWest",
    // demo: "#",
    image: "https://res.cloudinary.com/dflqvjg3w/image/upload/v1780512869/carbon_3_aoyio9.png"
  },
  {
    title: "NoteFlow: Cloud-Based Note & Sticky Task Manager",
    description: "A mobile productivity application that enables users to create, organize, and persist notes and sticky tasks with secure cloud storage and real-time synchronization using Firebase.",
    tech: ["React Native", "Expo", "Firebase"],
    category: "Mobile",
    github: "https://github.com/VictorWest",
    // demo: "#",
    image: 'https://res.cloudinary.com/dflqvjg3w/image/upload/v1780514495/Image_Jun_3_2026_03_05_54_PM_q8n8al.png'
  },
  // {
  //   title: "Project Three",
  //   description: "Brief description. Mention metrics or impact where possible.",
  //   tech: ["NestJS", "Prisma", "PostgreSQL", "Docker"],
  //   category: "Backend",
  //   github: "https://github.com/VictorWest",
  // },
  // {
  //   title: "Project Four",
  //   description: "Brief description of this frontend project, its scope and stack.",
  //   tech: ["React", "Tailwind", "Vite"],
  //   category: 'Frontend',
  //   github: "https://github.com/VictorWest",
  //   demo: "#",
  // },
  // {
  //   title: "Project Five",
  //   description: "Placeholder description — swap in real copy.",
  //   tech: ["Laravel", "MySQL", "Alpine.js"],
  //   category: "Full-Stack",
  //   github: "https://github.com/VictorWest",
  // },
  // {
  //   title: "Project Six",
  //   description: "Placeholder description — swap in real copy and a screenshot.",
  //   tech: ["Kotlin", "Android", "Room"],
  //   category: "Mobile",
  //   github: "https://github.com/VictorWest",
  // },
];

export const leadership = [
  { role: "President, ACES", org: "University of Benin", period: "Jul 2024 — Feb 2025" },
  { role: "National Director of Welfare", org: "NUESA", period: "Nov 2024 — Feb 2025" },
  { role: "National Membership Secretary", org: "NACOMES", period: "Jan 2024 — Jan 2025" },
];
