import { WORK } from "@/constants";

export default function Work() {
  return (
    <section
      id="work"
      className="mx-auto max-w-6xl border-t border-[var(--border)] px-6 py-20"
    >
      <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
        Experience
      </h2>
      <ol className="mt-12 space-y-0">
        {WORK.map((w) => (
          <li
            key={w.company}
            className="border-t border-[var(--border)] py-8 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-lg font-semibold text-[var(--ink)] md:text-xl">
                {w.role}
                <span className="font-normal text-[var(--ink-muted)]">
                  {" "}
                  · {w.company}
                </span>
              </h3>
              <p className="text-sm text-[var(--ink-muted)]">{w.period}</p>
            </div>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-[var(--ink-muted)]">
              {w.summary}
            </p>
            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm text-[var(--ink-muted)]">
              {w.skills.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
