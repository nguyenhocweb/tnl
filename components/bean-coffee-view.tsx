"use client";

import React, { useState } from "react";
import B2BFormSection from "./b2b-form-section";

type BeanProduct = {
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

const sangTaoSeries = [
  {
    num: "1",
    nameRu: "Sáng Tạo 1 · Culi Robusta",
    nameVi: "CÀ PHÊ SÁNG TẠO 1 · CULI ROBUSTA",
    blendRatio: "100% Culi Robusta",
    roastLevel: "Тёмная обжарка (Dark Roast)",
    desc: "Плотный, терпкий настой с традиционной глубокой горчинкой. Идеален для классического вьетнамского фина со сгущенным молоком.",
    notes: ["Горький шоколад", "Жжёная карамель", "Дымный оттенок"],
    intensity: 5,
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    num: "2",
    nameRu: "Sáng Tạo 2 · Arabica & Robusta",
    nameVi: "CÀ PHÊ SÁNG TẠO 2 · HÒA QUYỆN",
    blendRatio: "70% Robusta · 30% Arabica",
    roastLevel: "Средне-тёмная обжарка",
    desc: "Изысканное сочетание насыщенной плотности робусты и утончённого аромата арабики. Сбалансированный мягкий вкус на каждый день.",
    notes: ["Жареный фундук", "Пряная выпечка", "Мягкий финал"],
    intensity: 4,
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    num: "3",
    nameRu: "Sáng Tạo 3 · Arabica Se Sẻ",
    nameVi: "CÀ PHÊ SÁNG TẠO 3 · ARABICA SE SẺ",
    blendRatio: "100% Arabica Se Sẻ",
    roastLevel: "Средняя обжарка (Medium Roast)",
    desc: "Редкий сорт высокогорной вьетнамской арабики. Изысканная ягодная кислинка, цветочное благоухание и чистое шелковое тело.",
    notes: ["Лесные ягоды", "Цитрусовый цвет", "Винный шлейф"],
    intensity: 3,
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    num: "4",
    nameRu: "Sáng Tạo 4 · Квартет Зёрен",
    nameVi: "CÀ PHÊ SÁNG TẠO 4 · 4 LOẠI HẠT",
    blendRatio: "Culi, Robusta, Arabica, Catimor",
    roastLevel: "Авторская многослойная обжарка",
    desc: "Сложный гармоничный купаж четырёх сортов. Богатый аромат, раскрывающийся каскадом ореховых, фруктовых и шоколадных оттенков.",
    notes: ["Спелый чернослив", "Мускатный орех", "Тёмный какао"],
    intensity: 5,
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    num: "5",
    nameRu: "Sáng Tạo 5 · Culi Arabica",
    nameVi: "CÀ PHÊ SÁNG TẠO 5 · ĐỈNH CAO ARABICA",
    blendRatio: "100% Culi Arabica",
    roastLevel: "Средне-светлая обжарка",
    desc: "Аристократический кофе из отборных круглых зёрен арабики Culi. Непревзойдённый аромат, бархатное послевкусие и ноты благородного коньяка.",
    notes: ["Цветочный мёд", "Сушёный инжир", "Ваниль"],
    intensity: 4,
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
];

const horecaProducts: BeanProduct[] = [
  {
    id: "gourmet-1kg",
    name: "Gourmet Blend (1 кг)",
    subname: "Профессиональный бленд для эспрессо-машин",
    detail: "ФАСОВКА 1 КГ С ДЕГАЗАЦИОННЫМ КЛАПАНОМ",
    strength: 4,
    aroma: "Густая Crema · Обжаренный фундук · Шоколад",
    brewMethod: "Рожковая кофемашина (Espresso)",
    image: "/images/cupping_lab_beans.jpg",
    desc: "Специально разработанный купаж для ресторанного сектора HoReCa. Обеспечивает стабильную золотистую пенку Crema и благородный баланс при работе на высоких нагрузках.",
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
  {
    id: "premium-culi-1kg",
    name: "Premium Culi Beans (1 кг)",
    subname: "Редкие моносортовые круглые зёрна Кули",
    detail: "100% SINGLE PEABERRY · 1000 Г",
    strength: 5,
    aroma: "Двойной кофеин · Горький трюфель · Карамель",
    brewMethod: "Кофемашина / Традиционный фин",
    image: "/images/cupping_lab_beans.jpg",
    desc: "Отборные цельные круглые зёрна с повышенным содержанием эфирных масел. Дарят напитку предельно плотное тело и яркий бодрящий импульс.",
    ozonUrl: "https://ozon.ru",
    wbUrl: "https://wildberries.ru",
  },
];

const brewingCompass = [
  {
    method: "Эспрессо (Espresso)",
    grind: "Мелкий помол (Fine)",
    temp: "92–94°C",
    ratio: "1:2 (18г кофе на 36г напитка)",
    time: "25–30 секунд",
    icon: "☕",
  },
  {
    method: "Вьетнамский Фин (Phin)",
    grind: "Средний помол (Medium)",
    temp: "96°C",
    ratio: "1:3 (25г кофе на 80мл воды)",
    time: "4–5 минут медленного пролива",
    icon: "🫖",
  },
  {
    method: "Френч-Пресс (French Press)",
    grind: "Крупный помол (Coarse)",
    temp: "93°C",
    ratio: "1:15 (30г кофе на 450мл воды)",
    time: "4 минуты заваривания",
    icon: "⏱️",
  },
  {
    method: "Фильтр / V60 (Pour-over)",
    grind: "Средне-мелкий (Sand)",
    temp: "94°C",
    ratio: "1:16 (15г кофе на 240мл воды)",
    time: "2.5–3 минуты по спирали",
    icon: "🌪️",
  },
];

export default function BeanCoffeeView() {
  const [activeSangTaoIndex, setActiveSangTaoIndex] = useState(0);
  const [activeModalProduct, setActiveModalProduct] = useState<BeanProduct | null>(null);

  const currentST = sangTaoSeries[activeSangTaoIndex];

  return (
    <div className="bean-coffee-page">
      {/* ================= SECTION 1: SPECIALTY LAB HERO (100VH) ================= */}
      <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-end pb-16 px-6 md:px-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.98] transition-transform duration-1000 scale-105 hover:scale-100"
          style={{ backgroundImage: `url('/images/cupping_lab_beans.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="relative z-10 max-w-4xl">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white tracking-wide font-normal drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] leading-tight mb-3">
            Искусство Зерна и Обжарки
          </h1>
          <p className="text-base md:text-xl text-[#F2EBD9] font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] mb-8">
            100% отборные зёрна из сердца высокогорного Вьетнама.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#sang-tao-carousel"
              className="px-7 py-3.5 rounded-2xl bg-[#B38E46] hover:bg-[#967434] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-xl"
            >
              Исследовать сорта зёрен ↘
            </a>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: SÁNG TẠO 1 TO 5 INTERACTIVE CAROUSEL ================= */}
      <section id="sang-tao-carousel" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mb-3">
            Пять ступеней кофейного мастерства
          </h2>
          <p className="text-sm text-[#7A7269]">
            Пять авторских рецептур Trung Nguyên — от классической робусты до высокогорной арабики Se Sẻ
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
          {sangTaoSeries.map((st, idx) => (
            <button
              key={st.num}
              onClick={() => setActiveSangTaoIndex(idx)}
              className={`px-5 py-3 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 ${
                activeSangTaoIndex === idx
                  ? "bg-[#181512] text-white shadow-lg scale-105"
                  : "bg-white text-[#7A7269] border border-[#E8E2D7] hover:border-[#B38E46]"
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-[#B38E46] text-white text-[11px] flex items-center justify-center font-bold">
                {st.num}
              </span>
              <span>Sáng Tạo {st.num}</span>
            </button>
          ))}
        </div>

        {/* Active Item Showcase Card */}
        <div className="bg-white rounded-3xl border border-[#E8E2D7] p-8 md:p-14 shadow-xl flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-80 bg-[#FAF7F2] rounded-3xl p-6 flex items-center justify-center border border-[#EDE6DC]">
              <img
                src="/images/prod_creative.jpg"
                alt={currentST.nameRu}
                className="max-h-full object-contain"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#B38E46] text-white text-xs font-bold">
                № {currentST.num}
              </span>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#FAF7F2] text-[#B38E46] text-xs font-semibold border border-[#E8E2D7]">
                {currentST.blendRatio}
              </span>
              <span className="text-xs text-[#7A7269]">
                {currentST.roastLevel}
              </span>
            </div>

            <h3 className="text-3xl font-serif text-[#181512] mb-1">{currentST.nameRu}</h3>
            <p className="text-xs text-[#8C827A] italic mb-4">{currentST.nameVi}</p>
            <p className="text-sm text-[#5C5248] leading-relaxed mb-6">{currentST.desc}</p>

            <div className="mb-6">
              <span className="text-xs font-semibold text-[#181512] block mb-2">Дескрипторы вкуса:</span>
              <div className="flex flex-wrap gap-2">
                {currentST.notes.map((note) => (
                  <span
                    key={note}
                    className="px-3 py-1 rounded-xl bg-[#FAF8F5] border border-[#E8E2D7] text-xs text-[#4A4238] font-medium"
                  >
                    ✦ {note}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-[#F0EBE1]">
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-[#7A7269] font-medium">Крепость:</span>
                <div className="zen-beans-meter">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={i < currentST.intensity ? "filled" : ""}
                    />
                  ))}
                </div>
              </div>
              <div className="ml-auto flex gap-2">
                <a
                  href={currentST.ozonUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="zen-btn-market-sm ozon px-5 py-2.5"
                >
                  OZON ↗
                </a>
                <a
                  href={currentST.wbUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="zen-btn-market-sm wb px-5 py-2.5"
                >
                  WB ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: HORECA & COFFEE SHOP PACKS (EXACT IMAGE 3 CARDS) ================= */}
      <section className="py-24 px-6 md:px-16 bg-[#FAF7F2] border-y border-[#E8E2D7]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-[#181512]">
                Зёрна 1 кг для кофеен и ресторанов
              </h2>
            </div>
            <a
              href="#sample-kit-form"
              className="px-6 py-3.5 rounded-md bg-[#B38E46] hover:bg-[#967434] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
            >
              🎁 Запросить Sample Kit бесплатно ↗
            </a>
          </div>

          <div className="zen-product-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            {horecaProducts.map((p) => (
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
        </div>
      </section>

      {/* ================= SECTION 4: VISUAL BREWING COMPASS ================= */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#B38E46] font-bold">
            ГИД ПО ЭКСТРАКЦИИ
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mt-2 mb-3">
            Навигатор помола и способов заваривания
          </h2>
          <p className="text-sm text-[#7A7269]">
            Точные пропорции и параметры для раскрытия полного потенциала вьетнамского зерна
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brewingCompass.map((item) => (
            <div
              key={item.method}
              className="bg-white p-8 rounded-3xl border border-[#E8E2D7] hover:border-[#B38E46] transition-all shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-serif text-[#181512] mb-4 font-semibold">{item.method}</h3>

                <div className="space-y-2.5 text-xs">
                  <div>
                    <span className="text-[#8C827A] block">Помол:</span>
                    <strong className="text-[#181512]">{item.grind}</strong>
                  </div>
                  <div>
                    <span className="text-[#8C827A] block">Температура:</span>
                    <strong className="text-[#181512]">{item.temp}</strong>
                  </div>
                  <div>
                    <span className="text-[#8C827A] block">Пропорция:</span>
                    <strong className="text-[#181512]">{item.ratio}</strong>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EBE1] text-xs text-[#B38E46] font-semibold">
                Время: {item.time}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 5: EXACT IMAGE 4 B2B FORM ================= */}
      <B2BFormSection
        id="sample-kit-form"
        title="Заказ бесплатных образцов кофе (Sample Kit) для HoReCa"
        desc="Доставим дегустационный набор свежеобжаренного зерна в ваше заведение. Поможем с настройкой оборудования и обучением персонала."
        buttonText="ЗАКАЗАТЬ БЕСПЛАТНЫЙ НАБОР ОБРАЗЦОВ ↗"
        bgImage="/images/cupping_lab_beans.jpg"
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
                <span className="zen-eyebrow mb-0">HORECA SPECIALTY</span>
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
