import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminNavigation.css";

const AdminNavigation = () => {
  return (
    <>
      <div className="container-fluid sb-container">
        <ul class="nav flex-column pt-5 sidebar-nav">
          <li class="nav-item pt-2 pb-2">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link sidebar-item active"
                  : "nav-link sidebar-item"
              }
              to="edit-customer"
              end
            >
              Khách hàng
            </NavLink>
          </li>
          <li class="nav-item pt-2 pb-2">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link sidebar-item active"
                  : "nav-link sidebar-item"
              }
              to="edit-employee"
              end
            >
              Nhân viên
            </NavLink>
          </li>
          <li class="nav-item pt-2 pb-2">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link sidebar-item active"
                  : "nav-link sidebar-item"
              }
              to="edit-service"
              end
            >
              Dịch vụ
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminNavigation;
