import React from "react";
import HeadingLine from "../HeadingLine";
import EmployeeHeadingBar from "./EmployeeHeadingBar";
const EmployeeHeader = () => {
  return (
    <>
      <nav>
        <HeadingLine />
        <EmployeeHeadingBar />
      </nav>
    </>
  );
};

export default EmployeeHeader;
