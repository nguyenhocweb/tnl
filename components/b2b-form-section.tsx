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
  className?: string;
  initialMode?: "b2b" | "b2c";
}

export default function B2BFormSection({
  id = "b2b",
  eyebrow = "",
  title = "Прямые оптовые поставки от производителя",
  desc = "",
  buttonText = "Получить коммерческое предложение (PDF) ↗",
  badges = [],
  bgImage = "/images/b2b_logistics.jpg",
  className = "",
  initialMode = "b2b",
}: B2BFormSectionProps) {
  const [formMode, setFormMode] = useState<"b2b" | "b2c">(initialMode);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <section className={`zen-section bg-[#FAF8F5] ${className}`} id={id}>
      <div className="zen-b2b-box">
        {/* Photo */}
        <div className="zen-b2b-left">
          <img className="zen-b2b-photo" src={bgImage} alt="" loading="lazy" />
        </div>

        {/* Heading and form */}
        <div className="zen-b2b-right">
          <div className="zen-b2b-copy">
            {eyebrow && (
              <span className="text-[10px] tracking-widest text-[#B38E46] uppercase font-bold block mb-2">
                {eyebrow}
              </span>
            )}
            <h3 className="serif">
              {title}
            </h3>
            {desc && <p>{desc}</p>}
            {badges && badges.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="bg-white/20 backdrop-blur-sm text-xs px-2.5 py-1 rounded"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
          </div>
          {/* Dual-Mode Selector Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-[#F2ECE1] rounded-xl mb-6">
            <button
              type="button"
              onClick={() => { setFormMode("b2b"); setIsSent(false); }}
              className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-semibold tracking-wider transition-all ${
                formMode === "b2b"
                  ? "bg-[#181512] text-white shadow-sm"
                  : "text-[#5A524A] hover:text-[#181512]"
              }`}
            >
              ДЛЯ ПАРТНЁРОВ (B2B)
            </button>
            <button
              type="button"
              onClick={() => { setFormMode("b2c"); setIsSent(false); }}
              className={`flex-1 py-2.5 px-3 rounded-lg text-xs font-semibold tracking-wider transition-all ${
                formMode === "b2c"
                  ? "bg-[#181512] text-white shadow-sm"
                  : "text-[#5A524A] hover:text-[#181512]"
              }`}
            >
              ЧАСТНЫМ КЛИЕНТАМ (B2C)
            </button>
          </div>

          {isSent ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-[#EFE6D4] text-[#B38E46] text-2xl flex items-center justify-center mx-auto mb-4 font-bold">
                ✓
              </div>
              <h3 className="serif text-2xl mb-2 text-[#181512]">
                {formMode === "b2b" ? "Заявка B2B успешно принята" : "Сообщение успешно отправлено"}
              </h3>
              <p className="text-sm text-[#6B6259] max-w-sm mx-auto mb-6">
                {formMode === "b2b"
                  ? "Наш менеджер по работе с ключевыми партнёрами свяжется с вами в течение 2 часов рабочего времени."
                  : "Благодарим за интерес к Trung Nguyên Legend! Наша клиентская служба ответит вам в течение рабочего дня."}
              </p>
              <button
                type="button"
                className="zen-btn-outline"
                onClick={() => setIsSent(false)}
              >
                Отправить ещё одно обращение
              </button>
            </div>
          ) : formMode === "b2b" ? (
            /* B2B CORPORATE FORM (WITH INN) */
            <form onSubmit={handleSubmit} className="zen-form-grid">
              <div className="zen-field">
                <label>Компания / ИП *</label>
                <input
                  required
                  placeholder="ООО «Кофейная Компания»"
                />
              </div>

              <div className="zen-field">
                <label>ИНН (10 или 12 цифр) *</label>
                <input
                  required
                  pattern="[0-9]{10,12}"
                  placeholder="7701234567"
                  title="Введите 10 или 12 цифр ИНН"
                />
              </div>

              <div className="zen-field">
                <label>Формат бизнеса *</label>
                <select required defaultValue="">
                  <option value="" disabled>
                    Выберите категорию
                  </option>
                  <option>HoReCa / Сеть кофеен / Ресторан</option>
                  <option>Дистрибьютор / Оптовая база</option>
                  <option>Федеральная / Региональная торговая сеть</option>
                  <option>Корпоративные клиенты / Подарки</option>
                </select>
              </div>

              <div className="zen-field">
                <label>Рабочий E-mail *</label>
                <input
                  required
                  type="email"
                  placeholder="partner@company.ru"
                />
              </div>

              <div className="zen-field full">
                <label>Контактное лицо и телефон *</label>
                <input
                  required
                  placeholder="Иван Иванов · +7 (999) 000-00-00 · Telegram/WhatsApp"
                />
              </div>

              <div className="zen-field full">
                <label>Комментарий / Планируемый объём</label>
                <textarea
                  rows={2}
                  placeholder="Город поставки, интересующие линейки (G7, зерно Culi, Legend), объём кг/мес..."
                />
              </div>

              <div className="zen-field full">
                <button type="submit" className="zen-btn-gold w-full py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase">
                  {buttonText}
                </button>
              </div>
            </form>
          ) : (
            /* B2C RETAIL INQUIRY FORM (NO INN REQUIRED) */
            <form onSubmit={handleSubmit} className="zen-form-grid">
              <div className="zen-field">
                <label>Ваше Имя *</label>
                <input
                  required
                  placeholder="Алексей"
                />
              </div>

              <div className="zen-field">
                <label>Город *</label>
                <input
                  required
                  placeholder="Москва / Санкт-Петербург..."
                />
              </div>

              <div className="zen-field">
                <label>Телефон / Telegram *</label>
                <input
                  required
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div className="zen-field">
                <label>Ваш E-mail *</label>
                <input
                  required
                  type="email"
                  placeholder="alex@mail.ru"
                />
              </div>

              <div className="zen-field full">
                <label>Ваш вопрос / Интересующий продукт</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Где купить кофе G7 в моём районе, особенности заваривания в фине или розничный вопрос..."
                />
              </div>

              <div className="zen-field full">
                <button type="submit" className="zen-btn-gold w-full py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase">
                  Отправить вопрос в клиентскую службу ↗
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
