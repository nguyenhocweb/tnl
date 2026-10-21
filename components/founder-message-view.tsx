"use client";


type SacredPillar = {
  number: string;
  titleRu: string;
  titleVi: string;
  image: string;
  microQuote: string;
};

const sacredPillars: SacredPillar[] = [
  {
    number: "I",
    titleRu: "Пробуждение",
    titleVi: "TỈNH THỨC",
    image: "/images/pillar_awakening.jpg",
    microQuote: "Очистить разум от суеты, вернуть предельную ясность мысли.",
  },
  {
    number: "II",
    titleRu: "Созидание",
    titleVi: "SÁNG TẠO",
    image: "/images/pillar_creation.jpg",
    microQuote: "Превратить импульс ясности в осязаемый результат и великие открытия.",
  },
  {
    number: "III",
    titleRu: "Ответственность",
    titleVi: "TRÁCH NHIỆM",
    image: "/images/pillar_responsibility.jpg",
    microQuote: "Служение обществу и гармония с миром — высшая форма проявления духа.",
  },
];

type EnergyBook = {
  title: string;
  author: string;
  tag: string;
  desc: string;
};

const energyBooks: EnergyBook[] = [
  {
    title: "Размышления",
    author: "Марк Аврелий",
    tag: "СТОИЦИЗМ & ДЗЭН",
    desc: "Непоколебимое спокойствие духа, дисциплина мысли и осознание своего долга.",
  },
  {
    title: "Дао Дэ Цзин",
    author: "Лао-цзы",
    tag: "ВОСТОЧНАЯ МУДРОСТЬ",
    desc: "Гармония триады Небо — Земля — Человек, естественный поток созидания.",
  },
  {
    title: "Уолден, или Жизнь в лесу",
    author: "Генри Дэвид Торо",
    tag: "ОСОЗНАННОСТЬ",
    desc: "Очищение сознания от суеты, поиск подлинных ценностей и простота бытия.",
  },
  {
    title: "Думай и богатей",
    author: "Наполеон Хилл",
    tag: "ЭНЕРГИЯ ЦЕЛИ",
    desc: "Сила несгибаемой веры, целеустремлённость và материализация мечты.",
  },
];

export default function FounderMessageView() {
  return (
    <div className="founder-message-view w-full bg-[#FAF8F5] text-[#181512]">
      {/* ================= SECTION 1: HERO CHÂN DUNG TỈNH THỨC (FULL SCREEN HEIGHT) ================= */}
      <section id="hero" className="zen-founder-hero-wrapper">
        <div className="zen-founder-hero-grid">
          {/* Cột trái: Ảnh chân dung đen trắng Fine-Art khổ lớn */}
          <div className="zen-founder-portrait-card group">
            <img
              src="/images/founder_portrait.jpg"
              alt="Данг Ле Нгуен Ву (Đặng Lê Nguyên Vũ)"
              className="zen-founder-portrait-img"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181512]/90 via-[#181512]/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <h2 className="font-serif text-2xl lg:text-3xl text-white font-medium mb-1">
                Đặng Lê Nguyên Vũ
              </h2>
              <p className="text-xs text-white/80 font-light">
                Председатель правления Trung Nguyên Legend
              </p>
            </div>
          </div>

          {/* Cột phải: Khối tuyên ngôn cốt lõi */}
          <div className="flex flex-col justify-center lg:pl-4">
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#181512] leading-tight mb-5 lg:mb-6">
              «Кофе — чистая энергия, <br className="hidden sm:block" />
              <span className="italic text-[#B38E46]">меняющая жизнь и сознание.»</span>
            </h1>

            {/* Quote / Description */}
            <div className="max-w-xl">
              <p className="font-serif italic text-base sm:text-lg text-[#3D352E] leading-relaxed m-0 p-0">
                «Там, где есть вера и непреклонная воля к величию, даже старый велосипед и чашка крепкого кофе способны покорить весь мир.»
              </p>
              <div className="mt-3 text-xs tracking-wider text-[#8C8071] uppercase font-medium">
                — Данг Ле Нгуен Ву (1996 · Буонметхуот)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: BỘ 3 TRỤ CỘT TƯ TƯỞNG (SACRED TRIPTYCH) ================= */}
      <section id="pillars" className="zen-founder-triptych-wrapper">
        <div className="w-full max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#181512] mb-1.5 leading-tight">
              Три Столпа Пробуждённого Духа
            </h2>
            <p className="text-xs text-[#6B6259] font-light">
              Путь превращения природной силы кофейного зерна в созидательную энергию человека.
            </p>
          </div>

          {/* 3 Khung tranh dọc Triptych */}
          <div className="zen-founder-triptych-grid">
            {sacredPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="zen-founder-triptych-card group"
              >
                <img
                  src={pillar.image}
                  alt={pillar.titleRu}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181512]/90 via-[#181512]/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                  <span className="text-[9px] tracking-widest text-[#F8D78C] uppercase font-bold block mb-0.5">
                    {pillar.titleVi}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white mb-1.5">
                    {pillar.titleRu}
                  </h3>
                  <p className="text-xs text-white/80 font-light line-clamp-2 leading-relaxed">
                    {pillar.microQuote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= SECTION 4: KỆ SÁCH NĂNG LƯỢNG ĐỔI ĐỜI (THE ENERGY LIBRARY) ================= */}
      <section id="books" className="zen-library-wrapper">
        <div className="w-full max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#181512] mb-1.5 leading-tight">
              Библиотека Созидательной Энергии
            </h2>
            <p className="text-xs text-[#6B6259] font-light">
              Ключевые труды мировой мысли, отобранные для пробуждения великих устремлений.
            </p>
          </div>

          {/* Lưới Bento Kệ sách */}
          <div className="zen-library-grid">
            {/* Cột trái: Ảnh Fine-Art Kệ sách & Tách cà phê */}
            <div className="relative rounded-2xl overflow-hidden border border-[#DED4C7] shadow-[0_20px_40px_rgba(24,21,18,0.06)] bg-white h-[260px] lg:h-full group">
              <img
                src="/images/energy_books.jpg"
                alt="Библиотека созидания Trung Nguyên Legend"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white z-10 flex justify-between items-end">
                <div>
                  <h4 className="font-serif text-lg sm:text-xl text-white leading-tight">
                    «Книги, меняющие судьбы»
                  </h4>
                  <p className="text-[11px] text-white/70 font-light mt-0.5">
                    Библиотека созидания и пробуждения нации
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xl sm:text-2xl font-bold font-serif text-[#F8D78C] block leading-none">
                    &gt;10 000 000
                  </span>
                  <span className="text-[9px] text-white/80 block mt-0.5">
                    книг передано
                  </span>
                </div>
              </div>
            </div>

            {/* Cột phải: 4 Thẻ sách tinh hoa */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 h-full">
              {energyBooks.map((book) => (
                <div
                  key={book.title}
                  className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E3DBD0] shadow-sm flex flex-col justify-between hover:border-[#B38E46] hover:shadow-md transition duration-300"
                >
                  <div>
                    <h5 className="font-serif text-base text-[#181512] font-semibold mb-0.5 leading-snug">
                      {book.title}
                    </h5>
                    <p className="text-[11px] text-[#8C8071] font-medium mb-2">
                      {book.author}
                    </p>
                    <p className="text-xs text-[#5C554E] font-light leading-relaxed line-clamp-3">
                      {book.desc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-[#F5EFE8] flex items-center justify-between text-[10px] text-[#B38E46] font-semibold uppercase tracking-wider">
                    <span>Читать и осмыслить</span>
                    <span>→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: FOOTER CTA TỈNH THỨC ================= */}
      <section className="w-full py-14 lg:py-16 bg-[#F4EFEA] border-t border-[#E5DDD0]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[10px] font-bold tracking-[0.24em] text-[#B38E46] uppercase block mb-2">
            ФИЛОСОФИЯ ОСОЗНАННОЙ ЖИЗНИ
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#181512] mb-3">
            Откройте Искусство Энергии Кофе
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6259] max-w-xl mx-auto mb-6 font-light">
            Познакомьтесь с тремя кофейными цивилизациями и отборными шедеврами из кофейной столицы Буонметхуот.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/filosofiya-kofe"
              className="px-6 py-3 rounded-lg bg-[#B38E46] text-white hover:bg-[#9B7735] text-xs font-semibold tracking-wider uppercase transition shadow-sm"
            >
              3 Цивилизации Кофе ↗
            </a>
            <a
              href="/katalog"
              className="px-6 py-3 rounded-lg border border-[#D5CBBF] bg-white text-[#181512] hover:bg-[#F3EFEA] text-xs font-semibold tracking-wider uppercase transition"
            >
              Каталог Продукции ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
