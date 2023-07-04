import React from "react";
import AdminNavigation from "../components/Admin/AdminNavigation";
import { Outlet } from "react-router-dom";
import Overlays from "./Overlays";
const AdminLayout = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-2 col-md-12">
          <AdminNavigation />
        </div>
        <div className="col-lg-10 offset-md-2">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
