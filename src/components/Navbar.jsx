import React from "react";

const JOTFORM_BASE_URL =
  "https://form.jotform.com/mirwes210/DMV-TEST-CAR-RENTALS";

function Navbar({ scrolled }) {
  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-inner">
        <div className="brand">
          <img
            src="/logo.png"
            alt="DMV Test Car Rentals logo"
            className="brand-logo"
          />
          <div>
            <div className="brand-name">DMV Test Car Rentals</div>
            <div className="brand-sub">San Francisco Bay Area</div>
          </div>
        </div>

        <div className="nav-right">
          <nav className="nav-links">
            <a href="#book">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-actions">
            <a href="tel:19253348542" className="btn btn-ghost btn-sm">
              📞 925-334-8542
            </a>
            <a
              href={JOTFORM_BASE_URL}
              className="btn btn-primary btn-sm"
              target="_blank"
              rel="noreferrer"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
