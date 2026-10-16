"use client";

type GlobalHub = {
  roman: string;
  badgeRu: string;
  badgeVi: string;
  image: string;
  title: string;
  microQuote: string;
};

const globalHubs: GlobalHub[] = [
  {
    roman: "I",
    badgeRu: "ИСТОК · БУОНМЕТХУОТ",
    badgeVi: "CỘI NGUỒN BAZAN",
    image: "/images/basalt_cherries.jpg",
    title: "Сердце мировой робусты",
    microQuote: "Первозданная энергия богатых базальтовых высокогорий Вьетнама.",
  },
  {
    roman: "II",
    badgeRu: "ХАБ · МОСКВА & ЕВРАЗИЯ",
    badgeVi: "TRỌNG TÂM CHIẾN LƯỢC",
    image: "/images/b2b_logistics.jpg",
    title: "Стратегический мост Евразии",
    microQuote: "Прямые поставки, соблюдение стандартов ГОСТ-Р и сертификация ЕАС.",
  },
  {
    roman: "III",
    badgeRu: "МИРОВОЕ ПРИСУТСТВИЕ",
    badgeVi: "MẠNG LƯỚI TOÀN CẦU",
    image: "/images/journey_2022_shanghai.jpg",
    title: "Более 80 стран на 4 континентах",
    microQuote: "Флагманские пространства в мировых мегаполисах: Шанхай, Сеул, Лондон.",
  },
];

type SacredPillar = {
  roman: string;
  titleRu: string;
  titleVi: string;
  image: string;
  microQuote: string;
  proofTag: string;
};

const sacredPillars: SacredPillar[] = [
  {
    roman: "I",
    titleRu: "Великая Мечта",
    titleVi: "KHÁT VỌNG VĨ ĐẠI",
    image: "/images/hero_sharp_hills.jpg",
    microQuote: "Мыслить глобально, преодолевать привычные рамки.",
    proofTag: "Экосистема в 80+ странах",
  },
  {
    roman: "II",
    titleRu: "Подлинность (Правда)",
    titleVi: "CHÂN THẬT NGUYÊN BẢN",
    image: "/images/basalt_cherries.jpg",
    microQuote: "100% первозданный кофе без малейших компромиссов.",
    proofTag: "Отборные зёрна базальта",
  },
  {
    roman: "III",
    titleRu: "Инновации",
    titleVi: "SÁNG TẠO ĐỘT PHÁ",
    image: "/images/civilization_zen.jpg",
    microQuote: "Эксклюзивная нано-экстракция и рецептуры 3 цивилизаций.",
    proofTag: "Патенты био-ферментации",
  },
  {
    roman: "IV",
    titleRu: "Совершенство",
    titleVi: "ĐỈNH CAO CHUẨN MỰC",
    image: "/images/prod_legend.jpg",
    microQuote: "Строжайшие регламенты ЕАС, ГОСТ-Р, ISO 22000 и Halal.",
    proofTag: "Мировые стандарты качества",
  },
];

type RussianPledge = {
  number: string;
  badgeRu: string;
  image: string;
  titleRu: string;
  microQuote: string;
};

const russianPledges: RussianPledge[] = [
  {
    number: "01",
    badgeRu: "ЛОГИСТИКА И СЕТИ",
    image: "/images/b2b_logistics.jpg",
    titleRu: "Прямые поставки по всей РФ",
    microQuote: "Федеральные склады в Москве и надёжное партнёрство с X5 Group, Магнит и HoReCa.",
  },
  {
    number: "02",
    badgeRu: "КУЛЬТУРА И ДИАЛОГ",
    image: "/images/journey_1998_first_cafe.jpg",
    titleRu: "Пространства осознанного вкуса",
    microQuote: "Развитие флагманских кофеен Trung Nguyên Legend Café и сети E-Coffee в России.",
  },
  {
    number: "03",
    badgeRu: "ЭКОЛОГИЯ И ЧЕСТНОСТЬ",
    image: "/images/hero_zen_coffee.jpg",
    titleRu: "Зелёные стандарты земледелия",
    microQuote: "Бережное отношение к экосистеме высокогорий и 100% прозрачность бизнеса.",
  },
];

export default function VisionValuesView() {
  return (
    <div className="vision-values-page">
      {/* ================= SECTION 1: KHỞI THIÊN (BÌNH MINH TỈNH THỨC - 100VH) ================= */}
      <section className="zen-vision-hero-wrapper">
        <div className="zen-vision-hero-bg" />
        <div className="zen-vision-hero-overlay" />

        <div className="zen-vision-hero-content">
          <div className="zen-vision-hero-card">
            {/* Main Title - Đặt trực tiếp trên nền ảnh, nét chữ sắc sảo, bóng đổ tương phản cao */}
            <h1 className="font-serif text-[36px] sm:text-[46px] md:text-[54px] lg:text-[62px] leading-[1.08] text-[#FFFFFF] mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              Энергия Созидания
              <br />
              <span className="italic font-normal text-[#F5DC9A] drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
                и Путь к Величию
              </span>
            </h1>

            {/* Micro Tagline: Rút gọn, siêu sắc nét */}
            <p className="text-[17px] sm:text-[21px] font-medium text-[#FAF8F5] leading-snug max-w-[500px] mb-8 drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              «Кофе, пробуждающий сознание.»
            </p>

            {/* Action Button */}
            <div>
              <a
                href="#circle-vision"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#B38E46] text-[#181512] text-[13px] font-bold tracking-wide hover:bg-[#D4AF37] transition-all shadow-[0_6px_22px_rgba(0,0,0,0.45)] hover:scale-[1.02]"
              >
                <span>Глобальное видение</span>
                <span>↘</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-[10px] uppercase tracking-[0.2em] pointer-events-none z-10">
          <span>Прокрутите вниз</span>
          <div className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-[#E5C989] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: HÌNH TRÒN THIÊN — TẦM NHÌN TOÀN CẦU (GLOBAL TRIPTYCH - 100VH) ================= */}
      <section id="circle-vision" className="zen-vision-triptych-section">
        <div className="zen-vision-triptych-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#E5DDD0]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#B38E46] font-semibold mb-1">
                <span>◎ HÌNH TRÒN THIÊN</span>
                <span>·</span>
                <span>THE CIRCLE OF VISION</span>
              </div>
              <h2 className="font-serif text-[28px] md:text-[36px] text-[#181512] leading-tight">
                Глобальное Видение: 3 Центра Энергии
              </h2>
            </div>
            <p className="text-xs text-[#7A7269] max-w-[340px] leading-relaxed">
              От столицы робусты Буонметхуот до стратегического рынка России и более чем 80 стран мира.
            </p>
          </div>

          <div className="zen-vision-triptych-grid">
            {globalHubs.map((hub) => (
              <div key={hub.roman} className="zen-vision-triptych-card group">
                <img
                  src={hub.image}
                  alt={hub.title}
                  className="zen-vision-triptych-img"
                />
                <div className="zen-vision-triptych-overlay" />

                <div className="zen-vision-triptych-content">
                  {/* Top Badge */}
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full bg-[rgba(18,15,12,0.7)] backdrop-blur-md border border-[rgba(229,201,137,0.3)] text-[10px] font-semibold tracking-widest text-[#E5C989] uppercase">
                      {hub.badgeRu}
                    </span>
                    <span className="font-serif text-[#E5C989] font-bold text-lg">
                      {hub.roman}
                    </span>
                  </div>

                  {/* Bottom Text */}
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#B38E46] font-bold block mb-1">
                      {hub.badgeVi}
                    </span>
                    <h3 className="font-serif text-[20px] md:text-[22px] text-white font-semibold mb-2 leading-snug">
                      {hub.title}
                    </h3>
                    <p className="text-xs text-[#EDE6DC] font-light leading-relaxed">
                      {hub.microQuote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: HÌNH VUÔNG ĐỊA — SỨ MẠNG PHỤNG SỰ (THE SQUARE OF MISSION - 100VH) ================= */}
      <section className="zen-vision-mission-section">
        <div className="zen-vision-mission-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#E5DDD0]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#B38E46] font-semibold mb-1">
                <span>▣ HÌNH VUÔNG ĐỊA</span>
                <span>·</span>
                <span>THE SQUARE OF MISSION</span>
              </div>
              <h2 className="font-serif text-[28px] md:text-[36px] text-[#181512] leading-tight">
                Миссия: Создание Сообщества Пробуждённых Людей
              </h2>
            </div>
            <p className="text-xs text-[#7A7269] max-w-[340px] leading-relaxed">
              Служение обществу через сеть флагманских пространств, философию осознанности и энергию знаний.
            </p>
          </div>

          <div className="zen-vision-mission-grid">
            {/* Left: Large Photo of Coffee World Museum */}
            <div className="zen-vision-museum-card group">
              <img
                src="/images/coffee_museum.jpg"
                alt="Бảo tàng Thế giới Cà phê Buôn Ma Thuột"
                className="zen-vision-museum-img"
              />
              <div className="zen-vision-triptych-overlay" />

              <div className="zen-vision-triptych-content">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(18,15,12,0.7)] backdrop-blur-md border border-[rgba(229,201,137,0.3)] text-[10px] font-semibold tracking-widest text-[#E5C989] uppercase self-start">
                  <span>🏛️ МУЗЕЙ МИРА КОФЕ · БУОНМЕТХУОТ</span>
                </div>

                <div>
                  <h3 className="font-serif text-[24px] md:text-[28px] text-white font-semibold mb-2">
                    Архитектура Осознанности и Мировое Наследие
                  </h3>
                  <p className="text-xs md:text-sm text-[#EDE6DC] font-light max-w-[480px] leading-relaxed">
                    Более 10.000 экспонатов всемирной кофейной истории — сердце культурной миссии Trung Nguyên Legend.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: 3 Mini Photo Cards */}
            <div className="flex flex-col justify-between gap-3 h-full">
              <div className="zen-vision-minicard">
                <div className="zen-vision-mini-thumb">
                  <img src="/images/civilization_zen.jpg" alt="Пробуждение разума" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#B38E46] font-bold block">
                    01 · THỨC TỈNH TRÍ TUỆ
                  </span>
                  <h4 className="font-serif text-[16px] font-semibold text-[#181512] mb-0.5">
                    Пробуждение Разума
                  </h4>
                  <p className="text-xs text-[#5A534C] leading-snug">
                    Раскрытие творческого импульса и ментальной ясности человека.
                  </p>
                </div>
              </div>

              <div className="zen-vision-minicard">
                <div className="zen-vision-mini-thumb">
                  <img src="/images/civilization_ottoman.jpg" alt="Три цивилизации кофе" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#B38E46] font-bold block">
                    02 · HỘI TỤ 3 NỀN VĂN MINH
                  </span>
                  <h4 className="font-serif text-[16px] font-semibold text-[#181512] mb-0.5">
                    Три Цивилизации Кофе
                  </h4>
                  <p className="text-xs text-[#5A534C] leading-snug">
                    Гармоничный синтез Османской, Римской и Дзэн кофейных традиций.
                  </p>
                </div>
              </div>

              <div className="zen-vision-minicard">
                <div className="zen-vision-mini-thumb">
                  <img src="/images/energy_books.jpg" alt="Энергия знаний" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#B38E46] font-bold block">
                    03 · TRI THỨC ĐỔI ĐỜI
                  </span>
                  <h4 className="font-serif text-[16px] font-semibold text-[#181512] mb-0.5">
                    Энергия Знаний
                  </h4>
                  <p className="text-xs text-[#5A534C] leading-snug">
                    Инициатива передачи более 10 миллионов книг, меняющих мышление.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: TAM GIÁC NHÂN — 4 ĐỈNH CAO GIÁ TRỊ (THE 4 SACRED PILLARS - 100VH) ================= */}
      <section id="sacred-pillars" className="zen-vision-pillars-section">
        <div className="zen-vision-pillars-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#E5DDD0]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#B38E46] font-semibold mb-1">
                <span>▲ TAM GIÁC NHÂN</span>
                <span>·</span>
                <span>THE TRIANGLE OF VALUES</span>
              </div>
              <h2 className="font-serif text-[28px] md:text-[36px] text-[#181512] leading-tight">
                4 Незыблемых Столпа Ценностей
              </h2>
            </div>
            <p className="text-xs text-[#7A7269] max-w-[340px] leading-relaxed">
              Принципы, определяющие качество каждого зёрнышка и рецептуры мастера.
            </p>
          </div>

          <div className="zen-vision-pillars-grid">
            {sacredPillars.map((pillar) => (
              <div key={pillar.roman} className="zen-vision-pillar-card group">
                <img
                  src={pillar.image}
                  alt={pillar.titleRu}
                  className="zen-vision-pillar-img"
                />
                <div className="zen-vision-pillar-overlay" />

                <div className="zen-vision-pillar-content">
                  <div className="flex justify-between items-center">
                    <span className="font-serif text-[#E5C989] font-bold text-2xl tracking-wider">
                      {pillar.roman}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[rgba(18,15,12,0.7)] backdrop-blur-md border border-[rgba(229,201,137,0.3)] text-[9px] font-semibold text-[#E5C989] uppercase tracking-wider">
                      {pillar.titleVi}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-[20px] text-white font-semibold mb-1 leading-snug">
                      {pillar.titleRu}
                    </h3>
                    <p className="text-xs text-[#EDE6DC] font-light leading-relaxed mb-3">
                      {pillar.microQuote}
                    </p>
                    <div className="pt-2 border-t border-white/20 text-[10px] text-[#E5C989] font-semibold tracking-wider flex items-center justify-between">
                      <span>{pillar.proofTag}</span>
                      <span>↗</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: ĐỒNG HÀNH BỀN VỮNG CÙNG NƯỚC NGA (100VH) ================= */}
      <section className="zen-vision-pledge-section">
        <div className="zen-vision-pledge-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-[#E5DDD0]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#B38E46] font-semibold mb-1">
                <span>✦ CAM KẾT CHIẾN LƯỢC</span>
                <span>·</span>
                <span>RUSSIAN PARTNERSHIP</span>
              </div>
              <h2 className="font-serif text-[28px] md:text-[36px] text-[#181512] leading-tight">
                Долгосрочное Партнёрство в России
              </h2>
            </div>
            <p className="text-xs text-[#7A7269] max-w-[340px] leading-relaxed">
              Полная юридическая прозрачность, развитая логистика и уважение к российскому потребителю.
            </p>
          </div>

          <div className="zen-vision-pledge-grid">
            {russianPledges.map((pledge) => (
              <div key={pledge.number} className="zen-vision-pledge-card group">
                <img
                  src={pledge.image}
                  alt={pledge.titleRu}
                  className="zen-vision-pledge-img"
                />
                <div className="zen-vision-pillar-overlay" />

                <div className="zen-vision-pillar-content">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-1 rounded-full bg-[rgba(18,15,12,0.7)] backdrop-blur-md border border-[rgba(229,201,137,0.3)] text-[10px] font-semibold text-[#E5C989] tracking-wider uppercase">
                      {pledge.badgeRu}
                    </span>
                    <span className="font-serif text-white/60 text-sm">
                      {pledge.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-[18px] md:text-[20px] text-white font-semibold mb-1 leading-snug">
                      {pledge.titleRu}
                    </h3>
                    <p className="text-xs text-[#EDE6DC] font-light leading-relaxed">
                      {pledge.microQuote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Dual Action Bar */}
          <div className="mt-8 pt-6 border-t border-[#E5DDD0] flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-[#5A534C] font-medium">
                Представительство и дистрибьюторская сеть в РФ готовы к сотрудничеству
              </span>
            </div>

            <div className="flex gap-3">
              <a
                href="/dlya-partnerov"
                className="px-7 py-3 rounded-full bg-[#181512] text-white text-[13px] font-medium hover:bg-[#B38E46] transition-colors shadow-md"
              >
                Стать B2B-партнёром ↗
              </a>
              <a
                href="/katalog"
                className="px-7 py-3 rounded-full bg-white border border-[#E0D5C3] text-[#181512] text-[13px] font-medium hover:border-[#B38E46] transition-colors shadow-sm"
              >
                Смотреть каталог кофе ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
