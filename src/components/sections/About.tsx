export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl border-t border-[var(--border)] px-6 py-20"
    >
      <h2 className="font-display text-3xl font-bold tracking-tight text-[var(--ink)] md:text-4xl">
        About
      </h2>
      <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-[var(--ink-muted)] md:text-lg">
        <p>
          I&apos;m a senior full stack engineer with 6+ years building
          production-grade React and TypeScript across e-commerce, geospatial
          mapping, EdTech, and automotive. I led development of NeetoUI, a
          component library adopted across multiple product lines, and my recent
          consulting work includes a US geospatial e-commerce platform, a
          Next.js rebuild for The Baking Project in Kochi, and Carland 360—a
          vehicle inspection platform with Razorpay booking flows.
        </p>
        <p>
          I care about performance, accessibility, and clear
          architecture—whether that is RSC and Server Actions, map-heavy UIs
          with Mapbox, or CMS-driven sites the business team can run day to day.
          I take on project and consulting engagements for teams that need
          production-ready delivery.
        </p>
        <p>
          Outside of work I enjoy cycling, travel, football, snooker, and home
          brewing.
        </p>
      </div>
    </section>
  );
}
