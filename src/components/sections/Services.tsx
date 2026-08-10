import { SERVICES } from "@/constants";

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-6xl border-t border-[var(--border)] px-6 py-20"
    >
      <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
        How I can help
      </h2>
      <p className="mt-3 max-w-2xl text-lg text-[var(--ink-muted)]">
        Practical engagements for product teams and businesses that need a
        senior engineer who ships.
      </p>
      <ul className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
        {SERVICES.map((service) => (
          <li
            key={service.title}
            className="border-t border-[var(--border)] pt-6"
          >
            <h3 className="font-display text-xl font-semibold text-[var(--ink)]">
              {service.title}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-[var(--ink-muted)]">
              {service.description}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-12 text-sm text-[var(--ink-muted)]">
        Stack I reach for most: React, TypeScript, Next.js, Tailwind, Mapbox,
        Rails, Wix/Velo, Stripe, Razorpay.
      </p>
    </section>
  );
}
