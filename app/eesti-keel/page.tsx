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
            <h2 className="eesti-section-title">Mitmuse omastav — множественный родительный</h2>
            <p className="eesti-section-sub">
              Формы вида hammaste, sõprade, arvutite. Родительный падеж
              множественного числа — это не accusative plural.
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
              <strong>Запомни:</strong> plural omastav ≠ accusative plural. Это
              родительный падеж.
            </div>
          </section>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
