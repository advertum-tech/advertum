"use client";

import { useLang } from "@/app/context/LanguageContext";
import LangToggle from "@/app/context/LangToggle";

function DisplacementSvg() {
  return (
    <svg
      viewBox="0 0 680 400"
      className="responsive-img rounded-3xl"
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
      <text x="50" y="30" fontSize="13" fontFamily="monospace" fill="#999">cognitive labor → cheap</text>
      <text x="400" y="380" fontSize="13" fontFamily="monospace" fill="#999">physical labor → scarce</text>
    </svg>
  );
}

function HarnessSvg() {
  return (
    <svg
      viewBox="0 0 680 400"
      className="responsive-img rounded-3xl"
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

export default function Journal() {
  const { lang } = useLang();

  return (
    <div className="bg-white text-main">
      <div className="container !w-[90%] !max-w-[1600px] sm:!w-4/5">
        <section className="section py-20 max-lg:py-16 max-sm:py-12">
          <div className="row">
            <div className="col s12 flex items-center justify-between">
              <h2 className="tracking-tight">{lang === 'ru' ? 'Журнал' : 'Journal'}</h2>
              <LangToggle />
            </div>
          </div>
          <div className="row">
            <div className="col s12 l6 margin-on-medium-and-down">
              <a href="/great-displacement" className="!border-b-0">
                <DisplacementSvg />
              </a>
              <div className="meta">
                <time dateTime="2026-02-01">02/2026</time>
                <span>
                  &nbsp;·{" "}
                  {lang === "ru" ? "Пост-работа · Манифест" : "Post-work · Manifesto"}
                </span>
              </div>
              <a href="/great-displacement" className="flow-text !font-normal">
                {lang === "ru" ? "Великое вытеснение" : "The Great Displacement"}
              </a>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {lang === "ru"
                  ? "ИИ обесценивает умственный труд быстрее, чем мы успеваем переучиться. Самым дефицитным ресурсом станут руки, а не головы."
                  : "AI is devaluing cognitive labor faster than we can retrain. The scarcest resource will be hands, not minds."}
              </p>
            </div>
            <div className="col s12 l6">
              <a href="/harness-engineering" className="!border-b-0">
                <HarnessSvg />
              </a>
              <div className="meta">
                <time dateTime="2026-02-11">02/2026</time>
                <span>
                  &nbsp;·{" "}
                  {lang === "ru"
                    ? "ИИ-агенты · Ноль вручную"
                    : "AI Agents · Zero Hand-written"}
                </span>
              </div>
              <a href="/harness-engineering" className="flow-text !font-normal">
                {lang === "ru" ? "Harness-инженерия" : "Harness Engineering"}
              </a>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {lang === "ru"
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
