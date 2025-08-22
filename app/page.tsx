// Rabindra Sah – Portfolio (single-file React + Tailwind)
// — Ready to paste into a React project or deploy as-is in this canvas preview —
// How to customize:
// 1) Replace avatarUrl with a hosted headshot (PNG/JPG). 2) Update links in SOCIALS and PROJECTS.
// 3) For a Next.js app, create app/page.tsx and paste this component's JSX into it; Tailwind works out of the box.
// 4) For contact form, set FORM_ACTION to your Formspree/EmailJS endpoint or keep mailto link.

import React from "react";

// ------------------------
// Content (edit me)
// ------------------------
const NAME = "Rabindra Prasad Sah"; // a.k.a. Rabin Sah
const ROLE = "Frontend Developer | Innovator | Digital Marketer";
const TAGLINE = "I build creative, accessible, and impactful digital solutions.";
const EMAIL = "rabindra1816@gmail.com";
const PHONE = "+977 9816773397";
const LOCATION = "Siraha, Lahan, Nepal";
const avatarUrl = "/my-image.png";
const RESUME_URL = "#"; // optional: link to your PDF resume
const GITHUB = "https://github.com/Rowbeendra";
const LINKEDIN = "#"; // add your profile
const INSTAGRAM = "#";

const SKILLS = [
  { group: "Programming", items: ["C", "Java (OOP)", "JavaScript", "PHP"] },
  { group: "Databases", items: ["DBMS", "MySQL"] },
  { group: "Web", items: ["HTML", "CSS", "React (Next.js)"] },
  { group: "Tools", items: ["Git", "VS Code", "Photoshop", "Illustrator"] },
  { group: "Soft Skills", items: ["Project Management", "Collaboration", "Problem Solving"] },
  { group: "Languages", items: ["English", "Nepali", "Hindi", "Maithili"] },
];

const PROJECTS = [
  {
    title: "Nexus Global Visa",
    blurb:
      "Visa & immigration services website — professional design, clean IA, SEO foundations.",
    stack: ["PHP", "MySQL", "HTML", "CSS"],
    links: { live: "#", code: "#" },
    img: "/nexus-global.png",
    badge: "Pro Site",
  },
  {
    title: "Advance Tourism Platform",
    blurb:
      "Smart travel planner with route optimization and clean UX for fast planning.",
    stack: ["PHP", "MySQL", "Google Maps API"],
    links: { case: "#" },
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80&auto=format&fit=crop",
    badge: "Case Study",
  },
  {
    title: "Online Gadget Shop (E‑commerce)",
    blurb:
      "Authentication, product catalog, cart & checkout — modern e‑commerce starter.",
    stack: ["PHP", "MySQL", "JavaScript"],
    links: { live: "#", code: "#" },
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&q=80&auto=format&fit=crop",
    badge: "E‑com",
  },
  {
    title: "Online Voting System",
    blurb:
      "Secure registration, voting, and results with encryption & auth.",
    stack: ["PHP", "MySQL", "HTML", "JavaScript"],
    links: { code: "https://github.com/Rowbeendra/Online-Voting-Syste" },
    img: "https://images.unsplash.com/photo-1475724017904-b712052c192a?w=900&q=80&auto=format&fit=crop",
    badge: "Open Source",
  },
];

const EXPERIENCE = [
  {
    role: "Web Developer, Database Administrator",
    company: "Deerwalk Services",
    period: "Mar 2023 – Feb 2024",
    points: [
      "Shipped IT solutions with clean UI and reliable DB design.",
      "Owned database management and performance tuning.",
      "Solved business problems end‑to‑end with a calm, collaborative approach.",
    ],
  },
  {
    role: "Record Manager",
    company: "Pilgrims Book House",
    period: "Jun 2021 – Dec 2022",
    points: [
      "Managed digital records & inventory to streamline operations.",
      "Improved accuracy, organization, and retrieval speed.",
    ],
  },
];

const CERTS = [
  { title: "Graphics Designing (Photoshop & Illustrator)", year: "—", note: "Visual content: logos, posters, digital art" },
  { title: "Hardware & Robotics Workshop", year: "—", note: "Circuit design, programming, integration" },
  { title: "Video Editing", year: "—", note: "Storytelling and content editing" },
  { title: "AI Training", year: "—", note: "Applied AI for real use‑cases" },
  { title: "Project Management", year: "—", note: "Team workflow optimization" },
];

const SERVICES = [
  {
    title: "Web Development",
    lines: ["Portfolio & Business websites", "E‑commerce", "Performance & SEO"],
  },
  {
    title: "UI/UX & Graphics",
    lines: ["Wireframes & prototypes", "Brand assets", "Clean, modern visuals"],
  },
  {
    title: "Digital Marketing",
    lines: ["SEO & basic analytics", "Content strategy", "Social presence"],
  },
  {
    title: "Consulting",
    lines: ["Project scoping", "DB design", "Roadmaps & handover"],
  },
];

const SOCIALS = [
  { label: "GitHub", href: GITHUB },
  { label: "LinkedIn", href: LINKEDIN },
  { label: "Instagram", href: INSTAGRAM },
];

const FORM_ACTION = ""; // e.g., "https://formspree.io/f/xxxxxx" or leave empty to fallback to mailto

// ------------------------
// UI Helpers
// ------------------------
interface BadgeProps {
  children: React.ReactNode;
}

const Badge = ({ children }: BadgeProps) => (
  <span className="inline-flex items-center rounded-full border border-teal-500/30 bg-teal-500/10 px-2 py-0.5 text-xs font-medium text-teal-300">
    {children}
  </span>
);

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  subtle?: boolean;
}

const Section = ({ id, title, children, subtle = false }: SectionProps) => (
  <section id={id} className={`${subtle ? "bg-slate-900/30" : "bg-transparent"} relative py-20` }>
    <div className="mx-auto w-full max-w-6xl px-6">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

interface ExternalProps {
  href: string;
  children: React.ReactNode;
}

const External = ({ href, children }: ExternalProps) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-slate-200 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
  >
    {children} ↗
  </a>
);

// Simple icon set (inline SVG) to avoid external deps
const Icon = {
  Mail: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" {...props}>
      <path d="M4 6h16v12H4z" />
      <path d="M22 6 12 13 2 6" />
    </svg>
  ),
  Phone: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" {...props}>
      <path d="M22 16.92V21a1 1 0 0 1-1.09 1 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 3 3.09 1 1 0 0 1 4 2h4.09A1 1 0 0 1 9 2.72l1.23 2.73a1 1 0 0 1-.27 1.2L8.91 8.09a16 16 0 0 0 6 6l1.44-1.05a1 1 0 0 1 1.2-.27L21.28 14a1 1 0 0 1 .72.91Z" />
    </svg>
  ),
  Location: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" {...props}>
      <path d="M12 22s8-4.5 8-11a8 8 0 1 0-16 0c0 6.5 8 11 8 11Z" />
      <circle cx="12" cy="11" r="3" />
    </svg>
  ),
};

// ------------------------
// Page component
// ------------------------
export default function Portfolio() {
  return (
    <main className="min-h-screen scroll-smooth bg-[radial-gradient(1200px_600px_at_70%_10%,rgba(100,255,218,0.07),transparent_60%),radial-gradient(900px_500px_at_0%_40%,rgba(59,130,246,0.06),transparent_60%)] bg-slate-950 text-slate-200">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-wide text-teal-300">{NAME.split(" ")[0]}.dev</a>
          <nav className="hidden gap-6 text-sm md:flex">
            {[
              ["About", "about"],
              ["Projects", "projects"],
              ["Experience", "experience"],
              ["Certificates", "certs"],
              ["Services", "services"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="text-slate-300 hover:text-white">
                {label}
              </a>
            ))}
          </nav>
          <a href={`mailto:${EMAIL}`} className="rounded-full bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-300 ring-1 ring-inset ring-teal-400/30 hover:bg-teal-500/20">Hire Me</a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-2">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-teal-300/80">Frontend • Databases • UI/UX</p>
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Hi, I&apos;m {NAME}
            </h1>
            <p className="mt-4 text-lg text-slate-300">{ROLE}</p>
            <p className="mt-3 max-w-prose text-slate-400">{TAGLINE}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100">View My Work</a>
              {RESUME_URL !== "#" && (
                <a href={RESUME_URL} className="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/5">Download CV</a>
              )}
              <a href={`mailto:${EMAIL}`} className="rounded-xl border border-teal-400/30 bg-teal-500/10 px-4 py-2 text-sm font-semibold text-teal-300 hover:bg-teal-500/20">Contact Me</a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-300/90">
              <span className="inline-flex items-center gap-2"><Icon.Mail /> {EMAIL}</span>
              <span className="inline-flex items-center gap-2"><Icon.Phone /> {PHONE}</span>
              <span className="inline-flex items-center gap-2"><Icon.Location /> {LOCATION}</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-teal-500/10 via-indigo-500/10 to-fuchsia-500/10 blur-2xl" />
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/40">
              <img src={avatarUrl} alt="Rabindra headshot" className="h-full w-full object-cover" />
            </div>
            <p className="mt-3 text-center text-xs text-slate-400">Passionate about technology, driven to innovate, and always learning.</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About Me" subtle>
        <div className="grid gap-10 md:grid-cols-2">
                      <p className="text-slate-300">
              I&apos;m a BCA student from Nepal who loves turning ideas into fast, accessible web
              experiences. I combine clean frontend engineering with thoughtful database and
              information design. I&apos;ve built projects across tourism, e‑commerce, and civic tech.
            </p>
          <div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {SKILLS.map((s) => (
                <div key={s.group} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <h3 className="text-sm font-semibold text-white">{s.group}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {s.items.map((x) => (
                      <span key={x} className="rounded-full bg-slate-800/80 px-2 py-0.5 text-xs text-slate-200 ring-1 ring-white/10">{x}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects">
        <div className="mb-6 text-sm text-slate-400">Selected work. More on request.</div>
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative">
                <img src={p.img} alt={p.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                <div className="absolute left-3 top-3"><Badge>{p.badge}</Badge></div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{p.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="rounded-full bg-slate-800/80 px-2 py-0.5 text-xs text-slate-200 ring-1 ring-white/10">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {p.links.live && <External href={p.links.live}>Live</External>}
                  {p.links.case && <External href={p.links.case}>Case Study</External>}
                  {p.links.code && <External href={p.links.code}>Code</External>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" title="Experience" subtle>
        <ol className="relative border-l border-white/10 pl-6">
          {EXPERIENCE.map((e, i) => (
            <li key={i} className="mb-10">
              <div className="absolute -left-2 mt-1 size-3 rounded-full bg-teal-400/80 ring-4 ring-slate-900" />
              <h3 className="text-base font-semibold text-white">{e.role}</h3>
              <p className="text-sm text-teal-300">{e.company} • {e.period}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                {e.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>

      {/* CERTIFICATES */}
      <Section id="certs" title="Certificates & Achievements">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTS.map((c) => (
            <div key={c.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-semibold text-white">{c.title}</h3>
                <span className="text-xs text-slate-400">{c.year}</span>
              </div>
              <p className="mt-1 text-sm text-slate-300">{c.note}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" title="Services" subtle>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5">
              <h3 className="text-base font-semibold text-white">{s.title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                {s.lines.map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact Me">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-sm font-semibold text-white">Let&apos;s build something</h3>
            <p className="mt-2 text-sm text-slate-300">
              Prefer email? Reach me at <a className="underline decoration-teal-400/40 underline-offset-4 hover:text-white" href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-200 hover:bg-white/5">{s.label}</a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            {FORM_ACTION ? (
              <form action={FORM_ACTION} method="POST" className="grid gap-3">
                <input name="name" placeholder="Your Name" className="rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-teal-500/40" />
                <input name="email" type="email" placeholder="Your Email" className="rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-teal-500/40" />
                <textarea name="message" rows={5} placeholder="Tell me about your project" className="rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-teal-500/40" />
                <button className="mt-1 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100">Send</button>
              </form>
            ) : (
              <div className="text-sm text-slate-300">
                <p className="mb-3">Quick contact (no form backend configured):</p>
                <div className="flex flex-wrap gap-3">
                  <a href={`mailto:${EMAIL}`} className="rounded-xl bg-white px-4 py-2 font-semibold text-slate-900">Email Me</a>
                  <a href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`} className="rounded-xl border border-white/10 px-4 py-2 font-semibold text-white hover:bg-white/5">Call</a>
                  <a href={RESUME_URL} className="rounded-xl border border-white/10 px-4 py-2 font-semibold text-white hover:bg-white/5">Download CV</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} {NAME}. Built with React & Tailwind. Deployed on GitHub Pages.
            <span className="ml-2">Typeface: Inter. Palette: midnight w/ teal accents.</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
