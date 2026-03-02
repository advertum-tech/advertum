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
                  {/* TODO: сильный заголовок */}
                  {lang === 'ru' ? 'Placeholder: главный заголовок' : 'Placeholder: main headline'}
                </h1>
                <p className="lg:text-[1.4rem] font-normal my-5 leading-normal">
                  {/* TODO: подзаголовок */}
                  {lang === 'ru'
                    ? 'Placeholder: подзаголовок — одно предложение о том, что мы делаем.'
                    : 'Placeholder: subheadline — one sentence about what we do.'}
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
                  ru: 'Боль 1: placeholder',
                  en: 'Pain 1: placeholder',
                },
                {
                  ru: 'Боль 2: placeholder',
                  en: 'Pain 2: placeholder',
                },
                {
                  ru: 'Боль 3: placeholder',
                  en: 'Pain 3: placeholder',
                },
              ].map((item, i) => (
                <div key={i} className="col s12 l4 margin-on-medium-and-down">
                  <p className="flow-text">{lang === 'ru' ? item.ru : item.en}</p>
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
                {/* TODO: SVG-схема pipeline */}
                <div className="rounded-3xl bg-gray-50 flex items-center justify-center" style={{height: 200}}>
                  <span className="text-gray-400 font-mono text-sm">
                    {lang === 'ru'
                      ? 'TODO: SVG — Запрос → Агент → Действие → Интеграция → Отчёт'
                      : 'TODO: SVG — Request → Agent → Action → Integration → Report'}
                  </span>
                </div>
              </div>
            </div>
            <div className="row mt-6">
              {[
                { ru: 'LLM — мозг', en: 'LLM — brain', descRu: 'Анализ, рассуждение, генерация', descEn: 'Reasoning, analysis, generation' },
                { ru: 'MCP — руки', en: 'MCP — hands', descRu: 'Подключение к вашим системам', descEn: 'Connects to your systems' },
                { ru: 'RAG — память', en: 'RAG — memory', descRu: 'Корпоративная база знаний', descEn: 'Your corporate knowledge base' },
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

      {/* ── 4. АГЕНТЫ (фишка) ── */}
      <div className="bg-white text-main">
        <div className={cn("container", oona["container"])}>
          <section className={cn(oona["section"])}>
            <div className="row">
              <div className="col s12">
                <h2 className="tracking-tight">
                  {/* TODO: заголовок */}
                  {lang === 'ru' ? 'Placeholder: команда агентов' : 'Placeholder: meet the agents'}
                </h2>
              </div>
            </div>
            <div className="row">
              {[
                { ru: 'Документалист', en: 'The Documentalist', descRu: 'Placeholder: специализация и задачи', descEn: 'Placeholder: specialization and tasks' },
                { ru: 'Аналитик', en: 'The Analyst', descRu: 'Placeholder: специализация и задачи', descEn: 'Placeholder: specialization and tasks' },
                { ru: 'Коммуникатор', en: 'The Communicator', descRu: 'Placeholder: специализация и задачи', descEn: 'Placeholder: specialization and tasks' },
                { ru: 'Куратор знаний', en: 'The Knowledge Curator', descRu: 'Placeholder: специализация и задачи', descEn: 'Placeholder: specialization and tasks' },
                { ru: 'Интегратор', en: 'The Integrator', descRu: 'Placeholder: специализация и задачи', descEn: 'Placeholder: specialization and tasks' },
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
                { ru: 'Салон красоты', en: 'Beauty salon' },
                { ru: 'Производство', en: 'Manufacturing' },
                { ru: 'Корпоративный клиент', en: 'Enterprise' },
              ].map((item, i) => (
                <div key={i} className="col s12 l4 margin-on-medium-and-down">
                  <div className="rounded-3xl bg-gray-50 p-6">
                    <span className="text-xs font-mono text-gray-400 uppercase">{lang === 'ru' ? item.ru : item.en}</span>
                    <p className="flow-text mt-2">{lang === 'ru' ? 'Placeholder: проблема' : 'Placeholder: problem'}</p>
                    <p className="text-sm text-gray-500 mt-1">{lang === 'ru' ? 'Placeholder: решение и результат' : 'Placeholder: solution and result'}</p>
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
                { ru: 'Локальный деплой', en: 'Local deployment', descRu: 'Данные остаются на серверах клиента', descEn: 'Data stays on your servers' },
                { ru: 'Открытые модели', en: 'Open-source models', descRu: 'Независимость от зарубежных провайдеров', descEn: 'No dependency on foreign providers' },
                { ru: 'ФЗ-152', en: 'Data compliance', descRu: 'Соответствие российскому законодательству', descEn: 'Compliant with data protection law' },
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
