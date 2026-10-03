import { Link } from "react-router";
import { business, whatsappUrl } from "../content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo dark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {business.tagline}
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full border border-white/30 px-5 py-2.5 text-[13px] font-medium text-white transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
            >
              Talk to Modern Growth
            </a>
          </div>

          <nav aria-label="Services">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {["Websites", "AI Solutions", "Lead Capture", "WhatsApp", "Automation", "Google Business Support"].map((s) => (
                <li key={s}>
                  <Link to="/services" className="transition-colors hover:text-white">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Company</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {[
                ["About", "/about"],
                ["Our Work", "/work"],
                ["How It Works", "/how-it-works"],
                ["Industries", "/industries"],
                ["FAQ", "/faq"],
                ["Contact", "/contact"],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a href={business.whatsappLink} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                  WhatsApp: {business.whatsapp}
                </a>
              </li>
              <li>
                <a href={business.phoneLink} className="transition-colors hover:text-white">
                  Phone: {business.phone}
                </a>
              </li>
              <li>
                <a href={business.emailLink} className="break-all transition-colors hover:text-white">
                  {business.email}
                </a>
              </li>
              <li>{business.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-[13px] text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Modern Growth. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/** Floating WhatsApp button — always within thumb reach. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Modern Growth on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 hover:bg-gold hover:text-ink"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.03a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.08 8.08 0 0 1-1.24-4.28c0-4.47 3.64-8.1 8.16-8.1a8.1 8.1 0 0 1 8.1 8.1c0 4.48-3.63 8.12-8.1 8.12Zm4.45-6.07c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.36-1.68-.14-.24-.01-.37.11-.49.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.37 1 2.53.12.16 1.72 2.63 4.18 3.69.58.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    </a>
  );
}

/** Shared dark CTA band used at the foot of pages. */
export function CtaBand({
  title = "Let's Find the Right Digital Solution for Your Business.",
  text = "Tell us about your business and what you want to improve. We'll help identify the most practical next step.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-ink grid-texture-dark text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="gold-rule mb-8" />
        <h2 className="max-w-3xl font-display text-3xl font-light leading-[1.12] tracking-tightest sm:text-5xl">
          {title}
        </h2>
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">{text}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:bg-white"
          >
            Get a Free Growth Consultation
          </a>
          <Link
            to="/services"
            className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-ink"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
