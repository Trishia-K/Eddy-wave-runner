import { SAFETY } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Safety() {
  const textRef = useScrollReveal();

  return (
    <section className="section section--ink safety">
      <div className="container safety__grid">
        <div ref={textRef} className="reveal safety__text">
          <p className="eyebrow">Safety First</p>
          <h2 className="section-heading">
            Your safety is the foundation of every ride
          </h2>
          <p className="safety__lead">
            We take safety seriously so you can enjoy the thrill with total peace of mind.
          </p>
        </div>

        <ul className="safety__list">
          {SAFETY.map((item) => (
            <li key={item}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 2l7 3v6c0 5-3.2 8.6-7 11-3.8-2.4-7-6-7-11V5l7-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .safety__grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: clamp(40px, 6vw, 80px);
        }
        .safety__lead {
          margin-top: 20px;
          opacity: 0.7;
          max-width: 40ch;
        }
        .safety__list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .safety__list li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 18px;
          border-radius: var(--radius-sm);
          background: rgba(247,249,251,0.04);
          border: 1px solid rgba(247,249,251,0.08);
          font-size: 0.94rem;
        }
        .safety__list svg {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          color: var(--teal);
          margin-top: 2px;
        }
        @media (max-width: 860px) {
          .safety__grid { grid-template-columns: 1fr; }
          .safety__list { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
