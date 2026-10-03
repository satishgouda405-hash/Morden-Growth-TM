import { services, whatsappUrl } from "../content";
import { PageHero } from "../components/Bits";
import { Reveal } from "../components/Reveal";
import { CtaBand } from "../components/Chrome";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Practical Digital Solutions for Real Business Problems."
        text="We don't sell technology for the sake of technology. Each service below exists to solve a specific, everyday problem that local businesses face online."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="space-y-0">
            {services.map((s, i) => (
              <Reveal
                key={s.id}
                className={`grid gap-8 border-t border-black/10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <span className="font-display text-sm text-gold">{s.num}</span>
                  <h2 className="mt-3 font-display text-3xl font-light tracking-tightest text-ink sm:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/60">{s.short}</p>
                  <a
                    href={whatsappUrl(s.wa)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block rounded-full border border-ink px-6 py-3 text-[13px] font-semibold text-ink transition-all duration-300 hover:bg-ink hover:text-white"
                  >
                    {s.cta}
                  </a>
                </div>
                <div className="lg:pl-10">
                  <ul className="grid gap-x-8 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3 border-t border-black/5 py-3 text-[14px] text-ink/75">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  {s.note && (
                    <p className="mt-6 border-l-2 border-gold bg-paper p-4 text-[13.5px] leading-relaxed text-ink/65">
                      {s.note}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not Sure Which Service Fits?"
        text="Tell us what you want to improve — we'll help identify the most practical next step for your business."
      />
    </>
  );
}
