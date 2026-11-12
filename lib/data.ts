export const SITE = {
  name: "Vineeth Mantri",
  phone: "+91 91334 59205",
  whatsapp: "919133459205",
  email: "mantri.vineeth@gmail.com",
  instagram: "https://www.instagram.com/vineeth_mantri",
  handle: "@vineeth_mantri",
  city: "Hyderabad, Telangana",
  // Paste a YouTube/Vimeo *embed* URL here (e.g. https://www.youtube.com/embed/VIDEO_ID)
  // to make the showreel play on the site. Leave empty to link to Instagram instead.
  showreelEmbed: "",
};

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const HERO_SLIDES = [
  { src: u("1519741497674-611481863552", 2400), alt: "Couple during a wedding ceremony" },
  { src: u("1519225421980-715cb0215aed", 2400), alt: "Bride and groom portrait" },
  { src: u("1507504031003-b417219a0fde", 2400), alt: "Cinematic wedding moment" },
];

export type Category = "Engagement" | "Haldi" | "Wedding" | "Reception" | "Pre-Wedding" | "Post-Wedding";

export const CATEGORIES: Category[] = [
  "Wedding", "Pre-Wedding", "Engagement", "Haldi", "Reception", "Post-Wedding",
];

export const PORTFOLIO: { src: string; title: string; category: Category; ratio: "tall" | "wide" | "square" }[] = [
  { src: u("1519741497674-611481863552"), title: "The Vows", category: "Wedding", ratio: "tall" },
  { src: u("1606800052052-a08af7148866"), title: "Turmeric & Laughter", category: "Haldi", ratio: "wide" },
  { src: u("1519225421980-715cb0215aed"), title: "Golden Hour", category: "Wedding", ratio: "tall" },
  { src: u("1464366400600-7168b8af9bc3"), title: "First Dance", category: "Reception", ratio: "wide" },
  { src: u("1522673607200-164d1b6ce486"), title: "Before Forever", category: "Pre-Wedding", ratio: "square" },
  { src: u("1511285560929-80b456fea0bc"), title: "Quiet After", category: "Post-Wedding", ratio: "tall" },
  { src: u("1507504031003-b417219a0fde"), title: "The Promise", category: "Engagement", ratio: "wide" },
  { src: u("1519741497674-611481863552", 1000), title: "Hand in Hand", category: "Engagement", ratio: "square" },
];

export const SERVICES = [
  { title: "Wedding Photography", text: "Candid, editorial coverage from the first ritual to the last dance." },
  { title: "Wedding Cinematography", text: "Cinematic highlight films and full-length features, graded for emotion." },
  { title: "Pre-Wedding Shoots", text: "Story-led sessions at locations that feel like you." },
  { title: "Haldi & Reception", text: "Colour, movement and celebration, preserved in detail." },
  { title: "Commercial & Brand Films", text: "Visual storytelling for brands, launches and campaigns." },
  { title: "Music Videos & Short Films", text: "Concept to colour grade, shot with a cinematic eye." },
  { title: "Corporate & Events", text: "Polished coverage for conferences, launches and celebrations." },
  { title: "Product Photography", text: "Clean, dramatic imagery that makes products feel premium." },
];

export const TESTIMONIALS = [
  { name: "Ananya & Rohit", role: "Wedding", text: "Vineeth captured our wedding beautifully. Every frame felt cinematic and emotional. The photographs and film exceeded our expectations." },
  { name: "Sneha & Karthik", role: "Pre-Wedding", text: "The pre-wedding shoot was amazing. Vineeth made us feel comfortable and delivered photographs with a premium cinematic look." },
  { name: "Meghana Family", role: "Family Event", text: "Every important moment was captured perfectly. Professional, creative and easy to work with from beginning to end." },
];

export const STATS = [
  { value: "5+", label: "Years" },
  { value: "100+", label: "Stories told" },
  { value: "8", label: "Services" },
  { value: "100%", label: "Dedication" },
];

export const NAV = [
  { href: "#home", label: "Home" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];
