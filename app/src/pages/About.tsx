import { business, principles } from "../content";
import { PageHero, SectionHead } from "../components/Bits";
import { Reveal } from "../components/Reveal";
import { CtaBand } from "../components/Chrome";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We Build Digital Systems Around Real Business Needs."
        text="Modern Growth focuses on practical digital solutions — not technology for its own sake."
      />

      {/* Story */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:py-28">
          <Reveal>
            <div className="gold-rule" />
            <h2 className="mt-6 font-display text-3xl font-light tracking-tightest text-ink sm:text-4xl">
              Why Modern Growth exists.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-[15.5px] leading-relaxed text-ink/70">
              <p>
                Modern Growth was created to help businesses use modern digital technology without
                unnecessary complexity.
              </p>
              <p>
                Instead of selling technology for the sake of technology, we focus on identifying
                practical business problems — lost enquiries, outdated websites, repeated customer
                questions, manual follow-ups — and using websites, AI, communication systems and
                automation to solve them.
              </p>
              <p>
                We work primarily with small and medium-sized local businesses across Karnataka and
                India: resorts, homestays, hotels, restaurants, travel businesses, local shops and
                professional services. Businesses that already have customers, but whose online
                presence doesn't reflect the quality of their work.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Difference */}
      <section className="bg-ink grid-texture-dark text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <SectionHead
            dark
            eyebrow="Our Difference"
            title="What Modern Growth Focuses On."
          />
          <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Business-first solutions",
              "Affordable entry points",
              "Modern websites",
              "Practical AI",
              "Simple customer experiences",
              "Mobile-first design",
              "Direct communication",
              "Custom solutions — not one-size-fits-all packages",
            ].map((item, i) => (
              <Reveal key={item} delay={i * 50} className="border-t border-white/15 py-5">
                <p className="text-[14.5px] leading-relaxed text-white/80">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <SectionHead eyebrow="Principles" title="How We Approach Every Project." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 60} className="border border-black/10 bg-white p-8 lg:p-10">
                <div className="gold-rule mb-5" />
                <h3 className="font-display text-lg text-ink">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/60">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <h2 className="font-display text-2xl font-light tracking-tightest text-ink sm:text-3xl">
                  Based in {business.location}. Working with businesses across India.
                </h2>
                <p className="mt-3 text-[14px] text-ink/60">{business.hours}</p>
              </div>
              <div className="flex flex-col gap-3 text-[14px] sm:flex-row sm:gap-8">
                <a href={business.phoneLink} className="link-underline font-medium text-ink">{business.phone}</a>
                <a href={business.emailLink} className="link-underline font-medium text-ink">{business.email}</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
