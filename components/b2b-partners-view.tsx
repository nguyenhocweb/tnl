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
      <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-end pb-16 px-6 md:px-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.98] transition-transform duration-1000 scale-105 hover:scale-100"
          style={{ backgroundImage: `url('/images/b2b_logistics.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="relative z-10 max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-[#B38E46] text-white text-[10px] font-bold tracking-widest uppercase shadow">
              100% ПРЯМЫЕ ПОСТАВКИ
            </span>
            <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase border border-white/30">
              СЕРТИФИКАТЫ ЕАС И ГОСТ-Р
            </span>
            <span className="px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase border border-white/30">
              СКЛАДСКИЕ ХАБЫ В МОСКВЕ
            </span>
          </div>

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
            <a
              href="#legal-compliance"
              className="px-7 py-3.5 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 text-xs uppercase tracking-wider font-semibold transition-all"
            >
              Сертификаты и регламенты
            </a>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: 4 BUSINESS SEGMENTS ================= */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#B38E46] font-bold">
            НАПРАВЛЕНИЯ СОТРУДНИЧЕСТВА
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mt-2 mb-3">
            С кем мы строим долгосрочный бизнес
          </h2>
          <p className="text-sm text-[#7A7269]">
            Индивидуальные коммерческие условия, ориентированные на специфику каждого канала сбыта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessSegments.map((seg) => (
            <div
              key={seg.title}
              className="bg-white p-8 rounded-3xl border border-[#E8E2D7] hover:border-[#B38E46] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl mb-4 block">{seg.icon}</span>
                <span className="text-[10px] uppercase font-bold text-[#B38E46] block mb-1">
                  {seg.badge}
                </span>
                <h3 className="text-xl font-serif text-[#181512] mb-3 font-semibold">{seg.title}</h3>
                <p className="text-xs text-[#5C5248] leading-relaxed mb-6">{seg.desc}</p>
              </div>
              <a
                href="#b2b-form"
                className="text-xs font-semibold text-[#181512] hover:text-[#B38E46] flex items-center gap-1 transition-colors pt-4 border-t border-[#F0EBE1]"
              >
                Оставить заявку <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 3: 3 PARTNER ADVANTAGES ================= */}
      <section className="py-24 px-6 md:px-16 bg-[#FAF7F2] border-y border-[#E8E2D7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#B38E46] font-bold">
              КОММЕРЧЕСКИЕ ПРЕИМУЩЕСТВА
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mt-2 mb-3">
              Почему работать с нами надёжно и выгодно
            </h2>
            <p className="text-sm text-[#7A7269]">
              Прозрачные принципы партнёрства, отсутствие посредников и высокая рентабельность
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#E8E2D7] shadow-sm">
              <span className="text-2xl font-serif font-bold text-[#B38E46] block mb-3">01</span>
              <h3 className="text-xl font-serif text-[#181512] mb-2 font-semibold">
                Прогрессивные скидки и отсрочка
              </h3>
              <p className="text-xs text-[#5C5248] leading-relaxed mb-4">
                Гибкая дифференциация цен в зависимости от регулярности и объема заказов. Возможность предоставления кредитной линии и факторинга для постоянных партнёров.
              </p>
              <span className="text-[11px] font-semibold text-[#7A7269] block">
                ✦ Маржинальность категории до 35%
              </span>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#E8E2D7] shadow-sm">
              <span className="text-2xl font-serif font-bold text-[#B38E46] block mb-3">02</span>
              <h3 className="text-xl font-serif text-[#181512] mb-2 font-semibold">
                Маркетинг и брендовые POSM
              </h3>
              <p className="text-xs text-[#5C5248] leading-relaxed mb-4">
                Предоставляем фирменные стойки из массива дерева, стильные шелфтокеры, стопперы, буклеты и образцы для проведения дегустаций на полках ваших магазинов.
              </p>
              <span className="text-[11px] font-semibold text-[#7A7269] block">
                ✦ Бесплатные рекламные наборы
              </span>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#E8E2D7] shadow-sm">
              <span className="text-2xl font-serif font-bold text-[#B38E46] block mb-3">03</span>
              <h3 className="text-xl font-serif text-[#181512] mb-2 font-semibold">
                Отгрузка за 24–72 часа по всей РФ
              </h3>
              <p className="text-xs text-[#5C5248] leading-relaxed mb-4">
                Постоянный неснижаемый запас продукции на лицензированном логистическом хабе класса А в Москве и складе во Владивостоке. Отправка любыми транспортными компаниями.
              </p>
              <span className="text-[11px] font-semibold text-[#7A7269] block">
                ✦ 100% соблюдение температурного режима
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: LEGAL & COMPLIANCE VERIFICATION ================= */}
      <section id="legal-compliance" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#B38E46] font-bold">
            100% БЕЛАЯ ТАМОЖНЯ И СЕРТИФИКАЦИЯ
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mt-2 mb-3">
            Юридическая чистота для бухгалтерии и аудита
          </h2>
          <p className="text-sm text-[#7A7269]">
            Полный пакет сопроводительных документов, сертификатов и работа с НДС 20%
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
      </section>

      {/* ================= SECTION 5: EXACT IMAGE 4 B2B FORM ================= */}
      <B2BFormSection />
    </div>
  );
}
