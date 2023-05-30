import React from "react";
import "./OrderSumation.css";
import Title from "../../components/Title";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const OrderSumation = () => {
  const order = useSelector((state) => state.order.items);
  const date = useSelector((state) => state.order.date);
  const payment = useSelector((state) => state.order.payment);
  const totalAmount = useSelector((state) => state.order.totalAmount);
  console.log(date);
  console.log(order);
  return (
    <>
      <div
        className="container os-container"
        style={{
          paddingLeft: "21.5vw",
          paddingRight: "0",
          margin: "0",
          height: "100vh",
          marginLeft: "4vw",
        }}
      >
        <div
          className="bg"
          style={{
            width: "100vw",
            height: "53vh",
            position: "absolute",
            top: "0",
            left: "0",
            backgroundColor: "#397F77",
            zIndex: "-1",
          }}
        />
        <Title
          title="HOÀN TẤT ĐƠN HÀNG"
          color="white"
          fontSize="35px"
          fontWeight="1000"
          padding="5% 0 0  0"
        />
        <div className="row os-content flex-column justify-content-center">
          <p className="col-md-12">Anh/chị : Thiên An</p>
          <div className="row">
            <p className="col-md-6">Số toà : S303 </p>
            <p className="col-md-6">Số phòng : S999 </p>
          </div>

          {order.map((order) => (
            <div className="row">
              <p className="col-md-6">Đơn hàng : {order.name}</p>
              <p className="col-md-6">
                Loại : {order.detail}/{order.unit}({order.type})
              </p>
              <p className="col-md-6">Thời gian làm việc : {order.time}</p>
              {order.frequence && (
                <p className="col-md-6">Làm việc định kỳ : {order.frequence}</p>
              )}
            </div>
          ))}
          <p className="col-md-12">Ngày làm việc : {date}</p>
          <p className="col-md-12">Số điện thoại : 23456789JQKA </p>
          <div className="row">
            <p className="col-md-6">Phương thức thanh toán : {payment}</p>
            <p className="col-md-6">Tổng cộng : {totalAmount}</p>
          </div>

          <div className="row col-md-12 d-flex justify-content-center nav-btn">
            <button className="col-md-2 accept">
              <Link to="/user/order-completed">Xác nhận</Link>
            </button>
            <button className="col-md-2">
              <Link to="..">Quay lại</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSumation;
