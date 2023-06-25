import * as React from "react";
import useLogout from "../../hooks/useLogout";
import { NavLink } from "react-router-dom";
import "./UserHeader.css";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Typography } from "@mui/material";
const UserHeadingBar = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const { logout } = useLogout(); // Call the useLogout hook

  const logoutHandler = async () => {
    await logout(); // Call the logout function from the useLogout hook
  };
  const [open, setOpen] = React.useState(false);

  const handleSubMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="nav-container">
      <ul className="nav flex-column nav-content">
        <li
          className="nav-item user-hb-avt"
          type="button"
          style={{ paddingLeft: 10 }}
        >
          <NavLink className="nav-link d-flex" to="account-infor">
            <div className="user-hb-container">
              <img
                className="rounded-circle"
                src="/assets/images/thay Hoang.svg"
                alt=""
                style={{ width: "30%" }}
              />
              <span
                className="nav-text"
                style={{ paddingLeft: 15, fontWeight: "bold",   paddingTop: "14%" }}
              >
                Hi {user.name}
                <hr className="seperator"></hr>
                <div style={{ display: "flex", alignItems: "center", paddingTop: "5%"  }}>
                  <EditOutlinedIcon style={{ width: "15%"}} />
                  <Typography style={{ marginLeft: "5px" }}>
                    Sửa hồ sơ
                  </Typography>
                </div>
              </span>
            </div>
          </NavLink>
        </li>

        <li className="nav-item d-flex" type="button">
          <img
            className="nav-icon"
            src="/assets/images/house.svg"
            alt="icon"
          ></img>
          <NavLink className="nav-link" to="">
            Trang chủ
          </NavLink>
        </li>
        {/* Activity's sub-menu include: hourly help, total sanitation, electronic and fabric cleaning */}
        <li className="nav-item d-flex" type="button" onClick={handleSubMenu}>
          <img
            className="nav-icon"
            src="/assets/images/activity.svg"
            alt="icon"
          ></img>
          <NavLink className="nav-link">Hoạt động</NavLink>
        </li>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              component={NavLink}
              to="action-record"
              sx={{
                pl: 10,
                "&:hover": {
                  backgroundColor: "#9dcec8",
                  color: "black",
                },
              }}
            >
              <ListItemText primary="Giúp việc theo giờ" />
            </ListItemButton>
          </List>

          <List component="div" disablePadding>
            <ListItemButton
              component={NavLink}
              to="action-record"
              sx={{
                pl: 10,
                "&:hover": {
                  backgroundColor: "#9dcec8",
                  color: "black",
                },
              }}
            >
              <ListItemText primary="Tổng vệ sinh" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton
              component={NavLink}
              to="action-record"
              sx={{
                pl: 10,
                "&:hover": {
                  backgroundColor: "#9dcec8",
                  color: "black",
                },
              }}
            >
              <ListItemText primary="Vệ sinh sofa, nệm" />
            </ListItemButton>
          </List>
          <List component="div" disablePadding>
            <ListItemButton
              component={NavLink}
              to="action-record"
              sx={{
                pl: 10,
                "&:hover": {
                  backgroundColor: "#9dcec8",
                  color: "black",
                },
              }}
            >
              <ListItemText primary="Vệ sinh máy lạnh" />
            </ListItemButton>
          </List>
        </Collapse>
        <li className="nav-item d-flex" type="button">
          <img
            className="nav-icon"
            src="/assets/images/history.svg"
            alt="icon"
          ></img>
          <NavLink className="nav-link" to="action-record">
            Lịch sử
          </NavLink>
        </li>
        <li className="nav-item d-flex" type="button">
          <img
            className="nav-icon"
            src="/assets/images/person.svg"
            alt="icon"
          ></img>
          <NavLink className="nav-link" to="account-infor">
            Tài khoản
          </NavLink>
        </li>
        <li className="nav-item d-flex" type="button" onClick={logoutHandler}>
          <img
            className="nav-icon"
            src="/assets/images/box-arrow-right.svg"
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
