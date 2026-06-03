import victorAsset from "@/assets/victor.webp.asset.json";
import { profile } from "@/lib/portfolio-data";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 glow-bg pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-[1.3fr_1fr] items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Available for roles & freelance
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] tracking-tight text-balance">
            {profile.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="text-muted-foreground italic">{profile.title.toLowerCase()}.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground text-balance">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card/60 px-5 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Mail className="h-4 w-4" /> Get in touch
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-elegant aspect-4/5">
            <img
              src={victorAsset.url}
              alt={`${profile.name} portrait`}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
