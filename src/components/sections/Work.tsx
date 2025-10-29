import { WORK } from "@/constants";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-2xl font-semibold text-transparent">
        Experience
      </h2>
      <ol className="relative mt-8 border-s-2 border-white/10">
        {WORK.map((w) => (
          <li key={w.company} className="ms-6 py-4">
            <span className="absolute -start-3 mt-1 h-5 w-5 rounded-full border border-white/20 bg-indigo-500 shadow ring-2 ring-indigo-500/20" />
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-slate-100">
                    {w.role} · {w.company}
                  </h3>
                  <p className="text-sm text-slate-400">{w.period}</p>
                </div>
              </div>
              <p className="mt-2 text-base text-slate-300 leading-relaxed">
                {w.summary}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {w.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-white/10 px-2 py-1 text-sm text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
