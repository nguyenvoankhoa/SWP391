import { NavLink, useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import "./AdminNavigation.css";
import { useState } from "react";

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

  return (
    <div className="nav-container admin-container">
      <ul className="nav flex-column nav-content">
        <li className="text-center ad-name mt-2 mb-2">Admin</li>
        {/* Dashboard */}
        <li>
          <NavLink className="nav-link" to="" onClick={handleActiveClick}>
            Thống kê
          </NavLink>
        </li>
        {/* Đơn đặt hàng, chia ra thành định kỳ, đơn lẻ, vô trong có sort theo tình trạng như là: chưa hoàn thành, đã hoàn thành, đã thanh toán. */}
        <li>
          <NavLink
            className="nav-link flex-column"
            to="edit-customer"
            onClick={handleActiveClick}
          >
            Khách hàng
          </NavLink>
        </li>
        {/* Phân chia nhân viên theo chuyên môn: Vdu vệ sinh định kỳ, dọn dẹp máy lạnh, ... */}
        <li>
          <NavLink
            className="nav-link"
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
        {/* Phân chia dịch vụ theo từng loại hình dịch vụ: vsinh định kỳ, máy lạnh, sofa,... */}
        <li>
          <NavLink
            className="nav-link"
            to="edit-service"
            onClick={handleActiveClick}
          >
            Dịch vụ
          </NavLink>
          {displayItem === "Dịch vụ" && (
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
        {/* Đơn hàng của admin thì update thêm thông tin trong page đơn hàng */}
        <li>
          <NavLink
            className="nav-link"
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
          <NavLink className="nav-link">Đăng xuất</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavigation;
