import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Interior page hero — oversized serif headline on grid texture. */
export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="grid-texture border-b border-black/10 bg-white pt-[72px]">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-16 sm:px-8 lg:pb-24 lg:pt-24">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-light leading-[1.08] tracking-tightest text-ink sm:text-6xl">
            {title}
          </h1>
        </Reveal>
        {text && (
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60">{text}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/** Section heading with number + gold rule. */
export function SectionHead({
  num,
  eyebrow,
  title,
  text,
  dark = false,
}: {
  num?: string;
  eyebrow: string;
  title: ReactNode;
  text?: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-12 lg:mb-16">
      <Reveal>
        <div className="flex items-baseline gap-4">
          {num && (
            <span className={`font-display text-sm ${dark ? "text-gold" : "text-gold"}`}>{num}</span>
          )}
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <h2
          className={`mt-4 max-w-3xl font-display text-3xl font-light leading-[1.12] tracking-tightest sm:text-5xl ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {text && (
        <Reveal delay={180}>
          <p className={`mt-5 max-w-2xl text-[15px] leading-relaxed ${dark ? "text-white/60" : "text-ink/60"}`}>
            {text}
          </p>
        </Reveal>
      )}
    </div>
  );
}
