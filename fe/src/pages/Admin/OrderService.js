import Card from "../../UI/Card";
import "./EditCus.css";
import Title from "../../components/Title";
import { useLoaderData } from "react-router-dom";
import EditOrderForm from "../../components/Admin/EditOrderForm";
import React, { useState } from "react";
import ConfirmPayment from "../../components/Admin/ConfirmPayment";
import ConfirmComplete from "../../components/Admin/ConfirmComplete";
import CancelOrder from "../../components/Admin/CancelOrder";
const OrderService = () => {
  const data = useLoaderData();
  const [workType, setWorkType] = useState("");
  const [billId, setBillId] = useState("");
  const assignEmployee = (type, id) => {
    setWorkType(type);
    setBillId(id);
  };
  return (
    <>
      <div className="mb-5" />
      <Title title="ĐƠN HÀNG" color="white" fontSize="35px" fontWeight="700" />
      <div className="row justify-content-center">
        <div className="col-11">
          <Card>
            <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Công việc</th>
                    <th scope="col">Loại</th>
                    <th scope="col">Ngày làm</th>
                    <th scope="col">Giờ làm</th>
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
                      <td>{bill.business.type}</td>
                      <td>
                        {bill.day}, {bill.date}/{bill.month}
                      </td>
                      <td>{bill.hour}</td>
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
                            onClick={() =>
                              assignEmployee(bill.business.name, bill.id)
                            }
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
                          <ConfirmPayment id={bill.id} />
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
                            <ConfirmComplete id={bill.id} />
                            <CancelOrder id={bill.id} />
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
      <EditOrderForm workType={workType} billId={billId} />
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
