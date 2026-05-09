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

        @media (max-width: 720px) {
          .eesti-container { padding: 40px 18px 64px; }
          .eesti-section { margin-top: 48px; }
          .eesti-grid-3 { grid-template-columns: 1fr; gap: 28px; }
          .eesti-header h1 { font-size: 1.5rem; }
          .eesti-table { font-size: 0.88rem; }
          .eesti-table th, .eesti-table td { padding: 10px 10px; }
          .eesti-table .case-cell { min-width: 130px; }
        }
      `}</style>

      <div className="eesti">
        <div className="eesti-container">

          <header className="eesti-header">
            <h1>Эстонский</h1>
            <p>Личная база знаний</p>
          </header>

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

        </div>
      </div>
    </>
  );
}
