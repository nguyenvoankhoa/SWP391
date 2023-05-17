import React from "react";
import './Footer.css'
const Footer = () => {
return (
<footer class="footer">
  <div class="container">
    <div class="row justify-content-around">
      <div class="col-md-4 mb-4 address">
        <h3 class="text-lg font-bold mb-2">ĐỊA CHỈ</h3>
        <p>Lý Tự Trọng, Bến Nghé, Quận 1,<br />
        Thành phố Hồ Chí Minh, <br />Việt Nam </p>
      </div>
      <div class="col-md-4 mb-4">
        <h3 class="text-lg font-bold mb-2">LIÊN HỆ</h3>
        <p>Tổng đài: 1800 1883</p>
        <p>(8:00 - 21:00, Thứ 2 - CN)</p>
        <p>Phone: +1 123 456 789</p>
      </div>
      <div class="col-md-4 mb-4">
        <h3 class="text-lg font-bold mb-2">HỖ TRỢ KHÁCH HÀNG</h3>
        <p>Câu hỏi thường gặp</p>
        <p>Chính sách bảo mật</p>
        <p>Quy định và điều khoản</p>
      </div>
    </div>
      <div class="col-md-12">
        <p class="text-muted text-center">© Copyright 2023 CleanShine</p>
    </div>
  </div>
</footer>
  );
};

export default Footer;
