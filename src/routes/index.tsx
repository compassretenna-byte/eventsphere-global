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

const MODULES = [
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

const ARCHETYPES = [
  { image: caseTuscany, place: "Tuscany", title: "The Marchesi Nuptials", meta: "Private · 180 Guests · 6 Modules Active" },
  { image: caseBali, place: "Bali", title: "The Ubud Strategy Retreat", meta: "Corporate · 45 Guests · 7 Modules Active" },
  { image: caseLondon, place: "London", title: "Sovereign Fintech Summit", meta: "Enterprise · 1,200 Guests · 4 Modules Active" },
];

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

function Modules() {
  return (
    <section id="modules" className="py-24 bg-ink text-canvas">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 grid md:grid-cols-[1fr_1fr] gap-8 items-end">
          <div>
            <div className="text-[10px] font-medium tracking-[0.3em] uppercase text-canvas/40 mb-4">The System · 01—07</div>
            <h2 className="font-serif text-5xl md:text-6xl text-balance leading-tight">
              Seven movements.<br />
              <span className="italic text-canvas/60">One symphony.</span>
            </h2>
          </div>
          <p className="max-w-[48ch] text-canvas/60 text-pretty text-lg">
            The complete architecture of event creation — resolved into modules that
            snap together on a single canvas. Use one. Use all seven.
          </p>
        </div>

        <div className="border-y border-canvas/10">
          {MODULES.map((m) => (
            <div
              key={m.n}
              className="group grid md:grid-cols-[80px_1fr_2fr_120px] gap-6 py-8 md:py-10 items-center border-b border-canvas/10 last:border-b-0 px-2 md:px-4 transition-colors hover:bg-canvas/[0.03]"
            >
              <div className="text-[10px] font-medium tracking-[0.3em] uppercase text-canvas/40">M.{m.n}</div>
              <h3 className="text-2xl md:text-3xl font-serif">{m.name}</h3>
              <p className="text-sm text-canvas/60 max-w-[52ch]">{m.body}</p>
              <div className="justify-self-end text-[10px] font-medium tracking-[0.3em] uppercase text-canvas/40 group-hover:text-accent-foreground group-hover:translate-x-[-4px] transition-all">
                {m.cta} →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Composition() {
  return (
    <section className="py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="lg:sticky lg:top-32">
            <div className="text-[10px] font-medium tracking-[0.3em] uppercase text-accent mb-6">The Canvas</div>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight text-balance mb-8">
              Assemble your event on a living canvas.
            </h2>
            <p className="max-w-[48ch] text-ink-muted text-lg mb-12 text-pretty">
              Remove the friction of a dozen browser tabs. Snap modules together —
              Venue meets Travel meets Catering meets Ticketing — inside a single
              visual itinerary you can hand to your team or your family.
            </p>
            <button className="px-8 py-4 bg-accent text-accent-foreground text-xs font-medium tracking-[0.2em] uppercase ring-1 ring-accent hover:bg-ink hover:ring-ink transition-colors">
              Start Composing
            </button>
          </div>
          <div className="space-y-6">
            <CompositionCard
              label="Accommodation"
              title="Aman Venice — Grand Canal Suite"
              meta="4 nights · 2 guests"
              image={modSuite}
            />
            <CompositionCard
              className="ml-12"
              label="Logistics"
              title="Private Embraer 1000E — LCY → VCE"
              meta="Sat 14 Jun · 09:20 UTC"
            />
            <CompositionCard
              className="ml-6"
              label="Gastronomy"
              title="L'Effervescence — Private Catering"
              meta="Tasting menu · 42 covers"
              image={modCatering}
            />
            <CompositionCard
              className="ml-20"
              label="Access"
              title="Teatro La Fenice — Palco Reale"
              meta="Puccini · La Bohème · 20:00"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CompositionCard({
  label, title, meta, image, className = "",
}: { label: string; title: string; meta: string; image?: string; className?: string }) {
  return (
    <div className={`p-5 bg-canvas ring-1 ring-ink/10 flex gap-5 items-center shadow-2xl shadow-ink/[0.06] rounded-sm ${className}`}>
      <div className="size-20 shrink-0 bg-stone rounded-sm overflow-hidden">
        {image ? (
          <img src={image} alt="" width={80} height={80} loading="lazy" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full grid place-items-center">
            <span className="size-2 rounded-full bg-ink/20" />
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[9px] tracking-[0.3em] uppercase text-ink-muted mb-1">{label}</div>
        <div className="text-sm font-medium truncate">{title}</div>
        <div className="text-xs text-ink-muted mt-1">{meta}</div>
      </div>
    </div>
  );
}

function Archetypes() {
  return (
    <section id="archetypes" className="px-6 py-32 bg-stone">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <div className="text-[10px] font-medium tracking-[0.3em] uppercase text-ink-muted mb-4">Case Studies</div>
            <h2 className="font-serif text-5xl md:text-6xl italic">Global Archetypes.</h2>
          </div>
          <a href="#" className="hidden md:inline-block text-xs font-medium tracking-[0.2em] uppercase hover:text-accent transition-colors">
            View Portfolio →
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARCHETYPES.map((a) => (
            <a href="#" key={a.title} className="group block">
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-6 rounded-sm">
                <img
                  src={a.image}
                  alt={a.title}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 text-[10px] font-medium uppercase tracking-[0.3em] text-canvas bg-ink/40 backdrop-blur-sm px-2 py-1 rounded-sm">
                  {a.place}
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-1">{a.title}</h3>
              <p className="text-sm text-ink-muted">{a.meta}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section id="membership" className="py-40 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-[10px] font-medium tracking-[0.3em] uppercase text-accent mb-6">Membership · Insurance · Concierge</div>
        <h2 className="font-serif text-5xl md:text-7xl italic leading-[1.05] text-balance mb-8">
          Uncompromising protection. Unlimited orchestration.
        </h2>
        <p className="text-lg text-ink-muted max-w-[52ch] mx-auto text-pretty mb-12">
          Every Planviry event is backed by comprehensive event and travel insurance modules.
          For frequent planners, our Club tier provides 24/7 dedicated concierge and zero-fee logistics.
        </p>
        <div className="grid sm:grid-cols-2 gap-px bg-ink/10 border border-ink/10 rounded-sm overflow-hidden max-w-2xl mx-auto mb-16 text-left">
          <div className="bg-canvas p-8">
            <div className="text-[10px] font-medium tracking-[0.3em] uppercase text-ink-muted mb-3">Club Membership</div>
            <p className="text-sm text-ink-muted">Unlimited coordination. Zero-fee logistics. Priority access to guarded inventory.</p>
          </div>
          <div className="bg-canvas p-8">
            <div className="text-[10px] font-medium tracking-[0.3em] uppercase text-ink-muted mb-3">Enterprise Security</div>
            <p className="text-sm text-ink-muted">Coverage to $10M per event. Global visitor and destination protection.</p>
          </div>
        </div>
        <button className="px-10 py-5 bg-ink text-canvas text-xs font-medium tracking-[0.3em] uppercase hover:bg-accent transition-colors">
          Compose Your Event
        </button>
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
