import { Link } from "react-router";

/** Text-based brand mark — replace with the official logo asset when provided. */
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label="Modern Growth — home">
      <span
        className={`flex h-8 w-8 items-center justify-center ${
          dark ? "bg-white" : "bg-ink"
        } transition-colors duration-300 group-hover:bg-gold`}
      >
        <span className={`font-display text-lg leading-none ${dark ? "text-ink" : "text-white"} transition-colors duration-300 group-hover:text-ink`}>
          M
        </span>
      </span>
      <span className={`text-[15px] font-semibold tracking-tight ${dark ? "text-white" : "text-ink"}`}>
        Modern<span className="text-gold"> Growth</span>
      </span>
    </Link>
  );
}
