import { useEffect, useState } from "react";
import { BOOKING_FORM_URL, HERO_SLIDES } from "../data/content";

const SLIDE_DURATION_MS = 5000;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (HERO_SLIDES.length < 2) return;
    const interval = setInterval(() => {
      setActiveSlide((i) => (i + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="hero">
      {/*Incase we want to put a video instead: 
          <video className="hero__bg" autoPlay muted loop playsInline poster="/images/hero-poster.jpg">
            <source src="/videos/hero-jetski.mp4" type="video/mp4" />
          </video> */}
      <div className="hero__slideshow">
        {HERO_SLIDES.map((src, i) => (
          <div
            key={src}
            className={`hero__slide ${i === activeSlide ? "hero__slide--active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
      <div className="hero__overlay" />

      <div className="hero__content container">
       
        <div className="hero__logo">Eddy Wave Runner</div>

        <p className="eyebrow hero__eyebrow">Coco Beach · Entebbe · Lake Victoria</p>
        <h1 className="hero__heading">Feel The Thrill</h1>
        <p className="hero__subheading">Live The Experience</p>

        <div className="hero__actions">
          <a
            href={BOOKING_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book Now
          </a>
          <a href="#services" className="btn btn-outline">
            View Packages
          </a>
        </div>
      </div>

     
      <div className="hero__waves" aria-hidden="true">
        <svg viewBox="0 0 1600 120" preserveAspectRatio="none">
          <path
            className="hero__wave hero__wave--back"
            d="M0,60 C200,10 400,110 600,60 C800,10 1000,110 1200,60 C1300,35 1500,85 1600,60
               L1600,120 L0,120 Z"
          />
          <path
            className="hero__wave hero__wave--front"
            d="M0,80 C220,40 380,120 620,80 C820,40 980,120 1220,80 C1340,58 1480,102 1600,80
               L1600,120 L0,120 Z"
          />
        </svg>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to explore">
        <span />
      </a>

      <style>{`
        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: var(--ink);
        }
        .hero__slideshow {
          position: absolute;
          inset: 0;
        }
        .hero__slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-color: #0B2647;
          opacity: 0;
          transform: scale(1.06);
          transition: opacity 1.6s ease, transform 7s ease-out;
        }
        .hero__slide--active {
          opacity: 1;
          transform: scale(1.12);
          z-index: 1;
        }
        .hero__overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(180deg, rgba(8,20,32,0.55) 0%, rgba(8,20,32,0.35) 40%, rgba(8,20,32,0.85) 100%);
        }
        .hero__content {
          position: relative;
          z-index: 3;
          color: var(--foam);
          padding-top: 70px;
        }
        .hero__logo {
          font-family: var(--font-display);
          font-size: 1.1rem;
          letter-spacing: 0.08em;
          opacity: 0.9;
          margin-bottom: 28px;
        }
        .hero__eyebrow {
          margin-bottom: 18px;
        }
        .hero__heading {
          font-size: clamp(3.2rem, 9vw, 7.5rem);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: -0.01em;
        }
        .hero__subheading {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(1.4rem, 3vw, 2.2rem);
          margin-top: 10px;
          color: var(--gold);
        }
        .hero__actions {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          margin-top: 44px;
        }
        .hero__waves {
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: clamp(70px, 12vw, 120px);
          z-index: 2;
        }
        .hero__waves svg {
          width: 100%;
          height: 100%;
        }
        .hero__wave {
          fill: var(--foam);
        }
        .hero__wave--back {
          opacity: 0.5;
          animation: wave-shift 12s ease-in-out infinite alternate;
        }
        .hero__wave--front {
          animation: wave-shift 9s ease-in-out infinite alternate-reverse;
        }
        @keyframes wave-shift {
          from { transform: translateX(0); }
          to { transform: translateX(-40px); }
        }
        .hero__scroll {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          width: 26px;
          height: 42px;
          border: 1.5px solid rgba(247,249,251,0.6);
          border-radius: 999px;
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }
        .hero__scroll span {
          width: 4px;
          height: 8px;
          background: var(--gold);
          border-radius: 999px;
          animation: scroll-dot 1.8s ease-in-out infinite;
        }
        @keyframes scroll-dot {
          0% { transform: translateY(0); opacity: 1; }
          70% { transform: translateY(14px); opacity: 0; }
          100% { transform: translateY(14px); opacity: 0; }
        }
        @media (max-width: 720px) {
          .hero__scroll { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero__slide { transition: opacity 1.6s ease; transform: none !important; }
        }
      `}</style>
    </section>
  );
}
