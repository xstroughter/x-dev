import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="site">
        <div className="wrap header-row">
          <span className="wordmark">X Dev</span>
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
              Open for new projects
            </div>
            <h1>
              We build the store. Then we build <em>the thing that keeps it moving.</em>
            </h1>
            <p className="hero-sub">
              X Dev is a small studio for founders who don&apos;t have time to run their own
              marketing by hand. We design and build e-commerce stores end to end, then wire up
              the automated content systems that keep the brand posting, on-brand, every day —
              with nobody at a dashboard.
            </p>
            <div className="hero-actions">
              <Link className="btn" href="/contact">
                Start a project
              </Link>
              <a className="link-quiet" href="#work">
                See what&apos;s shipped
              </a>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="wrap">
            <p className="eyebrow">What we build</p>
            <h2>Two ways to work together</h2>
            <div className="modules">
              <div className="module-card">
                <span className="module-tag">MODULE 01</span>
                <h3>Store Build</h3>
                <p className="desc">
                  A full e-commerce store, designed and built from scratch — storefront,
                  checkout, payments, and launch, ready for real customers on day one.
                </p>
                <div className="spec-rows">
                  <div className="spec-row">
                    <div className="k">STACK</div>
                    <div className="v">Next.js · Medusa · Stripe</div>
                  </div>
                  <div className="spec-row">
                    <div className="k">INCLUDES</div>
                    <div className="v">
                      Design, storefront build, checkout, payment setup, launch QA
                    </div>
                  </div>
                  <div className="spec-row">
                    <div className="k">TIMELINE</div>
                    <div className="v">3–5 weeks</div>
                  </div>
                  <div className="spec-row price">
                    <div className="k">FROM</div>
                    <div className="v">$4,500</div>
                  </div>
                </div>
              </div>
              <div className="module-card">
                <span className="module-tag">MODULE 02</span>
                <h3>Automation Retainer</h3>
                <p className="desc">
                  An on-brand character or voice, designed once and set to run — scheduled posts
                  and fresh captions across platforms, without you touching a dashboard.
                </p>
                <div className="spec-rows">
                  <div className="spec-row">
                    <div className="k">PLATFORMS</div>
                    <div className="v">Instagram · Threads · TikTok</div>
                  </div>
                  <div className="spec-row">
                    <div className="k">INCLUDES</div>
                    <div className="v">
                      Character/voice design, content system, scheduled posting, monthly refresh
                    </div>
                  </div>
                  <div className="spec-row">
                    <div className="k">CADENCE</div>
                    <div className="v">Daily posting, multi-platform</div>
                  </div>
                  <div className="spec-row price">
                    <div className="k">FROM</div>
                    <div className="v">$1,500/mo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="wrap">
            <p className="eyebrow">Case study</p>
            <div className="case">
              <div className="case-copy">
                <h2 className="case-name">Snoutzzz</h2>
                <p>
                  Snoutzzz is a pet-comfort store we designed, built, and launched from the
                  ground up — storefront, checkout, and a brand mascot named Noodlez. It&apos;s a
                  live, working store, not a mockup:{" "}
                  <a
                    className="case-visit"
                    href="https://snoutzzz.com"
                    target="_blank"
                    rel="noopener"
                  >
                    visit snoutzzz.com ↗
                  </a>
                </p>
                <p>
                  After launch, we built the automation layer: a posting system that writes and
                  publishes in Noodlez&apos;s voice every day, across two platforms, without
                  anyone at a keyboard.
                </p>
                <p className="muted">
                  The store is newly live and still building its audience — everything below is
                  what&apos;s actually shipped and running today, not a projection.
                </p>
              </div>
              <div className="datasheet">
                <div className="datasheet-head">Build status</div>
                <div className="ds-row">
                  <div className="k">STOREFRONT</div>
                  <div className="v ds-live">Live &amp; accepting orders</div>
                </div>
                <div className="ds-row">
                  <div className="k">PAYMENTS</div>
                  <div className="v ds-live">Stripe, live</div>
                </div>
                <div className="ds-row">
                  <div className="k">BRAND</div>
                  <div className="v">Custom logo &amp; mascot</div>
                </div>
                <div className="ds-row">
                  <div className="k">THREADS</div>
                  <div className="v ds-live">7 posts/day, automated</div>
                </div>
                <div className="ds-row">
                  <div className="k">INSTAGRAM</div>
                  <div className="v ds-live">2 posts/day, automated</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <p className="eyebrow">How it works</p>
            <h2>Three steps, start to finish</h2>
            <div className="process">
              <div className="step">
                <span className="num">01</span>
                <h4>Discovery</h4>
                <p>
                  A short call to scope the build or the retainer — what you need, what you
                  already have, and what it&apos;ll take.
                </p>
              </div>
              <div className="step">
                <span className="num">02</span>
                <h4>Build</h4>
                <p>
                  Design and development with weekly check-ins, so nothing arrives as a surprise
                  at the end.
                </p>
              </div>
              <div className="step">
                <span className="num">03</span>
                <h4>Launch</h4>
                <p>
                  The store goes live, or the automation goes live and starts posting — handed
                  off, running on its own.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site">
        <div className="wrap footer-inner">
          <p className="footer-line">
            Have a store that needs building, or a brand that needs to show up every day without
            you?
          </p>
          <Link className="btn" href="/contact">
            Start a project
          </Link>
          <div className="footer-meta">xstroughter@gmail.com · working across time zones</div>
        </div>
      </footer>
    </>
  );
}
