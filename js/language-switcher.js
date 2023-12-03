document.addEventListener('DOMContentLoaded', () => {
	const lang = document.querySelector('.lang');
	const translateParagraph = document.querySelector('.lang');

    var path = window.location.pathname;
    var page = path.split("/").pop();

	translateParagraph.addEventListener('click', () => {
		// Меняет язык и изображение
		if (lang.id === 'ru') {
			lang.id = 'en'
			translateParagraph.textContent = 'en';
            if (page === 'index.html') {
                document.getElementsByName('Msg')[0].placeholder='Message';
            }
		} else {
			lang.id = 'ru'
			translateParagraph.textContent = 'ru';
            if (page === 'index.html') {
                document.getElementsByName('Msg')[0].placeholder='Сообщение';
            }
		}

		// Применяет тексты для каждого класса lang
		document.querySelectorAll('.translate').forEach(innerItem => {
			innerItem.textContent = languagesArray[lang.id][innerItem.getAttribute('key')];
		});
	});

    const mobileLang = document.querySelector('.lang-mobile');
    const mobiletranslateParagraph = document.querySelector('.lang-mobile');

    mobiletranslateParagraph.addEventListener('click', () => {
        if (mobileLang.id === 'ru-mobile') {
			mobileLang.id = 'en-mobile'
			mobiletranslateParagraph.textContent = 'en';
            if (page === 'index.html') {
                document.getElementsByName('Msg')[0].placeholder='Message';
            }
		} else {
			mobileLang.id = 'ru-mobile';
			mobiletranslateParagraph.textContent = 'ru';
            if (page === 'index.html') {
                document.getElementsByName('Msg')[0].placeholder='Сообщение';
            }
		}

        document.querySelectorAll('.translate').forEach(innerItem => {
            innerItem.textContent = languagesArray[mobileLang.id][innerItem.getAttribute('key')];
        });
    });
});

const languagesArray = {
	'ru': {
		'main': 'Главная',
		'about-company-title': 'О компании',
		'production-title': 'Продукция',
		'safety-title': 'Безопасность',
		'ecology-title': 'Экология',
		'contacts-title': 'Контакты',

		'main-title': 'Пластиковые топливные системы',
		'main-description': 'ООО "ДИПО" - лидер России по производству пластиковых топливных систем для автомобилей c экологическим стандартом Евро5 и Евро6.',
		'main-button': 'Вакансии',
		'video-does-not-support': 'Ваш браузер не поддерживает HTML5 видео.',

		'about-company-description': 'ООО “ДИПО” основано в 2012 году как совместное предприятие между французской компанией Пластик Омниум и российской компанией Детальстройконструкция.',
		'more': 'Подробнее',

		'ac shtangecircle': 'Постоянный контроль качества',
		'ac gear': 'Оптимизация процессов',
		'ac partnership': 'Крепкое и долгосрочное партнерство',
		'ac expertize': 'Высокая техническая экспертиза',
		'ac innovation': 'Инновационные технические решения',
		'ac safety': 'Безопасные условия труда',
		'ac leader': 'Лидирующий производитель пластиковых топливных систем в России',
		'ac magic wand': 'Лучшие в отрасли показатели операционной эффективности',
		'ac spectrum': 'Весь спектр технологий под потребности заказчика',

		'mission-title': 'Миссия',
		'mission-description-1': '1. Укреплять свои позиции как лидирующего поставщика 1-го уровня в производстве пластиковых топливных систем;',
		'mission-description-2': '2. Поставлять экологически чистую и безопасную продукцию;',
		'strategy-title': 'Стратегия',
		'strategy-description-1': 'ДИПО инвестирует в научно - исследовательскую деятельность, разработку и развитие мощностей для удержания лидирующей позиции в России',
		'strategy-description-2': 'Для реализации своей стратегии мы применяем стандарты и инструменты IATF 16949, ISO 14001, IQSR, Lean production, MMOG/LE.',

		'production-description-1': 'Компания Plastic Omnium, учредитель ООО «ДИПО» была первой, кто использовал экструзионно-выдувное формование для производства пластиковых топливных баков. Это позволяет изготавливать полые пластиковые баки со сложной формой стала ведущей для производства автомобильных топливных баков.',
		'production-description-2': 'Сегодня, более 70% новых автомобилей, оснащены пластиковыми топливными системами.',

		'clients-title': 'Клиенты',
		'clients-description': 'Нашими клиентами являются крупнейшие автопроизводители в России. Каждый 2ой автомобиль в стране оснащен нашим баком.',

		'safety-description': 'Для гарантии соответствующего и последовательного внедрения во всем мире системы управления охраной труда дивизион Clean Energy System обязует все производственные площадки сертифицироваться на соответствие стандартов ISO 45001 "Охрана труда и техники безопасности" у независимых аккредитованных организаций в рамках интегрированной системы менеджмента.',

		'safety-link-1': 'Политика в области охраны труда ДИПО',
		'safety-link-1-description': 'pdf, 604 Кб',
		'safety-link-2': 'Локальное приложение к IMS',
		'safety-link-2-description': 'pdf, 183 Кб',

		'corruption-title': 'Противодействие коррупции',
		'corruption-description-1': 'Если вы располагаете информацией о фактах коррупционного поведения или иных нарушениях законодательства, просим сообщить об этом на ГОРЯЧУЮ ЛИНИЮ ПО ВОПРОСАМ КОМПЛАЕНС:',
		'corruption-description-2': 'или любым удобным способом. Компания гарантирует соблюдение конфиденциальности вашего обращения.',
		'corruption-link': 'Антикоррупционная политика ДИПО',
		'corruption-link-description': 'pdf, 340 Кб',

		'ecology-description': 'Мы бережно относимся к окружающей среде и полностью осознаем свою ответственность за то, чтобы свести к минимуму последствия нашего производства.',
		'ecology-link': 'Экологическая политика',
		'ecology-link-description': 'pdf, 132 Кб',

		'ecology-list-title': 'Наша экологическая политика',
		'ecology-list-1': 'Техническое переоборудование производства',
		'ecology-list-2': 'Проведение производственного экологического контроля за соблюдением нормативов сбросов',
		'ecology-list-3': 'Уменьшение удельных объемов отходов производства и потребления',
		'ecology-list-4': 'Экологическое образование персонала',
		'ecology-list-5': 'Рациональное использование сырья и ресурсов',
		'ecology-list-6': 'Экологический менеджмент в соответствии с ISO 14001',
		'ecology-list-7': 'Своевременное прогнозирование и снижение рисков аварийных ситуаций и их последствий',
		'ecology-list-8': 'Информирование работников о результатах природоохранной деятельности.',
        'ecology-item-1': 'Весь пластик от производства топливных баков используется повторно',
        'ecology-item-2': 'Мы сортируем мусор и собираем батарейки для дальнейшей переработки',
        'ecology-item-3': 'Наши баки соответствуют критериям Евро 6',

        'contacts-description-1': 'Центральный',
        'contacts-description-2': 'Почта',

        'option-1': 'Тольятти',
        'option-2': 'Санкт-Петербург (завод)',
        'option-3': 'Ставрово (завод)',

        'agree': 'я согласен на',
        'agree-link': 'обработку персональных данных',
        'send': 'Отправить',

        'popup-h2': 'Общество с ограниченной ответственностью «ДСК Пластик Омниум Инержи» является совместным предприятием и было основано 30 марта 2012 года двумя компаниями:',
        'plastic-omnium-title': 'Пластик Омниум',
        'plastic-omnium-description': 'Мировой лидер по производству автомобильных пластиковых топливных систем Clean Energy Systems - подразделение группы Пластик Омниум и лидирующий поставщик автокомпонентов первого уровня - топливных систем и систем снижения выброса вредных веществ в атмосферу для производителей автомобилей. Штаб-квартира расположена в Лавале, Франция, по всему миру работают более 33000 человек на 127 заводе в 31 стране. Пластик Омниум благодаря дивизиону Clean Energy Systems находится в авангарде новых технологий, что является главным фактором в конкурентоспособности и успехе.',
        'dsk-title': 'Детальстройконструкция (ДСК)',
        'dsk-description-1': 'ДСК позиционируется на российском рынке автокомпонентов как динамично развивающееся предприятие, основными направлениями деятельности которого являются производство деталей интерьера автомобиля и деталей топливной системы. Предприятие создает условия для проектирования, развития и диверсификации производства новых конкурентоспособных видов продукции, повышения эффективности инновационного процесса при низких издержках производства в целях завоевания и закрепления лидирующего положения на рынке автомобильных компонентов. Предприятие способствуют становлению рыночной ориентации персонала и повышению его ключевых компетенций, соответствию социальных и морально – этических ценностей персонала потребительским ценностям.',
        'dsk-description-2': 'Продукцией ДИПО являются пластиковые топливные системы автомобилей (топливные баки) для крупнейших автомобильных концернов, собирающих свои автомобили в России. На данный момент у ДИПО имеются 3 производственные площадки: в г. Тольятти (на территории ООО «ДСК»), пгт Ставрово и г. Санкт-Петербург. В данный момент ДИПО является лидирующим поставщиком топливных систем для автомобилестроения в России с нулевым показателем PPM брака у Потребителя.',
        
        'vacancies': 'Вакансии',
        'form': 'Анкета',
        'back': 'Назад',
    },

	'en': {
		'main': 'Main',
		'about-company-title': 'About company',
		'production-title': 'Production',
		'safety-title': 'Safety',
		'ecology-title': 'Ecology',
		'contacts-title': 'Contacts',

		'main-title': 'Plastic fuel systems',
		'main-description': 'DIPO is the leader in Russia in the production of plastic fuel systems for cars, with ecological standard of Euro5 and Euro6.',
		'main-button': 'Vacancies',
		'video-does-not-support': "Your browser doesn't support HTML5 video",

		'about-company-description': 'LLC "DIPO" was founded in 2012 as a joint venture between the French company "Plastic Omnium Auto Inergy" and the Russian company Detalstroykonstruktsiya LLC.',
		'more': 'More',

		'ac shtangecircle': 'Continuous quality control',
		'ac gear': 'Optimization and improvement of processes',
		'ac partnership': 'Strong and long-term partnership',
		'ac expertize': 'High technical expertise',
		'ac innovation': 'Innovative technical solutions',
		'ac safety': 'Safe working conditions',
		'ac leader': 'Leading manufacturer of plastic fuel systems in Russia',
		'ac magic wand': 'Industry-leading operating performance indicators',
		'ac spectrum': 'The whole range of technologies for the needs of the customer',

		'mission-title': 'Mission',
		'mission-description-1': '1. Strengthen our position as a leading 1st level supplier in the production of plastic fuel systems;',
		'mission-description-2': '2. Supply environmentally friendly and safe products;',
		'strategy-title': 'Strategy',
		'strategy-description-1': 'DIPO invests in research and development activities, development and capacity development to maintain a leading position in Russia',
		'strategy-description-2': 'To implement our strategy, we use standards and tools IATF 16949, ISO 14001, IQSR, Lean production, MMOG/LE.',

		'production-description-1': 'Plastic Omnium, the founder of DIPO LLC, was the first to use extrusion blow molding to produce plastic fuel tanks. This allows the production of hollow plastic tanks with complex shapes, which has become leading for the production of automobile fuel tanks.',
		'production-description-2': 'Today, more than 70% of new cars are equipped with plastic fuel systems.',

		'clients-title': 'Clients',
		'clients-description': 'Our clients are the largest automakers in Russia. Every second car in the country is equipped with our tank.',

		'safety-description': 'To ensure the appropriate and consistent implementation of an OSH management system worldwide, the Clean Energy System division requires all production sites to be certified for compliance with ISO 14001 «Environmental Management System» and ISO 45001 «Occupational Health and Safety Standards» by independent accredited organizations, within the framework of integrated management system.',

		'safety-link-1': 'Occupational Safety and Health Policy of DIPO',
		'safety-link-1-description': 'pdf, 604 Kb',
		'safety-link-2': 'Local application to IMS',
		'safety-link-2-description': 'pdf, 183 Kb',

		'corruption-title': 'Anti-corruption',
		'corruption-description-1': 'If you have information about facts of corrupt behavior or other violations of the law, please report this to the COMPLIANCE HOTLINE:',
		'corruption-description-2': 'or in any convenient way. The company guarantees the confidentiality of your application.',
		'corruption-link': 'Anti-corruption policy of DIPO',
		'corruption-link-description': 'pdf, 340 Kb',

		'ecology-description': 'We respect the environment and are fully aware of our responsibility to minimize the impact of our production.',
		'ecology-link': 'Environmental Policy of DIPO',
		'ecology-link-description': 'pdf, 132 Kb',

		'ecology-list-title': 'Our environmental policy',
        'ecology-list-1': 'Technical re-equipment of production',
        'ecology-list-2': 'Conducting industrial environmental control over compliance with discharge standards',
        'ecology-list-3': 'Reducing specific volumes of production and consumption waste',
        'ecology-list-4': 'Ecological education of personnel',
        'ecology-list-5': 'Rational use of raw materials and resources',
        'ecology-list-6': 'Environmental management in accordance with ISO 14001',
        'ecology-list-7': 'Timely forecasting and reduction of the risks of emergencies and their consequences',
        'ecology-list-8': 'Informing employees about the results of environmental protection activities.',
        'ecology-item-1': 'All plastic from the production of fuel tanks is reused',
        'ecology-item-2': 'We sort waste and collect batteries for further recycling',
        'ecology-item-3': 'Our tanks Correspond to Euro 6 criteria',

        'contacts-description-1': 'Togliatti head office',
        'contacts-description-2': 'Email',

        'option-1': 'Togliatti head office',
        'option-2': 'Saint-petersburg plant',
        'option-3': 'Stavrovo plant',

        'agree': 'I agree to the',
        'agree-link': 'processing of personal data',
        'send': 'Send',

        'popup-h2': 'Limited Liability Company "DSK Plastic Omnium Inergy" is a joint venture and was founded on March 30, 2012 by two companies:',
        'plastic-omnium-title': 'Plastic Omnium',
        'plastic-omnium-description': 'World leader in automotive plastic fuel systems Clean Energy Systems is a division of the Plastic Omnium group, and a leading supplier of tier 1 automotive components - fuel systems and emission control systems for car manufacturers. Headquartered in Laval, France, it employs over 33,000 people worldwide in 127 factories in 31 countries. Plastic Omnium, thanks to the Clean Energy Systems division, is at the forefront of new technologies, which is the main factor in competitiveness and success.',
        'dsk-title': 'Detalstroykonstruktsiya (DSK)',
        'dsk-description-1': 'DSK is positioned in the Russian auto components market as a dynamically developing enterprise, the main activities of which are the production of car interior parts and fuel system parts. The enterprise creates conditions for the design, development and diversification of production of new competitive types of products, increasing the efficiency of the innovation process at low production costs in order to gain and consolidate a leading position in the automotive components market. The enterprise contributes to the formation of the market orientation of personnel and the improvement of their key competencies, compliance with the social and moral - ethical values ​​of the personnel, consumer values.',
        'dsk-description-2': 'DIPO products are plastic car fuel systems (fuel tanks) for the largest car concerns that assemble their cars in Russia. At the moment, DIPO has 3 production sites: Togliatti (on the territory of DSK LLC), Stavrovo town and St. Petersburg. At the moment, DIPO is the leading supplier of fuel systems for the automotive industry in Russia with a zero PPM defect for the Consumer.',
    
        'vacancies': 'Vacancies',
        'form': 'Form',
        'back': 'Back',
    },

	'ru-mobile': {
		'main': 'Главная',
		'about-company-title': 'О компании',
		'production-title': 'Продукция',
		'safety-title': 'Безопасность',
		'ecology-title': 'Экология',
		'contacts-title': 'Контакты',

		'main-title': 'Пластиковые топливные системы',
		'main-description': 'ООО "ДИПО" - лидер России по производству пластиковых топливных систем для автомобилей c экологическим стандартом Евро5 и Евро6.',
		'main-button': 'Вакансии',
		'video-does-not-support': 'Ваш браузер не поддерживает HTML5 видео.',

		'about-company-description': 'ООО “ДИПО” основано в 2012 году как совместное предприятие между французской компанией Пластик Омниум и российской компанией Детальстройконструкция.',
		'more': 'Подробнее',

		'ac shtangecircle': 'Постоянный контроль качества',
		'ac gear': 'Оптимизация процессов',
		'ac partnership': 'Крепкое и долгосрочное партнерство',
		'ac expertize': 'Высокая техническая экспертиза',
		'ac innovation': 'Инновационные технические решения',
		'ac safety': 'Безопасные условия труда',
		'ac leader': 'Лидирующий производитель пластиковых топливных систем в России',
		'ac magic wand': 'Лучшие в отрасли показатели операционной эффективности',
		'ac spectrum': 'Весь спектр технологий под потребности заказчика',

		'mission-title': 'Миссия',
		'mission-description-1': '1. Укреплять свои позиции как лидирующего поставщика 1-го уровня в производстве пластиковых топливных систем;',
		'mission-description-2': '2. Поставлять экологически чистую и безопасную продукцию;',
		'strategy-title': 'Стратегия',
		'strategy-description-1': 'ДИПО инвестирует в научно - исследовательскую деятельность, разработку и развитие мощностей для удержания лидирующей позиции в России',
		'strategy-description-2': 'Для реализации своей стратегии мы применяем стандарты и инструменты IATF 16949, ISO 14001, IQSR, Lean production, MMOG/LE.',

		'production-description-1': 'Компания Plastic Omnium, учредитель ООО «ДИПО» была первой, кто использовал экструзионно-выдувное формование для производства пластиковых топливных баков. Это позволяет изготавливать полые пластиковые баки со сложной формой стала ведущей для производства автомобильных топливных баков.',
		'production-description-2': 'Сегодня, более 70% новых автомобилей, оснащены пластиковыми топливными системами.',

		'clients-title': 'Клиенты',
		'clients-description': 'Нашими клиентами являются крупнейшие автопроизводители в России. Каждый 2ой автомобиль в стране оснащен нашим баком.',

		'safety-description': 'Для гарантии соответствующего и последовательного внедрения во всем мире системы управления охраной труда дивизион Clean Energy System обязует все производственные площадки сертифицироваться на соответствие стандартов ISO 45001 "Охрана труда и техники безопасности" у независимых аккредитованных организаций в рамках интегрированной системы менеджмента.',

		'safety-link-1': 'Политика в области охраны труда ДИПО',
		'safety-link-1-description': 'pdf, 604 Кб',
		'safety-link-2': 'Локальное приложение к IMS',
		'safety-link-2-description': 'pdf, 183 Кб',

		'corruption-title': 'Противодействие коррупции',
		'corruption-description-1': 'Если вы располагаете информацией о фактах коррупционного поведения или иных нарушениях законодательства, просим сообщить об этом на ГОРЯЧУЮ ЛИНИЮ ПО ВОПРОСАМ КОМПЛАЕНС:',
		'corruption-description-2': 'или любым удобным способом. Компания гарантирует соблюдение конфиденциальности вашего обращения.',
		'corruption-link': 'Антикоррупционная политика ДИПО',
		'corruption-link-description': 'pdf, 340 Кб',

		'ecology-description': 'Мы бережно относимся к окружающей среде и полностью осознаем свою ответственность за то, чтобы свести к минимуму последствия нашего производства.',
		'ecology-link': 'Экологическая политика',
		'ecology-link-description': 'pdf, 132 Кб',

		'ecology-list-title': 'Наша экологическая политика',
		'ecology-list-1': 'Техническое переоборудование производства',
		'ecology-list-2': 'Проведение производственного экологического контроля за соблюдением нормативов сбросов',
		'ecology-list-3': 'Уменьшение удельных объемов отходов производства и потребления',
		'ecology-list-4': 'Экологическое образование персонала',
		'ecology-list-5': 'Рациональное использование сырья и ресурсов',
		'ecology-list-6': 'Экологический менеджмент в соответствии с ISO 14001',
		'ecology-list-7': 'Своевременное прогнозирование и снижение рисков аварийных ситуаций и их последствий',
		'ecology-list-8': 'Информирование работников о результатах природоохранной деятельности.',
        'ecology-item-1': 'Весь пластик от производства топливных баков используется повторно',
        'ecology-item-2': 'Мы сортируем мусор и собираем батарейки для дальнейшей переработки',
        'ecology-item-3': 'Наши баки соответствуют критериям Евро 6',

        'contacts-description-1': 'Центральный',
        'contacts-description-2': 'Почта',

        'option-1': 'Тольятти',
        'option-2': 'Санкт-Петербург (завод)',
        'option-3': 'Ставрово (завод)',

        'agree': 'я согласен на',
        'agree-link': 'обработку персональных данных',
        'send': 'Отправить',

        'popup-h2': 'Общество с ограниченной ответственностью «ДСК Пластик Омниум Инержи» является совместным предприятием и было основано 30 марта 2012 года двумя компаниями:',
        'plastic-omnium-title': 'Пластик Омниум',
        'plastic-omnium-description': 'Мировой лидер по производству автомобильных пластиковых топливных систем Clean Energy Systems - подразделение группы Пластик Омниум и лидирующий поставщик автокомпонентов первого уровня - топливных систем и систем снижения выброса вредных веществ в атмосферу для производителей автомобилей. Штаб-квартира расположена в Лавале, Франция, по всему миру работают более 33000 человек на 127 заводе в 31 стране. Пластик Омниум благодаря дивизиону Clean Energy Systems находится в авангарде новых технологий, что является главным фактором в конкурентоспособности и успехе.',
        'dsk-title': 'Детальстройконструкция (ДСК)',
        'dsk-description-1': 'ДСК позиционируется на российском рынке автокомпонентов как динамично развивающееся предприятие, основными направлениями деятельности которого являются производство деталей интерьера автомобиля и деталей топливной системы. Предприятие создает условия для проектирования, развития и диверсификации производства новых конкурентоспособных видов продукции, повышения эффективности инновационного процесса при низких издержках производства в целях завоевания и закрепления лидирующего положения на рынке автомобильных компонентов. Предприятие способствуют становлению рыночной ориентации персонала и повышению его ключевых компетенций, соответствию социальных и морально – этических ценностей персонала потребительским ценностям.',
        'dsk-description-2': 'Продукцией ДИПО являются пластиковые топливные системы автомобилей (топливные баки) для крупнейших автомобильных концернов, собирающих свои автомобили в России. На данный момент у ДИПО имеются 3 производственные площадки: в г. Тольятти (на территории ООО «ДСК»), пгт Ставрово и г. Санкт-Петербург. В данный момент ДИПО является лидирующим поставщиком топливных систем для автомобилестроения в России с нулевым показателем PPM брака у Потребителя.',
    
        'vacancies': 'Вакансии',
        'form': 'Анкета',
        'back': 'Назад',
    },

	'en-mobile': {
		'main': 'Main',
		'about-company-title': 'About company',
		'production-title': 'Production',
		'safety-title': 'Safety',
		'ecology-title': 'Ecology',
		'contacts-title': 'Contacts',

		'main-title': 'Plastic fuel systems',
		'main-description': 'DIPO is the leader in Russia in the production of plastic fuel systems for cars, with ecological standard of Euro5 and Euro6.',
		'main-button': 'Vacancies',
		'video-does-not-support': "Your browser doesn't support HTML5 video",

		'about-company-description': 'LLC "DIPO" was founded in 2012 as a joint venture between the French company "Plastic Omnium Auto Inergy" and the Russian company Detalstroykonstruktsiya LLC.',
		'more': 'More',

		'ac shtangecircle': 'Continuous quality control',
		'ac gear': 'Optimization and improvement of processes',
		'ac partnership': 'Strong and long-term partnership',
		'ac expertize': 'High technical expertise',
		'ac innovation': 'Innovative technical solutions',
		'ac safety': 'Safe working conditions',
		'ac leader': 'Leading manufacturer of plastic fuel systems in Russia',
		'ac magic wand': 'Industry-leading operating performance indicators',
		'ac spectrum': 'The whole range of technologies for the needs of the customer',

		'mission-title': 'Mission',
		'mission-description-1': '1. Strengthen our position as a leading 1st level supplier in the production of plastic fuel systems;',
		'mission-description-2': '2. Supply environmentally friendly and safe products;',
		'strategy-title': 'Strategy',
		'strategy-description-1': 'DIPO invests in research and development activities, development and capacity development to maintain a leading position in Russia',
		'strategy-description-2': 'To implement our strategy, we use standards and tools IATF 16949, ISO 14001, IQSR, Lean production, MMOG/LE.',

		'production-description-1': 'Plastic Omnium, the founder of DIPO LLC, was the first to use extrusion blow molding to produce plastic fuel tanks. This allows the production of hollow plastic tanks with complex shapes, which has become leading for the production of automobile fuel tanks.',
		'production-description-2': 'Today, more than 70% of new cars are equipped with plastic fuel systems.',

		'clients-title': 'Clients',
		'clients-description': 'Our clients are the largest automakers in Russia. Every second car in the country is equipped with our tank.',

		'safety-description': 'To ensure the appropriate and consistent implementation of an OSH management system worldwide, the Clean Energy System division requires all production sites to be certified for compliance with ISO 14001 «Environmental Management System» and ISO 45001 «Occupational Health and Safety Standards» by independent accredited organizations, within the framework of integrated management system.',

		'safety-link-1': 'Occupational Safety and Health Policy of DIPO',
		'safety-link-1-description': 'pdf, 604 Kb',
		'safety-link-2': 'Local application to IMS',
		'safety-link-2-description': 'pdf, 183 Kb',

		'corruption-title': 'Anti-corruption',
		'corruption-description-1': 'If you have information about facts of corrupt behavior or other violations of the law, please report this to the COMPLIANCE HOTLINE:',
		'corruption-description-2': 'or in any convenient way. The company guarantees the confidentiality of your application.',
		'corruption-link': 'Anti-corruption policy of DIPO',
		'corruption-link-description': 'pdf, 340 Kb',

		'ecology-description': 'We respect the environment and are fully aware of our responsibility to minimize the impact of our production.',
		'ecology-link': 'Environmental Policy of DIPO',
		'ecology-link-description': 'pdf, 132 Kb',

		'ecology-list-title': 'Our environmental policy',
        'ecology-list-1': 'Technical re-equipment of production',
        'ecology-list-2': 'Conducting industrial environmental control over compliance with discharge standards',
        'ecology-list-3': 'Reducing specific volumes of production and consumption waste',
        'ecology-list-4': 'Ecological education of personnel',
        'ecology-list-5': 'Rational use of raw materials and resources',
        'ecology-list-6': 'Environmental management in accordance with ISO 14001',
        'ecology-list-7': 'Timely forecasting and reduction of the risks of emergencies and their consequences',
        'ecology-list-8': 'Informing employees about the results of environmental protection activities.',
        'ecology-item-1': 'All plastic from the production of fuel tanks is reused',
        'ecology-item-2': 'We sort waste and collect batteries for further recycling',
        'ecology-item-3': 'Our tanks Correspond to Euro 6 criteria',

        'contacts-description-1': 'Togliatti head office',
        'contacts-description-2': 'Email',

        'option-1': 'Togliatti head office',
        'option-2': 'Saint-petersburg plant',
        'option-3': 'Stavrovo plant',

        'agree': 'I agree to the',
        'agree-link': 'processing of personal data',
        'send': 'Send',

        'popup-h2': 'Limited Liability Company "DSK Plastic Omnium Inergy" is a joint venture and was founded on March 30, 2012 by two companies:',
        'plastic-omnium-title': 'Plastic Omnium',
        'plastic-omnium-description': 'World leader in automotive plastic fuel systems Clean Energy Systems is a division of the Plastic Omnium group, and a leading supplier of tier 1 automotive components - fuel systems and emission control systems for car manufacturers. Headquartered in Laval, France, it employs over 33,000 people worldwide in 127 factories in 31 countries. Plastic Omnium, thanks to the Clean Energy Systems division, is at the forefront of new technologies, which is the main factor in competitiveness and success.',
        'dsk-title': 'Detalstroykonstruktsiya (DSK)',
        'dsk-description-1': 'DSK is positioned in the Russian auto components market as a dynamically developing enterprise, the main activities of which are the production of car interior parts and fuel system parts. The enterprise creates conditions for the design, development and diversification of production of new competitive types of products, increasing the efficiency of the innovation process at low production costs in order to gain and consolidate a leading position in the automotive components market. The enterprise contributes to the formation of the market orientation of personnel and the improvement of their key competencies, compliance with the social and moral - ethical values ​​of the personnel, consumer values.',
        'dsk-description-2': 'DIPO products are plastic car fuel systems (fuel tanks) for the largest car concerns that assemble their cars in Russia. At the moment, DIPO has 3 production sites: Togliatti (on the territory of DSK LLC), Stavrovo town and St. Petersburg. At the moment, DIPO is the leading supplier of fuel systems for the automotive industry in Russia with a zero PPM defect for the Consumer.',
    
        'vacancies': 'Vacancies',
        'form': 'Form',
        'back': 'Back',
    },
}
