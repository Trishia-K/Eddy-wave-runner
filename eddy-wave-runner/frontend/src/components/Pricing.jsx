import { PRICING, BOOKING_FORM_URL } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Pricing() {
  const introRef = useScrollReveal();

  return (
    <section id="pricing" className="section section--dark pricing">
      <div className="container">
        <div ref={introRef} className="reveal section-intro section-intro--center">
          <p className="eyebrow">Pricing</p>
          <h2 className="section-heading section-heading--center">
            Our Pricing
          </h2>
        </div>

        <div className="pricing__row">
          {PRICING.activities.map((activity) => (
            <div className="pricing-card" key={activity.title}>
              <h3>{activity.title}</h3>
              {activity.note && <p className="pricing-card__note">{activity.note}</p>}
              <div className="pricing-card__options">
                {activity.options.map((opt) => (
                  <div className="pricing-card__option" key={opt.label || opt.price}>
                    {opt.label && <span className="pricing-card__option-label">{opt.label}</span>}
                    <span className="pricing-card__option-price">{opt.price}</span>
                  </div>
                ))}
              </div>
              <a
                href={BOOKING_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-block"
              >
                Book Now
              </a>
            </div>
          ))}

          <div className="pricing-card pricing-card--special">
            <span className="pricing-card__badge">Best Value</span>
            <h3>{PRICING.special.title}</h3>
            <p className="pricing-card__note">{PRICING.special.note}</p>
            <p className="pricing-card__price">{PRICING.special.price}</p>
            <a
              href={BOOKING_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-block"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="pricing__time">
          <p className="pricing__time-label">{PRICING.timePackages.heading}</p>
          <div className="pricing__time-grid">
            {PRICING.timePackages.items.map((tp) => (
              <div className="pricing-time-card" key={tp.duration}>
                <span className="pricing-time-card__duration">{tp.duration}</span>
                <span className="pricing-time-card__price">{tp.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .pricing__row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
          margin-bottom: 60px;
          align-items: stretch;
        }
        .pricing-card {
          background: rgba(247,249,251,0.05);
          border: 1px solid rgba(247,249,251,0.14);
          border-radius: var(--radius-md);
          padding: 28px 22px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .pricing-card h3 {
          font-size: 1.05rem;
        }
        .pricing-card__note {
          font-size: 0.82rem;
          opacity: 0.6;
          margin-top: -10px;
        }
        .pricing-card__options {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 4px 0 8px;
        }
        .pricing-card__option {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 10px;
          padding-bottom: 8px;
          border-bottom: 1px dashed rgba(247,249,251,0.14);
        }
        .pricing-card__option:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .pricing-card__option-label {
          font-size: 0.82rem;
          opacity: 0.7;
        }
        .pricing-card__option-price {
          font-family: var(--font-display);
          font-size: 1.3rem;
          color: var(--gold);
          margin-left: auto;
        }
        .pricing-card .btn {
          margin-top: auto;
        }
        .pricing-card--special {
          position: relative;
          background: linear-gradient(160deg, rgba(201,162,39,0.16), rgba(247,249,251,0.05));
          border-color: rgba(201,162,39,0.5);
        }
        .pricing-card--special .pricing-card__note {
          margin-top: 0;
        }
        .pricing-card__badge {
          position: absolute;
          top: -13px;
          left: 22px;
          background: var(--gold);
          color: var(--ink);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 999px;
        }
        .pricing-card--special .pricing-card__price {
          font-family: var(--font-display);
          font-size: 1.8rem;
          color: var(--gold);
        }
        .pricing__time-label {
          font-family: var(--font-display);
          font-size: 1.05rem;
          margin-bottom: 18px;
          opacity: 0.85;
        }
        .pricing__time-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .pricing-time-card {
          background: rgba(247,249,251,0.04);
          border: 1px solid rgba(247,249,251,0.1);
          border-radius: var(--radius-sm);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .pricing-time-card__duration {
          font-size: 0.82rem;
          opacity: 0.7;
        }
        .pricing-time-card__price {
          font-family: var(--font-display);
          font-size: 1.25rem;
          color: var(--foam);
        }
        @media (max-width: 1080px) {
          .pricing__row { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 720px) {
          .pricing__row { grid-template-columns: repeat(2, 1fr); }
          .pricing__time-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .pricing__row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
