import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Start a Project — X Dev",
  description: "Tell X Dev about your store or brand and start a project.",
};

const businesses = ["Bakery", "Boutique", "Plant Shop", "Studio", "Café", "Workshop"];

function BizChip({ label, ariaHidden }: { label: string; ariaHidden?: boolean }) {
  return (
    <div className="biz-chip" aria-hidden={ariaHidden}>
      <BizIcon label={label} />
      <span>{label}</span>
    </div>
  );
}

function BizIcon({ label }: { label: string }) {
  switch (label) {
    case "Bakery":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 9h16l-1.5 10a2 2 0 0 1-2 1.8H7.5a2 2 0 0 1-2-1.8L4 9Z" />
          <path d="M9 9V6a3 3 0 0 1 6 0v3" />
        </svg>
      );
    case "Boutique":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a2.5 2.5 0 0 1 2.5 2.5H9.5A2.5 2.5 0 0 1 12 3Z" />
          <path d="M6 7h12l2 13H4L6 7Z" />
          <path d="M9.5 5.5 5 9M14.5 5.5 19 9" />
        </svg>
      );
    case "Plant Shop":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21V11" />
          <path d="M12 11c0-3.5-2.5-6-6.5-6C6 9 8.5 11.5 12 11Z" />
          <path d="M12 11c0-3.8 2.7-6.5 7-6.5-.3 4-3 6.5-7 6.5Z" />
        </svg>
      );
    case "Studio":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7 10.5 4h3L15 7" />
          <circle cx="12" cy="13.5" r="3.3" />
        </svg>
      );
    case "Café":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 10h13v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-4Z" />
          <path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H17" />
          <path d="M8 3c-.7.8-.7 1.6 0 2.4M12 3c-.7.8-.7 1.6 0 2.4" />
        </svg>
      );
    case "Workshop":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <path d="m14 7 3 3-8 8H6v-3l8-8Z" />
          <path d="m17 4 3 3" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ContactPage() {
  const track = [...businesses, ...businesses];

  return (
    <>
      <header className="site">
        <div className="wrap header-row">
          <Link className="wordmark-link" href="/">
            <span className="wordmark">X Dev</span>
          </Link>
          <Link className="back-link" href="/">
            &larr; Back to studio
          </Link>
        </div>
      </header>

      <section className="motion-header">
        <div className="marquee-viewport" aria-hidden="true">
          <div className="marquee-track">
            {track.map((label, i) => (
              <BizChip key={i} label={label} ariaHidden={i >= businesses.length} />
            ))}
          </div>
        </div>
        <div className="wrap motion-overlay">
          <div className="status-line">
            <span className="status-dot" aria-hidden="true" />
            Every kind of business, one system
          </div>
          <h1>
            Let&apos;s start <em>your</em> project.
          </h1>
          <p className="hero-sub">
            Bakers, boutiques, studios, plant shops — every kind of business we&apos;ve worked
            with needed the same thing: a storefront and a presence that runs without them. Tell
            us about yours below.
          </p>
        </div>
      </section>

      <section className="pitch-line">
        <div className="wrap">
          <p className="craft-line">
            Let us handle the digital footprint — the store, the socials, the upkeep — so you can
            spend your time on the craft you actually love.
          </p>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="wrap">
          <p className="eyebrow">Get in touch</p>
          <h2>Tell us about the project</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
