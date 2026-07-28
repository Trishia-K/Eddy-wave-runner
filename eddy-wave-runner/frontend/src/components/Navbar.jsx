import { useEffect, useState } from "react";
import { BOOKING_FORM_URL } from "../data/content";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <a href="#top" className="navbar__brand">
          {/* TODO: replace this text mark with your logo image, e.g.
              <img src="/images/logo.png" alt="Eddy Wave Runner" /> */}
          <span className="navbar__brand-mark">Eddy</span>
          <span className="navbar__brand-sub">Wave Runner</span>
        </a>

        <nav className="navbar__links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#why-choose-us" className="btn btn-primary navbar__cta">
  Why Choose Us
</a>

        <button
          className="navbar__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="#why-choose-us"
  className="btn btn-primary btn-block"
  onClick={() => setOpen(false)}
>
  Why Choose Us
</a>
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: background 0.4s ease, box-shadow 0.4s ease, padding 0.4s ease;
          padding: 22px 0;
        }
        .navbar--scrolled {
          background: rgba(11, 38, 71, 0.92);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 30px -18px rgba(0,0,0,0.5);
          padding: 14px 0;
        }
        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .navbar__brand {
          display: flex;
          align-items: baseline;
          gap: 8px;
          color: #F7F9FB;
        }
        .navbar__brand-mark {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
        }
        .navbar__brand-sub {
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          opacity: 0.75;
        }
        .navbar__links {
          display: flex;
          gap: 32px;
          color: #F7F9FB;
        }
        .navbar__links a {
          font-size: 0.92rem;
          font-weight: 500;
          opacity: 0.85;
          position: relative;
          padding-bottom: 4px;
        }
        .navbar__links a:hover {
          opacity: 1;
        }
        .navbar__links a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 1.5px;
          width: 0;
          background: var(--gold);
          transition: width 0.3s ease;
        }
        .navbar__links a:hover::after {
          width: 100%;
        }
        .navbar__cta {
          padding: 11px 24px;
          font-size: 0.88rem;
        }
        .navbar__burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: transparent;
          padding: 6px;
        }
        .navbar__burger span {
          width: 24px;
          height: 2px;
          background: #F7F9FB;
          display: block;
        }
        .navbar__mobile {
          display: none;
        }
        @media (max-width: 860px) {
          .navbar__links, .navbar__cta { display: none; }
          .navbar__burger { display: flex; }
          .navbar__mobile {
            display: flex;
            flex-direction: column;
            gap: 18px;
            padding: 24px clamp(20px, 5vw, 48px) 28px;
            background: rgba(11, 38, 71, 0.98);
            color: #F7F9FB;
          }
          .navbar__mobile a:not(.btn) {
            font-size: 1rem;
            font-weight: 500;
          }
        }
      `}</style>
    </header>
  );
}
