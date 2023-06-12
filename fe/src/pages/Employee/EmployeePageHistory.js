import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../UI/Card";
import Title from "../../components/Title";
const EmployeePage = () => {
  const data = useLoaderData();
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
                    <th scope="col">Thời gian</th>
                    <th scope="col">Số toà </th>
                    <th scope="col">Số phòng</th>
                    <th scope="col">Thanh toán</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Tổng cộng</th>
                    <th scope="col">SĐT khách hàng</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((bill) => (
                    <tr key={Math.random()}>
                      <th scope="col">{bill.workType}</th>
                      <th scope="col">{bill.time}</th>
                      <th scope="col">{bill.departmentNumber}</th>
                      <th scope="col">{bill.roomNumber}</th>
                      {bill.payStatus ? (
                        <th>Đã thanh toán</th>
                      ) : (
                        <th>Chưa thanh toán</th>
                      )}
                      {bill.completedStatus ? (
                        <th>Đã xong</th>
                      ) : (
                        <th>Chưa xong</th>
                      )}

                      <th scope="col">{bill.quantity}</th>
                      <th scope="col">{bill.total}</th>
                      <th scope="col">{bill.customerPhone}</th>
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
export async function employeePageLoader() {
  const token = JSON.parse(sessionStorage.getItem("jwtToken"));
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
