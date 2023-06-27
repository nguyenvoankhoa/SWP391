import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../UI/Card";
import Title from "../../components/Title";
const EmployeePage = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <Title
        title="LỊCH SỬ"
        color="white"
        fontSize="35px"
        fontWeight="700"
        padding="2% 0 0 0"
      />
      <div className="row justify-content-center mt-5">
        <div className="col-10">
          <div className="table-responsive ">
            <Card>
              <table
                className="table table-bordered table-striped text-center"
                style={{ fontSize: "18px", fontWeight: "400" }}
              >
                <thead>
                  <tr>
                    <th scope="col">Công việc</th>
                    <th scope="col">Loại</th>
                    <th scope="col">Thời gian</th>
                    <th scope="col">Ngày</th>
                    <th scope="col">Tổng cộng</th>
                    <th scope="col">SĐT khách hàng</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((bill) => (
                    <tr key={Math.random()}>
                      <th scope="col">{bill.business.name}</th>
                      <th scope="col">{bill.business.type}</th>
                      <th scope="col">{bill.hour}</th>
                      <th scope="col">
                        {bill.date}/{bill.month}
                      </th>
                      <th scope="col">{bill.total}</th>
                      <th scope="col">{bill.customer.phone}</th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeePage;
export async function employeeHistoryLoader() {
  const token = sessionStorage.getItem("jwtToken");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const request = {
    id: user.id,
  };
  const apiUrl = process.env.REACT_APP_API_URL;
  const res = await fetch(apiUrl + "employee/history", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(request),
  });
  if (!res.ok) {
    throw new Error("error");
  } else {
    const data = await res.json();
    return data;
  }
}
