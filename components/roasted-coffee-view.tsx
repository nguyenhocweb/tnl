"use client";

import React, { useState } from "react";
import B2BFormSection from "./b2b-form-section";

type RoastedProduct = {
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

const masterpieces: RoastedProduct[] = [
  {
    id: "legend-special",
    name: "Legend Special Edition",
    subname: "Шедевр биологической ферментации Weasel",
    detail: "БАНКА 225 Г В БАРХАТНОМ ФУТЛЯРЕ",
    strength: 5,
    aroma: "Дикий мёд · Тёмное какао · Мускус",
    brewMethod: "Традиционный фин / Пресс",
    image: "/images/legend_luxury_still_life.jpg",
    desc: "Шедевр биологической ферментации, воссоздающий легендарный профиль кофе Chồn (Weasel). Подавался первым лицам на саммитах APEC и АСЕАН.",
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "vietnamese-drip",
    name: "Vietnamese Drip Coffee",
    subname: "Кофе в индивидуальных фильтр-пакетах",
    detail: "10 ДРИП-ПАКЕТОВ × 10 Г",
    strength: 4,
    aroma: "Арабика & Робуста · Мягкая карамель",
    brewMethod: "Индивидуальный дрип-пакет",
    image: "/images/ritual_phin_brewing.jpg",
    desc: "Натуральный молотый кофе в одноразовых бумажных капельницах. Персональный ритуал созерцания и чистейшего вкуса прямо в офисе.",
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "legend-capsule",
    name: "Legend Bio Capsule",
    subname: "100% био-разлагаемые капсулы Nespresso",
    detail: "10 КАПСУЛ (NESPRESSO COMPATIBLE)",
    strength: 4,
    aroma: "Сливочный фундук · Плотная пенка",
    brewMethod: "Капсульная кофемашина",
    image: "/images/prod_legend.jpg",
    desc: "Капсулы из растительного сырья, полностью разлагаемые в природе. Густая стойкая пенка Crema и благородная сбалансированная горчинка.",
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
];

const giftSets = [
  {
    titleRu: "Королевский набор Legend",
    titleVi: "BỘ QUÀ TẶNG HOÀNG GIA",
    contents: "Шедевр Legend Special Edition + Фин с золотым напылением 24k + 2 фарфоровые пиалы ручной работы",
    badge: "VIP ПОДАРОК",
    image: "/images/legend_luxury_still_life.jpg",
  },
  {
    titleRu: "Набор «Энергия Прорыва»",
    titleVi: "BỘ QUÀ TẶNG KHỞI NGHIỆP",
    contents: "Молотый кофе Sáng Tạo + Традиционный фин из матового алюминия + Книга «Думай и богатей» на русском языке",
    badge: "ДЕЛОВОЙ СТИЛЬ",
    image: "/images/energy_books.jpg",
  },
];

export default function RoastedCoffeeView() {
  const [activeModalProduct, setActiveModalProduct] = useState<RoastedProduct | null>(null);

  return (
    <div className="roasted-coffee-page">
      {/* ================= SECTION 1: LUXURY STILL LIFE HERO (100VH) ================= */}
      <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-end pb-16 px-6 md:px-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.98] transition-transform duration-1000 scale-105 hover:scale-100"
          style={{ backgroundImage: `url('/images/legend_luxury_still_life.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="relative z-10 max-w-4xl">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white tracking-wide font-normal drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] leading-tight mb-3">
            Высокое Искусство Кофе
          </h1>
          <p className="text-base md:text-xl text-[#F7EFE3] font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] mb-8">
            Вдохновение для великих свершений и мысли.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#masterpieces"
              className="px-7 py-3.5 rounded-2xl bg-[#C5A059] hover:bg-[#B38E46] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-xl"
            >
              Исследовать коллекцию ↘
            </a>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: TRIPTYCH LUXURY GALLERY (EXACT IMAGE 3 LAYOUT) ================= */}
      <section id="masterpieces" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mb-3">
            Трилогия совершенства Legend
          </h2>
          <p className="text-sm text-[#7A7269]">
            Вершина искусства купажирования для особых случаев, деловых подарков и личных ритуалов
          </p>
        </div>

        <div className="zen-product-grid">
          {masterpieces.map((p) => (
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

      {/* ================= SECTION 3: CORPORATE & DIPLOMATIC GIFTS ================= */}
      <section className="py-24 px-6 md:px-16 bg-[#FAF7F2] border-y border-[#E8E2D7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mb-3">
              Корпоративные подарочные наборы
            </h2>
            <p className="text-sm text-[#7A7269]">
              Брендирование упаковки с логотипом вашей компании к Новому Году, 23 Февраля, 8 Марта и юбилеям
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {giftSets.map((gift) => (
              <div
                key={gift.titleRu}
                className="bg-white rounded-3xl overflow-hidden border border-[#E8E2D7] shadow-md flex flex-col sm:flex-row items-center"
              >
                <div className="w-full sm:w-1/2 h-64 sm:h-full relative overflow-hidden bg-[#181512]">
                  <img
                    src={gift.image}
                    alt={gift.titleRu}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="w-full sm:w-1/2 p-8">
                  <h3 className="text-xl font-serif text-[#181512] mb-1 font-semibold">{gift.titleRu}</h3>
                  <p className="text-xs text-[#8C827A] italic mb-4">{gift.titleVi}</p>
                  <p className="text-xs text-[#5C5248] leading-relaxed mb-6">{gift.contents}</p>
                  <a
                    href="#corporate-form"
                    className="inline-block px-5 py-2.5 rounded-md bg-[#181512] hover:bg-[#C5A059] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Заказать расчёт ↗
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#E8E2D7] text-center max-w-2xl mx-auto shadow-sm">
            <h4 className="font-serif text-lg text-[#181512] mb-2 font-semibold">
              Индивидуальное брендирование для компаний
            </h4>
            <p className="text-xs text-[#7A7269] leading-relaxed mb-4">
              Шелкография, тиснение золотой фольгой, поздравительные открытки с персональным обращением от руководства.
            </p>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FAF7F2] text-[#C5A059] text-xs font-semibold border border-[#E8E2D7]">
              Тиражи от 20 комплектов · Срок исполнения 7–14 дней
            </span>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: YIN-YANG BLENDING DUALITY ================= */}
      <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto text-center">
        <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
          ТАЙНА ЗОЛОТОГО БЛЕНДА
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mt-2 mb-4">
          Гармония двух начал
        </h2>
        <p className="text-sm text-[#7A7269] max-w-xl mx-auto mb-16">
          Единство противоположностей: высокогорная арабика и базальтовая робуста рождают неповторимый баланс
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-[#E8E2D7] relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center text-xl font-serif font-bold mb-6">
              A
            </div>
            <span className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold block mb-1">
              Высокогорье Кау Дат
            </span>
            <h3 className="text-2xl font-serif text-[#181512] mb-3">Arabica Cầu Đất</h3>
            <p className="text-xs text-[#5C5248] leading-relaxed mb-6">
              Произрастает на высоте 1 500 метров над уровнем моря. Дарит напитку благородную винную кислинку, цветочный аромат и шелковистую мягкость.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-md bg-white text-[11px] text-[#7A7269] border border-[#E8E2D7]">
                Цветочные ноты
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white text-[11px] text-[#7A7269] border border-[#E8E2D7]">
                Мёд и цитрус
              </span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#181512] text-white border border-[#2E2822] relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#C5A059]/30 text-[#C5A059] flex items-center justify-center text-xl font-serif font-bold mb-6">
              R
            </div>
            <span className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold block mb-1">
              Базальтовое плато Буонметхуот
            </span>
            <h3 className="text-2xl font-serif text-white mb-3">Robusta Buôn Ma Thuột</h3>
            <p className="text-xs text-[#BFB7AA] leading-relaxed mb-6">
              Впитавшая жар тропического солнца и плодородие красных базальтовых почв. Обеспечивает плотное тягучее тело и глубокую шоколадную горечь.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-1 rounded-md bg-white/10 text-[11px] text-[#E8E2D7]">
                Тёмный шоколад
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/10 text-[11px] text-[#E8E2D7]">
                Плотное тело
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: EXACT IMAGE 4 B2B FORM ================= */}
      <B2BFormSection
        id="corporate-form"
        title="Заказ корпоративных подарков и прайс для компаний"
        desc="Поставки кофе Legend, брендированных наборов и подарочных корзин с тиснением логотипа вашей компании для праздников и деловых партнеров."
        buttonText="ПОЛУЧИТЬ КОРПОРАТИВНЫЙ ПРАЙС-ЛИСТ (PDF) ↗"
      />

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
                <span className="zen-eyebrow mb-0">ПРЕМИАЛЬНЫЙ КОФЕ</span>
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
                  <span className="text-[#8E867C]">Способ заваривания:</span>
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
