import { useLanguage } from "../i18n/LanguageContext";
import "./Contact.css";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section contact">
      <p className="section-label">{t.contact.label}</p>
      <div className="contact-body reveal">
        <p className="contact-pitch">{t.contact.pitch}</p>
        <div className="contact-links">
          {t.contact.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-link-label">{link.label}</span>
              <span className="contact-link-value">{link.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
