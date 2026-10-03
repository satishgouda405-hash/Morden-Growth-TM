import { whatsappUrl } from "../content";
import { PageHero } from "../components/Bits";
import { Reveal } from "../components/Reveal";
import { CtaBand } from "../components/Chrome";

/**
 * Portfolio page. Real projects only — nothing here is invented.
 * When a real project is ready, add it to `projects` below with its
 * image, business name, industry, scope and live URL.
 */
type Project = {
  image: string;
  name: string;
  industry: string;
  built: string;
  features: string[];
  url: string;
};

const projects: Project[] = []; // ← add real projects here as they are completed

export default function Work() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Real Projects. Real Businesses."
        text="We only show work we've actually delivered. No mock client logos, no invented results."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          {projects.length === 0 ? (
            <Reveal>
              <div className="grid-texture flex flex-col items-center border border-dashed border-black/20 bg-paper px-8 py-20 text-center lg:py-28">
                <div className="gold-rule mb-8" />
                <h2 className="max-w-xl font-display text-3xl font-light tracking-tightest text-ink sm:text-4xl">
                  Our first case studies are being prepared.
                </h2>
                <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink/60">
                  We're currently working with our first businesses and will publish real projects
                  here — with live links — as they launch. Yours could be one of them.
                </p>
                <a
                  href={whatsappUrl("Hello Modern Growth, I'd like my business to be one of your first projects.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold hover:text-ink"
                >
                  Become One of Our First Projects
                </a>
              </div>
            </Reveal>
          ) : (
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <article key={p.name} className="group border border-black/10">
                  <div className="aspect-[4/3] overflow-hidden bg-paper">
                    <img
                      src={p.image}
                      alt={`${p.name} — ${p.industry}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{p.industry}</p>
                    <h2 className="mt-2 font-display text-xl text-ink">{p.name}</h2>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink/60">{p.built}</p>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-ink"
                    >
                      View Live Website <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
