import React, { useState } from "react";

const PaymentPicker = (props) => {
  const [selectedPayment, setSelectedPayment] = useState("Tiền mặt");
  const paymentHandler = (method) => {
    setSelectedPayment(method);
    props.onAddPayment(method);
  };
  return (
    <div className="row hh-submit">
      {React.state.payMethod.map((method) => (
        <div
          className="col-md-5 d-flex justify-content-center hh-payment"
          key={method}
        >
          <button onClick={() => paymentHandler(method)}>
            Thanh toán bằng {method}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PaymentPicker;
