import { NavLink } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import "./AdminNavigation.css";
import { useState } from "react";

const AdminNavigation = () => {
  const { logout } = useLogout(); // Call the useLogout hook

  const logoutHandler = async () => {
    await logout(); // Call the logout function from the useLogout hook
  };

  const [displayItem, setDisplayItem] = useState("");

  const handleClick = (event) => {
    const value = event.target.innerHTML;
    setDisplayItem(value);
  }

  return (
    <div className="nav-container admin-container">
      <ul className="nav flex-column nav-content">
        <li className="text-center ad-name">
          Admin
        </li>
        {/* Dashboard */}
        <li>
          <NavLink className="nav-link" to="edit-customer">
            Thống kê
          </NavLink>
        </li>
        {/* Đơn đặt hàng, chia ra thành định kỳ, đơn lẻ, vô trong có sort theo tình trạng như là: chưa hoàn thành, đã hoàn thành, đã thanh toán. */}
        <li>
          <NavLink className="nav-link flex-column" to="edit-employee" onClick={handleClick}>
            Đơn đặt hàng
          </NavLink>
          {
            displayItem === "Đơn đặt hàng" &&
            <ul className="sub-menu">
              <li>
                <NavLink className="nav-link" to="">
                  Vệ sinh định kỳ
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="">
                  Vệ sinh một lần
                </NavLink>
              </li>
            </ul>
          }
        </li>
        {/* Phân chia nhân viên theo chuyên môn: Vdu vệ sinh định kỳ, dọn dẹp máy lạnh, ... */}
        <li>
          <NavLink className="nav-link" to="edit-service" onClick={handleClick}>
            Nhân viên
          </NavLink>
          {
            displayItem === "Nhân viên" &&
            <ul className="sub-menu">
              <li>
                <NavLink className="nav-link" to="">
                  Nhân viên vệ sinh
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="">
                  Nhân viên máy lạnh
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="">
                  Nhân viên sofa
                </NavLink>
              </li>
            </ul>
          }
        </li>
        {/* Phân chia dịch vụ theo từng loại hình dịch vụ: vsinh định kỳ, máy lạnh, sofa,... */}
        <li>
          <NavLink className="nav-link" to="order-service" onClick={handleClick}>
            Dịch vụ
          </NavLink>
          {
            displayItem === "Dịch vụ" &&
            <ul className="sub-menu">
              <li>
                <NavLink className="nav-link" to="">
                  Vệ sinh định kỳ
                </NavLink>

              </li>
              <li>
                <NavLink className="nav-link" to="">
                  Vệ sinh một lần
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="">
                  Vệ sinh máy lạnh
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="">
                  Vệ sinh sofa
                </NavLink>
              </li>
            </ul>
          }
        </li>
        {/* Đơn hàng của admin thì update thêm thông tin trong page đơn hàng */}
        <li>
          <NavLink className="nav-link" to="">
            Đơn hàng
          </NavLink>
        </li>
        <li className="nav-link" type="button" onClick={logoutHandler}>
          <NavLink className="nav-link">Đăng xuất</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavigation;
