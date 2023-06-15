import React, { useState } from "react";
const payMethod = ["Tiền mặt", "PayPal"];
const PaymentPicker = (props) => {
  const [selectedPayment, setSelectedPayment] = useState("Tiền mặt");
  const paymentHandler = (method) => {
    setSelectedPayment(method);
    props.onAddPayment(method);
  };

  return (
    <div className="row col-md-12 hh-submit">
      {payMethod.map((method) => (
        <div
          className="col-md-5 d-flex justify-content-center hh-payment"
          key={method}
        >
          <button
            onClick={() => paymentHandler(method)}
            style={{
              color: selectedPayment === method ? "white" : "black",
              backgroundColor: selectedPayment === method ? "#397f77" : "",
              fontWeight: selectedPayment === method ? "600" : "normal",
            }}
          >
            {method}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PaymentPicker;
