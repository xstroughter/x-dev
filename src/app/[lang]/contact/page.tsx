import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getDictionary, hasLocale, type Dictionary } from "../dictionaries";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.contact.meta.title,
    description: dict.contact.meta.description,
  };
}

const businessKeys = ["bakery", "boutique", "plantShop", "studio", "cafe", "workshop"] as const;

function BizChip({
  labelKey,
  label,
  ariaHidden,
}: {
  labelKey: (typeof businessKeys)[number];
  label: string;
  ariaHidden?: boolean;
}) {
  return (
    <div className="biz-chip" aria-hidden={ariaHidden}>
      <BizIcon labelKey={labelKey} />
      <span>{label}</span>
    </div>
  );
}

function BizIcon({ labelKey }: { labelKey: (typeof businessKeys)[number] }) {
  switch (labelKey) {
    case "bakery":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 9h16l-1.5 10a2 2 0 0 1-2 1.8H7.5a2 2 0 0 1-2-1.8L4 9Z" />
          <path d="M9 9V6a3 3 0 0 1 6 0v3" />
        </svg>
      );
    case "boutique":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a2.5 2.5 0 0 1 2.5 2.5H9.5A2.5 2.5 0 0 1 12 3Z" />
          <path d="M6 7h12l2 13H4L6 7Z" />
          <path d="M9.5 5.5 5 9M14.5 5.5 19 9" />
        </svg>
      );
    case "plantShop":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21V11" />
          <path d="M12 11c0-3.5-2.5-6-6.5-6C6 9 8.5 11.5 12 11Z" />
          <path d="M12 11c0-3.8 2.7-6.5 7-6.5-.3 4-3 6.5-7 6.5Z" />
        </svg>
      );
    case "studio":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7 10.5 4h3L15 7" />
          <circle cx="12" cy="13.5" r="3.3" />
        </svg>
      );
    case "cafe":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 10h13v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-4Z" />
          <path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H17" />
          <path d="M8 3c-.7.8-.7 1.6 0 2.4M12 3c-.7.8-.7 1.6 0 2.4" />
        </svg>
      );
    case "workshop":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <path d="m14 7 3 3-8 8H6v-3l8-8Z" />
          <path d="m17 4 3 3" />
        </svg>
      );
  }
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const businesses: Dictionary["contact"]["businesses"] = dict.contact.businesses;
  const track = [...businessKeys, ...businessKeys];

  return (
    <>
      <header className="site">
        <div className="wrap header-row">
          <Link className="wordmark-link" href={`/${lang}`}>
            <span className="wordmark">{dict.nav.wordmark}</span>
          </Link>
          <LanguageSwitcher lang={lang} label={dict.nav.langLabel} />
          <Link className="back-link" href={`/${lang}`}>
            {dict.nav.backToStudio}
          </Link>
        </div>
      </header>

      <section className="motion-header">
        <div className="marquee-viewport" aria-hidden="true">
          <div className="marquee-track">
            {track.map((key, i) => (
              <BizChip
                key={i}
                labelKey={key}
                label={businesses[key]}
                ariaHidden={i >= businessKeys.length}
              />
            ))}
          </div>
        </div>
        <div className="wrap motion-overlay">
          <div className="status-line">
            <span className="status-dot" aria-hidden="true" />
            {dict.contact.motion.status}
          </div>
          <h1>
            {dict.contact.motion.h1Before}
            <em>{dict.contact.motion.h1Em}</em>
            {dict.contact.motion.h1After}
          </h1>
          <p className="hero-sub">{dict.contact.motion.sub}</p>
        </div>
      </section>

      <section className="pitch-line">
        <div className="wrap">
          <p className="craft-line">{dict.contact.pitchLine}</p>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="wrap">
          <p className="eyebrow">{dict.contact.form.eyebrow}</p>
          <h2>{dict.contact.form.heading}</h2>
          <ContactForm dict={dict.contact.form} />
        </div>
      </section>
    </>
  );
}
