"use client";

import { useEffect, useState } from "react";
import Photo from "./Photo";
import { SITE } from "@/lib/data";

export default function Showreel() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <section className="reel" aria-label="Showreel">
      <Photo src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=2200&q=80"
             alt="" className="reel__bg" />
      <div className="reel__shade" />
      <div className="letterbox letterbox--top" /><div className="letterbox letterbox--bottom" />
      <div className="reel__content">
        <p className="eyebrow">The showreel</p>
        <h2 className="title title--xl">Stories in <em>motion.</em></h2>
        <button className="play" onClick={() => setOpen(true)} aria-label="Play showreel"><span>▶</span></button>
      </div>

      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Showreel" onClick={() => setOpen(false)}>
          <button className="lb__btn lb__close" aria-label="Close" onClick={() => setOpen(false)}>×</button>
          <div className="reel__player" onClick={(e) => e.stopPropagation()}>
            {SITE.showreelEmbed ? (
              <iframe src={`${SITE.showreelEmbed}${SITE.showreelEmbed.includes("?") ? "&" : "?"}autoplay=1`}
                      title="Vineeth Mantri showreel" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
            ) : (
              <div className="reel__empty">
                <p className="eyebrow">Films live on Instagram</p>
                <p>Watch the latest wedding films and reels on {SITE.handle}.</p>
                <a className="btn btn--gold" href={SITE.instagram} target="_blank" rel="noopener noreferrer">Open Instagram ↗</a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
