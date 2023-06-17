import React from "react";
import { useLoaderData } from "react-router-dom";
import Title from "../../components/Title";
import styles from "./AdminHome.module.css";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";
import { Bar, PieChart, Pie } from "recharts";

const AdminHome = () => {
  const data = useLoaderData();
  const HOURLY_HELP = data.filter((item) => item.name === "Giúp việc theo giờ");
  const TOTAL_SANITATION = data.filter((item) => item.name === "Tổng vệ sinh");
  const FABRIC_CLEANING = data.filter((item) => item.name === "Vệ sinh nệm, sofa, thảm");
  const ELECTRONIC_CLEANING = data.filter((item) => item.name === "Vệ sinh máy lạnh");
  console.log(data);

  const renderCustomizedLabel = (props) => {
    const { x, y, width, height, value } = props;
    const radius = 10;

    return (
      <g>
        <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
        <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
          {value.split(' ')[1]}
        </text>
      </g>
    );
  };

  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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
          <div className="row">
            <div className={styles.bg + " col-md-8"}>
              {/* <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={weekdays} />
                <YAxis dataKey="amount"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#8884d8" minPointSize={5}>
                  
                </Bar>
              </BarChart>
            </ResponsiveContainer> */}
            </div>
            <div className="col-md-4">

            </div>
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
    "https://swp391-production.up.railway.app/admin/amount",
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
