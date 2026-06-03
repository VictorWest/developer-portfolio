import { profile } from "@/lib/portfolio-data";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="border-t border-border/60 py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">04 — Contact</p>
        <h2 className="mt-3 font-display text-5xl md:text-6xl tracking-tight text-balance">
          Let's build something <span className="italic text-primary">great</span>.
        </h2>
        <p className="mt-5 text-muted-foreground text-balance max-w-xl mx-auto">
          Open to full-time roles and freelance engagements. The fastest way to reach me is email.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Mail className="h-4 w-4" /> {profile.email}
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-2 hover:text-foreground">
            <Phone className="h-4 w-4" /> {profile.phone}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
            <Github className="h-4 w-4" /> VictorWest
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
      <footer className="mx-auto mt-24 max-w-6xl px-6 pt-8 border-t border-border/60 flex flex-wrap items-center justify-center text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        {/* <span className="font-mono">Designed & built with care.</span> */}
      </footer>
    </section>
  );
}
