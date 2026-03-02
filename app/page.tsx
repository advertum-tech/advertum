"use client";
import cn from "classnames";
import oona from './assets/styles/oona/oona.module.scss'
import { useLang } from "@/app/context/LanguageContext";

export default function Home() {
  const { lang } = useLang();

  return (
      <>
        <div className={'bg-accentBackground text-main'}>
          <div className={cn('container intro', oona['container'], oona['intro'])}>
            <div className={cn('row')}>
              <h1 className={
                  'relative lg:absolute ' +
                  'top-0 lg:top-1/3 ' +
                  'px-3 ' +
                  'w-full lg:w-2/3 ' +
                  'text-[45px] lg:text-[70px] ' +
                  'tracking-tight'}>
                {lang === 'ru'
                  ? 'Улучшаем качество и эффективность вашего бизнеса'
                  : 'Improve The Quality and Performance of Your Business'}
              </h1>
              <div className="col s12 l6 offset-l6">
                <p className={cn('' +
                    'absolute lg:relative ' +
                    'top-2/3 md:top-3/4 lg:top-0 ' +
                    ' lg:text-[1.68rem] ' +
                    'intro-text text-main font-normal my-5 leading-normal')}>
                  {lang === 'ru'
                    ? 'Advertum — студия автоматизации и разработки. Мы внедряем AI-агентов в бизнес-процессы и создаём продукты, которые работают.'
                    : 'Advertum is a development and automation studio. We deploy AI agents into business processes and build products that work.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={'bg-white text-main'}>
          <div className={cn('container', oona['container'])}>
            <section className={cn(oona['section'], oona['blog-posts'])}>
              <div className="row">
                <div className="col s12">
                  <h2 className={'tracking-tight'}>Journal</h2>
                </div>
              </div>
              <div className="row">
                <div className="col s12 l6 margin-on-medium-and-down">
                  <a href="/great-displacement" className={cn(oona['no-underline'])}>
                    <svg viewBox="0 0 680 400" className="responsive-img rounded-3xl" style={{background: '#f8f8f8'}}>
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
                  <a href="/great-displacement" className={cn('flow-text', oona['item-title'])}>
                    {lang === 'ru' ? 'Великое вытеснение' : 'The Great Displacement'}
                  </a>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {lang === 'ru'
                      ? 'ИИ обесценивает умственный труд быстрее, чем мы успеваем переучиться.'
                      : 'AI is devaluing cognitive labor faster than we can retrain.'}
                  </p>
                </div>
                <div className="col s12 l6">
                  <a href="/harness-engineering" className={cn(oona['no-underline'])}>
                    <svg viewBox="0 0 680 400" className="responsive-img rounded-3xl" style={{background: '#f8f8f8'}}>
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
                  <a href="/harness-engineering" className={cn('flow-text', oona['item-title'])}>
                    {lang === 'ru' ? 'Harness-инженерия' : 'Harness Engineering'}
                  </a>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {lang === 'ru'
                      ? 'Три инженера, Codex и миллион строк кода — ни одной написанной вручную.'
                      : 'Three engineers, Codex, and a million lines of code — none written by hand.'}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className={'bg-white text-main'}>
          <div className={cn('container', oona['container'])}>
            <section className={cn('latest-projects', oona['section'], oona['latest-projects'])}>
              <div className="row">
                <div className="col s12">
                  <h2 className={'tracking-tight'}>
                    {lang === 'ru' ? 'Последние проекты' : 'Latest projects'}
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col s12 l6 margin-on-medium-and-down">
                  <a href="/work/clip-finance" className={cn(oona['no-underline'], '')}>
                    <img src="/images/work/clip/clip.webp" alt="Clip Finance" className={'responsive-img rounded-3xl'}/>
                  </a>
                  <a href="/work/clip-finance" className={cn('flow-text', oona['item-title'])}>Clip Finance</a>
                </div>
                <div className="col s12 l6">
                  <a href="/work/advertum-cashback" className={cn(oona['no-underline'])}>
                    <img src="/images/work/advertum/advertum.webp" alt="Advertum Cashback" className={'responsive-img rounded-3xl'}/>
                  </a>
                  <a href="/work/advertum-cashback" className={cn('flow-text', oona['item-title'])}>Advertum Cashback</a>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* TODO: наполнить контентом */}
        <div className={'bg-white text-main'}>
          <div className={cn('container', oona['container'])}>
            <section className={cn(oona['section'])}>
              <div className="row">
                <div className="col s12">
                  <h2 className={'tracking-tight'}>
                    {lang === 'ru' ? 'Автоматизация' : 'Automation'}
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col s12 l6">
                  <p className={cn('flow-text', oona['intro-text'])}>
                    {lang === 'ru'
                      ? 'Внедряем AI-агентов в бизнес-процессы — от записи клиентов до программирования станков с ЧПУ. Подключаем к вашим системам, разворачиваем локально, данные не покидают компанию.'
                      : 'We deploy AI agents into business operations — from booking appointments to programming CNC machines. Connected to your systems, running on your servers, your data stays inside.'}
                  </p>
                  <a href="/ai" className={cn('flow-text', oona['item-title'])}>
                    {lang === 'ru' ? 'Подробнее →' : 'Learn more →'}
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className={'bg-white text-main'}>
          <div className={cn('container', oona['container'])}>
            <section className={cn(oona['section'], oona['get-in-touch'])}>
              <div className="row">
                <div className="col s12">
                  <h2 className={'tracking-tight'}>
                    {lang === 'ru' ? 'Связаться' : 'Get in touch'}
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className={cn('flow-text', oona['item-title'])}>
                    {lang === 'ru'
                      ? <>Хотите обсудить проект, идею или просто познакомиться — <a href="/contact" className="ajax-link">напишите нам</a>.</>
                      : <>Whether you like to start a new project, discuss an idea or just say hello — <a href="/contact" className="ajax-link">contact us</a>.</>}
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <img src="/images/bottom.jpg" alt="Get in touch" className="w-[400px]"/>
              </div>
            </section>
          </div>
        </div>
      </>
  )
}
