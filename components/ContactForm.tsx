"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/data";

const EVENTS = ["Wedding", "Pre-Wedding", "Engagement", "Haldi / Mehendi", "Reception", "Brand / Commercial", "Other"];

export default function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    const next: Record<string, string> = {};
    if (v("name").length < 2) next.name = "Please enter your name.";
    if (!/^[+\d][\d\s-]{8,}$/.test(v("phone"))) next.phone = "Enter a valid phone number.";
    if (v("email") && !/^\S+@\S+\.\S+$/.test(v("email"))) next.email = "Enter a valid email.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const text =
      `Hi Vineeth, I'd like to enquire about a shoot.\n\n` +
      `Name: ${v("name")}\nPhone: ${v("phone")}\n` +
      (v("email") ? `Email: ${v("email")}\n` : "") +
      `Event: ${v("event")}\n` + (v("date") ? `Date: ${v("date")}\n` : "") +
      (v("message") ? `\n${v("message")}` : "");
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form form--done" role="status">
        <p className="eyebrow">Thank you</p>
        <p className="form__big">Your enquiry is ready in WhatsApp.</p>
        <p>Just press send there and Vineeth will reply personally. Prefer email? <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
        <button className="btn btn--ghost" onClick={() => setSent(false)}>Send another</button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <label>Name *
        <input name="name" autoComplete="name" aria-invalid={!!errors.name} placeholder="Your full name" />
        {errors.name && <em className="err">{errors.name}</em>}
      </label>
      <label>Phone *
        <input name="phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} placeholder="+91 …" />
        {errors.phone && <em className="err">{errors.phone}</em>}
      </label>
      <label>Email
        <input name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} placeholder="you@email.com" />
        {errors.email && <em className="err">{errors.email}</em>}
      </label>
      <label>Occasion
        <select name="event" defaultValue="Wedding">{EVENTS.map((x) => <option key={x}>{x}</option>)}</select>
      </label>
      <label>Event date
        <input name="date" type="date" />
      </label>
      <label className="form__full">Tell us about it
        <textarea name="message" rows={4} placeholder="Venue, number of days, what you’re imagining…" />
      </label>
      <button className="btn btn--gold form__full" type="submit">Send enquiry via WhatsApp</button>
    </form>
  );
}
