import React from "react";
import { useLoaderData } from "react-router-dom";
import Title from "../../components/Title";
import styles from "./AdminHome.module.css";
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from "recharts";
import {Bar, PieChart, Pie} from "recharts";

const AdminHome = () => {
  const data = useLoaderData();
  const HOURLY_HELP = data.filter((item) => item.name === "Giúp việc theo giờ");
  const TOTAL_SANITATION = data.filter((item) => item.name === "Tổng vệ sinh");
  const FABRIC_CLEANING = data.filter(
    (item) => item.name === "Vệ sinh nệm, sofa, thảm"
  );
  const ELECTRONIC_CLEANING = data.filter(
    (item) => item.name === "Vệ sinh máy lạnh"
  );
  console.log(HOURLY_HELP);
  console.log(TOTAL_SANITATION);

  return (
    <>
      <div
        className="container"
        style={{
          height: "auto",
        }}
      >
        <Title
          title="DỊCH VỤ VỆ SINH"
          color="black"
          fontSize="35px"
          fontWeight="2000"
          padding="2% 0 0  0"
        />
        <div className="container">
          <div className={styles.bg + " row"}>
            {/* <BarChart width={730} height={1000} data={}>
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="date" />
              <YAxis /> 
              <Tooltip />
              <Legend />
              <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
            <PieChart t width={730} height={250}>
              <Pie data={} dataKey="order" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            </PieChart> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
export async function businessInWeek() {
  const token = sessionStorage.getItem("jwtToken");
  const res = await fetch(
    "https://swp391-production.up.railway.app/admin/bill-by-week",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!res.ok) {
    throw new Error("error");
  } else {
    const data = await res.json();
    return data;
  }
}
export async function businessInPercent() {
  const token = sessionStorage.getItem("jwtToken");
  const res = await fetch(
    "https://swp391-production.up.railway.app/admin/bill-by-week",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!res.ok) {
    throw new Error("error");
  } else {
    const data = await res.json();
    return data;
  }
}
