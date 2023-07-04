import React from "react";
import UserHeader from "../components/User/UserHeader";
import { Outlet } from "react-router-dom";
import Overlays from "./Overlays";
import Footer from "../components/Footer";

const UserPageLayout = () => {
  return (
    <Overlays>
      <div className="row">
        <div className="col-lg-2 col-md-12" style={{padding: 0}}>
          <UserHeader />
        </div>
        <div className="col-md-10 offset-md-2">
          <Outlet />
        </div>
      </div>
      </Overlays>
  );
};

export default UserPageLayout;
