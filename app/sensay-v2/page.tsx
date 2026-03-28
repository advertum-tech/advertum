"use client";
import { useState, useEffect } from "react";

// ── Light sections
const CREAM   = "#f8f4ef";
const CREAM2  = "#f2ece3";
const INK     = "#1a1510";
const WARM_MUTED = "#9c8e7e";
const WARM_BORDER = "#e0d8ce";

// ── Dark sections
const DARK    = "#0f0f18";
const DARK2   = "#13131e";
const DARK_CARD = "#1a1a28";
const LIGHT_TEXT = "#eae6ff";
const VIOLET  = "#9b72f8";
const DARK_MUTED = "#5e5878";
const DARK_BORDER = "#252336";

const SERIF = "'DM Serif Display', Georgia, serif";
const SANS  = "'DM Sans', system-ui, -apple-system, sans-serif";

// ── The split: two "voices" of the same person ──
const PHONE_CALL = [
  { quote: "You know what? I think we&rsquo;ve been overthinking this the whole time. The answer is obvious — ship it, see what happens, iterate from real data. I&rsquo;d bet money on it.", label: "How you said it" },
  { quote: "Honestly the brief is fine, we just need to stop talking about it. Three days of meetings and we know less than we did on Monday. Just pick something and go.", label: "How you said it" },
  { quote: "The client&rsquo;s nervous about the timeline — but if you ask me, that&rsquo;s because nobody&rsquo;s been straight with them. Just tell them it&rsquo;s two more weeks and here&rsquo;s why.", label: "How you said it" },
];

const EMAIL_SENT = [
  { quote: "I believe the current situation may benefit from a more iterative approach. Potentially worth considering a preliminary launch to gather initial data and inform subsequent decisions.", label: "What you sent" },
  { quote: "Following our recent discussions, I wanted to share some initial thoughts on the brief. There may be value in exploring a few additional strategic directions before finalizing.", label: "What you sent" },
  { quote: "With regard to the project timeline, I understand there may be some concern. I wanted to proactively reach out to provide clarity on the current status and anticipated completion date.", label: "What you sent" },
];

function SplitQuotes() {
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setShow(false);
      setTimeout(() => { setIdx(i => (i + 1) % PHONE_CALL.length); setShow(true); }, 600);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const tr = "opacity .6s ease, transform .6s ease";

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
      {/* Left — the real you */}
      <div style={{ background: CREAM, border: `1px solid ${WARM_BORDER}`, borderRight: "none", borderRadius: "8px 0 0 8px", padding: "2.5rem" }}>
        <div style={{ color: WARM_MUTED, fontFamily: SANS, fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          {PHONE_CALL[idx].label}
        </div>
        <p style={{
          color: INK, fontFamily: SERIF, fontSize: "clamp(1rem,2vw,1.2rem)", lineHeight: 1.75, margin: 0,
          transition: tr, opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(6px)",
        }} dangerouslySetInnerHTML={{ __html: `&ldquo;${PHONE_CALL[idx].quote}&rdquo;` }} />
      </div>
      {/* Right — the keyboard you */}
      <div style={{ background: DARK_CARD, border: `1px solid ${DARK_BORDER}`, borderLeft: "none", borderRadius: "0 8px 8px 0", padding: "2.5rem" }}>
        <div style={{ color: DARK_MUTED, fontFamily: SANS, fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          {EMAIL_SENT[idx].label}
        </div>
        <p style={{
          color: DARK_MUTED, fontFamily: SANS, fontSize: "clamp(.9rem,1.75vw,1.05rem)", lineHeight: 1.85, margin: 0,
          fontWeight: 300,
          transition: tr, opacity: show ? 0.7 : 0, transform: show ? "translateY(0)" : "translateY(6px)",
        }} dangerouslySetInnerHTML={{ __html: `&ldquo;${EMAIL_SENT[idx].quote}&rdquo;` }} />
      </div>
    </div>
  );
}

export default function SensayV2() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const fn = () => setSticky(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes fade-up { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

        .v2 a { color: inherit; text-decoration: none; }

        .v2-cta-dark {
          background: ${VIOLET};
          color: #fff;
          font-family: ${SANS};
          font-size: 0.88rem;
          font-weight: 500;
          padding: 13px 30px;
          border-radius: 4px;
          display: inline-block;
          transition: opacity .15s;
        }
        .v2-cta-dark:hover { opacity: .85; }

        .v2-cta-light {
          background: ${INK};
          color: ${CREAM};
          font-family: ${SANS};
          font-size: 0.88rem;
          font-weight: 500;
          padding: 13px 30px;
          border-radius: 4px;
          display: inline-block;
          transition: opacity .15s;
        }
        .v2-cta-light:hover { opacity: .82; }

        .v2-ghost-dark {
          color: ${DARK_MUTED};
          font-family: ${SANS};
          font-size: .88rem;
          padding: 13px 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color .15s;
        }
        .v2-ghost-dark:hover { color: ${LIGHT_TEXT}; }

        .v2-ghost-light {
          color: ${WARM_MUTED};
          font-family: ${SANS};
          font-size: .88rem;
          padding: 13px 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color .15s;
        }
        .v2-ghost-light:hover { color: ${INK}; }

        @media (max-width: 900px) {
          .v2-two-col   { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .v2-three-col { grid-template-columns: 1fr !important; }
          .v2-four-col  { grid-template-columns: 1fr 1fr !important; }
          .v2-split     { grid-template-columns: 1fr !important; }
          .v2-split > div:first-child { border-right: 1px solid ${WARM_BORDER} !important; border-bottom: none !important; border-radius: 8px 8px 0 0 !important; }
          .v2-split > div:last-child  { border-left: 1px solid ${DARK_BORDER} !important; border-top: none !important; border-radius: 0 0 8px 8px !important; }
        }
        @media (max-width: 540px) {
          .v2-four-col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="v2" style={{ background: CREAM, minHeight: "100vh" }}>

        {/* ── Header (light) ── */}
        <header style={{
          position: "fixed", top: 0, left: 0, width: "100%",
          background: "rgba(248,244,239,.96)", backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${WARM_BORDER}`,
          zIndex: 999, height: 56,
          display: "flex", alignItems: "center",
        }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: INK, fontFamily: SERIF, fontSize: "1.15rem" }}>Sensay</span>
            <a href="#pricing" className="v2-cta-light" style={{ padding: "8px 20px", fontSize: "0.76rem" }}>Try free</a>
          </div>
        </header>

        {/* ── HERO (light) ── */}
        <section style={{ background: CREAM, minHeight: "100vh", paddingTop: 56, display: "flex", alignItems: "center" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200, padding: "80px 0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div>
              <div style={{ color: WARM_MUTED, fontFamily: SANS, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "2.5rem" }}>
                Voice dictation · works everywhere
              </div>
              <h1 style={{ color: INK, fontFamily: SERIF, fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)", fontWeight: 400, lineHeight: 1.1, margin: "0 0 2rem", letterSpacing: "-0.01em" }}>
                You explain it<br />
                perfectly on the phone.<br />
                <em>Then type it flat.</em>
              </h1>
              <p style={{ color: WARM_MUTED, fontFamily: SANS, fontSize: "clamp(.9rem,1.8vw,1.1rem)", lineHeight: 1.85, maxWidth: 520, margin: "0 0 2.5rem", fontWeight: 300 }}>
                Sensay removes the keyboard from between your thought and the send button. Speak the way you&rsquo;d say it to a person. Get back exactly that.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                <a href="#pricing" className="v2-cta-light">Start free</a>
                <a href="#how"     className="v2-ghost-light">See how →</a>
              </div>
            </div>
            {/* Photo — man on phone call */}
            <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/5", boxShadow: "0 24px 64px rgba(0,0,0,.12)" }}>
              <img
                src="/sensay/hero-v2.jpg"
                alt="Man on phone call"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
              {/* Soft warm vignette */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 60%, rgba(248,244,239,0.4) 100%)" }} />
            </div>
            </div>
          </div>
        </section>

        {/* ── THE SPLIT — two voices ── */}
        <section style={{ background: CREAM2, borderTop: `1px solid ${WARM_BORDER}`, borderBottom: `1px solid ${WARM_BORDER}`, padding: "96px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ marginBottom: "3rem" }}>
              <h2 style={{ color: INK, fontFamily: SERIF, fontSize: "clamp(1.6rem,3vw,2.4rem)", fontWeight: 400, margin: "0 0 1rem", lineHeight: 1.25 }}>
                There are two versions of you.
              </h2>
              <p style={{ color: WARM_MUTED, fontFamily: SANS, fontSize: "1rem", lineHeight: 1.8, margin: 0, maxWidth: 520, fontWeight: 300 }}>
                One talks. Clearly. Directly. Like a person. The other types — and something gets lost in the translation.
              </p>
            </div>

            <div className="v2-split">
              <SplitQuotes />
            </div>

            <p style={{ color: WARM_MUTED, fontFamily: SANS, fontSize: "0.88rem", lineHeight: 1.8, margin: "2rem 0 0", fontWeight: 300 }}>
              Same person. Same thought. Different interface. Sensay gives you the first one, in text.
            </p>
          </div>
        </section>

        {/* ── DEMO (dark section) ── */}
        <section style={{ background: DARK, padding: "96px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ color: DARK_MUTED, fontFamily: SANS, fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "3rem" }}>
              What it looks like
            </div>

            <div className="v2-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", alignItems: "stretch" }}>
              {/* Left: spoken */}
              <div style={{ background: DARK_CARD, border: `1px solid ${DARK_BORDER}`, borderRight: "none", borderRadius: "8px 0 0 8px", padding: "2.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.5rem" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: VIOLET + "20", border: `1px solid ${VIOLET}50`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none">
                      <rect x="3" y="0" width="6" height="10" rx="3" fill={VIOLET} opacity=".7"/>
                      <path d="M1 8c0 2.76 2.24 5 5 5s5-2.24 5-5" stroke={VIOLET} strokeWidth="1.5" strokeLinecap="round" opacity=".7"/>
                      <line x1="6" y1="13" x2="6" y2="16" stroke={VIOLET} strokeWidth="1.5" strokeLinecap="round" opacity=".7"/>
                    </svg>
                  </div>
                  <span style={{ color: VIOLET, fontFamily: SANS, fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", opacity: .7 }}>You say</span>
                </div>
                <p style={{ color: DARK_MUTED, fontFamily: SANS, fontSize: "0.93rem", lineHeight: 1.9, margin: 0, fontWeight: 300 }}>
                  &ldquo;Yeah so the proposal — basically I think it&rsquo;s missing the emotional hook, like it&rsquo;s all very logical but it doesn&rsquo;t make you feel anything. I&rsquo;d add a real story up top. Something concrete. Maybe the one from last quarter.&rdquo;
                </p>
              </div>

              {/* Right: received text */}
              <div style={{ background: "#16142a", border: `1px solid ${VIOLET}30`, borderLeft: "none", borderRadius: "0 8px 8px 0", padding: "2.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.5rem" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: VIOLET + "20", border: `1px solid ${VIOLET}60`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                      <path d="M1 1h12M1 5.5h8M1 10h6" stroke={VIOLET} strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span style={{ color: VIOLET, fontFamily: SANS, fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Ready to send</span>
                </div>
                <p style={{ color: LIGHT_TEXT, fontFamily: SANS, fontSize: "0.93rem", lineHeight: 1.9, margin: 0, fontWeight: 300 }}>
                  &ldquo;The proposal is logically solid, but it&rsquo;s missing an emotional hook. I&rsquo;d recommend opening with a concrete story — the case from last quarter would work well. It gives readers something to feel before they start thinking.&rdquo;
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", marginTop: "4rem", paddingTop: "3rem", borderTop: `1px solid ${DARK_BORDER}` }}>
              {[
                { n: "4×",  label: "faster than typing" },
                { n: "Any", label: "app, any input field" },
                { n: "Zero", label: "filler words output" },
                { n: "Your", label: "voice. Not a template." },
              ].map(({ n, label }) => (
                <div key={n}>
                  <div style={{ color: VIOLET, fontFamily: SERIF, fontSize: "2rem", fontWeight: 400, lineHeight: 1 }}>{n}</div>
                  <div style={{ color: DARK_MUTED, fontFamily: SANS, fontSize: "0.75rem", lineHeight: 1.65, marginTop: 8, fontWeight: 300 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS (back to light) ── */}
        <section id="how" style={{ background: CREAM, padding: "96px 0", borderTop: `1px solid ${WARM_BORDER}` }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ color: WARM_MUTED, fontFamily: SANS, fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "3rem" }}>
              How it works
            </div>
            <div className="v2-three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "3rem" }}>
              {[
                { n: "01", title: "Speak naturally", body: "Say it the way you&rsquo;d tell a person directly. No scripting, no rehearsal." },
                { n: "02", title: "Sensay interprets", body: "Filler words out. Grammar clean. Register matched to where it&rsquo;s going — Slack, email, doc." },
                { n: "03", title: "Text appears", body: "Wherever your cursor is. Paste nothing. Switch nothing. Just the text, already there." },
              ].map(({ n, title, body }) => (
                <div key={n} style={{ borderTop: `2px solid ${WARM_BORDER}`, paddingTop: "2rem" }}>
                  <div style={{ color: WARM_MUTED, fontFamily: SANS, fontSize: "0.65rem", letterSpacing: "0.1em", marginBottom: "1.2rem" }}>{n}</div>
                  <h3 style={{ color: INK, fontFamily: SERIF, fontSize: "1.4rem", fontWeight: 400, margin: "0 0 1rem" }}>{title}</h3>
                  <p style={{ color: WARM_MUTED, fontFamily: SANS, fontSize: "0.88rem", lineHeight: 1.85, margin: 0, fontWeight: 300 }} dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTEXTS (light) ── */}
        <section style={{ background: CREAM2, padding: "96px 0", borderTop: `1px solid ${WARM_BORDER}` }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ color: WARM_MUTED, fontFamily: SANS, fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "3rem" }}>
              When the voice version is better
            </div>
            <div className="v2-four-col" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem" }}>
              {[
                { title: "The tricky email",    body: "The one you&rsquo;ve opened and closed four times. Say it out loud — it&rsquo;s done." },
                { title: "Feedback that stings", body: "Hard to type without softening. Easy to say when you&rsquo;re just being direct." },
                { title: "The long reply",      body: "Three questions, each needs a real answer. Say them. Don&rsquo;t type them." },
                { title: "The idea in motion",  body: "In the car, on a walk. Say it before the screen version flattens it." },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: CREAM, border: `1px solid ${WARM_BORDER}`, borderRadius: 8, padding: "1.75rem" }}>
                  <h4 style={{ color: INK, fontFamily: SERIF, fontSize: "1.1rem", fontWeight: 400, margin: "0 0 .75rem" }}>{title}</h4>
                  <p style={{ color: WARM_MUTED, fontFamily: SANS, fontSize: "0.82rem", lineHeight: 1.85, margin: 0, fontWeight: 300 }} dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING (dark) ── */}
        <section id="pricing" style={{ background: DARK2, padding: "96px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ color: DARK_MUTED, fontFamily: SANS, fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "3rem" }}>
              Pricing
            </div>
            <div className="v2-three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>

              <div style={{ background: DARK_CARD, border: `1px solid ${DARK_BORDER}`, borderRadius: 8, padding: "2rem", display: "flex", flexDirection: "column" }}>
                <div style={{ color: DARK_MUTED, fontFamily: SANS, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>Free</div>
                <div style={{ color: LIGHT_TEXT, fontFamily: SERIF, fontSize: "2.2rem", fontWeight: 400, marginBottom: "0.3rem" }}>$0</div>
                <div style={{ color: DARK_MUTED, fontFamily: SANS, fontSize: "0.78rem", fontWeight: 300, marginBottom: "1.5rem" }}>always free</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 auto", flex: 1 }}>
                  {["30 minutes / day", "English + major languages", "Browser + key apps"].map(item => (
                    <li key={item} style={{ color: "#3c3858", fontFamily: SANS, fontSize: "0.82rem", lineHeight: "2.1", paddingLeft: "1.2rem", position: "relative", fontWeight: 300 }}>
                      <span style={{ position: "absolute", left: 0, color: VIOLET, opacity: .4 }}>·</span>{item}
                    </li>
                  ))}
                </ul>
                <a href="#" style={{ marginTop: "2rem", display: "block", textAlign: "center", border: `1px solid ${DARK_BORDER}`, color: DARK_MUTED, fontFamily: SANS, fontSize: "0.82rem", padding: "12px", borderRadius: 4, fontWeight: 300 }}>
                  Get started
                </a>
              </div>

              <div style={{ background: "#1a1630", border: `1px solid ${VIOLET}50`, borderRadius: 8, padding: "2rem", display: "flex", flexDirection: "column", position: "relative" }}>
                <div style={{ position: "absolute", top: -11, left: "50%", transform: "translateX(-50%)", background: VIOLET, color: "#fff", fontFamily: SANS, fontSize: "0.6rem", letterSpacing: "0.12em", padding: "3px 12px", borderRadius: 2, textTransform: "uppercase", whiteSpace: "nowrap", fontWeight: 500 }}>
                  Most popular
                </div>
                <div style={{ color: VIOLET, fontFamily: SANS, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem", opacity: .85 }}>Pro</div>
                <div style={{ color: LIGHT_TEXT, fontFamily: SERIF, fontSize: "2.2rem", fontWeight: 400, marginBottom: "0.3rem" }}>$9</div>
                <div style={{ color: DARK_MUTED, fontFamily: SANS, fontSize: "0.78rem", fontWeight: 300, marginBottom: "1.5rem" }}>per month · cancel anytime</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 auto", flex: 1 }}>
                  {["Unlimited dictation", "All languages", "Every app & input field", "Smart context register", "Priority processing"].map(item => (
                    <li key={item} style={{ color: "#c4bef0", fontFamily: SANS, fontSize: "0.82rem", lineHeight: "2.1", paddingLeft: "1.2rem", position: "relative", fontWeight: 300 }}>
                      <span style={{ position: "absolute", left: 0, color: VIOLET }}>·</span>{item}
                    </li>
                  ))}
                </ul>
                <a href="#" className="v2-cta-dark" style={{ marginTop: "2rem", display: "block", textAlign: "center", fontSize: "0.82rem", padding: "12px", borderRadius: 4 }}>
                  14 days free
                </a>
              </div>

              <div style={{ background: DARK_CARD, border: `1px solid ${DARK_BORDER}`, borderRadius: 8, padding: "2rem", display: "flex", flexDirection: "column" }}>
                <div style={{ color: DARK_MUTED, fontFamily: SANS, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>Team</div>
                <div style={{ color: LIGHT_TEXT, fontFamily: SERIF, fontSize: "2.2rem", fontWeight: 400, marginBottom: "0.3rem" }}>Custom</div>
                <div style={{ color: DARK_MUTED, fontFamily: SANS, fontSize: "0.78rem", fontWeight: 300, marginBottom: "1.5rem" }}>for teams of 5+</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 auto", flex: 1 }}>
                  {["Everything in Pro", "Team admin + SSO", "Audit logs", "Priority support"].map(item => (
                    <li key={item} style={{ color: "#3c3858", fontFamily: SANS, fontSize: "0.82rem", lineHeight: "2.1", paddingLeft: "1.2rem", position: "relative", fontWeight: 300 }}>
                      <span style={{ position: "absolute", left: 0, color: VIOLET, opacity: .35 }}>·</span>{item}
                    </li>
                  ))}
                </ul>
                <a href="mailto:hi@sensay.app" style={{ marginTop: "2rem", display: "block", textAlign: "center", border: `1px solid ${DARK_BORDER}`, color: DARK_MUTED, fontFamily: SANS, fontSize: "0.82rem", padding: "12px", borderRadius: 4, fontWeight: 300 }}>
                  Get in touch
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ── FINAL CTA (dark) ── */}
        <section style={{ background: DARK, padding: "120px 0", borderTop: `1px solid ${DARK_BORDER}` }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 700, textAlign: "center" }}>
            <h2 style={{ color: LIGHT_TEXT, fontFamily: SERIF, fontSize: "clamp(2rem,4.5vw,3.4rem)", fontWeight: 400, lineHeight: 1.15, margin: "0 0 1.5rem" }}>
              The version that spoke<br />
              <em style={{ color: VIOLET }}>deserves to be sent.</em>
            </h2>
            <p style={{ color: DARK_MUTED, fontFamily: SANS, fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem", fontWeight: 300 }}>
              Start free. No account required.
            </p>
            <a href="#pricing" className="v2-cta-dark" style={{ fontSize: ".95rem", padding: "15px 44px" }}>
              Try Sensay free
            </a>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ background: DARK2, borderTop: `1px solid ${DARK_BORDER}`, padding: "28px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ color: "#2a2840", fontFamily: SANS, fontSize: "0.72rem", fontWeight: 300 }}>Sensay — voice dictation AI</span>
            <span style={{ color: "#2a2840", fontFamily: SANS, fontSize: "0.72rem", fontWeight: 300 }}>
              Made by <a href="https://advertum.com" style={{ color: "#3a3858" }}>Advertum</a>
            </span>
          </div>
        </footer>

      </div>

      {/* Sticky CTA */}
      {sticky && (
        <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1000 }}>
          <a href="#pricing" style={{
            background: VIOLET, color: "#fff",
            fontFamily: SANS, fontSize: "0.82rem", fontWeight: 500,
            padding: "12px 24px", borderRadius: 4,
            display: "inline-block",
            boxShadow: "0 4px 24px rgba(155,114,248,.35)",
          }}>
            Try free →
          </a>
        </div>
      )}
    </>
  );
}
