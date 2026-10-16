# BỐ CỤC LAYOUT: 12 LIÊN HỆ & MẠNG LƯỚI ĐIỂM BÁN (CONTACT & STORE LOCATOR / КОНТАКТЫ)

## 1. Thông Tin Chung & Định Vị Trang
* **URL:** `/kontakty`
* **Tone màu chủ đạo:** Nền trắng sáng tinh khiết (`#FFFFFF`), kết hợp các khối hộp thông tin xám cát thanh nhã (`#F6F4F0`), viền phân cách mỏng vàng kim (`#B38E46`), chữ đen mực chuẩn mực (`#181512`).
* **Tiêu chí thị giác:** Trực quan hóa địa lý với Bản đồ tương tác Yandex Maps toàn màn hình (Full-width Interactive Yandex Map). Khối thông tin liên hệ được module hóa thành các Card thông minh rõ ràng, đi kèm liên kết mạng xã hội bản địa Nga (VKontakte, Telegram, Yandex Dzen, Rutube).

---

## 2. Bố Cục Wireframe Từng Khối (Wireframe Architecture)

```text
[ HERO HEADER: "ВСЕГДА НА СВЯЗИ В РОССИИ" (LUÔN SẴN SÀNG KẾT NỐI TẠI NGA) ]
- Ảnh visual tối giản: Tòa nhà văn phòng hiện đại tại Moscow hoặc không gian làm việc sáng thoáng.
- Tiêu đề ngắn gọn: "Официальное представительство и точки продаж Trung Nguyên Legend"
--------------------------------------------------------------------------------------
[ SECTION 1: 3 BỘ PHẬN TIẾP NHẬN THÔNG TIN (DIRECT CONTACT CHANNELS) ]
- 3 Card thông tin độc lập chia cột rõ ràng:
  + CARD 1: [DÀNH CHO NGƯỜI TIÊU DÙNG (ДЛЯ ПОКУПАТЕЛЕЙ)]
    * Email: hello@trungnguyenlegend.ru
    * Hotline: +7 (495) XXX-XX-XX (Hỗ trợ 09:00 - 18:00 Giờ Moscow)
    * Hỗ trợ tư vấn sản phẩm, hướng dẫn pha chế và bảo hành.
  + CARD 2: [DÀNH CHO ĐỐI TÁC B2B & PHÂN PHỐI (ДЛЯ ПАРТНЕРОВ И HORECA)]
    * Email: partners@trungnguyenlegend.ru
    * Hotline kinh doanh: +7 (800) XXX-XX-XX (Miễn phí cuộc gọi toàn Nga)
    * Tiếp nhận đề xuất nhập sỉ, mở đại lý và hợp tác chuỗi bán lẻ.
  + CARD 3: [TRUYỀN THÔNG & BÁO CHÍ (ПРЕСС-СЛУЖБА И МЕДИА)]
    * Email: media@trungnguyenlegend.ru
    * Cung cấp tài liệu báo chí (Press kit), hình ảnh HD và thông cáo sự kiện.
--------------------------------------------------------------------------------------
[ SECTION 2: BẢN ĐỒ ĐIỂM BÁN YANDEX MAPS (INTERACTIVE STORE LOCATOR) ]
- Tích hợp API Yandex Maps chuẩn bản địa Nga:
  + Thanh lọc thành phố nhanh: [Москва] [Санкт-Петербург] [Казань] [Екатеринбург] [Владивосток]
  + Bộ lọc loại điểm bán: [Chuỗi Siêu thị] / [Quán Cà Phê HoReCa] / [Điểm nhận hàng TMĐT]
  + Danh sách bên cạnh bản đồ: Hiển thị tên cửa hàng, địa chỉ chính xác, giờ mở cửa và nút chỉ đường [Построить маршрут в Яндекс Картах ↗].
--------------------------------------------------------------------------------------
[ SECTION 3: MẠNG LƯỢNG MẠNG XÃ HỘI NỘI ĐỊA NGA (RUSSIAN SOCIAL ECOSYSTEM) ]
- Lưới 4 nút bấm lớn kết nối trực tiếp đến các kênh truyền thông chính thức:
  + [VKONTAKTE (VK)]: Cộng đồng người yêu cà phê Việt Nam tại Nga (>50k thành viên).
  + [TELEGRAM CHANNEL]: Kênh tin tức nhanh, ưu đãi độc quyền và mini-app đặt hàng.
  + [YANDEX DZEN (ДЗЕН)]: Kênh blog bài viết chuyên sâu về văn hóa, triết đạo và sức khỏe.
  + [RUTUBE]: Kênh video hướng dẫn pha phin và phim tư liệu về Buôn Ma Thuột.
--------------------------------------------------------------------------------------
[ SECTION 4: FORM PHẢN HỒI NHANH TRỰC TUYẾN (FAST INQUIRY FORM) ]
- Form 4 trường tinh gọn: Tên họ | Số điện thoại / Telegram | Email | Lời nhắn.
- Cam kết phản hồi trong vòng 2 giờ làm việc.
```

---

## 3. Phân Tích Tâm Lý Khách Hàng Người Nga (Russian Customer Psychology)

1. **Yandex Maps là công cụ tra cứu số 1 không thể thay thế tại Nga:**
   - Trong bối cảnh Google Maps không cập nhật chi tiết và thiếu tính năng tại Nga, hơn 90% người tiêu dùng Nga sử dụng **Yandex Maps (Яндекс Карты)** hàng ngày để tìm đường, tìm quán ăn và mua sắm.
   - Việc tích hợp bản đồ Yandex Maps với các ghim vị trí (pins) rõ ràng của các siêu thị (Auchan, Magnit, Perekrestok) mang lại cảm giác cực kỳ thân thuộc, tiện lợi và chứng minh mạng lưới phân phối rộng khắp trên thực tế.

2. **Sự dịch chuyển truyền thông sang Telegram và VKontakte:**
   - Người Nga hiện nay dành phần lớn thời gian trực tuyến trên **Telegram** (vừa là kênh tin tức, vừa là kênh mua sắm, vừa là nơi liên hệ chăm sóc khách hàng trực tiếp) và **VKontakte**.
   - Cung cấp nút liên hệ qua Telegram giúp người tiêu dùng hoặc đối tác có thể nhắn tin hỏi giá, hỏi điểm mua ngay lập tức mà không cần phải chờ đợi email phản hồi.

3. **Địa chỉ văn phòng và đầu số điện thoại Nga (+7):**
   - Khách hàng Nga rất cảnh giác với các công ty nước ngoài nếu chỉ có số điện thoại quốc tế (+84...). Việc có đầu số hotline Nga (+7 495...) và địa chỉ văn phòng đại diện tại Moscow tạo ra niềm tin tuyệt đối về tính hợp pháp, sẵn sàng hỗ trợ khách hàng và giải quyết các khiếu nại phát sinh.
