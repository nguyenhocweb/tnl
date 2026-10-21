"use client";

import React, { useState } from "react";

type G7Product = {
  id: string;
  name: string;
  subname: string;
  detail: string;
  strength: number;
  aroma: string;
  brewMethod: string;
  image: string;
  desc: string;
  ozonUrl: string;
  wbUrl: string;
};

const g7Archetypes: G7Product[] = [
  {
    id: "g7-3in1",
    name: "G7 3 в 1 Classic",
    subname: "Золотой баланс кофе, сливок и тростникового сахара",
    detail: "18 САШЕ × 16 Г",
    strength: 4,
    aroma: "Сливочный ирис · Тёмный шоколад",
    brewMethod: "В чашке за 30 секунд",
    image: "/images/prod_g7.jpg",
    desc: "Идеальный баланс крепкого вьетнамского кофе, нежных сливок и сахара. Сливочная текстура, дарящая заряд энергии.",
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "g7-black",
    name: "G7 Чёрный (Pure Black)",
    subname: "100% чистый чёрный кофе без сахара",
    detail: "15 САШЕ × 2 Г",
    strength: 5,
    aroma: "Глубокая обжарка · Горький какао",
    brewMethod: "В чашке за 30 секунд",
    image: "/images/prod_g7.jpg",
    desc: "Чистый концентрат энергии без сахара и молока. Мощный терпкий вкус для максимальной концентрации и работы.",
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "g7-cappuccino",
    name: "G7 Cappuccino Hazelnut",
    subname: "Нежный капучино с ароматом жареного лесного ореха",
    detail: "12 САШЕ × 18 Г",
    strength: 3,
    aroma: "Жареный фундук · Пышная пенка",
    brewMethod: "В чашке за 30 секунд",
    image: "/images/prod_g7.jpg",
    desc: "Итальянский стиль с роскошной густой пенкой. Бархатистый десертный вкус с глубоким ореховым шлейфом.",
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "g7-espresso",
    name: "G7 Espresso Crema",
    subname: "Итальянский шот бодрости с плотной пенкой",
    detail: "15 САШЕ × 2.5 Г",
    strength: 5,
    aroma: "Жареный миндаль · Горький шоколад",
    brewMethod: "В чашке за 20 секунд",
    image: "/images/prod_g7.jpg",
    desc: "Плотное бархатное тело напитка с естественной золотистой пенкой Crema. Быстрый шот бодрости перед важной встречей.",
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
];

const retailChains = [
  { name: "Пятёрочка (X5 Group)", badge: "Вся Россия" },
  { name: "Перекрёсток", badge: "Супермаркеты" },
  { name: "Магнит", badge: "У дома & Семейный" },
  { name: "Ашан", badge: "Гипермаркеты" },
  { name: "Лента", badge: "Федеральная сеть" },
  { name: "Глобус", badge: "Гипермаркеты" },
  { name: "Metro Cash & Carry", badge: "Опт & Розница" },
];

export default function InstantCoffeeView() {
  const [activeModalProduct, setActiveModalProduct] = useState<G7Product | null>(null);

  return (
    <div className="instant-coffee-page">
      {/* ================= SECTION 1: HERO WINTER WARMTH (100VH) ================= */}
      <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-end pb-16 px-6 md:px-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.98] transition-transform duration-1000 scale-105 hover:scale-100"
          style={{ backgroundImage: `url('/images/g7_winter_warmth.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="relative z-10 max-w-4xl">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white tracking-wide font-normal drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] leading-tight mb-3">
            G7: Энергия, Согревающая Сердца
          </h1>
          <p className="text-base md:text-xl text-[#FCEEE3] font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] mb-8">
            Настоящая крепость робусты за 30 секунд.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#g7-archetypes"
              className="px-7 py-3.5 rounded-2xl bg-[#B38E46] hover:bg-[#967434] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-xl"
            >
              Выбрать свой G7 ↘
            </a>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: THE 4 G7 FLAVOR ARCHETYPES (EXACT IMAGE 3 LAYOUT) ================= */}
      <section id="g7-archetypes" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mb-3">
            Коллекция вкусов G7
          </h2>
          <p className="text-sm text-[#7A7269]">
            Четыре характера для каждого момента дня — от утреннего пробуждения до делового рывка
          </p>
        </div>

        <div className="zen-product-grid">
          {g7Archetypes.map((p) => (
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

              {/* Sensory Profile Box */}
              <div className="zen-sensory-box">
                <div className="zen-sensory-item">
                  <span className="zen-sensory-label">Крепость:</span>
                  <div className="zen-beans-meter">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < p.strength ? "filled" : ""} />
                    ))}
                  </div>
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

              {/* Actions & Brand Direct Buttons (NO BLUE/MAGENTA) */}
              <div className="zen-product-actions">
                <button
                  className="zen-btn-ritual-view"
                  onClick={() => setActiveModalProduct(p)}
                >
                  О ритуале
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

      {/* ================= SECTION 3: RUSSIAN RETAIL NETWORK ================= */}
      <section id="retail-network" className="py-20 px-6 md:px-16 bg-[#FAF7F2] border-y border-[#E8E2D7]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-2xl md:text-4xl font-serif text-[#181512]">
                Более 15 000 магазинов от Калининграда до Владивостока
              </h2>
            </div>
            <a
              href="/kontakty"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#181512] hover:bg-[#B38E46] text-white text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              <span>Найти на Яндекс Картах</span> →
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {retailChains.map((chain) => (
              <div
                key={chain.name}
                className="bg-white p-5 rounded-2xl border border-[#E8E2D7] text-center flex flex-col items-center justify-center min-h-[110px] shadow-sm hover:shadow-md transition-shadow"
              >
                <strong className="text-sm font-semibold text-[#181512] block mb-1">
                  {chain.name}
                </strong>
                <span className="text-[10px] uppercase tracking-wider text-[#B38E46] font-medium">
                  {chain.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: 3 REASONS WHY RUSSIANS LOVE G7 ================= */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#B38E46] font-bold">
            ФОРМУЛА УСПЕХА
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mt-2 mb-3">
            Почему миллионы выбирают G7
          </h2>
          <p className="text-sm text-[#7A7269]">
            Три ключевых преимущества, подтверждённые слепыми тестами и любовью покупателей
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              title: "Холодная экстракция",
              tagline: "Сохранение живых эфирных масел",
              desc: "В отличие от термосушки обычного кофе, технология сублимации при низких температурах бережёт истинный аромат свежеобжаренного зерна.",
              icon: "❄️",
            },
            {
              num: "02",
              title: "100% Робуста Буонметхуот",
              tagline: "Без добавления сои и злаков",
              desc: "Только первоклассные зёрна с базальтовых плато Вьетнама. Никаких красителей и наполнителей — чистая природная крепость.",
              icon: "🌱",
            },
            {
              num: "03",
              title: "Согревающая плотность",
              tagline: "Идеально для русской зимы",
              desc: "Тягучий бархатный настой с глубоким послевкусием согревает в сибирские морозы и дарит устойчивый прилив сил на весь рабочий день.",
              icon: "🔥",
            },
          ].map((card) => (
            <div
              key={card.num}
              className="bg-white p-8 rounded-3xl border border-[#E8E2D7] hover:border-[#B38E46] shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl">{card.icon}</span>
                <span className="text-3xl font-serif text-[#E8E2D7] font-bold">{card.num}</span>
              </div>
              <h3 className="text-xl font-serif text-[#181512] mb-1 font-semibold">{card.title}</h3>
              <span className="text-xs text-[#B38E46] font-semibold block mb-3">{card.tagline}</span>
              <p className="text-xs text-[#5C5248] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 5: FAST COMMERCE DIRECT CHANNELS (BRAND-COLORED BUTTONS) ================= */}
      <section className="py-20 px-6 md:px-16 bg-[#181512] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-[#D4B26F] font-bold block mb-3">
            БЫСТРАЯ ДОСТАВКА ЗАВТРА
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-4">
            Закажите оригинальный G7 с гарантией подлинности
          </h2>
          <p className="text-sm text-[#BFB7AA] max-w-xl mx-auto mb-10">
            Официальные поставки от производителя со всеми знаками ЕАС, свежей датой выработки и быстрой доставкой до двери или пункта выдачи.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="https://ozon.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="zen-btn-market-sm ozon px-8 py-3.5 text-xs uppercase tracking-wider font-semibold"
            >
              Заказать на OZON ↗
            </a>
            <a
              href="https://wildberries.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="zen-btn-market-sm wb px-8 py-3.5 text-xs uppercase tracking-wider font-semibold"
            >
              Заказать на Wildberries ↗
            </a>
            <a
              href="/kontakty"
              className="px-8 py-3.5 rounded-md bg-[#B38E46] hover:bg-[#967434] text-white text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              Точки продаж в городе ↗
            </a>
          </div>
        </div>
      </section>

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
                <span className="zen-eyebrow mb-0">КОФЕ G7</span>
                <span className="text-xs text-[#8F877D] font-medium">
                  {activeModalProduct.detail}
                </span>
              </div>

              <h2 className="serif text-2xl mb-1 text-[#181512]">{activeModalProduct.name}</h2>
              <p className="text-xs text-[#9E958A] uppercase tracking-wider mb-3">
                {activeModalProduct.subname}
              </p>
              <p className="text-sm text-[#5C5349] leading-relaxed mb-4">
                {activeModalProduct.desc}
              </p>

              {/* Sensory Info */}
              <div className="bg-[#FAF8F5] border border-[#ECE6DC] rounded-lg p-3 mb-4 space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#8E867C]">Крепость:</span>
                  <div className="zen-beans-meter">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < activeModalProduct.strength ? "filled" : ""} />
                    ))}
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8E867C]">Аромат:</span>
                  <span className="font-semibold text-[#181512]">{activeModalProduct.aroma}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8E867C]">Способ приготовления:</span>
                  <span className="font-semibold text-[#181512]">{activeModalProduct.brewMethod}</span>
                </div>
              </div>

              {/* Brand Buttons */}
              <div className="flex gap-2">
                <a
                  href={activeModalProduct.ozonUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="zen-btn-market-sm ozon flex-1 text-center py-2.5"
                >
                  Купить на Ozon ↗
                </a>
                <a
                  href={activeModalProduct.wbUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="zen-btn-market-sm wb flex-1 text-center py-2.5"
                >
                  Купить на WB ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
