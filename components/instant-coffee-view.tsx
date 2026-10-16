"use client";

import React, { useState } from "react";

const g7Archetypes = [
  {
    id: "g7-3in1",
    nameRu: "G7 3 в 1 Classic",
    nameVi: "G7 CÀ PHÊ HÒA TAN 3IN1",
    spec: "18 саше × 16 г / Эконом 50 саше",
    badge: "АБСОЛЮТНЫЙ БЕСТСЕЛЛЕР",
    image: "/images/prod_g7.jpg",
    desc: "Идеальный баланс крепкого вьетнамского кофе, нежных сливок и сахара. Сливочная текстура, дарящая заряд энергии.",
    notes: ["Какао", "Сливочный ирис", "Карамель"],
    intensity: "4/5",
    ozon: "https://ozon.ru",
    wb: "https://wildberries.ru",
  },
  {
    id: "g7-black",
    nameRu: "G7 Pure Black (Чёрный)",
    nameVi: "G7 CÀ PHÊ ĐEN ĐẬM VỊ",
    spec: "15 саше × 2 г (Без сахара)",
    badge: "100% ЧИСТАЯ РОБУСТА",
    image: "/images/prod_g7.jpg",
    desc: "Чистый концентрат энергии без сахара и молока. Мощный терпкий вкус для максимальной концентрации и работы.",
    notes: ["Глубокий шоколад", "Дымные нотки", "Ясная бодрость"],
    intensity: "5/5",
    ozon: "https://ozon.ru",
    wb: "https://wildberries.ru",
  },
  {
    id: "g7-cappuccino",
    nameRu: "G7 Cappuccino Series",
    nameVi: "G7 BỘ BA CAPPUCCINO Ý",
    spec: "12 саше × 18 г (3 изысканных вкуса)",
    badge: "ГУСТАЯ ПЫШНАЯ ПЕНКА",
    image: "/images/prod_g7.jpg",
    desc: "Коллекция итальянского капучино с богатой пенкой: Лесной орех (Hazelnut), Ирландский крем (Irish Cream) и Мокка (Mocha).",
    notes: ["Фундук", "Ирландский ликер", "Бельгийский шоколад"],
    intensity: "3/5",
    ozon: "https://ozon.ru",
    wb: "https://wildberries.ru",
  },
  {
    id: "g7-espresso",
    nameRu: "G7 Espresso Crema",
    nameVi: "G7 ESPRESSO ĐẬM ĐÀ",
    spec: "15 саше × 2.5 г",
    badge: "ИТАЛЬЯНСКИЙ СТИЛЬ",
    image: "/images/prod_g7.jpg",
    desc: "Плотное бархатное тело напитка с естественной золотистой пенкой Crema. Быстрый шот бодрости перед важной встречей.",
    notes: ["Жареный миндаль", "Плотная пенка", "Мягкая горчинка"],
    intensity: "5/5",
    ozon: "https://ozon.ru",
    wb: "https://wildberries.ru",
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
  const [selectedSubTab, setSelectedSubTab] = useState<string>("all");

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
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#BC291D] text-white text-[11px] font-bold tracking-widest uppercase shadow-xl border border-red-400/30">
            ★ №1 РАСТВОРИМЫЙ КОФЕ ИЗ ВЬЕТНАМА В РОССИИ ★
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white tracking-wide font-normal drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] leading-tight mb-3">
            G7: Энергия, Согревающая Сердца
          </h1>
          <p className="text-base md:text-xl text-[#FCEEE3] font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] mb-8">
            Настоящая крепость робусты за 30 секунд.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#g7-archetypes"
              className="px-7 py-3.5 rounded-2xl bg-[#BC291D] hover:bg-[#9E2016] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-xl shadow-red-900/40"
            >
              Выбрать свой G7 ↘
            </a>
            <a
              href="#retail-network"
              className="px-7 py-3.5 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 text-xs uppercase tracking-wider font-semibold transition-all"
            >
              15 000+ магазинов в РФ
            </a>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: THE 4 G7 FLAVOR ARCHETYPES ================= */}
      <section id="g7-archetypes" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#BC291D] font-bold">
            ЛЕГЕНДАРНАЯ ЧЕТВЕРКА
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mt-2 mb-3">
            Коллекция вкусов G7
          </h2>
          <p className="text-sm text-[#7A7269]">
            Четыре характера для каждого момента дня — от утреннего пробуждения до делового рывка
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {g7Archetypes.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E8E2D7] hover:border-[#BC291D] hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="relative h-60 bg-[#FAF7F2] p-6 flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.nameRu}
                  className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-[#BC291D] text-white text-[9px] font-bold uppercase tracking-wider">
                  {item.badge}
                </span>
                <span className="absolute bottom-4 right-4 bg-white/95 px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#181512] shadow-sm border border-[#E8E2D7]">
                  Крепость: {item.intensity}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-[#7A7269] font-medium block mb-1">{item.spec}</span>
                  <h3 className="text-xl font-serif text-[#181512] group-hover:text-[#BC291D] transition-colors">
                    {item.nameRu}
                  </h3>
                  <p className="text-xs text-[#8C827A] italic mt-0.5 mb-3">{item.nameVi}</p>
                  <p className="text-xs text-[#5C5248] leading-relaxed mb-4">{item.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.notes.map((note) => (
                      <span
                        key={note}
                        className="px-2 py-0.5 rounded-md bg-[#FAF7F2] text-[10px] text-[#7A7269] border border-[#EDE6DC]"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[#F0EBE1]">
                  <a
                    href={item.ozon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 rounded-xl bg-[#005BFF] hover:bg-[#0047C6] text-white text-xs font-semibold text-center transition-colors shadow-sm"
                  >
                    OZON ↗
                  </a>
                  <a
                    href={item.wb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 rounded-xl bg-[#CB11AB] hover:bg-[#A50C8B] text-white text-xs font-semibold text-center transition-colors shadow-sm"
                  >
                    WB ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 3: RUSSIAN RETAIL NETWORK ================= */}
      <section id="retail-network" className="py-20 px-6 md:px-16 bg-[#FAF7F2] border-y border-[#E8E2D7]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B38E46] font-semibold">
                ШАГОВАЯ ДОСТУПНОСТЬ ПО ВСЕЙ РОССИИ
              </span>
              <h2 className="text-2xl md:text-4xl font-serif text-[#181512] mt-2">
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
          <span className="text-xs uppercase tracking-widest text-[#BC291D] font-bold">
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
              desc: "В отличие от термосушки обычного растворимого кофе, технология сублимации при низких температурах бережёт истинный аромат свежеобжаренного зерна.",
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
              className="bg-white p-8 rounded-3xl border border-[#E8E2D7] hover:border-[#BC291D] shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl">{card.icon}</span>
                <span className="text-3xl font-serif text-[#E8E2D7] font-bold">{card.num}</span>
              </div>
              <h3 className="text-xl font-serif text-[#181512] mb-1 font-semibold">{card.title}</h3>
              <span className="text-xs text-[#BC291D] font-semibold block mb-3">{card.tagline}</span>
              <p className="text-xs text-[#5C5248] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 5: FAST COMMERCE DIRECT CHANNELS ================= */}
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
              className="px-8 py-4 rounded-2xl bg-[#005BFF] hover:bg-[#0047C6] text-white text-sm font-bold shadow-lg transition-transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Заказать на OZON</span> ↗
            </a>
            <a
              href="https://wildberries.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-[#CB11AB] hover:bg-[#A50C8B] text-white text-sm font-bold shadow-lg transition-transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Заказать на Wildberries</span> ↗
            </a>
            <a
              href="https://megamarket.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-[#6A0DAD] hover:bg-[#520A88] text-white text-sm font-bold shadow-lg transition-transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Заказать на Мегамаркет</span> ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
