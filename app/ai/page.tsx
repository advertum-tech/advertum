"use client";
import cn from "classnames";
import oona from "../assets/styles/oona/oona.module.scss";
import { useLang } from "@/app/context/LanguageContext";

export default function AI() {
  const { lang } = useLang();

  return (
    <>
      {/* ── 1. HERO ── */}
      <div className="bg-accentBackground text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12 l8">
                <h1 className="text-[45px] lg:text-[70px] tracking-tight">
                  {lang === 'ru'
                    ? 'Рутину — агентам. Решения — людям.'
                    : 'Routine to agents. Decisions to people.'}
                </h1>
                <p className="lg:text-[1.4rem] font-normal my-5 leading-normal">
                  {lang === 'ru'
                    ? 'Мы внедряем AI-агентов в бизнес-процессы — подключаем к вашим системам, разворачиваем на ваших серверах, настраиваем под ваши задачи.'
                    : 'We embed AI agents into business operations — connected to your systems, running on your servers, tuned to your processes.'}
                </p>
                <a href="/contact" className={cn("flow-text", oona["item-title"])}>
                  {lang === 'ru' ? 'Обсудить пилот →' : 'Discuss a pilot →'}
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ── 2. БОЛИ ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight">
                  {lang === 'ru' ? 'Где теряется время' : 'Where time goes'}
                </h2>
              </div>
            </div>
            <div className="row">
              {[
                {
                  ru: 'Задачи, которые нельзя делегировать',
                  en: 'Tasks too small to delegate, too many to ignore',
                  descRu: 'Запись, заявки, отчёты — всё это съедает часы каждый день, но нанимать человека под это нецелесообразно.',
                  descEn: 'Appointments, requests, reports — each takes minutes, together they take hours.',
                },
                {
                  ru: 'Знания внутри людей, а не систем',
                  en: 'Expertise lives in people, not systems',
                  descRu: 'Уходит сотрудник — уходит экспертиза. Регламенты есть, но их никто не читает и не применяет.',
                  descEn: 'When someone leaves, knowledge leaves with them. Policies exist but nobody consults them.',
                },
                {
                  ru: 'Данные есть — картины нет',
                  en: 'Data exists, but it\'s silent',
                  descRu: 'ERP, 1С, базы, таблицы — данные разбросаны, никто их не агрегирует, никто по ним не действует.',
                  descEn: 'ERP, databases, spreadsheets — data is scattered, nobody aggregates it, nobody acts on it.',
                },
              ].map((item, i) => (
                <div key={i} className="col s12 l4 margin-on-medium-and-down">
                  <span className={cn("flow-text", oona["item-title"])}>{lang === 'ru' ? item.ru : item.en}</span>
                  <p className="text-sm text-gray-500 mt-1">{lang === 'ru' ? item.descRu : item.descEn}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ── 3. КАК РАБОТАЕТ (pipeline) ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight">
                  {lang === 'ru' ? 'Как это работает' : 'How it works'}
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <div className="rounded-3xl bg-gray-50 flex items-center justify-center" style={{height: 200}}>
                  <span className="text-gray-400 font-mono text-sm">
                    {lang === 'ru'
                      ? 'Запрос → Агент → Действие → Интеграция → Отчёт'
                      : 'Request → Agent → Action → Integration → Report'}
                  </span>
                </div>
              </div>
            </div>
            <div className="row mt-6">
              {[
                { ru: 'LLM — мозг', en: 'LLM — brain', descRu: 'Понимание языка, reasoning, принятие решений', descEn: 'Language understanding, reasoning, decision-making' },
                { ru: 'MCP — руки', en: 'MCP — hands', descRu: 'Стандартный интерфейс к инструментам и внешним системам', descEn: 'Standard interface to tools and external systems' },
                { ru: 'RAG — память', en: 'RAG — memory', descRu: 'Ответы из корпоративной базы знаний, актуальный контекст', descEn: 'Answers from your corporate knowledge base, in context' },
              ].map((item, i) => (
                <div key={i} className="col s12 l4 margin-on-medium-and-down">
                  <p className="flow-text font-mono">{lang === 'ru' ? item.ru : item.en}</p>
                  <p className="text-sm text-gray-500">{lang === 'ru' ? item.descRu : item.descEn}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ── 4. АГЕНТЫ ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight">
                  {lang === 'ru' ? 'Команда агентов' : 'Meet the agents'}
                </h2>
              </div>
            </div>
            <div className="row">
              {[
                {
                  ru: 'Документалист',
                  en: 'The Documentalist',
                  descRu: 'Чертежи, спецификации, договоры. Читает технические документы, структурирует и создаёт документацию.',
                  descEn: 'Technical drawings, specs, contracts. Reads, structures, and generates documentation.',
                },
                {
                  ru: 'Аналитик',
                  en: 'The Analyst',
                  descRu: 'KPI, продажи, операции. Собирает данные из разных систем, строит отчёты, находит аномалии.',
                  descEn: 'KPIs, sales, operations. Pulls data from multiple systems, builds reports, flags anomalies.',
                },
                {
                  ru: 'Коммуникатор',
                  en: 'The Communicator',
                  descRu: 'Клиенты, партнёры, внутренние запросы. Отвечает на вопросы, маршрутизирует обращения, записывает.',
                  descEn: 'Customers, partners, internal requests. Responds, routes, and books appointments.',
                },
                {
                  ru: 'Куратор знаний',
                  en: 'The Knowledge Curator',
                  descRu: 'Регламенты, стандарты, база знаний. Онбординг, обучение, ответы на типовые вопросы.',
                  descEn: 'Regulations, standards, knowledge base. Onboarding, training, recurring questions.',
                },
                {
                  ru: 'Интегратор',
                  en: 'The Integrator',
                  descRu: 'ERP, 1С, CRM, базы данных. Подключает агентов к вашим системам без переписывания инфраструктуры.',
                  descEn: 'ERP, 1C, CRM, databases. Connects agents to your systems without rewriting infrastructure.',
                },
              ].map((agent, i) => (
                <div key={i} className="col s12 l4 margin-on-medium-and-down">
                  <span className={cn("flow-text", oona["item-title"])}>{lang === 'ru' ? agent.ru : agent.en}</span>
                  <p className="text-sm text-gray-500 mt-1">{lang === 'ru' ? agent.descRu : agent.descEn}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ── 5. КЕЙСЫ ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight">
                  {lang === 'ru' ? 'Кейсы' : 'Case studies'}
                </h2>
              </div>
            </div>
            <div className="row">
              {[
                {
                  labelRu: 'Салон красоты',
                  labelEn: 'Beauty salon',
                  problemRu: 'Администратор записывал клиентов вручную — конфликты расписания, пропущенные звонки, работа только в рабочее время.',
                  problemEn: 'The administrator booked clients manually — scheduling conflicts, missed calls, no service outside business hours.',
                  resultRu: 'AI-агент в Telegram принимает записи на естественном языке, синхронизирует с расписанием и 1С. Запись работает 24/7.',
                  resultEn: 'A Telegram agent accepts bookings in natural language, syncs with schedule and 1C. Bookings run 24/7.',
                },
                {
                  labelRu: 'Машиностроение',
                  labelEn: 'Manufacturing',
                  problemRu: 'Технологи тратили 4–6 часов на написание программ ЧПУ вручную по каждому чертежу.',
                  problemEn: 'Engineers spent 4–6 hours writing CNC programs manually for each drawing.',
                  resultRu: 'Агент анализирует чертёж и генерирует G-code — технолог только проверяет. Время на программирование сократилось на 80%.',
                  resultEn: 'The agent reads the drawing and generates G-code — the engineer just reviews. Programming time down 80%.',
                },
                {
                  labelRu: 'Корпоративный клиент',
                  labelEn: 'Enterprise',
                  problemRu: 'Новые сотрудники тратили недели на онбординг: регламенты разрознены, нет единого источника ответов.',
                  problemEn: 'New employees spent weeks onboarding: policies scattered, no single source of truth.',
                  resultRu: 'Агент-куратор знаний отвечает на вопросы по регламентам и проводит по процессам. Онбординг сократился с недель до дней.',
                  resultEn: 'A knowledge agent answers policy questions and guides through processes. Onboarding reduced from weeks to days.',
                },
              ].map((item, i) => (
                <div key={i} className="col s12 l4 margin-on-medium-and-down">
                  <div className="rounded-3xl bg-gray-50 p-6">
                    <span className="text-xs font-mono text-gray-400 uppercase">{lang === 'ru' ? item.labelRu : item.labelEn}</span>
                    <p className="flow-text mt-2">{lang === 'ru' ? item.problemRu : item.problemEn}</p>
                    <p className="text-sm text-gray-500 mt-1">{lang === 'ru' ? item.resultRu : item.resultEn}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ── 6. БЕЗОПАСНОСТЬ ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight">
                  {lang === 'ru' ? 'Ваши данные не покидают компанию' : 'Your data stays inside'}
                </h2>
              </div>
            </div>
            <div className="row">
              {[
                { ru: 'Локальный деплой', en: 'Local deployment', descRu: 'Данные остаются на серверах клиента — никакого внешнего облака', descEn: 'Data stays on your servers — no external cloud' },
                { ru: 'Открытые модели', en: 'Open-source models', descRu: 'DeepSeek, Llama, Qwen — независимость от зарубежных провайдеров', descEn: 'DeepSeek, Llama, Qwen — no dependency on foreign providers' },
                { ru: 'ФЗ-152', en: 'Data compliance', descRu: 'Соответствие российскому законодательству о персональных данных', descEn: 'Compliant with data protection law' },
              ].map((item, i) => (
                <div key={i} className="col s12 l4 margin-on-medium-and-down">
                  <span className={cn("flow-text", oona["item-title"])}>{lang === 'ru' ? item.ru : item.en}</span>
                  <p className="text-sm text-gray-500 mt-1">{lang === 'ru' ? item.descRu : item.descEn}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ── 7. КАК МЫ РАБОТАЕМ ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight">
                  {lang === 'ru' ? 'Как мы работаем' : 'How we work'}
                </h2>
              </div>
            </div>
            <div className="row">
              {[
                { ru: 'Аудит', en: 'Audit', descRu: 'Изучаем процессы, находим точки автоматизации', descEn: 'We study your processes and find automation opportunities' },
                { ru: 'Пилот', en: 'Pilot', descRu: 'Быстрый MVP на одном процессе — 2–4 недели', descEn: 'A quick MVP on one process — 2–4 weeks' },
                { ru: 'Интеграция', en: 'Integration', descRu: 'Подключение к системам клиента', descEn: 'Connecting to your existing systems' },
                { ru: 'Масштаб', en: 'Scale', descRu: 'Расширение на другие процессы', descEn: 'Expanding to other processes' },
              ].map((step, i) => (
                <div key={i} className="col s12 l3 margin-on-medium-and-down">
                  <span className="font-mono text-gray-400 text-sm">{`0${i + 1}`}</span>
                  <span className={cn("flow-text", oona["item-title"])}> {lang === 'ru' ? step.ru : step.en}</span>
                  <p className="text-sm text-gray-500 mt-1">{lang === 'ru' ? step.descRu : step.descEn}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* ── 8. CTA ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"], oona["get-in-touch"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight">
                  {lang === 'ru'
                    ? 'Давайте найдём, где у вас теряется время'
                    : "Let\u2019s find where your time goes"}
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col s12 l6">
                <p className={cn("flow-text", oona["item-title"])}>
                  {lang === 'ru'
                    ? <><a href="/contact" className="ajax-link">Напишите нам</a> — обсудим ваш процесс и покажем, как агент может помочь.</>
                    : <><a href="/contact" className="ajax-link">Get in touch</a> — we&apos;ll discuss your process and show how an agent can help.</>}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
