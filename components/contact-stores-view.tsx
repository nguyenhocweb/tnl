"use client";

import React, { useState } from "react";
import B2BFormSection from "./b2b-form-section";

const storeLocations = [
  {
    id: "mow-1",
    city: "moscow",
    cityName: "Москва",
    title: "Флагманский шоурум & Офис Trung Nguyên Legend",
    address: "г. Москва, Пресненская наб., д. 12, Деловой комплекс «Федерация»",
    metro: "Деловой Центр / Выставочная",
    type: "office",
    typeLabel: "Офис & Шоурум",
    hours: "Пн-Пт: 09:00 – 19:00",
    phone: "+7 (495) 120-19-96",
  },
  {
    id: "mow-2",
    city: "moscow",
    cityName: "Москва",
    title: "Супермаркет Перекрёсток (Флагманский)",
    address: "г. Москва, пл. Киевского Вокзала, д. 2, ТРЦ «Европейский», -1 этаж",
    metro: "Киевская",
    type: "retail",
    typeLabel: "Сеть супермаркетов",
    hours: "Ежедневно: круглосуточно",
    phone: "+7 (800) 200-95-55",
  },
  {
    id: "mow-3",
    city: "moscow",
    cityName: "Москва",
    title: "Кофейня & Корнер «Ханой-Москва»",
    address: "г. Москва, Ярославское шоссе, д. 146, корп. 1, ТЦ «Ханой-Москва»",
    metro: "ВДНХ",
    type: "cafe",
    typeLabel: "Кофейня & Корнер",
    hours: "Ежедневно: 10:00 – 21:00",
    phone: "+7 (495) 989-19-96",
  },
  {
    id: "spb-1",
    city: "spb",
    cityName: "Санкт-Петербург",
    title: "Супермаркет Азбука Вкуса",
    address: "г. Санкт-Петербург, Невский проспект, д. 114–116, ТК «Невский Центр»",
    metro: "Площадь Восстания",
    type: "retail",
    typeLabel: "Сеть супермаркетов",
    hours: "Ежедневно: круглосуточно",
    phone: "+7 (812) 640-19-96",
  },
  {
    id: "kzn-1",
    city: "kazan",
    cityName: "Казань",
    title: "Гипермаркет Ашан",
    address: "г. Казань, проспект Победы, д. 91, ТРЦ «Южный»",
    metro: "Проспект Победы",
    type: "retail",
    typeLabel: "Сеть супермаркетов",
    hours: "Ежедневно: 08:30 – 22:30",
    phone: "+7 (800) 700-58-00",
  },
  {
    id: "ekb-1",
    city: "ekb",
    cityName: "Екатеринбург",
    title: "Гипермаркет О’КЕЙ",
    address: "г. Екатеринбург, ул. Репина, д. 94, ТРЦ «Радуга Парк»",
    metro: "Геологическая",
    type: "retail",
    typeLabel: "Сеть супермаркетов",
    hours: "Ежедневно: 09:00 – 23:00",
    phone: "+7 (343) 310-19-96",
  },
  {
    id: "vvo-1",
    city: "vvo",
    cityName: "Владивосток",
    title: "Региональный склад & Дистрибьюторский хаб",
    address: "г. Владивосток, ул. Калинина, д. 275, Логистический терминал",
    metro: "Морской вокзал",
    type: "office",
    typeLabel: "Логистический хаб",
    hours: "Пн-Пт: 09:00 – 18:00 (VLAT)",
    phone: "+7 (423) 290-19-96",
  },
];

export default function ContactStoresView() {
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [quickContactSent, setQuickContactSent] = useState(false);

  const filteredStores = storeLocations.filter((store) => {
    if (selectedCity !== "all" && store.city !== selectedCity) return false;
    if (selectedType !== "all" && store.type !== selectedType) return false;
    return true;
  });

  return (
    <div className="contact-stores-page">
      {/* ================= SECTION 1: HERO MOSCOW OFFICE (100VH) ================= */}
      <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-end pb-16 px-6 md:px-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.98] transition-transform duration-1000 scale-105 hover:scale-100"
          style={{ backgroundImage: `url('/images/moscow_office_contact.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="relative z-10 max-w-4xl">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#B38E46] text-white text-[11px] font-bold tracking-widest uppercase shadow-xl">
            ПРЕДСТАВИТЕЛЬСТВО TRUNG NGUYÊN LEGEND В РОССИИ
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white tracking-wide font-normal drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] leading-tight mb-3">
            Всегда на Связи в России
          </h1>
          <p className="text-base md:text-xl text-[#F2EBD9] font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] mb-8">
            Открытость, надёжность и безупречный сервис.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#yandex-map"
              className="px-7 py-3.5 rounded-2xl bg-[#B38E46] hover:bg-[#967434] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-xl"
            >
              Точки продаж на карте ↘
            </a>
            <a
              href="#quick-form"
              className="px-7 py-3.5 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 text-xs uppercase tracking-wider font-semibold transition-all"
            >
              Написать нам (ответ 2ч)
            </a>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: 3 DEDICATED CONTACT CHANNELS ================= */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#B38E46] font-bold">
            ПРЯМЫЕ ЛИНИИ СВЯЗИ
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mt-2 mb-3">
            Контакты подразделений в РФ
          </h2>
          <p className="text-sm text-[#7A7269]">
            Быстрая маршрутизация обращений без ожидания и лишних переключений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Channel 1 */}
          <div className="bg-white p-8 rounded-3xl border border-[#E8E2D7] shadow-sm hover:border-[#B38E46] transition-all">
            <span className="text-3xl mb-4 block">☕</span>
            <span className="text-[10px] uppercase font-bold text-[#B38E46] block mb-1">ДЛЯ ПОКУПАТЕЛЕЙ</span>
            <h3 className="text-xl font-serif text-[#181512] mb-3 font-semibold">Служба заботы о клиентах</h3>
            <p className="text-xs text-[#5C5248] leading-relaxed mb-6">
              Консультации по ассортименту, способам заваривания, заказам на маркетплейсах и подлинности продукции.
            </p>
            <div className="pt-4 border-t border-[#F0EBE1] space-y-2 text-xs">
              <div>
                <span className="text-[#8C827A] block">Горячая линия:</span>
                <strong className="text-sm text-[#181512]">+7 (495) 120-19-96</strong>
              </div>
              <div>
                <span className="text-[#8C827A] block">Электронная почта:</span>
                <a href="mailto:hello@trungnguyenlegend.ru" className="text-[#B38E46] font-medium hover:underline">
                  hello@trungnguyenlegend.ru
                </a>
              </div>
            </div>
          </div>

          {/* Channel 2 */}
          <div className="bg-white p-8 rounded-3xl border border-[#E8E2D7] shadow-sm hover:border-[#B38E46] transition-all">
            <span className="text-3xl mb-4 block">💼</span>
            <span className="text-[10px] uppercase font-bold text-[#B38E46] block mb-1">ОПТ И HORECA</span>
            <h3 className="text-xl font-serif text-[#181512] mb-3 font-semibold">Коммерческий отдел B2B</h3>
            <p className="text-xs text-[#5C5248] leading-relaxed mb-6">
              Вопросы дистрибуции, поставок в торговые сети, оптовых цен, работы по ЭДО и снабжения заведений.
            </p>
            <div className="pt-4 border-t border-[#F0EBE1] space-y-2 text-xs">
              <div>
                <span className="text-[#8C827A] block">Бесплатный звонок по РФ:</span>
                <strong className="text-sm text-[#181512]">+7 (800) 555-19-96</strong>
              </div>
              <div>
                <span className="text-[#8C827A] block">Электронная почта:</span>
                <a href="mailto:partners@trungnguyenlegend.ru" className="text-[#B38E46] font-medium hover:underline">
                  partners@trungnguyenlegend.ru
                </a>
              </div>
            </div>
          </div>

          {/* Channel 3 */}
          <div className="bg-white p-8 rounded-3xl border border-[#E8E2D7] shadow-sm hover:border-[#B38E46] transition-all">
            <span className="text-3xl mb-4 block">📰</span>
            <span className="text-[10px] uppercase font-bold text-[#B38E46] block mb-1">МЕДИА И КУЛЬТУРА</span>
            <h3 className="text-xl font-serif text-[#181512] mb-3 font-semibold">Пресс-служба и PR</h3>
            <p className="text-xs text-[#5C5248] leading-relaxed mb-6">
              Запросы на интервью, аккредитация на выставки, материалы для СМИ, блогеров и культурных проектов.
            </p>
            <div className="pt-4 border-t border-[#F0EBE1] space-y-2 text-xs">
              <div>
                <span className="text-[#8C827A] block">Пресс-кит и фотобанк:</span>
                <strong className="text-sm text-[#181512]">Press Kit 2026</strong>
              </div>
              <div>
                <span className="text-[#8C827A] block">Электронная почта:</span>
                <a href="mailto:media@trungnguyenlegend.ru" className="text-[#B38E46] font-medium hover:underline">
                  media@trungnguyenlegend.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: YANDEX MAPS STORE FINDER ================= */}
      <section id="yandex-map" className="py-24 px-6 md:px-16 bg-[#FAF7F2] border-y border-[#E8E2D7]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B38E46] font-bold">
                ИНТЕРАКТИВНЫЙ НАВИГАТОР
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mt-2">
                Где купить Trung Nguyên Legend в России
              </h2>
            </div>

            {/* City Selector */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "Все города" },
                { id: "moscow", label: "Москва" },
                { id: "spb", label: "СПб" },
                { id: "kazan", label: "Казань" },
                { id: "ekb", label: "Екатеринбург" },
                { id: "vvo", label: "Владивосток" },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setSelectedCity(btn.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedCity === btn.id
                      ? "bg-[#181512] text-white shadow"
                      : "bg-white text-[#4A4238] border border-[#E8E2D7] hover:border-[#181512]"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Store Listing Column */}
            <div className="lg:col-span-1 space-y-4 max-h-[560px] overflow-y-auto pr-2">
              {filteredStores.map((store) => (
                <div
                  key={store.id}
                  className="bg-white p-6 rounded-2xl border border-[#E8E2D7] hover:border-[#B38E46] shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase font-bold text-[#B38E46]">
                      {store.cityName} · {store.typeLabel}
                    </span>
                    <span className="text-xs text-[#7A7269]">{store.hours}</span>
                  </div>
                  <h4 className="font-serif text-base text-[#181512] mb-1 font-semibold">{store.title}</h4>
                  <p className="text-xs text-[#5C5248] leading-relaxed mb-3">{store.address}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-[#F0EBE1] text-xs">
                    <span className="text-[#8C827A]">Тел: {store.phone}</span>
                    <a
                      href={`https://yandex.ru/maps/?text=${encodeURIComponent(store.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B38E46] font-semibold hover:underline"
                    >
                      Яндекс Карты ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Yandex Maps Container */}
            <div className="lg:col-span-2 min-h-[420px] bg-white rounded-3xl border border-[#E8E2D7] overflow-hidden shadow-md relative flex flex-col items-center justify-center p-8 text-center bg-[radial-gradient(#E8E2D7_1px,transparent_1px)] [background-size:20px_20px]">
              <div className="w-16 h-16 rounded-full bg-[#B38E46]/10 text-[#B38E46] flex items-center justify-center text-3xl font-bold mb-4 border border-[#B38E46]/30 shadow-sm">
                Y
              </div>
              <h3 className="text-2xl font-serif text-[#181512] mb-2 font-semibold">
                Интерактивная карта Яндекс Карт
              </h3>
              <p className="text-xs text-[#7A7269] max-w-md mx-auto mb-6">
                Все официальные торговые точки, супермаркеты партнёров и пункты выдачи интернет-заказов синхронизированы с геолокацией.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="https://yandex.ru/maps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-[#FC3F1D] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#D93416] transition-colors shadow flex items-center gap-2"
                >
                  <span>Открыть в Яндекс Картах</span> ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: EXACT IMAGE 4 FORM ================= */}
      <B2BFormSection
        id="quick-form"
        eyebrow="ОПЕРАТИВНАЯ СВЯЗЬ"
        title="Свяжитесь с представительством в Москве"
        desc="Прямой диалог с официальной командой Trung Nguyên Legend в России. Консультации, оптовые запросы и информационная поддержка."
        buttonText="ОТПРАВИТЬ ОБРАЩЕНИЕ (ОТВЕТ 2 ЧАСА) ↗"
        badges={["Москва UTC+3", "Ответ 2 часа", "Все каналы"]}
        bgImage="/images/moscow_office_contact.jpg"
      />
    </div>
  );
}
