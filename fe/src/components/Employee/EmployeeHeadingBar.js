import React from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Title";
const EmployeeHeadingBar = () => {
  return (
    <nav
      className="custom-navbar navbar navbar navbar-expand-md my-3"
      arial-label="CleanShine navigation bar"
    >
      <div className="container-fluid d-flex justify-content-end">
        <div id="navbarsCleanShine">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0 service-list"></ul>
          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li style={{ minWidth: "200px" }}>
              <Link className="nav-link otp-service" to="/">
                <Title
                  color="#000000"
                  title="ĐĂNG XUẤT"
                  fontSize="20px"
                  fontWeight="600"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default EmployeeHeadingBar;
