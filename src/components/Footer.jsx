import { Link } from "react-router-dom";
import logoImage from "../assets/Aziz Logo.jpg";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "News", to: "/news" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

function SocialIcon({ href, label, path }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 text-primary transition hover:-translate-y-0.5 hover:bg-primary/10"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d={path} fill="currentColor" />
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoImage}
              alt="Aziz Jan Trust logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <h3 className="text-lg font-semibold text-sky-900">
              Aziz Jan Trust
            </h3>
          </div>
          <p className="mt-3 text-sm text-sky-700">
            Empowering communities through education, healthcare, and
            opportunities for self-reliance across Khyber Pakhtunkhwa.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-sky-900">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sky-700 transition hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-sky-900">Contact Info</h3>
          <ul className="mt-3 space-y-2 text-sm text-sky-700">
            <li>Main Phone: +92 310 6694469</li>
            <li>School Phone: +92 91 5814211</li>
            <li>aziz.janinstitute@gmail.com</li>
            <li>Hayatabad, Peshawar, KPK</li>
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <SocialIcon
              href="https://www.facebook.com/p/Aziz-Jan-Trust-100094604598064/"
              label="Facebook"
              path="M13 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h2v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z"
            />
            <SocialIcon
              href="https://wa.me/923106694469"
              label="WhatsApp"
              path="M16.6 13.9c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1-.2.2-.7.7-.8.8-.1.1-.3.2-.5.1-.2-.1-.9-.3-1.7-1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.1-.2.2-.4.1-.2 0-.3 0-.4-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.4c.1.2 1.6 2.5 4 3.4 2.4.9 2.4.6 2.9.6.5-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1 0-.1-.2-.2-.4-.3z"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-sky-100">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-sky-600 sm:flex-row sm:px-6">
          <p>
            (c) 2024 Aziz Jan Trust. Philanthropic Arm of Aziz Group of
            Industries.
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/yasir-faizan-shalmani/"
              className="inline-flex items-center gap-2"
              aria-label="Developed by Yasir Faizan on LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.78v2.18h.07c.67-1.28 2.3-2.62 4.73-2.62C21.1 7.56 24 10 24 14.92V24h-5v-8.05c0-1.92-.03-4.39-2.68-4.39-2.69 0-3.1 2.1-3.1 4.26V24h-5V8z"
                />
              </svg>
              Developed by Yasir Faizan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
