import React from "react";
import { useNavigate } from "react-router-dom";
import { orderItemAction } from "../../redux/order";
import { useDispatch } from "react-redux";
const CashCheckoutButton = (props) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const bill = props.items;
  const handlePayment = async () => {
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
    dispatch(orderItemAction.removeAllItems());
    nav("/user/order-completed");
  };
  return <button onClick={handlePayment}>Checkout</button>;
};

export default CashCheckoutButton;
