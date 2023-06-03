import React from "react";
import { Outlet } from "react-router-dom";
import EmployeeNavigation from "../components/Employee/EmployeeNavigation";

const EmployeeLayout = () => {
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
