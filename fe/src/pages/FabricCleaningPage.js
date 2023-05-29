import React from "react";
import Button from "../UI/Button";
import Title from "../components/Title";
import { Link, useLoaderData } from "react-router-dom";
import Price from "../components/Price";
const FabricCleaningPage = () => {
  const data = useLoaderData();
  const ELECTRONIC_CLEANING = data.filter((item) => {
    return item.name === "Vệ sinh nệm, sofa, thảm";
  });
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-6 col-sm-12">
          <h1>Dịch Vụ Vệ Sinh Sofa Tại Nhà Chuyên Nghiệp</h1>
          <p>
            JupSofa - Dịch vụ vệ sinh Sofa, đệm, rèm, thảm sử dụng công nghệ
            tiên tiến từ Đức giúp làm sạch sâu các vết ố bẩn, nấm mốc, ố vàng.
            Hơn 2.000 Khách hàng đã tin tưởng và sử dụng dịch vụ của chúng tôi.
          </p>
        </div>
        <div className="col-lg-6 col-sm-12">
          <img
            src="https://cdn.jupviec.vn/sec1_1900_09eb73895b.jpg"
            alt="img"
            className="w-100"
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
            {" "}
            <h1>Giới Thiệu</h1>
            <p>
              CleanShine - Dịch vụ vệ sinh Sofa, đệm, rèm, thảm sử dụng công
              nghệ tiên tiến từ Đức được Khách hàng tin tưởng và sử dụng trong
              suốt thời gian qua.
              <br /> Chỉ với một vài thao tác đơn giản trên ứng dụng, Khách hàng
              đã tìm được Dịch vụ Vệ sinh Sofa uy tín, chuyên nghiệp với nhiều
              ưu đãi hấp dẫn.
              <br /> Hiện tại CleanShine - Dịch vụ Sofa cung cấp dịch vụ tại Hà
              Nội, Tp.Hồ Chí Minh, Hải Phòng.
            </p>
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
      </div>
      <div className="row my-5">
        <div className="col-lg-6 col-sm-12 d-flex justify-content-center align-items-center">
          <div>
            <h1>Tại Sao Cần Vệ Sinh Sofa Thường Xuyên?</h1>
            <ul>
              <li>Loại bỏ các loại vi khuẩn gây bệnh tích tụ lâu ngày</li>
              <li>Giữ cho ghế Sofa luôn mới</li>
              <li>Nâng cao tuổi thọ Sofa, tiết kiệm chi phí thay đổi</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <img
            src="/assets/images/living-room-animate.svg"
            alt="img"
            className="w-100"
          />
        </div>
      </div>
      <div className="row my-5">
        <h1 className="text-center">Bảng giá dịch vụ</h1>
        <Price product1={ELECTRONIC_CLEANING} />
      </div>
    </div>
  );
};

export default FabricCleaningPage;
