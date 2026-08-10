import { CONTACT_MAILTO, EMAIL } from "@/constants";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl border-t border-[var(--border)] px-6 py-20"
    >
      <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
        Let&apos;s build something
      </h2>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--ink-muted)]">
        Have a product to ship, a site to modernize, or a team that needs a
        senior pair of hands? Tell me what you&apos;re working on—I usually
        reply within one business day.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href={CONTACT_MAILTO}
          className="inline-flex items-center justify-center bg-[var(--accent)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          Let&apos;s talk
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className="text-base font-medium text-[var(--ink)] underline decoration-[var(--border)] underline-offset-4 transition hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
        >
          {EMAIL}
        </a>
      </div>
    </section>
  );
}
