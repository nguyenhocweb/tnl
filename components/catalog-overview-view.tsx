"use client";

import React, { useState, useMemo } from "react";

type Product = {
  id: string;
  nameRu: string;
  nameVi: string;
  line: "g7" | "legend" | "sang-tao";
  format: "instant" | "beans" | "ground" | "drip" | "capsule";
  intensity: number; // 1-5
  spec: string;
  image: string;
  badge?: string;
  flavorNotes: string[];
  ozonUrl: string;
  wbUrl: string;
};

const catalogProducts: Product[] = [
  {
    id: "g7-3in1",
    nameRu: "G7 3 в 1 Classic",
    nameVi: "G7 CÀ PHÊ HÒA TAN 3IN1",
    line: "g7",
    format: "instant",
    intensity: 4,
    spec: "18 саше × 16 г",
    image: "/images/prod_g7.jpg",
    badge: "ХИТ ПРОДАЖ РФ",
    flavorNotes: ["Тёмный шоколад", "Сливочная карамель", "Плотный вкус"],
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "g7-black",
    nameRu: "G7 Pure Black (Чёрный)",
    nameVi: "G7 CÀ PHÊ ĐEN NGUYÊN CHẤT",
    line: "g7",
    format: "instant",
    intensity: 5,
    spec: "15 саше × 2 г",
    image: "/images/prod_g7.jpg",
    badge: "100% ROBUSTA",
    flavorNotes: ["Глубокая горечь", "Без сахара", "Максимальная концентрация"],
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "g7-cappuccino-hazelnut",
    nameRu: "G7 Cappuccino Hazelnut",
    nameVi: "G7 CAPPUCCINO HƯƠNG HẠT PHỈ",
    line: "g7",
    format: "instant",
    intensity: 3,
    spec: "12 саше × 18 г",
    image: "/images/prod_g7.jpg",
    badge: "НЕЖНАЯ ПЕНКА",
    flavorNotes: ["Жареный фундук", "Пышная пенка", "Мягкий бархат"],
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "legend-special-edition",
    nameRu: "Legend Special Edition",
    nameVi: "TRUNG NGUYÊN LEGEND SPECIAL",
    line: "legend",
    format: "ground",
    intensity: 5,
    spec: "Банка 225 г (Подарочная)",
    image: "/images/legend_luxury_still_life.jpg",
    badge: "ШЕДЕВР ДИПЛОМАТИИ",
    flavorNotes: ["Ферментация Weasel", "Нотки какао", "Долгое послевкусие"],
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "legend-drip-coffee",
    nameRu: "Vietnamese Drip Coffee",
    nameVi: "CÀ PHÊ PHIN GIẤY LEGEND",
    line: "legend",
    format: "drip",
    intensity: 4,
    spec: "10 дрип-пакетов × 10 г",
    image: "/images/ritual_phin_brewing.jpg",
    badge: "РИТУАЛ БЕЗ ХЛОПОТ",
    flavorNotes: ["Свежий пролив", "Чистый настой", "Ягодная свежесть"],
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "legend-capsule",
    nameRu: "Legend Bio Capsule",
    nameVi: "VIÊN NÉN SINH HỌC LEGEND",
    line: "legend",
    format: "capsule",
    intensity: 4,
    spec: "10 капсул (Nespresso compatible)",
    image: "/images/prod_legend.jpg",
    badge: "100% БИО-РАЗЛАГАЕМЫЙ",
    flavorNotes: ["Густая крема", "Баланс арабики", "Итальянская точность"],
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "sang-tao-1",
    nameRu: "Sáng Tạo 1 (Culi Robusta)",
    nameVi: "CÀ PHÊ SÁNG TẠO 1 · CULI ROBUSTA",
    line: "sang-tao",
    format: "ground",
    intensity: 4,
    spec: "Пакет 340 г",
    image: "/images/prod_creative.jpg",
    badge: "ТРАДИЦИЯ ФИНА",
    flavorNotes: ["Тёмная обжарка", "Густой настой", "Отборные зёрна кули"],
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "sang-tao-4",
    nameRu: "Sáng Tạo 4 (Премиум Бленд)",
    nameVi: "CÀ PHÊ SÁNG TẠO 4 · 4 LOẠI HẠT",
    line: "sang-tao",
    format: "ground",
    intensity: 5,
    spec: "Пакет 340 г",
    image: "/images/prod_creative.jpg",
    badge: "4 СОРТА ЗЁРЕН",
    flavorNotes: ["Culi, Robusta, Arabica, Catimor", "Многогранный букет", "Глубокий аромат"],
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "sang-tao-8",
    nameRu: "Sáng Tạo 8 (Легендарный)",
    nameVi: "CÀ PHÊ SÁNG TẠO 8 · TUYỆT PHẨM",
    line: "sang-tao",
    format: "ground",
    intensity: 5,
    spec: "Коробка 500 г (2 × 250 г)",
    image: "/images/prod_legend.jpg",
    badge: "ЗОЛОТОЙ ФОНД",
    flavorNotes: ["Биоферментация", "Сладкий финал", "Эксклюзивная обжарка"],
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "gourmet-blend-1kg",
    nameRu: "Gourmet Blend HoReCa",
    nameVi: "CÀ PHÊ HẠT GOURMET BLEND 1KG",
    line: "legend",
    format: "beans",
    intensity: 4,
    spec: "Пакет с клапаном 1000 г",
    image: "/images/cupping_lab_beans.jpg",
    badge: "HORECA PRO",
    flavorNotes: ["Плотная крема", "Стабильный эспрессо", "Шоколадно-ореховый"],
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "culi-beans-1kg",
    nameRu: "Premium Culi Beans",
    nameVi: "HẠT CULI NGUYÊN BẢN 1KG",
    line: "sang-tao",
    format: "beans",
    intensity: 5,
    spec: "Пакет с клапаном 1000 г",
    image: "/images/cupping_lab_beans.jpg",
    badge: "100% CULI SINGLE",
    flavorNotes: ["Одиночное круглое зерно", "Двойной кофеин", "Интенсивный импульс"],
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
  const [quizStep, setQuizStep] = useState<number>(1);
  const [quizStyle, setQuizStyle] = useState<string>("");
  const [quizIntensity, setQuizIntensity] = useState<string>("");

  // B2B modal
  const [b2bModalProduct, setB2bModalProduct] = useState<Product | null>(null);
  const [innInput, setInnInput] = useState("");
  const [b2bSubmitted, setB2bSubmitted] = useState(false);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return catalogProducts.filter((product) => {
      // Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.nameRu.toLowerCase().includes(q) || product.nameVi.toLowerCase().includes(q);
        const matchesNote = product.flavorNotes.some((n) => n.toLowerCase().includes(q));
        if (!matchesName && !matchesNote) return false;
      }
      // Line
      if (selectedLine !== "all" && product.line !== selectedLine) return false;
      // Format
      if (selectedFormat !== "all" && product.format !== selectedFormat) return false;
      // Intensity
      if (selectedIntensity === "soft" && product.intensity > 3) return false;
      if (selectedIntensity === "balanced" && product.intensity !== 4) return false;
      if (selectedIntensity === "strong" && product.intensity !== 5) return false;

      return true;
    });
  }, [searchQuery, selectedLine, selectedFormat, selectedIntensity]);

  // Quiz Recommendation
  const quizRecommendation = useMemo(() => {
    if (quizStyle === "instant") {
      return catalogProducts.find((p) => p.id === "g7-3in1");
    }
    if (quizStyle === "traditional") {
      return catalogProducts.find((p) => p.id === "sang-tao-1");
    }
    if (quizStyle === "office") {
      return catalogProducts.find((p) => p.id === "legend-drip-coffee");
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
          <span className="inline-block px-3.5 py-1 mb-4 rounded-full bg-[#B38E46]/90 text-white text-[11px] font-semibold tracking-widest uppercase shadow-lg">
            ОФИЦИАЛЬНАЯ КОЛЛЕКЦИЯ В РОССИИ
          </span>
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
          {/* Row of Filter Groups */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            {/* By Line */}
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

            {/* By Format */}
            <span className="text-xs uppercase tracking-wider text-[#7A7269] font-medium mr-1">Формат:</span>
            {[
              { id: "all", label: "Все форматы" },
              { id: "instant", label: "Растворимый" },
              { id: "beans", label: "В зёрнах" },
              { id: "ground", label: "Молотый" },
              { id: "drip", label: "Дрип-пакеты" },
              { id: "capsule", label: "Капсулы" },
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

            {/* By Intensity */}
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

      {/* ================= SECTION 3: PRODUCT GRID ================= */}
      <section id="catalog-grid" className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-[#EDE6DC]">
            <span className="text-4xl mb-4 block">☕</span>
            <h3 className="text-xl font-serif text-[#181512] mb-2">Ничего не найдено</h3>
            <p className="text-sm text-[#7A7269] mb-6">Попробуйте сбросить поисковый запрос или фильтры</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedLine("all");
                setSelectedFormat("all");
                setSelectedIntensity("all");
              }}
              className="px-6 py-2.5 rounded-xl bg-[#B38E46] text-white text-xs uppercase tracking-wider font-semibold"
            >
              Сбросить фильтры
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden border border-[#E8E2D7] hover:border-[#B38E46] hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                {/* Visual Image Header */}
                <div className="relative h-64 bg-[#F5F2EB] overflow-hidden flex items-center justify-center p-6">
                  <img
                    src={product.image}
                    alt={product.nameRu}
                    className="max-h-full max-w-full object-contain object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#181512]/90 backdrop-blur-sm text-white text-[10px] font-semibold tracking-wider uppercase border border-white/20">
                      {product.badge}
                    </span>
                  )}
                  {/* Intensity dots indicator */}
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#E8E2D7] flex items-center gap-1 shadow-sm">
                    <span className="text-[10px] text-[#7A7269] uppercase font-semibold mr-0.5">Крепость:</span>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`inline-block w-2 h-2 rounded-full ${
                          i < product.intensity ? "bg-[#B38E46]" : "bg-[#DDD7CC]"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#B38E46] font-semibold">
                      {product.spec}
                    </span>
                    <h3 className="text-xl font-serif text-[#181512] mt-1 group-hover:text-[#B38E46] transition-colors">
                      {product.nameRu}
                    </h3>
                    <p className="text-xs text-[#8C827A] italic mt-0.5 mb-4">{product.nameVi}</p>

                    {/* Flavor tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {product.flavorNotes.map((note) => (
                        <span
                          key={note}
                          className="px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#E8E2D7] text-[11px] text-[#5C5248]"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dual Action CTAs (B2C & B2B) */}
                  <div className="pt-4 border-t border-[#F0EBE1] flex flex-col gap-2">
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={product.ozonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl bg-[#005BFF] hover:bg-[#0047C6] text-white text-xs font-semibold text-center transition-colors shadow-sm flex items-center justify-center gap-1"
                      >
                        <span>OZON</span> ↗
                      </a>
                      <a
                        href={product.wbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl bg-[#CB11AB] hover:bg-[#A50C8B] text-white text-xs font-semibold text-center transition-colors shadow-sm flex items-center justify-center gap-1"
                      >
                        <span>WB</span> ↗
                      </a>
                    </div>
                    <button
                      onClick={() => setB2bModalProduct(product)}
                      className="w-full py-2 rounded-xl bg-[#FAF8F5] hover:bg-[#EDE6DC] text-[#4A4238] border border-[#E8E2D7] text-xs font-medium text-center transition-colors"
                    >
                      Оптовый запрос (B2B) ↘
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
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
                  alt={quizRecommendation.nameRu}
                  className="w-24 h-24 object-contain rounded-xl bg-white p-2 border border-[#E8E2D7]"
                />
                <div className="flex-1 text-center md:text-left">
                  <span className="text-[10px] uppercase tracking-wider text-[#B38E46] font-bold">
                    Ваш идеальный выбор:
                  </span>
                  <h4 className="text-xl font-serif text-[#181512] mt-0.5">{quizRecommendation.nameRu}</h4>
                  <p className="text-xs text-[#7A7269] mt-1">{quizRecommendation.flavorNotes.join(" · ")}</p>
                </div>
                <div className="flex gap-2">
                  <a
                    href={quizRecommendation.ozonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#005BFF] text-white text-xs font-semibold shadow hover:bg-[#0047C6]"
                  >
                    Купить на OZON ↗
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: WHOLESALE B2B BANNER ================= */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-[#181512] text-white p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(#B38E46_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

          <div className="relative z-10 max-w-xl">
            <span className="px-3 py-1 rounded-full bg-[#B38E46]/30 text-[#D4B26F] text-xs uppercase tracking-wider font-semibold border border-[#B38E46]/40 inline-block mb-4">
              ОПТОВЫМ ПАРТНЁРАМ И СЕТЯМ
            </span>
            <h2 className="text-2xl md:text-4xl font-serif text-white mb-3">
              Оптовый прайс-лист для ритейла и HoReCa
            </h2>
            <p className="text-sm text-[#BFB7AA] leading-relaxed mb-6">
              Прямой контракт с официальным импортером Trung Nguyên Legend в России. Склад в Москве, сертификаты EAC и ГОСТ-Р.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/dlya-partnerov"
                className="px-6 py-3 rounded-xl bg-[#B38E46] hover:bg-[#C9A257] text-white text-xs uppercase tracking-wider font-semibold transition-colors shadow-lg"
              >
                Оформить оптовую заявку ↗
              </a>
              <button
                onClick={() => alert("PDF каталог будет загружен после подключения финальной версии документа.")}
                className="px-6 py-3 rounded-xl border border-white/30 hover:border-white text-white text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                Скачать PDF каталог (4.2 MB) ⤓
              </button>
            </div>
          </div>

          <div className="relative z-10 w-full md:w-72 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center">
            <span className="text-3xl block mb-2">📑</span>
            <span className="text-xs uppercase tracking-wider text-[#D4B26F] font-bold block mb-1">
              B2B СТАТУС В РФ
            </span>
            <p className="text-xs text-[#BFB7AA] mb-4">
              Поставки от 1 паллета до контейнерных партий по всей РФ и ЕАЭС.
            </p>
            <span className="inline-block px-3 py-1 rounded-md bg-white/10 text-[11px] text-[#E8E2D7]">
              ИНН · НДС 20% · ЭДО
            </span>
          </div>
        </div>
      </section>

      {/* ================= B2B INQUIRY MODAL ================= */}
      {b2bModalProduct && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 border border-[#E8E2D7] shadow-2xl relative animate-fadeIn">
            <button
              onClick={() => {
                setB2bModalProduct(null);
                setB2bSubmitted(false);
              }}
              className="absolute top-6 right-6 text-xl text-[#7A7269] hover:text-[#181512]"
            >
              ✕
            </button>

            {!b2bSubmitted ? (
              <>
                <span className="text-xs uppercase tracking-widest text-[#B38E46] font-semibold block mb-1">
                  Оптовый запрос
                </span>
                <h3 className="text-2xl font-serif text-[#181512] mb-1">{b2bModalProduct.nameRu}</h3>
                <p className="text-xs text-[#7A7269] mb-6">{b2bModalProduct.spec}</p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setB2bSubmitted(true);
                  }}
                  className="flex flex-col gap-4"
                >
                  <div>
                    <label className="text-xs text-[#4A4238] font-medium block mb-1">
                      ИНН компании или ИП (10 или 12 цифр) *
                    </label>
                    <input
                      required
                      pattern="[0-9]{10,12}"
                      value={innInput}
                      onChange={(e) => setInnInput(e.target.value)}
                      placeholder="7701234567"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D9D2C7] focus:border-[#B38E46] outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#4A4238] font-medium block mb-1">
                      Контактное лицо и телефон *
                    </label>
                    <input
                      required
                      placeholder="+7 (999) 000-00-00"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D9D2C7] focus:border-[#B38E46] outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-[#4A4238] font-medium block mb-1">
                      Планируемый объём закупки
                    </label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-[#D9D2C7] focus:border-[#B38E46] outline-none text-sm bg-white">
                      <option>От 1 коробки (Пробная партия)</option>
                      <option>1–5 паллет (Регулярные поставки)</option>
                      <option>Контейнерная норма</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#B38E46] hover:bg-[#C9A257] text-white text-xs uppercase tracking-wider font-semibold transition-colors mt-2"
                  >
                    Отправить запрос на прайс ↗
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <span className="text-4xl mb-3 block">✓</span>
                <h4 className="text-xl font-serif text-[#181512] mb-2">Запрос успешно принят</h4>
                <p className="text-xs text-[#7A7269] mb-6">
                  Коммерческий отдел свяжется с вами по указанным контактам в течение 2 часов.
                </p>
                <button
                  onClick={() => {
                    setB2bModalProduct(null);
                    setB2bSubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#181512] text-white text-xs font-semibold"
                >
                  Закрыть
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
