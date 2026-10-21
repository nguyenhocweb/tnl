"use client";

import React, { useState } from "react";
import B2BFormSection from "./b2b-form-section";

type StoreLocation = {
  id: string;
  city: "moscow" | "spb" | "kazan" | "ekb" | "nsk" | "vvo";
  cityName: string;
  title: string;
  address: string;
  metro: string;
  type: "office" | "retail" | "cafe" | "hub";
  typeLabel: string;
  rating?: number;
  hours: string;
  distance?: string;
  phone: string;
  mapQuery: string;
  image: string;
  isFlagship?: boolean;
};

const storeLocations: StoreLocation[] = [
  {
    id: "mow-tverskaya",
    city: "moscow",
    cityName: "Москва",
    title: "Trung Nguyen Legend - Тверская",
    address: "Тверская ул., 12, Москва",
    metro: "Тверская / Пушкинская",
    type: "cafe",
    typeLabel: "Флагманская кофейня & Бутик",
    rating: 4.8,
    hours: "08:00 – 22:00",
    distance: "1.2 км",
    phone: "+7 (495) 120-19-96",
    mapQuery: "Москва, Тверская улица 12",
    image: "/images/moscow_office_contact.jpg",
    isFlagship: true,
  },
  {
    id: "mow-1",
    city: "moscow",
    cityName: "Москва",
    title: "Официальное представительство & Шоурум Trung Nguyên Legend",
    address: "Пресненская наб., д. 12, ММДЦ «Москва-Сити», Башня Федерация (Восток), 18 этаж",
    metro: "Деловой Центр / Выставочная",
    type: "office",
    typeLabel: "Офис & Шоурум",
    rating: 4.9,
    hours: "Пн-Пт: 09:00 – 19:00 (MSK)",
    distance: "3.4 км",
    phone: "+7 (495) 120-19-96",
    mapQuery: "Москва, Пресненская набережная 12",
    image: "/images/moscow_office_contact.jpg",
    isFlagship: true,
  },
  {
    id: "mow-gum",
    city: "moscow",
    cityName: "Москва",
    title: "Trung Nguyen Legend - Красная площадь (ГУМ)",
    address: "Красная пл., 3, ГУМ, 1-я линия",
    metro: "Площадь Революции / Охотный Ряд",
    type: "cafe",
    typeLabel: "Культурный салон & Дегустация",
    rating: 4.9,
    hours: "10:00 – 22:00",
    distance: "0.5 км",
    phone: "+7 (495) 120-19-97",
    mapQuery: "Москва, Красная площадь 3",
    image: "/images/coffee_museum.jpg",
    isFlagship: true,
  },
  {
    id: "mow-2",
    city: "moscow",
    cityName: "Москва",
    title: "Супермаркет Перекрёсток (Флагманский гастроном)",
    address: "пл. Киевского Вокзала, д. 2, ТРЦ «Европейский», этаж -1",
    metro: "Киевская",
    type: "retail",
    typeLabel: "Сеть супермаркетов",
    rating: 4.6,
    hours: "Круглосуточно, без выходных",
    distance: "3.8 км",
    phone: "+7 (800) 200-95-55",
    mapQuery: "Москва, площадь Киевского Вокзала 2",
    image: "/images/prod_g7.jpg",
  },
  {
    id: "mow-3",
    city: "moscow",
    cityName: "Москва",
    title: "Азбука Вкуса (Премиальная сеть)",
    address: "Кутузовский проспект, д. 8",
    metro: "Киевская / Смоленская",
    type: "retail",
    typeLabel: "Сеть супермаркетов",
    rating: 4.7,
    hours: "Круглосуточно, без выходных",
    distance: "2.1 км",
    phone: "+7 (495) 504-34-87",
    mapQuery: "Москва, Кутузовский проспект 8",
    image: "/images/legend_luxury_still_life.jpg",
  },
  {
    id: "mow-4",
    city: "moscow",
    cityName: "Москва",
    title: "Культурное пространство & Корнер «Ханой-Москва»",
    address: "Ярославское шоссе, д. 146, корп. 1, ТЦ «Ханой-Москва», 1 этаж",
    metro: "ВДНХ",
    type: "cafe",
    typeLabel: "Кофейня & Корнер",
    rating: 4.8,
    hours: "Ежедневно: 10:00 – 21:00",
    distance: "ВДНХ",
    phone: "+7 (495) 989-19-96",
    mapQuery: "Москва, Ярославское шоссе 146к1",
    image: "/images/cafe_space_interior.jpg",
  },
  {
    id: "spb-1",
    city: "spb",
    cityName: "Санкт-Петербург",
    title: "Супермаркет Азбука Вкуса — ТК «Невский Центр»",
    address: "Невский проспект, д. 114–116, этаж -1",
    metro: "Площадь Восстания / Маяковская",
    type: "retail",
    typeLabel: "Сеть супермаркетов",
    rating: 4.7,
    hours: "Круглосуточно, без выходных",
    distance: "Центр СПб",
    phone: "+7 (812) 640-19-96",
    mapQuery: "Санкт-Петербург, Невский проспект 114",
    image: "/images/legend_luxury_still_life.jpg",
  },
  {
    id: "spb-2",
    city: "spb",
    cityName: "Санкт-Петербург",
    title: "Супермаркет Перекрёсток — ТРЦ «Галерея»",
    address: "Лиговский проспект, д. 30а, этаж -1",
    metro: "Площадь Восстания",
    type: "retail",
    typeLabel: "Сеть супермаркетов",
    rating: 4.6,
    hours: "Ежедневно: 08:00 – 23:00",
    distance: "ТРЦ Галерея",
    phone: "+7 (800) 200-95-55",
    mapQuery: "Санкт-Петербург, Лиговский проспект 30а",
    image: "/images/prod_creative.jpg",
  },
  {
    id: "kzn-1",
    city: "kazan",
    cityName: "Казань",
    title: "Гипермаркет Ашан — ТРЦ «Южный»",
    address: "проспект Победы, д. 91",
    metro: "Проспект Победы",
    type: "retail",
    typeLabel: "Сеть супермаркетов",
    rating: 4.6,
    hours: "Ежедневно: 08:30 – 22:30",
    distance: "Казань Южный",
    phone: "+7 (800) 700-58-00",
    mapQuery: "Казань, проспект Победы 91",
    image: "/images/prod_g7.jpg",
  },
  {
    id: "ekb-1",
    city: "ekb",
    cityName: "Екатеринбург",
    title: "Гипермаркет О’КЕЙ — ТРЦ «Радуга Парк»",
    address: "ул. Репина, д. 94",
    metro: "Геологическая / Площадь 1905 года",
    type: "retail",
    typeLabel: "Сеть супермаркетов",
    rating: 4.6,
    hours: "Ежедневно: 09:00 – 23:00",
    distance: "Екатеринбург",
    phone: "+7 (343) 310-19-96",
    mapQuery: "Екатеринбург, улица Репина 94",
    image: "/images/prod_legend.jpg",
  },
  {
    id: "nsk-1",
    city: "nsk",
    cityName: "Новосибирск",
    title: "Гипермаркет Лента — Октябрьский район",
    address: "ул. Большевистская, д. 131",
    metro: "Речной вокзал",
    type: "retail",
    typeLabel: "Сеть супермаркетов",
    rating: 4.6,
    hours: "Круглосуточно",
    distance: "Новосибирск",
    phone: "+7 (800) 700-41-11",
    mapQuery: "Новосибирск, улица Большевистская 131",
    image: "/images/g7_winter_warmth.jpg",
  },
  {
    id: "vvo-1",
    city: "vvo",
    cityName: "Владивосток",
    title: "Логистический хаб & Региональный склад Дальнего Востока",
    address: "ул. Калинина, д. 275, Терминал «Морской Бриз»",
    metro: "Морской вокзал",
    type: "hub",
    typeLabel: "Логистический хаб",
    rating: 4.8,
    hours: "Пн-Пт: 09:00 – 18:00 (VLAT / UTC+10)",
    distance: "Владивосток",
    phone: "+7 (423) 290-19-96",
    mapQuery: "Владивосток, улица Калинина 275",
    image: "/images/b2b_logistics.jpg",
  },
];

export default function ContactStoresView() {
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [activeStoreId, setActiveStoreId] = useState<string>("mow-tverskaya");
  const [mapEngine, setMapEngine] = useState<"google" | "yandex">("google");

  const filteredStores = storeLocations.filter((store) => {
    if (selectedCity !== "all" && store.city !== selectedCity) return false;
    return true;
  });

  const activeStore = storeLocations.find((s) => s.id === activeStoreId) || storeLocations[0];

  const handleNextStore = () => {
    const list = filteredStores.length > 0 ? filteredStores : storeLocations;
    const currentIndex = list.findIndex((s) => s.id === activeStore.id);
    const nextIndex = (currentIndex + 1) % list.length;
    setActiveStoreId(list[nextIndex].id);
  };

  const handlePrevStore = () => {
    const list = filteredStores.length > 0 ? filteredStores : storeLocations;
    const currentIndex = list.findIndex((s) => s.id === activeStore.id);
    const prevIndex = (currentIndex - 1 + list.length) % list.length;
    setActiveStoreId(list[prevIndex].id);
  };

  return (
    <div className="contact-stores-page bg-[#FAF8F5] text-[#1C1917] font-sans antialiased selection:bg-[#E8DFC9] selection:text-[#1C1917]">
      {/* ================= SECTION 1: HERO MOSCOW OFFICE (MẪU ẢNH 1 - S-CURVE SPLIT 100VH) ================= */}
      <section className="contact-m1-hero">
        {/* Background photo: Official Moscow HQ & Skycrapers on Right */}
        <div className="contact-m1-bg-wrap">
          <img
            src="/images/moscow_office_contact.jpg"
            alt="Официальное представительство Trung Nguyên Legend в Москве"
            className="contact-m1-bg-img"
          />
        </div>

        {/* Vector S-Curve Stencil Layer (Exact Mẫu 1 Organic S-Wave) */}
        <div className="contact-m1-stencil-layer">
          <svg
            viewBox="0 0 1600 900"
            preserveAspectRatio="none"
            className="contact-m1-svg"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Left Ivory Panel */}
            <path
              d="M 820 0 C 780 100, 710 280, 790 480 C 860 620, 880 760, 820 900 L 0 900 L 0 0 Z"
              fill="#FAF8F5"
            />
            {/* Hairline Bronze Contour */}
            <path
              d="M 820 0 C 780 100, 710 280, 790 480 C 860 620, 880 760, 820 900"
              fill="none"
              stroke="rgba(179, 142, 70, 0.3)"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Left Content Container */}
        <div className="contact-m1-container">
          <div className="contact-m1-content-left">
            <h1 className="contact-m1-title">
              Всегда на Связи <br />
              <em>в России</em>
            </h1>

            <p className="contact-m1-lead">
              Прямой диалог с официальным представительством Trung Nguyên Legend в Москве. Открытость, надёжность и чистая энергия созидания для каждого партнёра и ценителя вьетнамского кофе.
            </p>

            {/* Action Button */}
            <div className="contact-m1-actions">
              <a href="#yandex-map" className="contact-m1-btn">
                <span>Интерактивная карта и точки продаж</span>
                <span className="contact-m1-btn-arrow">↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: CÁC ĐẠI LỘ ĐỐI THOẠI (MINIMALIST SPLIT: CONCISE INFO LEFT, PURE SHARP IMAGES RIGHT) ================= */}
      <section className="py-14 sm:py-18 lg:py-20 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ============= LEFT COLUMN: CONCISE ESSENTIAL INFORMATION ============= */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            {/* Header Block */}
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#181512] tracking-tight leading-tight mb-2">
                Три Вектора Взаимодействия
              </h2>
              <div className="flex items-center gap-2 text-xs text-[#5A524A] mt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                <span>Единое окно: ответ до 2 часов (Пн–Пт 09:00 – 18:00 МСК)</span>
              </div>
            </div>

            {/* 3 Channels - Transparent Background & Dashed Line Separator */}
            <div className="space-y-4">
              {/* Channel 1: B2B */}
              <div className="pb-4 border-b border-dashed border-[#D5CEC4]">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold text-[#9B783E]">1.</span>
                  <h3 className="text-base sm:text-lg font-semibold text-[#181512]">
                    Опт, Дистрибуция &amp; B2B
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#5A524A]">
                  <a href="tel:+78005551996" className="font-semibold text-[#181512] hover:text-[#9B783E] transition-colors">
                    +7 (800) 555-19-96
                  </a>
                  <span className="text-[#D5CEC4]">·</span>
                  <a href="mailto:b2b@trung-nguyen.ru" className="hover:text-[#9B783E] transition-colors">
                    b2b@trung-nguyen.ru
                  </a>
                </div>
              </div>

              {/* Channel 2: Retail & Care */}
              <div className="pb-4 border-b border-dashed border-[#D5CEC4]">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold text-[#9B783E]">2.</span>
                  <h3 className="text-base sm:text-lg font-semibold text-[#181512]">
                    Клиентский Сервис &amp; Розница
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#5A524A]">
                  <a href="tel:+74951201996" className="font-semibold text-[#181512] hover:text-[#9B783E] transition-colors">
                    +7 (495) 120-19-96
                  </a>
                  <span className="text-[#D5CEC4]">·</span>
                  <a href="mailto:care@trungnguyenlegend.ru" className="hover:text-[#9B783E] transition-colors">
                    care@trungnguyenlegend.ru
                  </a>
                </div>
              </div>

              {/* Channel 3: Media & Franchise */}
              <div className="pb-4 border-b border-dashed border-[#D5CEC4]">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold text-[#9B783E]">3.</span>
                  <h3 className="text-base sm:text-lg font-semibold text-[#181512]">
                    Пресс-Офис &amp; Франчайзинг
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#5A524A]">
                  <a href="mailto:media@trungnguyenlegend.ru" className="font-semibold text-[#181512] hover:text-[#9B783E] transition-colors">
                    media@trungnguyenlegend.ru
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ============= RIGHT COLUMN: PURE SHARP IMAGES (1 TOP, 2 BOTTOM - NO TEXT, NO EFFECT, NO ROUNDED CORNERS) ============= */}
          <div className="lg:col-span-6 flex flex-col gap-3 sm:gap-4 sticky lg:top-24">
            {/* Top Image (1 ảnh trên: Sharp, Clean, No Text, No Effects) */}
            <div className="w-full h-56 sm:h-64 lg:h-72 overflow-hidden border border-[#E5DFD5] bg-[#F4EFEA]">
              <img
                src="/images/b2b_logistics.jpg"
                alt="Склады и логистика Trung Nguyên Legend в России"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom 2 Images (2 ảnh dưới: Sharp, Clean, No Text, No Effects) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Bottom-Left Image */}
              <div className="w-full h-44 sm:h-52 overflow-hidden border border-[#E5DFD5] bg-[#F4EFEA]">
                <img
                  src="/images/ritual_phin_brewing.jpg"
                  alt="Ритуал традиционного заваривания кофе"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom-Right Image */}
              <div className="w-full h-44 sm:h-52 overflow-hidden border border-[#E5DFD5] bg-[#F4EFEA]">
                <img
                  src="/images/cafe_space_interior.jpg"
                  alt="Пространство Trung Nguyên E-Coffee"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ================= SECTION 3: REAL YANDEX MAP WITH MODEL 1 FLOATING INFO CARD ================= */}
      <section id="yandex-map" className="py-6 sm:py-10 px-4 sm:px-8 lg:px-14 bg-[#FAF8F5] border-y border-[#E5DFD5]">
        <div className="max-w-[1440px] mx-auto w-full">
          {/* Main Panoramic Frame: Real Live Yandex Map in the Background */}
          <div className="relative w-full h-[580px] sm:h-[660px] lg:h-[720px] rounded-3xl overflow-hidden border border-[#DCD5C9] shadow-[0_20px_50px_rgba(28,25,23,0.12)] bg-[#EBE5DC]">
            
            {/* 1. BACKGROUND: Real Live Interactive Yandex Map */}
            <iframe
              key={`ymap-${activeStore.id}`}
              title={`Яндекс Карты: ${activeStore.title}`}
              src={`https://yandex.ru/map-widget/v1/?text=${encodeURIComponent(activeStore.mapQuery)}&z=15&l=map`}
              className="absolute inset-0 w-full h-full border-0 pointer-events-auto"
              allowFullScreen
              loading="lazy"
            />

            {/* 2. BOTTOM-LEFT FLOATING STORE CARD (HARMONIOUS MODEL 1 DESIGN - SOFT & NATURAL) */}
            <div className="absolute bottom-5 left-5 z-20 max-w-md w-[calc(100%-2.5rem)] sm:w-[420px] bg-white/95 backdrop-blur-xl border border-[#E5DFD5] rounded-2xl shadow-[0_20px_45px_rgba(28,25,23,0.14)] p-4 sm:p-5 text-[#181512] transition-all duration-300 pointer-events-auto">
              <div className="mb-2">
                <h4 className="text-base sm:text-lg font-semibold text-[#181512] tracking-tight leading-snug">
                  {activeStore.title}
                </h4>
                <p className="text-xs text-[#5A524A] font-normal mt-0.5">
                  {activeStore.address}
                </p>
              </div>

              {/* Status & Rating Bar - Soft, elegant, and harmonious */}
              <div className="flex items-center gap-2 text-xs text-[#5A524A] my-2.5 flex-wrap">
                <div className="flex items-center gap-1 text-[#9B783E] font-bold">
                  <span>{activeStore.rating || 4.8}</span>
                  <span className="tracking-tighter text-[#C5A059]">★★★★★</span>
                </div>
                <span className="text-[#D5CEC4]">·</span>
                <span className="text-[#2C2621] font-medium">{activeStore.hours}</span>
                <span className="text-[#D5CEC4]">·</span>
                <span className="text-[#5A524A]">{activeStore.distance || "Центр"}</span>
                <span className="text-[#D5CEC4]">·</span>
                <span className="text-[#786E64] text-[11px]">м. {activeStore.metro}</span>
              </div>

              {/* Action Buttons Row - Easy on the eyes, warm, balanced */}
              <div className="flex items-center gap-2.5 pt-2.5 border-t border-[#EAE4DC]">
                {/* Route Direction Button via Yandex Maps - Single line compact */}
                <a
                  href={`https://yandex.ru/maps/?rtext=~${encodeURIComponent(activeStore.mapQuery)}&rtt=auto`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#F3C044] hover:bg-[#E5B338] active:scale-95 text-[#181512] font-semibold text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 transition-all shadow-xs whitespace-nowrap"
                >
                  <svg className="w-3.5 h-3.5 text-[#181512] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                  </svg>
                  <span>Маршрут</span>
                </a>

                {/* Call Button */}
                <a
                  href={`tel:${activeStore.phone.replace(/[^0-9+]/g, '')}`}
                  className="py-2.5 px-4 rounded-xl bg-[#F4EFEA] hover:bg-[#EAE2D7] active:scale-95 text-[#2C2621] font-medium text-xs sm:text-sm border border-[#E0D8CD] flex items-center justify-center gap-2 transition-all"
                >
                  <svg className="w-3.5 h-3.5 text-[#5A524A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span>Позвонить</span>
                </a>

                {/* Prev / Next Store Navigation Arrows */}
                <div className="flex items-center gap-1 pl-1">
                  <button
                    onClick={handlePrevStore}
                    aria-label="Предыдущая локация"
                    className="w-8 h-8 rounded-full bg-[#F4EFEA] hover:bg-[#EAE2D7] active:scale-95 text-[#5A524A] hover:text-[#181512] border border-[#E0D8CD] flex items-center justify-center text-xs transition-colors"
                  >
                    ‹
                  </button>
                  <button
                    onClick={handleNextStore}
                    aria-label="Следующая локация"
                    className="w-8 h-8 rounded-full bg-[#F4EFEA] hover:bg-[#EAE2D7] active:scale-95 text-[#5A524A] hover:text-[#181512] border border-[#E0D8CD] flex items-center justify-center text-xs transition-colors"
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: RUSSIAN DIGITAL CULTURAL GAZETTE (SPOTLIGHTING VK, TELEGRAM & WHATSAPP) ================= */}
      <section className="w-full border-b border-[#D8D0C5]">
        <div className="pt-12 sm:pt-16 pb-10 sm:pb-12 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto flex flex-col justify-center">
          {/* Curated 1-Line Minimalist Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-8 border-b border-[#EAE4DC]">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#9B783E]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#9B783E] font-bold">
                ОФИЦИАЛЬНЫЕ МЕССЕНДЖЕРЫ &amp; МЕДИАКАНАЛЫ В РОССИИ
              </span>
            </div>
            <span className="text-xs text-[#8C8277]">
              VKontakte · Telegram · WhatsApp
            </span>
          </div>

          {/* 3-Column Editorial Grid: 3 Core Official TNL Channels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* CARD 1: Telegram Official Channel */}
            <a
              href="https://t.me/TrungNguyenLegend_RU"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl border border-[#E5DFD5] overflow-hidden flex flex-col justify-between min-h-[380px] sm:min-h-[420px] shadow-sm hover:border-[#9B783E]/50 transition-colors"
            >
              {/* Top Half: Photo */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#F5F2EB]">
                <img
                  src="/images/ritual_phin_brewing.jpg"
                  alt="Telegram канал Trung Nguyên Legend"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Bottom Half: Minimalist Compact Editorial Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <h4 className="text-lg sm:text-xl font-medium text-[#1A1715] mb-1 font-serif sm:font-sans">
                    Telegram · @TrungNguyenLegend_RU
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5A524A] font-light leading-relaxed">
                    Прямая связь с отделом развития B2B, оперативные оптовые прайс-листы и анонсы поставок.
                  </p>
                </div>

                {/* Bottom Action Row with Telegram Icon */}
                <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#F0EBE1]">
                  <span className="text-xs font-semibold text-[#1A1715] group-hover:text-[#9B783E] transition-colors flex items-center gap-1.5">
                    НАПИСАТЬ В TELEGRAM —
                  </span>
                  <svg className="w-5 h-5 fill-current text-[#8C8277] group-hover:text-[#2AABEE] transition-colors" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                </div>
              </div>
            </a>

            {/* CARD 2: WhatsApp Business Contact */}
            <a
              href="https://wa.me/74951201996"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl border border-[#E5DFD5] overflow-hidden flex flex-col justify-between min-h-[380px] sm:min-h-[420px] shadow-sm hover:border-[#9B783E]/50 transition-colors"
            >
              {/* Top Half: Photo */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#F5F2EB]">
                <img
                  src="/images/b2b_logistics.jpg"
                  alt="WhatsApp Business Trung Nguyên Legend"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Bottom Half: Minimalist Compact Editorial Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <h4 className="text-lg sm:text-xl font-medium text-[#1A1715] mb-1 font-serif sm:font-sans">
                    WhatsApp · +7 (495) 120-19-96
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5A524A] font-light leading-relaxed">
                    Мгновенный обмен документами, счетами и коммерческими предложениями в WhatsApp Business.
                  </p>
                </div>

                {/* Bottom Action Row with WhatsApp Icon */}
                <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#F0EBE1]">
                  <span className="text-xs font-semibold text-[#1A1715] group-hover:text-[#9B783E] transition-colors flex items-center gap-1.5">
                    ОТКРЫТЬ В WHATSAPP —
                  </span>
                  <svg className="w-5 h-5 fill-current text-[#8C8277] group-hover:text-[#25D366] transition-colors" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.16 8.16 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.164 8.164 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.12.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z"/>
                  </svg>
                </div>
              </div>
            </a>

            {/* CARD 3: VKontakte Official Community */}
            <a
              href="https://vk.com/trungnguyenlegend_ru"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl border border-[#E5DFD5] overflow-hidden flex flex-col justify-between min-h-[380px] sm:min-h-[420px] shadow-sm hover:border-[#9B783E]/50 transition-colors"
            >
              {/* Top Half: Photo */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#F5F2EB]">
                <img
                  src="/images/journey_2022_shanghai.jpg"
                  alt="VKontakte Trung Nguyên Legend"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Bottom Half: Minimalist Compact Editorial Content */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <h4 className="text-lg sm:text-xl font-medium text-[#1A1715] mb-1 font-serif sm:font-sans">
                    VKontakte · Клуб Ценителей
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5A524A] font-light leading-relaxed">
                    Рецепты экстракции через вьетнамский фин, микролоты Buon Ma Thuot и дегустации в Москве.
                  </p>
                </div>

                {/* Bottom Action Row with VK Icon */}
                <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#F0EBE1]">
                  <span className="text-xs font-semibold text-[#1A1715] group-hover:text-[#9B783E] transition-colors flex items-center gap-1.5">
                    ВСТУПИТЬ В СООБЩЕСТВО —
                  </span>
                  <svg className="w-5 h-5 fill-current text-[#8C8277] group-hover:text-[#0077FF] transition-colors" viewBox="0 0 24 24">
                    <path d="M15.07 2H8.93C4.54 2 2 4.54 2 8.93v6.14C2 19.46 4.54 22 8.93 22h6.14c4.39 0 6.93-2.54 6.93-6.93V8.93C22 4.54 19.46 2 15.07 2zm3.38 13.91h-1.46c-.55 0-.72-.44-1.71-1.43-.87-.85-1.25-.96-1.47-.96-.3 0-.39.09-.39.52v1.31c0 .35-.11.56-1.05.56-1.55 0-3.27-.94-4.48-2.69-1.84-2.61-2.35-4.57-2.35-4.97 0-.22.09-.43.52-.43h1.46c.39 0 .54.18.69.6 1.05 3.03 2.81 5.69 3.52 5.69.26 0 .39-.12.39-.78V12.1c-.06-1.05-.62-1.14-.62-1.51 0-.17.15-.35.39-.35h2.29c.33 0 .44.17.44.57v3.08c0 .33.15.44.24.44.2 0 .37-.11.74-.48 1.13-1.27 1.94-3.25 1.94-3.25.11-.24.33-.45.72-.45h1.46c.44 0 .54.22.44.57-.17.8-1.87 3.2-1.87 3.2-.18.3-.24.44 0 .76.17.24.74.72 1.11 1.16.69.78 1.22 1.44 1.36 1.89.15.43-.09.65-.53.65z" />
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: EXACT ORIGINAL B2B FORM ================= */}
      <B2BFormSection
        id="quick-form"
        className="!pt-10 sm:!pt-12 !pb-14 sm:!pb-16"
        eyebrow=""
        title="Свяжитесь с представительством в Москве"
        desc="Прямой диалог с официальной командой Trung Nguyên Legend в России. Консультации, оптовые запросы и информационная поддержка."
        buttonText="ОТПРАВИТЬ ОБРАЩЕНИЕ (ОТВЕТ 2 ЧАСА) ↗"
        badges={[]}
        bgImage="/images/moscow_office_contact.jpg"
      />
    </div>
  );
}
