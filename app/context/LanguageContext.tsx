"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Lang = "en" | "ru";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    const stored = sessionStorage.getItem("lang") as Lang | null;
    if (stored) setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    sessionStorage.setItem("lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
