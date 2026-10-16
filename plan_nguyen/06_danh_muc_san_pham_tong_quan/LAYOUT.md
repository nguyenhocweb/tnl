# BỐ CỤC LAYOUT: 06 DANH MỤC CÀ PHÊ NĂNG LƯỢNG – TỔNG QUAN (PRODUCTS OVERVIEW / КАТАЛОГ КОФЕ)

## 1. Thông Tin Chung & Định Vị Trang
* **URL:** `/katalog`
* **Tone màu chủ đạo:** Nền trắng sáng tinh khiết (`#FFFFFF`), thẻ sản phẩm viền mỏng thanh lịch (`#EDE7DE`), hiệu ứng bóng đổ nhẹ như giấy (Paper subtle shadow).
* **Tiêu chí thị giác:** Trung tâm trưng bày thương mại điện tử chuẩn quốc tế. Tối giản chữ viết, tối đa hóa hình ảnh sản phẩm 3D sắc nét đa chiều (Packaging renders), các chỉ số hương vị hiển thị bằng thanh đo trực quan (Flavor Radar & Strength Meter).

---

## 2. Bố Cục Wireframe Từng Khối (Wireframe Architecture)

```text
[ HERO CATALOG BANNER: "КОЛЛЕКЦИЯ ЭНЕРГИИ" (BỘ SƯU TẬP NĂNG LƯỢNG) ]
- Ảnh panorama sản phẩm toàn dòng (G7, Legend, Sáng Tạo) xếp hàng ngay ngắn trên mặt gỗ sáng màu.
- Thanh tìm kiếm nhanh (Instant Live Search) hỗ trợ gõ tiếng Nga/Anh.
--------------------------------------------------------------------------------------
[ SECTION 1: BỘ LỌC THÔNG MINH (ZEN SMART FILTERS) ]
- Thanh lọc ngang dạng nút bấm tối giản:
  + Theo Dòng: [Tất cả] | [G7 Tiên Phong] | [Legend Tuyệt Phẩm] | [Sáng Tạo Di Sản]
  + Theo Định dạng: [Hòa tan] | [Hạt nguyên chất] | [Bột xay pha phin] | [Túi lọc Drip] | [Capsule]
  + Theo Độ đậm (Strength): [Nhẹ nhàng 1-2] | [Cân bằng 3-4] | [Đậm đặc trưng 5]
--------------------------------------------------------------------------------------
[ SECTION 2: LƯỚI SẢN PHẨM TRỰC QUAN (PRODUCT CARDS GRID - 3 HOẶC 4 CỘT) ]
- Mỗi Product Card được thiết kế thoáng đãng, sang trọng gồm:
  + Ảnh sản phẩm HD tách nền sắc nét, có nút zoom xem bao bì mặt sau (dịch tiếng Nga).
  + Huy hiệu nhỏ: [Хит (Best-seller)] hoặc [Новинка (Mới)] hoặc [EAC].
  + Tên sản phẩm rõ ràng: Tên Nga (to) + Tên quốc tế (nhỏ). Ví dụ: "G7 3 в 1" / "G7 3in1 Instant Coffee".
  + Quy cách đóng gói: Ví dụ "Коробка 18 саше × 16 г" (Hộp 18 gói × 16g).
  + Thanh đo độ đậm: 5 hạt tròn tinh tế (ví dụ: ●●●●○ 4/5).
  + Nốt hương chính: Dạng tags ngắn (Socola đen, Hạt phỉ, Mật ong).
  + NÚT CTA KÉP THÔNG MINH:
    * B2C: Nút màu vàng kim [Купить на OZON ↗] & [Купить на WB ↗]
    * B2B: Nút [Báo giá sỉ B2B] (Mở modal nhập nhanh số lượng & mã INN)
--------------------------------------------------------------------------------------
[ SECTION 3: HƯỚNG DẪN CHỌN GU CÀ PHÊ NHANH (QUICK COFFEE FINDER QUIZ) ]
- Khối 3 bước trắc nghiệm trực quan 30 giây:
  "Bạn thích uống như thế nào?" → [Đậm đà kiểu phin] / [Tiện lợi hòa tan] / [Máy pha văn phòng]
  → Tự động gợi ý 2 sản phẩm hoàn hảo nhất.
--------------------------------------------------------------------------------------
[ FOOTER BANNER: "NHẬN CATALOG BẢNG GIÁ SỈ CHO DOANH NGHIỆP NGA" → [Tải PDF Báo Giá] ]
```

---

## 3. Phân Tích Tâm Lý Khách Hàng Người Nga (Russian Customer Psychology)

1. **Chuẩn mực trải nghiệm E-commerce tại Nga (Ảnh hưởng từ Ozon, Wildberries, Yandex Market):**
   - Khách hàng Nga đã quen thuộc với chuẩn giao diện của các sàn TMĐT nội địa hàng đầu: Bộ lọc thông số rõ ràng (Trọng lượng, số lượng gói, tỷ lệ phối trộn, độ đậm), ảnh chụp bao bì chính xác từng góc cạnh để kiểm tra tem phụ tiếng Nga và hạn sử dụng.
   - Nếu một trang catalog thiếu bộ lọc hoặc ảnh mờ, khách hàng Nga sẽ ngay lập tức nghi ngờ đây là hàng nhái hoặc trang lừa đảo.

2. **Tâm lý "Quyết định mua nhanh qua nút TMĐT" (Instant Familiarity):**
   - Việc tích hợp sẵn CTA dẫn sang **Ozon** và **Wildberries** ngay trên từng thẻ sản phẩm giải quyết triệt để sự do dự của người tiêu dùng Nga. Họ quen thanh toán qua Ozon Card, SberPay, T-Bank hoặc tích điểm Wildberries với mạng lưới nhận hàng (ПВЗ) ngay sát cửa nhà.

3. **Cầu nối cho khách hàng Doanh nghiệp (B2B Buyers & HoReCa):**
   - Rất nhiều chủ quán cà phê độc lập hoặc cửa hàng tiện lợi tại Nga duyệt qua trang catalog của hãng để tìm nguồn hàng. Nút "Báo giá sỉ B2B" xuất hiện tế nhị cạnh nút mua lẻ giúp nhặt gọn các khách hàng tiềm năng lớn mà không làm loãng trải nghiệm người dùng cá nhân.
