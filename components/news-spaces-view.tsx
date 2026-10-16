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
      {/* ================= SECTION 1: HERO ARCHITECTURAL SANCTUARY (100VH) ================= */}
      <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-end pb-16 px-6 md:px-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.98] transition-transform duration-1000 scale-105 hover:scale-100"
          style={{ backgroundImage: `url('/images/cafe_space_interior.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="relative z-10 max-w-4xl">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#B38E46] text-white text-[11px] font-bold tracking-widest uppercase shadow-xl">
            ТРЕТЬЕ МЕСТО ОСОЗНАННОСТИ И КУЛЬТУРЫ
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white tracking-wide font-normal drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] leading-tight mb-3">
            Пространство Осознанности
          </h1>
          <p className="text-base md:text-xl text-[#F2EBD9] font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] mb-8">
            Место силы для творческих и пробуждённых людей.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#concept-split"
              className="px-7 py-3.5 rounded-2xl bg-[#B38E46] hover:bg-[#967434] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-xl"
            >
              Концепции пространств ↘
            </a>
            <button
              onClick={() => setFranchiseModalOpen(true)}
              className="px-7 py-3.5 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 text-xs uppercase tracking-wider font-semibold transition-all"
            >
              Франшиза в России ↗
            </button>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: 50/50 CONCEPT SPLIT SHOWCASE ================= */}
      <section id="concept-split" className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#B38E46] font-bold">
            ФОРМАТЫ ПРИСУТСТВИЯ
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mt-2 mb-3">
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
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#181512]/90 text-[#B38E46] text-xs font-bold border border-[#B38E46]/30">
                ПЛОЩАДЬ: 150 – 400 М²
              </span>
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#B38E46] block mb-1">
                  КУЛЬТУРНОЕ СВЯТИЛИЩЕ
                </span>
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
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#181512]/90 text-[#D4B26F] text-xs font-bold border border-[#D4B26F]/30">
                ПЛОЩАДЬ: 30 – 60 М²
              </span>
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[#D4B26F] block mb-1">
                  ЭНЕРГИЯ ГОРОДСКОГО РИТМА
                </span>
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
      </section>

      {/* ================= SECTION 3: RUSSIAN FRANCHISE METRO MAP ================= */}
      <section className="py-24 px-6 md:px-16 bg-[#FAF7F2] border-y border-[#E8E2D7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#B38E46] font-bold">
              СТРАТЕГИЯ ЭКСПАНСИИ В РФ
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mt-2 mb-3">
              Города приоритетного открытия
            </h2>
            <p className="text-sm text-[#7A7269]">
              Формируем партнёрскую сеть с эксклюзивным территориальным правом развития
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
            {[
              { city: "Москва", status: "Флагманские локации", open: "Приоритет 1" },
              { city: "Санкт-Петербург", status: "Невский & Петроградка", open: "Приоритет 1" },
              { city: "Казань", status: "Исторический центр", open: "Приоритет 2" },
              { city: "Новосибирск", status: "Академгородок & Центр", open: "Приоритет 2" },
            ].map((node) => (
              <div key={node.city} className="bg-white p-6 rounded-2xl border border-[#E8E2D7] text-center shadow-sm">
                <span className="text-[10px] uppercase font-bold text-[#B38E46] block mb-1">{node.open}</span>
                <strong className="text-xl font-serif text-[#181512] block mb-1">{node.city}</strong>
                <span className="text-xs text-[#7A7269]">{node.status}</span>
              </div>
            ))}
          </div>

          {/* 4 Pillars of Franchise Support */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "📦",
                title: "Прямые поставки сырья",
                desc: "100% оригинальный кофе, сиропы и сопутствующие товары со склада в Москве по специальным ценам партнера.",
              },
              {
                icon: "🎓",
                title: "Академия бариста",
                desc: "Полная программа обучения персонала стандартам сервиса и ритуалам заваривания от мастеров из Вьетнама.",
              },
              {
                icon: "📐",
                title: "Архитектурный проект",
                desc: "Готовая адаптация планировочных решений под ваше помещение с надзором дизайнера бренда.",
              },
              {
                icon: "📣",
                title: "Маркетинг 360°",
                desc: "Федеральные рекламные кампании, подключение к программе лояльности и PR на открытии заведения.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-2xl border border-[#E8E2D7] shadow-sm">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h4 className="font-serif text-base text-[#181512] mb-2 font-semibold">{item.title}</h4>
                <p className="text-xs text-[#5C5248] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: EDITORIAL EVENTS & EXHIBITIONS ================= */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#B38E46] font-bold">
            КУЛЬТУРНЫЙ ДНЕВНИК
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#181512] mt-2 mb-3">
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
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-[#181512]/90 text-white text-[10px] font-bold uppercase tracking-wider">
                  {evt.tag}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-[#B38E46] font-semibold block mb-2">{evt.date}</span>
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
      <section className="py-20 px-6 md:px-16 bg-[#181512] text-white">
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

      {/* ================= SECTION 6: EXACT IMAGE 4 FRANCHISE FORM ================= */}
      <div id="franchise-form" className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <B2BFormSection
          eyebrow="ИНВЕСТИЦИОННАЯ ПРОГРАММА РФ"
          title="Заявка на открытие кофейни по франшизе"
          desc="Получите финансовую модель, требования к помещениям и расчёт окупаемости для формата Trung Nguyên Legend Café или E-Coffee."
          buttonText="ПОЛУЧИТЬ ФРАНЧАЙЗИНГОВЫЙ ПАКЕТ (PDF) ↗"
          badges={["Окупаемость от 10 мес.", "Обучение персонала", "Поставки 100%"]}
          bgImage="/images/cafe_space_interior.jpg"
        />
      </div>

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
