import React from "react";
import AdminNavigation from "../components/Admin/AdminNavigation";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <>
      <div className="row">
        <div className="col-2" style={{ padding: 0 }}>
          <AdminNavigation />
        </div>

        <div className="col-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
