import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoImage from "../assets/Aziz Logo.jpg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "News", to: "/news" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-sky-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoImage}
            alt="Aziz Jan Trust logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
            <p className="text-base font-semibold text-sky-900">
              Aziz Jan Trust
            </p>
            <p className="text-xs uppercase tracking-[0.22em] text-sky-500">
              AJ Trust
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-sky-900 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition hover:text-primary ${
                  isActive ? "text-primary" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://www.saylanimit.com/enroll"
            className="rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10"
            target="_blank"
            rel="noreferrer"
          >
            Enroll
          </a>
          <a
            href="https://wa.me/923106694469"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Donate
          </a>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-md border border-sky-200 p-2 text-sky-700 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-sky-100 bg-white/95 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-sky-900">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 transition hover:bg-sky-50 ${
                    isActive ? "bg-sky-100 text-sky-700" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="https://www.saylanimit.com/enroll"
              className="rounded-full border border-primary/30 px-4 py-2 text-center text-sm font-semibold text-primary transition hover:bg-primary/10"
              target="_blank"
              rel="noreferrer"
            >
              Enroll
            </a>
            <a
              href="https://wa.me/923106694469"
              className="rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-white shadow-soft transition hover:bg-primary/90"
            >
              Donate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
