"use client";

import React, { useState } from "react";

interface B2BFormSectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  desc?: string;
  buttonText?: string;
  badges?: string[];
  bgImage?: string;
}

export default function B2BFormSection({
  id = "b2b-form",
  eyebrow = "ДЛЯ БИЗНЕСА И HORECA",
  title = "Прямые оптовые поставки от производителя",
  desc = "Официальный импорт в РФ. Выгодные условия для торговых сетей, региональных дистрибьюторов, кофеен и HoReCa.",
  buttonText = "ПОЛУЧИТЬ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ (PDF) ↗",
  badges = ["НДС 20%", "Склад в Москве", "Маркетинг & POSM"],
  bgImage = "/images/b2b_logistics.jpg",
}: B2BFormSectionProps) {
  const [b2bSent, setB2bSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setB2bSent(true);
  };

  return (
    <section className="zen-section" id={id}>
      <div className="zen-b2b-box">
        {/* Left Column with Logistics Photo & Overlay */}
        <div
          className="zen-b2b-left"
          style={{ backgroundImage: `url('${bgImage}')` }}
        >
          <div className="zen-b2b-overlay" />
          <div className="zen-b2b-copy">
            <span className="text-xs uppercase tracking-widest text-[#D4B26F] font-bold block mb-2">
              {eyebrow}
            </span>
            <h3 className="serif text-2xl md:text-3xl font-serif text-white mb-3">
              {title}
            </h3>
            <p className="text-xs md:text-sm text-white/85 leading-relaxed mb-6">
              {desc}
            </p>
            <div className="flex gap-2 flex-wrap">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="bg-white/20 backdrop-blur-sm text-xs text-white px-2.5 py-1 rounded border border-white/20"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column with Form Inputs */}
        <div className="zen-b2b-right bg-[#FAF8F5]">
          {b2bSent ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#EFE6D4] text-[#B38E46] text-2xl flex items-center justify-center mx-auto mb-4 font-bold">
                ✓
              </div>
              <h3 className="serif text-2xl mb-2 text-[#181512]">Заявка успешно принята</h3>
              <p className="text-sm text-[#6B6259] max-w-sm mx-auto mb-6">
                Наш менеджер по работе с ключевыми клиентами свяжется с вами в течение 2 часов рабочего времени.
              </p>
              <button
                className="zen-btn-outline"
                onClick={() => setB2bSent(false)}
              >
                Отправить ещё одну заявку
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="zen-form-grid">
              <div className="zen-field">
                <label>КОМПАНИЯ / ИП *</label>
                <input
                  required
                  placeholder="ООО «Название компании»"
                />
              </div>

              <div className="zen-field">
                <label>ИНН (10 ИЛИ 12 ЦИФР) *</label>
                <input
                  required
                  pattern="[0-9]{10,12}"
                  placeholder="7701234567"
                  title="Введите 10 или 12 цифр ИНН"
                />
              </div>

              <div className="zen-field">
                <label>ТИП БИЗНЕСА *</label>
                <select required defaultValue="">
                  <option value="" disabled>
                    Выберите категорию
                  </option>
                  <option>Дистрибьютор / Опт</option>
                  <option>Торговая сеть / Ритейл</option>
                  <option>HoReCa / Кофейня</option>
                  <option>Корпоративные подарки</option>
                </select>
              </div>

              <div className="zen-field">
                <label>РАБОЧИЙ E-MAIL *</label>
                <input
                  required
                  type="email"
                  placeholder="partner@company.ru"
                />
              </div>

              <div className="zen-field full">
                <label>КОММЕНТАРИЙ / ПЛАНИРУЕМЫЙ ОБЪЁМ</label>
                <textarea
                  rows={2}
                  placeholder="Город, интересующие позиции (G7, зерно, молотый), объём заказа..."
                />
              </div>

              <div className="zen-field full pt-2">
                <button type="submit" className="zen-btn-gold w-full py-3.5 uppercase tracking-wider text-xs font-bold">
                  {buttonText}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
