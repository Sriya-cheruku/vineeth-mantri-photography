"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textColor = scrolled ? "text-[#211d19]" : "text-white";
  const mutedColor = scrolled ? "text-[#211d19]/75" : "text-white/85";

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav
        className={`mx-auto flex items-center justify-between py-5 transition-all duration-500 ${
          scrolled
            ? "rounded-full bg-[#f7f3ec]/90 px-6 shadow-lg backdrop-blur-xl"
            : "px-0"
        }`}
        style={{
          width: "92vw",
          maxWidth: "1400px",
        }}
      >
        {/* LOGO */}
        <a href="#home" className={textColor}>
          <div className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-[0.28em]">
              VINEETH
            </span>

            <span className="mt-1 text-[15px] font-semibold tracking-[0.28em]">
              MANTRI
            </span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#home"
            className={`${mutedColor} text-sm transition hover:opacity-60`}
          >
            Home
          </a>

          <a
            href="#about"
            className={`${mutedColor} text-sm transition hover:opacity-60`}
          >
            About
          </a>

          <a
            href="#services"
            className={`${mutedColor} text-sm transition hover:opacity-60`}
          >
            Services
          </a>

          <a
            href="#portfolio"
            className={`${mutedColor} text-sm transition hover:opacity-60`}
          >
            Portfolio
          </a>

          <a
            href="#contact"
            className={`${mutedColor} text-sm transition hover:opacity-60`}
          >
            Contact
          </a>

          {/* BOOK NOW */}
          <a
            href="#contact"
            className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
              scrolled
                ? "bg-[#211d19] text-white hover:bg-[#6e5b4b]"
                : "bg-white text-[#211d19] hover:scale-105"
            }`}
          >
            Book Now
          </a>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md md:hidden ${
            scrolled
              ? "border-[#211d19]/20 bg-white/60 text-[#211d19]"
              : "border-white/30 bg-black/20 text-white"
          }`}
          aria-label="Open menu"
        >
          {open ? "×" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="mx-auto mt-2 rounded-2xl border border-[#211d19]/10 bg-[#f7f3ec]/95 p-6 shadow-2xl backdrop-blur-xl md:hidden"
          style={{
            width: "92vw",
            maxWidth: "1400px",
          }}
        >
          <div className="flex flex-col gap-5">

            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="text-sm text-[#211d19]"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="text-sm text-[#211d19]"
            >
              About
            </a>

            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="text-sm text-[#211d19]"
            >
              Services
            </a>

            <a
              href="#portfolio"
              onClick={() => setOpen(false)}
              className="text-sm text-[#211d19]"
            >
              Portfolio
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-sm text-[#211d19]"
            >
              Contact
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-[#211d19] px-5 py-3 text-center text-sm font-medium text-white"
            >
              Book Now
            </a>

          </div>
        </div>
      )}
    </header>
  );
}