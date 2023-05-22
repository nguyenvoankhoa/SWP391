import React from "react";
import { Outlet } from "react-router-dom";
import Overlays from "./Overlays";
import EmployeeHeader from "../components/Employee/EmployeeHeader";

const EmployeeLayout = () => {
  return (
    <>
      <EmployeeHeader />
      <Overlays>
        <Outlet />
      </Overlays>
    </>
  );
};

export default EmployeeLayout;
