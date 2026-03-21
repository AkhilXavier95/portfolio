export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-2xl font-semibold text-transparent">
        About me
      </h2>
      <div className="mt-3 text-base text-slate-300 max-w-3xl leading-relaxed space-y-6">
        <p>
          I&apos;m a senior full stack engineer with 6+ years building
          production-grade React and TypeScript across e-commerce, geospatial
          mapping, EdTech, and automotive. I led development of NeetoUI, a
          component library adopted across multiple product lines, and my recent
          consulting work includes a US geospatial e-commerce platform, a
          Next.js 13+ performance overhaul for an Indian startup, and a full
          dealership site with Razorpay for Carland 360.
        </p>
        <p>
          I care about performance, accessibility, and clear architecture—whether
          that is RSC and Server Actions, map-heavy UIs with Mapbox, or CMS-driven
          sites the business team can run day to day. I&apos;m looking for a
          full-time senior or tech lead role on a remote-first, product-driven
          team.
        </p>
        <p>
          Outside of work I enjoy cycling, travel, football, snooker, and home
          brewing.
        </p>
      </div>
    </section>
  );
}
