import { useLanguage } from "../i18n/LanguageContext";
import TintaTotalShowcase from "./TintaTotalShowcase";
import ScreenshotGallery from "./ScreenshotGallery";
import "./Projects.css";

function DemoCard({ card }) {
  return (
    <a
      className="project-demo"
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="project-demo-frame">
        <img src={card.src} alt={card.alt} loading="lazy" />
        <span className="project-demo-overlay">
          <span className="project-demo-label">↗ {card.label}</span>
        </span>
      </span>
    </a>
  );
}

function ProjectItem({ item }) {
  return (
    <article className="project reveal">
      <div className="project-content">
        <div className="project-heading">
          <h3>{item.name}</h3>
          <div className="project-links">
            {item.links.demo && (
              <a href={item.links.demo} target="_blank" rel="noopener noreferrer">
                ↗ Live
              </a>
            )}
            {item.links.code && (
              <a href={item.links.code} target="_blank" rel="noopener noreferrer">
                ↗ Code
              </a>
            )}
          </div>
        </div>
        {item.meta && <p className="project-meta">{item.meta}</p>}
        <p className="project-tagline">{item.tagline}</p>
        <p className="project-description">{item.description}</p>
        <ul className="project-decisions">
          {item.decisions.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <div className="project-tags">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        {item.gallery && <ScreenshotGallery gallery={item.gallery} />}
        {item.demoCard && <DemoCard card={item.demoCard} />}
        {item.showcase && <TintaTotalShowcase showcase={item.showcase} />}
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="work" className="section projects">
      <p className="section-label">{t.projects.label}</p>
      <p className="projects-intro reveal">{t.projects.intro}</p>
      <div className="projects-list">
        {t.projects.items.map((item) => (
          <ProjectItem key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
