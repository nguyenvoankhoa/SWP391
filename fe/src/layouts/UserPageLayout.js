import React from "react";
import UserHeader from "../components/User/UserHeader";
import { Outlet } from "react-router-dom";
import Overlays from "./Overlays";

const UserPageLayout = () => {
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
