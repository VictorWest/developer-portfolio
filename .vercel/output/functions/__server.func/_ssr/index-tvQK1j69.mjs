import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { A as ArrowUpRight, M as Mail, G as Github, L as Linkedin, P as Phone, S as Sun, a as Moon, I as Image } from "../_libs/lucide-react.mjs";
const STORAGE_KEY = "vww-theme";
function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.toggle("light", theme === "light");
  root.classList.toggle("dark", theme === "dark");
}
function ThemeToggle() {
  const [theme, setTheme] = reactExports.useState("dark");
  reactExports.useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY);
    const initial = stored ?? "dark";
    setTheme(initial);
    applyTheme(initial);
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: toggle,
      "aria-label": "Toggle color theme",
      className: "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 backdrop-blur transition-colors hover:bg-accent",
      children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
    }
  );
}
const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "font-display text-lg tracking-tight", children: [
      "Victor",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden md:flex items-center gap-7 text-sm text-muted-foreground", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "transition-colors hover:text-foreground", children: l.label }) }, l.href)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "#contact",
          className: "hidden sm:inline-flex h-9 items-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
          children: "Hire me"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {})
    ] })
  ] }) });
}
const url = "https://res.cloudinary.com/dflqvjg3w/image/upload/v1780505604/IMG_4412_1_wddvby.jpg";
const victorAsset = {
  url
};
const profile = {
  name: "Victor Wariboko-West",
  title: "Software Engineer",
  tagline: "Frontend, backend & mobile engineer building robust, real-world products.",
  email: "victorwaribokowest@gmail.com",
  phone: "+234 706 896 6798",
  github: "https://github.com/VictorWest",
  linkedin: "https://www.linkedin.com/in/victor-wariboko-west",
  about: "Result-driven software engineer with years of experience building robust, real-world projects across web and mobile. First Class graduate in Computer Engineering (University of Benin, 2025). I care about solving complex problems, polishing user experience, and shipping reliably."
};
const skills = {
  Languages: ["TypeScript", "JavaScript", "Java", "Python", "C#", "C", "PHP"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node.js / Express", "NestJS", "Spring", "Django", "ASP.NET", "Laravel", "Flask"],
  Mobile: ["React Native", "Kotlin (Android)"],
  Database: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Firebase"],
  "Cloud & DevOps": ["AWS", "Azure", "Vercel", "Docker", "CI/CD", "Netlify", "Render"]
};
const experience = [
  {
    role: "Full Stack Developer Tutor",
    company: "Silicon Delta Innovation Hub",
    period: "Jun 2026",
    points: [
      "Mentor aspiring developers in full-stack web development, covering frontend, backend, databases, version control, and deployment.",
      "Design and deliver comprehensive learning programs in HTML, CSS, JavaScript, React, Node.js, Express, SQL, and NoSQL technologies.",
      "Create hands-on projects and practical coding challenges that reinforce software engineering principles and industry best practices.",
      "Assess student progress through code reviews, technical guidance, and personalized feedback, fostering strong development and debugging skills."
    ]
  },
  {
    role: "Frontend Developer",
    company: "DentistFind",
    period: "Feb 2026",
    points: [
      "Build responsive React.js interfaces and reusable component architectures.",
      "Translate Figma designs into pixel-perfect, accessible UI.",
      "Integrate REST & GraphQL APIs; optimize render and bundle performance.",
      "Maintain code quality with Jest, React Testing Library, and Cypress."
    ]
  },
  {
    role: "Freelance Full Stack Developer",
    company: "Upwork",
    period: "Nov 2024 — Dec 2025",
    points: [
      "Shipped dynamic UIs in React + Tailwind for international clients.",
      "Owned the full delivery loop: scope, build, communicate, iterate."
    ]
  },
  {
    role: "Backend Developer",
    company: "KNOW for Creators LTD",
    period: "Feb 2025 — Aug 2025",
    points: [
      "Built scalable NestJS services backed by PostgreSQL + Prisma.",
      "Designed REST APIs with a focus on performance and security."
    ]
  },
  {
    role: "Full Stack Engineer",
    company: "Useful Media Limited",
    period: "May 2024 — Nov 2024",
    points: [
      "Delivered end-to-end web apps with React on the front and PHP/Laravel on the back.",
      "Modeled and managed data with MongoDB; integrated REST APIs."
    ]
  },
  {
    role: "Software Intern",
    company: "WEAM & Company Limited",
    period: "Jan 2024 — Apr 2024",
    points: [
      "IT support, software installs, troubleshooting and server maintenance."
    ]
  }
];
const projects = [
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
    category: "Frontend",
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
      "Node.js",
      "Express.js",
      "NestJS",
      "Java Spring Boot",
      "Spring Data JPA / Hibernate",
      "Django",
      "Flask",
      "ASP.NET",
      "Next.js",
      "Laravel",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Firebase",
      "Prisma ORM",
      "TypeORM",
      "Database Design",
      "Data Modeling",
      "Query Optimization",
      "Database Migration Management"
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
    image: "https://res.cloudinary.com/dflqvjg3w/image/upload/v1780514495/Image_Jun_3_2026_03_05_54_PM_q8n8al.png"
  }
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
const leadership = [
  { role: "President, ACES", org: "University of Benin", period: "Jul 2024 — Feb 2025" },
  { role: "National Director of Welfare", org: "NUESA", period: "Nov 2024 — Feb 2025" },
  { role: "National Membership Secretary", org: "NACOMES", period: "Jan 2024 — Jan 2025" }
];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative overflow-hidden pt-32 pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 glow-bg pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-[1.3fr_1fr] items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }),
          "Available for roles & freelance"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-5xl md:text-7xl leading-[1.02] tracking-tight text-balance", children: [
          profile.name.split(" ").slice(0, 2).join(" "),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground italic", children: [
            profile.title.toLowerCase(),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-base md:text-lg text-muted-foreground text-balance", children: profile.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#projects",
              className: "inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
              children: [
                "View work ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `mailto:${profile.email}`,
              className: "inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card/60 px-5 text-sm font-medium transition-colors hover:bg-accent",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
                " Get in touch"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-4 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: profile.github, target: "_blank", rel: "noreferrer", "aria-label": "GitHub", className: "hover:text-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: profile.linkedin, target: "_blank", rel: "noreferrer", "aria-label": "LinkedIn", className: "hover:text-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-5 w-5" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-3xl border border-border shadow-elegant aspect-4/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: victorAsset.url,
            alt: `${profile.name} portrait`,
            className: "h-full w-full object-cover",
            loading: "eager"
          }
        ) })
      ] })
    ] })
  ] });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "border-t border-border/60 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 grid gap-16 md:grid-cols-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "01 — About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl md:text-5xl tracking-tight", children: "A bit about me." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-foreground/90 text-balance", children: profile.about }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-x-8 gap-y-6 pt-4", children: Object.entries(skills).map(([group, items]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-foreground", children: group }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 flex flex-wrap gap-1.5", children: items.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "li",
          {
            className: "rounded-md border border-border bg-card/60 px-2 py-1 text-xs text-muted-foreground",
            children: s
          },
          s
        )) })
      ] }, group)) })
    ] })
  ] }) });
}
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "work", className: "border-t border-border/60 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6 grid gap-16 md:grid-cols-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "02 — Experience" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl md:text-5xl tracking-tight", children: "Where I've worked." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative space-y-10 before:absolute before:left-2 before:top-1 before:bottom-1 before:w-px before:bg-border", children: experience.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative pl-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-medium", children: [
            e.role,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              "· ",
              e.company
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: e.period })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-1.5 text-sm text-muted-foreground", children: e.points.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "leading-relaxed", children: [
          "— ",
          p
        ] }, i)) })
      ] }, e.role + e.company)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 rounded-2xl border border-border bg-card/40 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-foreground", children: "Leadership" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 divide-y divide-border", children: leadership.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex flex-wrap justify-between gap-2 py-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: l.role }),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              "· ",
              l.org
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: l.period })
        ] }, l.role)) })
      ] })
    ] })
  ] }) });
}
const filters = ["All", "Full-Stack", "Frontend", "Backend", "Mobile"];
function Projects() {
  const [filter, setFilter] = reactExports.useState("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", className: "border-t border-border/60 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "03 — Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl md:text-5xl tracking-tight", children: "Selected work." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setFilter(f),
          className: `rounded-full border px-3 py-1 text-xs transition-colors ${filter === f ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card/60 text-muted-foreground hover:text-foreground"}`,
          children: f
        },
        f
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: list.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project: p }, p.title)) })
  ] }) });
}
function ProjectCard({ project }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/40 transition-all hover:border-primary/40 hover:shadow-elegant", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-16/10 overflow-hidden border-b border-border bg-muted", children: [
      project.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.image, alt: project.title, className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full w-full items-center justify-center text-muted-foreground/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-8 w-8" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-xs font-mono", children: "screenshot placeholder" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 rounded-full border border-border bg-background/80 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider backdrop-blur", children: project.category })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl tracking-tight", children: project.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: project.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 flex flex-wrap gap-1.5", children: project.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "rounded border border-border px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground", children: t }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-4 pt-4 border-t border-border", children: [
        project.github && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: project.github, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-3.5 w-3.5" }),
          " Code"
        ] }),
        project.demo && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: project.demo, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5" }),
          " Live"
        ] })
      ] })
    ] })
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "border-t border-border/60 py-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "04 — Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-5xl md:text-6xl tracking-tight text-balance", children: [
        "Let's build something ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-primary", children: "great" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground text-balance max-w-xl mx-auto", children: "Open to full-time roles and freelance engagements. The fastest way to reach me is email." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: `mailto:${profile.email}`,
          className: "mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
            " ",
            profile.email
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${profile.phone.replace(/\s/g, "")}`, className: "inline-flex items-center gap-2 hover:text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
          " ",
          profile.phone
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: profile.github, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 hover:text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
          " VictorWest"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: profile.linkedin, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 hover:text-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }),
          " LinkedIn"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mx-auto mt-24 max-w-6xl px-6 pt-8 border-t border-border/60 flex flex-wrap items-center justify-center text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ",
      profile.name
    ] }) })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
  ] });
}
export {
  Index as component
};
