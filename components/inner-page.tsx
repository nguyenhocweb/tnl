"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import AboutCompanyView from "./about-company-view";
import FounderMessageView from "./founder-message-view";
import VisionValuesView from "./vision-values-view";
import CoffeePhilosophyView from "./coffee-philosophy-view";
import CatalogOverviewView from "./catalog-overview-view";
import InstantCoffeeView from "./instant-coffee-view";
import RoastedCoffeeView from "./roasted-coffee-view";
import BeanCoffeeView from "./bean-coffee-view";
import NewsSpacesView from "./news-spaces-view";
import B2BPartnersView from "./b2b-partners-view";
import ContactStoresView from "./contact-stores-view";
import SiteFooter from "./site-footer";

function Link({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return <a href={href} className={className}>{children}</a>;
}

type Page = {
  kicker: string;
  title: string;
  intro: string;
  label: string;
  items: { title: string; text: string }[];
  quote?: string;
  cta: string;
};

const pages: Record<string, Page> = {
  "o-kompanii": {
    kicker: "О БРЕНДЕ & ИСТОРИЯ · 02",
    title: "Из кофейной столицы — в мировую элиту",
    intro: "16 июня 1996 года в Буонметхуоте началась история великой мечты. От старого велосипеда и страсти основателя Данг Ле Нгуен Ву — до флагманских пространств в Шанхае, Сеуле и официальной дистрибуции в России.",
    label: "ВЕХИ ВЕЛИКОГО ПУТИ",
    cta: "Открыть каталог",
    quote: "«Кофе — сокровище Неба и Земли, чистая энергия, пробуждающая осознанность и созидание.»",
    items: [
      { title: "1996 · Рождение мечты", text: "Старт с единственного старого велосипеда в Буонметхуоте и непоколебимой веры в величие вьетнамского кофе." },
      { title: "2003 · Триумф G7", text: "Победа в слепом тесте (89% голосов) над мировыми гигантами и триумфальный экспорт в более чем 80 стран." },
      { title: "2018 · Музей Кофе & Дзэн", text: "Открытие Музея Мира Кофе (>10 000 экспонатов) и провозглашение философии Lối Sống Tỉnh Thức (Осознанной Жизни)." },
      { title: "2026 · Стандарты РФ & Мира", text: "Сертификация EAC, ГОСТ-Р, ISO 22000, Halal и прямая логистическая сеть по всей России." },
    ],
  },
  "o-kompanii/obrashchenie-osnovatelya": {
    kicker: "ОСНОВАТЕЛЬ · 02",
    title: "Кофе — энергия, меняющая жизнь",
    intro: "Идеи основателя Данг Ле Нгуен Ву формируют особый взгляд на кофе: это не только напиток, а источник пробуждения, созидания и новых возможностей.",
    label: "ПОРТРЕТ И ФИЛОСОФИЯ",
    cta: "Наши ценности",
    quote: "«Кофе — не просто напиток. Это энергия, меняющая жизнь, пробуждающая мышление и творчество.»",
    items: [
      { title: "Амбиция", text: "Поднять культуру вьетнамского кофе на глобальный уровень." },
      { title: "Пробуждение", text: "Помогать человеку сосредоточиться на важном и увидеть новые идеи." },
      { title: "Созидание", text: "Превращать энергию кофе в действие, знания и ценность для общества." },
    ],
  },
  "o-kompanii/missiya-i-cennosti": {
    kicker: "ВИДЕНИЕ И МИССИЯ · 03",
    title: "Долгосрочная энергия для России",
    intro: "Мы развиваем кофейную экосистему, основанную на качестве, профессионализме и уважении к культуре потребления — с ясной долгосрочной перспективой на российском рынке.",
    label: "НАША ОСНОВА",
    cta: "Философия кофе",
    items: [
      { title: "Видение", text: "Стать ведущей группой, развивающей глобальную кофейную экосистему." },
      { title: "Миссия", text: "Создавать сообщество пробуждённых людей через энергию кофе." },
      { title: "Амбиция", text: "Мыслить масштабно и последовательно воплощать большие цели." },
      { title: "Подлинность и качество", text: "Честность, творческий подход и превосходство в каждой детали." },
    ],
  },
  "filosofiya-kofe": {
    kicker: "ФИЛОСОФИЯ КОФЕ · 04",
    title: "Культура вкуса и осознанный ритм",
    intro: "Вьетнамский кофе открывается через глубину традиций, искусство заваривания и паузу для себя. Это культурный опыт, созданный специально для внимательного гостя.",
    label: "ТРИ ЦИВИЛИЗАЦИИ КОФЕ",
    cta: "Выбрать кофе",
    quote: "«Каждая чашка может стать моментом концентрации, равновесия и вдохновения.»",
    items: [
      { title: "Османская", text: "Неторопливая беседа, аромат и уважение к ритуалу." },
      { title: "Римская", text: "Точность вкуса, динамика города и энергия действия." },
      { title: "Дзэн", text: "Тишина, баланс и ясность в каждом мгновении." },
      { title: "Вьетнамский фин", text: "Искусство медленного заваривания, насыщенного вкуса и личного ритуала." },
    ],
  },
  "katalog": {
    kicker: "КАТАЛОГ · 05",
    title: "Кофе энергии для каждого формата",
    intro: "Центральный каталог официальной продуктовой экосистемы Trung Nguyên Legend в России: G7, Legend и традиционные кофейные линии.",
    label: "УМНЫЙ ВЫБОР",
    cta: "Где купить",
    items: [
      { title: "По линейке", text: "G7, Legend и традиционный кофе — выберите характер и повод." },
      { title: "По формату", text: "Растворимый, зёрна, молотый кофе и капсулы." },
      { title: "Карточки продукта", text: "Название на русском и английском, формат, профиль вкуса и ключевые характеристики." },
      { title: "Два сценария", text: "Розничная покупка через Ozon и Wildberries или заявка на оптовое B2B-сотрудничество." },
    ],
  },
  "katalog/rastvorimyj-kofe": {
    kicker: "G7 · РАСТВОРИМЫЙ КОФЕ · 06",
    title: "Яркий вкус в темпе большого города",
    intro: "Линейка G7 объединяет насыщенный вкус, удобный формат и энергию вьетнамского кофе — для дома, офиса и дороги.",
    label: "ЛИНЕЙКА G7",
    cta: "Купить в розницу",
    items: [
      { title: "G7 3 в 1", text: "Бестселлер: кофе, сливки и сахар в сбалансированной чашке." },
      { title: "G7 Black", text: "Выразительный чёрный кофе без сахара для интенсивного ритма." },
      { title: "G7 Cappuccino", text: "Капучино с вкусами Hazelnut, Irish Cream и Mocha." },
      { title: "G7 Espresso", text: "Более плотный и собранный профиль для любителей эспрессо." },
      { title: "Розничное присутствие", text: "Развитие продаж через федеральные сети и локальные торговые площадки России." },
    ],
  },
  "katalog/molotyj-kofe": {
    kicker: "LEGEND · ПРЕМИАЛЬНАЯ ЛИНИЯ · 07",
    title: "Legend: кофе для особых случаев",
    intro: "Премиальная линейка с выразительным дизайном упаковки и особой технологией экстракции — для деловых подарков, важных встреч и личных ритуалов.",
    label: "ПРЕМИАЛЬНЫЕ ФОРМАТЫ",
    cta: "Подобрать подарок",
    items: [
      { title: "Legend Special Edition", text: "Коллекционный формат с насыщенным характером и премиальной подачей." },
      { title: "Legend Capsule", text: "Капсульный кофе для точного и удобного приготовления." },
      { title: "Vietnamese Drip Coffee", text: "Вьетнамский кофе в дрип-пакетах: персональный ритуал без оборудования." },
      { title: "Gift Sets", text: "Подарочные кофейные наборы для партнёров, команд и праздничных поводов." },
    ],
  },
  "katalog/kofe-v-zernah": {
    kicker: "ЗЁРНА И ОСОБЫЕ БЛЕНДЫ · 08",
    title: "Кофе для HoReCa и дома",
    intro: "Зерновой и традиционный кофе для тех, кто ценит ручное приготовление, настраиваемый вкус и профессиональный результат.",
    label: "ПРОФИЛИ ВКУСА",
    cta: "Выбрать формат",
    items: [
      { title: "Sáng Tạo 1–5", text: "Авторская серия с разной интенсивностью, обжаркой и характером чашки." },
      { title: "House Blend", text: "Универсальный бленд для стабильного результата дома и в кофейне." },
      { title: "Gourmet Blend", text: "Более сложный вкусовой профиль для ценителей и гастрономических проектов." },
      { title: "Паспорт вкуса", text: "Соотношение арабики и робусты, степень обжарки и интенсивность — для точного выбора." },
      { title: "Как приготовить", text: "Видео-инструкции для фина и кофемашины будут доступны в карточках продуктов." },
    ],
  },
  "novosti": {
    kicker: "КАФЕ И ФРАНШИЗА · 09",
    title: "Кофейные пространства Trung Nguyên Legend",
    intro: "Развиваем в России форматы, в которых вьетнамский кофе становится культурным опытом: от премиального кафе до предпринимательской сети E-Coffee.",
    label: "МОДЕЛИ РАЗВИТИЯ",
    cta: "Узнать о франшизе",
    items: [
      { title: "Trung Nguyên Legend Café", text: "Пространство кофейной культуры, вкуса и вдумчивого общения." },
      { title: "Trung Nguyên E-Coffee", text: "Энергичная кофейная сеть для предпринимателей и городского ритма." },
      { title: "Франшиза", text: "Диалог о запуске точек в Москве, Санкт-Петербурге и других городах России." },
      { title: "Новости и события", text: "Анонсы открытий, партнёрских встреч и мероприятий бренда." },
    ],
  },
  "partneram": {
    kicker: "B2B HUB · 10",
    title: "Партнёрство и дистрибуция в России",
    intro: "Специальная точка входа для дистрибьюторов, торговых сетей, агентов и B2B-покупателей, заинтересованных в развитии категории вьетнамского кофе.",
    label: "УСЛОВИЯ СОТРУДНИЧЕСТВА",
    cta: "Отправить B2B-заявку",
    items: [
      { title: "Политика дистрибуции", text: "Обсуждаем скидки, маркетинговую поддержку и логистическую модель." },
      { title: "Документы качества", text: "Комплект EAC, GOST-R, Halal, ISO и сопроводительная информация по продуктам." },
      { title: "Розничным сетям", text: "Ассортиментные решения и материалы для понятного выбора на полке." },
      { title: "B2B-анкета", text: "Собираем данные о компании, городе, канале продаж и потребностях в импорте." },
    ],
  },
  "kontakty": {
    kicker: "КОНТАКТЫ И ТОЧКИ ПРОДАЖ · 11",
    title: "Официальная связь с Trung Nguyên Legend",
    intro: "Контакты для покупателей, партнёров и прессы, а также поиск ближайшей точки продаж на карте России.",
    label: "ОСТАЁМСЯ НА СВЯЗИ",
    cta: "Найти на карте",
    items: [
      { title: "Представительство в России", text: "Адрес офиса, горячая линия и e-mail будут опубликованы после утверждения контактных данных." },
      { title: "Yandex Maps", text: "Поиск ближайших магазинов и точек продаж через Яндекс Карты." },
      { title: "Форма обращения", text: "Один канал для вопросов покупателей, прессы и деловых запросов." },
      { title: "Официальные каналы", text: "ВКонтакте · Telegram · Яндекс Дзен · YouTube." },
    ],
  },
};

export default function InnerPage() {
  const params = useParams<{ slug: string[] }>();
  const key = Array.isArray(params.slug) ? params.slug.join("/") : "";
  const page = pages[key] ?? pages["o-kompanii"];
  const isCatalog = key.startsWith("katalog");
  const isPartner = key === "partneram" || key === "novosti";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return <main className="inner-page">
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

      {/* Header Actions (Right cluster removed per request; hamburger toggle for mobile) */}
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
          <span>Главная страница</span>
          <span className="text-[#B38E46]">→</span>
        </a>

        <div className="flex flex-col gap-1.5 pb-2 border-b border-[#EDE6DC]">
          <span className="text-xs uppercase tracking-wider text-[#7A7269] font-medium">О компании</span>
          <a href="/o-kompanii" onClick={() => setMobileMenuOpen(false)} className="text-sm py-1 pl-3 text-[#181512] hover:text-[#B38E46]">
            О бренде & История
          </a>
          <a href="/o-kompanii/obrashchenie-osnovatelya" onClick={() => setMobileMenuOpen(false)} className="text-sm py-1 pl-3 text-[#181512] hover:text-[#B38E46]">
            Послание Основателя
          </a>
          <a href="/o-kompanii/missiya-i-cennosti" onClick={() => setMobileMenuOpen(false)} className="text-sm py-1 pl-3 text-[#181512] hover:text-[#B38E46]">
            Видение и Миссия
          </a>
        </div>

        <a
          href="/filosofiya-kofe"
          onClick={() => setMobileMenuOpen(false)}
          className="text-base font-medium py-1.5 flex items-center justify-between border-b border-[#EDE6DC]"
        >
          <span>Философия 3-х Цивилизаций</span>
          <span className="text-[#B38E46]">→</span>
        </a>

        <div className="flex flex-col gap-1.5 pb-2 border-b border-[#EDE6DC]">
          <span className="text-xs uppercase tracking-wider text-[#7A7269] font-medium">Каталог кофе</span>
          <a href="/katalog" onClick={() => setMobileMenuOpen(false)} className="text-sm py-1 pl-3 text-[#181512] hover:text-[#B38E46]">
            Обзор каталога (Все)
          </a>
          <a href="/katalog/rastvorimyj-kofe" onClick={() => setMobileMenuOpen(false)} className="text-sm py-1 pl-3 text-[#181512] hover:text-[#B38E46]">
            Растворимый кофе G7
          </a>
          <a href="/katalog/molotyj-kofe" onClick={() => setMobileMenuOpen(false)} className="text-sm py-1 pl-3 text-[#181512] hover:text-[#B38E46]">
            Молотый кофе Legend
          </a>
          <a href="/katalog/kofe-v-zernah" onClick={() => setMobileMenuOpen(false)} className="text-sm py-1 pl-3 text-[#181512] hover:text-[#B38E46]">
            Кофе в зёрнах & Culi
          </a>
        </div>

        <a
          href="/novosti"
          onClick={() => setMobileMenuOpen(false)}
          className="text-base font-medium py-1.5 flex items-center justify-between border-b border-[#EDE6DC]"
        >
          <span>Пространства и Новости</span>
          <span className="text-[#B38E46]">→</span>
        </a>

        <a
          href="/dlya-partnerov"
          onClick={() => setMobileMenuOpen(false)}
          className="text-base font-medium py-1.5 flex items-center justify-between border-b border-[#EDE6DC]"
        >
          <span>Для Партнёров (B2B Hub)</span>
          <span className="text-[#B38E46]">→</span>
        </a>

        <a
          href="/kontakty"
          onClick={() => setMobileMenuOpen(false)}
          className="text-base font-medium py-1.5 flex items-center justify-between border-b border-[#EDE6DC]"
        >
          <span>Контакты и Сеть продаж</span>
          <span className="text-[#B38E46]">→</span>
        </a>
      </div>
    )}
    {key === "o-kompanii" ? (
      <AboutCompanyView />
    ) : key === "o-kompanii/obrashchenie-osnovatelya" ? (
      <FounderMessageView />
    ) : key === "o-kompanii/missiya-i-cennosti" ? (
      <VisionValuesView />
    ) : key === "filosofiya-kofe" ? (
      <CoffeePhilosophyView />
    ) : key === "katalog" ? (
      <CatalogOverviewView />
    ) : key === "katalog/rastvorimyj-kofe" ? (
      <InstantCoffeeView />
    ) : key === "katalog/molotyj-kofe" ? (
      <RoastedCoffeeView />
    ) : key === "katalog/kofe-v-zernah" ? (
      <BeanCoffeeView />
    ) : key === "novosti" ? (
      <NewsSpacesView />
    ) : key === "dlya-partnerov" || key === "partneram" ? (
      <B2BPartnersView />
    ) : key === "kontakty" ? (
      <ContactStoresView />
    ) : (
      <AboutCompanyView />
    )}
    <SiteFooter />
  </main>;
}
