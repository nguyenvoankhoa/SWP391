import React from "react";
import "./HourlyHelp.css";
import { Link } from "react-router-dom";

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
        <div className="col-md-12">
          <label className="location-input">Địa điểm làm việc</label>
          <input type="text" className="service-location mt-3"></input>
        </div>
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
            <button className="col-md-5 service-time align-middle">
              <img src="assets/images/addition.svg" alt=""></img>
              <h3 className="">Tùy chọn khác</h3>
            </button>
          </div>
        </div>
        <div className="col-md-12 d-flex justify-content-center cont-area">
          <button className="cont-btn">Tiếp tục</button>
        </div>
      </div>
    </div>
  );
};

export default HourlyHelp;
