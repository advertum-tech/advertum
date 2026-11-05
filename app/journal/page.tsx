"use client";

import { useLang } from "@/app/context/LanguageContext";
import LangToggle from "@/app/context/LangToggle";

function DisplacementSvg({ lang }: { lang: string }) {
  return (
    <svg
      viewBox="0 0 680 400"
      className="max-w-full h-auto rounded-3xl"
      style={{ background: "#f8f8f8" }}
    >
      {[...Array(12)].map((_, i) => (
        <line key={`v${i}`} x1={60 * i} y1="0" x2={60 * i} y2="400" stroke="#e5e5e5" strokeWidth="0.5" />
      ))}
      {[...Array(8)].map((_, i) => (
        <line key={`h${i}`} x1="0" y1={50 * i} x2="680" y2={50 * i} stroke="#e5e5e5" strokeWidth="0.5" />
      ))}
      <path d="M40 320 Q120 310 180 280 Q240 250 300 180 Q360 110 420 70 Q480 30 560 20 Q600 15 640 12" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      <path d="M40 320 Q120 315 180 300 Q240 285 300 260 Q360 230 420 200 Q480 170 560 150 Q600 140 640 135" fill="none" stroke="#999" strokeWidth="1.5" strokeDasharray="6 4" />
      {([[180, 280], [300, 180], [420, 70], [560, 20]] as [number, number][]).map(([cx, cy], i) => (
        <g key={`n${i}`}>
          <circle cx={cx} cy={cy} r="5" fill="#1a1a1a" />
          <circle cx={cx} cy={cy} r="12" fill="none" stroke="#1a1a1a" strokeWidth="0.8" />
        </g>
      ))}
      {([[300, 180, 260], [420, 70, 200]] as [number, number, number][]).map(([x, y1, y2], i) => (
        <line key={`d${i}`} x1={x} y1={y1} x2={x} y2={y2} stroke="#c00" strokeWidth="1" strokeDasharray="3 3" />
      ))}
      <text x="50" y="30" fontSize="13" fontFamily="monospace" fill="#999">
        {lang === "et" ? "vaimne töö → odavneb" : lang === "ru" ? "умственный труд → дешевеет" : "cognitive labor → cheap"}
      </text>
      <text x="400" y="380" fontSize="13" fontFamily="monospace" fill="#999">
        {lang === "et" ? "füüsiline töö → jääb napiks" : lang === "ru" ? "физический труд → в дефиците" : "physical labor → scarce"}
      </text>
    </svg>
  );
}

function HarnessSvg() {
  return (
    <svg
      viewBox="0 0 680 400"
      className="max-w-full h-auto rounded-3xl"
      style={{ background: "#f8f8f8" }}
    >
      {[...Array(12)].map((_, i) => (
        <line key={`v${i}`} x1={60 * i} y1="0" x2={60 * i} y2="400" stroke="#e5e5e5" strokeWidth="0.5" />
      ))}
      {[...Array(8)].map((_, i) => (
        <line key={`h${i}`} x1="0" y1={50 * i} x2="680" y2={50 * i} stroke="#e5e5e5" strokeWidth="0.5" />
      ))}
      {(["Types", "Config", "Repo", "Service", "Runtime", "UI"] as const).map((label, i) => {
        const x = 80 + i * 90;
        const y = 160;
        return (
          <g key={label}>
            <rect x={x} y={y} width="72" height="32" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
            <text x={x + 36} y={y + 20} fontSize="10" fontFamily="monospace" fill="#1a1a1a" textAnchor="middle">{label}</text>
            {i < 5 && <line x1={x + 72} y1={y + 16} x2={x + 90} y2={y + 16} stroke="#1a1a1a" strokeWidth="1" markerEnd="url(#arrow-j)" />}
          </g>
        );
      })}
      <defs>
        <marker id="arrow-j" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#1a1a1a" />
        </marker>
      </defs>
      <rect x="80" y="240" width="612" height="28" rx="4" fill="none" stroke="#999" strokeWidth="1" strokeDasharray="4 3" />
      <text x="340" y="258" fontSize="10" fontFamily="monospace" fill="#999" textAnchor="middle">Providers (auth, telemetry, connectors, feature flags)</text>
      <circle cx="340" cy="70" r="28" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="340" y="74" fontSize="10" fontFamily="monospace" fill="#1a1a1a" textAnchor="middle">Codex</text>
      {([170, 260, 350, 440, 530] as number[]).map((x, i) => (
        <line key={`c${i}`} x1="340" y1="98" x2={x} y2="160" stroke="#ddd" strokeWidth="0.8" />
      ))}
      <path d="M380 70 Q500 40 560 70 Q620 100 600 130 Q580 155 530 155" fill="none" stroke="#c00" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrow-j)" />
      <text x="580" y="90" fontSize="9" fontFamily="monospace" fill="#c00">feedback</text>
      <text x="50" y="340" fontSize="11" fontFamily="monospace" fill="#999">1M loc · 1500 PRs · 3 engineers</text>
      <text x="420" y="340" fontSize="11" fontFamily="monospace" fill="#999">0 lines hand-written</text>
    </svg>
  );
}

function VibeSvg({ lang }: { lang: string }) {
  const baseY = 330;
  const bars: [string, number, string][] = [
    ["EN", 32, "#999"],
    ["RU", 34, "#1a1a1a"],
  ];
  return (
    <svg
      viewBox="0 0 680 400"
      className="max-w-full h-auto rounded-3xl"
      style={{ background: "#f8f8f8" }}
    >
      {[...Array(12)].map((_, i) => (
        <line key={`v${i}`} x1={60 * i} y1="0" x2={60 * i} y2="400" stroke="#e5e5e5" strokeWidth="0.5" />
      ))}
      {[...Array(8)].map((_, i) => (
        <line key={`h${i}`} x1="0" y1={50 * i} x2="680" y2={50 * i} stroke="#e5e5e5" strokeWidth="0.5" />
      ))}
      {bars.map(([label, value, color], i) => {
        const x = 200 + i * 160;
        const h = value * 6.25;
        return (
          <g key={label}>
            <rect x={x} y={baseY - h} width="120" height={h} fill={color} />
            <text x={x + 60} y={baseY - h - 14} fontSize="28" fontFamily="monospace" fill="#1a1a1a" textAnchor="middle">
              {value}
            </text>
            <text x={x + 60} y={baseY + 26} fontSize="14" fontFamily="monospace" fill="#999" textAnchor="middle">
              {label}
            </text>
          </g>
        );
      })}
      <line x1="160" y1={baseY} x2="520" y2={baseY} stroke="#1a1a1a" strokeWidth="1" />
      <text x="50" y="30" fontSize="13" fontFamily="monospace" fill="#999">
        {lang === "ru" ? "SWE-bench: решено задач из 100" : "SWE-bench: tasks solved out of 100"}
      </text>
      <text x="630" y="380" fontSize="11" fontFamily="monospace" fill="#999" textAnchor="end">
        GPT-5-mini · MAPS, 2026
      </text>
    </svg>
  );
}

export default function Journal() {
  const lang = useLang();
  const p = lang === "et" ? "/et" : lang === "ru" ? "/ru" : "";

  return (
    <div className="bg-white text-main">
      <div className="mx-auto w-[90%] max-w-[1600px] sm:w-4/5">
        <section className="py-20 max-lg:py-16 max-sm:py-12">
          <div className="flex items-center justify-between">
            <h2 className="tracking-tight">{lang === 'et' ? 'Ajakiri' : lang === 'ru' ? 'Журнал' : 'Journal'}</h2>
            <LangToggle />
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 lg:gap-y-12">
            <div className="w-full">
              <a href={`${p}/vibe-coding-in-russian`} className="border-b-0">
                <VibeSvg lang={lang} />
              </a>
              <div className="meta">
                <time dateTime="2026-11-05">11/2026</time>
                <span>
                  &nbsp;·{" "}
                  {lang === "ru" ? "ИИ-агенты · Замеры" : "AI Agents · Benchmarks"}
                </span>
              </div>
              <a href={`${p}/vibe-coding-in-russian`} className="text-[1.2rem] lg:text-[1.68rem] font-normal">
                {lang === "ru" ? "Вайб-кодинг на русском" : "Vibe coding in Russian"}
              </a>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {lang === "ru"
                  ? "Замеры 2026 года: с заданием на русском агент решает задачи по коду не хуже, чем с заданием на английском."
                  : "2026 benchmarks: a coding agent solves as many tasks from Russian instructions as from English ones."}
              </p>
            </div>
            <div className="w-full">
              <a href={`${p}/great-displacement`} className="border-b-0">
                <DisplacementSvg lang={lang} />
              </a>
              <div className="meta">
                <time dateTime="2026-02-01">02/2026</time>
                <span>
                  &nbsp;·{" "}
                  {lang === "et" ? "Tööjärgne ajastu · Manifest" : lang === "ru" ? "Пост-работа · Манифест" : "Post-work · Manifesto"}
                </span>
              </div>
              <a href={`${p}/great-displacement`} className="text-[1.2rem] lg:text-[1.68rem] font-normal">
                {lang === "et" ? "Suur väljatõrjumine" : lang === "ru" ? "Великое вытеснение" : "The Great Displacement"}
              </a>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {lang === "et"
                  ? "AI muudab vaimse töö odavaks kiiremini, kui jõuame ümber õppida. Kõige napimaks ressursiks saavad käed, mitte pead."
                  : lang === "ru"
                  ? "ИИ обесценивает умственный труд быстрее, чем мы успеваем переучиться. Самым дефицитным ресурсом станут руки, а не головы."
                  : "AI is devaluing cognitive labor faster than we can retrain. The scarcest resource will be hands, not minds."}
              </p>
            </div>
            <div className="w-full">
              <a href={`${p}/harness-engineering`} className="border-b-0">
                <HarnessSvg />
              </a>
              <div className="meta">
                <time dateTime="2026-02-11">02/2026</time>
                <span>
                  &nbsp;·{" "}
                  {lang === "et"
                    ? "AI-agendid · Null käsitsi"
                    : lang === "ru"
                    ? "ИИ-агенты · Ноль вручную"
                    : "AI Agents · Zero Hand-written"}
                </span>
              </div>
              <a href={`${p}/harness-engineering`} className="text-[1.2rem] lg:text-[1.68rem] font-normal">
                {lang === "et" ? "Harness-inseneeria" : lang === "ru" ? "Harness-инженерия" : "Harness Engineering"}
              </a>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {lang === "et"
                  ? "Kolm inseneri, Codex ja miljon rida koodi — mitte ükski pole käsitsi kirjutatud. OpenAI näitas, milline näeb välja arendus, kui agendid teevad kogu töö."
                  : lang === "ru"
                  ? "Три инженера, Codex и миллион строк кода — ни одной написанной вручную. OpenAI показала, как выглядит разработка, когда агенты делают всю работу."
                  : "Three engineers, Codex, and a million lines of code — none written by hand. OpenAI showed what development looks like when agents do all the heavy lifting."}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
