import React from "react";
import { useLoaderData } from "react-router-dom";

const EmployeePage = () => {
  const data = useLoaderData();
  return (
    <>
      <div className="container-fluid fabric-container">
        <h1 className="text-center">LỊCH LÀM VIỆC</h1>
      </div>
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Công việc</th>
              <th>Thời gian</th>
              <th>Số toà</th>
              <th>Số phòng</th>
              <th>Số điện thoại</th>
              <th>Số lượng</th>
              <th>Thanh toán</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {data.map((work) => (
              <tr key={Math.random()}>
                <th scope="row">{work.workType}</th>
                <td>{work.time}</td>
                <td>{work.departmentNumber}</td>
                <td>{work.roomNumber}</td>
                <td>{work.customerPhone}</td>
                <td>{work.quantity}</td>
                {work.payStatus ? (
                  <td>Đã thanh toán</td>
                ) : (
                  <td>Chưa thanh toán</td>
                )}
                {work.completeStatus ? <td>Đã làm</td> : <td>Chưa làm</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeePage;
export async function employeePageLoader() {
  const token = sessionStorage.getItem("jwtToken");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const request = {
    id: user.id,
  };
  const res = await fetch(
    "https://swp391-production.up.railway.app/employee/info",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(request),
    }
  );
  if (!res.ok) {
    throw new Error("error");
  } else {
    const data = await res.json();
    return data;
  }
}
