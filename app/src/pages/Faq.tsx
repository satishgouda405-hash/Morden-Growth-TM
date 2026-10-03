import { faqs, whatsappUrl } from "../content";
import { PageHero } from "../components/Bits";
import { Reveal } from "../components/Reveal";
import { CtaBand } from "../components/Chrome";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function Faq() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions Business Owners Actually Ask."
        text="Honest answers — no exaggerated claims, no guaranteed results. If your question isn't here, ask us directly on WhatsApp."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:py-24">
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-black/10">
                  <AccordionTrigger className="py-5 text-left font-display text-lg font-normal text-ink hover:text-gold hover:no-underline [&[data-state=open]]:text-gold">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-[14.5px] leading-relaxed text-ink/65">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-14 flex flex-col items-start justify-between gap-6 border border-black/10 bg-paper p-8 sm:flex-row sm:items-center">
              <p className="font-display text-xl font-light text-ink">Still have a question?</p>
              <a
                href={whatsappUrl("Hello Modern Growth, I have a question about your services.")}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold hover:text-ink"
              >
                Ask on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
