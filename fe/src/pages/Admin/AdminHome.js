import React from "react";
import Title from "../../components/Title";
import styles from "./AdminHome.module.css";
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from "recharts";
import {Bar, PieChart, Pie} from "recharts";

const AdminHome = () => {

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
