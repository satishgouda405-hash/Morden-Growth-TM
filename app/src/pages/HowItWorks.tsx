import { processSteps, whatsappUrl } from "../content";
import { PageHero, SectionHead } from "../components/Bits";
import { Reveal, DrawGroup } from "../components/Reveal";
import { CtaBand } from "../components/Chrome";

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="From First Conversation to Continuous Improvement."
        text="No unnecessary complexity. No confusing technology. Just practical solutions, delivered through a simple four-step process."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <DrawGroup>
            <div className="relative grid gap-14 lg:grid-cols-4 lg:gap-8">
              {/* connecting line (desktop) */}
              <svg
                className="absolute left-0 top-6 hidden h-1 w-full lg:block"
                viewBox="0 0 1000 4"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line className="draw-path" x1="0" y1="2" x2="1000" y2="2" stroke="#C9A227" strokeWidth="1.5" />
              </svg>
              {processSteps.map((s, i) => (
                <Reveal key={s.num} delay={i * 120} className="relative">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-white font-display text-sm text-gold">
                    {s.num}
                  </span>
                  <h2 className="mt-6 font-display text-2xl font-light tracking-tightest text-ink">{s.title}</h2>
                  <p className="mt-3 max-w-xs text-[14.5px] leading-relaxed text-ink/60">{s.text}</p>
                </Reveal>
              ))}
            </div>
          </DrawGroup>

          <Reveal delay={100}>
            <div className="mt-20 border-l-2 border-gold bg-paper p-8 lg:p-10">
              <p className="max-w-3xl font-display text-xl font-light leading-snug text-ink sm:text-2xl">
                "No unnecessary complexity. No confusing technology. Just practical solutions."
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <SectionHead
            eyebrow="What to Expect"
            title="Working With Modern Growth."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                t: "Direct communication",
                d: "You talk to the people doing the work — mostly over WhatsApp, the way you already communicate.",
              },
              {
                t: "Honest recommendations",
                d: "If something won't help your business, we'll say so. We don't sell features you don't need.",
              },
              {
                t: "Affordable entry points",
                d: "Start with what matters most, and expand your digital system as your business grows.",
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 70} className="border border-black/10 bg-paper p-8 lg:p-10">
                <div className="gold-rule mb-5" />
                <h3 className="font-display text-lg text-ink">{c.t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/60">{c.d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <a
              href={whatsappUrl("Hello Modern Growth, I'd like to start with a discovery conversation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-block rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold hover:text-ink"
            >
              Start With Step 01 — Discover
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
