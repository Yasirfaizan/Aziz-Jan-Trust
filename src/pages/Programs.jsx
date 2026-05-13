import usePageMeta from "../hooks/usePageMeta.js";
import { programs } from "../data/programs.js";

function ProgramCard({ program }) {
  return (
    <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-soft transition hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <div className="text-3xl">{program.icon}</div>
        <h2 className="text-xl font-semibold text-sky-900">{program.title}</h2>
      </div>
      <p className="mt-3 text-sm text-sky-700">{program.description}</p>

      <div className="mt-4 space-y-2 text-sm text-sky-600">
        {program.location && <p>Location: {program.location}</p>}
        {program.address && <p>Address: {program.address}</p>}
        {program.phone && <p>Phone: {program.phone}</p>}
        {program.email && <p>Email: {program.email}</p>}
        {program.partner && <p>Partner: {program.partner}</p>}
        {program.partnership && <p>{program.partnership}</p>}
      </div>

      {program.beneficiaries && (
        <div className="mt-4">
          <p className="text-sm font-semibold text-sky-900">Beneficiaries</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-sky-600">
            {program.beneficiaries.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {program.courses && (
        <div className="mt-4">
          <p className="text-sm font-semibold text-sky-900">Courses Offered</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {program.courses.map((course) => (
              <span
                key={course}
                className="rounded-full bg-sky-50 px-3 py-1 text-xs text-sky-700"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Programs() {
  usePageMeta({
    title: "Programs",
    description:
      "Explore Aziz Jan Trust programs in education, IT training, welfare, and healthcare.",
  });

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <div className="max-w-3xl" data-aos="fade-right">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">
          Programs
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-sky-900">
          Programs that transform lives
        </h1>
        <p className="mt-4 text-base text-sky-700">
          Aziz Jan Trust delivers targeted initiatives in education, IT skills,
          healthcare, and welfare across Khyber Pakhtunkhwa.
        </p>
      </div>

      <div className="mt-10 grid gap-6" data-aos="fade-up">
        {programs.map((program) => (
          <ProgramCard key={program.title} program={program} />
        ))}
      </div>
    </div>
  );
}
