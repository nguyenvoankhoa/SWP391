import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeadingBar = () => {
  return (
    <nav className="custom-navbar navbar navbar navbar-expand-md">
      <div className="container-fluid">
        {/* LOGO */}
        <a className="navbar-brand logo" href="index.html">
          <img src="assets/images/LOGO.svg" alt="" />
        </a>

        {/* Navigation button when collapse */}
        <button
          className="navbar-toggler collapsed nav-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Services */}
        <div className="navbar-nav">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0 service-list">
            <li>
              <Link className="nav-link otp-service" href="index.html">
                DỊCH VỤ
                <div className="arrow"></div>
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

        {/* Login */}
        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5 login">
          <li>
            <Link className="nav-link user" href="#">
              <img src="assets/images/user.svg" alt=""></img>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeadingBar;
