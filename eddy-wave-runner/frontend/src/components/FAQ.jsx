import { useState } from "react";
import { FAQS } from "../data/content";
import useScrollReveal from "../hooks/useScrollReveal";

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`}>
      <button className="faq-item__question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.q}</span>
        <span className="faq-item__icon">{isOpen ? "−" : "+"}</span>
      </button>
      <div className="faq-item__answer">
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const introRef = useScrollReveal();

  return (
    <section id="faq" className="section faq">
      <div className="container faq__wrap">
        <div ref={introRef} className="reveal section-intro">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-heading">Good to know before you ride</h2>
        </div>

        <div className="faq__list">
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .faq__wrap {
          max-width: 820px;
        }
        .faq__list {
          margin-top: 10px;
          border-top: 1px solid rgba(11,38,71,0.14);
        }
        .faq-item {
          border-bottom: 1px solid rgba(11,38,71,0.14);
        }
        .faq-item__question {
          width: 100%;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 22px 4px;
          text-align: left;
          font-family: var(--font-display);
          font-size: 1.08rem;
          color: var(--navy);
        }
        .faq-item__icon {
          font-size: 1.4rem;
          color: var(--gold);
          flex-shrink: 0;
        }
        .faq-item__answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s var(--ease-wave), padding 0.4s var(--ease-wave);
          padding: 0 4px;
        }
        .faq-item__answer p {
          color: rgba(11,38,71,0.7);
          padding-bottom: 0;
          max-width: 62ch;
        }
        .faq-item--open .faq-item__answer {
          max-height: 200px;
          padding-bottom: 22px;
        }
      `}</style>
    </section>
  );
}
