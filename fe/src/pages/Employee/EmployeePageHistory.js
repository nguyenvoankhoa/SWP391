import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../UI/Card";
import Title from "../../components/Title";
const EmployeePage = () => {
  const data = useLoaderData();
  return (
    <>
      <div className="bg user-navbar" />
      <Title
        title="LỊCH SỬ"
        color="white"
        fontSize="35px"
        fontWeight="700"
        padding="2% 0 0 13vw"
      />
      <div className="table-emp table-responsive ">
        <Card>
          <table
            className="table table-bordered table-striped text-center"
            style={{ fontSize: "18px", fontWeight: "400" }}
          >
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Công việc</th>
                <th scope="col">Thời gian</th>
                <th scope="col">Số toà </th>
                <th scope="col">Số phòng</th>
                <th scope="col">Thanh toán</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="col">1</th>
                <th scope="col">Vệ sinh máy lạnh</th>
                <th scope="col">19h30, ngày 20/11/1999</th>
                <th scope="col">S333 </th>
                <th scope="col">333</th>
                <th scope="col">PayPal</th>

              </tr>
              <tr>
                <th scope="col">2</th>
                <th scope="col">Vệ sinh Sofa</th>
                <th scope="col">15h30, ngày 20/11/1999</th>
                <th scope="col">S666 </th>
                <th scope="col">666</th>
                <th scope="col">Tiền mặt</th>
              </tr>
            </tbody>
          </table>
        </Card>
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
