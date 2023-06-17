import React from "react";
import Title from "../../components/Title";
import { Link } from "react-router-dom";

const OrderCompleted = () => {
  return (
    <>
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
      <div
        className="container os-container"
        style={{
          height: "auto",
          justifyContent: "center",
          display: "flex", 
          marginTop: "6%"
        }}
      >
        <div
          className="row d-flex justify-content-center"
          style={{
            backgroundColor: "white",
            marginTop: "2%",
            height: "70vh",
            boxShadow: "0 10px 10px #65928a88",
            borderRadius: "5px",
            padding: "1%",
            width: "80%",

          }}
        >
          <img
            src="/assets/images/order-completed.svg"
            alt="order-completed"
            style={{
              width: "17vw",
              height: "17vw",
            }}
          ></img>
          <Title
            title="ĐƠN HÀNG ĐÃ HOÀN TẤT"
            color="black"
            fontSize="35px"
            fontWeight="1000"
          />

          <h5
            className="text-center"
            style={{
              fontSize: "20px",
            }}
          >
            CẢM ƠN BẠN ĐÃ SỬ DỤNG DỊCH VỤ CỦA CHÚNG TÔI
          </h5>
          <button
            style={{
              width: "10vw",
              borderRadius: "5px",
              backgroundColor: "#397F77",
              padding: "0",
              border: "none",
            }}
          >
            <Link
              to="/user"
              style={{
                width: "100%",
                height: "100%",
                color: "white",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Trang chủ
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderCompleted;
