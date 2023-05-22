import React from "react";
import { Link } from "react-router-dom";
import "./AdminNavigation.css";

const AdminNavigation = () => {
    return (
        <div className="container-fluid sb-container">
            <div className="db-container">
                <Link className="dashboard-item">
                    Dashboard
                </Link>
            </div>
            <ul class="nav flex-column pt-5 sidebar-nav">
                <li class="nav-item pt-2 pb-2">
                    <Link className="nav-link sidebar-item">
                        Khách hàng
                    </Link>
                </li>
                <li class="nav-item pt-2 pb-2">
                    <Link className="nav-link sidebar-item">
                        Nhân viên
                    </Link>
                </li>
                <li class="nav-item pt-2 pb-2">
                    <Link className="nav-link sidebar-item">
                        Dịch vụ
                    </Link>
                </li>
            </ul>
        </div >
    );
}

export default AdminNavigation;