import React from "react";
import { NavLink } from "react-router-dom";
import "./UserHeader.css";
const UserHeadingBar = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <div className="nav-container">
      <ul className="nav flex-column nav-content">
        <li className="nav-item user-hb-avt" type="button">
          <NavLink className="nav-link d-flex" to="account-infor">
            {" "}
            <img className="nav-avt" src="/assets/images/person1.svg" alt="" />
          </NavLink>
        </li>
        <li className="nav-item user-hb-name" type="button">
          <span className="nav-text">
            {user.name}
            <div className="seperator"></div>
          </span>
        </li>
        <li className="nav-item d-flex" type="button">
          <img
            className="nav-icon"
            src="/assets/images/home.svg"
            alt="icon"
          ></img>
          <NavLink className="nav-link" to="">
            Trang chủ
          </NavLink>
        </li>
        <li className="nav-item d-flex" type="button">
          <img
            className="nav-icon"
            src="/assets/images/action.svg"
            alt="icon"
          ></img>
          <NavLink className="nav-link" to="action-record">
            Hoạt động
          </NavLink>
        </li>
        <li className="nav-item d-flex" type="button">
          <img
            className="nav-icon"
            src="/assets/images/user.svg"
            alt="icon"
          ></img>
          <NavLink className="nav-link" to="account-infor">
            Tài khoản
          </NavLink>
        </li>
        <li className="nav-item d-flex" type="button">
          <img
            className="nav-icon"
            src="/assets/images/exit.svg"
            alt="icon"
          ></img>
          <NavLink className="nav-link" to="/">
            Đăng xuất
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default UserHeadingBar;
