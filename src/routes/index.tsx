import { createFileRoute } from "@tanstack/react-router";
import heroTuscany from "@/assets/hero-tuscany.jpg";
import caseBali from "@/assets/case-bali.jpg";
import caseLondon from "@/assets/case-london.jpg";
import caseTuscany from "@/assets/case-tuscany.jpg";
import modSuite from "@/assets/mod-suite.jpg";
import modCatering from "@/assets/mod-catering.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

// TABULA — the master board of everything Planviry does
const TABULA = [
  { code: "T.01", name: "Coordination",   body: "End-to-end oversight for any event, at any complexity, on any continent." },
  { code: "T.02", name: "Venue",          body: "Private estates, hotels, resorts, villas, conference floors — curated." },
  { code: "T.03", name: "Travel",         body: "Flights, private jets, group transfers, arrivals resolved as one movement." },
  { code: "T.04", name: "Ticketing",      body: "Concert, sport, theatre and VIP hospitality inventory on request." },
  { code: "T.05", name: "Vendors",        body: "Caterers, photographers, entertainers, decor and production houses." },
  { code: "T.06", name: "Membership",     body: "Subscription tiers, Club status, guarded gates opened for members." },
  { code: "T.07", name: "Insurance",      body: "Event liability, travel and visitor coverage up to enterprise scale." },
];

// CORPUS — the highlighted vendor body
const CORPUS = [
  { house: "Aman",             discipline: "Accommodation", origin: "Zürich",   since: "1988" },
  { house: "Alain Ducasse",    discipline: "Gastronomy",    origin: "Monaco",   since: "1987" },
  { house: "NetJets",          discipline: "Aviation",      origin: "Columbus", since: "1964" },
  { house: "Bureau Betak",     discipline: "Production",    origin: "Paris",    since: "1990" },
  { house: "Preston Bailey",   discipline: "Decor",         origin: "New York", since: "1980" },
  { house: "Annie Leibovitz",  discipline: "Photography",   origin: "New York", since: "1970" },
  { house: "Cirque du Soleil", discipline: "Entertainment", origin: "Montréal", since: "1984" },
  { house: "Rosewood",         discipline: "Estates",       origin: "Dallas",   since: "1979" },
];

// ATLAS — the global operating theatre
const ATLAS = [
  { city: "Val d'Orcia",   iso: "IT", coord: "43.07° N · 11.61° E", note: "Estates · Wineries" },
  { city: "Ubud",          iso: "ID", coord: "08.50° S · 115.26° E", note: "Retreats · Villas" },
  { city: "Reykjavík",     iso: "IS", coord: "64.14° N · 21.94° W", note: "Cinematic sets" },
  { city: "Marrakech",     iso: "MA", coord: "31.63° N · 07.99° W", note: "Riads · Palaces" },
  { city: "Kyoto",         iso: "JP", coord: "35.01° N · 135.76° E", note: "Ryokan · Temples" },
  { city: "Aspen",         iso: "US", coord: "39.19° N · 106.81° W", note: "Alpine · Chalets" },
  { city: "Cape Town",     iso: "ZA", coord: "33.92° S · 18.42° E", note: "Vineyards · Cliffs" },
  { city: "Marina Bay",    iso: "SG", coord: "01.28° N · 103.85° E", note: "Summits · Towers" },
  { city: "Costa Smeralda", iso: "IT", coord: "41.10° N · 09.53° E", note: "Sea · Yachts" },
];

// STRATA — tiered layers of engagement
const STRATA = [
  { layer: "S.I",   tier: "Signature",  hint: "Single event · fully composed", detail: "One master orchestrator. Full module access. Bespoke sourcing per event." },
  { layer: "S.II",  tier: "Cercle",     hint: "Annual · unlimited events",      detail: "Priority inventory, zero-fee logistics, guarded gates opened first." },
  { layer: "S.III", tier: "Sovereign",  hint: "Enterprise · global operations", detail: "Dedicated planning bureau, $10M+ coverage, cross-continent staging." },
];

const ATLAS_IMAGES = [caseTuscany, caseBali, caseLondon];

function Home() {
  return (
    <div className="min-h-screen bg-canvas text-ink font-sans selection:bg-accent/10">
      <Nav />
      <main className="pt-32">
        <Hero />
        <HeroImage />
        <Tabula />
        <Forma />
        <Corpus />
        <Atlas />
        <Strata />
        <Regimen />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-ink/5 bg-canvas/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-serif text-2xl tracking-tight italic">Planviry</span>
        <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase">
          <a href="#tabula" className="hover:text-accent transition-colors">Tabula</a>
          <a href="#corpus" className="hover:text-accent transition-colors">Corpus</a>
          <a href="#atlas" className="hover:text-accent transition-colors">Atlas</a>
          <a href="#strata" className="hover:text-accent transition-colors">Strata</a>
        </div>
        <button className="text-xs font-medium bg-ink text-canvas py-2 pr-3 pl-2 ring-1 ring-ink flex items-center gap-2">
          <span className="size-4 bg-canvas/20 rounded-full shrink-0" />
          Request Access
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="px-6 mb-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-end">
          <div>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.95] text-balance mb-8">
              Any Event.<br />
              Anywhere.<br />
              <span className="italic text-ink-muted">End-to-End.</span>
            </h1>
            <p className="max-w-[52ch] text-lg text-ink-muted text-pretty">
              Planviry is the unified global platform for planning any event, anywhere.
              From Tuscan estates to Bali retreats, orchestrate venue, travel, vendors and
              tickets through a single composition layer.
            </p>
          </div>
          <div className="hidden lg:block pb-4">
            <div className="space-y-4 border-l border-ink/10 pl-6">
              <div className="text-[10px] uppercase tracking-widest text-ink-muted">Now Orchestrating</div>
              <div className="text-sm font-medium">Siena Wedding — Villa Cetinale</div>
              <div className="text-sm font-medium">Singapore Summit — Marina Bay</div>
              <div className="text-sm font-medium">Cercle Set — Icelandic Highlands</div>
              <div className="text-sm font-medium">Bachelor Suite — Nobu Vegas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroImage() {
  return (
    <section className="px-6 mb-40">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full aspect-[21/9] overflow-hidden rounded-sm ring-1 ring-ink/5">
          <img
            src={heroTuscany}
            alt="Aerial view of a private Tuscan villa at golden hour"
            width={1920}
            height={820}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-canvas">
            <div>
              <div className="text-[10px] font-medium uppercase tracking-[0.3em] opacity-70">Reference · Estate 01</div>
              <div className="font-serif italic text-2xl mt-1">Val d'Orcia, Italy</div>
            </div>
            <div className="text-[10px] font-medium uppercase tracking-[0.3em] opacity-70 hidden md:block">
              43.0763° N · 11.6117° E
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function SectionMark({ code, kicker }: { code: string; kicker: string }) {
  return (
    <div className="flex items-end justify-between gap-6 mb-12 border-b border-current/15 pb-6">
      <div className="flex items-baseline gap-6">
        <span className="text-[10px] font-medium tracking-[0.35em] uppercase opacity-50">{code}</span>
        <span className="font-serif italic text-2xl md:text-3xl opacity-60">{kicker}</span>
      </div>
      <span className="text-[10px] font-medium tracking-[0.35em] uppercase opacity-50 hidden md:block">
        Planviry · Global Operations
      </span>
    </div>
  );
}

function Tabula() {
  return (
    <section id="tabula" className="relative py-32 md:py-40 bg-ink text-canvas overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionMark code="§ I" kicker="The Board" />
        <h2 className="font-serif italic leading-[0.82] tracking-tighter text-canvas text-[22vw] md:text-[16rem]">
          Tabula.
        </h2>
        <div className="grid md:grid-cols-[1fr_1fr] gap-12 mt-10 mb-24">
          <p className="text-canvas/50 text-sm max-w-[42ch]">
            <span className="text-canvas">Everything Planviry does, in one board.</span> Seven disciplines,
            resolved as a single composable surface. Snap one — or all seven — onto your event.
          </p>
          <p className="text-canvas/50 text-sm max-w-[42ch] md:justify-self-end">
            No dashboards. No dropdowns. No handoffs. A master document you can hand to your team,
            your family, or your board of directors — and everyone reads the same score.
          </p>
        </div>

        <div className="border-t border-canvas/15">
          {TABULA.map((t, i) => (
            <div
              key={t.code}
              className="group grid grid-cols-[60px_1fr] md:grid-cols-[80px_120px_1fr_2fr] gap-4 md:gap-8 py-8 md:py-12 border-b border-canvas/15 items-baseline hover:bg-canvas/[0.03] transition-colors"
            >
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-canvas/40 pt-3">
                {t.code}
              </div>
              <div className="font-serif italic text-6xl md:text-7xl text-canvas/15 leading-none hidden md:block">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-serif text-3xl md:text-5xl leading-none">{t.name}</h3>
              <p className="text-sm text-canvas/60 max-w-[54ch] col-span-2 md:col-span-1">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Forma() {
  const steps = [
    { n: "I",   title: "Brief",     body: "Your intent, guests, geography and taste captured by a live orchestrator." },
    { n: "II",  title: "Compose",   body: "We assemble modules onto the canvas — venue, travel, vendors, tickets." },
    { n: "III", title: "Confirm",   body: "One approval. Every vendor, contract and payment resolved simultaneously." },
    { n: "IV",  title: "Conduct",   body: "On the day, a dedicated bureau runs the score. You attend. We orchestrate." },
  ];
  return (
    <section id="forma" className="relative py-32 md:py-40 px-6 bg-canvas text-ink overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionMark code="§ II" kicker="The Blueprint" />
        <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
          <h2 className="font-serif leading-[0.82] tracking-tighter text-[22vw] md:text-[16rem]">
            Forma.
          </h2>
          <p className="max-w-[36ch] text-ink-muted text-sm pb-6">
            <span className="text-ink">How we do it.</span> Four movements from first brief to final applause.
            No project managers. No spreadsheets. No handoffs.
          </p>
        </div>

        <div className="relative grid md:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
          {steps.map((s, i) => (
            <div key={s.n} className="relative bg-canvas p-8 md:p-10 min-h-[380px] flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <span className="font-serif italic text-[8rem] leading-none text-ink/10 -mt-4">{s.n}</span>
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-muted">
                  Step 0{i + 1}
                </span>
              </div>
              <h3 className="font-serif text-3xl mb-4">{s.title}</h3>
              <p className="text-sm text-ink-muted mt-auto max-w-[32ch]">{s.body}</p>
              {i < steps.length - 1 && (
                <svg
                  aria-hidden
                  viewBox="0 0 40 20"
                  className="hidden md:block absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-5 text-ink/30 z-10"
                >
                  <path d="M0 10 H36 M30 4 L36 10 L30 16" stroke="currentColor" fill="none" strokeWidth="1" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Corpus() {
  return (
    <section id="corpus" className="relative py-32 md:py-40 bg-stone text-ink overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionMark code="§ III" kicker="The Body of Houses" />
        <div className="flex items-end justify-between flex-wrap gap-8 mb-20">
          <h2 className="font-serif italic leading-[0.82] tracking-tighter text-[22vw] md:text-[16rem]">
            Corpus.
          </h2>
          <p className="max-w-[38ch] text-ink-muted text-sm pb-6">
            <span className="text-ink">The vendors we open doors to.</span> A body of houses that
            do not answer public inquiries — Planviry members skip the line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
          {CORPUS.map((c, i) => (
            <div key={c.house} className="bg-canvas p-6 md:p-8 min-h-[220px] flex flex-col justify-between group">
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-muted">
                  H.{String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-muted">
                  est. {c.since}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-3xl md:text-4xl leading-[0.95] mb-3 group-hover:italic transition-all">
                  {c.house}
                </h3>
                <div className="flex items-center justify-between text-[10px] font-medium tracking-[0.25em] uppercase text-ink-muted">
                  <span>{c.discipline}</span>
                  <span>{c.origin}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden border-y border-ink/10 py-4">
          <div className="whitespace-nowrap font-serif italic text-2xl md:text-3xl text-ink-muted animate-[marquee_40s_linear_infinite]">
            {"Aman · Ducasse · NetJets · Bureau Betak · Preston Bailey · Leibovitz · Cirque du Soleil · Rosewood · Nobu · Baccarat · Sotheby's · Christie's · Ferrari Trento · Krug · ".repeat(3)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Atlas() {
  return (
    <section id="atlas" className="relative py-32 md:py-40 px-6 bg-ink text-canvas overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionMark code="§ IV" kicker="The Global Theatre" />
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <h2 className="font-serif leading-[0.82] tracking-tighter text-[22vw] md:text-[16rem]">
            Atlas.
          </h2>
          <p className="max-w-[36ch] text-canvas/60 text-sm pb-6">
            <span className="text-canvas">Where we operate.</span> Forty-two cities. Seven continents.
            One coordinated bureau on the ground for every event.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {ATLAS_IMAGES.map((img, i) => (
            <div key={i} className="relative aspect-[4/5] overflow-hidden rounded-sm ring-1 ring-canvas/10">
              <img src={img} alt="" className="w-full h-full object-cover opacity-90" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-between text-canvas">
                <div className="flex justify-between text-[10px] font-mono tracking-[0.25em] uppercase opacity-70">
                  <span>{ATLAS[i].iso}</span>
                  <span>N° {String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <div className="font-serif text-3xl">{ATLAS[i].city}</div>
                  <div className="text-[10px] font-mono tracking-[0.2em] uppercase opacity-70 mt-1">
                    {ATLAS[i].coord}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-canvas/10 border border-canvas/10">
          {ATLAS.slice(3).map((a) => (
            <div key={a.city} className="bg-ink p-5 flex items-center justify-between">
              <div>
                <div className="font-serif text-xl">{a.city}</div>
                <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-canvas/50 mt-1">
                  {a.note}
                </div>
              </div>
              <div className="text-[9px] font-mono tracking-[0.2em] uppercase text-canvas/40 text-right">
                {a.coord}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Strata() {
  return (
    <section id="strata" className="relative py-32 md:py-40 px-6 bg-canvas text-ink overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionMark code="§ V" kicker="The Layers" />
        <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
          <h2 className="font-serif italic leading-[0.82] tracking-tighter text-[22vw] md:text-[16rem]">
            Strata.
          </h2>
          <p className="max-w-[36ch] text-ink-muted text-sm pb-6">
            <span className="text-ink">Three layers of engagement.</span> From a single perfect event
            to the operating system for a global organization.
          </p>
        </div>

        <div className="space-y-3">
          {STRATA.map((s, i) => (
            <div
              key={s.layer}
              className="group relative border border-ink/10 hover:border-ink transition-colors overflow-hidden"
              style={{ minHeight: `${140 + i * 40}px` }}
            >
              <div className="grid grid-cols-[80px_1fr_2fr_auto] md:grid-cols-[120px_240px_1fr_auto] gap-6 items-center p-6 md:p-8 h-full">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink-muted">
                  {s.layer}
                </span>
                <h3 className="font-serif italic text-4xl md:text-6xl leading-none">{s.tier}</h3>
                <div>
                  <div className="text-[10px] font-medium tracking-[0.3em] uppercase text-ink-muted mb-2">
                    {s.hint}
                  </div>
                  <p className="text-sm text-ink-muted max-w-[52ch]">{s.detail}</p>
                </div>
                <div className="text-[10px] font-medium tracking-[0.3em] uppercase group-hover:translate-x-1 transition-transform">
                  Enter →
                </div>
              </div>
              <div
                aria-hidden
                className="absolute inset-y-0 right-0 w-1/3 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 8px)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Regimen() {
  return (
    <section id="regimen" className="relative py-32 md:py-48 px-6 bg-ink text-canvas overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        <SectionMark code="§ VI" kicker="The Order" />
        <h2 className="font-serif italic leading-[0.9] tracking-tight text-[14vw] md:text-[10rem] text-balance mb-16">
          Compose<br/>
          <span className="not-italic">your</span> event<br/>
          <span className="text-canvas/40">— anywhere.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-px bg-canvas/10 border border-canvas/10 mb-16">
          {[
            { k: "R.01", t: "Insurance", d: "Comprehensive liability and travel protection up to $10M per event." },
            { k: "R.02", t: "Concierge", d: "24/7 dedicated orchestrator for members. One number. Any request." },
            { k: "R.03", t: "Guarantee", d: "Every vendor, every venue, every transfer — underwritten by Planviry." },
          ].map((r) => (
            <div key={r.k} className="bg-ink p-8">
              <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-canvas/40 mb-4">{r.k}</div>
              <h3 className="font-serif text-2xl mb-3">{r.t}</h3>
              <p className="text-sm text-canvas/60">{r.d}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-6 items-center">
          <button className="px-10 py-5 bg-canvas text-ink text-xs font-medium tracking-[0.3em] uppercase hover:bg-accent hover:text-accent-foreground transition-colors">
            Request Access
          </button>
          <a href="#" className="font-serif italic text-2xl md:text-3xl hover:text-canvas/60 transition-colors">
            or talk to an Orchestrator →
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-24 px-6 border-t border-ink/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="font-serif text-4xl italic block mb-6">Planviry</span>
            <p className="max-w-[40ch] text-ink-muted mb-10 text-pretty">
              The first enterprise infrastructure for global event composition.
              From concept to execution, anywhere on Earth.
            </p>
            <div className="flex gap-8 text-[10px] font-medium uppercase tracking-[0.3em] text-ink-muted">
              <a href="#" className="hover:text-ink transition-colors">Terms</a>
              <a href="#" className="hover:text-ink transition-colors">Privacy</a>
              <a href="#" className="hover:text-ink transition-colors">Press</a>
              <a href="#" className="hover:text-ink transition-colors">Careers</a>
            </div>
          </div>
          <div className="flex flex-col justify-end md:items-end">
            <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-ink-muted mb-4">Begin your composition</div>
            <a href="#" className="font-serif italic text-3xl md:text-4xl hover:text-accent transition-colors">
              Talk to an Orchestrator →
            </a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-ink/10 flex justify-between text-[10px] font-medium uppercase tracking-[0.3em] text-ink-muted">
          <span>© 2026 Planviry International</span>
          <span>Global Operations · 42 Cities</span>
        </div>
      </div>
    </footer>
  );
}
