import React from "react";

// Dữ liệu 3 Nền Văn Minh Cà Phê
const threeCivilizations = [
  {
    roman: "I",
    titleRu: "Османская цивилизация",
    titleVi: "VĂN MINH OTTOMAN",
    badgeRu: "ТАИНСТВО ВОСТОКА",
    image: "/images/civilization_ottoman.jpg",
    microQuote: "Глубокий диалог, медитативная неспешность и вековые традиции Востока.",
    tag: "Традиция Cezve & Sand",
    linkText: "Коллекция Ottoman",
    href: "/katalog/kofe-v-zernah",
  },
  {
    roman: "II",
    titleRu: "Римская цивилизация",
    titleVi: "VĂN MINH ROMAN",
    badgeRu: "ЭНЕРГИЯ ДЕЙСТВИЯ",
    image: "/images/civilization_roman.jpg",
    microQuote: "Точность, динамика, стальной блеск и творческий импульс мегаполиса.",
    tag: "Искусство Espresso",
    linkText: "Коллекция Roman",
    href: "/katalog/molotyj-kofe",
  },
  {
    roman: "III",
    titleRu: "Дзэн цивилизация",
    titleVi: "VĂN MINH THIỀN · ĐỈNH CAO TNL",
    badgeRu: "СОЗЕРЦАНИЕ И ЯСНОСТЬ",
    image: "/images/civilization_zen.jpg",
    microQuote: "Гармония с собой, природой и Вселенной через медитативное падение капель.",
    tag: "Ритуал капельного фин",
    linkText: "Коллекция Дзэн",
    href: "/katalog",
  },
];

// Dữ liệu Lối Sống Tỉnh Thức (4 Khoảnh Khắc Trong Ngày)
const dailyRoutine = [
  {
    time: "06:00",
    nameRu: "Рассвет",
    nameVi: "TĨNH THỨC SỚM MAI",
    image: "/images/hero_sharp_hills.jpg",
    microQuote: "15 минут тишины и чистая энергия пробуждения для ясного ума.",
  },
  {
    time: "09:00",
    nameRu: "Творчество",
    nameVi: "NĂNG LƯỢNG SÁNG TẠO",
    image: "/images/basalt_cherries.jpg",
    microQuote: "Импульс для смелых решений и преодоления невозможного.",
  },
  {
    time: "14:00",
    nameRu: "Перезагрузка",
    nameVi: "TÁI TẠO TÂM TRÍ",
    image: "/images/coffee_museum.jpg",
    microQuote: "Осознанная пауза среди суеты, снимающая ментальное напряжение.",
  },
  {
    time: "19:00",
    nameRu: "Диалог",
    nameVi: "GẮN KẾT TRI THỨC",
    image: "/images/energy_books.jpg",
    microQuote: "Искреннее общение и чтение книг, меняющих мышление.",
  },
];

// Dữ liệu 4 bước Nghi Thức Pha Phin
const phinSteps = [
  {
    step: "01",
    action: "25г отборного кофе",
    guide: "Засыпьте свежемолотый кофе в фин, бережно встряхните и слегка прижмите прессом.",
  },
  {
    step: "02",
    action: "20мл воды 96°C",
    guide: "Экстракция первого слоя: 2 минуты для раскрытия эфирных масел и аромата.",
  },
  {
    step: "03",
    action: "60мл чистой воды",
    guide: "Долейте воду до метки и накройте крышкой в состоянии полного покоя.",
  },
  {
    step: "04",
    action: "Капля за каплей",
    guide: "Наблюдение за медленным падением капель — ритуал терпения и созерцания.",
  },
];

export default function CoffeePhilosophyView() {
  return (
    <div className="coffee-philosophy-page">
      {/* ================= SECTION 1: KHỞI TÂM (MẪU 1 - EDITORIAL ORGANIC STENCIL 100VH) ================= */}
      <section className="zen-philo-m1-hero">
        {/* Photographic Background: Authentic Vietnamese Phin Drip over misty morning plantation */}
        <div className="zen-philo-m1-bg-wrap">
          <img
            src="/images/hero_zen_coffee.jpg"
            alt="Философия кофе Trung Nguyên Legend"
            className="zen-philo-m1-bg-img"
          />
        </div>

        {/* Vector Stencil Mask Layer (Exact Green Summer 3-Window Layout: Sunrise Wedge, Lush Bushes, Center Sacred Phin) */}
        <div className="zen-philo-m1-stencil-layer">
          <svg
            viewBox="0 0 1600 900"
            preserveAspectRatio="none"
            className="zen-philo-m1-svg"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* White Organic Stencil Surface */}
            <path
              d="M 0 0 L 1600 0 L 1600 900 L 0 900 Z M 620 0 L 1600 0 L 1600 100 L 1005 435 Z M 1040 465 L 1600 135 L 1600 900 L 1355 900 Z M 380 900 L 1000 470 L 1315 900 Z"
              fill="#FAF8F5"
              fillRule="evenodd"
            />
            {/* Subtle Hairline Contour along the cuts */}
            <path
              d="M 620 0 L 1005 435 L 1600 100 M 1600 135 L 1040 465 L 1355 900 M 380 900 L 1000 470 L 1315 900"
              fill="none"
              stroke="rgba(179, 142, 70, 0.35)"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Hero Content Container (Placed in Left Organic Panel matching Green Summer Mẫu 1) */}
        <div className="zen-philo-m1-container">
          <div className="zen-philo-m1-content-left">
            {/* Poetic Calligraphic Title matching Green Summer */}
            <h1 className="zen-m1-title-greensummer">
              Философия <br />
              <em>в Капле Кофе</em>
            </h1>

            {/* Micro Poetry / Body matching Green Summer */}
            <div className="zen-m1-quote-box">
              <p className="zen-m1-quote-text">
                Осознанность, рождающаяся в моменте. <br />
                Капля за каплей — пробуждение чистого духа <br />
                и великая гармония созидания в тишине <br />
                священных гор Буонметхуот.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: 3 NỀN VĂN MINH CÀ PHÊ NHÂN LOẠI (TRIPTYCH - 100VH) ================= */}
      <section id="three-civilizations" className="zen-vision-triptych-section">
        <div className="zen-vision-triptych-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#E5DDD0]">
            <div>
                            <h2 className="font-serif text-[28px] md:text-[36px] text-[#181512] leading-tight">
                Три Великие Цивилизации Кофе
              </h2>
            </div>
            <p className="text-xs text-[#7A7269] max-w-[340px] leading-relaxed">
              От древних ритуалов Востока до энергии Дзэн — культурный синтез вкуса и осознанности.
            </p>
          </div>

          <div className="zen-vision-triptych-grid">
            {threeCivilizations.map((civ) => (
              <div key={civ.roman} className="zen-vision-triptych-card group">
                <img
                  src={civ.image}
                  alt={civ.titleRu}
                  className="zen-vision-triptych-img"
                />
                <div className="zen-vision-triptych-overlay" />

                <div className="zen-vision-triptych-content">
                  {/* Top Badge */}
                  <div className="flex justify-end items-center">
                    <span className="font-serif text-[#E5C989] font-bold text-lg">
                      {civ.roman}
                    </span>
                  </div>

                  {/* Bottom Text */}
                  <div>
                                        <h3 className="font-serif text-[20px] md:text-[22px] text-white font-semibold mb-2 leading-snug">
                      {civ.titleRu}
                    </h3>
                    <p className="text-xs text-[#EDE6DC] font-light leading-relaxed mb-3">
                      {civ.microQuote}
                    </p>
                    <div className="pt-2 border-t border-white/20 text-[10px] text-[#E5C989] font-semibold tracking-wider flex items-center justify-between">
                      <span>{civ.tag}</span>
                      <a href={civ.href} className="hover:text-white transition-colors">
                        {civ.linkText} ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: LỐI SỐNG TỈNH THỨC — 4 KHOẢNH KHẮC TRONG NGÀY (100VH) ================= */}
      <section className="zen-vision-pledge-section">
        <div className="zen-vision-pledge-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#E5DDD0]">
            <div>
                            <h2 className="font-serif text-[28px] md:text-[36px] text-[#181512] leading-tight">
                4 Момента Осознанности в Сутках
              </h2>
            </div>
            <p className="text-xs text-[#7A7269] max-w-[340px] leading-relaxed">
              Кофе как компас дня — от утренней медитации до вечернего обогащения знанием.
            </p>
          </div>

          <div className="zen-philo-routine-grid">
            {dailyRoutine.map((item) => (
              <div key={item.time} className="zen-philo-routine-card group">
                <img
                  src={item.image}
                  alt={item.nameRu}
                  className="zen-vision-pledge-img"
                />
                <div className="zen-vision-pillar-overlay" />

                <div className="zen-vision-pillar-content">
                  <div className="flex justify-between items-center">
                    <span className="font-serif text-[#E5C989] font-bold text-lg tracking-wider">
                      {item.time}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-[18px] text-white font-semibold mb-1 leading-snug">
                      {item.nameRu}
                    </h3>
                    <p className="text-xs text-[#EDE6DC] font-light leading-relaxed">
                      {item.microQuote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: NGHI THỨC PHA PHIN VIỆT NAM (THE SACRED DRIP RITUAL - 100VH) ================= */}
      <section className="zen-vision-mission-section">
        <div className="zen-vision-mission-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#E5DDD0]">
            <div>
                            <h2 className="font-serif text-[28px] md:text-[36px] text-[#181512] leading-tight">
                Ритуал Приготовления в Традиционном Фин
              </h2>
            </div>
            <p className="text-xs text-[#7A7269] max-w-[340px] leading-relaxed">
              Медитативный процесс, обучающий терпению и дарящий насыщенный подлинный вкус.
            </p>
          </div>

          <div className="zen-philo-ritual-grid">
            {/* Left: Large Photo */}
            <div className="zen-vision-museum-card group">
              <img
                src="/images/ritual_phin_brewing.jpg"
                alt="Ритуал заваривания в фин"
                className="zen-vision-museum-img"
              />
              <div className="zen-vision-triptych-overlay" />

              <div className="zen-vision-triptych-content">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(18,15,12,0.7)] backdrop-blur-md border border-[rgba(229,201,137,0.3)] text-[10px] font-semibold tracking-widest text-[#E5C989] uppercase self-start">
                  <span>✦ 100% ТРАДИЦИОННАЯ ЭКСТРАКЦИЯ</span>
                </div>

                <div>
                  <h3 className="font-serif text-[24px] md:text-[28px] text-white font-semibold mb-2">
                    Искусство Капельного Заваривания
                  </h3>
                  <p className="text-xs md:text-sm text-[#EDE6DC] font-light max-w-[480px] leading-relaxed">
                    Идеальная температура 96°C и гравитационное прохождение воды через слой свежего помола.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: 4 Direct Visual Steps */}
            <div className="flex flex-col justify-between gap-3 h-full">
              {phinSteps.map((st) => (
                <div key={st.step} className="p-3.5 rounded-xl bg-white border border-[#E5DDD0] shadow-sm flex items-start gap-3">
                  <span className="font-serif text-[#B38E46] font-bold text-xl flex-shrink-0 w-8">
                    {st.step}
                  </span>
                  <div>
                    <h4 className="font-serif text-[15px] font-semibold text-[#181512] mb-0.5">
                      {st.action}
                    </h4>
                    <p className="text-xs text-[#5A534C] leading-snug">
                      {st.guide}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: BỘ QUÀ TẶNG TRIẾT ĐẠO DOANH NGHIỆP (100VH) ================= */}
      <section className="zen-vision-pledge-section">
        <div className="zen-vision-pledge-container">
          <div className="p-8 md:p-12 rounded-3xl bg-[#181512] text-white relative overflow-hidden border border-[#B38E46]/40 shadow-2xl">
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 pointer-events-none hidden md:block">
              <img
                src="/images/prod_legend.jpg"
                alt="Подарочные наборы"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 max-w-[560px]">
              <h2 className="font-serif text-[28px] md:text-[38px] leading-tight text-white mb-3">
                Подарки со Смыслом
                <br />
                <span className="italic font-normal text-[#F5DC9A]">
                  и Энергией Успеха
                </span>
              </h2>

              <p className="text-xs md:text-sm text-[#EDE6DC] font-light leading-relaxed mb-6">
                Премиальные наборы Legend Special Edition в комплекте с позолоченным фин и книгами для лидеров.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="/katalog/molotyj-kofe"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B38E46] text-[#181512] text-[13px] font-bold tracking-wide hover:bg-[#D4AF37] transition-all shadow-[0_6px_20px_rgba(179,142,70,0.4)]"
                >
                  <span>Коллекция подарков</span>
                  <span>↗</span>
                </a>
                <a
                  href="/dlya-partnerov"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[rgba(255,255,255,0.12)] border border-[rgba(255,255,255,0.3)] text-white text-[13px] font-medium tracking-wide hover:bg-[rgba(255,255,255,0.2)] transition-all"
                >
                  <span>Для компаний (B2B)</span>
                  <span className="text-[#E5C989]">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
