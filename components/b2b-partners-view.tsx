"use client";

import React, { useState } from "react";
import B2BFormSection from "./b2b-form-section";

const businessSegments = [
  {
    title: "Региональным Дистрибьюторам",
    badge: "ЭКСКЛЮЗИВ НА РЕГИОН",
    desc: "Прямые контракты с официальным импортёром, защита территории продаж, маркетинговые бюджеты и регулярные поставки контейнерными нормами.",
    icon: "🗺️",
  },
  {
    title: "Федеральным и Локальным Сетям",
    badge: "РИТЕЙЛ СТАНДАРТ",
    desc: "Полная интеграция с ЭДО, маркировка «Честный Знак», штрихкоды EAN-13, стабильный уровень сервиса (Service Level 98%+) и промо-поддержка.",
    icon: "🛒",
  },
  {
    title: "Сегменту HoReCa и Кофейням",
    badge: "СВЕЖИЙ ОБЖАР 1 КГ",
    desc: "Поставки свежего зерна от 1 коробки, бесплатная настройка помола оборудования, рецептурные карты традиционного вьетнамского кофе и раф-напитков.",
    icon: "☕",
  },
  {
    title: "Корпоративным Заказчикам",
    badge: "ПОДАРКИ И ОФИСЫ",
    desc: "Комплексное снабжение офисов кофемашинами и кофе G7/Legend, формирование праздничных подарочных наборов с тиснением логотипа заказчика.",
    icon: "🎁",
  },
];

const certificates = [
  {
    name: "Декларация ЕАС (Eurasian Conformity)",
    desc: "Подтверждение соответствия регламентам ТР ТС 021/2011 «О безопасности пищевой продукции» и ТР ТС 022/2011.",
    code: "ЕАЭС N RU Д-VN.PA01.B.82914",
  },
  {
    name: "Сертификация ГОСТ-Р",
    desc: "Соответствие национальным стандартам качества Российской Федерации по органолептическим и физико-химическим показателям.",
    code: "ГОСТ 32775-2014",
  },
  {
    name: "Сертификат происхождения С/О Form EAEU",
    desc: "Преференциальный сертификат в рамках соглашения о свободной торговле между Вьетнамом и ЕАЭС.",
    code: "ORIGIN VIETNAM VN-EAEU",
  },
];

export default function B2BPartnersView() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [innValue, setInnValue] = useState("");

  return (
    <div className="b2b-partners-page">
      {/* ================= SECTION 1: HERO LOGISTICS CANVAS (100VH) ================= */}
      <section className="relative w-full h-screen min-h-[100dvh] flex flex-col justify-end pb-16 px-6 md:px-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.98]"
          style={{ backgroundImage: `url('/images/b2b_logistics.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white tracking-wide font-normal drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] leading-tight mb-3">
            Прямые Поставки Trung Nguyên Legend в Россию
          </h1>
          <p className="text-base md:text-xl text-[#F2EBD9] font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] mb-8">
            Надёжность, стабильность и всесторонняя поддержка бизнеса.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#b2b-form"
              className="px-7 py-3.5 rounded-2xl bg-[#B38E46] hover:bg-[#967434] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-xl"
            >
              Стать партнёром ↘
            </a>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: BUSINESS SEGMENTS ================= */}
      <section className="pt-12 sm:pt-16 pb-10 sm:pb-12 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mb-3">
            С кем мы строим долгосрочный бизнес
          </h2>
          <p className="text-sm text-[#7A7269]">
            Индивидуальные коммерческие условия, ориентированные на специфику каждого канала сбыта
          </p>
        </div>

        {/* Editorial Asymmetric Layout Matching Sample 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Main Large Feature Card (Regional Distributors) */}
          <div className="lg:col-span-6 group relative rounded-2xl overflow-hidden border border-[#E5DFD5]/40 flex flex-col justify-end p-6 sm:p-8 min-h-[480px] lg:min-h-[520px] shadow-sm">
            {/* Background warehouse image with dark cinematic gradient */}
            <img
              src="/images/b2b_logistics.jpg"
              alt="Складской логистический хаб в Москве"
              className="absolute inset-0 w-full h-full object-cover brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/35" />

            {/* Bottom Content */}
            <div className="relative z-10 mt-auto">
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-normal leading-snug mb-3">
                Региональным дистрибьюторам
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed mb-5">
                Контейнерные поставки напрямую с фабрик Trung Nguyên Legend. Регулярный сток на распределительном складе класса «A» в Москве с гарантированным резервом.
              </p>

              {/* 3-Column Specifications Grid */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/20 text-left">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-bold block mb-0.5">
                    ПОСТАВКИ
                  </span>
                  <span className="text-xs sm:text-sm text-white font-medium">
                    Контейнерный объем
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-bold block mb-0.5">
                    ЛОГИСТИКА
                  </span>
                  <span className="text-xs sm:text-sm text-white font-medium">
                    Хаб в Москве
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-bold block mb-0.5">
                    СТАТУС
                  </span>
                  <span className="text-xs sm:text-sm text-white font-medium">
                    Защита территории
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (3 Staggered Horizontal Media Strips) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4 sm:gap-5">
            {/* Strip 1: Retail & Federal Chains */}
            <div className="group bg-white rounded-2xl border border-[#E5DFD5] overflow-hidden flex flex-col sm:flex-row items-stretch shadow-sm hover:border-[#9B783E]/50 transition-colors">
              <div className="w-full sm:w-44 md:w-48 h-36 sm:h-auto flex-shrink-0 overflow-hidden bg-[#FAF8F5]">
                <img
                  src="/images/prod_g7.jpg"
                  alt="Федеральный ритейл & сети"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-6 flex flex-col justify-center flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base sm:text-lg font-serif text-[#181512] font-semibold leading-snug">
                    Федеральный ритейл &amp; сети
                  </h4>
                  <span className="text-[#8C8277] font-semibold text-xs">SL 98.4%</span>
                </div>
                <p className="text-xs text-[#5C5248] font-light leading-relaxed">
                  Полная интеграция с EDI-провайдерами, маркировка «Честный Знак», штрихкоды EAN-13 и промо-поддержка.
                </p>
              </div>
            </div>

            {/* Strip 2: HoReCa & Coffee Shops */}
            <div className="group bg-white rounded-2xl border border-[#E5DFD5] overflow-hidden flex flex-col sm:flex-row items-stretch shadow-sm hover:border-[#9B783E]/50 transition-colors">
              <div className="w-full sm:w-44 md:w-48 h-36 sm:h-auto flex-shrink-0 overflow-hidden bg-[#FAF8F5]">
                <img
                  src="/images/ritual_phin_brewing.jpg"
                  alt="Кофейни & рестораны"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-6 flex flex-col justify-center flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base sm:text-lg font-serif text-[#181512] font-semibold leading-snug">
                    Кофейни &amp; рестораны
                  </h4>
                  <span className="text-[#8C8277] font-semibold text-xs">B2B Прайс</span>
                </div>
                <p className="text-xs text-[#5C5248] font-light leading-relaxed">
                  Профессиональные зерновые бленды фасовкой 1 кг, калибровка помола и рецептурные карты.
                </p>
              </div>
            </div>

            {/* Strip 3: Corporate Gifts */}
            <div className="group bg-white rounded-2xl border border-[#E5DFD5] overflow-hidden flex flex-col sm:flex-row items-stretch shadow-sm hover:border-[#9B783E]/50 transition-colors">
              <div className="w-full sm:w-44 md:w-48 h-36 sm:h-auto flex-shrink-0 overflow-hidden bg-[#FAF8F5]">
                <img
                  src="/images/legend_luxury_still_life.jpg"
                  alt="Корпоративные подарки"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 sm:p-6 flex flex-col justify-center flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base sm:text-lg font-serif text-[#181512] font-semibold leading-snug">
                    Корпоративные подарки
                  </h4>
                  <span className="text-[#8C8277] font-semibold text-xs">Подарочные сеты</span>
                </div>
                <p className="text-xs text-[#5C5248] font-light leading-relaxed">
                  Эксклюзивные подарочные коллекции Tuyệt Phẩm с персонализацией и тиснением логотипа.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: 3 PARTNER ADVANTAGES ================= */}
      <section className="pt-10 sm:pt-14 pb-10 sm:pb-14 px-6 md:px-16 bg-[#FAF7F2] border-y border-[#E8E2D7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mb-3">
              Почему работать с нами надёжно и выгодно
            </h2>
            <p className="text-sm text-[#7A7269]">
              Прозрачные принципы партнёрства, отсутствие посредников и высокая рентабельность
            </p>
          </div>

          {/* 3 Horizontal Editorial Rows Matching Sample 1 */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* ROW 1: Финансовый режим / Прогрессивные скидки */}
            <div className="bg-[#F5EFE6] rounded-2xl border border-[#E2DACD] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center hover:border-[#9B783E]/50 transition-colors">
              {/* Left Column: Heading & Description (4 cols) */}
              <div className="md:col-span-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#181512] font-normal leading-snug mb-3">
                    Прогрессивные скидки и отсрочка
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5248] font-light leading-relaxed">
                    Гибкие кредитные лимиты для сетевого ритейла, HoReCa и оптовых дистрибьюторов с защитой от валютных колебаний.
                  </p>
                </div>
              </div>

              {/* Center Column: Photo (5 cols) */}
              <div className="md:col-span-5 relative h-52 sm:h-56 md:h-60 rounded-xl overflow-hidden border border-[#E8E2D7] bg-[#FAF8F5]">
                <img
                  src="/images/legend_luxury_still_life.jpg"
                  alt="Премиальный сегмент"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Column: Stats & Action Link (3 cols) */}
              <div className="md:col-span-3 flex flex-col justify-between h-full">
                <div>

                  <div className="text-3xl sm:text-4xl font-serif text-[#181512] font-normal mb-2">
                    до 35%
                  </div>
                  <p className="text-xs text-[#5C5248] font-light leading-relaxed mb-4">
                    Факторинг и индивидуальные кредитные линии · Дифференцированная шкала оптовых цен от объёма поставки
                  </p>
                </div>
                <a
                  href="#b2b-form"
                  className="text-xs font-semibold text-[#181512] hover:text-[#9B783E] uppercase tracking-wider transition-colors flex items-center gap-1.5"
                >
                  <span>УСЛОВИЯ ОТСРОЧКИ</span>
                  <span className="text-sm">→</span>
                </a>
              </div>
            </div>

            {/* ROW 2: Трейд-маркетинг / POSM */}
            <div className="bg-[#F5EFE6] rounded-2xl border border-[#E2DACD] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center hover:border-[#9B783E]/50 transition-colors">
              {/* Left Column: Heading & Description (4 cols) */}
              <div className="md:col-span-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#181512] font-normal leading-snug mb-3">
                    Маркетинг и брендовые POSM
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5248] font-light leading-relaxed">
                    Полное маркетинговое сопровождение полочного пространства и локальные промо-программы для стимулирования уходимости товара.
                  </p>
                </div>
              </div>

              {/* Center Column: Photo (5 cols) */}
              <div className="md:col-span-5 relative h-52 sm:h-56 md:h-60 rounded-xl overflow-hidden border border-[#E8E2D7] bg-[#FAF8F5]">
                <img
                  src="/images/prod_g7.jpg"
                  alt="Выкладка в сетях Москвы"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Column: Stats & Action Link (3 cols) */}
              <div className="md:col-span-3 flex flex-col justify-between h-full">
                <div>

                  <div className="text-3xl sm:text-4xl font-serif text-[#181512] font-normal mb-2">
                    100% Free
                  </div>
                  <p className="text-xs text-[#5C5248] font-light leading-relaxed mb-4">
                    Фирменные стойки из массива дерева · Шелфтокеры, акриловые стопперы и наборы для профессиональных дегустаций
                  </p>
                </div>
                <a
                  href="#b2b-form"
                  className="text-xs font-semibold text-[#181512] hover:text-[#9B783E] uppercase tracking-wider transition-colors flex items-center gap-1.5"
                >
                  <span>КАТАЛОГ POSM</span>
                  <span className="text-sm">→</span>
                </a>
              </div>
            </div>

            {/* ROW 3: Складская сеть / Отгрузка за 24-72 ч */}
            <div className="bg-[#F5EFE6] rounded-2xl border border-[#E2DACD] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center hover:border-[#9B783E]/50 transition-colors">
              {/* Left Column: Heading & Description (4 cols) */}
              <div className="md:col-span-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#181512] font-normal leading-snug mb-3">
                    Отгрузка за 24–72 часа по всей РФ
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C5248] font-light leading-relaxed">
                    Бесперебойное наличие товарного запаса на федеральных логистических терминалах и электронный документооборот (ЭДО).
                  </p>
                </div>
              </div>

              {/* Center Column: Photo (5 cols) */}
              <div className="md:col-span-5 relative h-52 sm:h-56 md:h-60 rounded-xl overflow-hidden border border-[#E8E2D7] bg-[#FAF8F5]">
                <img
                  src="/images/b2b_logistics.jpg"
                  alt="Хаб Москва & Владивосток"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Column: Stats & Action Link (3 cols) */}
              <div className="md:col-span-3 flex flex-col justify-between h-full">
                <div>

                  <div className="text-3xl sm:text-4xl font-serif text-[#181512] font-normal mb-2">
                    24–72 ч.
                  </div>
                  <p className="text-xs text-[#5C5248] font-light leading-relaxed mb-4">
                    Хабы класса «А» в Москве и Владивостоке · Контроль влажности и терморежима хранения зерна и блендов
                  </p>
                </div>
                <a
                  href="#b2b-form"
                  className="text-xs font-semibold text-[#181512] hover:text-[#9B783E] uppercase tracking-wider transition-colors flex items-center gap-1.5"
                >
                  <span>КАРТА ЛОГИСТИКИ</span>
                  <span className="text-sm">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: LEGAL & COMPLIANCE VERIFICATION ================= */}
      <section id="legal-compliance" className="w-full border-b border-[#E8E2D7]">
        <div className="pt-10 sm:pt-14 pb-10 sm:pb-12 px-6 md:px-16 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mb-3">
              Юридическая чистота для бухгалтерии и аудита
            </h2>
            <p className="text-sm text-[#7A7269]">
              Полный пакет сопроводительных документов, сертификатов и работа с НДС 20%
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 sm:mb-10">
            {certificates.map((cert) => (
              <div key={cert.name} className="bg-white p-8 rounded-3xl border border-[#E8E2D7] shadow-sm flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded bg-[#FAF7F2] text-[10px] font-mono text-[#B38E46] font-bold mb-3">
                    {cert.code}
                  </span>
                  <h3 className="text-lg font-serif text-[#181512] mb-2 font-semibold">{cert.name}</h3>
                  <p className="text-xs text-[#5C5248] leading-relaxed mb-4">{cert.desc}</p>
                </div>
                <div className="text-xs text-[#2E7D32] font-semibold flex items-center gap-1 pt-3 border-t border-[#F0EBE1]">
                  <span>✓</span> Действителен на всей территории ЕАЭС
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => alert("PDF презентация будет скачана после загрузки финального файла.")}
              className="px-8 py-3.5 rounded-2xl bg-[#181512] hover:bg-[#B38E46] text-white text-xs uppercase tracking-wider font-semibold transition-colors shadow-lg"
            >
              Скачать презентацию для партнеров (PDF 5 MB) ⤓
            </button>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: EXACT IMAGE 4 B2B FORM ================= */}
      <B2BFormSection className="!pt-10 sm:!pt-12 !pb-14 sm:!pb-16" />
    </div>
  );
}
