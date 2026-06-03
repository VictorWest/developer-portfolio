import { profile, skills } from "@/lib/portfolio-data";

export function About() {
  return (
    <section id="about" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-6xl px-6 grid gap-16 md:grid-cols-3">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">01 — About</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">A bit about me.</h2>
        </div>
        <div className="md:col-span-2 space-y-6">
          <p className="text-lg leading-relaxed text-foreground/90 text-balance">{profile.about}</p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 pt-4">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <h3 className="text-sm font-medium text-foreground">{group}</h3>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-border bg-card/60 px-2 py-1 text-xs text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
