import React from "react";
import Button from "../UI/Button";
import Title from "../components/Title";
import { Link } from "react-router-dom";
const ElectronicCleaningPage = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-6">
          <h1>Dịch Vụ Vệ Sinh Điều Hòa Tại Nhà Chuyên Nghiệp, Uy Tín</h1>
          <p>
            Với đội ngũ kỹ thuật viên có trình độ chuyên môn cao, chúng tôi tự
            tin sẽ giúp bạn vệ sinh điều hòa tại nhà nhanh chóng, dễ dàng.
          </p>
          <p>
            Hiện tại, dịch vụ vệ sinh Điện máy chỉ phục vụ tại Hà Nội, Tp.Hồ Chí
            Minh.
          </p>
        </div>
        <div className="col-6">
          <img
            src="https://cdn.jupviec.vn/sec1_1900_09eb73895b.jpg"
            alt="img"
            className="w-100"
          />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-6">
          <img
            src="https://cdn.jupviec.vn/left1_7aa3497d36.png"
            alt="img"
            className="w-100"
          />
        </div>
        <div className="col-6">
          <h1>Giới Thiệu</h1>
          <p>
            Chỉ với một vài thao tác đơn giản trên ứng dụng, Khách hàng đã tìm
            được Dịch vụ Vệ sinh điều hòa uy tín, chuyên nghiệp với nhiều ưu đãi
            hấp dẫn.
          </p>
          <Button
            backgroundColor="#BFE3F2"
            borderRadius="15px"
            padding="16px 41px"
          >
            <Link to="/sign-in">
              <Title
                color="#000000"
                title="Đặt dịch vụ ngay"
                fontSize="20px"
                fontWeight="600"
              />
            </Link>
          </Button>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-6">
          <h1>Tại Sao Cần Vệ Sinh Điều Hòa Thường Xuyên?</h1>
          <ul>
            <li>Loại bỏ các loại vi khuẩn gây bệnh tích tụ lâu ngày</li>
            <li>Tiết kiệm điện năng</li>
            <li>Kéo dài tuổi thọ, công suất sử dụng của máy</li>
            <li>Bảo vệ sức khỏe gia đình</li>
          </ul>
        </div>
        <div className="col-6">
          <img
            src="https://dienlanhbaouyen.vn/uploads/products/die-hoa-panasonic-treo-tuong-inverter.jpg"
            alt="img"
            className="w-100"
          />
        </div>
      </div>
      <div className="row my-5">
        <h1 className="text-center">Bảng giá dịch vụ</h1>
      </div>
    </div>
  );
};

export default ElectronicCleaningPage;
