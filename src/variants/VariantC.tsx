import {
  community,
  niches,
  pillars,
  profile,
  works,
} from "../data";

export function VariantC() {
  return (
    <div
      className="min-h-screen bg-[#fff8f1] pb-24 text-[#2a1810]"
      style={{ fontFamily: '"Outfit", system-ui, sans-serif' }}
    >
      <header className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-10">
        <div>
          <p
            className="text-2xl font-semibold"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            {community.name}
          </p>
          <p className="text-sm text-[#7a5c4a]">Hosted by {profile.name}</p>
        </div>
        <div className="flex gap-2">
          <a
            href="#join"
            className="rounded-full bg-[#e25d2d] px-4 py-2 text-sm font-semibold text-white"
          >
            Join the circle
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-[#2a1810] px-4 py-2 text-sm font-semibold"
          >
            Hire Julia
          </a>
        </div>
      </header>

      <section className="px-5 pb-8 pt-6 md:px-10">
        <div className="overflow-hidden rounded-[28px] bg-[#2a1810] text-[#fff8f1]">
          <div className="grid gap-8 p-8 md:grid-cols-[1.3fr_0.7fr] md:p-12">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[#f0b39a]">
                For people becoming UGC creators
              </p>
              <h1
                className="mt-3 max-w-[16ch] text-4xl leading-[1.05] md:text-6xl"
                style={{ fontFamily: '"Fraunces", serif' }}
              >
                Learn the craft with someone still in the arena.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#f3ddd3]">
                {community.promise} I’m also the on-camera talent brands hire for
                tech, skincare, AI, SaaS, and finance — so the lessons are the same clips
                I ship.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {community.offers.map((o) => (
                  <li
                    key={o}
                    className="rounded-2xl bg-white/5 px-4 py-3 text-sm leading-snug"
                  >
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-end">
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-64 w-full rounded-3xl object-cover"
              />
              <p className="mt-3 text-sm text-[#f0b39a]">
                {profile.handle} · {profile.location} · {profile.languages}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-10">
        <div className="flex items-end justify-between gap-4">
          <h2
            className="text-3xl"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            This week’s example clips
          </h2>
          <p className="text-sm text-[#7a5c4a]">Proof I walk the talk</p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <article
              key={w.title}
              className="rounded-3xl bg-white p-5 shadow-[0_12px_40px_rgba(42,24,16,0.06)]"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[#e25d2d]">
                {w.niche}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-[#7a5c4a]">{w.tone}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-8 md:px-10">
        <h2
          className="text-3xl"
          style={{ fontFamily: '"Fraunces", serif' }}
        >
          Four pillars we post and teach
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {pillars.map((p, i) => (
            <article
              key={p.name}
              className="rounded-[24px] border border-[#ead9cc] bg-[#fffdf9] p-6"
            >
              <p className="text-sm text-[#e25d2d]">0{i + 1}</p>
              <h3
                className="mt-1 text-2xl"
                style={{ fontFamily: '"Fraunces", serif' }}
              >
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-[#7a5c4a]">For: {p.for}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {p.ideas.map((idea) => (
                  <li key={idea} className="flex gap-2">
                    <span className="text-[#e25d2d]">→</span>
                    {idea}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="px-5 py-8 md:px-10">
        <h2
          className="text-3xl"
          style={{ fontFamily: '"Fraunces", serif' }}
        >
          Niches the circle practices on
        </h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {niches.map((n) => (
            <span
              key={n.name}
              className="rounded-full bg-[#2a1810] px-4 py-2 text-sm text-[#fff8f1]"
            >
              {n.name}
            </span>
          ))}
        </div>
      </section>

      <section id="join" className="px-5 py-8 md:px-10">
        <div className="rounded-[28px] bg-[#e25d2d] px-8 py-10 text-white">
          <h2
            className="text-4xl"
            style={{ fontFamily: '"Fraunces", serif' }}
          >
            Get the next session date
          </h2>
          <p className="mt-3 max-w-xl text-white/90">
            Prototype only — no list is saved. In the real site this becomes a
            waitlist. Brands: skip the waitlist and email instead.
          </p>
          <form
            className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 rounded-full bg-white px-4 py-3 text-[#2a1810] outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-[#2a1810] px-5 py-3 text-sm font-semibold"
            >
              Join waitlist
            </button>
          </form>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-block text-sm underline"
          >
            Brands: {profile.email}
          </a>
        </div>
      </section>

      <footer className="flex flex-wrap gap-4 px-5 py-8 text-sm md:px-10">
        {profile.socials.map((s) => (
          <a key={s.label} href={s.href} className="underline">
            {s.label}
          </a>
        ))}
      </footer>
    </div>
  );
}
