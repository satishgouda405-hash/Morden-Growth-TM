import { Link } from "react-router";
import { business, whatsappUrl, solutions, problems, industries, processSteps, principles, packages } from "../content";
import { Reveal, DrawGroup } from "../components/Reveal";
import { SectionHead } from "../components/Bits";
import { CtaBand } from "../components/Chrome";

/* ------------------------------------------------------------------ */
/* Hero flow visual: Website → Customer → AI → Enquiry → Growth        */
/* Scroll-drawn SVG line connecting typographic nodes.                 */
/* ------------------------------------------------------------------ */
function FlowVisual() {
  const nodes = ["Website", "Customer", "AI", "Enquiry", "Growth"];
  return (
    <DrawGroup className="relative">
      <svg
        viewBox="0 0 560 400"
        className="h-auto w-full"
        fill="none"
        role="img"
        aria-label="Flow diagram: website to customer to AI to enquiry to business growth"
      >
        {/* connecting paths */}
        <path className="draw-path" d="M80 80 C 200 40, 300 60, 400 110" stroke="#C9A227" strokeWidth="1.5" />
        <path className="draw-path" d="M400 130 C 460 190, 440 250, 360 280" stroke="#C9A227" strokeWidth="1.5" />
        <path className="draw-path" d="M330 300 C 240 340, 160 330, 100 270" stroke="#C9A227" strokeWidth="1.5" />
        <path className="draw-path" d="M85 240 C 60 180, 60 140, 75 95" stroke="#C9A227" strokeWidth="1.5" />
        {/* nodes */}
        <g stroke="#0A0A0A" strokeWidth="1.2">
          <circle className="draw-path" cx="70" cy="85" r="34" />
          <circle className="draw-path" cx="410" cy="118" r="34" />
          <circle className="draw-path" cx="348" cy="292" r="34" />
          <circle className="draw-path" cx="96" cy="262" r="34" />
          <circle className="draw-path" cx="245" cy="185" r="46" stroke="#C9A227" strokeWidth="1.5" />
        </g>
        <g fill="#0A0A0A" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" textAnchor="middle">
          <text x="70" y="150">Website</text>
          <text x="410" y="183">Customer</text>
          <text x="348" y="357">Enquiry</text>
          <text x="96" y="327">AI</text>
          <text x="245" y="190" fill="#C9A227" fontSize="13" fontWeight="700">Growth</text>
        </g>
      </svg>
      <p className="sr-only">{nodes.join(" leads to ")}</p>
    </DrawGroup>
  );
}

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="grid-texture border-b border-black/10 bg-white pt-[72px]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28 lg:pt-24">
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Web • AI • Automation • Customer Experience
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-[2.6rem] font-light leading-[1.05] tracking-tightest text-ink sm:text-6xl lg:text-[4.4rem]">
                Turn Your Online Presence Into a <em className="not-italic text-gold">Growth System.</em>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-7 max-w-xl text-[15.5px] leading-relaxed text-ink/60">
                {business.name} helps businesses build better websites, use AI intelligently,
                capture more enquiries, and simplify customer communication — all through
                practical digital solutions designed around their business.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl("Hello Modern Growth, I'd like a free growth consultation for my business.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold hover:text-ink"
                >
                  Get a Free Growth Consultation
                </a>
                <Link
                  to="/services"
                  className="rounded-full border border-ink/25 px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-white"
                >
                  See What We Do
                </Link>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <p className="mt-8 text-[13px] text-ink/45">
                Serving local businesses across Karnataka &amp; India.
              </p>
            </Reveal>
          </div>
          <Reveal delay={250} className="hidden lg:block">
            <FlowVisual />
          </Reveal>
        </div>
      </section>

      {/* ---------------- PROBLEM ---------------- */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
          <div>
            <SectionHead
              eyebrow="The Problem"
              title="Your Business May Be Losing Opportunities Online."
              text="Many good businesses already have customers — but their online presence quietly works against them. If any of these sound familiar, you're not alone."
            />
          </div>
          <ul className="grid content-start gap-0 sm:grid-cols-2">
            {problems.map((p, i) => (
              <Reveal as="li" key={p} delay={i * 60} className="border-t border-black/10 py-4 pr-6">
                <div className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  <p className="text-[14px] leading-relaxed text-ink/75">{p}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- SOLUTIONS ---------------- */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <SectionHead
            num="01"
            eyebrow="What We Do"
            title="One Growth Partner. Multiple Digital Solutions."
            text="Modern Growth combines websites, AI, customer communication, lead capture and automation into practical solutions built around your business."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={i * 70} className="group border border-black/10 bg-white p-8 transition-colors duration-500 hover:bg-ink lg:p-10">
                <span className="font-display text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-xl font-normal text-ink transition-colors duration-500 group-hover:text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink/60 transition-colors duration-500 group-hover:text-white/60">
                  {s.text}
                </p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-ink transition-colors duration-500 group-hover:text-gold"
                >
                  Learn More
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- INDUSTRIES PREVIEW ---------------- */}
      <section className="bg-ink grid-texture-dark text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <SectionHead
            dark
            num="02"
            eyebrow="Who We Help"
            title="Built for Local &amp; Growing Businesses."
            text="We focus on small and medium-sized businesses that already have customers — but an outdated, weak, missing or ineffective online presence."
          />
          <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={i * 60} className="group border-t border-white/15 py-6">
                <h3 className="font-display text-lg font-normal transition-colors duration-300 group-hover:text-gold">
                  {ind.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/50">{ind.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <Link
              to="/industries"
              className="mt-12 inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
            >
              See How Modern Growth Can Help Your Business <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- PROCESS PREVIEW ---------------- */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <SectionHead
            num="03"
            eyebrow="How It Works"
            title="A Simple, Practical Process."
            text="No unnecessary complexity. No confusing technology. Just practical solutions."
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((s, i) => (
              <Reveal key={s.num} delay={i * 90} className="border-t-2 border-ink pt-6">
                <span className="font-display text-3xl font-light text-gold">{s.num}</span>
                <h3 className="mt-3 font-display text-xl text-ink">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/60">{s.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <Link to="/how-it-works" className="link-underline mt-10 inline-block text-[13.5px] font-semibold text-ink">
              See the full process →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- WHY MODERN GROWTH ---------------- */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <SectionHead
            num="04"
            eyebrow="Why Modern Growth"
            title="Principles Behind Every Project."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 60} className="border border-black/10 bg-paper p-8 lg:p-10">
                <div className="gold-rule mb-5" />
                <h3 className="font-display text-lg text-ink">{p.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/60">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PACKAGES ---------------- */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <SectionHead
            num="05"
            eyebrow="Packages"
            title="Clear Starting Points. Honest Pricing."
            text="Every business is different, so final pricing depends on your requirements. Choose a starting point, and we'll give you a clear quote after a short conversation."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal
                key={p.name}
                delay={i * 90}
                className={`flex flex-col border p-8 transition-shadow duration-500 lg:p-10 ${
                  p.featured
                    ? "border-ink bg-ink text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
                    : "border-black/10 bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{p.name}</p>
                <p className={`mt-3 text-[14px] leading-relaxed ${p.featured ? "text-white/60" : "text-ink/60"}`}>
                  {p.tagline}
                </p>
                <p className={`mt-6 font-display text-2xl font-light ${p.featured ? "text-white" : "text-ink"}`}>
                  Get a Quote
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-[13.5px]">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                      <span className={p.featured ? "text-white/75" : "text-ink/70"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl(p.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 rounded-full py-3.5 text-center text-sm font-semibold transition-all duration-300 ${
                    p.featured
                      ? "bg-gold text-ink hover:bg-white"
                      : "border border-ink text-ink hover:bg-ink hover:text-white"
                  }`}
                >
                  {p.cta}
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
