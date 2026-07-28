import { useState } from "react";
import { CONTACT } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";


const API_BASE_URL = "http://localhost:3000";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const introRef = useScrollReveal();
  const infoRef = useScrollReveal();
  const formRef = useScrollReveal();

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div ref={introRef} className="reveal section-intro section-intro--center">
          <p className="eyebrow">Contact</p>
          <h2 className="section-heading section-heading--center">
            Come find us at Coco Beach
          </h2>
        </div>

        <div className="contact__grid">
          <div ref={infoRef} className="reveal contact__info">
            <div className="contact__map">
              
              <iframe
                title="Eddy Wave Runner location"
                src={CONTACT.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <ul className="contact__details">
              <li>
                <span>Location</span>
                <strong>{CONTACT.location}</strong>
              </li>
              <li>
                <span>Phone</span>
                <strong>{CONTACT.phone}</strong>
              </li>
              <li>
                <span>Email</span>
                <strong>{CONTACT.email}</strong>
              </li>
            </ul>

            <div className="contact__socials">
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                WhatsApp Us
              </a>
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
            </div>
          </div>

          <form ref={formRef} className="reveal contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="c-name">Name</label>
              <input id="c-name" type="text" value={form.name} onChange={update("name")} required />
            </div>
            <div className="contact__field">
              <label htmlFor="c-email">Email</label>
              <input id="c-email" type="email" value={form.email} onChange={update("email")} required />
            </div>
            <div className="contact__field">
              <label htmlFor="c-message">Message</label>
              <textarea id="c-message" rows="4" value={form.message} onChange={update("message")} required />
            </div>
            <button type="submit" className="btn btn-outline btn-outline--dark btn-block" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "sent" && <p className="contact__status contact__status--ok">Thanks — we'll reply soon.</p>}
            {status === "error" && <p className="contact__status contact__status--error">Something went wrong — try WhatsApp instead.</p>}
          </form>
        </div>
      </div>

      <style>{`
        .contact__grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: clamp(30px, 5vw, 60px);
        }
        .contact__map {
          border-radius: var(--radius-md);
          overflow: hidden;
          aspect-ratio: 16 / 9;
          margin-bottom: 26px;
        }
        .contact__map iframe {
          width: 100%;
          height: 100%;
          border: 0;
        }
        .contact__details {
          list-style: none;
          margin: 0 0 26px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .contact__details li {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(11,38,71,0.12);
        }
        .contact__details span {
          opacity: 0.6;
          font-size: 0.9rem;
        }
        .contact__socials {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .contact__socials a:not(.btn) {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--blue);
        }
        .contact__form {
          background: #fff;
          border-radius: var(--radius-lg);
          padding: clamp(24px, 3vw, 34px);
          box-shadow: 0 18px 40px -30px rgba(11,38,71,0.4);
          display: flex;
          flex-direction: column;
          gap: 16px;
          height: fit-content;
        }
        .contact__field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .contact__field label {
          font-size: 0.8rem;
          opacity: 0.6;
        }
        .contact__field input,
        .contact__field textarea {
          border: 1px solid rgba(11,38,71,0.2);
          border-radius: var(--radius-sm);
          padding: 12px 14px;
          font-family: var(--font-body);
          font-size: 0.95rem;
          resize: vertical;
        }
        .contact__status {
          text-align: center;
          font-size: 0.88rem;
        }
        .contact__status--ok { color: var(--teal); }
        .contact__status--error { color: #c15b3f; }
        @media (max-width: 860px) {
          .contact__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
