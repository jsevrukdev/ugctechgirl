import {
  brandFaqs,
  community,
  niches,
  profile,
  services,
  works,
} from "../data";
import { SocialLinks } from "../SocialLinks";
import { ThemeToggle } from "../theme";

const reelColors = [
  "#2b2118",
  "#1a2a24",
  "#241828",
  "#1c2430",
  "#2a2214",
  "#182018",
  "#1e2420",
];

export function VariantA() {
  return (
    <div
      className="min-h-screen bg-page pb-24 text-ink"
      style={{ fontFamily: '"DM Sans", system-ui, sans-serif' }}
    >
      <header className="flex items-center justify-between px-6 py-5 md:px-10">
        <span
          className="text-2xl tracking-tight"
          style={{ fontFamily: '"Instrument Serif", serif' }}
        >
          {profile.brand}
        </span>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-cta px-4 py-2 text-sm font-semibold text-on-cta"
          >
            Book a shoot
          </a>
        </div>
      </header>

      <section className="grid items-end gap-10 px-6 pb-16 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:pt-6">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-accent">
            {profile.location} · {profile.languages} · UGC for brands
          </p>
          <h1
            className="mt-4 max-w-[14ch] text-5xl leading-[0.95] md:text-7xl"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            {profile.bio}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="border-b border-accent/50 pb-0.5 text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-[260px]">
          <div className="aspect-[9/16] overflow-hidden rounded-[2.2rem] border border-line bg-panel shadow-[0_40px_80px_rgba(0,0,0,0.18)]">
            <video
              className="h-full w-full object-cover"
              src={profile.heroVideo}
              poster={profile.heroPoster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={`${profile.heroClipTitle}. ${profile.heroClipCaption}`}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/50 to-transparent p-5 text-[#f4efe6]">
              <p className="text-xs uppercase tracking-widest text-[#c9b48a]">
                Now playing
              </p>
              <p className="mt-1 text-lg leading-tight" style={{ fontFamily: '"Instrument Serif", serif' }}>
                {profile.heroClipTitle}
              </p>
            </div>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            {profile.heroClipCaption}
          </p>
        </div>
      </section>

      <section className="border-t border-line py-8">
        <p className="px-6 text-xs uppercase tracking-[0.28em] text-accent md:px-10">
          Selected frames
        </p>
        <div className="mt-5 flex gap-4 overflow-x-auto px-6 pb-4 md:px-10">
          {works.map((w, i) => (
            <article key={w.title} className="w-[200px] shrink-0">
              <div
                className="aspect-[9/16] rounded-2xl"
                style={{ background: reelColors[i] ?? "#222" }}
              />
              <p className="mt-3 text-sm font-medium">{w.title}</p>
              <p className="text-xs text-muted">
                {w.niche} · {w.format}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <h2
          className="text-4xl"
          style={{ fontFamily: '"Instrument Serif", serif' }}
        >
          What I film
        </h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <li key={s.name} className="border-t border-line pt-4">
              <p className="text-lg">{s.name}</p>
              <p className="mt-1 text-sm text-muted">{s.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 pb-16 md:px-10">
        <h2
          className="text-4xl"
          style={{ fontFamily: '"Instrument Serif", serif' }}
        >
          Niches I live in
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Example clips for each niche — placeholders until the real files sit
          here. Same shape brands would see: hook, format, still.
        </p>
        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          {niches.map((n) => (
            <article key={n.name}>
              <p className="text-xs uppercase tracking-[0.28em] text-accent">
                {n.name}
              </p>
              <p className="mt-2 text-sm text-muted">{n.example}</p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {n.placeholders.map((p) => (
                  <figure key={p.title} className="min-w-0">
                    <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-panel">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover opacity-80"
                      />
                      <span className="absolute left-2 top-2 whitespace-nowrap rounded-full bg-black/55 px-2 py-0.5 text-[10px] uppercase tracking-wide text-[#c9b48a]">
                        Sample
                      </span>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-2.5 text-[#f4efe6]">
                        <p className="text-[10px] text-[#c9b48a]">{p.format}</p>
                        <p className="mt-0.5 line-clamp-2 text-xs leading-snug">
                          {p.title}
                        </p>
                      </div>
                    </div>
                    <figcaption className="mt-2 line-clamp-3 text-[11px] leading-snug text-muted">
                      “{p.hook}”
                    </figcaption>
                  </figure>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-8 md:px-10">
        <div className="rounded-[2rem] bg-panel px-8 py-10">
          <p className="text-xs uppercase tracking-[0.28em] text-accent">
            Also organizing
          </p>
          <h2
            className="mt-3 text-4xl"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            {community.name}
          </h2>
          <p className="mt-4 max-w-2xl text-muted">{community.promise}</p>
          <p className="mt-6 text-sm text-muted">
            Community lives in the credits on this version — brands still get the
            first frame.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10">
        <h2
          className="text-3xl"
          style={{ fontFamily: '"Instrument Serif", serif' }}
        >
          For brand teams
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {brandFaqs.map((f) => (
            <div key={f.q}>
              <p className="font-medium">{f.q}</p>
              <p className="mt-1 text-sm text-muted">{f.a}</p>
            </div>
          ))}
        </div>
        <a
          href={`mailto:${profile.email}?subject=UGC collaboration`}
          className="mt-10 inline-block rounded-full bg-cta px-4 py-2 text-sm font-semibold text-on-cta"
        >
          Email {profile.email}
        </a>
      </section>

      <footer className="border-t border-line px-6 py-10 md:px-10">
        <p className="text-xs uppercase tracking-[0.28em] text-accent">
          Find me
        </p>
        <SocialLinks className="mt-5" />
      </footer>
    </div>
  );
}
