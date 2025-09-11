import Image from "next/image";
import SkillIcon from "@/components/SkillIcon";
import { SKILLS } from "@/constants";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-2xl font-semibold text-transparent">
        Skills
      </h2>
      <div className="mt-6 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((skill) => (
          <div
            key={skill}
            className="min-h-[120px] overflow-hidden rounded-2xl bg-white/5 shadow-sm backdrop-blur-sm"
          >
            <div className="grid h-full grid-cols-[72px_1fr] items-stretch">
              <div className="flex h-full items-center justify-center p-3">
                <SkillIcon name={skill} className="h-full w-full" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-slate-100">
                  {skill}
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Short note about your experience with {skill}.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
