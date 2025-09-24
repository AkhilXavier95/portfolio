import Image from "next/image";
import SocialIcon from "@/components/SocialIcon";
import { EMAIL, SOCIALS } from "@/constants";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-5xl px-6 pt-20 pb-16 md:pt-28">
      <div className="grid items-center gap-8 md:grid-cols-[220px_1fr]">
        <div className="mx-auto h-40 w-40 overflow-hidden rounded-full ring-2 ring-black/10 md:h-56 md:w-56">
          <Image
            src="/next.svg"
            alt="Your photo"
            width={224}
            height={224}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
            Hi, I’m Akhil Xavier
          </h1>
          <p className="mt-3 max-w-prose text-slate-300">
            I turn complex problems into simple, beautiful web applications
            using React and modern frontend technologies.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-slate-200 hover:bg-white/10"
              >
                <SocialIcon name={s.name} className="h-4 w-4" />
              </a>
            ))}
            <a
              href="/cv.pdf"
              download
              className="rounded-full bg-white/10 px-3 py-1.5 text-white hover:bg-white/20"
            >
              Download CV
            </a>
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Contact:{" "}
            <a href={`mailto:${EMAIL}`} className="underline">
              {EMAIL}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
