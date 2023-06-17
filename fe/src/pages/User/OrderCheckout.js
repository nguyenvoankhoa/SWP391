import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Card from "../../UI/Card";
import { useSelector } from "react-redux";
import PaymentPicker from "../../components/User/PaymentPicker";
import PaypalCheckoutButton from "../../components/User/PaypalCheckoutButton";
const OrderCheckout = () => {
  const data = useLoaderData();
  const nav = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const cartItems = useSelector((state) => state.order.items);
  const [payment, setPayment] = useState("Tiền mặt");
  const [bill, setBill] = useState([]);
  const paymentHandler = (pay) => {
    setPayment(pay);
    if (pay === "PayPal") {
      let bill = [];
      cartItems.forEach((checkout) => {
        let item = {
          customerId: user.id,
          businessId: checkout.businessId,
          day: checkout.day,
          date: checkout.date,
          month: checkout.month,
          total: checkout.price,
          payment: pay,
          note: checkout.note,
          frequency: checkout.frequency,
          hour: checkout.hour,
        };
        bill.push(item);
      });
      setBill(bill);
    }
  };
  const createBillHandler = async () => {
    let bill = [];

    cartItems.forEach((checkout) => {
      let item = {
        customerId: user.id,
        businessId: checkout.businessId,
        day: checkout.day,
        date: checkout.date,
        month: checkout.month,
        total: checkout.price,
        payment: payment,
        note: checkout.note,
        frequency: checkout.frequency,
        hour: checkout.hour,
      };
      bill.push(item);
    });
    const token = sessionStorage.getItem("jwtToken");
    const res = await fetch(
      "https://swp391-production.up.railway.app/customer/order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bill),
      }
    );

    if (!res.ok) {
      throw new Error("Error fetching data");
    }
    const data = await res.json();
    console.log(data);
    nav("/user/order-completed");
  };
  return (
    <>
      <h1 style={{color: "white", marginTop: "2%"}}>Vị trí làm việc</h1>
      <Card>
        <h3>Tòa : {data.departmentNumber}</h3>
        <h5>Phòng: {data.roomNumber}</h5>
        <p>Chi tiết địa chỉ :</p>
        <p>Căn hộ</p>
        <p>
          {data.roomNumber}, {data.departmentNumber}, Số 512 đường Nguyễn Xiển,
          Phường Long Thạnh Mỹ, Quận 9, TP. Hồ Chí Minh (TP. Thủ Đức mới)
        </p>
      </Card>
      <h1>Thông tin công việc</h1>
      {cartItems.length === 0 ? (
        <p>Chưa có đơn hàng</p>
      ) : (
        cartItems.map((item) => (
          <Card key={item.businessId}>
            <h3>
              Ngày làm việc: {item.day}, {item.date}/{item.month}/2023
            </h3>
            <h5>Thời gian: {item.hour}</h5>
            <p>Lặp lại: {item.frequency}</p>
            <p>Chi tiết công việc :</p>
            <p>
              <strong>
                {item.name} - {item.type}
              </strong>
            </p>
            <p>Ghi chú: {item.note}</p>
            <p>Giá: {item.price}</p>
          </Card>
        ))
      )}
      <h1>Phương thức thanh toán</h1>
      <PaymentPicker onAddPayment={paymentHandler} />
      {payment === "Tiền mặt" ? (
        <div className="col-md-5 d-flex justify-content-center hh-payment">
          <button onClick={createBillHandler}>Đăng việc</button>
        </div>
      ) : (
        <PaypalCheckoutButton items={bill} />
      )}
    </>
  );
};

export default OrderCheckout;
