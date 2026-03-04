"use client";
import cn from "classnames";
import oona from "../../assets/styles/oona/oona.module.scss";
import { useLang } from "@/app/context/LanguageContext";
import Script from "next/script";

export default function CaseContent() {
  const { lang } = useLang();

  return (
    <>
      {/* ── HERO ── */}
      <div className="bg-accentBackground text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12">
                <span className="font-mono text-sm text-gray-400 uppercase tracking-widest">
                  {lang === "ru" ? "Кейс · Производство" : "Case Study · Manufacturing"}
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col s12 l8">
                <h1 className="text-[38px] lg:text-[62px] tracking-tight mt-3">
                  {lang === "ru"
                    ? "Агент планирования производства"
                    : "Production Planning Agent"}
                </h1>
                <p className="lg:text-[1.3rem] font-normal my-5 leading-normal text-gray-600">
                  {lang === "ru"
                    ? "Как AI-агент помог заводу аэрозольной упаковки принимать решения по производству в секунды — прямо из Telegram."
                    : "How an AI agent helped an aerosol packaging factory make production decisions in seconds — right from Telegram."}
                </p>
                <p className="font-mono text-sm text-gray-400">
                  {lang === "ru" ? "Клиент: " : "Client: "}
                  <a
                    href="https://www.aerosolfactory.ru/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={oona["item-title"]}
                  >
                    {lang === "ru" ? "Фабрика Аэрозолей →" : "Aerosol Factory →"}
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ── КЛИЕНТ ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight">
                  {lang === "ru" ? "Клиент" : "Client"}
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col s12 l7">
                <p className="flow-text leading-relaxed">
                  {lang === "ru"
                    ? "Фабрика Аэрозолей — российский производитель аэрозольной жестяной упаковки и готовых аэрозольных продуктов. Предприятие расположено во Владимирской области в особой экономической зоне, в 90 км от Москвы."
                    : "Aerosol Factory is a Russian manufacturer of aerosol tin packaging and ready-to-use aerosol products. The facility is located in Vladimir Oblast in a special economic zone, 90 km from Moscow."}
                </p>
                <p className="flow-text leading-relaxed mt-3">
                  {lang === "ru"
                    ? "Полный производственный цикл: разработка рецептуры, контрактное наполнение, испытания и сертификация. Собственные бренды OKKE охватывают автокосметику, бытовую химию и дезинфицирующие средства. Минимальная партия — 10 000 баллонов."
                    : "Full production cycle: formula development, contract filling, testing and certification. Their own OKKE brands cover automotive care, household chemicals and disinfectants. Minimum production run: 10,000 units."}
                </p>
              </div>
              <div className="col s12 l4 offset-l1">
                <div className="rounded-3xl bg-gray-50 p-6 mt-6 lg:mt-0">
                  {[
                    {
                      labelRu: "Расположение",
                      labelEn: "Location",
                      valueRu: "Владимирская область, ОЭЗ",
                      valueEn: "Vladimir Oblast, SEZ",
                    },
                    {
                      labelRu: "Мин. партия",
                      labelEn: "Min. batch",
                      valueRu: "10 000 баллонов",
                      valueEn: "10,000 units",
                    },
                    {
                      labelRu: "Цикл",
                      labelEn: "Cycle",
                      valueRu: "Полный — от рецептуры до готового продукта",
                      valueEn: "Full — from formula to finished product",
                    },
                    {
                      labelRu: "Бренды",
                      labelEn: "Brands",
                      valueRu: "OKKE AUTO, OKKE PROF, OKKE SANI",
                      valueEn: "OKKE AUTO, OKKE PROF, OKKE SANI",
                    },
                  ].map((row, i) => (
                    <div key={i} className={i > 0 ? "mt-4 pt-4 border-t border-gray-100" : ""}>
                      <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">
                        {lang === "ru" ? row.labelRu : row.labelEn}
                      </span>
                      <p className="text-sm text-gray-700 mt-1">
                        {lang === "ru" ? row.valueRu : row.valueEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ── ЗАДАЧА ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight">
                  {lang === "ru" ? "Задача" : "Challenge"}
                </h2>
              </div>
            </div>
            <div className="row">
              {[
                {
                  titleRu: "Данные в разных системах",
                  titleEn: "Data scattered across systems",
                  descRu:
                    "Складские остатки, текущие заказы и характеристики продуктов хранились в разных местах. Чтобы принять одно решение о запуске партии, нужно было вручную собирать информацию из нескольких источников.",
                  descEn:
                    "Warehouse stock, current orders and product specs were stored in different places. Making one production decision required manually gathering information from multiple sources.",
                },
                {
                  titleRu: "Планирование занимало время",
                  titleEn: "Planning took time",
                  descRu:
                    "Прежде чем дать ответ на вопрос «сколько нужно запустить», планировщику требовалось проверить несколько таблиц и систем. Это замедляло оперативные решения.",
                  descEn:
                    "Before answering \"how much should we produce\", the planner had to check several spreadsheets and systems. This slowed down operational decisions.",
                },
                {
                  titleRu: "Нет единой точки доступа",
                  titleEn: "No single access point",
                  descRu:
                    "Разные роли — менеджер по продажам, технолог, снабженец — обращались к данным по-разному. Единого инструмента, который понимал бы запрос на естественном языке, не было.",
                  descEn:
                    "Different roles — sales manager, technologist, procurement — accessed data differently. There was no single tool that could understand a request in natural language.",
                },
              ].map((item, i) => (
                <div key={i} className="col s12 l4 margin-on-medium-and-down">
                  <span className={cn("flow-text", oona["item-title"])}>
                    {lang === "ru" ? item.titleRu : item.titleEn}
                  </span>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {lang === "ru" ? item.descRu : item.descEn}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ── РЕШЕНИЕ ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight">
                  {lang === "ru" ? "Решение" : "Solution"}
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col s12 l7">
                <p className="flow-text leading-relaxed">
                  {lang === "ru"
                    ? "Мы разработали AI-агента планирования, доступного прямо из Telegram. Агент подключён к производственным данным через набор инструментов: каталог продуктов, складские остатки, текущие заказы."
                    : "We built an AI planning agent accessible directly from Telegram. The agent is connected to production data through a set of tools: product catalog, warehouse inventory, current orders."}
                </p>
                <p className="flow-text leading-relaxed mt-4">
                  {lang === "ru"
                    ? "Планировщик пишет запрос на естественном языке — например, «Сколько баллонов продукта X нужно запустить в производство?». Агент запрашивает релевантные данные, анализирует ситуацию и возвращает конкретную рекомендацию."
                    : "The planner writes a request in natural language — for example, \"How many units of product X should we schedule for production?\". The agent queries relevant data, analyses the situation and returns a specific recommendation."}
                </p>
                <p className="flow-text leading-relaxed mt-4">
                  {lang === "ru"
                    ? "Workflow оркестрирован через n8n: приём сообщения из Telegram, вызов LLM, вызов инструментов данных, формирование ответа, отправка обратно в чат."
                    : "The workflow is orchestrated through n8n: receive message from Telegram, call LLM, call data tools, form a response, send it back to the chat."}
                </p>
              </div>
              <div className="col s12 l4 offset-l1 mt-6 lg:mt-0">
                {[
                  { step: "01", ru: "Запрос в Telegram", en: "Request in Telegram" },
                  { step: "02", ru: "LLM анализирует задачу", en: "LLM analyses the task" },
                  { step: "03", ru: "Агент запрашивает данные", en: "Agent queries data" },
                  { step: "04", ru: "Рекомендация в чат", en: "Recommendation to chat" },
                ].map((s, i) => (
                  <div key={i} className={cn("flex items-start gap-3", i > 0 && "mt-4")}>
                    <span className="font-mono text-xs text-gray-300 mt-1 shrink-0">{s.step}</span>
                    <span className="text-sm text-gray-700">{lang === "ru" ? s.ru : s.en}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ── ДЕМО ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight">
                  {lang === "ru" ? "Демо" : "Demo"}
                </h2>
              </div>
            </div>
            <div className="row">
              {/* Telegram — вертикальное видео */}
              <div className="col s12 l4 margin-on-medium-and-down">
                <div className="rounded-3xl overflow-hidden" style={{padding: "112.5% 0 0 0", position: "relative"}}>
                  <iframe
                    src="https://player.vimeo.com/video/1170327566?badge=0&autopause=0&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}
                    title="Aerosol Factory Telegram Bot"
                  />
                </div>
                <p className="text-sm text-gray-400 font-mono mt-3">
                  {lang === "ru" ? "Telegram — интерфейс планировщика" : "Telegram — planner interface"}
                </p>
              </div>

              {/* n8n — горизонтальное видео */}
              <div className="col s12 l8">
                <div className="rounded-3xl overflow-hidden" style={{padding: "56.25% 0 0 0", position: "relative"}}>
                  <iframe
                    src="https://player.vimeo.com/video/1169850144?badge=0&autopause=0&player_id=0&app_id=58479"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}
                    title="Manufacturing · Aerosol Factory"
                  />
                </div>
                <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />
                <p className="text-sm text-gray-400 font-mono mt-3">
                  {lang === "ru" ? "n8n — оркестрация workflow" : "n8n — workflow orchestration"}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ── РЕЗУЛЬТАТ ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight">
                  {lang === "ru" ? "Результат" : "Result"}
                </h2>
              </div>
            </div>
            <div className="row">
              {[
                {
                  titleRu: "Секунды вместо часов",
                  titleEn: "Seconds instead of hours",
                  descRu:
                    "Рекомендация по объёму производства формируется мгновенно — агент сам собирает нужные данные из разных источников.",
                  descEn:
                    "A production volume recommendation is generated instantly — the agent gathers the required data from different sources on its own.",
                },
                {
                  titleRu: "Естественный язык",
                  titleEn: "Natural language",
                  descRu:
                    "Не нужно учиться работать с системой. Планировщик общается с агентом так же, как с коллегой — в Telegram, в привычном интерфейсе.",
                  descEn:
                    "No system training required. The planner communicates with the agent the same way as with a colleague — in Telegram, in a familiar interface.",
                },
                {
                  titleRu: "Прошёл валидацию",
                  titleEn: "Passed validation",
                  descRu:
                    "Прототип прошёл оценку качества ответов. Агент готов к подключению к реальным каналам данных и промышленному использованию.",
                  descEn:
                    "The prototype passed response quality evaluation. The agent is ready to connect to real data channels and industrial use.",
                },
              ].map((item, i) => (
                <div key={i} className="col s12 l4 margin-on-medium-and-down">
                  <span className={cn("flow-text", oona["item-title"])}>
                    {lang === "ru" ? item.titleRu : item.titleEn}
                  </span>
                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {lang === "ru" ? item.descRu : item.descEn}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ── СТЕК ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight">
                  {lang === "ru" ? "Стек" : "Stack"}
                </h2>
              </div>
            </div>
            <div className="row">
              {[
                {
                  name: "Telegram",
                  descRu: "Интерфейс для планировщика — привычный мессенджер без дополнительных инструментов",
                  descEn: "Interface for the planner — familiar messenger, no additional tools needed",
                },
                {
                  name: "n8n",
                  descRu: "Оркестрация всего workflow: приём запроса, вызов LLM, инструменты данных, ответ",
                  descEn: "Orchestration of the entire workflow: receive request, call LLM, data tools, response",
                },
                {
                  name: "LLM",
                  descRu: "Reasoning-движок: понимание запроса, выбор инструментов, синтез рекомендации",
                  descEn: "Reasoning engine: understanding the request, selecting tools, synthesising the recommendation",
                },
                {
                  name: lang === "ru" ? "Инструменты данных" : "Data tools",
                  descRu: "Доступ к каталогу продуктов, складским остаткам и текущим заказам",
                  descEn: "Access to product catalog, warehouse inventory and current orders",
                },
              ].map((item, i) => (
                <div key={i} className="col s12 l3 margin-on-medium-and-down">
                  <span className={cn("flow-text font-mono", oona["item-title"])}>{item.name}</span>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    {lang === "ru" ? item.descRu : item.descEn}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"], oona["get-in-touch"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight">
                  {lang === "ru"
                    ? "Хотите похожее решение?"
                    : "Want a similar solution?"}
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col s12 l6">
                <p className={cn("flow-text", oona["item-title"])}>
                  {lang === "ru" ? (
                    <>
                      <a href="/contact" className="ajax-link">Напишите нам</a>{" "}
                      — обсудим ваш процесс и покажем, как агент может встроиться в ваше производство.
                    </>
                  ) : (
                    <>
                      <a href="/contact" className="ajax-link">Get in touch</a>{" "}
                      — we&apos;ll discuss your process and show how an agent can fit into your operations.
                    </>
                  )}
                </p>
              </div>
              <div className="col s12 l4 offset-l2 flex items-center">
                <a href="/ai" className="font-mono text-sm text-gray-400 hover:text-gray-700 transition-colors">
                  ← {lang === "ru" ? "Все кейсы" : "All cases"}
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
