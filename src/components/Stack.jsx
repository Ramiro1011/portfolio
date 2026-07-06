import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import "./Stack.css";

export default function Stack() {
  const { t } = useLanguage();
  const stack = t.stack;
  const [pinned, setPinned] = useState(null);
  const [hovered, setHovered] = useState(null);
  const active = hovered ?? pinned;

  return (
    <section id="stack" className="section stack">
      <p className="section-label">{stack.label}</p>
      <p className="stack-intro reveal">{stack.intro}</p>

      <div className="stack-filters reveal" role="group" aria-label={stack.filterLabel}>
        <span className="stack-filters-label">{stack.filterLabel}</span>
        {stack.projects.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`stack-filter${active === p.id ? " is-active" : ""}`}
            aria-pressed={pinned === p.id}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(p.id)}
            onBlur={() => setHovered(null)}
            onClick={() => setPinned((cur) => (cur === p.id ? null : p.id))}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="reveal">
      <div className={`stack-layers${active ? " is-filtering" : ""}`}>
        {stack.layers.map((layer) => (
          <div
            key={layer.name}
            className={`stack-layer${layer.primary ? " stack-layer--primary" : ""}`}
          >
            <div className="stack-layer-head">
              <span className="stack-layer-name">{layer.name}</span>
              {layer.primary && stack.primaryTag && (
                <span className="stack-layer-tag">{stack.primaryTag}</span>
              )}
            </div>
            <ul className="stack-layer-chips">
              {layer.items.map((item) => (
                <li
                  key={item.name}
                  className={`stack-chip${active && item.in.includes(active) ? " is-lit" : ""}`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>

      <p className="stack-hint reveal">{stack.hint}</p>
    </section>
  );
}
