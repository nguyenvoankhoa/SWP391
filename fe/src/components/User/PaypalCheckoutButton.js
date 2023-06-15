import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
const PaypalCheckoutButton = (props) => {
  const nav = useNavigate();
  const [payFor, setPayFor] = useState(false);
  const [error, setError] = useState(null);
  const bill = props.items;
  const handleApprove = async (orderID) => {
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
        height: 48,
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
      onCancel={() => {}}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        console.log("order", order);

        handleApprove(data.orderID);
      }}
      onError={(err) => {
        setError(err);
        console.error("PayPal Checkout onError", err);
      }}
    />
  );
};

export default PaypalCheckoutButton;
