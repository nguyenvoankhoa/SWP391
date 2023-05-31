import React from "react";
import AdminNavigation from "../components/Admin/AdminNavigation";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <>
      <div className="d-flex">
        <div>
          <AdminNavigation />
          <div>
            <Outlet />
          </div>
        </div>
      </div>

    </>
  );
};

export default AdminLayout;
