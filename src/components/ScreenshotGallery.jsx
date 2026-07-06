import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../i18n/LanguageContext";
import "./ScreenshotGallery.css";

const LABELS = {
  es: { zoom: "Ampliar imagen", close: "Cerrar", prev: "Anterior", next: "Siguiente" },
  en: { zoom: "Enlarge image", close: "Close", prev: "Previous", next: "Next" },
};

export default function ScreenshotGallery({ gallery }) {
  const { lang } = useLanguage();
  const L = LABELS[lang] ?? LABELS.en;
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(null);
  const shots = gallery.shots;
  const shot = shots[active];

  useEffect(() => {
    if (zoom === null) return undefined;
    function onKey(e) {
      if (e.key === "Escape") setZoom(null);
      else if (e.key === "ArrowRight") setZoom((z) => (z + 1) % shots.length);
      else if (e.key === "ArrowLeft") setZoom((z) => (z - 1 + shots.length) % shots.length);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.body.classList.add("cg-lb-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      document.body.classList.remove("cg-lb-open");
    };
  }, [zoom, shots.length]);

  return (
    <div className="cg">
      {gallery.note && <p className="cg-note">{gallery.note}</p>}
      <figure className="cg-window">
        <div className="cg-chrome">
          <span className="cg-dots" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
          </span>
          <span className="cg-url">{shot.path}</span>
          {shot.theme && <span className="cg-theme">{shot.theme}</span>}
        </div>
        <button
          type="button"
          className="cg-stage"
          onClick={() => setZoom(active)}
          aria-label={L.zoom}
        >
          <img
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            width="1440"
            height="900"
          />
          <span className="cg-zoom-hint" aria-hidden="true">⤢</span>
        </button>
        <figcaption className="cg-caption">{shot.label}</figcaption>
      </figure>

      <div className="cg-thumbs" role="tablist" aria-label={gallery.hint}>
        {shots.map((s, i) => (
          <button
            key={s.src}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={`cg-thumb${i === active ? " is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            <img src={s.src} alt="" loading="lazy" width="1440" height="900" />
            <span>{s.label}</span>
          </button>
        ))}
      </div>

      {zoom !== null &&
        createPortal(
          <div
            className="cg-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={shots[zoom].label}
            onClick={(e) => {
              if (e.target === e.currentTarget) setZoom(null);
            }}
          >
          <button
            type="button"
            className="cg-lb-close"
            onClick={() => setZoom(null)}
            aria-label={L.close}
          >
            ×
          </button>
          {shots.length > 1 && (
            <button
              type="button"
              className="cg-lb-nav cg-lb-prev"
              aria-label={L.prev}
              onClick={() => setZoom((z) => (z - 1 + shots.length) % shots.length)}
            >
              ‹
            </button>
          )}
          <figure className="cg-lb-figure">
            <img src={shots[zoom].src} alt={shots[zoom].alt} />
            <figcaption>{shots[zoom].label}</figcaption>
          </figure>
          {shots.length > 1 && (
            <button
              type="button"
              className="cg-lb-nav cg-lb-next"
              aria-label={L.next}
              onClick={() => setZoom((z) => (z + 1) % shots.length)}
            >
              ›
            </button>
          )}
          </div>,
          document.body
        )}
    </div>
  );
}
