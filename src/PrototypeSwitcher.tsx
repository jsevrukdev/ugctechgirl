import { useEffect } from "react";

const KEYS = ["A", "B", "C"] as const;
export type VariantKey = (typeof KEYS)[number];

const NAMES: Record<VariantKey, string> = {
  A: "Cinematic studio",
  B: "Brand media kit",
  C: "Community HQ",
};

function setVariant(next: VariantKey) {
  const url = new URL(window.location.href);
  url.searchParams.set("variant", next);
  window.history.replaceState({}, "", url);
  window.dispatchEvent(new Event("prototype-variant"));
}

function cycle(current: VariantKey, dir: -1 | 1): VariantKey {
  const i = KEYS.indexOf(current);
  return KEYS[(i + dir + KEYS.length) % KEYS.length] ?? "A";
}

export function PrototypeSwitcher({ current }: { current: VariantKey }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (
        t &&
        (t.tagName === "INPUT" ||
          t.tagName === "TEXTAREA" ||
          t.isContentEditable)
      ) {
        return;
      }
      if (e.key === "ArrowLeft") setVariant(cycle(current, -1));
      if (e.key === "ArrowRight") setVariant(cycle(current, 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]);

  if (import.meta.env.PROD) return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-[80] flex -translate-x-1/2 items-center gap-3 rounded-full bg-black px-3 py-2 text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
      <button
        type="button"
        className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-lg leading-none"
        onClick={() => setVariant(cycle(current, -1))}
        aria-label="Previous variant"
      >
        ←
      </button>
      <div className="min-w-[11rem] text-center text-[13px] font-medium tracking-wide">
        {current} · {NAMES[current]}
      </div>
      <button
        type="button"
        className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-lg leading-none"
        onClick={() => setVariant(cycle(current, 1))}
        aria-label="Next variant"
      >
        →
      </button>
    </div>
  );
}
