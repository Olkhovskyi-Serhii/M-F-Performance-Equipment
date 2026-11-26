'use strict';

document.addEventListener('DOMContentLoaded', () => {
  /* ========================================================================
     1. DATA CATALOGS (Articles, Exercises, Equipment, Solutions, References)
     ======================================================================== */
  const ARTICLES = {
    'hero-intensity': {
      kicker: 'ПОРАДИ ЩОДО ТРЕНУВАНЬ',
      title: 'Чи ви достатньо інтенсивно тренуєтеся?',
      paragraphs: [
        'Більшість відвідувачів тренувального залу зупиняють підхід за 4–5 повторень до реального технічного відмови. Це комфортний режим, але він рідко стимулює адаптацію м’язів та нервової системи.',
        'Оцінюйте кожен робочий сет за шкалою резерву повторень (RIR). Для силового прогресу основні базові вправи виконуйте із запасом 1–2 повторення, а ізолюючі — до контрольованого технічного максимуму.',
        'Ведіть тренувальний щоденник та фіксуйте час відпочинку секундоміром: 90–120 секунд для багатосуглобових рухів і 45–60 секунд для допоміжної роботи.'
      ]
    },
    'progressive-overload': {
      kicker: 'ПРОФЕСІЙНІ ПОРАДИ',
      title: 'Як прогресувати у силових показниках без перетренованості',
      paragraphs: [
        'Прогресивне навантаження не означає додавання ваги на штангу щотижня. Ви можете змінювати темп ексцентричної фази, скорочувати паузи або додавати одне якісне повторення.',
        'Чергуйте три тижні планового зростання інтенсивності з одним розвантажувальним тижнем (deload), знижуючи обсяг підходів на 35–40%.'
      ]
    },
    'hiit-cycling': {
      kicker: 'ІНТЕРВАЛИ ТА КАРДІО',
      title: 'Спалюйте жир і зміцнюйте витривалість за 25 хвилин на байку',
      paragraphs: [
        'Високоінтенсивний інтервальний протокол на спінінг-байку поєднує 40 секунд роботи у зоні 85–90% від максимального пульсу та 20 секунд активного відновлення.',
        'Магнітний опір дозволяє миттєво змінювати навантаження без інерційних ривків, захищаючи колінні суглоби.'
      ]
    },
    'telemetry-metrics': {
      kicker: 'АНАЛІТИКА ТРЕНУВАНЬ',
      title: 'Телеметрія пульсу та темпу: на що дивитися під час бігу',
      paragraphs: [
        'Ключовий індикатор аеробної ефективності — стабільність пульсу при незмінній швидкості бігового полотна.',
        'Слідкуйте за часом контакту стопи та каденсом: оптимальний діапазон 170–180 кроків за хвилину суттєво знижує ударне навантаження.'
      ]
    },
    'hollow-hold': {
      kicker: 'ВПРАВИ ДЛЯ ПРЕСА ТА КОРА',
      title: 'Зміцніть кор за допомогою утримання «човника»',
      paragraphs: [
        'Ляжте на килимок, щільно притисніть поперек до підлоги, витягніть руки за голову та підніміть прямі ноги на 15–20 см над поверхнею.',
        'Виконайте 4 підходи по 25–40 секунд із 45-секундним відпочинком. Якщо поперек відривається від килимка — зігніть коліна.'
      ]
    },
    'forgotten-strength': {
      kicker: 'ФУНКЦІОНАЛЬНІ ВПРАВИ',
      title: '5 забутих силових вправ, які працюють для кожного',
      paragraphs: [
        'Прогулянка фермера, присідання Зерчера, турецький підйом, тяга санчат та статичне утримання у висі формують реальну прикладну силу.',
        'Додайте одну з цих вправ у фіналі основного тренування для зміцнення хвата й стабілізаторів корпуса.'
      ]
    },
    'treadmill-30-30': {
      kicker: 'ПРОГРАМИ НА ВИТРИВАЛІСТЬ',
      title: 'Протокол 30/30 на біговій доріжці',
      paragraphs: [
        'Після 8-хвилинної розминки чергуйте 30 секунд швидкого прискорення з нахилом полотна 2% і 30 секунд спокійної ходьби.',
        'За 12 циклів ви отримаєте потужний метаболічний відгук без надмірної втоми перед силовим днем.'
      ]
    }
  };

  const EDITORIAL_TABS = {
    workouts: {
      feature: {
        id: 'hollow-hold',
        img: 'src/assets/images/workout_core_athlete_1795709669594.jpg',
        alt: 'Атлет виконує утримання позиції човника для зміцнення м’язів кора',
        kicker: 'ВПРАВИ ДЛЯ ПРЕСА ТА КОРА',
        title: 'ЗМІЦНІТЬ КОР ЗА ДОПОМОГОЮ УТРИМАННЯ «ЧОВНИКА»',
        desc: 'Цей простий статичний рух забезпечить глибоке залучення поперечного м’яза живота та стабільність хребта у базових жимах і присіданнях.'
      },
      side: [
        {
          id: 'forgotten-strength',
          img: 'src/assets/images/hero_side_plank_1795709668723.jpg',
          alt: 'Виконання бічної планки з тренером',
          kicker: 'ФУНКЦІОНАЛЬНІ ВПРАВИ',
          title: '5 забутих силових вправ, які працюють для кожного'
        },
        {
          id: 'treadmill-30-30',
          img: 'src/assets/images/equipment_treadmill_inertia_1795709670143.jpg',
          alt: 'Бігова доріжка для інтервального прискорення',
          kicker: 'ПРОГРАМИ НА ВИТРИВАЛІСТЬ',
          title: 'Побудуйте вибухову швидкість із протоколом 30/30 на доріжці'
        }
      ]
    },
    nutrition: {
      feature: {
        id: 'progressive-overload',
        img: 'src/assets/images/hero_side_plank_1795709668723.jpg',
        alt: 'Консультація тренера зі спортивного раціону',
        kicker: 'СПОРТИВНЕ ХАРЧУВАННЯ',
        title: 'БАЛАНС БІЛКІВ ТА ВУГЛЕВОДІВ ДЛЯ СТАБІЛЬНОГО ВІДНОВЛЕННЯ',
        desc: 'Як розрахувати добову норму нутрієнтів під силові або інтервальні дні без жорстких дієт і втрати працездатності.'
      },
      side: [
        {
          id: 'hiit-cycling',
          img: 'src/assets/images/equipment_cycling_bike_1795709669514.jpg',
          alt: 'Енергетичний режим для кардіотренування',
          kicker: 'ЗДОРОВІ ЗВИЧКИ',
          title: 'Гідратація та електроліти під час інтенсивного сайклінгу'
        },
        {
          id: 'telemetry-metrics',
          img: 'src/assets/images/gym_smartfocus_console_1795709671264.jpg',
          alt: 'Показники витрати калорій на тренажері',
          kicker: 'МЕТАБОЛІЗМ',
          title: 'Чому не варто сліпо довіряти лічильнику калорій на панелі'
        }
      ]
    },
    athletes: {
      feature: {
        id: 'hero-intensity',
        img: 'src/assets/images/gym_facility_interior_1795709670610.jpg',
        alt: 'Сучасна тренувальна база для професійних атлетів',
        kicker: 'ПРОФІЛЬ АТЛЕТІВ',
        title: 'ПІДГОТОВКА ДО СЕЗОНУ: ЯК ПЛАНУЮТЬ ТРЕНУВАННЯ ПРОФІ',
        desc: 'Періодизація навантажень, контроль якості сну та робота над слабкими ланками кінетичного ланцюга.'
      },
      side: [
        {
          id: 'hollow-hold',
          img: 'src/assets/images/workout_core_athlete_1795709669594.jpg',
          alt: 'Силова підготовка атлета',
          kicker: 'ІНТЕРВ’Ю',
          title: 'Як поєднувати бігову роботу та важку штангу без втрати швидкості'
        },
        {
          id: 'forgotten-strength',
          img: 'src/assets/images/equipment_cycling_bike_1795709669514.jpg',
          alt: 'Аеробна база на велотренажері',
          kicker: 'ДОСВІД',
          title: 'Аеробна база для силових атлетів: 20 хвилин після тренування'
        }
      ]
    }
  };

  const EXERCISES = [
    {
      id: 'ex-1',
      name: 'Бічна планка з ротацією',
      level: 'beginner',
      levelLabel: 'Початківець',
      type: 'core',
      typeLabel: 'Кор і стабілізація',
      muscle: 'core',
      muscleLabel: 'Прес і кор',
      equipment: 'bodyweight',
      equipmentLabel: 'Власна вага',
      steps: 'Утримуйте таз на одній лінії з корпусом, уникайте провалу в попереку. 3 підходи по 30 сек на кожну сторону.'
    },
    {
      id: 'ex-2',
      name: 'Утримання «човника» (Hollow Hold)',
      level: 'intermediate',
      levelLabel: 'Середній',
      type: 'core',
      typeLabel: 'Кор і стабілізація',
      muscle: 'core',
      muscleLabel: 'Прес і кор',
      equipment: 'bodyweight',
      equipmentLabel: 'Власна вага',
      steps: 'Притисніть поперек до підлоги, руки за головою, ноги під кутом 20 градусів. 4 підходи по 30–40 сек.'
    },
    {
      id: 'ex-3',
      name: 'Присідання зі штангою на спині',
      level: 'intermediate',
      levelLabel: 'Середній',
      type: 'strength',
      typeLabel: 'Силове',
      muscle: 'legs',
      muscleLabel: 'Ноги та сідниці',
      equipment: 'free-weights',
      equipmentLabel: 'Штанга / Гантелі',
      steps: 'Контрольоване опускання 3 секунди, коліна спрямовані за носками, потужний підйом. 4х8 повторень.'
    },
    {
      id: 'ex-4',
      name: 'Жим гантелей на похилій лаві',
      level: 'beginner',
      levelLabel: 'Початківець',
      type: 'strength',
      typeLabel: 'Силове',
      muscle: 'upper',
      muscleLabel: 'Спина і груди',
      equipment: 'free-weights',
      equipmentLabel: 'Штанга / Гантелі',
      steps: 'Кут лави 30 градусів, лопатки зведені. Опускайте гантелі до рівня верхньої частини грудей. 4х10.'
    },
    {
      id: 'ex-5',
      name: 'Інтервальний спринт на біговій доріжці',
      level: 'advanced',
      levelLabel: 'Просунутий',
      type: 'cardio',
      typeLabel: 'Кардіо',
      muscle: 'full',
      muscleLabel: 'Все тіло',
      equipment: 'machines',
      equipmentLabel: 'Тренажери / Кардіо',
      steps: 'Нахил 2%, 30 секунд інтенсивного бігу та 30 секунд відновлення. Повторіть 10–12 раундів.'
    },
    {
      id: 'ex-6',
      name: 'Силовий підйом на спінінг-байку',
      level: 'intermediate',
      levelLabel: 'Середній',
      type: 'cardio',
      typeLabel: 'Кардіо',
      muscle: 'legs',
      muscleLabel: 'Ноги та сідниці',
      equipment: 'machines',
      equipmentLabel: 'Тренажери / Кардіо',
      steps: 'Високий опір, каденс 65–70 об/хв у позиції стоячи. 5 інтервалів по 2 хвилини.'
    }
  ];

  const INERTIA_SLIDES = [
    {
      title: 'INERTIA',
      img: 'src/assets/images/equipment_treadmill_inertia_1795709670143.jpg',
      alt: 'Комерційна бігова доріжка серії INERTIA',
      caption: 'Потужний безщітковий привід, система амортизації Pro-Cushion та сенсорна консоль.',
      ctaText: 'ВІДКРИТИ КАРДІО',
      modalId: 'cardio'
    },
    {
      title: 'PRO CYCLE',
      img: 'src/assets/images/equipment_cycling_bike_1795709669514.jpg',
      alt: 'Професійний велотренажер PRO CYCLE',
      caption: 'Магнітна система опору на 24 рівні з датчиком потужності та Bluetooth FTMS.',
      ctaText: 'ДЕТАЛЬНІШЕ ПРО БАЙК',
      modalId: 'cycling'
    },
    {
      title: 'SMARTFOCUS',
      img: 'src/assets/images/gym_smartfocus_console_1795709671264.jpg',
      alt: 'Цифрова консоль Smartfocus на тренажері',
      caption: '19-дюймовий сенсорний екран, миттєва синхронізація тренувань та мультимедіа.',
      ctaText: 'ВІДКРИТИ ТЕХНОЛОГІЇ',
      modalId: 'cardio'
    }
  ];

  const EQUIPMENT_SPECS = {
    cardio: {
      kicker: 'ЛІНІЙКА ОБЛАДНАННЯ · КАРДІО',
      title: 'Комерційні бігові доріжки серії INERTIA',
      description:
        'Розроблені для інтенсивної 16-годинної щоденної експлуатації у фітнес-клубах. Безщітковий двигун 4.5 к.с. забезпечує тиху та плавну роботу на швидкостях до 24 км/год.',
      specs: [
        ['Потужність двигуна', '4.5 к.с. AC'],
        ['Кут нахилу', '0 – 15%'],
        ['Бігове полотно', '160 × 58 см'],
        ['Максимальна вага атлета', '180 кг']
      ]
    },
    functional: {
      kicker: 'ЛІНІЙКА ОБЛАДНАННЯ · ФУНКЦІОНАЛ',
      title: 'Модульні рами та вільні ваги',
      description:
        'Гнучка архітектура станцій дозволяє об’єднати турніки, кріплення для канатів, тримачі грифів та полиці для гир у єдиній компактній зоні.',
      specs: [
        ['Профіль сталі', '80 × 80 × 3 мм'],
        ['Покриття', 'Порошкове матове'],
        ['Станцій одночасно', 'до 12 атлетів'],
        ['Гарантія на раму', '10 років']
      ]
    },
    cycling: {
      kicker: 'ЛІНІЙКА ОБЛАДНАННЯ · ІНДОР-САЙКЛІНГ',
      title: 'Спінінг-байки нового покоління',
      description:
        'Ремінний привід Poly-V та маховик із прецизійним балансуванням дають реалістичне відчуття шосейного велосипеда без шуму та вібрацій.',
      specs: [
        ['Система опору', 'Магнітна, 24 рівні'],
        ['Точність ватметра', '±1.5%'],
        ['Q-фактор', '152 мм'],
        ['Регулювання', 'Мікрометричне 4D']
      ]
    },
    strength: {
      kicker: 'ЛІНІЙКА ОБЛАДНАННЯ · СИЛА',
      title: 'Блокові та важільні силові тренажери',
      description:
        'Незалежна конвергентна траєкторія руху рук і ніг повторює природну біомеханіку суглобів, знижуючи ризик перевантаження зв’язок.',
      specs: [
        ['Ваговий стек', 'до 120 кг'],
        ['Крок навантаження', '2.5 / 5 кг'],
        ['Трос', 'Авіаційний у нейлоні'],
        ['Оббивка', 'Антибактеріальна']
      ]
    }
  };

  const SOLUTIONS_DATA = {
    connectivity: [
      {
        id: 'smartfocus',
        title: 'Smartfocus',
        text: 'Із системою Smartfocus ви отримуєте повний контроль над тренувальним процесом у залі завдяки фірмовому софту та хмарній аналітиці.',
        cta: 'ВІДКРИТИ SMARTFOCUS',
        img: 'src/assets/images/gym_smartfocus_console_1795709671264.jpg',
        alt: 'Сенсорний екран Smartfocus на кардіотренажері'
      },
      {
        id: 'gymloop',
        title: 'GymLoop Cloud',
        text: 'Єдина хмарна екосистема для тренерів і менеджерів: персональні плани в смартфоні клієнта та контроль завантаженості тренажерів.',
        cta: 'ДІЗНАТИСЯ БІЛЬШЕ',
        img: 'src/assets/images/equipment_cycling_bike_1795709669514.jpg',
        alt: 'Синхронізація велотренажера з додатком GymLoop'
      },
      {
        id: 'telemetry',
        title: 'Сервісна телеметрія',
        text: 'Автоматичні звіти про напрацювання годин та профілактичне обслуговування обладнання без простоїв у роботі клубу.',
        cta: 'ПЕРЕГЛЯНУТИ МОЖЛИВОСТІ',
        img: 'src/assets/images/equipment_treadmill_inertia_1795709670143.jpg',
        alt: 'Діагностика бігової доріжки у реальному часі'
      }
    ],
    consultancy: [
      {
        id: 'design',
        title: 'Дизайн та 3D-планування',
        text: 'Наш проєктний відділ розробляє ергономічні зони кардіо, силового і функціонального тренінгу під площу та трафік конкретного об’єкта.',
        cta: 'ДЕТАЛЬНІШЕ',
        img: 'src/assets/images/gym_facility_interior_1795709670610.jpg',
        alt: 'Реалізований проєкт планування фітнес-клубу з панорамними вікнами'
      },
      {
        id: 'finance',
        title: 'Фінансовий інжиніринг',
        text: 'Допомагаємо розрахувати окупність площі залу, лізингові графіки та оптимальний бюджет стартової комплектації.',
        cta: 'ДЕТАЛЬНІШЕ',
        img: 'src/assets/images/hero_side_plank_1795709668723.jpg',
        alt: 'Зона персонального тренінгу у клубі'
      },
      {
        id: 'aftersales',
        title: 'Сервісний супровід 24/7',
        text: 'Власний склад запчастин, регулярне регламентне обслуговування та оперативний виїзд інженерів по всій країні.',
        cta: 'ДЕТАЛЬНІШЕ',
        img: 'src/assets/images/gym_smartfocus_console_1795709671264.jpg',
        alt: 'Обслуговування та калібрування консолей'
      }
    ]
  };

  const SOLUTION_DETAILS = {
    smartfocus: {
      kicker: 'ТЕХНОЛОГІЇ ПІДКЛЮЧЕННЯ',
      title: 'Платформа Smartfocus для фітнес-клубів',
      description:
        'Інтерактивна консоль об’єднує біометричні показники атлета, тренувальні тести та розважальні сервіси на єдиному екрані високої чіткості.',
      specs: [
        ['Сенсорний дисплей', '19" Full HD'],
        ['Авторизація', 'RFID / QR / NFC'],
        ['Інтеграція', 'Apple Watch & Garmin'],
        ['Керування', 'Хмарна панель адміна']
      ]
    },
    gymloop: {
      kicker: 'ТЕХНОЛОГІЇ ПІДКЛЮЧЕННЯ',
      title: 'GymLoop — мобільний асистент клубу',
      description:
        'Мобільний додаток для відстеження прогресу в силовій і кардіо-зонах із прямим зв’язком між тренером та клієнтом.',
      specs: [
        ['Платформи', 'iOS / Android / Web'],
        ['Синхронізація', 'Bluetooth 5.0 FTMS'],
        ['Аналітика', 'Теплова карта залу'],
        ['Запуск', 'Брендований під клуб']
      ]
    },
    telemetry: {
      kicker: 'ТЕХНОЛОГІЇ ПІДКЛЮЧЕННЯ',
      title: 'Предиктивний сервіс та моніторинг парку',
      description:
        'Сповіщення про знос деки, натяг ременя чи оновлення прошивки надходять менеджеру завчасно до виникнення несправності.',
      specs: [
        ['Готовність парку', '99.4% uptime'],
        ['Оновлення ПЗ', 'OTA автоматично'],
        ['Моніторинг', 'Пробіг та мотогодини'],
        ['Звітність', 'Експорт у PDF / CSV']
      ]
    },
    design: {
      kicker: 'КОНСАЛТИНГ',
      title: 'Проєктування фітнес-простору та 3D-візуалізація',
      description:
        'Розробка повної креслярської документації, схем електроживлення під кардіо-лінії, зонування потоків та підбір підлогового покриття.',
      specs: [
        ['Термін підготовки', '5–7 робочих днів'],
        ['Формат', 'CAD + 3D-тур'],
        ['Мінімальна площа', 'від 45 м²'],
        ['Вартість при замовленні', 'Включено в проєкт']
      ]
    },
    finance: {
      kicker: 'КОНСАЛТИНГ',
      title: 'Гнучкі фінансові моделі та лізинг',
      description:
        'Індивідуальні умови фінансування запуску нових студій та модернізації діючих клубів без касових розривів.',
      specs: [
        ['Перший внесок', 'від 20%'],
        ['Термін програми', '12 – 36 місяців'],
        ['Валюта', 'Гнучкий графік'],
        ['Схвалення', 'За 3 дні']
      ]
    },
    aftersales: {
      kicker: 'КОНСАЛТИНГ',
      title: 'Сервіс та гарантійна підтримка',
      description:
        'Регламентне ТО кожні 6 місяців подовжує ресурс комерційних вузлів та зберігає заводську гарантію.',
      specs: [
        ['Реакція на заявку', 'до 24 годин'],
        ['Наявність запчастин', '96% на складі'],
        ['Навчання персоналу', 'Включено'],
        ['Регіон покриття', 'Уся Україна та ЄС']
      ]
    }
  };

  const REFERENCES = {
    'camino-real': {
      kicker: 'РЕАЛІЗОВАНИЙ ПРОЄКТ · ГОТЕЛЬНИЙ КЛАСТЕР',
      title: 'Camino Real Polanco',
      description:
        'Комплексне оснащення преміального фітнес-центру площею 420 м² із панорамною лінією бігових доріжок INERTIA та окремою зоною функціонального тренінгу.',
      specs: [
        ['Площа залу', '420 м²'],
        ['Кількість тренажерів', '34 одиниці'],
        ['Консолі', 'Smartfocus 19"'],
        ['Рік запуску', '2025']
      ]
    },
    'olympic-lab': {
      kicker: 'РЕАЛІЗОВАНИЙ ПРОЄКТ · СПОРТИВНА ЛАБОРАТОРІЯ',
      title: 'Olympic Performance Lab (Київ)',
      description:
        'Тренувальний хаб для підготовки бігунів і тріатлетів із точною телеметрією потужності, аналізом кроку та зоною швидкісно-силової підготовки.',
      specs: [
        ['Площа залу', '580 м²'],
        ['Сайкл-студія', '22 байки Pro'],
        ['Силові станції', '14 одиниць'],
        ['Пропускна здатність', '140 атлетів/день']
      ]
    },
    'iron-core': {
      kicker: 'РЕАЛІЗОВАНИЙ ПРОЄКТ · ФУНКЦІОНАЛЬНА АРЕНА',
      title: 'Iron & Core Arena (Львів)',
      description:
        'Дворівневий клуб крос-тренінгу та важкої атлетики з модульною силовою рамою, доріжкою для санчат і груповими програмами.',
      specs: [
        ['Площа залу', '640 м²'],
        ['Модульна рама', '12 м завдовжки'],
        ['Кардіо-зона', '16 тренажерів'],
        ['Термін реалізації', '6 тижнів']
      ]
    }
  };

  /* ========================================================================
     2. MOBILE MENU DRAWER
     ======================================================================== */
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      mobileDrawer.hidden = expanded;
    });

    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileDrawer.hidden = true;
      });
    });
  }

  /* ========================================================================
     3. PODCAST PLAYER INTERACTION
     ======================================================================== */
  const podcastPlayBtn = document.getElementById('podcast-play-btn');
  const podcastTimer = document.getElementById('podcast-timer');
  const episodeButtons = document.querySelectorAll('.episode-item');
  let podcastInterval = null;
  let podcastSeconds = 0;

  function formatTime(totalSec) {
    const mins = String(Math.floor(totalSec / 60)).padStart(2, '0');
    const secs = String(totalSec % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  }

  if (podcastPlayBtn && podcastTimer) {
    podcastPlayBtn.addEventListener('click', () => {
      const isPlaying = podcastPlayBtn.getAttribute('aria-pressed') === 'true';
      if (isPlaying) {
        clearInterval(podcastInterval);
        podcastPlayBtn.setAttribute('aria-pressed', 'false');
        podcastPlayBtn.textContent = 'Слухати випуск';
      } else {
        podcastPlayBtn.setAttribute('aria-pressed', 'true');
        podcastPlayBtn.textContent = 'Пауза';
        podcastInterval = setInterval(() => {
          podcastSeconds += 1;
          podcastTimer.textContent = `${formatTime(podcastSeconds)} / 38:15`;
        }, 1000);
      }
    });

    episodeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        episodeButtons.forEach((item) => item.classList.remove('is-active'));
        btn.classList.add('is-active');
        podcastSeconds = 0;
        podcastTimer.textContent = '00:00 / 38:15';
        const titleEl = document.querySelector('.podcast-panel__title');
        const epNum = btn.dataset.episode;
        const epName = btn.querySelector('.episode-item__name')?.textContent || '';
        if (titleEl) {
          titleEl.textContent = `Епізод #${epNum}: ${epName}`;
        }
      });
    });
  }

  /* ========================================================================
     4. EDITORIAL TABS (Workouts / Nutrition / Athletes)
     ======================================================================== */
  const editorialTabs = document.querySelectorAll('[data-editorial-tab]');
  const editorialContent = document.getElementById('editorial-content');
  const workoutsHeading = document.getElementById('workouts-heading');

  const TAB_HEADINGS = {
    workouts: 'ТРЕНУВАННЯ',
    nutrition: 'ХАРЧУВАННЯ',
    athletes: 'АТЛЕТИ'
  };

  function renderEditorialTab(key) {
    const data = EDITORIAL_TABS[key];
    if (!data || !editorialContent) return;
    if (workoutsHeading) {
      workoutsHeading.textContent = TAB_HEADINGS[key] || 'ТРЕНУВАННЯ';
    }

    editorialContent.innerHTML = `
      <article class="editorial-feature">
        <figure class="editorial-feature__media">
          <img src="${data.feature.img}" alt="${data.feature.alt}" width="960" height="540" referrerpolicy="no-referrer" />
        </figure>
        <p class="kicker">${data.feature.kicker}</p>
        <h3 class="editorial-feature__title">${data.feature.title}</h3>
        <p class="editorial-feature__desc">${data.feature.desc}</p>
        <button type="button" class="read-link" data-modal-type="article" data-id="${data.feature.id}">
          ЧИТАТИ СТАТТЮ
        </button>
      </article>

      <div class="editorial-side">
        ${data.side
          .map(
            (card) => `
          <article class="compact-card">
            <figure class="compact-card__media">
              <img src="${card.img}" alt="${card.alt}" width="320" height="200" referrerpolicy="no-referrer" />
            </figure>
            <div class="compact-card__body">
              <p class="kicker">${card.kicker}</p>
              <h4 class="compact-card__title">${card.title}</h4>
              <button type="button" class="read-link" data-modal-type="article" data-id="${card.id}">
                ЧИТАТИ
              </button>
            </div>
          </article>
        `
          )
          .join('')}
        <a href="#exercise-finder" class="btn btn--outline btn--full">
          ПЕРЕГЛЯНУТИ ВСІ МАТЕРІАЛИ
        </a>
      </div>
    `;
  }

  editorialTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      editorialTabs.forEach((t) => {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      renderEditorialTab(tab.dataset.editorialTab);
    });
  });

  /* ========================================================================
     5. EXERCISE FINDER FILTERING
     ======================================================================== */
  const filterForm = document.getElementById('exercise-filter-form');
  const resultsContainer = document.getElementById('exercise-results');
  const resetFiltersBtn = document.getElementById('reset-filters-btn');

  function renderExercises(list) {
    if (!resultsContainer) return;
    if (list.length === 0) {
      resultsContainer.innerHTML =
        '<p class="exercise-empty">За обраними параметрами вправ не знайдено. Спробуйте розширити фільтри або натисніть «Скинути».</p>';
      return;
    }

    resultsContainer.innerHTML = list
      .map(
        (ex) => `
      <article class="exercise-card">
        <div>
          <p class="kicker kicker--light">${ex.typeLabel} · ${ex.levelLabel}</p>
          <h3 class="exercise-card__title">${ex.name}</h3>
          <p class="exercise-card__meta">Група: ${ex.muscleLabel} · ${ex.equipmentLabel}</p>
        </div>
        <button type="button" class="read-link read-link--light" data-modal-type="exercise" data-id="${ex.id}">
          ТЕХНІКА ВИКОНАННЯ
        </button>
      </article>
    `
      )
      .join('');
  }

  function applyExerciseFilters() {
    const level = document.getElementById('filter-level')?.value || 'all';
    const type = document.getElementById('filter-type')?.value || 'all';
    const muscle = document.getElementById('filter-muscle')?.value || 'all';
    const equipment = document.getElementById('filter-equipment')?.value || 'all';

    const filtered = EXERCISES.filter((ex) => {
      const matchLevel = level === 'all' || ex.level === level;
      const matchType = type === 'all' || ex.type === type;
      const matchMuscle = muscle === 'all' || ex.muscle === muscle;
      const matchEquip = equipment === 'all' || ex.equipment === equipment;
      return matchLevel && matchType && matchMuscle && matchEquip;
    });

    renderExercises(filtered);
  }

  if (filterForm) {
    renderExercises(EXERCISES);
    filterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      applyExerciseFilters();
    });

    filterForm.querySelectorAll('select').forEach((sel) => {
      sel.addEventListener('change', applyExerciseFilters);
    });
  }

  if (resetFiltersBtn && filterForm) {
    resetFiltersBtn.addEventListener('click', () => {
      filterForm.reset();
      renderExercises(EXERCISES);
    });
  }

  /* ========================================================================
     6. INERTIA FLAGSHIP EQUIPMENT SLIDER
     ======================================================================== */
  let inertiaIdx = 0;
  const inertiaHeading = document.getElementById('inertia-heading');
  const inertiaImg = document.getElementById('inertia-img');
  const inertiaCaption = document.getElementById('inertia-caption');
  const inertiaCta = document.getElementById('inertia-cta-btn');
  const inertiaDots = document.getElementById('inertia-dots');

  function updateInertiaSlider(nextIndex) {
    inertiaIdx = (nextIndex + INERTIA_SLIDES.length) % INERTIA_SLIDES.length;
    const slide = INERTIA_SLIDES[inertiaIdx];
    if (inertiaHeading) inertiaHeading.textContent = slide.title;
    if (inertiaImg) {
      inertiaImg.src = slide.img;
      inertiaImg.alt = slide.alt;
    }
    if (inertiaCaption) inertiaCaption.textContent = slide.caption;
    if (inertiaCta) {
      inertiaCta.textContent = slide.ctaText;
      inertiaCta.dataset.id = slide.modalId;
    }
    if (inertiaDots) {
      inertiaDots.querySelectorAll('.slider-dot').forEach((dot, i) => {
        dot.classList.toggle('is-active', i === inertiaIdx);
      });
    }
  }

  if (inertiaDots) {
    INERTIA_SLIDES.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `slider-dot${idx === 0 ? ' is-active' : ''}`;
      dot.setAttribute('aria-label', `Слайд ${idx + 1}`);
      dot.addEventListener('click', () => updateInertiaSlider(idx));
      inertiaDots.appendChild(dot);
    });
  }

  document.getElementById('inertia-prev')?.addEventListener('click', () => updateInertiaSlider(inertiaIdx - 1));
  document.getElementById('inertia-next')?.addEventListener('click', () => updateInertiaSlider(inertiaIdx + 1));

  /* ========================================================================
     7. CONNECTIVITY & CONSULTANCY SLIDERS
     ======================================================================== */
  function createSolutionSlider({ items, titleId, descId, imgId, ctaId, dotsId, prevId, nextId }) {
    let index = 0;
    const titleEl = document.getElementById(titleId);
    const descEl = document.getElementById(descId);
    const imgEl = document.getElementById(imgId);
    const ctaEl = document.getElementById(ctaId);
    const dotsEl = document.getElementById(dotsId);

    function render(nextIdx) {
      index = (nextIdx + items.length) % items.length;
      const item = items[index];
      if (titleEl) titleEl.textContent = item.title;
      if (descEl) descEl.textContent = item.text;
      if (imgEl) {
        imgEl.src = item.img;
        imgEl.alt = item.alt;
      }
      if (ctaEl) {
        ctaEl.textContent = item.cta;
        ctaEl.dataset.id = item.id;
      }
      if (dotsEl) {
        dotsEl.querySelectorAll('.slider-dot').forEach((d, i) => d.classList.toggle('is-active', i === index));
      }
    }

    if (dotsEl) {
      items.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = `slider-dot${i === 0 ? ' is-active' : ''}`;
        dot.setAttribute('aria-label', `Варіант ${i + 1}`);
        dot.addEventListener('click', () => render(i));
        dotsEl.appendChild(dot);
      });
    }

    document.getElementById(prevId)?.addEventListener('click', () => render(index - 1));
    document.getElementById(nextId)?.addEventListener('click', () => render(index + 1));
  }

  createSolutionSlider({
    items: SOLUTIONS_DATA.connectivity,
    titleId: 'conn-title',
    descId: 'conn-desc',
    imgId: 'conn-img',
    ctaId: 'conn-cta',
    dotsId: 'conn-dots',
    prevId: 'conn-prev',
    nextId: 'conn-next'
  });

  createSolutionSlider({
    items: SOLUTIONS_DATA.consultancy,
    titleId: 'cons-title',
    descId: 'cons-desc',
    imgId: 'cons-img',
    ctaId: 'cons-cta',
    dotsId: 'cons-dots',
    prevId: 'cons-prev',
    nextId: 'cons-next'
  });

  /* ========================================================================
     8. REFERENCES HORIZONTAL CAROUSEL
     ======================================================================== */
  const refTrack = document.getElementById('references-track');
  const refBars = document.getElementById('ref-bars');
  const refPrev = document.getElementById('ref-prev');
  const refNext = document.getElementById('ref-next');
  let refIndex = 0;

  if (refTrack && refBars) {
    const cards = Array.from(refTrack.querySelectorAll('.ref-card'));
    cards.forEach((_, idx) => {
      const bar = document.createElement('span');
      bar.className = `ref-bar${idx === 0 ? ' is-active' : ''}`;
      refBars.appendChild(bar);
    });

    function scrollToRef(idx) {
      refIndex = Math.max(0, Math.min(cards.length - 1, idx));
      const card = cards[refIndex];
      if (card) {
        refTrack.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
      }
      refBars.querySelectorAll('.ref-bar').forEach((b, i) => b.classList.toggle('is-active', i === refIndex));
    }

    refPrev?.addEventListener('click', () => scrollToRef(refIndex - 1));
    refNext?.addEventListener('click', () => scrollToRef(refIndex + 1));
  }

  /* ========================================================================
     9. NEWSLETTER FORM VALIDATION
     ======================================================================== */
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterEmail = document.getElementById('newsletter-email');
  const newsletterFeedback = document.getElementById('newsletter-feedback');

  if (newsletterForm && newsletterEmail && newsletterFeedback) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!isValid) {
        newsletterFeedback.textContent = 'Будь ласка, введіть коректну електронну адресу.';
        newsletterFeedback.classList.add('is-error');
        newsletterEmail.focus();
        return;
      }

      newsletterFeedback.classList.remove('is-error');
      newsletterFeedback.textContent = `Дякуємо! Підписку для ${email} успішно оформлено.`;
      newsletterForm.reset();
    });
  }

  /* ========================================================================
     10. NATIVE DIALOG MODAL (Articles, Exercises, Equipment, Solutions, Refs)
     ======================================================================== */
  const modal = document.getElementById('detail-modal');
  const modalKicker = document.getElementById('modal-kicker');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openDetailModal(type, id) {
    if (!modal || !modalKicker || !modalTitle || !modalBody) return;

    if (type === 'article' && ARTICLES[id]) {
      const art = ARTICLES[id];
      modalKicker.textContent = art.kicker;
      modalTitle.textContent = art.title;
      modalBody.innerHTML = art.paragraphs.map((p) => `<p>${p}</p>`).join('');
    } else if (type === 'exercise') {
      const ex = EXERCISES.find((item) => item.id === id);
      if (!ex) return;
      modalKicker.textContent = `${ex.typeLabel} · ${ex.levelLabel}`;
      modalTitle.textContent = ex.name;
      modalBody.innerHTML = `
        <p>${ex.steps}</p>
        <div class="detail-modal__specs">
          <div class="spec-item"><span class="spec-item__label">Цільова група</span><span class="spec-item__value">${ex.muscleLabel}</span></div>
          <div class="spec-item"><span class="spec-item__label">Обладнання</span><span class="spec-item__value">${ex.equipmentLabel}</span></div>
        </div>
      `;
    } else {
      const source =
        type === 'equipment'
          ? EQUIPMENT_SPECS[id]
          : type === 'solution'
            ? SOLUTION_DETAILS[id]
            : REFERENCES[id];
      if (!source) return;
      modalKicker.textContent = source.kicker;
      modalTitle.textContent = source.title;
      modalBody.innerHTML = `
        <p>${source.description}</p>
        <div class="detail-modal__specs">
          ${source.specs
            .map(
              ([label, value]) =>
                `<div class="spec-item"><span class="spec-item__label">${label}</span><span class="spec-item__value tabular-nums">${value}</span></div>`
            )
            .join('')}
        </div>
      `;
    }

    if (typeof modal.showModal === 'function') {
      modal.showModal();
    } else {
      modal.setAttribute('open', '');
    }
  }

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-modal-type]');
    if (!trigger) return;
    openDetailModal(trigger.dataset.modalType, trigger.dataset.id);
  });

  modalCloseBtn?.addEventListener('click', () => modal?.close());
  modal?.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
});
