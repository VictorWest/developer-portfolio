import { experience, leadership } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="work" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6 grid gap-16 md:grid-cols-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">02 — Experience</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">Where I've worked.</h2>
        </div>
        <div className="md:col-span-2">
          <ol className="relative space-y-10 before:absolute before:left-2 before:top-1 before:bottom-1 before:w-px before:bg-border">
            {experience.map((e) => (
              <li key={e.role + e.company} className="relative pl-10">
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-medium">
                    {e.role} <span className="text-muted-foreground">· {e.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
                </div>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {e.points.map((p, i) => (
                    <li key={i} className="leading-relaxed">— {p}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="mt-14 rounded-2xl border border-border bg-card/40 p-6">
            <h3 className="text-sm font-medium text-foreground">Leadership</h3>
            <ul className="mt-3 divide-y divide-border">
              {leadership.map((l) => (
                <li key={l.role} className="flex flex-wrap justify-between gap-2 py-2 text-sm">
                  <span>
                    <span className="text-foreground">{l.role}</span>{" "}
                    <span className="text-muted-foreground">· {l.org}</span>
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{l.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
