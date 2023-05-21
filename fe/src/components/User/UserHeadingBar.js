import React from "react";
import { Link } from "react-router-dom";

const UserHeadingBar = () => {
  return (
    <nav
      className="custom-navbar navbar navbar navbar-expand-md my-3"
      arial-label="CleanShine navigation bar"
    >
      <div className="container-fluid">
        {/* LOGO */}
        <Link className="navbar-brand" to="">
          {" "}
          <img src="assets/images/LOGO.svg" alt="" />
        </Link>

        {/* NAVIGATION BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsCleanShine"
          aria-controls="navbarsCleanShine"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAVIGATION BAR */}
        <div className="collapse navbar-collapse" id="navbarsCleanShine">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0 service-list">
            <li className="nav-item">
              <Link className="nav-link otp-service">ĐẶT DỊCH VỤ</Link>
            </li>
            <li>
              <Link className="nav-link otp-service" to="history">
                LỊCH SỬ
              </Link>
            </li>
            <li>
              <Link className="nav-link otp-service" to="notification">
                THÔNG BÁO
              </Link>
            </li>
            <li>
              <Link className="nav-link otp-service" to="price">
                THÔNG TIN
              </Link>
            </li>
          </ul>
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5 login">
            <li>
              <Link className="nav-link user" to="/">
                <img src="assets/images/logout.svg" alt=""></img>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserHeadingBar;
