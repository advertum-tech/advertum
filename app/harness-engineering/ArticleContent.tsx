"use client";

import { useLang } from "@/app/context/LanguageContext";
import LangToggle from "@/app/context/LangToggle";
import Image from "next/image";

const link =
  "underline decoration-gray-300 underline-offset-2 transition-colors hover:decoration-gray-900";

const dirTree = `AGENTS.md
ARCHITECTURE.md
docs/
├── design-docs/
│   ├── index.md
│   ├── core-beliefs.md
│   └── ...
├── exec-plans/
│   ├── active/
│   ├── completed/
│   └── tech-debt-tracker.md
├── generated/
│   └── db-schema.md
├── product-specs/
│   ├── index.md
│   ├── new-user-onboarding.md
│   └── ...
├── references/
│   ├── design-system-reference-llms.txt
│   ├── nixpacks-llms.txt
│   ├── uv-llms.txt
│   └── ...
├── DESIGN.md
├── FRONTEND.md
├── PLANS.md
├── PRODUCT_SENSE.md
├── QUALITY_SCORE.md
├── RELIABILITY.md
└── SECURITY.md`;


function ImgCodexDrives({ caption }: { caption: string }) {
  return (
    <figure className="!my-8">
      <Image
        src="/images/blog/harness-engineering/fig-1-codex-drives-app.png"
        alt={caption}
        width={680}
        height={400}
        className="w-full rounded"
      />
      <figcaption className="mt-2 text-center text-xs text-gray-400">
        {caption}
      </figcaption>
    </figure>
  );
}

function ImgObservability({ caption }: { caption: string }) {
  return (
    <figure className="!my-8">
      <img
        src="/images/blog/harness-engineering/observability-stack.svg"
        alt={caption}
        className="w-full rounded"
      />
      <figcaption className="mt-2 text-center text-xs text-gray-400">
        {caption}
      </figcaption>
    </figure>
  );
}

function ImgKnowledge({ caption }: { caption: string }) {
  return (
    <figure className="!my-8">
      <Image
        src="/images/blog/harness-engineering/knowledge-limits.png"
        alt={caption}
        width={680}
        height={400}
        className="w-full rounded"
      />
      <figcaption className="mt-2 text-center text-xs text-gray-400">
        {caption}
      </figcaption>
    </figure>
  );
}

function ImgArchitecture({ caption }: { caption: string }) {
  return (
    <figure className="!my-8">
      <Image
        src="/images/blog/harness-engineering/architecture-layers.png"
        alt={caption}
        width={680}
        height={400}
        className="w-full rounded"
      />
      <figcaption className="mt-2 text-center text-xs text-gray-400">
        {caption}
      </figcaption>
    </figure>
  );
}

function DirTreeBlock({ caption }: { caption: string }) {
  return (
    <>
      <div className="!my-8 overflow-x-auto rounded bg-gray-50 p-4 font-mono text-[13px] leading-relaxed text-gray-700">
        <pre>{dirTree}</pre>
      </div>
      <p className="text-center text-xs italic text-gray-400">{caption}</p>
    </>
  );
}

function RuBody() {
  return (
    <>
      <p className="mb-6 text-lg font-light leading-relaxed text-gray-700 md:text-xl">
        Последние пять месяцев наша команда ставила эксперимент: построить и
        запустить внутреннюю бету программного продукта с нулём строк кода,
        написанных вручную.
      </p>

      <div className="article-body space-y-5 text-[15px] leading-[1.8] text-gray-700">
        <p>
          У продукта есть ежедневные внутренние пользователи и внешние
          альфа-тестеры. Он выкатывается, деплоится, ломается и чинится. Разница
          в том, что каждая строка кода — логика приложения, тесты, CI,
          документация, наблюдаемость, внутренний инструментарий — написана Codex.
          Мы оцениваем, что построили всё это примерно за 1/10 времени, которое
          заняло бы написание вручную.
        </p>

        <p className="py-4 text-center font-serif text-base italic leading-relaxed text-gray-500 md:px-8 md:text-lg">
          Люди направляют. Агенты исполняют.
        </p>

        <p>
          Мы намеренно выбрали это ограничение, чтобы построить всё необходимое
          для увеличения скорости разработки на порядки. У нас были недели, чтобы
          поставить то, что в итоге стало миллионом строк кода. Для этого нужно
          было понять, что меняется, когда главная задача инженерной команды —
          больше не писать код, а проектировать среды, формулировать намерения и
          создавать петли обратной связи, позволяющие агентам Codex выполнять
          надёжную работу.
        </p>

        <p>
          Этот пост — о том, чему мы научились, создавая совершенно новый продукт
          с командой агентов: что ломалось, что накапливалось, и как
          максимизировать наш единственный по-настоящему дефицитный ресурс —
          человеческое время и внимание.
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          Мы начали с пустого git-репозитория
        </h2>

        <p>
          Первый коммит в пустой репозиторий лёг в конце августа 2025 года.
        </p>

        <p>
          Первоначальный каркас — структура репозитория, CI-конфигурация, правила
          форматирования, настройка пакетного менеджера и фреймворк приложения —
          был сгенерирован Codex CLI с использованием GPT&#8209;5 на основе
          небольшого набора существующих шаблонов. Даже исходный файл AGENTS.md,
          указывающий агентам, как работать в репозитории, сам был написан Codex.
        </p>

        <p>
          Не было ни строчки написанного людьми кода, на которую можно было бы
          опереться. С самого начала репозиторий формировался агентом.
        </p>

        <p>
          Пять месяцев спустя репозиторий содержит порядка миллиона строк кода —
          логика приложения, инфраструктура, инструменты, документация и
          внутренние утилиты разработчика. За этот период примерно 1 500
          пулл-реквестов были открыты и влиты командой из всего трёх инженеров,
          управляющих Codex. Это даёт среднюю пропускную способность 3,5 PR на
          инженера в день, и, что удивительно, пропускная способность росла по
          мере расширения команды до нынешних семи инженеров. Важно: это не был
          выхлоп ради выхлопа — продуктом пользовались сотни людей внутри
          компании, включая ежедневных «опытных пользователей».
        </p>

        <p>
          На протяжении всего процесса разработки люди ни разу не написали код
          напрямую. Это стало ключевой философией команды:{" "}
          <strong className="font-semibold text-gray-900">
            никакого кода, написанного вручную
          </strong>
          .
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          Переосмысление роли инженера
        </h2>

        <p>
          Отсутствие ручного кодирования породило иной тип инженерной работы,
          сосредоточенный на системах, каркасах и рычагах.
        </p>

        <p>
          Ранний прогресс шёл медленнее, чем мы ожидали — не потому, что Codex
          был неспособен, а потому, что среда была недоопределена. У агента не
          было инструментов, абстракций и внутренней структуры, необходимых для
          продвижения к высокоуровневым целям. Основной задачей нашей инженерной
          команды стало создание условий, позволяющих агентам делать полезную
          работу.
        </p>

        <p>
          На практике это означало работу в глубину: разбиение крупных целей на
          маленькие строительные блоки (дизайн, код, ревью, тесты и т.д.),
          задание агенту на создание этих блоков и использование их для
          разблокировки более сложных задач. Когда что-то ломалось, решением почти
          никогда не было «попробуй ещё раз». Поскольку единственный способ
          продвинуться — заставить Codex сделать работу, инженеры всегда подходили
          к задаче и спрашивали: «какой возможности не хватает и как сделать её
          одновременно читаемой и обязательной для агента?»
        </p>

        <p>
          Люди взаимодействуют с системой почти исключительно через промпты:
          инженер описывает задачу, запускает агента и позволяет ему открыть
          пулл-реквест. Чтобы довести PR до завершения, мы инструктируем Codex
          делать ревью собственных изменений локально, запрашивать дополнительные
          целевые агентские ревью и локально, и в облаке, реагировать на обратную
          связь от людей и агентов и итерировать в цикле, пока все
          агенты-ревьюеры не будут удовлетворены (фактически это{" "}
          <a href="https://ghuntley.com/loop/" className={link} target="_blank" rel="noopener noreferrer">
            Ralph Wiggum Loop
          </a>
          ). Codex использует наши стандартные инструменты разработки напрямую
          (gh, локальные скрипты, встроенные в репозиторий навыки) для сбора
          контекста — без копирования-вставки людьми в CLI.
        </p>

        <p>
          Люди могут ревьюить пулл-реквесты, но не обязаны. Со временем мы
          перенесли почти все усилия по ревью на взаимодействие агент-агент.
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          Повышение читаемости приложения
        </h2>

        <p>
          По мере роста пропускной способности по коду нашим узким местом стала
          способность людей к QA. Поскольку фиксированным ограничением было
          человеческое время и внимание, мы работали над тем, чтобы добавить
          агенту больше возможностей, делая сам UI приложения, логи и метрики
          непосредственно читаемыми для Codex.
        </p>

        <p>
          Например, мы сделали приложение загружаемым для каждого git worktree,
          чтобы Codex мог запускать и управлять отдельным экземпляром для каждого
          изменения. Мы также подключили Chrome DevTools Protocol к среде
          выполнения агента и создали навыки для работы со снимками DOM,
          скриншотами и навигацией. Это позволило Codex воспроизводить баги,
          валидировать исправления и рассуждать о поведении UI напрямую.
        </p>

        <ImgCodexDrives caption="Codex управляет приложением через Chrome DevTools MCP для валидации своей работы" />

        <p>
          То же самое мы сделали для инструментов наблюдаемости. Логи, метрики и
          трейсы доступны Codex через локальный стек наблюдаемости, эфемерный для
          каждого worktree. Codex работает на полностью изолированной версии
          приложения — включая его логи и метрики, которые уничтожаются после
          завершения задачи. Агенты могут запрашивать логи через LogQL и метрики
          через PromQL. С таким контекстом промпты вроде «убедись, что запуск
          сервиса завершается менее чем за 800 мс» или «ни один span в этих
          четырёх критических пользовательских путях не превышает двух секунд»
          становятся выполнимыми.
        </p>

        <ImgObservability caption="Полный стек наблюдаемости, доступный Codex" />

        <p>
          Мы регулярно наблюдаем, как одиночные запуски Codex работают над одной
          задачей более шести часов (часто пока люди спят).
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          Мы сделали знание репозитория системой записи
        </h2>

        <p>
          Управление контекстом — одна из главных проблем в обеспечении
          эффективности агентов на больших и сложных задачах. Один из первых
          усвоенных уроков был простым: давайте Codex карту, а не инструкцию на
          1 000 страниц.
        </p>

        <p>
          Мы попробовали подход «один большой{" "}
          <a href="https://agents.md/" className={link} target="_blank" rel="noopener noreferrer">
            AGENTS.md
          </a>
          ». Он предсказуемо провалился:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="font-semibold text-gray-900">Сложно верифицировать.</strong>{" "}
            Единый блоб не поддаётся механическим проверкам (покрытие,
            актуальность, владельцы, перекрёстные ссылки), поэтому дрейф
            неизбежен.
          </li>
          <li>
            <strong className="font-semibold text-gray-900">Мгновенно устаревает.</strong>{" "}
            Монолитный мануал превращается в кладбище устаревших правил. Агенты
            не могут определить, что всё ещё верно, люди перестают поддерживать
            его, и файл тихо становится привлекательной помехой.
          </li>
          <li>
            <strong className="font-semibold text-gray-900">
              Слишком много руководства — это отсутствие руководства.
            </strong>{" "}
            Когда всё «важно», ничто не важно. Агенты начинают паттерн-матчить
            локально вместо осознанной навигации.
          </li>
          <li>
            <strong className="font-semibold text-gray-900">Контекст — дефицитный ресурс.</strong>{" "}
            Гигантский файл инструкций вытесняет задачу, код и релевантную
            документацию — агент либо упускает ключевые ограничения, либо
            начинает оптимизировать не то.
          </li>
        </ul>

        <p>
          Поэтому вместо того чтобы трактовать <code>AGENTS.md</code> как
          энциклопедию, мы трактуем его как оглавление.
        </p>

        <p>
          База знаний репозитория живёт в структурированном каталоге{" "}
          <code>docs/</code>, который рассматривается как система записи. Короткий{" "}
          <code>AGENTS.md</code> (примерно 100 строк) вставляется в контекст и
          служит прежде всего картой, с указателями на более глубокие источники
          истины в других местах.
        </p>

        <DirTreeBlock caption="Структура хранилища знаний внутри репозитория." />

        <ImgKnowledge caption="Пределы знаний агента: что внутри репозитория — существует, что снаружи — нет" />

        <p>
          Проектная документация каталогизирована и проиндексирована, включая
          статус верификации и набор базовых убеждений, определяющих принципы
          работы «агент в первую очередь».{" "}
          <a href="https://matklad.github.io/2021/02/06/ARCHITECTURE.md.html" className={link} target="_blank" rel="noopener noreferrer">
            Архитектурная документация
          </a>{" "}
          предоставляет карту верхнего уровня по доменам и слоям пакетов. Документ
          по качеству оценивает каждый продуктовый домен и архитектурный слой,
          отслеживая пробелы во времени.
        </p>

        <p>
          Планы трактуются как полноценные артефакты. Для небольших изменений
          используются эфемерные облегчённые планы, а сложная работа фиксируется
          в{" "}
          <a href="https://cookbook.openai.com/articles/codex_exec_plans" className={link} target="_blank" rel="noopener noreferrer">
            планах исполнения
          </a>{" "}
          с журналами прогресса и решений, которые коммитятся в репозиторий.
          Активные планы, завершённые планы и известный техдолг — всё
          версионировано и расположено рядом, позволяя агентам работать без
          внешнего контекста.
        </p>

        <p>
          Это обеспечивает прогрессивное раскрытие: агенты начинают с небольшой,
          стабильной точки входа и знают, куда смотреть дальше, вместо того чтобы
          быть перегруженными с самого начала.
        </p>

        <p>
          Мы обеспечиваем это механически. Выделенные линтеры и CI-джобы
          проверяют, что база знаний актуальна, содержит перекрёстные ссылки и
          структурирована правильно. Повторяющийся агент «садовник документации»
          сканирует устаревшую или неактуальную документацию, не отражающую
          реальное поведение кода, и открывает корректирующие пулл-реквесты.
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          Читаемость для агента — цель
        </h2>

        <p>
          По мере развития кодовой базы фреймворк Codex для принятия проектных
          решений тоже должен был развиваться.
        </p>

        <p>
          Поскольку репозиторий целиком сгенерирован агентом, он в первую очередь
          оптимизирован под читаемость для Codex. Точно так же, как команды
          стремятся улучшить навигацию по коду для новых инженеров, целью наших
          инженеров было сделать так, чтобы агент мог рассуждать обо всём
          бизнес-домене непосредственно из самого репозитория.
        </p>

        <p>
          С точки зрения агента, всё, что он не может получить в контексте во
          время работы, фактически не существует. Знания, живущие в Google Docs,
          чатах или головах людей, недоступны системе. Локальные для репозитория
          версионированные артефакты (код, markdown, схемы, исполняемые планы) —
          это всё, что он может видеть.
        </p>

        <p>
          Мы усвоили, что нужно переносить всё больше контекста в репозиторий. Та
          дискуссия в Slack, которая выровняла команду по архитектурному паттерну?
          Если она не обнаруживаема для агента, она нечитаема — точно так же, как
          была бы неизвестна новому сотруднику, пришедшему три месяца спустя.
        </p>

        <p>
          Дать Codex больше контекста — значит организовать и выставить правильную
          информацию так, чтобы агент мог рассуждать над ней, а не перегружать его
          специальными инструкциями. Точно так же, как при онбординге нового
          коллеги по продуктовым принципам, инженерным нормам и командной культуре
          (включая предпочтения по эмодзи) — предоставление этой информации
          агенту приводит к более согласованному результату.
        </p>

        <p>
          Этот фрейм прояснил многие компромиссы. Мы отдавали предпочтение
          зависимостям и абстракциям, которые можно полностью интернализировать и
          обдумать внутри репозитория. Технологии, часто описываемые как «скучные»,
          как правило, легче поддаются моделированию агентами благодаря
          композируемости, стабильности API и представленности в обучающей
          выборке. В некоторых случаях дешевле было поручить агенту
          реимплементировать подмножество функциональности, чем обходить
          непрозрачное поведение публичных библиотек. Например, вместо того чтобы
          подключать универсальный пакет в стиле <code>p-limit</code>, мы
          реализовали собственный хелпер map-with-concurrency: он тесно
          интегрирован с нашей инструментацией OpenTelemetry, имеет 100% покрытие
          тестами и ведёт себя именно так, как ожидает наш рантайм.
        </p>

        <p>
          Перенос всё большей части системы в форму, которую агент может
          инспектировать, валидировать и модифицировать напрямую, увеличивает рычаг
          — не только для Codex, но и для других агентов (например,{" "}
          <a href="https://openai.com/index/introducing-aardvark/" className={link} target="_blank" rel="noopener noreferrer">
            Aardvark
          </a>
          ), работающих в той же кодовой базе.
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          Обеспечение архитектуры и вкуса
        </h2>

        <p>
          Одна документация не удерживает полностью сгенерированную агентами
          кодовую базу связной. Обеспечивая инварианты, а не микроменеджеря
          реализации, мы позволяем агентам поставлять быстро, не подрывая
          фундамент. Например, мы требуем от Codex{" "}
          <a href="https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/" className={link} target="_blank" rel="noopener noreferrer">
            парсить формы данных на границе
          </a>
          , но не предписываем, как именно это происходит (модель, похоже, любит
          Zod, но мы не указывали конкретную библиотеку).
        </p>

        <p>
          Агенты наиболее эффективны в средах со{" "}
          <a href="https://bits.logic.inc/p/ai-is-forcing-us-to-write-good-code" className={link} target="_blank" rel="noopener noreferrer">
            строгими границами и предсказуемой структурой
          </a>
          , поэтому мы построили приложение вокруг жёсткой архитектурной модели.
          Каждый бизнес-домен разделён на фиксированный набор слоёв, со строго
          валидированными направлениями зависимостей и ограниченным набором
          допустимых рёбер. Эти ограничения обеспечиваются механически через
          кастомные линтеры (сгенерированные Codex, разумеется!) и структурные
          тесты.
        </p>

        <p>
          Диаграмма ниже показывает правило: внутри каждого бизнес-домена
          (например, App Settings) код может зависеть только «вперёд» через
          фиксированный набор слоёв (Types → Config → Repo → Service → Runtime →
          UI). Сквозные аспекты (авторизация, коннекторы, телеметрия, фича-флаги)
          входят через единый явный интерфейс: Providers. Всё остальное запрещено
          и обеспечивается механически.
        </p>

        <ImgArchitecture caption="Слоистая доменная архитектура с явными сквозными границами" />

        <p>
          Это та архитектура, которую обычно откладывают, пока не наберётся сотня
          инженеров. С кодирующими агентами это ранняя необходимость: ограничения —
          то, что позволяет скорость без деградации или архитектурного дрейфа.
        </p>

        <p>
          На практике мы обеспечиваем эти правила кастомными линтерами и
          структурными тестами, плюс небольшой набор «инвариантов вкуса». Например,
          мы статически обеспечиваем структурированное логирование, соглашения об
          именовании для схем и типов, лимиты размера файлов и
          платформо-специфичные требования к надёжности через кастомные линты.
          Поскольку линты кастомные, мы пишем сообщения об ошибках так, чтобы
          внедрять инструкции по исправлению в контекст агента.
        </p>

        <p>
          В человеко-ориентированном рабочем процессе эти правила могут ощущаться
          педантичными или ограничивающими. С агентами они становятся множителями:
          однажды закодированные, они применяются повсюду и сразу.
        </p>

        <p>
          В то же время мы явно говорим, где ограничения важны, а где нет. Это
          напоминает управление крупной инженерной платформенной организацией:
          обеспечивай границы централизованно, допускай автономию локально. Вы
          глубоко заботитесь о границах, корректности и воспроизводимости. Внутри
          этих границ вы предоставляете командам — или агентам — значительную
          свободу в том, как выражаются решения.
        </p>

        <p>
          Результирующий код не всегда соответствует стилистическим предпочтениям
          людей, и это нормально. Пока результат корректен, поддерживаем и читаем
          для будущих запусков агента, он соответствует планке.
        </p>

        <p>
          Человеческий вкус непрерывно подаётся обратно в систему. Комментарии к
          ревью, рефакторинговые пулл-реквесты и пользовательские баги фиксируются
          как обновления документации или кодируются непосредственно в
          инструментарии. Когда документации не хватает, мы повышаем правило до
          кода.
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          Пропускная способность меняет философию мержа
        </h2>

        <p>
          По мере роста пропускной способности Codex многие конвенциональные
          инженерные нормы стали контрпродуктивными.
        </p>

        <p>
          Репозиторий работает с минимумом блокирующих мерж-гейтов. Пулл-реквесты
          короткоживущие. Флейки в тестах часто решаются повторными запусками, а не
          бесконечной блокировкой прогресса. В системе, где пропускная способность
          агентов намного превышает человеческое внимание, коррекции дёшевы, а
          ожидание дорого.
        </p>

        <p>
          В среде с низкой пропускной способностью это было бы безответственно.
          Здесь это часто правильный компромисс.
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          Что на самом деле значит «сгенерировано агентом»
        </h2>

        <p>
          Когда мы говорим, что кодовая база сгенерирована агентами Codex, мы
          имеем в виду{" "}
          <strong className="font-semibold text-gray-900">
            всё в кодовой базе
          </strong>
          .
        </p>

        <p>Агенты производят:</p>

        <ul className="list-disc space-y-1 pl-6">
          <li>Файлы определения продакшн-дашбордов</li>
          <li>Скрипты управления самим репозиторием</li>
          <li>Комментарии к ревью и ответы на них</li>
          <li>Оценочные харнессы</li>
          <li>Документацию и историю дизайна</li>
          <li>Внутренние инструменты разработчика</li>
          <li>CI-конфигурацию и инструменты релиза</li>
          <li>Продуктовый код и тесты</li>
        </ul>

        <p>
          Люди всегда остаются в петле, но работают на другом уровне абстракции.
          Мы приоритизируем работу, переводим пользовательскую обратную связь в
          критерии приёмки и валидируем результаты. Когда агент испытывает
          трудности, мы трактуем это как сигнал: определяем, чего не хватает —
          инструментов, ограждений, документации — и подаём это обратно в
          репозиторий, всегда поручая написание исправления самому Codex.
        </p>

        <p>
          Агенты используют наши стандартные инструменты разработки напрямую. Они
          забирают обратную связь с ревью, отвечают инлайн, пушат обновления и
          часто сами сквошат и мержат свои пулл-реквесты.
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          Растущие уровни автономии
        </h2>

        <p>
          По мере того как всё больше элементов цикла разработки кодировалось
          непосредственно в системе — тестирование, валидация, ревью, обработка
          обратной связи и восстановление — репозиторий недавно пересёк значимый
          порог, на котором Codex может end-to-end вести новую фичу.
        </p>

        <p>По одному промпту агент теперь может:</p>

        <ul className="list-disc space-y-1 pl-6">
          <li>Валидировать текущее состояние кодовой базы</li>
          <li>Воспроизвести сообщённый баг</li>
          <li>Записать видео, демонстрирующее сбой</li>
          <li>Реализовать исправление</li>
          <li>Валидировать исправление, управляя приложением</li>
          <li>Записать второе видео, демонстрирующее решение</li>
          <li>Открыть пулл-реквест</li>
          <li>Реагировать на обратную связь от агентов и людей</li>
          <li>Обнаружить и устранить сбои сборки</li>
          <li>Эскалировать человеку только когда требуется суждение</li>
          <li>Вмержить изменение</li>
        </ul>

        <p>
          Такое поведение сильно зависит от конкретной структуры и инструментария
          этого репозитория и не должно считаться обобщаемым без аналогичных
          инвестиций — по крайней мере, пока.
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          Энтропия и сборка мусора
        </h2>

        <p>
          Полная автономия агентов также порождает новые проблемы. Codex
          реплицирует паттерны, уже существующие в репозитории — даже неровные или
          субоптимальные. Со временем это неизбежно ведёт к дрейфу.
        </p>

        <p>
          Сначала люди решали это вручную. Наша команда тратила каждую пятницу
          (20% недели) на вычищение «ИИ-шлака». Неудивительно, что это не
          масштабировалось.
        </p>

        <p>
          Вместо этого мы начали кодировать то, что называем «золотыми
          принципами», непосредственно в репозитории и выстроили регулярный процесс
          очистки. Эти принципы — мнительные механические правила, которые
          поддерживают кодовую базу читаемой и консистентной для будущих запусков
          агента. Например: (1) мы предпочитаем общие утилитные пакеты вместо
          самописных хелперов, чтобы инварианты были централизованы, и (2) мы не
          прощупываем данные в стиле «YOLO» — мы валидируем границы или полагаемся
          на типизированные SDK, чтобы агент не мог случайно строить на угаданных
          формах. На регулярной каденции набор фоновых задач Codex сканирует
          отклонения, обновляет оценки качества и открывает целевые рефакторинговые
          пулл-реквесты. Большинство из них можно проревьюить менее чем за минуту
          и автомержить.
        </p>

        <p>
          Это работает как сборка мусора. Технический долг — как высокопроцентный
          кредит: почти всегда лучше гасить его непрерывно малыми порциями, чем
          копить и разбираться мучительными рывками. Человеческий вкус фиксируется
          один раз, а затем непрерывно обеспечивается на каждой строке кода. Это
          также позволяет ловить и устранять плохие паттерны ежедневно, а не
          позволять им распространяться по кодовой базе дни или недели.
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          Чему мы всё ещё учимся
        </h2>

        <p>
          Эта стратегия пока хорошо работала вплоть до внутреннего запуска и
          принятия в OpenAI. Создание реального продукта для реальных пользователей
          помогло закрепить наши инвестиции в реальности и направить нас к
          долгосрочной поддерживаемости.
        </p>

        <p>
          Чего мы ещё не знаем — как архитектурная связность эволюционирует на
          протяжении лет в полностью агентно-сгенерированной системе. Мы всё ещё
          учимся, где человеческое суждение даёт наибольший рычаг и как кодировать
          это суждение так, чтобы оно накапливалось. Мы также не знаем, как эта
          система будет эволюционировать по мере того, как модели продолжат
          становиться более способными.
        </p>

        <p>
          Что стало ясно: создание ПО по-прежнему требует дисциплины, но теперь
          дисциплина проявляется больше в каркасах, чем в коде. Инструментарий,
          абстракции и петли обратной связи, поддерживающие связность кодовой базы,
          становятся всё более важными.
        </p>

        <p>
          Наши самые сложные задачи сейчас — проектирование сред, петель обратной
          связи и систем контроля, которые помогают агентам достигать нашей цели:
          строить и поддерживать сложное, надёжное программное обеспечение в
          масштабе.
        </p>

        <p>
          По мере того как агенты вроде Codex берут на себя всё большую часть
          жизненного цикла ПО, эти вопросы будут иметь ещё большее значение. Мы
          надеемся, что, поделившись некоторыми ранними уроками, поможем вам
          решить, куда инвестировать свои усилия, чтобы{" "}
          <a href="https://openai.com/codex/" className={link} target="_blank" rel="noopener noreferrer">
            вы могли просто строить
          </a>
          .
        </p>
      </div>
    </>
  );
}

function EnBody() {
  return (
    <>
      <p className="mb-6 text-lg font-light leading-relaxed text-gray-700 md:text-xl">
        Over the past five months, our team has been running an experiment:
        building and shipping an internal beta of a software product with 0 lines
        of manually-written code.
      </p>

      <div className="article-body space-y-5 text-[15px] leading-[1.8] text-gray-700">
        <p>
          The product has internal daily users and external alpha testers. It
          ships, deploys, breaks, and gets fixed. What&apos;s different is that every
          line of code—application logic, tests, CI configuration, documentation,
          observability, and internal tooling—has been written by Codex. We
          estimate that we built this in about 1/10th the time it would have
          taken to write the code by hand.
        </p>

        <p className="py-4 text-center font-serif text-base italic leading-relaxed text-gray-500 md:px-8 md:text-lg">
          Humans steer. Agents execute.
        </p>

        <p>
          We intentionally chose this constraint so we would build what was
          necessary to increase engineering velocity by orders of magnitude. We
          had weeks to ship what ended up being a million lines of code. To do
          that, we needed to understand what changes when a software engineering
          team&apos;s primary job is no longer to write code, but to design
          environments, specify intent, and build feedback loops that allow Codex
          agents to do reliable work.
        </p>

        <p>
          This post is about what we learned by building a brand new product with
          a team of agents—what broke, what compounded, and how to maximize our
          one truly scarce resource: human time and attention.
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          We started with an empty git repository
        </h2>

        <p>
          The first commit to an empty repository landed in late August 2025.
        </p>

        <p>
          The initial scaffold—repository structure, CI configuration, formatting
          rules, package manager setup, and application framework—was generated
          by Codex CLI using GPT&#8209;5, guided by a small set of existing
          templates. Even the initial AGENTS.md file that directs agents how to
          work in the repository was itself written by Codex.
        </p>

        <p>
          There was no pre-existing human-written code to anchor the system. From
          the beginning, the repository was shaped by the agent.
        </p>

        <p>
          Five months later, the repository contains on the order of a million
          lines of code across application logic, infrastructure, tooling,
          documentation, and internal developer utilities. Over that period,
          roughly 1,500 pull requests have been opened and merged with a small
          team of just three engineers driving Codex. This translates to an
          average throughput of 3.5 PRs per engineer per day, and surprisingly
          the throughput has increased as the team has grown to now seven
          engineers. Importantly, this wasn&apos;t output for output&apos;s sake: the
          product has been used by hundreds of users internally, including daily
          internal power users.
        </p>

        <p>
          Throughout the development process, humans never directly contributed
          any code. This became a core philosophy for the team:{" "}
          <strong className="font-semibold text-gray-900">
            no manually-written code
          </strong>
          .
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          Redefining the role of the engineer
        </h2>

        <p>
          The lack of hands-on human coding introduced a different kind of
          engineering work, focused on systems, scaffolding, and leverage.
        </p>

        <p>
          Early progress was slower than we expected, not because Codex was
          incapable, but because the environment was underspecified. The agent
          lacked the tools, abstractions, and internal structure required to make
          progress toward high-level goals. The primary job of our engineering
          team became enabling the agents to do useful work.
        </p>

        <p>
          In practice, this meant working depth-first: breaking down larger goals
          into smaller building blocks (design, code, review, test, etc),
          prompting the agent to construct those blocks, and using them to unlock
          more complex tasks. When something failed, the fix was almost never
          &quot;try harder.&quot; Because the only way to make progress was to get Codex to
          do the work, human engineers always stepped into the task and asked:
          &quot;what capability is missing, and how do we make it both legible and
          enforceable for the agent?&quot;
        </p>

        <p>
          Humans interact with the system almost entirely through prompts: an
          engineer describes a task, runs the agent, and allows it to open a pull
          request. To drive a PR to completion, we instruct Codex to review its
          own changes locally, request additional specific agent reviews both
          locally and in the cloud, respond to any human or agent given feedback,
          and iterate in a loop until all agent reviewers are satisfied
          (effectively this is a{" "}
          <a href="https://ghuntley.com/loop/" className={link} target="_blank" rel="noopener noreferrer">
            Ralph Wiggum Loop
          </a>
          ). Codex uses our standard development tools directly (gh, local
          scripts, and repository-embedded skills) to gather context without
          humans copying and pasting into the CLI.
        </p>

        <p>
          Humans may review pull requests, but aren&apos;t required to. Over time,
          we&apos;ve pushed almost all review effort towards being handled
          agent-to-agent.
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          Increasing application legibility
        </h2>

        <p>
          As code throughput increased, our bottleneck became human QA capacity.
          Because the fixed constraint has been human time and attention, we&apos;ve
          worked to add more capabilities to the agent by making things like the
          application UI, logs, and app metrics themselves directly legible to
          Codex.
        </p>

        <p>
          For example, we made the app bootable per git worktree, so Codex could
          launch and drive one instance per change. We also wired the Chrome
          DevTools Protocol into the agent runtime and created skills for working
          with DOM snapshots, screenshots, and navigation. This enabled Codex to
          reproduce bugs, validate fixes, and reason about UI behavior directly.
        </p>

        <ImgCodexDrives caption="Codex drives the app with Chrome DevTools MCP to validate its work" />

        <p>
          We did the same for observability tooling. Logs, metrics, and traces
          are exposed to Codex via a local observability stack that&apos;s ephemeral
          for any given worktree. Codex works on a fully isolated version of that
          app—including its logs and metrics, which get torn down once that task
          is complete. Agents can query logs with LogQL and metrics with PromQL.
          With this context available, prompts like &quot;ensure service startup
          completes in under 800ms&quot; or &quot;no span in these four critical user
          journeys exceeds two seconds&quot; become tractable.
        </p>

        <ImgObservability caption="Giving Codex a full observability stack" />

        <p>
          We regularly see single Codex runs work on a single task for upwards of
          six hours (often while the humans are sleeping).
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          We made repository knowledge the system of record
        </h2>

        <p>
          Context management is one of the biggest challenges in making agents
          effective at large and complex tasks. One of the earliest lessons we
          learned was simple: give Codex a map, not a 1,000-page instruction
          manual.
        </p>

        <p>
          We tried the &quot;one big{" "}
          <a href="https://agents.md/" className={link} target="_blank" rel="noopener noreferrer">
            AGENTS.md
          </a>
          &quot; approach. It failed in predictable ways:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="font-semibold text-gray-900">It&apos;s hard to verify.</strong>{" "}
            A single blob doesn&apos;t lend itself to mechanical checks (coverage,
            freshness, ownership, cross-links), so drift is inevitable.
          </li>
          <li>
            <strong className="font-semibold text-gray-900">It rots instantly.</strong>{" "}
            A monolithic manual turns into a graveyard of stale rules. Agents
            can&apos;t tell what&apos;s still true, humans stop maintaining it, and the file
            quietly becomes an attractive nuisance.
          </li>
          <li>
            <strong className="font-semibold text-gray-900">
              Too much guidance becomes non-guidance.
            </strong>{" "}
            When everything is &quot;important,&quot; nothing is. Agents end up
            pattern-matching locally instead of navigating intentionally.
          </li>
          <li>
            <strong className="font-semibold text-gray-900">Context is a scarce resource.</strong>{" "}
            A giant instruction file crowds out the task, the code, and the
            relevant docs—so the agent either misses key constraints or starts
            optimizing for the wrong ones.
          </li>
        </ul>

        <p>
          So instead of treating <code>AGENTS.md</code> as the encyclopedia, we
          treat it as the table of contents.
        </p>

        <p>
          The repository&apos;s knowledge base lives in a structured{" "}
          <code>docs/</code> directory treated as the system of record. A short{" "}
          <code>AGENTS.md</code> (roughly 100 lines) is injected into context and
          serves primarily as a map, with pointers to deeper sources of truth
          elsewhere.
        </p>

        <DirTreeBlock caption="In-repository knowledge store layout." />

        <ImgKnowledge caption="The limits of agent knowledge: what's in the repo exists, what's outside doesn't" />

        <p>
          Design documentation is catalogued and indexed, including verification
          status and a set of core beliefs that define agent-first operating
          principles.{" "}
          <a href="https://matklad.github.io/2021/02/06/ARCHITECTURE.md.html" className={link} target="_blank" rel="noopener noreferrer">
            Architecture documentation
          </a>{" "}
          provides a top-level map of domains and package layering. A quality
          document grades each product domain and architectural layer, tracking
          gaps over time.
        </p>

        <p>
          Plans are treated as first-class artifacts. Ephemeral lightweight plans
          are used for small changes, while complex work is captured in{" "}
          <a href="https://cookbook.openai.com/articles/codex_exec_plans" className={link} target="_blank" rel="noopener noreferrer">
            execution plans
          </a>{" "}
          with progress and decision logs that are checked into the repository.
          Active plans, completed plans, and known technical debt are all
          versioned and co-located, allowing agents to operate without relying on
          external context.
        </p>

        <p>
          This enables progressive disclosure: agents start with a small, stable
          entry point and are taught where to look next, rather than being
          overwhelmed up front.
        </p>

        <p>
          We enforce this mechanically. Dedicated linters and CI jobs validate
          that the knowledge base is up to date, cross-linked, and structured
          correctly. A recurring &quot;doc-gardening&quot; agent scans for stale or
          obsolete documentation that does not reflect the real code behavior and
          opens fix-up pull requests.
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          Agent legibility is the goal
        </h2>

        <p>
          As the codebase evolved, Codex&apos;s framework for design decisions needed
          to evolve, too.
        </p>

        <p>
          Because the repository is entirely agent-generated, it&apos;s optimized
          first for Codex&apos;s legibility. In the same way teams aim to improve
          navigability of their code for new engineering hires, our human
          engineers&apos; goal was making it possible for an agent to reason about the
          full business domain directly from the repository itself.
        </p>

        <p>
          From the agent&apos;s point of view, anything it can&apos;t access in-context
          while running effectively doesn&apos;t exist. Knowledge that lives in Google
          Docs, chat threads, or people&apos;s heads are not accessible to the system.
          Repository-local, versioned artifacts (e.g., code, markdown, schemas,
          executable plans) are all it can see.
        </p>

        <p>
          We learned that we needed to push more and more context into the repo
          over time. That Slack discussion that aligned the team on an
          architectural pattern? If it isn&apos;t discoverable to the agent, it&apos;s
          illegible in the same way it would be unknown to a new hire joining
          three months later.
        </p>

        <p>
          Giving Codex more context means organizing and exposing the right
          information so the agent can reason over it, rather than overwhelming it
          with ad-hoc instructions. In the same way you would onboard a new
          teammate on product principles, engineering norms, and team culture
          (emoji preferences included), giving the agent this information leads to
          better-aligned output.
        </p>

        <p>
          This framing clarified many tradeoffs. We favored dependencies and
          abstractions that could be fully internalized and reasoned about
          in-repo. Technologies often described as &quot;boring&quot; tend to be easier for
          agents to model due to composability, API stability, and representation
          in the training set. In some cases, it was cheaper to have the agent
          reimplement subsets of functionality than to work around opaque upstream
          behavior from public libraries. For example, rather than pulling in a
          generic <code>p-limit</code>-style package, we implemented our own
          map-with-concurrency helper: it&apos;s tightly integrated with our
          OpenTelemetry instrumentation, has 100% test coverage, and behaves
          exactly the way our runtime expects.
        </p>

        <p>
          Pulling more of the system into a form the agent can inspect, validate,
          and modify directly increases leverage—not just for Codex, but for other
          agents (e.g.{" "}
          <a href="https://openai.com/index/introducing-aardvark/" className={link} target="_blank" rel="noopener noreferrer">
            Aardvark
          </a>
          ) that are working on the codebase as well.
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          Enforcing architecture and taste
        </h2>

        <p>
          Documentation alone doesn&apos;t keep a fully agent-generated codebase
          coherent. By enforcing invariants, not micromanaging implementations, we
          let agents ship fast without undermining the foundation. For example, we
          require Codex to{" "}
          <a href="https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/" className={link} target="_blank" rel="noopener noreferrer">
            parse data shapes at the boundary
          </a>
          , but are not prescriptive on how that happens (the model seems to like
          Zod, but we didn&apos;t specify that specific library).
        </p>

        <p>
          Agents are most effective in environments with{" "}
          <a href="https://bits.logic.inc/p/ai-is-forcing-us-to-write-good-code" className={link} target="_blank" rel="noopener noreferrer">
            strict boundaries and predictable structure
          </a>
          , so we built the application around a rigid architectural model. Each
          business domain is divided into a fixed set of layers, with strictly
          validated dependency directions and a limited set of permissible edges.
          These constraints are enforced mechanically via custom linters
          (Codex-generated, of course!) and structural tests.
        </p>

        <p>
          The diagram below shows the rule: within each business domain (e.g. App
          Settings), code can only depend &quot;forward&quot; through a fixed set of layers
          (Types → Config → Repo → Service → Runtime → UI). Cross-cutting
          concerns (auth, connectors, telemetry, feature flags) enter through a
          single explicit interface: Providers. Anything else is disallowed and
          enforced mechanically.
        </p>

        <ImgArchitecture caption="Layered domain architecture with explicit cross-cutting boundaries" />

        <p>
          This is the kind of architecture you usually postpone until you have
          hundreds of engineers. With coding agents, it&apos;s an early prerequisite:
          the constraints are what allows speed without decay or architectural
          drift.
        </p>

        <p>
          In practice, we enforce these rules with custom linters and structural
          tests, plus a small set of &quot;taste invariants.&quot; For example, we
          statically enforce structured logging, naming conventions for schemas
          and types, file size limits, and platform-specific reliability
          requirements with custom lints. Because the lints are custom, we write
          the error messages to inject remediation instructions into agent
          context.
        </p>

        <p>
          In a human-first workflow, these rules might feel pedantic or
          constraining. With agents, they become multipliers: once encoded, they
          apply everywhere at once.
        </p>

        <p>
          At the same time, we&apos;re explicit about where constraints matter and
          where they do not. This resembles leading a large engineering platform
          organization: enforce boundaries centrally, allow autonomy locally. You
          care deeply about boundaries, correctness, and reproducibility. Within
          those boundaries, you allow teams—or agents—significant freedom in how
          solutions are expressed.
        </p>

        <p>
          The resulting code does not always match human stylistic preferences,
          and that&apos;s okay. As long as the output is correct, maintainable, and
          legible to future agent runs, it meets the bar.
        </p>

        <p>
          Human taste is fed back into the system continuously. Review comments,
          refactoring pull requests, and user-facing bugs are captured as
          documentation updates or encoded directly into tooling. When
          documentation falls short, we promote the rule into code.
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          Throughput changes the merge philosophy
        </h2>

        <p>
          As Codex&apos;s throughput increased, many conventional engineering norms
          became counterproductive.
        </p>

        <p>
          The repository operates with minimal blocking merge gates. Pull
          requests are short-lived. Test flakes are often addressed with
          follow-up runs rather than blocking progress indefinitely. In a system
          where agent throughput far exceeds human attention, corrections are
          cheap, and waiting is expensive.
        </p>

        <p>
          This would be irresponsible in a low-throughput environment. Here, it&apos;s
          often the right tradeoff.
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          What &quot;agent-generated&quot; actually means
        </h2>

        <p>
          When we say the codebase is generated by Codex agents, we mean{" "}
          <strong className="font-semibold text-gray-900">
            everything in the codebase
          </strong>
          .
        </p>

        <p>Agents produce:</p>

        <ul className="list-disc space-y-1 pl-6">
          <li>Production dashboard definition files</li>
          <li>Scripts that manage the repository itself</li>
          <li>Review comments and responses</li>
          <li>Evaluation harnesses</li>
          <li>Documentation and design history</li>
          <li>Internal developer tools</li>
          <li>CI configuration and release tooling</li>
          <li>Product code and tests</li>
        </ul>

        <p>
          Humans always remain in the loop, but work at a different layer of
          abstraction than we used to. We prioritize work, translate user feedback
          into acceptance criteria, and validate outcomes. When the agent
          struggles, we treat it as a signal: identify what is missing—tools,
          guardrails, documentation—and feed it back into the repository, always
          by having Codex itself write the fix.
        </p>

        <p>
          Agents use our standard development tools directly. They pull review
          feedback, respond inline, push updates, and often squash and merge
          their own pull requests.
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          Increasing levels of autonomy
        </h2>

        <p>
          As more of the development loop was encoded directly into the
          system—testing, validation, review, feedback handling, and recovery—the
          repository recently crossed a meaningful threshold where Codex can
          end-to-end drive a new feature.
        </p>

        <p>Given a single prompt, the agent can now:</p>

        <ul className="list-disc space-y-1 pl-6">
          <li>Validate the current state of the codebase</li>
          <li>Reproduce a reported bug</li>
          <li>Record a video demonstrating the failure</li>
          <li>Implement a fix</li>
          <li>Validate the fix by driving the application</li>
          <li>Record a second video demonstrating the resolution</li>
          <li>Open a pull request</li>
          <li>Respond to agent and human feedback</li>
          <li>Detect and remediate build failures</li>
          <li>Escalate to a human only when judgment is required</li>
          <li>Merge the change</li>
        </ul>

        <p>
          This behavior depends heavily on the specific structure and tooling of
          this repository and should not be assumed to generalize without similar
          investment—at least, not yet.
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          Entropy and garbage collection
        </h2>

        <p>
          Full agent autonomy also introduces novel problems. Codex replicates
          patterns that already exist in the repository—even uneven or suboptimal
          ones. Over time, this inevitably leads to drift.
        </p>

        <p>
          Initially, humans addressed this manually. Our team used to spend every
          Friday (20% of the week) cleaning up &quot;AI slop.&quot; Unsurprisingly, that
          didn&apos;t scale.
        </p>

        <p>
          Instead, we started encoding what we call &quot;golden principles&quot; directly
          into the repository and built a recurring cleanup process. These
          principles are opinionated, mechanical rules that keep the codebase
          legible and consistent for future agent runs. For example: (1) we
          prefer shared utility packages over hand-rolled helpers to keep
          invariants centralized, and (2) we don&apos;t probe data &quot;YOLO-style&quot;—we
          validate boundaries or rely on typed SDKs so the agent can&apos;t
          accidentally build on guessed shapes. On a regular cadence, we have a
          set of background Codex tasks that scan for deviations, update quality
          grades, and open targeted refactoring pull requests. Most of these can
          be reviewed in under a minute and automerged.
        </p>

        <p>
          This functions like garbage collection. Technical debt is like a
          high-interest loan: it&apos;s almost always better to pay it down
          continuously in small increments than to let it compound and tackle it
          in painful bursts. Human taste is captured once, then enforced
          continuously on every line of code. This also lets us catch and resolve
          bad patterns on a daily basis, rather than letting them spread in the
          code base for days or weeks.
        </p>

        <h2 className="!mt-10 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
          What we&apos;re still learning
        </h2>

        <p>
          This strategy has so far worked well up through internal launch and
          adoption at OpenAI. Building a real product for real users helped anchor
          our investments in reality and guide us towards long-term
          maintainability.
        </p>

        <p>
          What we don&apos;t yet know is how architectural coherence evolves over years
          in a fully agent-generated system. We&apos;re still learning where human
          judgment adds the most leverage and how to encode that judgment so it
          compounds. We also don&apos;t know how this system will evolve as models
          continue to become more capable over time.
        </p>

        <p>
          What&apos;s become clear: building software still demands discipline, but
          the discipline shows up more in the scaffolding rather than the code.
          The tooling, abstractions, and feedback loops that keep the codebase
          coherent are increasingly important.
        </p>

        <p>
          Our most difficult challenges now center on designing environments,
          feedback loops, and control systems that help agents accomplish our
          goal: build and maintain complex, reliable software at scale.
        </p>

        <p>
          As agents like Codex take on larger portions of the software lifecycle,
          these questions will matter even more. We hope that sharing some early
          lessons helps you reason about where to invest your effort so{" "}
          <a href="https://openai.com/codex/" className={link} target="_blank" rel="noopener noreferrer">
            you can just build things
          </a>
          .
        </p>
      </div>
    </>
  );
}

export default function ArticleContent() {
  const { lang, setLang } = useLang();

  return (
    <article className="bg-white text-main">
      <div className="mx-auto max-w-[680px] px-5 py-16 md:py-24">
        <header className="mb-12 border-b border-gray-300 pb-10 text-center">
          <p className="mb-1 text-[10px] uppercase tracking-[3px] text-gray-400">
            {lang === "ru" ? "11 февраля 2026" : "February 11, 2026"}
          </p>
          <p className="mb-8 text-[9px] uppercase tracking-[2px] text-gray-400">
            {lang === "ru" ? "Инженерия" : "Engineering"}
          </p>
          <h1 className="mb-3 font-serif text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
            {lang === "ru"
              ? "Harness-инженерия"
              : "Harness engineering"}
          </h1>
          <p className="mb-6 font-serif text-lg italic text-gray-500 md:text-xl">
            {lang === "ru"
              ? "Использование Codex в мире, где агенты — на первом месте"
              : "Leveraging Codex in an agent-first world"}
          </p>
          <p className="text-xs tracking-wide text-gray-400">
            {lang === "ru"
              ? "Райан Лопополо, OpenAI · Перевод: Advertum"
              : "Ryan Lopopolo, OpenAI · Translation: Advertum"}
          </p>
          <LangToggle className="mt-6 justify-center" />
        </header>

        {lang === "ru" ? <RuBody /> : <EnBody />}

        <div className="mt-12 border-t border-gray-300 pt-8 text-center font-serif text-sm italic leading-relaxed text-gray-500 md:text-base">
          <p>
            {lang === "ru"
              ? "Особая благодарность Виктору Чжу и Заку Броку, внёсшим вклад в этот пост, а также всей команде, создавшей этот продукт."
              : "Special thanks to Victor Zhu and Zach Brock who contributed to the post, as well as to the entire team that built this new product."}
          </p>
        </div>

        <p className="mt-14 text-center text-[9px] uppercase tracking-[1px] text-gray-400">
          {lang === "ru"
            ? "Райан Лопополо, OpenAI · Перевод: Advertum · Февраль 2026"
            : "Ryan Lopopolo, OpenAI · Translation: Advertum · February 2026"}
        </p>
      </div>
    </article>
  );
}
