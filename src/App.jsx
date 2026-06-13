import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

const JOTFORM_BASE_URL =
  "https://form.jotform.com/mirwes210/DMV-TEST-CAR-RENTALS";

const DMV_TEST_RENTAL_URL =
  JOTFORM_BASE_URL +
  "?SelectYourPackage=DMV%20Test%20Rental%20%E2%80%94%20%24249";

const EXPERIENCE_BOOST_URL =
  JOTFORM_BASE_URL +
  "?SelectYourPackage=Experience%20Boost%20(45%E2%80%9360%20min%20Warm-Up%20Drive)%20%E2%80%94%20%24369";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const currentYear = new Date().getFullYear();

  useScrollReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="page">
      <Navbar scrolled={scrolled} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <span className="hero-dot" />
            San Francisco Bay Area &bull; Fully Insured &bull; DMV Test Only
          </div>
          <h1 className="hero-title">
            Pass your DMV test with{" "}
            <span className="gradient-text">confidence</span>
          </h1>
          <p className="hero-sub">
            No car? No problem. Reserve a clean, fully insured vehicle for your
            DMV drive test with a licensed adult to ride along. Show up,
            drive, done.
          </p>
          <div className="cta-row">
            <a
              href={DMV_TEST_RENTAL_URL}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Book DMV Test Car
            </a>
            <a href="#pricing" className="btn btn-ghost">
              View Pricing
            </a>
          </div>
          <div className="trust-badges">
            <span>✔ DMV-ready vehicle</span>
            <span>✔ Licensed adult included</span>
            <span>✔ Bay Area wide</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-wrapper reveal">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Fully Insured</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Bay Area DMV Offices</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <div className="stat-number">$230</div>
            <div className="stat-label">Starting Price</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <div className="stat-number">60 min</div>
            <div className="stat-label">Warm-Up Option</div>
          </div>
        </div>
      </div>

      <main className="main-content">
        {/* HOW IT WORKS */}
        <section id="book" className="section reveal">
          <div className="section-header">
            <div className="section-tag">Simple Process</div>
            <h2 className="section-title">How it works</h2>
            <p className="section-sub">
              3 steps. Zero stress. Focus on passing — not logistics.
            </p>
          </div>
          <div className="steps-grid">
            {[
              {
                num: "01",
                title: "Reserve",
                desc: "Pick your DMV office, date, and time. Complete the online rental agreement so your car is guaranteed for test day.",
              },
              {
                num: "02",
                title: "Meet at DMV",
                desc: "On test day we meet you at the DMV with a clean, fully insured vehicle and a licensed adult in the passenger seat.",
              },
              {
                num: "03",
                title: "Take your test",
                desc: "You use our car for the entire drive test. We wait, then you return the keys and walk away — no awkward favors from friends or family.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="step-card"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="step-number">{step.num}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="section reveal">
          <div className="section-header">
            <div className="section-tag">Transparent Pricing</div>
            <h2 className="section-title">Choose your package</h2>
            <p className="section-sub">
              No surprises. All rentals include a DMV-ready, fully insured
              vehicle and a licensed adult in the passenger seat.
            </p>
          </div>
          <div className="pricing-grid">
            {/* Card 1 */}
            <div className="price-card">
              <h3 className="price-title">DMV Test Rental</h3>
              <p className="price-sub">
                Already comfortable driving? Just need the right car for
                your test day.
              </p>
              <div className="price-amount">
                <span className="price-from">From</span>$230
              </div>
              <ul className="feature-list">
                <li>DMV-compliant, fully insured vehicle</li>
                <li>Licensed adult to accompany you during the test</li>
                <li>5–10 min vehicle orientation (orientation only)</li>
                <li>Meet directly at your DMV location</li>
              </ul>
              <a
                href={DMV_TEST_RENTAL_URL}
                className="btn btn-ghost price-btn"
                target="_blank"
                rel="noreferrer"
              >
                Book DMV Test Rental →
              </a>
            </div>

            {/* Card 2 – highlight */}
            <div className="price-card price-card-highlight">
              <div className="price-badge">Most Popular</div>
              <h3 className="price-title">Experience Boost</h3>
              <p className="price-sub">
                45–60 min warm-up drive + full DMV test rental. Build
                confidence before you go in.
              </p>
              <div className="price-amount">
                <span className="price-from">From</span>$300
              </div>
              <ul className="feature-list">
                <li>All DMV Test Rental benefits</li>
                <li>45–60 min warm-up on public roads</li>
                <li>Familiarize with steering, braking &amp; handling</li>
                <li>Reduce test-day nerves significantly</li>
              </ul>
              <a
                href={EXPERIENCE_BOOST_URL}
                className="btn btn-primary price-btn"
                target="_blank"
                rel="noreferrer"
              >
                Book Experience Boost →
              </a>
              <p className="price-note">Quick orientation only. No driving instruction.</p>
            </div>
          </div>
        </section>

        {/* INCLUDED / NOT INCLUDED */}
        <section className="section reveal">
          <div className="section-header">
            <div className="section-tag">Transparency</div>
            <h2 className="section-title">What&apos;s included</h2>
          </div>
          <div className="two-col">
            <div className="included-card included-yes">
              <h3 className="included-title">
                <span className="included-icon">✓</span>
                What&apos;s Included
              </h3>
              <ul className="feature-list">
                <li>DMV-approved, fully insured vehicle</li>
                <li>Licensed adult to accompany you during the test</li>
                <li>Pre-test vehicle orientation (mirrors, seat, controls)</li>
                <li>DMV check-in assistance and support</li>
                <li>Use of the vehicle for the full drive test</li>
              </ul>
            </div>
            <div className="included-card included-no">
              <h3 className="included-title">
                <span className="included-icon not">✗</span>
                What&apos;s NOT Included
              </h3>
              <ul className="feature-list not">
                <li>No driving school services</li>
                <li>No driving lessons as part of the rental</li>
                <li>No coaching or corrections during the DMV test</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ORIENTATION */}
        <section className="section reveal">
          <div className="section-header">
            <div className="section-tag">Pre-Test</div>
            <h2 className="section-title">Optional vehicle orientation</h2>
            <p className="section-sub">
              <strong>Quick orientation only — not driving instruction.</strong>
            </p>
          </div>
          <div className="orientation-grid">
            {[
              "Seat & mirror setup",
              "Signals, lights & wipers",
              "Brake & steering feel",
              "General safety reminders",
            ].map((item, i) => (
              <div key={i} className="orientation-item">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section reveal">
          <div className="section-header">
            <div className="section-tag">Get In Touch</div>
            <h2 className="section-title">Service area &amp; contact</h2>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h4>Operations Base</h4>
              <p>
                5111 Old Redwood Hwy N
                <br />
                Petaluma, CA 94954
              </p>
              <a href="tel:19253348542" className="contact-link">
                📞 925-334-8542
              </a>
            </div>
            <div className="contact-card">
              <div className="contact-icon">🏙️</div>
              <h4>San Francisco Office</h4>
              <p>
                166 Geary St #1234
                <br />
                San Francisco, CA 94108
              </p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">🗺️</div>
              <h4>Service Area</h4>
              <p>
                San Francisco, San Jose, Oakland, Hayward, El Cerrito,
                Pittsburg, Pleasanton, and surrounding DMV locations.
              </p>
            </div>
          </div>
          <div className="cta-row" style={{ marginTop: "2rem" }}>
            <a href="tel:19253348542" className="btn btn-primary">
              Call to Check Availability
            </a>
            <a
              href={JOTFORM_BASE_URL}
              className="btn btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              Sign Rental Agreement
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-cta reveal">
            <h3>Ready to pass your DMV test?</h3>
            <p>Book your car today — spots fill fast.</p>
            <a
              href={JOTFORM_BASE_URL}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Book Your DMV Test Car
            </a>
          </div>
          <div className="footer-legal">
            <p>
              <strong>Legal Notice:</strong> DMV Test Car Rentals is not a
              driving school. The rental service provides DMV test vehicles and
              a licensed accompanying adult only. No driving school services are
              provided as part of the rental.
            </p>
            <p>© {currentYear} DMV Test Car Rentals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
