"use client";

import React, { useState } from "react";

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
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [sampleSubmitted, setSampleSubmitted] = useState(false);

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
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#B38E46] text-white text-[11px] font-bold tracking-widest uppercase shadow-xl">
            SPECIALTY COFFEE LAB · HORECA
          </span>
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
            <button
              onClick={() => setSampleModalOpen(true)}
              className="px-7 py-3.5 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 text-xs uppercase tracking-wider font-semibold transition-all"
            >
              Бесплатный Sample Kit для кофеен ↗
            </button>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: SÁNG TẠO 1 TO 5 INTERACTIVE CAROUSEL ================= */}
      <section id="sang-tao-carousel" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#B38E46] font-bold">
            ЛЕГЕНДАРНАЯ СЕРИЯ SÁNG TẠO
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mt-2 mb-3">
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
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`inline-block w-2.5 h-2.5 rounded-full ${
                      i < currentST.intensity ? "bg-[#B38E46]" : "bg-[#DDD7CC]"
                    }`}
                  />
                ))}
              </div>
              <a
                href="https://ozon.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto px-6 py-2.5 rounded-xl bg-[#005BFF] hover:bg-[#0047C6] text-white text-xs font-semibold transition-colors"
              >
                Купить на OZON ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: HORECA & COFFEE SHOP PACKS (1KG) ================= */}
      <section className="py-24 px-6 md:px-16 bg-[#FAF7F2] border-y border-[#E8E2D7]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B38E46] font-bold">
                ПРОФЕССИОНАЛЬНАЯ ЛИНИЯ ДЛЯ БАРИСТА
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mt-2">
                Зёрна 1 кг для кофеен и ресторанов
              </h2>
            </div>
            <button
              onClick={() => setSampleModalOpen(true)}
              className="px-6 py-3.5 rounded-2xl bg-[#B38E46] hover:bg-[#967434] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
            >
              🎁 Запросить Sample Kit бесплатно ↗
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#E8E2D7] shadow-sm flex flex-col md:flex-row gap-6 items-center">
              <div className="w-36 h-48 bg-[#F7F4EE] rounded-2xl p-4 flex items-center justify-center shrink-0">
                <img src="/images/cupping_lab_beans.jpg" alt="Gourmet Blend" className="max-h-full object-cover rounded-xl" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#B38E46] block mb-1">ФАСОВКА 1 КГ С КЛАПАНОМ</span>
                <h3 className="text-2xl font-serif text-[#181512] mb-1">Gourmet Blend (1 кг)</h3>
                <p className="text-xs text-[#7A7269] leading-relaxed mb-4">
                  Специальный бленд для профессиональных рожковых кофемашин. Даёт устойчивую эластичную пенку Crema цвета лесного ореха. Идеальная основа для раф-кофе, капучино и латте.
                </p>
                <span className="inline-block px-3 py-1 rounded-md bg-[#FAF7F2] text-xs text-[#5C5248] font-semibold">
                  Плотная крема · Шоколадный профиль
                </span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#E8E2D7] shadow-sm flex flex-col md:flex-row gap-6 items-center">
              <div className="w-36 h-48 bg-[#F7F4EE] rounded-2xl p-4 flex items-center justify-center shrink-0">
                <img src="/images/cupping_lab_beans.jpg" alt="Premium Culi" className="max-h-full object-cover rounded-xl" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-[#B38E46] block mb-1">100% SINGLE PEABERRY</span>
                <h3 className="text-2xl font-serif text-[#181512] mb-1">Premium Culi Beans (1 кг)</h3>
                <p className="text-xs text-[#7A7269] leading-relaxed mb-4">
                  Одиночные шаровидные зёрна Кули, впитавшие двойную дозу минералов и кофеина. Непревзойденный энергетик для авторских кофейных карт и ценителей предельной крепости.
                </p>
                <span className="inline-block px-3 py-1 rounded-md bg-[#FAF7F2] text-xs text-[#5C5248] font-semibold">
                  Двойной кофеин · Максимальный импульс
                </span>
              </div>
            </div>
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

      {/* ================= SECTION 5: HORECA SUPPLY PARTNERSHIP ================= */}
      <section className="py-20 px-6 md:px-16 bg-[#181512] text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4B26F] font-bold block mb-2">
              ГАРАНТИЯ БЕСПЕРЕБОЙНОСТИ
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-3">
              Поставки для вашего заведения за 48 часов
            </h2>
            <p className="text-sm text-[#BFB7AA] max-w-lg leading-relaxed">
              Собственный складской запас свежеобжаренного кофе в Москве и Санкт-Петербурге. Бесплатная настройка кофемолок и обучение персонала.
            </p>
          </div>
          <button
            onClick={() => setSampleModalOpen(true)}
            className="px-8 py-4 rounded-2xl bg-[#B38E46] hover:bg-[#C9A257] text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-xl"
          >
            Получить дегустационный сет ↗
          </button>
        </div>
      </section>

      {/* ================= SAMPLE KIT MODAL ================= */}
      {sampleModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 border border-[#E8E2D7] shadow-2xl relative">
            <button
              onClick={() => {
                setSampleModalOpen(false);
                setSampleSubmitted(false);
              }}
              className="absolute top-6 right-6 text-xl text-[#7A7269] hover:text-[#181512]"
            >
              ✕
            </button>

            {!sampleSubmitted ? (
              <>
                <span className="text-xs uppercase tracking-widest text-[#B38E46] font-bold block mb-1">
                  ДЛЯ КОФЕЕН И РЕСТОРАНОВ
                </span>
                <h3 className="text-2xl font-serif text-[#181512] mb-2">
                  Запрос бесплатного набора образцов
                </h3>
                <p className="text-xs text-[#7A7269] mb-6">
                  Мы бесплатно доставим дегустационный набор (3 образца по 250 г) прямо в ваше заведение для каппинга.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSampleSubmitted(true);
                  }}
                  className="flex flex-col gap-4"
                >
                  <input
                    required
                    placeholder="Название кофейни / ресторана *"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9D2C7] outline-none text-sm focus:border-[#B38E46]"
                  />
                  <input
                    required
                    placeholder="Город и точный адрес заведения *"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9D2C7] outline-none text-sm focus:border-[#B38E46]"
                  />
                  <input
                    required
                    placeholder="Имя шеф-бариста или управляющего *"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9D2C7] outline-none text-sm focus:border-[#B38E46]"
                  />
                  <input
                    required
                    placeholder="Телефон для курьера *"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9D2C7] outline-none text-sm focus:border-[#B38E46]"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#B38E46] hover:bg-[#967434] text-white text-xs uppercase tracking-wider font-semibold transition-colors mt-2"
                  >
                    Заказать бесплатный Sample Kit ↗
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <span className="text-4xl mb-3 block">✓</span>
                <h4 className="text-xl font-serif text-[#181512] mb-2">Набор отправлен в сборку</h4>
                <p className="text-xs text-[#7A7269] mb-6">
                  Наш кофе-тренер свяжется с вами для согласования удобного времени доставки образцов.
                </p>
                <button
                  onClick={() => {
                    setSampleModalOpen(false);
                    setSampleSubmitted(false);
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
