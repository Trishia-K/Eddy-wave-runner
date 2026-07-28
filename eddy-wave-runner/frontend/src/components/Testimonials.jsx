import { TESTIMONIALS } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

function Stars({ count }) {
  return (
    <div className="testimonial-card__stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill={i < count ? "currentColor" : "none"} stroke="currentColor">
          <path d="M10 1l2.6 5.8 6.4.6-4.8 4.3 1.4 6.3L10 14.9 4.4 18l1.4-6.3L1 7.4l6.4-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const introRef = useScrollReveal();

  return (
    <section className="section testimonials">
      <div className="container">
        <div ref={introRef} className="reveal section-intro section-intro--center">
          <p className="eyebrow">Testimonials</p>
          <h2 className="section-heading section-heading--center">
            What riders are saying
          </h2>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t) => (
            <div className="testimonial-card" key={t.name + t.review}>
              <Stars count={t.rating} />
              <p className="testimonial-card__review">"{t.review}"</p>
              <div className="testimonial-card__person">
                {/* TODO: optional customer photo */}
                <img src={t.photo} alt="" />
                <span>{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        .testimonial-card {
          background: #fff;
          border-radius: var(--radius-md);
          padding: 30px 26px;
          box-shadow: 0 18px 40px -30px rgba(11,38,71,0.4);
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .testimonial-card__stars {
          display: flex;
          gap: 3px;
          color: var(--gold);
        }
        .testimonial-card__stars svg {
          width: 16px;
          height: 16px;
        }
        .testimonial-card__review {
          font-family: var(--font-display);
          font-size: 1.05rem;
          line-height: 1.5;
          color: var(--navy);
        }
        .testimonial-card__person {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: auto;
        }
        .testimonial-card__person img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          background: var(--foam-dim);
        }
        .testimonial-card__person span {
          font-size: 0.9rem;
          font-weight: 600;
        }
        @media (max-width: 860px) {
          .testimonials__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
