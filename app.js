/* ==========================================================================
   1. БАЗА ДЛЯ ГЛАВНОЙ СТРАНИЦЫ (index.html)
   Все изображения загружаются мгновенно из локальной папки img/
   ========================================================================== */
const FEELINGS_DATA = [
  {
    id: 'euphoria',
    num: '01 / ЭМОЦИЯ',
    name: 'Предзакатная эйфория над слиянием рек',
    sub: 'Столица закатов • Акватория Оки и Волги',
    image: 'img/nevsky.jpg',
    quote: 'Когда солнце садится точно за купола собора Александра Невского на Стрелке, стометровые Дятловы горы превращаются в природный партер.',
    routeLink: 'routes.html',
    pairings: ['Террасы набережной Федоровского', 'Парусная регата под метромостом', 'Концерт в зеркальном зале Пакгаузов']
  },
  {
    id: 'avantgarde',
    num: '02 / ЭМОЦИЯ',
    name: 'Индустриальный шик и инженерный гений',
    sub: 'Чугунное кружево 1896 года и гиперболоиды Шухова',
    image: 'img/shukhov.jpg',
    quote: 'Нижегородский регион — родина русской инженерной смелости: от сетчатых башен Владимира Шухова на берегу Оки до индустриальных муралов Выксы.',
    routeLink: 'region.html',
    pairings: ['Ажурные Пакгаузы на Стрелке', '128-метровая башня Шухова в Дзержинске', 'Муралы Эрика Булатова на заводе в Выксе']
  },
  {
    id: 'merchant',
    num: '03 / ЭМОЦИЯ',
    name: 'Купеческий размах «кармана России»',
    sub: 'Дворцы Верхне-Волжской набережной и бары Рождественской',
    image: 'img/stroganov.jpg',
    quote: 'Миллионные сделки Нижегородской ярмарки оставили городу палаты XVII века, белокаменное строгановское барокко и неорусский замок Госбанка.',
    routeLink: 'city.html',
    pairings: ['Строгановская церковь и пассаж Блиновых', 'Палаты Рукавишниковых на откосе', 'Здание Государственного банка на Покровке']
  },
  {
    id: 'mystic',
    num: '04 / ЭМОЦИЯ',
    name: 'Тишина усадеб и мистика Заволжья',
    sub: 'Озеро Светлояр, Керженская тайга и Болдинская осень',
    image: 'img/svetloyar.jpg',
    quote: 'В часе езды от мегаполиса начинаются заповедные леса Заволжья, легенда о невидимом граде Китеже и пруды пушкинского Болдина.',
    routeLink: 'region.html',
    pairings: ['Утренний туман на озере Светлояр', 'Экотропы Керженского заповедника', 'Роща Лучинник в Большом Болдине']
  }
];

const SIGNATURE_EXPERIENCES = [
  {
    id: 'exp-1',
    scope: 'city',
    mood: 'sunset',
    season: 'summer',
    tag: 'С воды • Вечер',
    title: 'Под парусом на закате у слияния Оки и Волги',
    location: 'Акватория Стрелки и Речного вокзала',
    duration: '2 часа',
    image: 'img/nizhnevolzhskaya.jpg',
    desc: 'Выход на спортивной или круизной яхте из залива у Гребного канала вдоль Чкаловской лестницы и стен Кремля к самому острию Стрелки в золотой час.'
  },
  {
    id: 'exp-2',
    scope: 'city',
    mood: 'avantgarde',
    season: 'all',
    tag: 'Музыка и архитектура',
    title: 'Концерт с панорамной стеклянной стеной в Пакгаузах',
    location: 'Стрелка, Концертный пакгауз',
    duration: '2.5 часа',
    image: 'img/pakgauzy.jpg',
    desc: 'Вечер симфонической или минималистичной музыки внутри металлических кружев 1896 года, когда позади оркестра открывается живая панорама ночной Волги.'
  },
  {
    id: 'exp-3',
    scope: 'region',
    mood: 'avantgarde',
    season: 'summer',
    tag: 'Экспедиция • Индустрия',
    title: 'Горячий прокат в Выксе и закат у башни Шухова',
    location: 'Дзержинск — Выкса',
    duration: '12 часов',
    image: 'img/shukhov.jpg',
    desc: 'Посещение действующего металлургического цеха с коллекцией индустриального стрит-арта и вечер у единственной в мире гиперболоидной опоры ЛЭП на Оке.'
  },
  {
    id: 'exp-4',
    scope: 'region',
    mood: 'merchant',
    season: 'summer',
    tag: 'Речной круиз • Волга',
    title: 'На крыльях «Валдая» к белокаменному Макарьеву',
    location: 'Нижний Новгород — Макарьев / Городец',
    duration: '6 часов',
    image: 'img/makaryev.jpg',
    desc: 'Полёт над водой на скоростном судне «Валдай 45Р» вниз по Волге к неприступным стенам Макарьевского монастыря XVII века, где шумела знаменитая ярмарка.'
  },
  {
    id: 'exp-5',
    scope: 'city',
    mood: 'merchant',
    season: 'all',
    tag: 'Закрытый показ • Модерн',
    title: 'Чаепитие из самовара в тайных садах Заповедных кварталов',
    location: 'Квартал церкви Трёх Святителей (ул. Короленко)',
    duration: '3 часа',
    image: 'img/pokrovka.jpg',
    desc: 'Иммерсивный променад по деревянному Нижнему XIX века, где жили Шаляпин и Горький, с заходом в отреставрированные особняки деревянного модерна.'
  },
  {
    id: 'exp-6',
    scope: 'region',
    mood: 'mystic',
    season: 'autumn',
    tag: 'Усадьба • Литература',
    title: 'Золотая Болдинская осень в родовом имении Пушкина',
    location: 'Большое Болдино и Львовка',
    duration: '1–2 дня',
    image: 'img/boldino.jpg',
    desc: 'Прогулка по подлинному барскому дому 1830 года, горбатым мостикам и заповедной роще Лучинник в дни пика осеннего листопада.'
  }
];

/* ==========================================================================
   2. БАЗА ДЛЯ СТРАНИЦЫ ГОРОДА (city.html) — 9 ДОМИНАНТ НИЖНЕГО НОВГОРОДА
   ========================================================================== */
const CITY_PLACES = [
  {
    id: 'nn-kremlin',
    scope: 'city',
    category: 'architecture',
    categoryLabel: 'Крепость XVI века',
    title: 'Нижегородский кремль и круговой боевой ход',
    distance: 'Кремль, Дмитриевская башня',
    duration: '2.5 часа',
    bestTime: 'За 2 часа до заката',
    coords: '56.3287° N, 44.0020° E',
    image: 'img/kremlin.jpg',
    excerpt: 'Единственный в России кремль с полностью открытым круговым маршрутом по стене (2045 метров) и перепадом высот в 80 метров.',
    history: 'Возведённый в 1500–1515 годах при участии итальянского зодчего Пьетро Франческо, Нижегородский кремль спускается по крутым отрогам Дятловых гор почти до самой воды. Во время прогулки по стене вы проходите все 13 башен — от Георгиевской до Коромысловой.',
    insiderTip: 'Воспользуйтесь воссозданным кремлёвским фуникулёром (элеватором) у Северной башни: он в точности повторяет трассу исторического подъёмника 1896 года и спускает прямо к улице Рождественской.'
  },
  {
    id: 'nn-strelka',
    scope: 'city',
    category: 'avantgarde',
    categoryLabel: 'Индустриальный авангард',
    title: 'Стрелка и ажурные Пакгаузы 1896 года',
    distance: 'Стрелка, ул. Стрелка, 21',
    duration: '2 часа',
    bestTime: 'Сумерки и золотой час',
    coords: '56.3346° N, 43.9728° E',
    image: 'img/strelka.jpg',
    excerpt: 'Географический мыс на месте слияния Оки и Волги с металлическими конструкциями павильонов Всероссийской выставки 1896 года.',
    history: 'Более ста лет ажурные клёпаные каркасы были скрыты под кирпичными стенами портовых складов. После расчистки и реставрации внутри стальных кружев разместили ультрасовременный концертный зал и выставочную галерею.',
    insiderTip: 'Пройдите до самого острия мыса Стрелки — в солнечную погоду с берега невооружённым глазом видна чёткая граница двух разных по цвету потоков Оки и Волги.'
  },
  {
    id: 'nn-gosbank',
    scope: 'city',
    category: 'architecture',
    categoryLabel: 'Неорусский модерн',
    title: 'Ансамбль Государственного банка на Покровке',
    distance: 'Ул. Большая Покровская, 26',
    duration: '1 час',
    bestTime: 'Дневной свет',
    coords: '56.3204° N, 43.9982° E',
    image: 'img/gosbank.jpg',
    excerpt: 'Сказочный белокаменный терем-замок 1913 года по проекту Владимира Покровского с фресками по эскизам Ивана Билибина.',
    history: 'Построенный к 300-летию дома Романовых комплекс банка снаружи напоминает средневековые царские палаты с коваными воротами и часозвоней, а внутри скрывает сводчатые операционные залы, расписанные темперой и золотом.',
    insiderTip: 'Даже когда внутрь операционного зала нет экскурсий, обязательно обойдите здание со стороны улицы Грузинской, чтобы рассмотреть керамические майоликовые панно и крытую арку-переход с часами.'
  },
  {
    id: 'nn-stroganov',
    scope: 'city',
    category: 'architecture',
    categoryLabel: 'Строгановское барокко',
    title: 'Строгановская церковь и улица Рождественская',
    distance: 'Ул. Рождественская, 34',
    duration: '2–3 часа',
    bestTime: 'Вечер',
    coords: '56.3282° N, 43.9875° E',
    image: 'img/stroganov.jpg',
    excerpt: 'Фирменное белокаменное кружево конца XVII века среди купеческих банков, пассажей и главных баров Нижнего посада.',
    history: 'Храм построен купцом Григорием Строгановым. На колокольне сохранились старинные куранты, а сама улица Рождественская насчитывает 35 памятников архитектуры, включая знаменитый Блиновский пассаж.',
    insiderTip: 'Поднимитесь на звонницу Строгановской церкви до 17:00 — это лучшая точка, чтобы увидеть крыши Рождественской, Речной вокзал и Стрелку с средней высоты.'
  },
  {
    id: 'nn-chkalov',
    scope: 'city',
    category: 'sunset',
    categoryLabel: 'Панорамный откос',
    title: 'Чкаловская лестница и Верхне-Волжская набережная',
    distance: 'Площадь Минина и Пожарского',
    duration: '1.5 часа',
    bestTime: 'Золотой час и сумерки',
    coords: '56.3316° N, 44.0094° E',
    image: 'img/chkalov.jpg',
    excerpt: 'Монументальная восьмёрка из 560 ступеней на высоком волжском откосе и парадная анфилада купеческих особняков.',
    history: 'Заложенная в 1943 году лестница связывает Георгиевскую башню Кремля с Нижне-Волжской набережной. От неё на восток тянется Верхне-Волжская набережная, спроектированная по личному указу Николая I как главный фасад города над Волгой.',
    insiderTip: 'На пересечении двух нижних колец лестницы есть акустическая точка: если встать ровно в центр круглой площадки, ваш голос будет звучать с эффектом микрофонного резонанса.'
  },
  {
    id: 'nn-rukavishnikov',
    scope: 'city',
    category: 'architecture',
    categoryLabel: 'Дворцовая эклектика',
    title: 'Усадьба купцов Рукавишниковых',
    distance: 'Верхне-Волжская набережная, 7',
    duration: '1.5 часа',
    bestTime: 'Днём',
    coords: '56.3298° N, 44.0162° E',
    image: 'img/rukavishnikov.jpg',
    excerpt: 'Самый роскошный особняк дореволюционного Нижнего в стиле итальянского палаццо с мраморной парадной лестницей и бальным залом.',
    history: 'Купец-миллионер Сергей Рукавишников пригласил московского архитектора Бойцова и скульптора Микешина, чтобы создать дворец, превосходящий столичные резиденции.',
    insiderTip: 'Купите единый билет с посещением парадного второго этажа и выходом на балкон-бельведер с видом на заволжские дали.'
  },
  {
    id: 'nn-fedorovsky',
    scope: 'city',
    category: 'sunset',
    categoryLabel: 'Террасный амфитеатр',
    title: 'Набережная Федоровского и Парк 800-летия',
    distance: 'Набережная Федоровского',
    duration: '1.5 часа',
    bestTime: 'За 45 минут до заката',
    coords: '56.3249° N, 43.9841° E',
    image: 'img/fedorovsky.jpg',
    excerpt: 'Каскад деревянных террас, парящих пешеходных мостов через овраги и стеклянных беседок прямо над Окой.',
    history: 'Высокий склон между Почтовым съездом и улицей Заломова веками служил смотровой террасой. Сегодня это главное общественное пространство для наблюдения за заходящим солнцем.',
    insiderTip: 'Лучший ракурс открывается не с верхнего тротуара, а с нижнего яруса деревянных амфитеатров чуть левее памятника Максиму Горькому.'
  },
  {
    id: 'nn-fair',
    scope: 'city',
    category: 'architecture',
    categoryLabel: 'Торговая империя',
    title: 'Главный ярмарочный дом и собор Александра Невского',
    distance: 'Ул. Совнаркомовская, 13',
    duration: '1.5 часа',
    bestTime: 'Утро или вечер с подсветкой',
    coords: '56.3285° N, 43.9612° E',
    image: 'img/yarmarka.jpg',
    excerpt: 'Историческое сердце всероссийской торговли XIX века, где определялись мировые цены на чай, пушнину и уральское железо.',
    history: 'Грандиозный Главный ярмарочный дом 1890 года окружён благоустроенной площадью с фонтаном XIX века, ярмарочной башней и 87-метровым собором Александра Невского.',
    insiderTip: 'Зимой на площади перед Главным домом заливают большой каток и ставят дровяную печь под открытым небом.'
  },
  {
    id: 'nn-arsenal',
    scope: 'city',
    category: 'avantgarde',
    categoryLabel: 'Современное искусство',
    title: 'Арсенал (Волго-Вятский филиал ГМИИ им. Пушкина)',
    distance: 'Кремль, корпус 6',
    duration: '2 часа',
    bestTime: 'Среда (свободный вход) или выходные',
    coords: '56.3292° N, 44.0041° E',
    image: 'img/arsenal.jpg',
    excerpt: 'Крупнейшая институция современного искусства Поволжья в здании николаевского оружейного арсенала 1843 года.',
    history: 'Реставраторы сохранили исторические кирпичные своды Монье и чугунные колонны XIX века, интегрировав в них выставочные залы мирового музейного стандарта.',
    insiderTip: 'В левом крыле первого этажа работает независимый книжный магазин с редкими монографиями по нижегородскому конструктивизму и деревянному зодчеству.'
  }
];

/* ==========================================================================
   3. БАЗА ДЛЯ СТРАНИЦЫ ОБЛАСТИ (region.html) — 8 ЭКСПЕДИЦИЙ С ТЕЛЕМЕТРИЕЙ
   ========================================================================== */
const REGION_EXPEDITIONS = [
  {
    id: 'reg-vyksa',
    scope: 'region',
    category: 'industrial',
    categoryLabel: 'Индустрия и стрит-арт',
    title: 'Выкса: Металлургическая империя и «Выкса-фестиваль»',
    distance: '186 км от Нижнего Новгорода',
    duration: '2.5 часа в пути (трасса М-12 / Муромский тракт)',
    transport: 'Автомобиль / Заказной трансфер',
    bestTime: 'Май — Октябрь',
    coords: '55.3194° N, 42.1730° E',
    image: 'img/vyksa.jpg',
    excerpt: 'Моногород на границе лесов и озёр, ставший главной российской лабораторией паблик-арта и промышленного туризма.',
    history: 'Основанная в XVIII веке заводчиками братьями Баташевыми Выкса объединяет каскад рукотворных прудов, классицистическую усадьбу, гиперболоидную башню и водонапорные своды Владимира Шухова с самым большим в Европе индустриальным муралом Эрика Булатова (2500 м²) прямо на цехе завода.',
    insiderTip: 'Запишитесь заранее на промышленный маршрут по Литейно-прокатному комплексу и посмотрите деревянный павильон «Крылья» в старинном парке лебединых прудов.'
  },
  {
    id: 'reg-shukhov',
    scope: 'region',
    category: 'industrial',
    categoryLabel: 'Инженерный авангард',
    title: 'Шуховская башня на берегу Оки (Дзержинск)',
    distance: '38 км от Нижнего Новгорода',
    duration: '45 минут в пути',
    transport: 'Автомобиль / Электричка + такси',
    bestTime: 'Золотой час круглый год',
    coords: '56.1925° N, 43.5428° E',
    image: 'img/shukhov.jpg',
    excerpt: 'Единственная в мире сохранившаяся многосекционная стальная гиперболоидная опора линии электропередачи (128 метров, 1929 год).',
    history: 'Спроектированная великим инженером Владимиром Шуховым башня стоит на высоком песчаном берегу Оки посреди соснового бора. Вечером на пяти секциях стальной сетки зажигается динамическая архитектурная подсветка из 23 000 светодиодов.',
    insiderTip: 'Приезжайте за час до сумерек: вы увидите башню и при естественном закатном свете на фоне сосен, и в момент включения вечерней световой инсталляции.'
  },
  {
    id: 'reg-gorodets',
    scope: 'region',
    category: 'crafts',
    categoryLabel: 'Древний город на Волге',
    title: 'Городец: Глухая домовая резьба и Музейный квартал',
    distance: '55 км от Нижнего Новгорода',
    duration: '50 минут на судне «Валдай» / 1 час на авто',
    transport: '«Валдай 45Р» по Волге / Авто',
    bestTime: 'Май — Сентябрь (речная навигация)',
    coords: '56.6444° N, 43.4703° E',
    image: 'img/gorodets.jpg',
    excerpt: 'Древнейшая крепость Нижегородского Поволжья (1152 г.) с купеческими улицами, украшенными рельефной резьбой со сказочными львами и берегинями.',
    history: 'Построенный Юрием Долгоруким Городец сохранил подлинный Музейный квартал XIX века, земляные валы XII столетия, крупнейшую в России коллекцию самоваров в усадьбе Гришаева и традицию печатных городецких пряников.',
    insiderTip: 'Поднимитесь на смотровую площадку у памятника Александру Невскому над Волгой и попробуйте испечь печатный пряник в старинной деревянной форме.'
  },
  {
    id: 'reg-semenov',
    scope: 'region',
    category: 'crafts',
    categoryLabel: 'Художественный код',
    title: 'Семёнов: Столица золотой хохломы и старообрядческий модерн',
    distance: '72 км от Нижнего Новгорода',
    duration: '55 минут на электричке / 1 час на авто',
    transport: 'Электропоезд с Московского вокзала / Авто',
    bestTime: 'Круглый год',
    coords: '56.7892° N, 44.4925° E',
    image: 'img/semenov.jpg',
    excerpt: 'Город с французской лучевой планировкой улиц XVIII века, где из серебристого олова и льняной олифы в печи рождается золотая хохлома.',
    history: 'Исторический центр Семёнова спроектирован по принципу площадей-звёзд, за что его прозвали «маленьким Парижем». Здесь работают действующие цеха фабрики «Хохломская роспись» и сохранились старообрядческие купеческие усадьбы.',
    insiderTip: 'Попросите экскурсию непосредственно в токарочный и живописный цеха фабрики, чтобы увидеть момент превращения серебряной чаши в золотую после закалки в печи.'
  },
  {
    id: 'reg-arzamas',
    scope: 'region',
    category: 'architecture',
    categoryLabel: 'Имперский классицизм',
    title: 'Арзамас: Соборная площадь и старинный Гостиный ряд',
    distance: '112 км от Нижнего Новгорода',
    duration: '1.5 часа по трассе Р-158 или М-12',
    transport: 'Автомобиль / Скоростной поезд',
    bestTime: 'Круглый год',
    coords: '55.3867° N, 43.8142° E',
    image: 'img/arzamas.jpg',
    excerpt: 'Грандиозный Воскресенский собор с 48 колоннами и объёмными фресками-гризайлями над отреставрированным купеческим центром.',
    history: 'Построенный горожанами в честь победы 1812 года собор господствует над каскадом арзамасских холмов. Внизу раскинулась улица Гостиный ряд с аутентичными вывесками XIX века в дореформенной орфографии.',
    insiderTip: 'Зайдите в Музей Русского Патриаршества в здании старинного магистрата — единственное в мире собрание подобного профиля.'
  },
  {
    id: 'reg-boldino',
    scope: 'region',
    category: 'nature',
    categoryLabel: 'Дворянская усадьба',
    title: 'Большое Болдино и заповедная роща Лучинник',
    distance: '230 км от Нижнего Новгорода',
    duration: '3 часа в пути',
    transport: 'Автомобиль / Экскурсионный автобус',
    bestTime: 'Сентябрь — Октябрь (Болдинская осень)',
    coords: '55.0028° N, 45.3133° E',
    image: 'img/boldino.jpg',
    excerpt: 'Подлинная пушкинская вотчина, сохранившая господский дом 1830 года, каскад зеркальных прудов, вековые ивы и деревянную вотчинную контору.',
    history: 'Три болдинские осени стали вершиной творчества Александра Пушкина. В отличие от многих других литературных усадеб, главный дом в Болдине не горел и сохранил подлинные стены и парковую геометрию.',
    insiderTip: 'После главной усадьбы проедьте 8 километров в деревню Львовка — там в тишине полей стоит дом старшего сына поэта и деревянная церковно-приходская школа.'
  },
  {
    id: 'reg-svetloyar',
    scope: 'region',
    category: 'nature',
    categoryLabel: 'Дикая природа и легенды',
    title: 'Озеро Светлояр и экотропы Керженского заповедника',
    distance: '128 км от Нижнего Новгорода',
    duration: '1 час 50 минут в пути (Заволжье)',
    transport: 'Автомобиль',
    bestTime: 'Июнь — Сентябрь',
    coords: '56.8192° N, 45.0928° E',
    image: 'img/svetloyar.jpg',
    excerpt: 'Идеальный овал священного озера, хранящего легенду о сокрытом граде Китеже, и настильные тропы через глухую заволжскую тайгу.',
    history: 'Карстово-ледниковое озеро глубиной 36 метров окружено сосново-берёзовыми холмами в селе Владимирское. А на обратном пути в посёлке Рустай расположены деревянные тропы биосферного Керженского заповедника.',
    insiderTip: 'В селе Владимирское посетите деревянный историко-художественный музей «Китеж» с коллекцией уникальной керамики.'
  },
  {
    id: 'reg-makaryev',
    scope: 'region',
    category: 'architecture',
    categoryLabel: 'Речная твердыня',
    title: 'Макарьевский монастырь и замок Шереметева на Волге',
    distance: '98 км вниз по Волге',
    duration: '1 час 45 минут на «Валдае» или авто + паром',
    transport: 'Судно «Валдай 45Р» / Авто + паром из Лыскова',
    bestTime: 'Летняя навигация',
    coords: '56.0825° N, 45.0569° E',
    image: 'img/makaryev.jpg',
    excerpt: 'Белокаменная крепость XVII века, вырастающая прямо из волжской воды у пристани Лысково.',
    history: 'Именно у стен Желтоводского Макариева монастыря почти два столетия шумела всероссийская Макарьевская ярмарка, прежде чем в 1817 году переехать в Нижний Новгород. А дальше вниз по Волге стоит неоготический замок Шереметева со стеклянными куполами.',
    insiderTip: 'Если едете на машине, оставьте авто на правом берегу в Лыскове и переправьтесь к монастырю на колоритном волжском пароме.'
  }
];

/* ==========================================================================
   4. КВАРТАЛЫ И МАРШРУТЫ
   ========================================================================== */
const NEIGHBORHOODS_DB = [
  {
    id: 'hood-pokrovka',
    name: 'Большая Покровская и Ильинка',
    sub: 'Дворянско-купеческий променад и палаты XVII века',
    walkTime: '2.5 часа пешком',
    keyAddresses: 'Б. Покровская, 26 (Госбанк) • Ильинская, 68 (Усадьба Маркова)',
    image: 'img/pokrovka.jpg',
    desc: 'Главная пешеходная артерия старого города со зданиями Дворянского собрания, Драматического театра и сказочным Госбанком. Если свернуть с неё к Почаинскому оврагу, вы попадёте на холмистую купеческую улицу Ильинскую («Ильинку») с белокаменными палатами Олисова и Пушникова XVII века.'
  },
  {
    id: 'hood-rozhdestvenskaya',
    name: 'Рождественская сторона',
    sub: 'Бывшая биржа империи, чугунные галереи и барный кластер',
    walkTime: '2 часа пешком',
    keyAddresses: 'Рождественская, 24 (Блиновский пассаж) • Нагорный переулок',
    image: 'img/rozhdestvenskaya.jpg',
    desc: 'Улица-музей у подножия Кремлёвского холма, где в XIX веке ворочали миллионами соляные и хлебные короли Бугровы, Блиновы и Строгановы. Сегодня в её кирпичных сводчатых подвалах и внутренних дворах-колодцах работают лучшие гастробары, сидрерии и винные веранды.'
  },
  {
    id: 'hood-zapovednye',
    name: 'Заповедные кварталы (Трёх Святителей)',
    sub: 'Деревянный модерн, тайные сады и уличный арт',
    walkTime: '1.5 часа пешком',
    keyAddresses: 'Короленко, 18 (Усадьба Скворцовой) • Новая, 22 (Дом Щелокова)',
    image: 'img/rukavishnikov.jpg',
    desc: 'Уникальный для города-миллионника живой квартал деревянной архитектуры рубежа XIX–XX веков на улицах Короленко, Славянской и Новой. Отреставрированные особняки с резными эркерами, цветными стеклами и старыми яблоневыми садами, где проходят камерные концерты.'
  },
  {
    id: 'hood-strelka',
    name: 'Стрелка и Старое Канавино',
    sub: 'Слияние двух рек, Ярмарка и индустриальный масштаб',
    walkTime: '2 часа пешком',
    keyAddresses: 'Стрелка, 21 (Пакгаузы) • Совнаркомовская, 13 (Ярмарка)',
    image: 'img/yarmarka.jpg',
    desc: 'Заречный амфитеатр города, откуда открывается главный панорамный вид на Кремль и Дятловы горы. Здесь соединились купеческий размах Главного ярмарочного дома и авангардная эстетика чугунных Пакгаузов на самом мысу Стрелки.'
  }
];

const MASTER_ROUTES = {
  'route-48h': {
    title: 'Нижний за 48 часов: Архитектура, реки и гастрономия',
    lead: 'Идеально выверенный двухдневный сценарий без суеты: от кругового обхода Кремлёвской стены и фуникулёра до вечернего концерта в Пакгаузах.',
    steps: [
      {
        time: 'ДЕНЬ 01 • 10:00',
        title: 'Большая Покровская, Госбанк и круговой ход Кремля',
        meta: 'Пешком 4.5 км • Верхний посад',
        image: 'img/kremlin.jpg',
        desc: 'Утренний спешелти-кофе во двориках Большой Покровской, осмотр неорусского замка Госбанка и вход в Кремль через Дмитриевскую башню. Пройдите полный 2-километровый круг по боевому ходу стены и спуститесь на фуникулёре к площади Народного единства.'
      },
      {
        time: 'ДЕНЬ 01 • 15:00',
        title: 'Заповедные кварталы и современное искусство в Арсенале',
        meta: 'Культурная программа • 3 часа',
        image: 'img/arsenal.jpg',
        desc: 'Прогулка по деревянным улицам Короленко и Славянской с поиском работ нижегородского стрит-арта, после чего — актуальная выставка в кирпичных сводах Арсенала.'
      },
      {
        time: 'ДЕНЬ 01 • 18:30',
        title: 'Закат на набережной Федоровского и ужин на Рождественской',
        meta: 'Золотой час • Амфитеатр над Окой',
        image: 'img/fedorovsky.jpg',
        desc: 'Займите места на деревянных террасах парка 800-летия за 40 минут до заката, а с наступлением сумерек спуститесь по Почтовому съезду в купеческие бары Рождественской.'
      },
      {
        time: 'ДЕНЬ 02 • 11:30',
        title: 'Канатная дорога через Волгу, Ярмарка и вечер в Пакгаузах',
        meta: 'Верхне-Волжский откос и Стрелка',
        image: 'img/strelka.jpg',
        desc: 'Переправа над Волгой по канатной дороге, променад мимо усадьбы Рукавишниковых к Чкаловской лестнице, а вечером — переезд на Стрелку к Главной ярмарке и ажурным Пакгаузам.'
      }
    ]
  },
  'route-sunset': {
    title: 'Охота за закатом: По всем видовым откосам города',
    lead: 'Маршрут для фотографов и эстетов по высокой правой бровке Оки и Волги с лучшими точками обзора.',
    steps: [
      {
        time: '15:00 • ТОЧКА 01',
        title: 'Смотровая у Вознесенского Печерского монастыря и кабина канатной дороги',
        meta: 'Азимут на волжские луга • Высота 85 м',
        image: 'img/pechersky.jpg',
        desc: 'Панорама крутого изгиба Волги и старинного монастырского ансамбля XVII века с наклонной колокольней.'
      },
      {
        time: '17:00 • ТОЧКА 02',
        title: 'Александровский сад и восьмёрка Чкаловской лестницы',
        meta: 'Парадный откос • 560 ступеней',
        image: 'img/chkalov.jpg',
        desc: 'Прогулка по террасам первого общественного парка города (1835 г.) к памятнику Чкалову.'
      },
      {
        time: '18:30 • ТОЧКА 03',
        title: 'Парящие мосты набережной Федоровского',
        meta: 'Кульминация заката • Вид на Стрелку',
        image: 'img/fedorovsky.jpg',
        desc: 'Прямой фронтальный вид на заходящее солнце точно над слиянием Оки и Волги и куполами собора Александра Невского.'
      }
    ]
  },
  'route-oblast': {
    title: 'Инженерно-усадебное кольцо: Шухов — Выкса — Арзамас — Болдино',
    lead: 'Двухдневная автомобильная экспедиция на юг и юго-запад области по скоростной трассе.',
    steps: [
      {
        time: 'ДЕНЬ 01 • УТРО',
        title: 'Сосновый бор и 128-метровая башня Шухова на Оке',
        meta: '38 км от Нижнего Новгорода',
        image: 'img/shukhov.jpg',
        desc: 'Осмотр единственной в мире сетчатой гиперболоидной опоры ЛЭП 1929 года на высоком берегу Оки.'
      },
      {
        time: 'ДЕНЬ 01 • ДЕНЬ И ВЕЧЕР',
        title: 'Выкса: Усадьба Баташевых, заводские муралы и арт-парк',
        meta: '186 км от Нижнего Новгорода',
        image: 'img/vyksa.jpg',
        desc: 'Погружение в индустриальную культуру: водонапорная башня Шухова, мурал Эрика Булатова и вечерняя прогулка вдоль Верхневыксунского пруда.'
      },
      {
        time: 'ДЕНЬ 02 • ПОЛДЕНЬ И ВЕЧЕР',
        title: 'Соборная площадь Арзамаса и пушкинское Большое Болдино',
        meta: 'Арзамас — Большое Болдино',
        image: 'img/arzamas.jpg',
        desc: 'Обед на историческом Гостином ряду в Арзамасе с видом на Воскресенский собор и финальный переезд в тихие парки Большого Болдина.'
      }
    ]
  }
};

/* ==========================================================================
   СИСТЕМА ИЗБРАННОГО («МОЙ МАРШРУТ» — localStorage)
   ========================================================================== */
const ALL_CATALOG_ITEMS = [...CITY_PLACES, ...REGION_EXPEDITIONS, ...SIGNATURE_EXPERIENCES];

function getSavedIds() {
  try {
    return JSON.parse(localStorage.getItem('meetNizhny_v2_favs') || '[]');
  } catch (e) {
    return [];
  }
}

function toggleSavedItem(id, event) {
  if (event) event.stopPropagation();
  const list = getSavedIds();
  const idx = list.indexOf(id);
  if (idx > -1) list.splice(idx, 1);
  else list.push(id);
  localStorage.setItem('meetNizhny_v2_favs', JSON.stringify(list));
  syncFavoritesUI();
}

function syncFavoritesUI() {
  const saved = getSavedIds();
  document.querySelectorAll('.fav-count').forEach(el => {
    el.textContent = `[${saved.length}]`;
  });
  document.querySelectorAll('.fav-icon-btn').forEach(btn => {
    const id = btn.getAttribute('data-id');
    const active = saved.includes(id);
    btn.classList.toggle('active', active);
    btn.innerHTML = active ? '♥' : '♡';
  });
  renderDrawerItems();
}

function renderDrawerItems() {
  const box = document.getElementById('drawerList');
  if (!box) return;
  const saved = getSavedIds();
  if (!saved.length) {
    box.innerHTML = `<p style="color:var(--text-muted); font-size:0.9rem;">Список пуст. Отмечайте значком ♡ локации в городе и области, чтобы собрать собственную программу поездки.</p>`;
    return;
  }
  const items = ALL_CATALOG_ITEMS.filter(x => saved.includes(x.id));
  box.innerHTML = items.map(item => `
    <div style="display:flex; justify-content:space-between; align-items:center; padding:1rem 0; border-bottom:1px solid var(--line-light);">
      <div>
        <div class="mono-tag" style="color:var(--accent-bronze);">${item.categoryLabel || item.tag}</div>
        <div class="serif" style="font-size:1.3rem; cursor:pointer;" onclick="openDetailModal('${item.id}')">${item.title}</div>
        <div style="font-size:0.78rem; color:var(--text-muted);">${item.distance || item.location}</div>
      </div>
      <button onclick="toggleSavedItem('${item.id}')" style="background:none; border:none; cursor:pointer; font-size:1rem; color:var(--text-muted);">✕</button>
    </div>
  `).join('');
}

/* ==========================================================================
   РЕНДЕР КАРТОЧЕК И МОДАЛЬНОГО ОКНА
   ========================================================================== */
function buildEditorialCard(item, isRegion = false) {
  const isSaved = getSavedIds().includes(item.id);
  return `
    <article class="editorial-card">
      <div class="editorial-media">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="media-top-bar">
          <span class="media-tag">${item.categoryLabel || item.tag}</span>
          <button class="fav-icon-btn ${isSaved ? 'active' : ''}" data-id="${item.id}" onclick="toggleSavedItem('${item.id}', event)">
            ${isSaved ? '♥' : '♡'}
          </button>
        </div>
      </div>
      <div class="editorial-meta">
        <span>${item.distance || item.location}</span>
        <span>${item.duration}</span>
      </div>
      <h3 class="editorial-title">${item.title}</h3>
      <p class="editorial-desc">${item.excerpt || item.desc}</p>
      ${isRegion ? `
        <div class="telemetry-box">
          <div class="telemetry-item">
            <span>Транспорт</span>
            <strong>${item.transport}</strong>
          </div>
          <div class="telemetry-item">
            <span>Координаты</span>
            <strong>${item.coords}</strong>
          </div>
        </div>
      ` : ''}
      <div>
        <button class="editorial-link" onclick="openDetailModal('${item.id}')">Читать досье локации →</button>
      </div>
    </article>
  `;
}

function openDetailModal(id) {
  const item = ALL_CATALOG_ITEMS.find(x => x.id === id);
  if (!item) return;
  const modal = document.getElementById('placeModal');
  const body = document.getElementById('placeModalBody');
  if (!modal || !body) return;

  const isSaved = getSavedIds().includes(item.id);

  body.innerHTML = `
    <div class="modal-hero">
      <img src="${item.image}" alt="${item.title}">
      <button class="modal-close" onclick="closeDetailModal()">✕</button>
    </div>
    <div class="modal-body">
      <span class="eyebrow">${item.categoryLabel || item.tag}</span>
      <h2 class="section-title" style="font-size:2.6rem;">${item.title}</h2>
      <div class="editorial-meta" style="margin-bottom:1.75rem;">
        <span>ЛОКАЦИЯ: ${item.distance || item.location}</span>
        <span>ВРЕМЯ: ${item.duration}</span>
        ${item.coords ? `<span>GPS: ${item.coords}</span>` : ''}
      </div>
      <p style="font-size:1.05rem; line-height:1.8; margin-bottom:1.5rem;">
        ${item.history || item.desc}
      </p>
      ${item.insiderTip ? `
        <div class="insider-callout">
          <div class="mono-tag" style="color:var(--accent-terracotta); margin-bottom:0.4rem;">Рекомендация куратора meetNIZHNY</div>
          <p style="font-size:0.95rem;">${item.insiderTip}</p>
        </div>
      ` : ''}
      <div style="display:flex; gap:1rem; flex-wrap:wrap; margin-top:2rem;">
        <button class="btn btn-terracotta" onclick="toggleSavedItem('${item.id}'); openDetailModal('${item.id}')">
          ${isSaved ? '♥ Сохранено в маршруте (Убрать)' : '♡ Сохранить в мой маршрут'}
        </button>
        <button class="btn btn-outline-dark" onclick="closeDetailModal()">Закрыть</button>
      </div>
    </div>
  `;
  modal.classList.add('open');
}

function closeDetailModal() {
  const modal = document.getElementById('placeModal');
  if (modal) modal.classList.remove('open');
}

/* ==========================================================================
   ИНИЦИАЛИЗАЦИЯ СТРАНИЦ
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  syncFavoritesUI();

  // Автоматическая установка локального логотипа (favicon) на всех страницах
  const favLink = document.createElement('link');
  favLink.rel = 'icon';
  favLink.type = 'image/png';
  favLink.href = 'logo.png';
  document.head.appendChild(favLink);

  // Drawer & Modal Listeners
  const favBtn = document.getElementById('favDrawerBtn');
  const favDrawer = document.getElementById('favDrawer');
  const favClose = document.getElementById('favDrawerClose');
  if (favBtn && favDrawer) favBtn.addEventListener('click', () => favDrawer.classList.add('open'));
  if (favClose && favDrawer) favClose.addEventListener('click', () => favDrawer.classList.remove('open'));
  if (favDrawer) favDrawer.addEventListener('click', e => { if (e.target === favDrawer) favDrawer.classList.remove('open'); });

  const modal = document.getElementById('placeModal');
  if (modal) modal.addEventListener('click', e => { if (e.target === modal) closeDetailModal(); });

  // 1. INDEX.HTML: Feelings Matrix & 1-2-3 Signature Finder
  const feelingsNav = document.getElementById('feelingsNav');
  const feelingStage = document.getElementById('feelingStage');
  if (feelingsNav && feelingStage) {
    window.selectFeeling = (id) => {
      const f = FEELINGS_DATA.find(x => x.id === id) || FEELINGS_DATA[0];
      feelingsNav.innerHTML = FEELINGS_DATA.map(item => `
        <button class="feeling-btn ${item.id === f.id ? 'active' : ''}" onclick="window.selectFeeling('${item.id}')">
          <span class="feeling-num">${item.num}</span>
          <span class="feeling-name">${item.name}</span>
          <span class="feeling-sub">${item.sub}</span>
        </button>
      `).join('');

      feelingStage.innerHTML = `
        <img class="feeling-stage-img" src="${f.image}" alt="${f.name}">
        <div class="feeling-stage-body">
          <span class="eyebrow">The Pursuit of Feeling</span>
          <h3 class="serif" style="font-size:2.3rem; margin-bottom:1rem;">${f.name}</h3>
          <p style="color:var(--text-ivory-muted); margin-bottom:1.75rem; font-weight:300;">${f.quote}</p>
          <div class="mono-tag" style="color:var(--accent-bronze-light); margin-bottom:0.75rem;">Ключевые точки состояния:</div>
          <ul style="list-style:none; display:grid; gap:0.5rem; margin-bottom:2rem; font-size:0.9rem;">
            ${f.pairings.map(p => `<li>— ${p}</li>`).join('')}
          </ul>
          <div>
            <a href="${f.routeLink}" class="btn btn-outline-light">Перейти к сценарию →</a>
          </div>
        </div>
      `;
    };
    window.selectFeeling(FEELINGS_DATA[0].id);
  }

  const sigGrid = document.getElementById('signatureExperiencesGrid');
  if (sigGrid) {
    const renderSignatures = () => {
      const scope = document.getElementById('rlScope')?.value || 'all';
      const mood = document.getElementById('rlMood')?.value || 'all';
      const season = document.getElementById('rlSeason')?.value || 'all';

      const filtered = SIGNATURE_EXPERIENCES.filter(item => {
        const mScope = scope === 'all' || item.scope === scope;
        const mMood = mood === 'all' || item.mood === mood;
        const mSeason = season === 'all' || item.season === 'all' || item.season === season;
        return mScope && mMood && mSeason;
      });

      sigGrid.innerHTML = filtered.length
        ? filtered.map(item => buildEditorialCard(item, false)).join('')
        : `<p style="grid-column:1/-1; color:var(--text-muted);">Для этого сочетания фильтров выберите «Любой сезон» или «Все эмоции».</p>`;
    };
    ['rlScope', 'rlMood', 'rlSeason'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', renderSignatures);
    });
    renderSignatures();
  }

  // 2. CITY.HTML: City Architecture Grid + Neighborhoods Explorer
  const cityGrid = document.getElementById('cityDirectoryGrid');
  if (cityGrid) {
    const renderCity = (cat = 'all') => {
      const items = CITY_PLACES.filter(p => cat === 'all' || p.category === cat);
      cityGrid.innerHTML = items.map(item => buildEditorialCard(item, false)).join('');
    };
    renderCity();

    document.querySelectorAll('[data-city-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-city-cat]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderCity(btn.getAttribute('data-city-cat'));
      });
    });
  }

  const hoodSidebar = document.getElementById('hoodSidebar');
  const hoodContent = document.getElementById('hoodContent');
  if (hoodSidebar && hoodContent) {
    window.selectNeighborhood = (id) => {
      const h = NEIGHBORHOODS_DB.find(x => x.id === id) || NEIGHBORHOODS_DB[0];
      hoodSidebar.innerHTML = NEIGHBORHOODS_DB.map(item => `
        <button class="hood-btn ${item.id === h.id ? 'active' : ''}" onclick="window.selectNeighborhood('${item.id}')">
          <div class="serif" style="font-size:1.45rem; margin-bottom:0.2rem;">${item.name}</div>
          <div style="font-size:0.78rem; opacity:0.75;">${item.sub}</div>
        </button>
      `).join('');

      hoodContent.innerHTML = `
        <img src="${h.image}" alt="${h.name}">
        <div class="hood-details">
          <span class="eyebrow">Квартал • ${h.walkTime}</span>
          <h3 class="serif" style="font-size:2.4rem; margin-bottom:1rem;">${h.name}</h3>
          <p style="color:var(--text-charcoal); margin-bottom:1.75rem; font-weight:300;">${h.desc}</p>
          <div style="border-top:1px solid var(--line-light-strong); padding-top:1rem;">
            <div class="mono-tag" style="color:var(--accent-bronze); margin-bottom:0.35rem;">Архитектурные ориентиры:</div>
            <div style="font-size:0.88rem; font-weight:500;">${h.keyAddresses}</div>
          </div>
        </div>
      `;
    };
    window.selectNeighborhood(NEIGHBORHOODS_DB[0].id);
  }

  // 3. REGION.HTML: Regional Expeditions Grid with Telemetry
  const regionGrid = document.getElementById('regionDirectoryGrid');
  if (regionGrid) {
    const renderRegion = (cat = 'all') => {
      const items = REGION_EXPEDITIONS.filter(p => cat === 'all' || p.category === cat);
      regionGrid.innerHTML = items.map(item => buildEditorialCard(item, true)).join('');
    };
    renderRegion();

    document.querySelectorAll('[data-reg-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-reg-cat]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderRegion(btn.getAttribute('data-reg-cat'));
      });
    });
  }

  // 4. ROUTES.HTML: Master Itineraries
  const routeStage = document.getElementById('masterRouteStage');
  if (routeStage) {
    const renderMasterRoute = (key) => {
      const r = MASTER_ROUTES[key] || MASTER_ROUTES['route-48h'];
      document.querySelectorAll('[data-route-tab]').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-route-tab') === key);
      });
      routeStage.innerHTML = `
        <div style="margin-bottom:3rem; max-width:760px;">
          <h3 class="serif" style="font-size:2.6rem; margin-bottom:0.75rem;">${r.title}</h3>
          <p class="section-lead">${r.lead}</p>
        </div>
        <div>
          ${r.steps.map(s => `
            <div class="itinerary-step">
              <div>
                <div class="mono-tag" style="color:var(--accent-terracotta); margin-bottom:0.4rem;">${s.time}</div>
                <div style="font-size:0.8rem; color:var(--text-muted);">${s.meta}</div>
              </div>
              <div>
                <h4 class="serif" style="font-size:1.85rem; margin-bottom:0.6rem;">${s.title}</h4>
                <p style="color:var(--text-charcoal); font-weight:300; font-size:0.95rem;">${s.desc}</p>
              </div>
              <img src="${s.image}" alt="${s.title}" loading="lazy">
            </div>
          `).join('')}
        </div>
      `;
    };
    document.querySelectorAll('[data-route-tab]').forEach(btn => {
      btn.addEventListener('click', () => renderMasterRoute(btn.getAttribute('data-route-tab')));
    });
    renderMasterRoute('route-48h');
  }
});