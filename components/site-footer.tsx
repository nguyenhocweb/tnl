"use client";

import React from "react";

export default function SiteFooter() {
  return (
    <footer className="zen-footer">
      <div className="zen-footer-top">
        <div className="zen-footer-brand">
          <b>TRUNG NGUYÊN LEGEND</b>
          <p>
            Энергия из сердца Вьетнама. Мировой лидер в производстве премиального кофе робуста и создатель кофейной философии Дзэн.
          </p>
          <div className="mt-6 flex gap-3 text-xs text-[#A99E91] flex-wrap">
            <span>EAC Certified</span> • <span>GOST-R</span> • <span>ISO 9001</span> • <span>Halal</span>
          </div>
        </div>

        <div className="zen-footer-links-grid">
          <div className="zen-footer-col">
            <h4>КОМПАНИЯ</h4>
            <a href="/o-kompanii">О бренде</a>
            <a href="/o-kompanii/obrashchenie-osnovatelya">Послание Основателя</a>
            <a href="/o-kompanii/missiya-i-cennosti">Видение и Миссия</a>
            <a href="/filosofiya-kofe">3 Цивилизации кофе</a>
          </div>

          <div className="zen-footer-col">
            <h4>КАТАЛОГ</h4>
            <a href="/katalog/rastvorimyj-kofe">Кофе G7 hòa tan</a>
            <a href="/katalog/molotyj-kofe">Молотый кофе Legend</a>
            <a href="/katalog/kofe-v-zernah">Зерновой кофе Culi</a>
            <a href="/katalog">Все продукты</a>
          </div>

          <div className="zen-footer-col">
            <h4>БИЗНЕС И СВЯЗЬ</h4>
            <a href="/dlya-partnerov">Для Партнёров (B2B)</a>
            <a href="/novosti">Франшиза E-Coffee</a>
            <a href="/kontakty">Точки продаж на карте</a>
            <a href="mailto:hello@trungnguyenlegend.ru">hello@trungnguyenlegend.ru</a>
          </div>
        </div>
      </div>

      <div className="zen-footer-bottom">
        <div>© 1996–2026 Trung Nguyên Legend Russia. Все права защищены.</div>
        <div className="zen-social-links">
          <a href="https://vk.com" target="_blank" rel="noreferrer">
            VKontakte
          </a>
          <a href="https://t.me" target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a href="https://dzen.ru" target="_blank" rel="noreferrer">
            Дзен
          </a>
          <a href="https://rutube.ru" target="_blank" rel="noreferrer">
            Rutube
          </a>
        </div>
      </div>
    </footer>
  );
}
