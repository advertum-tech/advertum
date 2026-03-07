"use client";
import cn from "classnames";
import oona from "../assets/styles/oona/oona.module.scss";
import { useLang } from "@/app/context/LanguageContext";

// ── Hero: agent network ───────────────────────────────────────────────────────
function HeroSvg({ lang }: { lang: string }) {
  const ru = lang === "ru";
  return (
    <svg viewBox="0 0 300 260" className="w-full" aria-hidden="true">
      <defs>
        <marker id="ai-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto">
          <path d="M0 1 L9 5 L0 9z" fill="#1a1a1a" />
        </marker>
      </defs>
      {[...Array(5)].map((_, i) => (
        <line key={`v${i}`} x1={75 * i} y1="0" x2={75 * i} y2="260" stroke="#d2c9bc" strokeWidth="0.5" />
      ))}
      {[...Array(5)].map((_, i) => (
        <line key={`h${i}`} x1="0" y1={65 * i} x2="300" y2={65 * i} stroke="#d2c9bc" strokeWidth="0.5" />
      ))}
      <rect x="8" y="110" width="64" height="36" rx="6" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="40" y="131" fontSize="9" fontFamily="monospace" fill="#1a1a1a" textAnchor="middle">
        {ru ? "Запрос" : "Request"}
      </text>
      <line x1="72" y1="128" x2="116" y2="80" stroke="#1a1a1a" strokeWidth="1" markerEnd="url(#ai-arr)" />
      <line x1="72" y1="128" x2="116" y2="128" stroke="#1a1a1a" strokeWidth="1" markerEnd="url(#ai-arr)" />
      <line x1="72" y1="128" x2="116" y2="176" stroke="#1a1a1a" strokeWidth="1" markerEnd="url(#ai-arr)" />
      {[
        { y: 62, label: "LLM", sub: ru ? "мозг" : "brain" },
        { y: 110, label: "MCP", sub: ru ? "руки" : "hands" },
        { y: 158, label: "RAG", sub: ru ? "память" : "memory" },
      ].map((a) => (
        <g key={a.label}>
          <rect x="120" y={a.y} width="68" height="36" rx="6" fill="white" stroke="#1a1a1a" strokeWidth="1.5" />
          <text x="154" y={a.y + 19} fontSize="11" fontFamily="monospace" fill="#1a1a1a" textAnchor="middle" fontWeight="600">{a.label}</text>
          <text x="154" y={a.y + 31} fontSize="8" fontFamily="monospace" fill="#bbb" textAnchor="middle">{a.sub}</text>
        </g>
      ))}
      <line x1="188" y1="80" x2="228" y2="128" stroke="#1a1a1a" strokeWidth="1" markerEnd="url(#ai-arr)" />
      <line x1="188" y1="128" x2="228" y2="128" stroke="#1a1a1a" strokeWidth="1" markerEnd="url(#ai-arr)" />
      <line x1="188" y1="176" x2="228" y2="128" stroke="#1a1a1a" strokeWidth="1" markerEnd="url(#ai-arr)" />
      <rect x="232" y="110" width="64" height="36" rx="6" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="264" y="131" fontSize="9" fontFamily="monospace" fill="#1a1a1a" textAnchor="middle">
        {ru ? "Ответ" : "Result"}
      </text>
    </svg>
  );
}

// ── Pain points: fragmented workday ──────────────────────────────────────────
function TimeSvg({ lang }: { lang: string }) {
  const ru = lang === "ru";
  const bars: [number, number][] = [
    [78,22],[98,14],[118,34],[142,16],[162,26],[182,12],
    [205,32],[225,18],[248,14],[268,28],[292,20],[312,30],
    [335,16],[355,24],[375,18],[398,28],[418,12],[440,22],
    [462,30],[482,16],[505,20],[525,26],[548,14],[568,20],
    [588,30],[608,18],[628,12],
  ];
  return (
    <svg viewBox="0 0 680 88" className="w-full rounded-2xl" style={{ background: "#f8f8f8" }} aria-hidden="true">
      {[...Array(12)].map((_, i) => (
        <line key={i} x1={60 * i} y1="0" x2={60 * i} y2="88" stroke="#efefef" strokeWidth="0.5" />
      ))}
      <line x1="60" y1="62" x2="640" y2="62" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="60"  y="78" fontSize="9" fontFamily="monospace" fill="#bbb" textAnchor="middle">9:00</text>
      <text x="350" y="78" fontSize="9" fontFamily="monospace" fill="#bbb" textAnchor="middle">13:00</text>
      <text x="640" y="78" fontSize="9" fontFamily="monospace" fill="#bbb" textAnchor="middle">18:00</text>
      {bars.map(([x, h], i) => (
        <rect key={i} x={x - 3} y={62 - h} width="6" height={h} fill={i % 5 === 0 ? "#1a1a1a" : "#ccc"} opacity="0.75" />
      ))}
      <text x="350" y="14" fontSize="9" fontFamily="monospace" fill="#bbb" textAnchor="middle" letterSpacing="2">
        {ru ? "— ваш рабочий день —" : "— your workday today —"}
      </text>
    </svg>
  );
}

// ── Pain point icons ──────────────────────────────────────────────────────────
const IconClock = () => (
  <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#1a1a1a" strokeWidth="1.5" aria-hidden="true">
    <circle cx="16" cy="16" r="12" />
    <line x1="16" y1="7" x2="16" y2="16" />
    <line x1="16" y1="16" x2="22" y2="20" />
    <circle cx="6"  cy="6"  r="2" fill="#ccc" stroke="none" />
    <circle cx="26" cy="6"  r="2" fill="#ccc" stroke="none" />
    <circle cx="6"  cy="26" r="2" fill="#ccc" stroke="none" />
    <circle cx="26" cy="26" r="2" fill="#ccc" stroke="none" />
  </svg>
);

const IconPerson = () => (
  <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#1a1a1a" strokeWidth="1.5" aria-hidden="true">
    <circle cx="12" cy="10" r="4" />
    <path d="M5 26 C5 20 19 20 19 26" />
    <path d="M22 12 C22 9 25 9 25 12 C27 12 27 15 25 15 L22 15 Z" />
    <line x1="25" y1="15" x2="25" y2="19" strokeDasharray="2 2" stroke="#bbb" />
    <line x1="22" y1="22" x2="28" y2="26" stroke="#bbb" strokeWidth="1" />
  </svg>
);

const IconDb = () => (
  <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#1a1a1a" strokeWidth="1.5" aria-hidden="true">
    <ellipse cx="16" cy="9" rx="10" ry="4" />
    <path d="M6 9 L6 23 C6 25.2 10.5 27 16 27 C21.5 27 26 25.2 26 23 L26 9" />
    <line x1="6" y1="16" x2="26" y2="16" stroke="#ddd" strokeWidth="1" />
    <line x1="11" y1="22" x2="13" y2="22" stroke="#bbb" strokeWidth="1" />
    <line x1="15" y1="22" x2="17" y2="22" stroke="#bbb" strokeWidth="1" />
    <line x1="19" y1="22" x2="21" y2="22" stroke="#bbb" strokeWidth="1" />
  </svg>
);

// ── Agent icons ───────────────────────────────────────────────────────────────
const IconDoc = () => (
  <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#1a1a1a" strokeWidth="1.5" aria-hidden="true">
    <rect x="5" y="3" width="18" height="26" rx="2" />
    <line x1="9" y1="11" x2="19" y2="11" stroke="#bbb" strokeWidth="1" />
    <line x1="9" y1="16" x2="19" y2="16" stroke="#bbb" strokeWidth="1" />
    <line x1="9" y1="21" x2="14" y2="21" stroke="#bbb" strokeWidth="1" />
  </svg>
);

const IconBar = () => (
  <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#1a1a1a" strokeWidth="1.5" aria-hidden="true">
    <line x1="4" y1="26" x2="28" y2="26" />
    <line x1="4" y1="26" x2="4"  y2="4" />
    <rect x="7"  y="17" width="5" height="9" fill="#e0e0e0" stroke="#bbb" strokeWidth="1" />
    <rect x="14" y="12" width="5" height="14" fill="#c0c0c0" stroke="#bbb" strokeWidth="1" />
    <rect x="21" y="7"  width="5" height="19" fill="#1a1a1a" strokeWidth="0" />
  </svg>
);

const IconChat = () => (
  <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#1a1a1a" strokeWidth="1.5" aria-hidden="true">
    <path d="M3 5 L29 5 L29 21 L18 21 L12 27 L12 21 L3 21 Z" />
    <circle cx="10" cy="13" r="1.5" fill="#1a1a1a" stroke="none" />
    <circle cx="16" cy="13" r="1.5" fill="#1a1a1a" stroke="none" />
    <circle cx="22" cy="13" r="1.5" fill="#1a1a1a" stroke="none" />
  </svg>
);

const IconBook = () => (
  <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#1a1a1a" strokeWidth="1.5" aria-hidden="true">
    <path d="M16 7 C16 7 10 5 4 7 L4 27 C10 25 16 27 16 27" />
    <path d="M16 7 C16 7 22 5 28 7 L28 27 C22 25 16 27 16 27" />
    <line x1="16" y1="7" x2="16" y2="27" />
  </svg>
);

const IconNet = () => (
  <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#1a1a1a" strokeWidth="1.5" aria-hidden="true">
    <circle cx="16" cy="16" r="4" />
    <circle cx="5"  cy="8"  r="3" />
    <circle cx="27" cy="8"  r="3" />
    <circle cx="5"  cy="24" r="3" />
    <circle cx="27" cy="24" r="3" />
    <line x1="8"  y1="10" x2="13" y2="14" strokeWidth="1" />
    <line x1="24" y1="10" x2="19" y2="14" strokeWidth="1" />
    <line x1="8"  y1="22" x2="13" y2="18" strokeWidth="1" />
    <line x1="24" y1="22" x2="19" y2="18" strokeWidth="1" />
  </svg>
);

// ── Case icons ────────────────────────────────────────────────────────────────
const IconCalendar = () => (
  <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#1a1a1a" strokeWidth="1.5" aria-hidden="true">
    <rect x="3" y="6" width="26" height="23" rx="3" />
    <line x1="3"  y1="13" x2="29" y2="13" />
    <line x1="10" y1="3"  x2="10" y2="9" />
    <line x1="22" y1="3"  x2="22" y2="9" />
    <circle cx="10" cy="20" r="1.5" fill="#1a1a1a" stroke="none" />
    <circle cx="16" cy="20" r="1.5" fill="#1a1a1a" stroke="none" />
    <circle cx="22" cy="20" r="1.5" fill="#bbb" stroke="none" />
    <circle cx="10" cy="25" r="1.5" fill="#bbb" stroke="none" />
    <circle cx="16" cy="25" r="1.5" fill="#bbb" stroke="none" />
  </svg>
);

const IconFactory = () => (
  <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#1a1a1a" strokeWidth="1.5" aria-hidden="true">
    <path d="M2 28 L2 14 L10 18 L10 14 L18 18 L18 14 L26 18 L26 28 Z" />
    <rect x="5"  y="21" width="5" height="7" />
    <rect x="14" y="21" width="5" height="7" />
    <line x1="22" y1="8" x2="22" y2="18" />
    <line x1="18" y1="8" x2="26" y2="8" />
    <line x1="18" y1="4" x2="26" y2="4" />
  </svg>
);

const IconPeople = () => (
  <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#1a1a1a" strokeWidth="1.5" aria-hidden="true">
    <circle cx="16" cy="7" r="4" />
    <line x1="16" y1="11" x2="16" y2="18" />
    <line x1="16" y1="18" x2="8"  y2="22" />
    <line x1="16" y1="18" x2="24" y2="22" />
    <circle cx="8"  cy="25" r="3" />
    <circle cx="24" cy="25" r="3" />
  </svg>
);

// ── Security: server boundary ─────────────────────────────────────────────────
function SecuritySvg({ lang }: { lang: string }) {
  const ru = lang === "ru";
  return (
    <svg viewBox="0 0 680 200" className="w-full rounded-3xl" style={{ background: "#f8f8f8" }} aria-hidden="true">
      <defs>
        <marker id="sec-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="3" markerHeight="3" orient="auto">
          <path d="M0 1 L9 5 L0 9z" fill="#ccc" />
        </marker>
      </defs>
      {[...Array(12)].map((_, i) => (
        <line key={`v${i}`} x1={60 * i} y1="0" x2={60 * i} y2="200" stroke="#efefef" strokeWidth="0.5" />
      ))}
      {[...Array(4)].map((_, i) => (
        <line key={`h${i}`} x1="0" y1={50 * i} x2="680" y2={50 * i} stroke="#efefef" strokeWidth="0.5" />
      ))}

      {/* Your infrastructure boundary */}
      <rect x="40" y="24" width="380" height="152" rx="8" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
      <text x="230" y="16" fontSize="8" fontFamily="monospace" fill="#bbb" textAnchor="middle" letterSpacing="3">
        {ru ? "ВАША ИНФРАСТРУКТУРА" : "YOUR INFRASTRUCTURE"}
      </text>

      {/* Three servers inside */}
      {[80, 190, 300].map((x, i) => (
        <g key={i}>
          <rect x={x} y="55" width="80" height="90" rx="4" fill="white" stroke="#ddd" strokeWidth="1" />
          {[0, 1, 2, 3].map((j) => (
            <g key={j}>
              <rect x={x + 8} y={63 + j * 20} width="64" height="13" rx="2" fill="none" stroke="#e8e8e8" strokeWidth="1" />
              <circle cx={x + 17} cy={69 + j * 20} r="2" fill={j % 2 === 0 ? "#1a1a1a" : "#ddd"} />
            </g>
          ))}
          <text x={x + 40} y="158" fontSize="7" fontFamily="monospace" fill="#ccc" textAnchor="middle">
            {["ERP / 1С", ru ? "База данных" : "Database", "CRM / API"][i]}
          </text>
        </g>
      ))}

      {/* Lock symbol in center-right of boundary */}
      <g transform="translate(370, 80)">
        <rect x="0" y="10" width="30" height="24" rx="3" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <path d="M6 10 L6 5 C6 0 24 0 24 5 L24 10" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
        <circle cx="15" cy="22" r="3" fill="#1a1a1a" />
      </g>

      {/* External cloud — blocked */}
      <rect x="510" y="60" width="120" height="80" rx="6" fill="none" stroke="#ddd" strokeWidth="1" strokeDasharray="5 4" />
      <text x="570" y="97"  fontSize="9" fontFamily="monospace" fill="#ccc" textAnchor="middle">External</text>
      <text x="570" y="110" fontSize="9" fontFamily="monospace" fill="#ccc" textAnchor="middle">Cloud</text>

      {/* Blocked arrow */}
      <line x1="510" y1="100" x2="436" y2="100" stroke="#ddd" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#sec-arr)" />
      <line x1="444" y1="94"  x2="452" y2="106" stroke="#bbb" strokeWidth="2" />
      <line x1="452" y1="94"  x2="444" y2="106" stroke="#bbb" strokeWidth="2" />

      {/* Labels */}
      <text x="570" y="155" fontSize="8" fontFamily="monospace" fill="#ccc" textAnchor="middle">
        {ru ? "— заблокировано —" : "— blocked —"}
      </text>
    </svg>
  );
}

// ── How we work: process timeline ─────────────────────────────────────────────
function ProcessSvg({ lang }: { lang: string }) {
  const ru = lang === "ru";
  const steps = ru
    ? ["Аудит", "Пилот", "Интеграция", "Масштаб"]
    : ["Audit", "Pilot", "Integration", "Scale"];
  const xs = [100, 293, 487, 680 - 100];
  return (
    <svg viewBox="0 0 680 72" className="w-full" aria-hidden="true">
      <defs>
        <marker id="proc-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto">
          <path d="M0 1 L9 5 L0 9z" fill="#1a1a1a" />
        </marker>
      </defs>
      <line x1={xs[0]} y1="28" x2={xs[3]} y2="28" stroke="#1a1a1a" strokeWidth="1" />
      {xs.map((x, i) => (
        <g key={i}>
          <circle cx={x} cy="28" r="14" fill={i === 0 ? "#1a1a1a" : "white"} stroke="#1a1a1a" strokeWidth="1.5" />
          <text x={x} y="33" fontSize="9" fontFamily="monospace" fill={i === 0 ? "white" : "#1a1a1a"} textAnchor="middle" fontWeight="600">
            {`0${i + 1}`}
          </text>
          <text x={x} y="58" fontSize="9" fontFamily="monospace" fill="#1a1a1a" textAnchor="middle">
            {steps[i]}
          </text>
        </g>
      ))}
      {xs.slice(0, 3).map((x, i) => (
        <line key={i} x1={x + 14} y1="28" x2={xs[i + 1] - 14} y2="28" stroke="#1a1a1a" strokeWidth="1" markerEnd="url(#proc-arr)" />
      ))}
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function AI() {
  const { lang } = useLang();
  const ru = lang === "ru";

  return (
    <>
      {/* ── 1. HERO ── */}
      <div className="bg-accentBackground text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12 l7">
                <h1 className="text-[45px] lg:text-[70px] tracking-tight">
                  {ru ? "Рутину — агентам. Решения — людям." : "Routine to agents. Decisions to people."}
                </h1>
                <p className="lg:text-[1.4rem] font-normal my-5 leading-normal">
                  {ru
                    ? "Мы внедряем AI-агентов в бизнес-процессы — подключаем к вашим системам, разворачиваем на ваших серверах, настраиваем под ваши задачи."
                    : "We embed AI agents into business operations — connected to your systems, running on your servers, tuned to your processes."}
                </p>
                <a href="/contact" className={cn("flow-text", oona["item-title"])}>
                  {ru ? "Обсудить пилот →" : "Discuss a pilot →"}
                </a>
              </div>
              <div className="col s12 l5 hide-on-med-and-down flex items-center">
                <HeroSvg lang={lang} />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ── 2. БОЛИ ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight mb-6">
                  {ru ? "Где теряется время" : "Where time goes"}
                </h2>
                <TimeSvg lang={lang} />
              </div>
            </div>
            <div className="row mt-8">
              {[
                {
                  icon: <IconClock />,
                  ru: "Задачи, которые нельзя делегировать",
                  en: "Tasks too small to delegate, too many to ignore",
                  descRu: "Запись, заявки, отчёты — всё это съедает часы каждый день, но нанимать человека под это нецелесообразно.",
                  descEn: "Appointments, requests, reports — each takes minutes, together they take hours.",
                },
                {
                  icon: <IconPerson />,
                  ru: "Знания внутри людей, а не систем",
                  en: "Expertise lives in people, not systems",
                  descRu: "Уходит сотрудник — уходит экспертиза. Регламенты есть, но их никто не читает и не применяет.",
                  descEn: "When someone leaves, knowledge leaves with them. Policies exist but nobody consults them.",
                },
                {
                  icon: <IconDb />,
                  ru: "Данные есть — картины нет",
                  en: "Data exists, but it's silent",
                  descRu: "ERP, 1С, базы, таблицы — данные разбросаны, никто их не агрегирует, никто по ним не действует.",
                  descEn: "ERP, databases, spreadsheets — data is scattered, nobody aggregates it, nobody acts on it.",
                },
              ].map((item, i) => (
                <div key={i} className="col s12 l4 margin-on-medium-and-down">
                  <div className="mb-3">{item.icon}</div>
                  <span className={cn("flow-text", oona["item-title"])}>{ru ? item.ru : item.en}</span>
                  <p className="text-sm text-gray-500 mt-1">{ru ? item.descRu : item.descEn}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ── 3. КАК РАБОТАЕТ (pipeline) ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight">
                  {ru ? "Как это работает" : "How it works"}
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <svg viewBox="0 0 680 270" className="w-full rounded-3xl" style={{background: '#f8f8f8'}}>
                  <defs>
                    <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
                      <path d="M0 0.5 L9 5 L0 9.5z" fill="#1a1a1a"/>
                    </marker>
                    <marker id="arr-sm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto">
                      <path d="M0 0.5 L9 5 L0 9.5z" fill="#ccc"/>
                    </marker>
                  </defs>
                  {[...Array(12)].map((_, i) => (
                    <line key={`v${i}`} x1={60*i} y1="0" x2={60*i} y2="270" stroke="#e8e8e8" strokeWidth="0.5"/>
                  ))}
                  {[...Array(5)].map((_, i) => (
                    <line key={`h${i}`} x1="0" y1={60*i} x2="680" y2={60*i} stroke="#e8e8e8" strokeWidth="0.5"/>
                  ))}
                  <rect x="25" y="84" width="118" height="48" rx="8" fill="white" stroke="#1a1a1a" strokeWidth="1.5"/>
                  <text x="84" y="113" fontSize="12" fontFamily="monospace" fill="#1a1a1a" textAnchor="middle">
                    {ru ? "Запрос" : "Request"}
                  </text>
                  <line x1="143" y1="108" x2="198" y2="108" stroke="#1a1a1a" strokeWidth="1.5" markerEnd="url(#arr)"/>
                  <rect x="202" y="58" width="276" height="100" rx="12" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
                  <text x="340" y="78" fontSize="9" fontFamily="monospace" fill="#bbb" textAnchor="middle" letterSpacing="4">
                    {ru ? "АГЕНТ" : "AGENT"}
                  </text>
                  <line x1="214" y1="86" x2="466" y2="86" stroke="#ebebeb" strokeWidth="1"/>
                  <line x1="294" y1="86" x2="294" y2="158" stroke="#ebebeb" strokeWidth="1"/>
                  <line x1="386" y1="86" x2="386" y2="158" stroke="#ebebeb" strokeWidth="1"/>
                  <text x="248" y="116" fontSize="13" fontFamily="monospace" fill="#1a1a1a" textAnchor="middle" fontWeight="600">LLM</text>
                  <text x="248" y="134" fontSize="9" fontFamily="monospace" fill="#bbb" textAnchor="middle">{ru ? "— мозг" : "— brain"}</text>
                  <text x="340" y="116" fontSize="13" fontFamily="monospace" fill="#1a1a1a" textAnchor="middle" fontWeight="600">MCP</text>
                  <text x="340" y="134" fontSize="9" fontFamily="monospace" fill="#bbb" textAnchor="middle">{ru ? "— руки" : "— hands"}</text>
                  <text x="432" y="116" fontSize="13" fontFamily="monospace" fill="#1a1a1a" textAnchor="middle" fontWeight="600">RAG</text>
                  <text x="432" y="134" fontSize="9" fontFamily="monospace" fill="#bbb" textAnchor="middle">{ru ? "— память" : "— memory"}</text>
                  <line x1="478" y1="108" x2="537" y2="108" stroke="#1a1a1a" strokeWidth="1.5" markerEnd="url(#arr)"/>
                  <rect x="541" y="84" width="118" height="48" rx="8" fill="white" stroke="#1a1a1a" strokeWidth="1.5"/>
                  <text x="600" y="113" fontSize="12" fontFamily="monospace" fill="#1a1a1a" textAnchor="middle">
                    {ru ? "Отчёт" : "Report"}
                  </text>
                  <line x1="248" y1="158" x2="248" y2="210" stroke="#ddd" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arr-sm)"/>
                  <line x1="340" y1="158" x2="340" y2="210" stroke="#ddd" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arr-sm)"/>
                  <line x1="432" y1="158" x2="432" y2="210" stroke="#ddd" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arr-sm)"/>
                  <rect x="202" y="213" width="90" height="34" rx="6" fill="none" stroke="#ddd" strokeWidth="1" strokeDasharray="4 3"/>
                  <text x="248" y="234" fontSize="10" fontFamily="monospace" fill="#bbb" textAnchor="middle">ERP / 1С</text>
                  <rect x="294" y="213" width="90" height="34" rx="6" fill="none" stroke="#ddd" strokeWidth="1" strokeDasharray="4 3"/>
                  <text x="340" y="234" fontSize="10" fontFamily="monospace" fill="#bbb" textAnchor="middle">{ru ? "Базы данных" : "Databases"}</text>
                  <rect x="386" y="213" width="90" height="34" rx="6" fill="none" stroke="#ddd" strokeWidth="1" strokeDasharray="4 3"/>
                  <text x="432" y="234" fontSize="10" fontFamily="monospace" fill="#bbb" textAnchor="middle">CRM / API</text>
                </svg>
              </div>
            </div>
            <div className="row mt-6">
              {[
                { ru: "LLM — мозг", en: "LLM — brain", descRu: "Понимание языка, reasoning, принятие решений", descEn: "Language understanding, reasoning, decision-making" },
                { ru: "MCP — руки", en: "MCP — hands", descRu: "Стандартный интерфейс к инструментам и внешним системам", descEn: "Standard interface to tools and external systems" },
                { ru: "RAG — память", en: "RAG — memory", descRu: "Ответы из корпоративной базы знаний, актуальный контекст", descEn: "Answers from your corporate knowledge base, in context" },
              ].map((item, i) => (
                <div key={i} className="col s12 l4 margin-on-medium-and-down">
                  <p className="flow-text font-mono">{ru ? item.ru : item.en}</p>
                  <p className="text-sm text-gray-500">{ru ? item.descRu : item.descEn}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ── 4. АГЕНТЫ ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight">
                  {ru ? "Команда агентов" : "Meet the agents"}
                </h2>
              </div>
            </div>
            <div className="row">
              {[
                { icon: <IconDoc />, ru: "Документалист", en: "The Documentalist", descRu: "Чертежи, спецификации, договоры. Читает технические документы, структурирует и создаёт документацию.", descEn: "Technical drawings, specs, contracts. Reads, structures, and generates documentation." },
                { icon: <IconBar />, ru: "Аналитик", en: "The Analyst", descRu: "KPI, продажи, операции. Собирает данные из разных систем, строит отчёты, находит аномалии.", descEn: "KPIs, sales, operations. Pulls data from multiple systems, builds reports, flags anomalies." },
                { icon: <IconChat />, ru: "Коммуникатор", en: "The Communicator", descRu: "Клиенты, партнёры, внутренние запросы. Отвечает на вопросы, маршрутизирует обращения, записывает.", descEn: "Customers, partners, internal requests. Responds, routes, and books appointments." },
                { icon: <IconBook />, ru: "Куратор знаний", en: "The Knowledge Curator", descRu: "Регламенты, стандарты, база знаний. Онбординг, обучение, ответы на типовые вопросы.", descEn: "Regulations, standards, knowledge base. Onboarding, training, recurring questions." },
                { icon: <IconNet />, ru: "Интегратор", en: "The Integrator", descRu: "ERP, 1С, CRM, базы данных. Подключает агентов к вашим системам без переписывания инфраструктуры.", descEn: "ERP, 1C, CRM, databases. Connects agents to your systems without rewriting infrastructure." },
              ].map((agent, i) => (
                <div key={i} className="col s12 l4 margin-on-medium-and-down">
                  <div className="mb-3">{agent.icon}</div>
                  <span className={cn("flow-text", oona["item-title"])}>{ru ? agent.ru : agent.en}</span>
                  <p className="text-sm text-gray-500 mt-1">{ru ? agent.descRu : agent.descEn}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ── 5. КЕЙСЫ ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight">
                  {ru ? "Кейсы" : "Case studies"}
                </h2>
              </div>
            </div>
            <div className="row">
              {[
                {
                  icon: <IconCalendar />,
                  labelRu: "Салон красоты", labelEn: "Beauty salon",
                  problemRu: "Администратор записывал клиентов вручную — конфликты расписания, пропущенные звонки, работа только в рабочее время.",
                  problemEn: "The administrator booked clients manually — scheduling conflicts, missed calls, no service outside business hours.",
                  resultRu: "AI-агент в Telegram принимает записи на естественном языке, синхронизирует с расписанием и 1С. Запись работает 24/7.",
                  resultEn: "A Telegram agent accepts bookings in natural language, syncs with schedule and 1C. Bookings run 24/7.",
                  href: null,
                },
                {
                  icon: <IconFactory />,
                  labelRu: "Производство · Фабрика Аэрозолей", labelEn: "Manufacturing · Aerosol Factory",
                  problemRu: "Планировщик тратил часы на сбор данных из разных систем: склад, заказы, каталог — прежде чем принять одно решение о запуске партии.",
                  problemEn: "The planner spent hours gathering data from different systems: inventory, orders, catalog — before making a single production decision.",
                  resultRu: "AI-агент в Telegram запрашивает данные и выдаёт рекомендацию по объёму производства за секунды.",
                  resultEn: "An AI agent in Telegram queries data and delivers a production volume recommendation in seconds.",
                  href: "/cases/aerosol-factory",
                },
                {
                  icon: <IconPeople />,
                  labelRu: "Корпоративный клиент", labelEn: "Enterprise",
                  problemRu: "Новые сотрудники тратили недели на онбординг: регламенты разрознены, нет единого источника ответов.",
                  problemEn: "New employees spent weeks onboarding: policies scattered, no single source of truth.",
                  resultRu: "Агент-куратор знаний отвечает на вопросы по регламентам и проводит по процессам. Онбординг сократился с недель до дней.",
                  resultEn: "A knowledge agent answers policy questions and guides through processes. Onboarding reduced from weeks to days.",
                  href: null,
                },
              ].map((item, i) => (
                <div key={i} className="col s12 l4 margin-on-medium-and-down">
                  <div className="rounded-3xl bg-gray-50 p-6 flex flex-col">
                    <div className="mb-3">{item.icon}</div>
                    <span className="text-xs font-mono text-gray-400 uppercase">{ru ? item.labelRu : item.labelEn}</span>
                    <p className="flow-text mt-2">{ru ? item.problemRu : item.problemEn}</p>
                    <p className="text-sm text-gray-500 mt-1">{ru ? item.resultRu : item.resultEn}</p>
                    {item.href && (
                      <a href={item.href} className={cn("text-sm font-mono mt-4", oona["item-title"])}>
                        {ru ? "Читать кейс →" : "Read case →"}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ── 6. БЕЗОПАСНОСТЬ ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight">
                  {ru ? "Ваши данные не покидают компанию" : "Your data stays inside"}
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <SecuritySvg lang={lang} />
              </div>
            </div>
            <div className="row mt-6">
              {[
                { ru: "Локальный деплой", en: "Local deployment", descRu: "Данные остаются на серверах клиента — никакого внешнего облака", descEn: "Data stays on your servers — no external cloud" },
                { ru: "Открытые модели", en: "Open-source models", descRu: "DeepSeek, Llama, Qwen — независимость от зарубежных провайдеров", descEn: "DeepSeek, Llama, Qwen — no dependency on foreign providers" },
                { ru: "ФЗ-152", en: "Data compliance", descRu: "Соответствие российскому законодательству о персональных данных", descEn: "Compliant with data protection law" },
              ].map((item, i) => (
                <div key={i} className="col s12 l4 margin-on-medium-and-down">
                  <span className={cn("flow-text", oona["item-title"])}>{ru ? item.ru : item.en}</span>
                  <p className="text-sm text-gray-500 mt-1">{ru ? item.descRu : item.descEn}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ── 7. КАК МЫ РАБОТАЕМ ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight">
                  {ru ? "Как мы работаем" : "How we work"}
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <ProcessSvg lang={lang} />
              </div>
            </div>
            <div className="row mt-4">
              {[
                { ru: "Аудит", en: "Audit", descRu: "Изучаем процессы, находим точки автоматизации", descEn: "We study your processes and find automation opportunities" },
                { ru: "Пилот", en: "Pilot", descRu: "Быстрый MVP на одном процессе — 2–4 недели", descEn: "A quick MVP on one process — 2–4 weeks" },
                { ru: "Интеграция", en: "Integration", descRu: "Подключение к системам клиента", descEn: "Connecting to your existing systems" },
                { ru: "Масштаб", en: "Scale", descRu: "Расширение на другие процессы", descEn: "Expanding to other processes" },
              ].map((step, i) => (
                <div key={i} className="col s12 l3 margin-on-medium-and-down">
                  <span className="font-mono text-gray-400 text-sm">{`0${i + 1}`}</span>
                  <span className={cn("flow-text", oona["item-title"])}> {ru ? step.ru : step.en}</span>
                  <p className="text-sm text-gray-500 mt-1">{ru ? step.descRu : step.descEn}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ── 8. CTA ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"], oona["get-in-touch"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight">
                  {ru
                    ? "Давайте найдём, где у вас теряется время"
                    : "Let\u2019s find where your time goes"}
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col s12 l6">
                <p className={cn("flow-text", oona["item-title"])}>
                  {ru
                    ? <><a href="/contact" className="ajax-link">Напишите нам</a> — обсудим ваш процесс и покажем, как агент может помочь.</>
                    : <><a href="/contact" className="ajax-link">Get in touch</a> — we&apos;ll discuss your process and show how an agent can help.</>}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
