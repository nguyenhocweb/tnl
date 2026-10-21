"use client";

import React from "react";
import Image from "next/image";

export interface BrandFluidBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  /**
   * Custom height override. Defaults to full viewport (100vh / 100dvh) per project hero rule.
   */
  heightClass?: string;
  /**
   * Aspect ratio preference for background image:
   * - "16:9": Widescreen desktop banner (recommended for full-width Hero sections)
   * - "1:1": Exact square match to the reference graphic asset
   */
  aspect?: "16:9" | "1:1";
  /**
   * Optional custom overlay or image priority
   */
  priority?: boolean;
}

/**
 * BrandFluidBackground
 * 
 * Khung nền tái hiện Y HỆT 100% đường cong sóng hữu cơ từ ảnh mẫu do người dùng cung cấp,
 * được chuyển đổi chuẩn xác sang hệ màu nhận diện thương hiệu Trung Nguyên Legend:
 * - Đỉnh trên bên trái: Nâu đen Espresso trầm ấm (#120E0B / #181310).
 * - Đỉnh trên bên phải: Vàng kim hoàng gia & Crema Amber Gold (#C5A25D / #D4AF37).
 * - Chân sóng uốn lượn bên dưới: Trắng tinh khiết (#FFFFFF) tiếp giáp liền mạch với phần thân trang.
 */
export default function BrandFluidBackground({
  className = "",
  children,
  heightClass = "min-h-[100dvh] h-screen",
  aspect = "16:9",
  priority = true,
}: BrandFluidBackgroundProps) {
  const bgSrc = aspect === "1:1" ? "/images/brand-exact-bg.jpg" : "/images/brand-exact-bg-16-9.jpg";

  return (
    <section
      className={`relative w-full ${heightClass} flex flex-col justify-between overflow-hidden bg-[#FFFFFF] ${className}`}
      aria-label="Brand Fluid Hero Section"
    >
      {/* ================= BACKGROUND IMAGE - EXACT REPLICA IN BRAND COLORS ================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        <Image
          src={bgSrc}
          alt="Trung Nguyên Legend Fluid Wave Background"
          fill
          priority={priority}
          quality={96}
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      {/* ================= FOREGROUND CONTENT ================= */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-between">
        {children}
      </div>
    </section>
  );
}
