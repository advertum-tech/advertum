const WHITE  = "#ffffff";
const OFF    = "#faf8f6";
const TEXT   = "#111111";
const CORAL  = "#ff4422";
const MUTED  = "#888888";
const BORDER = "#e8e8e4";
const SANS   = "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";

export default function SensayV3OG() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #e0e0e0; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
      `}</style>

      {/* 1200×630 — screenshot this */}
      <div style={{
        width: 1200, height: 630, flexShrink: 0,
        background: OFF,
        position: "relative",
        overflow: "hidden",
        fontFamily: SANS,
      }}>

        {/* ── coral right panel ── */}
        <div style={{
          position: "absolute", top: 0, right: 0,
          width: 460, height: "100%",
          background: CORAL,
        }} />

        {/* ── decorative coral arc (top-left) ── */}
        <svg width="320" height="320" style={{ position: "absolute", top: -80, left: -80, opacity: 0.045 }}>
          <circle cx="160" cy="160" r="160" fill={CORAL} />
        </svg>

        {/* ── waveform bars (bottom-left decoration) ── */}
        <svg width="180" height="48" viewBox="0 0 180 48" style={{ position: "absolute", bottom: 44, left: 56 }}>
          {[6, 14, 26, 38, 48, 38, 30, 20, 36, 48, 40, 28, 16, 10, 22].map((h, i) => (
            <rect
              key={i}
              x={i * 12}
              y={(48 - h) / 2}
              width={6}
              height={h}
              rx={3}
              fill={CORAL}
              opacity={0.18 + i * 0.01}
            />
          ))}
        </svg>

        {/* ── man photo ── */}
        <div style={{
          position: "absolute",
          right: 0, bottom: 0,
          width: 460, height: 630,
        }}>
          <img
            src="/sensay/hero-v3.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
          />
          {/* subtle left-edge fade into coral */}
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(to right, ${CORAL} 0%, transparent 28%)`,
          }} />
        </div>

        {/* ── LEFT CONTENT ── */}
        <div style={{ position: "absolute", top: 0, left: 0, width: 740, height: "100%", padding: "52px 56px 52px 56px", display: "flex", flexDirection: "column" }}>

          {/* wordmark */}
          <div style={{ fontFamily: SANS, fontSize: "1.3rem", fontWeight: 700, color: TEXT, letterSpacing: "-.01em" }}>
            Sens<span style={{ color: CORAL }}>ay</span>
          </div>

          {/* headline */}
          <div style={{ marginTop: "auto", marginBottom: "auto" }}>
            <h1 style={{
              fontFamily: SANS, fontWeight: 700,
              fontSize: "7.2rem", lineHeight: 1.0,
              letterSpacing: "-.04em",
              color: TEXT,
              marginBottom: "1.8rem",
            }}>
              Just<br />
              say<br />
              <span style={{ color: CORAL }}>it.</span>
            </h1>
            <p style={{
              fontFamily: SANS, fontSize: "1.25rem", fontWeight: 400,
              color: MUTED, lineHeight: 1.65, maxWidth: 420,
            }}>
              Speak. Get clean, ready-to-send text — in your email,<br />
              Slack, WhatsApp, or anywhere else.
            </p>
          </div>

          {/* bottom row: badge + apps */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <div style={{
              background: CORAL, color: WHITE,
              fontFamily: SANS, fontSize: "0.78rem", fontWeight: 600,
              padding: "8px 20px", borderRadius: 20,
              letterSpacing: "0.01em",
            }}>
              Try free — no signup
            </div>
            {["Gmail", "Slack", "WhatsApp", "Notion"].map(app => (
              <div key={app} style={{
                background: WHITE, border: `1px solid ${BORDER}`,
                borderRadius: 6, padding: "5px 14px",
                color: TEXT, fontFamily: SANS, fontSize: "0.75rem", fontWeight: 500,
              }}>
                {app}
              </div>
            ))}
          </div>

        </div>

        {/* ── mic icon badge on photo ── */}
        <div style={{
          position: "absolute", bottom: 48, right: 36,
          width: 56, height: 56, borderRadius: "50%",
          background: WHITE,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 6px 24px rgba(0,0,0,.18)",
        }}>
          <svg width="20" height="26" viewBox="0 0 18 24" fill="none">
            <rect x="4" y="0" width="10" height="15" rx="5" fill={CORAL} opacity=".9"/>
            <path d="M1 12c0 4.42 3.58 8 8 8s8-3.58 8-8" stroke={CORAL} strokeWidth="2" strokeLinecap="round" opacity=".9"/>
            <line x1="9" y1="20" x2="9" y2="24" stroke={CORAL} strokeWidth="2" strokeLinecap="round" opacity=".9"/>
          </svg>
        </div>

      </div>
    </>
  );
}
