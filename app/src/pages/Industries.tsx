import { industries, whatsappUrl } from "../content";
import { PageHero } from "../components/Bits";
import { Reveal } from "../components/Reveal";
import { CtaBand } from "../components/Chrome";

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Digital Solutions Shaped Around Your Industry."
        text="Different businesses need different digital systems. We focus on the industries where websites, WhatsApp, AI and automation make the most practical difference."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={i * 60} className="group border border-black/10 bg-white p-8 transition-colors duration-500 hover:bg-ink lg:p-10">
                <span className="font-display text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-4 font-display text-xl font-normal text-ink transition-colors duration-500 group-hover:text-white">
                  {ind.title}
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-ink/60 transition-colors duration-500 group-hover:text-white/60">
                  {ind.text}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-16 flex flex-col items-start justify-between gap-6 border border-black/10 bg-paper p-8 sm:flex-row sm:items-center lg:p-10">
              <div>
                <h2 className="font-display text-2xl font-light tracking-tightest text-ink">
                  Your industry isn't listed?
                </h2>
                <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-ink/60">
                  We build custom solutions rather than one-size-fits-all packages. If you run a
                  business with customers, we can likely help.
                </p>
              </div>
              <a
                href={whatsappUrl("Hello Modern Growth, I'd like to discuss a digital solution for my industry.")}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold hover:text-ink"
              >
                Talk to Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
