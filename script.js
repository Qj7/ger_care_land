// Language System
const translations = {
    de: {
        nav: {
            home: 'Home',
            services: 'Leistungen',
            about: 'Über uns',
            jobs: 'Bewerbung',
            contact: 'Kontakt'
        },
        hero: {
            title: 'Gesundheitspflege New Day',
            subtitle: 'Mit Vertrauen und Kompetenz in den neuen Tag',
            description1: 'Zuhause ist ein Ort voller Geborgenheit – und genau dort sollen Sie bleiben dürfen.',
            description2: 'Das Team von Gesundheit Pflege New Day begleitet Sie mit Herz, Erfahrung und Fachwissen, damit Sie auch bei Pflegebedarf in Ihrer vertrauten Umgebung leben können.',
            description3: 'Wir nehmen uns Zeit für Sie, beraten individuell und unterstützen Sie liebevoll im Alltag – zuverlässig, menschlich und professionell.',
            description4: 'Rufen Sie uns gerne an!',
            description5: 'Wir informieren Sie kostenfrei und unverbindlich über alle Fragen rund um die häusliche Pflege.',
            description6: 'Auf Wunsch kommen wir auch zu Ihnen nach Hause, um Sie persönlich zu beraten.',
            contactButton: 'Kontakt aufnehmen',
            servicesButton: 'Unsere Leistungen'
        },
        contactInfo: {
            title: 'Für Sie erreichbar',
            phone: 'Telefon',
            email: 'Email'
        },
        services: {
            title: 'Unsere Leistungen',
            subtitle: 'Individuelle häusliche Pflege schafft die Grundlage für mehr Lebensqualität und Selbstständigkeit – auch im Alter.',
            description: 'Wir kommen zu Ihnen und bieten unsere Leistungen dort an, wo Sie zuhause sind.',
            description2: 'Durch unsere liebevolle und fachgerechte Betreuung kann ein Krankenhausaufenthalt oft verkürzt oder sogar vermieden werden.',
            accordionLabel: 'Vollständige Leistungsliste anzeigen',
            highlightsA11y: 'Kurzüberblick Leistungen',
            behandlungspflege: {
                title: 'Behandlungspflege',
                description: 'Die Behandlungspflege nach SGB V umfasst alle ärztlich verordneten medizinischen Maßnahmen, die der Sicherung und Unterstützung der ärztlichen Behandlung dienen.',
                description2: 'Unser examiniertes Fachpersonal führt diese Tätigkeiten mit höchster Sorgfalt und Fachkompetenz aus.',
                description3: 'In enger Zusammenarbeit mit Hausärzten, Kliniken und Krankenkassen gewährleisten wir eine optimale Versorgung und ein hohes Maß an medizinischer Sicherheit.',
                subtitle: 'Unsere Leistungen im Bereich der Behandlungspflege:',
                items: [
                    'Injektionen',
                    'Wundversorgung und Verbände',
                    'Katheter legen und wechseln',
                    'Physikalische Maßnahmen (z. B. Einreibungen)',
                    'Dekubitusversorgung',
                    'Verabreichung von Augentropfen',
                    'Medikamentenkontrolle und -gabe',
                    'Absaugen',
                    'Stomaversorgung',
                    'Einläufe',
                    'Enterale Ernährung über PEG-Sonde',
                    'Parenterale Ernährung über Port'
                ]
            },
            grundpflege: {
                title: 'Grundpflege',
                description: 'Die körperbezogene Pflege ist ein wesentlicher Bestandteil unserer täglichen Arbeit.',
                description2: 'Im Sinne des SGB XI unterstützen wir Sie einfühlsam und zuverlässig in den Bereichen Körperpflege, Ernährung, Mobilität und Prophylaxe.',
                subtitle: 'Unsere Leistungen im Bereich der Grundpflege:',
                items: [
                    'Körperpflege (im Bett, am Waschbecken, Dusche, Teil- oder Vollbad)',
                    'Haut- und Haarpflege',
                    'An- und Auskleiden',
                    'Mobilisation und Betten richten',
                    'Mundpflege und Rasur',
                    'Lagerung und Krankenbeobachtung',
                    'Vorbeugende Maßnahmen (z. B. gegen Druckgeschwüre, Gelenkversteifungen, Lungenentzündungen)',
                    'Unterstützung bei der Nahrungsaufnahme'
                ]
            },
            hauswirtschaft: {
                title: 'Hauswirtschaftliche Versorgung',
                description: 'Selbstständigkeit bedeutet auch, den Alltag im eigenen Zuhause gut bewältigen zu können.',
                description2: 'Wir unterstützen Sie mit praktischer Hilfe im Haushalt, damit Sie in einer gepflegten und angenehmen Umgebung leben können.',
                subtitle: 'Unsere hauswirtschaftlichen Leistungen:',
                items: [
                    'Reinigung der Wohnung',
                    'Wäschepflege (Waschen, Bügeln, Zusammenlegen)',
                    'Einkaufen und Besorgungen',
                    'Zubereitung von Mahlzeiten',
                    'Unterstützung bei der Alltagsorganisation',
                    'Begleitung zu Arztterminen oder Spaziergängen'
                ]
            },
            wundheilung: {
                title: 'Wundheilversorgung',
                description: 'Eine fachgerechte Wundversorgung ist entscheidend für Heilung, Wohlbefinden und Lebensqualität.',
                description2: 'Unser speziell geschultes Pflegepersonal kümmert sich um die Behandlung akuter und chronischer Wunden nach aktuellen medizinischen Standards.',
                subtitle: 'Unsere Leistungen im Bereich der Wundheilversorgung:',
                items: [
                    'Fachgerechte Beurteilung und Dokumentation von Wunden',
                    'Auswahl und Anwendung geeigneter Verbandmaterialien',
                    'Regelmäßige Kontrolle des Heilungsverlaufs',
                    'Zusammenarbeit mit Ärzten und Wundexperten',
                    'Beratung zur Hautpflege und Wundprävention'
                ]
            },
            consultation: {
                title: 'Lassen Sie sich von uns beraten',
                description: 'Wir unterstützen pflegebedürftige Menschen und ihre Angehörigen einfühlsam und kompetent – sowohl bei neu auftretender Pflegesituation als auch bei länger bestehender Pflegebedürftigkeit.',
                description2: 'Gemeinsam finden wir die besten Lösungen für Ihren Alltag zu Hause.'
            }
        },
        about: {
            title: 'Über uns',
            wichtig: {
                title: 'Was uns wichtig ist',
                description: 'Bei Gesundheit Pflege New Day stehen menschliche Werte im Mittelpunkt.',
                description2: 'Respekt, Einfühlungsvermögen und die Berücksichtigung der physischen, psychischen und seelischen Bedürfnisse jedes Menschen sind für uns selbstverständlich.',
                description3: 'Menschlichkeit und Professionalität bilden die Basis unserer Arbeit – wir begleiten Sie mit Herz, Kompetenz und Engagement in den neuen Tag.'
            },
            wer: {
                title: 'Wer wir sind',
                description: 'Wir sind ein neu gegründeter ambulanter Pflegedienst, der Menschen ein selbstbestimmtes und würdevolles Leben zu Hause ermöglicht.',
                description2: 'Unser Team besteht aus hochqualifizierten Fachkräften, die über fundiertes Wissen, Erfahrung und die persönlichen Qualitäten verfügen, um Pflege individuell und einfühlsam zu gestalten.'
            },
            wie: {
                title: 'Wie wir arbeiten',
                description: 'Wir arbeiten eng mit Hausärzten, Fachärzten und weiteren medizinischen Einrichtungen zusammen, um eine optimale Versorgung sicherzustellen.',
                description2: 'Darüber hinaus kooperieren wir mit allen Krankenkassen, damit unsere Leistungen für Sie unkompliziert zugänglich sind.',
                description3: 'So gewährleisten wir, dass Sie professionelle Pflege und Betreuung erhalten, die genau auf Ihre Bedürfnisse abgestimmt ist.'
            },
            versprechen: {
                title: 'Unser Versprechen',
                description: 'Mit Gesundheit Pflege New Day können Sie vertrauensvoll in jeden neuen Tag starten.',
                description2: 'Wir hören zu, nehmen uns Zeit und gestalten unsere Pflege individuell, respektvoll und menschlich – für Ihre Sicherheit, Lebensqualität und Ihr Wohlbefinden.'
            }
        },
        jobs: {
            title: 'Werde Teil unseres Teams!',
            subtitle: 'Um weiter zu wachsen, suchen wir dich und deine Leidenschaft für die Pflege.',
            description: 'Wir freuen uns auf Pflegefachkräfte sowie Pflegehelferinnen und Pflegehelfer, die mit Herz und Kompetenz arbeiten.',
            mitbringen: {
                title: 'Das bringst du mit:',
                items: [
                    'Abgeschlossene Ausbildung in der Altenpflege oder Gesundheits- und Krankenpflege oder',
                    'Erfahrung in der Pflege',
                    'Führerschein Klasse B'
                ]
            },
            bieten: {
                title: 'Wir bieten:',
                items: [
                    'Ein motiviertes, herzliches Team',
                    'Eine wertschätzende Arbeitsumgebung',
                    'Moderne Arbeitsmittel und professionelle Unterstützung'
                ]
            },
            apply: 'Melde dich bei uns und sende uns deine Qualifikationen und Unterlagen.',
            apply2: 'Wir freuen uns darauf, dich kennenzulernen und gemeinsam die Pflege zu gestalten!'
        },
        contact: {
            title: 'Kontakt',
            subtitle: 'Sie suchen einen zuverlässigen Pflegedienst? Melden Sie sich bei uns!',
            phone: 'Telefon',
            email: 'Email',
            address: 'Adresse',
            form: {
                name: 'Ihr Name',
                email: 'Ihre E-Mail',
                phone: 'Ihre Telefonnummer',
                message: 'Ihre Nachricht',
                submit: 'Nachricht senden',
                success: 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.'
            }
        },
        footer: {
            privacy: 'Datenschutz',
            impressum: 'Impressum',
            copyright: '© 2025 by A&H Gesundheitspflege Bochum.'
        }
    },
    ru: {
        nav: {
            home: 'Главная',
            services: 'Услуги',
            about: 'О нас',
            jobs: 'Вакансии',
            contact: 'Контакты'
        },
        hero: {
            title: 'Gesundheitspflege New Day',
            subtitle: 'С доверием и компетентностью в новый день',
            description1: 'Дом - это место, полное уюта - и именно там вы должны иметь возможность оставаться.',
            description2: 'Команда Gesundheit Pflege New Day сопровождает вас с сердцем, опытом и профессионализмом, чтобы вы могли жить в знакомой обстановке даже при необходимости ухода.',
            description3: 'Мы находим время для вас, консультируем индивидуально и с любовью поддерживаем в повседневной жизни - надежно, по-человечески и профессионально.',
            description4: 'Позвоните нам!',
            description5: 'Мы бесплатно и без обязательств информируем вас по всем вопросам домашнего ухода.',
            description6: 'По желанию мы также приедем к вам домой, чтобы проконсультировать лично.',
            contactButton: 'Связаться',
            servicesButton: 'Наши услуги'
        },
        contactInfo: {
            title: 'Как с нами связаться',
            phone: 'Телефон',
            email: 'Email'
        },
        services: {
            title: 'Наши услуги',
            subtitle: 'Индивидуальный домашний уход создает основу для повышения качества жизни и самостоятельности - даже в пожилом возрасте.',
            description: 'Мы приезжаем к вам и предлагаем наши услуги там, где вы дома.',
            description2: 'Благодаря нашей заботливой и профессиональной поддержке пребывание в больнице часто можно сократить или даже избежать.',
            accordionLabel: 'Показать полный перечень услуг',
            highlightsA11y: 'Краткий обзор услуг',
            behandlungspflege: {
                title: 'Лечебный уход',
                description: 'Лечебный уход согласно SGB V включает все назначенные врачом медицинские меры, которые служат обеспечению и поддержке врачебного лечения.',
                description2: 'Наш сертифицированный медицинский персонал выполняет эти задачи с высочайшей тщательностью и профессиональной компетентностью.',
                description3: 'В тесном сотрудничестве с семейными врачами, клиниками и больничными кассами мы обеспечиваем оптимальный уход и высокий уровень медицинской безопасности.',
                subtitle: 'Наши услуги в области лечебного ухода:',
                items: [
                    'Инъекции',
                    'Уход за ранами и перевязки',
                    'Установка и замена катетеров',
                    'Физические меры (например, растирания)',
                    'Уход при пролежнях',
                    'Закапывание глазных капель',
                    'Контроль и выдача лекарств',
                    'Отсасывание',
                    'Уход за стомой',
                    'Клизмы',
                    'Энтеральное питание через PEG-зонд',
                    'Парентеральное питание через порт'
                ]
            },
            grundpflege: {
                title: 'Базовый уход',
                description: 'Уход за телом является важной частью нашей повседневной работы.',
                description2: 'В соответствии с SGB XI мы поддерживаем вас с пониманием и надежностью в области личной гигиены, питания, мобильности и профилактики.',
                subtitle: 'Наши услуги в области базового ухода:',
                items: [
                    'Личная гигиена (в постели, у раковины, душ, частичное или полное купание)',
                    'Уход за кожей и волосами',
                    'Одевание и раздевание',
                    'Мобилизация и заправка постели',
                    'Уход за полостью рта и бритье',
                    'Позиционирование и наблюдение за больным',
                    'Профилактические меры (например, против пролежней, скованности суставов, пневмонии)',
                    'Поддержка при приеме пищи'
                ]
            },
            hauswirtschaft: {
                title: 'Хозяйственное обслуживание',
                description: 'Самостоятельность также означает, что можно хорошо справляться с повседневной жизнью в собственном доме.',
                description2: 'Мы поддерживаем вас практической помощью по дому, чтобы вы могли жить в ухоженной и приятной обстановке.',
                subtitle: 'Наши хозяйственные услуги:',
                items: [
                    'Уборка квартиры',
                    'Уход за бельем (стирка, глажка, складывание)',
                    'Покупки и поручения',
                    'Приготовление еды',
                    'Поддержка в организации повседневной жизни',
                    'Сопровождение к врачу или на прогулки'
                ]
            },
            wundheilung: {
                title: 'Уход за ранами',
                description: 'Профессиональный уход за ранами имеет решающее значение для заживления, благополучия и качества жизни.',
                description2: 'Наш специально обученный медицинский персонал занимается лечением острых и хронических ран в соответствии с современными медицинскими стандартами.',
                subtitle: 'Наши услуги в области ухода за ранами:',
                items: [
                    'Профессиональная оценка и документирование ран',
                    'Выбор и применение подходящих перевязочных материалов',
                    'Регулярный контроль процесса заживления',
                    'Сотрудничество с врачами и экспертами по ранам',
                    'Консультации по уходу за кожей и профилактике ран'
                ]
            },
            consultation: {
                title: 'Позвольте нам проконсультировать вас',
                description: 'Мы поддерживаем нуждающихся в уходе людей и их родственников с пониманием и компетентностью - как при вновь возникшей ситуации ухода, так и при длительной потребности в уходе.',
                description2: 'Вместе мы найдем лучшие решения для вашей повседневной жизни дома.'
            }
        },
        about: {
            title: 'О нас',
            wichtig: {
                title: 'Что для нас важно',
                description: 'В Gesundheit Pflege New Day человеческие ценности находятся в центре внимания.',
                description2: 'Уважение, эмпатия и учет физических, психических и духовных потребностей каждого человека для нас само собой разумеются.',
                description3: 'Человечность и профессионализм составляют основу нашей работы - мы сопровождаем вас с сердцем, компетентностью и преданностью делу в новый день.'
            },
            wer: {
                title: 'Кто мы',
                description: 'Мы недавно основанная служба амбулаторного ухода, которая позволяет людям вести самостоятельную и достойную жизнь дома.',
                description2: 'Наша команда состоит из высококвалифицированных специалистов, которые обладают солидными знаниями, опытом и личными качествами для индивидуального и чуткого ухода.'
            },
            wie: {
                title: 'Как мы работаем',
                description: 'Мы тесно сотрудничаем с семейными врачами, врачами-специалистами и другими медицинскими учреждениями, чтобы обеспечить оптимальный уход.',
                description2: 'Кроме того, мы сотрудничаем со всеми больничными кассами, чтобы наши услуги были доступны вам без проблем.',
                description3: 'Таким образом, мы гарантируем, что вы получите профессиональный уход и поддержку, точно соответствующие вашим потребностям.'
            },
            versprechen: {
                title: 'Наше обещание',
                description: 'С Gesundheit Pflege New Day вы можете уверенно начинать каждый новый день.',
                description2: 'Мы слушаем, находим время и организуем наш уход индивидуально, с уважением и по-человечески - для вашей безопасности, качества жизни и благополучия.'
            }
        },
        jobs: {
            title: 'Станьте частью нашей команды!',
            subtitle: 'Чтобы продолжать расти, мы ищем вас и вашу страсть к уходу.',
            description: 'Мы рады видеть медицинских работников, а также помощников по уходу, которые работают с сердцем и компетентностью.',
            mitbringen: {
                title: 'Что вы приносите:',
                items: [
                    'Завершенное обучение по уходу за пожилыми или медицинскому и сестринскому уходу или',
                    'Опыт в уходе',
                    'Водительские права класса B'
                ]
            },
            bieten: {
                title: 'Мы предлагаем:',
                items: [
                    'Мотивированную, сердечную команду',
                    'Оценивающую рабочую среду',
                    'Современные рабочие инструменты и профессиональную поддержку'
                ]
            },
            apply: 'Свяжитесь с нами и отправьте нам свои квалификации и документы.',
            apply2: 'Мы с нетерпением ждем возможности познакомиться с вами и вместе формировать уход!'
        },
        contact: {
            title: 'Контакты',
            subtitle: 'Вы ищете надежную службу ухода? Свяжитесь с нами!',
            phone: 'Телефон',
            email: 'Email',
            address: 'Адрес',
            form: {
                name: 'Ваше имя',
                email: 'Ваш Email',
                phone: 'Ваш телефон',
                message: 'Ваше сообщение',
                submit: 'Отправить сообщение',
                success: 'Спасибо за ваше сообщение! Мы скоро свяжемся с вами.'
            }
        },
        footer: {
            privacy: 'Конфиденциальность',
            impressum: 'Импрессум',
            copyright: '© 2025 by A&H Gesundheitspflege Bochum.'
        }
    }
};

let currentLang = localStorage.getItem('language') || 'de';

const languages = {
    de: {
        code: 'de',
        flag: 'fi-de',
        name: 'DE',
        fullName: 'Deutsch'
    },
    ru: {
        code: 'ru',
        flag: 'fi-ru',
        name: 'RU',
        fullName: 'Русский'
    }
};

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    updatePageContent();
    updateLanguageButtons();
    closeLanguageDropdown();
}

function updateLanguageButtons() {
    const langCurrent = document.getElementById('langCurrent');
    if (langCurrent && languages[currentLang]) {
        const lang = languages[currentLang];
        const flagSpan = langCurrent.querySelector('.fi');
        const nameSpan = langCurrent.querySelector('.lang-name');
        
        if (flagSpan) {
            flagSpan.className = `fi ${lang.flag}`;
        }
        if (nameSpan) {
            nameSpan.textContent = lang.name;
        }
    }
    
    // Update active state in dropdown
    document.querySelectorAll('.lang-option').forEach(option => {
        if (option.dataset.lang === currentLang) {
            option.style.background = 'rgba(74, 157, 122, 0.1)';
        } else {
            option.style.background = '';
        }
    });
}

function toggleLanguageDropdown() {
    const dropdown = document.querySelector('.lang-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
    }
}

function closeLanguageDropdown() {
    const dropdown = document.querySelector('.lang-dropdown');
    if (dropdown) {
        dropdown.classList.remove('active');
    }
}

function fillDynamicLists() {
    const t = translations[currentLang];
    if (!t) return;

    const serviceKeys = ['behandlungspflege', 'grundpflege', 'hauswirtschaft', 'wundheilung'];
    serviceKeys.forEach((key) => {
        const svc = t.services[key];
        if (!svc || !Array.isArray(svc.items)) return;
        const card = document.querySelector(`[data-service="${key}"]`);
        if (!card) return;
        const highlights = card.querySelector('.service-highlights');
        const full = card.querySelector('.service-list-full');
        const details = card.querySelector('.service-details-accordion');
        const preview = svc.items.slice(0, 3);
        if (highlights) {
            highlights.innerHTML = preview.map((item) => `<li>${item}</li>`).join('');
        }
        if (full) {
            full.innerHTML = svc.items.map((item) => `<li>${item}</li>`).join('');
        }
        if (details) {
            details.style.display = svc.items.length > 3 ? '' : 'none';
        }
    });

    document.querySelectorAll('[data-service-highlights]').forEach((el) => {
        el.setAttribute('aria-label', t.services.highlightsA11y);
    });

    const mit = document.querySelector('[data-jobs-list="mitbringen"]');
    const biet = document.querySelector('[data-jobs-list="bieten"]');
    if (mit && t.jobs.mitbringen.items) {
        mit.innerHTML = t.jobs.mitbringen.items.map((item) => `<li>${item}</li>`).join('');
    }
    if (biet && t.jobs.bieten.items) {
        biet.innerHTML = t.jobs.bieten.items.map((item) => `<li>${item}</li>`).join('');
    }
}

function updatePageContent() {
    const t = translations[currentLang];
    if (!t) return;

    // Update navigation
    document.querySelectorAll('[data-translate="nav.home"]').forEach(el => el.textContent = t.nav.home);
    document.querySelectorAll('[data-translate="nav.services"]').forEach(el => el.textContent = t.nav.services);
    document.querySelectorAll('[data-translate="nav.about"]').forEach(el => el.textContent = t.nav.about);
    document.querySelectorAll('[data-translate="nav.jobs"]').forEach(el => el.textContent = t.nav.jobs);
    document.querySelectorAll('[data-translate="nav.contact"]').forEach(el => el.textContent = t.nav.contact);

    // Update hero section
    document.querySelectorAll('[data-translate="hero.title"]').forEach(el => el.textContent = t.hero.title);
    document.querySelectorAll('[data-translate="hero.subtitle"]').forEach(el => el.textContent = t.hero.subtitle);
    document.querySelectorAll('[data-translate="hero.description1"]').forEach(el => el.textContent = t.hero.description1);
    document.querySelectorAll('[data-translate="hero.description2"]').forEach(el => el.textContent = t.hero.description2);
    document.querySelectorAll('[data-translate="hero.description3"]').forEach(el => el.textContent = t.hero.description3);
    document.querySelectorAll('[data-translate="hero.description4"]').forEach(el => el.textContent = t.hero.description4);
    document.querySelectorAll('[data-translate="hero.description5"]').forEach(el => el.textContent = t.hero.description5);
    document.querySelectorAll('[data-translate="hero.description6"]').forEach(el => el.textContent = t.hero.description6);
    document.querySelectorAll('[data-translate="hero.contactButton"]').forEach(el => el.textContent = t.hero.contactButton);
    document.querySelectorAll('[data-translate="hero.servicesButton"]').forEach(el => el.textContent = t.hero.servicesButton);

    // Update contact info
    document.querySelectorAll('[data-translate="contactInfo.title"]').forEach(el => el.textContent = t.contactInfo.title);
    document.querySelectorAll('[data-translate="contactInfo.phone"]').forEach(el => el.textContent = t.contactInfo.phone);
    document.querySelectorAll('[data-translate="contactInfo.email"]').forEach(el => el.textContent = t.contactInfo.email);

    // Update services
    document.querySelectorAll('[data-translate="services.title"]').forEach(el => el.textContent = t.services.title);
    document.querySelectorAll('[data-translate="services.subtitle"]').forEach(el => el.textContent = t.services.subtitle);
    document.querySelectorAll('[data-translate="services.description"]').forEach(el => el.textContent = t.services.description);
    document.querySelectorAll('[data-translate="services.description2"]').forEach(el => el.textContent = t.services.description2);

    // Update service details
    document.querySelectorAll('[data-translate="services.behandlungspflege.title"]').forEach(el => el.textContent = t.services.behandlungspflege.title);
    document.querySelectorAll('[data-translate="services.behandlungspflege.description"]').forEach(el => el.textContent = t.services.behandlungspflege.description);
    document.querySelectorAll('[data-translate="services.behandlungspflege.description2"]').forEach(el => el.textContent = t.services.behandlungspflege.description2);
    document.querySelectorAll('[data-translate="services.behandlungspflege.description3"]').forEach(el => el.textContent = t.services.behandlungspflege.description3);
    document.querySelectorAll('[data-translate="services.behandlungspflege.subtitle"]').forEach(el => el.textContent = t.services.behandlungspflege.subtitle);

    document.querySelectorAll('[data-translate="services.grundpflege.title"]').forEach(el => el.textContent = t.services.grundpflege.title);
    document.querySelectorAll('[data-translate="services.grundpflege.description"]').forEach(el => el.textContent = t.services.grundpflege.description);
    document.querySelectorAll('[data-translate="services.grundpflege.description2"]').forEach(el => el.textContent = t.services.grundpflege.description2);
    document.querySelectorAll('[data-translate="services.grundpflege.subtitle"]').forEach(el => el.textContent = t.services.grundpflege.subtitle);

    document.querySelectorAll('[data-translate="services.hauswirtschaft.title"]').forEach(el => el.textContent = t.services.hauswirtschaft.title);
    document.querySelectorAll('[data-translate="services.hauswirtschaft.description"]').forEach(el => el.textContent = t.services.hauswirtschaft.description);
    document.querySelectorAll('[data-translate="services.hauswirtschaft.description2"]').forEach(el => el.textContent = t.services.hauswirtschaft.description2);
    document.querySelectorAll('[data-translate="services.hauswirtschaft.subtitle"]').forEach(el => el.textContent = t.services.hauswirtschaft.subtitle);

    document.querySelectorAll('[data-translate="services.wundheilung.title"]').forEach(el => el.textContent = t.services.wundheilung.title);
    document.querySelectorAll('[data-translate="services.wundheilung.description"]').forEach(el => el.textContent = t.services.wundheilung.description);
    document.querySelectorAll('[data-translate="services.wundheilung.description2"]').forEach(el => el.textContent = t.services.wundheilung.description2);
    document.querySelectorAll('[data-translate="services.wundheilung.subtitle"]').forEach(el => el.textContent = t.services.wundheilung.subtitle);

    document.querySelectorAll('[data-translate="services.consultation.title"]').forEach(el => el.textContent = t.services.consultation.title);
    document.querySelectorAll('[data-translate="services.consultation.description"]').forEach(el => el.textContent = t.services.consultation.description);
    document.querySelectorAll('[data-translate="services.consultation.description2"]').forEach(el => el.textContent = t.services.consultation.description2);
    document.querySelectorAll('[data-translate="services.accordionLabel"]').forEach(el => el.textContent = t.services.accordionLabel);

    // Update about section
    document.querySelectorAll('[data-translate="about.title"]').forEach(el => el.textContent = t.about.title);
    document.querySelectorAll('[data-translate="about.wichtig.title"]').forEach(el => el.textContent = t.about.wichtig.title);
    document.querySelectorAll('[data-translate="about.wichtig.description"]').forEach(el => el.textContent = t.about.wichtig.description);
    document.querySelectorAll('[data-translate="about.wichtig.description2"]').forEach(el => el.textContent = t.about.wichtig.description2);
    document.querySelectorAll('[data-translate="about.wichtig.description3"]').forEach(el => el.textContent = t.about.wichtig.description3);
    document.querySelectorAll('[data-translate="about.wer.title"]').forEach(el => el.textContent = t.about.wer.title);
    document.querySelectorAll('[data-translate="about.wer.description"]').forEach(el => el.textContent = t.about.wer.description);
    document.querySelectorAll('[data-translate="about.wer.description2"]').forEach(el => el.textContent = t.about.wer.description2);
    document.querySelectorAll('[data-translate="about.wie.title"]').forEach(el => el.textContent = t.about.wie.title);
    document.querySelectorAll('[data-translate="about.wie.description"]').forEach(el => el.textContent = t.about.wie.description);
    document.querySelectorAll('[data-translate="about.wie.description2"]').forEach(el => el.textContent = t.about.wie.description2);
    document.querySelectorAll('[data-translate="about.wie.description3"]').forEach(el => el.textContent = t.about.wie.description3);
    document.querySelectorAll('[data-translate="about.versprechen.title"]').forEach(el => el.textContent = t.about.versprechen.title);
    document.querySelectorAll('[data-translate="about.versprechen.description"]').forEach(el => el.textContent = t.about.versprechen.description);
    document.querySelectorAll('[data-translate="about.versprechen.description2"]').forEach(el => el.textContent = t.about.versprechen.description2);

    // Update jobs section
    document.querySelectorAll('[data-translate="jobs.title"]').forEach(el => el.textContent = t.jobs.title);
    document.querySelectorAll('[data-translate="jobs.subtitle"]').forEach(el => el.textContent = t.jobs.subtitle);
    document.querySelectorAll('[data-translate="jobs.description"]').forEach(el => el.textContent = t.jobs.description);
    document.querySelectorAll('[data-translate="jobs.mitbringen.title"]').forEach(el => el.textContent = t.jobs.mitbringen.title);
    document.querySelectorAll('[data-translate="jobs.bieten.title"]').forEach(el => el.textContent = t.jobs.bieten.title);
    document.querySelectorAll('[data-translate="jobs.apply"]').forEach(el => el.textContent = t.jobs.apply);
    document.querySelectorAll('[data-translate="jobs.apply2"]').forEach(el => el.textContent = t.jobs.apply2);

    // Update contact section
    document.querySelectorAll('[data-translate="contact.title"]').forEach(el => el.textContent = t.contact.title);
    document.querySelectorAll('[data-translate="contact.subtitle"]').forEach(el => el.textContent = t.contact.subtitle);
    document.querySelectorAll('[data-translate="contact.phone"]').forEach(el => el.textContent = t.contact.phone);
    document.querySelectorAll('[data-translate="contact.email"]').forEach(el => el.textContent = t.contact.email);
    document.querySelectorAll('[data-translate="contact.address"]').forEach(el => el.textContent = t.contact.address);
    // Update form placeholders and button text
    const nameInput = document.querySelector('input[data-translate="contact.form.name"]');
    const emailInput = document.querySelector('input[data-translate="contact.form.email"]');
    const phoneInput = document.querySelector('input[data-translate="contact.form.phone"]');
    const messageTextarea = document.querySelector('textarea[data-translate="contact.form.message"]');
    const submitButton = document.querySelector('button[data-translate="contact.form.submit"]');

    if (nameInput) nameInput.placeholder = t.contact.form.name;
    if (emailInput) emailInput.placeholder = t.contact.form.email;
    if (phoneInput) phoneInput.placeholder = t.contact.form.phone;
    if (messageTextarea) messageTextarea.placeholder = t.contact.form.message;
    if (submitButton) submitButton.textContent = t.contact.form.submit;

    // Update footer
    document.querySelectorAll('[data-translate="footer.privacy"]').forEach(el => el.textContent = t.footer.privacy);
    document.querySelectorAll('[data-translate="footer.impressum"]').forEach(el => el.textContent = t.footer.impressum);
    document.querySelectorAll('[data-translate="footer.copyright"]').forEach(el => el.textContent = t.footer.copyright);

    fillDynamicLists();
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.lang = currentLang;
    updatePageContent();
    updateLanguageButtons();

    // Language dropdown toggle
    const langCurrent = document.getElementById('langCurrent');
    if (langCurrent) {
        langCurrent.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleLanguageDropdown();
        });
    }

    // Language option clicks
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = option.dataset.lang;
            if (lang !== currentLang) {
                setLanguage(lang);
            } else {
                closeLanguageDropdown();
            }
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        const dropdown = document.querySelector('.lang-dropdown');
        if (dropdown && !dropdown.contains(e.target)) {
            closeLanguageDropdown();
        }
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
        if (hamburger) {
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// Active Navigation Link on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });

    // Header shadow on scroll
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 30px rgba(107, 155, 138, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(107, 155, 138, 0.1)';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        // Here you would typically send the data to a server
        // For now, we'll just show an alert
        const t = translations[currentLang];
        alert(t.contact.form.success);

        // Reset form
        contactForm.reset();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe job cards
document.querySelectorAll('.job-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe info items
document.querySelectorAll('.info-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Phone number formatting
const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
phoneLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Track phone call clicks (for analytics)
        console.log('Phone call initiated:', link.href);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});




