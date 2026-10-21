"use client";

import React, { useState } from "react";
import B2BFormSection from "./b2b-form-section";

const eventsList = [
  {
    id: "worldfood-2026",
    date: "15–18 СЕНТЯБРЯ 2026",
    title: "Триумф культуры Trung Nguyên Legend на WorldFood Moscow",
    desc: "Более 10 000 гостей стенда познакомились с тремя кофейными цивилизациями и ритуалом медитативного пролива через традиционный фин.",
    image: "/images/coffee_museum.jpg",
    tag: "ВЫСТАВКА В МОСКВЕ",
  },
  {
    id: "masterclass-spb",
    date: "28 ОКТЯБРЯ 2026",
    title: "Мастер-класс: «Осознанность и энергия в чашке кофе» в Санкт-Петербурге",
    desc: "Практический семинар для предпринимателей и творческих лидеров о влиянии ритма заваривания на продуктивность и ясность мысли.",
    image: "/images/ritual_phin_brewing.jpg",
    tag: "МАСТЕР-КЛАСС",
  },
  {
    id: "ecoffee-expansion",
    date: "НОВОЕ НАПРАВЛЕНИЕ",
    title: "Запуск франчайзинговой программы E-Coffee для российских городов",
    desc: "Компактный формат с быстрой окупаемостью для аэропортов, бизнес-центров и прогулочных набережных с поддержкой 360° от управляющей компании.",
    image: "/images/cafe_space_interior.jpg",
    tag: "ФРАНШИЗА",
  },
];

export default function NewsSpacesView() {
  const [franchiseModalOpen, setFranchiseModalOpen] = useState(false);
  const [franchiseSubmitted, setFranchiseSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  return (
    <div className="news-spaces-page">
      {/* ================= SECTION 1: HERO ARCHITECTURAL SANCTUARY (MẪU ẢNH 1 - ORGANIC CURVED SPLIT 100VH) ================= */}
      <section className="spaces-m1-hero">
        {/* Left Photo Layer: Grand Cathedral Vault Library & Reader */}
        <div className="spaces-m1-bg-wrap">
          <img
            src="/images/cafe_space_interior.jpg"
            alt="Пространство Осознанности Trung Nguyên Legend"
            className="spaces-m1-bg-img"
          />
        </div>

        {/* Vector Organic Wave Stencil Layer */}
        <div className="spaces-m1-stencil-layer">
          <svg
            viewBox="0 0 1600 900"
            preserveAspectRatio="none"
            className="spaces-m1-svg"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* White Organic Curved Panel */}
            <path
              d="M 980 0 C 820 150, 750 310, 720 480 C 690 640, 610 780, 520 900 L 1600 900 L 1600 0 Z"
              fill="#FAF8F5"
            />
            {/* Elegant Hairline Accent along the wave */}
            <path
              d="M 980 0 C 820 150, 750 310, 720 480 C 690 640, 610 780, 520 900"
              fill="none"
              stroke="rgba(179, 142, 70, 0.3)"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Content Container (Right Side) */}
        <div className="spaces-m1-container">
          <div className="spaces-m1-content-right">
            <h1 className="spaces-m1-title">
              Пространство Осознанности
            </h1>

            <p className="spaces-m1-lead">
              Место силы для творческих и пробуждённых людей — гармония природной архитектуры, книг, меняющих жизнь, и чистой энергии кофе.
            </p>

            {/* Action Button */}
            <div className="spaces-m1-actions">
              <a href="#concept-split" className="spaces-m1-btn">
                <span>Концепции пространств</span>
                <span className="spaces-m1-btn-arrow">↘</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: 50/50 CONCEPT SPLIT SHOWCASE ================= */}
      <section id="concept-split" className="w-full border-b border-[#E8E2D7]">
        <div className="pt-12 sm:pt-16 pb-10 sm:pb-12 px-6 md:px-16 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mb-3">
            Два формата кофейного гостеприимства
          </h2>
          <p className="text-sm text-[#7A7269]">
            От масштабного флагманского святилища культуры до технологичного экспресс-пространства
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Format 1: Legend Cafe */}
          <div className="bg-white rounded-3xl overflow-hidden border border-[#E8E2D7] shadow-lg flex flex-col group hover:border-[#B38E46] transition-all">
            <div className="h-80 relative overflow-hidden bg-[#181512]">
              <img
                src="/images/cafe_space_interior.jpg"
                alt="Trung Nguyen Legend Cafe"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif text-[#181512] mb-3">Trung Nguyên Legend Café</h3>
                <p className="text-xs text-[#5C5248] leading-relaxed mb-6">
                  Флагманские пространства в стиле природного минимализма: сводчатые потолки из светлого ясеня, гигантские библиотеки книг, меняющих жизнь, дегустационные зоны трёх кофейных цивилизаций и неспешная атмосфера для глубоких размышлений.
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs text-[#7A7269] mb-6">
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#EDE6DC]">
                    <strong>Локация:</strong> Исторические центры, премиальные ТЦ
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#EDE6DC]">
                    <strong>Сервис:</strong> Ритуал подачи в финах, чайная церемония
                  </div>
                </div>
              </div>

              <button
                onClick={() => setFranchiseModalOpen(true)}
                className="w-full py-3 rounded-xl bg-[#181512] hover:bg-[#B38E46] text-white text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                Запросить инвестиционный меморандум ↗
              </button>
            </div>
          </div>

          {/* Format 2: E-Coffee */}
          <div className="bg-white rounded-3xl overflow-hidden border border-[#E8E2D7] shadow-lg flex flex-col group hover:border-[#B38E46] transition-all">
            <div className="h-80 relative overflow-hidden bg-[#181512]">
              <img
                src="/images/journey_1998_first_cafe.jpg"
                alt="Trung Nguyen E-Coffee"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif text-[#181512] mb-3">Trung Nguyên E-Coffee</h3>
                <p className="text-xs text-[#5C5248] leading-relaxed mb-6">
                  Умный модульный формат «Coffee To Go & Retail»: сверхскоростная выдача напитков, интегрированная полка продажи розничных пачек G7 и зёрен, низкий порог входа для молодых предпринимателей и быстрая окупаемость в крупных мегаполисах.
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs text-[#7A7269] mb-6">
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#EDE6DC]">
                    <strong>Локация:</strong> БЦ, пересадочные узлы, ВУЗы
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#EDE6DC]">
                    <strong>Окупаемость:</strong> От 10 до 16 месяцев
                  </div>
                </div>
              </div>

              <button
                onClick={() => setFranchiseModalOpen(true)}
                className="w-full py-3 rounded-xl bg-[#B38E46] hover:bg-[#967434] text-white text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                Рассчитать франшизу E-Coffee ↗
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* ================= SECTION 4: EDITORIAL EVENTS & EXHIBITIONS ================= */}
      <section className="pt-10 sm:pt-14 pb-12 sm:pb-14 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mb-3">
            События, выставки и новости
          </h2>
          <p className="text-sm text-[#7A7269]">
            Хроника ключевых мероприятий и участия бренда в культурной жизни России
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventsList.map((evt) => (
            <article
              key={evt.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E8E2D7] hover:border-[#B38E46] hover:shadow-xl transition-all flex flex-col"
            >
              <div className="h-56 relative overflow-hidden bg-[#FAF7F2]">
                <img
                  src={evt.image}
                  alt={evt.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif text-[#181512] mb-3 group-hover:text-[#B38E46] transition-colors leading-snug">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-[#5C5248] leading-relaxed mb-4">{evt.desc}</p>
                </div>
                <span className="text-xs font-semibold text-[#181512] group-hover:text-[#B38E46] flex items-center gap-1 transition-colors">
                  Подробнее <span>→</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= SECTION 5: ZEN NEWSLETTER BAR ================= */}
      <section className="py-12 sm:py-16 px-6 md:px-16 bg-[#181512] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-[#D4B26F] font-bold block mb-2">
            ВЕСТНИК ОСОЗНАННОСТИ
          </span>
          <h2 className="text-3xl md:text-4xl font-serif mb-3">
            Подпишитесь на кофейный альманах
          </h2>
          <p className="text-xs text-[#BFB7AA] mb-8">
            Один раз в месяц: секреты заваривания, анонсы мастер-классов в Москве и вдохновляющие статьи о философии Дзэн.
          </p>

          {!newsletterSubscribed ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setNewsletterSubscribed(true);
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                required
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Ваш рабочий e-mail..."
                className="flex-1 px-5 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs outline-none focus:border-[#D4B26F]"
              />
              <button
                type="submit"
                className="px-8 py-3.5 rounded-2xl bg-[#B38E46] hover:bg-[#C9A257] text-white text-xs uppercase tracking-wider font-semibold transition-colors shrink-0"
              >
                Подписаться
              </button>
            </form>
          ) : (
            <p className="text-emerald-400 text-sm font-medium">
              Спасибо за подписку! Мы отправили приветственный выпуск альманаха на вашу почту.
            </p>
          )}
        </div>
      </section>

      {/* ================= SECTION 5: EXACT IMAGE 4 FRANCHISE FORM ================= */}
      <B2BFormSection
        id="franchise-form"
        className="!pt-10 sm:!pt-12 !pb-14 sm:!pb-16"
        title="Заявка на открытие кофейни по франшизе"
        desc="Получите финансовую модель, требования к помещениям и расчёт окупаемости для формата Trung Nguyên Legend Café или E-Coffee."
        buttonText="ПОЛУЧИТЬ ФРАНЧАЙЗИНГОВЫЙ ПАКЕТ (PDF) ↗"
        bgImage="/images/cafe_space_interior.jpg"
      />

      {/* ================= FRANCHISE MODAL ================= */}
      {franchiseModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 border border-[#E8E2D7] shadow-2xl relative">
            <button
              onClick={() => {
                setFranchiseModalOpen(false);
                setFranchiseSubmitted(false);
              }}
              className="absolute top-6 right-6 text-xl text-[#7A7269] hover:text-[#181512]"
            >
              ✕
            </button>

            {!franchiseSubmitted ? (
              <>
                <span className="text-xs uppercase tracking-widest text-[#B38E46] font-bold block mb-1">
                  ФРАНЧАЙЗИНГ В РФ
                </span>
                <h3 className="text-2xl font-serif text-[#181512] mb-2">
                  Заявка на открытие кофейни
                </h3>
                <p className="text-xs text-[#7A7269] mb-6">
                  Получите финансовую модель и презентацию франшизы Trung Nguyên Legend или E-Coffee.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFranchiseSubmitted(true);
                  }}
                  className="flex flex-col gap-4"
                >
                  <input
                    required
                    placeholder="ФИО заявителя *"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9D2C7] outline-none text-sm focus:border-[#B38E46]"
                  />
                  <input
                    required
                    placeholder="Город открытия *"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9D2C7] outline-none text-sm focus:border-[#B38E46]"
                  />
                  <select className="w-full px-4 py-2.5 rounded-xl border border-[#D9D2C7] outline-none text-sm bg-white">
                    <option>Trung Nguyên Legend Café (от 150 м²)</option>
                    <option>Trung Nguyên E-Coffee (30–60 м²)</option>
                  </select>
                  <input
                    required
                    type="tel"
                    placeholder="Телефон (+7...) *"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9D2C7] outline-none text-sm focus:border-[#B38E46]"
                  />
                  <input
                    required
                    type="email"
                    placeholder="E-mail *"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#D9D2C7] outline-none text-sm focus:border-[#B38E46]"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#B38E46] hover:bg-[#967434] text-white text-xs uppercase tracking-wider font-semibold transition-colors mt-2"
                  >
                    Отправить запрос на франшизу ↗
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <span className="text-4xl mb-3 block">✓</span>
                <h4 className="text-xl font-serif text-[#181512] mb-2">Заявка принята</h4>
                <p className="text-xs text-[#7A7269] mb-6">
                  Презентация и финансовая модель высланы на вашу почту. Директор по развитию свяжется с вами в течение рабочего дня.
                </p>
                <button
                  onClick={() => {
                    setFranchiseModalOpen(false);
                    setFranchiseSubmitted(false);
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
