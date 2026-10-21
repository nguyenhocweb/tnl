"use client";

import React, { useState } from "react";
import BrandFluidBackground from "../../components/ui/brand-fluid-background";

export default function BrandBgPreviewPage() {
  const [pureBgOnly, setPureBgOnly] = useState(true);
  const [aspect, setAspect] = useState<"16:9" | "1:1">("16:9");

  return (
    <main className="w-full min-h-screen bg-white text-[#181512] font-sans antialiased">
      {/* ================= CONTROLLER DOCK ================= */}
      <div className="fixed top-5 right-5 z-50 bg-[#16110D]/95 backdrop-blur-md text-white px-4 py-2.5 rounded-2xl shadow-2xl border border-[#C5A25D]/40 flex flex-wrap items-center gap-4 text-xs">
        <span className="text-[#C5A25D] font-bold tracking-wider uppercase text-[10px]">
          Khung nền thương hiệu:
        </span>

        <label className="flex items-center gap-2 cursor-pointer font-medium">
          <input
            type="checkbox"
            checked={pureBgOnly}
            onChange={(e) => setPureBgOnly(e.target.checked)}
            className="accent-[#C5A25D] w-4 h-4 cursor-pointer"
          />
          <span className={pureBgOnly ? "text-[#E5C378] font-bold" : "text-[#D8CFBF]"}>
            Chỉ xem nền trống (BG thuần túy)
          </span>
        </label>

        <div className="flex items-center gap-2 pl-2 border-l border-white/20">
          <button
            onClick={() => setAspect("16:9")}
            className={`px-3 py-1 rounded-lg transition-all ${
              aspect === "16:9"
                ? "bg-[#C5A25D] text-[#120F0D] font-bold"
                : "bg-white/10 hover:bg-white/20 text-[#E5C378]"
            }`}
          >
            Tỷ lệ 16:9 (Hero Banner)
          </button>
          <button
            onClick={() => setAspect("1:1")}
            className={`px-3 py-1 rounded-lg transition-all ${
              aspect === "1:1"
                ? "bg-[#C5A25D] text-[#120F0D] font-bold"
                : "bg-white/10 hover:bg-white/20 text-[#E5C378]"
            }`}
          >
            Tỷ lệ 1:1 (Theo ảnh gốc)
          </button>
        </div>

        <a
          href="/"
          className="ml-2 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[#E5C378] transition-colors"
        >
          Trang chủ
        </a>
      </div>

      {/* ================= HERO SECTION (EXACT REPLICA IN TNL BRAND COLORS) ================= */}
      <BrandFluidBackground
        aspect={aspect}
        heightClass="min-h-[100dvh] h-screen"
      >
        {!pureBgOnly && (
          <>
            {/* Top Navigation Bar */}
            <header className="w-full max-w-7xl mx-auto px-6 sm:px-12 pt-7 flex items-center justify-between text-white/90">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-[#C5A25D] flex items-center justify-center text-[#C5A25D] font-serif font-bold text-xs bg-[#120F0B]/70 shadow">
                  TNL
                </div>
                <span className="text-sm font-semibold tracking-wider text-white">
                  Trung Nguyên Legend
                </span>
              </div>

              <nav className="hidden md:flex items-center gap-8 text-xs font-light text-[#E0D8CB] tracking-wide">
                <a href="#about" className="hover:text-[#C5A25D] transition-colors">Về Chúng Tôi</a>
                <a href="#catalog" className="hover:text-[#C5A25D] transition-colors">Sản Phẩm</a>
                <a href="#culture" className="hover:text-[#C5A25D] transition-colors">Triết Đạo</a>
              </nav>

              <a
                href="#contact"
                className="px-5 py-2 rounded-full bg-[#C5A25D] hover:bg-[#B38E46] text-[#120F0D] text-xs font-bold tracking-wider uppercase transition-all shadow-md"
              >
                Hợp Tác B2B
              </a>
            </header>

            {/* Left Content Area */}
            <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 pb-24 sm:pb-36 flex flex-col justify-center flex-1">
              <div className="max-w-md lg:max-w-lg">
                <div className="w-10 h-0.5 bg-[#C5A25D] mb-4" />

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight font-normal leading-[1.12] mb-4 drop-shadow">
                  Cà Phê <br />
                  <span className="text-[#C5A25D]">Năng Lượng</span>
                </h1>

                <p className="text-xs sm:text-sm text-[#E0D8CB] font-light leading-relaxed mb-8 max-w-sm drop-shadow-sm">
                  Khởi sinh từ thủ phủ Robusta Buôn Ma Thuột. Tinh hoa cà phê năng lượng đổi đời cho người yêu chuộng sự tỉnh thức và sáng tạo.
                </p>

                <a
                  href="#explore"
                  className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#C5A25D] hover:bg-[#B38E46] text-[#120F0D] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                >
                  Khám Phá Bộ Sưu Tập
                </a>
              </div>
            </div>
          </>
        )}
      </BrandFluidBackground>

      {/* ================= NEXT SECTION (SEAMLESS CONNECTION TEST) ================= */}
      <section id="explore" className="w-full bg-white py-20 px-6 sm:px-12 lg:px-20 border-t border-neutral-100">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-12 h-0.5 bg-[#C5A25D] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-serif text-[#181512] mb-3">
            Điểm Nối Liền Mạch Vào Thân Trang
          </h2>
          <p className="text-sm text-[#6B6259] max-w-xl mx-auto">
            Chân sóng hữu cơ màu trắng tiếp giáp 100% tự nhiên với phần nội dung bên dưới, giữ trọn vẹn từng đường cong và thẩm mỹ của ảnh mẫu do bạn cung cấp.
          </p>
        </div>
      </section>
    </main>
  );
}
