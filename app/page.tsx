"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  subname: string;
  ritual: "energy" | "zen" | "art";
  timeBadge: string;
  format: string;
  detail: string;
  image: string;
  strength: number;
  badge?: string;
  aroma: string;
  brewMethod: string;
  desc: string;
  brewingSteps: string[];
  ozonUrl: string;
  wbUrl: string;
};

const products: Product[] = [
  {
    id: "g7-3in1",
    name: "G7 3 в 1",
    subname: "Легендарный растворимый кофе №1",
    ritual: "energy",
    timeBadge: "⏱ 1 мин",
    format: "Растворимый",
    detail: "20 саше × 16 г",
    image: "/images/prod_g7.jpg",
    strength: 4,
    badge: "ХИТ В РОССИИ",
    aroma: "Сливочная карамель · Робуста",
    brewMethod: "В чашке за 1 минуту",
    desc: "Легендарный вьетнамский растворимый кофе №1. Насыщенный сливочный вкус, густой кофейный аромат и бодрящая природная энергия Буонметхуота.",
    brewingSteps: [
      "Высыпьте 1 саше G7 в чашку (150–200 мл)",
      "Добавьте 75 мл горячей воды (85–90°C)",
      "Перемешайте и наслаждайтесь мгновенной энергией мысли",
    ],
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "creative-4",
    name: "Creative 4 (Sáng Tạo 4)",
    subname: "Купаж 4 редких сортов с ароматом шоколада",
    ritual: "zen",
    timeBadge: "⏱ 5 мин",
    format: "Молотый",
    detail: "Для фина и турки · 340 г",
    image: "/images/prod_creative.jpg",
    strength: 5,
    badge: "РИТУАЛ ДЗЭН",
    aroma: "Тёмный шоколад · Фундук · Пряности",
    brewMethod: "Вьетнамский фин / Турка (Cezve)",
    desc: "Гармоничный купаж 4 сортов: Culi, Robusta, Arabica и Catimor. Плотное бархатное тело, глубокий аромат шоколада и продолжительное медитативное послевкусие.",
    brewingSteps: [
      "Насыпьте 20-25 г кофе в фин (или турку)",
      "Прижмите пресс-диском без лишнего усилия",
      "Залейте 20 мл горячей воды (92–96°C) для раскрытия аромата на 20 сек",
      "Долейте 60 мл воды и наблюдайте медитативные капли кофе",
    ],
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "legend-special",
    name: "Legend Special Edition",
    subname: "Шедевр ферментированного кофе",
    ritual: "art",
    timeBadge: "⏱ Ритуал",
    format: "Молотый элитный",
    detail: "Подарочный бокс · 225 г",
    image: "/images/prod_legend.jpg",
    strength: 4,
    badge: "ПРЕМИУМ",
    aroma: "Цветочный мёд · Какао · Древесный бархат",
    brewMethod: "Фин / Эспрессо / Капельный",
    desc: "Аристократичный шедевр кофейного дома Trung Nguyên Legend. Биоферментация по старинным рецептам воссоздает глубочайший благородный профиль легендарного кофе.",
    brewingSteps: [
      "Рекомендуется заваривать во вьетнамском фине или рожковой кофемашине",
      "Оптимальная температура воды: 90–94°C",
      "Идеально сочетается с каплей сгущённого молока или в чистом виде",
    ],
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "g7-black",
    name: "G7 Чёрный (Pure Black)",
    subname: "100% чистый чёрный кофе без сахара",
    ritual: "energy",
    timeBadge: "⏱ 30 сек",
    format: "Растворимый",
    detail: "15 саше × 2 г",
    image: "/images/prod_g7.jpg",
    strength: 5,
    badge: "ЧИСТАЯ ЭНЕРГИЯ",
    aroma: "Глубокая обжарка · Горький какао",
    brewMethod: "В чашке за 30 секунд",
    desc: "100% чистый экстракт высокогорной робусты без сахара и сливок. Мгновенная максимальная концентрация мысли для работы и учёбы.",
    brewingSteps: [
      "Высыпьте 1 саше в чашку",
      "Залейте 60–80 мл горячей воды",
      "Отличная основа для классического американо или кофе со льдом",
    ],
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "vietnamese-drip",
    name: "Vietnamese Drip Coffee",
    subname: "Кофе в индивидуальных фильтр-пакетах",
    ritual: "zen",
    timeBadge: "⏱ 2 мин",
    format: "Дрип-пакеты",
    detail: "5 дрип-пакетов × 15 г",
    image: "/images/prod_creative.jpg",
    strength: 3,
    badge: "УДОБНО В ДОРОГУ",
    aroma: "Арабика & Робуста · Мягкая карамель",
    brewMethod: "Индивидуальный дрип-пакет",
    desc: "Аутентичный капельный ритуал в любом месте. Установите дрип-пакет на край любой кружки и медленно пролейте кипяток.",
    brewingSteps: [
      "Оторвите верхний край фильтр-пакета по линии перфорации",
      "Закрепите картонные ушки на краях вашей чашки",
      "Медленно пролейте 150 мл горячей воды в 2-3 приёма",
    ],
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "premium-culi",
    name: "Premium Culi Beans",
    subname: "Редкие круглые зёрна ручного сбора",
    ritual: "art",
    timeBadge: "⏱ Кофемашина",
    format: "В зёрнах",
    detail: "Кофе в зёрнах · 500 г",
    image: "/images/prod_legend.jpg",
    strength: 5,
    badge: "ДЛЯ КОФЕМАШИН",
    aroma: "Плотная пенка Crema · Обжаренный фундук",
    brewMethod: "Кофемашина / Ручной помол",
    desc: "Особые цельные круглые зёрна Culi (Peaberry), созревающие по одной штуке в кофейной ягоде. Вдвое больше природного кофеина и густая Crema.",
    brewingSteps: [
      "Помол под ваш любимый способ (эспрессо, гейзер, турка)",
      "Идеально для утреннего бодрящего двойного эспрессо",
      "Густая золотистая ореховая пенка Crema",
    ],
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
];

const ritualTabs = [
  { id: "all", label: "Все ритуалы" },
  { id: "energy", label: "Энергия дня" },
  { id: "zen", label: "Медленный дзэн" },
  { id: "art", label: "Высшее искусство" },
];

function StrengthMeter({ value }: { value: number }) {
  return (
    <div className="zen-beans-meter" title={`Крепость: ${value}/5`}>
      {[1, 2, 3, 4, 5].map((idx) => (
        <span key={idx} className={idx <= value ? "filled" : ""} />
      ))}
    </div>
  );
}

interface Civilization {
  id: string;
  num: string;
  stepNum: string;
  name: string;
  title: string;
  quote: string;
  desc: string;
  image: string;
  specs: { label: string; value: string }[];
  link: string;
  ctaText: string;
}

const civilizations: Civilization[] = [
  {
    id: "ottoman",
    num: "Ⅰ · ВОСТОК",
    stepNum: "01 / 03",
    name: "Османская",
    title: "Османская кофейная цивилизация",
    quote: "«Таинство вековых бесед и медитация на раскалённом кварцевом песке»",
    desc: "Зародившаяся в кофейнях Стамбула и Каира, османская традиция возвела приготовление кофе в ранг священного ритуала. Это пространство неспешной восточной мудрости, созерцания и искренней душевной беседы.",
    image: "/images/civilization_ottoman.jpg",
    specs: [
      { label: "Способ приготовления:", value: "Традиционная джезва на горячем кварцевом песке" },
      { label: "Вкусовой профиль:", value: "Плотный, бархатный, пряный с нотами кардамона" },
      { label: "Философия ритуала:", value: "Мудрость, остановка времени и уважение к собеседнику" },
    ],
    link: "/filosofiya-kofe",
    ctaText: "Узнать ритуал Османской цивилизации →",
  },
  {
    id: "roman",
    num: "Ⅱ · ЗАПАД",
    stepNum: "02 / 03",
    name: "Римская",
    title: "Римская кофейная цивилизация",
    quote: "«Точность экстракции и динамичный пульс европейского мегаполиса»",
    desc: "Эпоха Ренессанса и триумф инженерного гения Италии. Римская культура подарила миру эспрессо — концентрат чистой энергии, рождённый под высоким давлением для ясности мысли, лидерства и великих свершений.",
    image: "/images/civilization_roman.jpg",
    specs: [
      { label: "Способ приготовления:", value: "Экстракция под давлением 9 бар (эспрессо)" },
      { label: "Вкусовой профиль:", value: "Плотное тело, золотистая ореховая пенка Crema" },
      { label: "Философия ритуала:", value: "Динамика, точность, лидерство и созидание" },
    ],
    link: "/filosofiya-kofe",
    ctaText: "Исследовать Римский ритуал →",
  },
  {
    id: "zen",
    num: "Ⅲ · ВЕРШИНА TRUNG NGUYÊN",
    stepNum: "03 / 03",
    name: "Дзэн",
    title: "Цивилизация Дзэн",
    quote: "«Тишина, чистота мысли и озарение для пробуждения духа»",
    desc: "Уникальное учение Trung Nguyên Legend, объединяющее Восток и Запад. Кофе — это не просто напиток, а проводник осознанности. Медленное капельное заваривание через фин превращается в медитацию, открывающую творческий потенциал.",
    image: "/images/civilization_zen.jpg",
    specs: [
      { label: "Способ приготовления:", value: "Традиционный вьетнамский фин (капельный метод)" },
      { label: "Вкусовой профиль:", value: "Глубокий шоколадно-ореховый настой, долгое послевкусие" },
      { label: "Философия ритуала:", value: "Осознанность, внутренняя гармония и озарение" },
    ],
    link: "/filosofiya-kofe",
    ctaText: "Погрузиться в философию Дзэн →",
  },
];

export default function Home() {
  const [selectedRitual, setSelectedRitual] = useState("all");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [activeCivId, setActiveCivId] = useState<string>("zen");
  const [civFading, setCivFading] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [b2bSent, setB2bSent] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useState(true);

  const activeCiv = civilizations.find((c) => c.id === activeCivId) || civilizations[2];
  const otherCivs = civilizations.filter((c) => c.id !== activeCiv.id);

  const handleCivSwitch = (id: string) => {
    if (id === activeCivId) return;
    setCivFading(true);
    setTimeout(() => {
      setActiveCivId(id);
      setCivFading(false);
    }, 180);
  };

  const filteredProducts =
    selectedRitual === "all"
      ? products
      : products.filter((p) => p.ritual === selectedRitual);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleB2bSubmit = (e: FormEvent) => {
    e.preventDefault();
    setB2bSent(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#181512]">
      {/* ================= HEADER ================= */}
      <header className="zen-header">
        <a href="/" className="zen-brand">
          <div className="zen-logo-mark">TNL</div>
          <div className="zen-brand-text">
            <span>Trung Nguyên</span>
            <strong>Legend</strong>
          </div>
        </a>

        {/* Desktop Navigation (All 12 Pages from Sitemap) */}
        <nav className="zen-nav">
          <a href="/" className="zen-nav-btn">
            Главная
          </a>

          {/* Group: О компании (Pages 02, 03, 04) */}
          <div
            className={`zen-nav-item ${openDropdown === "company" ? "is-open" : ""}`}
            onMouseEnter={() => setOpenDropdown("company")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className="zen-nav-btn"
              onClick={() => setOpenDropdown(openDropdown === "company" ? null : "company")}
            >
              О компании <span className="zen-nav-chevron">▼</span>
            </button>
            <div className="zen-dropdown-menu">
              <a href="/o-kompanii" onClick={() => setOpenDropdown(null)} className="zen-dropdown-item">
                <div className="zen-dropdown-content">
                  <span className="zen-dropdown-title">О бренде & История</span>
                  <span className="zen-dropdown-desc">Наследие из Буонметхуота и мировые стандарты</span>
                </div>
              </a>
              <a href="/o-kompanii/obrashchenie-osnovatelya" onClick={() => setOpenDropdown(null)} className="zen-dropdown-item">
                <div className="zen-dropdown-content">
                  <span className="zen-dropdown-title">Послание Основателя</span>
                  <span className="zen-dropdown-desc">Данг Ле Нгуен Ву: Энергия, меняющая жизнь</span>
                </div>
              </a>
              <a href="/o-kompanii/missiya-i-cennosti" onClick={() => setOpenDropdown(null)} className="zen-dropdown-item">
                <div className="zen-dropdown-content">
                  <span className="zen-dropdown-title">Видение и Миссия</span>
                  <span className="zen-dropdown-desc">Стратегия, осознанность и принципы в России</span>
                </div>
              </a>
            </div>
          </div>

          {/* Page 05: Философия */}
          <a href="/filosofiya-kofe" className="zen-nav-btn">
            Философия
          </a>

          {/* Group: Каталог (Pages 06, 07, 08, 09) */}
          <div
            className={`zen-nav-item ${openDropdown === "catalog" ? "is-open" : ""}`}
            onMouseEnter={() => setOpenDropdown("catalog")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className="zen-nav-btn"
              onClick={() => setOpenDropdown(openDropdown === "catalog" ? null : "catalog")}
            >
              Каталог <span className="zen-nav-chevron">▼</span>
            </button>
            <div className="zen-dropdown-menu">
              <a href="/katalog" onClick={() => setOpenDropdown(null)} className="zen-dropdown-item">
                <div className="zen-dropdown-content">
                  <span className="zen-dropdown-title">Каталог продукции (Все)</span>
                  <span className="zen-dropdown-desc">Полный официальный ассортимент в России</span>
                </div>
              </a>
              <a href="/katalog/rastvorimyj-kofe" onClick={() => setOpenDropdown(null)} className="zen-dropdown-item">
                <div className="zen-dropdown-content">
                  <span className="zen-dropdown-title">Растворимый кофе G7</span>
                  <span className="zen-dropdown-desc">G7 3in1, Pure Black, Cappuccino & Espresso</span>
                </div>
              </a>
              <a href="/katalog/molotyj-kofe" onClick={() => setOpenDropdown(null)} className="zen-dropdown-item">
                <div className="zen-dropdown-content">
                  <span className="zen-dropdown-title">Молотый кофе Legend</span>
                  <span className="zen-dropdown-desc">Special Edition, Creative 1–5 & Drip Coffee</span>
                </div>
              </a>
              <a href="/katalog/kofe-v-zernah" onClick={() => setOpenDropdown(null)} className="zen-dropdown-item">
                <div className="zen-dropdown-content">
                  <span className="zen-dropdown-title">Кофе в зёрнах & Culi</span>
                  <span className="zen-dropdown-desc">Отборные зёрна ручной обжарки для HoReCa</span>
                </div>
              </a>
            </div>
          </div>

          {/* Page 10: Пространства */}
          <a href="/novosti" className="zen-nav-btn">
            Пространства
          </a>

          {/* Page 11: Партнёрам */}
          <a href="/dlya-partnerov" className="zen-nav-btn">
            Партнёрам (B2B)
          </a>

          {/* Page 12: Контакты */}
          <a href="/kontakty" className="zen-nav-btn">
            Контакты
          </a>
        </nav>

        {/* Header Actions (Right cluster removed per user request; hamburger toggle for mobile) */}
        <div className="zen-actions">
          <button
            className="zen-hamburger"
            aria-label="Открыть меню"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation (All 12 Pages) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F5] pt-24 pb-12 px-6 flex flex-col gap-5 overflow-y-auto border-b border-[#E8E2D7]">
          <div className="flex justify-between items-center pb-3 border-b border-[#EDE6DC]">
            <span className="text-xs uppercase tracking-widest text-[#B38E46] font-semibold">12 Разделов сайта</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-xl p-2 text-[#181512]"
              aria-label="Закрыть меню"
            >
              ✕
            </button>
          </div>

          <a
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium py-1.5 flex items-center justify-between border-b border-[#EDE6DC]"
          >
            <span>01 · Главная страница</span>
            <span className="text-[#B38E46]">→</span>
          </a>

          <div className="flex flex-col gap-1.5 pb-2 border-b border-[#EDE6DC]">
            <span className="text-xs uppercase tracking-wider text-[#7A7269] font-medium">О компании</span>
            <a href="/o-kompanii" onClick={() => setMobileMenuOpen(false)} className="text-sm py-1 pl-3 text-[#181512] hover:text-[#B38E46]">
              02 · О бренде & История
            </a>
            <a href="/o-kompanii/obrashchenie-osnovatelya" onClick={() => setMobileMenuOpen(false)} className="text-sm py-1 pl-3 text-[#181512] hover:text-[#B38E46]">
              03 · Послание Основателя
            </a>
            <a href="/o-kompanii/missiya-i-cennosti" onClick={() => setMobileMenuOpen(false)} className="text-sm py-1 pl-3 text-[#181512] hover:text-[#B38E46]">
              04 · Видение и Миссия
            </a>
          </div>

          <a
            href="/filosofiya-kofe"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium py-1.5 flex items-center justify-between border-b border-[#EDE6DC]"
          >
            <span>05 · Философия 3-х Цивилизаций</span>
            <span className="text-[#B38E46]">→</span>
          </a>

          <div className="flex flex-col gap-1.5 pb-2 border-b border-[#EDE6DC]">
            <span className="text-xs uppercase tracking-wider text-[#7A7269] font-medium">Каталог кофе</span>
            <a href="/katalog" onClick={() => setMobileMenuOpen(false)} className="text-sm py-1 pl-3 text-[#181512] hover:text-[#B38E46]">
              06 · Обзор каталога (Все)
            </a>
            <a href="/katalog/rastvorimyj-kofe" onClick={() => setMobileMenuOpen(false)} className="text-sm py-1 pl-3 text-[#181512] hover:text-[#B38E46]">
              07 · Растворимый кофе G7
            </a>
            <a href="/katalog/molotyj-kofe" onClick={() => setMobileMenuOpen(false)} className="text-sm py-1 pl-3 text-[#181512] hover:text-[#B38E46]">
              08 · Молотый кофе Legend
            </a>
            <a href="/katalog/kofe-v-zernah" onClick={() => setMobileMenuOpen(false)} className="text-sm py-1 pl-3 text-[#181512] hover:text-[#B38E46]">
              09 · Кофе в зёрнах & Culi
            </a>
          </div>

          <a
            href="/novosti"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium py-1.5 flex items-center justify-between border-b border-[#EDE6DC]"
          >
            <span>10 · Пространства и Новости</span>
            <span className="text-[#B38E46]">→</span>
          </a>

          <a
            href="/dlya-partnerov"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium py-1.5 flex items-center justify-between border-b border-[#EDE6DC]"
          >
            <span>11 · Для Партнёров (B2B Hub)</span>
            <span className="text-[#B38E46]">→</span>
          </a>

          <a
            href="/kontakty"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium py-1.5 flex items-center justify-between border-b border-[#EDE6DC]"
          >
            <span>12 · Контакты и Сеть продаж</span>
            <span className="text-[#B38E46]">→</span>
          </a>
        </div>
      )}

      {/* ================= SECTION 1: HERO (FULL-WIDTH SEAMLESS) ================= */}
      <section className="zen-hero-full" id="top">
        <div className="zen-hero-full-container">
          <div className="zen-hero-content-left">
            <h1 className="serif">
              Энергия кофе <br />
              <span className="zen-hero-gold-text">из сердца Вьетнама</span>
            </h1>
            <p className="zen-hero-desc">
              Натуральный кофе из Буонметхуота — мировой столицы робусты. Чистая
              энергия мысли, гармония и пробуждение для великих свершений.
            </p>
            <div className="zen-hero-actions">
              <button
                className="zen-btn-gold"
                onClick={() => scrollTo("catalog")}
              >
                Выбрать кофе <span>↘</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: STATS ================= */}
      <section className="zen-stats">
        <div className="zen-stat-col">
          <div className="zen-stat-number serif">30</div>
          <div className="zen-stat-label">
            Лет кофейного <br /> пути
          </div>
        </div>
        <div className="zen-stat-col">
          <div className="zen-stat-number serif">80+</div>
          <div className="zen-stat-label">
            Стран мира <br /> выбирают нас
          </div>
        </div>
        <div className="zen-stat-col">
          <div className="zen-stat-number serif">3</div>
          <div className="zen-stat-label">
            Кофейные <br /> цивилизации
          </div>
        </div>
        <div className="zen-stat-quote">
          «В каждом зерне робусты — энергия земли, солнца и вековых традиций для
          вашего нового дня.»
        </div>
      </section>

      {/* ================= SECTION 3: PRODUCT SPOTLIGHT ================= */}
      <section className="zen-section" id="catalog">
        <div className="zen-heading-compact">
          <h2>Коллекция Энергии Trung Nguyên</h2>
        </div>

        {/* Clean Typographic Filter Tabs (No Icons) */}
        <div className="zen-filter-bar">
          {ritualTabs.map((tab) => (
            <button
              key={tab.id}
              className={`zen-pill-btn ${selectedRitual === tab.id ? "active" : ""}`}
              onClick={() => setSelectedRitual(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid on Zen Stone Pedestals */}
        <div className="zen-product-grid">
          {filteredProducts.map((p) => (
            <article key={p.id} className="zen-product-card">
              <div className="zen-product-visual">
                <img
                  src={p.image}
                  alt={p.name}
                  className="zen-product-img"
                  loading="lazy"
                />
              </div>

              <div className="zen-product-meta">{p.detail}</div>
              <h3 className="zen-product-title">{p.name}</h3>
              <p className="zen-product-subname">{p.subname}</p>

              {/* Sensory Profile Box */}
              <div className="zen-sensory-box">
                <div className="zen-sensory-item">
                  <span className="zen-sensory-label">Крепость:</span>
                  <StrengthMeter value={p.strength} />
                </div>
                <div className="zen-sensory-item">
                  <span className="zen-sensory-label">Аромат:</span>
                  <span className="zen-sensory-val">{p.aroma}</span>
                </div>
                <div className="zen-sensory-item">
                  <span className="zen-sensory-label">Способ:</span>
                  <span className="zen-sensory-val">{p.brewMethod}</span>
                </div>
              </div>

              {/* Actions & Marketplace Direct Links */}
              <div className="zen-product-actions">
                <button
                  className="zen-btn-ritual-view"
                  onClick={() => setActiveModalProduct(p)}
                >
                  О ритуале <span className="arrow">↗</span>
                </button>
                <a
                  href={p.ozonUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="zen-btn-market-sm ozon"
                  title="Купить на Ozon"
                >
                  OZON
                </a>
                <a
                  href={p.wbUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="zen-btn-market-sm wb"
                  title="Купить на Wildberries"
                >
                  WB
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= SECTION 4: 3 CIVILIZATIONS ================= */}
      <section className="zen-section bg-[#F4EFEA]" id="philosophy">
        <div className="zen-heading centered">
          <h2>Три Кофейные Цивилизации</h2>
          <p>
            Кофейное наследие человечества в единой концепции гармонии и созидания.
          </p>
        </div>

        {/* Master-Detail Interactive Showcase */}
        <div className="zen-civ-showcase">
          {/* Left Column: Large Art Showcase */}
          <div className="zen-civ-showcase-left">
            <img
              src={activeCiv.image}
              alt={activeCiv.title}
              className={`zen-civ-main-img ${civFading ? "fade-out" : "fade-in"}`}
              key={activeCiv.id}
            />
            <div className="zen-civ-main-badge">{activeCiv.num}</div>
          </div>

          {/* Right Column: Information & 2 Remaining Civilizations Dock */}
          <div className="zen-civ-showcase-right">
            {/* Upper Details (~88% height) */}
            <article
              className={`zen-civ-detail-card ${civFading ? "fade-out" : "fade-in"}`}
            >
              <div className="zen-civ-detail-meta">
                <span className="zen-civ-detail-num">{activeCiv.num}</span>
                <span className="zen-civ-detail-step">{activeCiv.stepNum}</span>
              </div>

              <h3 className="zen-civ-detail-title">{activeCiv.title}</h3>

              <div className="zen-civ-detail-quote">{activeCiv.quote}</div>

              <p className="zen-civ-detail-desc">{activeCiv.desc}</p>

              <div className="zen-civ-detail-specs">
                {activeCiv.specs.map((spec, idx) => (
                  <div key={idx} className="zen-civ-spec-row">
                    <span className="zen-civ-spec-label">{spec.label}</span>
                    <span className="zen-civ-spec-val">{spec.value}</span>
                  </div>
                ))}
              </div>

              <a href={activeCiv.link} className="zen-civ-action-btn">
                {activeCiv.ctaText}
              </a>
            </article>

            {/* Lower Dock: 2 Remaining Civilizations (~10-12% area) */}
            <div className="zen-civ-dock">
              <div className="zen-civ-dock-label">
                <span>Другие цивилизации:</span>
                <span>Нажмите для перехода ↗</span>
              </div>
              <div className="zen-civ-dock-grid">
                {otherCivs.map((civ) => (
                  <button
                    key={civ.id}
                    type="button"
                    className="zen-civ-thumb-btn"
                    onClick={() => handleCivSwitch(civ.id)}
                    title={`Перейти к цивилизации: ${civ.name}`}
                  >
                    <img
                      src={civ.image}
                      alt={civ.name}
                      className="zen-civ-thumb-img"
                    />
                    <div className="zen-civ-thumb-info">
                      <span className="zen-civ-thumb-num">{civ.num}</span>
                      <strong className="zen-civ-thumb-name">{civ.name}</strong>
                      <span className="zen-civ-thumb-hint">Исследовать ритуал</span>
                    </div>
                    <span className="zen-civ-thumb-arrow">↗</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: RETAIL TRUST HUB ================= */}
      <section className="zen-section" id="buy">
        <div className="zen-retail-box">
          <div className="zen-retail-left">
            <span className="zen-eyebrow">ОФИЦИАЛЬНАЯ ДИСТРИБЬЮЦИЯ</span>
            <h2 className="serif">
              Оригинальный вьетнамский кофе с доставкой по всей России
            </h2>
            <p>
              Заказывайте с гарантией подлинности на крупнейших маркетплейсах или
              приобретайте в ведущих розничных сетях страны.
            </p>
            <div className="zen-trust-tags">
              <span className="zen-trust-tag">✓ 100% Оригинал</span>
              <span className="zen-trust-tag">✓ Сертификаты ЕАС / ГОСТ-Р</span>
              <span className="zen-trust-tag">✓ Склады в РФ</span>
            </div>
          </div>

          <div className="zen-retail-right">
            <a
              href="https://ozon.ru"
              target="_blank"
              rel="noreferrer"
              className="zen-market-card ozon"
            >
              <b>OZON</b>
              <span>
                Фирменный магазин <i>↗</i>
              </span>
            </a>
            <a
              href="https://wildberries.ru"
              target="_blank"
              rel="noreferrer"
              className="zen-market-card wb"
            >
              <b>WILDBERRIES</b>
              <span>
                Быстрая доставка <i>↗</i>
              </span>
            </a>
            <a
              href="https://market.yandex.ru"
              target="_blank"
              rel="noreferrer"
              className="zen-market-card yandex"
            >
              <b>ЯНДЕКС МАРКЕТ</b>
              <span>
                Экспресс-доставка <i>↗</i>
              </span>
            </a>
            <a href="/kontakty" className="zen-market-card">
              <b className="text-stone-800">СУПЕРМАРКЕТЫ</b>
              <span>
                Auchan, Magnit, Перекрёсток <i>↗</i>
              </span>
            </a>
            <a href="/kontakty" className="zen-map-link">
              📍 Найти розничные магазины на Яндекс Картах →
            </a>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: B2B BANNER ================= */}
      <section className="zen-section bg-[#FAF8F5]" id="b2b">
        <div className="zen-b2b-box">
          <div
            className="zen-b2b-left"
            style={{ backgroundImage: `url('/images/b2b_logistics.jpg')` }}
          >
            <div className="zen-b2b-overlay" />
            <div className="zen-b2b-copy">
              <span className="text-[10px] tracking-widest text-[#B38E46] uppercase font-bold block mb-2">
                ДЛЯ БИЗНЕСА И HORECA
              </span>
              <h3 className="serif">
                Прямые оптовые поставки от производителя
              </h3>
              <p>
                Официальный импорт в РФ. Выгодные условия для торговых сетей,
                региональных дистрибьюторов, кофеен и HoReCa.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-white/20 backdrop-blur-sm text-xs px-2.5 py-1 rounded">
                  НДС 20%
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-xs px-2.5 py-1 rounded">
                  Склад в Москве
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-xs px-2.5 py-1 rounded">
                  Маркетинг & POSM
                </span>
              </div>
            </div>
          </div>

          <div className="zen-b2b-right">
            {b2bSent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#EFE6D4] text-[#B38E46] text-2xl flex items-center justify-center mx-auto mb-4">
                  ✓
                </div>
                <h3 className="serif text-2xl mb-2">Заявка успешно принята</h3>
                <p className="text-sm text-[#6B6259] max-w-sm mx-auto mb-6">
                  Наш менеджер по работе с ключевыми клиентами свяжется с вами в
                  течение 2 часов рабочего времени.
                </p>
                <button
                  className="zen-btn-outline"
                  onClick={() => setB2bSent(false)}
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleB2bSubmit} className="zen-form-grid">
                <div className="zen-field">
                  <label>Компания / ИП *</label>
                  <input
                    required
                    placeholder="ООO «Название компании»"
                  />
                </div>
                <div className="zen-field">
                  <label>ИНН (10 или 12 цифр) *</label>
                  <input
                    required
                    pattern="[0-9]{10,12}"
                    placeholder="7701234567"
                    title="Введите 10 или 12 цифр ИНН"
                  />
                </div>
                <div className="zen-field">
                  <label>Тип бизнеса *</label>
                  <select required defaultValue="">
                    <option value="" disabled>
                      Выберите категорию
                    </option>
                    <option>Дистрибьютор / Опт</option>
                    <option>Торговая сеть / Ритейл</option>
                    <option>HoReCa / Кофейня</option>
                    <option>Корпоративные подарки</option>
                  </select>
                </div>
                <div className="zen-field">
                  <label>Рабочий E-mail *</label>
                  <input
                    required
                    type="email"
                    placeholder="partner@company.ru"
                  />
                </div>
                <div className="zen-field full">
                  <label>Комментарий / Планируемый объём</label>
                  <textarea
                    rows={2}
                    placeholder="Город, интересующие позиции (G7, зерно, молотый), объём заказа..."
                  />
                </div>
                <div className="zen-field full">
                  <button type="submit" className="zen-btn-gold w-full py-3.5">
                    Получить коммерческое предложение (PDF) ↗
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: EDITORIAL ================= */}
      <section className="zen-section" id="news">
        <div className="zen-heading centered">
          <span className="zen-eyebrow">ЖУРНАЛ И СОБЫТИЯ</span>
          <h2>Культура и искусство кофе</h2>
          <p>
            Погрузитесь в секреты заваривания, историю кофейных цивилизаций и
            новости бренда в России.
          </p>
        </div>

        <div className="zen-mag-grid">
          <a href="/novosti" className="zen-mag-card">
            <div
              className="zen-mag-thumb"
              style={{
                backgroundImage: `url('/images/civilization_zen.jpg')`,
              }}
            />
            <div className="zen-mag-body">
              <span className="zen-mag-tag">РИТУАЛ ПРИГОТОВЛЕНИЯ</span>
              <h3 className="zen-mag-title serif">
                Как заварить идеальный вьетнамский кофе в фине
              </h3>
              <p className="text-xs text-[#6B6259]">
                4 простых шага для раскрытия глубокого вкуса и медитативного
                настроения в домашних условиях.
              </p>
            </div>
          </a>

          <a href="/novosti" className="zen-mag-card">
            <div
              className="zen-mag-thumb"
              style={{
                backgroundImage: `url('/images/hero_zen_coffee.jpg')`,
              }}
            />
            <div className="zen-mag-body">
              <span className="zen-mag-tag">ПРОИСХОЖДЕНИЕ</span>
              <h3 className="zen-mag-title serif">
                Буонметхуот: почему вьетнамская робуста покорила мир
              </h3>
              <p className="text-xs text-[#6B6259]">
                Особенности базальтовой почвы и климата, создающие неповторимый
                шоколадно-ореховый профиль.
              </p>
            </div>
          </a>

          <a href="/novosti" className="zen-mag-card">
            <div
              className="zen-mag-thumb"
              style={{
                backgroundImage: `url('/images/b2b_logistics.jpg')`,
              }}
            />
            <div className="zen-mag-body">
              <span className="zen-mag-tag">ФРАНШИЗА & БИЗНЕС</span>
              <h3 className="zen-mag-title serif">
                Trung Nguyên E-Coffee: открытие новых пространств в РФ
              </h3>
              <p className="text-xs text-[#6B6259]">
                Возможности для партнёров по открытию концептуальных кофеен в
                Москве и Санкт-Петербурге.
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* ================= SECTION 8: FOOTER ================= */}
      <footer className="zen-footer">
        <div className="zen-footer-top">
          <div className="zen-footer-brand">
            <b>TRUNG NGUYÊN LEGEND</b>
            <p>
              Энергия из сердца Вьетнама. Мировой лидер в производстве
              премиального кофе робуста и создатель кофейной философии Дзэн.
            </p>
            <div className="mt-6 flex gap-3 text-xs text-[#A99E91]">
              <span>EAC Certified</span> • <span>GOST-R</span> •{" "}
              <span>ISO 9001</span> • <span>Halal</span>
            </div>
          </div>

          <div className="zen-footer-links-grid">
            <div className="zen-footer-col">
              <h4>КОМПАНИЯ</h4>
              <a href="/o-kompanii">О бренде</a>
              <a href="/o-kompanii/obrashchenie-osnovatelya">
                Послание Основателя
              </a>
              <a href="/o-kompanii/missiya-i-cennosti">Видение и Миссия</a>
              <a href="/filosofiya-kofe">3 Цивилизации кофе</a>
            </div>

            <div className="zen-footer-col">
              <h4>КАТАЛОГ</h4>
              <a href="/katalog/rastvorimyj-kofe">Кофе G7 hòa tan</a>
              <a href="/katalog/molotyj-kofe">Молотый кофе Legend</a>
              <a href="/katalog/kofe-v-zernah">Зерновой кофе Culi</a>
              <a href="/katalog">Все продукты</a>
            </div>

            <div className="zen-footer-col">
              <h4>БИЗНЕС И СВЯЗЬ</h4>
              <a href="/dlya-partnerov">Для Партнёров (B2B)</a>
              <a href="/novosti">Франшиза E-Coffee</a>
              <a href="/kontakty">Точки продаж на карте</a>
              <a href="mailto:hello@trungnguyenlegend.ru">
                hello@trungnguyenlegend.ru
              </a>
            </div>
          </div>
        </div>

        <div className="zen-footer-bottom">
          <div>
            © 1996–2026 Trung Nguyên Legend Russia. Все права защищены.
          </div>
          <div className="zen-social-links">
            <a href="https://vk.com" target="_blank" rel="noreferrer">
              VKontakte
            </a>
            <a href="https://t.me" target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a href="https://dzen.ru" target="_blank" rel="noreferrer">
              Дзен
            </a>
            <a href="https://rutube.ru" target="_blank" rel="noreferrer">
              Rutube
            </a>
          </div>
        </div>
      </footer>

      {/* ================= MODAL QUICK VIEW ================= */}
      {activeModalProduct && (
        <div
          className="zen-modal-backdrop"
          onClick={() => setActiveModalProduct(null)}
        >
          <div
            className="zen-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="zen-modal-close"
              onClick={() => setActiveModalProduct(null)}
            >
              ✕
            </button>
            <div className="zen-modal-left">
              <img
                src={activeModalProduct.image}
                alt={activeModalProduct.name}
                className="zen-modal-img"
              />
            </div>

            <div className="zen-modal-right">
              <div className="flex items-center justify-between mb-2">
                <span className="zen-eyebrow mb-0">
                  {activeModalProduct.badge || "ПРЕМИАЛЬНЫЙ КОФЕ"}
                </span>
                <span className="text-xs text-[#8F877D] font-medium">
                  {activeModalProduct.timeBadge}
                </span>
              </div>

              <h2 className="serif text-2xl mb-1 text-[#181512]">{activeModalProduct.name}</h2>
              <p className="text-xs text-[#9E958A] uppercase tracking-wider mb-3">
                {activeModalProduct.detail}
              </p>
              <p className="text-sm text-[#5C5349] leading-relaxed mb-4">
                {activeModalProduct.desc}
              </p>

              {/* Sensory Info */}
              <div className="bg-[#FAF8F5] border border-[#ECE6DC] rounded-lg p-3 mb-4 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#8E867C]">Крепость:</span>
                  <StrengthMeter value={activeModalProduct.strength} />
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8E867C]">Аромат:</span>
                  <span className="font-semibold text-[#181512]">{activeModalProduct.aroma}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8E867C]">Способ:</span>
                  <span className="font-semibold text-[#181512]">{activeModalProduct.brewMethod}</span>
                </div>
              </div>

              {/* Brewing Steps */}
              {activeModalProduct.brewingSteps && activeModalProduct.brewingSteps.length > 0 && (
                <div className="mb-5">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#8A6827] mb-2">
                    Инструкция заваривания:
                  </h4>
                  <ol className="space-y-1 text-xs text-[#6B6259] list-decimal list-inside">
                    {activeModalProduct.brewingSteps.map((step, idx) => (
                      <li key={idx} className="leading-snug">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              <div className="mt-auto flex gap-3">
                <a
                  href={activeModalProduct.ozonUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="zen-btn-gold flex-1 text-center py-2.5 text-xs"
                >
                  Купить на OZON ↗
                </a>
                <a
                  href={activeModalProduct.wbUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="zen-btn-outline flex-1 text-center py-2.5 text-xs"
                >
                  WILDBERRIES
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= COOKIE BANNER ================= */}
      {cookieAccepted && (
        <aside className="fixed bottom-5 left-5 right-5 md:right-auto md:max-w-md z-40 bg-white p-4 rounded-lg border border-[#E8E2D7] shadow-xl text-xs flex items-center justify-between gap-4">
          <p className="text-[#6B6259]">
            Мы используем cookie и Яндекс Метрику для оптимизации работы сайта в
            соответствии с законом 152-ФЗ.
          </p>
          <button
            className="zen-btn-gold text-[10px] py-1.5 px-3 shrink-0"
            onClick={() => setCookieAccepted(false)}
          >
            Принять
          </button>
        </aside>
      )}
    </div>
  );
}
