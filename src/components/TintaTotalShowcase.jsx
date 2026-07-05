import { useRef, useState } from "react";
import "./TintaTotalShowcase.css";

const REDUCED_MOTION =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Architecture({ data }) {
  const [branches, setBranches] = useState([1, 2]);
  const [doneSteps, setDoneSteps] = useState(-1);
  const [showBadge, setShowBadge] = useState(false);
  const [running, setRunning] = useState(false);
  const timers = useRef([]);

  function runSequence() {
    if (running) return;
    setRunning(true);
    setDoneSteps(-1);
    setShowBadge(false);
    timers.current.forEach(clearTimeout);
    timers.current = [];

    const next = branches.length + 1;
    const stepDelay = REDUCED_MOTION ? 0 : 520;

    data.steps.forEach((_, idx) => {
      const timer = setTimeout(() => {
        setDoneSteps(idx);
        if (idx === 1) setBranches((b) => [...b, next]);
        if (idx === data.steps.length - 1) {
          setShowBadge(true);
          setRunning(false);
        }
      }, stepDelay * (idx + 1));
      timers.current.push(timer);
    });

    if (REDUCED_MOTION) {
      setBranches((b) => [...b, next]);
      setDoneSteps(data.steps.length - 1);
      setShowBadge(true);
      setRunning(false);
    }
  }

  return (
    <div className="tt-panel">
      <p className="tt-eyebrow">{data.eyebrow}</p>
      <h4 className="tt-panel-title">{data.title}</h4>

      <div className="tt-tenant-stage">
        <div className="tt-central">
          <div className="tt-central-role">{data.centralRole}</div>
          <div className="tt-central-sub">{data.centralSub}</div>
        </div>
        <div className="tt-trunk" />
        <div className="tt-branches">
          {branches.map((n, i) => (
            <div className={`tt-branch ${i >= 2 ? "fresh" : ""}`} key={n}>
              <div className="tt-branch-node">
                {data.branchLabel} {n}
              </div>
              <div className="tt-db">
                <div className="tt-db-cyl" />
                {data.dbLabel}
              </div>
            </div>
          ))}
        </div>
        <div className="tt-branch-manages">
          <span className="tt-bm-lead">{data.branchLead}</span>
          <span className="tt-bm-chips">
            {data.branchModules.map((m) => (
              <span className="tt-bm-chip" key={m}>
                {m}
              </span>
            ))}
          </span>
        </div>
      </div>

      <div className="tt-add-row">
        <button className="tt-add-btn" onClick={runSequence} disabled={running}>
          {data.addButton}
        </button>
        <ol className="tt-steps">
          {data.steps.map((step, idx) => (
            <li
              key={step}
              className={`tt-step ${idx <= doneSteps ? "done" : ""} ${
                idx === data.steps.length - 1 ? "final" : ""
              }`}
            >
              <span className="tt-dot" />
              {step}
            </li>
          ))}
        </ol>
      </div>
      <div className="tt-badge-row">
        <span className={`tt-norestart ${showBadge ? "show" : ""}`}>◍ {data.noRestart}</span>
      </div>
    </div>
  );
}

function RequestFlow({ data }) {
  const [active, setActive] = useState(0);

  return (
    <div className="tt-panel">
      <p className="tt-eyebrow">{data.eyebrow}</p>
      <h4 className="tt-panel-title">{data.title}</h4>

      <div className="tt-flow">
        {data.nodes.map((node, i) => (
          <div className="tt-node-wrap" key={node.label}>
            <button
              className={`tt-node ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="tt-node-icon">{String(i + 1).padStart(2, "0")}</span>
              <span className="tt-node-label">
                {node.label.split("\n").map((line, li) => (
                  <span key={li}>
                    {line}
                    {li === 0 && <br />}
                  </span>
                ))}
              </span>
            </button>
            {i < data.nodes.length - 1 && (
              <span className={`tt-connector ${i < active ? "active" : ""}`} />
            )}
          </div>
        ))}
      </div>

      <div className="tt-detail">
        <p className="tt-detail-label">{data.nodes[active].label.replace("\n", " ")}</p>
        <p className="tt-detail-text">{data.nodes[active].detail}</p>
      </div>
      <p className="tt-hint">↑ {data.hint}</p>
    </div>
  );
}

// mirrors the real Tinta Total backend greedy (CalculadoraService.java):
// fill with the largest can sizes first, then add one of the smallest can for
// the leftover fraction. Fast and good enough, not always the exact minimum.
function greedyCans(liters, sizes) {
  const sorted = [...sizes].sort((a, b) => b - a);
  const picks = [];
  let remaining = liters;
  for (const size of sorted) {
    if (remaining <= 0.001) break;
    const count = Math.floor(remaining / size);
    if (count > 0) {
      picks.push({ size, count });
      remaining -= count * size;
    }
  }
  if (remaining > 0.001) {
    const smallest = sorted[sorted.length - 1];
    const existing = picks.find((p) => p.size === smallest);
    if (existing) existing.count += 1;
    else picks.push({ size: smallest, count: 1 });
  }
  return picks.sort((a, b) => b.size - a.size);
}

function Calculator({ data }) {
  const [surface, setSurface] = useState(String(data.defaults.surface));
  const [coats, setCoats] = useState(String(data.defaults.coats));
  const [typeIdx, setTypeIdx] = useState(data.defaults.typeIndex);
  const [colorIdx, setColorIdx] = useState(data.defaults.colorIndex);

  const type = data.types[typeIdx];
  const color = type.colors[colorIdx] ?? type.colors[0];
  const s = Number(surface) || 0;
  const c = Number(coats) || 0;
  const liters = s > 0 && c > 0 ? (s * c) / type.yield : 0;
  const picks = liters > 0 ? greedyCans(liters, type.cans) : [];
  const totalCans = picks.reduce((sum, p) => sum + p.count, 0);
  const totalLiters = picks.reduce((sum, p) => sum + p.count * p.size, 0);

  function pickType(i) {
    setTypeIdx(i);
    setColorIdx(0);
  }

  return (
    <div className="tt-panel">
      <p className="tt-eyebrow">{data.eyebrow}</p>
      <h4 className="tt-panel-title">{data.title}</h4>
      {data.note && <p className="tt-calc-note">{data.note}</p>}
      <div className="tt-calc">
        <div className="tt-calc-visual">
          <label className="tt-calc-field">
            <span className="tt-calc-k">{data.fields.surface}</span>
            <span className="tt-calc-input">
              <input
                type="number"
                min="0"
                inputMode="decimal"
                value={surface}
                onChange={(e) => setSurface(e.target.value)}
              />
              <em>{data.fields.unitM2}</em>
            </span>
          </label>
          <label className="tt-calc-field">
            <span className="tt-calc-k">{data.fields.coats}</span>
            <span className="tt-calc-input">
              <input
                type="number"
                min="1"
                value={coats}
                onChange={(e) => setCoats(e.target.value)}
              />
            </span>
          </label>
          <label className="tt-calc-field">
            <span className="tt-calc-k">{data.fields.type}</span>
            <select
              className="tt-calc-select"
              value={typeIdx}
              onChange={(e) => pickType(Number(e.target.value))}
            >
              {data.types.map((t, i) => (
                <option key={t.name} value={i}>
                  {t.name} · {t.yield} {data.fields.yieldUnit}
                </option>
              ))}
            </select>
          </label>
          <label className="tt-calc-field">
            <span className="tt-calc-k">{data.fields.color}</span>
            <select
              className="tt-calc-select"
              value={colorIdx}
              onChange={(e) => setColorIdx(Number(e.target.value))}
            >
              {type.colors.map((col, i) => (
                <option key={col} value={i}>
                  {col}
                </option>
              ))}
            </select>
          </label>

          <div className="tt-calc-divider" />

          <div className="tt-calc-row">
            <span className="tt-calc-k">{data.result.litersLabel}</span>
            <span className="tt-calc-v">{liters.toFixed(1)} L</span>
          </div>

          <div className="tt-calc-out">
            <span className="tt-calc-out-k">{data.result.cansLabel}</span>
            <span className="tt-calc-out-v">
              {totalCans}{" "}
              <span className="tt-calc-out-unit">
                {totalCans === 1 ? data.result.cansUnitOne : data.result.cansUnit}
              </span>
            </span>
          </div>

          {picks.length > 0 && (
            <>
              <ul className="tt-calc-products">
                {picks.map((p) => (
                  <li key={p.size}>
                    <span className="tt-calc-qty">{p.count} ×</span>{" "}
                    {type.name} · {color} · {p.size} L
                  </li>
                ))}
              </ul>
              <p className="tt-calc-bought">
                {data.result.boughtLabel} {totalLiters} L
              </p>
            </>
          )}
        </div>

        <ul className="tt-calc-benefits">
          {data.benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function TintaTotalShowcase({ showcase }) {
  return (
    <div className="tt-showcase">
      <p className="tt-showcase-heading">{showcase.heading}</p>
      <p className="tt-showcase-lede">{showcase.lede}</p>
      <Architecture data={showcase.architecture} />
      <RequestFlow data={showcase.flow} />
      <Calculator data={showcase.calc} />
    </div>
  );
}
