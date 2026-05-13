import usePageMeta from "../hooks/usePageMeta.js";

export default function About() {
  usePageMeta({
    title: "About Us",
    description:
      "Learn about Aziz Jan Trust, the philanthropic arm of Aziz Group of Industries.",
  });

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div data-aos="fade-right">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            About Us
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-sky-900">
            Aziz Jan Trust
          </h1>
          <p className="mt-4 text-base text-sky-700">
            Aziz Jan Trust is the philanthropic arm of Aziz Group of Industries.
            It is dedicated to providing quality education, IT skills, food,
            scholarships, and healthcare support to underprivileged communities
            in Peshawar and KPK.
          </p>
        </div>
        <div
          className="rounded-3xl border border-sky-100 bg-white p-6 shadow-soft transition hover:-translate-y-1"
          data-aos="fade-left"
        >
          <h2 className="text-xl font-semibold text-sky-900">
            Parent Organization
          </h2>
          <p className="mt-3 text-sm text-sky-700">
            Aziz Group of Industries is one of the largest employers in KPK,
            with operations in Peshawar, Lahore, Islamabad, and Gadoon Swabi.
          </p>
          <div className="mt-5 rounded-2xl bg-sky-50/80 p-4 text-sm text-sky-700">
            Philanthropic initiatives are guided by a commitment to community
            development and sustainable impact.
          </div>
        </div>
      </div>

      <section className="mt-12 grid gap-6 lg:grid-cols-2">
        <div
          className="rounded-3xl border border-sky-100 bg-white p-6 shadow-soft transition hover:-translate-y-1"
          data-aos="fade-up"
        >
          <h2 className="text-xl font-semibold text-sky-900">Key Leadership</h2>
          <ul className="mt-4 space-y-4 text-sm text-sky-700">
            <li>
              <p className="font-semibold text-sky-900">Mohsin Aziz</p>
              <p>Chairman, Aziz Group of Industries / Senator</p>
            </li>
            <li>
              <p className="font-semibold text-sky-900">Afan Aziz</p>
              <p>
                CEO, Aziz Group of Industries; Honorary Consul of South Korea
                for KPK; Member of UNICEF Pakistan Advisory Council
              </p>
            </li>
          </ul>
        </div>

        <div
          className="rounded-3xl border border-sky-100 bg-white p-6 shadow-soft transition hover:-translate-y-1"
          data-aos="fade-up"
        >
          <h2 className="text-xl font-semibold text-sky-900">Vision</h2>
          <p className="mt-3 text-sm text-sky-700">
            To create a society where every individual, regardless of economic
            background, has access to quality education, healthcare, and
            opportunities for self-reliance.
          </p>
          <div className="mt-5 grid gap-3 text-sm text-sky-700 sm:grid-cols-2">
            <div className="rounded-2xl bg-sky-50/80 p-4">
              Education-first initiatives
            </div>
            <div className="rounded-2xl bg-sky-50/80 p-4">
              Youth employability and IT skills
            </div>
            <div className="rounded-2xl bg-sky-50/80 p-4">
              Food security and welfare
            </div>
            <div className="rounded-2xl bg-sky-50/80 p-4">
              Healthcare and scholarships
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
