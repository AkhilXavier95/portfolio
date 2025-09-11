import { EMAIL } from "@/constants";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-2xl font-semibold text-transparent">
        Contact me
      </h2>
      <p className="mt-3 max-w-prose text-slate-600">
        I’m open to opportunities and collaborations. Reach me at
        <a href={`mailto:${EMAIL}`} className="ml-1 underline">
          {EMAIL}
        </a>
        .
      </p>
    </section>
  );
}
