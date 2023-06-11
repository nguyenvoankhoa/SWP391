import React from "react";
import AdminNavigation from "../components/Admin/AdminNavigation";
import { Outlet } from "react-router-dom";
import useTokenRefresh from "../hooks/useTokenRefresh";
import Overlays from "./Overlays";
const AdminLayout = () => {
  // useTokenRefresh();
  return (
    <>
      <Overlays>
        <div className="row">
          <div className="col-lg-2 col-md-12">
            <AdminNavigation />
          </div>
          <div className="col-lg-10 col-md-12">
            <Outlet />
          </div>
        </div>
      </Overlays>
    </>
  );
};

export default AdminLayout;
