import React, { useState } from "react";
import Card from "../../UI/Card";
import "./EditCus.css";
import Title from "../../components/Title";
import { useLoaderData } from "react-router-dom";
import EmployeeAssign from "../../components/Admin/EmployeeAssign";
const OrderService = () => {
  const data = useLoaderData();
  const [business, setBusiness] = useState({});
  const assignEmployeeHandler = (bill) => {
    setBusiness(bill.business);
  };
  return (
    <>
      <div className="bg user-navbar d-flex" />
      <Title
        title="ĐƠN HÀNG"
        color="white"
        fontSize="35px"
        fontWeight="700"
        padding="2% 0 0 13vw"
      />
      <div className="table-ord table-responsive ">
        <Card>
          <table
            className="table table-bordered table-striped text-center"
            style={{ fontSize: "18px", fontWeight: "400" }}
          >
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Công việc</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Ngày làm</th>
                <th scope="col">Khách hàng</th>
                <th scope="col">Nhân viên</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Giao dịch</th>
                <th scope="col">Tổng cộng</th>
                <th scope="col">Thanh toán</th>
                <th scope="col">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {data.map((bill) => (
                <tr key={bill.id}>
                  <th scope="row">{bill.id}</th>
                  <td>{bill.business.name}</td>
                  <td>{bill.quantity}</td>
                  <td>{bill.timeBooking}</td>
                  <td>{bill.customer.name}</td>
                  {bill.employee ? (
                    <td>{bill.employee.name}</td>
                  ) : (
                    <td>
                      <button
                        type="button"
                        className="btn btn-outline-success"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={() => assignEmployeeHandler(bill)}
                      >
                        Đăng ký nhân viên
                      </button>
                    </td>
                  )}
                  <td>{bill.customer.phone}</td>
                  <td>{bill.payment}</td>
                  <td>{bill.total}</td>
                  {bill.payStatus ? (
                    <td>Đã thanh toán</td>
                  ) : (
                    <td>
                      <button type="button" className="btn btn-outline-success">
                        Xác nhận thanh toán
                      </button>
                    </td>
                  )}

                  {bill.completeStatus ? (
                    <td>
                      <button
                        type="button"
                        className="btn btn-outline-success"
                        disabled
                      >
                        Đã hoàn tất
                      </button>
                    </td>
                  ) : (
                    <td>
                      <button type="button" className="btn btn-outline-success">
                        Xác nhận
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <EmployeeAssign business={business} />
      </div>
    </>
  );
};

export default OrderService;
export async function orderLoader() {
  const token = sessionStorage.getItem("jwtToken");
  const res = await fetch(
    "https://swp391-production.up.railway.app/admin/orders",
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
