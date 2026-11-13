"use client";

import { useEffect, useState } from "react";
import { NAV } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // highlight the section currently in view
  useEffect(() => {
    const els = NAV.map((n) => document.querySelector(n.href)).filter(Boolean) as Element[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // lock page scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <header className={`nav ${scrolled || open ? "nav--solid" : ""}`}>
      <div className="nav__inner">
        <a href="#home" className="logo" onClick={() => setOpen(false)} aria-label="MVK VISUALS — home">
          <span>MVK VISUALS</span><span className="logo__sub">By Vineeth Mantri</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {NAV.slice(1, -1).map((n) => (
            <a key={n.href} href={n.href} className={active === n.href ? "is-active" : ""}>{n.label}</a>
          ))}
          <a href="#contact" className="btn btn--gold btn--sm">Book a date</a>
        </nav>

        <button
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={open ? "bar bar--x1" : "bar"} />
          <span className={open ? "bar bar--x2" : "bar"} />
        </button>
      </div>

      <div id="mobile-menu" className={`drawer ${open ? "drawer--open" : ""}`} aria-hidden={!open}>
        {NAV.map((n, i) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}
             style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}>
            <small>0{i + 1}</small>{n.label}
          </a>
        ))}
      </div>
    </header>
  );
}
