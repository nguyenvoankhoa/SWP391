import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import "./AdminNavigation.css";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";

const AdminNavigation = () => {
  const { logout } = useLogout(); // Call the useLogout hook

  const logoutHandler = async () => {
    await logout(); // Call the logout function from the useLogout hook
  };

  const [displayItem, setDisplayItem] = useState("");
  const [selectedPath, setSelectedPath] = useState("");
  const navigate = useNavigate();

  const handleActiveClick = (event) => {
    const value = event.target.innerHTML;
    setSelectedPath(event.target.getAttribute("href"));
    setDisplayItem(value);
  };

  const handleNavigateClick = (event) => {
    const selectedService = event.target.innerHTML;
    const link = `${selectedPath}/${selectedService}`;
    navigate(link);
  };

  const [open, setOpen] = React.useState(false);
  const handleSubMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="nav-container admin-container">
      <ul className="nav flex-column nav-content">
        <li className="text-center ad-name mt-2 mb-2">Admin</li>
        <li className="nav-item d-flex" type="button">
          <img
            className="nav-icon"
            src="/assets/images/bar-chart.svg"
            alt="icon"
          ></img>
          <NavLink className="nav-link" to="" onClick={handleActiveClick}>
            Thống kê
          </NavLink>
        </li>
        <li className="nav-item d-flex" type="button">
          <img
            className="nav-icon"
            src="/assets/images/customers.svg"
            alt="icon"
          ></img>
          <NavLink
            className="nav-link"
            to="edit-customer"
            onClick={handleActiveClick}
          >
            Khách hàng
          </NavLink>
        </li>
        {/* Phân chia nhân viên theo chuyên môn: Vdu vệ sinh định kỳ, dọn dẹp máy lạnh, ... */}
        <li>
          <NavLink
            className="nav-link ad-services"
            to="edit-employee"
            onClick={handleActiveClick}
          >
            Nhân viên
          </NavLink>
          {displayItem === "Nhân viên" && (
            <ul className="sub-menu">
              <li>
                <NavLink
                  className="nav-link"
                  to="#"
                  onClick={handleNavigateClick}
                >
                  Giúp việc theo giờ
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="#"
                  onClick={handleNavigateClick}
                >
                  Tổng vệ sinh
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="#"
                  onClick={handleNavigateClick}
                >
                  Vệ sinh máy lạnh
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="#"
                  onClick={handleNavigateClick}
                >
                  Vệ sinh nệm, sofa, thảm
                </NavLink>
              </li>
            </ul>
          )}
        </li>

        <li className="nav-item d-flex" type="button">
          <img
            className="nav-icon"
            src="/assets/images/card-checklist.svg"
            alt="icon"
          ></img>
          <NavLink className="nav-link" onClick={handleSubMenu}>
            Dịch vụ
          </NavLink>
                  Giúp việc theo giờ
                </NavLink>
              </li>
              <li>
        </li>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              component={NavLink}
              to="#"
              onClick={handleNavigateClick}
              sx={{
                pl: 5,
                color: "rgb(120, 120, 120)",
                "&:hover": {
                  backgroundColor: "#9dcec8",
                  color: "rgb(120, 120, 120)",
                },
              }}
            >
              <ListItemText primary="Giúp việc theo giờ" />
            </ListItemButton>
          </List>

          <List component="div" disablePadding>
            <ListItemButton
              component={NavLink}
              to="#"
              onClick={handleNavigateClick}
              sx={{
                pl: 5,
                color: "rgb(120, 120, 120)",
                "&:hover": {
                  backgroundColor: "#9dcec8",
                  color: "rgb(120, 120, 120)",
                },
              }}
            >
              <ListItemText primary="Tổng vệ sinh" />
            </ListItemButton>
          </List>

          <List component="div" disablePadding>
            <ListItemButton
              component={NavLink}
              to="#"
              onClick={handleNavigateClick}
              sx={{
                pl: 5,
                color: "rgb(120, 120, 120)",
                "&:hover": {
                  backgroundColor: "#9dcec8",
                  color: "rgb(120, 120, 120)",
                },
              }}
            >
              <ListItemText primary="Vệ sinh máy lạnh" />
            </ListItemButton>
          </List>

          <List component="div" disablePadding>
            <ListItemButton
              component={NavLink}
              to="#"
              onClick={handleNavigateClick}
              sx={{
                pl: 5,
                color: "rgb(120, 120, 120)",
                "&:hover": {
                  backgroundColor: "#9dcec8",
                  color: "rgb(120, 120, 120)",
                },
              }}
            >
              <ListItemText primary="Vệ sinh sofa, nệm" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* Đơn hàng của admin thì update thêm thông tin trong page đơn hàng */}
        <li>
          <NavLink
            className="nav-link ad-services"
            to="order-service"
            onClick={handleActiveClick}
          >
            Đơn hàng
          </NavLink>
          {displayItem === "Đơn hàng" && (
            <ul className="sub-menu">
              <li>
                <NavLink
                  className="nav-link"
                  to="#"
                  onClick={handleNavigateClick}
                >
                  Giúp việc theo giờ
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="#"
                  onClick={handleNavigateClick}
                >
                  Tổng vệ sinh
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="#"
                  onClick={handleNavigateClick}
                >
                  Vệ sinh máy lạnh
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-link"
                  to="#"
                  onClick={handleNavigateClick}
                >
                  Vệ sinh nệm, sofa, thảm
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li type="button" onClick={logoutHandler}>
          <NavLink className="nav-link ad-services">Đăng xuất</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavigation;
