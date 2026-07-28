import { CONTACT } from "../data/content";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer section--ink">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="footer__brand-mark">Eddy Wave Runner</span>
          <p>Feel The Thrill. Live The Experience.</p>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer__col">
          <h4>Services</h4>
          <a href="#services">Jet Ski Rental</a>
          <a href="#services">Boat Cruises</a>
          <a href="#services">Real Tubing</a>
          <a href="#pricing">Pricing</a>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <span>{CONTACT.location}</span>
          <span>{CONTACT.phone}</span>
          <span>{CONTACT.email}</span>
        </div>

        <div className="footer__col">
          <h4>Follow</h4>
          <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {YEAR} Eddy Wave Runner. All rights reserved.</span>
        <div className="footer__legal">
          
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 70px 0 26px;
        }
        .footer__grid {
          display: grid;
          grid-template-columns: 1.4fr repeat(4, 1fr);
          gap: 32px;
          padding-bottom: 46px;
          border-bottom: 1px solid rgba(247,249,251,0.1);
        }
        .footer__brand-mark {
          font-family: var(--font-display);
          font-size: 1.3rem;
        }
        .footer__brand p {
          margin-top: 10px;
          opacity: 0.55;
          font-size: 0.9rem;
        }
        .footer__col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer__col h4 {
          font-family: var(--font-body);
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 4px;
          font-weight: 600;
        }
        .footer__col a,
        .footer__col span {
          font-size: 0.9rem;
          opacity: 0.68;
        }
        .footer__col a:hover {
          opacity: 1;
        }
        .footer__bottom {
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 0.82rem;
          opacity: 0.55;
        }
        .footer__legal {
          display: flex;
          gap: 20px;
        }
        @media (max-width: 860px) {
          .footer__grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </footer>
  );
}
