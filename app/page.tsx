"use client";
import { useLang } from "@/app/context/LanguageContext";
import Image from "next/image";
import { useState } from "react";
import InlineContactForm from "@/app/components/InlineContactForm";

export default function Home() {
  const lang = useLang();
  const p = lang === "ru" ? "/ru" : "";
  const [contactOpen, setContactOpen] = useState(false);

  return (
      <>
        <div className={'bg-accentBackground text-main'}>
          <div className="mx-auto w-[90%] max-w-[1600px] sm:w-4/5 h-screen max-lg:h-[75vh] bg-contain bg-no-repeat bg-center bg-[url('/images/advertum.webp')] max-lg:bg-[url('/images/advertum-mobile.webp')]">
            <div>
              <h1 className={
                  'relative lg:absolute ' +
                  'top-0 lg:top-1/3 ' +
                  'w-full lg:w-2/3 ' +
                  'text-[45px] lg:text-[70px] ' +
                  'tracking-tight'}>
                {lang === 'ru'
                  ? 'Улучшаем качество и эффективность вашего бизнеса'
                  : 'Improve The Quality and Performance of Your Business'}
              </h1>
              <div className="w-full lg:w-1/2 lg:ml-auto">
                <p className="absolute lg:relative top-2/3 md:top-3/4 lg:top-0 lg:text-[1.68rem] text-main font-normal my-5 leading-normal">
                  {lang === 'ru'
                    ? 'Advertum — студия автоматизации и разработки. Мы внедряем AI-агентов в бизнес-процессы и создаём продукты, которые работают.'
                    : 'Advertum is a development and automation studio. We deploy AI agents into business processes and build products that work.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={'bg-white text-main'}>
          <div className="mx-auto w-[90%] max-w-[1600px] sm:w-4/5">
            <section className="py-20 max-lg:py-16 max-sm:py-12">
              <h2 className={'tracking-tight mb-8'}>Journal</h2>
              <div className="flex flex-col lg:flex-row gap-x-6">
                <div className="w-full lg:w-1/2 max-lg:mb-12">
                  <a href={`${p}/great-displacement`} className="border-b-0">
                    <svg viewBox="0 0 680 400" className="max-w-full h-auto rounded-3xl" style={{background: '#f8f8f8'}}>
                      {[...Array(12)].map((_, i) => (
                        <line key={`v${i}`} x1={60 * i} y1="0" x2={60 * i} y2="400" stroke="#e5e5e5" strokeWidth="0.5" />
                      ))}
                      {[...Array(8)].map((_, i) => (
                        <line key={`h${i}`} x1="0" y1={50 * i} x2="680" y2={50 * i} stroke="#e5e5e5" strokeWidth="0.5" />
                      ))}
                      <path d="M40 320 Q120 310 180 280 Q240 250 300 180 Q360 110 420 70 Q480 30 560 20 Q600 15 640 12" fill="none" stroke="#1a1a1a" strokeWidth="2" />
                      <path d="M40 320 Q120 315 180 300 Q240 285 300 260 Q360 230 420 200 Q480 170 560 150 Q600 140 640 135" fill="none" stroke="#999" strokeWidth="1.5" strokeDasharray="6 4" />
                      {[[180, 280], [300, 180], [420, 70], [560, 20]].map(([cx, cy], i) => (
                        <g key={`n${i}`}>
                          <circle cx={cx} cy={cy} r="5" fill="#1a1a1a" />
                          <circle cx={cx} cy={cy} r="12" fill="none" stroke="#1a1a1a" strokeWidth="0.8" />
                        </g>
                      ))}
                      {[[300, 180, 260], [420, 70, 200]].map(([x, y1, y2], i) => (
                        <line key={`d${i}`} x1={x} y1={y1} x2={x} y2={y2} stroke="#c00" strokeWidth="1" strokeDasharray="3 3" />
                      ))}
                      <text x="50" y="30" fontSize="13" fontFamily="monospace" fill="#999">
                        {lang === 'ru' ? 'умственный труд → дешевеет' : 'cognitive labor → cheap'}
                      </text>
                      <text x="400" y="380" fontSize="13" fontFamily="monospace" fill="#999">
                        {lang === 'ru' ? 'физический труд → в дефиците' : 'physical labor → scarce'}
                      </text>
                    </svg>
                  </a>
                  <div className="meta">
                    <time dateTime="2026-02-01">02/2026</time>
                    <span>&nbsp;· {lang === 'ru' ? 'Мнение · Лонгрид' : 'Opinion · Essay'}</span>
                  </div>
                  <a href={`${p}/great-displacement`} className="text-[1.2rem] lg:text-[1.68rem] font-normal">
                    {lang === 'ru' ? 'Великое вытеснение' : 'The Great Displacement'}
                  </a>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {lang === 'ru'
                      ? 'ИИ обесценивает умственный труд быстрее, чем мы успеваем переучиться.'
                      : 'AI is devaluing cognitive labor faster than we can retrain.'}
                  </p>
                </div>
                <div className="w-full lg:w-1/2">
                  <a href={`${p}/harness-engineering`} className="border-b-0">
                    <svg viewBox="0 0 680 400" className="max-w-full h-auto rounded-3xl" style={{background: '#f8f8f8'}}>
                      {[...Array(12)].map((_, i) => (
                        <line key={`v${i}`} x1={60 * i} y1="0" x2={60 * i} y2="400" stroke="#e5e5e5" strokeWidth="0.5" />
                      ))}
                      {[...Array(8)].map((_, i) => (
                        <line key={`h${i}`} x1="0" y1={50 * i} x2="680" y2={50 * i} stroke="#e5e5e5" strokeWidth="0.5" />
                      ))}
                      {['Types', 'Config', 'Repo', 'Service', 'Runtime', 'UI'].map((label, i) => {
                        const x = 80 + i * 90;
                        const y = 160;
                        return (
                          <g key={label}>
                            <rect x={x} y={y} width="72" height="32" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
                            <text x={x + 36} y={y + 20} fontSize="10" fontFamily="monospace" fill="#1a1a1a" textAnchor="middle">{label}</text>
                            {i < 5 && <line x1={x + 72} y1={y + 16} x2={x + 90} y2={y + 16} stroke="#1a1a1a" strokeWidth="1" markerEnd="url(#arrow)" />}
                          </g>
                        );
                      })}
                      <defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#1a1a1a" /></marker></defs>
                      <rect x="80" y="240" width="612" height="28" rx="4" fill="none" stroke="#999" strokeWidth="1" strokeDasharray="4 3" />
                      <text x="340" y="258" fontSize="10" fontFamily="monospace" fill="#999" textAnchor="middle">Providers (auth, telemetry, connectors, feature flags)</text>
                      <circle cx="340" cy="70" r="28" fill="none" stroke="#1a1a1a" strokeWidth="1.5" />
                      <text x="340" y="74" fontSize="10" fontFamily="monospace" fill="#1a1a1a" textAnchor="middle">Codex</text>
                      {[170, 260, 350, 440, 530].map((x, i) => (
                        <line key={`c${i}`} x1="340" y1="98" x2={x} y2="160" stroke="#ddd" strokeWidth="0.8" />
                      ))}
                      <path d="M380 70 Q500 40 560 70 Q620 100 600 130 Q580 155 530 155" fill="none" stroke="#c00" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrow)" />
                      <text x="580" y="90" fontSize="9" fontFamily="monospace" fill="#c00">feedback</text>
                      <text x="50" y="340" fontSize="11" fontFamily="monospace" fill="#999">1M loc · 1500 PRs · 3 engineers</text>
                      <text x="420" y="340" fontSize="11" fontFamily="monospace" fill="#999">0 lines hand-written</text>
                    </svg>
                  </a>
                  <div className="meta">
                    <time dateTime="2026-02-11">02/2026</time>
                    <span>&nbsp;· {lang === 'ru' ? 'Инженерия · Перевод' : 'Engineering · Translation'}</span>
                  </div>
                  <a href={`${p}/harness-engineering`} className="text-[1.2rem] lg:text-[1.68rem] font-normal">
                    {lang === 'ru' ? 'Harness-инженерия' : 'Harness Engineering'}
                  </a>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {lang === 'ru'
                      ? 'Три инженера, Codex и миллион строк кода — ни одной написанной вручную.'
                      : 'Three engineers, Codex, and a million lines of code — none written by hand.'}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className={'bg-accentBackground text-main'}>
          <div className="mx-auto w-[90%] max-w-[1600px] sm:w-4/5">
            <section className="py-20 max-lg:py-16 max-sm:py-12">
              <h2 className={'tracking-tight mb-8'}>
                {lang === 'ru' ? 'Последние проекты' : 'Latest projects'}
              </h2>
              <div className="flex flex-col lg:flex-row gap-x-6">
                {/* Aerosol Factory card */}
                <div className="w-full lg:w-1/2 max-lg:mb-12">
                  <div className="flex flex-col">
                    <div className="mb-3">
                      <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#1a1a1a" strokeWidth="1.5" aria-hidden="true">
                        <path d="M2 28 L2 14 L10 18 L10 14 L18 18 L18 14 L26 18 L26 28 Z" />
                        <rect x="5"  y="21" width="5" height="7" />
                        <rect x="14" y="21" width="5" height="7" />
                        <line x1="22" y1="8" x2="22" y2="18" />
                        <line x1="18" y1="8" x2="26" y2="8" />
                        <line x1="18" y1="4" x2="26" y2="4" />
                      </svg>
                    </div>
                    <span className="text-xs font-mono text-gray-400 uppercase">
                      {lang === 'ru' ? 'Производство · Фабрика Аэрозолей' : 'Manufacturing · Aerosol Factory'}
                    </span>
                    <p className="text-[1.2rem] lg:text-[1.68rem] font-light mt-3">
                      {lang === 'ru'
                        ? 'Планировщик тратил часы на сбор данных из разных систем: склад, заказы, каталог — прежде чем принять одно решение о запуске партии.'
                        : 'The planner spent hours gathering data from different systems: inventory, orders, catalog — before making a single production decision.'}
                    </p>
                    <p className="text-sm text-gray-600 mt-3">
                      {lang === 'ru'
                        ? 'AI-агент в Telegram запрашивает данные и выдаёт рекомендацию по объёму производства за секунды.'
                        : 'An AI agent in Telegram queries data and delivers a production volume recommendation in seconds.'}
                    </p>
                    <a href={`${p}/cases/aerosol-factory`} className="text-sm font-mono mt-4 font-normal">
                      {lang === 'ru' ? 'Читать кейс →' : 'Read case →'}
                    </a>
                  </div>
                </div>

                {/* Beauty Salon card */}
                <div className="w-full lg:w-1/2">
                  <div className="flex flex-col">
                    <div className="mb-3">
                      <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#1a1a1a" strokeWidth="1.5" aria-hidden="true">
                        <rect x="3" y="6" width="26" height="23" rx="3" />
                        <line x1="3"  y1="13" x2="29" y2="13" />
                        <line x1="10" y1="3"  x2="10" y2="9" />
                        <line x1="22" y1="3"  x2="22" y2="9" />
                        <circle cx="10" cy="20" r="1.5" fill="#1a1a1a" stroke="none" />
                        <circle cx="16" cy="20" r="1.5" fill="#1a1a1a" stroke="none" />
                        <circle cx="22" cy="20" r="1.5" fill="#bbb" stroke="none" />
                        <circle cx="10" cy="25" r="1.5" fill="#bbb" stroke="none" />
                        <circle cx="16" cy="25" r="1.5" fill="#bbb" stroke="none" />
                      </svg>
                    </div>
                    <span className="text-xs font-mono text-gray-400 uppercase">
                      {lang === 'ru' ? 'Салон красоты' : 'Beauty salon'}
                    </span>
                    <p className="text-[1.2rem] lg:text-[1.68rem] font-light mt-3">
                      {lang === 'ru'
                        ? 'Администратор записывал клиентов вручную — конфликты расписания, пропущенные звонки, работа только в рабочее время.'
                        : 'The administrator booked clients manually — scheduling conflicts, missed calls, no service outside business hours.'}
                    </p>
                    <p className="text-sm text-gray-600 mt-3">
                      {lang === 'ru'
                        ? 'AI-агент в Telegram принимает записи на естественном языке, синхронизирует с расписанием и 1С. Запись работает 24/7.'
                        : 'A Telegram agent accepts bookings in natural language, syncs with schedule and 1C. Bookings run 24/7.'}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* TODO: наполнить контентом */}
        <div className={'bg-white text-main'}>
          <div className="mx-auto w-[90%] max-w-[1600px] sm:w-4/5">
            <section className="py-20 max-lg:py-16 max-sm:py-12">
              <h2 className={'tracking-tight mb-8'}>
                {lang === 'ru' ? 'Автоматизация' : 'Automation'}
              </h2>
              <div className="lg:w-1/2">
                <p className="text-[1.2rem] lg:text-[1.68rem] max-sm:mt-12 font-normal">
                  {lang === 'ru'
                    ? 'Внедряем AI-агентов в бизнес-процессы — от записи клиентов до программирования станков с ЧПУ. Подключаем к вашим системам, разворачиваем локально, данные не покидают компанию.'
                    : 'We deploy AI agents into business operations — from booking appointments to programming CNC machines. Connected to your systems, running on your servers, your data stays inside.'}
                </p>
                <a href={`${p}/ai`} className="text-[1.2rem] lg:text-[1.68rem] font-normal">
                  {lang === 'ru' ? 'Подробнее →' : 'Learn more →'}
                </a>
              </div>
            </section>
          </div>
        </div>

        <div className={'bg-white text-main'}>
          <div className="mx-auto w-[90%] max-w-[1600px] sm:w-4/5">
            <section className="py-20 max-lg:py-16 max-sm:py-12">
              <h2 className={'tracking-tight mb-8'}>
                {lang === 'ru' ? 'Связаться' : 'Get in touch'}
              </h2>
              <p className="text-[1.2rem] lg:text-[1.68rem] font-normal mb-2">
                {lang === 'ru'
                  ? 'Хотите обсудить проект, идею или просто познакомиться —'
                  : 'Whether you like to start a new project, discuss an idea or just say hello —'}
              </p>
              <button
                onClick={() => setContactOpen(o => !o)}
                className="text-[1.2rem] lg:text-[1.68rem] font-normal text-left text-link"
              >
                {lang === 'ru' ? 'напишите нам' : 'contact us'}
                <span className={`inline-block ml-2 transition-transform duration-500 ${contactOpen ? 'rotate-90' : ''}`}>→</span>
              </button>
              <div className={`grid transition-all duration-500 ease-in-out ${contactOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <div className="pt-10 lg:w-1/2">
                    <InlineContactForm />
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <Image src="/images/bottom.jpg" alt="Get in touch" width={400} height={400} className="w-[400px] h-auto" />
              </div>
            </section>
          </div>
        </div>
      </>
  )
}
