import type { Metadata } from "next";
import { MicButton, VoiceDemo, StickyCta } from "./client";

export const metadata: Metadata = {
  title: "Sensay — Just Say It",
  description: "Speak. Get clean, ready-to-send text in your email, Slack, WhatsApp, or anywhere else. No typing. No switching apps.",
  openGraph: {
    title: "Sensay — Just Say It",
    description: "Speak. Get clean, ready-to-send text in your email, Slack, WhatsApp, or anywhere else. No typing. No switching apps.",
    url: "https://advertum.com/sensay-v3",
    siteName: "Sensay",
    images: [{ url: "https://advertum.com/sensay/hero-v3.jpg", width: 1200, height: 800 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sensay — Just Say It",
    description: "Speak. Get clean, ready-to-send text in your email, Slack, WhatsApp, or anywhere else. No typing. No switching apps.",
    images: ["https://advertum.com/sensay/hero-v3.jpg"],
  },
};

const WHITE  = "#ffffff";
const OFF    = "#faf8f6";
const TEXT   = "#111111";
const CORAL  = "#ff4422";
const CORAL2 = "#ff6644";
const MUTED  = "#888888";
const BORDER = "#e8e8e4";
const SANS   = "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";

export default function SensayV3() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        @keyframes v3-wave { from{transform:scaleY(.4)} to{transform:scaleY(1)} }
        @keyframes v3-fade  { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }

        .v3 a { color: inherit; text-decoration: none; }
        .v3-cta {
          background: ${CORAL};
          color: #fff;
          font-family: ${SANS};
          font-size: .9rem;
          font-weight: 600;
          padding: 14px 32px;
          border-radius: 8px;
          display: inline-block;
          transition: all .15s;
          letter-spacing: .01em;
        }
        .v3-cta:hover { background: ${CORAL2}; transform: translateY(-1px); box-shadow: 0 6px 24px ${CORAL}40; }
        .v3-ghost {
          color: ${MUTED};
          font-family: ${SANS};
          font-size: .9rem;
          font-weight: 500;
          padding: 14px 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color .15s;
        }
        .v3-ghost:hover { color: ${TEXT}; }
        .v3-card {
          background: ${WHITE};
          border: 1.5px solid ${BORDER};
          border-radius: 12px;
          padding: 1.75rem;
          transition: box-shadow .2s;
        }
        .v3-card:hover { box-shadow: 0 4px 24px rgba(0,0,0,.08); }

        @media (max-width: 900px) {
          .v3-hero-grid  { flex-direction: column !important; gap: 3rem !important; }
          .v3-three-col  { grid-template-columns: 1fr !important; }
          .v3-four-col   { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .v3-four-col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="v3" style={{ background: WHITE, minHeight: "100vh" }}>

        {/* ── Header ── */}
        <header style={{
          position: "fixed", top: 0, left: 0, width: "100%",
          background: "rgba(255,255,255,.94)", backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${BORDER}`,
          zIndex: 999, height: 60,
          display: "flex", alignItems: "center",
        }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: TEXT, fontFamily: SANS, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-.01em" }}>
              Sens<span style={{ color: CORAL }}>ay</span>
            </span>
            <a href="#pricing" className="v3-cta" style={{ padding: "8px 20px", fontSize: "0.8rem", borderRadius: 6 }}>Try free</a>
          </div>
        </header>

        {/* ── HERO ── */}
        <section style={{ background: OFF, minHeight: "100vh", paddingTop: 60, display: "flex", alignItems: "center" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200, padding: "80px 0" }}>
            <div className="v3-hero-grid" style={{ display: "flex", alignItems: "center", gap: "5rem" }}>

              <div style={{ flex: "1 1 0", minWidth: 0 }}>
                <div style={{
                  display: "inline-block",
                  background: CORAL + "12",
                  color: CORAL,
                  fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  padding: "5px 14px", borderRadius: 20,
                  marginBottom: "2rem",
                }}>
                  Voice dictation · works in any app
                </div>
                <h1 style={{
                  color: TEXT, fontFamily: SANS,
                  fontSize: "clamp(2.8rem, 6vw, 5rem)",
                  fontWeight: 700, lineHeight: 1.1,
                  margin: "0 0 1.5rem",
                  letterSpacing: "-.03em",
                }}>
                  Just<br />
                  say<br />
                  <span style={{ color: CORAL }}>it.</span>
                </h1>
                <p style={{ color: MUTED, fontFamily: SANS, fontSize: "clamp(.9rem,1.8vw,1.1rem)", lineHeight: 1.85, maxWidth: 440, margin: "0 0 2.5rem", fontWeight: 400 }}>
                  Speak. Get clean, ready-to-send text — in your email, Slack, WhatsApp, or anywhere else. No typing. No switching apps.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                  <a href="#pricing" className="v3-cta">Start free — no signup</a>
                  <a href="#how"     className="v3-ghost">See how →</a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: "2rem" }}>
                  <div style={{ display: "flex" }}>
                    {["#ff9985","#ff7055","#ff4422"].map((c, i) => (
                      <div key={i} style={{ width: 28, height: 28, borderRadius: "50%", background: c, border: `2px solid ${OFF}`, marginLeft: i ? -8 : 0 }} />
                    ))}
                  </div>
                  <span style={{ color: MUTED, fontFamily: SANS, fontSize: "0.8rem", fontWeight: 400 }}>
                    Loved by <strong style={{ color: TEXT }}>12,000+</strong> people already
                  </span>
                </div>
              </div>

              <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
                <div style={{ position: "relative", width: 280, height: 320, borderRadius: 20, overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,.10)" }}>
                  <img
                    src="/sensay/hero-v3.jpg"
                    alt="Speaking into phone"
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                  />
                  <div style={{
                    position: "absolute", bottom: 16, right: 16,
                    width: 48, height: 48, borderRadius: "50%",
                    background: CORAL, display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: `0 4px 16px ${CORAL}60`,
                  }}>
                    <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
                      <rect x="4" y="0" width="10" height="15" rx="5" fill="white" opacity=".9"/>
                      <path d="M1 12c0 4.42 3.58 8 8 8s8-3.58 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".9"/>
                      <line x1="9" y1="20" x2="9" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".9"/>
                    </svg>
                  </div>
                </div>
                <VoiceDemo />
              </div>

            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="how" style={{ background: WHITE, padding: "96px 0", borderTop: `1px solid ${BORDER}` }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ color: TEXT, fontFamily: SANS, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, letterSpacing: "-.02em", margin: "0 0 .75rem" }}>
                Three seconds, start to finish.
              </h2>
              <p style={{ color: MUTED, fontFamily: SANS, fontSize: "1rem", lineHeight: 1.8, margin: 0, fontWeight: 400 }}>
                No learning curve. No setup. You already know how to use it.
              </p>
            </div>
            <div className="v3-three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
              {[
                {
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="16" r="16" fill={CORAL + "15"} />
                      <rect x="11" y="7" width="10" height="14" rx="5" fill={CORAL} opacity=".85"/>
                      <path d="M7 17c0 4.97 4.03 9 9 9s9-4.03 9-9" stroke={CORAL} strokeWidth="2" strokeLinecap="round" opacity=".85"/>
                      <line x1="16" y1="26" x2="16" y2="30" stroke={CORAL} strokeWidth="2" strokeLinecap="round" opacity=".85"/>
                    </svg>
                  ),
                  n: "1",
                  title: "Tap and talk",
                  body: "Open Sensay, tap the mic. Speak the way you&rsquo;d say it to someone in the room.",
                },
                {
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="16" r="16" fill={CORAL + "15"} />
                      <path d="M8 18 L12 22 L24 10" stroke={CORAL} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity=".85"/>
                    </svg>
                  ),
                  n: "2",
                  title: "Sensay cleans it",
                  body: "Filler words, pauses, and &ldquo;um&rdquo;s — gone. Grammar fixed. Register matched to where it&rsquo;s going.",
                },
                {
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="16" r="16" fill={CORAL + "15"} />
                      <path d="M8 10h16M8 16h12M8 22h8" stroke={CORAL} strokeWidth="2" strokeLinecap="round" opacity=".85"/>
                    </svg>
                  ),
                  n: "3",
                  title: "Text appears",
                  body: "In your email, Slack, WhatsApp, Notion — wherever your cursor is. Paste nothing. Done.",
                },
              ].map(({ icon, n, title, body }) => (
                <div key={n} className="v3-card">
                  <div style={{ marginBottom: "1.2rem" }}>{icon}</div>
                  <h3 style={{ color: TEXT, fontFamily: SANS, fontSize: "1.1rem", fontWeight: 600, margin: "0 0 .6rem", letterSpacing: "-.01em" }}>{title}</h3>
                  <p style={{ color: MUTED, fontFamily: SANS, fontSize: "0.85rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTEGRATION STRIP ── */}
        <section style={{ background: OFF, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "40px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <span style={{ color: MUTED, fontFamily: SANS, fontSize: "0.78rem", fontWeight: 500, whiteSpace: "nowrap" }}>Works in</span>
              {["Gmail", "Slack", "WhatsApp", "Notion", "Outlook", "Google Docs", "Teams", "Any browser"].map(app => (
                <div key={app} style={{
                  background: WHITE, border: `1px solid ${BORDER}`, borderRadius: 6,
                  padding: "5px 14px",
                  color: TEXT, fontFamily: SANS, fontSize: "0.78rem", fontWeight: 500,
                  whiteSpace: "nowrap",
                }}>
                  {app}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHEN TO USE ── */}
        <section style={{ background: WHITE, padding: "96px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ color: TEXT, fontFamily: SANS, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, letterSpacing: "-.02em", margin: "0 0 .75rem" }}>
                Whenever typing feels like too much.
              </h2>
              <p style={{ color: MUTED, fontFamily: SANS, fontSize: "1rem", margin: 0 }}>
                Which is, honestly, most of the time.
              </p>
            </div>
            <div className="v3-four-col" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem" }}>
              {[
                {
                  emoji: "🚗",
                  title: "In the car",
                  body: "Reply to messages, jot down ideas. Hands on the wheel, words in the app.",
                },
                {
                  emoji: "🛋️",
                  title: "On the couch",
                  body: "Long reply, short energy. Say it instead of slowly hunting keys.",
                },
                {
                  emoji: "🚶",
                  title: "On a walk",
                  body: "The idea that arrived while moving. Say it before it&rsquo;s gone.",
                },
                {
                  emoji: "🍳",
                  title: "Hands full",
                  body: "Cooking, coffee, whatever. Your voice is free even when your hands aren&rsquo;t.",
                },
              ].map(({ emoji, title, body }) => (
                <div key={title} className="v3-card" style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{emoji}</div>
                  <h4 style={{ color: TEXT, fontFamily: SANS, fontSize: "1rem", fontWeight: 600, margin: "0 0 .6rem" }}>{title}</h4>
                  <p style={{ color: MUTED, fontFamily: SANS, fontSize: "0.82rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" style={{ background: OFF, padding: "96px 0", borderTop: `1px solid ${BORDER}` }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ color: TEXT, fontFamily: SANS, fontSize: "clamp(1.8rem,3.5vw,2.4rem)", fontWeight: 700, letterSpacing: "-.02em", margin: "0 0 .75rem" }}>
                Simple pricing.
              </h2>
              <p style={{ color: MUTED, fontFamily: SANS, fontSize: "1rem", margin: 0 }}>
                Start free. Upgrade when you&rsquo;re hooked.
              </p>
            </div>
            <div className="v3-three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, maxWidth: 880, margin: "0 auto" }}>

              <div className="v3-card" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Free</div>
                <div style={{ color: TEXT, fontFamily: SANS, fontSize: "2.4rem", fontWeight: 700, marginBottom: ".2rem", letterSpacing: "-.02em" }}>$0</div>
                <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.82rem", marginBottom: "1.5rem" }}>always free</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 auto", flex: 1 }}>
                  {["30 minutes / day", "English + major languages", "Browser + key apps"].map(item => (
                    <li key={item} style={{ color: TEXT, fontFamily: SANS, fontSize: "0.85rem", lineHeight: "2.2", paddingLeft: "1.4rem", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#22c55e", fontWeight: 700 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <a href="#" style={{ marginTop: "2rem", display: "block", textAlign: "center", border: `1.5px solid ${BORDER}`, color: TEXT, fontFamily: SANS, fontSize: "0.88rem", fontWeight: 600, padding: "12px", borderRadius: 8 }}>
                  Get started
                </a>
              </div>

              <div style={{ background: TEXT, border: "none", borderRadius: 12, padding: "1.75rem", display: "flex", flexDirection: "column", position: "relative" }}>
                <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: CORAL, color: "#fff", fontFamily: SANS, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em", padding: "4px 14px", borderRadius: 20, textTransform: "uppercase", whiteSpace: "nowrap" }}>
                  Most popular
                </div>
                <div style={{ color: CORAL, fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Pro</div>
                <div style={{ color: WHITE, fontFamily: SANS, fontSize: "2.4rem", fontWeight: 700, marginBottom: ".2rem", letterSpacing: "-.02em" }}>$9</div>
                <div style={{ color: "#888", fontFamily: SANS, fontSize: "0.82rem", marginBottom: "1.5rem" }}>per month · cancel anytime</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 auto", flex: 1 }}>
                  {["Unlimited dictation", "All languages", "Every app & input field", "Smart context register", "Priority processing"].map(item => (
                    <li key={item} style={{ color: "#ddd", fontFamily: SANS, fontSize: "0.85rem", lineHeight: "2.2", paddingLeft: "1.4rem", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: CORAL, fontWeight: 700 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <a href="#" className="v3-cta" style={{ marginTop: "2rem", display: "block", textAlign: "center", fontSize: "0.88rem", padding: "12px", borderRadius: 8 }}>
                  14 days free
                </a>
              </div>

              <div className="v3-card" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Team</div>
                <div style={{ color: TEXT, fontFamily: SANS, fontSize: "2.4rem", fontWeight: 700, marginBottom: ".2rem", letterSpacing: "-.02em" }}>Custom</div>
                <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.82rem", marginBottom: "1.5rem" }}>for teams of 5+</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 auto", flex: 1 }}>
                  {["Everything in Pro", "Team admin + SSO", "Audit logs", "Priority support"].map(item => (
                    <li key={item} style={{ color: TEXT, fontFamily: SANS, fontSize: "0.85rem", lineHeight: "2.2", paddingLeft: "1.4rem", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#22c55e", fontWeight: 700 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <a href="mailto:hi@sensay.app" style={{ marginTop: "2rem", display: "block", textAlign: "center", border: `1.5px solid ${BORDER}`, color: TEXT, fontFamily: SANS, fontSize: "0.88rem", fontWeight: 600, padding: "12px", borderRadius: 8 }}>
                  Get in touch
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section style={{ background: CORAL, padding: "96px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 700, textAlign: "center" }}>
            <h2 style={{ color: WHITE, fontFamily: SANS, fontSize: "clamp(2rem,4.5vw,3.4rem)", fontWeight: 700, lineHeight: 1.15, margin: "0 0 1.2rem", letterSpacing: "-.02em" }}>
              You know what you want to say.
            </h2>
            <p style={{ color: "rgba(255,255,255,.75)", fontFamily: SANS, fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2.5rem", fontWeight: 400 }}>
              So say it.
            </p>
            <a href="#pricing" style={{
              background: WHITE, color: CORAL,
              fontFamily: SANS, fontSize: "1rem", fontWeight: 700,
              padding: "16px 48px", borderRadius: 10,
              display: "inline-block",
              transition: "all .15s",
              boxShadow: "0 4px 20px rgba(0,0,0,.15)",
            }}>
              Try Sensay free
            </a>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ background: WHITE, borderTop: `1px solid ${BORDER}`, padding: "28px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ color: MUTED, fontFamily: SANS, fontSize: "0.78rem", fontWeight: 500 }}>
              Sens<span style={{ color: CORAL }}>ay</span> — voice dictation AI
            </span>
            <span style={{ color: MUTED, fontFamily: SANS, fontSize: "0.78rem" }}>
              Made by <a href="https://advertum.com" style={{ color: TEXT, fontWeight: 500 }}>Advertum</a>
            </span>
          </div>
        </footer>

      </div>

      <StickyCta />
    </>
  );
}
