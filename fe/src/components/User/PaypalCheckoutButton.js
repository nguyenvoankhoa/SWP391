import React, { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
const PaypalCheckoutButton = (props) => {
  const [payFor, setPayFor] = useState(false);
  const [error, setError] = useState(null);
  const { product } = props;
  const handleApprove = (orderID) => {
    //call backend to fullfill order

    //if response is success
    setPayFor(true);
    // refresh user's account

    //if response is failure
  };
  if (payFor) {
    alert("Thank you for your purchase!");
  }
  if (error) {
    alert(error);
  }
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
