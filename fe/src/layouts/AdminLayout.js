import React from "react";
import AdminNavigation from "../components/Admin/AdminNavigation";
import { Outlet } from "react-router-dom";
import AdminHeadingLine from "../components/Admin/AdminHeadingLine";
import classes from "./AdminLayout.module.css";
const AdminLayout = () => {
  return (
    <>
      <AdminHeadingLine />
      <div className={classes.content}>
        <AdminNavigation />
        <div className={classes.outlet}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
