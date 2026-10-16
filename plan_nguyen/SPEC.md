# SPEC: Redesign Toàn Bộ Layout Trung Nguyên Legend Russia (Thiền Định - Tone Sáng - Image-Centric)

## 1. Objective (Mục tiêu)
Tái thiết kế toàn diện giao diện (layout & visual system) website Trung Nguyên Legend thị trường Liên Bang Nga dựa trên bản brief và sitemap 12 trang trong file `Sitemap_TrungNguyenLegend_Russia_1.pdf`.
Đáp ứng 2 yêu cầu cốt lõi từ người dùng:
1. **Bố cục Visual-heavy (Nhiều hình ảnh, ít chữ):** Tinh gọn tối đa các đoạn văn bản dài, chuyển hóa thành dạng thẻ (cards), chỉ số (metrics), quote tinh hoa, visual banners và gallery nghệ thuật trực quan.
2. **Phong cách Sáng tạo & Thiền định (Zen Light Aesthetics):** Chuyển từ tone tối sang **tone màu sáng thanh tịnh** (Rice paper `#FAF8F5`, Off-white `#FFFFFF`, Warm neutral `#F3EFEA`), kết hợp nghệ thuật thủy mặc Zen (mực đen `#181818`, điểm xuyết vàng kim hoàng gia `#B38E46`), khoảng trắng tĩnh lặng (Zen negative space), tạo cảm giác thanh lọc, sang trọng và khơi nguồn năng lượng tỉnh thức.

---

## 2. Capability Map (Bản đồ phân rã tính năng)

| Module ID | Trách nhiệm | Phụ thuộc |
|---|---|---|
| `zen-design-system` | Bảng màu sáng Thiền định, typography (Serif thiền + Sans hiện đại), tokens, spacing, component primitives | — |
| `zen-navigation` | Header tối giản, Mega-menu / Flyout thông minh bao quát 12 trang trong Sitemap, chuyển ngôn ngữ RU/EN | `zen-design-system` |
| `zen-home-layout` | Trang chủ ([app/page.tsx](file:///d:/gotek/trung_nguyen_TNL/app/page.tsx)) mới: Hero Carousel nghệ thuật, 3 Văn minh cà phê trực quan, Top sản phẩm bán chạy, B2B banner, Tạp chí | `zen-design-system`, `zen-navigation` |
| `zen-12-pages-ia` | Hệ thống 11 trang con theo đúng brief PDF ([app/[...slug]/page.tsx](file:///d:/gotek/trung_nguyen_TNL/app/%5B...slug%5D/page.tsx) & [components/inner-page.tsx](file:///d:/gotek/trung_nguyen_TNL/components/inner-page.tsx)) với layout ảnh lớn, scannable | `zen-design-system`, `zen-navigation` |
| `zen-b2b-store-locator`| Form đối tác B2B (chuẩn INN Nga), bản đồ Yandex Maps Store Locator trực quan, liên kết Ozon / Wildberries | `zen-design-system` |

**Thứ tự triển khai:** `zen-design-system` → `zen-navigation` → `zen-home-layout` → `zen-12-pages-ia` → `zen-b2b-store-locator`.

---

## 3. Kiến trúc Thông tin 12 Trang (Theo Brief PDF)

1. **01 Trang Chủ (Home Page / Главная):** Hero Visual Banner, Triết lý 3 Văn minh cà phê (Ottoman - Roman - Thiền), Showcase sản phẩm chủ lực (G7, Legend), B2B Banner, Tin tức.
2. **02 Về Chúng Tôi (About Us / О нас):** Hành trình từ Buôn Ma Thuột đến toàn cầu, nhà máy & chứng chỉ EAC, GOST, ISO, Halal.
3. **03 Thông Điệp Nhà Sáng Lập (Founder's Message / Послание Основателя):** Chân dung Chủ tịch Đặng Lê Nguyên Vũ, triết lý "Cà phê là Năng lượng Đổi đời", Zen Quotes Block.
4. **04 Tầm Nhìn – Sứ Mạng – Giá Trị Cốt Lõi (Vision & Values / Видение и Миссия):** Hệ sinh thái cà phê toàn cầu, cộng đồng Tỉnh thức.
5. **05 Cà Phê Triết Đạo & Lối Sống Tỉnh Thức (Coffee Philosophy / Философия Кофе):** Nghệ thuật Pha Phin, nghi thức thưởng cà phê cân bằng và tĩnh tại.
6. **06 Danh Mục Cà Phê Năng Lượng – Tổng Quan (Products Overview / Каталог Кофе):** Bộ lọc thông minh (Dòng G7/Legend, Dạng Hạt/Bột/Drip), HD visual cards, CTA kép (Mua lẻ B2C Ozon/Wildberries & Mua sỉ B2B).
7. **07 Dòng Sản Phẩm Cà Phê Hoà Tan (Instant Coffee Series):** Bộ sưu tập G7 3in1, Black, Cappuccino (Hazelnut, Irish Cream, Mocha), Espresso, hệ thống siêu thị Nga (X5, Magnit, Auchan).
8. **08 Dòng Sản Phẩm Cà Phê Rang Xay (Roasted Coffee Series):** Tuyệt phẩm Legend Special Edition, Legend Capsule, Drip Coffee (Phin giấy), Gift Sets doanh nghiệp.
9. **09 Dòng Sản Phẩm Cà Phê Hạt & Chuyên Biệt (Bean & Specialty Coffee):** Dòng Sáng Tạo (1-5), House Blend, thông số hương vị (tỷ lệ Arabica/Robusta, độ rang), video/ảnh hướng dẫn pha chế.
10. **10 Tin Tức & Sự Kiện (News & Events / Новости):** Không gian văn hóa Trung Nguyên Legend Café & E-Coffee, cơ hội nhượng quyền (Franchise) tại Moscow & St. Petersburg.
11. **11 Hợp Tác B2B & Nghệ Thuật Phân Phối Tại Nga (B2B Hub / Для Партнеров):** Chính sách đại lý, hồ sơ pháp lý EAC/GOST-R, form đăng ký B2B.
12. **12 Liên Hệ & Mạng Lưới Phân Phối (Contact & Store Locator / Контакты):** Bản đồ Yandex Maps Store Locator, văn phòng đại diện Nga, mạng xã hội (VK, Telegram, Dzen).

---

## 4. Tech Stack & Commands

### Tech Stack
- **Framework:** Next.js 16 (App Router) + React 19 chạy trên nền Vite / Vinext & Cloudflare Workers Runtime.
- **Ngôn ngữ:** TypeScript 5.9+.
- **Styling:** CSS variables kết hợp Tailwind CSS v4, phong cách Zen tối giản, animations vi mô nhẹ nhàng (Fade, subtle blur, smooth ease-out).
- **Icons & Assets:** Lucide React icons, hình ảnh sản phẩm và văn hóa cà phê độ nét cao.

### Commands
```bash
# Cài đặt
npm run install:ci

# Chạy môi trường phát triển (Dev)
npm run dev

# Kiểm tra code (Lint)
npm run lint

# Build cho Cloudflare Worker
npm run build
```

---

## 5. Quy chuẩn Thiết kế & Code Style (Zen Light Design System)

### A. Bảng màu Thiền định (Zen Light Palette)
```css
:root {
  --zen-bg: #FAF8F5;          /* Nền chính: Màu giấy gạo / Alabaster thanh tịnh */
  --zen-surface: #FFFFFF;     /* Nền card / popup: Trắng tinh khiết */
  --zen-subtle: #F3EFEA;      /* Nền phụ: Màu cát ấm nhẹ */
  --zen-ink: #181512;         /* Màu chữ chính: Đen mực thủy mặc */
  --zen-ink-light: #5A534C;   /* Màu chữ phụ / caption: Xám trầm */
  --zen-gold: #B38E46;        /* Điểm nhấn: Vàng kim thanh nhã Trung Nguyên */
  --zen-gold-light: #EFE6D4;  /* Nền tag / highlight vàng mạ nhẹ */
  --zen-border: #E8E2D8;      /* Đường kẻ tối giản siêu mỏng */
}
```

### B. Nguyên tắc "Ảnh nhiều, Chữ ít"
1. **Typography cô đọng:** Tiêu đề lớn sang trọng với phông Serif (`Georgia` / `Playfair`), nội dung cô đọng không quá 2-3 dòng, dùng bullet points hoặc số liệu lớn.
2. **Visual storytelling:** Mỗi khối nội dung luôn đi kèm hình ảnh chất lượng cao (tỉ lệ 16:9, 4:3 hoặc 1:1) thể hiện bao bì sản phẩm, hạt cà phê, fin pha chế hoặc không gian thiền định.
3. **Negative Space (Khoảng trắng):** Tạo cảm giác thư thái, thở được, không nhồi nhét chữ.

---

## 6. Boundaries (Ranh giới thực thi)

- **Luôn làm (Always):**
  - Giữ toàn vẹn mã số thuế INN, các liên kết sàn TMĐT Nga (Ozon, Wildberries) và các chứng chỉ EAC, GOST theo đúng yêu cầu thị trường Nga trong brief.
  - Đảm bảo responsive hoàn hảo trên Mobile (>60% người dùng Nga theo brief).
  - Tối ưu tải trang với ảnh nhẹ, lazy loading, WebP format.
- **Hỏi trước (Ask First):**
  - Thay đổi cấu trúc cơ sở dữ liệu D1 hoặc cài thêm thư viện npm nặng bên ngoài.
  - Thay đổi danh mục 12 trang so với brief PDF.
- **Không bao giờ làm (Never):**
  - Sử dụng giao diện tối tăm (dark mode cũ) hoặc nền đen tuyền choáng ngợp — vi phạm yêu cầu tone sáng thiền định của người dùng.
  - Nhồi nhét các khối văn bản dài đặc chữ mà thiếu hình ảnh minh họa.

---

## 7. Success Criteria (Tiêu chí nghiệm thu)

1. [ ] Giao diện toàn site chuyển sang tone màu sáng (**Zen Light Aesthetics**), phong cách tối giản, tinh tế, sang trọng.
2. [ ] Hình ảnh xuất hiện chủ đạo ở mọi section; chữ ngắn gọn, súc tích, scannable.
3. [ ] Cấu trúc bao phủ đầy đủ 12 trang theo sơ đồ Sitemap trong PDF brief.
4. [ ] Menu điều hướng Header cho phép truy cập mượt mà đến 12 trang này.
5. [ ] Trang chủ mới đầy đủ các khối: Hero banner, Showcase sản phẩm, 3 Nền văn minh cà phê, Kênh mua hàng Ozon/Wildberries, B2B banner, Tin tức.
6. [ ] Mọi trang con hoạt động ổn định trên dynamic route `[...slug]`.
7. [ ] Dev server chạy mượt mà trên `http://127.0.0.1:5173/`, không có lỗi console hay crash build.

---

## 8. Open Questions (Câu hỏi cần xác nhận từ bạn)

1. **Về hình ảnh:** Bạn có muốn tôi sử dụng bộ hình ảnh minh họa nghệ thuật Zen về cà phê / sản phẩm Trung Nguyên được tối ưu sẵn (placeholder chuẩn HD / WebP), hay bạn đã có sẵn thư mục ảnh riêng trong máy để import vào?
2. **Về ngôn ngữ mặc định:** Trang web có tiếp tục giữ giao diện tiếng Nga chuẩn thị trường Nga (kèm nút đổi EN/VI) như brief PDF hay bạn muốn hiển thị song ngữ trực tiếp?
