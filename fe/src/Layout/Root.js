import React from "react";
import Header from "../views/header/Header";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
