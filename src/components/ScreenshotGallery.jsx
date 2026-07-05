import { useState } from "react";
import "./ScreenshotGallery.css";

export default function ScreenshotGallery({ gallery }) {
  const [active, setActive] = useState(0);
  const shots = gallery.shots;
  const shot = shots[active];

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
        <div className="cg-stage">
          <img
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            width="1440"
            height="900"
          />
        </div>
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
    </div>
  );
}
