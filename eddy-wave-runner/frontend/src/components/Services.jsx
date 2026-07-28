import { SERVICES, BOOKING_FORM_URL } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

function ServiceCard({ service, index }) {
  const ref = useScrollReveal();
  return (
    <article
      ref={ref}
      className="reveal service-card"
      style={{ "--i": index % 4 }}
    >
      <div
        className="service-card__image"
        style={{ backgroundImage: `url(${service.image})` }}
      />
      <div className="service-card__body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <div className="service-card__actions">
          <a
            href={BOOKING_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary service-card__btn"
          >
            Book Now
          </a>
          <a href="#pricing" className="service-card__learn">
            Learn More →
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-intro section-intro--center">
          <p className="eyebrow">What We Offer</p>
          <h2 className="section-heading section-heading--center">
            Uganda's ultimate watersports experience
          </h2>
        </div>

        <div className="services__grid reveal-stagger">
          {SERVICES.map((service, i) => (
            <ServiceCard service={service} index={i} key={service.title} />
          ))}
        </div>
      </div>

      <style>{`
        .services__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        .service-card {
          background: #fff;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 18px 40px -28px rgba(11,38,71,0.35);
          transition: transform 0.4s var(--ease-wave), box-shadow 0.4s var(--ease-wave);
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 26px 50px -24px rgba(11,38,71,0.4);
        }
        .service-card__image {
          aspect-ratio: 4 / 3;
          background-size: cover;
          background-position: center;
          background-color: var(--foam-dim);
        }
        .service-card__body {
          padding: 22px 22px 26px;
        }
        .service-card__body h3 {
          font-size: 1.12rem;
          margin-bottom: 8px;
        }
        .service-card__body p {
          font-size: 0.92rem;
          color: rgba(11,38,71,0.68);
          margin-bottom: 18px;
        }
        .service-card__actions {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .service-card__btn {
          padding: 10px 20px;
          font-size: 0.82rem;
        }
        .service-card__learn {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--blue);
        }
        @media (max-width: 1080px) {
          .services__grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 780px) {
          .services__grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 500px) {
          .services__grid { grid-template-columns: 1fr; }
          .service-card__actions { flex-direction: column; align-items: stretch; }
          .service-card__learn { text-align: center; }
        }
      `}</style>
    </section>
  );
}
