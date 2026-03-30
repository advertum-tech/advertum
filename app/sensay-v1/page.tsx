import type { Metadata } from "next";
import { FadingThought, StickyCta } from "./client";

export const metadata: Metadata = {
  title: "Sensay — Voice Dictation AI",
  description: "Your best ideas don't wait for a keyboard. Speak naturally, get clean text — in any app, instantly.",
  openGraph: {
    title: "Sensay — Voice Dictation AI",
    description: "Your best ideas don't wait for a keyboard. Speak naturally, get clean text — in any app, instantly.",
    url: "https://advertum.com/sensay-v1",
    siteName: "Sensay",
    images: [{ url: "https://advertum.com/sensay/hero-v1.jpg", width: 1200, height: 800 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sensay — Voice Dictation AI",
    description: "Your best ideas don't wait for a keyboard. Speak naturally, get clean text — in any app, instantly.",
    images: ["https://advertum.com/sensay/hero-v1.jpg"],
  },
};

const BG     = "#0c0b09";
const BG2    = "#101009";
const CARD   = "#171510";
const TEXT   = "#ede6d8";
const ACCENT = "#e8a030";
const MUTED  = "#7a6e60";
const BORDER = "#272318";
const SERIF  = "'Playfair Display', Georgia, 'Times New Roman', serif";
const SANS   = "'Inter', system-ui, -apple-system, sans-serif";

export default function SensayV1() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@300;400;500&display=swap');

        @keyframes blink   { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fade-in { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }

        .v1 a { color: inherit; text-decoration: none; }
        .v1-cta {
          background: ${ACCENT};
          color: ${BG};
          font-family: ${SANS};
          font-size: 0.88rem;
          font-weight: 500;
          padding: 13px 30px;
          border-radius: 3px;
          display: inline-block;
          transition: opacity .15s;
          letter-spacing: .02em;
        }
        .v1-cta:hover { opacity: .82; }
        .v1-ghost {
          color: ${MUTED};
          font-family: ${SANS};
          font-size: .88rem;
          padding: 13px 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color .15s;
        }
        .v1-ghost:hover { color: ${TEXT}; }
        .blink { animation: blink 1.1s step-end infinite; }

        @media (max-width: 900px) {
          .v1-two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .v1-four-col { grid-template-columns: 1fr 1fr !important; }
          .v1-three-col { grid-template-columns: 1fr !important; }
          .v1-demo-grid { display: flex !important; flex-direction: column !important; }
        }
        @media (max-width: 540px) {
          .v1-four-col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="v1" style={{ background: BG, minHeight: "100vh" }}>

        {/* ── Header ── */}
        <header style={{
          position: "fixed", top: 0, left: 0, width: "100%",
          background: "rgba(12,11,9,.94)", backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${BORDER}`,
          zIndex: 999, height: 56,
          display: "flex", alignItems: "center",
        }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: TEXT, fontFamily: SERIF, fontSize: "1.1rem" }}>Sensay</span>
            <a href="#pricing" className="v1-cta" style={{ padding: "8px 20px", fontSize: "0.76rem" }}>Try free</a>
          </div>
        </header>

        {/* ── HERO ── */}
        <section style={{ minHeight: "100vh", paddingTop: 56, display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('/sensay/hero-v1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            filter: "brightness(0.35) saturate(0.6)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(100deg, rgba(12,11,9,0.92) 45%, rgba(40,25,5,0.6) 100%)",
          }} />
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200, padding: "100px 0 80px", position: "relative", zIndex: 1 }}>
            <div style={{ maxWidth: 840 }}>
              <div style={{ color: ACCENT, fontFamily: SANS, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "2.5rem", opacity: 0.75 }}>
                Voice dictation · works everywhere
              </div>
              <h1 style={{ color: TEXT, fontFamily: SERIF, fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)", fontWeight: 400, lineHeight: 1.08, margin: "0 0 1.8rem", letterSpacing: "-0.01em" }}>
                Your best ideas<br />
                don&rsquo;t wait for<br />
                <em style={{ color: ACCENT }}>a keyboard.</em>
              </h1>
              <FadingThought />
              <p style={{ color: MUTED, fontFamily: SANS, fontSize: "clamp(.9rem,1.8vw,1.1rem)", lineHeight: 1.85, maxWidth: 500, margin: "0 0 2.5rem", fontWeight: 300 }}>
                Sensay captures what you say the moment you say it. Clean text, no filler, in any app.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                <a href="#pricing" className="v1-cta">Start free</a>
                <a href="#how"     className="v1-ghost">See how it works →</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE GAP — the moment thoughts fade ── */}
        <section style={{ background: "#0f0e0b", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "96px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div className="v1-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>

              <div>
                <div style={{ color: ACCENT, fontFamily: SANS, fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "1.8rem", opacity: 0.65 }}>
                  The moment
                </div>
                <p style={{ color: TEXT, fontFamily: SERIF, fontSize: "clamp(1.25rem,2.4vw,1.85rem)", fontWeight: 400, lineHeight: 1.55, margin: "0 0 1.5rem" }}>
                  You&rsquo;re two minutes from the office. You&rsquo;ve cracked it — the email you&rsquo;ve been circling for three days.
                </p>
                <p style={{ color: MUTED, fontFamily: SANS, fontSize: "0.95rem", lineHeight: 1.85, margin: 0, fontWeight: 300 }}>
                  You arrive. You park. You open your laptop.<br />
                  The perfect version is already starting to fade.
                </p>
              </div>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden" }}>
                <div style={{ background: "#1e1c18", borderBottom: `1px solid ${BORDER}`, padding: "10px 16px", display: "flex", alignItems: "center", gap: 6 }}>
                  {["#3a3530","#3a3530","#3a3530"].map((c,i) => (
                    <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                  ))}
                  <span style={{ color: "#2e2a25", fontFamily: SANS, fontSize: "0.68rem", marginLeft: 8 }}>New Message</span>
                </div>
                <div style={{ padding: "1.8rem 2rem" }}>
                  <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: ".8rem", marginBottom: ".8rem" }}>
                    <span style={{ color: "#2e2a25", fontFamily: SANS, fontSize: "0.78rem" }}>To: </span>
                    <span style={{ color: "#3e3830", fontFamily: SANS, fontSize: "0.78rem" }}>Sarah</span>
                  </div>
                  <div style={{ borderBottom: `1px solid ${BORDER}`, paddingBottom: ".8rem", marginBottom: "1.5rem" }}>
                    <span style={{ color: "#2e2a25", fontFamily: SANS, fontSize: "0.78rem" }}>Subject: </span>
                  </div>
                  <div style={{ minHeight: 90 }}>
                    <span className="blink" style={{ color: ACCENT, fontSize: "1.05rem" }}>|</span>
                  </div>
                  <p style={{ color: "#2a2620", fontFamily: SERIF, fontStyle: "italic", fontSize: "0.8rem", margin: "1.5rem 0 0", lineHeight: 1.6 }}>
                    ...it was there. Twenty minutes ago. Perfect.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── DEMO — Before / After ── */}
        <section style={{ background: BG2, padding: "96px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "3rem" }}>
              What happens instead
            </div>

            <div className="v1-demo-grid" style={{ display: "grid", gridTemplateColumns: "1fr 56px 1fr", gap: 12, alignItems: "stretch" }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "2.5rem" }}>
                <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5rem" }}>You say</div>
                <p style={{ color: "#4a4035", fontFamily: SANS, fontSize: "0.93rem", lineHeight: 1.9, margin: 0, fontWeight: 300 }}>
                  &ldquo;Yeah so — um — I think we need to push the Thursday meeting because Marcus has that Berlin thing, and honestly I feel like we&rsquo;d get way more out of it if we just wait until the full report&rsquo;s ready. Maybe next week? I don&rsquo;t know.&rdquo;
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6 }}>
                <div style={{ color: ACCENT, fontSize: "1.4rem", opacity: 0.7 }}>→</div>
                <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.5 }}>Sensay</div>
              </div>

              <div style={{ background: "#100e0a", border: `1px solid #2a2010`, borderRadius: 8, padding: "2.5rem" }}>
                <div style={{ color: ACCENT, fontFamily: SANS, fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1.5rem", opacity: 0.8 }}>Ready to send</div>
                <p style={{ color: "#d5c8a8", fontFamily: SANS, fontSize: "0.93rem", lineHeight: 1.9, margin: 0, fontWeight: 300 }}>
                  &ldquo;Marcus, let&rsquo;s push Thursday&rsquo;s meeting to next week — I&rsquo;d rather wait until the full report is ready so we get more out of it. Does any time work for you then?&rdquo;
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", marginTop: "4rem", paddingTop: "3rem", borderTop: `1px solid ${BORDER}` }}>
              {[
                { n: "4×",    label: "faster than typing" },
                { n: "< 2s",  label: "processing time" },
                { n: "Any",   label: "app, any input field" },
                { n: "Zero",  label: "filler words in output" },
              ].map(({ n, label }) => (
                <div key={n}>
                  <div style={{ color: ACCENT, fontFamily: SERIF, fontSize: "2.1rem", fontWeight: 400, lineHeight: 1 }}>{n}</div>
                  <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.75rem", lineHeight: 1.65, marginTop: 8, fontWeight: 300 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="how" style={{ background: BG, padding: "96px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "3rem" }}>
              How it works
            </div>
            <div className="v1-three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "3rem" }}>
              {[
                { n: "01", title: "Speak naturally", body: "Say it the way you&rsquo;d tell someone in the room. No special cadence, no editing as you go." },
                { n: "02", title: "Sensay listens", body: "Filler words removed. Grammar cleaned. Register adapted to context automatically." },
                { n: "03", title: "Text appears", body: "In your email, Slack, Notion, browser — wherever the cursor is. Nothing to paste, nothing to copy." },
              ].map(({ n, title, body }) => (
                <div key={n} style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "2rem" }}>
                  <div style={{ color: ACCENT, fontFamily: SANS, fontSize: "0.68rem", letterSpacing: "0.1em", marginBottom: "1.2rem", opacity: 0.45 }}>{n}</div>
                  <h3 style={{ color: TEXT, fontFamily: SERIF, fontSize: "1.4rem", fontWeight: 400, margin: "0 0 1rem" }}>{title}</h3>
                  <p style={{ color: MUTED, fontFamily: SANS, fontSize: "0.88rem", lineHeight: 1.85, margin: 0, fontWeight: 300 }} dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHERE THINKING HAPPENS ── */}
        <section style={{ background: BG2, padding: "96px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "3rem" }}>
              Where thinking happens
            </div>
            <div className="v1-four-col" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem" }}>
              {[
                { title: "In the car",        body: "The commute that solves everything — now it actually does." },
                { title: "On a walk",          body: "Motion unlocks thoughts. Don&rsquo;t lose them at the door." },
                { title: "Before sleep",       body: "The 11pm idea that&rsquo;s always gone by 8am." },
                { title: "Between meetings",   body: "Three minutes is enough to draft something clear." },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "1.75rem" }}>
                  <h4 style={{ color: TEXT, fontFamily: SERIF, fontSize: "1.1rem", fontWeight: 400, margin: "0 0 .75rem" }}>{title}</h4>
                  <p style={{ color: MUTED, fontFamily: SANS, fontSize: "0.82rem", lineHeight: 1.85, margin: 0, fontWeight: 300 }} dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" style={{ background: BG, padding: "96px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.68rem", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "3rem" }}>
              Pricing
            </div>
            <div className="v1-three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "2rem", display: "flex", flexDirection: "column" }}>
                <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>Free</div>
                <div style={{ color: TEXT, fontFamily: SERIF, fontSize: "2.2rem", fontWeight: 400, marginBottom: "0.3rem" }}>$0</div>
                <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.78rem", fontWeight: 300, marginBottom: "1.5rem" }}>always free</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 auto", flex: 1 }}>
                  {["30 minutes / day", "English + major languages", "Browser + key apps"].map(item => (
                    <li key={item} style={{ color: "#504535", fontFamily: SANS, fontSize: "0.82rem", lineHeight: "2.1", paddingLeft: "1.2rem", position: "relative", fontWeight: 300 }}>
                      <span style={{ position: "absolute", left: 0, color: ACCENT, opacity: .4 }}>·</span>{item}
                    </li>
                  ))}
                </ul>
                <a href="#" style={{ marginTop: "2rem", display: "block", textAlign: "center", border: `1px solid ${BORDER}`, color: MUTED, fontFamily: SANS, fontSize: "0.82rem", padding: "12px", borderRadius: 3, fontWeight: 300 }}>
                  Get started
                </a>
              </div>

              <div style={{ background: "#100d07", border: `1px solid ${ACCENT}50`, borderRadius: 8, padding: "2rem", display: "flex", flexDirection: "column", position: "relative" }}>
                <div style={{ position: "absolute", top: -11, left: "50%", transform: "translateX(-50%)", background: ACCENT, color: BG, fontFamily: SANS, fontSize: "0.6rem", letterSpacing: "0.12em", padding: "3px 12px", borderRadius: 2, textTransform: "uppercase", whiteSpace: "nowrap", fontWeight: 500 }}>
                  Most popular
                </div>
                <div style={{ color: ACCENT, fontFamily: SANS, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem", opacity: .8 }}>Pro</div>
                <div style={{ color: TEXT, fontFamily: SERIF, fontSize: "2.2rem", fontWeight: 400, marginBottom: "0.3rem" }}>$9</div>
                <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.78rem", fontWeight: 300, marginBottom: "1.5rem" }}>per month · cancel anytime</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 auto", flex: 1 }}>
                  {["Unlimited dictation", "All languages", "Every app & input field", "Smart context register", "Priority processing"].map(item => (
                    <li key={item} style={{ color: "#c8bb98", fontFamily: SANS, fontSize: "0.82rem", lineHeight: "2.1", paddingLeft: "1.2rem", position: "relative", fontWeight: 300 }}>
                      <span style={{ position: "absolute", left: 0, color: ACCENT }}>·</span>{item}
                    </li>
                  ))}
                </ul>
                <a href="#" style={{ marginTop: "2rem", display: "block", textAlign: "center", background: ACCENT, color: BG, fontFamily: SANS, fontSize: "0.82rem", fontWeight: 500, padding: "12px", borderRadius: 3 }}>
                  14 days free
                </a>
              </div>

              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "2rem", display: "flex", flexDirection: "column" }}>
                <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>Team</div>
                <div style={{ color: TEXT, fontFamily: SERIF, fontSize: "2.2rem", fontWeight: 400, marginBottom: "0.3rem" }}>Custom</div>
                <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.78rem", fontWeight: 300, marginBottom: "1.5rem" }}>for teams of 5+</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 auto", flex: 1 }}>
                  {["Everything in Pro", "Team admin + SSO", "Audit logs", "Priority support"].map(item => (
                    <li key={item} style={{ color: "#504535", fontFamily: SANS, fontSize: "0.82rem", lineHeight: "2.1", paddingLeft: "1.2rem", position: "relative", fontWeight: 300 }}>
                      <span style={{ position: "absolute", left: 0, color: ACCENT, opacity: .4 }}>·</span>{item}
                    </li>
                  ))}
                </ul>
                <a href="mailto:hi@sensay.app" style={{ marginTop: "2rem", display: "block", textAlign: "center", border: `1px solid ${BORDER}`, color: MUTED, fontFamily: SANS, fontSize: "0.82rem", padding: "12px", borderRadius: 3, fontWeight: 300 }}>
                  Get in touch
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section style={{ background: BG2, padding: "120px 0", borderTop: `1px solid ${BORDER}` }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 700, textAlign: "center" }}>
            <h2 style={{ color: TEXT, fontFamily: SERIF, fontSize: "clamp(2rem,4.5vw,3.4rem)", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.01em", margin: "0 0 1.5rem" }}>
              The thought you have right now<br />
              <em style={{ color: ACCENT }}>doesn&rsquo;t have to wait.</em>
            </h2>
            <p style={{ color: MUTED, fontFamily: SANS, fontSize: "1rem", lineHeight: 1.8, marginBottom: "2.5rem", fontWeight: 300 }}>
              Start free. No account required.
            </p>
            <a href="#pricing" className="v1-cta" style={{ fontSize: ".95rem", padding: "15px 44px" }}>
              Try Sensay free
            </a>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ background: BG, borderTop: `1px solid ${BORDER}`, padding: "28px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ color: "#2a2520", fontFamily: SANS, fontSize: "0.72rem", fontWeight: 300 }}>Sensay — voice dictation AI</span>
            <span style={{ color: "#2a2520", fontFamily: SANS, fontSize: "0.72rem", fontWeight: 300 }}>
              Made by <a href="https://advertum.com" style={{ color: "#3a352e" }}>Advertum</a>
            </span>
          </div>
        </footer>

      </div>

      <StickyCta />
    </>
  );
}
