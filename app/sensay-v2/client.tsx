"use client";
import { useState, useEffect } from "react";

const CREAM        = "#f8f4ef";
const INK          = "#1a1510";
const WARM_MUTED   = "#9c8e7e";
const WARM_BORDER  = "#e0d8ce";
const DARK_CARD    = "#1a1a28";
const LIGHT_TEXT   = "#eae6ff";
const VIOLET       = "#9b72f8";
const DARK_MUTED   = "#5e5878";
const DARK_BORDER  = "#252336";
const SERIF        = "'DM Serif Display', Georgia, serif";
const SANS         = "'DM Sans', system-ui, -apple-system, sans-serif";

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

export function SplitQuotes() {
  const [idx, setIdx]   = useState(0);
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
      <div style={{ background: CREAM, border: `1px solid ${WARM_BORDER}`, borderRight: "none", borderRadius: "8px 0 0 8px", padding: "2.5rem" }}>
        <div style={{ color: WARM_MUTED, fontFamily: SANS, fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          {PHONE_CALL[idx].label}
        </div>
        <p style={{
          color: INK, fontFamily: SERIF, fontSize: "clamp(1rem,2vw,1.2rem)", lineHeight: 1.75, margin: 0,
          transition: tr, opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(6px)",
        }} dangerouslySetInnerHTML={{ __html: `&ldquo;${PHONE_CALL[idx].quote}&rdquo;` }} />
      </div>
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

export function StickyCta() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const fn = () => setSticky(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!sticky) return null;

  return (
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
  );
}
