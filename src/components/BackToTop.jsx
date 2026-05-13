import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-20 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-soft transition hover:-translate-y-1 hover:bg-primary/90"
      aria-label="Back to top"
    >
      <span className="text-lg">↑</span>
    </button>
  );
}
