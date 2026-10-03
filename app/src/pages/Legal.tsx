import { business } from "../content";
import { PageHero } from "../components/Bits";
import { Reveal } from "../components/Reveal";

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <div className="border-t border-black/10 py-8">
        <h2 className="font-display text-xl font-normal text-ink">{title}</h2>
        <div className="mt-3 max-w-3xl space-y-3 text-[14.5px] leading-relaxed text-ink/65">{children}</div>
      </div>
    </Reveal>
  );
}

export function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" text={`Last updated: October 2026 · ${business.name}, ${business.location}`} />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
          <LegalSection title="1. Information We Collect">
            <p>When you contact us through this website — via the enquiry form, WhatsApp, phone or email — we collect only the information you choose to share, such as your name, business name, phone number, email address and details about your requirements.</p>
          </LegalSection>
          <LegalSection title="2. How We Use Your Information">
            <p>We use your information solely to respond to your enquiry, discuss potential services, and deliver the work you engage us for. We do not sell, rent or share your personal information with third parties for marketing purposes.</p>
          </LegalSection>
          <LegalSection title="3. WhatsApp &amp; Third-Party Services">
            <p>Enquiry buttons on this website open WhatsApp, which is governed by WhatsApp's own privacy policy. If analytics or cookie-based tools are added to this website in the future, this policy will be updated to describe them before they are enabled.</p>
          </LegalSection>
          <LegalSection title="4. Data Retention">
            <p>We retain enquiry details only as long as needed to handle your request and any resulting engagement. You may ask us to delete your information at any time.</p>
          </LegalSection>
          <LegalSection title="5. Your Rights">
            <p>You can request access to, correction of, or deletion of your personal information by contacting us at <a className="underline decoration-gold underline-offset-4" href={business.emailLink}>{business.email}</a>.</p>
          </LegalSection>
          <LegalSection title="6. Contact">
            <p>Questions about this policy: <a className="underline decoration-gold underline-offset-4" href={business.emailLink}>{business.email}</a> or WhatsApp {business.whatsapp}.</p>
          </LegalSection>
        </div>
      </section>
    </>
  );
}

export function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms &amp; Conditions" text={`Last updated: October 2026 · ${business.name}, ${business.location}`} />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
          <LegalSection title="1. Services">
            <p>{business.name} provides website development, AI assistants, WhatsApp enquiry systems, lead capture, Google Business Profile support and business automation services. The exact scope, deliverables and timeline of each project are agreed in writing before work begins.</p>
          </LegalSection>
          <LegalSection title="2. Quotes &amp; Pricing">
            <p>Pricing varies by requirement and is confirmed through a written quote before any work starts. We do not display fixed public pricing because every project is scoped individually.</p>
          </LegalSection>
          <LegalSection title="3. Payments">
            <p>Payment terms — including any advance, milestones and final payment — are stated in the project quote or agreement for each engagement.</p>
          </LegalSection>
          <LegalSection title="4. No Guaranteed Outcomes">
            <p>We commit to professional, honest work. We do not guarantee specific sales, lead volumes, search rankings or revenue outcomes, as these depend on many factors outside any service provider's control.</p>
          </LegalSection>
          <LegalSection title="5. Client Responsibilities">
            <p>Timely delivery depends on receiving accurate business information, content and feedback from the client. Delays in providing these may extend project timelines.</p>
          </LegalSection>
          <LegalSection title="6. Cancellations &amp; Refunds">
            <p>Cancellation and refund terms, where applicable, are defined in the individual project agreement. Please discuss any concerns with us directly before raising a dispute.</p>
          </LegalSection>
          <LegalSection title="7. Intellectual Property">
            <p>Upon full payment, the client owns the final delivered website content and design created specifically for them. Third-party tools, fonts, libraries and platforms remain subject to their own licenses.</p>
          </LegalSection>
          <LegalSection title="8. Contact">
            <p>Questions about these terms: <a className="underline decoration-gold underline-offset-4" href={business.emailLink}>{business.email}</a> or WhatsApp {business.whatsapp}.</p>
          </LegalSection>
        </div>
      </section>
    </>
  );
}

export function NotFound() {
  return (
    <section className="grid-texture flex min-h-screen items-center bg-white pt-[72px]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">404</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-light tracking-tightest text-ink sm:text-6xl">
          This page doesn't exist.
        </h1>
        <p className="mt-5 max-w-md text-[15px] text-ink/60">
          The link may be outdated or the page may have moved.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a href="/" className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gold hover:text-ink">
            Back to Home
          </a>
          <a
            href={business.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink/25 px-7 py-3.5 text-sm font-medium text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
