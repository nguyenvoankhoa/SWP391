import React from "react";
import { useNavigate } from "react-router-dom";

const CancelOrder = (props) => {
  const nav = useNavigate();
  const paymentConfirm = async () => {
    const token = sessionStorage.getItem("jwtToken");
    const id = {
      id: props.id,
    };
    const apiUrl = process.env.REACT_APP_API_URL;
    const res = await fetch(apiUrl + "admin/cancel-order", {
      method: "DELETE",
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
    <button
      type="button"
      className="btn btn-outline-danger"
      onClick={paymentConfirm}
    >
      Hủy đơn
    </button>
  );
};

export default CancelOrder;
