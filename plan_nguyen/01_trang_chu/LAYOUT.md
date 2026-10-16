# BỐ CỤC CHI TIẾT & ĐỊNH HƯỚNG HÌNH ẢNH: 01 TRANG CHỦ (HOME PAGE / ГЛАВНАЯ)

> **Mục tiêu cốt lõi:** Thiết kế giao diện theo phong cách **Zen Light (Thiền định - Tone sáng - Tối giản)**, **Nhiều hình ảnh - Rất ít chữ**, tối ưu hóa cho hành vi quét mắt (scanning) của người tiêu dùng và đối tác Nga.

---

## TỔNG QUAN HỆ THỐNG MÀU SẮC & TYPOGRAPHY TRANG CHỦ
* **Nền chính (Canvas Background):** `#FAF8F5` (Màu giấy gạo Washi / Alabaster ấm, tạo cảm giác thư thái, thanh lọc tâm trí).
* **Bề mặt Card (Surface):** `#FFFFFF` (Trắng tinh khiết, viền mảnh `#EDE6DC`, bóng đổ mờ sương `rgba(24, 21, 18, 0.04)`).
* **Màu chữ chính:** `#181512` (Đen mực thư pháp Sumi-e, tương phản sắc sảo trên nền sáng).
* **Màu chữ phụ:** `#6B635B` (Xám tro ấm, dùng cho các chú thích ngắn).
* **Màu điểm nhấn (Accent):** `#B38E46` & `#C5A059` (Vàng kim Champagne mạ mờ, sang trọng quý tộc).
* **Typography:**
  - Tiêu đề (Headings): Serif cao cấp (`Georgia` / `Cormorant Garamond`), thanh lịch, đĩnh đạc.
  - Phụ đề & Nhãn (Labels, UI): Sans-serif hiện đại (`Inter` / `Montserrat` / `Arial`), dãn chữ nhẹ (letter-spacing: 0.08em), chữ in hoa nhẹ nhàng.

---

## CHI TIẾT TỪNG SECTION: BỐ CỤC & ĐỊNH HƯỚNG TẠO ẢNH

---

### SECTION 0: HEADER ĐIỀU HƯỚNG TỐI GIẢN (ZEN STICKY BAR - HỆ THỐNG 12 TRANG)

#### 1. Bố Cục Giao Diện
* **Độ cao:** 76px, cố định trên cùng (Fixed top), nền trắng ngà mờ `rgba(250, 248, 245, 0.94)` với hiệu ứng kính mờ `backdrop-filter: blur(16px)`, đường viền siêu mỏng `#E8E2D8`.
* **Cấu trúc tinh giản & Cân bằng Zen:**
  - **Trái:** Logo **TNL** tối giản (Vòng tròn thiền Ensō màu vàng kim bao quanh chữ TNL, bên cạnh là typography *TRUNG NGUYÊN LEGEND*).
  - **Giữa / Phải:** Menu điều hướng bao quát toàn diện **12 trang** trong Sitemap dự án:
    1. **01 Главная (`/`):** Trang chủ.
    2. **О компании ▾ (Dropdown 3 trang):**
       - `02 · О бренде & История` (`/o-kompanii`)
       - `03 · Послание Основателя` (`/o-kompanii/obrashchenie-osnovatelya`)
       - `04 · Видение и Миссия` (`/o-kompanii/missiya-i-cennosti`)
    3. **05 Философия (`/filosofiya-kofe`):** Triết đạo & 3 nền văn minh cà phê.
    4. **Каталог ▾ (Dropdown 4 trang):**
       - `06 · Каталог продукции` (`/katalog`)
       - `07 · Растворимый кофе G7` (`/katalog/rastvorimyj-kofe`)
       - `08 · Молотый кофе Legend` (`/katalog/molotyj-kofe`)
       - `09 · Кофе в зёрнах & Culi` (`/katalog/kofe-v-zernah`)
    5. **10 Пространства (`/novosti`):** Không gian văn hóa & Tin tức.
    6. **11 Партнёрам (B2B) (`/dlya-partnerov`):** Kênh phân phối B2B Nga.
    7. **12 Контакты (`/kontakty`):** Điểm bán & Mạng lưới phân phối.
  - **Phần bên phải:** Lược bỏ cụm nút `[RU / EN]` và `[ГДЕ КУПИТЬ ↗]` theo đúng yêu cầu người dùng ("ảnh 1 bỏ phần này đi"), giữ lại nút hamburger tối giản `☰` trên màn hình di động/tablet (<1040px) để mở drawer chứa đủ 12 trang.

#### 2. Yếu Tố Hình Ảnh & Đồ Họa
* **Logo SVG:** Vector chuẩn mực, nét thanh mảnh tối giản.
* **Dropdown Card:** Thẻ Washi trắng tinh khôi bo góc 10px, hiệu ứng đổ bóng mờ sương nhẹ nhàng, hiển thị số thứ tự `02 - 09` màu vàng kim `#B38E46` kèm mô tả ngắn 1 dòng.

---

### SECTION 1: HERO SEAMLESS ZEN (NĂNG LƯỢNG TỪ TRÁI TIM VIỆT NAM)

#### 1. Bố Cục Giao Diện (Layout)
* **Chiều cao:** `100vh` (chiếm trọn 100% chiều cao màn hình trình duyệt, kết hợp với Header tạo ấn tượng điện ảnh hùng vĩ).
* **Bố cục Không Gian (Seamless Full-Width Full-Height Zen Layout):**
  - **Khung hình ảnh nền Full-width & Full-height:** Sử dụng ảnh toàn cảnh nguyên bản sắc nét cao `hero_sharp_hills.jpg`. Đồi núi, đồn điền cà phê và nền trời phía sau giữ **độ nét hoàn toàn (deep depth of field, f/16), không làm mờ (no blur/bokeh)**.
  - **Bên phải:** Tách cà phê phin nhôm truyền thống đang nhỏ giọt vào ly sữa, đĩa lót gỗ, khăn lanh mộc mạc và ánh nắng ban mai rọi vào.
  - **Bên trái (Typography màu Trắng & Vàng kim sắc sảo):** 
    + *Tiêu đề H1:* Dòng 1 `Энергия кофе` (Màu trắng tinh khiết `#FFFFFF`, bóng mờ chiều sâu êm ái), Dòng 2 `<span className="zen-hero-gold-text">из сердца Вьетнама</span>` (Màu vàng kim champagne quý phái `#F8D78C`).
    + *Mô tả ngắn gọn:* `Натуральный кофе из Буонметхуота — мировой столицы робусты. Чистая энергия мысли, гармония и пробуждение для великих свершений.` (Màu trắng sáng `#FFFFFF`, bóng đổ tinh tế, đọc cực kỳ rõ nét trên nền đồi xanh).
    + *Nút hành động chính (Primary CTA):* `[ВЫБРАТЬ КОФЕ ↘]` (Màu vàng kim champagne ấm `#C99E4B`, chữ đen đậm nổi bật, hiệu ứng hover mượt mà).
    + *Lược bỏ:* Bỏ hoàn toàn dòng tag phụ thừa và nút thứ hai để giữ không gian thiền định tinh khiết nhất.

#### 2. Mô Tả Chi Tiết Về Hình Ảnh (Visual Concept)
* **Chủ thể:** Một chiếc phin nhôm truyền thống của Việt Nam đang nhỏ từng giọt cà phê sánh đậm vào ly, đặt trên đĩa gỗ và khăn lanh ở **phía bên phải**. Nửa **bên trái** là mặt bàn gỗ mộc mạc ngập tràn ánh ban mai, hậu cảnh là đồi chè và núi non Buôn Ma Thuột xanh mướt, sắc nét từng chi tiết.
* **Ánh sáng & Mood:** Ánh sáng tự nhiên mềm mại buổi sớm, bầu trời trong xanh, không khí tĩnh tại, thuần khiết thiền định.
* **Tỷ lệ khung hình:** `16:9` Full-bleed, hiển thị liền mạch trên mọi độ phân giải.

#### 3. Cách Tạo Ra Hình Ảnh (AI Generation Prompt)
```text
Prompt: High-end commercial photography of a traditional Vietnamese coffee aluminum phin dripper dripping dark rich coffee into an elegant white ceramic cup, morning mist in a lush green highland coffee plantation of Buon Ma Thuot in the soft background, clean minimalist zen aesthetic, golden hour natural morning light, peaceful and calm atmosphere, shallow depth of field, award-winning luxury brand campaign, shot on Hasselblad H6D-100c, 8k resolution, crisp detail, bright airy composition. --ar 16:9 --v 6.1 --style raw
```

---

### SECTION 2: 3 CHỈ SỐ VÀNG & TỔNG QUAN DI SẢN (MINIMAL STATS & HERITAGE)

#### 1. Bố Cục Giao Diện (Layout)
* **Độ cao:** Khoảng 180px, nền màu cát tự nhiên (`#F3EFEA`), viền trên dưới là đường chỉ mảnh `#E5DFD5`.
* **Cấu trúc 4 cột phân cách bằng đường line dọc siêu mảnh:**
  - **Cột 1:** `30` (Số lớn 52px Serif vàng kim) → `ЛЕТ КОФЕЙНОГО ПУТИ` (30 năm hành trình).
  - **Cột 2:** `80+` → `СТРАН МИРА` (Xuất khẩu hơn 80 quốc gia).
  - **Cột 3:** `3` → `КОФЕЙНЫЕ ЦИВИЛИЗАЦИИ` (3 nền văn minh cà phê thế giới).
  - **Cột 4 (Thông điệp chắt lọc):** `В каждом зерне робусты — чистая энергия для ваших свершений.` (Không dùng đoạn văn dài).

#### 2. Yếu Tố Đồ Họa & Ảnh
* Không dùng ảnh nền phức tạp. Xen kẽ giữa các cột là họa tiết hạt cà phê vector chìm mờ ảo 5% opacity, tạo sự liền mạch thị giác.

---

### SECTION 3: PHÒNG TRƯNG BÀY NGHI THỨC CÀ PHÊ (THE ZEN RITUAL SHOWCASE)

#### 1. Bố Cục Giao Diện (Layout)
* **Tiêu đề section siêu gọn (Compact Header - Đúng 2 dòng):** 
  - **Dòng 1 (Tiêu đề chính):** `Коллекция Энергии Trung Nguyên` (Đồng bộ chuẩn 100% với Section 4 «Три Кофейные Цивилизации»: Font Serif `Georgia, "Playfair Display", "Times New Roman", serif`, font-size `clamp(34px, 4vw, 52px)`, font-weight `400` thanh lịch, letter-spacing `-0.02em`, line-height `1.1`, màu đen mực Sumi-e `#181512`, căn giữa trang).
  - **Dòng 2 (Nút lọc chữ thuần khiết, bỏ hoàn toàn icon / emoji):**
    + `[Все ритуалы]` · Tất cả
    + `[Энергия дня]` · Năng lượng ngày mới (G7 3in1, G7 Đen)
    + `[Медленный дзэн]` · Thiền định pha chậm (Creative 4, Drip Filter Bags)
    + `[Высшее искусство]` · Tuyệt tác quà tặng & thưởng thức (Legend Special Edition, Culi Beans)
  - *Lược bỏ hoàn toàn: Dòng nhãn phụ eyebrow và đoạn văn mô tả dài dòng để giảm chiều cao section, giúp sản phẩm hiển thị ngay lập tức.*
* **Lưới 3 Cột Sang Trọng (3-Columns Grid trên bệ đá Zen Stone Pedestals):**
  - Nền card trắng ngà thuần khiết (`#FFFFFF`), bo góc `16px`, viền mảnh ấm `#EDE6DC`, bóng sương mờ êm dịu.
  - **Ảnh trung tâm đặt ngay đầu card:** Ảnh studio thật chụp bao bì sản phẩm đặt trên **bệ đá thô màu kem sáng (travertine/limestone pedestal)** bên cạnh tách cà phê thật và hạt cà phê rơi tự nhiên, độ cao 250px, hiệu ứng hover phóng to êm ái (đã lược bỏ huy hiệu và badge thời gian để tạo giao diện tinh khiết nhất).
  - **Thông số cảm quan tinh gọn (Sensory Profile Box):**
    + *Крепость (Độ đậm):* Thang 5 hạt cà phê mạ vàng kim (`●●●●○`)
    + *Аромат (Nốt hương):* Tóm tắt ngắn (VD: *Сливочная карамель · Робуста* hoặc *Тёмный шоколад · Фундук*)
    + *Способ (Phương pháp):* Biểu tượng cách pha (VD: *В чашке за 1 минуту* hoặc *Вьетнамский фин / Турка*)
  - **Cụm 3 nút chuyển đổi đồng điệu chuẩn Zen Light (Luxury Monochrome):**
    + Nút 1: `[О ритуале ↗]` (Nút chính: Nền đen mực Sumi-e `#181512`, chữ trắng tinh khiết, mũi tên vàng kim `↗`, mở popup modal hướng dẫn 3 bước pha chuẩn và câu chuyện hạt).
    + Nút 2: `[OZON]` (Nền giấy Washi trắng ngà `#FAF8F5`, viền cát thanh lịch `#E2DCD2`, chữ đen than. Khi hover: Nền chuyển cát ngà ấm `#F7EFE3`, viền và chữ chuyển màu vàng kim Champagne `#B38E46`).
    + Nút 3: `[WB]` (Nền giấy Washi trắng ngà `#FAF8F5`, viền cát thanh lịch `#E2DCD2`, chữ đen than. Khi hover: Nền chuyển cát ngà ấm `#F7EFE3`, viền và chữ chuyển màu vàng kim Champagne `#B38E46`).
    + *Loại bỏ hoàn toàn các màu xanh/tím kể cả khi hover để đảm bảo độ đồng nhất 100% chuẩn tinh thần Thiền định.*

#### 2. Mô Tả Chi Tiết Về Hình Ảnh Sản Phẩm (Studio Packshots)
* **Chủ thể:** Bao bì thật của G7 3-in-1, Creative 4 và Legend Special Edition đặt trên bệ đá tự nhiên trong studio sáng trắng, ánh sáng dịu nhẹ kiểu Scandinavian/Zen, đi kèm tách cà phê espresso sánh vàng bọt crema hoặc phin nhôm truyền thống.
* **Tỷ lệ ảnh:** `1:1` vuông, chi tiết sắc nét từng chi tiết dập nổi mạ vàng kim trên hộp.

---

### SECTION 4: TRIẾT LÝ 3 NỀN VĂN MINH CÀ PHÊ (MASTER-DETAIL INTERACTIVE SHOWCASE)

#### 1. Bố Cục Giao Diện Tương Tác Mới (Interactive Split Layout)
* **Không gian tổng thể:** Nền màu be ngà trầm ấm (`#F4EFEA`), tạo cảm giác trang trọng như bước vào một triển lãm bảo tàng nghệ thuật quốc tế.
* **Tiêu đề trung tâm tinh gọn đúng 2 dòng:**
  - Dòng 1 (H2 chính): `Три Кофейные Цивилизации` (Font Serif cao cấp `Georgia`, căn giữa, màu đen mực Sumi-e `#181512`).
  - Dòng 2 (Triết lý cô đọng đúng 1 dòng): `Кофейное наследие человечества в единой концепции гармонии и созидания.` (Font Sans-serif 15px, màu xám tro ấm `#6B6259`, bỏ nhãn phụ eyebrow để giữ trọn vẹn 2 dòng).
* **Bố cục 2 Cột Đối Xứng Tương Tác (Left-Right Split Showcase):**
  - **Cột Trái (Chiếm ~55% chiều ngang):** Khung ảnh nghệ thuật khổ lớn (Fine Art Showcase) của nền văn minh đang kích hoạt (`activeCivId`).
    + Tỷ lệ ~4:3 hoặc 16:11, chiều cao 540-580px, bo góc `16px`, viền mảnh ấm `#E3DCD2`, bóng sương mờ êm dịu.
    + Badge số hiệu La Mã mạ vàng kim gắn góc ảnh (`Ⅰ · ВОСТОК`, `Ⅱ · ЗАПАД`, `Ⅲ · ВЕРШИНА TRUNG NGUYÊN`).
    + Hiệu ứng: Chuyển đổi crossfade mượt mà khi đổi nền văn minh.
  - **Cột Phải (Chiếm ~45% chiều ngang) - Chia làm 2 phần dọc:**
    + **Phần Trên (~88% chiều cao):** Thông tin chi tiết chuyên sâu của nền văn minh đang chọn:
      - *Eyebrow & Chỉ số:* `Ⅰ · ВОСТОК` | `01 / 03`
      - *Tên nền văn minh:* Font Serif 36px (`Османская цивилизация`, `Римская цивилизация`, `Цивилизация Дзэн (Thiền)`).
      - *Phụ đề triết lý:* Dòng chữ nghiêng thanh nhã tóm tắt tinh thần cốt lõi.
      - *Đoạn văn triết đạo:* Diễn giải văn hóa sâu sắc kết nối lịch sử với tư tưởng Trung Nguyên Legend.
      - *Hộp Điểm chạm Cảm quan (Sensory Profile Box):* 3 đặc trưng (Phương pháp pha chế, Nốt hương vị, Tinh thần thưởng thức).
      - *Nút hành động (Primary CTA):* `[УЗНАТЬ РИТУАЛ →]` phong cách Zen cao cấp.
    + **Phần Dưới (~12% diện tích cột phải - Khung hình 2 cái còn lại):**
      - Thanh điều hướng gồm 2 mini card đại diện cho **2 nền văn minh còn lại**.
      - Mỗi mini card: ảnh thumbnail nhỏ sắc nét (64x64px), số La Mã, tên nền văn minh và mũi tên `↗`.
      - **Tương tác Click:** Khi người dùng click vào bất kỳ mini card nào, toàn bộ ảnh lớn bên trái và thông tin phía trên bên phải sẽ hoán đổi (swap) sang nền văn minh đó, đồng thời khung hình bên dưới tự động cập nhật lại thành 2 nền văn minh khác.
      - Hover: Viền chuyển sang vàng kim Champagne `#B38E46`, thumbnail phóng to nhẹ nhàng.

#### 2. Dữ Liệu 3 Nền Văn Minh
* **1. Османская (Ottoman - Phương Đông):** Джезва на горячем песке, пряный плотный аромат, ритуал неспешных мудрых бесед.
* **2. Римская (Roman - Phương Tây):** Эспрессо под давлением 9 бар, золотистая Crema, энергия мегаполиса и инженерный триумф.
* **3. Дзэн (Zen · Thiền - Đỉnh cao Trung Nguyên Legend):** Tách cà phê phin nhôm truyền thống, giọt đắng tĩnh tâm, đánh thức tâm trí và khai mở sáng tạo.

#### 3. Cách Tạo Ra Hình Ảnh (AI Generation Prompt)
```text
Prompt for Zen Civilization: Fine art photography of a minimalist Vietnamese coffee phin brewer on a handcrafted wabi-sabi white ceramic cup, single open blank book with white pages beside it, a delicate white lotus petal on light warm wooden table, soft morning diffused light, zen tranquility, pure peaceful atmosphere, ultra-minimalist aesthetic, Hasselblad medium format, highly detailed, serene mood. --ar 4:5 --v 6.1
```

---

### SECTION 5: KÊNH MUA HÀNG CHÍNH HÃNG TẠI NGA (OFFICIAL RETAIL TRUST HUB)

#### 1. Bố Cục Giao Diện (Layout)
* **Màu sắc:** Nền vàng kim mạ mờ ấm áp (`#F4E8D3`) kết hợp viền kẻ thanh lịch `#D5C4A8`.
* **Cấu trúc 2 cột đối xứng (50 / 50):**
  - **Cột Trái (Thông điệp bảo chứng):**
    + Eyebrow: `«ОФИЦИАЛЬНАЯ ДИСТРИБЬЮЦИЯ В РФ»`
    + H2: `Кофе ближе, чем вы думаете.` (Cà phê gần bạn hơn bạn nghĩ).
    + Dòng cam kết: `100% Оригинальный кофе из Вьетнама. Сертификация ЕАС и ГОСТ-Р. Быстрая доставка по всей России.`
  - **Cột Phải (3 Nút Marketplace Lớn - Quick Action Cards):**
    + Nút 1: `[ OZON · Официальный магазин ↗ ]` (Màu xanh dương nhận diện Ozon `#005BFF` tinh tế trên nền trắng).
    + Nút 2: `[ WILDBERRIES · Фирменный каталог ↗ ]` (Màu tím tím nhận diện `#CB11AB`).
    + Nút 3: `[ Яндекс Маркет · Экспресс-доставка ↗ ]` (Màu vàng Yandex `#FC3F1D`).
    + Nút liên kết dưới cùng: `[ Найти магазины и супермаркеты на Яндекс Картах → ]`

#### 2. Yếu Tố Đồ Họa
* Logo chính thức của các sàn TMĐT Nga sắc nét, có huy hiệu bảo mật Verified Store.

---

### SECTION 6: BANNER HỢP TÁC B2B (DÀNH CHO DOANH NGHIỆP & HORECA)

#### 1. Bố Cục Giao Diện (Layout)
* **Bố cục Split Screen (50% Ảnh thực tế / 50% Form đăng ký):**
  - **Bên Trái (Khối Visual Doanh Nghiệp):**
    + Ảnh khổ lớn: Hệ thống kho vận Logistics hiện đại, pallet sản phẩm đóng gói đạt chuẩn xuất khẩu Châu Âu, hai đối tác doanh nhân đang thảo luận thân thiện.
    + Lớp phủ text mạ vàng trên ảnh: `Прямые поставки от производителя. Выгодные условия для ритейла, HoReCa и оптовиков.`
    + 4 Tags quyền lợi: `[Маржа до 40%]` `[Склад в Москве]` `[Маркетинг POSM]` `[НДС 20%]`.
  - **Bên Phải (Form 1 Chạm Nhận Báo Giá Sỉ):**
    + Thiết kế cực kỳ sạch sẽ trên nền trắng giấy gạo.
    + 3 Trường nhập liệu tối giản:
      * Tên công ty & Mã số thuế Nga ИНН (`pattern="[0-9]{10,12}"`).
      * Loại hình kinh doanh: Dropdown `[Дистрибьютор / Ритейл / HoReCa]`.
      * Số điện thoại hoặc Email doanh nghiệp `.ru`.
    + Nút CTA: `[Получить оптовый прайс-лист 2026 (PDF) ↗]`.

#### 2. Cách Tạo Ra Hình Ảnh (AI Generation Prompt)
```text
Prompt: Professional corporate photography of modern high-ceiling logistics warehouse with neatly stacked coffee boxes ready for distribution, warm bright interior lighting, clean industrial aesthetic, two business partners in smart casual suits shaking hands, confidence, trust and global trade atmosphere, 8k resolution, cinematic composition. --ar 4:3 --v 6.1
```

---

### SECTION 7: TẠP CHÍ VĂN HÓA & KHÔNG GIAN CÀ PHÊ (LIFESTYLE EDITORIAL)

#### 1. Bố Cục Giao Diện (Layout)
* **Tiêu đề:** `Журнал и События` (Tạp chí & Sự kiện).
* **3 Thẻ Bài Viết Phong Cách Báo Ảnh (Photojournalist Cards):**
  - **Thẻ 1:** Ảnh bàn tay đang rót nước vào phin cà phê nghi ngút khói → Tiêu đề: *"Как правильно заварить кофе в фине: 4 шага к идеальной чашке"* (Cách pha phin chuẩn 4 bước).
  - **Thẻ 2:** Ảnh phối cảnh Trung Nguyên Legend Café sang trọng tại Moscow → Tiêu đề: *"Культурное пространство кофе: новые точки притяжения в России"* (Không gian văn hóa cà phê mới tại Nga).
  - **Thẻ 3:** Ảnh những hạt cà phê Robusta chín mọng trên nền đất đỏ Bazan → Tiêu đề: *"Секрет энергии: почему робуста Буонметхуота ценится во всем мире"* (Bí quyết năng lượng Robusta Buôn Ma Thuột).
* Ngày xuất bản dạng font nhỏ màu xám nhạt (ví dụ: `15.10.2026 · Культура кофе`).

---

## TỔNG HỢP PIPELINE TRIỂN KHAI HÌNH ẢNH (ASSETS PIPELINE)

| Tên Ảnh / Asset | Vị trí Section | Kích thước & Tỉ lệ | Phương pháp tạo |
| :--- | :--- | :--- | :--- |
| `hero_zen_phin_morning.webp` | Section 1 (Hero) | 2560x1440 (16:9) | Dùng tool `generate_image` với prompt ánh sáng bình minh Buôn Ma Thuột & Phin nhôm |
| `stats_texture_accent.svg` | Section 2 (Stats) | Vector SVG | Vẽ vector hạt cà phê & vòng thiền Ensō tối giản |
| `prod_g7_3in1.webp` | Section 3 (Catalog) | 1200x1200 (1:1) | Render 3D bao bì G7 bóc tách trên nền trắng tinh khiết |
| `prod_legend_special.webp` | Section 3 (Catalog) | 1200x1200 (1:1) | Render bao bì hộp đen Legend dập nổi vàng kim |
| `prod_drip_bag.webp` | Section 3 (Catalog) | 1200x1200 (1:1) | Chụp studio gói phin giấy và ly thủy tinh trong suốt |
| `civilization_ottoman.webp` | Section 4 (3 Văn minh) | 1200x1600 (3:4) | Generate ảnh bình đồng Cezve trên khay cát truyền thống |
| `civilization_roman.webp` | Section 4 (3 Văn minh) | 1200x1600 (3:4) | Generate ảnh máy pha espresso thép sáng và tách gốm Ý |
| `civilization_zen.webp` | Section 4 (3 Văn minh) | 1200x1600 (3:4) | Generate ảnh phin gốm/nhôm, hoa sen trắng, sách thiền |
| `b2b_warehouse_trade.webp` | Section 6 (B2B Hub) | 1600x1200 (4:3) | Generate ảnh kho vận logistics sạch sẽ, hiện đại |
| `magazine_article_1..3.webp`| Section 7 (Tạp chí) | 1200x800 (3:2) | Bộ ảnh lifestyle pha phin, không gian quán và đồn điền |
