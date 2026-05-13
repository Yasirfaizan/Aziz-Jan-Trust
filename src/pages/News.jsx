import usePageMeta from "../hooks/usePageMeta.js";
import { koreanAmbassadorAlbum, newsItems } from "../data/news.js";

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

      <section
        className="mt-16 overflow-hidden rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-5 shadow-soft sm:p-6"
        data-aos="fade-up"
      >
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Photo Album
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-sky-900 sm:text-4xl">
            Tour of the Korean Ambassador to MHIT
          </h2>
          <p className="mt-4 text-base text-sky-700">
            A curated visual story from the Korean Ambassador&apos;s visit to
            MHIT, showing the welcome, interaction, and the learning environment
            that supports youth development.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-12 lg:auto-rows-[180px]">
          {koreanAmbassadorAlbum.map((image, index) => {
            const layoutClasses = [
              "lg:col-span-6 lg:row-span-2",
              "lg:col-span-3",
              "lg:col-span-3",
              "lg:col-span-4",
              "lg:col-span-5",
            ];

            return (
              <figure
                key={image.alt}
                className={`group relative overflow-hidden rounded-[1.75rem] bg-slate-900 shadow-soft ${layoutClasses[index] ?? "lg:col-span-4"}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/15 text-sm font-semibold backdrop-blur-sm">
                    0{index + 1}
                  </div>
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-100">
                    Korean Ambassador Tour
                  </p>
                  <h3 className="mt-1 text-lg font-semibold leading-tight">
                    {image.caption}
                  </h3>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>
    </div>
  );
}
