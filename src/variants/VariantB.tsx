import {
  brandFaqs,
  community,
  niches,
  pillars,
  profile,
  services,
  works,
} from "../data";

export function VariantB() {
  return (
    <div
      className="min-h-screen bg-[#f6f3ec] pb-24 text-[#1a1a1a]"
      style={{ fontFamily: '"IBM Plex Sans", system-ui, sans-serif' }}
    >
      <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-[280px_1fr]">
        <aside className="border-b border-[#ddd6c8] bg-[#efeae0] p-6 lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6b6458]">
            Media kit 2026
          </p>
          <img
            src={profile.photo}
            alt={profile.name}
            className="mt-5 h-28 w-28 rounded-sm object-cover"
          />
          <h1 className="mt-4 text-2xl font-semibold leading-tight">
            {profile.name}
          </h1>
          <p className="text-sm text-[#5c564c]">
            {profile.brand} · {profile.handle}
          </p>
          <p className="mt-4 text-sm leading-relaxed">{profile.tagline}</p>
          <dl className="mt-6 space-y-3 border-t border-[#ddd6c8] pt-5 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-[#6b6458]">Based</dt>
              <dd className="font-medium">{profile.location}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-[#6b6458]">Languages</dt>
              <dd className="text-right font-medium">{profile.languages}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-[#6b6458]">Stage</dt>
              <dd className="text-right font-medium">Building in public</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-[#6b6458]">Best for</dt>
              <dd className="text-right font-medium">Paid + organic UGC</dd>
            </div>
          </dl>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 block bg-[#1a1a1a] px-4 py-3 text-center text-sm font-semibold text-[#f6f3ec]"
          >
            Email to collab
          </a>
          <a
            href="#kit"
            className="mt-2 block border border-[#1a1a1a] px-4 py-3 text-center text-sm font-semibold"
          >
            Jump the kit
          </a>
          <nav className="mt-8 hidden space-y-2 text-sm lg:block">
            {[
              ["#who", "01 Who"],
              ["#work", "02 Work"],
              ["#offer", "03 Offer"],
              ["#pillars", "04 Content"],
              ["#community", "05 Community"],
              ["#faq", "06 FAQ"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="block text-[#5c564c]">
                {label}
              </a>
            ))}
          </nav>
        </aside>

        <main className="p-6 md:p-10">
          <p
            className="max-w-2xl text-3xl leading-snug"
            style={{ fontFamily: '"Newsreader", serif' }}
            id="who"
          >
            {profile.headline} Background: product manager. That means briefs,
            timelines, and no mysterious “creative process.”
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#4a453c]">
            {profile.bio} This layout is built for a brand manager who has 90
            seconds: niche, proof, deliverable, email.
          </p>

          <section id="work" className="mt-12">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b6458]">
              02 / Work samples
            </h2>
            <table className="mt-4 w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#ddd6c8] text-[#6b6458]">
                  <th className="py-2 font-medium">Piece</th>
                  <th className="py-2 font-medium">Niche</th>
                  <th className="hidden py-2 font-medium md:table-cell">
                    Format
                  </th>
                </tr>
              </thead>
              <tbody>
                {works.map((w) => (
                  <tr key={w.title} className="border-b border-[#eee8dc]">
                    <td className="py-3 font-medium">{w.title}</td>
                    <td className="py-3">{w.niche}</td>
                    <td className="hidden py-3 md:table-cell">{w.format}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-xs text-[#6b6458]">
              Samples stand in until your best 6 clips are embedded (TikTok /
              Shorts).
            </p>
          </section>

          <section id="offer" className="mt-12 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b6458]">
                03 / Deliverables
              </h2>
              <ul className="mt-4 space-y-4">
                {services.map((s) => (
                  <li key={s.name}>
                    <p className="font-semibold">{s.name}</p>
                    <p className="text-sm text-[#4a453c]">{s.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b6458]">
                Niches
              </h2>
              <ul className="mt-4 space-y-4">
                {niches.map((n) => (
                  <li key={n.name}>
                    <p className="font-semibold">{n.name}</p>
                    <p className="text-sm text-[#4a453c]">{n.example}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="kit" className="mt-12 border border-[#1a1a1a] p-6">
            <h2
              className="text-2xl"
              style={{ fontFamily: '"Newsreader", serif' }}
            >
              One-page brief I send back
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm">
              <li>Where it runs (organic / paid / both)</li>
              <li>Hook angles I can actually say on camera</li>
              <li>Usage window and exclusivity</li>
              <li>Files: 9:16 master, captions, raw if needed</li>
            </ol>
            <p className="mt-4 text-sm">
              Rates live on the call — this kit never publishes a number a
              competitor can screenshot.
            </p>
          </section>

          <section id="pillars" className="mt-12">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b6458]">
              04 / Public content pillars
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {pillars.map((p) => (
                <article key={p.name} className="bg-white p-4">
                  <p className="text-[11px] uppercase tracking-wider text-[#6b6458]">
                    {p.for}
                  </p>
                  <h3 className="mt-1 font-semibold">{p.name}</h3>
                  <ul className="mt-2 space-y-1 text-sm text-[#4a453c]">
                    {p.ideas.map((idea) => (
                      <li key={idea}>· {idea}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="community" className="mt-12">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b6458]">
              05 / Community (secondary)
            </h2>
            <h3
              className="mt-3 text-2xl"
              style={{ fontFamily: '"Newsreader", serif' }}
            >
              {community.name}
            </h3>
            <p className="mt-2 max-w-xl text-sm">{community.promise}</p>
          </section>

          <section id="faq" className="mt-12">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b6458]">
              06 / Brand FAQ
            </h2>
            <dl className="mt-4 space-y-4">
              {brandFaqs.map((f) => (
                <div key={f.q} className="grid gap-1 md:grid-cols-[220px_1fr]">
                  <dt className="font-semibold">{f.q}</dt>
                  <dd className="text-sm text-[#4a453c]">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <footer className="mt-16 flex flex-wrap gap-4 border-t border-[#ddd6c8] pt-6 text-sm">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} className="underline">
                {s.label}
              </a>
            ))}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </footer>
        </main>
      </div>
    </div>
  );
}
