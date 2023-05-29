import React, { useEffect } from "react";
import Button from "../UI/Button";
import Title from "../components/Title";
import { Link, useLoaderData, json } from "react-router-dom";
import "./HourlyHelpPage.css";
import Price from "../components/Price";
const HourlyHelpPage = () => {
  const product1 = [
    {
      type: "Dịch vụ dọn dẹp",
      name: "2h(55m2/2 phòng)",
      price: "150.000",
      id: "1",
    },
    {
      type: "Dịch vụ dọn dẹp",
      name: "3h(85m2/3 phòng)",
      price: "200.000",
      id: "2",
    },
    {
      type: "Dịch vụ dọn dẹp",
      name: "4h(105m2/4 phòng)",
      price: "250.000",
      id: "3",
    },
  ];
  return (
    <div className="container help-page-container">
      <div className="row my-5">
        <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
          <div>
            <h3 className="title">
              Tìm Giúp Việc Theo Giờ Chuyên Nghiệp Cùng CleanShine
            </h3>
            <p className="text-detail">
              Bạn cần tìm người giúp việc theo giờ hỗ trợ việc nhà? Đặt
              CleanShine - Dịch vụ giúp việc theo giờ chuyên nghiệp theo tiêu
              chuẩn xanh, sạch, đẹp. Đặt lịch giúp việc nhà đơn giản, nhanh
              chóng chỉ với 30s trên ứng dụng CleanShine.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <img
            src="/assets/images/staff-cleaning.svg"
            alt="img"
            style={{
              width: "550px",
            }}
          />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-lg-6 col-sm-12">
          <img
            src="/assets/images/contentchung.svg"
            alt="img"
            className="w-100"
          />
        </div>
        <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
          <div>
            <h3 className="title">Giới Thiệu</h3>
            <p className="text-detail">
              CleanShine - Với nhiều năm kinh nghiệm trong lĩnh vực vệ sinh công
              nghiệp, chúng tôi tự tin là đơn vị cung cấp các giải pháp vệ sinh
              đa dạng phù hợp vói mọi nhu cầu của Quý khách hàng từ dịch vụ vệ
              sinh theo ngày, giờ, hàng ngày cho đến các dịch vụ vệ sinh định kỳ
              như giặt thảm, ghế sofa,...
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
              backgroundColor="#397F77"
              borderRadius="15px"
              padding="16px 41px"
            >
              <Link to="/sign-in" style={{ textDecoration: "none" }}>
                <Title
                  color="#FFFFFF"
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
            style={{
              width: "500px",
            }}
          />
        </div>
      </div>
      <div className="row my-5">
        <h1 className="text-center">Bảng giá dịch vụ</h1>
        <Price product1={product1} />
      </div>
    </div>
  );
};

export default HourlyHelpPage;

export async function loader() {
  const res = await fetch("http://localhost:8080/electronic-cleaning");
  if (!res.ok) {
    throw json({ message: "can not load item" }, { status: 500 });
  } else {
    const data = await res.json();
    return data;
  }
}
