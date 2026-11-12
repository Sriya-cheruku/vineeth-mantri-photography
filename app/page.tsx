import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Showreel from "@/components/Showreel";
import ContactForm from "@/components/ContactForm";
import Photo from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { SERVICES, STATS, TESTIMONIALS, SITE, NAV } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Photographer",
  name: "Vineeth Mantri",
  description: "Wedding photographer and cinematographer based in Hyderabad.",
  telephone: SITE.phone,
  email: SITE.email,
  areaServed: "Hyderabad, Telangana, India",
  address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "IN" },
  sameAs: [SITE.instagram],
};

export default function Home() {
  return (
    <>
      <a className="skip" href="#portfolio">Skip to content</a>
      <Navbar />
      <main>
        <Hero />

        <div className="marquee" aria-hidden="true">
          <div>
            {[0, 1].map((k) => (
              <span key={k}>Weddings ✦ Pre-Weddings ✦ Cinematography ✦ Haldi ✦ Receptions ✦ Brand Films ✦ Short Films ✦ Weddings ✦ Pre-Weddings ✦ Cinematography ✦ Haldi ✦ Receptions ✦ Brand Films ✦ Short Films ✦ </span>
            ))}
          </div>
        </div>

        <Portfolio />

        <section id="about" className="section section--alt">
          <div className="wrap about">
            <Reveal className="about__media">
              <Photo src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=80"
                     alt="Vineeth Mantri behind the camera" className="about__img" />
              <div className="about__badge"><small>Based in</small>{SITE.city}</div>
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow">About Vineeth</p>
              <h2 className="title">Telling stories <em>through the lens.</em></h2>
              <p className="lead">
                Vineeth Mantri is a Hyderabad-based wedding photographer and cinematographer dedicated to turning real emotion into timeless visual stories.
              </p>
              <p>
                Every frame is shaped by light, movement and detail. From intimate rituals to grand celebrations, the focus is always on photographs and films that feel personal, honest and unforced — meaningful long after the celebration is over.
              </p>
              <dl className="stats">
                {STATS.map((s) => (
                  <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>
                ))}
              </dl>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="btn btn--ghost">Follow the journey ↗</a>
            </Reveal>
          </div>
        </section>

        <section id="services" className="section">
          <div className="wrap">
            <Reveal>
              <p className="eyebrow">Services</p>
              <h2 className="title">Visual stories <em>for every occasion.</em></h2>
            </Reveal>
            <ol className="services">
              {SERVICES.map((s, i) => (
                <Reveal key={s.title} delay={(i % 4) * 60}>
                  <li>
                    <span className="services__n">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <a href="#contact" aria-label={`Enquire about ${s.title}`}>↗</a>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <Showreel />

        <section id="reviews" className="section">
          <div className="wrap">
            <Reveal>
              <p className="eyebrow">Client reviews</p>
              <h2 className="title">Kind words <em>from our couples.</em></h2>
            </Reveal>
            <div className="reviews">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.name} delay={i * 90}>
                  <figure className="review">
                    <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                    <blockquote>“{t.text}”</blockquote>
                    <figcaption><b>{t.name}</b><small>{t.role}</small></figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section section--alt">
          <div className="wrap contact">
            <Reveal>
              <p className="eyebrow">Contact</p>
              <h2 className="title">Let&apos;s create <em>something beautiful.</em></h2>
              <p className="lead">Planning a wedding, event, brand film or creative project? Share a few details — dates fill up early.</p>
              <ul className="contact__list">
                <li><small>WhatsApp / Call</small><a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a></li>
                <li><small>Email</small><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
                <li><small>Instagram</small><a href={SITE.instagram} target="_blank" rel="noopener noreferrer">{SITE.handle} ↗</a></li>
                <li><small>Studio</small><span>{SITE.city}</span></li>
              </ul>
            </Reveal>
            <Reveal delay={120}><ContactForm /></Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer__grid">
          <div>
            <p className="logo logo--lg"><span>VINEETH</span><span className="logo__sub">MANTRI · PHOTOGRAPHY</span></p>
            <p className="footer__blurb">Cinematic wedding photography &amp; films, crafted in Hyderabad.</p>
          </div>
          <nav aria-label="Footer">
            {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
          </nav>
        </div>
        <div className="wrap footer__base">
          <span>© {new Date().getFullYear()} Vineeth Mantri. All rights reserved.</span>
          <span>Hyderabad · India</span>
        </div>
      </footer>

      <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="wa">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.7-5A8.5 8.5 0 1 1 21 11.5Z"/><path d="M9 8.800c0 3.500 2.700 6.200 6.200 6.200l1.300-1.600-2-1-.9.700c-1-.4-1.800-1.200-2.200-2.200l.7-.9-1-2L9 8.800Z"/></svg>
      </a>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
