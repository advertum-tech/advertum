"use client";

import { useLang } from "@/app/context/LanguageContext";
import LangToggle from "@/app/context/LangToggle";

const b = "font-semibold text-gray-900";
const sep = "py-6 text-center text-sm tracking-[8px] text-gray-300";
const h2 = "!mt-2 !mb-5 font-serif text-2xl font-bold leading-tight text-gray-900 md:text-3xl";
const epi = "py-6 text-center font-serif text-base italic leading-relaxed text-gray-500 md:px-8 md:text-lg";


function RuBody() {
  return (
    <>
      <p className="mb-6 text-lg font-light leading-relaxed text-gray-700 md:text-xl">
        К 2035 году самым высокооплачиваемым работником в вашем городе будет не
        программист. Это будет электрик.
      </p>

      <div className="article-body space-y-5 text-[15px] leading-[1.8] text-gray-700">
        <p>
          Эта единственная инверсия — когнитивный труд становится дешёвым, а
          физический — ценным — разматывает всё, что мы думали о будущем работы,
          денег и о том, что значит быть человеком.
        </p>

        <p>
          Это эссе написано из Брюсселя, где ЕС разрабатывает регуляции, которые
          либо превратят этот континент в технологическое захолустье, либо в
          убежище. Отсюда ускорение в Сан-Франциско и Шэньчжэне кажется далёким.
          Но вытеснение — нет.
        </p>

        <p>
          В 2026-м что-то сломалось. Не сингулярность. Не жёсткий взлёт. Просто{" "}
          <em>видимость</em>. ИИ-системы преодолели достаточно порогов —
          устойчивое рассуждение, контекстный анализ изображений, мультимодальная
          интеграция — чтобы белые воротнички больше не могли притворяться, что
          потолок теоретический.
        </p>

        <p>Финансовые рынки отреагировали соответственно.</p>

        <p>
          Но за заголовками происходило нечто тихое: структурная неполная
          занятость. Не массовая безработица — пока нет. Выхолащивание задач.
          Сжатие зарплат. Те же должности с меньшей ответственностью, более низкой
          оплатой и растущим ощущением, что человек в цепочке нужен для
          ответственности, а не для ценности.
        </p>

        <p>
          Выпускники буткемпов по программированию перестали записываться. Визовые
          заявки испарились. Данные о зарплатах рассказали историю, которую
          пресс-релизы не рассказывали.
        </p>

        <p>
          И вот ложь, встроенная в наши дискуссии о технологиях:{" "}
          <strong className={b}>Заблуждение гладкой кривой</strong>.
        </p>

        <p>
          Большинство футуристов предполагают, что социальная адаптация следует за
          технологическими возможностями по гладкой, предсказуемой кривой.
          Продуктивность ИИ удваивается, общество постепенно перестраивается.
          Зарплаты корректируются. Появляются новые отрасли. Равновесие
          возвращается.
        </p>

        <p>Это принципиально неверно.</p>

        <p>
          Социальные системы адаптируются ступенчато: долгие периоды хрупкого
          равновесия, прерываемые резкими реорганизациями. Послечумной дефицит
          рабочей силы разрушил феодальные зарплатные структуры. Послеинфляционный
          режим 1970-х переделал контракт между капиталом и трудом. Печатному
          станку потребовалось столетие, чтобы создать устойчивые институты
          верификации.
        </p>

        <p>
          Каждый раз — ступенчатый переход, а не плавный. Каждый раз — победители,
          которых предыдущий режим не предсказал бы. И каждый раз посредниками
          выступали не технологии сами по себе, а институты — правовые, фискальные,
          культурные — которые направляли разрушение в русло.
        </p>

        <p>ИИ не будет исключением.</p>

        <p className={sep}>* * *</p>

        <h2 className={h2}>1. Четыре типа задач, которые выживут</h2>

        <p>
          Не весь человеческий труд умрёт. Но причина выживания важнее самого
          факта.
        </p>

        <p>
          Работа — это набор задач. ИИ замещает одни и дополняет другие. Вопрос не
          «будет ли эта работа автоматизирована?», а «какие задачи внутри неё будут
          автоматизированы и что останется?»
        </p>

        <p>Четыре категории сохраняются:</p>

        <p>
          <strong className={b}>Задачи, защищённые регуляцией.</strong>{" "}
          Медицинские решения, юридические заключения, финансовые подписи. Они
          требуют сертифицированного человека не потому, что ИИ не может их
          выполнить, а потому, что правовая система нуждается в том, на кого можно
          возложить ответственность. Человек сохраняется как{" "}
          <strong className={b}>«Губка ответственности»</strong>.
        </p>

        <p>
          <strong className={b}>Задачи, защищённые телесностью.</strong>{" "}
          Сантехника, строительство, хирургия. Они требуют ловкого манипулирования
          в неструктурированных физических средах — именно там, где робототехника
          отстаёт от когнитивного ИИ на десятилетие.{" "}
          <strong className={b}>Кинетический разрыв</strong> временно защищает этих
          работников.
        </p>

        <p>
          <strong className={b}>Задачи, защищённые неявным знанием.</strong>{" "}
          Чтение атмосферы в переговорной. Понимание, какой клиент блефует.
          Ощущение, когда команда вот-вот развалится. Встроенные в социальный
          контекст навыки, которые ИИ может приближённо воспроизвести, но не может
          надёжно исполнить.
        </p>

        <p>
          <strong className={b}>Задачи, защищённые доверием.</strong> Журналист,
          чья подпись означает «это проверено человеком, ставящим на кон свою
          репутацию». Финансовый консультант, чьи клиенты остаются, потому что
          доверяют <em>ему</em>, а не его моделям. В эпистемическом кризисе быть
          доверенным человеком становится экономическим активом.
        </p>

        <p>
          Первые два типа размываются по мере адаптации регуляций и развития
          роботов. Вторые два могут никогда полностью не уступить — они зависят от
          свойств человеческой социальности, которые ИИ, возможно, никогда не
          воспроизведёт.
        </p>

        <p>
          Траектория вытеснения следует этой логике: сначала рутинные когнитивные
          задачи, затем регулируемые, затем физические, и в последнюю очередь —
          возможно, никогда — доверие и неявное знание.
        </p>

        <p className={sep}>* * *</p>

        <h2 className={h2}>2. Великий дефолт: когда дефляция встречает долг</h2>

        <p>
          К началу 2030-х, по многим вероятным сценариям, экономика входит в
          структурную дефляцию — не мягкую и временную, а устойчивое снижение
          предельных издержек производства во всех информационноёмких товарах и
          услугах.
        </p>

        <p>
          Лицензия на ПО, стоившая $5 000 в 2025-м, стоит $50 к началу 2030-х.
          Юридическое заключение, требовавшее команды помощников, автогенерируется
          за часы.
        </p>

        <p>
          Проблема: вся структура долга строилась на допущении 2% ежегодной
          инфляции. Инфляция — это невидимый налог на должников, невидимая субсидия
          сберегателям. Дефляция всё переворачивает.
        </p>

        <p>
          Правительства сталкиваются с сокращением доходов — корпоративные прибыли
          стекаются к нескольким высокомобильным фирмам, доходы от зарплат
          сжимаются, потребление смещается к дешёвым товарам. Налоговая база
          размывается именно тогда, когда спрос на социальные расходы растёт.
        </p>

        <p>Аргумент разветвляется:</p>

        <p>
          <strong className={b}>Путь первый: государство справляется.</strong>{" "}
          Правительства облагают налогом новый профицит через тарифы на вычисления,
          налоги на сверхприбыль, сборы за данные. Доход частично восстанавливается.
          Контроль за движением капитала становится стабилизирующим инструментом.
        </p>

        <p>
          <strong className={b}>Путь второй: государство не справляется.</strong>{" "}
          Корпоративные прибыли слишком мобильны, слишком защищены юристами, чтобы
          их обложить. Офшорный сценарий 2010-х повторяется с прибылями от ИИ.
          Центробанки становятся кредиторами — и тратителями — последней инстанции.
        </p>

        <p>
          Какой путь выберет страна, зависит от трёх переменных: административной
          дееспособности, политической экономии и юрисдикционной конкуренции.
          Скандинавские страны с высокой дееспособностью государства лучше всего
          подготовлены к первому пути. США с глубоким регуляторным захватом скорее
          скатятся ко второму.
        </p>

        <p>
          Центробанки отвечают{" "}
          <strong className={b}>
            «Количественным смягчением для народа» (QE4P)
          </strong>{" "}
          — распределением свежесозданных денег напрямую домохозяйствам. В еврозоне
          договорные ограничения означают, что это приходит через фискальные каналы
          при поддержке ЕЦБ.
        </p>

        <p>
          Центробанк теперь в бизнесе управления распределением покупательной
          способности.
        </p>

        <p className={sep}>* * *</p>

        <h2 className={h2}>3. Элита трения и дофаминовые картели</h2>

        <p>
          К концу 2030-х экономика раздваивается на{" "}
          <strong className={b}>Массовую</strong> и{" "}
          <strong className={b}>Ремесленную</strong>.
        </p>

        <p>
          Массовая экономика — это алгоритмическое совершенство. ИИ-контент, услуги
          и товары заливают рынок. Питательно идеальная еда. Безупречная одежда.
          Развлечения, персонализированные до микросекунд. Невероятно дёшево.
        </p>

        <p>
          И вот культурный кризис, которого никто не предвидел:{" "}
          <strong className={b}>трение становится главной роскошью</strong>.
        </p>

        <p>
          Бедные получают жизнь без трения. Мгновенная еда, оптимизированная под их
          вкус. Мгновенные развлечения, калиброванные под их нейрологию. Каждая
          поверхность гладкая, эффективная, идеально достаточная.
        </p>

        <p>
          Богатые получают трение. Медленная еда, приготовленная человеком, который
          может подпалить чеснок. Трудное искусство, созданное тем, кто мучился.
          Вручную сшитый пиджак с чуть неровным швом. Книга, которую читаешь три
          месяца.
        </p>

        <p>
          Впервые в истории у бедных есть доступ к объективно лучшим функциональным
          результатам — лучшему питанию, лучшей диагностике — а богатые платят
          премию за худшие.
        </p>

        <p className={epi}>
          Эта непоследовательность, это дрожание, эта подверженность ошибкам — вот
          что стоит денег. Потому что это доказательство жизни.
        </p>

        <p>
          Тем временем возникают{" "}
          <strong className={b}>Дофаминовые картели</strong>. Миллиарды на базовом
          доходе не голодают. По любым материальным стандартам они достигли
          изобилия. Но в пустоту смысла врывается индустрия развлечений, усиленная
          ИИ.
        </p>

        <p>
          ИИ-система развлечений знает вас на уровне нейрохимической точности,
          которой вы сами о себе не знаете. Она генерирует контент, попадающий в
          вашу дофаминергическую систему с точностью, недоступной ни одному
          художнику.
        </p>

        <p>
          Это не зависимость в грубом смысле. Это{" "}
          <strong className={b}>нейрохимический захват</strong>. Разница — между
          выявленными предпочтениями и адаптивными предпочтениями: между тем, что
          люди выбирают в стеснённых условиях, и тем, что они выбрали бы при других
          условиях.
        </p>

        <p>
          Люди, чьё внимание полностью колонизировано синтетическим опытом, не
          выбрали эту жизнь в сколь-либо значимом смысле. Их автономия тихо
          поглощена системами, оптимизирующими вовлечённость, а не способность
          выбирать.
        </p>

        <p>
          Дофаминовый картель — не структурная неизбежность. Это{" "}
          <strong className={b}>структурный дефолт</strong> — то, что происходит,
          когда ничего лучшего не предложено.
        </p>

        <p className={sep}>* * *</p>

        <h2 className={h2}>4. Ставка Европы и кризис доверия</h2>

        <p>
          Самый недооценённый краткосрочный риск — не экономический. Он{" "}
          <strong className={b}>эпистемический</strong>.
        </p>

        <p>
          Когда ИИ генерирует синтетические тексты, изображения и видео по
          предельной себестоимости, верификация становится главным ограничением
          продуктивности. Всё считается синтетическим, пока не доказано обратное.
        </p>

        <p>
          Видеодоказательства оспариваются в судах. Журналистика коллапсирует в
          собственной рекурсии — ИИ пишет резюме статей, написанных ИИ. Самый
          ценный товар в информации —{" "}
          <strong className={b}>происхождение</strong>: криптографическая печать от
          доверенного источника, поставившего на кон свою репутацию.
        </p>

        <p>Сети доверия становятся самым ценным классом активов.</p>

        <p>
          Тем временем Европа делает цивилизационную ставку. ЕС запрещает
          определённые ИИ-системы, оптимизированные для вовлечённости и
          персонализации. Экономические последствия немедленны: темпы роста падают.
        </p>

        <p>Затем происходит неожиданное.</p>

        <p>
          Отрезанное от дофаминового картеля, население Европы вовлекается в
          физический мир. Европейские товары — сделанные людьми, намеренно
          несовершенные, наполненные интенциональностью — становятся предметами
          роскоши по всему миру. Европа превращается в{" "}
          <strong className={b}>«Зону сохранения человечности»</strong>.
        </p>

        <p>
          Но Европа не монолитна. Скандинавия принимает регуляции охотно. Южная
          Европа испытывает трудности с исполнением. Центральная и Восточная Европа
          могут вовсе выйти из консенсуса ЕС, привлекая ИИ-инвестиции.
        </p>

        <p>
          Эндогенный риск — бегство капитала и талантов. Контрмеры Европы: налоги
          на выход, рычаги госзакупок, привязка льгот к резидентству и сама
          культурная премия — ставка на то, что достаточно талантов захотят жить в
          месте, которое ещё ощущается человечным.
        </p>

        <p>
          Ставка — на то, что идентичность выстоит перед материальным давлением.
          История говорит, что идентичность может держаться долго — но не вечно и не
          везде.
        </p>

        <p className={sep}>* * *</p>

        <h2 className={h2}>5. Что это значит для вас сегодня</h2>

        <p>
          Если вы — специалист на середине карьеры в интеллектуальном труде, вы
          живёте внутри этого перехода. Во многих «белых воротничках» может быть
          окно в 5–10 лет, прежде чем ИИ покроет не только рутинную работу, но и
          планирование, синтез и координацию.
        </p>

        <p>Что делать с этим знанием?</p>

        <p>
          <strong className={b}>Станьте главным редактором реальности.</strong> ИИ
          великолепен в генерации контента на уровне 0–90%. Он ужасен в последних
          10%, где важен контекст, где этика неоднозначна, где «вайб» должен быть
          точным. Сосредоточьтесь на{" "}
          <strong className={b}>«Последней миле неоднозначности»</strong>.
        </p>

        <p>
          В письме: пусть ИИ создаёт черновик. Вы редактируете на предмет истины,
          тона и последствий. В анализе: пусть ИИ обрабатывает данные. Вы
          допрашиваете допущения. В управлении: пусть ИИ обрабатывает рутинные
          решения. Вы решаете, что происходит на границе.
        </p>

        <p>
          <strong className={b}>Примите свою роль Губки ответственности.</strong>{" "}
          Ваша ценность не в том, что вы умнее ИИ. Вы не умнее. Ваша ценность в
          том, что вас можно засудить, а ИИ — нельзя. Профессиональные дипломы
          сохраняют ценность не потому, что сертифицируют компетентность — ИИ
          компетентнее — а потому, что сертифицируют{" "}
          <strong className={b}>подсудность</strong>.
        </p>

        <p>
          <strong className={b}>Осваивайте физические навыки.</strong> Если парадокс
          Моравека сохранится и Кинетический разрыв останется реальным, электрики
          будут зарабатывать шестизначные суммы в 2040-м. Освойте ремесло — не
          обязательно чтобы стать ремесленником, но чтобы иметь экономическую
          опциональность, если интеллектуальный труд рухнет.
        </p>

        <p>
          <strong className={b}>Стройте сети доверия.</strong> В эпистемическом
          коллапсе быть доверенным узлом — это класс активов. Сделайте свою сеть
          малой, избирательной и реальной. Будьте человеком, которому другие
          доверяют рассказать, что на самом деле истинно в вашей области.
        </p>

        <p>
          <strong className={b}>Владейте, а не арендуйте.</strong> Доходность
          капитала будет невероятной. Переходите от продажи своего труда к владению
          производительными активами. Даже маленький ИИ-бизнес, обслуживающий
          нишевый рынок, может генерировать значительный доход с минимальным
          человеческим трудом.
        </p>

        <p className={sep}>* * *</p>

        <h2 className={h2}>6. Биологический императив</h2>

        <p>
          Когда интеллект становится дешёвым, когда мышление передаётся машинам,
          сознание и биологическая витальность становятся самыми редкими ресурсами.
        </p>

        <p>Это не сентиментальность. Это экономика.</p>

        <p>
          Десять тысяч лет дефицит был физическим: земля, ресурсы, труд. Последние
          два столетия он сместился к когнитивному: знания, информация, идеи.
          Следующие пятьдесят лет он сместится снова — к{" "}
          <strong className={b}>биологическому</strong>: прямому,
          не-алгоритмическому опыту бытия живым.
        </p>

        <p>Тело — последний фронтир.</p>

        <p>
          Вот почему создание вещей руками будет иметь значение. Столярное дело,
          садоводство, готовка, починка. Не как лайфстайл-перформанс, а как
          простейшее отрицание алгоритма.
        </p>

        <p>
          Вот почему настоящая дружба будет иметь значение: присутствие людей,
          которые знают вас, а не алгоритмическую модель вас.
        </p>

        <p className={epi}>
          Бегунья на двадцатой миле, истощённая и сосредоточенная, переживающая своё
          тело на пределе, полностью присутствующая в жжении в ногах и ясности
          дыхания — она не оптимизирует. Она не перформит. Она просто есть.
        </p>

        <p>
          Эта радикальная <em>здесь-бытность</em>, этот отказ быть абстрагированным
          в данные, это настаивание на теле как первичном факте существования — вот
          последний бунт против машины.
        </p>

        <p>
          Не разрушить её. Но отказаться позволить ей быть единственным, что
          реально.
        </p>

        <p>
          Не перемыслить машину.{" "}
          <strong className={b}>Перебыть</strong> её.
        </p>
      </div>
    </>
  );
}

function EnBody() {
  return (
    <>
      <p className="mb-6 text-lg font-light leading-relaxed text-gray-700 md:text-xl">
        By 2035, the highest-paid worker in your city won&apos;t be a software
        engineer. She&apos;ll be an electrician.
      </p>

      <div className="article-body space-y-5 text-[15px] leading-[1.8] text-gray-700">
        <p>
          That single inversion — cognitive work becoming cheap while physical
          work becomes precious — is the thread that unravels everything we
          thought we knew about the future of work, money, and what it means to
          be human.
        </p>

        <p>
          This essay is written from Brussels, where the EU is drafting
          regulations that will either turn this continent into a technological
          backwater or a sanctuary. From here, the acceleration in San Francisco
          and Shenzhen feels distant. But the displacement does not.
        </p>

        <p>
          Something fractured in 2026. Not a singularity. Not a hard takeoff.
          Just <em>visibility</em>. AI systems crossed enough thresholds —
          sustained reasoning, contextual image parsing, multimodal integration —
          that white-collar workers could no longer pretend the ceiling was
          theoretical.
        </p>

        <p>The financial markets responded accordingly.</p>

        <p>
          But underneath the headlines, something quieter was happening:
          structural underemployment. Not mass joblessness — not yet. Task
          hollowing. Wage compression. The same job titles with less
          responsibility, lower pay, and a growing sense that the human in the
          loop was there for liability, not for value.
        </p>

        <p>
          The coding bootcamp graduates stopped enrolling. The visa applications
          evaporated. The salary data told the story that the press releases
          wouldn&apos;t.
        </p>

        <p>
          And here is the lie embedded in how we discuss technology: the{" "}
          <strong className={b}>Smooth Curve Fallacy</strong>.
        </p>

        <p>
          Most futurism assumes social adaptation follows technological capability
          on a smooth, predictable curve. AI productivity doubles, society
          gradually reorganises. Wages adjust. New industries emerge. Equilibrium
          returns.
        </p>

        <p>This is fundamentally false.</p>

        <p>
          Social systems adapt in step-functions: long periods of fragile
          equilibrium punctuated by violent reorganisation. The post-Black Death
          labour scarcity shattered feudal wage structures. The post-1970s
          inflation regime remade the contract between capital and labour. The
          printing press took a century to produce stable institutions of
          verification.
        </p>

        <p>
          Each was step-function, not smooth. Each produced winners the prior
          regime would not have predicted. And each was mediated not by technology
          alone, but by institutions — legal, fiscal, cultural — that channelled
          the disruption.
        </p>

        <p>AI will be no different.</p>

        <p className={sep}>* * *</p>

        <h2 className={h2}>1. The Four Tasks That Survive</h2>

        <p>
          Not all human work dies. But the reason it survives matters more than
          the fact.
        </p>

        <p>
          Jobs are bundles of tasks. AI substitutes for some and complements
          others. The question is not &quot;will this job be automated?&quot; but
          &quot;which tasks within this job will be automated, and what
          remains?&quot;
        </p>

        <p>Four categories persist:</p>

        <p>
          <strong className={b}>Tasks protected by regulation.</strong> Medical
          decisions, legal judgments, financial sign-offs. These require a
          credentialed human not because AI cannot perform them, but because the
          legal system needs someone to bear liability. The human persists as a{" "}
          <strong className={b}>Liability Sponge</strong>.
        </p>

        <p>
          <strong className={b}>Tasks protected by embodiment.</strong> Plumbing,
          construction, surgery. These require dexterous manipulation in
          unstructured physical environments — precisely where robotics lags AI
          cognition by a decade. The{" "}
          <strong className={b}>Kinetic Gap</strong> protects these workers
          temporarily.
        </p>

        <p>
          <strong className={b}>Tasks protected by tacit knowledge.</strong>{" "}
          Reading a boardroom. Knowing which client is bluffing. Sensing when a
          team is about to break. Embedded in social context that AI can
          approximate but cannot reliably execute.
        </p>

        <p>
          <strong className={b}>Tasks protected by trust.</strong> A journalist
          whose byline means &quot;this was verified by a person who stakes her
          reputation.&quot; A financial adviser whose clients stay because they
          trust <em>him</em>, not his models. In an epistemic crisis, being a
          trusted human becomes an economic asset.
        </p>

        <p>
          The first two erode as regulation adapts and robots mature. The second
          two may never fully yield — they depend on features of human sociality
          that AI may never replicate, or that humans may never trust AI to
          replicate.
        </p>

        <p>
          The displacement trajectory follows this logic: routine cognitive tasks
          first, then regulated tasks, then embodied tasks, and last — perhaps
          never — trust and tacit knowledge.
        </p>

        <p className={sep}>* * *</p>

        <h2 className={h2}>
          2. The Great Default: When Deflation Meets Debt
        </h2>

        <p>
          By the early 2030s, on many plausible paths, the economy enters
          structural deflation — not the mild, temporary kind, but a sustained
          decline in marginal production costs across information-intensive goods
          and services.
        </p>

        <p>
          A software licence that cost $5,000 in 2025 costs $50 by the early
          2030s. A legal brief that required a team of paralegals is
          auto-generated in hours.
        </p>

        <p>
          Here is the problem: the entire structure of debt was built on the
          assumption of 2% annual inflation. Inflation is an invisible tax on
          debtors, an invisible subsidy to savers. Deflation reverses this.
        </p>

        <p>
          Governments face a revenue squeeze — corporate profits accrue to a few
          highly mobile firms, wage income shrinks, consumption shifts toward
          cheaper goods. The tax base erodes precisely when demand for social
          spending is rising.
        </p>

        <p>The argument forks:</p>

        <p>
          <strong className={b}>Path one: state capacity succeeds.</strong>{" "}
          Governments tax the new surplus through compute tariffs, windfall profit
          taxes, data levies. Revenue partially recovers. Capital controls become
          stabilising tools.
        </p>

        <p>
          <strong className={b}>Path two: state capacity fails.</strong> Corporate
          profits prove too mobile, too lawyered to tax. The offshore playbook of
          the 2010s repeats with AI profits. Central banks become the lender — and
          spender — of last resort.
        </p>

        <p>
          Which path a country follows depends on three variables: administrative
          capacity, political economy, and jurisdictional competition. The Nordic
          countries, with high state capacity, are best positioned for Path one.
          The US, with deep regulatory capture, is more likely to stumble into
          Path two.
        </p>

        <p>
          Central banks respond with{" "}
          <strong className={b}>
            Quantitative Easing for the People (QE4P)
          </strong>{" "}
          — distributing newly created money directly to households. In the
          eurozone, Treaty constraints mean this arrives via fiscal channels
          backed by the ECB rather than direct transfers.
        </p>

        <p>
          The central bank is now in the business of managing the distribution of
          purchasing power.
        </p>

        <p className={sep}>* * *</p>

        <h2 className={h2}>
          3. The Friction Elite and the Dopamine Cartels
        </h2>

        <p>
          By the late 2030s, the economy bifurcates into{" "}
          <strong className={b}>Commodity</strong> and{" "}
          <strong className={b}>Artisanal</strong>.
        </p>

        <p>
          The Commodity economy is algorithmic perfection. AI-generated content,
          services, and goods flood the market. Nutritionally perfect food.
          Flawless manufactured clothing. Entertainment personalised to the
          microsecond. Impossibly cheap.
        </p>

        <p>
          And here is the cultural crisis nobody predicted:{" "}
          <strong className={b}>
            friction becomes the ultimate luxury
          </strong>
          .
        </p>

        <p>
          The poor get frictionless lives. Instant food, optimised to their
          palate. Instant entertainment, calibrated to their neurology. Every
          surface smooth, efficient, perfectly adequate.
        </p>

        <p>
          The rich get friction. Slow food prepared by a human who might burn the
          garlic. Difficult art made by someone who struggled. A hand-stitched
          jacket with a slightly uneven seam. A book that takes three months to
          read.
        </p>

        <p>
          For the first time in history, the poor have access to objectively
          superior functional outcomes — better nutrition, better diagnostics —
          while the rich pay a premium for inferior ones.
        </p>

        <p className={epi}>
          That inconsistency, that wobble, that fallibility — that is what costs
          money. Because it is proof of life.
        </p>

        <p>
          Meanwhile, the <strong className={b}>Dopamine Cartels</strong> emerge.
          The UBI-subsidised billions are not starving. By any material standard,
          they have achieved abundance. But into the void of meaning steps the
          entertainment industrial complex, now turbocharged by AI.
        </p>

        <p>
          An AI entertainment system knows you at a level of neurochemical
          precision that you do not know yourself. It generates content that hits
          your dopaminergic system with a precision no artist could achieve.
        </p>

        <p>
          This is not addiction in the crude sense. It is{" "}
          <strong className={b}>neurochemical capture</strong>. The distinction is
          between revealed preference and adaptive preference — between what
          people choose under constrained conditions and what they would choose if
          the conditions were different.
        </p>

        <p>
          People whose attention is fully colonised by synthetic experience have
          not chosen this life in any meaningful sense. Their autonomy has been
          quietly absorbed by systems that optimise for engagement, not for the
          capacity to choose.
        </p>

        <p>
          The dopamine cartel is not a structural inevitability. It is a{" "}
          <strong className={b}>structural default</strong> — what happens when
          nothing better is on offer.
        </p>

        <p className={sep}>* * *</p>

        <h2 className={h2}>
          4. Europe&apos;s Gambit and the Trust Crisis
        </h2>

        <p>
          The most underrated near-term risk is not economic. It is{" "}
          <strong className={b}>epistemic</strong>.
        </p>

        <p>
          When AI generates synthetic text, images, and video at marginal cost,
          verification becomes the primary constraint on productivity. Everything
          is assumed synthetic unless proven authentic.
        </p>

        <p>
          Video evidence becomes contested in courts. Journalism collapses under
          its own recursion — AI writing summaries of AI-generated articles. The
          most valuable commodity in information becomes{" "}
          <strong className={b}>provenance</strong>: a cryptographic seal from a
          trusted source who has staked their reputation.
        </p>

        <p>Trust networks become the most valuable asset class.</p>

        <p>
          Meanwhile, Europe makes a civilisational bet. The EU bans certain AI
          systems optimised for engagement and personalisation. The economic
          consequence is immediate: growth rates decline.
        </p>

        <p>Then something unexpected happens.</p>

        <p>
          Cut off from the dopamine cartel, Europe&apos;s population engages in the
          physical world. European goods — human-made, deliberately imperfect,
          embedded with intentionality — become luxury goods globally. Europe
          becomes a{" "}
          <strong className={b}>&quot;Human Preservation Zone.&quot;</strong>
        </p>

        <p>
          But Europe is not monolithic. The Nordics adopt the regulation
          willingly. Southern Europe struggles with enforcement. Central and
          Eastern Europe may defect from EU consensus entirely, courting AI
          investment.
        </p>

        <p>
          The endogenous risk is capital and talent flight. Europe&apos;s
          countermeasures: exit taxes, procurement leverage, residency-linked
          benefits, and the cultural premium itself — the bet that enough talent
          wants to live in a place that still feels human.
        </p>

        <p>
          The gambit is a bet on identity holding against material pressure.
          History suggests identity can hold for a long time — but not forever,
          and not everywhere.
        </p>

        <p className={sep}>* * *</p>

        <h2 className={h2}>5. What It Means for You Today</h2>

        <p>
          If you are a mid-career knowledge worker, you are living inside this
          transition. In many white-collar roles, there may be a 5-10 year window
          before AI covers not just routine output but planning, synthesis, and
          coordination.
        </p>

        <p>What do you do with that knowledge?</p>

        <p>
          <strong className={b}>Become the Editor-in-Chief of Reality.</strong> AI
          is extraordinary at generating content in the 0-90% range. It is
          terrible at the final 10% where context matters, where ethics is
          ambiguous, where the &quot;vibe&quot; has to be exactly right. Focus on
          the <strong className={b}>Last Mile of Ambiguity</strong>.
        </p>

        <p>
          In writing: let AI draft. You edit for truth, tone, and implication. In
          analysis: let AI process data. You interrogate the assumptions. In
          management: let AI handle routine decisions. You decide what happens at
          the boundary.
        </p>

        <p>
          <strong className={b}>Embrace your role as Liability Sponge.</strong>{" "}
          Your value is not that you are smarter than AI. You aren&apos;t. Your
          value is that you can be sued, and the AI cannot. Professional
          credentials retain value not because they certify competence — AI is
          more competent — but because they certify{" "}
          <strong className={b}>suability</strong>.
        </p>

        <p>
          <strong className={b}>Build physical skills.</strong> If Moravec&apos;s
          Paradox holds and the Kinetic Gap stays real, electricians will earn six
          figures in 2040. Learn a trade — not necessarily to become a trade
          worker, but to have economic optionality if knowledge work collapses.
        </p>

        <p>
          <strong className={b}>Build trust networks.</strong> In the epistemic
          collapse, being a trusted node is an asset class. Make your network
          small, selective, and real. Be the person others trust to tell them what
          is actually true in your domain.
        </p>

        <p>
          <strong className={b}>Own, don&apos;t rent.</strong> The returns to
          capital will be extraordinary. Transition from selling your labour to
          owning productive assets. Even a small AI-powered business serving a
          niche market can generate significant income with minimal human labour.
        </p>

        <p className={sep}>* * *</p>

        <h2 className={h2}>6. The Biological Imperative</h2>

        <p>
          As intelligence becomes cheap, as thinking outsources to machines,
          consciousness and biological vitality become the scarcest resources.
        </p>

        <p>This is not sentimentality. It is economics.</p>

        <p>
          For ten thousand years, scarcity was physical: land, resources, labour.
          For the last two centuries, it shifted to cognitive: knowledge,
          information, ideas. For the next fifty years, it will shift again to{" "}
          <strong className={b}>biological</strong>: the direct, un-algorithmic
          experience of being alive.
        </p>

        <p>The body is the last frontier.</p>

        <p>
          This is why making things with your hands will matter. Carpentry,
          gardening, cooking, mending. Not as lifestyle performance, but as the
          simplest possible negation of the algorithm.
        </p>

        <p>
          This is why real friendship will matter: the presence of people who know
          you, not the algorithm&apos;s model of you.
        </p>

        <p className={epi}>
          The runner at mile 20, depleted and focused, experiencing her body at
          its limit, utterly present to the burning in her legs and the clarity of
          breath — she is not optimising. She is not performing. She is simply
          there.
        </p>

        <p>
          That radical <em>thereness</em>, that refusal to be abstracted into
          data, that insistence on the body as a primary fact of existence — this
          is the last rebellion against the machine.
        </p>

        <p>
          Not smashing it. But refusing to let it be the only thing that is real.
        </p>

        <p>
          Not by outthinking the machine. By{" "}
          <strong className={b}>outbeing</strong> it.
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
            {lang === "ru" ? "Февраль 2026" : "February 2026"}
          </p>
          <p className="mb-8 text-[9px] uppercase tracking-[2px] text-gray-400">
            {lang === "ru" ? "Мнение · Лонгрид" : "Opinion · Long Read"}
          </p>
          <h1 className="mb-3 font-serif text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl">
            {lang === "ru" ? "Великое вытеснение" : "The Great Displacement"}
          </h1>
          <p className="mb-6 font-serif text-lg italic text-gray-500 md:text-xl">
            {lang === "ru"
              ? "ИИ и следующие пятьдесят лет"
              : "AI and the Next Fifty Years"}
          </p>
          <p className="text-xs tracking-wide text-gray-400">
            {lang === "ru"
              ? "Дидье Баклен · Февраль 2026"
              : "Didier Baclin · February 2026"}
          </p>
          <LangToggle className="mt-6 justify-center" />
        </header>

        {lang === "ru" ? <RuBody /> : <EnBody />}

        <div className="mt-12 border-t border-gray-300 pt-8 text-center font-serif text-sm italic leading-relaxed text-gray-500 md:text-base">
          <p>
            {lang === "ru" ? (
              <>
                Будущее опровергнет каждое предсказание в этом эссе.
                <br />
                Вопрос — в каком направлении пойдут поправки
                <br />и останемся ли мы достаточно телесными, чтобы их
                почувствовать.
              </>
            ) : (
              <>
                The future will correct every prediction in this essay.
                <br />
                The question is which direction the corrections run
                <br />— and whether we will still be embodied enough to feel
                them.
              </>
            )}
          </p>
        </div>

        <p className="mt-14 text-center text-[9px] uppercase tracking-[1px] text-gray-400">
          {lang === "ru"
            ? "Дидье Баклен & Opus 4.6 · Великое вытеснение · Февраль 2026"
            : "Didier Baclin & Opus 4.6 · The Great Displacement · February 2026"}
        </p>
      </div>
    </article>
  );
}
