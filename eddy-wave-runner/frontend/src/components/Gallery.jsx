import { useEffect, useState } from "react";
import { GALLERY } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

const ROW_SIZE = 5;

function chunk(arr, size) {
  const rows = [];
  for (let i = 0; i < arr.length; i += size) {
    rows.push(arr.slice(i, i + size));
  }
  return rows;
}

export default function Gallery() {
  const introRef = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(null); 

  const isOpen = activeIndex !== null;
  const rows = chunk(GALLERY, ROW_SIZE);

  const close = () => setActiveIndex(null);
  const showPrev = (e) => {
    e.stopPropagation();
    setActiveIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length);
  };
  const showNext = (e) => {
    e.stopPropagation();
    setActiveIndex((i) => (i + 1) % GALLERY.length);
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i + 1) % GALLERY.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

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

      <div className="gallery__rows container">
        {rows.map((row, rowIndex) => (
          <div className="gallery__row" key={rowIndex}>
            {row.map((item) => {
              const globalIndex = GALLERY.indexOf(item);
              return (
                <button
                  className="gallery__item"
                  key={item.image}
                  onClick={() => setActiveIndex(globalIndex)}
                  aria-label={`View larger photo: ${item.caption}`}
                >
                  
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <span className="gallery__tag">{item.tag}</span>
                  <span className="gallery__overlay">
                    <span className="gallery__caption">{item.caption}</span>
                    <span className="gallery__expand" aria-hidden="true">+</span>
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="lightbox" onClick={close}>
          <button className="lightbox__close" onClick={close} aria-label="Close">×</button>
          <button className="lightbox__nav lightbox__nav--prev" onClick={showPrev} aria-label="Previous photo">‹</button>

          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={GALLERY[activeIndex].image} alt={GALLERY[activeIndex].alt} />
            <figcaption>{GALLERY[activeIndex].caption}</figcaption>
          </figure>

          <button className="lightbox__nav lightbox__nav--next" onClick={showNext} aria-label="Next photo">›</button>
        </div>
      )}

      <style>{`
        .gallery__rows {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .gallery__row {
          display: flex;
          gap: 8px;
          height: 340px;
        }
        .gallery__item {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          background: var(--foam-dim);
          padding: 0;
          flex: 1;
          min-width: 0;
          transition: flex 0.6s var(--ease-wave);
        }
        .gallery__item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s var(--ease-wave);
        }

        /* The "grow on hover" effect — only on devices that actually
           have hover (desktop/trackpad), so touch users get a calm grid. */
        @media (hover: hover) and (pointer: fine) {
          .gallery__item:hover {
            flex: 3.2;
          }
          .gallery__item:hover img {
            transform: scale(1.04);
          }
        }

        .gallery__tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(8,20,32,0.55);
          backdrop-filter: blur(4px);
          color: var(--foam);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 5px 11px;
          border-radius: 999px;
          white-space: nowrap;
        }
        .gallery__overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 10px;
          padding: 16px;
          background: linear-gradient(0deg, rgba(8,20,32,0.85) 0%, rgba(8,20,32,0) 55%);
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .gallery__item:hover .gallery__overlay,
        .gallery__item:focus-visible .gallery__overlay {
          opacity: 1;
          transform: translateY(0);
        }
        .gallery__caption {
          color: var(--foam);
          font-family: var(--font-display);
          font-size: 1rem;
          text-align: left;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .gallery__expand {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--gold);
          color: var(--ink);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          line-height: 1;
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(8,20,32,0.92);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          animation: lightbox-fade 0.25s ease;
        }
        @keyframes lightbox-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .lightbox__figure {
          max-width: min(90vw, 1000px);
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .lightbox__figure img {
          width: 100%;
          height: 100%;
          max-height: 75vh;
          object-fit: contain;
          border-radius: 10px;
        }
        .lightbox__figure figcaption {
          color: var(--foam);
          font-family: var(--font-display);
          font-size: 1.15rem;
          text-align: center;
        }
        .lightbox__close {
          position: absolute;
          top: 24px;
          right: 28px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(247,249,251,0.1);
          color: var(--foam);
          font-size: 1.6rem;
          line-height: 1;
          padding: 0;
        }
        .lightbox__close:hover {
          background: rgba(247,249,251,0.2);
        }
        .lightbox__nav {
          background: rgba(247,249,251,0.1);
          color: var(--foam);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          font-size: 2rem;
          line-height: 1;
          padding: 0;
          flex-shrink: 0;
        }
        .lightbox__nav:hover {
          background: rgba(247,249,251,0.2);
        }

        @media (max-width: 860px) {
          .gallery__row {
            flex-wrap: wrap;
            height: auto;
          }
          .gallery__item {
            flex: 1 1 calc(50% - 4px);
            height: 170px;
          }
          .gallery__caption {
            white-space: normal;
          }
        }
        @media (max-width: 480px) {
          .lightbox { padding: 20px; }
          .lightbox__nav { width: 38px; height: 38px; font-size: 1.6rem; }
        }
      `}</style>
    </section>
  );
}
