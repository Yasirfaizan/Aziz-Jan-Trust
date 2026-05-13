import logoImage from "../assets/Aziz Logo.jpg";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <img
          src={logoImage}
          alt="Aziz Jan Trust logo"
          className="h-14 w-14 rounded-full object-cover"
        />
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-sky-200 border-t-sky-500" />
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
          Loading
        </p>
      </div>
    </div>
  );
}
