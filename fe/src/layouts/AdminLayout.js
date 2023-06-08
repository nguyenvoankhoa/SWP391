import React from "react";
import AdminNavigation from "../components/Admin/AdminNavigation";
import { Outlet } from "react-router-dom";
import useTokenRefresh from "../hooks/useTokenRefresh";
const AdminLayout = () => {
  useTokenRefresh();
  return (
    <>
      <div className="row">
        <div className="">
          <AdminNavigation />
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
