import { useLanguage } from "../i18n/LanguageContext";
import "./About.css";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section about">
      <p className="section-label">{t.about.label}</p>
      <div className="about-text reveal">
        {t.about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}
