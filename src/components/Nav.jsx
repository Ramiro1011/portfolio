import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import "./Nav.css";

export default function Nav() {
  const { t, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <a href="#top" className="nav-mark">
        RA
      </a>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        {t.nav.links.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button className="lang-toggle" onClick={toggleLang} aria-label="Switch language">
          {t.nav.langToggle}
        </button>
        <button
          className="nav-burger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
