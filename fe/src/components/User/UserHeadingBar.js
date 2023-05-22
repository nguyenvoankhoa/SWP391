import React from "react";
import { NavLink } from "react-router-dom";
import Title from "../../components/Title";
import "../Header.css";
const UserHeadingBar = () => {
  return (
    <nav
      className="custom-navbar navbar navbar navbar-expand-md my-3"
      arial-label="CleanShine navigation bar"
    >
      <div className="container-fluid">
        {/* LOGO */}
        <NavLink className="navbar-brand" to="">
          {" "}
          <img src="/assets/images/LOGO.svg" alt="" />
        </NavLink>

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
          <ul
            className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0 service-list"
            id="nav-link"
          >
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link otp-service active"
                    : "nav-link otp-service"
                }
                to="/user"
                end
              >
                ĐẶT DỊCH VỤ
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link otp-service active"
                    : "nav-link otp-service"
                }
                to="history"
                end
              >
                LỊCH SỬ
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link otp-service active"
                    : "nav-link otp-service"
                }
                to="notification"
                end
              >
                THÔNG BÁO
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "nav-link otp-service active"
                    : "nav-link otp-service"
                }
                to="price"
                end
              >
                THÔNG TIN
              </NavLink>
            </li>
          </ul>
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li style={{ minWidth: "200px" }}>
              <NavLink className="nav-link otp-service" to="/">
                <Title
                  color="#000000"
                  title="ĐĂNG XUẤT"
                  fontSize="20px"
                  fontWeight="600"
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default UserHeadingBar;
