import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import usePageMeta from "../hooks/usePageMeta.js";
import { stats } from "../data/stats.js";
import { programs } from "../data/programs.js";
import { partners } from "../data/partners.js";
import { newsItems } from "../data/news.js";

const heroImage =
  "https://azizgrp.com/wp-content/uploads/2025/04/476973842_122212218068153270_3576822034374931890_n-640x426.jpg";

function StatCard({ label, value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frameId;
    const duration = 1200;

    const animate = (startTime) => {
      const now = performance.now();
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        frameId = requestAnimationFrame(() => animate(startTime));
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          frameId = requestAnimationFrame(() => animate(performance.now()));
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <div
      ref={ref}
      className="gradient-card rounded-2xl border border-sky-100 p-6 text-center shadow-soft transition hover:-translate-y-1"
    >
      <p className="text-3xl font-semibold text-sky-900">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-sky-600">{label}</p>
    </div>
  );
}

function ProgramPreviewCard({ icon, title, description }) {
  return (
    <div className="rounded-2xl border border-sky-100 bg-white p-6 shadow-soft transition hover:-translate-y-1">
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-4 text-lg font-semibold text-sky-900">{title}</h3>
      <p className="mt-2 text-sm text-sky-600">{description}</p>
    </div>
  );
}

export default function Home() {
  usePageMeta({
    title: "Home",
    description:
      "Aziz Jan Trust empowers communities across Peshawar and Khyber Pakhtunkhwa through education, healthcare, and welfare.",
  });

  return (
    <div>
      <section
        className="relative overflow-hidden bg-sky-900 text-white"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(15, 34, 55, 0.85), rgba(15, 34, 55, 0.4)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
          <div data-aos="fade-right">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-200">
              Aziz Jan Trust
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Empowering Communities, Transforming Lives
            </h1>
            <p className="mt-4 text-base text-sky-100">
              Aziz Jan Trust is the philanthropic arm of Aziz Group of
              Industries, dedicated to education, health, and welfare of
              underprivileged communities in Peshawar, KPK.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-900 transition hover:-translate-y-0.5"
              >
                Learn More
              </Link>
              <Link
                to="/programs"
                className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Our Programs
              </Link>
            </div>
          </div>
          <div
            className="hidden items-center justify-center lg:flex"
            data-aos="fade-left"
          >
            <div className="w-full rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
              <div className="rounded-2xl bg-hero-sheen p-6">
                <h3 className="text-lg font-semibold">Our Focus</h3>
                <ul className="mt-4 space-y-3 text-sm text-sky-100">
                  <li>Education excellence and scholarships</li>
                  <li>Free IT skills training</li>
                  <li>Food support and welfare</li>
                  <li>Healthcare funding partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-4" data-aos="fade-up">
          {stats.map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div data-aos="fade-right">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">
              Our Mission
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-sky-900">
              To provide education, training, and care where it is needed most.
            </h2>
          </div>
          <p className="text-base text-sky-700" data-aos="fade-left">
            To provide quality education, free IT skills training, food support,
            scholarships, and healthcare funding to underprivileged communities
            across Khyber Pakhtunkhwa, Pakistan.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary">
              Programs
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-sky-900">
              Creating opportunity through action
            </h2>
          </div>
          <Link
            to="/programs"
            className="hidden text-sm font-semibold text-primary transition hover:text-primary/80 md:block"
          >
            View all programs {">"}
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.slice(0, 4).map((program) => (
            <ProgramPreviewCard
              key={program.title}
              icon={program.icon}
              title={program.title}
              description={program.description}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-3xl border border-sky-100 bg-white px-6 py-10 shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-primary">
                Partners
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-sky-900">
                Trusted partners in impact
              </h2>
              <p className="mt-3 text-sm text-sky-600">
                We collaborate with leading organizations to multiply our
                outreach and deliver sustainable change.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="rounded-2xl border border-sky-100 bg-sky-50/70 px-4 py-4 text-sm text-sky-700 transition hover:-translate-y-1"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-500">
              News & Events
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-sky-900">
              Latest updates from Aziz Jan Trust
            </h2>
          </div>
          <Link
            to="/news"
            className="hidden text-sm font-semibold text-sky-600 transition hover:text-sky-800 md:block"
          >
            View all news {">"}
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {newsItems.slice(0, 3).map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-soft transition hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-44 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-sky-500">
                  {item.date}
                </p>
                <h3 className="mt-2 text-base font-semibold text-sky-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-sky-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
