import React from "react";
import Card from "./Card";
const ARRAY = [
  {
    title: "TẠP VỤ VỆ SINH",
    content:
      "Là đơn vị hàng đầu chuyên cung cấp dịch vụ vệ sinh hàng ngày hoặc theo giờ chuyên nghiệp trên toàn quốc.",
  },
  {
    title: "VỆ SINH ĐỊNH KỲ",
    content:
      "Cung cấp đầy đủ các gói dịch vụ vệ sinh định kỳ với đội ngũ nhân viên giàu kinh nghiệm, trang thiết bị hiện đại và hóa chất an toàn.",
  },
  {
    title: "BẢO HÀNH DỌN DẸP",
    content:
      "Đảm bảo chính sách bảo hành đối với việc vệ sinh những thiết bị gia dụng thông minh.",
  },
];
const Service = () => {
  return (
    <>
      <div className="text-center">
        <h1>RANH HAND</h1>
        <h2>NHỮNG DỊCH VỤ CỦA CHÚNG TÔI</h2>
        <div className="row">
          {ARRAY.map((item) => (
            <Card title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
