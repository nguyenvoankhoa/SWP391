import React from "react";
import "./HourlyHelp.css";
import { Link } from "react-router-dom";
import Title from "../../components/Title";
const HourlyHelp = () => {
  return (
    <div className="container-fluid service-container">
      <nav className="navbar navbar-expand-lg service-nav">
        <h1 className="text-center service-title">Giúp việc ca lẻ</h1>
        <Link>
          <img src="assets/images/prev.svg" alt="" />
        </Link>
      </nav>
      <div className="row gy-5 input-area">
        <div className="t-in">
          <label className="col-md-12 time-input">Thời gian dọn dẹp</label>
          <div className="col-md-12 d-flex justify-content-between mt-3 mb-5">
            <button className="col-md-5 service-time">
              <h3>2 giờ</h3>
              <p>Tối đa 60m2 mặt sàn</p>
            </button>
            <button className="col-md-5 service-time">
              <h3>2 giờ</h3>
              <p>Tối đa 60m2 mặt sàn</p>
            </button>
          </div>
          <div className="col-md-12 d-flex justify-content-between mt-3 mb-5">
            <button className="col-md-5 service-time">
              <h3>2 giờ</h3>
              <p>Tối đa 60m2 mặt sàn</p>
            </button>
            <button className="col-md-5 service-time d-flex justify-content-center">
              <img
                src="/assets/images/addition.svg"
                alt="img"
                width="20px"
              ></img>
              <h3 className="">Tùy chọn khác</h3>
            </button>
          </div>
        </div>
        <div className="col-md-12 d-flex justify-content-center cont-area">
          <button className="cont-btn">Tiếp tục</button>
          <button>
            <Link style={{ textDecoration: "none" }} to="..">
              <Title
                color="#000000"
                title="Quay lại"
                fontSize="20px"
                fontWeight="600"
              />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HourlyHelp;
