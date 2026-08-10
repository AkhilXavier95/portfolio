import { CONTACT_MAILTO, EMAIL } from "@/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-muted)]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-base font-semibold text-[var(--ink)]">
            Akhil Xavier
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-1 block text-sm text-[var(--ink-muted)] underline-offset-4 hover:text-[var(--accent)] hover:underline"
          >
            {EMAIL}
          </a>
        </div>
        <a
          href={CONTACT_MAILTO}
          className="inline-flex bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)]"
        >
          Let&apos;s talk
        </a>
      </div>
    </footer>
  );
}
