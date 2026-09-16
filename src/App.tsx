import { useEffect, useState } from "react";
import { PrototypeSwitcher, type VariantKey } from "./PrototypeSwitcher";
import { ThemeProvider } from "./theme";
import { VariantA } from "./variants/VariantA";
import { VariantB } from "./variants/VariantB";
import { VariantC } from "./variants/VariantC";

// Live site is always layout A. Locally, ?variant= and the switcher still work.

function readVariant(): VariantKey {
  const v = new URLSearchParams(window.location.search).get("variant");
  if (v === "A" || v === "B" || v === "C") return v;
  return "A";
}

export default function App() {
  const [variant, setVariant] = useState<VariantKey>(readVariant);

  useEffect(() => {
    const sync = () => setVariant(readVariant());
    window.addEventListener("popstate", sync);
    window.addEventListener("prototype-variant", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("prototype-variant", sync);
    };
  }, []);

  const live = (
    <ThemeProvider>
      <VariantA />
    </ThemeProvider>
  );

  if (import.meta.env.PROD) {
    return live;
  }

  return (
    <ThemeProvider>
      {variant === "A" && <VariantA />}
      {variant === "B" && <VariantB />}
      {variant === "C" && <VariantC />}
      <PrototypeSwitcher current={variant} />
    </ThemeProvider>
  );
}
