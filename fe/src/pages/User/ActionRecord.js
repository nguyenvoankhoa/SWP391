import React from "react";
import Title from "../../components/Title";
import "./ActionRecord.css";
import { useLoaderData } from "react-router-dom";
import Card from "../../UI/Card";
const ActionRecord = () => {
  const data = useLoaderData();

  return (
    <>
      <div className="bg user-navbar" />
      <div
        className="container"
        style={{
          paddingLeft: "21.5vw",
          paddingRight: "0",
          margin: "0",
          height: "100vh",
          marginLeft: "4vw",
        }}
      >
        <Title
          title="HOẠT ĐỘNG"
          color="white"
          fontSize="35px"
          fontWeight="1000"
          padding="3% 0 0  0"
        />
        <div className="row d-flex justify-content-center ar-content">
          <div className="row col-md-12 ar-nav">
            <button className="col-md-5">Dịch vụ chờ làm</button>
            <button className="col-md-5">Dịch vụ đã hoàn thành</button>
          </div>
          <div className="col-md-12 ar-list p-0">
            <table
              className="table table-bordered table-striped text-center"
              style={{ fontSize: "18px", fontWeight: "400" }}
            >
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Dịch vụ</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Ngày</th>
                  <th scope="col">Tên nhân viên</th>
                  <th scope="col">Giao dịch</th>
                  <th scope="col">Thanh toán</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col">Tổng tiền</th>
                </tr>
              </thead>
              <tbody>
                {data.map((service) => (
                  <tr key={service.id}>
                    <th scope="row">{service.id}</th>
                    <td>{service.business.name}</td>
                    <td>{service.quantity}</td>
                    <td>{service.timeBooking}</td>
                    {service.employee ? (
                      <td>{service.employee.name}</td>
                    ) : (
                      <td>Đang chờ xử lý</td>
                    )}
                    <td>{service.payment}</td>
                    {service.payStatus ? (
                      <td>Đã thanh toán</td>
                    ) : (
                      <td>Chưa thanh toán</td>
                    )}
                    {service.completeStatus ? (
                      <td>Đã hoàn thành</td>
                    ) : (
                      <td>Chưa hoàn thành</td>
                    )}
                    <td>{service.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActionRecord;

export async function billLoader() {
  const token = sessionStorage.getItem("jwtToken");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const request = {
    id: user.id,
  };
  const res = await fetch(
    "https://swp391-production.up.railway.app/customer/orders",
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
