import usePageMeta from "../hooks/usePageMeta.js";
import { newsItems } from "../data/news.js";

export default function News() {
  usePageMeta({
    title: "News & Events",
    description:
      "Latest news and events from Aziz Jan Trust and partner initiatives.",
  });

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <div className="max-w-3xl" data-aos="fade-right">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">
          News & Events
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-sky-900">
          Highlights from our journey
        </h1>
        <p className="mt-4 text-base text-sky-700">
          Stay updated with announcements, visits, and milestones from Aziz Jan
          Trust programs across Peshawar and KPK.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2" data-aos="fade-up">
        {newsItems.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-soft transition hover:-translate-y-1"
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title}
                className="h-52 w-full object-cover"
                loading="lazy"
              />
            )}
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">
                {item.date}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-sky-900">
                {item.title}
              </h2>
              <p className="mt-3 text-sm text-sky-600">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
