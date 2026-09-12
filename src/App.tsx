import { useEffect, useState } from "react";
import { PrototypeSwitcher, type VariantKey } from "./PrototypeSwitcher";
import { ThemeProvider } from "./theme";
import { VariantA } from "./variants/VariantA";
import { VariantB } from "./variants/VariantB";
import { VariantC } from "./variants/VariantC";

// Three variants of the UGC Tech Girl portfolio homepage, switchable via
// ?variant=, on this throwaway prototype app (there is no existing site yet).

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

  return (
    <ThemeProvider>
      {variant === "A" && <VariantA />}
      {variant === "B" && <VariantB />}
      {variant === "C" && <VariantC />}
      <PrototypeSwitcher current={variant} />
    </ThemeProvider>
  );
}
