"use client";
import cn from "classnames";
import oona from "../assets/styles/oona/oona.module.scss";
import { useLang } from "@/app/context/LanguageContext";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const ENDPOINT = "https://n8n.hallstain.me/form/0ce65eff-e779-4d83-ad0d-9d5a25bc4e01";

type Status = "idle" | "submitting" | "success" | "error_403" | "error_500" | "error_network";

function ContactForm() {
  const { lang } = useLang();
  const searchParams = useSearchParams();
  const simulate = searchParams.get("simulate");

  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Dev: simulate error states via ?simulate=403|500|network
  useEffect(() => {
    if (simulate === "403") setStatus("error_403");
    else if (simulate === "500") setStatus("error_500");
    else if (simulate === "network") setStatus("error_network");
    else if (simulate === "success") setStatus("success");
  }, [simulate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    // Dev simulation — skip real request
    if (simulate === "403") { setStatus("error_403"); return; }
    if (simulate === "500") { setStatus("error_500"); return; }
    if (simulate === "network") { setStatus("error_network"); return; }

    const body = new FormData();
    body.append("field-0", name);
    body.append("field-1", email);
    body.append("field-2", phone);
    body.append("field-3", comment);

    try {
      const res = await fetch(ENDPOINT, { method: "POST", body });
      if (res.ok) {
        setStatus("success");
      } else if (res.status === 403) {
        setStatus("error_403");
      } else {
        setStatus("error_500");
      }
    } catch {
      setStatus("error_network");
    }
  }

  function reset() {
    setStatus("idle");
    setName(""); setEmail(""); setPhone(""); setComment("");
  }

  const t = {
    heading:    lang === "ru" ? "Напишите нам"          : "Get in touch",
    sub:        lang === "ru"
      ? "Расскажите о задаче — ответим в течение дня."
      : "Tell us about your project — we reply within a day.",
    name:       lang === "ru" ? "Имя"                   : "Name",
    email:      "Email",
    phone:      lang === "ru" ? "Телефон"               : "Phone",
    comment:    lang === "ru" ? "Комментарий"           : "Message",
    namePh:     lang === "ru" ? "Иван"                  : "John",
    emailPh:    "hello@example.com",
    phonePh:    lang === "ru" ? "+7 900 000 00 00"      : "+1 800 000 0000",
    commentPh:  lang === "ru"
      ? "Расскажите о вашем процессе..."
      : "Tell us about your process...",
    submit:     lang === "ru" ? "Отправить"             : "Send",
    sending:    lang === "ru" ? "Отправляем..."         : "Sending...",
    successH:   lang === "ru" ? "Получили, спасибо"     : "Got it, thank you",
    successT:   lang === "ru"
      ? "Ответим в течение дня."
      : "We'll get back to you within a day.",
    sendAnother: lang === "ru" ? "Отправить ещё"        : "Send another",
    err403H:    lang === "ru" ? "Слишком много запросов": "Too many requests",
    err403T:    lang === "ru"
      ? "Подождите немного и попробуйте снова."
      : "Please wait a moment and try again.",
    err500H:    lang === "ru" ? "Ошибка на сервере"     : "Server error",
    err500T:    lang === "ru"
      ? "Что-то пошло не так. Напишите нам напрямую: info@advertum.com"
      : "Something went wrong. Email us directly: info@advertum.com",
    errNetH:    lang === "ru" ? "Нет соединения"        : "No connection",
    errNetT:    lang === "ru"
      ? "Проверьте интернет и попробуйте снова."
      : "Check your connection and try again.",
    tryAgain:   lang === "ru" ? "Попробовать снова"     : "Try again",
  };

  const inputClass = [
    "w-full bg-transparent border-0 border-b border-gray-200",
    "font-mono text-sm py-3 px-0 outline-none",
    "focus:border-gray-800 transition-colors duration-200",
    "placeholder:text-gray-300",
  ].join(" ");

  const labelClass = "font-mono text-xs uppercase tracking-widest text-gray-400 block mb-2";

  // ── Success ──────────────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="flex flex-col gap-4">
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        <h2 className="text-2xl tracking-tight">{t.successH}</h2>
        <p className="text-sm text-gray-500">{t.successT}</p>
        <button onClick={reset} className="font-mono text-xs text-gray-400 hover:text-gray-800 transition-colors mt-2 text-left">
          {t.sendAnother} →
        </button>
      </div>
    );
  }

  // ── Error ─────────────────────────────────────────────────────────────────────
  const isError = status === "error_403" || status === "error_500" || status === "error_network";
  if (isError) {
    const [errH, errT] = status === "error_403"
      ? [t.err403H, t.err403T]
      : status === "error_500"
        ? [t.err500H, t.err500T]
        : [t.errNetH, t.errNetT];
    return (
      <div className="flex flex-col gap-4">
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
        <h2 className="text-2xl tracking-tight">{errH}</h2>
        <p className="text-sm text-gray-500">{errT}</p>
        <button onClick={() => setStatus("idle")} className="font-mono text-xs text-gray-400 hover:text-gray-800 transition-colors mt-2 text-left">
          ← {t.tryAgain}
        </button>
      </div>
    );
  }

  // ── Form ──────────────────────────────────────────────────────────────────────
  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <label className={labelClass}>{t.name}</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder={t.namePh}
            className={inputClass}
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label className={labelClass}>{t.email}</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={t.emailPh}
            className={inputClass}
            disabled={status === "submitting"}
          />
        </div>
        <div>
          <label className={labelClass}>{t.phone}</label>
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder={t.phonePh}
            className={inputClass}
            disabled={status === "submitting"}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>{t.comment}</label>
        <textarea
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder={t.commentPh}
          rows={4}
          className={cn(inputClass, "resize-none")}
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "font-mono text-sm tracking-wide transition-opacity duration-200",
            oona["item-title"],
            status === "submitting" ? "opacity-40 cursor-not-allowed" : "opacity-100"
          )}
        >
          {status === "submitting" ? t.sending : t.submit + " →"}
        </button>
      </div>
    </form>
  );
}

export default function Contact() {
  const { lang } = useLang();

  const t = {
    heading: lang === "ru" ? "Напишите нам" : "Get in touch",
    sub: lang === "ru"
      ? "Расскажите о задаче — ответим в течение дня."
      : "Tell us about your project — we reply within a day.",
  };

  return (
    <div className="bg-accentBackground text-main min-h-screen">
      <div className={cn("container", oona["container"])}>
        <section className={cn(oona["section"])}>
          <div className="row">
            <div className="col s12 l6">
              <h1 className="text-[38px] lg:text-[55px] tracking-tight mb-2">
                {t.heading}
              </h1>
              <p className="font-mono text-sm text-gray-400 mb-10">{t.sub}</p>
              <Suspense>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
