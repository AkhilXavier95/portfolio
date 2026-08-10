import { PROJECTS } from "@/constants";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl border-t border-[var(--border)] px-6 py-20"
    >
      <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
        Selected work
      </h2>
      <p className="mt-3 max-w-2xl text-lg text-[var(--ink-muted)]">
        Recent consulting and product work—outcomes first.
      </p>
      <div className="mt-12">
        {PROJECTS.map((p, index) => (
          <article
            key={p.id}
            className="grid gap-4 border-t border-[var(--border)] py-10 sm:grid-cols-[3rem_1fr] sm:gap-8"
          >
            <span
              className="font-display text-sm font-semibold tabular-nums text-[var(--accent)]"
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold text-[var(--ink)] md:text-2xl">
                {p.title}
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-[var(--ink-muted)]">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target={p.liveUrl.startsWith("http") ? "_blank" : undefined}
                    rel={
                      p.liveUrl.startsWith("http") ? "noreferrer" : undefined
                    }
                    className="text-[var(--accent)] underline decoration-[var(--accent)]/30 underline-offset-4 transition hover:decoration-[var(--accent)]"
                  >
                    Live
                  </a>
                )}
                {p.codeUrl && (
                  <a
                    href={p.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--accent)] underline decoration-[var(--accent)]/30 underline-offset-4 transition hover:decoration-[var(--accent)]"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
