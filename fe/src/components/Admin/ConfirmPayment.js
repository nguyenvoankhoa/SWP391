import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmPayment = (props) => {
  const nav = useNavigate();
  const paymentConfirm = async () => {
    const token = sessionStorage.getItem("jwtToken");
    const id = {
      id: props.id,
    };
    const apiUrl = process.env.REACT_APP_API_URL;
    const res = await fetch(apiUrl + "admin/confirm-payment", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(id),
    });

    if (!res.ok) {
      throw new Error("Error fetching data");
    }
    alert("Edit success");
    nav("/admin/order-service");
  };
  return (
    <Button
    href="#text-buttons"
    onClick={paymentConfirm}
    style={{ fontSize: "12px"  }}
    >
    Xác nhận
    </Button>
  );
};

export default ConfirmPayment;
