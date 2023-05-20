import React from "react";
import { Link } from "react-router-dom";

const HeadingBar = () => {

  return (
    <nav className="custom-navbar navbar navbar navbar-expand-md" arial-label="CleanShine navigation bar">
      <div className="container-fluid">
        {/* LOGO */}
        <a class="navbar-brand" href="index.html"> <img src="assets/images/LOGO.svg" alt="" /></a>

        {/* NAVIGATION BUTTON */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsCleanShine"
          aria-controls="navbarsCleanShine"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        {/* NAVIGATION BAR */}
        <div className="collapse navbar-collapse" id="navbarsCleanShine">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0 service-list">
            <li class="nav-item">
              <div className="opt-services">
                <Link
                  className="nav-link btn btn-secondary dropdown-btn"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="shop.html"
                  style={{ position: 'relative' }}
                >
                  DỊCH VỤ
                  <div className="arrow"></div>
                </Link>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Vệ sinh định kỳ</a></li>
                  <li><a class="dropdown-item" href="#">Tổng dọn vệ sinh</a></li>
                  <li><a class="dropdown-item" href="#">Vệ sinh điều hòa</a></li>
                  <li><a class="dropdown-item" href="#">Nấu ăn</a></li>
                  <li><a class="dropdown-item" href="#">Sửa chữa</a></li>
                </ul>
              </div>
            </li>
            <li>
              <Link className="nav-link otp-service" href="shop.html">
                GIỚI THIỆU
              </Link>
            </li>
            <li>
              <Link className="nav-link otp-service" href="about.html">
                LIÊN HỆ
              </Link>
            </li>
            <li>
              <Link className="nav-link otp-service" href="services.html">
                TIN TỨC
              </Link>
            </li>
            <li>
              <Link className="nav-link otp-service" href="blog.html">
                CHÍNH SÁCH BẢO HÀNH
              </Link>
            </li>
          </ul>

          {/* Login */}
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5 login">
            <li>
              <Link className="nav-link user" href="#">
                <img src="assets/images/user.svg" alt=""></img>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  );
};

export default HeadingBar;
