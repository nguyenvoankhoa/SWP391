import React from "react";
import { Link } from "react-router-dom";

const HeadingBar = () => {

  return (
    <div className="container-fluid">

      {/* LOGO */}
      <a className="navbar-brand logo" href="index.html">
        <img src="assets/images/LOGO.svg" alt="" />
      </a>

      {/* Services */}
      <nav
        className="custom-navbar navbar navbar navbar-expand-md heading-bar"
        type="button"
      >
        <div
          className="navbar-nav"
        >
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0 service-list">
            <li>
              <Link
                className="nav-link otp-service service-options"
                type="button"
                href="shop.html"
                style={{ position: 'relative' }}
              >
                DỊCH VỤ
                <div className="arrow"></div>
                <div className="service-dropdown">
                  <ul>
                    <li src>Service 1</li>
                    <li>Service 2</li>
                    <li>Service 3</li>
                    <li>Service 4</li>
                    <li>Service 5</li>
                  </ul>
                </div>
              </Link>
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
        </div>
      </nav>

      {/* Login */}
      <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5 login">
        <li>
          <Link className="nav-link user" href="#">
            <img src="assets/images/user.svg" alt=""></img>
          </Link>
        </li>
      </ul>
      <button className="nav-btn show-btn">
        <img src="assets/images/menu.svg" alt="" />
      </button>
    </div>

  );
};

export default HeadingBar;
