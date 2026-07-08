import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroTuscany from "@/assets/hero-tuscany.jpg";
import caseBali from "@/assets/case-bali.jpg";
import caseLondon from "@/assets/case-london.jpg";
import caseTuscany from "@/assets/case-tuscany.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

// Real-ish coordinates → projected into a 1000x500 equirectangular map viewbox.
const project = (lat: number, lng: number) => ({
  x: ((lng + 180) / 360) * 1000,
  y: ((90 - lat) / 180) * 500,
});

const PINS = [
  { id: "tus", label: "Val d'Orcia", type: "Wedding", lat: 43.07, lng: 11.61 },
  { id: "bal", label: "Ubud", type: "Retreat", lat: -8.51, lng: 115.26 },
  { id: "lon", label: "London", type: "Summit", lat: 51.51, lng: -0.13 },
  { id: "sgp", label: "Marina Bay", type: "Gala", lat: 1.28, lng: 103.86 },
  { id: "isl", label: "Höfn", type: "Cercle", lat: 64.25, lng: -15.20 },
  { id: "vgs", label: "Nobu Vegas", type: "Bachelor", lat: 36.12, lng: -115.17 },
  { id: "tky", label: "Aoyama", type: "Product Launch", lat: 35.66, lng: 139.71 },
  { id: "rio", label: "Ipanema", type: "Concert", lat: -22.98, lng: -43.20 },
  { id: "nyc", label: "Manhattan", type: "IPO Dinner", lat: 40.75, lng: -73.99 },
  { id: "mar", label: "Marrakech", type: "Weekend", lat: 31.63, lng: -7.99 },
];

const LEDGER = [
  "SIENA · Villa Cetinale · 180 guests · orchestrating",
  "SINGAPORE · Marina Bay Summit · 1,200 delegates · sealed",
  "REYKJAVÍK · Cercle set · Icelandic Highlands · in motion",
  "LAS VEGAS · Bachelor suite · Nobu · sealed",
  "AOYAMA · Product launch · 400 press · composing",
  "TUSCANY · Marchesi nuptials · 6 vendors locked · live",
  "IPANEMA · Beach concert · 30k capacity · negotiating",
  "MARRAKECH · Riad weekend · 24 guests · confirmed",
];

const STRATA = [
  { code: "I", name: "Coordination", body: "One conductor. Every hand on the score." },
  { code: "II", name: "Ground", body: "Villas, estates, resorts, halls, event floors." },
  { code: "III", name: "Movement", body: "Charter, commercial, transfer — one arrival." },
  { code: "IV", name: "Access", body: "Boxes, VIP, backstage, front row, tomorrow." },
  { code: "V", name: "Vendors", body: "Cuisine, lens, sound, décor, production." },
  { code: "VI", name: "Membership", body: "Club. Loyalty. The gates that don't post rates." },
  { code: "VII", name: "Cover", body: "Event liability. Traveler protection. To enterprise scale." },
];

const ARCHETYPES = [
  {
    image: caseTuscany,
    tag: "PRIVATE",
    city: "SIENA",
    coord: "43.07°N · 11.61°E",
    title: "The Marchesi Nuptials",
    line: "Villa Cetinale · 180 guests · 6 strata · 11 vendors · one weekend.",
    yearRoman: "MMXXVI",
  },
  {
    image: caseBali,
    tag: "CORPORATE",
    city: "UBUD",
    coord: "8.51°S · 115.26°E",
    title: "The Ubud Strategy Retreat",
    line: "Bambu private compound · 45 executives · 7 strata · one narrative.",
    yearRoman: "MMXXVI",
  },
  {
    image: caseLondon,
    tag: "ENTERPRISE",
    city: "LONDON",
    coord: "51.51°N · 0.13°W",
    title: "Sovereign Fintech Summit",
    line: "Old Billingsgate · 1,200 delegates · 4 strata · zero seams.",
    yearRoman: "MMXXVI",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-canvas text-ink font-sans selection:bg-accent/30 selection:text-canvas overflow-x-hidden">
      <Nav />
      <Atlas />
      <Ledger />
      <Strata />
      <Composition />
      <Archetypes />
      <Manifesto />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 mix-blend-difference">
      <div className="px-6 md:px-10 h-20 flex items-center justify-between text-ink">
        <div className="flex items-baseline gap-2">
          <span className="font-serif text-3xl italic tracking-tight leading-none">Planviry</span>
          <span className="text-[9px] tracking-[0.3em] uppercase opacity-60">∞ Atlas</span>
        </div>
        <div className="hidden md:flex gap-10 text-[10px] font-medium tracking-[0.35em] uppercase">
          <a href="#atlas">Atlas</a>
          <a href="#strata">Strata</a>
          <a href="#compose">Compose</a>
          <a href="#archetypes">Archive</a>
        </div>
        <a href="#compose" className="text-[10px] font-medium tracking-[0.3em] uppercase flex items-center gap-3">
          <span className="size-1.5 rounded-full bg-accent animate-pulse" />
          Request Access
        </a>
      </div>
    </nav>
  );
}

/* ─────────── ATLAS HERO ─────────── */
function Atlas() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % PINS.length), 2400);
    return () => clearInterval(t);
  }, []);
  const focus = PINS[active];
  return (
    <section id="atlas" className="relative min-h-screen w-full pt-24 pb-16">
      {/* Dotted atlas backdrop */}
      <div className="absolute inset-0 z-0">
        <DottedAtlas activeId={focus.id} />
        <div className="absolute inset-0 bg-gradient-to-b from-canvas via-canvas/40 to-canvas" />
      </div>

      <div className="relative z-10 px-6 md:px-10">
        {/* Meta strip */}
        <div className="flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-ink-muted mb-16">
          <span>Planviry / Atlas 26.03</span>
          <span className="hidden md:inline">A single canvas for any event on earth</span>
          <span>42 Cities · 7 Strata · 1 Score</span>
        </div>

        {/* Massive kinetic headline */}
        <div className="relative">
          <h1 className="font-serif leading-[0.82] tracking-[-0.03em]">
            <span className="block text-[22vw] md:text-[16vw]">Any Event.</span>
            <span className="block text-[22vw] md:text-[16vw] pl-[8vw] italic text-ink-muted">Anywhere</span>
            <span className="block text-[22vw] md:text-[16vw] pl-[24vw] -mt-[2vw]">on Earth.</span>
          </h1>
        </div>

        {/* Focus card floating right */}
        <div className="mt-12 grid md:grid-cols-[1fr_auto] gap-10 items-end">
          <p className="max-w-[46ch] text-lg text-ink-muted text-pretty">
            Planviry is not a booking site. It is a global operating system for
            events — one instrument that composes venue, travel, vendors, tickets
            and cover into a single, unbreakable score.
          </p>
          <div className="border-l border-ink/15 pl-6 min-w-[280px]">
            <div className="text-[10px] tracking-[0.35em] uppercase text-accent mb-3 flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-accent animate-pulse" /> Now composing
            </div>
            <div className="font-serif text-3xl italic">{focus.label}</div>
            <div className="text-xs text-ink-muted mt-1 tabular-nums">
              {focus.type} · {focus.lat.toFixed(2)}°, {focus.lng.toFixed(2)}°
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DottedAtlas({ activeId }: { activeId: string }) {
  // Simple dot cloud approximating continent silhouettes (procedural, no data file).
  const dots: { x: number; y: number }[] = [];
  for (let x = 0; x < 1000; x += 12) {
    for (let y = 0; y < 500; y += 12) {
      const inLand = landMask(x, y);
      if (inLand) dots.push({ x, y });
    }
  }
  return (
    <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={1} className="fill-ink/25" />
      ))}
      {PINS.map((p) => {
        const { x, y } = project(p.lat, p.lng);
        const on = p.id === activeId;
        return (
          <g key={p.id} transform={`translate(${x} ${y})`}>
            {on && <circle r={14} className="fill-accent/20">
              <animate attributeName="r" values="6;22;6" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0;0.6" dur="2.4s" repeatCount="indefinite" />
            </circle>}
            <circle r={on ? 3.2 : 1.8} className={on ? "fill-accent" : "fill-ink/70"} />
            {on && (
              <text x={8} y={-6} className="fill-ink font-serif italic" style={{ fontSize: 10 }}>
                {p.label}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

// Rough landmask so continents feel recognizable without a data file.
function landMask(x: number, y: number) {
  const shapes: [number, number, number, number][] = [
    // [cx, cy, rx, ry]  -- crude continent blobs on equirectangular 1000x500
    [180, 160, 90, 60],   // N America west
    [260, 180, 90, 80],   // N America east
    [290, 260, 40, 50],   // C America
    [320, 360, 55, 90],   // S America
    [500, 170, 70, 55],   // Europe
    [560, 250, 110, 90],  // Africa
    [660, 180, 130, 90],  // Asia
    [780, 250, 60, 40],   // SE Asia
    [820, 360, 55, 30],   // Australia
    [500, 470, 250, 30],  // Antarctica strip
  ];
  for (const [cx, cy, rx, ry] of shapes) {
    const dx = (x - cx) / rx, dy = (y - cy) / ry;
    if (dx * dx + dy * dy <= 1) return true;
  }
  return false;
}

/* ─────────── LEDGER (marquee) ─────────── */
function Ledger() {
  const row = [...LEDGER, ...LEDGER];
  return (
    <section className="relative border-y border-ink/10 bg-stone/30 overflow-hidden">
      <div className="flex gap-16 py-5 whitespace-nowrap animate-[ticker_60s_linear_infinite] will-change-transform">
        {row.map((l, i) => (
          <span key={i} className="text-[11px] tracking-[0.3em] uppercase text-ink-muted">
            <span className="text-accent mr-3">◆</span>{l}
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </section>
  );
}

/* ─────────── STRATA (horizontal ledger, not a stack of boxes) ─────────── */
function Strata() {
  return (
    <section id="strata" className="relative py-32 px-6 md:px-10">
      <div className="grid md:grid-cols-[auto_1fr] gap-10 items-end mb-20">
        <h2 className="font-serif text-[14vw] md:text-[9vw] leading-[0.82] tracking-[-0.03em]">
          The<br /><span className="italic pl-[3vw]">Seven Strata.</span>
        </h2>
        <p className="max-w-[38ch] text-ink-muted text-lg pb-4">
          A single event is a stack of decisions. Planviry names seven, then
          collapses them into one score. Read it top-to-bottom. Play it as you like.
        </p>
      </div>

      {/* horizontal rail */}
      <div className="relative">
        <div className="absolute left-0 right-0 top-1/2 h-px bg-ink/15" />
        <div className="grid grid-cols-7 relative">
          {STRATA.map((s, i) => (
            <div key={s.code} className="relative pt-4 pb-6 group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-ink group-hover:bg-accent group-hover:scale-150 transition-all" />
              <div className={`text-center ${i % 2 === 0 ? "mb-24" : "mt-24"}`}>
                <div className="font-serif text-3xl italic text-accent">{s.code}</div>
                <div className="text-[10px] tracking-[0.3em] uppercase mt-2">{s.name}</div>
                <div className="text-[11px] text-ink-muted mt-2 max-w-[16ch] mx-auto leading-snug">
                  {s.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── COMPOSITION (constellation, not cards in a column) ─────────── */
function Composition() {
  const nodes = [
    { x: 8, y: 30, label: "Ground", title: "Aman Venice · Grand Canal Suite", meta: "4 nights · 2 guests" },
    { x: 30, y: 62, label: "Movement", title: "Embraer 1000E · LCY → VCE", meta: "Sat 14 Jun · 09:20 UTC" },
    { x: 54, y: 22, label: "Vendors", title: "L'Effervescence · Private catering", meta: "Tasting menu · 42 covers" },
    { x: 72, y: 68, label: "Access", title: "Teatro La Fenice · Palco Reale", meta: "Puccini · La Bohème · 20:00" },
    { x: 92, y: 34, label: "Cover", title: "Enterprise event liability", meta: "$10M · zero deductible" },
  ];
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section id="compose" className="relative py-32 bg-ink text-canvas overflow-hidden">
      <div className="px-6 md:px-10 mb-20 grid md:grid-cols-[1.2fr_1fr] gap-10 items-end">
        <h2 className="font-serif text-[14vw] md:text-[8vw] leading-[0.82] tracking-[-0.03em]">
          One score.<br />
          <span className="italic text-canvas/50">Every seat.</span>
        </h2>
        <p className="max-w-[46ch] text-canvas/60 text-lg pb-4">
          Watch a real event compose itself — a Venice weekend, five strata,
          drawn as constellation. Each node negotiated, priced, insured, sealed.
        </p>
      </div>

      <div ref={ref} className="relative mx-6 md:mx-10 h-[560px] md:h-[620px] ring-1 ring-canvas/10 rounded-sm bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.04),transparent_60%)]">
        {/* grid ticks */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        {/* connecting curve */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path
            d={buildPath(nodes)}
            stroke="currentColor"
            className="text-accent"
            strokeWidth="0.2"
            fill="none"
            strokeDasharray="1 1.5"
          />
        </svg>

        {nodes.map((n, i) => (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
          >
            <div className="relative">
              <div className="size-3 rounded-full bg-accent shadow-[0_0_0_6px_rgba(0,0,0,0.4)] group-hover:scale-125 transition-transform" />
              <div className="absolute size-3 rounded-full bg-accent/40 animate-ping" />
            </div>
            <div className={`absolute left-5 top-1/2 -translate-y-1/2 min-w-[220px] ${i % 2 === 0 ? "" : ""}`}>
              <div className="text-[9px] tracking-[0.35em] uppercase text-accent">{String(i + 1).padStart(2, "0")} · {n.label}</div>
              <div className="font-serif text-lg italic mt-1">{n.title}</div>
              <div className="text-[11px] text-canvas/50 mt-0.5">{n.meta}</div>
            </div>
          </div>
        ))}

        {/* corner meta */}
        <div className="absolute top-4 left-4 text-[10px] tracking-[0.3em] uppercase text-canvas/40">Composition · VCE.0614</div>
        <div className="absolute bottom-4 right-4 text-[10px] tracking-[0.3em] uppercase text-canvas/40">Sealed · 00:00:04</div>
      </div>

      <div className="mt-16 px-6 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="font-serif text-2xl italic text-canvas/70 max-w-[36ch]">
          "One instrument replaced eleven vendors, four spreadsheets, two agencies."
        </div>
        <button className="text-[11px] tracking-[0.35em] uppercase border border-accent text-accent px-8 py-4 hover:bg-accent hover:text-ink transition-colors">
          Begin your composition →
        </button>
      </div>
    </section>
  );
}

function buildPath(nodes: { x: number; y: number }[]) {
  let d = `M ${nodes[0].x} ${nodes[0].y}`;
  for (let i = 1; i < nodes.length; i++) {
    const p = nodes[i - 1], c = nodes[i];
    const mx = (p.x + c.x) / 2;
    d += ` C ${mx} ${p.y}, ${mx} ${c.y}, ${c.x} ${c.y}`;
  }
  return d;
}

/* ─────────── ARCHETYPES ─────────── */
function Archetypes() {
  return (
    <section id="archetypes" className="py-32 px-6 md:px-10">
      <div className="flex items-end justify-between mb-16">
        <h2 className="font-serif text-[14vw] md:text-[8vw] leading-[0.82] tracking-[-0.03em]">
          Archive<span className="italic text-ink-muted"> / MMXXVI</span>
        </h2>
        <div className="text-[10px] tracking-[0.35em] uppercase text-ink-muted hidden md:block">Vol. 03 · 42 Cities</div>
      </div>

      <div className="space-y-2">
        {ARCHETYPES.map((a, i) => (
          <a
            key={a.title}
            href="#"
            className="group relative grid grid-cols-12 items-center gap-6 py-8 border-t border-ink/15 last:border-b hover:bg-stone/40 transition-colors px-2 md:px-6"
          >
            <div className="col-span-1 font-serif text-2xl italic text-accent tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="col-span-3 md:col-span-2 text-[10px] tracking-[0.3em] uppercase">
              <div className="text-accent">{a.tag}</div>
              <div className="mt-1 text-ink">{a.city}</div>
              <div className="mt-1 text-ink-muted tabular-nums">{a.coord}</div>
            </div>
            <div className="col-span-8 md:col-span-6">
              <div className="font-serif text-3xl md:text-5xl italic leading-none">{a.title}</div>
              <div className="text-sm text-ink-muted mt-3">{a.line}</div>
            </div>
            <div className="col-span-12 md:col-span-3 relative">
              <div className="ml-auto relative aspect-[4/3] w-full max-w-[280px] overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  width={560}
                  height={420}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute bottom-2 right-2 text-[9px] tracking-[0.3em] uppercase text-canvas bg-ink/60 backdrop-blur px-2 py-1">
                  {a.yearRoman}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ─────────── MANIFESTO (closing wall) ─────────── */
function Manifesto() {
  return (
    <section className="relative py-40 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroTuscany} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-canvas via-canvas/70 to-canvas" />
      </div>
      <div className="max-w-5xl">
        <div className="text-[10px] tracking-[0.35em] uppercase text-accent mb-8">Manifesto · 01 of 01</div>
        <p className="font-serif text-4xl md:text-6xl italic leading-[1.05] text-balance">
          Weddings were not built to be booked in tabs. Summits were not written
          to be forwarded in threads. Concerts were not staged by seven separate
          vendors pretending not to know each other.
        </p>
        <p className="font-serif text-4xl md:text-6xl leading-[1.05] mt-8 text-balance">
          Every event is <span className="italic text-accent">one movement</span>.
          Planviry conducts it.
        </p>
        <div className="mt-16 flex flex-wrap gap-4 items-center">
          <a href="#compose" className="bg-accent text-ink px-10 py-5 text-[11px] tracking-[0.35em] uppercase hover:bg-ink hover:text-canvas transition-colors">
            Compose an event →
          </a>
          <a href="#atlas" className="text-[11px] tracking-[0.35em] uppercase text-ink-muted hover:text-ink transition-colors px-4 py-5">
            Or watch the Atlas
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/15 px-6 md:px-10 py-16">
      <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 items-start">
        <div>
          <div className="font-serif text-6xl italic leading-none">Planviry</div>
          <p className="text-ink-muted max-w-[36ch] mt-6">
            Enterprise infrastructure for global event composition.
            One canvas. Any event. Anywhere on earth.
          </p>
        </div>
        <FooterCol title="Compose" items={["Weddings", "Summits", "Retreats", "Concerts", "Bachelor Sets"]} />
        <FooterCol title="System" items={["Atlas", "Strata", "Membership", "Cover", "Concierge"]} />
        <FooterCol title="House" items={["Manifesto", "Press", "Careers", "Terms", "Privacy"]} />
      </div>
      <div className="mt-16 pt-6 border-t border-ink/10 flex flex-wrap justify-between gap-4 text-[10px] tracking-[0.35em] uppercase text-ink-muted">
        <span>© MMXXVI Planviry International</span>
        <span>42 Cities · 7 Strata · 1 Score</span>
        <span>Made on Earth</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.35em] uppercase text-accent mb-4">{title}</div>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-sm hover:text-accent transition-colors">{i}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
