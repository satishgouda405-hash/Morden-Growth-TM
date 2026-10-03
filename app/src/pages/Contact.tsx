import { useState, type FormEvent } from "react";
import { business, whatsappUrl, contactHelpOptions, budgetOptions } from "../content";
import { PageHero } from "../components/Bits";
import { Reveal } from "../components/Reveal";

const inputCls =
  "w-full border border-black/15 bg-white px-4 py-3 text-[14.5px] text-ink placeholder:text-ink/35 transition-colors focus:border-gold focus:outline-none";
const labelCls = "mb-2 block text-[13px] font-semibold text-ink";

export default function Contact() {
  const [sent, setSent] = useState(false);

  /** Compose the enquiry and hand off to WhatsApp. */
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("company")) return; // honeypot — silently drop bots
    const lines = [
      "New enquiry from the Modern Growth website:",
      "",
      `Name: ${fd.get("name")}`,
      `Business: ${fd.get("business")}`,
      `Phone/WhatsApp: ${fd.get("phone")}`,
      fd.get("email") ? `Email: ${fd.get("email")}` : null,
      `Business type: ${fd.get("type")}`,
      fd.get("website") ? `Current website: ${fd.get("website")}` : null,
      `Needs help with: ${fd.get("help")}`,
      `Budget: ${fd.get("budget")}`,
      "",
      `Message: ${fd.get("message")}`,
    ].filter(Boolean);
    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Find the Right Digital Solution for Your Business."
        text="Tell us about your business and what you want to improve. We'll help identify the most practical next step."
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          {/* Form */}
          <Reveal>
            {sent ? (
              <div className="border border-gold/40 bg-paper p-10 text-center">
                <div className="gold-rule mx-auto mb-6" />
                <h2 className="font-display text-2xl font-light text-ink">Enquiry prepared.</h2>
                <p className="mx-auto mt-3 max-w-sm text-[14.5px] leading-relaxed text-ink/60">
                  WhatsApp should have opened with your message ready to send. If it didn't,{" "}
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-ink underline decoration-gold underline-offset-4"
                  >
                    tap here to chat with us
                  </a>
                  .
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="link-underline mt-6 text-[13px] font-semibold text-ink"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false}>
                {/* honeypot — hidden from humans */}
                <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <div>
                  <label htmlFor="name" className={labelCls}>Name *</label>
                  <input id="name" name="name" required className={inputCls} autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="business" className={labelCls}>Business name *</label>
                  <input id="business" name="business" required className={inputCls} autoComplete="organization" />
                </div>
                <div>
                  <label htmlFor="phone" className={labelCls}>Phone / WhatsApp *</label>
                  <input id="phone" name="phone" type="tel" required className={inputCls} autoComplete="tel" />
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>Email</label>
                  <input id="email" name="email" type="email" className={inputCls} autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="type" className={labelCls}>Business type *</label>
                  <input id="type" name="type" required placeholder="e.g. Homestay, Restaurant" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="website" className={labelCls}>Current website</label>
                  <input id="website" name="website" type="url" placeholder="https://" className={inputCls} />
                </div>
                <div>
                  <label htmlFor="help" className={labelCls}>What do you need help with? *</label>
                  <select id="help" name="help" required className={inputCls} defaultValue="">
                    <option value="" disabled>Select an option</option>
                    {contactHelpOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className={labelCls}>Approximate budget</label>
                  <select id="budget" name="budget" className={inputCls} defaultValue="Not sure yet">
                    {budgetOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelCls}>Message *</label>
                  <textarea id="message" name="message" required rows={5} className={inputCls} placeholder="Tell us about your business and what you want to improve." />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-ink py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold hover:text-ink sm:w-auto sm:px-10"
                  >
                    Send Enquiry
                  </button>
                  <p className="mt-3 text-[12.5px] text-ink/45">
                    Submitting opens WhatsApp with your enquiry pre-filled — the fastest way to reach us.
                  </p>
                </div>
              </form>
            )}
          </Reveal>

          {/* Direct contact panel */}
          <Reveal delay={150}>
            <aside className="h-fit bg-ink p-8 text-white lg:p-10">
              <h2 className="font-display text-2xl font-light tracking-tightest">Prefer to talk directly?</h2>
              <div className="gold-rule my-6" />
              <ul className="space-y-6 text-[14.5px]">
                <li>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">WhatsApp</p>
                  <a href={business.whatsappLink} target="_blank" rel="noopener noreferrer" className="link-underline mt-1 inline-block text-white/90">
                    {business.whatsapp}
                  </a>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Phone</p>
                  <a href={business.phoneLink} className="link-underline mt-1 inline-block text-white/90">
                    {business.phone}
                  </a>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Email</p>
                  <a href={business.emailLink} className="link-underline mt-1 inline-block break-all text-white/90">
                    {business.email}
                  </a>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Location</p>
                  <p className="mt-1 text-white/90">{business.location}</p>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Business hours</p>
                  <p className="mt-1 text-white/90">{business.hours}</p>
                </li>
              </ul>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
