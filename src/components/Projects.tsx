import { useState } from "react";
import { projects, type Project } from "@/lib/portfolio-data";
import { ArrowUpRight, Github, ImageIcon } from "lucide-react";

const filters = ["All", "Full-Stack", "Frontend", "Backend", "Mobile"] as const;
type Filter = (typeof filters)[number];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">03 — Projects</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">Selected work.</h2>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                  filter === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/40 transition-all hover:border-primary/40 hover:shadow-elegant">
      <div className="relative aspect-16/10 overflow-hidden border-b border-border bg-muted">
        {project.image ? (
          <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground/60">
            <ImageIcon className="h-8 w-8" />
            <span className="ml-2 text-xs font-mono">screenshot placeholder</span>
          </div>
        )}
        <span className="absolute top-3 left-3 rounded-full border border-border bg-background/80 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider backdrop-blur">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl tracking-tight">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li key={t} className="rounded border border-border px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex items-center gap-4 pt-4 border-t border-border">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground">
              <Github className="h-3.5 w-3.5" /> Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground">
              <ArrowUpRight className="h-3.5 w-3.5" /> Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
