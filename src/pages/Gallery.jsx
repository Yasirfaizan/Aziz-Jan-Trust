import { useState } from "react";
import usePageMeta from "../hooks/usePageMeta.js";
import { galleryImages } from "../data/gallery.js";

export default function Gallery() {
  usePageMeta({
    title: "Gallery",
    description:
      "Explore images from Aziz Jan Trust programs and community events.",
  });

  const [activeIndex, setActiveIndex] = useState(null);

  const activeImage = activeIndex !== null ? galleryImages[activeIndex] : null;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <div className="max-w-3xl" data-aos="fade-right">
        <p className="text-sm uppercase tracking-[0.3em] text-primary">
          Gallery
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-sky-900">
          Stories in action
        </h1>
        <p className="mt-4 text-base text-sky-700">
          A glimpse of the people, partners, and programs that define Aziz Jan
          Trust.
        </p>
      </div>

      <div
        className="mt-10 columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3"
        data-aos="fade-up"
      >
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className="masonry-item w-full overflow-hidden rounded-2xl"
            onClick={() => setActiveIndex(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full rounded-2xl object-cover transition hover:scale-105"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-sky-900/80 p-4">
          <div className="relative w-full max-w-4xl">
            <button
              type="button"
              className="absolute -top-10 right-0 text-sm font-semibold text-white"
              onClick={() => setActiveIndex(null)}
            >
              Close
            </button>
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="w-full rounded-3xl object-contain"
            />
            <div className="mt-4 flex items-center justify-between text-sm text-white">
              <button
                type="button"
                className="rounded-full border border-white/30 px-4 py-2"
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === 0 ? galleryImages.length - 1 : prev - 1,
                  )
                }
              >
                Previous
              </button>
              <p>{activeImage.alt}</p>
              <button
                type="button"
                className="rounded-full border border-white/30 px-4 py-2"
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === galleryImages.length - 1 ? 0 : prev + 1,
                  )
                }
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
