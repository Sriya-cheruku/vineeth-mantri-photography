"use client";

import { useEffect, useState } from "react";
import Photo from "./Photo";
import { HERO_SLIDES, SITE } from "@/lib/data";

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % HERO_SLIDES.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero__slides" aria-hidden="true">
        {HERO_SLIDES.map((s, idx) => (
          <div key={s.src} className={`hero__slide ${idx === i ? "is-on" : ""}`}>
            <Photo src={s.src} alt={s.alt} className="hero__img" priority={idx === 0} />
          </div>
        ))}
      </div>
      <div className="hero__shade" />
      <div className="letterbox letterbox--bottom" />

      <div className="hero__content">
        <p className="eyebrow rise" style={{ animationDelay: "200ms" }}>Wedding Photography &amp; Cinematography · Hyderabad</p>
        <h1 className="rise" style={{ animationDelay: "400ms" }}>
          We don&apos;t just capture moments.<br />
          <em>We turn them into memories that last a lifetime.</em>
        </h1>
        <div className="hero__cta rise" style={{ animationDelay: "700ms" }}>
          <a href="#portfolio" className="btn btn--gold">View portfolio</a>
          <a href="#contact" className="btn btn--ghost">Check availability</a>
        </div>
      </div>

      <div className="hero__meta">
        <span>{SITE.city}</span>
        <div className="dots" role="tablist" aria-label="Hero slides">
          {HERO_SLIDES.map((s, idx) => (
            <button key={s.src} role="tab" aria-selected={idx === i} aria-label={`Slide ${idx + 1}`}
                    className={idx === i ? "is-on" : ""} onClick={() => setI(idx)} />
          ))}
        </div>
        <a href="#portfolio" className="scroll-cue">Scroll <i /></a>
      </div>
    </section>
  );
}
