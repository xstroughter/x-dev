import Link from "next/link";
import { getDictionary, hasLocale } from "./dictionaries";
import { notFound } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.home;

  return (
    <>
      <header className="site">
        <div className="wrap header-row">
          <span className="wordmark">{dict.nav.wordmark}</span>
          <LanguageSwitcher lang={lang} label={dict.nav.langLabel} />
          <a className="header-contact" href="mailto:xstroughter@gmail.com">
            xstroughter@gmail.com
          </a>
        </div>
      </header>

      <main>
        <section className="hero" style={{ borderTop: "none", paddingTop: 88 }}>
          <div className="wrap">
            <div className="status-line">
              <span className="status-dot" aria-hidden="true" />
              {t.status}
            </div>
            <h1>
              {t.h1Before}
              <em>{t.h1Em}</em>
            </h1>
            <p className="hero-sub">{t.sub}</p>
            <div className="hero-actions">
              <Link className="btn" href={`/${lang}/contact`}>
                {t.ctaStart}
              </Link>
              <a className="link-quiet" href="#work">
                {t.ctaShipped}
              </a>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="wrap">
            <p className="eyebrow">{t.services.eyebrow}</p>
            <h2>{t.services.heading}</h2>
            <div className="modules">
              <div className="module-card">
                <span className="module-tag">{t.services.module1.tag}</span>
                <h3>{t.services.module1.title}</h3>
                <p className="desc">{t.services.module1.desc}</p>
                <div className="spec-rows">
                  <div className="spec-row">
                    <div className="k">{t.services.module1.stackLabel}</div>
                    <div className="v">{t.services.module1.stackValue}</div>
                  </div>
                  <div className="spec-row">
                    <div className="k">{t.services.module1.includesLabel}</div>
                    <div className="v">{t.services.module1.includesValue}</div>
                  </div>
                  <div className="spec-row">
                    <div className="k">{t.services.module1.timelineLabel}</div>
                    <div className="v">{t.services.module1.timelineValue}</div>
                  </div>
                  <div className="spec-row price">
                    <div className="k">{t.services.module1.fromLabel}</div>
                    <div className="v">{t.services.module1.fromValue}</div>
                  </div>
                </div>
              </div>
              <div className="module-card">
                <span className="module-tag">{t.services.module2.tag}</span>
                <h3>{t.services.module2.title}</h3>
                <p className="desc">{t.services.module2.desc}</p>
                <div className="spec-rows">
                  <div className="spec-row">
                    <div className="k">{t.services.module2.platformsLabel}</div>
                    <div className="v">{t.services.module2.platformsValue}</div>
                  </div>
                  <div className="spec-row">
                    <div className="k">{t.services.module2.includesLabel}</div>
                    <div className="v">{t.services.module2.includesValue}</div>
                  </div>
                  <div className="spec-row">
                    <div className="k">{t.services.module2.cadenceLabel}</div>
                    <div className="v">{t.services.module2.cadenceValue}</div>
                  </div>
                  <div className="spec-row price">
                    <div className="k">{t.services.module2.fromLabel}</div>
                    <div className="v">{t.services.module2.fromValue}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="wrap">
            <p className="eyebrow">{t.case.eyebrow}</p>
            <div className="case">
              <div className="case-copy">
                <h2 className="case-name">{t.case.name}</h2>
                <p>
                  {t.case.p1Before}
                  <a
                    className="case-visit"
                    href="https://snoutzzz.com"
                    target="_blank"
                    rel="noopener"
                  >
                    {t.case.visitLink}
                  </a>
                </p>
                <p>{t.case.p2}</p>
                <p className="muted">{t.case.p3}</p>
              </div>
              <div className="datasheet">
                <div className="datasheet-head">{t.case.datasheetHead}</div>
                <div className="ds-row">
                  <div className="k">{t.case.storefrontLabel}</div>
                  <div className="v ds-live">{t.case.storefrontValue}</div>
                </div>
                <div className="ds-row">
                  <div className="k">{t.case.paymentsLabel}</div>
                  <div className="v ds-live">{t.case.paymentsValue}</div>
                </div>
                <div className="ds-row">
                  <div className="k">{t.case.brandLabel}</div>
                  <div className="v">{t.case.brandValue}</div>
                </div>
                <div className="ds-row">
                  <div className="k">{t.case.threadsLabel}</div>
                  <div className="v ds-live">{t.case.threadsValue}</div>
                </div>
                <div className="ds-row">
                  <div className="k">{t.case.instagramLabel}</div>
                  <div className="v ds-live">{t.case.instagramValue}</div>
                </div>
              </div>
            </div>

            <p className="eyebrow case-divider">{t.case2.eyebrow}</p>
            <div className="case">
              <div className="case-copy">
                <h2 className="case-name">{t.case2.name}</h2>
                <p>
                  {t.case2.p1Before}
                  <a
                    className="case-visit"
                    href="https://www.ericaham.com"
                    target="_blank"
                    rel="noopener"
                  >
                    {t.case2.visitLink}
                  </a>
                </p>
                <p>{t.case2.p2}</p>
                <p className="muted">{t.case2.p3}</p>
              </div>
              <div className="datasheet">
                <div className="datasheet-head">{t.case2.datasheetHead}</div>
                <div className="ds-row">
                  <div className="k">{t.case2.galleryLabel}</div>
                  <div className="v ds-live">{t.case2.galleryValue}</div>
                </div>
                <div className="ds-row">
                  <div className="k">{t.case2.shopLabel}</div>
                  <div className="v ds-live">{t.case2.shopValue}</div>
                </div>
                <div className="ds-row">
                  <div className="k">{t.case2.hostingLabel}</div>
                  <div className="v">{t.case2.hostingValue}</div>
                </div>
                <div className="ds-row">
                  <div className="k">{t.case2.socialLabel}</div>
                  <div className="v ds-live">{t.case2.socialValue}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <p className="eyebrow">{t.process.eyebrow}</p>
            <h2>{t.process.heading}</h2>
            <div className="process">
              <div className="step">
                <span className="num">01</span>
                <h4>{t.process.step1.title}</h4>
                <p>{t.process.step1.desc}</p>
              </div>
              <div className="step">
                <span className="num">02</span>
                <h4>{t.process.step2.title}</h4>
                <p>{t.process.step2.desc}</p>
              </div>
              <div className="step">
                <span className="num">03</span>
                <h4>{t.process.step3.title}</h4>
                <p>{t.process.step3.desc}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site">
        <div className="wrap footer-inner">
          <p className="footer-line">{t.footer.line}</p>
          <Link className="btn" href={`/${lang}/contact`}>
            {t.footer.cta}
          </Link>
          <div className="footer-meta">{t.footer.meta}</div>
        </div>
      </footer>
    </>
  );
}
