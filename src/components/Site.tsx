"use client";
import { useRef, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Mail, Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import {
  approach,
  beyond,
  contact,
  help,
  journey,
  nav,
  open,
  projects,
  reasons,
  repos,
  stack,
  type Project,
} from "./data";

const mono = "font-mono";

function Heading({
  path,
  title,
  sub,
}: {
  path: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-10 md:mb-14">
      <p className={`${mono} text-sm text-acc`}>{path}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {sub && (
        <p className="mt-4 max-w-2xl text-base text-mute md:text-lg">{sub}</p>
      )}
    </div>
  );
}
const Section = ({ id, children }: { id: string; children: ReactNode }) => (
  <section
    id={id}
    className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28"
  >
    {children}
  </section>
);
const Chip = ({ children }: { children: ReactNode }) => (
  <span
    className={`${mono} rounded border border-line px-2 py-1 text-xs text-mute`}
  >
    {children}
  </span>
);

function Header() {
  const [o, setO] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#home" className={`${mono} text-sm font-semibold`}>
          seif<span className="text-acc">@</span>portfolio
        </a>
        <nav aria-label="Primary" className="hidden gap-6 lg:flex">
          {nav.map(([id, l]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${mono} text-xs uppercase tracking-wider text-mute transition-colors hover:text-acc`}
            >
              {l}
            </a>
          ))}
        </nav>
        <button
          className="p-2 lg:hidden"
          aria-label={o ? "Close menu" : "Open menu"}
          aria-expanded={o}
          onClick={() => setO(!o)}
        >
          {o ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {o && (
        <nav
          aria-label="Mobile"
          className="border-t border-line bg-bg px-5 pb-4 lg:hidden"
        >
          {nav.map(([id, l]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setO(false)}
              className={`${mono} block border-b border-line py-3 text-sm uppercase tracking-wider text-mute`}
            >
              {l}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function ContactLinks({ className = "" }: { className?: string }) {
  const cls =
    "flex h-11 w-11 items-center justify-center rounded border border-line text-mute transition-colors hover:border-acc hover:text-acc";
  return (
    <div className={`flex gap-3 ${className}`}>
      <a
        className={cls}
        href={contact.whatsapp}
        aria-label="WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsapp size={20} />
      </a>
      <a className={cls} href={`mailto:${contact.email}`} aria-label="Email">
        <Mail size={20} />
      </a>
      <a
        className={cls}
        href={contact.linkedin}
        aria-label="LinkedIn"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        className={cls}
        href={contact.github}
        aria-label="GitHub"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub size={20} />
      </a>
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.88]);
  const opacity = useTransform(scrollYProgress, [0.25, 1], [1, reduce ? 1 : 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);

  const stars = [
    { left: "8%", top: "18%", size: 3, delay: 0.1 },
    { left: "18%", top: "62%", size: 2, delay: 0.8 },
    { left: "24%", top: "38%", size: 4, delay: 1.4 },
    { left: "32%", top: "22%", size: 2, delay: 2.1 },
    { left: "42%", top: "48%", size: 5, delay: 0.5 },
    { left: "52%", top: "72%", size: 3, delay: 1.9 },
    { left: "58%", top: "28%", size: 4, delay: 2.8 },
    { left: "66%", top: "18%", size: 2, delay: 1.2 },
    { left: "74%", top: "56%", size: 3, delay: 0.3 },
    { left: "82%", top: "34%", size: 5, delay: 1.6 },
    { left: "88%", top: "64%", size: 3, delay: 2.4 },
    { left: "13%", top: "78%", size: 2, delay: 1.1 },
  ];

  return (
    <section id="home" ref={ref} className="relative min-h-[100svh]">
      <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden">
        <motion.div
          style={{ y: gridY }}
          className="hero-shell absolute inset-0"
          aria-hidden
        />
        <motion.div
          style={{ y: gridY }}
          className="hero-grid absolute inset-0 opacity-80"
          aria-hidden
        />

        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          {stars.map((star, index) => (
            <motion.span
              key={`${star.left}-${star.top}`}
              initial={{ opacity: 0.2, scale: 0.8 }}
              animate={{ opacity: [0.22, 1, 0.3], scale: [0.8, 1.5, 0.8] }}
              transition={{
                duration: 4 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: star.delay,
              }}
              className="absolute rounded-full bg-white/90 shadow-[0_0_18px_rgba(125,249,205,0.9)]"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
              }}
            />
          ))}
        </div>

        <motion.div
          style={{ scale, opacity, y }}
          className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-20 md:px-8"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-acc/30 bg-white/3 px-3 py-1.5 shadow-[0_0_30px_rgba(125,249,205,0.1)] backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-acc shadow-[0_0_18px_rgba(125,249,205,0.8)]" />
            <p
              className={`${mono} text-[10px] uppercase tracking-[0.25em] text-acc`}
            >
              available for new opportunities
            </p>
          </div>

          <p className={`${mono} text-sm text-acc`}>~/seif $ whoami</p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-[2.7rem] font-semibold leading-[0.96] tracking-[-0.065em] sm:text-6xl md:text-[7.5rem]"
          >
            SEIF BEN
            <br />
            ABDALLAH
          </motion.h1>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-mute md:text-base">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
              Technology &amp; Business Development
            </span>
            <span className="rounded-full border border-acc/30 bg-acc/5 px-3 py-1.5 text-acc">
              Software Engineer &amp; Digital Solutions Builder
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-base text-mute md:text-xl">
            I build practical digital products and help businesses turn ideas,
            processes and opportunities into technology-driven solutions.
          </p>

          <ul
            className={`${mono} mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.2em]`}
          >
            {[
              "Software Engineering",
              "Digital Solutions",
              "B2B Partnerships",
            ].map((k) => (
              <li key={k}>
                <Chip>{k}</Chip>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className={`${mono} rounded-full bg-acc px-6 py-3.5 text-center text-sm font-semibold text-[#04110a] shadow-[0_0_30px_rgba(125,249,205,0.28)] transition-transform hover:scale-[1.03]`}
            >
              VIEW MY WORK
            </a>
            <a
              href="#contact"
              className={`${mono} rounded-full border border-acc/30 bg-white/[0.02] px-6 py-3.5 text-center text-sm font-semibold text-acc transition-colors hover:bg-acc/10`}
            >
              LET&apos;S CONNECT
            </a>
          </div>

          <ContactLinks className="mt-7" />
        </motion.div>
      </div>
    </section>
  );
}

function WhatIDo() {
  return (
    <Section id="what">
      <Heading path="~/help" title="What I can help with" />
      <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {help.map(([t, d]) => (
          <div key={t} className="bg-panel p-6">
            <h3 className={`${mono} text-sm uppercase tracking-wider text-acc`}>
              {t}
            </h3>
            <p className="mt-3 text-mute">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const [o, setO] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.55"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0.3, 1]);
  return (
    <motion.article
      ref={ref}
      style={{ scale, opacity }}
      className="rounded-lg border border-line bg-panel"
    >
      <div className="p-6 md:p-8">
        <p className={`${mono} text-xs text-acc`}>{p.tag}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
          {p.name}
        </h3>
        <p className="mt-3 max-w-2xl text-mute">{p.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button
            onClick={() => setO(!o)}
            aria-expanded={o}
            className={`${mono} inline-flex items-center gap-2 text-sm text-acc`}
          >
            {o ? "Hide details" : "Read case study"}{" "}
            <ChevronDown
              size={16}
              className={`transition-transform ${o ? "rotate-180" : ""}`}
            />
          </button>
          {p.links.map(([l, h]) => (
            <a
              key={l}
              href={h}
              target="_blank"
              rel="noreferrer"
              className={`${mono} inline-flex items-center gap-1 text-sm text-mute hover:text-acc`}
            >
              {l} <ExternalLink size={13} />
            </a>
          ))}
        </div>
      </div>
      <AnimatePresence initial={false}>
        {o && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="grid gap-6 border-t border-line p-6 md:grid-cols-2 md:p-8">
              {p.sections.map(([h, b]) => (
                <div key={h}>
                  <h4
                    className={`${mono} text-xs uppercase tracking-wider text-acc`}
                  >
                    {h}
                  </h4>
                  {Array.isArray(b) ? (
                    <ul className="mt-2 space-y-1 text-mute">
                      {b.map((i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-acc">›</span>
                          {i}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-mute">{b}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function Work() {
  return (
    <Section id="work">
      <Heading
        path="~/work"
        title="Selected work"
        sub="Real projects I have built. Open a case study for the details."
      />
      <div className="space-y-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
      <div className="mt-14">
        <h3 className={`${mono} text-sm text-acc`}>
          ~/github · selected repositories
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {repos.map(([n, d, l, h]) => (
            <a
              key={n}
              href={h}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-line p-5 transition-colors hover:border-acc"
            >
              <p className={`${mono} break-all text-sm`}>{n}</p>
              <p className="mt-2 text-sm text-mute">{d}</p>
              <p className={`${mono} mt-3 text-xs text-acc`}>{l}</p>
            </a>
          ))}
        </div>
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className={`${mono} mt-6 inline-flex items-center gap-2 rounded border border-acc px-5 py-3 text-sm font-semibold text-acc hover:bg-acc/10`}
        >
          <FaGithub /> VIEW GITHUB
        </a>
      </div>
    </Section>
  );
}

function Business() {
  return (
    <Section id="business">
      <Heading
        path="~/business"
        title="BEYOND CODE"
        sub="Technology is only valuable when it solves a real business problem."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {beyond.map(([n, t, k, d]) => (
          <div key={n} className="rounded-lg border border-line bg-panel p-6">
            <p className={`${mono} text-xs text-acc`}>{n}</p>
            <h3 className="mt-3 text-xl font-semibold uppercase tracking-tight">
              {t}
            </h3>
            <p className={`${mono} mt-3 text-xs text-mute`}>{k}</p>
            <p className="mt-4 text-mute">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Word({
  w,
  p,
  r,
}: {
  w: string;
  p: MotionValue<number>;
  r: [number, number];
}) {
  const opacity = useTransform(p, r, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {w}
    </motion.span>
  );
}
function About() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.6"],
  });
  const lead =
    "I'm a software engineer focused on building practical digital products and exploring opportunities where technology and business intersect.";
  const words = lead.split(" ");
  return (
    <Section id="about">
      <Heading path="~/about" title="About" />
      <div ref={ref}>
        <p className="max-w-4xl text-2xl font-medium leading-snug sm:text-3xl md:text-4xl">
          {words.map((w, i) =>
            reduce ? (
              <span key={i} className="mr-[0.25em] inline-block">
                {w}
              </span>
            ) : (
              <Word
                key={i}
                w={w}
                p={scrollYProgress}
                r={[i / words.length, Math.min(1, (i + 2) / words.length)]}
              />
            ),
          )}
        </p>
      </div>
      <div className="mt-10 grid max-w-4xl gap-6 text-mute md:grid-cols-2 md:text-lg">
        <p>
          My background is in software engineering, while my interests extend
          into digital solutions, business development and B2B partnerships.
        </p>
        <p>
          I enjoy understanding real business problems, designing practical
          solutions and turning ideas into useful digital products.
        </p>
      </div>
    </Section>
  );
}

function Approach() {
  return (
    <Section id="approach">
      <Heading path="~/approach" title="HOW I WORK" />
      <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-5">
        {approach.map(([t, d], i) => (
          <li key={t} className="bg-panel p-6">
            <p className={`${mono} text-xs text-acc`}>0{i + 1}</p>
            <h3 className="mt-3 font-semibold uppercase tracking-tight">{t}</h3>
            <p className="mt-3 text-sm text-mute">{d}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Journey() {
  return (
    <Section id="experience">
      <Heading path="~/experience" title="MY JOURNEY" />
      <ol className="relative ml-2 border-l border-line">
        {journey.map(([k, t, d]) => (
          <li key={k} className="relative pb-10 pl-8 last:pb-0">
            <span
              className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-acc"
              aria-hidden
            />
            <p className={`${mono} text-xs uppercase tracking-wider text-acc`}>
              {k}
            </p>
            <h3 className="mt-1 text-xl font-semibold">{t}</h3>
            <p className="mt-2 max-w-2xl text-mute">{d}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Tech() {
  return (
    <Section id="tech">
      <Heading
        path="~/stack"
        title="Technical expertise"
        sub="Grouped by how I have actually used each technology."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {stack.map(([cat, items]) => (
          <div key={cat} className="rounded-lg border border-line bg-panel p-6">
            <h3 className={`${mono} text-sm uppercase tracking-wider text-acc`}>
              {cat}
            </h3>
            <ul className="mt-4 divide-y divide-line">
              {items.map(([n, l]) => (
                <li
                  key={n}
                  className="flex items-center justify-between py-2.5 text-sm"
                >
                  <span>{n}</span>
                  <span
                    className={`${mono} text-xs ${l === "Project experience" ? "text-acc" : "text-mute"}`}
                  >
                    {l}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Open() {
  return (
    <Section id="open">
      <Heading path="~/open" title="OPEN TO THE RIGHT OPPORTUNITIES" />
      <div className="grid gap-4 md:grid-cols-3">
        {open.map(([t, d]) => (
          <div key={t} className="rounded-lg border border-line p-6">
            <h3 className={`${mono} text-sm uppercase tracking-wider text-acc`}>
              {t}
            </h3>
            <p className="mt-3 text-mute">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const [reason, setReason] = useState(reasons[0]);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${reason} — from ${name}`);
    const body = encodeURIComponent(`${msg}\n\n— ${name}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };
  const field =
    "mt-2 w-full rounded border border-line bg-panel px-4 py-3 text-base text-fg placeholder:text-mute/60";
  return (
    <Section id="contact">
      <Heading
        path="~/contact"
        title="LET'S CONNECT"
        sub="Open to software engineering opportunities, digital projects, B2B partnerships and interesting business opportunities."
      />
      <div className="grid gap-10 md:grid-cols-2">
        <ul className="space-y-3">
          {[
            [
              <FaWhatsapp key="w" />,
              "WhatsApp",
              contact.whatsappLabel,
              contact.whatsapp,
            ],
            [
              <Mail key="m" size={16} />,
              "Email",
              contact.email,
              `mailto:${contact.email}`,
            ],
            [
              <FaLinkedin key="l" />,
              "LinkedIn",
              "seif-ben-abdallah",
              contact.linkedin,
            ],
            [<FaGithub key="g" />, "GitHub", "SEIF0708", contact.github],
          ].map(([icon, l, v, h]) => (
            <li key={l as string}>
              <a
                href={h as string}
                className="flex items-center gap-4 rounded-lg border border-line p-4 transition-colors hover:border-acc"
                target={
                  typeof h === "string" && h.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  typeof h === "string" && h.startsWith("http")
                    ? "noreferrer"
                    : undefined
                }
              >
                <span className="text-acc">{icon}</span>
                <span>
                  <span className={`${mono} block text-xs text-mute`}>
                    {l as string}
                  </span>
                  <span className="break-all">{v as string}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <form onSubmit={submit} className="space-y-5">
          <label className="block text-sm">
            I&apos;m interested in
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className={field}
            >
              {reasons.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            Your name
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={field}
              autoComplete="name"
            />
          </label>
          <label className="block text-sm">
            Message
            <textarea
              required
              rows={4}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              className={field}
            />
          </label>
          <button
            className={`${mono} w-full rounded bg-acc px-6 py-3.5 text-sm font-semibold text-[#04110a]`}
          >
            OPEN IN EMAIL APP
          </button>
          <p className="text-xs text-mute">
            This opens your email app with the message ready to send.
          </p>
        </form>
      </div>
    </Section>
  );
}

export default function Site() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatIDo />
        <Work />
        <Business />
        <About />
        <Approach />
        <Journey />
        <Tech />
        <Open />
        <Contact />
      </main>
      <footer
        className={`${mono} border-t border-line px-5 py-8 text-center text-xs text-mute`}
      >
        © {new Date().getFullYear()} Saif Ben Abdallah
      </footer>
    </>
  );
}
