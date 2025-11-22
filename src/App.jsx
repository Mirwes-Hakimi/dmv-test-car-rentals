import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

// JotForm URLs
const JOTFORM_BASE_URL =
  "https://form.jotform.com/mirwes210/DMV-TEST-CAR-RENTALS";

// Prefilled URLs for packages (uses your SelectYourPackage field):
const DMV_TEST_RENTAL_URL =
  JOTFORM_BASE_URL +
  "?SelectYourPackage=DMV%20Test%20Rental%20%E2%80%94%20%24249";

const EXPERIENCE_BOOST_URL =
  JOTFORM_BASE_URL +
  "?SelectYourPackage=Experience%20Boost%20(45%E2%80%9360%20min%20Warm-Up%20Drive)%20%E2%80%94%20%24369";



  function ThankYouPage() {
  return (
    <div className="page thankyou-page">
      <div className="card thankyou-card">
        <div className="thankyou-icon">✅</div>
        <h1 className="section-title">Thank you!</h1>
        <p className="section-sub">
          Your DMV Test Car Rental request has been received.
        </p>
        <ul className="checklist">
          <li>You’ll receive a confirmation email with all your details.</li>
          <li>Please arrive 15 minutes before your DMV appointment time.</li>
          <li>Bring your permit/license and DMV appointment paperwork.</li>
        </ul>
        <div className="hero-actions" style={{ marginTop: "1.5rem" }}>
          <a href="/" className="btn btn-primary">
            Back to Home
          </a>
          <a href="tel:19253348542" className="btn btn-ghost">
            📞 Call 925-334-8542
          </a>
        </div>
      </div>
    </div>
  );
}





function App() {
  const currentYear = new Date().getFullYear();
  const hash = window.location.hash;

  // If URL is .../#thankyou → show only the Thank You page
  if (hash === "#thankyou") {
    return <ThankYouPage />;
  }

  return (
    <div className="page">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">
            San Francisco-Bay Area • DMV Test Only • Fully Insured
          </div>
          <h1 className="hero-title">
            Stress-free DMV test car rentals in{" "}
            <span className="hero-highlight">San Francisco-Bay Area, CA</span>
          </h1>
          <p className="hero-text">
            No car? No problem. Reserve a clean, fully insured vehicle for your
            DMV drive test and a licensed adult to ride with you. Show up,
            drive, done.
          </p>
          <div className="hero-actions">
            <a
              href={DMV_TEST_RENTAL_URL}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              📝 Book DMV Test Car
            </a>
            <a href="#pricing" className="btn btn-ghost">
              View Pricing
            </a>
          </div>
          <div className="hero-meta">
            <span>✔ DMV-ready vehicle</span>
            <span>✔ Licensed adult in passenger seat</span>
            <span>✔ Not a driving school</span>
          </div>
        </div>
      </section>

      {/* MAIN CARD */}
      <main className="card">
        {/* HOW IT WORKS */}
        <section id="book" className="section">
          <h2 className="section-title">How it works</h2>
          <p className="section-sub">
            Simple 3-step process so you can focus on passing — not logistics.
          </p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-icon">1</div>
              <h3>Reserve</h3>
              <p>
                Pick your DMV office, date, and time. Complete the online rental
                agreement so your car is guaranteed for test day.
              </p>
            </div>
            <div className="step-card">
              <div className="step-icon">2</div>
              <h3>Meet at DMV</h3>
              <p>
                On test day we meet you at the DMV with a clean, fully insured
                vehicle and a licensed adult in the passenger seat.
              </p>
            </div>
            <div className="step-card">
              <div className="step-icon">3</div>
              <h3>Take your test</h3>
              <p>
                You use our car for the entire drive test. We wait, then you
                return the keys and walk away — no awkward favors from friends
                or family.
              </p>
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="section">
          <h2 className="section-title">Choose your package</h2>
          <p className="section-sub">
            Transparent pricing with no surprises. All rentals include a
            DMV-ready, fully insured vehicle and a licensed adult in the
            passenger seat.
          </p>

          <div className="pricing-grid">
            {/* CARD 1 – DMV Test Rental */}
            <div className="price-card">
              <h3 className="price-title">DMV Test Rental</h3>
              <p className="price-sub">
                Ideal if you already feel comfortable driving and just need a
                DMV-approved car for your test.
              </p>
              <ul className="checklist">
                <li>DMV-compliant, fully insured vehicle</li>
                <li>Licensed adult to accompany you during the test</li>
                <li>
                  5–10 minute vehicle orientation (quick orientation only, no
                  driving instruction)
                </li>
                <li>Meet directly at your DMV location</li>
              </ul>
              <div className="price-amount">From $230</div>
              <a
                href={DMV_TEST_RENTAL_URL}
                className="btn btn-primary price-btn"
                target="_blank"
                rel="noreferrer"
              >
                Book DMV Test Rental
              </a>
            </div>

            {/* CARD 2 – Experience Boost (Warm-Up Session) */}
            <div className="price-card price-card-highlight">
              <div className="price-badge">Most Popular</div>
              <h3 className="price-title">
                Experience Boost (45–60 min Warm-Up Drive + dmv test rental) 
              </h3>
              <p className="price-sub">
                For drivers who want to feel more comfortable and confident
                before their test. Includes extra driving time with the rental
                vehicle on public roads.
              </p>
              <ul className="checklist">
                <li>All “DMV Test Rental” benefits</li>
                <li>
                  45–60 min warm-up driving on public roads (not on DMV property
                  or within 200 ft of DMV)
                </li>
                <li>
                  Familiarize yourself with steering, braking, and handling
                </li>
                <li>Reduce test-day nerves</li>
              </ul>
              <div className="price-amount">From $300</div>
              <a
                href={EXPERIENCE_BOOST_URL}
                className="btn btn-primary price-btn"
                target="_blank"
                rel="noreferrer"
              >
                Book Experience Boost
              </a>
              <p className="price-note">
                Quick orientation only. No driving instruction.
              </p>
            </div>
          </div>
        </section>

        {/* INCLUDED / NOT INCLUDED */}
        <section className="section">
          <div className="two-col">
            <div className="pill-card pill-card-green">
              <h2 className="section-title-sm">What&apos;s included</h2>
              <ul className="checklist">
                <li>DMV-approved, fully insured vehicle</li>
                <li>Licensed adult to accompany you during the test</li>
                <li>Pre-test vehicle orientation (mirrors, seat, controls)</li>
                <li>DMV check-in assistance and support</li>
                <li>Use of the vehicle for the full drive test</li>
              </ul>
            </div>
            <div className="pill-card pill-card-red">
              <h2 className="section-title-sm">What&apos;s NOT included</h2>
              <ul className="checklist">
                <li>No driving school services</li>
                <li>No driving lessons as part of the rental</li>
                <li>No coaching or corrections during the DMV test</li>
                <li>
                  No practice driving near or within 200 feet of DMV property
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ORIENTATION */}
        <section className="section">
          <h2 className="section-title">Optional pre-test vehicle orientation</h2>
          <p className="section-sub">
            <strong>This is a quick orientation only. No driving instruction.</strong>
          </p>
          <div className="orientation-grid">
            <div className="orientation-item">Seat &amp; mirror setup</div>
            <div className="orientation-item">Signals, lights &amp; wipers</div>
            <div className="orientation-item">Brake &amp; steering feel</div>
            <div className="orientation-item">General safety reminders</div>
          </div>
        </section>

        {/* CONTACT & AREA */}
        <section id="contact" className="section">
          <h2 className="section-title">Service area & contact</h2>
          <p>
            <strong>DMV Test Car Rentals</strong>
            <br />
            5111 Old Redwood Hwy N
            <br />
            Petaluma, CA 94954
            <br />
            📞 925-334-8542
          </p>
          <p>
            We serve Petaluma and nearby DMV locations, including Novato and
            surrounding areas.
          </p>
          <div className="hero-actions">
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
      <a
  href="https://form.jotform.com/mirwes210/DMV-TEST-CAR-RENTALS"
  className="btn btn-primary"
  target="_blank"
  rel="noreferrer"
>
  📝 Book Your DMV Test Car
</a>

        <p>
          <strong>Legal Notice:</strong> DMV Test Car Rentals is not a driving
          school. The rental service provides DMV test vehicles and a licensed
          accompanying adult only. No driving school services are provided as
          part of the rental.
        </p>
        <p>© {currentYear} DMV Test Car Rentals. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
