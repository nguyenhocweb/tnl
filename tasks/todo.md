# Task List: Tái Cấu Trúc Trang 04 (Bản Sắc Triết Đạo Cà Phê Trung Nguyên Legend)

## Phase 1: CSS Layout Primitives Cho 5 Sections Triết Đạo
- [x] Task 1.1: Bổ sung CSS classes trong `app/globals.css` cho Bộ 3 Khung Tranh Toàn Cầu (Global Triptych), Mission Duet 60/40, 4 Visual Pillars Photo Cards (tỷ lệ 3:4/1:1) và Russian Strategic Pledge Gallery.
- [x] Task 1.2: Đảm bảo hiệu ứng kính mờ (glassmorphism), viền vàng hoàng gia và hover zoom nghệ thuật mượt mà.

## Phase 2: Triển Khai Toàn Diện 5 Sections Chuẩn Bản Sắc TNL (`components/vision-values-view.tsx`)
- [x] Task 2.1: Hoàn thiện Section 1 (Khởi Thiên - Bình Minh Tỉnh Thức): Ảnh tràn 100vh `vision_hero_awakening.jpg`, tiêu đề lớn Serif mạ vàng, gỡ bỏ hoàn toàn đoạn văn thừa.
- [x] Task 2.2: Triển khai Section 2 (Hình Tròn Thiên - Tầm Nhìn Toàn Cầu): 3 Khung tranh toàn ảnh 3:4 kết nối Buôn Ma Thuột ➔ Moscow ➔ Toàn Cầu với nhãn kính mờ nổi, dưới 7 từ mỗi ảnh.
- [x] Task 2.3: Triển khai Section 3 (Hình Vuông Địa - Sứ Mạng Phụng Sự): Ảnh đại cảnh Bảo tàng Thế giới Cà phê (60%) + 3 Thẻ ảnh mini (Trí tuệ, 3 Văn minh, Sách đổi đời).
- [x] Task 2.4: Triển khai Section 4 (Tam Giác Nhân - 4 Đỉnh Cao Giá Trị): 4 Thẻ toàn ảnh nghệ thuật HD (Khát Vọng, Chân Thật, Sáng Tạo, Chuẩn Mực EAC) phủ gradient sang trọng.
- [x] Task 2.5: Triển khai Section 5 (Đồng Hành Bền Vững Tại Nga): 3 Khung ảnh thực tế (Kho vận Moscow, Văn hóa cafe, Nông nghiệp xanh) và nút điều hướng kép sang B2B Hub và Danh mục.

## Phase 3: Kiểm Thử Nghiệm Thu Trực Quan
- [x] Task 3.1: Build kiểm tra sạch sẽ với `npm run build`.
- [x] Task 3.2: Dùng `browser_subagent` kiểm tra trực tiếp trên trình duyệt `http://127.0.0.1:5173/o-kompanii/missiya-i-cennosti`.
- [x] Task 3.3: Chụp ảnh màn hình toàn bộ các section gửi người dùng nghiệm thu.

## Phase 4: Tối Ưu Trực Quan Theo Phản Hồi Người Dùng (Hero Brightness & Legibility)
- [x] Task 4.1: Khôi phục ảnh nền đại cảnh đồi chè bình minh Buôn Ma Thuột với biệt điện gỗ (`vision_hero_awakening.jpg`), tăng độ sáng tự nhiên và độ tương phản quang học.
- [x] Task 4.2: Gỡ bỏ hoàn toàn hộp khung nền đen/kính mờ (`zen-vision-hero-card`), đặt chữ trực tiếp và liền mạch trên nền đại cảnh thiên nhiên.
- [x] Task 4.3: Xóa bỏ badge "ВИДЕНИЕ & ЦЕННОСТИ · РАЗДЕЛ 04" và nút thừa "[4 Столпа ценностей ↘]".
- [x] Task 4.4: Tinh gọn khẩu hiệu thức tỉnh còn 4 từ (*«Кофе, пробуждающий сознание.»*), tăng cường bóng đổ tương phản cao để chữ trắng và vàng kim đọc sắc nét tuyệt đối.
- [x] Task 4.5: Kiểm thử trực quan trực tiếp trên trình duyệt bằng `browser_subagent` và chụp ảnh toàn trang xác nhận.
