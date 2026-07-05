import { useLanguage } from "../i18n/LanguageContext";
import "./Hero.css";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="hero">
      <p className="hero-location">{t.hero.location}</p>

      <h1 className="hero-title">{t.hero.title}</h1>
      <p className="hero-role">{t.hero.role}</p>

      <p className="hero-lead">{t.hero.pitchLead}</p>
      <ul className="hero-points">
        {t.hero.pitchPoints.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <p className="hero-close">{t.hero.pitchClose}</p>

      <div className="hero-actions">
        <a href="#work" className="btn btn-primary">
          {t.hero.ctaPrimary}
        </a>
        <a href="#contact" className="btn btn-ghost">
          {t.hero.ctaSecondary}
        </a>
      </div>
    </section>
  );
}
