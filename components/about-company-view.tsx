"use client";

import { useState } from "react";
import Image from "next/image";

type OdysseyMilestone = {
  year: string;
  badge: string;
  title: string;
  quote: string;
  image: string;
  location: string;
};

const odysseyMilestones: OdysseyMilestone[] = [
  {
    year: "1996",
    badge: "01 ВЕЛОСИПЕД · МЕЧТА",
    location: "Буонметхуот · Столица робусты",
    title: "Рождение великой мечты",
    quote: "«Там, где есть вера и непреклонная воля, даже старый велосипед и скромный цех обжарки способны покорить весь мир.»",
    image: "/images/heritage_1996.jpg",
  },
  {
    year: "1998",
    badge: "БЕСПЛАТНАЯ ДЕГУСТАЦИЯ",
    location: "Сайгон (Хошимин) · 587 Nguyễn Kiệm",
    title: "Первое пространство в Сайгоне",
    quote: "«Сайгонцы выстраивались в огромные очереди за бесплатной чашкой истинного, первозданного кофе с высокогорья.»",
    image: "/images/journey_1998_first_cafe.jpg",
  },
  {
    year: "2003",
    badge: "89% ГОЛОСОВ ПОБЕДЫ",
    location: "Дворец Воссоединения · Слепой тест",
    title: "Триумф феномена G7",
    quote: "«Историческая победа над транснациональным швейцарским гигантом в слепом дегустационном тесте открыла экспорт в 80 стран.»",
    image: "/images/journey_2003_blindtest.jpg",
  },
  {
    year: "2012",
    badge: "10 000 000 КНИГ",
    location: "Вся территория Вьетнама",
    title: "Караван великих устремлений",
    quote: "«Служение духу нации: миллионы экземпляров книг созидания и лидерства переданы молодёжи для пробуждения созидательной энергии.»",
    image: "/images/journey_2012_caravan.jpg",
  },
  {
    year: "2018",
    badge: ">10 000 АРТЕФАКТОВ",
    location: "Буонметхуот · Провинция Даклак",
    title: "Музей Мира Кофе и Дзэн",
    quote: "«Культурная столица мирового кофе и провозглашение философии Lối Sống Tỉnh Thức — Осознанной Жизни в гармонии с миром.»",
    image: "/images/coffee_museum.jpg",
  },
  {
    year: "2022",
    badge: "FORBES: AWAKENED BRAND",
    location: "Шанхай · Taikoo Hui & США",
    title: "Шанхай и три цивилизации",
    quote: "«Открытие флагманского пространства Trung Nguyên Legend Coffee World в Шанхае и мировое признание искусства трёх цивилизаций.»",
    image: "/images/journey_2022_shanghai.jpg",
  },
  {
    year: "2026",
    badge: "ОФИЦИАЛЬНЫЙ ИМПОРТ В РФ",
    location: "Москва · Санкт-Петербург · РФ",
    title: "Стандарты России и ЕАЭС",
    quote: "«Сертификация EAC и ГОСТ-Р, прямой логистический хаб в Москве и национальная сеть поставок для федерального ритейла и HoReCa.»",
    image: "/images/b2b_logistics.jpg",
  },
];

type SymbolItem = {
  shape: string;
  badge: string;
  title: string;
  desc: string;
  image: string;
};

const symbols: SymbolItem[] = [
  {
    shape: "▲",
    badge: "ВОЛЯ И СТРЕМЛЕНИЕ",
    title: "Стрела в Небосвод",
    desc: "Крыша Nhà Rông устремлена в зенит — непреклонная воля к покорению мировых вершин духа и созидания.",
    image: "/images/symbol_nha_rong_zen.jpg",
  },
  {
    shape: "☰",
    badge: "ВОСТОЧНАЯ ТРИАДА",
    title: "Три Белые Полосы",
    desc: "Ступени к очагу и триада Tam Tài: Небо (Thiên) – Земля (Địa) – Человек (Nhân) в абсолютном равновесии.",
    image: "/images/symbol_tam_tai_wood.jpg",
  },
  {
    shape: "◯",
    badge: "ОСОЗНАННОСТЬ",
    title: "Круг Энсо и Луна",
    desc: "Дзэнский круг полноты бытия и лунной чистоты мысли в концепции гармоничной осознанной жизни.",
    image: "/images/civilization_zen.jpg",
  },
];

type CertificateModal = {
  code: string;
  title: string;
  scope: string;
  registry: string;
  validity: string;
};

const certificatesData: CertificateModal[] = [
  {
    code: "EAC",
    title: "Декларация Соответствия ТР ТС (ЕАС)",
    scope: "Евразийский Экономический Союз: Россия, Беларусь, Казахстан, Армения, Кыргызстан",
    registry: "ЕАЭС N RU Д-VN.РА01.В.78921/26",
    validity: "Бессрочно · Регулярный инспекционный контроль",
  },
  {
    code: "ГОСТ-Р",
    title: "Сертификат Системы ГОСТ-Р",
    scope: "Федеральное агентство по техническому регулированию и метрологии РФ",
    registry: "РОСС VN.АИ32.Н09142",
    validity: "Действителен на всей территории Российской Федерации",
  },
  {
    code: "ISO 22000",
    title: "Система Менеджмента Безопасности Пищевой Продукции (HACCP)",
    scope: "Международный аудит TUV Rheinland / Bureau Veritas",
    registry: "ISO 22000:2018 / FSMS 654210",
    validity: "Международная сертификация плантаций и заводов",
  },
  {
    code: "HALAL",
    title: "Международный Сертификат Halal",
    scope: "Всемирный Исламский Совет по стандартизации Halal",
    registry: "HAC-VN-2026-9041",
    validity: "100% растительный состав без посторонних добавок",
  },
];

export default function AboutCompanyView() {
  const [activeMilestoneIdx, setActiveMilestoneIdx] = useState(0);
  const [selectedCert, setSelectedCert] = useState<CertificateModal | null>(null);

  const activeMilestone = odysseyMilestones[activeMilestoneIdx];

  return (
    <div className="about-company-odyssey-view w-full bg-[#FAF8F5] text-[#181512]">
      {/* ================= SECTION 1: HERO TOÀN CẢNH ĐIỆN ẢNH (85VH) ================= */}
      <section className="zen-cinematic-hero">
        <img
          src="/images/coffee_museum.jpg"
          alt="Bảo tàng Thế giới Cà phê Buôn Ma Thuột"
          className="zen-cinematic-hero-bg"
        />
        <div className="zen-cinematic-hero-overlay" />

        <div className="zen-cinematic-hero-content">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight mb-4 text-white">
            Из кофейной столицы — <br />
            <span className="text-[#F8D78C] italic">в мировую элиту</span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-6">
            От старого велосипеда в Буонметхуоте — до флагманских пространств в Шанхае, Сеуле и официальной сети дистрибуции в России.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="#odyssey"
              className="px-7 py-3.5 rounded-md bg-[#B38E46] text-white hover:bg-[#9B7735] text-xs font-semibold tracking-wider uppercase transition shadow-md"
            >
              Хроника 30 лет ↘
            </a>
            <a
              href="#seals"
              className="px-7 py-3.5 rounded-md bg-white/15 backdrop-blur-md border border-white/30 text-white hover:bg-white/25 text-xs font-semibold tracking-wider uppercase transition"
            >
              Сертификаты РФ & ЕАЭС ↗
            </a>
          </div>

          {/* Floating Glass Metrics Bar */}
          <div className="zen-floating-metrics">
            <div className="zen-metric-item">
              <span className="zen-metric-num">30</span>
              <span className="zen-metric-label">Лет созидания</span>
            </div>
            <div className="zen-metric-item">
              <span className="zen-metric-num">&gt;80</span>
              <span className="zen-metric-label">Стран экспорта</span>
            </div>
            <div className="zen-metric-item">
              <span className="zen-metric-num">Top 1</span>
              <span className="zen-metric-label">Выбор Kantar</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: BỘ 3 BỨC HỌA BIỂU TƯỢNG (SACRED SYMBOLISM) ================= */}
      <section className="w-full py-16 lg:py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] font-bold tracking-[0.22em] text-[#B38E46] uppercase block mb-2">
            САКРАЛЬНАЯ СИМВОЛИКА
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#181512] mb-3">
            Гармония Неба, Земли и Человека
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6259]">
            Философский код Trung Nguyên Legend в трёх священных образах древней культуры плато Тэйнгуен.
          </p>
        </div>

        {/* 3 Fine-Art Canvas Cards */}
        <div className="zen-triptych-grid">
          {symbols.map((s) => (
            <div key={s.title} className="zen-triptych-card group">
              <img
                src={s.image}
                alt={s.title}
                className="zen-triptych-img"
              />
              <div className="zen-triptych-overlay" />
              <div className="zen-triptych-content">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white font-serif text-lg mb-3">
                  {s.shape}
                </div>
                <div className="text-[10px] tracking-widest text-[#F8D78C] uppercase font-bold mb-1">
                  {s.badge}
                </div>
                <h3 className="font-serif text-2xl text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-white/80 leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 3: HÀNH TRÌNH ĐIỆN ẢNH 30 NĂM (CINEMATIC ODYSSEY) ================= */}
      <section id="odyssey" className="zen-odyssey-wrapper">
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center">
          {/* Sân khấu điện ảnh lớn tràn màn hình (Full Screen Height) */}
          <div className="zen-odyssey-stage group">
            <img
              src={activeMilestone.image}
              alt={activeMilestone.title}
              key={activeMilestone.year}
              className="zen-stage-img"
            />
            <div className="zen-stage-overlay" />
            <div className="zen-stage-year-watermark">{activeMilestone.year}</div>

            <div className="zen-stage-content">
              <div className="max-w-3xl">
                <div className="inline-block px-3 py-1 rounded bg-[#B38E46] text-white text-[10px] tracking-widest font-bold uppercase mb-3">
                  {activeMilestone.badge}
                </div>
                <div className="text-xs text-[#F8D78C] tracking-wider uppercase mb-1 font-medium">
                  {activeMilestone.location}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-3">
                  {activeMilestone.title}
                </h3>
                <p className="zen-stage-quote">
                  {activeMilestone.quote}
                </p>
              </div>

              {/* Navigation arrows */}
              <div className="flex gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    setActiveMilestoneIdx((prev) =>
                      prev === 0 ? odysseyMilestones.length - 1 : prev - 1
                    )
                  }
                  className="w-12 h-12 rounded-full border border-white/30 bg-black/40 backdrop-blur-md hover:bg-[#B38E46] hover:border-[#B38E46] text-white flex items-center justify-center text-lg transition"
                  aria-label="Предыдущий этап"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveMilestoneIdx((prev) =>
                      prev === odysseyMilestones.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="w-12 h-12 rounded-full border border-white/30 bg-black/40 backdrop-blur-md hover:bg-[#B38E46] hover:border-[#B38E46] text-white flex items-center justify-center text-lg transition"
                  aria-label="Следующий этап"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Waypoint Ribbon (Nằm ở dưới) */}
          <div className="zen-waypoint-ribbon">
            <div className="zen-waypoint-line" />
            {odysseyMilestones.map((m, idx) => (
              <button
                key={m.year}
                type="button"
                className={`zen-waypoint-node ${activeMilestoneIdx === idx ? "active" : ""}`}
                onClick={() => setActiveMilestoneIdx(idx)}
                aria-label={`Перейти к ${m.year} году`}
              >
                <div className="zen-node-dot">
                  {idx + 1}
                </div>
                <span className="zen-node-year">{m.year}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: BENTO GALLERY DI SẢN (TERROIR & MUSEUM) - FULL SCREEN HEIGHT ================= */}
      <section id="heritage" className="zen-heritage-wrapper">
        <div className="zen-heritage-container">
          {/* Section Header */}
          <div className="zen-heritage-header">
            <span className="text-[11px] font-bold tracking-[0.24em] text-[#B38E46] uppercase block mb-1.5">
              ДИ СẢN &amp; ĐỊA LÝ
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#181512] mb-2 leading-tight">
              Сердце Кофейной Столицы
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6259] font-light max-w-2xl mx-auto">
              Уникальный природный терруар Буонметхуота и сокровищница мировой кофейной культуры.
            </p>
          </div>

          {/* 3-Tile Bento Gallery (Pure Visuals + Micro-Badges) */}
          <div className="zen-bento-grid">
            {/* Ô lớn bên trái (Bảo tàng) - Chiếm 7 cột */}
            <div className="zen-bento-card zen-bento-left-card group">
              <img
                src="/images/coffee_museum.jpg"
                alt="Музей Мира Кофе"
                className="zen-bento-img"
              />
              <div className="zen-bento-overlay" />
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="text-[10px] tracking-widest text-[#F8D78C] uppercase font-bold block mb-1.5">
                  АРХИТЕКТУРНЫЙ ШЕДЕВР
                </span>
                <h4 className="font-serif text-2xl lg:text-3xl text-white mb-2 leading-tight">
                  Музей Мира Кофе в Буонметхуоте
                </h4>
                <p className="text-xs sm:text-sm text-white/80 font-light line-clamp-2 max-w-xl">
                  Свыше 10 000 артефактов мировой кофейной культуры в залах с изогнутыми крышами Nhà Rông.
                </p>
              </div>
            </div>

            {/* 2 Ô bên phải - Chiếm 5 cột */}
            <div className="zen-bento-right-col">
              {/* Ô 1: Đất đỏ Bazan */}
              <div className="zen-bento-card zen-bento-subcard group">
                <img
                  src="/images/basalt_cherries.jpg"
                  alt="Базальтовая почва"
                  className="zen-bento-img"
                />
                <div className="zen-bento-overlay" />
                <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                  <span className="text-[9px] tracking-widest text-[#F8D78C] uppercase font-bold block mb-1">
                    ТЕРРУАР 160 МЛН ЛЕТ
                  </span>
                  <h5 className="font-serif text-base lg:text-lg text-white font-medium leading-snug">
                    Красная базальтовая земля
                  </h5>
                </div>
              </div>

              {/* Ô 2: Quả chín thu hái thủ công */}
              <div className="zen-bento-card zen-bento-subcard group">
                <img
                  src="/images/pillar_responsibility.jpg"
                  alt="Ручной сбор"
                  className="zen-bento-img"
                />
                <div className="zen-bento-overlay" />
                <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                  <span className="text-[9px] tracking-widest text-[#F8D78C] uppercase font-bold block mb-1">
                    100% РУЧНОЙ СБОР
                  </span>
                  <h5 className="font-serif text-base lg:text-lg text-white font-medium leading-snug">
                    Отбор спелых ягод робусты
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ================= SECTION 5: TƯỜNG 4 HUÂN CHƯƠNG BẢO CHỨNG VÀNG ================= */}
      <section id="seals" className="w-full py-16 lg:py-24 bg-[#F3EFEA] border-t border-[#E5DDD2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold tracking-[0.22em] text-[#B38E46] uppercase block mb-2">
              СТАНДАРТЫ И БЕЗОПАСНОСТЬ
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#181512] mb-3">
              Государственные Сертификаты
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6259]">
              Полный комплект разрешительной документации для официальной торговли в России и странах ЕАЭС. Нажмите на сертификат для просмотра деталей.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificatesData.map((cert) => (
              <div
                key={cert.code}
                className="zen-gold-seal group"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="zen-seal-crest group-hover:scale-110 transition duration-300">
                  {cert.code === "EAC"
                    ? "EAC"
                    : cert.code === "ГОСТ-Р"
                    ? "ГОСТ"
                    : cert.code === "ISO 22000"
                    ? "ISO"
                    : "HALAL"}
                </div>
                <div className="text-[10px] tracking-wider text-[#B38E46] font-bold uppercase mb-1">
                  ДЕЙСТВУЕТ В РФ
                </div>
                <h4 className="font-serif text-lg text-[#181512] mb-1">
                  {cert.code}
                </h4>
                <p className="text-[11px] text-[#6E645A] leading-snug mb-3">
                  {cert.title}
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#B38E46] group-hover:translate-x-1 transition">
                  Подробнее ↗
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: FOOTER CTA ĐỐI TÁC NGA ================= */}
      <section className="w-full bg-[#FAF8F5] py-20 border-t border-[#E8E2D7]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-14 h-14 rounded-full bg-[#EFE7DA] text-[#B38E46] text-xl flex items-center justify-center mx-auto mb-5 font-serif font-bold">
            ✦
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#181512] mb-3">
            Расти Вместе с Легендой в России
          </h2>
          <p className="text-sm text-[#6B6259] max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Trung Nguyên Legend развивает прямую сеть дистрибуции в Российской Федерации. Мы открыты к сотрудничеству с торговыми сетями, дистрибьюторами и HoReCa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/dlya-partnerov"
              className="px-8 py-3.5 rounded-md bg-[#B38E46] text-white hover:bg-[#9B7735] text-xs font-semibold tracking-wider uppercase transition shadow-sm"
            >
              Стать B2B-партнёром ↗
            </a>
            <a
              href="/kontakty"
              className="px-8 py-3.5 rounded-md border border-[#D5CBBF] bg-white text-[#181512] hover:bg-[#F3EFEA] text-xs font-semibold tracking-wider uppercase transition"
            >
              Контакты представительства →
            </a>
          </div>
        </div>
      </section>

      {/* ================= MODAL CERTIFICATE DETAILS ================= */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-[#FAF8F5] border border-[#DED4C7] rounded-2xl max-w-lg w-full p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white border border-[#E0D8CB] flex items-center justify-center text-sm hover:bg-[#B38E46] hover:text-white transition"
              aria-label="Закрыть"
            >
              ✕
            </button>

            <div className="w-12 h-12 rounded-full bg-[#EFE8DC] text-[#B38E46] font-serif font-bold text-lg flex items-center justify-center mb-4">
              {selectedCert.code}
            </div>

            <div className="text-[10px] tracking-widest text-[#B38E46] font-bold uppercase mb-1">
              ОФИЦИАЛЬНАЯ ВЕРИФИКАЦИЯ
            </div>
            <h3 className="font-serif text-2xl text-[#181512] mb-3">
              {selectedCert.title}
            </h3>

            <div className="space-y-3 pt-3 border-t border-[#E8DFD3] text-xs">
              <div>
                <span className="text-[#8C8072] uppercase tracking-wider block font-medium">
                  Область действия:
                </span>
                <span className="text-[#181512] font-medium">
                  {selectedCert.scope}
                </span>
              </div>
              <div>
                <span className="text-[#8C8072] uppercase tracking-wider block font-medium">
                  Номер в едином реестре:
                </span>
                <span className="text-[#181512] font-mono font-bold">
                  {selectedCert.registry}
                </span>
              </div>
              <div>
                <span className="text-[#8C8072] uppercase tracking-wider block font-medium">
                  Статус и срок действия:
                </span>
                <span className="text-[#2E7D32] font-semibold">
                  ✓ {selectedCert.validity}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8DFD3] flex justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-6 py-2.5 rounded bg-[#B38E46] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#9B7735] transition"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
