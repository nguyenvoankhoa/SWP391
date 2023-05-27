import React from "react";
import Button from "../UI/Button";
import Title from "../components/Title";
import { Link } from "react-router-dom";
const TotalSanitationPage = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
          <div>
            <h1>Dịch Vụ Tổng Vệ Sinh</h1>
            <p>
              Dịch vụ tổng vệ sinh dọn dẹp nhà cửa giúp Khách hàng có môi trường
              sống trong lành. Hơn 200.000 Khách hàng đã sử dụng và hài lòng về
              dịch vụ tổng vệ sinh của CleanShine.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <img
            src="/assets/images/sanitation.svg"
            
            alt="img"
            className="w-100"
          />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-lg-6 col-sm-12">
          <img
            src="https://cdn.jupviec.vn/tvs_mota_fa6100288b.png"
            alt="img"
            className="w-100"
          />
        </div>
        <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
          <div>
            <h1>Dịch Vụ Tổng Vệ Sinh Nhà Cửa CleanShine Sẽ Bao Gồm:</h1>
            <p>
              Dọn dẹp toàn bộ nhà cửa kĩ càng các phòng bếp, khách, ngủ, nhà vệ
              sinh hoặc tổng vệ sinh dọn dẹp nhà cửa theo nhu cầu của Khách hàng
              <br /> Mỗi gói gồm 02 nhân viên làm trong 4h + 01 giám sát nghiệm
              thu
              <br /> Sử dụng các loại hóa chất làm sạch & thiết bị chuyên dụng
            </p>
            <Button
              backgroundColor="#BFE3F2"
              borderRadius="15px"
              padding="16px 41px"
            >
              <Link to="/sign-in" style={{ textDecoration: "none", display: "none" }}>
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
      </div>
      <div className="row my-5">
        <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
          <div>
            <h1>Tại Sao Cần Tổng Vệ Sinh Nhà Cửa Thường Xuyên?</h1>
            <ul>
              <li>Đảm bảo môi trường sống trong lành, sạch sẽ</li>
              <li>Loại bỏ các loại bụi bẩn bám lâu ngày trong nhà</li>
              <li>Đảm bảo sức khoẻ cho các thành viên trong gia đình</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <img
            src="https://chuyenvesinhnha.com/wp-content/uploads/2016/12/doi-ve-sinh-nha-cua-aplite.jpg"
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

export default TotalSanitationPage;
