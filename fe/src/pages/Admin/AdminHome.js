import React from "react";
import { useLoaderData } from "react-router-dom";
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
      <div className="bg user-navbar" />
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
