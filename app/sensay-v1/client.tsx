"use client";
import { useState, useEffect } from "react";

const MUTED  = "#7a6e60";
const SERIF  = "'Playfair Display', Georgia, 'Times New Roman', serif";
const ACCENT = "#e8a030";
const BG     = "#0c0b09";
const SANS   = "'Inter', system-ui, -apple-system, sans-serif";

const THOUGHTS = [
  "I should email Sarah about the Thursday thing — actually I know exactly what to say —",
  "The report opens wrong. What it should say is — actually it's obvious, it's —",
  "Just tell him directly: the numbers don't work because —",
  "The reply to that client. I've got it. It starts with —",
];

export function FadingThought() {
  const [idx, setIdx]   = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setShow(false);
      setTimeout(() => { setIdx(i => (i + 1) % THOUGHTS.length); setShow(true); }, 700);
    }, 3600);
    return () => clearInterval(t);
  }, []);

  return (
    <p style={{
      color: MUTED,
      fontFamily: SERIF,
      fontStyle: "italic",
      fontSize: "clamp(0.95rem, 1.9vw, 1.15rem)",
      lineHeight: 1.75,
      maxWidth: 600,
      margin: "0 0 2.5rem",
      transition: "opacity 0.7s ease, transform 0.7s ease",
      opacity: show ? 0.55 : 0,
      transform: show ? "translateY(0)" : "translateY(8px)",
      minHeight: 56,
    }}>
      &ldquo;{THOUGHTS[idx]}&rdquo;
    </p>
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
        background: ACCENT, color: BG,
        fontFamily: SANS, fontSize: "0.82rem", fontWeight: 500,
        padding: "12px 24px", borderRadius: 3,
        display: "inline-block",
        boxShadow: "0 4px 20px rgba(232,160,48,.28)",
      }}>
        Try free →
      </a>
    </div>
  );
}
