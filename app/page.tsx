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
        {/* ── HERO ── */}
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
                  : 'Improve the quality and performance of your business'}
              </h1>
              <div className="w-full lg:w-1/2 lg:ml-auto">
                <p className="absolute lg:relative top-2/3 md:top-3/4 lg:top-0 lg:text-[1.68rem] text-main font-normal my-5 leading-normal">
                  {lang === 'ru'
                    ? 'Advertum — студия автоматизации и разработки. Мы внедряем AI-агентов в бизнес-процессы и создаём продукты, которые работают.'
                    : 'Advertum is a development and automation studio. We put AI agents into business operations and build products that work.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── NUMBERS ── */}
        <div className={'bg-white text-main'}>
          <div className="mx-auto w-[90%] max-w-[1600px] sm:w-4/5">
            <div className="py-12 max-sm:py-8 grid grid-cols-2 lg:grid-cols-4 gap-8 border-b border-main/10">
              {([
                {
                  n: '2',
                  unit: lang === 'ru' ? 'часа' : 'hours',
                  label: lang === 'ru' ? 'в день экономит агент\nпланировщика на заводе' : 'a day saved by\na planning agent',
                },
                {
                  n: '14',
                  unit: lang === 'ru' ? 'дней' : 'days',
                  label: lang === 'ru' ? 'от брифа до\nпервого рабочего агента' : 'from brief to\nfirst working agent',
                },
                {
                  n: '100+',
                  unit: '',
                  label: lang === 'ru' ? 'интеграций\nс бизнес-системами' : 'integrations\nwith business systems',
                },
                {
                  n: '24/7',
                  unit: '',
                  label: lang === 'ru' ? 'агент работает\nбез выходных и обедов' : 'agents run without\nbreaks or weekends',
                },
              ] as { n: string; unit: string; label: string }[]).map(({ n, unit, label }) => (
                <div key={n}>
                  <div className="text-[2.5rem] lg:text-[3.5rem] tracking-tight leading-none">
                    {n}
                    {unit && <span className="text-[1.5rem] lg:text-[2rem] ml-1 opacity-50">{unit}</span>}
                  </div>
                  <div className="text-xs font-mono text-gray-400 mt-2 leading-relaxed whitespace-pre-line">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── JOURNAL ── */}
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
                      : "AI is devaluing cognitive labor faster than we can retrain."}
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
                      ? 'Три инженера, Codex и миллион строк кода. Ни одной написанной вручную.'
                      : 'Three engineers, Codex, and a million lines of code. None written by hand.'}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ── LATEST PROJECTS ── */}
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
                        ? 'Планировщик тратил часы на сбор данных из разных систем (склад, заказы, каталог), прежде чем принять одно решение о запуске партии.'
                        : 'The planner spent hours gathering data from different systems (inventory, orders, catalog) before making a single production decision.'}
                    </p>
                    <p className="text-sm text-gray-600 mt-3">
                      {lang === 'ru'
                        ? 'AI-агент в Telegram запрашивает данные и выдаёт рекомендацию по объёму производства за секунды.'
                        : 'An AI agent in Telegram pulls the data and gives a production recommendation in seconds.'}
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
                        ? 'Администратор записывал клиентов вручную: конфликты расписания, пропущенные звонки, работа только в рабочее время.'
                        : 'The administrator booked clients manually: scheduling conflicts, missed calls, no service outside business hours.'}
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

        {/* ── SOCIAL PROOF ── */}
        <div className={'bg-white text-main'}>
          <div className="mx-auto w-[90%] max-w-[1600px] sm:w-4/5">
            <section className="py-20 max-lg:py-16 max-sm:py-12">
              <h2 className={'tracking-tight mb-8'}>
                {lang === 'ru' ? 'Клиенты говорят' : 'What clients say'}
              </h2>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/2 border border-main/10 p-8">
                  <p className="text-[1.1rem] lg:text-[1.4rem] font-light leading-relaxed mb-6">
                    {lang === 'ru'
                      ? '«Агент делает за секунды то, на что планировщик тратил несколько часов каждый день. Окупилось за первый месяц.»'
                      : '"The agent does in seconds what the planner used to spend hours on every single day. It paid for itself in the first month."'}
                  </p>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                    {lang === 'ru' ? 'Фабрика Аэрозолей · Директор по производству' : 'Aerosol Factory · Production Director'}
                  </div>
                </div>
                <div className="w-full lg:w-1/2 border border-main/10 p-8">
                  <p className="text-[1.1rem] lg:text-[1.4rem] font-light leading-relaxed mb-6">
                    {lang === 'ru'
                      ? '«Клиенты пишут в два часа ночи и получают подтверждение немедленно. Раньше это означало пропущенный звонок утром.»'
                      : '"Clients write at 2 AM and get confirmation immediately. Before, that meant a missed call in the morning."'}
                  </p>
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                    {lang === 'ru' ? 'Салон красоты · Владелец' : 'Beauty Salon · Owner'}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ── HOW WE WORK ── */}
        <div className={'bg-accentBackground text-main'}>
          <div className="mx-auto w-[90%] max-w-[1600px] sm:w-4/5">
            <section className="py-20 max-lg:py-16 max-sm:py-12">
              <h2 className={'tracking-tight mb-8'}>
                {lang === 'ru' ? 'Как мы работаем' : 'How we work'}
              </h2>
              <div className="flex flex-col lg:flex-row gap-x-6">
                {([
                  {
                    n: '01',
                    title: lang === 'ru' ? 'Бриф' : 'Brief',
                    body: lang === 'ru'
                      ? 'Одна встреча: разбираемся в задаче, показываем что возможно, называем сроки и стоимость.'
                      : 'One meeting. We understand your task, show what\'s possible, give you timelines and cost.',
                  },
                  {
                    n: '02',
                    title: lang === 'ru' ? 'Прототип' : 'Prototype',
                    body: lang === 'ru'
                      ? 'Первый рабочий агент или прототип через 2 недели. Вы трогаете руками, не читаете презентацию.'
                      : 'First working agent or prototype in 2 weeks. You see and test it, not sit through a presentation.',
                  },
                  {
                    n: '03',
                    title: lang === 'ru' ? 'Запуск' : 'Launch',
                    body: lang === 'ru'
                      ? 'Разворачиваем в вашей инфраструктуре, подключаем к системам. Данные не покидают компанию.'
                      : 'We deploy in your infrastructure and connect to your systems. Your data stays inside.',
                  },
                  {
                    n: '04',
                    title: lang === 'ru' ? 'Поддержка' : 'Support',
                    body: lang === 'ru'
                      ? 'Остаёмся после запуска. Дорабатываем по мере работы с реальными данными.'
                      : 'We stay after launch and iterate as the system meets real-world data.',
                  },
                ] as { n: string; title: string; body: string }[]).map(({ n, title, body }) => (
                  <div key={n} className="w-full lg:w-1/4 max-lg:mb-10">
                    <div className="text-xs font-mono text-gray-400 mb-3">{n}</div>
                    <p className="text-[1.1rem] lg:text-[1.25rem] font-normal mb-2">{title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* ── SERVICES ── */}
        <div className={'bg-white text-main'}>
          <div className="mx-auto w-[90%] max-w-[1600px] sm:w-4/5">
            <section className="py-20 max-lg:py-16 max-sm:py-12">
              <h2 className={'tracking-tight mb-8'}>
                {lang === 'ru' ? 'Что мы делаем' : 'What we do'}
              </h2>
              <div className="flex flex-col lg:flex-row gap-x-6 mb-12">
                {([
                  {
                    icon: (
                      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="#1a1a1a" strokeWidth="1.5" aria-hidden="true">
                        <circle cx="16" cy="16" r="4" />
                        <path d="M16 4 L16 8 M16 24 L16 28 M4 16 L8 16 M24 16 L28 16" strokeLinecap="round" />
                        <path d="M7.8 7.8 L10.6 10.6 M21.4 21.4 L24.2 24.2 M7.8 24.2 L10.6 21.4 M21.4 10.6 L24.2 7.8" strokeLinecap="round" />
                      </svg>
                    ),
                    title: lang === 'ru' ? 'AI-агенты' : 'AI agents',
                    body: lang === 'ru'
                      ? 'Внедряем агентов в бизнес-процессы. Работают в Telegram, 1С, CRM, ERP. Данные не покидают компанию.'
                      : 'We put AI agents into your operations. They work with Telegram, 1C, CRM, ERP. Data stays on your servers.',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="#1a1a1a" strokeWidth="1.5" aria-hidden="true">
                        <rect x="3" y="5" width="26" height="18" rx="2" />
                        <line x1="10" y1="27" x2="22" y2="27" />
                        <line x1="16" y1="23" x2="16" y2="27" />
                        <line x1="7" y1="10" x2="14" y2="10" />
                        <line x1="7" y1="14" x2="18" y2="14" />
                      </svg>
                    ),
                    title: lang === 'ru' ? 'Сайты и лендинги' : 'Websites & landing pages',
                    body: lang === 'ru'
                      ? 'Разрабатываем корпоративные сайты, лендинги, промо-страницы. Быстро, без лишнего кода, на вашем домене.'
                      : 'Corporate sites, landing pages, promo pages. Fast, clean, on your domain.',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="#1a1a1a" strokeWidth="1.5" aria-hidden="true">
                        <rect x="4" y="4" width="10" height="10" rx="1.5" />
                        <rect x="18" y="4" width="10" height="10" rx="1.5" />
                        <rect x="4" y="18" width="10" height="10" rx="1.5" />
                        <rect x="18" y="18" width="10" height="10" rx="1.5" />
                        <line x1="14" y1="9" x2="18" y2="9" />
                        <line x1="9" y1="14" x2="9" y2="18" />
                        <line x1="23" y1="14" x2="23" y2="18" />
                        <line x1="14" y1="23" x2="18" y2="23" />
                      </svg>
                    ),
                    title: lang === 'ru' ? 'Интеграции' : 'Integrations',
                    body: lang === 'ru'
                      ? 'Связываем системы между собой: 1С, Bitrix, AmoCRM, Telegram, Google Sheets, внутренние базы данных.'
                      : 'Connect your systems: 1C, Bitrix, AmoCRM, Telegram, Google Sheets, internal databases.',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="#1a1a1a" strokeWidth="1.5" aria-hidden="true">
                        <path d="M6 26 L6 12 L16 6 L26 12 L26 26 Z" />
                        <rect x="12" y="18" width="8" height="8" />
                        <line x1="12" y1="13" x2="20" y2="13" />
                        <line x1="16" y1="10" x2="16" y2="16" />
                      </svg>
                    ),
                    title: lang === 'ru' ? 'Продукты с нуля' : 'Products from scratch',
                    body: lang === 'ru'
                      ? 'От идеи до MVP за 4–8 недель. SaaS, внутренние инструменты, мобильные приложения.'
                      : 'From idea to MVP in 4-8 weeks. SaaS, internal tools, mobile apps.',
                  },
                ] as { icon: React.ReactNode; title: string; body: string }[]).map(({ icon, title, body }) => (
                  <div key={title} className="w-full lg:w-1/4 max-lg:mb-10">
                    <div className="mb-3">{icon}</div>
                    <p className="text-[1.1rem] lg:text-[1.25rem] font-normal mb-2">{title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
              <a href={`${p}/ai`} className="text-[1.2rem] lg:text-[1.68rem] font-normal">
                {lang === 'ru' ? 'Подробнее об агентах →' : 'Learn more about agents →'}
              </a>
            </section>
          </div>
        </div>

        {/* ── FOR WHOM ── */}
        <div className={'bg-accentBackground text-main'}>
          <div className="mx-auto w-[90%] max-w-[1600px] sm:w-4/5">
            <section className="py-20 max-lg:py-16 max-sm:py-12">
              <h2 className={'tracking-tight mb-8'}>
                {lang === 'ru' ? 'С кем работаем' : 'Who we work with'}
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
                {([
                  {
                    title: lang === 'ru' ? 'Производство' : 'Manufacturing',
                    body: lang === 'ru' ? 'Планирование, складской учёт, диспетчеризация, ЧПУ-интеграции' : 'Production planning, inventory, dispatch, CNC integrations',
                  },
                  {
                    title: lang === 'ru' ? 'Торговля и e-com' : 'Retail & e-commerce',
                    body: lang === 'ru' ? 'Обработка заказов, ценообразование, работа с поставщиками' : 'Order processing, pricing, supplier communication',
                  },
                  {
                    title: lang === 'ru' ? 'Сервисный бизнес' : 'Service businesses',
                    body: lang === 'ru' ? 'Запись клиентов, расписание, уведомления, лояльность' : 'Client booking, scheduling, notifications, loyalty',
                  },
                  {
                    title: lang === 'ru' ? 'Финансы и учёт' : 'Finance & accounting',
                    body: lang === 'ru' ? 'Сверки, отчёты, напоминания, интеграция с банками' : 'Reconciliations, reports, reminders, bank integrations',
                  },
                  {
                    title: lang === 'ru' ? 'Логистика' : 'Logistics',
                    body: lang === 'ru' ? 'Трекинг отправлений, уведомления клиентов, работа с перевозчиками' : 'Shipment tracking, client notifications, carrier management',
                  },
                  {
                    title: lang === 'ru' ? 'Стартапы и продукты' : 'Startups & products',
                    body: lang === 'ru' ? 'Быстрый MVP, прод-инфраструктура, масштабирование' : 'Fast MVP, production infrastructure, scaling',
                  },
                ] as { title: string; body: string }[]).map(({ title, body }) => (
                  <div key={title}>
                    <p className="text-[1rem] lg:text-[1.1rem] font-normal mb-1">{title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* ── GET IN TOUCH ── */}
        <div className={'bg-white text-main'}>
          <div className="mx-auto w-[90%] max-w-[1600px] sm:w-4/5">
            <section className="py-20 max-lg:py-16 max-sm:py-12">
              <h2 className={'tracking-tight mb-8'}>
                {lang === 'ru' ? 'Связаться' : 'Get in touch'}
              </h2>
              <p className="text-[1.2rem] lg:text-[1.68rem] font-normal mb-2">
                {lang === 'ru'
                  ? 'Есть проект, идея или просто хотите поговорить,'
                  : 'Got a project, an idea, or just want to say hello,'}
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
