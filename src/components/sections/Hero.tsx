import Image from "next/image";
import SocialIcon from "@/components/SocialIcon";
import { CONTACT_MAILTO, SOCIALS } from "@/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid max-w-6xl items-end gap-10 px-6 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:pb-28 md:pt-24"
    >
      <div className="animate-fade-rise order-2 md:order-1">
        <p className="font-display text-sm font-semibold tracking-[0.08em] text-[var(--accent)] uppercase">
          Full stack developer · available for projects
        </p>
        <h1 className="font-display mt-3 text-5xl font-bold leading-[1.05] tracking-tight text-[var(--ink)] md:text-6xl lg:text-7xl">
          Akhil Xavier
        </h1>
        <p className="mt-5 max-w-xl text-xl font-medium leading-snug text-[var(--ink)] md:text-2xl">
          I build React and Next.js apps for product teams and local businesses.
        </p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
          Six years on design systems, map-heavy commerce, performance work, and
          CMS-backed business sites. Independent consultant in Kochi—available
          for remote project work.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={CONTACT_MAILTO}
            className="inline-flex items-center justify-center bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            Let&apos;s talk
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Download CV
          </a>
          {SOCIALS.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="inline-flex h-11 w-11 items-center justify-center border border-[var(--border)] text-[var(--ink-muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <SocialIcon name={s.name} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="animate-fade-rise-delay order-1 md:order-2">
        <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden bg-[var(--bg-muted)] md:ml-auto md:max-w-none">
          <Image
            src="/images/akhil.webp"
            alt="Akhil Xavier"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
