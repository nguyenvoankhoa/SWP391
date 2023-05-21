import React from "react";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
const NewsItem = () => {
  return (
    <div className="my-5">
      <Card className>
        <div className="row">
          <div className="col-4 d-flex ">
            <img
              src="https://thptbinhthanh.edu.vn/wp-content/uploads/99-Hinh-Anh-MEO-CUTE-De-Thuong-CUNG-MUON-XIU.jpg"
              alt=""
              style={{ width: "80%" }}
              className="justify-content-center align-items-sm-center"
            />
          </div>
          <div className="col-8">
            <h1>Bảng giá giúp việc tại CleanShine</h1>
            <p>15/5/2023</p>
            <Link
              to="/services"
              style={{ textDecoration: "none", color: "#535353" }}
            >
              Xem thêm {">>"}
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NewsItem;
