"use client";

import { useLang } from "@/app/context/LanguageContext";

export default function LangToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLang();

  const active: React.CSSProperties = {
    backgroundColor: "#111827",
    color: "#ffffff",
    border: "none",
    cursor: "pointer",
  };

  const inactive: React.CSSProperties = {
    backgroundColor: "#f3f4f6",
    color: "#6b7280",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div className={`flex gap-1 text-xs ${className ?? ""}`}>
      <button
        onClick={() => setLang("en")}
        style={lang === "en" ? active : inactive}
        className="rounded-l-full px-4 py-1.5 transition-colors"
      >
        EN
      </button>
      <button
        onClick={() => setLang("ru")}
        style={lang === "ru" ? active : inactive}
        className="rounded-r-full px-4 py-1.5 transition-colors"
      >
        RU
      </button>
    </div>
  );
}
