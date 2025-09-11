import Image from "next/image";
import { PROJECTS } from "@/constants";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-2xl font-semibold text-transparent">
        My Work
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm backdrop-blur-sm transition hover:shadow-2xl hover:bg-white/10"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={p.image}
                alt=""
                fill
                className="object-contain p-6 transition group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-slate-100">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4 text-sm">
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    className="text-slate-200 underline decoration-white/30 underline-offset-4 hover:text-white"
                  >
                    Live
                  </a>
                )}
                {p.codeUrl && (
                  <a
                    href={p.codeUrl}
                    className="text-slate-200 underline decoration-white/30 underline-offset-4 hover:text-white"
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
