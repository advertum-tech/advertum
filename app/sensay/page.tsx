"use client";
import { useState, useEffect } from "react";

const BG = "#0e1117";
const BG2 = "#111820";
const ACCENT = "#22d3a0";
const TEXT = "#f0f4f8";
const MUTED = "#6b7280";
const CARD = "#1a1f29";
const BORDER = "#252d38";
const MONO = "Roboto Mono, monospace";

function WaveformBars() {
  const bars = [18, 32, 52, 72, 88, 64, 44, 72, 88, 56, 36, 52, 72, 88, 64, 44, 28, 48, 68, 88, 60, 40, 20];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4, height: 80 }}>
      {bars.map((h, i) => (
        <div
          key={i}
          style={{
            width: 3,
            height: h,
            borderRadius: 2,
            backgroundColor: ACCENT,
            opacity: 0.85,
            animation: `sensay-wave ${0.7 + (i % 6) * 0.13}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.04}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function SensayLanding() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > window.innerHeight * 0.75);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes sensay-wave {
          from { transform: scaleY(0.35); }
          to   { transform: scaleY(1); }
        }
        .sensay-page a { color: inherit; }
        .sensay-btn-primary {
          background: ${ACCENT};
          color: ${BG};
          font-family: ${MONO};
          font-size: 0.9rem;
          font-weight: 500;
          padding: 14px 32px;
          border-radius: 4px;
          text-decoration: none;
          display: inline-block;
          transition: opacity 0.15s;
        }
        .sensay-btn-primary:hover { opacity: 0.85; }
        .sensay-btn-ghost {
          color: ${MUTED};
          font-family: ${MONO};
          font-size: 0.9rem;
          padding: 14px 0;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.15s;
        }
        .sensay-btn-ghost:hover { color: ${TEXT}; }
      `}</style>

      <div className="sensay-page" style={{ background: BG, minHeight: "100vh" }}>

        {/* Header — overlays Advertum nav via z-[999] */}
        <header style={{
          position: "fixed", top: 0, left: 0, width: "100%",
          background: BG, borderBottom: `1px solid ${BORDER}`,
          zIndex: 999, height: 56,
          display: "flex", alignItems: "center",
        }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <circle cx="13" cy="13" r="12" stroke={ACCENT} strokeWidth="1.5" />
                <rect x="7"  y="9"  width="2.5" height="8"  rx="1.25" fill={ACCENT} />
                <rect x="11.75" y="6" width="2.5" height="14" rx="1.25" fill={ACCENT} />
                <rect x="16.5" y="10" width="2.5" height="6" rx="1.25" fill={ACCENT} />
              </svg>
              <span style={{ color: TEXT, fontFamily: MONO, fontSize: "1.05rem", letterSpacing: "-0.02em" }}>Сенсей</span>
            </div>
            <a href="#pricing" className="sensay-btn-primary" style={{ padding: "8px 20px", fontSize: "0.78rem" }}>
              Попробовать
            </a>
          </div>
        </header>

        {/* ── HERO ── */}
        <section style={{ background: BG, minHeight: "100vh", paddingTop: 56, display: "flex", alignItems: "center" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200, padding: "88px 0 80px" }}>
            <div style={{ maxWidth: 780 }}>
              <div style={{ color: ACCENT, fontFamily: MONO, fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "2rem", opacity: 0.9 }}>
                Голосовой ИИ-диктант
              </div>
              <h1 style={{ color: TEXT, fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 1.05, fontWeight: 400, margin: "0 0 1.5rem", letterSpacing: "-0.03em", fontFamily: MONO }}>
                Говори.<br />
                <span style={{ color: ACCENT }}>Остальное</span><br />
                напишется.
              </h1>
              <p style={{ color: MUTED, fontSize: "clamp(0.95rem, 2vw, 1.2rem)", lineHeight: 1.75, maxWidth: 540, marginBottom: "2.5rem", fontFamily: MONO, fontWeight: 400 }}>
                Сенсей превращает вашу речь в готовый текст — без «эканий», без опечаток, в любом приложении. В 4× быстрее набора вручную.
              </p>
              <WaveformBars />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: "2.5rem" }}>
                <a href="#pricing" className="sensay-btn-primary">Попробовать бесплатно</a>
                <a href="#how" className="sensay-btn-ghost">Как это работает →</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── ВАУ-ЭФФЕКТ: до / после ── */}
        <section style={{ background: BG2, padding: "96px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ color: MUTED, fontFamily: MONO, fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "3rem" }}>
              Что происходит за 2 секунды
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 16, alignItems: "stretch" }}
              className="max-lg:!flex max-lg:flex-col">
              {/* Before */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "2rem" }}>
                <div style={{ color: MUTED, fontFamily: MONO, fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem" }}>
                  Вы говорите
                </div>
                <p style={{ color: "#4a5568", fontFamily: MONO, fontSize: "0.93rem", lineHeight: 1.8, margin: 0 }}>
                  «ну вот значит... эм... надо написать Антону насчёт встречи, ну то есть перенести её на... эм... на среду. Ну или в четверг, в общем до конца недели. Ну типа удобно когда ему»
                </p>
              </div>

              {/* Arrow */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: 72, flexDirection: "column", gap: 6 }}>
                <div style={{ color: ACCENT, fontFamily: MONO, fontSize: "1.4rem" }}>→</div>
                <div style={{ color: ACCENT, fontFamily: MONO, fontSize: "0.6rem", letterSpacing: "0.08em", opacity: 0.7 }}>Сенсей</div>
              </div>

              {/* After */}
              <div style={{ background: "#0d1f1a", border: `1px solid #1a3a2e`, borderRadius: 8, padding: "2rem" }}>
                <div style={{ color: ACCENT, fontFamily: MONO, fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.2rem" }}>
                  Готовый текст
                </div>
                <p style={{ color: "#c9d6df", fontFamily: MONO, fontSize: "0.93rem", lineHeight: 1.8, margin: 0 }}>
                  «Антон, привет. Нужно перенести нашу встречу — любой день до конца недели подойдёт. Когда тебе удобнее?»
                </p>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem", marginTop: "4rem" }}>
              {[
                { n: "4×",      label: "быстрее набора\nна клавиатуре" },
                { n: "< 2 с",   label: "время обработки\nодного фрагмента" },
                { n: "40+",     label: "приложений\nработают сразу" },
                { n: "99%",     label: "точность\nна русском языке" },
              ].map(({ n, label }) => (
                <div key={n}>
                  <div style={{ color: ACCENT, fontFamily: MONO, fontSize: "2rem", fontWeight: 400, lineHeight: 1 }}>{n}</div>
                  <div style={{ color: MUTED, fontFamily: MONO, fontSize: "0.75rem", lineHeight: 1.6, marginTop: 8, whiteSpace: "pre-line" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── КАК РАБОТАЕТ ── */}
        <section id="how" style={{ background: BG, padding: "96px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ color: MUTED, fontFamily: MONO, fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "3rem" }}>
              Как это работает
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.5rem" }}
              className="max-lg:!grid-cols-1">
              {[
                {
                  n: "01",
                  title: "Говори",
                  body: "Нажми кнопку и говори как обычно. Не нужна специальная дикция, паузы в нужных местах или правильный темп.",
                },
                {
                  n: "02",
                  title: "ИИ слушает",
                  body: "Сенсей убирает паузы, «эканья», слова-паразиты, исправляет грамматику и подбирает регистр под контекст.",
                },
                {
                  n: "03",
                  title: "Готовый текст",
                  body: "Вставляется туда, где работаешь — в Telegram, почту, Notion, Word, любой браузер. Куда угодно.",
                },
              ].map(({ n, title, body }) => (
                <div key={n}>
                  <div style={{ color: ACCENT, fontFamily: MONO, fontSize: "0.68rem", letterSpacing: "0.1em", marginBottom: "1rem", opacity: 0.6 }}>{n}</div>
                  <h3 style={{ color: TEXT, fontFamily: MONO, fontSize: "1.35rem", fontWeight: 400, margin: "0 0 1rem" }}>{title}</h3>
                  <p style={{ color: MUTED, fontFamily: MONO, fontSize: "0.88rem", lineHeight: 1.8, margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>

            {/* Integration logos placeholder */}
            <div style={{ marginTop: "4rem", paddingTop: "3rem", borderTop: `1px solid ${BORDER}` }}>
              <div style={{ color: MUTED, fontFamily: MONO, fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
                Работает в
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                {["Telegram", "Gmail", "Notion", "Google Docs", "Яндекс Браузер", "Word", "WhatsApp", "Slack", "и везде"].map(app => (
                  <div key={app} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 4, padding: "6px 14px", color: MUTED, fontFamily: MONO, fontSize: "0.78rem" }}>
                    {app}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── КОНТЕКСТЫ ── */}
        <section style={{ background: BG2, padding: "96px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ color: MUTED, fontFamily: MONO, fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "3rem" }}>
              Когда пригождается
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}
              className="max-lg:!grid-cols-2 max-sm:!grid-cols-1">
              {[
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round">
                      <rect x="2" y="7" width="20" height="13" rx="3" />
                      <path d="M16 7V5a4 4 0 0 0-8 0v2" />
                      <circle cx="12" cy="13" r="1.5" fill={ACCENT} stroke="none" />
                    </svg>
                  ),
                  title: "За рулём",
                  body: "Диктуй сообщения и заметки, не отрываясь от дороги.",
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  ),
                  title: "В рабочем чате",
                  body: "Длинный ответ — за 10 секунд. Руки остаются свободными.",
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  ),
                  title: "На совещании",
                  body: "Фиксируй решения и задачи голосом прямо во время встречи.",
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round">
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  ),
                  title: "В заметках",
                  body: "Идея в дороге — уже в Notion. Без потерь, без «потом запишу».",
                },
              ].map(({ icon, title, body }) => (
                <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.75rem" }}>
                  <div style={{ marginBottom: "1rem" }}>{icon}</div>
                  <h4 style={{ color: TEXT, fontFamily: MONO, fontSize: "1rem", fontWeight: 400, margin: "0 0 0.75rem" }}>{title}</h4>
                  <p style={{ color: MUTED, fontFamily: MONO, fontSize: "0.82rem", lineHeight: 1.75, margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ТАРИФЫ ── */}
        <section id="pricing" style={{ background: BG, padding: "96px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ color: MUTED, fontFamily: MONO, fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "3rem" }}>
              Тарифы
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}
              className="max-lg:!grid-cols-1">

              {/* Free */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "2rem", display: "flex", flexDirection: "column" }}>
                <div style={{ color: MUTED, fontFamily: MONO, fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Старт</div>
                <div style={{ color: TEXT, fontFamily: MONO, fontSize: "2.2rem", fontWeight: 400, marginBottom: "0.4rem" }}>0 ₽</div>
                <div style={{ color: MUTED, fontFamily: MONO, fontSize: "0.78rem", marginBottom: "1.5rem" }}>навсегда бесплатно</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 auto", flex: 1 }}>
                  {["30 минут в день", "Русский и английский", "Telegram + браузер"].map(item => (
                    <li key={item} style={{ color: "#8892a0", fontFamily: MONO, fontSize: "0.82rem", lineHeight: "2.1", paddingLeft: "1.2rem", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: ACCENT }}>·</span>{item}
                    </li>
                  ))}
                </ul>
                <a href="#" style={{ marginTop: "2rem", display: "block", textAlign: "center", border: `1px solid ${BORDER}`, color: MUTED, fontFamily: MONO, fontSize: "0.82rem", padding: "12px", borderRadius: 4, textDecoration: "none" }}>
                  Начать бесплатно
                </a>
              </div>

              {/* Pro */}
              <div style={{ background: "#0d1f1a", border: `1px solid ${ACCENT}`, borderRadius: 8, padding: "2rem", display: "flex", flexDirection: "column", position: "relative" }}>
                <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: ACCENT, color: BG, fontFamily: MONO, fontSize: "0.62rem", letterSpacing: "0.1em", padding: "4px 12px", borderRadius: 2, textTransform: "uppercase", whiteSpace: "nowrap" }}>
                  Популярный
                </div>
                <div style={{ color: ACCENT, fontFamily: MONO, fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Pro</div>
                <div style={{ color: TEXT, fontFamily: MONO, fontSize: "2.2rem", fontWeight: 400, marginBottom: "0.4rem" }}>990 ₽</div>
                <div style={{ color: MUTED, fontFamily: MONO, fontSize: "0.78rem", marginBottom: "1.5rem" }}>в месяц · отмена в любой момент</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 auto", flex: 1 }}>
                  {["Без лимита времени", "Все языки", "Любые приложения", "Контекстный стиль речи", "Голосовые команды"].map(item => (
                    <li key={item} style={{ color: "#c9d6df", fontFamily: MONO, fontSize: "0.82rem", lineHeight: "2.1", paddingLeft: "1.2rem", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: ACCENT }}>·</span>{item}
                    </li>
                  ))}
                </ul>
                <a href="#" style={{ marginTop: "2rem", display: "block", textAlign: "center", background: ACCENT, color: BG, fontFamily: MONO, fontSize: "0.82rem", fontWeight: 500, padding: "12px", borderRadius: 4, textDecoration: "none" }}>
                  14 дней бесплатно
                </a>
              </div>

              {/* Business */}
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "2rem", display: "flex", flexDirection: "column" }}>
                <div style={{ color: MUTED, fontFamily: MONO, fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Бизнес</div>
                <div style={{ color: TEXT, fontFamily: MONO, fontSize: "2.2rem", fontWeight: 400, marginBottom: "0.4rem" }}>Договор</div>
                <div style={{ color: MUTED, fontFamily: MONO, fontSize: "0.78rem", marginBottom: "1.5rem" }}>для команд от 5 человек</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 auto", flex: 1 }}>
                  {["Всё из Pro для каждого", "Корпоративный аккаунт", "Данные хранятся в России", "Интеграция с вашими системами", "Поддержка 24/7"].map(item => (
                    <li key={item} style={{ color: "#8892a0", fontFamily: MONO, fontSize: "0.82rem", lineHeight: "2.1", paddingLeft: "1.2rem", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: ACCENT }}>·</span>{item}
                    </li>
                  ))}
                </ul>
                <a href="mailto:hi@sensay.app" style={{ marginTop: "2rem", display: "block", textAlign: "center", border: `1px solid ${BORDER}`, color: MUTED, fontFamily: MONO, fontSize: "0.82rem", padding: "12px", borderRadius: 4, textDecoration: "none" }}>
                  Написать нам
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ── ФИНАЛЬНЫЙ CTA ── */}
        <section style={{ background: BG2, padding: "120px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 760, textAlign: "center" }}>
            <h2 style={{ color: TEXT, fontFamily: MONO, fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 1.5rem" }}>
              Хватит печатать.<br />
              <span style={{ color: ACCENT }}>Просто говори.</span>
            </h2>
            <p style={{ color: MUTED, fontFamily: MONO, fontSize: "1rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
              Начните за 30 секунд. Без регистрации — сразу пробуйте.
            </p>
            <a href="#pricing" className="sensay-btn-primary" style={{ fontSize: "1rem", padding: "16px 48px" }}>
              Попробовать бесплатно
            </a>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{ background: BG, borderTop: `1px solid ${BORDER}`, padding: "28px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ color: "#3a4552", fontFamily: MONO, fontSize: "0.72rem" }}>
              Сенсей — голосовой ИИ-диктант
            </span>
            <span style={{ color: "#3a4552", fontFamily: MONO, fontSize: "0.72rem" }}>
              Сделано в{" "}
              <a href="https://advertum.com" style={{ color: "#4a5a66", textDecoration: "none" }}>
                Advertum
              </a>
            </span>
          </div>
        </footer>

      </div>

      {/* Sticky CTA */}
      {sticky && (
        <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1000 }}>
          <a
            href="#pricing"
            style={{
              background: ACCENT, color: BG,
              fontFamily: MONO, fontSize: "0.82rem", fontWeight: 500,
              padding: "12px 24px", borderRadius: 4, textDecoration: "none",
              display: "inline-block",
              boxShadow: "0 4px 24px rgba(34,211,160,0.35)",
            }}
          >
            Попробовать →
          </a>
        </div>
      )}
    </>
  );
}
