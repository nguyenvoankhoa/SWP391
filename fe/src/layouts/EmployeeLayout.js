import React from "react";
import { Outlet } from "react-router-dom";
import EmployeeNavigation from "../components/Employee/EmployeeNavigation";
import useTokenRefresh from "../hooks/useTokenRefresh";

const EmployeeLayout = () => {
  // useTokenRefresh();
  return (
    <>
      <div className="d-flex">
        <div>
          <EmployeeNavigation />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeLayout;
