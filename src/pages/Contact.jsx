import usePageMeta from "../hooks/usePageMeta.js";

function ContactCard({ title, lines }) {
  return (
    <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-soft transition hover:-translate-y-1">
      <h3 className="text-base font-semibold text-sky-900">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-sky-600">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Contact() {
  usePageMeta({
    title: "Contact",
    description:
      "Get in touch with Aziz Jan Trust for partnerships, support, or volunteering.",
  });

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div data-aos="fade-right">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-sky-900">
            Connect with Aziz Jan Trust
          </h1>
          <p className="mt-4 text-base text-sky-700">
            Reach out for program details, partnerships, or volunteering. Our
            team is ready to help.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <ContactCard
              title="Phone"
              lines={["Main: +92 310 6694469", "School: +92 91 5814211"]}
            />
            <ContactCard
              title="Email"
              lines={["aziz.janinstitute@gmail.com"]}
            />
            <ContactCard
              title="Address 1"
              lines={[
                "Mohsin and Huma Mass IT Training Centre",
                "Opposite Jans Deli, Peshawar, Pakistan",
              ]}
            />
            <ContactCard
              title="Address 2"
              lines={[
                "Aziz Jan Institute of Learning",
                "Near Shaukat Khanum Cancer Hospital",
                "Hayatabad, Peshawar",
              ]}
            />
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.facebook.com/p/Aziz-Jan-Trust-100094604598064/"
              className="flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M13 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z"
                  fill="currentColor"
                />
              </svg>
              Facebook
            </a>
            <a
              href="https://wa.me/923106694469"
              className="flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M16.6 13.9c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1-.2.2-.7.7-.8.8-.1.1-.3.2-.5.1-.2-.1-.9-.3-1.7-1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.1-.2.2-.4.1-.2 0-.3 0-.4-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.4c.1.2 1.6 2.5 4 3.4 2.4.9 2.4.6 2.9.6.5-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1 0-.1-.2-.2-.4-.3z"
                  fill="currentColor"
                />
              </svg>
              WhatsApp
            </a>
            <a
              href="https://linktr.ee/AJTrust"
              className="flex items-center gap-2 rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M12 2.5c-3.2 0-5.7 2.6-5.7 5.7 0 1.6.7 3.1 1.7 4.1l-2 4.7 4.9-1.9c.9.5 1.9.8 3 .8 3.2 0 5.7-2.6 5.7-5.7S15.2 2.5 12 2.5zm0 3.3c1.4 0 2.4.9 2.4 2.3 0 .9-.4 1.7-1.1 2.6-.7.8-1.6 1.7-1.3 2.8h-1.7c-.4-1.4.5-2.4 1.2-3.2.5-.6.7-1 .7-1.4 0-.5-.4-.9-1.1-.9-.7 0-1.2.3-1.7.7l-.9-1.2c.7-.7 1.7-1.2 3.5-1.2z"
                  fill="currentColor"
                />
              </svg>
              Linktree
            </a>
          </div>
        </div>

        <div data-aos="fade-left">
          <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-sky-900">
              Send a Message
            </h2>
            <form className="mt-4 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full rounded-xl border border-sky-100 px-4 py-3 text-sm focus:border-sky-400 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-sky-100 px-4 py-3 text-sm focus:border-sky-400 focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-sky-100 px-4 py-3 text-sm focus:border-sky-400 focus:outline-none"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="w-full rounded-xl border border-sky-100 px-4 py-3 text-sm focus:border-sky-400 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary/90"
              >
                Submit Message
              </button>
            </form>
          </div>
          <div className="mt-6 overflow-hidden rounded-3xl border border-sky-100">
            <iframe
              title="Hayatabad Peshawar Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.795338121604!2d71.47603461521413!3d33.99769028062233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d93e0e5b9a4d6f%3A0xb8975711a3eb14c2!2sHayatabad%2C%20Peshawar%2C%20Khyber%20Pakhtunkhwa!5e0!3m2!1sen!2s!4v1715590000000"
              width="100%"
              height="320"
              loading="lazy"
              className="w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
