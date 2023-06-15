import React from "react";
import { useNavigate } from "react-router-dom";

const ConfirmComplete = (props) => {
  const nav = useNavigate();
  const paymentConfirm = async () => {
    const token = sessionStorage.getItem("jwtToken");
    const id = {
      id: props.id,
    };
    const res = await fetch(
      "https://swp391-production.up.railway.app/admin/confirm",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(id),
      }
    );

    if (!res.ok) {
      throw new Error("Error fetching data");
    }
    alert("Edit success");
    nav("/admin/order-service");
  };
  return (
    <button
      type="button"
      className="btn btn-outline-success"
      onClick={paymentConfirm}
    >
      Xác nhận
    </button>
  );
};

export default ConfirmComplete;
