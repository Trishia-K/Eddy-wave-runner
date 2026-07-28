import { WHY_CHOOSE_US, CATCHPHRASES } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

export default function WhyChooseUs() {
  const introRef = useScrollReveal();

  return (
    <section id="why-choose-us" className="section section--dark why">
      <div className="container why__grid">
        <div ref={introRef} className="reveal why__intro">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="section-heading">
            Adventure done right, every single time
          </h2>
          <p className="why__quote">"{CATCHPHRASES[3]}"</p>
        </div>

        <ul className="why__list">
          {WHY_CHOOSE_US.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <style>{`
        .why__grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: clamp(40px, 6vw, 80px);
          align-items: center;
        }
        .why__quote {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 1.3rem;
          color: var(--gold);
          margin-top: 24px;
        }
        .why__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px 24px;
        }
        .why__list li {
          position: relative;
          padding-left: 26px;
          font-size: 0.98rem;
          opacity: 0.88;
        }
        .why__list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--teal);
        }
        @media (max-width: 860px) {
          .why__grid { grid-template-columns: 1fr; }
          .why__list { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
