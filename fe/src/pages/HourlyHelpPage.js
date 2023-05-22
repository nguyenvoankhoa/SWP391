import React from "react";
import Button from "../UI/Button";
import Title from "../components/Title";
import { Link } from "react-router-dom";
const HourlyHelpPage = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-6 d-flex justify-content-center align-items-center">
          <div>
            <h1>Tìm Giúp Việc Theo Giờ Chuyên Nghiệp Singapore Cùng JupViec</h1>
            <p>
              Bạn cần tìm người giúp việc theo giờ hỗ trợ việc nhà? Đặt JupViec
              - Dịch vụ giúp việc theo giờ chuyên nghiệp theo tiêu chuẩn
              Singapore. Đặt lịch giúp việc nhà đơn giản, nhanh chóng chỉ với
              30s trên ứng dụng JupViec.
            </p>
          </div>
        </div>
        <div className="col-6">
          <img
            src="https://cdn.jupviec.vn/slider_f09a6abdbf.png"
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
        <div className="col-6 d-flex justify-content-center align-items-center">
          <div>
            <h1>Giới Thiệu</h1>
            <p>
              JupViec - Dịch vụ giúp việc theo giờ tại Hà Nội, Tp.Hồ Chí Minh,
              Bình Dương, Đà Nẵng, Hải Phòng. Trải nghiệm app giúp việc theo giờ
              uy tín và tận hưởng ngày dài thảnh thơi chỉ với một chạm.
            </p>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-6 d-flex justify-content-center align-items-center">
          <div>
            <h1>Ưu Điểm Của Dịch Vụ Giúp Việc Theo Giờ:</h1>
            <ul>
              <li>Tiết kiệm 30% so với thuê giúp việc truyền thống</li>
              <li>Không ảnh hưởng đến sinh hoạt gia đình</li>
              <li>Không phụ thuộc vào 1 người giúp việc duy nhất</li>
              <li>Có ký kết Hợp đồng, Bảo hành dịch vụ & Bảo hiểm tài sản</li>
            </ul>
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
        <div className="col-6">
          <img
            src="https://cdn.jupviec.vn/right1_089c8c6a09.jpg"
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

export default HourlyHelpPage;
