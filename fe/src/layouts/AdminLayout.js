import React from "react";
import AdminNavigation from "../components/Admin/AdminNavigation";
import { Outlet } from "react-router-dom";
import classes from "./AdminLayout.module.css";
const AdminLayout = () => {
  return (
    <>
      <div className="d-flex">
        <div className={classes.content}>
          <AdminNavigation />
          <div className={classes.outlet}>
            <Outlet />
          </div>
        </div>
      </div>

    </>
  );
};

export default AdminLayout;
