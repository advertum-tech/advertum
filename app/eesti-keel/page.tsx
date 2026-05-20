import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Эстонский — личная база знаний",
  description: "Личные заметки по эстонскому языку: вопросительные слова, склонение по падежам.",
  robots: { index: false, follow: false },
};

const BG           = "#262624";
const SURFACE      = "#30302e";
const TEXT         = "#faf9f5";
const TEXT_DIM     = "#b6b5ad";
const BORDER       = "rgba(250, 249, 245, 0.08)";

const PURPLE_BG     = "rgba(196, 168, 232, 0.12)";
const PURPLE_FG     = "#c4a8e8";
const PURPLE_BORDER = "rgba(196, 168, 232, 0.25)";

const TEAL_BG       = "rgba(128, 196, 190, 0.12)";
const TEAL_FG       = "#80c4be";
const TEAL_BORDER   = "rgba(128, 196, 190, 0.25)";

const AMBER_BG      = "rgba(232, 195, 120, 0.12)";
const AMBER_FG      = "#e8c378";
const AMBER_BORDER  = "rgba(232, 195, 120, 0.25)";

const SANS = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", system-ui, sans-serif';

type Tone = "purple" | "teal" | "amber";

const TONE: Record<Tone, { bg: string; fg: string; border: string }> = {
  purple: { bg: PURPLE_BG, fg: PURPLE_FG, border: PURPLE_BORDER },
  teal:   { bg: TEAL_BG,   fg: TEAL_FG,   border: TEAL_BORDER },
  amber:  { bg: AMBER_BG,  fg: AMBER_FG,  border: AMBER_BORDER },
};

type Word = { et: string; ru: string };

const GROUP_DECLINABLE: Word[] = [
  { et: "kes?",        ru: "кто? (о людях)" },
  { et: "mis?",        ru: "что? (о предметах)" },
  { et: "milline?",    ru: "какой? (выбор из вариантов)" },
  { et: "missugune?",  ru: "какой? (общее качество)" },
];

const GROUP_PLACE: Word[] = [
  { et: "kus?",  ru: "где?" },
  { et: "kuhu?", ru: "куда?" },
  { et: "kust?", ru: "откуда?" },
];

const GROUP_INVARIABLE: Word[] = [
  { et: "millal?",     ru: "когда?" },
  { et: "kui kaua?",   ru: "как долго?" },
  { et: "kuidas?",     ru: "как?" },
  { et: "kui palju?",  ru: "сколько? (неисчисляемое)" },
  { et: "mitu?",       ru: "сколько? (исчисляемое)" },
  { et: "miks?",       ru: "почему?" },
  { et: "kas?",        ru: "ли? (да/нет)" },
];

type CaseRow = {
  case: string;
  ru: string;
  forms: [string, string, string, string]; // kes, mis, milline, missugune
};

const CASES: CaseRow[] = [
  { case: "nimetav",     ru: "кто? что? какой?",       forms: ["kes",     "mis",     "milline",    "missugune"] },
  { case: "omastav",     ru: "кого? чей?",              forms: ["kelle",   "mille",   "millise",    "missuguse"] },
  { case: "osastav",     ru: "кого? что? (вин.)",       forms: ["keda",    "mida",    "millist",    "missugust"] },
  { case: "sisseütlev",  ru: "в кого? во что?",         forms: ["kellesse","millesse","millisesse", "missugusesse"] },
  { case: "seesütlev",   ru: "в ком? в чём?",           forms: ["kelles",  "milles",  "millises",   "missuguses"] },
  { case: "seestütlev",  ru: "о ком? из кого?",         forms: ["kellest", "millest", "millisest",  "missugusest"] },
  { case: "alalütlev",   ru: "у кого? у чего?",         forms: ["kellel",  "millel",  "millisel",   "missugusel"] },
  { case: "alaleütlev",  ru: "кому? чему?",             forms: ["kellele", "millele", "millisele",  "missugusele"] },
  { case: "alaltütlev",  ru: "от кого? от чего?",       forms: ["kellelt", "millelt", "milliselt",  "missuguselt"] },
  { case: "kaasaütlev",  ru: "с кем? с чем?",           forms: ["kellega", "millega", "millisega",  "missugusega"] },
  { case: "ilmaütlev",   ru: "без кого? без чего?",     forms: ["kelleta", "milleta", "milliseta",  "missuguseta"] },
];

const HEADERS: Word[] = [
  { et: "kes",       ru: "о людях" },
  { et: "mis",       ru: "о предметах" },
  { et: "milline",   ru: "выбор" },
  { et: "missugune", ru: "качество" },
];

type AnalogRow = { case: string; q: string; ru: string };

const ANALOGS: AnalogRow[] = [
  { case: "nimetav", q: "kes? mis?",     ru: "именительный — кто? что?" },
  { case: "omastav", q: "kelle? mille?", ru: "родительный — кого? чего? чей?" },
  { case: "osastav", q: "keda? mida?",   ru: "винительный — кого? что?, с оттенком частичности" },
];

const ANALOG_NOTES: { k: string; v: string; tone: Tone }[] = [
  {
    k: "nimetav ↔ именительный",
    v: "почти один в один",
    tone: "amber",
  },
  {
    k: "omastav ↔ родительный",
    v: "основное соответствие. Отвечает на «чей?» (kelle raamat? — чья книга?). Также падеж завершённого прямого дополнения — в русском это винительный.",
    tone: "purple",
  },
  {
    k: "osastav ↔ винительный / родительный частичный",
    v: "уникальный падеж без прямого аналога: частичный объект (joon vett — пью воду), отрицание (ma ei näe sind), после числительных (kaks raamatut), управление многих глаголов.",
    tone: "teal",
  },
];

const EXAMPLES: { et: string; tag: string; ru: string; tone: Tone }[] = [
  { et: "Loen raamatu.",  tag: "omastav", ru: "прочитаю книгу целиком — действие завершено",  tone: "purple" },
  { et: "Loen raamatut.", tag: "osastav", ru: "читаю книгу — процесс, действие не закончено", tone: "teal" },
];

const POM_USAGE: { title: string; description: string; words: Word[]; tone: Tone }[] = [
  {
    title: "Принадлежность",
    description: "«чьих» / «чего»",
    tone: "purple",
    words: [
      { et: "naabrite koer", ru: "собака соседей" },
      { et: "sõprade ring",  ru: "круг друзей" },
      { et: "kasside toit",  ru: "корм для кошек" },
    ],
  },
  {
    title: "Сложные слова / определения",
    description: "одно существительное определяет другое",
    tone: "teal",
    words: [
      { et: "raamatute pood", ru: "книжный магазин (магазин книг)" },
      { et: "naiste ajakiri", ru: "женский журнал (журнал женщин)" },
      { et: "meeste juuksur", ru: "мужской парикмахер" },
    ],
  },
  {
    title: "Послелоги, время и место",
    description: "перед послелогом / в выражениях времени и места",
    tone: "amber",
    words: [
      { et: "puude vahel",    ru: "между деревьями" },
      { et: "kappide juures", ru: "у шкафов" },
      { et: "tööde ajal",     ru: "во время работ" },
    ],
  },
];

type PomRow = { form: string; example: string; ru: string };

const POM_TABLE: PomRow[] = [
  { form: "hammaste",  example: "hammaste pesemine", ru: "чистка зубов" },
  { form: "sõprade",   example: "sõprade abi",       ru: "помощь друзей" },
  { form: "arvutite",  example: "arvutite remont",   ru: "ремонт компьютеров" },
  { form: "piltide",   example: "piltide näitus",    ru: "выставка картин" },
  { form: "kappide",   example: "kappide vahel",     ru: "между шкафами" },
  { form: "kasside",   example: "kasside toit",      ru: "корм для кошек" },
  { form: "tüdrukute", example: "tüdrukute kool",    ru: "школа для девочек" },
  { form: "puude",     example: "puude vari",        ru: "тень деревьев" },
  { form: "tööde",     example: "tööde nimekiri",    ru: "список работ" },
  { form: "raamatute", example: "raamatute riiul",   ru: "книжная полка" },
  { form: "hiirte",    example: "hiirte arv",        ru: "количество мышей" },
  { form: "põtrade",   example: "põtrade jaht",      ru: "охота на лосей" },
  { form: "naiste",    example: "naiste rõivad",     ru: "женская одежда" },
  { form: "meeste",    example: "meeste maailm",     ru: "мужской мир" },
  { form: "naabrite",  example: "naabrite aed",      ru: "сад соседей" },
];

const POSTPOSITIONS: Word[] = [
  { et: "pealt",  ru: "с (сверху)" },
  { et: "all",    ru: "под" },
  { et: "juures", ru: "у, рядом" },
  { et: "kohal",  ru: "над" },
  { et: "peal",   ru: "на" },
  { et: "kõrval", ru: "возле, рядом" },
  { et: "ääres",  ru: "у, около (берега)" },
  { et: "käest",  ru: "у / от (из рук)" },
  { et: "sees",   ru: "внутри, в" },
  { et: "käes",   ru: "у / в руках" },
  { et: "keskel", ru: "посреди" },
  { et: "taga",   ru: "за" },
  { et: "vahel",  ru: "между" },
];

function Card({ word, tone }: { word: Word; tone: Tone }) {
  const t = TONE[tone];
  return (
    <div
      style={{
        background: t.bg,
        border: `1px solid ${t.border}`,
        borderRadius: 8,
        padding: "14px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <div style={{ color: t.fg, fontWeight: 500, fontSize: "1rem" }}>{word.et}</div>
      <div style={{ color: TEXT_DIM, fontSize: "0.82rem", lineHeight: 1.4 }}>{word.ru}</div>
    </div>
  );
}

function Group({
  title,
  description,
  words,
  tone,
}: {
  title: string;
  description: string;
  words: Word[];
  tone: Tone;
}) {
  const t = TONE[tone];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <h3 style={{ color: t.fg, fontSize: "1.1rem", fontWeight: 500, margin: 0 }}>{title}</h3>
        <p style={{ color: TEXT_DIM, fontSize: "0.82rem", margin: "4px 0 0", lineHeight: 1.5 }}>
          {description}
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {words.map((w) => (
          <Card key={w.et} word={w} tone={tone} />
        ))}
      </div>
    </div>
  );
}

export default function EestiKeel() {
  return (
    <>
      <style>{`
        /* dark warm theme bleeds into the global Nav and Footer while this page is mounted */
        body { background: ${BG} !important; }

        nav .bg-accentBackground { background: ${BG} !important; }
        nav .text-main { color: ${TEXT} !important; }
        nav [class*="border-main/25"] { border-color: rgba(250, 249, 245, 0.18) !important; }
        nav [class*="border-main/50"] { border-color: rgba(250, 249, 245, 0.3) !important; }
        nav .bg-white { background: ${SURFACE} !important; }
        nav ul.fixed [class*="hover:bg-black"]:hover { background: rgba(250, 249, 245, 0.06) !important; }

        footer.bg-accentBackground { background: ${BG} !important; color: ${TEXT} !important; }
        footer a { color: ${TEXT} !important; }
        footer .text-gray-400 { color: ${TEXT_DIM} !important; }

        .eesti { background: ${BG}; color: ${TEXT}; min-height: 100vh; font-family: ${SANS}; }
        .eesti * { box-sizing: border-box; }

        .eesti-container { max-width: 980px; margin: 0 auto; padding: 64px 32px 96px; }

        .eesti-header h1 { font-size: 1.75rem; font-weight: 600; margin: 0; letter-spacing: -0.01em; }
        .eesti-header p  { color: ${TEXT_DIM}; font-size: 0.95rem; margin: 6px 0 0; }

        .eesti-section-title { font-size: 1.25rem; font-weight: 500; margin: 0; }
        .eesti-section-sub   { color: ${TEXT_DIM}; font-size: 0.92rem; margin: 6px 0 0; line-height: 1.55; }

        .eesti-section { margin-top: 72px; }

        .eesti-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 32px;
        }

        .eesti-table-wrap {
          margin-top: 28px;
          background: ${PURPLE_BG};
          border: 1px solid ${PURPLE_BORDER};
          border-radius: 14px;
          overflow: hidden;
        }
        .eesti-table-scroll { overflow-x: auto; }

        .eesti-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
        }
        .eesti-table th, .eesti-table td {
          padding: 12px 14px;
          text-align: center;
          border-bottom: 1px solid ${PURPLE_BORDER};
          border-right: 1px solid ${PURPLE_BORDER};
          vertical-align: middle;
        }
        .eesti-table th:last-child, .eesti-table td:last-child { border-right: none; }
        .eesti-table tr:last-child td { border-bottom: none; }

        .eesti-table thead th {
          color: ${PURPLE_FG};
          font-weight: 500;
          font-size: 0.95rem;
        }
        .eesti-table thead th .hint {
          display: block;
          color: ${TEXT_DIM};
          font-size: 0.72rem;
          font-weight: 400;
          margin-top: 2px;
        }

        .eesti-table .case-cell {
          text-align: left;
          min-width: 160px;
        }
        .eesti-table .case-cell .name {
          color: ${TEXT};
          font-weight: 500;
        }
        .eesti-table .case-cell .ru {
          color: ${TEXT_DIM};
          font-size: 0.78rem;
          margin-top: 2px;
        }

        .eesti-table tbody tr:first-child td:not(.case-cell) {
          color: ${PURPLE_FG};
          font-weight: 500;
        }

        .eesti-divider {
          border: none;
          border-top: 1px solid ${BORDER};
          margin: 80px 0 48px;
        }

        .eesti-table--analog tbody tr:first-child td:not(.case-cell) {
          color: ${TEXT};
          font-weight: 400;
        }
        .eesti-table--analog td:not(.case-cell) { text-align: left; }
        .eesti-table--analog th { text-align: left; }

        .eesti-prose { color: ${TEXT_DIM}; font-size: 0.92rem; line-height: 1.6; margin: 28px 0 0; }
        .eesti-prose strong { color: ${TEXT}; font-weight: 500; }

        .eesti-notes { display: flex; flex-direction: column; gap: 12px; margin-top: 28px; }
        .eesti-note { border-left: 2px solid ${BORDER}; padding: 4px 0 4px 16px; }
        .eesti-note .k { font-weight: 500; font-size: 0.95rem; display: block; }
        .eesti-note .v {
          color: ${TEXT_DIM};
          font-size: 0.86rem;
          line-height: 1.5;
          display: block;
          margin-top: 3px;
        }

        .eesti-ex { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 24px; }
        .eesti-ex-card {
          border-radius: 10px;
          padding: 16px 18px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .eesti-ex-et  { font-size: 1.05rem; font-weight: 500; }
        .eesti-ex-tag { font-size: 0.72rem; letter-spacing: 0.04em; text-transform: uppercase; }
        .eesti-ex-ru  { color: ${TEXT_DIM}; font-size: 0.84rem; line-height: 1.45; }

        .eesti-tabs { margin-top: 40px; }
        .eesti-tab-radio {
          position: absolute;
          width: 1px;
          height: 1px;
          opacity: 0;
          pointer-events: none;
        }
        .eesti-tabbar {
          display: flex;
          gap: 4px;
          border-bottom: 1px solid ${BORDER};
          overflow-x: auto;
        }
        .eesti-tab {
          padding: 12px 18px;
          font-size: 0.92rem;
          font-weight: 500;
          color: ${TEXT_DIM};
          cursor: pointer;
          border-bottom: 2px solid transparent;
          margin-bottom: -1px;
          white-space: nowrap;
          user-select: none;
          transition: color 0.15s, border-color 0.15s;
        }
        .eesti-tab:hover { color: ${TEXT}; }

        .eesti-panel { display: none; }

        #eesti-tab-main:checked ~ .eesti-tabbar label[for="eesti-tab-main"],
        #eesti-tab-pomastav:checked ~ .eesti-tabbar label[for="eesti-tab-pomastav"] {
          color: ${PURPLE_FG};
          border-bottom-color: ${PURPLE_FG};
        }
        #eesti-tab-main:checked ~ .eesti-panel[data-tab="main"],
        #eesti-tab-pomastav:checked ~ .eesti-panel[data-tab="pomastav"] {
          display: block;
        }

        .eesti-callout {
          margin-top: 28px;
          background: ${AMBER_BG};
          border: 1px solid ${AMBER_BORDER};
          border-radius: 10px;
          padding: 14px 18px;
          color: ${TEXT};
          font-size: 0.9rem;
          line-height: 1.55;
        }
        .eesti-callout strong { color: ${AMBER_FG}; font-weight: 600; }

        .eesti-rule {
          margin-top: 24px;
          background: ${TEAL_BG};
          border: 1px solid ${TEAL_BORDER};
          border-radius: 12px;
          padding: 18px 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .eesti-rule-case {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .eesti-rule-cond { color: ${TEAL_FG}; font-size: 0.86rem; font-weight: 500; }
        .eesti-rule-ex {
          color: ${TEXT_DIM};
          font-size: 0.86rem;
          font-family: ui-monospace, "SF Mono", Menlo, monospace;
        }
        .eesti-rule .mark { color: ${AMBER_FG}; font-weight: 600; }

        .eesti-box { max-width: 820px; margin: 28px auto 0; }
        .eesti-box svg { width: 100%; height: auto; display: block; }
        .eesti-loc-foot {
          margin-top: 22px;
          text-align: center;
          color: ${TEXT_DIM};
          font-size: 0.9rem;
          line-height: 1.75;
        }
        .eesti-loc-foot b { color: ${TEXT}; font-weight: 500; }

        @media (max-width: 720px) {
          .eesti-container { padding: 40px 18px 64px; }
          .eesti-section { margin-top: 48px; }
          .eesti-grid-3 { grid-template-columns: 1fr; gap: 28px; }
          .eesti-header h1 { font-size: 1.5rem; }
          .eesti-table { font-size: 0.88rem; }
          .eesti-table th, .eesti-table td { padding: 10px 10px; }
          .eesti-table .case-cell { min-width: 130px; }
          .eesti-divider { margin: 48px 0 32px; }
          .eesti-ex { grid-template-columns: 1fr; gap: 12px; }
          .eesti-tabs { margin-top: 28px; }
          .eesti-tab { padding: 10px 14px; font-size: 0.88rem; }
          .eesti-rule { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>

      <div className="eesti">
        <div className="eesti-container">

          <header className="eesti-header">
            <h1>Эстонский</h1>
            <p>Личная база знаний</p>
          </header>

          <div className="eesti-tabs">
            <input type="radio" name="eesti-tab" id="eesti-tab-main" className="eesti-tab-radio" defaultChecked />
            <input type="radio" name="eesti-tab" id="eesti-tab-pomastav" className="eesti-tab-radio" />

            <div className="eesti-tabbar">
              <label htmlFor="eesti-tab-main" className="eesti-tab">Main</label>
              <label htmlFor="eesti-tab-pomastav" className="eesti-tab">24 · Mitmuse omastav</label>
            </div>

            <div className="eesti-panel" data-tab="main">

          <section className="eesti-section">
            <h2 className="eesti-section-title">Вопросительные слова — три группы</h2>
            <p className="eesti-section-sub">У каждой группы своё поведение</p>

            <div className="eesti-grid-3">
              <Group
                title="Склоняемые"
                description="меняют форму по падежу"
                words={GROUP_DECLINABLE}
                tone="purple"
              />
              <Group
                title="О месте"
                description="фиксированная тройка"
                words={GROUP_PLACE}
                tone="teal"
              />
              <Group
                title="Неизменяемые"
                description="одна форма"
                words={GROUP_INVARIABLE}
                tone="amber"
              />
            </div>
          </section>

          <section className="eesti-section">
            <h2 className="eesti-section-title">Склонение по падежам</h2>
            <p className="eesti-section-sub">8 главных форм для каждого из 4 склоняемых вопросов</p>

            <div className="eesti-table-wrap">
              <div className="eesti-table-scroll">
                <table className="eesti-table">
                  <thead>
                    <tr>
                      <th className="case-cell" style={{ textAlign: "left" }}>Падеж</th>
                      {HEADERS.map((h) => (
                        <th key={h.et}>
                          {h.et}
                          <span className="hint">{h.ru}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {CASES.map((row) => (
                      <tr key={row.case}>
                        <td className="case-cell">
                          <div className="name">{row.case}</div>
                          <div className="ru">{row.ru}</div>
                        </td>
                        {row.forms.map((f, i) => (
                          <td key={i}>{f}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <hr className="eesti-divider" />

          <section className="eesti-block">
            <h2 className="eesti-section-title">Локативные падежи — «коробочка»</h2>
            <p className="eesti-section-sub">
              <b>-sse → -s → -st</b> проходит сквозь коробочку (внутрь · внутри · изнутри).
              <b> -le</b> заходит на коробочку, <b>-lt</b> сходит с неё; <b>-l</b> —
              нахождение на поверхности, без движения.
            </p>

            <div className="eesti-box">
              <svg viewBox="0 0 1120 770" role="img" aria-label="Локативные падежи — коробочка">
                <defs>
                  <marker
                    id="eb-arrow"
                    viewBox="0 0 10 10"
                    refX="8"
                    refY="5"
                    markerWidth="7"
                    markerHeight="7"
                    orient="auto"
                  >
                    <path d="M0,0 L10,5 L0,10 z" fill={AMBER_FG} />
                  </marker>
                </defs>

                {/* вопросы-колонки */}
                {([
                  ["kuhu? · куда", 185],
                  ["kus? · где", 560],
                  ["kust? · откуда", 935],
                ] as [string, number][]).map(([t, cx]) => (
                  <text
                    key={t}
                    x={cx}
                    y={32}
                    fontSize={27}
                    fontWeight={600}
                    fill={AMBER_FG}
                    textAnchor="middle"
                    fontFamily={SANS}
                  >
                    {t}
                  </text>
                ))}

                {/* подписи групп */}
                <text x={25} y={72} fontSize={22} fill={TONE.teal.fg} fontFamily={SANS}>
                  ala- · на поверхности (снаружи)
                </text>
                <text x={25} y={456} fontSize={22} fill={TONE.purple.fg} fontFamily={SANS}>
                  sisse- · внутри коробочки
                </text>

                {/* рамка «коробочки» вокруг блока -s */}
                <rect x={375} y={449} width={370} height={275} rx={16} fill="none" stroke={AMBER_FG} strokeWidth={4} />
                <text x={560} y={702} fontSize={26} fill={TEXT_DIM} textAnchor="middle" fontFamily={SANS}>коробочка</text>

                {/* ячейки — все одинакового размера 320×180 */}
                {([
                  { x: 25,  y: 90,  end: "-le",  q: "kuhu? · ma lähen", tr: "иду на …",     c: TONE.teal.fg },
                  { x: 400, y: 90,  end: "-l",   q: "kus? · ma olen",   tr: "есть на …",    c: TONE.teal.fg },
                  { x: 775, y: 90,  end: "-lt",  q: "kust? · ma tulen", tr: "прихожу с …",  c: TONE.teal.fg },
                  { x: 25,  y: 474, end: "-sse", q: "kuhu? · ma lähen", tr: "иду в …",      c: TONE.purple.fg },
                  { x: 400, y: 474, end: "-s",   q: "kus? · ma olen",   tr: "есть в …",     c: TONE.purple.fg },
                  { x: 775, y: 474, end: "-st",  q: "kust? · ma tulen", tr: "прихожу из …", c: TONE.purple.fg },
                ] as { x: number; y: number; end: string; q: string; tr: string; c: string }[]).map((b) => (
                  <g key={b.end}>
                    <rect
                      x={b.x}
                      y={b.y}
                      width={320}
                      height={180}
                      rx={10}
                      fill={SURFACE}
                      stroke="rgba(250,249,245,0.30)"
                      strokeWidth={2}
                    />
                    <text x={b.x + 160} y={b.y + 60} fontSize={52} fontWeight={700} fill={b.c} textAnchor="middle" fontFamily={SANS}>{b.end}</text>
                    <text x={b.x + 160} y={b.y + 110} fontSize={24} fill={TEXT} textAnchor="middle" fontFamily={SANS}>{b.q}</text>
                    <text x={b.x + 160} y={b.y + 148} fontSize={23} fill={TEXT_DIM} textAnchor="middle" fontFamily={SANS}>{b.tr}</text>
                  </g>
                ))}

                {/* стрелки */}
                <g stroke={AMBER_FG} strokeWidth={4} fill="none" markerEnd="url(#eb-arrow)">
                  <line x1={345} y1={564} x2={371} y2={564} />
                  <line x1={745} y1={564} x2={771} y2={564} />
                  <line x1={345} y1={266} x2={556} y2={452} />
                  <line x1={564} y1={452} x2={788} y2={268} />
                </g>
              </svg>
            </div>

            <div className="eesti-loc-foot">
              <b>poodi → poes → poest</b> — в магазин · в магазине · из магазина
              <br />
              <b>turule → turul → turult</b> — на рынок · на рынке · с рынка
            </div>
          </section>

          <hr className="eesti-divider" />

          <section className="eesti-block">
            <h2 className="eesti-section-title">nimetav · omastav · osastav — русские аналоги</h2>
            <p className="eesti-section-sub">Три падежа, на которых держится прямое дополнение</p>

            <div className="eesti-table-wrap">
              <div className="eesti-table-scroll">
                <table className="eesti-table eesti-table--analog">
                  <thead>
                    <tr>
                      <th className="case-cell" style={{ textAlign: "left" }}>Эстонский падеж</th>
                      <th>Вопросы</th>
                      <th>Ближайший русский аналог</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ANALOGS.map((row) => (
                      <tr key={row.case}>
                        <td className="case-cell">
                          <div className="name">{row.case}</div>
                        </td>
                        <td>{row.q}</td>
                        <td>{row.ru}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="eesti-notes">
              {ANALOG_NOTES.map((n) => (
                <div
                  key={n.k}
                  className="eesti-note"
                  style={{ borderLeftColor: TONE[n.tone].border }}
                >
                  <span className="k" style={{ color: TONE[n.tone].fg }}>{n.k}</span>
                  <span className="v">{n.v}</span>
                </div>
              ))}
            </div>

            <p className="eesti-prose">
              <strong>Прямое дополнение</strong> — слово, на которое переходит действие
              глагола (кого? что?). В русском это всегда винительный. В эстонском —
              omastav или osastav, в зависимости от того, завершено действие или нет.
            </p>

            <div className="eesti-ex">
              {EXAMPLES.map((e) => (
                <div
                  key={e.et}
                  className="eesti-ex-card"
                  style={{
                    background: TONE[e.tone].bg,
                    border: `1px solid ${TONE[e.tone].border}`,
                  }}
                >
                  <div className="eesti-ex-et">{e.et}</div>
                  <div className="eesti-ex-tag" style={{ color: TONE[e.tone].fg }}>
                    {e.tag}
                  </div>
                  <div className="eesti-ex-ru">{e.ru}</div>
                </div>
              ))}
            </div>
          </section>

            </div>

            <div className="eesti-panel" data-tab="pomastav">

          <section className="eesti-section">
            <h2 className="eesti-section-title">Как образуется</h2>
            <p className="eesti-section-sub">
              Берём <strong style={{ color: TEXT }}>osastav</strong> единственного числа
              и добавляем признак мн. числа{" "}
              <b className="mark" style={{ color: AMBER_FG }}>-DE / -TE / (-E)</b>
            </p>

            <div className="eesti-rule">
              <div className="eesti-rule-case">
                <div className="eesti-rule-cond">osastav на -t / -d → +e → -TE / -DE</div>
                <div className="eesti-rule-ex">
                  raamat · raamatu · raamatu<b className="mark">t</b> → raamatu<b className="mark">TE</b>
                </div>
                <div className="eesti-rule-ex">
                  idee · idee · idee<b className="mark">d</b> → idee<b className="mark">DE</b>
                </div>
              </div>
              <div className="eesti-rule-case">
                <div className="eesti-rule-cond">osastav на гласную → -DE</div>
                <div className="eesti-rule-ex">
                  lill · lille · lille → lille<b className="mark">DE</b>
                </div>
                <div className="eesti-rule-ex">
                  laud · laua · lauda → lauda<b className="mark">DE</b>
                </div>
              </div>
            </div>
          </section>

          <section className="eesti-section">
            <h2 className="eesti-section-title">Mitmuse omastav — множественный родительный</h2>
            <p className="eesti-section-sub">
              Формы вида hammaste, sõprade, arvutite. Родительный падеж
              множественного числа — не путать с формой прямого дополнения мн. числа
              (слово-объект действия, кого? что?; на -d: Pesen hambad — чищу зубы).
            </p>

            <div className="eesti-grid-3">
              {POM_USAGE.map((g) => (
                <Group
                  key={g.title}
                  title={g.title}
                  description={g.description}
                  words={g.words}
                  tone={g.tone}
                />
              ))}
            </div>
          </section>

          <section className="eesti-section">
            <h2 className="eesti-section-title">Примеры</h2>
            <p className="eesti-section-sub">
              Форма множественного omastav → словосочетание → перевод
            </p>

            <div className="eesti-table-wrap">
              <div className="eesti-table-scroll">
                <table className="eesti-table eesti-table--analog">
                  <thead>
                    <tr>
                      <th className="case-cell" style={{ textAlign: "left" }}>Plural omastav</th>
                      <th>Пример</th>
                      <th>Перевод</th>
                    </tr>
                  </thead>
                  <tbody>
                    {POM_TABLE.map((r) => (
                      <tr key={r.form}>
                        <td className="case-cell">
                          <div className="name">{r.form}</div>
                        </td>
                        <td>{r.example}</td>
                        <td>{r.ru}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="eesti-callout">
              <strong>Запомни:</strong> mitmuse omastav (hammaste, на -te/-de) ≠ форма
              прямого дополнения мн. числа (слово-объект действия, кого? что?; hambad,
              на -d). Это родительный падеж.
            </div>
          </section>

          <hr className="eesti-divider" />

          <section className="eesti-section">
            <h2 className="eesti-section-title">Послелоги и их значения</h2>
            <p className="eesti-section-sub">Стоят после слова в omastav</p>

            <div className="eesti-table-wrap">
              <div className="eesti-table-scroll">
                <table className="eesti-table eesti-table--analog">
                  <thead>
                    <tr>
                      <th className="case-cell" style={{ textAlign: "left" }}>Послелог</th>
                      <th>Перевод</th>
                    </tr>
                  </thead>
                  <tbody>
                    {POSTPOSITIONS.map((p) => (
                      <tr key={p.et}>
                        <td className="case-cell">
                          <div className="name">{p.et}</div>
                        </td>
                        <td>{p.ru}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
