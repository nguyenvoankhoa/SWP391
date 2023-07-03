import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Title from "../../components/Title";
import styles from "./AdminHome.module.css";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { Bar, PieChart, Pie, Cell } from "recharts";
import { Autocomplete, TextField } from "@mui/material";

const COLORS = ["#79B7D4", "#B9FAF5", "#AEEBDC", "#FF8042"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const CustomYAxisTick = (props) => {
  const { x, y, payload } = props;
  const value = payload.value;

  if (Number.isInteger(value)) {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666">
          {value}
        </text>
      </g>
    );
  }

  return null;
};

const AdminHome = () => {
  const data = useLoaderData();
  const [pieChartData, setPieChartData] = useState([]);

  var serviceList = new Set();
  {
    data.forEach((service) => serviceList.add(service.name));
    serviceList = Array.from(serviceList);
  }
  const [selectedField, setSelectedField] = useState(serviceList[0]);
  const selectedData = data.filter((item) => item.name === selectedField);

  const handleSelect = (event, service) => {
    setSelectedField(service);
  };

  function formatXAxis(value) {
    if (value === 0) return "No";
    if (value === 1) return "Yes";
    return value;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const token = sessionStorage.getItem("jwtToken");
        const apiUrl = process.env.REACT_APP_API_URL;
        const res = await fetch(apiUrl + "admin/amount", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const dataPie = await res.json();
        let keyArr = Object.keys(dataPie);
        let valueArr = Object.values(dataPie);
        for (let i = 0; i < valueArr.length; i++) {
          let tmpObj = { service: keyArr[i], quantity: valueArr[i] };
          setPieChartData((prevPieChart) => [...prevPieChart, tmpObj]);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const dataMap = new Map();
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  daysOfWeek.forEach((day) => {
    dataMap.set(day, { day, amount: 0 });
  });
  selectedData.forEach((service) => {
    if (dataMap.has(service.day)) {
      dataMap.set(service.day, { day: service.day, amount: service.amount });
    }
  });
  const chartData = Array.from(dataMap.values());
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
          color="#397F77"
          fontSize="35px"
          fontWeight="2000"
          padding="1% 0 1% 0"
        />
        <div className="container">
          <div className={styles.content + " row"}>
            <div className={styles.bg + " col-md-7"}>
              <Autocomplete
                disablePortal
                options={serviceList}
                sx={{
                  width: 300,
                  marginBottom: "2%",
                  marginLeft: "5%",
                }}
                renderInput={(params) => (
                  <TextField {...params} label="Dịch vụ" />
                )}
                onChange={handleSelect}
              />
              <ResponsiveContainer width="95%" height="80%">
                <BarChart width={500} height={200} data={chartData}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis dataKey="amount" tick={<CustomYAxisTick />} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="amount" fill="#8884d8" barSize={25} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className={styles.bg + " col-md-4"}>
              <h5 className="text-center">Tổng số đơn hàng</h5>
              <PieChart width={370} height={450}>
                <Pie
                  data={pieChartData}
                  dataKey="quantity"
                  nameKey="service"
                  cx="50%"
                  cy="50%"
                  outerRadius={150}
                  fill="#8884d8"
                  labelLine={false}
                  label={renderCustomizedLabel}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend style={{}} />
              </PieChart>
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
  const apiUrl = process.env.REACT_APP_API_URL;
  const res = await fetch(apiUrl + "admin/bill-by-week", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error("error");
  } else {
    const data = await res.json();
    return data;
  }
}
