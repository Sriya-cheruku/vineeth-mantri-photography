"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Photo from "./Photo";
import Reveal from "./Reveal";
import { CATEGORIES, PORTFOLIO } from "@/lib/data";

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter)),
    [filter],
  );
  const available = useMemo(() => CATEGORIES.filter((c) => PORTFOLIO.some((p) => p.category === c)), []);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (d: number) => setLightbox((n) => (n === null ? n : (n + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [lightbox, close, step]);

  const current = lightbox !== null ? items[lightbox] : null;

  return (
    <section id="portfolio" className="section">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Selected work</p>
          <h2 className="title">Every moment, <em>beautifully framed.</em></h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="filters" role="tablist" aria-label="Filter portfolio">
            {["All", ...available].map((c) => (
              <button key={c} role="tab" aria-selected={filter === c}
                      className={filter === c ? "is-on" : ""} onClick={() => setFilter(c)}>{c}</button>
            ))}
          </div>
        </Reveal>

        <div className="masonry">
          {items.map((p, idx) => (
            <button key={`${filter}-${p.title}`} className={`tile tile--${p.ratio}`}
                    onClick={() => setLightbox(idx)} aria-label={`Open ${p.title}`}>
              <Photo src={p.src} alt={`${p.title} — ${p.category} photography by Vineeth Mantri`} className="tile__img" />
              <span className="tile__cap">
                <small>{p.category}</small>
                <b>{p.title}</b>
              </span>
            </button>
          ))}
        </div>
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.title} onClick={close}>
          <button className="lb__btn lb__close" aria-label="Close" onClick={close}>×</button>
          <button className="lb__btn lb__prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1); }}>‹</button>
          <figure onClick={(e) => e.stopPropagation()}>
            <Photo src={current.src.replace(/w=\d+/, "w=2000")} alt={current.title} className="lb__img" />
            <figcaption><small>{current.category}</small> {current.title}
              <span>{(lightbox ?? 0) + 1} / {items.length}</span></figcaption>
          </figure>
          <button className="lb__btn lb__next" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1); }}>›</button>
        </div>
      )}
    </section>
  );
}
