"use client";

import React, { useState, useMemo } from "react";
import B2BFormSection from "./b2b-form-section";

type Product = {
  id: string;
  name: string;
  subname: string;
  detail: string;
  priceRub: number;
  priceEstimated?: boolean;
  line: "g7" | "legend" | "sang-tao";
  format: "instant" | "beans" | "ground" | "drip" | "capsule";
  strength: number; // 1-5
  aroma: string;
  brewMethod: string;
  image: string;
  desc: string;
  ozonUrl: string;
  wbUrl: string;
};

const catalogProducts: Product[] = [
  {
    id: "g7-black",
    priceRub: 350,
    name: "G7 Чёрный (Pure Black)",
    subname: "100% чистый чёрный кофе без сахара",
    detail: "15 САШЕ × 2 Г",
    line: "g7",
    format: "instant",
    strength: 5,
    aroma: "Глубокая обжарка · Горький какао",
    brewMethod: "В чашке за 30 секунд",
    image: "/images/prod_g7.jpg",
    desc: "100% робуста из Буонметхуота ультратонкого помола. Густой, насыщенный, бескомпромиссно бодрящий настой без сахара и сливок.",
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "vietnamese-drip",
    priceRub: 550,
    priceEstimated: true,
    name: "Vietnamese Drip Coffee",
    subname: "Кофе в индивидуальных фильтр-пакетах",
    detail: "5 ДРИП-ПАКЕТОВ × 15 Г",
    line: "legend",
    format: "drip",
    strength: 3,
    aroma: "Арабика & Робуста · Мягкая карамель",
    brewMethod: "Индивидуальный дрип-пакет",
    image: "/images/prod_legend.jpg",
    desc: "Аутентичный молотый кофе высшей категории в инновационном био-разлагаемом дрип-пакете. Наслаждайтесь ритуалом пролива в офисе или путешествии.",
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "premium-culi",
    priceRub: 950,
    priceEstimated: true,
    name: "Premium Culi Beans",
    subname: "Редкие круглые зёрна ручного сбора",
    detail: "КОФЕ В ЗЁРНАХ · 500 Г",
    line: "sang-tao",
    format: "beans",
    strength: 5,
    aroma: "Плотная пенка Crema · Обжаренный фундук",
    brewMethod: "Кофемашина / Ручной помол",
    image: "/images/prod_creative.jpg",
    desc: "Одиночные сферические зёрна Кули, впитавшие двойную дозу минералов и кофеина с базальтовых плато. Мощное бархатное тело.",
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "g7-3in1",
    priceRub: 450,
    name: "G7 3 в 1 Classic",
    subname: "Золотой баланс кофе, сливок и тростникового сахара",
    detail: "18 САШЕ × 16 Г",
    line: "g7",
    format: "instant",
    strength: 4,
    aroma: "Сливочный ирис · Тёмный шоколад",
    brewMethod: "В чашке за 30 секунд",
    image: "/images/prod_g7.jpg",
    desc: "Легендарный бестселлер во Вьетнаме и России. Сливочно-карамельный баланс с ярко выраженным натуральным кофейным сердцем.",
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "legend-special",
    priceRub: 8422,
    name: "Legend Special Edition",
    subname: "Коллекционный шедевр ферментации Weasel",
    detail: "МОЛОТЫЙ КОФЕ · 225 Г",
    line: "legend",
    format: "ground",
    strength: 5,
    aroma: "Дикий мёд · Тонкое какао",
    brewMethod: "Традиционный фин / Пресс",
    image: "/images/prod_legend.jpg",
    desc: "Исключительный подарок дипломатического уровня. Ферментация с участием природных энзимов, воссоздающая профиль легендарного кофе Копи Лювак.",
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "sang-tao-4",
    priceRub: 900,
    name: "Sáng Tạo 4 (Премиум Бленд)",
    subname: "Купаж 4 сортов: Culi, Robusta, Arabica, Catimor",
    detail: "МОЛОТЫЙ КОФЕ · 340 Г",
    line: "sang-tao",
    format: "ground",
    strength: 5,
    aroma: "Сушёный чернослив · Мускатный орех",
    brewMethod: "Фин / Гейзерная кофеварка",
    image: "/images/prod_creative.jpg",
    desc: "Многогранный бленд четырёх видов зёрен с уникальной обжаркой. Создан для неспешного созерцания и сложных авторских рецептур.",
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
];

export default function CatalogOverviewView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLine, setSelectedLine] = useState<string>("all");
  const [selectedFormat, setSelectedFormat] = useState<string>("all");
  const [selectedIntensity, setSelectedIntensity] = useState<string>("all");
  
  // Quick quiz states
  const [quizStyle, setQuizStyle] = useState<string>("");

  // Modal
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return catalogProducts.filter((product) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q) || product.subname.toLowerCase().includes(q);
        const matchesAroma = product.aroma.toLowerCase().includes(q);
        if (!matchesName && !matchesAroma) return false;
      }
      // Line
      if (selectedLine !== "all" && product.line !== selectedLine) return false;
      // Format
      if (selectedFormat !== "all" && product.format !== selectedFormat) return false;
      // Intensity
      if (selectedIntensity === "soft" && product.strength > 3) return false;
      if (selectedIntensity === "balanced" && product.strength !== 4) return false;
      if (selectedIntensity === "strong" && product.strength !== 5) return false;

      return true;
    });
  }, [searchQuery, selectedLine, selectedFormat, selectedIntensity]);

  // Quiz Recommendation
  const quizRecommendation = useMemo(() => {
    if (quizStyle === "instant") {
      return catalogProducts.find((p) => p.id === "g7-black");
    }
    if (quizStyle === "traditional") {
      return catalogProducts.find((p) => p.id === "sang-tao-4");
    }
    if (quizStyle === "office") {
      return catalogProducts.find((p) => p.id === "vietnamese-drip");
    }
    return catalogProducts[0];
  }, [quizStyle]);

  return (
    <div className="catalog-overview-page">
      {/* ================= SECTION 1: HERO CATALOG PANORAMA (100VH) ================= */}
      <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-end pb-16 px-6 md:px-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.98] transition-transform duration-1000 scale-105 hover:scale-100"
          style={{ backgroundImage: `url('/images/catalog_hero_panorama.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/15" />

        <div className="relative z-10 max-w-5xl">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white tracking-wide font-normal drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] leading-tight mb-3">
            Коллекция Энергии Trung Nguyên Legend
          </h1>
          <p className="text-base md:text-xl text-[#F2EBD9] font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] mb-8">
            Пробуждение разума для великих свершений.
          </p>

          {/* Instant Live Search Bar */}
          <div className="relative max-w-2xl bg-white/95 backdrop-blur-md rounded-2xl p-2 shadow-2xl border border-white/40 flex items-center gap-3">
            <span className="text-xl pl-3 text-[#B38E46]">🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Найти любимый кофе (G7, Legend, Sáng Tạo, зёрна, дрип)..."
              className="flex-1 bg-transparent border-none outline-none text-[#181512] placeholder-[#8C827A] text-sm md:text-base font-normal py-2"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs text-[#8C827A] hover:text-[#181512] px-2 py-1"
              >
                ✕ Очистить
              </button>
            )}
            <a
              href="#catalog-grid"
              className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-xl bg-[#181512] hover:bg-[#B38E46] text-white text-xs uppercase tracking-wider font-semibold transition-colors duration-300"
            >
              Смотреть
            </a>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: ZEN SMART FILTERS BAR ================= */}
      <section className="sticky top-16 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-y border-[#E8E2D7] py-4 px-6 md:px-16 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <span className="text-xs uppercase tracking-wider text-[#7A7269] font-medium mr-1">Линейка:</span>
            {[
              { id: "all", label: "Все" },
              { id: "g7", label: "G7" },
              { id: "legend", label: "Legend" },
              { id: "sang-tao", label: "Sáng Tạo" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelectedLine(btn.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedLine === btn.id
                    ? "bg-[#B38E46] text-white shadow-sm"
                    : "bg-white text-[#4A4238] border border-[#E8E2D7] hover:border-[#B38E46]"
                }`}
              >
                {btn.label}
              </button>
            ))}

            <div className="hidden md:block w-px h-5 bg-[#E8E2D7] mx-1" />

            <span className="text-xs uppercase tracking-wider text-[#7A7269] font-medium mr-1">Формат:</span>
            {[
              { id: "all", label: "Все форматы" },
              { id: "instant", label: "Растворимый" },
              { id: "beans", label: "В зёрнах" },
              { id: "ground", label: "Молотый" },
              { id: "drip", label: "Дрип-пакеты" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelectedFormat(btn.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedFormat === btn.id
                    ? "bg-[#181512] text-white shadow-sm"
                    : "bg-white text-[#4A4238] border border-[#E8E2D7] hover:border-[#181512]"
                }`}
              >
                {btn.label}
              </button>
            ))}

            <div className="hidden lg:block w-px h-5 bg-[#E8E2D7] mx-1" />

            <span className="text-xs uppercase tracking-wider text-[#7A7269] font-medium mr-1">Крепость:</span>
            {[
              { id: "all", label: "Любая" },
              { id: "soft", label: "1-3" },
              { id: "balanced", label: "4" },
              { id: "strong", label: "5 ●●●●●" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelectedIntensity(btn.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedIntensity === btn.id
                    ? "bg-[#5C3D28] text-white shadow-sm"
                    : "bg-white text-[#4A4238] border border-[#E8E2D7] hover:border-[#5C3D28]"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-[#7A7269] font-medium">
            Найдено: <strong className="text-[#181512]">{filteredProducts.length}</strong> позиций
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: PRODUCT GRID (EXACT IMAGE 3 SPECIFICATION) ================= */}
      <section id="catalog-grid" className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
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

              <div className="zen-product-price">
                <div className="zen-product-price-main">
                  <strong>{p.priceEstimated ? "≈ " : ""}{p.priceRub.toLocaleString("ru-RU")} ₽</strong>
                  <span>за упаковку</span>
                </div>
              </div>

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

              {/* Actions & Brand Direct Buttons */}
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

      {/* ================= SECTION 4: 30-SECOND COFFEE FINDER QUIZ ================= */}
      <section className="py-20 px-6 md:px-16 bg-[#F4F0E8] border-y border-[#E8E2D7]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-[#B38E46] font-semibold">
              ИНДИВИДУАЛЬНЫЙ ПОДБОР ЗА 30 СЕКУНД
            </span>
            <h2 className="text-2xl md:text-4xl font-serif text-[#181512] mt-2 mb-3">
              Какой кофе подходит именно вам?
            </h2>
            <p className="text-sm text-[#7A7269]">Ответьте на 1 вопрос, чтобы получить идеальную рекомендацию</p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E8E2D7] shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                {
                  id: "instant",
                  title: "Быстро & В движении",
                  desc: "Растворимый G7 за 30 секунд дома, в офисе или в дороге",
                  icon: "⚡",
                },
                {
                  id: "traditional",
                  title: "Традиционный ритуал",
                  desc: "Медленное капельное заваривание через вьетнамский фин",
                  icon: "☕",
                },
                {
                  id: "office",
                  title: "Офисный дрип без хлопот",
                  desc: "Свежий натуральный фильтр-кофе в дрип-пакете",
                  icon: "✨",
                },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setQuizStyle(opt.id)}
                  className={`p-6 rounded-2xl border text-left transition-all ${
                    quizStyle === opt.id
                      ? "border-[#B38E46] bg-[#FAF7F0] ring-2 ring-[#B38E46]/30 shadow-md"
                      : "border-[#E8E2D7] hover:border-[#B38E46] bg-white"
                  }`}
                >
                  <span className="text-3xl mb-3 block">{opt.icon}</span>
                  <h4 className="font-serif text-base text-[#181512] mb-1 font-semibold">{opt.title}</h4>
                  <p className="text-xs text-[#7A7269] leading-relaxed">{opt.desc}</p>
                </button>
              ))}
            </div>

            {/* Quiz Result Output */}
            {quizStyle && quizRecommendation && (
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#B38E46]/40 flex flex-col md:flex-row items-center gap-6 animate-fadeIn">
                <img
                  src={quizRecommendation.image}
                  alt={quizRecommendation.name}
                  className="w-24 h-24 object-contain rounded-xl bg-white p-2 border border-[#E8E2D7]"
                />
                <div className="flex-1 text-center md:text-left">
                  <span className="text-[10px] uppercase tracking-wider text-[#B38E46] font-bold">
                    Ваш идеальный выбор:
                  </span>
                  <h4 className="text-xl font-serif text-[#181512] mt-0.5">{quizRecommendation.name}</h4>
                  <p className="text-xs text-[#7A7269] mt-1">{quizRecommendation.subname}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={quizRecommendation.ozonUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="zen-btn-market-sm ozon px-6 py-2.5"
                  >
                    OZON ↗
                  </a>
                  <a
                    href={quizRecommendation.wbUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="zen-btn-market-sm wb px-6 py-2.5"
                  >
                    WB ↗
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: IMAGE 4 B2B FORM ================= */}
      <B2BFormSection />

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

              {/* Actions with Brand Colors */}
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
