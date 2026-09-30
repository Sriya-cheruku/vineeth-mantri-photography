import Navbar from "@/components/Navbar";

const categories = [
  {
    title: "Engagement",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Haldi",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Wedding",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Reception",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Pre-Wedding",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Post-Wedding",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
  },
];

const services = [
  "Wedding Photography",
  "Wedding Cinematography",
  "Pre-Wedding",
  "Haldi & Reception",
  "Commercial & Brand Films",
  "Music Videos",
  "Short Films",
  "Corporate Videos",
  "Product Photography",
  "Events & Celebrations",
];

const testimonials = [
  {
    initial: "A",
    name: "Ananya & Rohit",
    role: "Wedding Client",
    text: "Vineeth captured our wedding beautifully. Every frame felt cinematic and emotional. The photographs and film exceeded our expectations.",
  },
  {
    initial: "S",
    name: "Sneha & Karthik",
    role: "Pre-Wedding Client",
    text: "The pre-wedding shoot was amazing. Vineeth made us feel comfortable and delivered beautiful photographs with a premium cinematic look.",
  },
  {
    initial: "M",
    name: "Meghana Family",
    role: "Family Event Client",
    text: "Every important moment was captured perfectly. Professional, creative and easy to work with from beginning to end.",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=85",
];

export default function Home() {
  return (
    <main className="bg-[#f7f3ec] text-[#211d19]">

      <Navbar />

      {/* ================= HERO ================= */}


      <section
  id="home"
  className="relative min-h-screen overflow-hidden bg-[#cdb79d]"
>
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=90"
      alt="Vineeth Mantri wedding photography"
      className="h-full w-full object-cover"
    />

    <div className="absolute inset-0 bg-black/30" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
  </div>

  {/* CENTER CARD */}
  <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-28 sm:px-6">

    <div
      className="w-full rounded-[2rem] border border-white/30 bg-black/35 p-8 text-center shadow-2xl backdrop-blur-md sm:p-12 md:p-16 lg:p-20"
      style={{
        maxWidth: "1400px",
        width: "92vw",
      }}
    >

      <p className="text-xs uppercase tracking-[0.35em] text-white/80">
        VINEETH MANTRI
      </p>

      <h1 className="mt-6 text-5xl font-light leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
        We Don&apos;t Just
        <br />
        Capture Moments,
        <br />
        <span className="text-white/60">
          We Create
        </span>
        <br />
        Cinematic Memories.
      </h1>

      <p className="mx-auto mt-8 max-w-3xl text-sm leading-7 text-white/75 md:text-base">
        Professional wedding photography and cinematography for weddings,
        pre-weddings, receptions, celebrations and timeless storytelling.
      </p>

      <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

        <a
          href="#contact"
          className="rounded-full bg-white px-7 py-4 text-sm font-medium text-[#211d19] transition duration-300 hover:scale-105"
        >
          Book a Shoot
        </a>

        <a
          href="#portfolio"
          className="rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#211d19]"
        >
          View Portfolio
        </a>

      </div>

      <div className="mt-10 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-white/50">
        <span className="h-px w-8 bg-white/30" />
        Hyderabad · Telangana
        <span className="h-px w-8 bg-white/30" />
      </div>

    </div>
  </div>

  {/* Scroll */}
  <a
    href="#portfolio"
    className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/60"
  >
    Scroll
  </a>
</section>
      

          
            

      {/* ================= WHAT WE CAPTURE ================= */}
{/* 
      <section id="portfolio" className="px-6 py-24 md:px-12 lg:px-20 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8c7a68]">
              What We Capture
            </p>

            <div className="w-[94vw] max-w-[1500px] rounded-[2rem] border border-white/30 bg-black/30 p-8 text-center shadow-2xl backdrop-blur-md sm:p-12 md:p-16">
              Every Moment,
              <br />
              <span className="text-[#9c8064]">
                Beautifully Crafted.
              </span>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {categories.map((category, index) => (
              <div
                key={category.title}
                className={`group relative overflow-hidden rounded-[2rem] ${
                  index === 2 || index === 3
                    ? "lg:h-[600px]"
                    : "lg:h-[470px]"
                }`}
              >

                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                <div className="absolute bottom-0 left-0 p-7 md:p-9">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                    0{index + 1}
                  </p>

                  <h3 className="mt-3 text-3xl font-light text-white">
                    {category.title}
                  </h3>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section> */}

      {/* ================= ABOUT ================= */}

      <section id="about" className="bg-[#e9e0d4] px-6 py-24 md:px-12 lg:px-20 lg:py-32">

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">

          <div className="relative min-h-[600px] overflow-hidden rounded-[2rem]">
            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=90"
              alt="Vineeth Mantri photography"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-black/20 px-5 py-4 text-white backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                Based in
              </p>

              <p className="mt-1 text-lg">
                Hyderabad, Telangana
              </p>
            </div>
          </div>

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-[#8c7a68]">
              About Vineeth
            </p>

            <h2 className="mt-5 text-5xl font-light leading-tight tracking-[-0.04em] md:text-7xl">
              Telling Stories
              <br />
              <span className="text-[#9c8064]">
                Through The Lens.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#5e554c]">
              Vineeth Mantri is a Hyderabad-based professional wedding
              photographer and cinematographer dedicated to turning real
              emotions into timeless visual stories.
            </p>

            <p className="mt-6 leading-7 text-[#756a60]">
              Every frame is created with attention to light, emotion,
              movement and detail. From intimate wedding moments to grand
              celebrations, the focus is always on creating photographs and
              films that feel personal and authentic.
            </p>

            <p className="mt-6 leading-7 text-[#756a60]">
              The approach combines modern aesthetics with genuine emotions,
              creating visual stories that remain meaningful long after the
              celebration is over.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-black/10 pt-8 sm:grid-cols-4">

              <div>
                <p className="text-4xl font-light">5+</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-[#88796a]">
                  Years
                </p>
              </div>

              <div>
                <p className="text-4xl font-light">100+</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-[#88796a]">
                  Projects
                </p>
              </div>

              <div>
                <p className="text-4xl font-light">14+</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-[#88796a]">
                  Services
                </p>
              </div>

              <div>
                <p className="text-4xl font-light">100%</p>
                <p className="mt-2 text-xs uppercase tracking-wider text-[#88796a]">
                  Dedication
                </p>
              </div>

            </div>

            <a
              href="https://www.instagram.com/vineeth_mantri"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex rounded-full border border-[#211d19]/20 px-6 py-3 text-sm transition hover:bg-[#211d19] hover:text-white"
            >
              Explore Our Journey ↗
            </a>

          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section id="services" className="px-6 py-24 md:px-12 lg:px-20 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8c7a68]">
              Services
            </p>

            <h2 className="mt-5 max-w-3xl text-5xl font-light tracking-[-0.04em] md:text-7xl">
              Visual Stories
              <br />
              <span className="text-[#9c8064]">
                For Every Occasion.
              </span>
            </h2>
          </div>

          <div className="border-t border-black/10">

            {services.map((service, index) => (
              <div
                key={service}
                className="group flex items-center justify-between border-b border-black/10 py-7 transition hover:px-4"
              >
                <div className="flex items-center gap-8">

                  <span className="text-xs text-[#9c8064]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-2xl font-light md:text-4xl">
                    {service}
                  </h3>

                </div>

                <span className="text-xl text-[#9c8064] transition group-hover:translate-x-2">
                  ↗
                </span>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= SHOWREEL ================= */}

      <section className="relative mx-6 overflow-hidden rounded-[2rem] md:mx-12 lg:mx-20">

        <img
          src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=2200&q=90"
          alt="Cinematic wedding"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative flex min-h-[650px] flex-col items-center justify-center px-6 text-center text-white">

          <p className="text-xs uppercase tracking-[0.3em] text-white/60">
            Cinematic Showreel
          </p>

          <button
            className="mt-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/40 bg-white/10 text-2xl backdrop-blur-md transition hover:scale-110 hover:bg-white hover:text-black"
            aria-label="Play showreel"
          >
            ▶
          </button>

          <h2 className="mt-10 text-5xl font-light tracking-[-0.04em] md:text-8xl">
            Stories in
            <br />
            <span className="text-white/60">
              Motion.
            </span>
          </h2>

        </div>
      </section>

      {/* ================= CLIENT REVIEWS ================= */}

      <section className="px-6 py-24 md:px-12 lg:px-20 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#8c7a68]">
              Client Reviews
            </p>

            <h2 className="mt-5 text-5xl font-light tracking-[-0.04em] md:text-7xl">
              What Our
              <br />
              <span className="text-[#9c8064]">
                Clients Say.
              </span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">

            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-[2rem] border border-black/10 bg-white/50 p-8 md:p-10"
              >

                <div className="flex gap-1 text-[#b18b5d]">
                  ★★★★★
                </div>

                <p className="mt-8 text-lg leading-8 text-[#514941]">
                  “{testimonial.text}”
                </p>

                <div className="mt-10 flex items-center gap-4 border-t border-black/10 pt-6">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d7c5ae] text-sm">
                    {testimonial.initial}
                  </div>

                  <div>
                    <p className="text-sm font-medium">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-xs text-[#88796a]">
                      {testimonial.role}
                    </p>
                  </div>

                </div>

              </div>
            ))}

          </div>

          <div className="mt-12 flex flex-col justify-between gap-5 rounded-[2rem] bg-[#211d19] p-8 text-white md:flex-row md:items-center md:p-10">

            <div>
              <p className="text-4xl font-light">
                5.0/5
              </p>

              <div className="mt-2 text-[#d6b27e]">
                ★★★★★
              </div>
            </div>

            <p className="max-w-xl text-sm leading-6 text-white/60">
              Creating meaningful visual stories for couples, families,
              brands and celebrations across Hyderabad and beyond.
            </p>

          </div>

        </div>
      </section>

      {/* ================= INSTAGRAM GALLERY ================= */}

      <section className="bg-[#e9e0d4] px-6 py-24 md:px-12 lg:px-20 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#8c7a68]">
                Instagram
              </p>

              <h2 className="mt-5 text-5xl font-light md:text-7xl">
                Follow The
                <br />
                <span className="text-[#9c8064]">
                  Journey.
                </span>
              </h2>
            </div>

            <a
              href="https://www.instagram.com/vineeth_mantri"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black/15 px-6 py-3 text-sm transition hover:bg-black hover:text-white"
            >
              @vineeth_mantri ↗
            </a>

          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">

            {gallery.map((image, index) => (
              <a
                key={image}
                href="https://www.instagram.com/vineeth_mantri"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden ${
                  index === 1
                    ? "aspect-[3/4]"
                    : "aspect-square"
                }`}
              >

                <img
                  src={image}
                  alt="Vineeth Mantri gallery"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />

              </a>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="px-6 py-24 md:px-12 lg:px-20 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="rounded-[2rem] bg-[#211d19] px-7 py-20 text-white md:px-14 md:py-28">

            <p className="text-xs uppercase tracking-[0.3em] text-white/50">
              Contact
            </p>

            <h2 className="mt-6 max-w-5xl text-5xl font-light leading-tight tracking-[-0.04em] md:text-8xl">
              Let&apos;s Create
              <br />
              <span className="text-white/45">
                Something Beautiful.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/60">
              Planning a wedding, event, brand film or creative project?
              Let&apos;s talk about your vision and create something
              memorable together.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="https://wa.me/919133459205"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-7 py-4 text-sm font-medium text-[#211d19] transition hover:scale-105"
              >
                WhatsApp
              </a>

              <a
                href="mailto:mantri.vineeth@gmail.com"
                className="rounded-full border border-white/25 px-7 py-4 text-sm transition hover:bg-white hover:text-black"
              >
                Send Email
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="bg-[#211d19] px-6 pb-10 text-white md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl border-t border-white/10 pt-12">

          <div className="grid gap-12 md:grid-cols-3">

            <div>
              <p className="text-2xl font-light tracking-[0.12em]">
                VINEETH
              </p>

              <p className="text-2xl font-light tracking-[0.12em]">
                MANTRI
              </p>

              <p className="mt-5 max-w-xs text-sm leading-6 text-white/45">
                Professional wedding photographer and cinematographer
                crafting cinematic stories that last a lifetime.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                Quick Links
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
                <a href="#home" className="hover:text-white">
                  Home
                </a>

                <a href="#about" className="hover:text-white">
                  About
                </a>

                <a href="#portfolio" className="hover:text-white">
                  Portfolio
                </a>

                <a href="#services" className="hover:text-white">
                  Services
                </a>

                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                Contact
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">

                <a href="tel:+919133459205">
                  +91 91334 59205
                </a>

                <a href="mailto:mantri.vineeth@gmail.com">
                  mantri.vineeth@gmail.com
                </a>

                <p>
                  Hyderabad, Telangana
                </p>

                <a
                  href="https://www.instagram.com/vineeth_mantri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  @vineeth_mantri ↗
                </a>

              </div>
            </div>

          </div>

          <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/30 md:flex-row">

            <p>
              © {new Date().getFullYear()} Vineeth Mantri. All rights reserved.
            </p>

            <p>
              Hyderabad · India
            </p>

          </div>

        </div>

      </footer>

      {/* WhatsApp Floating Button */}

      <a
        href="https://wa.me/919133459205"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#211d19] text-lg text-white shadow-xl transition hover:scale-110"
      >
        ☎
      </a>

    </main>
  );
}