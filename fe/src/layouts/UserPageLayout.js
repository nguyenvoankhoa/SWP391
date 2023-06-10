import React from "react";
import UserHeader from "../components/User/UserHeader";
import { Outlet } from "react-router-dom";
import Overlays from "./Overlays";
import useTokenRefresh from "../hooks/useTokenRefresh";

const UserPageLayout = () => {
  // useTokenRefresh();
  return (
    <>
      <UserHeader />
      <Overlays>
        <Outlet />
      </Overlays>
    </>
  );
};

export default UserPageLayout;
