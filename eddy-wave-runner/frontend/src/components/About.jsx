import { ABOUT } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

export default function About() {
  const textRef = useScrollReveal();
  const imgRef = useScrollReveal();

  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div ref={textRef} className="reveal about__text">
          <p className="eyebrow">About Us</p>
          <h2 className="section-heading">{ABOUT.heading}</h2>
          <div className="about__paragraphs">
            {ABOUT.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <ul className="about__tags">
            
            <li>Tourists</li>
            <li>Families</li>
            <li>Couples</li>
            <li>Schools</li>
            <li>Team Building</li>
          </ul>
        </div>

        <div ref={imgRef} className="reveal about__image-wrap">
          <img src={ABOUT.image} alt="Jet ski rider on Lake Victoria" className="about__image" />
        </div>
      </div>

      <style>{`
        .about__grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: clamp(40px, 6vw, 90px);
          align-items: center;
        }
        .about__paragraphs {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 26px 0 30px;
          color: rgba(11,38,71,0.78);
          font-size: 1.02rem;
          max-width: 52ch;
        }
        .about__tags {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          padding: 0;
          margin: 0;
        }
        .about__tags li {
          font-size: 0.82rem;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 999px;
          border: 1px solid rgba(11,38,71,0.18);
          color: var(--navy);
        }
        .about__image-wrap {
          border-radius: var(--radius-lg);
          overflow: hidden;
          aspect-ratio: 4 / 5;
        }
        .about__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: var(--foam-dim);
        }
        @media (max-width: 860px) {
          .about__grid {
            grid-template-columns: 1fr;
          }
          .about__image-wrap {
            order: -1;
            aspect-ratio: 16 / 10;
          }
        }
      `}</style>
    </section>
  );
}
