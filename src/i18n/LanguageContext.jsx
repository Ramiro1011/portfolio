import { createContext, useContext, useMemo, useState } from "react";
import { content } from "./content";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "es") return stored;
    return navigator.language?.startsWith("es") ? "es" : "en";
  });

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "en" ? "es" : "en";
      localStorage.setItem("lang", next);
      return next;
    });
  };

  const value = useMemo(() => ({ lang, toggleLang, t: content[lang] }), [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
