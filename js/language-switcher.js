// Перевод через массив, содержащий русскую и английскую версию

document.addEventListener("DOMContentLoaded", () => {
  const lang = document.querySelector(".lang");
  const translateParagraph = document.querySelector(".lang");

  let path = window.location.pathname;
  let page = path.split("/").pop();
  let language; // Чтобы информацию не повторять в languagesArray

  translateParagraph.addEventListener("click", () => {
    // Меняет язык и изображение
    if (lang.id === "ru") {
      lang.id = "en";
      translateParagraph.textContent = "en";
      if (page === "index.html") {
        document.getElementsByName("Msg")[0].placeholder = "Message";
      } else if (page === "vacancies.html") {
        document.getElementsByName("name")[0].placeholder = "Enter name";
        document.getElementsByName("surname")[0].placeholder = "Enter surname";
        document.getElementsByName("email")[0].placeholder = "Enter E-mail";
        document.getElementsByName("tel")[0].placeholder = "Enter phone number";
      }
    } else {
      lang.id = "ru";
      translateParagraph.textContent = "ru";
      if (page === "index.html") {
        document.getElementsByName("Msg")[0].placeholder = "Сообщение";
      }
    }

    // Применяет тексты для каждого класса lang
    document.querySelectorAll(".translate").forEach((innerItem) => {
      innerItem.textContent =
        languagesArray[lang.id][innerItem.getAttribute("key")];
    });
  });

  const mobileLang = document.querySelector(".lang-mobile");
  const mobiletranslateParagraph = document.querySelector(".lang-mobile");

  mobiletranslateParagraph.addEventListener("click", () => {
    if (mobileLang.id === "ru-mobile") {
      mobileLang.id = "en-mobile";
      language = "en";
      mobiletranslateParagraph.textContent = "en";
      if (page === "index.html") {
        document.getElementsByName("Msg")[0].placeholder = "Message";
      }
    } else {
      mobileLang.id = "ru-mobile";
      language = "ru";
      mobiletranslateParagraph.textContent = "ru";
      if (page === "index.html") {
        document.getElementsByName("Msg")[0].placeholder = "Сообщение";
      }
    }

    document.querySelectorAll(".translate").forEach((innerItem) => {
      innerItem.textContent =
        languagesArray[language][innerItem.getAttribute("key")];
    });
  });
});

const languagesArray = {
  "ru": {
    "main": "Главная",
    "about-company-title": "О компании",
    "production-title": "Продукция",
    "safety-title": "Безопасность",
    "ecology-title": "Экология",
    "contacts-title": "Контакты",
    "career": "Карьера",

    "main-title": "Пластиковые топливные системы",
    "main-description":
      'ООО "ДИПО" - лидер России по производству пластиковых топливных систем для автомобилей c экологическим стандартом Евро5 и Евро6.',
    "main-button": "Вакансии",
    "video-does-not-support": "Ваш браузер не поддерживает HTML5 видео.",

    "about-company-description":
      "ООО “ДИПО” основано в 2012 году как совместное предприятие между французской компанией Пластик Омниум и российской компанией Детальстройконструкция.",
    "more": "Подробнее",

    "ac shtangecircle": "Постоянный контроль качества",
    "ac gear": "Оптимизация процессов",
    "ac partnership": "Крепкое и долгосрочное партнерство",
    "ac expertize": "Высокая техническая экспертиза",
    "ac innovation": "Инновационные технические решения",
    "ac safety": "Безопасные условия труда",
    "ac leader":
      "Лидирующий производитель пластиковых топливных систем в России",
    "ac magic wand": "Лучшие в отрасли показатели операционной эффективности",
    "ac spectrum": "Весь спектр технологий под потребности заказчика",

    "mission-title": "Миссия",
    "mission-description-1":
      "1. Укреплять свои позиции как лидирующего поставщика 1-го уровня в производстве пластиковых топливных систем;",
    "mission-description-2":
      "2. Поставлять экологически чистую и безопасную продукцию;",
    "strategy-title": "Стратегия",

    "strategy-description-1": "1. Стать бесспорным лидером на рынке топливных баков.",
    "strategy-description-2": "2. Обеспечить целевые экономические показатели для среднесрочного развития.",
    "strategy-description-3": "3. Принять обязательства по Качеству и Удовлетворенности потребителя в стремлении к совершенству во всех сферах деятельности.",
    "strategy-description-4": "4. Стать отраслевым эталоном корпоративной социальной ответственности: быть безопаснее, чтобы не было несчастных случаев; быть более разнообразным, к полу, возрасту, культуре и этническому разнообразию на всех уровнях иерархии и во всех географических регионах.",

    "production-description": "Безопасные и качественные пластиковые топливные системы для автомобилей, а также производство локальных компонентов для них.",

    "clients-title": "Клиенты",
    
    "clients-description-1": "Нашими клиентами являются крупнейшие автопроизводители в России.",
    "clients-description-2": "Каждый 2ой автомобиль в стране оснащен нашим баком.",
    "clients-description-3": "Компания являлась поставщиком практически всех автомобильных производителей в России, таких как Тойота, Ниссан, Рено, Хёндэ, Форд.",

    "safety-description": "Мы ставим цели: 1. Достигнуть создания безаварийной и свободной от риска рабочей среды путём применения риск-ориентированного подхода для разработки превентивных мер и продвижения поведения в соответствии с 6 Обязательными Правилами по безопасности. 2. Улучшать рабочие условия, в стадиях разработки и серийного производства в соответствии с принципами эргономики. 3. Обеспечить гендерное равенство и увеличении числа женщин на руководящих позициях путём подбора и поддержки женщин за счет индивидуальных планов развития.",
    "safety-link-1": "Политика интегрированных систем менеджмента",
    "safety-link-1-description": "pdf, 410 Кб",

    "corruption-title": "Противодействие коррупции",
    "corruption-description-1":
      "Если вы располагаете информацией о фактах коррупционного поведения или иных нарушениях законодательства, просим сообщить об этом на ГОРЯЧУЮ ЛИНИЮ ПО ВОПРОСАМ КОМПЛАЕНС:",
    "corruption-description-2":
      "или любым удобным способом. Компания гарантирует соблюдение конфиденциальности вашего обращения.",
    "corruption-link": "Антикоррупционная политика ДИПО",
    "corruption-link-description": "pdf, 340 Кб",

    "ecology-description": "Мы бережно относимся к окружающей среде и полностью осознаем свою ответственность за то, чтобы свести к минимуму потенциальные последствия нашего воздействия на окружающую среду.",
    "ecology-link": "Экологическая политика",
    "ecology-link-description": "pdf, 132 Кб",

    "ecology-content-title": "Экология в цифрах",
    "ecology-content": "Мы предоставим данные: кол-во отходов передано на переработу, тем самым мы сохранили жизнь деревьям",

    "ecology-item-1":
      "Весь пластик от производства топливных баков используется повторно",
    "ecology-item-2":
      "Мы сортируем мусор и собираем батарейки для дальнейшей переработки",
    "ecology-item-3": "Наши баки соответствуют критериям Евро 6",

    "contacts-description-1": "Центральный",
    "contacts-description-2": "Почта",

    "option-1": "Тольятти",
    "option-2": "Санкт-Петербург (завод)",
    "option-3": "Ставрово (завод)",

    "agree": "я согласен на",
    "agree-link": "обработку персональных данных",
    "send": "Отправить",

    "popup-h2":
      "Общество с ограниченной ответственностью «ДСК Пластик Омниум Инержи» является совместным предприятием и было основано 30 марта 2012 года двумя компаниями:",
    "plastic-omnium-title": "Пластик Омниум",
    "plastic-omnium-description":
      "Мировой лидер по производству автомобильных пластиковых топливных систем Clean Energy Systems - подразделение группы Пластик Омниум и лидирующий поставщик автокомпонентов первого уровня - топливных систем и систем снижения выброса вредных веществ в атмосферу для производителей автомобилей. Штаб-квартира расположена в Лавале, Франция, по всему миру работают более 33000 человек на 127 заводе в 31 стране. Пластик Омниум благодаря дивизиону Clean Energy Systems находится в авангарде новых технологий, что является главным фактором в конкурентоспособности и успехе.",
    "dsk-title": "Детальстройконструкция (ДСК)",
    "dsk-description-1": "ДСК позиционируется на российском рынке автокомпонентов как динамично развивающееся предприятие, основными направлениями деятельности которого являются производство деталей интерьера автомобиля и деталей топливной системы. Предприятие создает условия для проектирования, развития и диверсификации производства новых конкурентоспособных видов продукции, повышения эффективности инновационного процесса при низких издержках производства в целях завоевания и закрепления лидирующего положения на рынке автомобильных компонентов. Предприятие способствуют становлению рыночной ориентации персонала и повышению его ключевых компетенций, соответствию социальных и морально – этических ценностей персонала потребительским ценностям.",
    "dsk-description-2": "Продукцией ДИПО являются пластиковые топливные системы автомобилей (топливные баки) для крупнейших автомобильных концернов, собирающих свои автомобили в России. На данный момент у ДИПО имеются 3 производственные площадки: в г. Тольятти (на территории ООО «ДСК») и пгт Ставрово. В данный момент ДИПО является лидирующим поставщиком топливных систем для автомобилестроения в России с нулевым показателем PPM брака у Потребителя.",

    "vacancies": "Вакансии",
    "form": "Анкета",
    "back": "Назад",

    "social-media": "Социальные сети",
    "address": "445043 Россия, Самарская область, Тольятти, ул. Северная, 39",

    "form-title": "Заполните форму",
    "select-vacancy": "Выберите вакансию",
    "vacancy-1": "Вакансия 1",
    "vacancy-2": "Вакансия 2",
    "vacancy-3": "Вакансия 3",
    "vacancy-4": "Вакансия 4",

    "more-details": "Показать еще",
    "show-more": "Подробнее",
  },

  "en": {
    "main": "Main",
    "about-company-title": "About company",
    "production-title": "Production",
    "safety-title": "Safety",
    "ecology-title": "Ecology",
    "contacts-title": "Contacts",
    "career": "Career",

    "main-title": "Plastic fuel systems",
    "main-description":
      "DIPO is the leader in Russia in the production of plastic fuel systems for cars, with ecological standard of Euro5 and Euro6.",
    "main-button": "Vacancies",
    "video-does-not-support": "Your browser doesn't support HTML5 video",

    "about-company-description":
      'LLC "DIPO" was founded in 2012 as a joint venture between the French company "Plastic Omnium Auto Inergy" and the Russian company Detalstroykonstruktsiya LLC.',
    "more": "More",

    "ac shtangecircle": "Continuous quality control",
    "ac gear": "Optimization and improvement of processes",
    "ac partnership": "Strong and long-term partnership",
    "ac expertize": "High technical expertise",
    "ac innovation": "Innovative technical solutions",
    "ac safety": "Safe working conditions",
    "ac leader": "Leading manufacturer of plastic fuel systems in Russia",
    "ac magic wand": "Industry-leading operating performance indicators",
    "ac spectrum":
      "The whole range of technologies for the needs of the customer",

    "mission-title": "Mission",
    "mission-description-1":
      "1. Strengthen our position as a leading 1st level supplier in the production of plastic fuel systems;",
    "mission-description-2":
      "2. Supply environmentally friendly and safe products;",

    "strategy-title": "Strategy",

    "strategy-description-1": "1. Become the undisputed leader in the fuel tank market.",
    "strategy-description-2": "2. Provide targeted economic indicators for medium-term development.",
    "strategy-description-3": "3. Commit to Quality and Customer Satisfaction in striving for excellence in all fields of activity.",
    "strategy-description-4": "4. To become an industry benchmark for corporate social responsibility: to be safer so that there are no accidents; to be more diverse, by gender, age, culture and ethnic diversity at all levels of the hierarchy and in all geographical regions.",

    "production-description": "Safe and high-quality plastic fuel systems for cars, as well as the production of local components for them.",

    "clients-title": "Clients",

    "clients-description-1": "Our clients are the largest automakers in Russia.",
    "clients-description-2": "Every 2nd car in the country is equipped with our tank.",
    "clients-description-3": "The company was a supplier of almost all automobile manufacturers in Russia, such as Toyota, Nissan, Renault, Hyundai, Ford.",

    "safety-description": "We set goals: 1. To achieve the creation of an accident-free and risk-free working environment by applying a risk-based approach to develop preventive measures and promote behavior in accordance with the 6 Mandatory Safety Rules. 2. To improve the working conditions in the stages of development and mass production in accordance with the principles of ergonomics. 3. Ensure gender equality and increase the number of women in leadership positions by selecting and supporting women through individual development plans.",
    "safety-link-1": "Policy of integrated management systems",
    "safety-link-1-description": "pdf, 410 Kb",

    "corruption-title": "Anti-corruption",
    "corruption-description-1":
      "If you have information about facts of corrupt behavior or other violations of the law, please report this to the COMPLIANCE HOTLINE:",
    "corruption-description-2":
      "or in any convenient way. The company guarantees the confidentiality of your application.",
    "corruption-link": "Anti-corruption policy of DIPO",
    "corruption-link-description": "pdf, 340 Kb",

    "ecology-description": "We take care of the environment and are fully aware of our responsibility to minimize the potential consequences of our environmental impact.",
    "ecology-link": "Environmental Policy of DIPO",
    "ecology-link-description": "pdf, 132 Kb",

    "ecology-content-title": "Ecology in numbers",
    "ecology-content": "We will provide data: the amount of waste was transferred for recycling, thereby we saved the life of trees",

    "ecology-item-1": "All plastic from the production of fuel tanks is reused",
    "ecology-item-2":
      "We sort waste and collect batteries for further recycling",
    "ecology-item-3": "Our tanks Correspond to Euro 6 criteria",

    "contacts-description-1": "Togliatti head office",
    "contacts-description-2": "Email",

    "option-1": "Togliatti head office",
    "option-2": "Saint-petersburg plant",
    "option-3": "Stavrovo plant",

    "agree": "I agree to the",
    "agree-link": "processing of personal data",
    "send": "Send",

    "popup-h2":
      'Limited Liability Company "DSK Plastic Omnium Inergy" is a joint venture and was founded on March 30, 2012 by two companies:',
    "plastic-omnium-title": "Plastic Omnium",
    "plastic-omnium-description":
      "World leader in automotive plastic fuel systems Clean Energy Systems is a division of the Plastic Omnium group, and a leading supplier of tier 1 automotive components - fuel systems and emission control systems for car manufacturers. Headquartered in Laval, France, it employs over 33,000 people worldwide in 127 factories in 31 countries. Plastic Omnium, thanks to the Clean Energy Systems division, is at the forefront of new technologies, which is the main factor in competitiveness and success.",
    "dsk-title": "Detalstroykonstruktsiya (DSK)",
    "dsk-description-1": "DSK is positioned in the Russian automotive components market as a dynamically developing enterprise, the main activities of which are the production of car interior parts and fuel system parts. The company creates conditions for the design, development and diversification of production of new competitive types of products, increasing the efficiency of the innovation process at low production costs in order to gain and consolidate a leading position in the automotive components market. The company contributes to the formation of a market orientation of personnel and the improvement of their key competencies, the conformity of social and moral and ethical values of personnel with consumer values.",
    "dsk-description-2": "DIPO's products are plastic car fuel systems (fuel tanks) for the largest automotive concerns assembling their cars in Russia. At the moment, DIPO has 3 production sites: in Tolyatti (on the territory of DSK LLC) and Stavrovo village. At the moment, DIPO is the leading supplier of fuel systems for the automotive industry in Russia with zero PPM of Consumer defects.",

    "vacancies": "Vacancies",
    "form": "Form",
    "back": "Back",

    "social-media": "Social media",
    "address": "445043 Russia, Samara region, Tolyatti, st. Severnaya, 39",

    "form-title": "Fill the form",
    "select-vacancy": "Select a vacancy",
    "vacancy-1": "Vacancy 1",
    "vacancy-2": "Vacancy 2",
    "vacancy-3": "Vacancy 3",
    "vacancy-4": "Vacancy 4",

    "more-details": "More details",
    "show-more": "More",
  },
};
