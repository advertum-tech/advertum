"use client";
import cn from "classnames";
import { useLang } from "@/app/context/LanguageContext";
import { useState } from "react";

const ENDPOINT = "https://n8n.hallstain.me/form/0ce65eff-e779-4d83-ad0d-9d5a25bc4e01";

type Status = "idle" | "submitting" | "success" | "error_403" | "error_500" | "error_network";

export default function InlineContactForm() {
  const lang = useLang();
  const ru = lang === "ru";
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    const body = new FormData();
    body.append("field-0", name);
    body.append("field-1", email);
    body.append("field-2", phone);
    body.append("field-3", comment);
    try {
      const res = await fetch(ENDPOINT, { method: "POST", body });
      if (res.ok) setStatus("success");
      else if (res.status === 403) setStatus("error_403");
      else setStatus("error_500");
    } catch {
      setStatus("error_network");
    }
  }

  function reset() {
    setStatus("idle");
    setName(""); setEmail(""); setPhone(""); setComment("");
  }

  const inputClass = [
    "w-full bg-transparent border-0 border-b border-gray-200",
    "font-mono text-sm py-3 px-0 outline-none",
    "focus:border-gray-800 transition-colors duration-200",
    "placeholder:text-gray-300",
  ].join(" ");
  const labelClass = "font-mono text-xs uppercase tracking-widest text-gray-400 block mb-2";

  if (status === "success") {
    return (
      <div className="flex flex-col gap-4">
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        <p className="text-[1.2rem] font-normal">{ru ? "Получили, спасибо" : "Got it, thank you"}</p>
        <p className="text-sm text-gray-600">{ru ? "Ответим в течение дня." : "We'll get back to you within a day."}</p>
        <button onClick={reset} className="font-mono text-xs text-gray-400 hover:text-gray-800 transition-colors text-left">
          {ru ? "Отправить ещё →" : "Send another →"}
        </button>
      </div>
    );
  }

  if (status.startsWith("error")) {
    const msgs: Record<string, [string, string]> = {
      error_403: [
        ru ? "Слишком много запросов" : "Too many requests",
        ru ? "Подождите немного и попробуйте снова." : "Please wait a moment and try again.",
      ],
      error_500: [
        ru ? "Ошибка на сервере" : "Server error",
        ru ? "Что-то пошло не так. Напишите нам: info@advertum.com" : "Something went wrong. Email us: info@advertum.com",
      ],
      error_network: [
        ru ? "Нет соединения" : "No connection",
        ru ? "Проверьте интернет и попробуйте снова." : "Check your connection and try again.",
      ],
    };
    const [errH, errT] = msgs[status] ?? ["Error", "Something went wrong."];
    return (
      <div className="flex flex-col gap-4">
        <p className="text-[1.2rem] font-normal">{errH}</p>
        <p className="text-sm text-gray-600">{errT}</p>
        <button onClick={() => setStatus("idle")} className="font-mono text-xs text-gray-400 hover:text-gray-800 transition-colors text-left">
          ← {ru ? "Попробовать снова" : "Try again"}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <label className={labelClass}>{ru ? "Имя" : "Name"}</label>
          <input
            type="text" value={name} onChange={e => setName(e.target.value)}
            placeholder={ru ? "Иван" : "John"} className={inputClass} disabled={status === "submitting"}
          />
        </div>
        <div>
          <label className={labelClass}>Email</label>
          <input
            type="email" value={email} onChange={e => setEmail(e.target.value)}
            placeholder="hello@example.com" className={inputClass} disabled={status === "submitting"}
          />
        </div>
        <div>
          <label className={labelClass}>{ru ? "Телефон" : "Phone"}</label>
          <input
            type="tel" value={phone} onChange={e => setPhone(e.target.value)}
            placeholder={ru ? "+7 900 000 00 00" : "+1 800 000 0000"} className={inputClass} disabled={status === "submitting"}
          />
        </div>
      </div>
      <div>
        <label className={labelClass}>{ru ? "Комментарий" : "Message"}</label>
        <textarea
          value={comment} onChange={e => setComment(e.target.value)}
          placeholder={ru ? "Расскажите о вашем процессе..." : "Tell us about your process..."}
          rows={4} className={cn(inputClass, "resize-none")} disabled={status === "submitting"}
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "font-mono text-sm tracking-wide transition-opacity duration-200 font-normal text-link",
            status === "submitting" ? "opacity-40 cursor-not-allowed" : "opacity-100"
          )}
        >
          {status === "submitting" ? (ru ? "Отправляем..." : "Sending...") : (ru ? "Отправить →" : "Send →")}
        </button>
      </div>
    </form>
  );
}
