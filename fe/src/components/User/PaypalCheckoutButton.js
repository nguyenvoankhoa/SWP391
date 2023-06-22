import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import { orderItemAction } from "../../redux/order";
import { useDispatch } from "react-redux";
const PaypalCheckoutButton = (props) => {
  const nav = useNavigate();
  const [payFor, setPayFor] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const bill = props.items;
  const handleApprove = async () => {
    setPayFor(true);
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
  if (error) {
    alert(error);
  }
  const product = {
    description: "CUSTOMER",
    price: 19,
  };
  return (
    <PayPalButtons
      style={{
        color: "silver",
        layout: "horizontal",
        height: 40,
        tagline: false,
        shape: "pill",
      }}
      onClick={(data, action) => {
        const hasAlreadyPay = false;
        if (hasAlreadyPay) {
          setError("You already pay");
          return action.reject();
        } else {
          return action.resolve();
        }
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: product.description,
              amount: {
                value: product.price,
              },
            },
          ],
        });
      }}
      onCancel={() => { }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        console.log("order", order);

        handleApprove();
      }}
      onError={(err) => {
        setError(err);
        console.error("PayPal Checkout onError", err);
      }}
    />
  );
};

export default PaypalCheckoutButton;
