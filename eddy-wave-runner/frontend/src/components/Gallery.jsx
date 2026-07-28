import { GALLERY } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Gallery() {
  const introRef = useScrollReveal();

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div ref={introRef} className="reveal section-intro section-intro--center">
          <p className="eyebrow">Gallery</p>
          <h2 className="section-heading section-heading--center">
            Moments from the water
          </h2>
        </div>
      </div>

      <div className="gallery__grid">
        {GALLERY.map((item) => (
          <div className="gallery__item" key={item.image}>
           
            <img src={item.image} alt={item.alt} loading="lazy" />
          </div>
        ))}
      </div>

      <style>{`
        .gallery__grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-auto-rows: 160px;
          gap: 6px;
          padding: 0 clamp(20px, 5vw, 48px);
        }
        .gallery__item {
          overflow: hidden;
          border-radius: 6px;
        }
        .gallery__item:nth-child(1) { grid-column: span 3; grid-row: span 2; }
        .gallery__item:nth-child(2) { grid-column: span 3; }
        .gallery__item:nth-child(3) { grid-column: span 3; }
        .gallery__item:nth-child(4) { grid-column: span 2; }
        .gallery__item:nth-child(5) { grid-column: span 2; }
        .gallery__item:nth-child(6) { grid-column: span 2; }
        .gallery__item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: var(--foam-dim);
          transition: transform 0.6s var(--ease-wave);
        }
        .gallery__item:hover img {
          transform: scale(1.06);
        }
        @media (max-width: 780px) {
          .gallery__grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 160px;
          }
          .gallery__item:nth-child(n) { grid-column: span 1; grid-row: span 1; }
          .gallery__item:nth-child(1) { grid-column: span 2; grid-row: span 1; }
        }
      `}</style>
    </section>
  );
}
