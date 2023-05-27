import React from "react";
import Button from "../UI/Button";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import "./HourlyHelpPage.css"
const HourlyHelpPage = () => {
  return (
    <div className="container help-page-container">
      <div className="row my-5">
        <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
          <div>
            <h3 className="title">Tìm Giúp Việc Theo Giờ Chuyên Nghiệp Cùng CleanShine</h3>
            <p className="text-detail">
              Bạn cần tìm người giúp việc theo giờ hỗ trợ việc nhà? Đặt CleanShine
              - Dịch vụ giúp việc theo giờ chuyên nghiệp theo tiêu chuẩn
              xanh, sạch, đẹp. Đặt lịch giúp việc nhà đơn giản, nhanh chóng chỉ với
              30s trên ứng dụng CleanShine.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <img
            src="/assets/images/staff-cleaning.svg"
            alt="img"
            className="w-100"
          />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-lg-6 col-sm-12">
          <img
            src="/assets/images/map.svg"
            alt="img"
            className="w-100"
          />
        </div>
        <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
          <div>
            <h3 className="title">Giới Thiệu</h3>
            <p className="text-detail">
              CleanShine - Dịch vụ giúp việc theo giờ tại Hà Nội, Tp.Hồ Chí Minh,
              Bình Dương, Đà Nẵng, Hải Phòng. Trải nghiệm app giúp việc theo giờ
              uy tín và tận hưởng ngày dài thảnh thơi chỉ với một chạm.
            </p>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
          <div>
            <h3 className="title">Ưu Điểm Của Dịch Vụ Giúp Việc Theo Giờ:</h3>
            <ul className="text-detail">
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
        <div className="col-lg-6 col-sm-12">
          <img
            src="/assets/images/call center.svg"
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
