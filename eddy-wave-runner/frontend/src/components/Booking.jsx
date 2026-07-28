import { BOOKING_FORM_URL } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

const HIGHLIGHTS = [
  "Pick your activity & package",
  "Choose your date & time",
  "Tell us how many people",
  "Pay online or reserve to pay on arrival",
];

export default function Booking() {
  const contentRef = useScrollReveal();

  return (
    <section className="section section--dark booking">
      <div className="container booking__wrap">
        <div ref={contentRef} className="reveal booking__content">
          <p className="eyebrow">Booking</p>
          <h2 className="section-heading section-heading--center">Ready to ride?</h2>
          <p className="booking__lead">
            Reserve your spot in a couple of minutes — select your package,
            date and time, and pay online or reserve to pay on arrival.
          </p>

          <ul className="booking__highlights">
            {HIGHLIGHTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <a
            href={BOOKING_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary booking__cta"
          >
            Complete Your Booking
          </a>
        </div>
      </div>

      <style>{`
        .booking__wrap {
          display: flex;
          justify-content: center;
        }
        .booking__content {
          max-width: 620px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .booking__lead {
          margin-top: 20px;
          opacity: 0.75;
          max-width: 46ch;
        }
        .booking__highlights {
          list-style: none;
          margin: 34px 0 40px;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px 28px;
          width: 100%;
          max-width: 480px;
        }
        .booking__highlights li {
          position: relative;
          padding-left: 24px;
          font-size: 0.92rem;
          opacity: 0.85;
          text-align: left;
        }
        .booking__highlights li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--teal);
          font-weight: 700;
        }
        .booking__cta {
          padding: 17px 42px;
          font-size: 1rem;
        }
        @media (max-width: 560px) {
          .booking__highlights { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
