import Card from "../../UI/Card";
import "./EditCus.css";
import Title from "../../components/Title";
import { useLoaderData } from "react-router-dom";
import EditOrderForm from "../../components/Admin/EditOrderForm";
import React, { useState } from "react";
const OrderService = () => {
  const data = useLoaderData();
  const [workType, setWorkType] = useState("");
  const [hour, setHour] = useState("");
  const assignEmployee = (type, hour) => {
    setWorkType(type);
    setHour(hour);
  };
  console.log(data);
  return (
    <>
      <div className="mb-5" />
      <Title title="ĐƠN HÀNG" color="white" fontSize="35px" fontWeight="700" />
      <div className="row justify-content-center">
        <div className="col-11">
          <Card>
            <div class="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
              <table className="table table-bordered table-striped">
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
                    <th scope="col">Hoàn thành</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((bill) => (
                    <tr key={bill.id}>
                      <th scope="row">{bill.id}</th>
                      <td>{bill.business.name}</td>
                      <td>{bill.quantity}</td>
                      <td>
                        {bill.date}, {bill.day}/{bill.month}
                      </td>
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
                            onClick={() => assignEmployee(bill.business.name)}
                          >
                            Tìm
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
                          <button
                            type="button"
                            className="btn btn-outline-success"
                          >
                            Xác nhận
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
                          <div className="d-flex h-100">
                            <button
                              type="button"
                              className="btn btn-outline-success"
                            >
                              Xác nhận
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                            >
                              Hủy đơn
                            </button>
                          </div>
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
      <EditOrderForm workType={workType} hour={hour} />
    </>
  );
};

export default OrderService;

export async function orderLoader() {
  const token = JSON.parse(sessionStorage.getItem("jwtToken"));
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
