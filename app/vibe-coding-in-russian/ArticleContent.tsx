"use client";

import { useLang } from "@/app/context/LanguageContext";
import LangToggle from "@/app/context/LangToggle";

const link =
  "underline decoration-gray-300 underline-offset-2 transition-colors hover:decoration-gray-900";
const b = "font-semibold text-gray-900";
const lead = "mb-6 text-lg font-light leading-relaxed text-gray-700 md:text-xl";
const body = "article-body space-y-5 text-[15px] leading-[1.8] text-gray-700";
const h2 = "mt-10 mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl";

function DataTable({
  head,
  rows,
  strong = [],
}: {
  head: string[];
  rows: string[][];
  strong?: number[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-[14px] leading-snug">
        <thead>
          <tr className="border-b border-gray-300">
            {head.map((cell, i) => (
              <th
                key={i}
                className={`py-2 pr-4 font-semibold text-gray-900 ${i === 0 ? "text-left" : "text-right"}`}
              >
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, r) => (
            <tr
              key={r}
              className={`border-b border-gray-100 ${strong.includes(r) ? "font-semibold text-gray-900" : ""}`}
            >
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={`py-2 pr-4 ${i === 0 ? "text-left" : "whitespace-nowrap text-right tabular-nums"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const SRC = {
  maps: "https://arxiv.org/abs/2505.15935",
  rubench: "https://arxiv.org/abs/2607.06411",
  mmluProxLite: "https://arxiv.org/abs/2606.21954",
  mmpisa: "https://arxiv.org/abs/2606.07069",
  mgal: "https://arxiv.org/abs/2608.20853",
  anthropic: "https://platform.claude.com/docs/en/build-with-claude/multilingual-support",
  commonCrawl: "https://commoncrawl.github.io/cc-crawl-statistics/plots/languages",
};

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className={link} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function RuBody() {
  return (
    <>
      <p className={lead}>
        Тезис «на английском вайб-кодить лучше» замерами не подтверждается.
      </p>

      <div className={body}>
        <p>
          В тесте <A href={SRC.maps}>MAPS</A> агент на GPT-5-mini решал 100 задач
          из реальных проектов на Python. С заданием на русском он решил 34
          задачи, с заданием на английском 32. Проекты и код были одни и те же,
          переводили только текст задания.
        </p>

        <p>
          <A href={SRC.mmluProxLite}>На общих тестах 2026 года</A> русский в
          среднем на 2 пункта из 100 ниже английского. Заметное отставание
          нашлось <A href={SRC.mgal}>в одном замере</A>: модель читает длинный
          документ на русском и отвечает на вопрос, для которого нужно связать
          два абзаца.
        </p>

        <h2 className={h2}>Код: задание на русском, проект на английском</h2>

        <p>
          Тест <A href={SRC.maps}>MAPS</A> (таблица 19), редакция февраля 2026
          года. Агент SWE-agent на модели GPT-5-mini решает 100 задач из набора
          SWE-bench, это задачи из реальных репозиториев на Python. Текст задания
          перевели на 11 языков, код оставили как есть.
        </p>

        <DataTable
          head={["Язык задания", "Решено из 100"]}
          rows={[
            ["корейский", "35"],
            ["русский", "34"],
            ["итальянский", "34"],
            ["немецкий", "33"],
            ["португальский (Бразилия)", "33"],
            ["английский", "32"],
            ["иврит", "32"],
            ["китайский", "31"],
            ["хинди", "30"],
            ["арабский", "29"],
            ["японский", "29"],
            ["испанский", "29"],
          ]}
          strong={[1, 5]}
        />

        <p>
          Английский в этом замере в середине списка. Разница в 2 пункта
          означает 2 задачи из 100.
        </p>

        <h2 className={h2}>Бэкенд-задачи, написанные по-русски</h2>

        <p>
          Тест <A href={SRC.rubench}>RuBench</A> (таблица 3), июль 2026 года. 25
          задач в пяти проектах: aiohttp и aiogram на Python, Laravel на PHP,
          NestJS на TypeScript, Fastify на JavaScript. Задания написаны на
          русском с самого начала, их не переводили. Английской версии этих
          задач в тесте нет.
        </p>

        <DataTable
          head={["Агент и модель", "Решено задач, среднее по трём прогонам"]}
          rows={[
            ["Claude Code, Opus 4.8", "78,7%"],
            ["Claude Code, Sonnet 5", "74,7%"],
            ["Codex CLI, GPT-5.5", "66,7%"],
            ["Claude Code, Haiku 4.5", "53,3%"],
          ]}
        />

        <h2 className={h2}>Общие тесты 2026 года</h2>

        <p>
          <A href={SRC.mmluProxLite}><strong className={b}>MMLU-ProX-Lite</strong></A> (таблица 10):
          вопросы на знания и рассуждение. Статья июня 2026 года, 20 моделей
          2024–2026 годов, среди них Claude Opus 4.7, Sonnet 4.6, Haiku 4.5,
          Gemini 3 Flash, Gemma 4, Qwen 3 и GPT-OSS.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>В среднем русский на 1,9 пункта ниже английского по шкале от 0 до 100.</li>
          <li>Разброс по моделям от −5,6 до +4,9 пункта.</li>
          <li>
            У шести конфигураций с лучшим результатом на английском (74–82%)
            результат на русском составляет 96–103% от английского.
          </li>
        </ul>

        <p>Значения сняты с графика в статье, на графике нет подписей моделей.</p>

        <p>
          <A href={SRC.mmpisa}><strong className={b}>mmPISA-bench</strong></A> (таблица 1):
          задания PISA по математике и чтению, 25 заданий на каждый из 43
          языков. Статья июня 2026 года. Доля верных ответов:
        </p>

        <DataTable
          head={["Модель", "Английский", "Русский"]}
          rows={[
            ["Claude Opus 4.5, с рассуждением", "100,0%", "95,2%"],
            ["GPT-5.1, с рассуждением", "96,8%", "94,4%"],
            ["Claude Haiku 4.5, без рассуждения", "90,4%", "85,6%"],
            ["GPT-5.1, без рассуждения", "76,8%", "84,8%"],
          ]}
        />

        <h2 className={h2}>Где русский отстаёт: длинные документы</h2>

        <p>
          Тест <A href={SRC.mgal}>MGAL</A> (таблица 6), август 2026 года. Отчёты
          ООН длиной от 8 до 128 тысяч токенов, один и тот же текст на шести
          официальных языках ООН. Проверяли модели 2025 года.
        </p>

        <p>
          Вопрос, для ответа на который нужно связать два абзаца документа, доля
          верных ответов:
        </p>

        <DataTable
          head={["Модель", "Английский", "Испанский", "Русский"]}
          rows={[
            ["GPT-5", "82,7%", "62,5%", "54,2%"],
            ["Claude Sonnet 4", "79,4%", "56,3%", "47,1%"],
            ["Gemini 2.5 Flash", "77,1%", "59,6%", "53,8%"],
          ]}
        />

        <p>
          В вопросах по одному абзацу русский ниже английского на 4–6 пунктов.
          В обоих видах вопросов русский у всех трёх моделей ниже остальных пяти
          языков ООН.
        </p>

        <p>
          Вывод для вайб-кодинга, перенесённый с этого замера: длинные ТЗ и
          документацию, в которых модель должна сопоставлять разные части,
          надёжнее давать на английском. На ТЗ это отдельно не измеряли.
        </p>

        <h2 className={h2}>Сколько русского в интернете</h2>

        <p>
          Доля страниц по языкам в архиве веб-страниц{" "}
          <A href={SRC.commonCrawl}>Common Crawl</A>, срез CC-MAIN-2026-43:
        </p>

        <DataTable
          head={["Язык", "Доля страниц"]}
          rows={[
            ["английский", "42,6%"],
            ["русский", "6,3%"],
            ["немецкий", "5,8%"],
            ["японский", "4,9%"],
            ["французский", "4,8%"],
            ["испанский", "4,7%"],
            ["китайский", "4,4%"],
          ]}
          strong={[0, 1]}
        />

        <h2 className={h2}>Для сравнения: другие языки</h2>

        <p>
          Anthropic публикует результаты моделей Claude на{" "}
          <A href={SRC.anthropic}>тесте Global-MMLU</A> по 14 языкам в процентах
          от результата на английском. Русского в этом списке нет.
        </p>

        <DataTable
          head={["Языки", "Claude Opus 5.5", "Claude Haiku 5.5"]}
          rows={[
            [
              "испанский, немецкий, китайский, японский, хинди и другие крупные",
              "99,1–99,3%",
              "96,6–98,1%",
            ],
            ["бенгали, суахили", "98,3–98,6%", "94,0–95,4%"],
            ["йоруба", "96,3%", "87,0%"],
          ]}
        />

        <p>У Haiku 5.5 разрыв больше, чем у Opus 5.5, сильнее всего на йоруба.</p>

        <p>Данные проверены 4 ноября 2026 года.</p>
      </div>
    </>
  );
}

function EnBody() {
  return (
    <>
      <p className={lead}>
        The claim that vibe coding works better in English is not supported by
        benchmarks.
      </p>

      <div className={body}>
        <p>
          In the <A href={SRC.maps}>MAPS</A> benchmark, an agent running
          GPT-5-mini worked on 100 tasks from real Python projects. With the task
          written in Russian it solved 34, with the task written in English it
          solved 32. The projects and the code were the same; only the task text
          was translated.
        </p>

        <p>
          <A href={SRC.mmluProxLite}>On general 2026 tests</A>, Russian scores on
          average 2 points out of 100 below English.{" "}
          <A href={SRC.mgal}>One benchmark</A> shows a clear gap: the model reads
          a long document in Russian and answers a question that requires
          linking two of its paragraphs.
        </p>

        <h2 className={h2}>Code: task in Russian, project in English</h2>

        <p>
          <A href={SRC.maps}>MAPS</A> (Table 19), February 2026 revision.
          SWE-agent running GPT-5-mini works on 100 tasks from SWE-bench, which
          are tasks from real Python repositories. The task text was translated
          into 11 languages, and the code was left unchanged.
        </p>

        <DataTable
          head={["Task language", "Solved out of 100"]}
          rows={[
            ["Korean", "35"],
            ["Russian", "34"],
            ["Italian", "34"],
            ["German", "33"],
            ["Portuguese (Brazil)", "33"],
            ["English", "32"],
            ["Hebrew", "32"],
            ["Chinese", "31"],
            ["Hindi", "30"],
            ["Arabic", "29"],
            ["Japanese", "29"],
            ["Spanish", "29"],
          ]}
          strong={[1, 5]}
        />

        <p>
          English is in the middle of the list. A 2-point difference means 2
          tasks out of 100.
        </p>

        <h2 className={h2}>Backend tasks written in Russian</h2>

        <p>
          <A href={SRC.rubench}>RuBench</A> (Table 3), July 2026. 25 tasks in
          five projects: aiohttp and aiogram in Python, Laravel in PHP, NestJS in
          TypeScript, Fastify in JavaScript. The tasks were written in Russian
          from the start, not translated. The benchmark has no English version
          of these tasks.
        </p>

        <DataTable
          head={["Agent and model", "Tasks solved, average of three runs"]}
          rows={[
            ["Claude Code, Opus 4.8", "78.7%"],
            ["Claude Code, Sonnet 5", "74.7%"],
            ["Codex CLI, GPT-5.5", "66.7%"],
            ["Claude Code, Haiku 4.5", "53.3%"],
          ]}
        />

        <h2 className={h2}>General tests, 2026</h2>

        <p>
          <A href={SRC.mmluProxLite}><strong className={b}>MMLU-ProX-Lite</strong></A> (Table 10):
          knowledge and reasoning questions. Paper from June 2026, 20 models
          released in 2024–2026, including Claude Opus 4.7, Sonnet 4.6, Haiku
          4.5, Gemini 3 Flash, Gemma 4, Qwen 3 and GPT-OSS.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>On average, Russian scores 1.9 points below English on a 0 to 100 scale.</li>
          <li>Across models, the difference ranges from −5.6 to +4.9 points.</li>
          <li>
            For the six configurations with the best English scores (74–82%),
            the Russian score is 96–103% of the English score.
          </li>
        </ul>

        <p>The values are read from a chart in the paper. The chart does not label the models.</p>

        <p>
          <A href={SRC.mmpisa}><strong className={b}>mmPISA-bench</strong></A> (Table 1): PISA
          math and reading items, 25 items for each of 43 languages. Paper from
          June 2026. Share of correct answers:
        </p>

        <DataTable
          head={["Model", "English", "Russian"]}
          rows={[
            ["Claude Opus 4.5, with reasoning", "100.0%", "95.2%"],
            ["GPT-5.1, with reasoning", "96.8%", "94.4%"],
            ["Claude Haiku 4.5, no reasoning", "90.4%", "85.6%"],
            ["GPT-5.1, no reasoning", "76.8%", "84.8%"],
          ]}
        />

        <h2 className={h2}>Where Russian falls behind: long documents</h2>

        <p>
          <A href={SRC.mgal}>MGAL</A> (Table 6), August 2026. UN reports of 8 to
          128 thousand tokens, the same text in the six official UN languages.
          The models tested are from 2025.
        </p>

        <p>
          Questions that require linking two paragraphs of the document, share
          of correct answers:
        </p>

        <DataTable
          head={["Model", "English", "Spanish", "Russian"]}
          rows={[
            ["GPT-5", "82.7%", "62.5%", "54.2%"],
            ["Claude Sonnet 4", "79.4%", "56.3%", "47.1%"],
            ["Gemini 2.5 Flash", "77.1%", "59.6%", "53.8%"],
          ]}
        />

        <p>
          On questions about a single paragraph, Russian is 4–6 points below
          English. In both question types, Russian is the lowest of the six UN
          languages for all three models.
        </p>

        <p>
          A conclusion for vibe coding, carried over from this benchmark: long
          specs and documentation where the model has to match different parts
          are safer to give in English. This has not been measured on specs
          directly.
        </p>

        <h2 className={h2}>How much Russian is on the web</h2>

        <p>
          Share of pages by language in the{" "}
          <A href={SRC.commonCrawl}>Common Crawl</A> web archive, crawl
          CC-MAIN-2026-43:
        </p>

        <DataTable
          head={["Language", "Share of pages"]}
          rows={[
            ["English", "42.6%"],
            ["Russian", "6.3%"],
            ["German", "5.8%"],
            ["Japanese", "4.9%"],
            ["French", "4.8%"],
            ["Spanish", "4.7%"],
            ["Chinese", "4.4%"],
          ]}
          strong={[0, 1]}
        />

        <h2 className={h2}>For comparison: other languages</h2>

        <p>
          Anthropic publishes Claude results on{" "}
          <A href={SRC.anthropic}>Global-MMLU</A> for 14 languages as a
          percentage of the English score. Russian is not on that list.
        </p>

        <DataTable
          head={["Languages", "Claude Opus 5.5", "Claude Haiku 5.5"]}
          rows={[
            [
              "Spanish, German, Chinese, Japanese, Hindi and other major languages",
              "99.1–99.3%",
              "96.6–98.1%",
            ],
            ["Bengali, Swahili", "98.3–98.6%", "94.0–95.4%"],
            ["Yoruba", "96.3%", "87.0%"],
          ]}
        />

        <p>Haiku 5.5 shows a larger gap than Opus 5.5, most of all on Yoruba.</p>

        <p>Data checked on 4 November 2026.</p>
      </div>
    </>
  );
}

export default function ArticleContent() {
  const lang = useLang();

  return (
    <article className="bg-white text-main">
      <div className="mx-auto max-w-[680px] px-5 py-16 md:py-24">
        <header className="mb-12 border-b border-gray-300 pb-10 text-center">
          <p className="mb-1 text-[10px] uppercase tracking-[3px] text-gray-400">
            {lang === "ru" ? "5 ноября 2026" : "November 5, 2026"}
          </p>
          <p className="mb-8 text-[9px] uppercase tracking-[2px] text-gray-400">
            {lang === "ru" ? "Замеры" : "Benchmarks"}
          </p>
          <h1 className="mb-3 font-serif text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
            {lang === "ru" ? "Вайб-кодинг на русском" : "Vibe coding in Russian"}
          </h1>
          <p className="mb-6 font-serif text-lg italic text-gray-500 md:text-xl">
            {lang === "ru" ? "Разницы с английским нет" : "No gap with English"}
          </p>
          <p className="text-xs tracking-wide text-gray-400">Advertum</p>
          <LangToggle className="mt-6 justify-center" />
        </header>

        {lang === "ru" ? <RuBody /> : <EnBody />}

        <p className="mt-14 text-center text-[9px] uppercase tracking-[1px] text-gray-400">
          {lang === "ru" ? "Advertum · Ноябрь 2026" : "Advertum · November 2026"}
        </p>
      </div>
    </article>
  );
}
