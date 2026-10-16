"use client";

import React, { useState } from "react";

const masterpieces = [
  {
    id: "legend-special",
    nameRu: "Legend Special Edition",
    nameVi: "TRUNG NGUYÊN LEGEND TUYỆT PHẨM",
    spec: "Банка 225 г в бархатном футляре",
    badge: "ДИПЛОМАТИЧЕСКИЙ СТАНДАРТ",
    image: "/images/legend_luxury_still_life.jpg",
    desc: "Шедевр биологической ферментации, воссоздающий легендарный профиль кофе Chồn (Weasel). Подавался первым лицам на саммитах APEC и АСЕАН.",
    intensity: 5,
    notes: ["Дикий мед", "Ферментированное какао", "Древесный мускус"],
    ozon: "https://ozon.ru",
  },
  {
    id: "vietnamese-drip",
    nameRu: "Vietnamese Drip Coffee",
    nameVi: "CÀ PHÊ PHIN GIẤY TIỆN LỢI",
    spec: "10 дрип-пакетов × 10 г",
    badge: "РИТУАЛ БЕЗ ОБОРУДОВАНИЯ",
    image: "/images/ritual_phin_brewing.jpg",
    desc: "Натуральный молотый кофе в одноразовых бумажных капельницах. Персональный ритуал созерцания и чистейшего вкуса прямо в офисе.",
    intensity: 4,
    notes: ["Ягодный настой", "Карамельная сладость", "Цветочный шлейф"],
    ozon: "https://ozon.ru",
  },
  {
    id: "legend-capsule",
    nameRu: "Legend Bio Capsule",
    nameVi: "VIÊN NÉN SINH HỌC THÂN THIỆN",
    spec: "10 капсул (Nespresso Original compatible)",
    badge: "100% БИО-РАЗЛАГАЕМЫЙ",
    image: "/images/prod_legend.jpg",
    desc: "Капсулы из растительного сырья, полностью разлагаемые в природе. Густая стойкая пенка Crema и благородная сбалансированная горчинка.",
    intensity: 4,
    notes: ["Сливочный фундук", "Плотная пенка", "Пряная гвоздика"],
    ozon: "https://ozon.ru",
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
  const [corporateModalOpen, setCorporateModalOpen] = useState(false);
  const [corporateSubmitted, setCorporateSubmitted] = useState(false);

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
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#C5A059] text-white text-[11px] font-bold tracking-widest uppercase shadow-xl">
            TRUNG NGUYÊN LEGEND MASTERPIECE
          </span>
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
            <button
              onClick={() => setCorporateModalOpen(true)}
              className="px-7 py-3.5 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 text-xs uppercase tracking-wider font-semibold transition-all"
            >
              Корпоративные подарки РФ
            </button>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: TRIPTYCH LUXURY GALLERY ================= */}
      <section id="masterpieces" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
            ШЕДЕВРЫ ВКУСА
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mt-2 mb-3">
            Трилогия совершенства Legend
          </h2>
          <p className="text-sm text-[#7A7269]">
            Вершина искусства купажирования для особых случаев, деловых подарков и личных ритуалов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {masterpieces.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E8E2D7] hover:border-[#C5A059] hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="relative h-72 bg-[#F7F4EE] p-6 flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.nameRu}
                  className="max-h-full max-w-full object-contain transform group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#181512] text-[#C5A059] text-[10px] font-bold uppercase tracking-wider border border-[#C5A059]/40">
                  {item.badge}
                </span>
                <div className="absolute bottom-4 right-4 bg-white/95 px-3 py-1 rounded-full text-[10px] font-semibold text-[#181512] border border-[#E8E2D7] flex items-center gap-1">
                  <span>Крепость:</span>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`inline-block w-1.5 h-1.5 rounded-full ${
                        i < item.intensity ? "bg-[#C5A059]" : "bg-[#DDD7CC]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#C5A059] font-semibold">
                    {item.spec}
                  </span>
                  <h3 className="text-2xl font-serif text-[#181512] mt-1 group-hover:text-[#C5A059] transition-colors">
                    {item.nameRu}
                  </h3>
                  <p className="text-xs text-[#8C827A] italic mt-0.5 mb-3">{item.nameVi}</p>
                  <p className="text-xs text-[#5C5248] leading-relaxed mb-4">{item.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.notes.map((note) => (
                      <span
                        key={note}
                        className="px-2.5 py-1 rounded-md bg-[#FAF8F5] text-[11px] text-[#7A7269] border border-[#EDE6DC]"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0EBE1]">
                  <a
                    href={item.ozon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-[#005BFF] hover:bg-[#0047C6] text-white text-xs font-semibold text-center transition-colors shadow flex items-center justify-center gap-1"
                  >
                    Заказать на OZON Premium ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 3: CORPORATE & DIPLOMATIC GIFTS ================= */}
      <section className="py-24 px-6 md:px-16 bg-[#FAF7F2] border-y border-[#E8E2D7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold">
              ВЫСШИЙ ПРОТОКОЛ РФ
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mt-2 mb-3">
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
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#C5A059] text-white text-[10px] font-bold uppercase tracking-wider">
                    {gift.badge}
                  </span>
                </div>
                <div className="w-full sm:w-1/2 p-8">
                  <h3 className="text-xl font-serif text-[#181512] mb-1 font-semibold">{gift.titleRu}</h3>
                  <p className="text-xs text-[#8C827A] italic mb-4">{gift.titleVi}</p>
                  <p className="text-xs text-[#5C5248] leading-relaxed mb-6">{gift.contents}</p>
                  <button
                    onClick={() => setCorporateModalOpen(true)}
                    className="px-5 py-2.5 rounded-xl bg-[#181512] hover:bg-[#C5A059] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Заказать расчёт ↗
                  </button>
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

      {/* ================= SECTION 5: BESPOKE CORPORATE CTA ================= */}
      <section className="py-20 px-6 md:px-16 bg-[#F5F2EB] border-t border-[#E8E2D7]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-2">
            ПРЯМОЙ ДОСТУП В РОССИИ
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#181512] mb-4">
            Приобретите шедевры Legend уже сегодня
          </h2>
          <p className="text-sm text-[#7A7269] max-w-xl mx-auto mb-8">
            Быстрая доставка розничных заказов через маркетплейсы или персональное коммерческое предложение для вашей компании.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://ozon.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-2xl bg-[#005BFF] hover:bg-[#0047C6] text-white text-xs font-semibold uppercase tracking-wider shadow-lg"
            >
              Купить на Ozon Premium ↗
            </a>
            <button
              onClick={() => setCorporateModalOpen(true)}
              className="px-8 py-3.5 rounded-2xl bg-[#C5A059] hover:bg-[#B38E46] text-white text-xs font-semibold uppercase tracking-wider shadow-lg"
            >
              Запросить корпоративный прайс ↗
            </button>
          </div>
        </div>
      </section>

      {/* ================= CORPORATE MODAL ================= */}
      {corporateModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 border border-[#E8E2D7] shadow-2xl relative">
            <button
              onClick={() => {
                setCorporateModalOpen(false);
                setCorporateSubmitted(false);
              }}
              className="absolute top-6 right-6 text-xl text-[#7A7269] hover:text-[#181512]"
            >
              ✕
            </button>

            {!corporateSubmitted ? (
              <>
                <span className="text-xs uppercase tracking-widest text-[#C5A059] font-bold block mb-1">
                  КОРПОРАТИВНЫЕ ПОДАРКИ
                </span>
                <h3 className="text-2xl font-serif text-[#181512] mb-2">
                  Запрос каталога и цен
                </h3>
                <p className="text-xs text-[#7A7269] mb-6">
                  Заполните форму, и мы направим расширенную презентацию подарочных решений с ценами для юрлиц.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setCorporateSubmitted(true);
                  }}
                  className="flex flex-col gap-4"
                >
                  <input
                    required
                    placeholder="Компания / Организация *"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9D2C7] outline-none text-sm focus:border-[#C5A059]"
                  />
                  <input
                    required
                    pattern="[0-9]{10,12}"
                    placeholder="ИНН (10 или 12 цифр) *"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9D2C7] outline-none text-sm focus:border-[#C5A059]"
                  />
                  <input
                    required
                    placeholder="Контактное лицо и должность *"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9D2C7] outline-none text-sm focus:border-[#C5A059]"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Корпоративный e-mail *"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9D2C7] outline-none text-sm focus:border-[#C5A059]"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#C5A059] hover:bg-[#B38E46] text-white text-xs uppercase tracking-wider font-semibold transition-colors mt-2"
                  >
                    Получить корпоративный каталог ↗
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <span className="text-4xl mb-3 block">✓</span>
                <h4 className="text-xl font-serif text-[#181512] mb-2">Запрос отправлен</h4>
                <p className="text-xs text-[#7A7269] mb-6">
                  Каталог с оптовыми ценами отправлен на ваш e-mail. Менеджер свяжется с вами для уточнения деталей.
                </p>
                <button
                  onClick={() => {
                    setCorporateModalOpen(false);
                    setCorporateSubmitted(false);
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
