import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AdminNavigation = () => {
  const nav = useNavigate();
  async function logoutHandler() {
    const res = await fetch("https://swp391-production.up.railway.app/logout");
    if (!res.ok) {
      throw new Error("error");
    } else {
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("jwtToken");
      nav("/");
    }
  }
  return (
    <div className="nav-container">
      <ul className="nav flex-column nav-content">
        <li className="nav-item" type="button">
          <NavLink className="nav-link d-flex" to="">
            {" "}
            <img className="nav-avt" src="/assets/images/person1.svg" alt="" />
          </NavLink>
        </li>
        <li className="nav-item user-hb-name" type="button">
          <span className="nav-text">
            Admin
            <div
              className="seperator"
              style={{
                width: "120px",
              }}
            ></div>
          </span>
        </li>
        <li className="nav-item d-flex" type="button">
          <NavLink className="nav-link" to="">
            Trang chủ
          </NavLink>
        </li>
        <li className="nav-item d-flex" type="button">
          <NavLink className="nav-link" to="edit-customer">
            Khách Hàng
          </NavLink>
        </li>
        <li className="nav-item d-flex" type="button">
          <NavLink className="nav-link" to="edit-employee">
            Nhân viên
          </NavLink>
        </li>
        <li className="nav-item d-flex" type="button">
          <NavLink className="nav-link" to="edit-service">
            Dịch vụ
          </NavLink>
        </li>
        <li className="nav-item d-flex" type="button">
          <NavLink className="nav-link" to="order-service">
            Đơn hàng
          </NavLink>
        </li>
        <li className="nav-item d-flex" type="button" onClick={logoutHandler}>
          <NavLink className="nav-link">Đăng xuất</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavigation;
