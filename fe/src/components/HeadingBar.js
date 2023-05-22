import React from "react";
import { Link } from "react-router-dom";

const HeadingBar = () => {
  return (
    <nav
      className="custom-navbar navbar navbar navbar-expand-md my-3"
      arial-label="CleanShine navigation bar"
    >
      <div className="container-fluid">
        {/* LOGO */}
        <Link className="navbar-brand" to="/">
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
            <li>
              <Link className="nav-link otp-service" to="">
                TRANG CHỦ
              </Link>
            </li>
            <li className="nav-item">
              <div className="opt-services">
                <Link
                  className="nav-link btn btn-secondary dropdown-btn"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ position: "relative" }}
                >
                  DỊCH VỤ
                  <div className="arrow"></div>
                </Link>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="services/hourly-help">
                      Giúp việc theo giờ
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="services/total-senitation"
                    >
                      Tổng vệ sinh
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="services/electronic-cleaning"
                    >
                      Vệ sinh điều hòa
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="services/fabric-cleaning"
                    >
                      Vệ sinh sofa
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link className="nav-link otp-service" to="contact">
                LIÊN HỆ
              </Link>
            </li>
            <li>
              <Link className="nav-link otp-service" to="news">
                TIN TỨC
              </Link>
            </li>
            <li>
              <Link className="nav-link otp-service" to="guarantee">
                CHÍNH SÁCH BẢO HÀNH
              </Link>
            </li>
          </ul>

          {/* Login */}
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5 login">
            <li>
              <Link to="sign-in" className="nav-link user" href="#">
                <img src="assets/images/user.svg" alt=""></img>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeadingBar;
