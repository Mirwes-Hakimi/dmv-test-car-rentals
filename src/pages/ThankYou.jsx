import { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex";
    document.head.appendChild(meta);
    return () => document.head.removeChild(meta);
  }, []);

  return (
    <div className="thankyou-page">
      <div className="thankyou-card">
        <div className="thankyou-icon">✅</div>
        <h1>Booking request received!</h1>
        <p className="text-muted">
          Thanks! We will confirm your DMV test appointment shortly.
        </p>
        <ul
          className="feature-list"
          style={{ textAlign: "left", maxWidth: 420, margin: "1.25rem auto 0" }}
        >
          <li>Check your email for a confirmation with full details.</li>
          <li>Please arrive 15 minutes before your DMV appointment.</li>
          <li>Bring your permit/license and DMV appointment paperwork.</li>
        </ul>
        <div
          className="cta-row"
          style={{ marginTop: "1.75rem", justifyContent: "center" }}
        >
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
