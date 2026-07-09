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
