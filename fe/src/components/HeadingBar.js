import React from "react";
import { Link } from "react-router-dom";

const HeadingBar = () => {
  return (
    <nav className="custom-navbar navbar navbar navbar-expand-md">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          icon
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item active">
              <Link className="nav-link" href="index.html">
                DỊCH VỤ
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="shop.html">
                GIỚI THIỆU
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="about.html">
                LIÊN HỆ
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="services.html">
                TIN TỨC
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="blog.html">
                CHÍNH SÁCH BẢO HÀNH
              </Link>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <Link className="nav-link" href="#">
                <img src="images/user.svg" />
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="cart.html">
                <img src="images/cart.svg" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeadingBar;
