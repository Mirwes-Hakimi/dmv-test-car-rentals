// src/components/Navbar.jsx
import React from "react";
import logo from "../assets/logo.png";

const JOTFORM_BASE_URL =
  "https://form.jotform.com/mirwes210/DMV-TEST-CAR-RENTALS";

function Navbar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <img src={logo} alt="DMV Test Car Rentals logo" className="topbar-logo" />
        <div>
          <div className="brand-name">DMV Test Car Rentals</div>
          <div className="brand-sub">
            San Francisco-Bay Area • DMV Test Car & Licensed Accompaniment
          </div>
        </div>
      </div>

      <div className="topbar-right">
        <nav className="nav-links">
          <a href="#book">How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="contact-area">
          <a href="tel:19253348542" className="topbar-phone">
            📞 925-334-8542
          </a>
          <a
            href={JOTFORM_BASE_URL}
            className="topbar-cta"
            target="_blank"
            rel="noreferrer"
          >
            Sign Rental Agreement
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
